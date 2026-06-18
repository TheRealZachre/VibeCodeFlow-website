import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const TIMINGS_PATH =
  process.env.DEMO_SEGMENT_TIMINGS ??
  path.join(ROOT, "data/pfizer-demo-segment-timings.json");
const OUTPUT_PATH = path.join(ROOT, "public/marketing/pfizer-analytics-demo.vtt");
const CHAPTER_MS = Number(process.env.DEMO_CHAPTER_MS ?? 900);

function buildCues(timeline) {
  const cues = [];

  for (const segment of timeline) {
    const parts = splitSentences(segment.narration);
    const windowMs = segment.endMs - segment.startMs;
    const totalLen = parts.reduce((sum, part) => sum + part.length, 0);
    let cursor = segment.startMs;

    parts.forEach((part, index) => {
      const isLast = index === parts.length - 1;
      const durationMs = isLast
        ? segment.endMs - cursor
        : Math.round(windowMs * (part.length / totalLen));
      const end = cursor + durationMs;
      cues.push({
        start: cursor,
        end: isLast ? segment.endMs : end,
        text: part,
      });
      cursor = end;
    });
  }

  return cues;
}

function msToVtt(ms) {
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1000);
  const msRem = Math.floor(ms % 1000);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(msRem).padStart(3, "0")}`;
}

function splitSentences(text) {
  return (
    text.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g)?.map((s) => s.trim()).filter(Boolean) ?? [
      text.trim(),
    ]
  );
}

function buildAudioTimeline({ leadInMs, segments }) {
  let cursor = leadInMs;
  return segments.map((segment) => {
    cursor += CHAPTER_MS;
    const startMs = cursor;
    cursor += segment.durationMs;
    return {
      ...segment,
      startMs,
      endMs: cursor,
    };
  });
}


async function main() {
  const raw = JSON.parse(await readFile(TIMINGS_PATH, "utf8"));
  const timeline = buildAudioTimeline(raw);
  const cues = buildCues(timeline);

  let vtt = "WEBVTT\n\n";
  cues.forEach((cue, index) => {
    vtt += `${index + 1}\n${msToVtt(cue.start)} --> ${msToVtt(cue.end)}\n${cue.text}\n\n`;
  });

  await writeFile(OUTPUT_PATH, vtt, "utf8");
  console.log(`Wrote ${cues.length} cues to ${OUTPUT_PATH}`);
  console.log(`Audio ends at ${(timeline.at(-1).endMs / 1000).toFixed(2)}s`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
