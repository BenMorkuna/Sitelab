'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#43ffae]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fadeIn">
            Have a project in mind? Let's discuss how we can bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">Let's Talk</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                We're here to answer any questions you may have about our services.
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                    <a href="mailto:info@sitelab.lt" className="text-[#13aff0] hover:text-[#43ffae] transition-colors">
                      info@sitelab.lt
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#43ffae] to-[#13aff0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                    <a href="tel:+37060267098" className="text-[#13aff0] hover:text-[#43ffae] transition-colors">
                      +370 602 67098
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-gray-400">Mon - Fri: 9:00 - 18:00</p>
                    <p className="text-gray-400">Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 pt-10 border-t border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Why Clients Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 text-[#43ffae] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fast Response Time
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 text-[#43ffae] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Transparent Pricing
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 text-[#43ffae] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Expert Developers
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 text-[#43ffae] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    100% Satisfaction Guarantee
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Free Quote</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none"
                      >
                        <option value="">Select budget</option>
                        <option value="under-500">Under €500</option>
                        <option value="500-1000">€500 - €1,000</option>
                        <option value="1000-2500">€1,000 - €2,500</option>
                        <option value="2500-5000">€2,500 - €5,000</option>
                        <option value="over-5000">Over €5,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="website-development">Website Development</option>
                      <option value="ecommerce">E-Commerce Solutions</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="website-redesign">Website Redesign</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${
                      isSubmitted
                        ? 'bg-gradient-to-r from-[#43ffae] to-[#13aff0]'
                        : 'bg-gradient-to-r from-[#13aff0] to-[#43ffae] hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#13aff0]/40'
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Your Message...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent Successfully!
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
