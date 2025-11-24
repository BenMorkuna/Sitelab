'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocale } from 'next-intl';

export default function Ecommerce() {
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#43ffae]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            E-Commerce Solutions
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              Sell More, Rank Higher
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Launch your online store with GEO + SEO optimization built in. Get found, get sales.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            E-Commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Packages</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Starter Store',
                price: 'From €2,500',
                features: ['Up to 50 products', 'Payment gateway integration', 'Inventory management', 'GEO + SEO optimized', 'Mobile responsive', 'Analytics dashboard', 'Customer accounts'],
              },
              {
                title: 'Professional Store',
                price: 'From €5,000',
                features: ['Unlimited products', 'Advanced payment options', 'Multi-currency support', 'Advanced SEO + GEO', 'Custom integrations', 'Email marketing', 'Priority support'],
              },
            ].map((pkg, idx) => (
              <div key={idx} className="bg-[#171717] p-10 rounded-2xl border-2 border-[#13aff0] hover:shadow-2xl hover:shadow-[#13aff0]/20 transition-all hover:-translate-y-2">
                <h3 className="text-3xl font-bold text-white mb-3">{pkg.title}</h3>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-[#43ffae] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/${locale}/contact`} className="block text-center py-4 bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white rounded-full font-bold hover:scale-105 transition-all">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#13aff0] to-[#43ffae]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1b1b1b] mb-6">
            Ready to Launch Your Store?
          </h2>
          <p className="text-xl text-[#1b1b1b]/90 mb-10">
            Get a custom quote for an e-commerce store that ranks and converts.
          </p>
          <Link href={`/${locale}/contact`} className="inline-block bg-white text-[#13aff0] px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl">
            Get Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
