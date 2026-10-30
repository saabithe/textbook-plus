#!/usr/bin/env node
/**
 * audit-presentation.cjs — static presentation checks for chapter content.
 *
 * Encodes the rules in `Constitution/USER_PREFERENCES.md` §11 / §14 and the
 * "Content Authoring Conventions" of AGENTS.md, so they are testable instead
 * of remembered:
 *
 *   P1  a <p> holding 3+ sentences            (split it, or lift the list out)
 *   P2  a <p> over 60 words                   (too dense to scan)
 *   P3  a <p> that is really an inline list   (3+ commas and an "and")
 *   P4  "etc." anywhere in page copy          (name the examples instead)
 *   P5  model text cites Fig. 8.x but the page never references that number
 *   P6  a table cell over 25 words            (trim it, or move it to prose)
 *   P7  heading level jump (h2 -> h4)
 *
 * Usage (from textbook-plus/):
 *   node scripts/audit-presentation.cjs                     # every page
 *   node scripts/audit-presentation.cjs --chapter evolution  # one chapter
 *   node scripts/audit-presentation.cjs --strict            # warnings fail too
 *
 * Exit code: 1 when there are errors (or warnings under --strict).
 */

const fs = require("fs");
const path = require("path");

const APP_ROOT = path.resolve(__dirname, "..");
const CONTENT_ROOT = path.join(APP_ROOT, "src", "content");
const DELIVERIES = path.resolve(APP_ROOT, "..", "Developer_Deliveries", "Subjects");

const SUBJECT_FOLDER = {
  biology: "04_Biology",
  physics: "01_Physics",
  chemistry: "02_Chemistry",
  mathematics: "03_Mathematics",
};

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const value = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : null;
};

const onlyChapter = value("--chapter");
const strict = flag("--strict");

const findings = []; // { severity, rule, file, line, message, excerpt }

/* ── helpers ─────────────────────────────────────────────────────────── */

function stripTags(text) {
  return text
    .replace(/\{[^}]*\}/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const ABBREVIATIONS =
  /\b(?:e\.g|i\.e|etc|fig|figs|no|nos|vs|cf|approx|dr|mr|mrs|ms|st|sp|spp|var|al|ed|eds|vol|pp|ca|resp|inc|ltd)\./gi;

function countSentences(text) {
  const cleaned = text
    .replace(/\b(?:[A-Za-z]\.){2,}/g, "X") // H.M.S., U.S.A.
    .replace(/(\d)\.(\d)/g, "$1$2") // 4.5, 1.5
    .replace(ABBREVIATIONS, "X");
  return (cleaned.match(/[.!?](?=\s|$)/g) || []).length;
}

function lineOf(source, index) {
  return source.slice(0, index).split("\n").length;
}

function excerpt(text, max = 90) {
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

function add(severity, rule, file, line, message, snippet) {
  findings.push({ severity, rule, file, line, message, excerpt: snippet });
}

/* ── file discovery ──────────────────────────────────────────────────── */

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name === "page.tsx") out.push(full);
  }
  return out;
}

function chapterFiles() {
  if (!onlyChapter) return walk(CONTENT_ROOT);
  return walk(CONTENT_ROOT).filter((file) => path.basename(path.dirname(file)) === onlyChapter);
}

/* ── checks ──────────────────────────────────────────────────────────── */

function checkParagraphs(source, file) {
  const re = /<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = re.exec(source)) !== null) {
    const text = stripTags(match[1]);
    if (!text) continue;
    const line = lineOf(source, match.index);

    const sentences = countSentences(text);
    if (sentences >= 3) {
      add("error", "P1", file, line, `paragraph has ${sentences} sentences — split it or lift the list out`, excerpt(text));
    }

    const words = text.split(/\s+/).filter(Boolean).length;
    if (words > 60) {
      add("warn", "P2", file, line, `paragraph is ${words} words — too dense to scan`, excerpt(text));
    }

    const commas = (text.match(/,/g) || []).length;
    if (commas >= 3 && /\band\b/.test(text)) {
      add("warn", "P3", file, line, "paragraph looks like an inline list (3+ commas + \"and\")", excerpt(text));
    }
  }
}

function checkEtc(source, file) {
  const re = /\betc\./g;
  let match;
  while ((match = re.exec(source)) !== null) {
    add("warn", "P4", file, lineOf(source, match.index), "\"etc.\" — name the remaining examples instead", "");
  }
}

function checkTableCells(source, file) {
  const re = /cells:\s*\[([\s\S]*?)\]/g;
  let match;
  while ((match = re.exec(source)) !== null) {
    const strings = match[1].match(/"[^"]*"|`[^`]*`|'[^']*'/g) || [];
    for (const raw of strings) {
      const text = raw.slice(1, -1);
      const words = text.split(/\s+/).filter(Boolean).length;
      if (words > 25) {
        add("warn", "P6", file, lineOf(source, match.index), `table cell is ${words} words — trim to ~18`, excerpt(text));
      }
    }
  }
}

function checkHeadings(source, file) {
  const re = /<h([2-4])[\s>]/g;
  let match;
  let previous = 2;
  while ((match = re.exec(source)) !== null) {
    const level = Number(match[1]);
    if (level > previous + 1) {
      add("warn", "P7", file, lineOf(source, match.index), `heading jumps h${previous} → h${level}`, "");
    }
    previous = level;
  }
}

function checkFigures(source, file) {
  const subjectSlug = path.basename(path.dirname(path.dirname(file))); // e.g. biology
  const chapterSlug = path.basename(path.dirname(file));
  const subjectFolder = SUBJECT_FOLDER[subjectSlug];
  if (!subjectFolder) return;

  const candidates = ["extracted", "raw"].map((kind) =>
    path.join(DELIVERIES, subjectFolder, "Extractions", `${chapterSlug}-${kind}.md`),
  );
  const modelPath = candidates.find((candidate) => fs.existsSync(candidate));
  if (!modelPath) return;

  const model = fs.readFileSync(modelPath, "utf8");
  const figures = new Set();
  const re = /\bFig(?:ure)?\.?\s*(\d{1,2}\.\d{1,2})\b/g;
  let match;
  while ((match = re.exec(model)) !== null) figures.add(match[1]);
  if (figures.size === 0) return;

  for (const figure of [...figures].sort()) {
    const escaped = figure.replace(".", "\\.");
    const cited = new RegExp(`Fig(?:ure)?\\.?\\s*${escaped}(?!\\d)`).test(source)
      || new RegExp(`${escaped}\\s*—`).test(source);
    if (!cited) {
      add(
        "error",
        "P5",
        file,
        1,
        `model text cites Fig. ${figure} but the page never references that figure number`,
        path.relative(APP_ROOT, modelPath),
      );
    }
  }
}

/* ── run ─────────────────────────────────────────────────────────────── */

const files = chapterFiles();
if (files.length === 0) {
  console.error(onlyChapter ? `No page.tsx found for chapter "${onlyChapter}".` : "No content pages found.");
  process.exit(1);
}

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  checkParagraphs(source, file);
  checkEtc(source, file);
  checkTableCells(source, file);
  checkHeadings(source, file);
  checkFigures(source, file);
}

/* ── report ──────────────────────────────────────────────────────────── */

const relative = (file) => path.relative(APP_ROOT, file).replace(/\\/g, "/");
const order = { error: 0, warn: 1 };
findings.sort((a, b) => relative(a.file).localeCompare(relative(b.file)) || a.line - b.line);

let currentFile = null;
for (const finding of findings) {
  if (finding.file !== currentFile) {
    currentFile = finding.file;
    console.log(`\n${relative(finding.file)}`);
  }
  const mark = finding.severity === "error" ? "✗" : "!";
  console.log(`  ${mark} ${finding.rule} L${finding.line}  ${finding.message}`);
  if (finding.excerpt) console.log(`      ${finding.excerpt}`);
}

const errorCount = findings.filter((f) => f.severity === "error").length;
const warnCount = findings.length - errorCount;

console.log(
  `\n${errorCount} error${errorCount === 1 ? "" : "s"} · ${warnCount} warning${warnCount === 1 ? "" : "s"} · ${files.length} file${files.length === 1 ? "" : "s"}`,
);

if (errorCount > 0 || (strict && warnCount > 0)) process.exit(1);
