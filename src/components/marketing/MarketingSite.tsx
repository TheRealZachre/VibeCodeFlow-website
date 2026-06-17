import {
  ArrowRight,
  ArrowUpRight,
  BarChart2,
  Building2,
  Check,
  Globe,
  Sparkles,
  User,
  Users,
  X as XIcon,
  Zap,
} from "lucide-react";
import { HeroPreview } from "@/components/marketing/HeroPreview";
import { MobileNav } from "@/components/marketing/MobileNav";
import { VcfLogo } from "@/components/marketing/VcfLogo";
import {
  VCF_APPLICATIONS,
  VCF_CONTACT_EMAIL,
  VCF_DEMO_CAPABILITIES,
  VCF_DEMO_SHOWCASES,
  VCF_DIFFERENTIATORS,
  VCF_FOUNDERS,
  VCF_NAV_LINKS,
  VCF_PRICING_TIERS,
  VCF_PROJECT_PRICING,
  VCF_SERVICES,
} from "@/lib/vibecodeflow/content";
import { getPfizerDemoUrl } from "@/lib/vibecodeflow/demo-urls";

const capabilityIcons = [BarChart2, Zap, Users] as const;

const serviceIcons = [
  Sparkles,
  BarChart2,
  Globe,
  Zap,
  Users,
] as const;

const statusStyles: Record<string, string> = {
  "Demo exists": "bg-cyan-400/15 text-cyan-300 ring-cyan-400/25",
  "Build second": "bg-purple-400/15 text-purple-300 ring-purple-400/25",
  "Core differentiator": "bg-sky-400/15 text-sky-300 ring-sky-400/25",
  "In build": "bg-blue-400/15 text-blue-300 ring-blue-400/20",
  "App 04 bundle": "bg-white/8 text-white/60 ring-white/10",
  "In development": "bg-white/8 text-white/50 ring-white/10",
};

export function MarketingSite() {
  return (
    <div className="vcf-site relative min-h-screen overflow-x-hidden bg-[var(--vcf-bg)] text-[var(--vcf-text)]">
      <div className="vcf-mesh pointer-events-none fixed inset-0" aria-hidden />
      <div className="vcf-grid pointer-events-none fixed inset-0 opacity-[0.35]" aria-hidden />

      <SiteHeader />
      <main className="relative">
        <HeroSection />
        <DifferenceSection />
        <ServicesSection />
        <PlatformSection />
        <DemosSection />
        <PricingSection />
        <FoundersSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-5 pt-5 md:px-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="vcf-glass flex h-16 items-center justify-between rounded-2xl border border-white/10 px-5 shadow-lg shadow-black/30 md:px-6">
          <VcfLogo size="nav" priority />

          <nav className="hidden items-center gap-1 md:flex">
            {VCF_NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3.5 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="vcf-btn hidden sm:inline-flex">
              Start a conversation
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative px-5 pb-24 pt-12 md:px-8 md:pb-32 md:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="vcf-fade-up">
          <div className="relative mb-8 inline-block lg:hidden">
            <div className="vcf-logo-glow" aria-hidden />
            <VcfLogo size="hero" href={undefined} priority />
          </div>

          <div className="vcf-pill mb-6 inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Pharma communications · AI-first
          </div>

          <h1 className="max-w-[12ch] font-[family-name:var(--font-vcf-display)] text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
            A real agency.{" "}
            <span className="vcf-gradient-text">AI-first.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/55 md:text-xl">
            Senior pharma communications expertise, producing agency-grade work
            in hours rather than weeks — custom to each client. We listen to
            your problem, then design and build the solution.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="vcf-btn vcf-btn-glow group">
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#demos" className="vcf-btn vcf-btn-ghost group">
              See live demos
              <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/8 pt-8">
            {[
              { value: "7", label: "Applications" },
              { value: "12", label: "AI agents" },
              { value: "48hr", label: "Readout packages" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="vcf-gradient-text font-[family-name:var(--font-vcf-display)] text-2xl font-semibold">
                  {value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/40">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="vcf-fade-up vcf-fade-up-delay">
          <div className="relative mb-8 hidden lg:block">
            <div className="vcf-logo-glow" aria-hidden />
            <div className="relative flex justify-center">
              <VcfLogo size="hero" href={undefined} priority />
            </div>
          </div>
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  return (
    <section id="why" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="The difference"
          title="Most options force a trade-off. We don't."
          description="Traditional agencies are slow and AI-averse. Generic AI tools are fast but scientifically illiterate. We encode domain expertise into tools we build and own."
          centered
        />

        <div className="grid gap-4 md:grid-cols-3">
          {VCF_DIFFERENTIATORS.map(({ id, variant, title, body }) => (
            <article
              key={id}
              className={
                variant === "us"
                  ? "vcf-card vcf-card-featured group"
                  : "vcf-card group"
              }
            >
              <div
                className={
                  variant === "us"
                    ? "mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20"
                    : "mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/35"
                }
              >
                {variant === "us" ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <XIcon className="h-5 w-5" />
                )}
              </div>
              <h3 className="font-[family-name:var(--font-vcf-display)] text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="What we do"
          title="Communications, end to end — regulatory-aware from word one."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {VCF_SERVICES.map(({ title, items }, index) => {
            const Icon = serviceIcons[index];
            return (
              <article key={title} className="vcf-card group">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl ring-1 ring-white/10"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(168,85,247,0.12) 100%)",
                    }}
                  >
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <span className="font-[family-name:var(--font-brand-mono)] text-xs text-white/25">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-vcf-display)] text-xl font-semibold text-white">
                  {title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-white/50"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full"
                        style={{ background: "var(--vcf-gradient)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section id="platform" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="The platform"
          title="We build and own every tool. No external platform dependency."
          description="Seven applications, twelve AI agents — purpose-built for pharma communications and the regulatory environment they operate in."
        />

        <div className="grid gap-3">
          {VCF_APPLICATIONS.map((app) => (
            <article
              key={app.num}
              className="vcf-glass group flex flex-col gap-4 rounded-2xl border border-white/8 p-5 transition hover:border-cyan-400/20 hover:bg-white/[0.04] sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex min-w-0 items-start gap-4">
                <span className="vcf-gradient-text font-[family-name:var(--font-brand-mono)] text-sm">
                  {app.num}
                </span>
                <div>
                  {"demoKey" in app ? (
                    <a
                      href={getPfizerDemoUrl("/reports/channels")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-vcf-display)] text-lg font-semibold text-white transition group-hover:text-cyan-200"
                    >
                      {app.name}
                    </a>
                  ) : (
                    <h3 className="font-[family-name:var(--font-vcf-display)] text-lg font-semibold text-white">
                      {app.name}
                    </h3>
                  )}
                  <p className="mt-1 font-[family-name:var(--font-brand-mono)] text-sm text-white/45">
                    {app.tech}
                  </p>
                </div>
              </div>
              <span
                className={`inline-flex w-fit shrink-0 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider ring-1 ${statusStyles[app.status] ?? "bg-white/8 text-white/50 ring-white/10"}`}
              >
                {app.status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemosSection() {
  return (
    <section id="demos" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Live demos"
          title="See the platform in action."
          description="A full Pfizer-branded demonstration — corporate social analytics, CEO profile tracking, and Wikipedia monitoring with live sample data."
        />

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {VCF_DEMO_CAPABILITIES.map(({ title, body }, index) => {
            const Icon = capabilityIcons[index];
            return (
              <article key={title} className="vcf-card">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/15">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="font-[family-name:var(--font-vcf-display)] text-base font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {VCF_DEMO_SHOWCASES.map((showcase) => (
            <article
              key={showcase.id}
              className={
                showcase.id === "corporate"
                  ? "vcf-card vcf-card-featured lg:col-span-2"
                  : "vcf-card"
              }
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ring-white/10"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,212,255,0.18) 0%, rgba(168,85,247,0.18) 100%)",
                    }}
                  >
                    {showcase.id === "corporate" && (
                      <Building2 className="h-5 w-5 text-cyan-200" />
                    )}
                    {showcase.id === "founder" && (
                      <User className="h-5 w-5 text-cyan-200" />
                    )}
                    {showcase.id === "wikipedia" && (
                      <Globe className="h-5 w-5 text-cyan-200" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-vcf-display)] text-xl font-semibold text-white">
                      {showcase.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/45">
                      {showcase.subtitle}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                      {showcase.body}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 flex-wrap gap-2 sm:flex-col sm:items-stretch">
                  <a
                    href={getPfizerDemoUrl(showcase.hrefPath)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vcf-btn vcf-btn-sm justify-center"
                  >
                    {showcase.cta}
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </a>
                  {"secondaryHrefPath" in showcase && showcase.secondaryCta && (
                    <a
                      href={getPfizerDemoUrl(showcase.secondaryHrefPath)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vcf-btn vcf-btn-sm vcf-btn-outline justify-center"
                    >
                      {showcase.secondaryCta}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/40">
          Demo environment — sample data for illustration only.{" "}
          <a
            href={getPfizerDemoUrl("/")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cyan-300 transition hover:text-purple-300"
          >
            Open full Pfizer demo →
          </a>
        </p>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Engagements"
          title="Monthly retainers, sized to your stage."
          description="Annual contract value is monthly × 12. 12-month initial term, monthly billing, 10% annual prepay discount."
          centered
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {VCF_PRICING_TIERS.map(({ tier, amount, fit, featured }) => (
            <article
              key={tier}
              className={
                featured
                  ? "vcf-card vcf-card-featured relative overflow-hidden"
                  : "vcf-card"
              }
            >
              {featured && <div className="vcf-divider-gradient absolute inset-x-0 top-0" />}
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/40">
                {tier}
              </p>
              <p className="mt-4 font-[family-name:var(--font-vcf-display)] text-3xl font-semibold tracking-tight text-white">
                {amount}
              </p>
              <p className="text-sm text-white/40">/ month</p>
              <p className="mt-5 border-t border-white/8 pt-5 text-sm leading-relaxed text-white/50">
                {fit}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {VCF_PROJECT_PRICING.map(({ label, amount }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition hover:border-purple-400/20 hover:bg-white/[0.04]"
            >
              <p className="text-sm font-medium text-white/85">{label}</p>
              <p className="mt-2 font-[family-name:var(--font-brand-mono)] text-sm text-cyan-300">
                {amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoundersSection() {
  return (
    <section className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Who you work with"
          title="Senior counsel, not a support queue."
          centered
        />

        <div className="grid gap-4 md:grid-cols-2">
          {VCF_FOUNDERS.map(({ role, name, bio }) => {
            const initials = name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2);

            return (
              <article key={name} className="vcf-card">
                <div className="mb-5 flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl font-[family-name:var(--font-vcf-display)] text-lg font-bold text-white ring-1 ring-white/10"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,212,255,0.25) 0%, rgba(168,85,247,0.25) 100%)",
                    }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-cyan-300/80">
                      {role}
                    </p>
                    <h3 className="mt-1 font-[family-name:var(--font-vcf-display)] text-2xl font-semibold text-white">
                      {name}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/50">{bio}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="vcf-contact-band relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center md:px-12 md:py-20">
          <div className="vcf-contact-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <VcfLogo size="footer" href={undefined} className="mx-auto" />
            <p className="vcf-pill mx-auto mt-6 mb-5">Let&apos;s talk</p>
            <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-vcf-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-[-0.03em] text-white">
              Tell us the problem.{" "}
              <span className="vcf-gradient-text">We&apos;ll design the solution.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/55">
              Agency-grade pharma communications, built in hours — and safe to
              hand to your reviewers.
            </p>
            <a
              href={`mailto:${VCF_CONTACT_EMAIL}`}
              className="vcf-btn vcf-btn-glow mt-8 inline-flex"
            >
              {VCF_CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="relative border-t border-white/8 px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <VcfLogo size="footer" />
        <p className="text-sm text-white/40">
          vibecodeflow.com · {VCF_CONTACT_EMAIL}
        </p>
        <p className="text-sm text-white/35">
          © {new Date().getFullYear()} VibeCodeFlow
        </p>
      </div>
    </footer>
  );
}

function SectionHead({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <p className="vcf-pill inline-flex">{eyebrow}</p>
      <h2 className="mt-5 font-[family-name:var(--font-vcf-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-white/50">
          {description}
        </p>
      )}
      <div className={`vcf-divider-gradient mt-8 ${centered ? "mx-auto w-32" : "w-24"}`} />
    </div>
  );
}
