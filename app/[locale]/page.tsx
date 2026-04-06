'use client';

import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { useTranslations, useLocale } from 'next-intl';
import StructuredData from './components/StructuredData';
import { websiteSchema } from './lib/schemas';

export default function Home() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#171717]">
      <StructuredData data={websiteSchema(locale)} />
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#13aff0]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#43ffae]/8 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6 px-5 py-2 bg-[#1b1b1b] border border-[#43ffae]/40 rounded-full">
            <span className="text-[#43ffae] text-sm font-semibold tracking-wide">{t('hero.badge')}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title.line1')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              {t('hero.title.line2')}
            </span>
            <span className="block text-gray-300 text-4xl sm:text-5xl lg:text-6xl mt-2">
              {t('hero.title.line3')}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* 3 Quick Benefits */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-[#43ffae] text-lg">✓</span>
              {t('hero.benefits.one')}
            </div>
            <div className="hidden sm:block text-gray-700">|</div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-[#43ffae] text-lg">✓</span>
              {t('hero.benefits.two')}
            </div>
            <div className="hidden sm:block text-gray-700">|</div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-[#43ffae] text-lg">✓</span>
              {t('hero.benefits.three')}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-[#171717] px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all hover:shadow-2xl hover:shadow-[#13aff0]/30"
            >
              {t('hero.cta.primary')}
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="#how-it-works"
              className="bg-[#1b1b1b] text-white border border-gray-700 px-10 py-5 rounded-full text-lg font-semibold hover:border-gray-500 transition-all"
            >
              {t('hero.cta.secondary')}
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { title: t('hero.stats.delivery.title'), desc: t('hero.stats.delivery.description') },
              { title: t('hero.stats.conversion.title'), desc: t('hero.stats.conversion.description') },
              { title: t('hero.stats.projects.title'), desc: t('hero.stats.projects.description') },
              { title: t('hero.stats.support.title'), desc: t('hero.stats.support.description') },
            ].map((stat, i) => (
              <div key={i} className="bg-[#1b1b1b] p-4 rounded-xl border border-gray-800">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-1">
                  {stat.title}
                </div>
                <p className="text-gray-500 text-xs">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST / PROOF ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t('trust.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('trust.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: t('trust.items.speed.stat'), label: t('trust.items.speed.label') },
              { stat: t('trust.items.conversion.stat'), label: t('trust.items.conversion.label') },
              { stat: t('trust.items.seo.stat'), label: t('trust.items.seo.label') },
              { stat: t('trust.items.score.stat'), label: t('trust.items.score.label') },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-[#171717] border border-gray-800">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-2">
                  {item.stat}
                </div>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SERVICES AS OUTCOMES ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('services.title')}</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <div className="flex flex-col p-8 rounded-2xl bg-[#1b1b1b] border border-gray-800 hover:border-gray-600 transition-all duration-300">
              <div className="mb-6">
                <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">{t('services.starter.badge')}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-1">{t('services.starter.title')}</h3>
                <p className="text-[#43ffae] font-bold text-lg">{t('services.starter.price')}</p>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">{t('services.starter.description')}</p>
              <ul className="space-y-2 mb-8">
                {['one', 'two', 'three', 'four', 'five'].map((key) => (
                  <li key={key} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-[#43ffae] mt-0.5 shrink-0">✓</span>
                    {t(`services.starter.features.${key}`)}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:border-[#43ffae] hover:text-[#43ffae] transition-all text-sm"
              >
                {t('services.starter.cta')}
              </Link>
            </div>

            {/* Growth - highlighted */}
            <div className="flex flex-col p-8 rounded-2xl bg-gradient-to-b from-[#1b2a2b] to-[#1b1b1b] border-2 border-[#43ffae] relative shadow-2xl shadow-[#43ffae]/10 hover:shadow-[#43ffae]/20 transition-all duration-300 scale-[1.02]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-[#171717] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
                  {t('services.growth.badge')}
                </span>
              </div>
              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold text-white mt-2 mb-1">{t('services.growth.title')}</h3>
                <p className="text-[#43ffae] font-bold text-lg">{t('services.growth.price')}</p>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm flex-grow">{t('services.growth.description')}</p>
              <ul className="space-y-2 mb-8">
                {['one', 'two', 'three', 'four', 'five'].map((key) => (
                  <li key={key} className="flex items-start gap-2 text-gray-200 text-sm">
                    <span className="text-[#43ffae] mt-0.5 shrink-0">✓</span>
                    {t(`services.growth.features.${key}`)}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-[#171717] px-6 py-3 rounded-full font-bold hover:scale-105 transition-all text-sm"
              >
                {t('services.growth.cta')}
              </Link>
            </div>

            {/* Monthly */}
            <div className="flex flex-col p-8 rounded-2xl bg-[#1b1b1b] border border-gray-800 hover:border-gray-600 transition-all duration-300">
              <div className="mb-6">
                <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">{t('services.monthly.badge')}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-1">{t('services.monthly.title')}</h3>
                <p className="text-[#43ffae] font-bold text-lg">{t('services.monthly.price')}</p>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">{t('services.monthly.description')}</p>
              <ul className="space-y-2 mb-8">
                {['one', 'two', 'three', 'four', 'five'].map((key) => (
                  <li key={key} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-[#43ffae] mt-0.5 shrink-0">✓</span>
                    {t(`services.monthly.features.${key}`)}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:border-[#43ffae] hover:text-[#43ffae] transition-all text-sm"
              >
                {t('services.monthly.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('process.title')}</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t('process.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* connector lines on desktop */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-[#13aff0]/40 to-[#43ffae]/40" />

            {[
              { step: t('process.steps.audit.number'), title: t('process.steps.audit.title'), desc: t('process.steps.audit.description'), color: '#13aff0' },
              { step: t('process.steps.build.number'), title: t('process.steps.build.title'), desc: t('process.steps.build.description'), color: '#43ffae' },
              { step: t('process.steps.grow.number'), title: t('process.steps.grow.title'), desc: t('process.steps.grow.description'), color: '#13aff0' },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black"
                  style={{ background: `${item.color}20`, border: `2px solid ${item.color}40`, color: item.color }}
                >
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ME ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('whyMe.title')}</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t('whyMe.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: t('whyMe.reasons.speed.title'),
                desc: t('whyMe.reasons.speed.description'),
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: t('whyMe.reasons.cro.title'),
                desc: t('whyMe.reasons.cro.description'),
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: t('whyMe.reasons.seo.title'),
                desc: t('whyMe.reasons.seo.description'),
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#1b1b1b] border border-gray-800 hover:border-[#13aff0]/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY / RESULTS ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('caseStudy.title')}</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t('caseStudy.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="p-8 rounded-2xl bg-[#171717] border border-red-900/40">
              <div className="inline-block bg-red-900/30 text-red-400 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider">
                {t('caseStudy.before.label')}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{t('caseStudy.before.title')}</h3>
              <ul className="space-y-3">
                {['one', 'two', 'three', 'four', 'five'].map((key) => (
                  <li key={key} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="text-red-500 mt-0.5 shrink-0">✕</span>
                    {t(`caseStudy.before.items.${key}`)}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="p-8 rounded-2xl bg-[#171717] border border-[#43ffae]/30">
              <div className="inline-block bg-[#43ffae]/10 text-[#43ffae] text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider">
                {t('caseStudy.after.label')}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{t('caseStudy.after.title')}</h3>
              <ul className="space-y-3">
                {['one', 'two', 'three', 'four', 'five'].map((key) => (
                  <li key={key} className="flex items-start gap-3 text-gray-200 text-sm">
                    <span className="text-[#43ffae] mt-0.5 shrink-0">✓</span>
                    {t(`caseStudy.after.items.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 text-xs mt-6">{t('caseStudy.disclaimer')}</p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0d1f2d] via-[#0d2218] to-[#0d1f2d]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-block bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-[#171717] px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all hover:shadow-2xl hover:shadow-[#13aff0]/30"
            >
              {t('cta.primaryButton')}
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#services"
              className="inline-block bg-transparent text-white border border-gray-600 px-12 py-5 rounded-full text-lg font-semibold hover:border-gray-400 transition-all"
            >
              {t('cta.secondaryButton')}
            </Link>
          </div>
          <p className="text-gray-500 mt-6 text-sm">{t('cta.disclaimer')}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
