'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1b1b1b]/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            {/* Modern Geometric Logo */}
            <div className="relative w-10 h-10">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#13aff0] group-hover:border-[#43ffae] transition-colors duration-300"></div>
              {/* Inner shapes - abstract S form */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                  <path d="M7 8C7 8 9 6 12 6C15 6 17 8 17 10C17 12 15 13 12 13C9 13 7 14 7 16C7 18 9 20 12 20C15 20 17 18 17 18"
                    stroke="url(#gradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#13aff0" />
                      <stop offset="100%" stopColor="#43ffae" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            {/* Clean Wordmark */}
            <span className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#13aff0] group-hover:to-[#43ffae] transition-all duration-300">
              SiteLab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href={`/${locale}`} className="text-gray-300 hover:text-[#43ffae] transition-colors font-medium">
              {t('home')}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-300 hover:text-[#43ffae] transition-colors font-medium flex items-center gap-1">
                {t('services')}
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-[#1b1b1b] border border-gray-800 rounded-xl shadow-2xl shadow-black/50 py-2 animate-fadeIn">
                  <Link
                    href={`/${locale}/geo`}
                    className="block px-4 py-3 text-gray-300 hover:bg-[#13aff0]/10 hover:text-[#43ffae] transition-colors font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#43ffae] rounded-full"></div>
                      GEO Optimization
                    </div>
                  </Link>
                  <Link
                    href={`/${locale}/seo`}
                    className="block px-4 py-3 text-gray-300 hover:bg-[#13aff0]/10 hover:text-[#43ffae] transition-colors font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#13aff0] rounded-full"></div>
                      SEO
                    </div>
                  </Link>
                  <Link
                    href={`/${locale}/web-development`}
                    className="block px-4 py-3 text-gray-300 hover:bg-[#13aff0]/10 hover:text-[#43ffae] transition-colors font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#43ffae] rounded-full"></div>
                      Web Development
                    </div>
                  </Link>
                  <Link
                    href={`/${locale}/ecommerce`}
                    className="block px-4 py-3 text-gray-300 hover:bg-[#13aff0]/10 hover:text-[#43ffae] transition-colors font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#13aff0] rounded-full"></div>
                      E-commerce
                    </div>
                  </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href={`/${locale}/about`} className="text-gray-300 hover:text-[#43ffae] transition-colors font-medium">
              {t('about')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white px-6 py-2.5 rounded-full hover:shadow-xl hover:shadow-[#13aff0]/30 transition-all hover:scale-105 font-semibold"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fadeIn border-t border-gray-800 mt-2">
            <Link
              href={`/${locale}`}
              className="block py-2 text-gray-300 hover:text-[#43ffae] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {t('home')}
            </Link>

            {/* Mobile Services Submenu */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between py-2 text-gray-300 hover:text-[#43ffae] transition-colors font-medium"
              >
                {t('services')}
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href={`/${locale}/geo`}
                    className="block py-2 text-gray-400 hover:text-[#43ffae] transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    → GEO Optimization
                  </Link>
                  <Link
                    href={`/${locale}/seo`}
                    className="block py-2 text-gray-400 hover:text-[#43ffae] transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    → SEO
                  </Link>
                  <Link
                    href={`/${locale}/web-development`}
                    className="block py-2 text-gray-400 hover:text-[#43ffae] transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    → Web Development
                  </Link>
                  <Link
                    href={`/${locale}/ecommerce`}
                    className="block py-2 text-gray-400 hover:text-[#43ffae] transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    → E-commerce
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/about`}
              className="block py-2 text-gray-300 hover:text-[#43ffae] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {t('about')}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="block text-center bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white px-6 py-3 rounded-full hover:shadow-xl hover:shadow-[#13aff0]/30 transition-all font-semibold mt-4"
              onClick={() => setIsOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
