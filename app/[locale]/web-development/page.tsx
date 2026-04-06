'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocale } from 'next-intl';
import StructuredData from '../components/StructuredData';
import { webDevServiceSchema } from '../lib/schemas';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#43ffae] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function WebDevelopment() {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#171717]">
      <StructuredData data={webDevServiceSchema(locale)} />
      <Navigation />

      {/* ── 1. HERO ── */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#13aff0]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#43ffae]/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-5 py-2 bg-[#1b1b1b] border border-[#43ffae]/40 rounded-full">
            <span className="text-[#43ffae] text-sm font-semibold tracking-wide">Web Development & E-Commerce</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Websites That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              Generate Revenue.
            </span>
            <span className="block text-gray-300 text-4xl sm:text-5xl mt-2">Not just traffic.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            We build fast, conversion-optimised websites and e-commerce stores — with SEO baked in — so your site works as hard as you do.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm sm:text-base">
            {[
              'Delivered in 2–4 weeks',
              'Built to convert visitors into buyers',
              'SEO-ready from day one',
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-300 justify-center sm:justify-start">
                <span className="text-[#43ffae]">✓</span> {b}
                {i < 2 && <span className="hidden sm:inline text-gray-700 ml-1">|</span>}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="group bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-[#171717] px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all hover:shadow-2xl hover:shadow-[#13aff0]/30"
            >
              Get Your Free Website Audit
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="#packages"
              className="bg-[#1b1b1b] text-white border border-gray-700 px-10 py-5 rounded-full text-lg font-semibold hover:border-gray-500 transition-all"
            >
              See Packages
            </a>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#171717] border-b border-gray-800/60">
        <div className="max-w-6xl mx-auto">

          {/* Platform trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span className="text-gray-600 text-sm font-medium mr-2">Built with:</span>
            {['Next.js', 'Shopify', 'WordPress', 'WooCommerce'].map((p) => (
              <span key={p} className="px-4 py-1.5 rounded-full bg-[#1b1b1b] border border-gray-800 text-gray-400 text-sm font-medium">
                {p}
              </span>
            ))}
          </div>

          {/* Featured Project Card */}
          <div className="relative rounded-2xl bg-[#1b1b1b] border border-[#43ffae]/30 overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#13aff0] to-[#43ffae]" />

            <div className="grid md:grid-cols-2 gap-0">

              {/* Left: quote + meta */}
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#43ffae]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-white text-lg font-medium leading-relaxed mb-6">
                  "We needed a fast, modern e-commerce platform that could handle subscriptions and convert cold traffic. SiteLab delivered in under 3 weeks — the site is clean, loads instantly, and our conversion rate has been consistently strong since launch."
                </blockquote>

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#13aff0] to-[#43ffae] flex items-center justify-center text-[#171717] font-bold text-sm shrink-0">
                    CP
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Founder, Cheats-Pro</p>
                    <a
                      href="https://cheats-pro.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#43ffae] text-xs hover:underline"
                    >
                      cheats-pro.com →
                    </a>
                  </div>
                </div>

                {/* Project stats */}
                <div className="flex gap-4">
                  {[
                    { stat: 'Next.js', label: 'Platform' },
                    { stat: '< 1s', label: 'Load time' },
                    { stat: '3 wks', label: 'Delivered' },
                  ].map((item, i) => (
                    <div key={i} className="text-center px-4 py-3 rounded-xl bg-[#171717] border border-gray-800 flex-1">
                      <div className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
                        {item.stat}
                      </div>
                      <p className="text-gray-500 text-xs mt-0.5">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: browser mockup with screenshot */}
              <div className="p-6 sm:p-8 flex items-center justify-center bg-[#141414]">
                <div className="w-full rounded-xl overflow-hidden border border-gray-700 shadow-2xl shadow-black/50">
                  {/* Browser chrome */}
                  <div className="bg-[#2a2a2a] px-4 py-2.5 flex items-center gap-3 border-b border-gray-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 bg-[#1a1a1a] rounded-md px-3 py-1 text-xs text-gray-500 font-mono">
                      cheats-pro.com
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src="/cheats-pro-screenshot.png"
                      alt="Cheats-Pro — built by SiteLab"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 2. PROBLEM ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Sound familiar?
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Most websites look decent. But looking good and <em className="text-white not-italic font-semibold">making money</em> are two very different things.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { headline: '"My site looks fine, but no one buys."', body: 'Design alone doesn\'t sell. Without conversion-focused structure — clear CTAs, trust signals, fast load — visitors browse and leave.' },
              { headline: '"I\'m paying for ads but not seeing ROI."', body: 'If your landing page doesn\'t convert, no amount of ad spend fixes it. You\'re pouring budget into a leaking bucket.' },
              { headline: '"My site is slow and outdated."', body: 'Every extra second of load time costs you 7% in conversions. Slow sites also rank lower on Google — you\'re invisible before visitors even arrive.' },
              { headline: '"My competitors are ranking. I\'m not."', body: 'A site without proper SEO structure is a site that doesn\'t exist. Your competitors are getting your customers right now.' },
            ].map((pain, i) => (
              <div key={i} className="p-7 rounded-2xl bg-[#171717] border border-red-900/30 flex gap-4">
                <XIcon />
                <div>
                  <p className="text-white font-semibold mb-2">{pain.headline}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{pain.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SOLUTION ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              The fix is simpler than you think.
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              We build websites and e-commerce stores with one goal: <span className="text-white font-semibold">generate more revenue for your business.</span> Not just a pretty design. A revenue-generating machine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Conversion-focused design',
                body: 'Every layout decision — where the CTA sits, how trust is built, how the page flows — is made to move visitors toward taking action.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: 'SEO built in, not bolted on',
                body: 'Technical SEO, on-page structure, and content strategy are baked into the build — so you rank from day one, not after an expensive audit six months later.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Speed that sells',
                body: 'We target sub-1s load times and 95+ PageSpeed scores. Fast sites rank higher, convert more, and keep visitors from bouncing before they even read your offer.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm8 0a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                title: 'Scalable from the start',
                body: 'Whether you\'re launching a business site or a full Shopify store, we build architecture that grows with you — no expensive rebuilds in 12 months.',
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#1b1b1b] border border-gray-800 hover:border-[#13aff0]/40 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHAT YOU GET ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What's included in every build</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">No hidden extras. No "that's a separate package." This is what we deliver as standard.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { value: 'High-converting page layouts', sub: 'Designed to move visitors to action' },
              { value: 'Mobile-first UX', sub: '60%+ of your visitors are on mobile' },
              { value: 'Sub-1s load speed', sub: 'Fast sites rank higher and sell more' },
              { value: 'Full on-page SEO', sub: 'Structure, meta, schema, sitemap' },
              { value: 'Clear CTA architecture', sub: 'Every page has a purpose and a next step' },
              { value: 'Analytics & tracking setup', sub: 'Know what\'s working from day one' },
              { value: 'Checkout optimisation', sub: 'For e-commerce: reduce cart abandonment' },
              { value: 'AI search visibility (GEO)', sub: 'Get cited in ChatGPT, Perplexity & more' },
              { value: 'Content & copy guidance', sub: 'Words that sell, not just fill space' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-5 rounded-xl bg-[#171717] border border-gray-800">
                <CheckIcon />
                <div>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PACKAGES ── */}
      <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Choose your starting point</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">All packages include strategy, design, development, and SEO. Pick what fits your stage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <div className="flex flex-col p-8 rounded-2xl bg-[#1b1b1b] border border-gray-800 hover:border-gray-600 transition-all">
              <div className="mb-6">
                <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">Starter</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-1">Get Online & Start Selling</h3>
                <p className="text-[#43ffae] font-bold text-lg">From €799</p>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                A clean, fast website that converts visitors into enquiries. Perfect if you're launching online or replacing a site that isn't working.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'WordPress or Shopify setup',
                  'Up to 5 pages',
                  'Mobile-first design',
                  'Basic on-page SEO',
                  'Contact & lead capture forms',
                  'Delivered in 2 weeks',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>
              <Link href={`/${locale}/contact`} className="block text-center border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:border-[#43ffae] hover:text-[#43ffae] transition-all text-sm">
                Start Here →
              </Link>
            </div>

            {/* Growth - featured */}
            <div className="flex flex-col p-8 rounded-2xl bg-gradient-to-b from-[#1b2a2b] to-[#1b1b1b] border-2 border-[#43ffae] relative shadow-2xl shadow-[#43ffae]/10 hover:shadow-[#43ffae]/20 transition-all scale-[1.02]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-[#171717] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
                  MOST POPULAR
                </span>
              </div>
              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold text-white mb-1">Scale Your Revenue</h3>
                <p className="text-[#43ffae] font-bold text-lg">From €1,999</p>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
                The full growth stack. A high-converting website or e-commerce store with SEO and CRO built in. This is what businesses invest in when they're serious about growth.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Custom WordPress, Shopify, or WooCommerce',
                  'Conversion-rate optimisation (CRO)',
                  'Full SEO setup + content strategy',
                  'Speed optimisation (95+ PageSpeed)',
                  'Checkout optimisation (e-com)',
                  'Analytics, tracking & reporting',
                  'Delivered in 3–4 weeks',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-200 text-sm">
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>
              <Link href={`/${locale}/contact`} className="block text-center bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-[#171717] px-6 py-3 rounded-full font-bold hover:scale-105 transition-all text-sm">
                Grow My Revenue →
              </Link>
            </div>

            {/* Monthly */}
            <div className="flex flex-col p-8 rounded-2xl bg-[#1b1b1b] border border-gray-800 hover:border-gray-600 transition-all">
              <div className="mb-6">
                <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">Ongoing</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-1">Keep Growing Every Month</h3>
                <p className="text-[#43ffae] font-bold text-lg">From €499/mo</p>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                Growth doesn't stop at launch. Monthly SEO, CRO, and content improvements that compound — so your traffic and revenue keep climbing quarter after quarter.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Monthly SEO & content updates',
                  'Conversion tracking & A/B testing',
                  'Technical SEO monitoring',
                  'AI search visibility (GEO)',
                  'Monthly performance report',
                  'Priority support',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>
              <Link href={`/${locale}/contact`} className="block text-center border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:border-[#43ffae] hover:text-[#43ffae] transition-all text-sm">
                Get Monthly Growth →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PROCESS ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">How it works</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">No 3-month discovery phases. No endless back-and-forth. A clean, direct process.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[calc(33%-1rem)] right-[calc(33%-1rem)] h-px bg-gradient-to-r from-[#13aff0]/40 via-[#43ffae]/40 to-[#13aff0]/40" />
            {[
              {
                num: '01',
                title: 'Audit',
                body: 'We review your current site, competitors, and goals. You get a clear picture of what\'s leaking revenue — and exactly what to fix first.',
                color: '#13aff0',
              },
              {
                num: '02',
                title: 'Build & Fix',
                body: 'We design and build your site with conversion and SEO as the foundation, not an afterthought. Fast turnaround. Clean delivery.',
                color: '#43ffae',
              },
              {
                num: '03',
                title: 'Grow',
                body: 'Monthly SEO, content, and CRO improvements that compound over time. Your traffic and revenue grow every quarter.',
                color: '#13aff0',
              },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black"
                  style={{ background: `${step.color}15`, border: `2px solid ${step.color}40`, color: step.color }}
                >
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WHY US ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Why work with us</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">We're not a bloated agency with 40 people and 6-month timelines. We're a focused team that builds fast and thinks about your revenue first.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                title: 'Delivered fast',
                body: 'We use AI-assisted development to build in weeks, not months. No unnecessary delays. No "waiting on the designer". You get results when you need them.',
              },
              {
                icon: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                title: 'Conversion-first',
                body: 'Every design decision — layout, copy, page structure, CTAs — is made to convert. We think like marketers, not just developers.',
              },
              {
                icon: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
                title: 'SEO + AI visibility',
                body: 'You get Google SEO and GEO (AI search visibility) coverage in every build. Your brand stays visible as search evolves — on Google today, in AI tools tomorrow.',
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#1b1b1b] border border-gray-800 hover:border-[#13aff0]/40 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CASE STUDY ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What a Growth build looks like</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">A typical before-and-after from a full Growth package.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#171717] border border-red-900/40">
              <div className="inline-block bg-red-900/30 text-red-400 text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-wider">BEFORE</div>
              <h3 className="text-lg font-bold text-white mb-5">E-commerce store with potential — but leaking revenue</h3>
              <ul className="space-y-3">
                {[
                  '4.2s load time on mobile',
                  'No clear CTA above the fold',
                  '2.1% conversion rate',
                  'Ranking for 12 keywords',
                  '70% bounce rate',
                  'Checkout abandoned at 78%',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <XIcon /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#171717] border border-[#43ffae]/30">
              <div className="inline-block bg-[#43ffae]/10 text-[#43ffae] text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-wider">AFTER</div>
              <h3 className="text-lg font-bold text-white mb-5">Rebuilt for traffic, conversions, and revenue</h3>
              <ul className="space-y-3">
                {[
                  '0.9s load time (95 PageSpeed)',
                  'Clear offer and CTA on every page',
                  '3.8% conversion rate (+81%)',
                  'Ranking for 140+ keywords',
                  'Bounce rate down to 42%',
                  'Checkout abandonment down to 51%',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200 text-sm">
                    <CheckIcon /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-600 text-xs mt-6">Results based on a composite of typical client outcomes. Individual results vary.</p>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0d1f2d] via-[#0d2218] to-[#0d1f2d]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Your website should be your best salesperson.
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Get a free audit. We'll show you the top 3 things costing you sales right now — no pitch, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="group inline-block bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-[#171717] px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all hover:shadow-2xl hover:shadow-[#13aff0]/30"
            >
              Get My Free Audit
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="#packages"
              className="inline-block bg-transparent text-white border border-gray-600 px-12 py-5 rounded-full text-lg font-semibold hover:border-gray-400 transition-all"
            >
              View Packages
            </a>
          </div>
          <p className="text-gray-500 mt-6 text-sm">Free, no-obligation • Delivered within 48 hours</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
