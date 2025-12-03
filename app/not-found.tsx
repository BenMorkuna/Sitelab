import Link from 'next/link';
import { Red_Hat_Display, Open_Sans } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 - Page Not Found | SiteLab</title>
      </head>
      <body className={`${redHatDisplay.variable} ${openSans.variable} antialiased`}>
        <div className="min-h-screen bg-[#171717] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* AI-themed background effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#43ffae]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

          <div className="max-w-2xl mx-auto text-center relative z-10">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-[180px] sm:text-[220px] font-bold leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] via-[#43ffae] to-[#13aff0] animate-pulse">
                  404
                </span>
              </h1>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Page Not Found
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto">
              Looks like this page got lost in the AI search results. The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/en"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#13aff0]/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>

              <Link
                href="/en/contact"
                className="px-8 py-4 bg-[#1b1b1b] border border-[#43ffae]/30 text-white font-semibold rounded-full hover:bg-[#242424] hover:border-[#43ffae]/50 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="mt-16 flex justify-center gap-8">
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-2 h-2 bg-[#43ffae] rounded-full animate-pulse"></div>
                <span className="text-sm">AI Search</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-2 h-2 bg-[#13aff0] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <span className="text-sm">GEO Expert</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-2 h-2 bg-[#43ffae] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <span className="text-sm">SEO & Web Dev</span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
