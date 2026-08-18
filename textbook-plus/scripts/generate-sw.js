const fs = require("fs");
const path = require("path");

// Read subjects data (strip TypeScript types for Node.js)
const subjectsPath = path.join(__dirname, "..", "src", "data", "subjects.ts");
const content = fs.readFileSync(subjectsPath, "utf-8");

// Extract slugs from the subjects array
const slugRegex = /slug:\s*"([^"]+)"/g;
const slugs = [];
let match;
while ((match = slugRegex.exec(content)) !== null) {
  slugs.push(match[1]);
}

// Build precache URLs
const precacheUrls = [
  "/",
  ...slugs.map((s) => `/subjects/${s}`),
  "/icon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/_offline",
];

// Format as JS array
const precacheBlock = precacheUrls.map((u) => `  "${u}",`).join("\n");

// Read current sw.js
const swPath = path.join(__dirname, "..", "public", "sw.js");
let sw = fs.readFileSync(swPath, "utf-8");

// Replace the PRECACHE_URLS block
sw = sw.replace(
  /const PRECACHE_URLS = \[[\s\S]*?\];/,
  `const PRECACHE_URLS = [\n${precacheBlock}\n];`
);

fs.writeFileSync(swPath, sw);
console.log(`Updated sw.js with ${precacheUrls.length} precache URLs:`, precacheUrls);
