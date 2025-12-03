// Canonical URL base
export const CANONICAL_BASE = 'https://www.sitelab.lt';

export function getCanonicalUrl(locale: string, path: string = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${CANONICAL_BASE}/${locale}${cleanPath}`;
}
