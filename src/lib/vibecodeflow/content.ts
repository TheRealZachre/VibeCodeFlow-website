export const VCF_CONTACT_EMAIL = "zach@vibecodeflow.com";

export const VCF_NAV_LINKS = [
  { href: "#why", label: "Why us" },
  { href: "#services", label: "Services" },
  { href: "#platform", label: "Platform" },
  { href: "#demos", label: "Live demos" },
  { href: "#contact", label: "Contact" },
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

/** The three live hosted applications. */
export const VCF_APPLICATIONS = [
  {
    num: "01",
    name: "Corporate Social Analytics",
    status: "Live" as const,
    tech: "Multi-platform · Meta MCP · Claude",
    demoKey: "corporate" as const,
    description:
      "Full performance view across all corporate social channels — LinkedIn, X, Instagram, Facebook, YouTube, and TikTok — with narrative scoring and quarterly reporting.",
  },
  {
    num: "02",
    name: "CEO / Founder Social Analytics",
    status: "Live" as const,
    tech: "LinkedIn · X · Claude",
    demoKey: "founder" as const,
    description:
      "Tracks the personal social presence of your CEO or founder — same scoring engine as corporate, with executive-level narrative arc and voice analysis.",
  },
  {
    num: "03",
    name: "Wikipedia Analytics",
    status: "Live" as const,
    tech: "Wikipedia API · Claude",
    demoKey: "wikipedia" as const,
    description:
      "Monitors article health and visibility — quality grades, open maintenance flags, pageview trends, and AI editorial recommendations for both corporate and CEO articles.",
  },
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
    title: "CEO / Founder Social Analytics",
    subtitle: "Albert Bourla · LinkedIn · X",
    body: "Tracks the personal social media presence of Albert Bourla, Chairman & CEO of Pfizer. Same scoring engine as corporate — engagement rates, story beats, narrative arc, and weekly / monthly / quarterly reports.",
    hrefPath: "/founder/reports/channels",
    cta: "View CEO / Founder Demo",
    variant: "secondary" as const,
  },
  {
    id: "wikipedia",
    title: "Wikipedia Analytics",
    subtitle: "Corporate page · CEO / Founder page",
    body: "Monitors Wikipedia health and visibility — article quality grades, open maintenance flags, pageview trends, and AI-powered editorial review with specific recommendations. Covers both the corporate article and the CEO article.",
    hrefPath: "/wikipedia/corporate",
    cta: "Corporate Wikipedia",
    variant: "primary" as const,
    secondaryHrefPath: "/wikipedia/founder-ceo",
    secondaryCta: "CEO / Founder Wikipedia",
  },
] as const;
