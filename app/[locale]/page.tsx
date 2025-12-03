'use client';

import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {useTranslations, useLocale} from 'next-intl';
import StructuredData from './components/StructuredData';
import { websiteSchema } from './lib/schemas';

export default function Home() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#171717]">
      <StructuredData data={websiteSchema(locale)} />
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
              <span className="text-[#43ffae] text-sm font-bold">{t('hero.badge')}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn">
              {t('hero.title.line1')}
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] via-[#43ffae] to-[#13aff0]">
                {t('hero.title.line2')}
              </span>
              <span className="block mt-2 text-white">
                {t('hero.title.line3')}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-6 leading-relaxed animate-fadeIn max-w-4xl mx-auto">
              {t('hero.description')} Our <Link href="/en/geo" className="text-[#43ffae] hover:text-[#13aff0] transition-colors font-semibold underline decoration-[#43ffae]/30 hover:decoration-[#13aff0]">AI search optimization agency</Link> combines cutting-edge <Link href="/en/geo" className="text-[#43ffae] hover:text-[#13aff0] transition-colors font-semibold underline decoration-[#43ffae]/30 hover:decoration-[#13aff0]">GEO optimization services</Link>, proven <Link href="/en/seo" className="text-[#43ffae] hover:text-[#13aff0] transition-colors font-semibold underline decoration-[#43ffae]/30 hover:decoration-[#13aff0]">SEO services</Link>, and expert <Link href="/en/web-development" className="text-[#43ffae] hover:text-[#13aff0] transition-colors font-semibold underline decoration-[#43ffae]/30 hover:decoration-[#13aff0]">web development services</Link> to ensure complete search dominance.
            </p>

            {/* AI Platforms */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#43ffae] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{t('hero.platforms.chatgpt')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#13aff0] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{t('hero.platforms.perplexity')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#43ffae] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{t('hero.platforms.claude')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#13aff0] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{t('hero.platforms.gemini')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#43ffae] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{t('hero.platforms.aiEngines')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn mb-16">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all hover:shadow-2xl hover:shadow-[#13aff0]/40"
              >
                {t('hero.cta.primary')}
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/geo"
                className="bg-[#1b1b1b] text-white border-2 border-[#13aff0] px-10 py-5 rounded-full text-lg font-bold hover:bg-[#13aff0]/10 transition-all hover:scale-105"
              >
                {t('hero.cta.secondary')}
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#1b1b1b] p-5 rounded-xl border border-gray-800 hover:border-[#13aff0]/30 transition-colors">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-1">
                  {t('hero.stats.aiFocused.title')}
                </div>
                <p className="text-gray-400 text-sm">{t('hero.stats.aiFocused.description')}</p>
              </div>
              <div className="bg-[#1b1b1b] p-5 rounded-xl border border-gray-800 hover:border-[#43ffae]/30 transition-colors">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-1">
                  {t('hero.stats.engines.title')}
                </div>
                <p className="text-gray-400 text-sm">{t('hero.stats.engines.description')}</p>
              </div>
              <div className="bg-[#1b1b1b] p-5 rounded-xl border border-gray-800 hover:border-[#13aff0]/30 transition-colors">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-1">
                  {t('hero.stats.early.title')}
                </div>
                <p className="text-gray-400 text-sm">{t('hero.stats.early.description')}</p>
              </div>
              <div className="bg-[#1b1b1b] p-5 rounded-xl border border-gray-800 hover:border-[#43ffae]/30 transition-colors">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-1">
                  {t('hero.stats.expert.title')}
                </div>
                <p className="text-gray-400 text-sm">{t('hero.stats.expert.description')}</p>
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
              {t('whyGeo.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('whyGeo.subtitle')} Whether you need <Link href="/en/ecommerce" className="text-[#43ffae] hover:text-[#13aff0] transition-colors font-semibold underline decoration-[#43ffae]/30 hover:decoration-[#13aff0]">e-commerce development</Link> or corporate websites, AI visibility is essential for modern success.
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
              <h3 className="text-2xl font-bold text-white mb-4">{t('whyGeo.reasons.aiModels.title')}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t('whyGeo.reasons.aiModels.description')}
              </p>
            </div>

            {/* Reason 2 */}
            <div className="group p-8 rounded-2xl bg-[#171717] border border-gray-800 hover:border-[#43ffae] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#43ffae] to-[#13aff0] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('whyGeo.reasons.visibility.title')}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t('whyGeo.reasons.visibility.description')}
              </p>
            </div>

            {/* Reason 3 */}
            <div className="group p-8 rounded-2xl bg-[#171717] border border-gray-800 hover:border-[#13aff0] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('whyGeo.reasons.edge.title')}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t('whyGeo.reasons.edge.description')}
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
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* GEO - Primary */}
            <Link href="/geo" className="group block">
              <div className="h-full p-10 rounded-2xl bg-gradient-to-br from-[#1b1b1b] to-[#171717] border-2 border-[#13aff0] hover:shadow-2xl hover:shadow-[#13aff0]/30 transition-all duration-300 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#13aff0] to-[#43ffae] px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-bold">{t('services.geo.badge')}</span>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-11 h-11 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{t('services.geo.title')}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {t('services.geo.description')}
                </p>
                <div className="flex items-center text-[#43ffae] font-semibold group-hover:translate-x-2 transition-transform">
                  {t('services.geo.cta')}
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
                <h3 className="text-3xl font-bold text-white mb-4">{t('services.seo.title')}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {t('services.seo.description')}
                </p>
                <div className="flex items-center text-[#43ffae] font-semibold group-hover:translate-x-2 transition-transform">
                  {t('services.seo.cta')}
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
                <h3 className="text-3xl font-bold text-white mb-4">{t('services.webDev.title')}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {t('services.webDev.description')}
                </p>
                <div className="flex items-center text-[#43ffae] font-semibold group-hover:translate-x-2 transition-transform">
                  {t('services.webDev.cta')}
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
            {t('cta.title')}
          </h2>
          <p className="text-xl text-[#1b1b1b]/90 mb-10">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#13aff0] px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl"
            >
              {t('cta.primaryButton')}
            </Link>
            <Link
              href="/geo"
              className="inline-block bg-[#1b1b1b] text-white border-2 border-[#1b1b1b] px-12 py-5 rounded-full text-lg font-bold hover:bg-[#171717] transition-all hover:scale-105"
            >
              {t('cta.secondaryButton')}
            </Link>
          </div>
          <p className="text-[#1b1b1b]/70 mt-6 text-sm">{t('cta.disclaimer')}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
