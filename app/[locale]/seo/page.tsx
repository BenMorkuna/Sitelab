'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';
import { useLocale } from 'next-intl';
import StructuredData from '../components/StructuredData';
import { seoServiceSchema } from '../lib/schemas';

const tr = {
  en: {
    badge: 'SEO · GEO · CRO',
    h1a: 'More Traffic.',
    h1b: 'More Customers.',
    h1c: 'Less Guesswork.',
    sub: 'Rank on Google, get found in AI tools like ChatGPT — and turn that traffic into paying customers. We build organic growth systems for small and mid-size businesses that work without ad spend.',
    bullets: ['↑ Rank higher on Google', '↑ Show up in ChatGPT & AI search', '↑ Turn visitors into customers'],
    ctaPrimary: 'Get Your Free SEO Audit',
    ctaSecondary: 'or book a free 15-min call →',
    problemTitle: 'Sound familiar?',
    problemSub: 'You have a good business — but your website isn\'t bringing in the customers it should.',
    problems: [
      { pain: '"My competitors rank above me — and I don\'t know why."', sub: 'You\'ve been told SEO takes time. Meanwhile, someone else is getting your customers.' },
      { pain: '"I get some traffic, but almost nobody buys."', sub: 'Traffic without conversions is just a number. The real problem is visitors aren\'t being turned into customers.' },
      { pain: '"I\'m spending money on ads just to stay alive."', sub: 'Paid ads stop the moment you stop paying. Organic traffic keeps working — even when you\'re asleep.' },
      { pain: '"I don\'t know where my next client is coming from."', sub: 'Unpredictable revenue is stressful. A working SEO system turns your website into a consistent lead source.' },
    ],
    solTitle: 'SEO isn\'t a tactic.',
    solHighlight: 'It\'s a growth system.',
    solSub: 'We combine three layers that most agencies treat separately — so every part of your funnel is working.',
    solutions: [
      { label: 'SEO', headline: 'Google Rankings', desc: 'We fix what\'s holding you back technically, optimize your content for the right keywords, and build the authority that gets you to page one — and keeps you there.', color: '#13aff0' },
      { label: 'AI Search Visibility', headline: 'Beyond Google', desc: 'ChatGPT, Perplexity, and Google\'s AI Overview are now how many people find businesses. Most SEO agencies ignore this entirely. We optimize for both — so you capture traffic your competitors don\'t even know they\'re losing.', color: '#43ffae', badge: 'Our Edge' },
      { label: 'CRO', headline: 'More Conversions', desc: 'Getting traffic is only half the job. We optimize your pages so more visitors take action — fill out a form, make a purchase, or pick up the phone.', color: '#13aff0' },
    ],
    outcomesTitle: 'What you actually get',
    outcomes: [
      { stat: '+180%', label: 'Avg. organic traffic growth', sub: 'within 6 months' },
      { stat: 'Top 3', label: 'Google rankings', sub: 'for target keywords' },
      { stat: '+40%', label: 'Conversion rate uplift', sub: 'from CRO layer' },
      { stat: '3×', label: 'More qualified leads', sub: 'without paid ads' },
    ],
    pkgTitle: 'Simple plans.',
    pkgHighlight: 'Real results.',
    pkgSub: 'No confusing tiers. Pick the plan that fits where you are right now.',
    pkgPopular: 'MOST POPULAR',
    pkgFootnote: 'Not sure which plan fits?',
    pkgFootnoteLink: 'Book a free audit',
    pkgFootnoteSuffix: '— we\'ll tell you exactly what you need.',
    packages: [
      {
        name: 'Starter', price: 'From €399/mo', tag: null,
        forWho: 'Small businesses & local services',
        promise: 'Get found on Google and stop losing customers to competitors who rank above you.',
        outcomes: ['Core keyword research & targeting', 'Technical SEO fixes', 'On-page optimisation for conversions', 'Monthly report with real results'],
        gradient: 'from-[#13aff0] to-[#43ffae]', cta: 'Start Growing',
      },
      {
        name: 'Growth', price: 'From €699/mo', tag: 'MOST POPULAR',
        forWho: 'Growing businesses ready to scale',
        promise: 'Full SEO + AI visibility + conversion optimization — everything working together to drive revenue.',
        outcomes: ['Core keyword research & targeting', 'Technical SEO fixes', 'On-page optimisation for conversions', 'Monthly report with real results', 'GEO: visibility in ChatGPT & AI tools', 'CRO: turn more visitors into paying customers', 'Content strategy that builds authority', 'Competitor gap analysis & targeting'],
        gradient: 'from-[#43ffae] to-[#13aff0]', cta: 'Get the Growth Plan',
      },
      {
        name: 'Full Package', price: 'From €1,099/mo', tag: null,
        forWho: 'E-commerce & aggressive growth targets',
        promise: 'Dominate your category. Drive high-intent traffic at scale and turn your store into a revenue machine.',
        outcomes: ['Core keyword research & targeting', 'Technical SEO fixes', 'On-page optimisation for conversions', 'Monthly report with real results', 'GEO: visibility in ChatGPT & AI tools', 'CRO: turn more visitors into paying customers', 'Content strategy that builds authority', 'Competitor gap analysis & targeting', 'E-commerce SEO (products, categories, schema)', 'Advanced CRO — cart & checkout optimisation', 'Full AI search visibility across all platforms', 'Priority execution & dedicated reporting'],
        gradient: 'from-[#13aff0] to-[#43ffae]', cta: 'Scale My Business',
      },
    ],
    processTitle: 'How it works',
    processSub: 'Three steps. No fluff. Just progress.',
    process: [
      { step: '01', title: 'Audit', desc: "We dig into your site, your competitors, and your market. You'll see exactly what's holding you back and what's within reach.", color: '#13aff0' },
      { step: '02', title: 'Optimize', desc: 'We fix technical issues, optimize your content, and build the structure that Google — and your visitors — reward.', color: '#43ffae' },
      { step: '03', title: 'Grow', desc: "Rankings climb, traffic compounds, and conversions improve month over month. You see it in your analytics — and your revenue.", color: '#13aff0' },
    ],
    whyTitle: 'Why SiteLab?',
    whySub: 'There are hundreds of SEO agencies. Here\'s what makes us different.',
    differentiators: [
      { title: 'We optimize for Google AND AI search', desc: "Most SEO agencies are still 100% focused on Google. That made sense in 2020. Today, a growing share of your customers find businesses through ChatGPT, Perplexity, or Google's AI Overview — and most of your competitors aren't visible there yet. We are." },
      { title: 'Traffic + conversions, not just rankings', desc: 'A page-one ranking means nothing if visitors don\'t convert. We optimize both — so you get more traffic and more of that traffic turns into revenue.' },
      { title: 'Results you can measure', desc: 'No vanity metrics. We track rankings, organic traffic, leads, and revenue impact. Monthly reports are clear, honest, and tied to business outcomes.' },
      { title: 'Faster execution with AI tools', desc: 'We use AI to move faster on research, content, and audits — which means less time to results and more value per euro spent.' },
    ],
    caseTitle: 'Real results',
    caseSub: 'What a focused SEO + CRO effort actually looks like.',
    caseTags: ['E-Commerce', '6-month engagement', 'Growth Plan'],
    caseHeadline: 'From 800 to 2,200 monthly visitors — without a single paid ad.',
    caseDesc: 'An e-commerce store was spending heavily on Google Ads but seeing flat organic traffic and poor conversion rates. After a full technical audit, keyword restructuring, and CRO improvements to the product and checkout pages — the results compounded fast.',
    caseResults: [
      { stat: '+175%', label: 'Organic traffic' },
      { stat: '14 → 3', label: 'Avg. ranking position' },
      { stat: '+38%', label: 'Conversion rate' },
      { stat: '−60%', label: 'Ad spend dependency' },
    ],
    faqTitle: 'Common questions',
    faqSub: 'No jargon. Just straight answers.',
    faq: [
      { q: 'How long before I see results?', a: 'Most clients see measurable improvements in rankings and traffic within 60–90 days. Technical fixes and on-page optimizations can show results faster. SEO compounds over time — the longer you invest, the stronger the returns.' },
      { q: 'Do you cover AI search tools like ChatGPT?', a: 'Yes — and this is where most agencies fall behind. A growing number of people now ask ChatGPT, Perplexity, or Google\'s AI Overview for recommendations before ever visiting a website. We structure your content and authority so your business shows up in those answers. It\'s built into every plan, not a paid add-on.' },
      { q: 'What\'s the difference between SEO and CRO?', a: 'SEO brings people to your website. CRO (Conversion Rate Optimization) turns those visitors into customers. Most agencies only do one. We do both — because traffic without conversions is just a vanity metric.' },
      { q: 'Do I need ongoing SEO or is a one-time fix enough?', a: 'Search algorithms change. Competitors keep optimizing. A one-time fix can show quick wins, but sustained growth requires ongoing work. Our monthly plans keep you ahead of the curve and compound your results over time.' },
      { q: 'Will this work for my industry?', a: 'Yes. We work with local businesses, e-commerce stores, service companies, and B2B brands. The tactics differ by industry, but the goal is always the same: more qualified traffic and more revenue.' },
      { q: 'What does the free audit include?', a: 'We review your current rankings, technical health, on-page issues, and conversion bottlenecks. You\'ll get a clear picture of where you\'re losing traffic and what would move the needle fastest — no strings attached.' },
    ],
    ctaFinalTitle: 'Let\'s find out what\'s holding your site back.',
    ctaFinalSub: 'Get a free audit — no sales pitch, no commitment. Just a clear picture of your opportunities.',
    ctaFinalBtn: 'Get My Free SEO Audit',
    ctaFinalLink: 'or book a 15-min strategy call →',
  },
  lt: {
    badge: 'SEO · GEO · CRO',
    h1a: 'Daugiau Srauto.',
    h1b: 'Daugiau Klientų.',
    h1c: 'Mažiau Spėliojimų.',
    sub: 'Renkitės Google, būkite rasti AI įrankiuose kaip ChatGPT — ir paverčiame tą srautą mokančiais klientais. Kuriame organinius augimo sistemas mažoms ir vidutinėms įmonėms, kurios veikia be reklamos išlaidų.',
    bullets: ['↑ Renkitės aukščiau Google', '↑ Pasirodyti ChatGPT ir AI paieškoje', '↑ Paverčiame lankytojus klientais'],
    ctaPrimary: 'Gauti Nemokamą SEO Auditą',
    ctaSecondary: 'arba rezervuokite nemokamą 15 min. skambutį →',
    problemTitle: 'Skamba pažįstamai?',
    problemSub: 'Turite gerą verslą — bet jūsų svetainė neatneša tiek klientų, kiek turėtų.',
    problems: [
      { pain: '"Mano konkurentai renkasi aukščiau manęs — ir nežinau kodėl."', sub: 'Jums sakė, kad SEO reikia laiko. Tuo tarpu kažkas kitas gauna jūsų klientus.' },
      { pain: '"Gaunu šiek tiek srauto, bet beveik niekas neperka."', sub: 'Srautas be konversijų — tik skaičius. Tikra problema — lankytojai nepaverčiami klientais.' },
      { pain: '"Leidžiu pinigus reklamai tik norėdamas išgyventi."', sub: 'Mokamos reklamos sustoja kai tik nustojate mokėti. Organinis srautas dirba — net kol miegate.' },
      { pain: '"Nežinau, iš kur ateis kitas klientas."', sub: 'Nenuspėjamos pajamos sukelia stresą. Veikianti SEO sistema paverčia jūsų svetainę nuolatiniu klientų šaltiniu.' },
    ],
    solTitle: 'SEO nėra taktika.',
    solHighlight: 'Tai augimo sistema.',
    solSub: 'Sujungiame tris sluoksnius, kuriuos dauguma agentūrų laiko atskirai — kad kiekviena jūsų kanalo dalis veiktų.',
    solutions: [
      { label: 'SEO', headline: 'Google Pozicijos', desc: 'Ištaisome tai, kas jus stabdo techniniu požiūriu, optimizuojame jūsų turinį reikalingiems raktažodžiams ir kuriame autoritetą, kuris pakelia į pirmąjį puslapį.', color: '#13aff0' },
      { label: 'AI Paieškos Matomumas', headline: 'Už Google ribų', desc: 'ChatGPT, Perplexity ir Google AI apžvalga dabar yra tai, kaip daugelis žmonių randa verslus. Dauguma SEO agentūrų to visiškai ignoruoja. Mes optimizuojame abu — kad galėtumėte pasikabinti srautą, apie kurį jūsų konkurentai net nežino.', color: '#43ffae', badge: 'Mūsų pranašumas' },
      { label: 'CRO', headline: 'Daugiau Konversijų', desc: 'Gauti srautą — tik pusė darbo. Optimizuojame jūsų puslapius, kad daugiau lankytojų imtųsi veiksmų — užpildytų formą, pirktų ar paskambintų.', color: '#13aff0' },
    ],
    outcomesTitle: 'Ką iš tikrųjų gaunate',
    outcomes: [
      { stat: '+180%', label: 'Vid. organinio srauto augimas', sub: 'per 6 mėnesius' },
      { stat: 'Top 3', label: 'Google pozicijos', sub: 'tiksliniais raktažodžiais' },
      { stat: '+40%', label: 'Konversijų rodiklio augimas', sub: 'iš CRO sluoksnio' },
      { stat: '3×', label: 'Daugiau kvalifikuotų klientų', sub: 'be mokamos reklamos' },
    ],
    pkgTitle: 'Paprasti planai.',
    pkgHighlight: 'Realūs rezultatai.',
    pkgSub: 'Jokių sudėtingų pakopų. Pasirinkite planą, kuris tinka jums dabar.',
    pkgPopular: 'POPULIARIAUSIAS',
    pkgFootnote: 'Nežinote, kuris planas tinka?',
    pkgFootnoteLink: 'Rezervuokite nemokamą auditą',
    pkgFootnoteSuffix: '— pasakysime tiksliai, ko jums reikia.',
    packages: [
      {
        name: 'Pradinis', price: 'Nuo €399/mėn.', tag: null,
        forWho: 'Mažos įmonės ir vietinės paslaugos',
        promise: 'Būkite rasti Google ir nustokite prarasti klientus konkurentams, kurie renkasi aukščiau.',
        outcomes: ['Pagrindiniai raktažodžiai ir taikymas', 'Techninė SEO optimizacija', 'Puslapių optimizavimas konversijoms', 'Mėnesinė ataskaita su realiais rezultatais'],
        gradient: 'from-[#13aff0] to-[#43ffae]', cta: 'Pradėti Augti',
      },
      {
        name: 'Augimas', price: 'Nuo €699/mėn.', tag: 'POPULIARIAUSIAS',
        forWho: 'Augančios įmonės, pasiruošusios augti',
        promise: 'Pilnas SEO + AI matomumas + konversijų optimizavimas — viskas veikia kartu pajamoms augti.',
        outcomes: ['Pagrindiniai raktažodžiai ir taikymas', 'Techninė SEO optimizacija', 'Puslapių optimizavimas konversijoms', 'Mėnesinė ataskaita su realiais rezultatais', 'GEO: matomumas ChatGPT ir AI įrankiuose', 'CRO: daugiau lankytojų → mokantys klientai', 'Turinio strategija ir autoritetingumo kūrimas', 'Konkurentų analizė ir taikymas'],
        gradient: 'from-[#43ffae] to-[#13aff0]', cta: 'Gauti Augimo Planą',
      },
      {
        name: 'Visas paketas', price: 'Nuo €1.099/mėn.', tag: null,
        forWho: 'E-komercija ir agresyvūs augimo tikslai',
        promise: 'Dominuokite savo kategorijoje. Didinkite didelio ketinimo srautą ir paverskite parduotuvę pajamų mašina.',
        outcomes: ['Pagrindiniai raktažodžiai ir taikymas', 'Techninė SEO optimizacija', 'Puslapių optimizavimas konversijoms', 'Mėnesinė ataskaita su realiais rezultatais', 'GEO: matomumas ChatGPT ir AI įrankiuose', 'CRO: daugiau lankytojų → mokantys klientai', 'Turinio strategija ir autoritetingumo kūrimas', 'Konkurentų analizė ir taikymas', 'E-komercijos SEO (produktai, kategorijos, schema)', 'Pažengęs CRO — krepšelio ir atsiskaitymo optimizavimas', 'Pilnas AI paieškos matomumas visose platformose', 'Prioritetinis vykdymas ir skirta ataskaita'],
        gradient: 'from-[#13aff0] to-[#43ffae]', cta: 'Auginti Savo Verslą',
      },
    ],
    processTitle: 'Kaip tai veikia',
    processSub: 'Trys žingsniai. Jokių tuščių kalbų. Tik pažanga.',
    process: [
      { step: '01', title: 'Auditas', desc: 'Nagrinėjame jūsų svetainę, konkurentus ir rinką. Pamatysite tiksliai, kas jus stabdo ir ko galima pasiekti.', color: '#13aff0' },
      { step: '02', title: 'Optimizavimas', desc: 'Ištaisome techninius trūkumus, optimizuojame turinį ir kuriame struktūrą, kurią Google — ir jūsų lankytojai — vertina.', color: '#43ffae' },
      { step: '03', title: 'Augimas', desc: 'Pozicijos kyla, srautas kaupiasi, o konversijos gerėja kiekvieną mėnesį. Matote tai analitikoje — ir pajamose.', color: '#13aff0' },
    ],
    whyTitle: 'Kodėl SiteLab?',
    whySub: 'Yra šimtai SEO agentūrų. Štai kas mus išskiria.',
    differentiators: [
      { title: 'Optimizuojame Google IR AI paieškai', desc: 'Dauguma SEO agentūrų vis dar 100% orientuojasi į Google. 2020-aisiais tai buvo prasminga. Šiandien vis daugiau jūsų klientų randa verslus per ChatGPT, Perplexity ar Google AI apžvalgą — ir dauguma jūsų konkurentų ten dar nematomi. Mes — taip.' },
      { title: 'Srautas + konversijos, ne tik pozicijos', desc: 'Pirmojo puslapio pozicija nieko nereiškia, jei lankytojai nekonvertuoja. Optimizuojame abu — kad gautumėte daugiau srauto ir daugiau jo virstų pajamomis.' },
      { title: 'Rezultatai, kuriuos galima išmatuoti', desc: 'Jokių tuščių metrikų. Stebime pozicijas, organinį srautą, klientus ir pajamų poveikį. Mėnesinės ataskaitos aiškios, sąžiningos ir susietos su verslo rezultatais.' },
      { title: 'Greitesnis vykdymas su AI įrankiais', desc: 'Naudojame AI greičiau judėti tyrimų, turinio ir auditų srityje — tai reiškia mažiau laiko iki rezultatų ir daugiau vertės už kiekvieną eurą.' },
    ],
    caseTitle: 'Realūs rezultatai',
    caseSub: 'Kaip atrodo tikslingo SEO + CRO darbo rezultatai.',
    caseTags: ['E-komercija', '6 mėnesių įsitraukimas', 'Augimo planas'],
    caseHeadline: 'Nuo 800 iki 2 200 mėnesinių lankytojų — be vienos mokamos reklamos.',
    caseDesc: 'E-komercijos parduotuvė leido daug pinigų Google reklamai, bet organinis srautas nesaugo, o konversijų rodiklis buvo prastas. Po pilno techninio audito, raktažodžių restruktūrizavimo ir CRO patobulinimų produktų ir atsiskaitymo puslapiuose — rezultatai sparčiai kaupėsi.',
    caseResults: [
      { stat: '+175%', label: 'Organinis srautas' },
      { stat: '14 → 3', label: 'Vid. pozicija' },
      { stat: '+38%', label: 'Konversijų rodiklis' },
      { stat: '−60%', label: 'Priklausomybė nuo reklamos' },
    ],
    faqTitle: 'Dažni klausimai',
    faqSub: 'Jokių žargonų. Tik tiesūs atsakymai.',
    faq: [
      { q: 'Kiek laiko praeina kol matomi rezultatai?', a: 'Dauguma klientų mato išmatuojamus pozicijų ir srauto pokyčius per 60–90 dienų. Techniniai pataisymai ir puslapio optimizavimai gali rodyti rezultatus greičiau. SEO kaupiasi laikui bėgant — kuo ilgiau investuojate, tuo stipresni rezultatai.' },
      { q: 'Ar dirbate su AI paieškos įrankiais kaip ChatGPT?', a: 'Taip — ir čia dauguma agentūrų atsilieka. Vis daugiau žmonių klausia ChatGPT, Perplexity ar Google AI apžvalgos rekomendacijų prieš lankydami svetainę. Struktūrizuojame jūsų turinį ir autoritetą, kad jūsų verslas pasirodytų tuose atsakymuose. Tai įtraukta į kiekvieną planą, o ne papildoma mokama paslauga.' },
      { q: 'Koks skirtumas tarp SEO ir CRO?', a: 'SEO atneša žmones į jūsų svetainę. CRO (Konversijų Rodiklio Optimizavimas) tuos lankytojus paverčia klientais. Dauguma agentūrų daro tik vieną. Mes darome abu — nes srautas be konversijų yra tik tuščia metrika.' },
      { q: 'Ar reikia nuolatinio SEO ar pakanka vienkartinio pataisymo?', a: 'Paieškos algoritmai keičiasi. Konkurentai nuolat optimizuoja. Vienkartinis pataisymas gali parodyti greitų rezultatų, bet ilgalaikiam augimui reikia nuolatinio darbo. Mūsų mėnesiniai planai leidžia jums išlikti priekyje ir kaupiasi laikui bėgant.' },
      { q: 'Ar tai veiks mano pramonėje?', a: 'Taip. Dirbame su vietinėmis įmonėmis, e-komercijos parduotuvėmis, paslaugų kompanijomis ir B2B prekių ženklais. Taktikos skiriasi priklausomai nuo pramonės, bet tikslas visada tas pats: daugiau kokybinio srauto ir daugiau pajamų.' },
      { q: 'Ką apima nemokamas auditas?', a: 'Peržiūrime jūsų dabartines pozicijas, techninę sveikatą, puslapio trūkumus ir konversijų kliūtis. Gausite aiškų vaizdą, kur prarandate srautą ir kas greičiausiai pagerintų situaciją — be jokių įsipareigojimų.' },
    ],
    ctaFinalTitle: 'Išsiaiškinkime, kas stabdo jūsų svetainę.',
    ctaFinalSub: 'Gaukite nemokamą auditą — jokio pardavimo, jokių įsipareigojimų. Tik aiškus galimybių vaizdas.',
    ctaFinalBtn: 'Gauti Nemokamą SEO Auditą',
    ctaFinalLink: 'arba rezervuokite 15 min. strateginį skambutį →',
  },
};

export default function SEOServices() {
  const locale = useLocale();
  const t = locale === 'lt' ? tr.lt : tr.en;

  const faqItems = t.faq.map((item) => ({
    question: item.q,
    answer: <p className="text-gray-400 leading-relaxed">{item.a}</p>,
  }));

  return (
    <div className="min-h-screen bg-[#171717]">
      <StructuredData data={seoServiceSchema(locale)} />
      <Navigation />

      {/* ── 1. HERO ── */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#13aff0]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#43ffae]/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-[#1b1b1b] border border-[#43ffae]/30 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#43ffae] animate-pulse" />
            <span className="text-[#43ffae] text-sm font-semibold">{t.badge}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            {t.h1a}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              {t.h1b}
            </span>
            {t.h1c}
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.sub}
          </p>

          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {t.bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                <svg className="w-4 h-4 text-[#43ffae] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-[#171717] px-10 py-4 rounded-full text-lg font-bold hover:scale-105 hover:shadow-2xl hover:shadow-[#13aff0]/30 transition-all"
            >
              {t.ctaPrimary}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors underline underline-offset-4"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.problemTitle}</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t.problemSub}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {t.problems.map((item, i) => (
              <div key={i} className="bg-[#171717] border border-gray-800 rounded-2xl p-7 hover:border-gray-700 transition-colors">
                <p className="text-white font-semibold text-lg mb-2 leading-snug">{item.pain}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.sub}</p>
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
              {t.solTitle}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
                {t.solHighlight}
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t.solSub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.solutions.map((item, i) => (
              <div key={i} className="relative bg-[#1b1b1b] rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                {item.badge && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#43ffae] to-[#13aff0] px-3 py-0.5 rounded-full text-[#171717] text-xs font-bold">
                    {item.badge}
                  </div>
                )}
                <div className="text-xs font-bold tracking-widest mb-3" style={{ color: item.color }}>
                  {item.label}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.headline}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUTCOMES ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">{t.outcomesTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.outcomes.map((o, i) => (
              <div key={i} className="text-center p-6 bg-[#171717] rounded-2xl border border-gray-800">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-1">
                  {o.stat}
                </div>
                <p className="text-white text-sm font-semibold mb-1">{o.label}</p>
                <p className="text-gray-600 text-xs">{o.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PACKAGES ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.pkgTitle}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
                {t.pkgHighlight}
              </span>
            </h2>
            <p className="text-gray-400 text-xl">{t.pkgSub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative bg-[#1b1b1b] rounded-2xl p-8 flex flex-col border-2 transition-all duration-300 hover:-translate-y-1 ${
                  pkg.tag ? 'border-[#43ffae] shadow-2xl shadow-[#43ffae]/10' : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                {pkg.tag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#43ffae] to-[#13aff0] px-4 py-1 rounded-full text-[#171717] text-xs font-bold whitespace-nowrap">
                    {pkg.tag}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{pkg.forWho}</p>
                  <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${pkg.gradient}`}>
                    {pkg.price}
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 border-t border-gray-800 pt-6">
                  {pkg.promise}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.outcomes.map((o, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-[#43ffae] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {o}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/contact`}
                  className={`block text-center py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 ${
                    pkg.tag
                      ? 'bg-gradient-to-r from-[#43ffae] to-[#13aff0] text-[#171717]'
                      : 'bg-[#171717] border border-gray-700 text-white hover:border-gray-500'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mt-8">
            {t.pkgFootnote}{' '}
            <Link href={`/${locale}/contact`} className="text-[#13aff0] hover:underline">{t.pkgFootnoteLink}</Link>
            {' '}{t.pkgFootnoteSuffix}
          </p>
        </div>
      </section>

      {/* ── 6. PROCESS ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.processTitle}</h2>
            <p className="text-gray-400 text-xl">{t.processSub}</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-[#13aff0]/30 via-[#43ffae]/30 to-[#13aff0]/30" />
            <div className="grid md:grid-cols-3 gap-8">
              {t.process.map((p, i) => (
                <div key={i} className="relative text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-[#171717] mx-auto mb-6"
                    style={{ background: `linear-gradient(135deg, ${p.color}, #43ffae)` }}
                  >
                    {p.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHY US ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.whyTitle}</h2>
            <p className="text-gray-400 text-xl max-w-xl mx-auto">{t.whySub}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {t.differentiators.map((d, i) => (
              <div key={i} className="flex gap-5 bg-[#1b1b1b] p-7 rounded-2xl border border-gray-800">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#13aff0] to-[#43ffae] flex items-center justify-center shrink-0 text-[#171717] font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{d.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CASE STUDY ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.caseTitle}</h2>
            <p className="text-gray-400 text-xl">{t.caseSub}</p>
          </div>

          <div className="bg-[#171717] rounded-2xl border border-[#43ffae]/20 overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#13aff0] to-[#43ffae]" />
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {t.caseTags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-[#1b1b1b] border border-gray-700 text-gray-400 text-xs font-medium">{tag}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.caseHeadline}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">{t.caseDesc}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {t.caseResults.map((r, i) => (
                  <div key={i} className="text-center p-5 bg-[#1b1b1b] rounded-xl border border-gray-800">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae] mb-1">{r.stat}</div>
                    <p className="text-gray-500 text-xs">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">{t.faqTitle}</h2>
          <p className="text-gray-400 text-center mb-14">{t.faqSub}</p>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#13aff0] to-[#43ffae]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#171717] mb-5">{t.ctaFinalTitle}</h2>
          <p className="text-[#171717]/80 text-xl mb-10 max-w-xl mx-auto">{t.ctaFinalSub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="bg-[#171717] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#1b1b1b] hover:scale-105 transition-all shadow-2xl"
            >
              {t.ctaFinalBtn}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-[#171717]/70 hover:text-[#171717] text-sm font-medium transition-colors underline underline-offset-4"
            >
              {t.ctaFinalLink}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
