import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#43ffae]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-[#1b1b1b] border border-[#43ffae]/30 rounded-full">
            <span className="text-[#43ffae] text-sm font-bold">Ahead of the Curve</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            About SiteLab
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              The Future of Search
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Bringing brands visibility in the new AI-driven search era
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Mission</span>
          </h2>
          <div className="bg-[#171717] p-10 rounded-2xl border border-[#13aff0]">
            <p className="text-2xl text-gray-300 leading-relaxed mb-6">
              We exist to help businesses <span className="text-[#43ffae] font-bold">thrive in the AI search revolution</span>.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              While others are catching up with traditional SEO, we're already mastering GEO—ensuring brands appear in ChatGPT, Perplexity, Claude, and Gemini responses. We combine cutting-edge AI search optimization with proven SEO and professional web development to deliver complete digital visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Shifted to GEO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Why We Shifted to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">GEO</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Saw the Future</h3>
              <p className="text-gray-400">
                We recognized early that AI search would fundamentally change how people discover brands. Traditional SEO alone wasn't enough anymore.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-[#43ffae] to-[#13aff0] rounded-xl flex items-center justify-center mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Early Adoption</h3>
              <p className="text-gray-400">
                Instead of waiting for GEO to become mainstream, we invested in understanding and mastering it while the opportunity window was wide open.
              </p>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0] to-[#43ffae] rounded-xl flex items-center justify-center mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Client Results</h3>
              <p className="text-gray-400">
                Our clients are now dominating both traditional search AND AI-generated results, giving them an unbeatable competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Background</span>
          </h2>
          <div className="space-y-6 text-gray-400">
            <p className="text-lg leading-relaxed">
              SiteLab started as a traditional SEO and web development agency. We helped businesses rank on Google and built professional websites. But we noticed a shift happening—more and more people were using ChatGPT and other AI tools instead of Google.
            </p>
            <p className="text-lg leading-relaxed">
              That's when we made a strategic pivot. While continuing to deliver excellent SEO and web development services, we invested heavily in understanding <span className="text-white font-semibold">Generative Engine Optimization (GEO)</span>.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we're one of the few agencies in Europe specializing in GEO, giving our clients first-mover advantage in AI search visibility. We combine this cutting-edge expertise with proven SEO strategies and professional web development to deliver <span className="text-[#43ffae] font-semibold">complete search dominance</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Believe</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Future-First Thinking',
                description: 'We don\'t just follow trends—we anticipate them. GEO isn\'t a buzzword for us; it\'s the foundation of modern search strategy.',
              },
              {
                title: 'Transparency Always',
                description: 'No smoke and mirrors. We show you exactly what we do, why we do it, and the results you get. Clear reporting, clear communication.',
              },
              {
                title: 'Results Over Vanity Metrics',
                description: 'We care about metrics that matter: AI mentions, conversions, revenue growth. Not just traffic numbers that don\'t translate to business value.',
              },
              {
                title: 'Early Adopter Advantage',
                description: 'Being early gives our clients unfair advantages. We help you dominate new channels while competitors are still learning they exist.',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 hover:border-[#13aff0] transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            What Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">Say</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SiteLab positioned us in ChatGPT results before our competitors even knew what GEO was. Game-changing.",
                author: "Tech Startup Founder",
              },
              {
                quote: "Finally, an agency that understands the future. Our visibility in AI search is incredible.",
                author: "E-commerce Director",
              },
              {
                quote: "They don't just do SEO—they think ahead. That's why we chose them.",
                author: "Marketing Manager",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#171717] p-8 rounded-2xl border border-gray-800">
                <div className="text-[#43ffae] text-4xl mb-4">"</div>
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <p className="text-gray-500 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#13aff0] via-[#43ffae] to-[#13aff0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1b1b1b] mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-[#1b1b1b]/90 mb-10">
            Let's discuss how GEO, SEO, or web development can transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#13aff0] px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-bold text-white mb-2">SiteLab</p>
          <p className="text-sm text-[#43ffae] mb-1">GEO • AI Search • SEO • Web Development</p>
          <p className="text-sm">&copy; 2025 SiteLab. All rights reserved.</p>
          <p className="text-sm mt-2">Get Found in AI Results • Future-Proof Your Brand</p>
        </div>
      </footer>
    </div>
  );
}
