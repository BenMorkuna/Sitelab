'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocale } from 'next-intl';

export default function SEOServices() {
  const locale = useLocale();
  const services = [
    {
      title: 'Local SEO',
      price: 'From €399/mo',
      description: 'Dominate local search and Google Maps. Perfect for businesses serving specific geographic areas.',
      features: [
        'Google Business Profile optimization',
        'Local keyword research & targeting',
        'Google Maps ranking',
        'Local citation building',
        'Review management',
        'Monthly local reports',
      ],
      gradient: 'from-[#43ffae] to-[#13aff0]',
    },
    {
      title: 'National SEO',
      price: 'From €599/mo',
      description: 'Rank nationally for competitive keywords. Drive organic traffic from across the country.',
      features: [
        'Technical SEO audit',
        'Advanced keyword research',
        'On-page optimization',
        'Content strategy',
        'High-quality backlinks',
        'Monthly ranking reports',
      ],
      gradient: 'from-[#13aff0] to-[#43ffae]',
    },
    {
      title: 'E-Commerce SEO',
      price: 'From €799/mo',
      description: 'Optimize your online store for maximum visibility and sales.',
      features: [
        'Product page optimization',
        'Category optimization',
        'Schema markup',
        'Internal linking',
        'Conversion optimization',
        'Revenue tracking',
      ],
      gradient: 'from-[#43ffae] to-[#13aff0]',
    },
  ];

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-[#1b1b1b] border border-[#13aff0]/30 rounded-full">
            <span className="text-[#13aff0] text-sm font-bold">Traditional Search Optimization</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeIn">
            SEO Services
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              Stability Meets Strategy
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
            <span className="text-[#43ffae] font-semibold">SEO delivers stability.</span> <span className="text-[#13aff0] font-semibold">GEO delivers future-proof visibility.</span>
            <br />Together, they create complete search dominance.
          </p>
        </div>
      </section>

      {/* SEO + GEO Better Together */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">SEO + GEO</span> Together?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#171717] p-8 rounded-2xl border border-[#13aff0]">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg className="w-8 h-8 text-[#13aff0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                SEO: The Foundation
              </h3>
              <p className="text-gray-400 mb-4">
                Traditional SEO ensures you rank on Google, Bing, and traditional search engines. This drives consistent, predictable traffic.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#13aff0] rounded-full"></div>
                  Established, proven results
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#13aff0] rounded-full"></div>
                  Stable traffic source
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#13aff0] rounded-full"></div>
                  Clear ROI tracking
                </li>
              </ul>
            </div>

            <div className="bg-[#171717] p-8 rounded-2xl border border-[#43ffae]">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg className="w-8 h-8 text-[#43ffae]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                GEO: The Future
              </h3>
              <p className="text-gray-400 mb-4">
                <Link href={`/${locale}/geo`} className="text-[#43ffae] hover:text-[#13aff0] transition-colors font-semibold underline decoration-[#43ffae]/30 hover:decoration-[#13aff0]">AI search optimization (GEO)</Link> positions you for AI search, which is rapidly becoming how people find information and make decisions. Learn more about our GEO services.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#43ffae] rounded-full"></div>
                  Future-proof visibility
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#43ffae] rounded-full"></div>
                  Early adopter advantage
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#43ffae] rounded-full"></div>
                  AI recommendation placement
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#13aff0]/10 to-[#43ffae]/10 p-8 rounded-2xl border border-[#13aff0]/30 text-center">
            <p className="text-xl text-white font-semibold mb-2">
              📊 Best Practice: Combine Both
            </p>
            <p className="text-gray-400">
              Use SEO to dominate today's search while GEO prepares you for tomorrow. Together they create unbeatable visibility.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Packages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Packages</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            Proven strategies that deliver consistent rankings and traffic
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1b1b1b] p-8 rounded-2xl border-2 border-gray-800 hover:border-[#13aff0] hover:shadow-2xl hover:shadow-[#13aff0]/20 transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} mb-6`}>
                  {service.price}
                </div>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-[#43ffae] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/${locale}/contact`} className={`block text-center py-4 bg-gradient-to-r ${service.gradient} text-white rounded-full font-bold hover:scale-105 transition-all`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#171717] to-[#1b1b1b] border-2 border-[#13aff0] rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#13aff0] to-[#43ffae] px-4 py-1 rounded-full">
              <span className="text-white text-xs font-bold">RECOMMENDED</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              SEO + GEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Bundle</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get complete search dominance with our combined package
            </p>
            <div className="flex items-center justify-center gap-8 mb-8">
              <div>
                <div className="text-sm text-gray-500 line-through">€1,498/mo</div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
                  €1,199/mo
                </div>
              </div>
              <div className="bg-[#43ffae]/10 px-4 py-2 rounded-full border border-[#43ffae]/30">
                <span className="text-[#43ffae] font-bold">Save 20%</span>
              </div>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all hover:shadow-2xl"
            >
              Get SEO + GEO Bundle
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#13aff0] to-[#43ffae]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1b1b1b] mb-6">
            Ready to Dominate Search?
          </h2>
          <p className="text-xl text-[#1b1b1b]/90 mb-10">
            Get a free SEO audit and discover how to rank higher on Google and beyond.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-white text-[#13aff0] px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl"
          >
            Get Free SEO Audit
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
