import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      service,
      name,
      email,
      phone,
      company,
      message,
    } = body;

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
      subject: `🎯 New Contact Form: ${name} - ${serviceDisplay}`,
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
        <div class="field-value">${name}</div>
      </div>
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${email}" style="color: #13aff0; text-decoration: none;">${email}</a></div>
      </div>
      <div class="field">
        <div class="field-label">Phone</div>
        <div class="field-value"><a href="tel:${phone}" style="color: #13aff0; text-decoration: none;">${phone}</a></div>
      </div>
      ${company ? `
      <div class="field">
        <div class="field-label">Company</div>
        <div class="field-value">${company}</div>
      </div>
      ` : ''}
    </div>

    ${message ? `
    <div class="section">
      <h2>💬 Message</h2>
      <div class="message-box">${message}</div>
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
    <p style="margin: 5px 0 0 0; opacity: 0.7;">Reply directly to this email to respond to ${name}</p>
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

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${message || 'No additional message provided'}

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
