import Image from "next/image";
import { Captions, Volume2 } from "lucide-react";
import { VCF_CONTACT_EMAIL } from "@/lib/vibecodeflow/content";
import { VCF_BRAND } from "@/lib/vibecodeflow/brand";
import { YouTubeDemoEmbed } from "@/components/marketing/YouTubeDemoEmbed";

function VideoCardFooter() {
  return (
    <div className="flex flex-col items-center gap-3 border-t border-white/8 bg-white/[0.02] px-4 py-5 md:px-5">
      <Image
        src={VCF_BRAND.lockupHorizontalDark}
        alt={VCF_BRAND.logoAlt}
        width={598}
        height={120}
        className="h-9 w-auto opacity-95 sm:h-10"
      />
      <p className="text-center text-xs text-white/45 md:text-sm">
        <a
          href={`mailto:${VCF_CONTACT_EMAIL}`}
          className="text-cyan-300/90 transition hover:text-cyan-200"
        >
          {VCF_CONTACT_EMAIL}
        </a>
      </p>
    </div>
  );
}

function VideoPlaybackNote() {
  return (
    <div className="space-y-2 border-b border-white/8 bg-white/[0.03] px-4 py-3 md:px-5">
      <p className="text-xs leading-relaxed text-white/55 md:text-sm">
        <span className="font-medium text-white/75">Demonstration example:</span>{" "}
        This walkthrough uses Best Pharma Company to show the platform in action. The same
        analytics capabilities can be configured for any company.
      </p>
      <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-relaxed text-white/55 md:text-sm">
        <span className="font-medium text-white/75">Narrated walkthrough</span>
        <span className="hidden text-white/25 sm:inline" aria-hidden>
          ·
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Volume2 className="h-3.5 w-3.5 shrink-0 text-cyan-300/80" aria-hidden />
          Turn up your volume for narration
        </span>
        <span className="text-white/25" aria-hidden>
          ·
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Captions className="h-3.5 w-3.5 shrink-0 text-cyan-300/80" aria-hidden />
          Enable closed captions in the YouTube player if needed
        </span>
      </p>
    </div>
  );
}

export function HeroPreview() {
  return (
    <div className="vcf-hero-preview relative mx-auto w-full max-w-5xl">
      <div className="vcf-hero-preview-glow" aria-hidden />
      <div className="vcf-glass relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
        <div className="vcf-divider-gradient" />
        <div className="flex items-center border-b border-white/8 px-4 py-3 md:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <p className="ml-3 flex-1 text-xs font-medium text-white/45 md:text-sm">
            Analytics platform demo · Best Pharma Company example
          </p>
        </div>

        <VideoPlaybackNote />
        <YouTubeDemoEmbed />
        <VideoCardFooter />
      </div>

      <p className="mt-2 text-center text-sm text-white/45">
        Best Pharma Company is shown as a demonstration example. Press play for the full
        narrated walkthrough.
      </p>
    </div>
  );
}
