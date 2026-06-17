import Image from "next/image";
import heroScreenshot from "@/assets/marketing/analytics-hero-screenshot.png";

export function HeroPreview() {
  return (
    <div className="vcf-hero-preview relative mx-auto w-full max-w-[520px] lg:mx-0">
      <div className="vcf-hero-preview-glow" aria-hidden />
      <div className="vcf-glass relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
        <div className="vcf-divider-gradient" />
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-300">
            Live demo
          </span>
        </div>

        <div className="relative aspect-[4/3] w-full bg-[#f4f6f9]">
          <Image
            src={heroScreenshot}
            alt="CEO social analytics — followers, posts, engagement, reach, and impressions across LinkedIn and X"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        </div>
      </div>
    </div>
  );
}
