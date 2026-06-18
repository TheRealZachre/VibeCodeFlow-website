"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Maximize2, Play, X } from "lucide-react";
import { VCF_HERO_DEMO_POSTER, VCF_HERO_DEMO_VIDEO } from "@/lib/vibecodeflow/content";
import { VCF_BRAND } from "@/lib/vibecodeflow/brand";

function VideoLogoWatermark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute bottom-3 right-3 z-10 md:bottom-4 md:right-4 ${className}`}
      aria-hidden
    >
      <Image
        src={VCF_BRAND.lockupStackedDark}
        alt=""
        width={512}
        height={512}
        className="h-10 w-auto opacity-90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:h-12 md:h-14"
      />
    </div>
  );
}

export function HeroPreview() {
  const [open, setOpen] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const openLightbox = () => {
    setOpen(true);
    requestAnimationFrame(() => {
      modalVideoRef.current?.play().catch(() => {});
    });
  };

  const closeLightbox = () => {
    modalVideoRef.current?.pause();
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
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
              Pfizer analytics platform demo
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/55 md:text-xs">
              <Maximize2 className="h-3.5 w-3.5" />
              Click to enlarge
            </span>
          </div>

          <button
            type="button"
            onClick={openLightbox}
            className="group relative block w-full cursor-pointer bg-[#0d1421] text-left"
            aria-label="Play and enlarge Pfizer analytics platform demo video"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={VCF_HERO_DEMO_POSTER}
                alt="Pfizer corporate social analytics dashboard preview"
                fill
                priority
                className="object-cover object-top transition duration-300 group-hover:scale-[1.01]"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/20 transition group-hover:from-black/55" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white shadow-lg backdrop-blur-sm transition group-hover:scale-105 group-hover:bg-white/20 md:h-20 md:w-20">
                  <Play className="ml-1 h-7 w-7 fill-current md:h-8 md:w-8" />
                </div>
              </div>
              <VideoLogoWatermark />
            </div>
          </button>
        </div>

        <p className="mt-2 text-center text-sm text-white/45">
          Click the video to enlarge it and play the full walkthrough with narration.
        </p>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged demo video"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 md:right-8 md:top-8"
            aria-label="Close enlarged video"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative">
              <video
                ref={modalVideoRef}
                className="aspect-video max-h-[85vh] w-full bg-black object-contain"
                controls
                playsInline
                aria-label="Enlarged Pfizer digital analytics platform walkthrough"
              >
                <source src={VCF_HERO_DEMO_VIDEO} type="video/mp4" />
              </video>
              <VideoLogoWatermark className="md:bottom-5 md:right-5" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
