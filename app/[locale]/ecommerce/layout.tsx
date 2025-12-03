import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: `https://www.sitelab.lt/${locale}/ecommerce`,
    },
  };
}

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
