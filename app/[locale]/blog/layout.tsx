import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Blog - GEO, SEO & Web Development Insights | SiteLab",
    description: "Insights, tips, and news about AI search optimization, traditional SEO, and modern web development from SiteLab experts.",
    alternates: {
      canonical: `https://www.sitelab.lt/${locale}/blog`,
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
