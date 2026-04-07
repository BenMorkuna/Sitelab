'use client';

import Link from 'next/link';
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

const tr = {
  en: {
    badge: 'Web Development & E-Commerce',
    h1a: 'Websites That', h1b: 'Generate Revenue.', h1c: 'Not just traffic.',
    sub: 'We build fast, conversion-optimised websites and e-commerce stores — with SEO baked in — so your site works as hard as you do.',
    bullets: ['Delivered in 2–4 weeks', 'Built to convert visitors into buyers', 'SEO-ready from day one'],
    ctaPrimary: 'Get Your Free Website Audit', ctaSecondary: 'See Packages',
    quote: '"We needed a fast, modern e-commerce platform that could handle subscriptions and convert cold traffic. SiteLab delivered in under 3 weeks — the site is clean, loads instantly, and our conversion rate has been consistently strong since launch."',
    quoteAuthor: 'Founder, Cheats-Pro',
    statsLabels: ['Platform', 'Load time', 'Delivered'],
    builtWith: 'Built with:',
    problemTitle: 'Sound familiar?',
    problemSub: 'Most websites look decent. But looking good and making money are two very different things.',
    problems: [
      { h: '"My site looks fine, but no one buys."', b: 'Design alone doesn\'t sell. Without conversion-focused structure — clear CTAs, trust signals, fast load — visitors browse and leave.' },
      { h: '"I\'m paying for ads but not seeing ROI."', b: 'If your landing page doesn\'t convert, no amount of ad spend fixes it. You\'re pouring budget into a leaking bucket.' },
      { h: '"My site is slow and outdated."', b: 'Every extra second of load time costs you 7% in conversions. Slow sites also rank lower on Google — you\'re invisible before visitors even arrive.' },
      { h: '"My competitors are ranking. I\'m not."', b: 'A site without proper SEO structure is a site that doesn\'t exist. Your competitors are getting your customers right now.' },
    ],
    solTitle: 'The fix is simpler than you think.',
    solSub: 'We build websites and e-commerce stores with one goal:',
    solHighlight: 'generate more revenue for your business.',
    solSub2: 'Not just a pretty design. A revenue-generating machine.',
    solutions: [
      { title: 'Conversion-focused design', body: 'Every layout decision — where the CTA sits, how trust is built, how the page flows — is made to move visitors toward taking action.' },
      { title: 'SEO built in, not bolted on', body: 'Technical SEO, on-page structure, and content strategy are baked into the build — so you rank from day one, not after an expensive audit six months later.' },
      { title: 'Speed that sells', body: 'We target sub-1s load times and 95+ PageSpeed scores. Fast sites rank higher, convert more, and keep visitors from bouncing before they even read your offer.' },
      { title: 'Scalable from the start', body: 'Whether you\'re launching a business site or a full Shopify store, we build architecture that grows with you — no expensive rebuilds in 12 months.' },
    ],
    includesTitle: 'What\'s included in every build',
    includesSub: 'No hidden extras. No "that\'s a separate package." This is what we deliver as standard.',
    includes: [
      { value: 'High-converting page layouts', sub: 'Designed to move visitors to action' },
      { value: 'Mobile-first UX', sub: '60%+ of your visitors are on mobile' },
      { value: 'Sub-1s load speed', sub: 'Fast sites rank higher and sell more' },
      { value: 'Full on-page SEO', sub: 'Structure, meta, schema, sitemap' },
      { value: 'Clear CTA architecture', sub: 'Every page has a purpose and a next step' },
      { value: 'Analytics & tracking setup', sub: 'Know what\'s working from day one' },
      { value: 'Checkout optimisation', sub: 'For e-commerce: reduce cart abandonment' },
      { value: 'AI search visibility (GEO)', sub: 'Get cited in ChatGPT, Perplexity & more' },
      { value: 'Content & copy guidance', sub: 'Words that sell, not just fill space' },
    ],
    pkgTitle: 'Choose your starting point',
    pkgSub: 'All packages include strategy, design, development, and SEO. Pick what fits your stage.',
    pkgPopular: 'MOST POPULAR',
    packages: [
      {
        label: 'Starter', title: 'Get Online & Start Selling', price: 'From €799',
        desc: 'A clean, fast website that converts visitors into enquiries. Perfect if you\'re launching online or replacing a site that isn\'t working.',
        features: ['WordPress or Shopify setup', 'Up to 5 pages', 'Mobile-first design', 'Basic on-page SEO', 'Contact & lead capture forms', 'Delivered in 2 weeks'],
        cta: 'Start Here →',
      },
      {
        label: null, title: 'Scale Your Revenue', price: 'From €1,999',
        desc: 'The full growth stack. A high-converting website or e-commerce store with SEO and CRO built in. This is what businesses invest in when they\'re serious about growth.',
        features: ['Custom WordPress, Shopify, or WooCommerce', 'Conversion-rate optimisation (CRO)', 'Full SEO setup + content strategy', 'Speed optimisation', 'Checkout optimisation (e-com)', 'Analytics, tracking & reporting', 'Delivered in 3–4 weeks'],
        cta: 'Grow My Revenue →',
      },
      {
        label: 'Ongoing', title: 'Keep Growing Every Month', price: 'From €499/mo',
        desc: 'Growth doesn\'t stop at launch. Monthly SEO, CRO, and content improvements that compound — so your traffic and revenue keep climbing quarter after quarter.',
        features: ['Monthly SEO & content updates', 'Conversion tracking & A/B testing', 'Technical SEO monitoring', 'AI search visibility (GEO)', 'Monthly performance report', 'Priority support'],
        cta: 'Get Monthly Growth →',
      },
    ],
    processTitle: 'How it works',
    processSub: 'No 3-month discovery phases. No endless back-and-forth. A clean, direct process.',
    steps: [
      { num: '01', title: 'Audit', body: 'We review your current site, competitors, and goals. You get a clear picture of what\'s leaking revenue — and exactly what to fix first.' },
      { num: '02', title: 'Build & Fix', body: 'We design and build your site with conversion and SEO as the foundation, not an afterthought. Fast turnaround. Clean delivery.' },
      { num: '03', title: 'Grow', body: 'Monthly SEO, content, and CRO improvements that compound over time. Your traffic and revenue grow every quarter.' },
    ],
    whyTitle: 'Why work with us',
    whySub: 'We\'re not a bloated agency with 40 people and 6-month timelines. We\'re a focused team that builds fast and thinks about your revenue first.',
    why: [
      { title: 'Delivered fast', body: 'We use AI-assisted development to build in weeks, not months. No unnecessary delays. No "waiting on the designer". You get results when you need them.' },
      { title: 'Conversion-first', body: 'Every design decision — layout, copy, page structure, CTAs — is made to convert. We think like marketers, not just developers.' },
      { title: 'SEO + AI visibility', body: 'You get Google SEO and GEO (AI search visibility) coverage in every build. Your brand stays visible as search evolves — on Google today, in AI tools tomorrow.' },
    ],
    caseTitle: 'What a Growth build looks like',
    caseSub: 'A typical before-and-after from a full Growth package.',
    beforeLabel: 'BEFORE', beforeTitle: 'E-commerce store with potential — but leaking revenue',
    beforeItems: ['4.2s load time on mobile', 'No clear CTA above the fold', '2.1% conversion rate', 'Ranking for 12 keywords', '70% bounce rate', 'Checkout abandoned at 78%'],
    afterLabel: 'AFTER', afterTitle: 'Rebuilt for traffic, conversions, and revenue',
    afterItems: ['0.9s load time (95 PageSpeed)', 'Clear offer and CTA on every page', '3.8% conversion rate (+81%)', 'Ranking for 140+ keywords', 'Bounce rate down to 42%', 'Checkout abandonment down to 51%'],
    disclaimer: 'Results based on a composite of typical client outcomes. Individual results vary.',
    finalTitle: 'Your website should be your best salesperson.',
    finalSub: 'Get a free audit. We\'ll show you the top 3 things costing you sales right now — no pitch, no obligation.',
    finalCta: 'Get My Free Audit', finalCta2: 'View Packages',
    finalDisclaimer: 'Free, no-obligation • Delivered within 48 hours',
  },
  lt: {
    badge: 'Svetainių Kūrimas ir E-Komercija',
    h1a: 'Svetainės, Kurios', h1b: 'Generuoja Pajamas.', h1c: 'Ne tik srautą.',
    sub: 'Kuriame greitas, konversijoms optimizuotas svetaines ir e-komercijos parduotuves — su integruotu SEO — kad jūsų svetainė dirbtų taip sunkiai kaip jūs.',
    bullets: ['Pristatoma per 2–4 savaites', 'Sukurta konvertuoti lankytojus į pirkėjus', 'SEO integruotas nuo pirmos dienos'],
    ctaPrimary: 'Gauti Nemokamą Svetainės Auditą', ctaSecondary: 'Peržiūrėti Paketus',
    quote: '"Mums reikėjo greitos, modernios e-komercijos platformos, galinčios valdyti prenumeratas ir konvertuoti šaltą srautą. SiteLab pristatė per mažiau nei 3 savaites — svetainė yra švari, greitai kraunasi, ir mūsų konversijų rodiklis nuo paleidimo buvo nuolat stiprus."',
    quoteAuthor: 'Įkūrėjas, Cheats-Pro',
    statsLabels: ['Platforma', 'Krovimo laikas', 'Pristatyta'],
    builtWith: 'Sukurta su:',
    problemTitle: 'Skamba pažįstamai?',
    problemSub: 'Dauguma svetainių atrodo neblogai. Tačiau gerai atrodyti ir uždirbti pinigus — du labai skirtingi dalykai.',
    problems: [
      { h: '"Mano svetainė atrodo gerai, bet niekas neperka."', b: 'Dizainas vienas pats neparduoda. Be konversijoms skirtos struktūros — aiškių CTA, pasitikėjimo signalų, greito krovimo — lankytojai naršo ir išeina.' },
      { h: '"Moku už reklamą, bet nematau grąžos."', b: 'Jei jūsų nukreipimo puslapis nekonvertuoja, jokios reklamos išlaidos to nepataisys. Pilate biudžetą į lekiantį kibirą.' },
      { h: '"Mano svetainė lėta ir pasenusi."', b: 'Kiekviena papildoma krovimo laiko sekundė kainuoja 7% konversijų. Lėtos svetainės taip pat žemiau renkamos Google — esate nematomi dar prieš lankytojams atvykstant.' },
      { h: '"Mano konkurentai renkasi. Aš — ne."', b: 'Svetainė be tinkamos SEO struktūros yra svetainė, kurios neegzistuoja. Jūsų konkurentai dabar gauna jūsų klientus.' },
    ],
    solTitle: 'Sprendimas paprastesnis, nei manote.',
    solSub: 'Kuriame svetaines ir e-komercijos parduotuves su vienu tikslu:',
    solHighlight: 'generuoti daugiau pajamų jūsų verslui.',
    solSub2: 'Ne tik gražus dizainas. Pajamas generuojanti mašina.',
    solutions: [
      { title: 'Konversijoms orientuotas dizainas', body: 'Kiekvienas išdėstymo sprendimas — kur sėdi CTA, kaip kuriamas pasitikėjimas, kaip teka puslapis — skirtas judinti lankytojus link veiksmo.' },
      { title: 'SEO integruotas, ne pridėtas vėliau', body: 'Techninis SEO, puslapio struktūra ir turinio strategija įdiegti į kūrimą — kad renkamasi nuo pirmos dienos, o ne po brangaus audito po šešių mėnesių.' },
      { title: 'Greitis, kuris parduoda', body: 'Siekiame mažiau nei 1s krovimo laikų ir 95+ PageSpeed balų. Greitos svetainės renkamos aukščiau, konvertuoja daugiau ir neleidžia lankytojams atšokti.' },
      { title: 'Keičiama nuo pat pradžių', body: 'Ar kuriate verslo svetainę, ar pilną Shopify parduotuvę, statome architektūrą, kuri auga kartu su jumis — jokių brangių perstatymų po 12 mėnesių.' },
    ],
    includesTitle: 'Kas įtraukta į kiekvieną kūrimą',
    includesSub: 'Jokių paslėptų priedų. Jokio "tai atskiras paketas." Tai yra tai, ką pristatome kaip standartą.',
    includes: [
      { value: 'Aukštai konvertuojantys puslapių išdėstymai', sub: 'Skirti judinti lankytojus į veiksmą' },
      { value: 'Mobile-first UX', sub: '60%+ lankytojų naudoja mobilius įrenginius' },
      { value: 'Krovimo greitis < 1s', sub: 'Greitos svetainės renkamos aukščiau ir daugiau parduoda' },
      { value: 'Pilnas puslapyje esantis SEO', sub: 'Struktūra, meta, schema, svetainės žemėlapis' },
      { value: 'Aiški CTA architektūra', sub: 'Kiekvienas puslapis turi tikslą ir kitą žingsnį' },
      { value: 'Analizė ir stebėjimas', sub: 'Žinokite, kas veikia nuo pirmos dienos' },
      { value: 'Atsiskaitymo optimizavimas', sub: 'E-komercijai: sumažinkite krepšelio atsisakymą' },
      { value: 'AI paieškos matomumas (GEO)', sub: 'Minimas ChatGPT, Perplexity ir kt.' },
      { value: 'Turinio ir teksto gairės', sub: 'Žodžiai, kurie parduoda, ne tik užpildo vietą' },
    ],
    pkgTitle: 'Pasirinkite savo pradžios tašką',
    pkgSub: 'Visi paketai apima strategiją, dizainą, kūrimą ir SEO. Pasirinkite, kas tinka jūsų etapui.',
    pkgPopular: 'POPULIARIAUSIAS',
    packages: [
      {
        label: 'Pradinis', title: 'Atsiraskite Internete ir Pradėkite Pardavinėti', price: 'Nuo €799',
        desc: 'Švari, greita svetainė, kuri konvertuoja lankytojus į užklausas. Puikiai tinka, jei pradedate internete arba keičiate neveikiančią svetainę.',
        features: ['WordPress arba Shopify diegimas', 'Iki 5 puslapių', 'Mobile-first dizainas', 'Bazinis puslapyje esantis SEO', 'Kontaktų ir potencialių klientų rinkimo formos', 'Pristatoma per 2 savaites'],
        cta: 'Pradėti čia →',
      },
      {
        label: null, title: 'Padidinkite Savo Pajamas', price: 'Nuo €1.999',
        desc: 'Pilnas augimo paketas. Aukštai konvertuojanti svetainė arba e-komercijos parduotuvė su integruotu SEO ir CRO. Tai yra tai, į ką investuoja verslai, kurie rimtai žiūri į augimą.',
        features: ['Individualus WordPress, Shopify arba WooCommerce', 'Konversijų rodiklio optimizavimas (CRO)', 'Pilnas SEO nustatymas + turinio strategija', 'Greičio optimizavimas', 'Atsiskaitymo optimizavimas (e-kom)', 'Analizė, stebėjimas ir ataskaitos', 'Pristatoma per 3–4 savaites'],
        cta: 'Auginti Mano Pajamas →',
      },
      {
        label: 'Nuolatinis', title: 'Augkite Kiekvieną Mėnesį', price: 'Nuo €499/mėn.',
        desc: 'Augimas nesibaigia po paleidimo. Mėnesiniai SEO, CRO ir turinio patobulinimai, kurie kaupiasi — kad jūsų srautas ir pajamos nuolat augtų.',
        features: ['Mėnesiniai SEO ir turinio atnaujinimai', 'Konversijų stebėjimas ir A/B testavimas', 'Techninis SEO stebėjimas', 'AI paieškos matomumas (GEO)', 'Mėnesinė veiklos ataskaita', 'Prioritetinis palaikymas'],
        cta: 'Gauti Mėnesinį Augimą →',
      },
    ],
    processTitle: 'Kaip tai veikia',
    processSub: 'Jokių 3 mėnesių analizės fazių. Jokio begalinio susirašinėjimo. Švarus, tiesioginis procesas.',
    steps: [
      { num: '01', title: 'Auditas', body: 'Peržiūrime jūsų esamą svetainę, konkurentus ir tikslus. Gausite aiškų vaizdą, kas prarado pajamas — ir tiksliai, ką pirmiausia taisyti.' },
      { num: '02', title: 'Kūrimas ir Taisymas', body: 'Projektuojame ir kuriame jūsų svetainę su konversijomis ir SEO kaip pagrindu, o ne priedėliu. Greitas pristatymas. Švari atlikta.' },
      { num: '03', title: 'Augimas', body: 'Mėnesiniai SEO, turinio ir CRO patobulinimai kaupiasi laikui bėgant. Jūsų srautas ir pajamos auga kiekvieną ketvirtį.' },
    ],
    whyTitle: 'Kodėl dirbti su mumis',
    whySub: 'Mes nesame išpūsta agentūra su 40 žmonių ir 6 mėnesių terminais. Esame orientuota komanda, kuri greitai kuria ir pirmiausia galvoja apie jūsų pajamas.',
    why: [
      { title: 'Pristatoma greitai', body: 'Naudojame AI pagalba pagreitintą kūrimą, kad pastatytume per savaites, o ne mėnesius. Jokių nereikalingų vėlavimų. Gaunate rezultatus, kai jų reikia.' },
      { title: 'Konversijos pirmiausia', body: 'Kiekvienas dizaino sprendimas — išdėstymas, tekstai, puslapio struktūra, CTA — skirtas konvertuoti. Galvojame kaip rinkodarininkai, o ne tik kūrėjai.' },
      { title: 'SEO + AI matomumas', body: 'Kiekviename kūrime gaunate Google SEO ir GEO (AI paieškos matomumo) aprėptį. Jūsų prekės ženklas išlieka matomas keičiantis paieškoms.' },
    ],
    caseTitle: 'Kaip atrodo Augimo kūrimas',
    caseSub: 'Tipiškas prieš ir po iš pilno Augimo paketo.',
    beforeLabel: 'PRIEŠ', beforeTitle: 'E-komercijos parduotuvė su potencialu — bet prarandanti pajamas',
    beforeItems: ['4,2 s krovimo laikas mobiliajame', 'Nėra aiškaus CTA virš brūkšnio', '2,1% konversijų rodiklis', 'Renkamas pagal 12 raktažodžių', '70% atšokimo rodiklis', 'Atsiskaitymas atšauktas 78%'],
    afterLabel: 'PO', afterTitle: 'Perstatyta srautui, konversijoms ir pajamoms',
    afterItems: ['0,9 s krovimo laikas (95 PageSpeed)', 'Aiškus pasiūlymas ir CTA kiekviename puslapyje', '3,8% konversijų rodiklis (+81%)', 'Renkamas pagal 140+ raktažodžių', 'Atšokimo rodiklis sumažintas iki 42%', 'Atsiskaitymo atsisakymas sumažintas iki 51%'],
    disclaimer: 'Rezultatai pagrįsti tipinių kliento rezultatų rinkiniu. Individualūs rezultatai gali skirtis.',
    finalTitle: 'Jūsų svetainė turėtų būti geriausias jūsų pardavėjas.',
    finalSub: 'Gaukite nemokamą auditą. Parodysime 3 svarbiausius dalykus, kurie dabar kainuoja jums pardavimus — be jokio pardavimo, be įsipareigojimų.',
    finalCta: 'Gauti Nemokamą Auditą', finalCta2: 'Peržiūrėti Paketus',
    finalDisclaimer: 'Nemokama, be įsipareigojimų • Pristatoma per 48 valandas',
  },
};

export default function WebDevelopment() {
  const locale = useLocale();
  const t = locale === 'lt' ? tr.lt : tr.en;

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
            <span className="text-[#43ffae] text-sm font-semibold tracking-wide">{t.badge}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t.h1a}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              {t.h1b}
            </span>
            <span className="block text-gray-300 text-4xl sm:text-5xl mt-2">{t.h1c}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm sm:text-base">
            {t.bullets.map((b, i) => (
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
              {t.ctaPrimary}
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="#packages"
              className="bg-[#1b1b1b] text-white border border-gray-700 px-10 py-5 rounded-full text-lg font-semibold hover:border-gray-500 transition-all"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#171717] border-b border-gray-800/60">
        <div className="max-w-6xl mx-auto">

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
                  {t.quote}
                </blockquote>

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#13aff0] to-[#43ffae] flex items-center justify-center text-[#171717] font-bold text-sm shrink-0">
                    CP
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.quoteAuthor}</p>
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
                    { stat: 'Next.js', label: t.statsLabels[0] },
                    { stat: '< 1s', label: t.statsLabels[1] },
                    { stat: '3 weeks', label: t.statsLabels[2] },
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

              {/* Right: browser mockup with scroll animation */}
              <div className="p-6 sm:p-8 flex flex-col items-center justify-center bg-[#141414]">
                <div
                  className="w-full rounded-xl overflow-hidden border border-gray-700/60 shadow-2xl shadow-black/80"
                  style={{
                    transform: 'perspective(900px) rotateY(-6deg) rotateX(2deg)',
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.05), -20px 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(19,175,240,0.08)',
                  }}
                >
                  {/* Browser chrome */}
                  <div className="bg-[#232323] px-3 py-2 flex items-center gap-2.5 border-b border-gray-700/60">
                    <div className="flex gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 bg-[#1a1a1a] rounded px-2.5 py-0.5 text-[10px] text-gray-500 font-mono truncate">
                      cheats-pro.com
                    </div>
                  </div>
                  {/* Screenshot with scroll */}
                  <div
                    className="animate-bg-scroll"
                    style={{
                      height: '320px',
                      backgroundImage: 'url(/cheats-pro-full.png)',
                      backgroundSize: '100% auto',
                      backgroundPosition: 'center top',
                    }}
                  />
                </div>
                {/* Built with */}
                <div className="mt-8 flex items-center gap-2">
                  <span className="text-gray-600 text-xs">{t.builtWith}</span>
                  <span className="px-3 py-1 rounded-full bg-[#171717] border border-gray-800 text-gray-400 text-xs font-medium">Next.js</span>
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
              {t.problemTitle}
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              {t.problemSub}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {t.problems.map((pain, i) => (
              <div key={i} className="p-7 rounded-2xl bg-[#171717] border border-red-900/30 flex gap-4">
                <XIcon />
                <div>
                  <p className="text-white font-semibold mb-2">{pain.h}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{pain.b}</p>
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
              {t.solTitle}
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              {t.solSub} <span className="text-white font-semibold">{t.solHighlight}</span> {t.solSub2}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.solutions.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#1b1b1b] border border-gray-800 hover:border-[#13aff0]/40 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.includesTitle}</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t.includesSub}</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {t.includes.map((item, i) => (
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.pkgTitle}</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t.pkgSub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {t.packages.map((pkg, i) => {
              const isFeatured = pkg.label === null;
              return isFeatured ? (
                <div key={i} className="flex flex-col p-8 rounded-2xl bg-gradient-to-b from-[#1b2a2b] to-[#1b1b1b] border-2 border-[#43ffae] relative shadow-2xl shadow-[#43ffae]/10 hover:shadow-[#43ffae]/20 transition-all scale-[1.02]">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-[#171717] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
                      {t.pkgPopular}
                    </span>
                  </div>
                  <div className="mb-6 mt-2">
                    <h3 className="text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                    <p className="text-[#43ffae] font-bold text-lg">{pkg.price}</p>
                  </div>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">{pkg.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-200 text-sm">
                        <CheckIcon /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/${locale}/contact`} className="block text-center bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-[#171717] px-6 py-3 rounded-full font-bold hover:scale-105 transition-all text-sm">
                    {pkg.cta}
                  </Link>
                </div>
              ) : (
                <div key={i} className="flex flex-col p-8 rounded-2xl bg-[#1b1b1b] border border-gray-800 hover:border-gray-600 transition-all">
                  <div className="mb-6">
                    {pkg.label && <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">{pkg.label}</span>}
                    <h3 className="text-2xl font-bold text-white mt-2 mb-1">{pkg.title}</h3>
                    <p className="text-[#43ffae] font-bold text-lg">{pkg.price}</p>
                  </div>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">{pkg.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckIcon /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/${locale}/contact`} className="block text-center border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:border-[#43ffae] hover:text-[#43ffae] transition-all text-sm">
                    {pkg.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. PROCESS ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.processTitle}</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t.processSub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[calc(33%-1rem)] right-[calc(33%-1rem)] h-px bg-gradient-to-r from-[#13aff0]/40 via-[#43ffae]/40 to-[#13aff0]/40" />
            {t.steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black"
                  style={{ background: `${i === 1 ? '#43ffae' : '#13aff0'}15`, border: `2px solid ${i === 1 ? '#43ffae' : '#13aff0'}40`, color: i === 1 ? '#43ffae' : '#13aff0' }}
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.whyTitle}</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t.whySub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.why.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#1b1b1b] border border-gray-800 hover:border-[#13aff0]/40 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.caseTitle}</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t.caseSub}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#171717] border border-red-900/40">
              <div className="inline-block bg-red-900/30 text-red-400 text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-wider">{t.beforeLabel}</div>
              <h3 className="text-lg font-bold text-white mb-5">{t.beforeTitle}</h3>
              <ul className="space-y-3">
                {t.beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <XIcon /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#171717] border border-[#43ffae]/30">
              <div className="inline-block bg-[#43ffae]/10 text-[#43ffae] text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-wider">{t.afterLabel}</div>
              <h3 className="text-lg font-bold text-white mb-5">{t.afterTitle}</h3>
              <ul className="space-y-3">
                {t.afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200 text-sm">
                    <CheckIcon /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-600 text-xs mt-6">{t.disclaimer}</p>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0d1f2d] via-[#0d2218] to-[#0d1f2d]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {t.finalTitle}
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            {t.finalSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="group inline-block bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-[#171717] px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all hover:shadow-2xl hover:shadow-[#13aff0]/30"
            >
              {t.finalCta}
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="#packages"
              className="inline-block bg-transparent text-white border border-gray-600 px-12 py-5 rounded-full text-lg font-semibold hover:border-gray-400 transition-all"
            >
              {t.finalCta2}
            </a>
          </div>
          <p className="text-gray-500 mt-6 text-sm">{t.finalDisclaimer}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
