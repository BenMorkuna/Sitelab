import type { Metadata } from "next";
import { Red_Hat_Display, Open_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "SiteLab - GEO & AI Search Optimization Expert | Get Found in ChatGPT & AI Results",
  description: "Get discovered in ChatGPT, Perplexity, Claude, and Gemini AI search results. Future-proof your visibility with expert GEO optimization + professional SEO & web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
