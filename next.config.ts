import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
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
