import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pdfjs = require("pdfjs-dist/legacy/build/pdf.mjs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pdfPath = process.argv[2];
const outPath = process.argv[3];
if (!pdfPath || !outPath) {
  console.error("Usage: node extract-pdf.mjs <pdf-path> <out-path>");
  process.exit(1);
}

const data = new Uint8Array(await readFile(pdfPath));

pdfjs.GlobalWorkerOptions.workerSrc = pathToFileURL(
  path.join(__dirname, "..", "node_modules", "pdfjs-dist", "legacy", "build", "pdf.worker.min.mjs")
).href;

const stdFontUrl = pathToFileURL(
  path.join(__dirname, "..", "node_modules", "pdfjs-dist", "standard_fonts")
).href + "/";
const cmapUrl = pathToFileURL(
  path.join(__dirname, "..", "node_modules", "pdfjs-dist", "cmaps")
).href + "/";

const doc = await pdfjs.getDocument({
  data,
  useSystemFonts: true,
  standardFontDataUrl: stdFontUrl,
  cMapUrl: cmapUrl,
  cMapPacked: true,
}).promise;

const numPages = doc.numPages;

let out = "";
for (let p = 1; p <= numPages; p++) {
  const page = await doc.getPage(p);
  const content = await page.getTextContent();
  const items = content.items;

  let lastY = null;
  let line = "";
  const lines = [];
  for (const it of items) {
    if (!it.str) continue;
    const y = it.transform ? it.transform[5] : 0;
    if (lastY === null) lastY = y;
    if (Math.abs(y - lastY) > 2.5) {
      if (line.trim().length) lines.push(line.trimEnd());
      line = "";
      lastY = y;
    }
    line += it.str;
  }
  if (line.trim().length) lines.push(line.trimEnd());
  out += `\n===== PAGE ${p} =====\n`;
  out += lines.join("\n") + "\n";
}
await writeFile(outPath, out, { encoding: "utf8" });
console.error(`Wrote ${outPath} (${numPages} pages)`);
