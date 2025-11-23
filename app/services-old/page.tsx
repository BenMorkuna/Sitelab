import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Services() {
  const services = [
    {
      title: 'Local SEO (GEO)',
      price: 'From €399/mo',
      featured: true,
      description: 'Dominate your local market and Google Maps. Perfect for businesses targeting customers in specific geographic areas. Show up first for "near me" searches.',
      features: [
        'Google Business Profile optimization',
        'Local keyword targeting & ranking',
        'Google Maps ranking optimization',
        'Local citation building (100+ directories)',
        'Review management & generation',
        'Local link building strategy',
        'Monthly local SEO reports',
        'Geo-targeted content creation',
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: 'from-[#43ffae] to-[#13aff0]',
      borderColor: 'border-[#43ffae]',
    },
    {
      title: 'National SEO',
      price: 'From €599/mo',
      featured: true,
      description: 'Rank nationally for competitive keywords. Drive organic traffic from across the country and establish your brand as an industry authority.',
      features: [
        'Comprehensive technical SEO audit',
        'Advanced keyword research & targeting',
        'On-page optimization (unlimited pages)',
        'Content strategy & creation',
        'High-quality backlink acquisition',
        'Competitor analysis & monitoring',
        'Monthly ranking & traffic reports',
        'Ongoing technical optimization',
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-[#13aff0] to-[#43ffae]',
      borderColor: 'border-[#13aff0]',
    },
    {
      title: 'E-Commerce SEO',
      price: 'From €799/mo',
      description: 'Optimize your online store for maximum visibility and sales. Get your products in front of ready-to-buy customers searching on Google.',
      features: [
        'Product page SEO optimization',
        'Category & collection page optimization',
        'Shopping feed optimization',
        'Rich snippets & schema markup',
        'Product keyword research',
        'Internal linking strategy',
        'Conversion rate optimization',
        'Sales & revenue tracking',
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-[#13aff0] to-[#43ffae]',
      borderColor: 'border-[#13aff0]',
    },
    {
      title: 'Technical SEO Audit',
      price: '€299 one-time',
      description: 'Comprehensive website analysis identifying all technical issues hurting your rankings. Get a detailed roadmap to fix problems and boost performance.',
      features: [
        'Complete technical SEO analysis',
        'Site speed & Core Web Vitals audit',
        'Mobile usability assessment',
        'Indexation & crawlability check',
        'Structured data validation',
        'Security & HTTPS analysis',
        'Detailed 50+ page report',
        '1-hour strategy consultation',
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      gradient: 'from-[#43ffae] to-[#13aff0]',
      borderColor: 'border-[#43ffae]',
    },
    {
      title: 'Content Marketing & SEO',
      price: 'From €499/mo',
      description: 'Strategic content creation that ranks and converts. Build topical authority, attract backlinks, and engage your target audience with expert content.',
      features: [
        'SEO content strategy development',
        '4-8 optimized blog posts/month',
        'Keyword-targeted writing',
        'Topic cluster development',
        'Internal linking optimization',
        'Content refresh & updates',
        'Performance tracking',
        'Outreach & link building',
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      gradient: 'from-[#13aff0] to-[#43ffae]',
      borderColor: 'border-[#13aff0]',
    },
    {
      title: 'Enterprise SEO',
      price: 'Custom Pricing',
      description: 'Scalable SEO solutions for large websites and corporations. Multi-location businesses, franchises, and enterprise-level SEO management.',
      features: [
        'Custom enterprise SEO strategy',
        'Multi-location/franchise SEO',
        'Large-scale technical optimization',
        'Dedicated SEO team',
        'Advanced analytics & BI reporting',
        'API integrations & automation',
        'Quarterly strategy reviews',
        'Priority support & consultation',
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: 'from-[#43ffae] to-[#13aff0]',
      borderColor: 'border-[#43ffae]',
    },
  ];

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#43ffae]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fadeIn">
            SEO & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">GEO Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fadeIn mb-8">
            Comprehensive search engine optimization solutions to help your business rank higher, attract more customers, and increase revenue.
          </p>
          <div className="inline-block px-6 py-3 bg-[#1b1b1b] border border-[#43ffae]/30 rounded-full">
            <span className="text-[#43ffae] font-semibold">✓ Guaranteed Results or Money Back</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-[#1b1b1b] border-2 ${service.borderColor} hover:shadow-2xl hover:shadow-[#13aff0]/20 transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden ${service.featured ? 'lg:scale-105' : ''}`}
              >
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#13aff0] to-[#43ffae] px-4 py-1 rounded-bl-lg">
                    <span className="text-white text-xs font-bold">MOST POPULAR</span>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} mb-3`}>
                    {service.price}
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-[#43ffae] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-4 px-6 bg-gradient-to-r ${service.gradient} text-white rounded-full font-bold hover:scale-105 transition-all hover:shadow-lg`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our SEO Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose SiteLab SEO?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We deliver measurable results with transparent reporting and proven strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Results Guaranteed</h3>
              <p className="text-gray-400 text-sm">Money-back guarantee if we don't deliver promised rankings</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#43ffae] to-[#13aff0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Results</h3>
              <p className="text-gray-400 text-sm">See rankings improve in 60-90 days with our proven methods</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transparent Reporting</h3>
              <p className="text-gray-400 text-sm">Monthly reports showing rankings, traffic, and ROI metrics</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#43ffae] to-[#13aff0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-400 text-sm">Certified SEO specialists with 10+ years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#13aff0] to-[#43ffae]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Dominate Google Search?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Get a free SEO audit and custom strategy to outrank your competitors.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#13aff0] px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl"
          >
            Get Free SEO Audit
          </Link>
          <p className="text-white/80 mt-4">No obligations • See your ranking opportunities</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-bold text-white mb-2">SiteLab</p>
          <p className="text-sm text-[#43ffae] mb-1">SEO • GEO Marketing Experts</p>
          <p className="text-sm">&copy; 2025 SiteLab. All rights reserved.</p>
          <p className="text-sm mt-2">Dominate Google Search • Grow Your Business</p>
        </div>
      </footer>
    </div>
  );
}
