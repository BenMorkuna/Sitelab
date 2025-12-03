'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocale } from 'next-intl';

export default function GEOServices() {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#43ffae]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-[#1b1b1b] border border-[#43ffae]/30 rounded-full">
            <span className="text-[#43ffae] text-sm font-bold">🤖 PRIMARY SERVICE</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeIn">
            GEO Optimization
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              Get Found in AI Search
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
            Appear in ChatGPT, Perplexity, Claude, and Gemini search results. Future-proof your brand with Generative Engine Optimization.
          </p>
        </div>
      </section>

      {/* What is GEO Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">GEO</span>?
          </h2>
          <div className="bg-[#171717] p-8 sm:p-12 rounded-2xl border border-gray-800">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              <span className="text-[#43ffae] font-bold">Generative Engine Optimization (GEO)</span> is the practice of optimizing your content to appear in AI-generated search results and recommendations.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Unlike traditional SEO that focuses on Google rankings, GEO ensures your brand appears when people ask ChatGPT, Perplexity, Claude, or Gemini for recommendations, information, or solutions.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Think of it this way: <span className="text-white font-semibold">If someone asks ChatGPT "What's the best web development agency in Lithuania?", your business should be in that answer.</span> That's GEO.
            </p>
          </div>
        </div>
      </section>

      {/* Why GEO Matters Now */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            Why GEO Matters <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Right Now</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            The shift from Google to AI search is happening faster than you think
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 hover:border-[#13aff0] transition-all">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-4">
                200M+
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Weekly AI Users</h3>
              <p className="text-gray-400">
                Over 200 million people use ChatGPT weekly. Perplexity, Claude, and Gemini add millions more. AI search is already mainstream.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 hover:border-[#43ffae] transition-all">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-4">
                65%
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Prefer AI Answers</h3>
              <p className="text-gray-400">
                65% of users prefer AI-generated answers over traditional search results. This number grows every month.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 hover:border-[#13aff0] transition-all">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-4">
                Early
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Competitive Advantage</h3>
              <p className="text-gray-400">
                Most businesses don't even know what GEO is yet. Being early means you dominate while competitors are still learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Services Packages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            GEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Service Packages</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            Comprehensive solutions to get your brand discovered in AI search results
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-[#171717] p-8 rounded-2xl border-2 border-[#13aff0] hover:shadow-2xl hover:shadow-[#13aff0]/20 transition-all hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-3">GEO Content Optimization</h3>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-6">
                From €599/mo
              </div>
              <p className="text-gray-400 mb-6">
                Optimize your existing content to rank in AI-generated responses and recommendations.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Content analysis & AI readability audit',
                  'Entity structuring for AI recognition',
                  'Citation-worthy content formatting',
                  'AI-friendly metadata optimization',
                  'Semantic keyword integration',
                  'Monthly AI visibility reports',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-[#43ffae] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/${locale}/contact`} className="block text-center py-4 bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white rounded-full font-bold hover:scale-105 transition-all">
                Get Started
              </Link>
            </div>

            {/* Package 2 */}
            <div className="bg-[#171717] p-8 rounded-2xl border-2 border-[#43ffae] hover:shadow-2xl hover:shadow-[#43ffae]/20 transition-all hover:-translate-y-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#13aff0] to-[#43ffae] px-4 py-1 rounded-full">
                <span className="text-white text-xs font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">GEO Entity Structuring</h3>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#43ffae] to-[#13aff0] mb-6">
                From €899/mo
              </div>
              <p className="text-gray-400 mb-6">
                Build comprehensive entity recognition so AI models understand and recommend your brand.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Knowledge graph optimization',
                  'Brand entity development',
                  'Wikipedia & Wikidata presence',
                  'Structured data implementation',
                  'AI citation building',
                  'Authority establishment across AI sources',
                  'Quarterly strategy reviews',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-[#43ffae] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/${locale}/contact`} className="block text-center py-4 bg-gradient-to-r from-[#43ffae] to-[#13aff0] text-white rounded-full font-bold hover:scale-105 transition-all">
                Get Started
              </Link>
            </div>

            {/* Package 3 */}
            <div className="bg-[#171717] p-8 rounded-2xl border-2 border-[#13aff0] hover:shadow-2xl hover:shadow-[#13aff0]/20 transition-all hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-3">GEO Distribution Strategy</h3>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-6">
                From €1,299/mo
              </div>
              <p className="text-gray-400 mb-6">
                Strategic content distribution to maximize AI discovery across all major platforms.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Multi-platform content syndication',
                  'AI-optimized press releases',
                  'Podcast & video transcript optimization',
                  'Social signal amplification',
                  'Community forum participation',
                  'AI training data placement',
                  'Comprehensive visibility tracking',
                  'Dedicated account manager',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-[#43ffae] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/${locale}/contact`} className="block text-center py-4 bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white rounded-full font-bold hover:scale-105 transition-all">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How GEO Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">GEO Works</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#13aff0] to-[#43ffae] rounded-full flex items-center justify-center text-sm">1</span>
                AI Visibility Audit
              </h3>
              <p className="text-gray-400 mb-6">
                We test how AI models currently perceive your brand by querying ChatGPT, Perplexity, Claude, and Gemini with relevant searches. This reveals your current AI visibility baseline.
              </p>
              <div className="bg-[#1b1b1b] p-4 rounded-lg border border-gray-800 text-sm text-gray-400 italic">
                Example: "What are the best web agencies in Vilnius?" - Do you appear in the answer?
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#13aff0] to-[#43ffae] rounded-full flex items-center justify-center text-sm">2</span>
                Content Optimization
              </h3>
              <p className="text-gray-400 mb-6">
                We restructure your content to be citation-worthy and AI-friendly. This includes entity recognition, semantic clarity, and formatting that AI models prefer when generating responses.
              </p>
              <div className="bg-[#1b1b1b] p-4 rounded-lg border border-gray-800">
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#43ffae] rounded-full"></div>
                    Clear entity relationships
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#13aff0] rounded-full"></div>
                    Structured data markup
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#43ffae] rounded-full"></div>
                    Citation-ready facts
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#13aff0] to-[#43ffae] rounded-full flex items-center justify-center text-sm">3</span>
                Strategic Distribution
              </h3>
              <p className="text-gray-400 mb-6">
                We ensure your optimized content reaches the sources that AI models trust and cite. This includes authoritative platforms, knowledge bases, and high-quality content networks.
              </p>
              <div className="bg-[#1b1b1b] p-4 rounded-lg border border-gray-800 text-sm text-gray-400">
                AI models learn from trusted sources. We get you featured where it counts.
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#13aff0] to-[#43ffae] rounded-full flex items-center justify-center text-sm">4</span>
                Monitor & Improve
              </h3>
              <p className="text-gray-400 mb-6">
                Continuous monitoring of how AI models respond to queries about your industry, competitors, and brand. We track improvements and adjust strategies based on real AI behavior.
              </p>
              <div className="bg-[#1b1b1b] p-4 rounded-lg border border-gray-800">
                <div className="text-sm text-gray-400">
                  <span className="text-[#43ffae] font-semibold">Monthly reports showing:</span>
                  <br />AI mention frequency, citation quality, competitor comparisons
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO + SEO + Web Development */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">GEO + SEO + Web Development</span>
            <span className="block mt-2 text-white">Complete Search Dominance</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Maximize your visibility by combining all three services for unbeatable results
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link href={`/${locale}/seo`} className="group bg-[#1b1b1b] p-8 rounded-2xl border-2 border-gray-800 hover:border-[#13aff0] transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-[#13aff0]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#13aff0] transition-colors">SEO Services</h3>
              <p className="text-gray-400 mb-4">
                Traditional search engine optimization ensures you rank on Google and Bing. The stable foundation for consistent organic traffic.
              </p>
              <div className="flex items-center text-[#43ffae] font-semibold group-hover:translate-x-2 transition-transform">
                Learn More About SEO
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href={`/${locale}/web-development`} className="group bg-[#1b1b1b] p-8 rounded-2xl border-2 border-gray-800 hover:border-[#43ffae] transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-[#43ffae]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#43ffae] to-[#13aff0] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#43ffae] transition-colors">Web Development</h3>
              <p className="text-gray-400 mb-4">
                Build your website with GEO and SEO optimization built-in from day one. The perfect foundation for all search strategies.
              </p>
              <div className="flex items-center text-[#43ffae] font-semibold group-hover:translate-x-2 transition-transform">
                Explore Web Development
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <div className="bg-gradient-to-br from-[#1b1b1b] to-[#171717] p-8 rounded-2xl border-2 border-[#13aff0]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">GEO (You Are Here)</h3>
              <p className="text-gray-400 mb-4">
                Future-proof AI search optimization. Appear in ChatGPT, Perplexity, Claude, and Gemini results for maximum visibility.
              </p>
              <div className="flex items-center text-[#43ffae] font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Current Page
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#13aff0]/10 to-[#43ffae]/10 p-10 rounded-2xl border border-[#13aff0]/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              💡 Why Combine All Three?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
              <span className="text-[#43ffae] font-semibold">Web Development</span> creates the foundation. <span className="text-[#13aff0] font-semibold">SEO</span> drives today's traffic. <span className="text-[#43ffae] font-semibold">GEO</span> captures tomorrow's audience. Together, they create unstoppable search presence across all platforms—traditional and AI-powered.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all hover:shadow-2xl"
            >
              Get Complete Package Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Results/Case Studies */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Results</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            See how GEO transforms AI visibility
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#171717] p-8 rounded-2xl border border-gray-800">
              <div className="mb-6">
                <span className="text-sm text-gray-500 uppercase tracking-wider">Before GEO</span>
                <h3 className="text-2xl font-bold text-white mt-2">Tech Startup - Not Found</h3>
              </div>
              <div className="bg-[#1b1b1b] p-6 rounded-lg mb-6 border border-red-900/20">
                <p className="text-sm text-gray-400 mb-2 italic">"What are the best AI consulting firms in Europe?"</p>
                <p className="text-gray-500"><span className="text-red-400">❌ Not mentioned</span> - Brand invisible in AI responses</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">AI Mentions: <span className="text-white font-bold">0/month</span></span>
                <span className="text-gray-500">Citations: <span className="text-white font-bold">0</span></span>
              </div>
            </div>

            <div className="bg-[#171717] p-8 rounded-2xl border-2 border-[#43ffae] relative">
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#13aff0] to-[#43ffae] px-3 py-1 rounded-full text-xs text-white font-bold">
                AFTER 3 MONTHS
              </div>
              <div className="mb-6">
                <span className="text-sm text-[#43ffae] uppercase tracking-wider">After GEO</span>
                <h3 className="text-2xl font-bold text-white mt-2">Featured in AI Responses</h3>
              </div>
              <div className="bg-[#1b1b1b] p-6 rounded-lg mb-6 border border-[#43ffae]/20">
                <p className="text-sm text-gray-400 mb-2 italic">"What are the best AI consulting firms in Europe?"</p>
                <p className="text-gray-300"><span className="text-[#43ffae]">✓ Listed</span> in top 5 recommendations across ChatGPT, Perplexity, and Claude</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">AI Mentions: <span className="text-[#43ffae] font-bold">47/month</span></span>
                <span className="text-gray-400">Citations: <span className="text-[#43ffae] font-bold">12 sources</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#13aff0] via-[#43ffae] to-[#13aff0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1b1b1b] mb-6">
            Ready to Appear in AI Search Results?
          </h2>
          <p className="text-xl text-[#1b1b1b]/90 mb-10">
            Get a free GEO visibility audit and discover how your brand currently performs in AI-generated responses.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-white text-[#13aff0] px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl"
          >
            Get Your Free GEO Audit
          </Link>
          <p className="text-[#1b1b1b]/70 mt-6 text-sm">No obligations • See where you stand in AI search</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
