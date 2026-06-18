"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import Image from "next/image";
import { Captions, Maximize2, Play, Volume2, X } from "lucide-react";
import {
  VCF_CONTACT_EMAIL,
  VCF_HERO_DEMO_POSTER,
  VCF_HERO_DEMO_SUBTITLES,
  VCF_HERO_DEMO_VIDEO,
} from "@/lib/vibecodeflow/content";
import { VCF_BRAND } from "@/lib/vibecodeflow/brand";

function VideoLogoWatermark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute bottom-3 right-3 z-10 md:bottom-4 md:right-4 ${className}`}
      aria-hidden
    >
      <Image
        src={VCF_BRAND.lockupHorizontalDark}
        alt=""
        width={598}
        height={120}
        className="h-8 w-auto opacity-90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:h-9 md:h-10"
      />
    </div>
  );
}

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
        Contact Zach Randles-Friedman ·{" "}
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

function VideoEndOverlay({
  show,
  onReplay,
}: {
  show: boolean;
  onReplay: () => void;
}) {
  if (!show) return null;

  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[#0a0c12]/94 px-6 text-center backdrop-blur-sm">
      <Image
        src={VCF_BRAND.lockupStackedDark}
        alt={VCF_BRAND.logoAlt}
        width={512}
        height={512}
        className="h-24 w-auto sm:h-28 md:h-32"
      />
      <p className="font-[family-name:var(--font-vcf-display)] text-2xl font-semibold text-white md:text-3xl">
        Thank you
      </p>
      <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-base">
        Contact Zach Randles-Friedman at Vibe Code Flow
      </p>
      <a
        href={`mailto:${VCF_CONTACT_EMAIL}`}
        className="text-base font-medium text-cyan-300 transition hover:text-cyan-200 md:text-lg"
      >
        {VCF_CONTACT_EMAIL}
      </a>
      <button
        type="button"
        onClick={onReplay}
        className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
      >
        <Play className="h-4 w-4 fill-current" />
        Watch again
      </button>
    </div>
  );
}

function VideoPlaybackNote() {
  return (
    <div className="space-y-2 border-b border-white/8 bg-white/[0.03] px-4 py-3 md:px-5">
      <p className="text-xs leading-relaxed text-white/55 md:text-sm">
        <span className="font-medium text-white/75">Demonstration example:</span>{" "}
        This walkthrough uses Pfizer to show the platform in action. The same
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
          Or enable closed captions after you press play
        </span>
      </p>
    </div>
  );
}

function DemoVideo({
  className = "",
  videoRef,
  autoPlay = false,
  onEnded,
}: {
  className?: string;
  videoRef?: RefObject<HTMLVideoElement | null>;
  autoPlay?: boolean;
  onEnded?: () => void;
}) {
  return (
    <video
      ref={videoRef}
      className={className}
      controls={autoPlay}
      playsInline
      autoPlay={autoPlay}
      onEnded={onEnded}
      aria-label="Pfizer digital analytics platform walkthrough"
    >
      <source src={VCF_HERO_DEMO_VIDEO} type="video/mp4" />
      <track
        kind="subtitles"
        src={VCF_HERO_DEMO_SUBTITLES}
        srcLang="en"
        label="English"
        default
      />
    </video>
  );
}

export function HeroPreview() {
  const [open, setOpen] = useState(false);
  const [ended, setEnded] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const openLightbox = () => {
    setEnded(false);
    setOpen(true);
    requestAnimationFrame(() => {
      const video = modalVideoRef.current;
      if (!video) return;
      for (const track of video.textTracks) {
        track.mode = "showing";
      }
      video.play().catch(() => {});
    });
  };

  const closeLightbox = () => {
    modalVideoRef.current?.pause();
    setEnded(false);
    setOpen(false);
  };

  const replayVideo = () => {
    const video = modalVideoRef.current;
    if (!video) return;
    setEnded(false);
    video.currentTime = 0;
    video.play().catch(() => {});
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
              Analytics platform demo · Pfizer example
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/55 md:text-xs">
              <Maximize2 className="h-3.5 w-3.5" />
              Click to enlarge
            </span>
          </div>

          <VideoPlaybackNote />

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

          <VideoCardFooter />
        </div>

        <p className="mt-2 text-center text-sm text-white/45">
          Pfizer is shown as a demonstration example. Click the video to play the
          full narrated walkthrough with closed captions.
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
            <VideoPlaybackNote />
            <div className="relative">
              <DemoVideo
                videoRef={modalVideoRef}
                autoPlay
                onEnded={() => setEnded(true)}
                className="aspect-video max-h-[85vh] w-full bg-black object-contain"
              />
              {!ended && <VideoLogoWatermark className="md:bottom-5 md:right-5" />}
              <VideoEndOverlay show={ended} onReplay={replayVideo} />
            </div>
            <VideoCardFooter />
          </div>
        </div>
      )}
    </>
  );
}
