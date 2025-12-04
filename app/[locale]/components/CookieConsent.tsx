'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1b1b1b] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#13aff0]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    We use cookies
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We use cookies and similar technologies to improve your browsing experience,
                    analyze site traffic, and provide reCAPTCHA protection. By clicking "Accept",
                    you consent to our use of cookies.{' '}
                    <Link
                      href="/en/privacy"
                      className="text-[#13aff0] hover:text-[#43ffae] underline transition-colors"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={declineCookies}
                className="flex-1 sm:flex-none px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-all font-medium"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 sm:flex-none px-6 py-3 rounded-lg bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white hover:scale-[1.02] hover:shadow-xl hover:shadow-[#13aff0]/30 transition-all font-medium"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
