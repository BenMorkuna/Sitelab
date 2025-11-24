'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocale } from 'next-intl';

export default function WebDevelopment() {
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeIn">
            Web Development
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              GEO + SEO Ready
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            All websites we build come optimized for future GEO and traditional SEO from day one.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Web Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Websites',
                price: 'From €1,200',
                features: ['Modern responsive design', 'GEO + SEO optimized', 'Fast loading (<2s)', 'Mobile-first', 'CMS integration', 'Analytics setup'],
              },
              {
                title: 'Landing Pages',
                price: 'From €450',
                features: ['Conversion-focused design', 'A/B testing ready', 'Lead capture forms', 'Fast deployment', 'SEO optimized', 'Analytics included'],
              },
              {
                title: 'Web Applications',
                price: 'From €3,500',
                features: ['Custom functionality', 'User authentication', 'Database integration', 'API development', 'Admin dashboards', 'Scalable architecture'],
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-[#171717] p-8 rounded-2xl border border-gray-800 hover:border-[#13aff0] transition-all hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-6">
                  {service.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-[#43ffae] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/${locale}/contact`} className="block text-center py-4 bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white rounded-full font-bold hover:scale-105 transition-all">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">SiteLab Difference</span>
          </h2>
          <div className="bg-[#1b1b1b] p-12 rounded-2xl border border-[#13aff0]">
            <p className="text-xl text-gray-300 mb-6">
              <span className="text-[#43ffae] font-bold">Every website we build</span> comes optimized for both traditional SEO <span className="text-white font-semibold">and</span> future GEO visibility.
            </p>
            <p className="text-lg text-gray-400">
              While other agencies build websites that need optimization later, we build search dominance into the foundation. Your site launches ready to rank on Google <span className="italic">and</span> appear in AI search results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#13aff0] to-[#43ffae]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1b1b1b] mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-[#1b1b1b]/90 mb-10">
            Get a custom quote for a website that's optimized for both traditional and AI search.
          </p>
          <Link href={`/${locale}/contact`} className="inline-block bg-white text-[#13aff0] px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl">
            Get Custom Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
