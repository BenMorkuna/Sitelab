import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: `https://www.sitelab.lt/${locale}/web-development`,
    },
  };
}

export default function WebDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
