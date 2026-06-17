const DEFAULT_PFIZER_DEMO_URL = "https://pfizer.vibecodeflow.com";

/** Base URL for the Pfizer demonstration environment. */
export function getPfizerDemoUrl(path = ""): string {
  const base = (
    process.env.NEXT_PUBLIC_PFIZER_DEMO_URL ?? DEFAULT_PFIZER_DEMO_URL
  ).replace(/\/$/, "");

  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
