"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { VCF_NAV_LINKS } from "@/lib/vibecodeflow/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 md:hidden"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-[calc(100%+12px)] z-50 rounded-2xl border border-white/10 bg-[rgba(8,12,18,0.96)] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {VCF_NAV_LINKS.map(({ href, label, ...link }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                {...("external" in link && link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white${
                  "spacedBefore" in link && link.spacedBefore ? " mt-4" : ""
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="https://calendly.com/vibecodeflow"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="vcf-btn mt-2 justify-center"
            >
              Start a conversation
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
