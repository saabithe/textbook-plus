import { readFile, writeFile } from "node:fs/promises";
import { pdf } from "pdf-to-img";

const src = process.argv[2];
const pages = process.argv.slice(3).map(Number);

const buffer = await readFile(src);
const doc = await pdf(buffer, { scale: 3 });
let i = 0;
for await (const page of doc) {
  i++;
  if (pages.length === 0 || pages.includes(i)) {
    const out = `C:/Users/CELLFI/Projects/Note system/Developer_Deliveries/Chapters/Mathematics/pdf-page-${i}.png`;
    await writeFile(out, page);
    console.error("saved", out);
  }
}
