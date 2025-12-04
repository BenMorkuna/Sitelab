import type { Metadata } from "next";
import { Red_Hat_Display, Open_Sans } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../i18n';
import ChatWidget from './components/ChatWidget';
import CookieConsent from './components/CookieConsent';
import StructuredData from './components/StructuredData';
import { organizationSchema } from './lib/schemas';

const redHatDisplay = Red_Hat_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "SiteLab - GEO & AI Search Optimization Expert | Get Found in ChatGPT & AI Results",
    description: "Get discovered in ChatGPT, Perplexity, Claude, and Gemini AI search results. Future-proof your visibility with expert GEO optimization + professional SEO & web development.",
    alternates: {
      canonical: `https://www.sitelab.lt/${locale}`,
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <StructuredData data={organizationSchema} />
      </head>
      <body
        className={`${redHatDisplay.variable} ${openSans.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <ChatWidget />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
