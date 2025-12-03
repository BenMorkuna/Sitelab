import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: `https://www.sitelab.lt/${locale}/geo`,
    },
  };
}

export default function GeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
