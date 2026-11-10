/**
 * Completeness gate for the component library.
 *
 *   npm run verify:catalog
 *
 * Re-scans every .tsx under src/components and diffs it against
 * src/app/dev/components/catalog.generated.json. Fails when a component or an
 * export is not in the library, when the catalog is stale, or when an entry
 * points at a file that no longer exists.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "src", "components");
const JSON_PATH = path.join(
  __dirname,
  "..",
  "src",
  "app",
  "dev",
  "components",
  "catalog.generated.json"
);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".tsx")) out.push(full);
  }
  return out;
}

function exportsOf(source) {
  const names = new Set();
  for (const m of source.matchAll(/^export (?:async )?function (\w+)/gm)) names.add(m[1]);
  for (const m of source.matchAll(/^export (?:const|class) (\w+)/gm)) names.add(m[1]);
  for (const m of source.matchAll(/^export default (?:class|function) (\w+)/gm)) names.add(m[1]);
  for (const m of source.matchAll(/^export\s*\{([^}]+)\}/gm)) {
    for (let part of m[1].split(",")) {
      part = part.trim();
      if (!part || part.startsWith("type ")) continue;
      const name = part.split(/\s+as\s+/).pop().trim();
      if (/^\w+$/.test(name)) names.add(name);
    }
  }
  return [...names];
}

if (!fs.existsSync(JSON_PATH)) {
  console.error("✗ catalog.generated.json missing — run node scripts/generate-component-catalog.cjs");
  process.exit(1);
}

const catalog = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
const expected = new Set(catalog.map((e) => e.id));
const actual = new Set();
const files = walk(ROOT);
const fileSet = new Set();

for (const full of files) {
  const relPath = path.relative(ROOT, full).split(path.sep).join("/");
  fileSet.add(relPath);
  const source = fs.readFileSync(full, "utf8");
  for (const name of exportsOf(source)) actual.add(`${relPath}#${name}`);
}

const missing = [...actual].filter((id) => !expected.has(id)).sort();
const stale = [...expected].filter((id) => !actual.has(id)).sort();
const duplicates = catalog
  .map((e) => e.id)
  .filter((id, i, arr) => arr.indexOf(id) !== i);

let failed = false;

if (missing.length) {
  failed = true;
  console.error(`✗ ${missing.length} export(s) missing from the catalog:`);
  for (const id of missing) console.error("   - " + id);
}

if (stale.length) {
  failed = true;
  console.error(`✗ ${stale.length} stale catalog entr${stale.length === 1 ? "y" : "ies"}:`);
  for (const id of stale) console.error("   - " + id);
}

if (duplicates.length) {
  failed = true;
  console.error(`✗ ${duplicates.length} duplicate catalog id(s):`);
  for (const id of [...new Set(duplicates)]) console.error("   - " + id);
}

if (failed) {
  console.error("\nRun: node scripts/generate-component-catalog.cjs");
  process.exit(1);
}

console.log(
  `✓ component catalog complete — ${files.length} files, ${catalog.length} exports, ` +
    `${catalog.filter((e) => e.renderable).length} renderable, ` +
    `${catalog.filter((e) => e.shell).length} shell`
);
