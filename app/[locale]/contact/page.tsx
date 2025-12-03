'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MultiStepContactForm from '../components/MultiStepContactForm';

export default function Contact() {

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
                Tell us about your <Link href="/en/geo" className="text-[#43ffae] hover:text-[#13aff0] transition-colors font-semibold underline decoration-[#43ffae]/30 hover:decoration-[#13aff0]">GEO</Link>, <Link href="/en/seo" className="text-[#43ffae] hover:text-[#13aff0] transition-colors font-semibold underline decoration-[#43ffae]/30 hover:decoration-[#13aff0]">SEO</Link>, <Link href="/en/web-development" className="text-[#43ffae] hover:text-[#13aff0] transition-colors font-semibold underline decoration-[#43ffae]/30 hover:decoration-[#13aff0]">web development</Link>, or <Link href="/en/ecommerce" className="text-[#43ffae] hover:text-[#13aff0] transition-colors font-semibold underline decoration-[#43ffae]/30 hover:decoration-[#13aff0]">e-commerce</Link> project.
                Fill out the form and we'll get back to you within 24 hours with a tailored solution.
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
              <MultiStepContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
