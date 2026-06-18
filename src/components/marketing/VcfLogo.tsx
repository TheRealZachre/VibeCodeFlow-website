import Image from "next/image";
import Link from "next/link";
import { VCF_BRAND } from "@/lib/vibecodeflow/brand";

const configs = {
  nav: {
    src: VCF_BRAND.lockupHorizontalDark,
    width: 598,
    height: 120,
    className: "h-9 w-auto",
  },
  header: {
    src: VCF_BRAND.lockupStackedDark,
    width: 512,
    height: 512,
    className: "h-11 w-auto max-w-[92px] object-contain object-left sm:max-w-[104px]",
  },
  hero: {
    src: VCF_BRAND.lockupStackedDark,
    width: 512,
    height: 512,
    className: "h-auto w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px]",
  },
  footer: {
    src: VCF_BRAND.lockupHorizontalDark,
    width: 598,
    height: 120,
    className: "h-10 w-auto",
  },
  mark: {
    src: VCF_BRAND.markGradient,
    width: 512,
    height: 300,
    className: "h-10 w-auto",
  },
} as const;

type VcfLogoSize = keyof typeof configs;

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
  const { src, width, height, className: sizeClass } = configs[size];

  const image = (
    <Image
      src={src}
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
