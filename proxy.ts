import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames, exclude icon routes
  matcher: ['/((?!api|_next|_vercel|icon|apple-icon|.*\\..*).*)']
};
