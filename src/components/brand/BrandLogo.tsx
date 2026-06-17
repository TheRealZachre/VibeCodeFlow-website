import Image from "next/image";
import { BRAND_ASSETS } from "@/lib/brand";
import { CLIENT_NAME, PLATFORM_NAME, PLATFORM_TAGLINE } from "@/lib/company";

interface BrandLogoProps {
  variant?: "sidebar" | "compact" | "full" | "analytics-header";
  showTagline?: boolean;
}

export function BrandLogo({
  variant = "sidebar",
  showTagline = true,
}: BrandLogoProps) {
  if (variant === "analytics-header") {
    return (
      <div className="min-w-0">
        <div className="flex justify-center rounded-lg bg-white px-3 py-2.5 shadow-sm">
          <Image
            src={BRAND_ASSETS.clientBeOneLogo}
            alt={CLIENT_NAME}
            width={200}
            height={56}
            className="h-10 w-auto max-w-full object-contain"
            priority
          />
        </div>
        <div className="mt-4">
          <Image
            src={BRAND_ASSETS.wordmarkWhite}
            alt={PLATFORM_NAME}
            width={220}
            height={36}
            className="h-7 w-auto max-w-[11.5rem]"
            priority
          />
        </div>
        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-muted">
          Analytics · {PLATFORM_TAGLINE}
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <Image
        src={BRAND_ASSETS.iconDark}
        alt={PLATFORM_NAME}
        width={36}
        height={36}
        className="h-9 w-9 shrink-0"
        priority
      />
    );
  }

  if (variant === "full") {
    return (
      <Image
        src={BRAND_ASSETS.logoPrimarySpectrumPng}
        alt={PLATFORM_NAME}
        width={640}
        height={160}
        className="h-auto w-full max-w-xl"
        priority
      />
    );
  }

  return (
    <div className="min-w-0">
      <Image
        src={BRAND_ASSETS.wordmarkWhite}
        alt={PLATFORM_NAME}
        width={220}
        height={36}
        className="h-7 w-auto max-w-[11.5rem]"
        priority
      />
      {showTagline && (
        <p className="mt-1.5 text-[11px] font-medium tracking-wide text-brand-muted">
          {PLATFORM_TAGLINE}
        </p>
      )}
    </div>
  );
}
