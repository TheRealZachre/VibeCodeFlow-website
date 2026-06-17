import Image from "next/image";
import Link from "next/link";
import { VCF_BRAND } from "@/lib/vibecodeflow/brand";

const sizes = {
  nav: { height: 120, width: 120, className: "h-10 w-auto" },
  hero: { height: 512, width: 512, className: "h-auto w-full max-w-[240px] sm:max-w-[280px]" },
  footer: { height: 120, width: 120, className: "h-12 w-auto" },
} as const;

type VcfLogoSize = keyof typeof sizes;

interface VcfLogoProps {
  size?: VcfLogoSize;
  href?: string | null;
  className?: string;
  priority?: boolean;
}

export function VcfLogo({
  size = "nav",
  href = "/",
  className = "",
  priority = false,
}: VcfLogoProps) {
  const { height, width, className: sizeClass } = sizes[size];

  const image = (
    <Image
      src={VCF_BRAND.logo}
      alt={VCF_BRAND.logoAlt}
      width={width}
      height={height}
      priority={priority}
      className={`${sizeClass} ${className}`.trim()}
    />
  );

  if (href == null) return image;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 transition-opacity hover:opacity-90"
      aria-label={VCF_BRAND.logoAlt}
    >
      {image}
    </Link>
  );
}
