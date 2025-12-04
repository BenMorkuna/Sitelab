'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');

  const categories = ['All', 'GEO', 'SEO', 'Web Development', 'AI Search', 'Case Studies'];

  // Placeholder blog posts - these will be replaced with real content later
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with GEO: A Complete Guide',
      excerpt: 'Learn how to optimize your content for AI-driven search engines like ChatGPT, Perplexity, and Claude. Discover the fundamentals of GEO and why it matters for your business.',
      category: 'GEO',
      date: 'December 1, 2024',
      readTime: '8 min read',
      image: '/blog/geo-guide.jpg',
    },
    {
      id: 2,
      title: 'SEO vs GEO: What\'s the Difference?',
      excerpt: 'Understand the key differences between traditional SEO and modern GEO strategies. Learn when to use each approach for maximum search visibility.',
      category: 'SEO',
      date: 'December 4, 2024',
      readTime: '15 min read',
      image: '/blog/seo-vs-geo.jpg',
      slug: 'seo-vs-geo',
    },
    {
      id: 3,
      title: 'Building Modern Websites with Next.js',
      excerpt: 'Explore the benefits of using Next.js for your next web project. Performance, SEO, and developer experience all in one framework.',
      category: 'Web Development',
      date: 'November 25, 2024',
      readTime: '10 min read',
      image: '/blog/nextjs.jpg',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing:', email);
  };

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navigation />

      {/* Hero Section with Subscription */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#1b1b1b] to-[#171717]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#13aff0]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#43ffae]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Insights on GEO, SEO &<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aff0] to-[#43ffae]">
              Digital Marketing
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Practical strategies, case studies, and insights on AI search optimization, traditional SEO, and modern web development
          </p>

          {/* Email Subscription Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for updates"
              className="flex-1 px-4 py-3 bg-[#1b1b1b] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#13aff0] transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-[#13aff0]/30 transition-all hover:scale-105 whitespace-nowrap"
            >
              Subscribe for Updates
            </button>
          </form>
        </div>
      </section>

      {/* Category Filter & Search */}
      <section className="sticky top-20 z-40 bg-[#171717]/95 backdrop-blur-md border-b border-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white'
                      : 'bg-[#1b1b1b] text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full lg:w-64 px-4 py-2 pl-10 bg-[#1b1b1b] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#13aff0] transition-colors"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid with Sidebar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-2 space-y-6">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-[#1b1b1b] rounded-xl border border-gray-800 overflow-hidden hover:border-[#13aff0]/30 transition-all group">
                  <div className="grid md:grid-cols-5 gap-6 p-6">
                    {/* Featured Image Placeholder */}
                    <div className="md:col-span-2">
                      <div className="aspect-video bg-gradient-to-br from-[#13aff0]/20 to-[#43ffae]/20 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                        <svg className="w-16 h-16 text-[#43ffae]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 flex flex-col">
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          post.category === 'GEO' ? 'bg-[#13aff0]/20 text-[#13aff0]' :
                          post.category === 'SEO' ? 'bg-[#43ffae]/20 text-[#43ffae]' :
                          'bg-gray-800 text-gray-300'
                        }`}>
                          {post.category}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#43ffae] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-400 mb-4 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>

                      <Link
                        href={post.slug ? `/en/blog/${post.slug}` : "#"}
                        className="mt-4 text-[#43ffae] font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                      >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}

              {/* Coming Soon Message */}
              <div className="bg-[#1b1b1b] rounded-xl border-2 border-dashed border-gray-800 p-12 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#13aff0]/20 to-[#43ffae]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#43ffae]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">More Articles Coming Soon</h3>
                <p className="text-gray-400">We're working on publishing more valuable content. Subscribe above to get notified!</p>
              </div>
            </div>

            {/* Sidebar - Popular Posts */}
            <div className="lg:col-span-1">
              <div className="sticky top-36">
                <div className="bg-[#1b1b1b] rounded-xl border border-gray-800 p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Popular Posts</h3>
                  <div className="space-y-6">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <div key={post.id} className="group cursor-pointer">
                        <Link href={post.slug ? `/en/blog/${post.slug}` : "#"} className="block">
                          <h4 className="text-white font-semibold mb-2 group-hover:text-[#43ffae] transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-500">{post.readTime}</p>
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Subscribe CTA */}
                  <div className="mt-8 pt-8 border-t border-gray-800">
                    <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
                    <p className="text-sm text-gray-400 mb-4">Get the latest insights delivered to your inbox</p>
                    <Link
                      href="#"
                      className="block w-full text-center py-3 bg-gradient-to-r from-[#13aff0] to-[#43ffae] text-white rounded-lg font-semibold hover:scale-105 transition-all"
                    >
                      Subscribe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
