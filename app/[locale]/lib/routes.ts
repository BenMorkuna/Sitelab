// Slug mapping: EN slug → LT slug
export const slugMap: Record<string, string> = {
  'contact': 'kontaktai',
  'web-solutions': 'web-sprendimai',
  'about': 'apie',
  'portfolio': 'portfelis',
  'blog': 'blog',
  'seo': 'seo',
  'privacy': 'privatumas',
  'terms': 'salygos',
};

// Reverse map: LT slug → EN slug
export const slugMapReverse: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([en, lt]) => [lt, en])
);

export function getSlug(enSlug: string, locale: string): string {
  if (locale === 'lt') return slugMap[enSlug] ?? enSlug;
  return enSlug;
}

export function toEnSlug(slug: string): string {
  return slugMapReverse[slug] ?? slug;
}
