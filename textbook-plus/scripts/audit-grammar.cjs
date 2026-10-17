/**
 * audit-grammar.cjs
 * Structural + hygiene audit for src/content/grammar/<topic>/page.tsx.
 *
 * Checks:
 *  - duplicate question ids
 *  - MCQ: options present, >= 2 options, no duplicate options, answer index in range
 *  - fill-blank: answer string present in its explanation
 *  - MistakeCard: mistake !== correction
 *  - non-ASCII / CJK characters (catches stray foreign text)
 *  - per-topic question-type mix
 *
 * Run: node scripts/audit-grammar.cjs
 */
const fs = require("fs");
const path = require("path");

const GRAMMAR_DIR = path.join(__dirname, "..", "src", "content", "grammar");

const dirs = fs
  .readdirSync(GRAMMAR_DIR)
  .filter(
    (d) =>
      fs.statSync(path.join(GRAMMAR_DIR, d)).isDirectory() &&
      fs.existsSync(path.join(GRAMMAR_DIR, d, "page.tsx")),
  );

function norm(s) {
  return String(s)
    .toLowerCase()
    .replace(/&[a-z]+;/g, " ")
    .replace(/[.!?,\u2019'"()]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

let totalErrors = 0;
let totalWarnings = 0;
const rows = [];
const typeTotals = {};

for (const dir of dirs) {
  const file = path.join(GRAMMAR_DIR, dir, "page.tsx");
  const src = fs.readFileSync(file, "utf8");
  const errors = [];
  const warnings = [];

  // ---- question blocks ----
  const qre = /id:\s*"([\w-]+)",\s*type:\s*"([\w-]+)"/g;
  const marks = [];
  let m;
  while ((m = qre.exec(src))) marks.push({ id: m[1], type: m[2], index: m.index });

  const ids = marks.map((x) => x.id);
  const dupIds = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
  if (dupIds.length) errors.push(`duplicate question ids: ${dupIds.join(", ")}`);

  let mcq = 0;
  let fb = 0;
  const mix = {};

  marks.forEach((mk, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].index : src.length;
    const block = src.slice(mk.index, end);
    mix[mk.type] = (mix[mk.type] || 0) + 1;
    typeTotals[mk.type] = (typeTotals[mk.type] || 0) + 1;

    if (mk.type === "mcq") {
      mcq++;
      const optMatch = block.match(/options:\s*\[([\s\S]*?)\]/);
      const ansMatch = block.match(/answer:\s*(\d+)/);
      if (!optMatch) {
        errors.push(`${mk.id}: missing options array`);
        return;
      }
      const opts = [...optMatch[1].matchAll(/"(?:\\.|[^"\\])*"/g)].map((x) =>
        x[0].slice(1, -1),
      );
      if (opts.length < 2) errors.push(`${mk.id}: fewer than 2 options (${opts.length})`);
      const lower = opts.map((o) => norm(o));
      const dupOpt = [...new Set(lower.filter((o, j) => lower.indexOf(o) !== j))];
      if (dupOpt.length) errors.push(`${mk.id}: duplicate options -> ${dupOpt.join(" | ")}`);
      if (!ansMatch) {
        errors.push(`${mk.id}: missing answer index`);
        return;
      }
      const ai = parseInt(ansMatch[1], 10);
      if (ai < 0 || ai >= opts.length)
        errors.push(`${mk.id}: answer index ${ai} out of range (0..${opts.length - 1})`);
      if (opts.length === 0) errors.push(`${mk.id}: option parsing failed`);
    } else if (mk.type === "fill-blank") {
      fb++;
      const ansMatch = block.match(/answer:\s*"((?:\\.|[^"\\])*)"/);
      const expMatch = block.match(/explanation:\s*"((?:\\.|[^"\\])*)"/);
      if (!ansMatch) {
        errors.push(`${mk.id}: missing fill-blank answer`);
        return;
      }
      const ans = ansMatch[1].replace(/\\"/g, '"');
      const exp = expMatch ? expMatch[1].replace(/\\"/g, '"') : "";
      if (exp && !norm(exp).includes(norm(ans)))
        warnings.push(`${mk.id}: fill-blank answer "${ans}" not found in its explanation`);
    } else {
      warnings.push(`${mk.id}: unknown question type "${mk.type}"`);
    }
  });

  // ---- MistakeCard ----
  const mre = /<MistakeCard\b([\s\S]*?)\/>/g;
  let mm;
  while ((mm = mre.exec(src))) {
    const body = mm[1];
    const grab = (key) => {
      const r = body.match(
        new RegExp(key + '=(?:"([^"]*)"|\\{\\s*`([^`]*)`\\s*\\})'),
      );
      return r ? (r[1] !== undefined ? r[1] : r[2]) : null;
    };
    const mistake = grab("mistake");
    const correction = grab("correction");
    if (mistake && correction && norm(mistake) === norm(correction))
      errors.push(`MistakeCard where mistake == correction: "${mistake}"`);
  }

  // ---- stray non-ASCII ----
  const cjk = src.match(/[\u3000-\u9fff\uff00-\uffef]/g);
  if (cjk) {
    const line = src.slice(0, src.indexOf(cjk[0])).split("\n").length;
    warnings.push(
      `non-ASCII/CJK text (line ${line}): ${[...new Set(cjk)].join(" ")}`,
    );
  }

  rows.push({ dir, mcq, fb, total: mcq + fb, errors, warnings, mix });
  totalErrors += errors.length;
  totalWarnings += warnings.length;
}

console.log("GRAMMAR AUDIT\n=============");
for (const r of rows) {
  console.log(
    `\n=== ${r.dir}  (${r.total} questions: ${Object.entries(r.mix)
      .map(([k, v]) => `${k} ${v}`)
      .join(", ")}) ===`,
  );
  if (!r.errors.length && !r.warnings.length) console.log("  clean");
  for (const e of r.errors) console.log("  ERROR  " + e);
  for (const w of r.warnings) console.log("  warn   " + w);
}

console.log("\n---- type mix across all topics ----");
for (const [k, v] of Object.entries(typeTotals)) console.log(`  ${k}: ${v}`);
console.log(
  `\nTOTAL: ${totalErrors} errors, ${totalWarnings} warnings across ${rows.length} topics`,
);
process.exitCode = totalErrors ? 1 : 0;
