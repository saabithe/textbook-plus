import { readFile, writeFile } from "node:fs/promises";

const p = process.argv[2];
const out = process.argv[3];
let text = await readFile(p, "utf8");
let lines = text.split("\n");

const cleaned = [];
let buf = "";
for (const line of lines) {
  const t = line.trim();
  // Page separators pass through
  if (/^===== PAGE \d+ =====$/.test(t)) {
    if (buf) { cleaned.push(buf); buf = ""; }
    cleaned.push(t);
    continue;
  }
  if (t.length === 0) {
    if (buf) { cleaned.push(buf); buf = ""; }
    continue;
  }
  // Superscript lines: a single digit or digit+punct, or just a symbol like 
  // Attach to previous buffer with no space.
  if (/^[\d–—\-\u2013\u2014]+[.,]?$/.test(t) && buf && /[a-zA-Z0-9)\]]$/.test(buf)) {
    buf += t;
    continue;
  }
  if (buf) { cleaned.push(buf); buf = ""; }
  buf = t;
}
if (buf) cleaned.push(buf);

// Collapse "−" used as minus to standard hyphen-minus for readability in raw notes
let result = cleaned.join("\n");
result = result.replace(//g, "-");
// Join a digit line that may have slipped (e.g. "2" after "i =" )
result = result.replace(/([a-zA-Z0-9])\n(\d)\n/g, "$1$2\n");

await writeFile(out, result, "utf8");
console.error("Wrote", out, "lines:", cleaned.length);
