import React from "react";
import {
  ArrowRight,
  BarChart2,
  Download,
  Building2,
  Check,
  Globe,
  Mail,
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
  VCF_DIFFERENTIATORS,
  VCF_FOUNDERS,
  VCF_NAV_LINKS,
  VCF_PLATFORM_CAPABILITIES,
  VCF_PLATFORM_OVERVIEW_URL,
  VCF_PLATFORM_SHOWCASES,
} from "@/lib/vibecodeflow/content";

const capabilityIcons = [BarChart2, Zap, Users] as const;

const appIcons = [Building2, User, Globe] as const;

export function MarketingSite() {
  return (
    <div className="vcf-site relative min-h-screen overflow-x-hidden bg-[var(--vcf-bg)] text-[var(--vcf-text)]">
      <div className="vcf-mesh pointer-events-none fixed inset-0" aria-hidden />
      <div className="vcf-grid pointer-events-none fixed inset-0 opacity-[0.35]" aria-hidden />

      <SiteHeader />
      <main className="relative">
        <HeroSection />
        <StopFlyingBlindSection />
        <HowItWorksSection />
        <DifferenceSection />
        <PlatformSection />
        <CapabilitiesSection />
        <ResultsSection />
        <PricingContactSection />
        <FoundersSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

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

          <a href="https://calendly.com/vibecodeflow" target="_blank" rel="noopener noreferrer" className="vcf-btn hidden sm:inline-flex">
            Start a conversation
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative px-5 pb-10 pt-4 md:px-8 md:pb-12 md:pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="vcf-fade-up text-center">
          <div className="vcf-pill mb-5 inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Pharma/biotech communications · AI-first
          </div>

          <h1 className="font-[family-name:var(--font-vcf-display)] text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
            An AI-First{" "}
              <span className="vcf-gradient-text">Agency.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl">
            Senior pharma and biotech communications expertise.
            <br />
            Agency-grade work in a fraction of the time. Insights automated in real-time. Customized to you, your team, your business.
            <br />
            We listen to your problems, then design and build solutions.
          </p>
        </div>

        <div className="vcf-fade-up vcf-fade-up-delay mt-5 md:mt-6">
          <HeroPreview />
        </div>

        <div className="vcf-fade-up mt-4 flex flex-wrap items-center justify-center gap-3">
          <a href="https://calendly.com/vibecodeflow" target="_blank" rel="noopener noreferrer" className="vcf-btn vcf-btn-glow group inline-flex">
            Start a conversation
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a href={VCF_PLATFORM_OVERVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white">
            <Download className="h-4 w-4" />
            Download one-pager
          </a>
        </div>
      </div>
    </section>
  );
}

function StopFlyingBlindSection() {
  return (
    <section className="relative px-5 pb-2 pt-1 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="vcf-contact-band relative overflow-hidden rounded-2xl border border-white/10 px-8 py-5 text-center md:px-12 md:py-6">
          <div className="vcf-contact-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <h2 className="font-[family-name:var(--font-vcf-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-[-0.03em] text-white">
              Stop flying <span className="vcf-gradient-text">blind.</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-lg text-white/60">
              Your social budget deserves more than guesswork.
            </p>
            <p className="mt-2 font-[family-name:var(--font-vcf-display)] text-base font-semibold tracking-wide text-white/80">
              Weekly.{" "}
              <span className="text-cyan-300">Monthly.</span>{" "}
              <span className="vcf-gradient-text">Quarterly.</span>{" "}
              Always actionable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Tell us your goals",
      body: "We start with a conversation — your channels, your audience, your reporting pain points. No generic onboarding forms.",
    },
    {
      num: "02",
      title: "We configure your platform",
      body: "Your analytics layer is set up, connected, and calibrated to your brand voice and content strategy. Live in days, not months.",
    },
    {
      num: "03",
      title: "Insights delivered, always actionable",
      body: "Weekly, monthly, and quarterly reports land with specific direction on what to post, what to cut, and where to focus next.",
    },
  ];

  return (
    <section className="relative px-5 py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="How it works" title="Up and running in days. Reporting from day one." centered />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(({ num, title, body }) => (
            <article key={num} className="vcf-card relative">
              <div className="mb-4 font-[family-name:var(--font-vcf-display)] text-4xl font-bold leading-none tracking-[-0.04em] text-white/8">
                {num}
              </div>
              <h3 className="font-[family-name:var(--font-vcf-display)] text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  const stats = [
    { value: "6+", label: "Platforms tracked", sub: "LinkedIn, X, Instagram, Facebook, YouTube, TikTok" },
    { value: "3×", label: "Reporting cadences", sub: "Weekly, monthly, and quarterly — always ready" },
    { value: "Days", label: "Time to live", sub: "Not months. Your platform is configured fast." },
    { value: "0", label: "Spreadsheets needed", sub: "Everything delivered in one place, ready to share" },
  ];

  return (
    <section className="relative px-5 py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="vcf-card text-center">
              <p className="font-[family-name:var(--font-vcf-display)] text-4xl font-bold tracking-[-0.03em] vcf-gradient-text">
                {value}
              </p>
              <p className="mt-2 font-semibold text-white">{label}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/45">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "Is my data safe?",
    a: "Yes. Your social data is accessed through official platform APIs and never shared with third parties. We follow data handling best practices aligned with enterprise security standards.",
  },
  {
    q: "How long does setup take?",
    a: "Most clients are live within a few days of our kickoff call. There's no heavy IT lift on your end — we handle the configuration.",
  },
  {
    q: "Which platforms do you support?",
    a: "LinkedIn, X (Twitter), Instagram, Facebook, YouTube, and TikTok for social analytics. We also cover Wikipedia for corporate and executive article monitoring.",
  },
  {
    q: "How is this different from tools like Sprinklr or Brandwatch?",
    a: "Those tools give you data. We give you direction. Every report includes specific, post-level recommendations on what to improve — written by people who understand pharma/biotech communications, not generic AI. And at a fraction of the cost.",
  },
  {
    q: "Do you work with biotech companies, not just large pharma?",
    a: "Absolutely. We work across the spectrum — from early-stage biotechs building a communications function to established pharma teams looking to modernize their analytics.",
  },
];

function FaqSection() {
  return (
    <section className="relative px-5 py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="FAQ" title="Common questions, straight answers." centered />
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_ITEMS.map(({ q, a }) => (
            <div key={q} className="vcf-card">
              <h3 className="font-[family-name:var(--font-vcf-display)] text-base font-semibold text-white">
                {q}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  const problems = VCF_DIFFERENTIATORS.filter((d) => d.variant !== "us");
  const us = VCF_DIFFERENTIATORS.find((d) => d.variant === "us");

  const rows = [
    { label: "Speed", bad: "Weeks to a first draft", good: "Hours, not weeks" },
    { label: "Domain knowledge", bad: "Scientifically illiterate", good: "Tells you exactly what content resonates — and why" },
    { label: "AI", bad: "AI-averse or AI-only", good: "Domain expertise encoded into AI we own" },
    { label: "Cost", bad: "Enterprise rates, generic output", good: "A fraction of the cost, built for you" },
    { label: "Direction", bad: "Data without answers", good: "Post-level recommendations every report" },
  ];

  return (
    <section id="why" className="relative px-5 py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="The difference"
          title="Most options force a trade-off. We don't."
          centered
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: The old way */}
          <div className="space-y-3">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/30">The old way</p>
            {problems.map(({ id, title, body }) => (
              <div key={id} className="flex gap-4 rounded-2xl border border-white/6 bg-white/[0.025] px-5 py-4">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-500/10 ring-1 ring-red-500/20">
                  <XIcon className="h-3.5 w-3.5 text-red-400/70" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-vcf-display)] text-sm font-semibold text-white/60">{title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/35">{body}</p>
                </div>
              </div>
            ))}

            {/* Comparison table */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
              {/* Header */}
              <div className="grid grid-cols-[1fr_1fr_1.2fr] border-b border-white/8">
                <div className="px-5 py-4" />
                <div className="border-l border-white/8 px-5 py-4 text-center">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/30">Others</span>
                </div>
                <div className="relative border-l border-cyan-400/20 bg-gradient-to-b from-cyan-400/10 to-purple-500/5 px-5 py-4 text-center">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] vcf-gradient-text">Vibe.Code.Flow.</span>
                </div>
              </div>
              {/* Rows */}
              {rows.map(({ label, bad, good }, i) => (
                <div key={label} className={`grid grid-cols-[1fr_1fr_1.2fr] ${i < rows.length - 1 ? "border-b border-white/6" : ""}`}>
                  <div className="flex items-center px-5 py-4">
                    <span className="font-[family-name:var(--font-vcf-display)] text-sm font-semibold text-white/60">{label}</span>
                  </div>
                  <div className="flex items-center justify-center border-l border-white/6 px-5 py-4">
                    <span className="text-sm text-white/30">{bad}</span>
                  </div>
                  <div className="flex items-center justify-center border-l border-cyan-400/15 bg-gradient-to-r from-cyan-400/5 to-transparent px-5 py-4">
                    <span className="text-center text-sm font-semibold text-cyan-300">{good}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Us */}
          {us && (
            <div className="vcf-card vcf-card-featured flex flex-col justify-between">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                  <Check className="h-3.5 w-3.5" />
                  {us.title}
                </div>
                <p className="text-sm leading-relaxed text-white/60">{us.body}</p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Senior pharma/biotech communications expertise on every engagement",
                    "AI tools we build, own, and calibrate to your brand",
                    "Every report tells you what to do next — not just what happened",
                    "Live in days. Reporting from day one.",
                    "No enterprise pricing. No off-the-shelf tiers.",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://calendly.com/vibecodeflow"
                target="_blank"
                rel="noopener noreferrer"
                className="vcf-btn vcf-btn-glow group mt-8 inline-flex w-full justify-center"
              >
                See it for yourself
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section id="platform" className="relative px-5 pb-12 pt-8 md:px-8 md:pb-14 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Hosted applications"
          title={<>Built, hosted, and maintained by <span className="vcf-gradient-text">Vibe.Code.Flow.</span> Yours to use.</>}
          description="Purpose-built analytics applications for pharma/biotech communications — hosted and maintained by us so your team gets a live, always-on intelligence layer with no infrastructure overhead."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {VCF_APPLICATIONS.map((app, index) => {
            const Icon = appIcons[index];
            return (
              <article
                key={app.num}
                className="vcf-card vcf-card-featured group flex flex-col"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-1 ring-cyan-400/20"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,212,255,0.18) 0%, rgba(168,85,247,0.18) 100%)",
                    }}
                  >
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-vcf-display)] text-lg font-semibold text-white">
                  {app.name}
                </h3>
                <p className="mt-1 font-[family-name:var(--font-brand-mono)] text-xs text-white/40">
                  {app.tech}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
                  {app.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Coming soon notice */}
        <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 ring-1 ring-purple-400/20">
            <Sparkles className="h-4 w-4 text-purple-300" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white/80">New tools coming soon</p>
            <p className="mt-0.5 text-sm text-white/45">
              More hosted applications are in development — C-Suite content engines, website SEO advisors, video production suites, and more.{" "}
              <a
                href={`mailto:${VCF_CONTACT_EMAIL}`}
                className="font-medium text-cyan-300 transition hover:text-purple-300"
              >
                Reach out to learn what&apos;s next.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative px-5 pb-12 pt-8 md:px-8 md:pb-14 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Platform capabilities"
          title="What the analytics layer delivers."
          description="Corporate social analytics, CEO profile tracking, and Wikipedia monitoring — purpose-built for pharma/biotech communications teams."
        />

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {VCF_PLATFORM_CAPABILITIES.map(({ title, body }, index) => {
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
          {VCF_PLATFORM_SHOWCASES.map((showcase) => (
            <article
              key={showcase.id}
              className={
                showcase.id === "corporate"
                  ? "vcf-card vcf-card-featured lg:col-span-2"
                  : "vcf-card"
              }
            >
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingContactSection() {
  return (
    <section id="pricing" className="relative px-5 pb-6 pt-4 md:px-8 md:pb-8 md:pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="vcf-contact-band relative overflow-hidden rounded-2xl border border-white/10 px-6 py-6 text-center md:px-10 md:py-7">
          <div className="vcf-contact-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:text-left">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300/80">Engagements</p>
              <h3 className="mt-1 font-[family-name:var(--font-vcf-display)] text-xl font-semibold text-white">
                A fraction of the cost of other social analytics tools — and built for you.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Generic social listening platforms charge enterprise rates for dashboards that aren't built for pharma/biotech — and tell you <em>what</em> happened, not <em>what to do next</em>. We deliver post-level direction on how to improve your content, customized to your brand, your channels, and your communications goals. Monthly retainers or project-based — no off-the-shelf tiers.
              </p>
            </div>
            <a
              href={`mailto:${VCF_CONTACT_EMAIL}`}
              className="vcf-btn vcf-btn-glow shrink-0 inline-flex"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FoundersSection() {
  const credentials = [
    "Narrative strategy & competitive intelligence",
    "Investor communications & KOL strategy",
    "Executive positioning & crisis communications",
    "MLR, FDA, and medical affairs experience",
  ];

  return (
    <section className="relative px-5 py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Who you work with"
          title="Senior counsel, not a support queue."
          centered
        />

        <div className="mx-auto max-w-2xl">
          {VCF_FOUNDERS.map(({ role, name, bio }) => (
            <article key={name} className="vcf-card">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300/80">
                {role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{bio}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {credentials.map((c) => (
                  <div key={c} className="flex items-start gap-2 text-xs text-white/45">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                    {c}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative px-5 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="vcf-contact-band relative overflow-hidden rounded-2xl border border-white/10 px-6 py-8 text-center md:px-12 md:py-10">
          <div className="vcf-contact-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <p className="vcf-pill mx-auto mb-3">Let&apos;s talk</p>
            <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-vcf-display)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-[-0.03em] text-white">
              Tell us the problem.{" "}
              <span className="vcf-gradient-text">We&apos;ll design the solution.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/55">
              AI-powered intelligence for smarter social decisions.
            </p>
            <a
              href="https://calendly.com/vibecodeflow"
              target="_blank"
              rel="noopener noreferrer"
              className="vcf-btn vcf-btn-glow mt-5 inline-flex"
            >
              Start a conversation
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
          © {new Date().getFullYear()} Vibe.Code.Flow.
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
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`mb-8 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <p className="vcf-pill inline-flex">{eyebrow}</p>
      <h2 className="mt-4 font-[family-name:var(--font-vcf-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-lg leading-relaxed text-white/50">
          {description}
        </p>
      )}
      <div className={`vcf-divider-gradient mt-6 ${centered ? "mx-auto w-32" : "w-24"}`} />
    </div>
  );
}
