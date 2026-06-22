import { VCF_CONTACT_EMAIL } from "@/lib/vibecodeflow/content";

export const VCF_PRIVACY_LAST_UPDATED = "June 22, 2026";

export interface PrivacySection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export const VCF_PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      `Vibe.Code.Flow. ("VibeCodeFlow," "we," "us," or "our") operates vibecodeflow.com and provides pharma and biotech communications services, including hosted analytics applications for corporate social channels, executive profiles, and Wikipedia monitoring.`,
      "This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, contact us, or use services we provide to clients. By using our website or engaging our services, you agree to the practices described here.",
      "This policy is intended for a general business audience. It is not legal advice. If you need guidance for your organization, consult your counsel.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: ["We may collect the following categories of information:"],
    bullets: [
      "Contact information you provide — such as your name, email address, company name, job title, and message content when you email us, book a meeting, or submit an inquiry.",
      "Website usage data — such as pages visited, referring URLs, browser type, device type, and approximate location derived from IP address, collected through standard server logs and analytics tools.",
      "Client and service data — when you engage us, we may process social media analytics, content, account identifiers, and related business information needed to configure and operate your analytics platform. The scope depends on your engagement and applicable agreements.",
      "Authentication data — if you access a client dashboard or admin console, we may process account credentials, session tokens, and profile information associated with your login.",
    ],
  },
  {
    id: "how-we-use",
    title: "How we use information",
    paragraphs: ["We use information for purposes including:"],
    bullets: [
      "Responding to inquiries and scheduling conversations.",
      "Providing, operating, maintaining, and improving our website and services.",
      "Configuring analytics platforms, generating reports, and delivering insights under client agreements.",
      "Securing our systems, detecting abuse, and troubleshooting technical issues.",
      "Complying with law, enforcing our terms, and protecting our rights and those of our clients.",
      "Sending service-related communications. We do not sell your personal information for third-party marketing.",
    ],
  },
  {
    id: "sharing",
    title: "How we share information",
    paragraphs: [
      "We do not sell personal information. We may share information with:",
    ],
    bullets: [
      "Service providers that help us host infrastructure, send email, process scheduling, provide AI or analytics capabilities, or otherwise support our operations — under contractual obligations to protect data.",
      "Social and content platforms when authorized by a client to retrieve or analyze data through official APIs or integrations.",
      "Professional advisers or authorities when required by law, regulation, legal process, or to protect rights, safety, and security.",
      "A successor entity in connection with a merger, acquisition, or asset sale, subject to this policy or a successor notice.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    paragraphs: [
      "Our website may use cookies, local storage, and similar technologies to keep the site functioning, remember preferences, and understand how visitors use our pages.",
      "Embedded content — such as YouTube videos or scheduling tools — may set their own cookies or collect usage data under the third party's privacy policy.",
      "You can control cookies through your browser settings. Disabling cookies may affect some site features.",
    ],
  },
  {
    id: "retention",
    title: "Data retention",
    paragraphs: [
      "We retain information for as long as needed to fulfill the purposes described in this policy, provide services under client agreements, comply with legal obligations, resolve disputes, and enforce agreements.",
      "Retention periods for client analytics data are defined by the applicable service agreement and client instructions.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We use administrative, technical, and organizational measures designed to protect information against unauthorized access, loss, misuse, or alteration. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "your-rights",
    title: "Your choices and rights",
    paragraphs: [
      "Depending on where you live, you may have rights to access, correct, delete, restrict, or object to certain processing of your personal information, or to request portability.",
      `To make a request or ask questions about your information, contact us at ${VCF_CONTACT_EMAIL}. We may need to verify your identity before responding.`,
    ],
  },
  {
    id: "children",
    title: "Children's privacy",
    paragraphs: [
      "Our website and services are directed to business professionals and are not intended for children under 16. We do not knowingly collect personal information from children.",
    ],
  },
  {
    id: "international",
    title: "International visitors",
    paragraphs: [
      "If you access our website or services from outside the United States, your information may be processed in the United States or other countries where we or our service providers operate. Those locations may have different data protection laws than your home jurisdiction.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the \"Last updated\" date at the top of this page. Material changes may also be communicated through the website or by other appropriate means.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    paragraphs: [
      `If you have questions about this Privacy Policy or our privacy practices, contact us at ${VCF_CONTACT_EMAIL}.`,
    ],
  },
];
