import {
  ArrowRight,
  BarChart2,
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
        <DifferenceSection />
        <PlatformSection />
        <CapabilitiesSection />
        <PricingContactSection />
        <FoundersSection />
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

          <a href="#contact" className="vcf-btn hidden sm:inline-flex">
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
        <div className="vcf-fade-up flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-8 md:gap-10">
          <div className="relative shrink-0 sm:pt-1">
            <div className="vcf-logo-glow" aria-hidden />
            <VcfLogo size="hero" href={undefined} priority />
          </div>

          <div className="min-w-0 max-w-3xl">
            <div className="vcf-pill mb-5 inline-flex items-center gap-2">
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
          </div>
        </div>

        <div className="vcf-fade-up vcf-fade-up-delay mt-8 md:mt-9">
          <HeroPreview />
        </div>

        <div className="vcf-fade-up mt-4">
          <a href="#contact" className="vcf-btn vcf-btn-glow group inline-flex">
            Start a conversation
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  return (
    <section id="why" className="relative px-5 py-12 md:px-8 md:py-14">
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

function PlatformSection() {
  return (
    <section id="platform" className="relative px-5 pb-12 pt-8 md:px-8 md:pb-14 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Hosted applications"
          title="Built by VibeCodeFlow. Hosted by VibeCodeFlow. Yours to use."
          description="Purpose-built analytics applications for pharma communications — hosted and maintained by us so your team gets a live, always-on intelligence layer with no infrastructure overhead."
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
          description="Corporate social analytics, CEO profile tracking, and Wikipedia monitoring — purpose-built for pharma communications teams."
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
    <section id="pricing" className="relative px-5 pb-12 pt-8 md:px-8 md:pb-14 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Engagements"
          title="Pricing tailored to your stage and scope."
          description="We structure engagements as monthly retainers or project-based — sized to your pipeline stage, communications volume, and the applications you need. No off-the-shelf tiers."
          centered
        />

        <div className="vcf-contact-band relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-14 text-center md:px-12 md:py-16">
          <div className="vcf-contact-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-400/20">
              <Mail className="h-6 w-6 text-cyan-300" />
            </div>
            <h3 className="font-[family-name:var(--font-vcf-display)] text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-white">
              Contact us for pricing details
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/55">
              Tell us what you&apos;re working on and we&apos;ll put together a proposal. Hosted applications with VibeCodeFlow — built to fit your team.
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

function FoundersSection() {
  return (
    <section className="relative px-5 py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Who you work with"
          title="Senior counsel, not a support queue."
          centered
        />

        <div className="mx-auto max-w-2xl">
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
    <section id="contact" className="relative px-5 py-12 md:px-8 md:py-14">
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
