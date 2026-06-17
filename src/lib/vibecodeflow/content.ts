export const VCF_CONTACT_EMAIL = "hello@vibecodeflow.com";

export const VCF_NAV_LINKS = [
  { href: "#why", label: "Why us" },
  { href: "#services", label: "Services" },
  { href: "#platform", label: "Platform" },
  { href: "#demos", label: "Live demos" },
  { href: "#pricing", label: "Pricing" },
] as const;

export const VCF_DIFFERENTIATORS = [
  {
    id: "traditional",
    variant: "bad" as const,
    title: "Traditional agencies",
    body: "Slow, expensive, AI-averse. Weeks to a first draft, with senior time billed against every revision.",
  },
  {
    id: "generic-ai",
    variant: "bad" as const,
    title: "Generic AI tools",
    body: "Fast but scientifically illiterate. No MLR, no fair balance, no understanding of regulatory risk.",
  },
  {
    id: "vcf",
    variant: "us" as const,
    title: "VibeCodeFlow",
    body: "Domain expertise encoded into AI tools we own — reviewed by people who have spent their careers with MLR, FDA, and medical affairs.",
  },
] as const;

export const VCF_SERVICES = [
  {
    title: "Content & Media",
    items: [
      "Milestone and clinical press releases, to your house style",
      "Earned media strategy and PR pitching",
      "Advertorials and thought leadership",
      "Corporate announcements and boilerplate management",
    ],
  },
  {
    title: "Analytics & Intelligence",
    items: [
      "Narrative analytics: social performance mapped to story arc",
      "Competitive intelligence and pipeline surveillance",
      "Earned media monitoring: coverage, sentiment, share of voice",
      "Custom reporting and dashboards",
    ],
  },
  {
    title: "Digital & Search",
    items: [
      "SEO and disease-state content for HCP and patient audiences",
      "AI search visibility: ChatGPT Search, Perplexity, Google AI Overviews",
      "Executive thought leadership in each leader's real voice",
      "Multi-platform social calendars, compliance-checked",
    ],
  },
  {
    title: "High-Stakes Moments",
    items: [
      "Clinical trial communications: 48-hour readout package",
      "Crisis communications: pre-built response architecture",
      "Launch readiness strategy",
      "IR, investor narrative, and board communications",
    ],
  },
  {
    title: "Video & Media Production",
    items: [
      "AI video production suite: script to distribution",
      "YouTube SEO optimization",
    ],
  },
] as const;

export const VCF_APPLICATIONS = [
  {
    num: "01",
    name: "Analytics & Insights Dashboard",
    status: "Demo exists",
    tech: "Meta MCP + Claude Code",
    demoKey: "corporate" as const,
  },
  {
    num: "02",
    name: "C-Suite Content Engine",
    status: "Build second",
    tech: "Claude API + voice profiles",
  },
  {
    num: "03",
    name: "Website SEO Audit & Advisor",
    status: "Core differentiator",
    tech: "Firecrawl + Brave + Claude",
  },
  {
    num: "04",
    name: "AI Video Production Suite",
    status: "In build",
    tech: "ElevenLabs + Descript",
  },
  {
    num: "05",
    name: "YouTube SEO Optimizer",
    status: "App 04 bundle",
    tech: "YouTube Data API + Claude",
  },
  {
    num: "06",
    name: "Clinical Trial Comms Engine",
    status: "In development",
    tech: "Claude API + domain config",
  },
  {
    num: "07",
    name: "Crisis Comms Engine",
    status: "In development",
    tech: "Claude API + domain config",
  },
] as const;

export const VCF_PRICING_TIERS = [
  {
    tier: "Launchpad",
    amount: "$7.5K–12K",
    fit: "Pre-seed to Series A biotech, building a voice.",
    featured: false,
  },
  {
    tier: "Momentum",
    amount: "$15K–22K",
    fit: "Series B+ clinical, steady news flow.",
    featured: false,
  },
  {
    tier: "Catalyst",
    amount: "$25K–40K",
    fit: "Late-stage, approaching readout or launch.",
    featured: true,
  },
  {
    tier: "Commercial",
    amount: "$40K–65K+",
    fit: "Commercial specialty pharma, multi-brand.",
    featured: false,
  },
] as const;

export const VCF_PROJECT_PRICING = [
  { label: "Clinical readout package", amount: "$15K–35K" },
  { label: "Crisis activation", amount: "$25K–50K" },
  { label: "Launch readiness strategy", amount: "$75K–150K" },
  { label: "Congress package (ASCO/ASH/ESMO)", amount: "$5K–12K" },
  { label: "White-label, per seat", amount: "$5K / mo" },
] as const;

export const VCF_FOUNDERS = [
  {
    role: "Co-founder · Strategy & Intelligence",
    name: "Zach Randles-Friedman",
    bio: "Decades in pharma communications: narrative strategy, competitive intelligence, analytics, investor communications, KOL strategy, and executive positioning. The strategic and regulatory judgment behind every engagement — and the person clients call before a high-stakes moment.",
  },
  {
    role: "Co-founder · Creative & Technology",
    name: "Matthew Gelineau",
    bio: "About a decade across biotech, pharma, Harvard Medical School, and advertising — in content, video, digital strategy, and creative direction. Leads the technical build: Claude Code, MCP integrations, application development, and deployment.",
  },
] as const;

/** Capability cards from the Pfizer demo introduction page. */
export const VCF_DEMO_CAPABILITIES = [
  {
    title: "Channel-by-channel breakdown",
    body: "See exactly how LinkedIn, X, Instagram, Facebook, YouTube, and TikTok are performing — followers, reach, engagement rate, and CTR all in one place.",
  },
  {
    title: "Why posts land (and why they don't)",
    body: "Every post gets scored and explained. Green = working. Red = needs improvement. The analysis tells you which story beats to double down on and which to retire.",
  },
  {
    title: "Narrative arc tracking",
    body: "Posts are mapped over time by engagement score so you can see momentum — are you building a consistent story, or publishing in isolation?",
  },
] as const;

export const VCF_DEMO_SHOWCASES = [
  {
    id: "corporate",
    title: "Corporate Social Analytics",
    subtitle: "LinkedIn · X · Instagram · Facebook · YouTube · TikTok",
    body: "Full performance view across all Pfizer corporate social channels. See what content themes are driving engagement, which platforms are growing, and where to focus next quarter.",
    hrefPath: "/reports/channels",
    cta: "View Corporate Demo",
    variant: "primary" as const,
  },
  {
    id: "founder",
    title: "Founder / CEO Social Analytics",
    subtitle: "Albert Bourla · LinkedIn · X",
    body: "Tracks the personal social media presence of Albert Bourla, Chairman & CEO of Pfizer. Same scoring engine as corporate — engagement rates, story beats, narrative arc, and weekly / monthly / quarterly reports.",
    hrefPath: "/founder/reports/channels",
    cta: "View Founder / CEO Demo",
    variant: "secondary" as const,
  },
  {
    id: "wikipedia",
    title: "Wikipedia Analytics",
    subtitle: "Corporate page · Founder / CEO page",
    body: "Monitors Wikipedia health and visibility — article quality grades, open maintenance flags, pageview trends, and AI-powered editorial review with specific recommendations. Covers both the corporate article and the CEO article.",
    hrefPath: "/wikipedia/corporate",
    cta: "Corporate Wikipedia",
    variant: "primary" as const,
    secondaryHrefPath: "/wikipedia/founder-ceo",
    secondaryCta: "Founder / CEO Wikipedia",
  },
] as const;
