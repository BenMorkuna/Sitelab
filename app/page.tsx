import Link from 'next/link';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      {/* Hero Section - GEO Focused */}
      <section className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* AI-themed background effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#43ffae]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#13aff0]/5 to-[#43ffae]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-[#1b1b1b] border border-[#43ffae]/30 rounded-full">
              <span className="text-[#43ffae] text-sm font-bold">🤖 AI Search Optimization Specialist</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn">
              GEO & AI Search Expert
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] via-[#43ffae] to-[#13aff0]">
                Get Found in AI Results,
              </span>
              <span className="block mt-2 text-white">
                Not Just Google
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-6 leading-relaxed animate-fadeIn max-w-4xl mx-auto">
              Helping brands appear in <span className="text-[#13aff0] font-semibold">ChatGPT</span>, <span className="text-[#43ffae] font-semibold">Perplexity</span>, <span className="text-[#13aff0] font-semibold">Claude</span>, and <span className="text-[#43ffae] font-semibold">Gemini</span> AI-driven search results,
              with SEO + professional website development to match.
            </p>

            {/* AI Platforms */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#43ffae] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">ChatGPT</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#13aff0] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Perplexity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#43ffae] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Claude</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#13aff0] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Gemini</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#43ffae] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI Search Engines</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn mb-16">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all hover:shadow-2xl hover:shadow-[#13aff0]/40"
              >
                Get Free GEO Audit
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/geo"
                className="bg-[#1b1b1b] text-white border-2 border-[#13aff0] px-10 py-5 rounded-full text-lg font-bold hover:bg-[#13aff0]/10 transition-all hover:scale-105"
              >
                Explore GEO Services
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#1b1b1b] p-5 rounded-xl border border-gray-800 hover:border-[#13aff0]/30 transition-colors">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-1">
                  AI-First
                </div>
                <p className="text-gray-400 text-sm">Future-Proof Strategy</p>
              </div>
              <div className="bg-[#1b1b1b] p-5 rounded-xl border border-gray-800 hover:border-[#43ffae]/30 transition-colors">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-1">
                  4 Engines
                </div>
                <p className="text-gray-400 text-sm">Multi-AI Visibility</p>
              </div>
              <div className="bg-[#1b1b1b] p-5 rounded-xl border border-gray-800 hover:border-[#13aff0]/30 transition-colors">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-1">
                  Early
                </div>
                <p className="text-gray-400 text-sm">Competitive Edge</p>
              </div>
              <div className="bg-[#1b1b1b] p-5 rounded-xl border border-gray-800 hover:border-[#43ffae]/30 transition-colors">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-1">
                  Expert
                </div>
                <p className="text-gray-400 text-sm">GEO Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why GEO Matters Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why GEO Matters <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Now</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The future of search is happening today. AI is becoming the primary way people find information.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="group p-8 rounded-2xl bg-[#171717] border border-gray-800 hover:border-[#13aff0] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Models Are Becoming Primary Search Engines</h3>
              <p className="text-gray-400 leading-relaxed">
                Millions now use ChatGPT, Perplexity, and other AI tools instead of Google. If your brand isn't optimized for AI results, you're invisible to a massive audience.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="group p-8 rounded-2xl bg-[#171717] border border-gray-800 hover:border-[#43ffae] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#43ffae] to-[#13aff0] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Brands Need Visibility in AI-Generated Answers</h3>
              <p className="text-gray-400 leading-relaxed">
                When AI tools recommend products or services, being mentioned means conversions. GEO ensures your brand appears in those critical AI-generated recommendations.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="group p-8 rounded-2xl bg-[#171717] border border-gray-800 hover:border-[#13aff0] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">GEO Gives Early Adopters a Competitive Edge</h3>
              <p className="text-gray-400 leading-relaxed">
                Most businesses haven't discovered GEO yet. Being an early adopter means dominating AI search while competitors are still figuring out what GEO even is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Digital Visibility</span> Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From cutting-edge GEO to proven SEO and professional web development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* GEO - Primary */}
            <Link href="/geo" className="group block">
              <div className="h-full p-10 rounded-2xl bg-gradient-to-br from-[#1b1b1b] to-[#171717] border-2 border-[#13aff0] hover:shadow-2xl hover:shadow-[#13aff0]/30 transition-all duration-300 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#13aff0] to-[#43ffae] px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-bold">PRIMARY</span>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-11 h-11 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">GEO Services</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Get discovered in ChatGPT, Perplexity, Claude, and Gemini. Future-proof your brand with AI search optimization.
                </p>
                <div className="flex items-center text-[#43ffae] font-semibold group-hover:translate-x-2 transition-transform">
                  Explore GEO →
                </div>
              </div>
            </Link>

            {/* SEO - Secondary */}
            <Link href="/seo" className="group block">
              <div className="h-full p-10 rounded-2xl bg-[#1b1b1b] border border-gray-800 hover:border-[#43ffae] hover:shadow-xl hover:shadow-[#43ffae]/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#43ffae] to-[#13aff0] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-11 h-11 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">SEO Services</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Traditional search optimization that delivers stability. Rank on Google while preparing for the AI future.
                </p>
                <div className="flex items-center text-[#43ffae] font-semibold group-hover:translate-x-2 transition-transform">
                  View SEO Packages →
                </div>
              </div>
            </Link>

            {/* Web Development */}
            <Link href="/web-development" className="group block">
              <div className="h-full p-10 rounded-2xl bg-[#1b1b1b] border border-gray-800 hover:border-[#13aff0] hover:shadow-xl hover:shadow-[#13aff0]/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-11 h-11 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Web Development</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Professional websites built with GEO + SEO optimization from day one. E-commerce, landing pages, and more.
                </p>
                <div className="flex items-center text-[#43ffae] font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Web Dev →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#13aff0] via-[#43ffae] to-[#13aff0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1b1b1b] mb-6">
            Ready to Dominate AI Search?
          </h2>
          <p className="text-xl text-[#1b1b1b]/90 mb-10">
            Get a free GEO audit and discover how to appear in ChatGPT, Perplexity, and other AI search results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#13aff0] px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl"
            >
              Get Free GEO Audit
            </Link>
            <Link
              href="/geo"
              className="inline-block bg-[#1b1b1b] text-white border-2 border-[#1b1b1b] px-12 py-5 rounded-full text-lg font-bold hover:bg-[#171717] transition-all hover:scale-105"
            >
              Learn About GEO
            </Link>
          </div>
          <p className="text-[#1b1b1b]/70 mt-6 text-sm">No obligations • See your AI visibility opportunities</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-bold text-white mb-2">SiteLab</p>
          <p className="text-sm text-[#43ffae] mb-1">GEO • AI Search • SEO • Web Development</p>
          <p className="text-sm">&copy; 2025 SiteLab. All rights reserved.</p>
          <p className="text-sm mt-2">Get Found in AI Results • Future-Proof Your Brand</p>
        </div>
      </footer>
    </div>
  );
}
