import type { Metadata } from "next";
import { MarketingChrome } from "@/components/marketing/MarketingChrome";
import { PrivacyPolicyContent } from "@/components/marketing/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Vibe.Code.Flow.",
  description:
    "How VibeCodeFlow collects, uses, and protects information on vibecodeflow.com and in connection with our communications and analytics services.",
};

export default function PrivacyPolicyPage() {
  return (
    <MarketingChrome>
      <main className="relative px-5 py-12 md:px-8 md:py-16">
        <PrivacyPolicyContent />
      </main>
    </MarketingChrome>
  );
}
