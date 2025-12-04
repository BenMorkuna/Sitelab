import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

// In-memory store for rate limiting (use Redis in production for better scaling)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitStore.entries()) {
    if (now > data.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, 60 * 60 * 1000);

function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // No record or expired - allow and create new record
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    // Rate limit exceeded
    return { allowed: false, resetTime: record.resetTime };
  }

  // Increment count
  record.count++;
  return { allowed: true };
}

// Validation functions
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function isValidPhone(phone: string): boolean {
  // Allow international format with optional + and spaces/dashes
  const phoneRegex = /^\+?[\d\s\-()]{8,20}$/;
  return phoneRegex.test(phone);
}

function containsSuspiciousContent(text: string): boolean {
  // Check for common spam patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /onclick/i,
    /onerror/i,
    /<iframe/i,
    /viagra|cialis|casino|lottery/i,
    /\[url=/i,
    /\[link=/i,
  ];

  return suspiciousPatterns.some(pattern => pattern.test(text));
}

function sanitizeInput(input: string): string {
  // Basic sanitization - remove HTML tags and trim
  return input.replace(/<[^>]*>/g, '').trim();
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check rate limit
    const rateLimitCheck = checkRateLimit(ip);
    if (!rateLimitCheck.allowed) {
      const resetTime = rateLimitCheck.resetTime || Date.now();
      const minutesRemaining = Math.ceil((resetTime - Date.now()) / 60000);

      console.log(`Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        {
          success: false,
          message: `Too many requests. Please try again in ${minutesRemaining} minute${minutesRemaining !== 1 ? 's' : ''}.`
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    const {
      service,
      name,
      email,
      phone,
      company,
      message,
      website, // Honeypot field
    } = body;

    // Honeypot check - if filled, it's a bot
    if (website) {
      console.log(`Bot detected via honeypot from IP: ${ip}`);
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid submission detected'
        },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill in all required fields'
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      console.log(`Invalid email format from IP: ${ip}`);
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide a valid email address'
        },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!isValidPhone(phone)) {
      console.log(`Invalid phone format from IP: ${ip}`);
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide a valid phone number'
        },
        { status: 400 }
      );
    }

    // Check for suspicious content in all text fields
    const textFields = [name, email, phone, company, message].filter(Boolean).join(' ');
    if (containsSuspiciousContent(textFields)) {
      console.log(`Suspicious content detected from IP: ${ip}`);
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid content detected in submission'
        },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedCompany = company ? sanitizeInput(company) : '';
    const sanitizedMessage = message ? sanitizeInput(message) : '';

    // Check if Resend is configured
    if (!resend) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured. Please contact us directly at info@sitelab.lt'
        },
        { status: 503 }
      );
    }

    // Format service type for display
    const serviceLabels: Record<string, string> = {
      'geo': 'GEO Services',
      'seo': 'SEO Services',
      'webdev': 'Web Development',
      'ecommerce': 'E-commerce Development'
    };

    const serviceDisplay = serviceLabels[service] || service;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'SiteLab Contact Form <noreply@sitelab.lt>',
      to: ['info@sitelab.lt'],
      replyTo: email,
      subject: `🎯 New Contact Form: ${sanitizedName} - ${serviceDisplay}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #13aff0 0%, #43ffae 100%);
      color: white;
      padding: 30px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #f9f9f9;
      padding: 30px;
      border: 1px solid #e0e0e0;
    }
    .section {
      background: white;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      border-left: 4px solid #13aff0;
    }
    .section h2 {
      margin-top: 0;
      color: #13aff0;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .field {
      margin-bottom: 15px;
    }
    .field-label {
      font-weight: 600;
      color: #666;
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    .field-value {
      color: #333;
      font-size: 15px;
    }
    .message-box {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 5px;
      border-left: 3px solid #43ffae;
      white-space: pre-wrap;
    }
    .footer {
      background: #1b1b1b;
      color: #999;
      padding: 20px;
      text-align: center;
      border-radius: 0 0 10px 10px;
      font-size: 12px;
    }
    .badge {
      display: inline-block;
      background: linear-gradient(135deg, #13aff0 0%, #43ffae 100%);
      color: white;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      margin-top: 5px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎯 New Contact Form Submission</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">SiteLab Website</p>
  </div>

  <div class="content">
    <div class="section">
      <h2>📋 Service Requested</h2>
      <div class="field">
        <div class="field-label">Service</div>
        <div class="field-value">${serviceDisplay} <span class="badge">PRIMARY</span></div>
      </div>
    </div>

    <div class="section">
      <h2>👤 Contact Information</h2>
      <div class="field">
        <div class="field-label">Name</div>
        <div class="field-value">${sanitizedName}</div>
      </div>
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${email}" style="color: #13aff0; text-decoration: none;">${email}</a></div>
      </div>
      <div class="field">
        <div class="field-label">Phone</div>
        <div class="field-value"><a href="tel:${phone}" style="color: #13aff0; text-decoration: none;">${phone}</a></div>
      </div>
      ${sanitizedCompany ? `
      <div class="field">
        <div class="field-label">Company</div>
        <div class="field-value">${sanitizedCompany}</div>
      </div>
      ` : ''}
    </div>

    ${sanitizedMessage ? `
    <div class="section">
      <h2>💬 Message</h2>
      <div class="message-box">${sanitizedMessage}</div>
    </div>
    ` : ''}

    <div class="section" style="border-left-color: #43ffae;">
      <h2>⏰ Submission Time</h2>
      <div class="field-value">${new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      })}</div>
    </div>
  </div>

  <div class="footer">
    <p style="margin: 0;">This email was sent from the SiteLab contact form</p>
    <p style="margin: 5px 0 0 0; opacity: 0.7;">Reply directly to this email to respond to ${sanitizedName}</p>
  </div>
</body>
</html>
      `,
      text: `
New Contact Form Submission from SiteLab Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SERVICE REQUESTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Service: ${serviceDisplay}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${sanitizedName}
Email: ${email}
Phone: ${phone}
Company: ${sanitizedCompany || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${sanitizedMessage || 'No additional message provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted: ${new Date().toLocaleString()}
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        {
          success: false,
          message: 'There was an error sending your message. Please try again or email us directly at info@sitelab.lt'
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.',
      emailId: data?.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'There was an error sending your message. Please try again or email us directly at info@sitelab.lt'
      },
      { status: 500 }
    );
  }
}
