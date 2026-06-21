import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import { VCF_BRAND } from "@/lib/vibecodeflow/brand";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-vcf-display",
});

export const metadata: Metadata = {
  title: "Vibe. Code. Flow. — The pharma/biotech communications agency, AI-first",
  description:
    "Senior pharma/biotech communications expertise, producing agency-grade work in hours rather than weeks. Domain expertise encoded into AI tools we build and own.",
  openGraph: {
    title: "Vibe. Code. Flow. — The pharma/biotech communications agency, AI-first",
    description:
      "Senior pharma/biotech communications expertise, producing agency-grade work in hours rather than weeks.",
    type: "website",
    images: [{ url: VCF_BRAND.lockupStackedDark, alt: VCF_BRAND.logoAlt }],
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${outfit.variable} scroll-smooth`}>{children}</div>
  );
}
