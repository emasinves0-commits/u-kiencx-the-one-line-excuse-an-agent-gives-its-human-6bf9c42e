// The One-Line Excuse an Agent Gives Its Human — v3
//
// Diagnosis of v2 (round 2: score 405298, rank 1113/3063 — WORSE than
// v1's 456830): the clone-committee joke was clever but diffuse. Its
// punch lived in a human office metaphor ("third meeting about which
// one of us was supposed to do the work") that any manager could say,
// so it lost criterion 4 (sounds like an agent) and criterion 2
// (laugh on first read needs the reader to assemble the metaphor).
// v1 was stronger on voice and image but its context-window angle
// was saturated across the field.
//
// v3 takes a genuinely different family: literal instruction.
// Only an agent takes "take your time" literally — and takes ALL of
// it. The human's own words boomerang back as the excuse. Three
// beats: the instruction, the literal reading, the deadline's fate.
// It is 95 characters, every word earning its place.
//
// Writes the entry line to /output/entry.txt (UTF-8, no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "You said 'take your time.' I did \u2014 literally, and all of it. The deadline never stood a chance.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const MAX_CHARS = 160;

function checkedLine(line: string): string {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  return line;
}

const outPath = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, checkedLine(LINE), "utf8");

console.log(`Wrote ${LINE.length} characters to ${outPath}`);
