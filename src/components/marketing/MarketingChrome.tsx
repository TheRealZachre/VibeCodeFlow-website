import Link from "next/link";
import { MobileNav } from "@/components/marketing/MobileNav";
import { VcfLogo } from "@/components/marketing/VcfLogo";
import { VCF_CONTACT_EMAIL, VCF_NAV_LINKS } from "@/lib/vibecodeflow/content";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-5 pt-4 md:px-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="vcf-glass flex h-14 items-center justify-between rounded-2xl border border-white/10 px-5 shadow-lg shadow-black/30 md:px-6">
          <div className="flex items-center gap-3 md:gap-6">
            <VcfLogo size="nav" priority />
            <div className="md:hidden">
              <MobileNav />
            </div>
            <nav className="hidden items-center gap-1 md:flex">
              {VCF_NAV_LINKS.map(({ href, label, ...link }) => (
                <a
                  key={href}
                  href={href}
                  {...("external" in link && link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`rounded-full px-3.5 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white${
                    "spacedBefore" in link && link.spacedBefore ? " ml-6" : ""
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <a
            href="https://calendly.com/vibecodeflow"
            target="_blank"
            rel="noopener noreferrer"
            className="vcf-btn hidden sm:inline-flex"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="relative border-t border-white/8 px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <VcfLogo size="footer" />
        <div className="flex flex-col gap-2 text-sm text-white/40 md:items-end">
          <p>
            vibecodeflow.com ·{" "}
            <a
              href={`mailto:${VCF_CONTACT_EMAIL}`}
              className="text-white/55 transition hover:text-white"
            >
              {VCF_CONTACT_EMAIL}
            </a>
          </p>
          <Link href="/privacy" className="text-white/45 transition hover:text-white">
            Privacy Policy
          </Link>
        </div>
        <p className="text-sm text-white/35">© 2026 Vibe.Code.Flow.</p>
      </div>
    </footer>
  );
}

export function MarketingChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="vcf-site relative min-h-screen overflow-x-hidden bg-[var(--vcf-bg)] text-[var(--vcf-text)]">
      <div className="vcf-mesh pointer-events-none fixed inset-0" aria-hidden />
      <div className="vcf-grid pointer-events-none fixed inset-0 opacity-[0.35]" aria-hidden />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
