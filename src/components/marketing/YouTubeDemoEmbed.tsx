"use client";

import { useEffect, useState } from "react";
import { VCF_HERO_DEMO_YOUTUBE_EMBED_URL } from "@/lib/vibecodeflow/content";

export function YouTubeDemoEmbed() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative aspect-video w-full bg-black">
      {mounted ? (
        <iframe
          src={VCF_HERO_DEMO_YOUTUBE_EMBED_URL}
          title="Best Pharma Company analytics platform demo"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : null}
    </div>
  );
}
