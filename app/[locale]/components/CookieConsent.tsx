'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const denyAll = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-fadeIn">
      <div className="bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-sm text-gray-800">
                SiteLab uses cookies to offer you a better experience. See our{' '}
                <Link
                  href="/en/privacy"
                  className="text-[#13aff0] hover:text-[#43ffae] underline font-medium transition-colors"
                >
                  Privacy policy
                </Link>
                {' '}for more details.
              </p>
            </div>

            <div className="flex gap-2 w-full sm:w-auto flex-shrink-0">
              <button
                onClick={() => setShowOptions(!showOptions)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                More options
              </button>
              <button
                onClick={denyAll}
                className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-all whitespace-nowrap"
              >
                Deny all
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#13aff0] to-[#43ffae] rounded-md hover:shadow-lg transition-all whitespace-nowrap"
              >
                Accept all
              </button>
            </div>
          </div>

          {/* More Options Panel */}
          {showOptions && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="essential"
                    checked
                    disabled
                    className="mt-1 h-4 w-4 text-[#13aff0] border-gray-300 rounded"
                  />
                  <div className="flex-1">
                    <label htmlFor="essential" className="text-sm font-medium text-gray-900">
                      Essential cookies (Required)
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      Necessary for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="analytics"
                    defaultChecked
                    className="mt-1 h-4 w-4 text-[#13aff0] border-gray-300 rounded"
                  />
                  <div className="flex-1">
                    <label htmlFor="analytics" className="text-sm font-medium text-gray-900">
                      Analytics cookies
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="security"
                    defaultChecked
                    className="mt-1 h-4 w-4 text-[#13aff0] border-gray-300 rounded"
                  />
                  <div className="flex-1">
                    <label htmlFor="security" className="text-sm font-medium text-gray-900">
                      Security (reCAPTCHA)
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      Protect our forms from spam and abuse using Google reCAPTCHA.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#13aff0] to-[#43ffae] rounded-md hover:shadow-lg transition-all"
                >
                  Save preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
