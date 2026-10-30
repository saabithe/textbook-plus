const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const CONTENT_ROOT = path.join(ROOT, "src", "content");
const CHaptersPath = path.join(ROOT, "src", "data", "chapters.ts");
const OUT = path.join(ROOT, "public", "search-index.json");

function readChaptersMap() {
  const src = fs.readFileSync(CHaptersPath, "utf8");
  const entries = [];
  // Each chapter object spans one or more lines. Capture {id, subjectSlug, number, title, slug, titleArabic?} loosely.
  const regex = /\{\s*id:\s*"([^"]+)"[^}]*?subjectSlug:\s*"([^"]+)"[^}]*?number:\s*(\d+)[^}]*?title:\s*"([^"]+)"[^}]*?slug:\s*"([^"]+)"[^}]*?\}/g;
  let m;
  while ((m = regex.exec(src)) !== null) {
    const [, id, subjectSlug, number, title, slug] = m;
    entries.push({ id, subjectSlug, number: Number(number), title, slug });
  }
  return entries;
}

function stripJsxTags(text) {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/\/\/.*$/gm, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]{0,40}\}/g, " ") // simple brace interpolation
    .replace(/\s+/g, " ")
    .trim();
}

function extractHeadings(text) {
  const set = new Set();
  const re = /<h[1-6][^>]*>([\s\S]{1,120}?)<\/h[1-6]>/gi;
  let m;
  while ((m = re.exec(text))) {
    const t = stripJsxTags(m[1]).trim();
    if (t && t.length < 120) set.add(t);
  }
  return Array.from(set);
}

const chaptersMap = readChaptersMap();
const bySlug = new Map();
for (const c of chaptersMap) bySlug.set(c.slug, c);

const subjectNames = {
  physics: "Physics",
  chemistry: "Chemistry",
  mathematics: "Mathematics",
  biology: "Biology",
  english: "English",
  arabic: "Arabic",
};
const subjectColors = {
  physics: "var(--subject-physics)",
  chemistry: "var(--subject-chemistry)",
  mathematics: "var(--subject-mathematics)",
  biology: "var(--subject-biology)",
  english: "var(--subject-english)",
  arabic: "var(--subject-arabic)",
};

const index = [];
let count = 0;
for (const subject of Object.keys(subjectNames)) {
  const subjectDir = path.join(CONTENT_ROOT, subject);
  if (!fs.existsSync(subjectDir)) continue;
  for (const chapter of fs.readdirSync(subjectDir, { withFileTypes: true })) {
    if (!chapter.isDirectory()) continue;
    const page = path.join(subjectDir, chapter.name, "page.tsx");
    if (!fs.existsSync(page)) continue;
    const source = fs.readFileSync(page, "utf8");
    const blob = stripJsxTags(source).slice(0, 16000);
    const headings = extractHeadings(source);
    const meta = bySlug.get(chapter.name);
    const title = meta?.title ?? headingFallback(chapter.name, source);
    const number = meta?.number ?? 0;
    const titleArabic = extractArabicTitle(source);
    index.push({
      subjectSlug: subject,
      subjectName: subjectNames[subject],
      subjectColor: subjectColors[subject],
      slug: chapter.name,
      number,
      title,
      titleArabic,
      href: `/chapter/${chapter.name}`,
      headings,
      blob,
    });
    count++;
  }
}

function headingFallback(slug, source) {
  const m = source.match(/title:\s*"([^"]+)"/);
  return m ? m[1] : slug;
}
function extractArabicTitle(source) {
  const m = source.match(/titleArabic:\s*"([^"]+)"/);
  return m ? m[1] : undefined;
}

// Also index grammar topics and discourses (lightweight: title from label text inside page)
const grammarDir = path.join(CONTENT_ROOT, "..", "app", "grammar", "[topic]");
// skip extras; grammar and discourses added as route labels below by scanning app directory
const appDir = path.join(ROOT, "src", "app");
const extras = [
  ["grammar", path.join(appDir, "grammar", "[topic]", "grammar-content.tsx"), "/grammar/"],
  ["discourses", path.join(appDir, "discourses", "[topic]", "discourse-content.tsx"), "/discourses/"],
];
for (const [key, abs, base] of extras) {
  // ignore; titles hard to extract without router — omit to keep index correct
}

fs.writeFileSync(OUT, JSON.stringify(index), "utf8");
console.log(`wrote ${index.length} entries (${count}) to ${OUT}`);
