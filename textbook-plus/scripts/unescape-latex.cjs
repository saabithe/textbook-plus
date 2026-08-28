const fs = require("fs");
const path = require("path");

// JSX attribute string literals preserve backslashes literally (no JS escape
// processing), while JS template literals DO process backslash escapes. The
// previous "escaping fix" doubled every backslash, which reached the real JSX
// attributes as \\command and broke KaTeX. This codemod rewrites every LaTeX
// source as String.raw (single-backslash content), so what you write is exactly
// what KaTeX receives, no matter which form (attribute or template) was used.

const targets = process.argv.slice(2);
if (targets.length === 0) {
  console.error("usage: node scripts/unescape-latex.cjs <page.tsx> [...]");
  process.exit(1);
}

const attrRe = /(\blatex=)("(?:[^"\\]|\\.)*")/g;
const tplRe = /\{(\s*)(`(?:[^`\\]|\\.)*`)(\s*)\}(?=\s*<\/Formula>)/g;

function unescapeBlock(text) {
  return text.replace(/\\\\/g, "\\");
}

let totalAttr = 0;
let totalTpl = 0;

for (const rel of targets) {
  const abs = path.join(__dirname, "..", rel);
  let src = fs.readFileSync(abs, "utf-8");
  let tAttr = 0;
  let tTpl = 0;

  src = src.replace(attrRe, (full, tag, quoted) => {
    tAttr++;
    const rawText = quoted.slice(1, -1);
    const single = unescapeBlock(rawText);
    return `${tag}{String.raw\`${single}\`}`;
  });

  src = src.replace(tplRe, (full, ws1, template, ws2) => {
    tTpl++;
    const rawText = template.slice(1, -1);
    const single = unescapeBlock(rawText);
    return `{${ws1}String.raw\`${single}\`${ws2}}`;
  });

  fs.writeFileSync(abs, src);
  totalAttr += tAttr;
  totalTpl += tTpl;
  console.log(`${rel}: attrs=${tAttr} templates=${tTpl}`);
}

console.log(`TOTAL: attrs=${totalAttr} templates=${totalTpl}`);