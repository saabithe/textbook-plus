const fs = require("fs");
const path = require("path");
const katex = require("katex");

// Regression guard: every LaTeX formula in the content pipeline must compile.
// Formulas are authored with String.raw templates (single backslashes preserved
// verbatim, both in JSX attributes and in JS template literals).
// Usage: node scripts/verify-latex.cjs

const contentRoot = path.join(__dirname, "..", "src", "content");
const pageFiles = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === "page.tsx") pageFiles.push(full);
  }
})(contentRoot);

const formulaRe = /String\.raw`([^`]*)`|latex="([^"]*)"/g;

let total = 0;
let failures = 0;
let filesWithFormulas = 0;

for (const file of pageFiles) {
  let src;
  try {
    src = fs.readFileSync(file, "utf-8");
  } catch {
    continue;
  }
  let count = 0;
  let fileFailures = 0;
  let match;
  formulaRe.lastIndex = 0;
  while ((match = formulaRe.exec(src)) !== null) {
    const raw = match[1] !== undefined ? match[1] : match[2];
    if (!raw) continue;
    if (/\\/.test(raw)) {
      total++;
      count++;
      const before = src.slice(Math.max(0, src.lastIndexOf("<Formula", match.index)), match.index);
      const display = /FormulaBlock/.test(before);
      try {
        katex.renderToString(raw, { throwOnError: true, displayMode: display });
      } catch (err) {
        failures++;
        fileFailures++;
        console.error(`FAIL ${path.relative(process.cwd(), file)}: ${raw}\n      ${err.message}`);
      }
    }
  }
  if (count > 0) {
    filesWithFormulas++;
    console.log(`${path.relative(process.cwd(), file)}: ${count} formulas`);
  }
  if (fileFailures > 0) console.error(`  -> ${fileFailures} failure(s) in this file`);
}

console.log(`\nTOTAL formulas=${total} files=${filesWithFormulas} failures=${failures}`);
process.exit(failures > 0 ? 1 : 0);