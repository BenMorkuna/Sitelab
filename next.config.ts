import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/lt/kontaktai', destination: '/lt/contact' },
      { source: '/lt/web-sprendimai', destination: '/lt/web-solutions' },
      { source: '/lt/apie', destination: '/lt/about' },
      { source: '/lt/portfelis', destination: '/lt/portfolio' },
      { source: '/lt/privatumas', destination: '/lt/privacy' },
      { source: '/lt/salygos', destination: '/lt/terms' },
    ];
  },
  async redirects() {
    return [
      // Redirect non-www to www (only in production)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sitelab.lt',
          },
        ],
        destination: 'https://www.sitelab.lt/:path*',
        permanent: true,
      },
      // Redirect http://www to https://www (only in production)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.sitelab.lt',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.sitelab.lt/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
