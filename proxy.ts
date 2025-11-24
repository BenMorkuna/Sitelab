import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always include locale in pathname
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames, exclude icon routes
  matcher: ['/((?!api|_next|_vercel|icon|apple-icon|.*\\..*).*)']
};
