'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Footer() {
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] text-gray-400 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="inline-block mb-4">
              <div className="flex items-center space-x-3">
                {/* Logo */}
                <div className="w-12 h-12 rounded-full border-2 border-[#13aff0] flex items-center justify-center bg-[#1b1b1b]">
                  <span className="text-2xl font-bold text-[#43ffae]">S</span>
                </div>
                <span className="text-2xl font-bold text-white">SiteLab</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Professional web development and digital marketing solutions optimized for both traditional and AI search.
            </p>
            <div className="flex items-center space-x-1 text-sm">
              <span className="text-[#43ffae] font-semibold">GEO</span>
              <span className="text-gray-500">•</span>
              <span className="text-[#13aff0] font-semibold">AI Search</span>
              <span className="text-gray-500">•</span>
              <span className="text-[#43ffae] font-semibold">SEO</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/geo`}
                  className="text-gray-400 hover:text-[#43ffae] transition-colors text-sm flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-[#13aff0] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">GEO Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/seo`}
                  className="text-gray-400 hover:text-[#43ffae] transition-colors text-sm flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-[#13aff0] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">SEO Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/web-development`}
                  className="text-gray-400 hover:text-[#43ffae] transition-colors text-sm flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-[#13aff0] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Web Development</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/ecommerce`}
                  className="text-gray-400 hover:text-[#43ffae] transition-colors text-sm flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-[#13aff0] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">E-Commerce</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-gray-400 hover:text-[#43ffae] transition-colors text-sm flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-[#13aff0] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/portfolio`}
                  className="text-gray-400 hover:text-[#43ffae] transition-colors text-sm flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-[#13aff0] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Portfolio</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-gray-400 hover:text-[#43ffae] transition-colors text-sm flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-[#13aff0] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                </Link>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h4 className="text-white font-semibold text-sm mb-3">Business Hours</h4>
              <p className="text-xs text-gray-500">Mon - Fri: 9:00 - 18:00</p>
              <p className="text-xs text-gray-500">Sat - Sun: Closed</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@sitelab.lt"
                  className="group flex items-start space-x-3 text-gray-400 hover:text-[#43ffae] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#13aff0]/20 to-[#43ffae]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-[#13aff0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-sm font-medium">info@sitelab.lt</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+37060267098"
                  className="group flex items-start space-x-3 text-gray-400 hover:text-[#43ffae] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#43ffae]/20 to-[#13aff0]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-[#43ffae]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    <p className="text-sm font-medium">+370 602 67098</p>
                  </div>
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <Link
              href={`/${locale}/contact`}
              className="mt-6 inline-block w-full text-center py-3 px-6 bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white rounded-lg font-semibold text-sm hover:scale-105 transition-transform hover:shadow-lg hover:shadow-[#13aff0]/50"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} SiteLab. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href={`/${locale}/privacy`} className="text-sm text-gray-500 hover:text-[#43ffae] transition-colors">
                Privacy Policy
              </Link>
              <Link href={`/${locale}/terms`} className="text-sm text-gray-500 hover:text-[#43ffae] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
