import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Policy</span>
          </h1>
          <p className="text-gray-400 mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-400 mb-4">
                At SiteLab, we are committed to protecting your privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
              <p className="text-gray-400">
                By using our website and services, you consent to the data practices described in this policy.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">Personal Information</h3>
              <p className="text-gray-400 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Fill out contact forms on our website</li>
                <li>Request a quote for our services</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Engage with our customer support</li>
                <li>Create an account or register for our services</li>
              </ul>
              <p className="text-gray-400">
                This information may include: name, email address, phone number, company name, job title, and any other
                information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-[#43ffae] mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-400 mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Clickstream data and browsing behavior</li>
              </ul>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-400 mb-4">We use the collected information for various purposes:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you quotes, proposals, and service-related communications</li>
                <li>To process transactions and manage projects</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To analyze website usage and optimize user experience</li>
                <li>To detect, prevent, and address technical issues or fraud</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-400 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information.
                Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
              </p>
              <p className="text-gray-400 mb-4">We use cookies for:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Maintaining your session and preferences</li>
                <li>Understanding how you use our website</li>
                <li>Improving website performance and user experience</li>
                <li>Providing personalized content and advertisements</li>
              </ul>
              <p className="text-gray-400">
                You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However,
                some features of our website may not function properly without cookies.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
              <p className="text-gray-400 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li><strong className="text-white">Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and services</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong className="text-white">With Your Consent:</strong> When you explicitly agree to share your information</li>
              </ul>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-400 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p className="text-gray-400">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive
                to protect your personal information, we cannot guarantee absolute security.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
              <p className="text-gray-400 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li><strong className="text-white">Access:</strong> Request access to your personal information</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate information</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                <li><strong className="text-white">Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong className="text-white">Objection:</strong> Object to processing of your personal information</li>
                <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="text-gray-400 mt-4">
                To exercise these rights, please contact us at <a href="mailto:info@sitelab.lt" className="text-[#13aff0] hover:text-[#43ffae]">info@sitelab.lt</a>
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-gray-400">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your
                information, we will securely delete or anonymize it.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
              <p className="text-gray-400">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or
                content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-400">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children. If you become aware that a child has provided us with personal information,
                please contact us, and we will take steps to delete such information.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-400 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
                We will notify you of any material changes by posting the new Privacy Policy on this page and updating the
                "Last updated" date.
              </p>
              <p className="text-gray-400">
                We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our services
                after any modifications indicates your acceptance of the updated policy.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us:
              </p>
              <div className="text-gray-400">
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
