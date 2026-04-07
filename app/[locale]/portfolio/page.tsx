'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocale } from 'next-intl';
import { getT } from '../lib/pageTranslations';

export default function Portfolio() {
  const locale = useLocale();
  const t = getT(locale, 'portfolio');

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            {t.heroTitle1}
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              {t.heroTitle2}
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">{t.heroSub}</p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-12">
            {t.categories.map((cat, idx) => (
              <button key={idx} className="px-6 py-3 bg-[#171717] border border-gray-800 hover:border-[#13aff0] rounded-xl text-gray-300 hover:text-[#43ffae] transition-colors font-medium">
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.map((project, idx) => (
              <div key={idx} className="bg-[#171717] rounded-2xl border border-gray-800 hover:border-[#13aff0] transition-all hover:-translate-y-2 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-[#1b1b1b] to-[#171717] flex items-center justify-center">
                  <div className="text-6xl">📊</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#13aff0] mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[#43ffae] font-semibold">{project.result}</span>
                    <Link href={`/${locale}/contact`} className="text-gray-400 hover:text-[#43ffae] transition-colors">
                      {t.viewLink}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#13aff0] to-[#43ffae]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1b1b1b] mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-[#1b1b1b]/90 mb-10">{t.ctaSub}</p>
          <Link href={`/${locale}/contact`} className="inline-block bg-white text-[#13aff0] px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl">
            {t.ctaBtn}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
