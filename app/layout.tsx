import { locales } from '../i18n';
import { notFound } from 'next/navigation';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (locale && !locales.includes(locale as any)) {
    notFound();
  }

  return children;
}
