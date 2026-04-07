'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocale } from 'next-intl';

export default function Terms() {
  const locale = useLocale();
  const isLt = locale === 'lt';

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {isLt ? 'Naudojimo' : 'Terms of'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              {isLt ? 'Sąlygos' : 'Service'}
            </span>
          </h1>
          <p className="text-gray-400 mb-8">{isLt ? 'Paskutinį kartą atnaujinta: 2025 m. sausis' : 'Last updated: January 2025'}</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '1. Sutikimas su Sąlygomis' : '1. Agreement to Terms'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Prisijungdami prie SiteLab svetainės ir paslaugų arba jas naudodami, sutinkate laikytis šių Naudojimo Sąlygų ir visų taikomų įstatymų bei reglamentų. Jei nesutinkate su kuria nors iš šių sąlygų, jums draudžiama naudotis ar prisijungti prie mūsų paslaugų.'
                  : 'By accessing or using the SiteLab website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.'}
              </p>
              <p className="text-gray-400">
                {isLt
                  ? 'Šios Naudojimo Sąlygos sudaro teisiškai privalomą susitarimą tarp jūsų ir SiteLab dėl mūsų svetainės ir paslaugų naudojimo.'
                  : 'These Terms of Service constitute a legally binding agreement between you and SiteLab regarding your use of our website and services.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '2. Paslaugų Aprašymas' : '2. Services Description'}</h2>
              <p className="text-gray-400 mb-4">{isLt ? 'SiteLab teikia šias paslaugas:' : 'SiteLab provides the following services:'}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {isLt ? [
                  'Žiniatinklio kūrimo ir dizaino paslaugos',
                  'E-komercijos sprendimai ir internetinės parduotuvės kūrimas',
                  'Paieškos Variklio Optimizavimo (SEO) paslaugos',
                  'Generatyviojo Variklio Optimizavimo (GEO) paslaugos',
                  'AI paieškos optimizavimas ir skaitmeninė rinkodara',
                  'Svetainės priežiūra ir techninė pagalba',
                  'Individualių žiniatinklio programų kūrimas',
                ] : [
                  'Web development and design services',
                  'E-commerce solutions and online store development',
                  'Search Engine Optimization (SEO) services',
                  'Generative Engine Optimization (GEO) services',
                  'AI search optimization and digital marketing',
                  'Website maintenance and technical support',
                  'Custom web application development',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <p className="text-gray-400">
                {isLt
                  ? 'Pasiliekame teisę bet kada be išankstinio pranešimo modifikuoti, sustabdyti ar nutraukti bet kurį mūsų paslaugų aspektą.'
                  : 'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '3. Naudotojo Atsakomybės' : '3. User Responsibilities'}</h2>
              <p className="text-gray-400 mb-4">{isLt ? 'Naudodamiesi mūsų paslaugomis, sutinkate:' : 'When using our services, you agree to:'}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {isLt ? [
                  'Pateikti tikslią, aktualią ir išsamią informaciją',
                  'Palaikyti savo paskyros kredencialų saugumą ir konfidencialumą',
                  'Nedelsiant pranešti mums apie bet kokią neleistiną prieigą prie jūsų paskyros',
                  'Naudoti mūsų paslaugas tik teisėtiems tikslams ir pagal šias Sąlygas',
                  'Netrukdyti ir neatrodyti mūsų paslaugų veikimą',
                  'Nebandyti gauti neleistinos prieigos prie jokios mūsų paslaugų dalies',
                  'Gerbti SiteLab ir trečiųjų šalių intelektinės nuosavybės teises',
                ] : [
                  'Provide accurate, current, and complete information',
                  'Maintain the security and confidentiality of your account credentials',
                  'Notify us immediately of any unauthorized access to your account',
                  'Use our services only for lawful purposes and in accordance with these Terms',
                  'Not interfere with or disrupt the operation of our services',
                  'Not attempt to gain unauthorized access to any part of our services',
                  'Respect intellectual property rights of SiteLab and third parties',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <p className="text-gray-400">
                {isLt
                  ? 'Jūs esate atsakingas už visą veiklą, vykdomą jūsų paskyros vardu.'
                  : 'You are responsible for all activities that occur under your account.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '4. Intelektinės Nuosavybės Teisės' : '4. Intellectual Property Rights'}</h2>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">{isLt ? 'Mūsų Intelektinė Nuosavybė' : 'Our Intellectual Property'}</h3>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Visas turinys, funkcijos ir funkcionalumas mūsų svetainėje, įskaitant tekstą, grafiką, logotipus, vaizdus, kodą ir programinę įrangą, yra išskirtinė SiteLab nuosavybė ir yra saugoma tarptautinių autorių teisių, prekių ženklų ir kitų intelektinės nuosavybės įstatymų.'
                  : 'All content, features, and functionality on our website, including but not limited to text, graphics, logos, images, code, and software, are the exclusive property of SiteLab and are protected by international copyright, trademark, and other intellectual property laws.'}
              </p>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">{isLt ? 'Kliento Darbo Produktas' : 'Client Work Product'}</h3>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Visiškai apmokėjus už suteiktas paslaugas, jums priklausys galutiniai pristatymai, sukurti specialiai jums. Tačiau SiteLab išlaiko nuosavybę:'
                  : 'Upon full payment for services rendered, you will own the final deliverables created specifically for you. However, SiteLab retains ownership of:'}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {isLt ? [
                  'Preliminarūs dizainai, juodraščiai ir koncepcijos, neįtrauktos į galutinius pristatymus',
                  'Esami materialai, šablonai ir kodo bibliotekos',
                  'Metodologijos, procesai ir technikų, naudojamų kuriant pristatymus',
                ] : [
                  'Preliminary designs, drafts, and concepts not included in final deliverables',
                  'Pre-existing materials, templates, and code libraries',
                  'Methodologies, processes, and techniques used in creating deliverables',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">{isLt ? 'Portfelio Teisės' : 'Portfolio Rights'}</h3>
              <p className="text-gray-400">
                {isLt
                  ? 'SiteLab pasilieka teisę demonstruoti užbaigtus projektus savo portfelyje, rinkodaros medžiagose ir atvejų analizėse, nebent kitaip sutarta raštu.'
                  : 'SiteLab reserves the right to showcase completed projects in our portfolio, marketing materials, and case studies unless otherwise agreed in writing.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '5. Mokėjimo Sąlygos' : '5. Payment Terms'}</h2>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">{isLt ? 'Kainos ir Pasiūlymai' : 'Pricing and Quotes'}</h3>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Visos kainos nurodomos eurais (€), jei nenurodyta kitaip. Pasiūlymai galioja 30 dienų nuo išdavimo datos. Kainos gali keistis atsižvelgiant į projekto apimties pakeitimus.'
                  : 'All prices are quoted in Euros (€) unless otherwise specified. Quotes are valid for 30 days from the date of issue. Pricing may be subject to change based on project scope modifications.'}
              </p>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">{isLt ? 'Mokėjimo Grafikas' : 'Payment Schedule'}</h3>
              <p className="text-gray-400 mb-4">{isLt ? 'Jei raštu nesusitarta kitaip, mokėjimo sąlygos yra:' : 'Unless otherwise agreed in writing, payment terms are:'}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {(isLt ? [
                  { bold: '50% avansinis mokėjimas', text: ' reikalingas prieš projekto pradžią' },
                  { bold: '25% mokėjimas', text: ' mokėtinas pasiekus projekto etapą (jei taikoma)' },
                  { bold: '25% galutinis mokėjimas', text: ' mokėtinas baigus projektą' },
                ] : [
                  { bold: '50% deposit', text: ' required before project commencement' },
                  { bold: '25% payment', text: ' due at project milestone (if applicable)' },
                  { bold: '25% final payment', text: ' due upon project completion' },
                ]).map((item, i) => <li key={i}><strong className="text-white">{item.bold}</strong>{item.text}</li>)}
              </ul>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">{isLt ? 'Pavėluoti Mokėjimai' : 'Late Payments'}</h3>
              <p className="text-gray-400">
                {isLt
                  ? 'Pavėluotiems mokėjimams gali būti taikomi 1,5% per mėnesį palūkanų mokesčiai arba maksimalus įstatymų leidžiamas tarifas, atsižvelgiant į tai, kuris yra mažesnis. Pasiliekame teisę sustabdyti paslaugas sąskaitoms su pradelstais mokėjimais.'
                  : 'Late payments may be subject to interest charges of 1.5% per month or the maximum rate permitted by law, whichever is less. We reserve the right to suspend services for accounts with overdue payments.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '6. Projektų Terminai ir Pristatymai' : '6. Project Timelines and Deliverables'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Projektų terminai yra įverčiai, pagrįsti dabartine darbo apkrova ir apimtimi. Vėlavimai gali įvykti dėl:'
                  : 'Project timelines are estimates based on current workload and scope. Delays may occur due to:'}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {isLt ? [
                  'Vėluojančio kliento grįžtamojo ryšio ar turinio pristatymo',
                  'Apimties pakeitimų ar papildomų funkcijų užklausų',
                  'Techninių sudėtingumų ar trečiųjų šalių priklausomybių',
                  'Force majeure aplinkybių, nepriklausančių nuo mūsų',
                ] : [
                  'Late client feedback or content delivery',
                  'Scope changes or additional feature requests',
                  'Technical complexities or third-party dependencies',
                  'Force majeure events beyond our control',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <p className="text-gray-400">
                {isLt
                  ? 'Dėsime pagrįstas pastangas, kad laikytumėmės sutartų terminų ir operatyviai pranešti apie galimus vėlavimus.'
                  : 'We will make reasonable efforts to meet agreed timelines and communicate any potential delays promptly.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '7. Pataisymai ir Pakeitimų Užklausos' : '7. Revisions and Change Requests'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Mūsų standartiniai projektų paketai apima nurodytą pataisymų raundų skaičių. Papildomi pataisymai ar pakeitimai, viršijantys sutartą apimtį, gali būti apmokestinami papildomai pagal:'
                  : 'Our standard project packages include a specified number of revision rounds. Additional revisions or changes beyond the agreed scope may be subject to additional charges based on:'}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {isLt ? [
                  'Prašomų pakeitimų sudėtingumas',
                  'Įgyvendinimui reikalingas laikas',
                  'Poveikis projekto terminui',
                ] : [
                  'Complexity of requested changes',
                  'Time required for implementation',
                  'Impact on project timeline',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <p className="text-gray-400">
                {isLt
                  ? 'Pagrindiniai apimties pakeitimai bus dokumentuojami pakeitimų užsakyme su atnaujintomis kainomis ir terminų įverčiais.'
                  : 'Major scope changes will be documented in a change order with updated pricing and timeline estimates.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '8. Kliento Atsakomybės ir Bendradarbiavimas' : '8. Client Responsibilities and Cooperation'}</h2>
              <p className="text-gray-400 mb-4">{isLt ? 'Sėkmingas projekto užbaigimas reikalauja kliento bendradarbiavimo, įskaitant:' : 'Successful project completion requires client cooperation, including:'}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {isLt ? [
                  'Savalaikio grįžtamojo ryšio ir patvirtinimų teikimas',
                  'Būtino turinio, vaizdų ir medžiagų tiekimas',
                  'Prieigos prie reikiamų sistemų ir paskyrų suteikimas',
                  'Pagrindinio kontaktinio asmens paskyrimas',
                  'Atsakymas į užklausas per pagrįstus laiko rėmus',
                ] : [
                  'Providing timely feedback and approvals',
                  'Supplying necessary content, images, and materials',
                  'Granting access to required systems and accounts',
                  'Designating a primary point of contact',
                  'Responding to queries within reasonable timeframes',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <p className="text-gray-400">
                {isLt
                  ? 'Vėlavimai dėl kliento bendradarbiavimo trūkumo gali lemti projekto terminų pratęsimus ir galimus papildomus mokesčius už pratęstą projektų valdymą.'
                  : 'Delays caused by lack of client cooperation may result in project timeline extensions and potential additional charges for extended project management.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '9. Garantijos ir Atsakomybės Apribojimai' : '9. Warranties and Disclaimers'}</h2>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">{isLt ? 'Ribota Garantija' : 'Limited Warranty'}</h3>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Garantuojame, kad paslaugos bus teikiamos profesionaliai ir kompetentingai. Suteikiame 30 dienų garantijos laikotarpį klaidų taisymui ir techniniams klausimams, kylančiams iš mūsų darbo, išskyrus problemas, kurias sukėlė:'
                  : 'We warrant that services will be performed in a professional and workmanlike manner. We provide a 30-day warranty period for bug fixes and technical issues arising from our work, excluding issues caused by:'}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {isLt ? [
                  'Kliento modifikacijos ar trečiųjų šalių pakeitimai',
                  'Prieglobos ar serverio problemos, nepriklausančios nuo mūsų kontrolės',
                  'Nesuderinamumas su trečiųjų šalių programine įranga',
                  'Force majeure aplinkybės',
                ] : [
                  'Client modifications or third-party changes',
                  'Hosting or server issues outside our control',
                  'Incompatibilities with third-party software',
                  'Force majeure events',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">{isLt ? 'Atsakomybės Apribojimas' : 'Disclaimer'}</h3>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'IŠSKYRUS TAI, KAS AIŠKIAI NURODYTA, MŪSŲ PASLAUGOS TEIKIAMOS "TOKIOS, KOKIOS YRA" BE JOKIŲ GARANTIJŲ. NEGALIME GARANTUOTI, KAD:'
                  : 'EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:'}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {isLt ? [
                  'Paslaugos bus nepertraukiamos ar be klaidų',
                  'Rezultatai atitiks jūsų specifinius reikalavimus',
                  'SEO/GEO pastangos pasieks konkrečias pozicijas ar srauto tikslus',
                ] : [
                  'Services will be uninterrupted or error-free',
                  'Results will meet your specific requirements',
                  'SEO/GEO efforts will achieve specific rankings or traffic goals',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '10. Atsakomybės Apribojimas' : '10. Limitation of Liability'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'MAKSIMALIU ĮSTATYMŲ LEISTINU MASTU SITELAB NEBUS ATSAKINGA UŽ JOKIUS NETIESIOGINIUS, ATSITIKTINIUS, SPECIALIUOSIUS, PAKAITINIUS AR BAUDŽIAMUOSIUS NUOSTOLIUS, ARBA UŽ BET KOKĮ PELNO AR PAJAMŲ PRARADIMĄ, AR TIESIOGINIUS, AR NETIESIOGINIUS.'
                  : 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, SITELAB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.'}
              </p>
              <p className="text-gray-400">
                {isLt
                  ? 'Bendra mūsų atsakomybė už visus ieškinius, kylančius iš mūsų paslaugų, negali viršyti bendros sumos, kurią sumokėjote už konkrečią paslaugą, iš kurios kyla ieškinys, per 12 mėnesių iki ieškinio.'
                  : 'Our total liability for any claims arising from our services shall not exceed the total amount paid by you for the specific service giving rise to the claim during the 12 months preceding the claim.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '11. Nutraukimas' : '11. Termination'}</h2>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">{isLt ? 'Kliento Nutraukimas' : 'Termination by Client'}</h3>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Galite nutraukti projektą bet kuriuo metu, pateikdami rašytinį pranešimą. Tokiu atveju:'
                  : 'You may terminate a project at any time by providing written notice. In such cases:'}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {isLt ? [
                  'Jums bus išrašyta sąskaita už visą darbą, atliktą iki nutraukimo datos',
                  'Visi avansai ar išankstiniai mokėjimai negrąžinami',
                  'Gausite pristatymus už atliktą ir apmokėtą darbą',
                ] : [
                  'You will be charged for all work completed up to the termination date',
                  'Any deposits or advance payments are non-refundable',
                  'You will receive deliverables for work completed and paid for',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">{isLt ? 'SiteLab Nutraukimas' : 'Termination by SiteLab'}</h3>
              <p className="text-gray-400">
                {isLt
                  ? 'Pasiliekame teisę nutraukti paslaugas, jei pažeidžiate šias Sąlygas, neatliekate reikiamų mokėjimų arba jei nustatome, kad projekto tęsimas nėra įmanomas.'
                  : 'We reserve the right to terminate services if you breach these Terms, fail to make required payments, or if we determine that continuing the project is not feasible.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '12. Konfidencialumas' : '12. Confidentiality'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Abi šalys sutinka išlaikyti konfidencialumą dėl patentuotos informacijos, atskleistos verslo santykių metu. Šis įpareigojimas tęsiasi 3 metus po projekto užbaigimo.'
                  : 'Both parties agree to maintain confidentiality of proprietary information disclosed during the course of our business relationship. This obligation continues for 3 years after project completion.'}
              </p>
              <p className="text-gray-400">
                {isLt
                  ? 'Konfidenciali informacija neapima informacijos, kuri yra viešai prieinama, nepriklausomai sukurta ar teisėtai gauta iš trečiųjų šalių.'
                  : 'Confidential information does not include information that is publicly available, independently developed, or rightfully obtained from third parties.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '13. Žalos Atlyginimas' : '13. Indemnification'}</h2>
              <p className="text-gray-400">
                {isLt
                  ? 'Sutinkate atlyginti ir apsaugoti SiteLab nuo bet kokių ieškinių, nuostolių ar išlaidų, kylančių iš:'
                  : 'You agree to indemnify and hold SiteLab harmless from any claims, damages, or expenses arising from:'}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
                {isLt ? [
                  'Jūsų šių Sąlygų pažeidimas',
                  'Jūsų mums pateiktas turinys ar medžiagos',
                  'Jūsų trečiųjų šalių teisių pažeidimas',
                  'Jūsų mūsų paslaugų ar pristatymų naudojimas',
                ] : [
                  'Your breach of these Terms',
                  'Content or materials you provide to us',
                  'Your violation of any third-party rights',
                  'Your use of our services or deliverables',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '14. Ginčų Sprendimas' : '14. Dispute Resolution'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Kilus ginčui dėl šių Sąlygų ar mūsų paslaugų:'
                  : 'In the event of any dispute arising from these Terms or our services:'}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {isLt ? [
                  'Abi šalys sutinka pirmiausia bandyti išspręsti ginčus sąžiningo derybų keliu',
                  'Jei derybos nepavyks, ginčai gali būti perduoti mediacijai',
                  'Visi neišspręsti ginčai bus sprendžiami pagal Lietuvos įstatymus',
                ] : [
                  'Both parties agree to first attempt to resolve disputes through good faith negotiations',
                  'If negotiations fail, disputes may be submitted to mediation',
                  'Any unresolved disputes shall be governed by the laws of Lithuania',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '15. Sąlygų Pakeitimai' : '15. Modifications to Terms'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Pasiliekame teisę bet kada keisti šias Naudojimo Sąlygas. Apie esminius pakeitimus pranešime vartotojams atnaujindami "Paskutinį kartą atnaujinta" datą ir paskelbdami pranešimą mūsų svetainėje.'
                  : 'We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by updating the "Last updated" date and posting a notice on our website.'}
              </p>
              <p className="text-gray-400">
                {isLt
                  ? 'Jūsų tolimesnis mūsų paslaugų naudojimas po tokių modifikacijų reiškia, kad sutinkate su atnaujintomis Sąlygomis.'
                  : 'Your continued use of our services after such modifications constitutes acceptance of the updated Terms.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '16. Atskiriamumas' : '16. Severability'}</h2>
              <p className="text-gray-400">
                {isLt
                  ? 'Jei kuri nors šių Sąlygų nuostata bus pripažinta nevykdoma arba negaliojančia, ta nuostata bus apribota arba pašalinta minimaliu reikalingu mastu, o likusios nuostatos liks visiškai galioti.'
                  : 'If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '17. Pilnas Susitarimas' : '17. Entire Agreement'}</h2>
              <p className="text-gray-400">
                {isLt
                  ? 'Šios Naudojimo Sąlygos kartu su bet kokiais projektų pasiūlymais, darbų aprašymais ar kitais rašytiniais susitarimais sudaro pilną susitarimą tarp jūsų ir SiteLab dėl mūsų paslaugų naudojimo.'
                  : 'These Terms of Service, together with any project proposals, statements of work, or other written agreements, constitute the entire agreement between you and SiteLab regarding the use of our services.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? '18. Kontaktinė Informacija' : '18. Contact Information'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Jei turite klausimų dėl šių Naudojimo Sąlygų, susisiekite su mumis:'
                  : 'If you have any questions about these Terms of Service, please contact us:'}
              </p>
              <div className="text-gray-400">
                <p className="mb-2"><strong className="text-white">{isLt ? 'Įmonė:' : 'Company:'}</strong> SiteLab</p>
                <p className="mb-2"><strong className="text-white">{isLt ? 'El. paštas:' : 'Email:'}</strong> <a href="mailto:info@sitelab.lt" className="text-[#13aff0] hover:text-[#43ffae]">info@sitelab.lt</a></p>
                <p className="mb-2"><strong className="text-white">{isLt ? 'Telefonas:' : 'Phone:'}</strong> <a href="tel:+37060267098" className="text-[#13aff0] hover:text-[#43ffae]">+370 602 67098</a></p>
                <p><strong className="text-white">{isLt ? 'Darbo valandos:' : 'Business Hours:'}</strong> {isLt ? 'Pirmadienis – Penktadienis, 9:00 – 18:00' : 'Monday - Friday, 9:00 AM - 6:00 PM'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
