import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/marketing");
const outFile = path.join(outDir, "analytics-hero-screenshot.png");

const BASE_URL = "https://pfizer-digitaltest.zach-a56.workers.dev";
const EMAIL = "demo@vibecodeflow.com";
const PASSWORD = "PfizerDemo2026!";

async function main() {
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  await page.goto(`${BASE_URL}/login`, { waitUntil: "networkidle" });

  await page.fill('input[name="login"], input[type="text"]', EMAIL);
  await page.fill('input[name="password"], input[type="password"]', PASSWORD);
  await page.click('button[type="submit"]');

  await page.waitForURL((url) => !url.pathname.includes("/login"), {
    timeout: 30000,
  });

  await page.goto(`${BASE_URL}/reports/channels`, {
    waitUntil: "networkidle",
  });

  await page.waitForTimeout(2000);

  const main = page.locator("main").first();
  await main.waitFor({ state: "visible", timeout: 15000 });

  await main.screenshot({ path: outFile, type: "png" });

  await browser.close();
  console.log(`Saved screenshot to ${outFile}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
