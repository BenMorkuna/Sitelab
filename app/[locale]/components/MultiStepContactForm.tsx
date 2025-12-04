'use client';

import { useState, useEffect } from 'react';

interface FormData {
  service: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  website: string; // Honeypot field
}

// Declare grecaptcha type
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function MultiStepContactForm() {
  const [formData, setFormData] = useState<FormData>({
    service: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    website: '', // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    { value: 'geo', label: 'GEO Services' },
    { value: 'seo', label: 'SEO Services' },
    { value: 'webdev', label: 'Web Development' },
    { value: 'ecommerce', label: 'E-commerce Development' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.website) {
      console.log('Bot detected via honeypot');
      // Silently reject without showing error to avoid detection
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
      return;
    }

    if (!formData.service) {
      alert('Please select a service');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get reCAPTCHA token
      let recaptchaToken = '';
      if (recaptchaLoaded && typeof window !== 'undefined' && window.grecaptcha) {
        try {
          await window.grecaptcha.ready(async () => {
            recaptchaToken = await window.grecaptcha.execute(
              process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
              { action: 'contact_form' }
            );
          });
        } catch (error) {
          console.error('reCAPTCHA error:', error);
          // Continue without reCAPTCHA if it fails
        }
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again or email us directly at info@sitelab.lt');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-[#43ffae] to-[#13aff0] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
        <p className="text-gray-400 mb-6">
          We've received your project details and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              service: '',
              name: '',
              email: '',
              phone: '',
              company: '',
              message: '',
              website: '',
            });
          }}
          className="text-[#13aff0] hover:text-[#43ffae] transition-colors font-medium"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none"
                  placeholder="+370 123 45678"
                />
              </div>
            </div>

            {/* Service Selection Dropdown */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-2">
                Select Service *
              </label>
              <select
                id="service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none cursor-pointer"
              >
                <option value="" disabled>Choose a service...</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none"
                placeholder="Your Company (optional)"
              />
            </div>

            {/* Honeypot field - hidden from users but visible to bots */}
            <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true" tabIndex={-1}>
              <label htmlFor="website">Website (do not fill)</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                Additional Details (Optional)
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none resize-none"
                placeholder="Any specific requirements or questions..."
              />
            </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-[#13aff0] to-[#43ffae] hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#13aff0]/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          We typically respond within 24 hours. Your information is kept confidential.
        </p>
      </form>
    </div>
  );
}
