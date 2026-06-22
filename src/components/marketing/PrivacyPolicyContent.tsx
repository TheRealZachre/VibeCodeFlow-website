import Link from "next/link";
import {
  VCF_PRIVACY_LAST_UPDATED,
  VCF_PRIVACY_SECTIONS,
} from "@/lib/vibecodeflow/privacy-policy";
import { VCF_CONTACT_EMAIL } from "@/lib/vibecodeflow/content";

export function PrivacyPolicyContent() {
  return (
    <article className="mx-auto max-w-3xl">
      <p className="vcf-pill inline-flex">Legal</p>
      <h1 className="mt-4 font-[family-name:var(--font-vcf-display)] text-[clamp(2rem,4.5vw,3rem)] font-semibold tracking-[-0.03em] text-white">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-white/45">Last updated: {VCF_PRIVACY_LAST_UPDATED}</p>
      <p className="mt-6 text-base leading-relaxed text-white/55">
        This policy describes how Vibe.Code.Flow. handles information on{" "}
        <Link href="/" className="text-cyan-300/90 transition hover:text-cyan-200">
          vibecodeflow.com
        </Link>{" "}
        and in connection with our communications and analytics services.
      </p>

      <nav
        aria-label="Privacy policy sections"
        className="vcf-card mt-10 p-5 text-sm text-white/55"
      >
        <p className="font-medium text-white/75">On this page</p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5">
          {VCF_PRIVACY_SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-cyan-300/85 transition hover:text-cyan-200"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 space-y-12">
        {VCF_PRIVACY_SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <h2 className="font-[family-name:var(--font-vcf-display)] text-xl font-semibold text-white md:text-2xl">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-white/55">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc space-y-2 pl-5">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm text-white/40">
        Questions?{" "}
        <a
          href={`mailto:${VCF_CONTACT_EMAIL}`}
          className="text-cyan-300/85 transition hover:text-cyan-200"
        >
          {VCF_CONTACT_EMAIL}
        </a>
      </p>
    </article>
  );
}
