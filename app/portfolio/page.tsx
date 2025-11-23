import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Portfolio
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              Our Work Speaks
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            See how we've helped businesses dominate search and grow their online presence.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {['GEO Projects', 'SEO Projects', 'Web Development', 'E-Commerce'].map((cat, idx) => (
              <button key={idx} className="px-6 py-3 bg-[#171717] border border-gray-800 hover:border-[#13aff0] rounded-xl text-gray-300 hover:text-[#43ffae] transition-colors font-medium">
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Tech Startup GEO', category: 'GEO Optimization', result: '+47 AI mentions/month' },
              { title: 'Local Business SEO', category: 'SEO', result: '#1 Google ranking' },
              { title: 'E-commerce Store', category: 'Web Dev', result: '€50k first month' },
              { title: 'SaaS Website', category: 'Web Development', result: '250% traffic increase' },
              { title: 'Agency Rebranding', category: 'Web Dev + SEO', result: '5x lead generation' },
              { title: 'Enterprise GEO', category: 'GEO', result: 'Featured in ChatGPT' },
            ].map((project, idx) => (
              <div key={idx} className="bg-[#171717] rounded-2xl border border-gray-800 hover:border-[#13aff0] transition-all hover:-translate-y-2 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-[#1b1b1b] to-[#171717] flex items-center justify-center">
                  <div className="text-6xl">📊</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#13aff0] mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[#43ffae] font-semibold">{project.result}</span>
                    <Link href="/contact" className="text-gray-400 hover:text-[#43ffae] transition-colors">
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#13aff0] to-[#43ffae]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1b1b1b] mb-6">
            Ready to Join Them?
          </h2>
          <p className="text-xl text-[#1b1b1b]/90 mb-10">
            Let's create your success story with GEO, SEO, or web development.
          </p>
          <Link href="/contact" className="inline-block bg-white text-[#13aff0] px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl">
            Start Your Project
          </Link>
        </div>
      </section>

      <footer className="bg-[#0f0f0f] text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-bold text-white mb-2">SiteLab</p>
          <p className="text-sm text-[#43ffae] mb-1">GEO • AI Search • SEO • Web Development</p>
          <p className="text-sm">&copy; 2025 SiteLab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
