'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1b1b1b]/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Icon */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#13aff0]/30">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9l6 6" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#43ffae] rounded-full animate-pulse"></div>
            </div>
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white group-hover:text-[#13aff0] transition-colors leading-none">
                SiteLab
              </span>
              <span className="text-[10px] text-[#43ffae] font-semibold tracking-wider uppercase leading-none mt-0.5">
                GEO • AI Search
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-[#43ffae] transition-colors font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-300 hover:text-[#43ffae] transition-colors font-medium flex items-center gap-1">
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-[#1b1b1b] border border-gray-800 rounded-xl shadow-2xl shadow-black/50 py-2 animate-fadeIn">
                  <Link
                    href="/geo"
                    className="block px-4 py-3 text-gray-300 hover:bg-[#13aff0]/10 hover:text-[#43ffae] transition-colors font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#43ffae] rounded-full"></div>
                      GEO Optimization
                    </div>
                  </Link>
                  <Link
                    href="/seo"
                    className="block px-4 py-3 text-gray-300 hover:bg-[#13aff0]/10 hover:text-[#43ffae] transition-colors font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#13aff0] rounded-full"></div>
                      SEO
                    </div>
                  </Link>
                  <Link
                    href="/web-development"
                    className="block px-4 py-3 text-gray-300 hover:bg-[#13aff0]/10 hover:text-[#43ffae] transition-colors font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#43ffae] rounded-full"></div>
                      Web Development
                    </div>
                  </Link>
                  <Link
                    href="/ecommerce"
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

            <Link href="/portfolio" className="text-gray-300 hover:text-[#43ffae] transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-[#43ffae] transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#43ffae] transition-colors font-medium">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-[#13aff0] text-white px-6 py-2 rounded-full hover:bg-[#43ffae] transition-all hover:scale-105 font-medium shadow-lg shadow-[#13aff0]/20"
            >
              Free GEO Audit
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
              href="/"
              className="block py-2 text-gray-300 hover:text-[#43ffae] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Submenu */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between py-2 text-gray-300 hover:text-[#43ffae] transition-colors font-medium"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/geo"
                    className="block py-2 text-gray-400 hover:text-[#43ffae] transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    → GEO Optimization
                  </Link>
                  <Link
                    href="/seo"
                    className="block py-2 text-gray-400 hover:text-[#43ffae] transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    → SEO
                  </Link>
                  <Link
                    href="/web-development"
                    className="block py-2 text-gray-400 hover:text-[#43ffae] transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    → Web Development
                  </Link>
                  <Link
                    href="/ecommerce"
                    className="block py-2 text-gray-400 hover:text-[#43ffae] transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    → E-commerce
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className="block py-2 text-gray-300 hover:text-[#43ffae] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-300 hover:text-[#43ffae] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-300 hover:text-[#43ffae] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block w-full text-center bg-[#13aff0] text-white px-6 py-3 rounded-full hover:bg-[#43ffae] transition-all font-medium shadow-lg shadow-[#13aff0]/20 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Free GEO Audit
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
