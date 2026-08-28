const fs = require("fs");
const path = require("path");

// Read subjects data (strip TypeScript types for Node.js)
const subjectsPath = path.join(__dirname, "..", "src", "data", "subjects.ts");
const subjectsContent = fs.readFileSync(subjectsPath, "utf-8");

// Extract slugs from the subjects array
const slugRegex = /slug:\s*"([^"]+)"/g;
const slugs = [];
let match;
while ((match = slugRegex.exec(subjectsContent)) !== null) {
  slugs.push(match[1]);
}

// Read class-11 data
const class11Path = path.join(__dirname, "..", "src", "data", "class11.ts");
const class11Content = fs.readFileSync(class11Path, "utf-8");

// Extract class-11 subject slugs
const class11SubjectSlugs = [];
const class11SubjectRegex = /slug:\s*"([^"]+)"/g;
let class11Match;
while ((class11Match = class11SubjectRegex.exec(class11Content)) !== null) {
  class11SubjectSlugs.push(class11Match[1]);
}

// Extract class-11 chapter slugs
const class11ChapterSlugs = [];
const class11ChapterRegex = /slug:\s*"([^"]+)"/g;
let class11ChapterMatch;
while ((class11ChapterMatch = class11ChapterRegex.exec(class11Content)) !== null) {
  class11ChapterSlugs.push(class11ChapterMatch[1]);
}

// Deduplicate precache URLs
const precacheUrls = [...new Set([
  "/",
  ...slugs.map((s) => `/subjects/${s}`),
  "/class-11",
  ...class11SubjectSlugs.map((s) => `/class-11/${s}`),
  ...class11ChapterSlugs.map((s) => `/class-11/${s}`),
  "/icon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/_offline",
])];

// Format as JS array
const precacheBlock = precacheUrls.map((u) => `  "${u}",`).join("\n");

// Derive a build-specific cache version so every deploy invalidates old caches
let buildSha = process.env.VERCEL_GIT_COMMIT_SHA || "";
if (!buildSha) {
  try {
    buildSha = require("child_process").execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    buildSha = "";
  }
}
const cacheVersion = `textbook++-${buildSha || Date.now()}`;

// Read current sw.js
const swPath = path.join(__dirname, "..", "public", "sw.js");
let sw = fs.readFileSync(swPath, "utf-8");

// Replace the CACHE_NAME version
sw = sw.replace(
  /const CACHE_NAME = "[^"]*";/,
  `const CACHE_NAME = "${cacheVersion}";`
);

// Replace the PRECACHE_URLS block
sw = sw.replace(
  /const PRECACHE_URLS = \[[\s\S]*?\];/,
  `const PRECACHE_URLS = [\n${precacheBlock}\n];`
);

fs.writeFileSync(swPath, sw);
console.log(`Updated sw.js with ${precacheUrls.length} precache URLs:`, precacheUrls);
