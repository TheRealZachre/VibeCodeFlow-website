const DEFAULT_DEMO_URL =
  "https://beone-digitaltest.zach-a56.workers.dev";

/** Base URL for the demonstration environment. */
export function getPfizerDemoUrl(path = ""): string {
  const base = (
    process.env.NEXT_PUBLIC_DEMO_URL ??
    process.env.NEXT_PUBLIC_PFIZER_DEMO_URL ??
    DEFAULT_DEMO_URL
  ).replace(/\/$/, "");

  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
