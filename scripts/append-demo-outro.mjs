import { access, mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { spawnSync } from "child_process";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const FFMPEG = path.join(ROOT, "node_modules/ffmpeg-static/ffmpeg");
const PFIZER_ROOT =
  process.env.PFIZER_DEMO_ROOT ??
  path.join(ROOT, "..", "..", "pfizer-digitaltest");

const INPUT_VIDEO = path.join(ROOT, "public/marketing/pfizer-analytics-demo.mp4");
const OUTPUT_VIDEO = INPUT_VIDEO;
const BACKUP_VIDEO = path.join(ROOT, "public/marketing/pfizer-analytics-demo.source.mp4");
const VTT_PATH = path.join(ROOT, "public/marketing/pfizer-analytics-demo.vtt");
const WORK_DIR = path.join(ROOT, ".demo-outro-work");

const OUTRO_NARRATION =
  "Thank you for watching. To learn more, contact Zach Randles-Friedman at Vibe Code Flow. Email zach@vibecodeflow.com.";
const OUTRO_HOLD_SEC = 1.5;

function run(cmd, args) {
  const result = spawnSync(cmd, args, { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(
      `${cmd} ${args.join(" ")} failed (${result.status}): ${result.stderr || result.stdout}`
    );
  }
  return result;
}

function getMediaDurationSec(filePath) {
  const result = spawnSync(FFMPEG, ["-hide_banner", "-i", filePath], {
    encoding: "utf8",
  });
  const output = `${result.stderr || ""}${result.stdout || ""}`;
  const match = output.match(/Duration: (\d{2}):(\d{2}):(\d{2}\.\d{2})/);
  if (!match) return 0;
  return (
    Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(parseFloat(match[3]))
  );
}

function msToVtt(ms) {
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1000);
  const msRem = Math.floor(ms % 1000);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(msRem).padStart(3, "0")}`;
}

function buildOutroCues(startMs, durationMs) {
  const parts = [
    "Thank you for watching.",
    "To learn more, contact Zach Randles-Friedman at Vibe Code Flow.",
    "Email zach@vibecodeflow.com",
  ];
  const weights = [0.28, 0.5, 0.22];
  const cues = [];
  let cursor = startMs;

  parts.forEach((text, index) => {
    const isLast = index === parts.length - 1;
    const partDuration = Math.round(durationMs * weights[index]);
    const end = isLast ? startMs + durationMs : cursor + partDuration;
    cues.push({ start: cursor, end, text });
    cursor = end;
  });

  return cues;
}

async function synthesizeOutroAudio(wavPath) {
  const voiceModule = await import(
    pathToFileURL(path.join(PFIZER_ROOT, "scripts/demo-voice.mjs")).href
  );
  return voiceModule.synthesizeSpeech(OUTRO_NARRATION, wavPath);
}

async function renderOutroCard(pngPath) {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
  });
  const htmlPath = path.join(__dirname, "demo-outro-card.html");
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
  await page.screenshot({ path: pngPath, type: "png" });
  await browser.close();
}

async function buildOutroClip({ pngPath, wavPath, outPath }) {
  const audioSec = getMediaDurationSec(wavPath);
  const durationSec = audioSec + OUTRO_HOLD_SEC;

  run(FFMPEG, [
    "-y",
    "-loop",
    "1",
    "-i",
    pngPath,
    "-i",
    wavPath,
    "-t",
    String(durationSec),
    "-vf",
    "scale=1920:1080:flags=lanczos,format=yuv420p",
    "-r",
    "25",
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    "23",
    "-pix_fmt",
    "yuv420p",
    "-c:a",
    "aac",
    "-b:a",
    "116k",
    "-ar",
    "48000",
    "-ac",
    "2",
    "-shortest",
    outPath,
  ]);

  return { audioSec, durationSec };
}

async function concatVideos(mainPath, outroPath, outputPath) {
  const listPath = path.join(WORK_DIR, "concat.txt");
  await writeFile(
    listPath,
    `file '${mainPath.replace(/'/g, "'\\''")}'\nfile '${outroPath.replace(/'/g, "'\\''")}'\n`,
    "utf8"
  );

  run(FFMPEG, [
    "-y",
    "-f",
    "concat",
    "-safe",
    "0",
    "-i",
    listPath,
    "-c",
    "copy",
    outputPath,
  ]);
}

async function appendOutroSubtitles(mainDurationMs, outroAudioMs) {
  const existing = await readFile(VTT_PATH, "utf8");
  const trimmed = existing.trimEnd();
  const lastCueMatch = [...trimmed.matchAll(/^(\d+)\n/gm)].at(-1);
  const nextIndex = lastCueMatch ? Number(lastCueMatch[1]) + 1 : 1;
  const startMs = Math.round(mainDurationMs);
  const cues = buildOutroCues(startMs, Math.round(outroAudioMs));

  let addition = "\n";
  cues.forEach((cue, offset) => {
    const index = nextIndex + offset;
    addition += `${index}\n${msToVtt(cue.start)} --> ${msToVtt(cue.end)}\n${cue.text}\n\n`;
  });

  await writeFile(VTT_PATH, `${trimmed}${addition}`, "utf8");
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(WORK_DIR, { recursive: true });

  const pngPath = path.join(WORK_DIR, "outro-card.png");
  const wavPath = path.join(WORK_DIR, "outro-narration.wav");
  const outroPath = path.join(WORK_DIR, "outro.mp4");
  const mergedPath = path.join(WORK_DIR, "merged.mp4");

  const hasBackup = await fileExists(BACKUP_VIDEO);
  const mainInput = hasBackup ? BACKUP_VIDEO : INPUT_VIDEO;
  if (!hasBackup) {
    await writeFile(BACKUP_VIDEO, await readFile(INPUT_VIDEO));
    console.log(`Backed up source video to ${BACKUP_VIDEO}`);
  }

  const mainDurationSec = getMediaDurationSec(mainInput);
  console.log(`Main video duration: ${mainDurationSec.toFixed(2)}s`);

  console.log("Synthesizing outro narration...");
  await synthesizeOutroAudio(wavPath);

  console.log("Rendering outro card...");
  await renderOutroCard(pngPath);

  console.log("Building outro clip...");
  const { audioSec, durationSec } = await buildOutroClip({
    pngPath,
    wavPath,
    outPath: outroPath,
  });
  console.log(`Outro clip: ${durationSec.toFixed(2)}s (${audioSec.toFixed(2)}s narration)`);

  console.log("Concatenating videos...");
  await concatVideos(mainInput, outroPath, mergedPath);
  await writeFile(OUTPUT_VIDEO, await readFile(mergedPath));

  console.log("Updating subtitles...");
  run(process.execPath, [path.join(__dirname, "generate-demo-subtitles.mjs")]);
  await appendOutroSubtitles(mainDurationSec * 1000, audioSec * 1000);

  const finalDuration = getMediaDurationSec(OUTPUT_VIDEO);
  console.log(`Wrote ${OUTPUT_VIDEO} (${finalDuration.toFixed(2)}s total)`);
  console.log(`Updated ${VTT_PATH} with outro cues`);
}

main().catch(async (error) => {
  console.error(error);
  process.exit(1);
});
