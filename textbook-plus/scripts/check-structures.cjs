#!/usr/bin/env node
/**
 * Gate G7 — structural lint for generated chemical structure modules.
 * Dependency-free, runs inside `npm run build` (Vercel never needs Python).
 *
 * Fails when:
 *  - a structures.json has no matching structures.generated.ts (or vice versa)
 *  - the generated file is stale (input hash mismatch)
 *  - the page references a structure that was never generated, or ignores one that was
 *  - an SVG still contains theme-breaking black ink, scripts, or external refs
 *  - an SVG blows the size budget
 */

const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const ROOT = path.join(__dirname, "..");
const CONTENT = path.join(ROOT, "src", "content", "chemistry");

const SIZE_WARN = 25_000;
const SIZE_FAIL = 60_000;

const problems = [];
const warnings = [];
const report = [];

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function readGenerated(file) {
  const source = fs.readFileSync(file, "utf8");

  const hashMatch = source.match(/STRUCTURES_INPUT_HASH = "([a-f0-9]+)"/);
  const body = source.match(/export const STRUCTURES = \{([\s\S]*?)\n\} as const;/);
  if (!hashMatch || !body) {
    problems.push(`${path.relative(ROOT, file)}: unrecognised generated file (regenerate it)`);
    return null;
  }

  const entries = new Map();
  const keyRegex = /^ {2}"((?:[^"\\]|\\.)*)": \{$/gm;
  const marks = [];
  let match;
  while ((match = keyRegex.exec(body[1])) !== null) {
    marks.push({ key: JSON.parse(`"${match[1]}"`), start: match.index });
  }

  marks.forEach((mark, index) => {
    const end = index + 1 < marks.length ? marks[index + 1].start : body[1].length;
    const chunk = body[1].slice(mark.start, end);
    const svgMatch = chunk.match(/^ +svg: ("(?:[^"\\]|\\.)*")/m);
    if (!svgMatch) {
      problems.push(`${path.relative(ROOT, file)}: entry "${mark.key}" has no svg string`);
      return;
    }
    entries.set(mark.key, JSON.parse(svgMatch[1]));
  });

  return { hash: hashMatch[1], entries };
}

function checkHygiene(label, svg) {
  const bytes = Buffer.byteLength(svg, "utf8");
  if (/#000000/i.test(svg)) problems.push(`${label}: black ink left in svg (breaks dark mode)`);
  if (/<script/i.test(svg)) problems.push(`${label}: contains a <script> tag`);
  if (/javascript:/i.test(svg)) problems.push(`${label}: contains a javascript: URL`);
  if (/on(load|click|mouseover)\s*=/i.test(svg)) problems.push(`${label}: contains an inline event handler`);
  for (const href of svg.match(/href=['"]([^'"]+)['"]/g) || []) {
    if (!/href=['"]#/.test(href)) problems.push(`${label}: external href ${href.slice(0, 60)}`);
  }
  if (bytes > SIZE_FAIL) {
    problems.push(`${label}: svg is ${bytes} bytes (limit ${SIZE_FAIL})`);
  } else if (bytes > SIZE_WARN) {
    warnings.push(`${label}: svg is ${bytes} bytes (warn over ${SIZE_WARN})`);
  }
  return bytes;
}

function referencedKeys(pageFile) {
  const source = fs.readFileSync(pageFile, "utf8");
  const keys = new Set();
  for (const m of source.matchAll(/STRUCTURES\.([A-Za-z0-9_]+)/g)) keys.add(m[1]);
  for (const m of source.matchAll(/STRUCTURES\[\s*["'`]([^"'`]+)["'`]\s*\]/g)) keys.add(m[1]);
  return keys;
}

function main() {
  if (!fs.existsSync(CONTENT)) {
    console.log("check-structures: no chemistry content directory — skipped.");
    return;
  }

  const chapters = fs
    .readdirSync(CONTENT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  let totalStructures = 0;
  let totalBytes = 0;
  let withStructures = 0;

  for (const slug of chapters) {
    const dir = path.join(CONTENT, slug);
    const jsonFile = path.join(dir, "structures.json");
    const genFile = path.join(dir, "structures.generated.ts");
    const pageFile = path.join(dir, "page.tsx");

    const hasJson = fs.existsSync(jsonFile);
    const hasGen = fs.existsSync(genFile);

    if (!hasJson && !hasGen) continue;
    if (hasJson && !hasGen) {
      problems.push(`${slug}: structures.json exists but structures.generated.ts is missing — run npm run chem:build -- --chapter ${slug}`);
      continue;
    }
    if (!hasJson && hasGen) {
      problems.push(`${slug}: structures.generated.ts exists without structures.json — delete it or restore the source`);
      continue;
    }

    const generated = readGenerated(genFile);
    if (!generated) continue;

    const expectedHash = sha256(jsonFile);
    if (generated.hash !== expectedHash) {
      problems.push(`${slug}: generated files are stale — run npm run chem:build -- --chapter ${slug}`);
      continue;
    }

    let manifest;
    try {
      manifest = JSON.parse(fs.readFileSync(jsonFile, "utf8"));
    } catch (error) {
      problems.push(`${slug}: structures.json is not valid JSON — ${error.message}`);
      continue;
    }

    const authored = new Set(Object.keys(manifest));
    const generatedKeys = new Set(generated.entries.keys());

    for (const key of authored) {
      if (!generatedKeys.has(key)) problems.push(`${slug}: "${key}" is authored but missing from the generated file`);
    }
    for (const key of generatedKeys) {
      if (!authored.has(key)) problems.push(`${slug}: "${key}" is generated but missing from structures.json`);
    }

    if (fs.existsSync(pageFile)) {
      const used = referencedKeys(pageFile);
      for (const key of used) {
        if (!generatedKeys.has(key)) problems.push(`${slug}: page.tsx uses STRUCTURES.${key}, which is not generated`);
      }
      for (const key of generatedKeys) {
        if (!used.has(key)) problems.push(`${slug}: "${key}" is generated but never used in page.tsx`);
      }
      if (generatedKeys.size > 0 && !/structures\.generated/.test(fs.readFileSync(pageFile, "utf8"))) {
        problems.push(`${slug}: page.tsx does not import ./structures.generated`);
      }
    } else {
      problems.push(`${slug}: page.tsx missing`);
    }

    for (const [key, svg] of generated.entries) {
      totalBytes += checkHygiene(`${slug}/${key}`, svg);
      totalStructures += 1;
    }
    withStructures += 1;
    report.push(`  ${slug}: ${generatedKeys.size} structures, ${(totalBytes / 1024).toFixed(1)} KB running total`);
  }

  for (const warning of warnings) console.warn(`warn  ${warning}`);
  for (const problem of problems) console.error(`error ${problem}`);

  if (problems.length > 0) {
    console.error(`\ncheck-structures: ${problems.length} problem(s). Build stopped.`);
    process.exit(1);
  }

  if (totalStructures === 0) {
    console.log("check-structures: no structure modules yet — skipped.");
  } else {
    console.log(
      `check-structures: ${totalStructures} structures across ${withStructures} chapters verified.`,
    );
  }
}

main();
