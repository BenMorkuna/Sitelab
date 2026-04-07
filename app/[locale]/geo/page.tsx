'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocale } from 'next-intl';
import StructuredData from '../components/StructuredData';
import { geoServiceSchema } from '../lib/schemas';

const tr = {
  en: {
    badge: '🤖 PRIMARY SERVICE',
    h1a: 'GEO Optimization',
    h1b: 'Get Found in AI Search',
    sub: 'Appear in ChatGPT, Perplexity, Claude, and Gemini search results. Future-proof your brand with Generative Engine Optimization.',
    whatTitle: 'What is',
    whatHighlight: 'GEO',
    whatP1: 'is the practice of optimizing your content to appear in AI-generated search results and recommendations.',
    whatP2: 'Unlike traditional SEO that focuses on Google rankings, GEO ensures your brand appears when people ask ChatGPT, Perplexity, Claude, or Gemini for recommendations, information, or solutions.',
    whatP3: 'Think of it this way:',
    whatQuote: 'If someone asks ChatGPT "What\'s the best web development agency in Lithuania?", your business should be in that answer.',
    whatQuoteEnd: 'That\'s GEO.',
    whyTitle: 'Why GEO Matters',
    whyHighlight: 'Right Now',
    whySub: 'The shift from Google to AI search is happening faster than you think',
    stats: [
      { num: '200M+', title: 'Weekly AI Users', desc: 'Over 200 million people use ChatGPT weekly. Perplexity, Claude, and Gemini add millions more. AI search is already mainstream.' },
      { num: '65%', title: 'Prefer AI Answers', desc: '65% of users prefer AI-generated answers over traditional search results. This number grows every month.' },
      { num: 'Early', title: 'Competitive Advantage', desc: 'Most businesses don\'t even know what GEO is yet. Being early means you dominate while competitors are still learning.' },
    ],
    pkgTitle: 'GEO',
    pkgHighlight: 'Service Packages',
    pkgSub: 'Comprehensive solutions to get your brand discovered in AI search results',
    pkgPopular: 'MOST POPULAR',
    pkgCta: 'Get Started',
    packages: [
      {
        name: 'GEO Content Optimization', price: 'From €599/mo', border: '#13aff0',
        desc: 'Optimize your existing content to rank in AI-generated responses and recommendations.',
        features: ['Content analysis & AI readability audit', 'Entity structuring for AI recognition', 'Citation-worthy content formatting', 'AI-friendly metadata optimization', 'Semantic keyword integration', 'Monthly AI visibility reports'],
      },
      {
        name: 'GEO Entity Structuring', price: 'From €899/mo', border: '#43ffae', popular: true,
        desc: 'Build comprehensive entity recognition so AI models understand and recommend your brand.',
        features: ['Knowledge graph optimization', 'Brand entity development', 'Wikipedia & Wikidata presence', 'Structured data implementation', 'AI citation building', 'Authority establishment across AI sources', 'Quarterly strategy reviews'],
      },
      {
        name: 'GEO Distribution Strategy', price: 'From €1,299/mo', border: '#13aff0',
        desc: 'Strategic content distribution to maximize AI discovery across all major platforms.',
        features: ['Multi-platform content syndication', 'AI-optimized press releases', 'Podcast & video transcript optimization', 'Social signal amplification', 'Community forum participation', 'AI training data placement', 'Comprehensive visibility tracking', 'Dedicated account manager'],
      },
    ],
    howTitle: 'How',
    howHighlight: 'GEO Works',
    steps: [
      {
        num: '1', title: 'AI Visibility Audit',
        desc: 'We test how AI models currently perceive your brand by querying ChatGPT, Perplexity, Claude, and Gemini with relevant searches. This reveals your current AI visibility baseline.',
        note: 'Example: "What are the best web agencies in Vilnius?" - Do you appear in the answer?',
        bullets: null,
      },
      {
        num: '2', title: 'Content Optimization',
        desc: 'We restructure your content to be citation-worthy and AI-friendly. This includes entity recognition, semantic clarity, and formatting that AI models prefer when generating responses.',
        note: null,
        bullets: ['Clear entity relationships', 'Structured data markup', 'Citation-ready facts'],
      },
      {
        num: '3', title: 'Strategic Distribution',
        desc: 'We ensure your optimized content reaches the sources that AI models trust and cite. This includes authoritative platforms, knowledge bases, and high-quality content networks.',
        note: 'AI models learn from trusted sources. We get you featured where it counts.',
        bullets: null,
      },
      {
        num: '4', title: 'Monitor & Improve',
        desc: 'Continuous monitoring of how AI models respond to queries about your industry, competitors, and brand. We track improvements and adjust strategies based on real AI behavior.',
        note: null,
        noteHighlight: 'Monthly reports showing:',
        noteText: 'AI mention frequency, citation quality, competitor comparisons',
        bullets: null,
        hasHighlightNote: true,
      },
    ],
    comboTitle1: 'GEO + SEO + Web Development',
    comboTitle2: 'Complete Search Dominance',
    comboSub: 'Maximize your visibility by combining all three services for unbeatable results',
    comboSeo: { title: 'SEO Services', desc: 'Traditional search engine optimization ensures you rank on Google and Bing. The stable foundation for consistent organic traffic.', link: 'Learn More About SEO' },
    comboWeb: { title: 'Web Development', desc: 'Build your website with GEO and SEO optimization built-in from day one. The perfect foundation for all search strategies.', link: 'Explore Web Development' },
    comboGeo: { title: 'GEO (You Are Here)', desc: 'Future-proof AI search optimization. Appear in ChatGPT, Perplexity, Claude, and Gemini results for maximum visibility.', current: 'Current Page' },
    comboBannerTitle: '💡 Why Combine All Three?',
    comboBannerText: ' creates the foundation. ',
    comboBannerText2: ' drives today\'s traffic. ',
    comboBannerText3: ' captures tomorrow\'s audience. Together, they create unstoppable search presence across all platforms—traditional and AI-powered.',
    comboBannerCta: 'Get Complete Package Quote',
    resultsTitle: 'Real',
    resultsHighlight: 'Results',
    resultsSub: 'See how GEO transforms AI visibility',
    before: { label: 'Before GEO', title: 'Tech Startup - Not Found', query: '"What are the best AI consulting firms in Europe?"', result: '❌ Not mentioned', resultSub: '- Brand invisible in AI responses', mentions: '0/month', citations: '0' },
    after: { label: 'After GEO', title: 'Featured in AI Responses', badge: 'AFTER 3 MONTHS', query: '"What are the best AI consulting firms in Europe?"', result: '✓ Listed', resultSub: 'in top 5 recommendations across ChatGPT, Perplexity, and Claude', mentions: '47/month', citations: '12 sources' },
    mentionsLabel: 'AI Mentions:',
    citationsLabel: 'Citations:',
    ctaTitle: 'Ready to Appear in AI Search Results?',
    ctaSub: 'Get a free GEO visibility audit and discover how your brand currently performs in AI-generated responses.',
    ctaBtn: 'Get Your Free GEO Audit',
    ctaNote: 'No obligations • See where you stand in AI search',
  },
  lt: {
    badge: '🤖 PAGRINDINĖ PASLAUGA',
    h1a: 'GEO Optimizavimas',
    h1b: 'Būkite Rasti AI Paieškoje',
    sub: 'Pasirodyti ChatGPT, Perplexity, Claude ir Gemini paieškos rezultatuose. Apsaugokite savo prekės ženklą ateičiai su Generatyviojo Variklio Optimizavimu.',
    whatTitle: 'Kas yra',
    whatHighlight: 'GEO',
    whatP1: 'yra jūsų turinio optimizavimo praktika, siekiant pasirodyti AI generuojamuose paieškos rezultatuose ir rekomendacijose.',
    whatP2: 'Skirtingai nuo tradicinio SEO, kuris orientuojasi į Google pozicijas, GEO užtikrina, kad jūsų prekės ženklas pasirodytų kai žmonės klausia ChatGPT, Perplexity, Claude ar Gemini rekomendacijų, informacijos ar sprendimų.',
    whatP3: 'Pagalvokite taip:',
    whatQuote: 'Jei kas nors klausia ChatGPT "Kokia geriausia žiniatinklio kūrimo agentūra Lietuvoje?", jūsų verslas turėtų būti tame atsakyme.',
    whatQuoteEnd: 'Tai yra GEO.',
    whyTitle: 'Kodėl GEO Svarbus',
    whyHighlight: 'Dabar',
    whySub: 'Perėjimas nuo Google prie AI paieškos vyksta greičiau nei manote',
    stats: [
      { num: '200M+', title: 'Savaitiniai AI Vartotojai', desc: 'Daugiau nei 200 milijonų žmonių kas savaitę naudoja ChatGPT. Perplexity, Claude ir Gemini prideda milijonus daugiau. AI paieška jau yra masinė.' },
      { num: '65%', title: 'Pirmenybė AI Atsakymams', desc: '65% vartotojų teikia pirmenybę AI generuotiems atsakymams prieš tradicinius paieškos rezultatus. Šis skaičius auga kiekvieną mėnesį.' },
      { num: 'Anksti', title: 'Konkurencinis Pranašumas', desc: 'Dauguma verslų dar net nežino, kas yra GEO. Ankstyvoji pozicija reiškia, kad dominuosite, kol konkurentai dar mokosi.' },
    ],
    pkgTitle: 'GEO',
    pkgHighlight: 'Paslaugų Paketai',
    pkgSub: 'Išsamūs sprendimai, kad jūsų prekės ženklas būtų atrastas AI paieškos rezultatuose',
    pkgPopular: 'POPULIARIAUSIAS',
    pkgCta: 'Pradėti',
    packages: [
      {
        name: 'GEO Turinio Optimizavimas', price: 'Nuo €599/mėn.', border: '#13aff0',
        desc: 'Optimizuokite esamą turinį, kad renkamasi AI generuojamuose atsakymuose ir rekomendacijose.',
        features: ['Turinio analizė ir AI skaitomumo auditas', 'Objektų struktūrizavimas AI atpažinimui', 'Cituotino turinio formatavimas', 'AI draugiškas metaduomenų optimizavimas', 'Semantinių raktažodžių integravimas', 'Mėnesinės AI matomumo ataskaitos'],
      },
      {
        name: 'GEO Objektų Struktūrizavimas', price: 'Nuo €899/mėn.', border: '#43ffae', popular: true,
        desc: 'Kurkite išsamų objektų atpažinimą, kad AI modeliai suprastų ir rekomenduotų jūsų prekės ženklą.',
        features: ['Žinių grafo optimizavimas', 'Prekės ženklo objekto kūrimas', 'Wikipedia ir Wikidata buvimas', 'Struktūrizuotų duomenų diegimas', 'AI citavimo kūrimas', 'Autoriteto kūrimas AI šaltiniuose', 'Ketvirtiniai strategijos apžvalginiai'],
      },
      {
        name: 'GEO Platinimo Strategija', price: 'Nuo €1.299/mėn.', border: '#13aff0',
        desc: 'Strateginis turinio platinimas maksimaliam AI atradimui visose pagrindinėse platformose.',
        features: ['Kelių platformų turinio sindikacija', 'AI optimizuoti pranešimai spaudai', 'Podcast ir vaizdo transkriptų optimizavimas', 'Socialinių signalų stiprinimas', 'Bendruomenės forumų dalyvavimas', 'AI mokymo duomenų talpinimas', 'Išsamus matomumo stebėjimas', 'Paskirtas paskyros vadybininkas'],
      },
    ],
    howTitle: 'Kaip',
    howHighlight: 'Veikia GEO',
    steps: [
      {
        num: '1', title: 'AI Matomumo Auditas',
        desc: 'Testuojame, kaip AI modeliai šiuo metu suvokia jūsų prekės ženklą, pateikdami užklausas ChatGPT, Perplexity, Claude ir Gemini su aktualiais paieškos terminais. Tai atskleidžia jūsų dabartinį AI matomumo lygį.',
        note: 'Pavyzdys: "Kokios geriausios žiniatinklio agentūros Vilniuje?" — ar pasirodysite atsakyme?',
        bullets: null,
      },
      {
        num: '2', title: 'Turinio Optimizavimas',
        desc: 'Restruktūrizuojame jūsų turinį, kad jis būtų vertas citavimo ir AI draugiškas. Tai apima objektų atpažinimą, semantinį aiškumą ir formatavimą, kurį AI modeliai pirmenybę teikia generuojant atsakymus.',
        note: null,
        bullets: ['Aiški objektų ryšiai', 'Struktūrizuotų duomenų žymėjimas', 'Cituotini faktai'],
      },
      {
        num: '3', title: 'Strateginis Platinimas',
        desc: 'Užtikriname, kad jūsų optimizuotas turinys pasiektų šaltinius, kuriais AI modeliai pasitiki ir cituoja. Tai apima autoritetingas platformas, žinių bazes ir aukštos kokybės turinio tinklus.',
        note: 'AI modeliai mokosi iš patikimų šaltinių. Pasirūpiname, kad jus pastebėtų tenai, kur svarbu.',
        bullets: null,
      },
      {
        num: '4', title: 'Stebėjimas ir Tobulinimas',
        desc: 'Nuolatinis stebėjimas, kaip AI modeliai reaguoja į užklausas apie jūsų pramonę, konkurentus ir prekės ženklą. Stebime pagerėjimus ir koreguojame strategijas remiantis realiu AI elgesiu.',
        note: null,
        noteHighlight: 'Mėnesinės ataskaitos rodo:',
        noteText: 'AI paminėjimų dažnumas, citavimo kokybė, konkurentų palyginimas',
        bullets: null,
        hasHighlightNote: true,
      },
    ],
    comboTitle1: 'GEO + SEO + Svetainių Kūrimas',
    comboTitle2: 'Pilnas Paieškos Dominavimas',
    comboSub: 'Maksimizuokite matomumą derindami visas tris paslaugas nepralenkiamiems rezultatams',
    comboSeo: { title: 'SEO Paslaugos', desc: 'Tradicinis paieškos variklio optimizavimas užtikrina, kad renkamasi Google ir Bing. Stabilus pagrindas nuolatiniam organiniam srautui.', link: 'Sužinoti Daugiau apie SEO' },
    comboWeb: { title: 'Svetainių Kūrimas', desc: 'Sukurkite savo svetainę su GEO ir SEO optimizavimu nuo pirmos dienos. Tobulas pagrindas visoms paieškos strategijoms.', link: 'Tyrinėti Svetainių Kūrimą' },
    comboGeo: { title: 'GEO (Esate Čia)', desc: 'Ateičiai skirtas AI paieškos optimizavimas. Pasirodyti ChatGPT, Perplexity, Claude ir Gemini rezultatuose maksimaliam matomumui.', current: 'Dabartinis Puslapis' },
    comboBannerTitle: '💡 Kodėl Derinti Visus Tris?',
    comboBannerText: ' sukuria pagrindą. ',
    comboBannerText2: ' valdo šiandienos srautą. ',
    comboBannerText3: ' sugaudo rytojaus auditoriją. Kartu jie sukuria nenugalimą paieškos buvimą visose platformose — tradicinėse ir AI varomomose.',
    comboBannerCta: 'Gauti Pilno Paketo Pasiūlymą',
    resultsTitle: 'Realūs',
    resultsHighlight: 'Rezultatai',
    resultsSub: 'Pažiūrėkite, kaip GEO transformuoja AI matomumą',
    before: { label: 'Prieš GEO', title: 'Technologijų startuolis — Nerastas', query: '"Kokios geriausios AI konsultavimo įmonės Europoje?"', result: '❌ Nepaminėtas', resultSub: '— prekės ženklas nematomas AI atsakymuose', mentions: '0/mėn.', citations: '0' },
    after: { label: 'Po GEO', title: 'Pagrindinis AI Atsakymuose', badge: 'PO 3 MĖNESIŲ', query: '"Kokios geriausios AI konsultavimo įmonės Europoje?"', result: '✓ Įtrauktas', resultSub: 'į 5 geriausių rekomendacijų sąrašą ChatGPT, Perplexity ir Claude', mentions: '47/mėn.', citations: '12 šaltiniai' },
    mentionsLabel: 'AI Paminėjimai:',
    citationsLabel: 'Citavimas:',
    ctaTitle: 'Pasiruošę Pasirodyti AI Paieškos Rezultatuose?',
    ctaSub: 'Gaukite nemokamą GEO matomumo auditą ir sužinokite, kaip jūsų prekės ženklas šiuo metu veikia AI generuojamuose atsakymuose.',
    ctaBtn: 'Gauti Nemokamą GEO Auditą',
    ctaNote: 'Jokių įsipareigojimų • Sužinokite, kur stovite AI paieškoje',
  },
};

export default function GEOServices() {
  const locale = useLocale();
  const t = locale === 'lt' ? tr.lt : tr.en;

  return (
    <div className="min-h-screen bg-[#171717]">
      <StructuredData data={geoServiceSchema(locale)} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#43ffae]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-[#1b1b1b] border border-[#43ffae]/30 rounded-full">
            <span className="text-[#43ffae] text-sm font-bold">{t.badge}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeIn">
            {t.h1a}
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              {t.h1b}
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">{t.sub}</p>
        </div>
      </section>

      {/* What is GEO Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
            {t.whatTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">{t.whatHighlight}</span>?
          </h2>
          <div className="bg-[#171717] p-8 sm:p-12 rounded-2xl border border-gray-800">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              <span className="text-[#43ffae] font-bold">Generative Engine Optimization (GEO)</span> {t.whatP1}
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">{t.whatP2}</p>
            <p className="text-lg text-gray-400 leading-relaxed">
              {t.whatP3} <span className="text-white font-semibold">{t.whatQuote}</span> {t.whatQuoteEnd}
            </p>
          </div>
        </div>
      </section>

      {/* Why GEO Matters Now */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            {t.whyTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">{t.whyHighlight}</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">{t.whySub}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {t.stats.map((s, i) => (
              <div key={i} className={`bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 hover:border-${i === 1 ? '[#43ffae]' : '[#13aff0]'} transition-all`}>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-4">{s.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO Services Packages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            {t.pkgTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">{t.pkgHighlight}</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">{t.pkgSub}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.packages.map((pkg, i) => (
              <div
                key={i}
                className="bg-[#171717] p-8 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-2 relative"
                style={{ border: `2px solid ${pkg.border}` }}
              >
                {'popular' in pkg && pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#13aff0] to-[#43ffae] px-4 py-1 rounded-full">
                    <span className="text-white text-xs font-bold">{t.pkgPopular}</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-3">{pkg.name}</h3>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-6">{pkg.price}</div>
                <p className="text-gray-400 mb-6">{pkg.desc}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-[#43ffae] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/${locale}/contact`} className="block text-center py-4 bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white rounded-full font-bold hover:scale-105 transition-all">
                  {t.pkgCta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How GEO Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            {t.howTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">{t.howHighlight}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {t.steps.map((step, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#13aff0] to-[#43ffae] rounded-full flex items-center justify-center text-sm">{step.num}</span>
                  {step.title}
                </h3>
                <p className="text-gray-400 mb-6">{step.desc}</p>
                {step.note && (
                  <div className="bg-[#1b1b1b] p-4 rounded-lg border border-gray-800 text-sm text-gray-400 italic">{step.note}</div>
                )}
                {step.bullets && (
                  <div className="bg-[#1b1b1b] p-4 rounded-lg border border-gray-800">
                    <ul className="space-y-2 text-sm text-gray-400">
                      {step.bullets.map((b, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 bg-${j % 2 === 0 ? '[#43ffae]' : '[#13aff0]'} rounded-full`}></div>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {step.hasHighlightNote && (
                  <div className="bg-[#1b1b1b] p-4 rounded-lg border border-gray-800">
                    <div className="text-sm text-gray-400">
                      <span className="text-[#43ffae] font-semibold">{step.noteHighlight}</span>
                      <br />{step.noteText}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO + SEO + Web Development */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">{t.comboTitle1}</span>
            <span className="block mt-2 text-white">{t.comboTitle2}</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">{t.comboSub}</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link href={`/${locale}/seo`} className="group bg-[#1b1b1b] p-8 rounded-2xl border-2 border-gray-800 hover:border-[#13aff0] transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-[#13aff0]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#13aff0] transition-colors">{t.comboSeo.title}</h3>
              <p className="text-gray-400 mb-4">{t.comboSeo.desc}</p>
              <div className="flex items-center text-[#43ffae] font-semibold group-hover:translate-x-2 transition-transform">
                {t.comboSeo.link}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href={`/${locale}/web-solutions`} className="group bg-[#1b1b1b] p-8 rounded-2xl border-2 border-gray-800 hover:border-[#43ffae] transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-[#43ffae]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#43ffae] to-[#13aff0] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#43ffae] transition-colors">{t.comboWeb.title}</h3>
              <p className="text-gray-400 mb-4">{t.comboWeb.desc}</p>
              <div className="flex items-center text-[#43ffae] font-semibold group-hover:translate-x-2 transition-transform">
                {t.comboWeb.link}
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
              <h3 className="text-2xl font-bold text-white mb-4">{t.comboGeo.title}</h3>
              <p className="text-gray-400 mb-4">{t.comboGeo.desc}</p>
              <div className="flex items-center text-[#43ffae] font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t.comboGeo.current}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#13aff0]/10 to-[#43ffae]/10 p-10 rounded-2xl border border-[#13aff0]/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{t.comboBannerTitle}</h3>
            <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
              <span className="text-[#43ffae] font-semibold">{locale === 'lt' ? 'Svetainių Kūrimas' : 'Web Development'}</span>{t.comboBannerText}
              <span className="text-[#13aff0] font-semibold">SEO</span>{t.comboBannerText2}
              <span className="text-[#43ffae] font-semibold">GEO</span>{t.comboBannerText3}
            </p>
            <Link href={`/${locale}/contact`} className="inline-block bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all hover:shadow-2xl">
              {t.comboBannerCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Results/Case Studies */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            {t.resultsTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">{t.resultsHighlight}</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">{t.resultsSub}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#171717] p-8 rounded-2xl border border-gray-800">
              <div className="mb-6">
                <span className="text-sm text-gray-500 uppercase tracking-wider">{t.before.label}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{t.before.title}</h3>
              </div>
              <div className="bg-[#1b1b1b] p-6 rounded-lg mb-6 border border-red-900/20">
                <p className="text-sm text-gray-400 mb-2 italic">{t.before.query}</p>
                <p className="text-gray-500"><span className="text-red-400">{t.before.result}</span> {t.before.resultSub}</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{t.mentionsLabel} <span className="text-white font-bold">{t.before.mentions}</span></span>
                <span className="text-gray-500">{t.citationsLabel} <span className="text-white font-bold">{t.before.citations}</span></span>
              </div>
            </div>

            <div className="bg-[#171717] p-8 rounded-2xl border-2 border-[#43ffae] relative">
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#13aff0] to-[#43ffae] px-3 py-1 rounded-full text-xs text-white font-bold">
                {t.after.badge}
              </div>
              <div className="mb-6">
                <span className="text-sm text-[#43ffae] uppercase tracking-wider">{t.after.label}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{t.after.title}</h3>
              </div>
              <div className="bg-[#1b1b1b] p-6 rounded-lg mb-6 border border-[#43ffae]/20">
                <p className="text-sm text-gray-400 mb-2 italic">{t.after.query}</p>
                <p className="text-gray-300"><span className="text-[#43ffae]">{t.after.result}</span> {t.after.resultSub}</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{t.mentionsLabel} <span className="text-[#43ffae] font-bold">{t.after.mentions}</span></span>
                <span className="text-gray-400">{t.citationsLabel} <span className="text-[#43ffae] font-bold">{t.after.citations}</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#13aff0] via-[#43ffae] to-[#13aff0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1b1b1b] mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-[#1b1b1b]/90 mb-10">{t.ctaSub}</p>
          <Link href={`/${locale}/contact`} className="inline-block bg-white text-[#13aff0] px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl">
            {t.ctaBtn}
          </Link>
          <p className="text-[#1b1b1b]/70 mt-6 text-sm">{t.ctaNote}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
