'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocale } from 'next-intl';
import { getT } from '../lib/pageTranslations';
import { getSlug } from '../lib/routes';

export default function About() {
  const locale = useLocale();
  const t = getT(locale, 'about');

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#43ffae]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-[#1b1b1b] border border-[#43ffae]/30 rounded-full">
            <span className="text-[#43ffae] text-sm font-bold">{t.badge}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            {t.heroTitle1}
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              {t.heroTitle2}
            </span>
          </h1>
          <p className="text-xl text-gray-400">{t.heroSub}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">{t.missionTitle}</span>
          </h2>
          <div className="bg-[#171717] p-10 rounded-2xl border border-[#13aff0]">
            <p className="text-2xl text-gray-300 leading-relaxed mb-6">
              {t.missionP1} <span className="text-[#43ffae] font-bold">{t.missionHighlight}</span>.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">{t.missionP2}</p>
          </div>
        </div>
      </section>

      {/* Why GEO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">{t.shiftTitle}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.shift.map((item, i) => (
              <div key={i} className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-6 text-[#171717] text-2xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">{t.bgTitle}</span>
          </h2>
          <div className="space-y-6 text-gray-400">
            {t.bg.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">{t.servicesTitle}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((svc, i) => (
              <Link key={i} href={`/${locale}/${svc.href}`} className="group bg-[#1b1b1b] p-6 rounded-2xl border-2 border-gray-800 hover:border-[#13aff0] transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-[#13aff0]/20">
                <div className="w-14 h-14 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#13aff0] transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{svc.desc}</p>
                <div className="flex items-center text-[#43ffae] font-semibold text-sm group-hover:translate-x-1 transition-transform">{t.learnMore}</div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-400 mb-6">{t.servicesFooter}</p>
            <Link href={`/${locale}/${getSlug('contact', locale)}`} className="inline-block bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all hover:shadow-2xl">
              {t.servicesCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">{t.valuesTitle}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.values.map((v, i) => (
              <div key={i} className="bg-[#171717] p-8 rounded-2xl border border-gray-800 hover:border-[#13aff0] transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#13aff0] via-[#43ffae] to-[#13aff0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1b1b1b] mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-[#1b1b1b]/90 mb-10">{t.ctaSub}</p>
          <Link href={`/${locale}/${getSlug('contact', locale)}`} className="inline-block bg-white text-[#13aff0] px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl">
            {t.ctaBtn}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
