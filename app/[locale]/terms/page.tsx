import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Service</span>
          </h1>
          <p className="text-gray-400 mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-400 mb-4">
                By accessing or using the SiteLab website and services, you agree to be bound by these Terms of Service
                and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                from using or accessing our services.
              </p>
              <p className="text-gray-400">
                These Terms of Service constitute a legally binding agreement between you and SiteLab regarding your use
                of our website and services.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
              <p className="text-gray-400 mb-4">SiteLab provides the following services:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Web development and design services</li>
                <li>E-commerce solutions and online store development</li>
                <li>Search Engine Optimization (SEO) services</li>
                <li>Generative Engine Optimization (GEO) services</li>
                <li>AI search optimization and digital marketing</li>
                <li>Website maintenance and technical support</li>
                <li>Custom web application development</li>
              </ul>
              <p className="text-gray-400">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p className="text-gray-400 mb-4">When using our services, you agree to:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
                <li>Use our services only for lawful purposes and in accordance with these Terms</li>
                <li>Not interfere with or disrupt the operation of our services</li>
                <li>Not attempt to gain unauthorized access to any part of our services</li>
                <li>Respect intellectual property rights of SiteLab and third parties</li>
              </ul>
              <p className="text-gray-400">
                You are responsible for all activities that occur under your account.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">Our Intellectual Property</h3>
              <p className="text-gray-400 mb-4">
                All content, features, and functionality on our website, including but not limited to text, graphics, logos,
                images, code, and software, are the exclusive property of SiteLab and are protected by international copyright,
                trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">Client Work Product</h3>
              <p className="text-gray-400 mb-4">
                Upon full payment for services rendered, you will own the final deliverables created specifically for you.
                However, SiteLab retains ownership of:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Preliminary designs, drafts, and concepts not included in final deliverables</li>
                <li>Pre-existing materials, templates, and code libraries</li>
                <li>Methodologies, processes, and techniques used in creating deliverables</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">Portfolio Rights</h3>
              <p className="text-gray-400">
                SiteLab reserves the right to showcase completed projects in our portfolio, marketing materials, and case
                studies unless otherwise agreed in writing.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">Pricing and Quotes</h3>
              <p className="text-gray-400 mb-4">
                All prices are quoted in Euros (€) unless otherwise specified. Quotes are valid for 30 days from the date
                of issue. Pricing may be subject to change based on project scope modifications.
              </p>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">Payment Schedule</h3>
              <p className="text-gray-400 mb-4">Unless otherwise agreed in writing, payment terms are:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li><strong className="text-white">50% deposit</strong> required before project commencement</li>
                <li><strong className="text-white">25% payment</strong> due at project milestone (if applicable)</li>
                <li><strong className="text-white">25% final payment</strong> due upon project completion</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">Late Payments</h3>
              <p className="text-gray-400">
                Late payments may be subject to interest charges of 1.5% per month or the maximum rate permitted by law,
                whichever is less. We reserve the right to suspend services for accounts with overdue payments.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Project Timelines and Deliverables</h2>
              <p className="text-gray-400 mb-4">
                Project timelines are estimates based on current workload and scope. Delays may occur due to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Late client feedback or content delivery</li>
                <li>Scope changes or additional feature requests</li>
                <li>Technical complexities or third-party dependencies</li>
                <li>Force majeure events beyond our control</li>
              </ul>
              <p className="text-gray-400">
                We will make reasonable efforts to meet agreed timelines and communicate any potential delays promptly.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Revisions and Change Requests</h2>
              <p className="text-gray-400 mb-4">
                Our standard project packages include a specified number of revision rounds. Additional revisions or
                changes beyond the agreed scope may be subject to additional charges based on:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Complexity of requested changes</li>
                <li>Time required for implementation</li>
                <li>Impact on project timeline</li>
              </ul>
              <p className="text-gray-400">
                Major scope changes will be documented in a change order with updated pricing and timeline estimates.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Client Responsibilities and Cooperation</h2>
              <p className="text-gray-400 mb-4">Successful project completion requires client cooperation, including:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Providing timely feedback and approvals</li>
                <li>Supplying necessary content, images, and materials</li>
                <li>Granting access to required systems and accounts</li>
                <li>Designating a primary point of contact</li>
                <li>Responding to queries within reasonable timeframes</li>
              </ul>
              <p className="text-gray-400">
                Delays caused by lack of client cooperation may result in project timeline extensions and potential
                additional charges for extended project management.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Warranties and Disclaimers</h2>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">Limited Warranty</h3>
              <p className="text-gray-400 mb-4">
                We warrant that services will be performed in a professional and workmanlike manner. We provide a 30-day
                warranty period for bug fixes and technical issues arising from our work, excluding issues caused by:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Client modifications or third-party changes</li>
                <li>Hosting or server issues outside our control</li>
                <li>Incompatibilities with third-party software</li>
                <li>Force majeure events</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">Disclaimer</h3>
              <p className="text-gray-400 mb-4">
                EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND,
                EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Services will be uninterrupted or error-free</li>
                <li>Results will meet your specific requirements</li>
                <li>SEO/GEO efforts will achieve specific rankings or traffic goals</li>
              </ul>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-400 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SITELAB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
                DIRECTLY OR INDIRECTLY.
              </p>
              <p className="text-gray-400">
                Our total liability for any claims arising from our services shall not exceed the total amount paid by
                you for the specific service giving rise to the claim during the 12 months preceding the claim.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">Termination by Client</h3>
              <p className="text-gray-400 mb-4">
                You may terminate a project at any time by providing written notice. In such cases:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>You will be charged for all work completed up to the termination date</li>
                <li>Any deposits or advance payments are non-refundable</li>
                <li>You will receive deliverables for work completed and paid for</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">Termination by SiteLab</h3>
              <p className="text-gray-400">
                We reserve the right to terminate services if you breach these Terms, fail to make required payments,
                or if we determine that continuing the project is not feasible.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">12. Confidentiality</h2>
              <p className="text-gray-400 mb-4">
                Both parties agree to maintain confidentiality of proprietary information disclosed during the course of
                our business relationship. This obligation continues for 3 years after project completion.
              </p>
              <p className="text-gray-400">
                Confidential information does not include information that is publicly available, independently developed,
                or rightfully obtained from third parties.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">13. Indemnification</h2>
              <p className="text-gray-400">
                You agree to indemnify and hold SiteLab harmless from any claims, damages, or expenses arising from:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
                <li>Your breach of these Terms</li>
                <li>Content or materials you provide to us</li>
                <li>Your violation of any third-party rights</li>
                <li>Your use of our services or deliverables</li>
              </ul>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">14. Dispute Resolution</h2>
              <p className="text-gray-400 mb-4">
                In the event of any dispute arising from these Terms or our services:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Both parties agree to first attempt to resolve disputes through good faith negotiations</li>
                <li>If negotiations fail, disputes may be submitted to mediation</li>
                <li>Any unresolved disputes shall be governed by the laws of Lithuania</li>
              </ul>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">15. Modifications to Terms</h2>
              <p className="text-gray-400 mb-4">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material
                changes by updating the "Last updated" date and posting a notice on our website.
              </p>
              <p className="text-gray-400">
                Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">16. Severability</h2>
              <p className="text-gray-400">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited
                or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">17. Entire Agreement</h2>
              <p className="text-gray-400">
                These Terms of Service, together with any project proposals, statements of work, or other written agreements,
                constitute the entire agreement between you and SiteLab regarding the use of our services.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">18. Contact Information</h2>
              <p className="text-gray-400 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="text-gray-400">
                <p className="mb-2"><strong className="text-white">Company:</strong> SiteLab</p>
                <p className="mb-2"><strong className="text-white">Email:</strong> <a href="mailto:info@sitelab.lt" className="text-[#13aff0] hover:text-[#43ffae]">info@sitelab.lt</a></p>
                <p className="mb-2"><strong className="text-white">Phone:</strong> <a href="tel:+37060267098" className="text-[#13aff0] hover:text-[#43ffae]">+370 602 67098</a></p>
                <p><strong className="text-white">Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
