'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocale } from 'next-intl';

export default function Privacy() {
  const locale = useLocale();
  const isLt = locale === 'lt';

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {isLt ? 'Privatumo' : 'Privacy'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              {isLt ? 'Politika' : 'Policy'}
            </span>
          </h1>
          <p className="text-gray-400 mb-8">{isLt ? 'Paskutinį kartą atnaujinta: 2025 m. sausis' : 'Last updated: January 2025'}</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? 'Įvadas' : 'Introduction'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'SiteLab yra įsipareigojusi saugoti jūsų privatumą ir užtikrinti jūsų asmeninės informacijos saugumą. Ši Privatumo Politika paaiškina, kaip mes renkame, naudojame, atskleidžiame ir saugome jūsų informaciją, kai lankotės mūsų svetainėje arba naudojatės mūsų paslaugomis.'
                  : 'At SiteLab, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.'}
              </p>
              <p className="text-gray-400">
                {isLt
                  ? 'Naudodamiesi mūsų svetaine ir paslaugomis, sutinkate su šioje politikoje aprašytomis duomenų tvarkymo praktikomis.'
                  : 'By using our website and services, you consent to the data practices described in this policy.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? 'Informacija, Kurią Renkame' : 'Information We Collect'}</h2>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">{isLt ? 'Asmeninė Informacija' : 'Personal Information'}</h3>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Galime rinkti asmeninę informaciją, kurią savanoriškai pateikiate mums, kai:'
                  : 'We may collect personal information that you voluntarily provide to us when you:'}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {isLt ? [
                  'Užpildote kontaktų formas mūsų svetainėje',
                  'Prašote kainos pasiūlymo mūsų paslaugoms',
                  'Prenumeruojate mūsų naujienlaiškį ar komunikacijas',
                  'Bendraujate su mūsų klientų aptarnavimu',
                  'Kuriate paskyrą arba registruojatės mūsų paslaugoms',
                ] : [
                  'Fill out contact forms on our website',
                  'Request a quote for our services',
                  'Subscribe to our newsletter or communications',
                  'Engage with our customer support',
                  'Create an account or register for our services',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <p className="text-gray-400">
                {isLt
                  ? 'Ši informacija gali apimti: vardą, el. pašto adresą, telefono numerį, įmonės pavadinimą, pareigas ir bet kokią kitą informaciją, kurią pasirenkate pateikti.'
                  : 'This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.'}
              </p>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">{isLt ? 'Automatiškai Renkama Informacija' : 'Automatically Collected Information'}</h3>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Kai lankotės mūsų svetainėje, automatiškai renkame tam tikrą informaciją apie jūsų įrenginį, įskaitant:'
                  : 'When you visit our website, we automatically collect certain information about your device, including:'}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {isLt ? [
                  'IP adresas ir naršyklės tipas',
                  'Operacinė sistema ir įrenginio informacija',
                  'Peržiūrėti puslapiai ir praleistas laikas puslapiuose',
                  'Nukreipiančių svetainių adresai',
                  'Paspaudimų srautų ir naršymo elgsenos duomenys',
                ] : [
                  'IP address and browser type',
                  'Operating system and device information',
                  'Pages viewed and time spent on pages',
                  'Referring website addresses',
                  'Clickstream data and browsing behavior',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? 'Kaip Naudojame Jūsų Informaciją' : 'How We Use Your Information'}</h2>
              <p className="text-gray-400 mb-4">{isLt ? 'Surinktą informaciją naudojame įvairiems tikslams:' : 'We use the collected information for various purposes:'}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {isLt ? [
                  'Teikti, palaikyti ir tobulinti mūsų paslaugas',
                  'Atsakyti į jūsų užklausas ir teikti klientų palaikymą',
                  'Siųsti jums kainas, pasiūlymus ir su paslaugomis susijusius pranešimus',
                  'Apdoroti sandorius ir valdyti projektus',
                  'Siųsti rinkodaros pranešimus (su jūsų sutikimu)',
                  'Analizuoti svetainės naudojimą ir optimizuoti vartotojo patirtį',
                  'Aptikti, išvengti ir spręsti techninius klausimus ar sukčiavimą',
                  'Laikytis teisinių įpareigojimų ir apsaugoti mūsų teises',
                ] : [
                  'To provide, maintain, and improve our services',
                  'To respond to your inquiries and provide customer support',
                  'To send you quotes, proposals, and service-related communications',
                  'To process transactions and manage projects',
                  'To send marketing communications (with your consent)',
                  'To analyze website usage and optimize user experience',
                  'To detect, prevent, and address technical issues or fraud',
                  'To comply with legal obligations and protect our rights',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? 'Slapukai ir Sekimo Technologijos' : 'Cookies and Tracking Technologies'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Naudojame slapukus ir panašias sekimo technologijas mūsų svetainės veiklai stebėti ir tam tikrai informacijai saugoti. Slapukai yra failai su nedideliu duomenų kiekiu, siunčiami į jūsų naršyklę iš svetainės ir saugomi jūsų įrenginyje.'
                  : 'We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.'}
              </p>
              <p className="text-gray-400 mb-4">{isLt ? 'Naudojame slapukus:' : 'We use cookies for:'}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {isLt ? [
                  'Jūsų sesijos ir nuostatų palaikymui',
                  'Suprasdami, kaip naudojatės mūsų svetaine',
                  'Svetainės veikimo ir vartotojo patirties gerinimui',
                  'Personalizuoto turinio ir reklamų teikimui',
                ] : [
                  'Maintaining your session and preferences',
                  'Understanding how you use our website',
                  'Improving website performance and user experience',
                  'Providing personalized content and advertisements',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <p className="text-gray-400">
                {isLt
                  ? 'Galite nurodyti savo naršyklei atsisakyti visų slapukų arba pranešti, kai slapukas yra siunčiamas. Tačiau kai kurios mūsų svetainės funkcijos gali neveikti tinkamai be slapukų.'
                  : 'You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? 'Duomenų Dalijimasis ir Atskleidimas' : 'Data Sharing and Disclosure'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Mes neparduodame, neprekiaujame ir neišnuomojame jūsų asmeninės informacijos trečiosioms šalims. Galime dalintis jūsų informacija šiomis aplinkybėmis:'
                  : 'We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:'}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {(isLt ? [
                  { bold: 'Paslaugų Teikėjai:', text: ' Su patikimais trečiųjų šalių paslaugų teikėjais, kurie padeda mums valdyti mūsų svetainę ir paslaugas' },
                  { bold: 'Teisiniai Reikalavimai:', text: ' Kai to reikalauja įstatymai arba siekiant apsaugoti mūsų teises ir saugumą' },
                  { bold: 'Verslo Perleidimas:', text: ' Ryšium su susijungimu, įsigijimu arba turto pardavimu' },
                  { bold: 'Su Jūsų Sutikimu:', text: ' Kai aiškiai sutinkate dalintis savo informacija' },
                ] : [
                  { bold: 'Service Providers:', text: ' With trusted third-party service providers who assist us in operating our website and services' },
                  { bold: 'Legal Requirements:', text: ' When required by law or to protect our rights and safety' },
                  { bold: 'Business Transfers:', text: ' In connection with a merger, acquisition, or sale of assets' },
                  { bold: 'With Your Consent:', text: ' When you explicitly agree to share your information' },
                ]).map((item, i) => <li key={i}><strong className="text-white">{item.bold}</strong>{item.text}</li>)}
              </ul>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? 'Duomenų Saugumas' : 'Data Security'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Įgyvendiname tinkamas technines ir organizacines saugumo priemones, kad apsaugotume jūsų asmeninę informaciją nuo neleistinos prieigos, pakeitimo, atskleidimo ar sunaikinimo. Šios priemonės apima:'
                  : 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:'}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {isLt ? [
                  'Duomenų šifravimas perduodant ir saugant',
                  'Reguliarus saugumo vertinimas ir auditas',
                  'Prieigos kontrolė ir autentifikavimo protokolai',
                  'Darbuotojų mokymas duomenų apsaugos praktikų srityje',
                ] : [
                  'Encryption of data in transit and at rest',
                  'Regular security assessments and audits',
                  'Access controls and authentication protocols',
                  'Employee training on data protection practices',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <p className="text-gray-400">
                {isLt
                  ? 'Tačiau joks interneto perdavimo ar elektroninio saugojimo metodas nėra 100% saugus. Nors stengiamės apsaugoti jūsų asmeninę informaciją, negalime garantuoti absoliutaus saugumo.'
                  : 'However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? 'Jūsų Privatumo Teisės' : 'Your Privacy Rights'}</h2>
              <p className="text-gray-400 mb-4">{isLt ? 'Priklausomai nuo jūsų buvimo vietos, galite turėti šias teises:' : 'Depending on your location, you may have the following rights:'}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {(isLt ? [
                  { bold: 'Prieiga:', text: ' Prašyti prieigos prie savo asmeninės informacijos' },
                  { bold: 'Taisymas:', text: ' Prašyti netikslios informacijos taisymo' },
                  { bold: 'Ištrynimas:', text: ' Prašyti ištrinti savo asmeninę informaciją' },
                  { bold: 'Perkeliamumas:', text: ' Prašyti jūsų duomenų kopijos perkeliamu formatu' },
                  { bold: 'Prieštaravimas:', text: ' Prieštarauti jūsų asmeninės informacijos tvarkymui' },
                  { bold: 'Sutikimo Atšaukimas:', text: ' Atšaukti sutikimą bet kuriuo metu' },
                ] : [
                  { bold: 'Access:', text: ' Request access to your personal information' },
                  { bold: 'Correction:', text: ' Request correction of inaccurate information' },
                  { bold: 'Deletion:', text: ' Request deletion of your personal information' },
                  { bold: 'Portability:', text: ' Request a copy of your data in a portable format' },
                  { bold: 'Objection:', text: ' Object to processing of your personal information' },
                  { bold: 'Withdraw Consent:', text: ' Withdraw consent at any time' },
                ]).map((item, i) => <li key={i}><strong className="text-white">{item.bold}</strong>{item.text}</li>)}
              </ul>
              <p className="text-gray-400 mt-4">
                {isLt ? 'Norėdami pasinaudoti šiomis teisėmis, susisiekite su mumis: ' : 'To exercise these rights, please contact us at '}
                <a href="mailto:info@sitelab.lt" className="text-[#13aff0] hover:text-[#43ffae]">info@sitelab.lt</a>
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? 'Duomenų Saugojimas' : 'Data Retention'}</h2>
              <p className="text-gray-400">
                {isLt
                  ? 'Jūsų asmeninę informaciją saugome tik tiek laiko, kiek reikia šioje Privatumo Politikoje nurodytais tikslais, nebent ilgesnis saugojimo laikotarpis yra reikalaujamas arba leidžiamas įstatymų. Kai mums nebereikia jūsų informacijos, ją saugiai ištrinsime arba anonimizuosime.'
                  : 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? 'Trečiųjų Šalių Nuorodos' : 'Third-Party Links'}</h2>
              <p className="text-gray-400">
                {isLt
                  ? 'Mūsų svetainėje gali būti nuorodos į trečiųjų šalių svetaines. Mes nesame atsakingi už šių išorinių svetainių privatumo praktikas ar turinį. Rekomenduojame peržiūrėti visų lankomų trečiųjų šalių svetainių privatumo politikas.'
                  : 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? 'Vaikų Privatumas' : "Children's Privacy"}</h2>
              <p className="text-gray-400">
                {isLt
                  ? 'Mūsų paslaugos nėra skirtos asmenims iki 18 metų. Mes sąmoningai nerenkame asmeninės informacijos iš vaikų. Jei sužinote, kad vaikas mums pateikė asmeninę informaciją, susisiekite su mumis, ir mes imsimės veiksmų jai ištrinti.'
                  : 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? 'Šios Privatumo Politikos Pakeitimai' : 'Changes to This Privacy Policy'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Galime periodiškai atnaujinti šią Privatumo Politiką, kad atspindėtų mūsų praktikų ar teisinių reikalavimų pokyčius. Apie bet kokius esminius pakeitimus pranešime paskelbdami naują Privatumo Politiką šiame puslapyje ir atnaujindami "Paskutinį kartą atnaujinta" datą.'
                  : 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.'}
              </p>
              <p className="text-gray-400">
                {isLt
                  ? 'Rekomenduojame periodiškai peržiūrėti šią Privatumo Politiką dėl bet kokių pakeitimų. Jūsų tolimesnis mūsų paslaugų naudojimas po bet kokių modifikacijų rodo, kad sutinkate su atnaujinta politika.'
                  : 'We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our services after any modifications indicates your acceptance of the updated policy.'}
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">{isLt ? 'Susisiekite su Mumis' : 'Contact Us'}</h2>
              <p className="text-gray-400 mb-4">
                {isLt
                  ? 'Jei turite klausimų, rūpesčių ar prašymų dėl šios Privatumo Politikos ar mūsų duomenų praktikų, susisiekite su mumis:'
                  : 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:'}
              </p>
              <div className="text-gray-400">
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
