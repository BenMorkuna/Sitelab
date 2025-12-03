// Organization Schema - Used on all pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SiteLab",
  "alternateName": "SiteLab.lt",
  "url": "https://www.sitelab.lt",
  "logo": "https://www.sitelab.lt/logo.png",
  "description": "Expert GEO (Generative Engine Optimization), SEO, and web development services. Get found in AI search results and traditional search engines.",
  "email": "info@sitelab.lt",
  "telephone": "+37060267098",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "LT"
  },
  "sameAs": [
    // Add your social media profiles here
    // "https://www.linkedin.com/company/sitelab",
    // "https://twitter.com/sitelab",
    // "https://www.facebook.com/sitelab"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+37060267098",
    "contactType": "customer service",
    "email": "info@sitelab.lt",
    "availableLanguage": ["en", "lt"]
  }
};

// WebSite Schema with SearchAction
export const websiteSchema = (locale: string) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SiteLab",
  "url": `https://www.sitelab.lt/${locale}`,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `https://www.sitelab.lt/${locale}?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

// Service Schemas
export const geoServiceSchema = (locale: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Generative Engine Optimization (GEO) Services",
  "description": "Get discovered in ChatGPT, Perplexity, Claude, and Gemini AI search results. Expert GEO optimization to appear in AI-generated responses and recommendations.",
  "provider": {
    "@type": "Organization",
    "name": "SiteLab",
    "url": "https://www.sitelab.lt"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Lithuania"
  },
  "serviceType": "GEO Optimization",
  "url": `https://www.sitelab.lt/${locale}/geo`,
  "offers": [
    {
      "@type": "Offer",
      "name": "GEO Content Optimization",
      "description": "Optimize your existing content to rank in AI-generated responses",
      "price": "599",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "599",
        "priceCurrency": "EUR",
        "unitText": "per month"
      }
    },
    {
      "@type": "Offer",
      "name": "GEO Entity Structuring",
      "description": "Build comprehensive entity recognition for AI models",
      "price": "899",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "899",
        "priceCurrency": "EUR",
        "unitText": "per month"
      }
    },
    {
      "@type": "Offer",
      "name": "GEO Distribution Strategy",
      "description": "Strategic content distribution to maximize AI discovery",
      "price": "1299",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "1299",
        "priceCurrency": "EUR",
        "unitText": "per month"
      }
    }
  ]
});

export const seoServiceSchema = (locale: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO Services",
  "description": "Professional search engine optimization services for Google and Bing. Local SEO, national SEO, and e-commerce SEO packages.",
  "provider": {
    "@type": "Organization",
    "name": "SiteLab",
    "url": "https://www.sitelab.lt"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Lithuania"
  },
  "serviceType": "Search Engine Optimization",
  "url": `https://www.sitelab.lt/${locale}/seo`,
  "offers": [
    {
      "@type": "Offer",
      "name": "Local SEO",
      "description": "Dominate local search and Google Maps",
      "price": "399",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "399",
        "priceCurrency": "EUR",
        "unitText": "per month"
      }
    },
    {
      "@type": "Offer",
      "name": "National SEO",
      "description": "Rank nationally for competitive keywords",
      "price": "599",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "599",
        "priceCurrency": "EUR",
        "unitText": "per month"
      }
    },
    {
      "@type": "Offer",
      "name": "E-Commerce SEO",
      "description": "Optimize your online store for maximum visibility",
      "price": "799",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "799",
        "priceCurrency": "EUR",
        "unitText": "per month"
      }
    }
  ]
});

export const webDevServiceSchema = (locale: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Development Services",
  "description": "Custom websites and web applications built with GEO and SEO optimization from day one. Modern, fast, and conversion-focused development.",
  "provider": {
    "@type": "Organization",
    "name": "SiteLab",
    "url": "https://www.sitelab.lt"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Lithuania"
  },
  "serviceType": "Web Development",
  "url": `https://www.sitelab.lt/${locale}/web-development`,
  "offers": [
    {
      "@type": "Offer",
      "name": "Custom Websites",
      "description": "Modern responsive design with GEO + SEO optimization",
      "price": "1200",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "1200",
        "priceCurrency": "EUR",
        "minPrice": "1200"
      }
    },
    {
      "@type": "Offer",
      "name": "Landing Pages",
      "description": "Conversion-focused design with fast deployment",
      "price": "450",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "450",
        "priceCurrency": "EUR",
        "minPrice": "450"
      }
    },
    {
      "@type": "Offer",
      "name": "Web Applications",
      "description": "Custom functionality with scalable architecture",
      "price": "3500",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "3500",
        "priceCurrency": "EUR",
        "minPrice": "3500"
      }
    }
  ]
});

export const ecommerceServiceSchema = (locale: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-commerce Development Services",
  "description": "Launch your online store with GEO + SEO optimization built in. Professional e-commerce solutions that sell more and rank higher.",
  "provider": {
    "@type": "Organization",
    "name": "SiteLab",
    "url": "https://www.sitelab.lt"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Lithuania"
  },
  "serviceType": "E-commerce Development",
  "url": `https://www.sitelab.lt/${locale}/ecommerce`,
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter Store",
      "description": "Up to 50 products with payment gateway integration",
      "price": "2500",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "2500",
        "priceCurrency": "EUR",
        "minPrice": "2500"
      }
    },
    {
      "@type": "Offer",
      "name": "Professional Store",
      "description": "Unlimited products with advanced features",
      "price": "5000",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "5000",
        "priceCurrency": "EUR",
        "minPrice": "5000"
      }
    }
  ]
});

// FAQ Schema - Template for future use
export const createFaqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
