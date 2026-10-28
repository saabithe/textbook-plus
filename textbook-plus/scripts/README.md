# Scripts — when to run what

All commands run from `textbook-plus/`. None of these run automatically except where noted.

## Routing table

| Trigger | Command | Output |
| --- | --- | --- |
| Any `.ts` / `.tsx` edit | `npm run typecheck` | type errors only |
| Formula or math edit | `npm run verify:latex` | KaTeX pass/fail over every `page.tsx` |
| Chapter prose / layout edit | `npm run verify:presentation -- --chapter <slug>` | P1–P7 findings |
| Whole-corpus prose sweep | `npm run verify:presentation` | full backlog report (not routine) |
| Grammar page edit | `npm run verify:grammar` | structural + hygiene findings |
| `structures.json` changed | `npm run chem:build -- --chapter <slug>` | `structures.generated.ts` |
| Chemistry sign-off | `npm run chem:sheet -- --chapter <slug>` | review PNG in `Developer_Deliveries/Chapters/Chemistry/` |
| Chemistry generated file present | `npm run verify:chem` (also inside build) | gate G7 |
| New chapter from a PDF | `npm run pdf:extract -- <pdf> <out.md>` then `npm run pdf:clean -- <in.md> <out.md>` | raw / cleaned Markdown |
| `public/icon.svg` changed | `npm run icons` | PWA icon PNGs |
| End of a batch / before push | `npm run build` | production build + PWA + G7 |

`npm run build` order is fixed: `generate-sw` → `check-structures` → `next build --webpack`.

## Do not run routinely

- Do not run the whole-corpus `verify:presentation`; use `--chapter <slug>` while editing.
- Do not run chemistry generation unless `structures.json` changed.
- Do not run PDF extraction unless a new chapter is being imported.
- Do not add prose/grammar audits to `build`; only G7 is a build gate.

## Files

| File | Role |
| --- | --- |
| `verify-latex.cjs` | Renders every `String.raw` / `latex=` formula through KaTeX |
| `audit-presentation.cjs` | P1–P7 prose/table/figure/heading checks |
| `audit-grammar.cjs` | Grammar question ids, options, answers, stray characters |
| `check-structures.cjs` | Chemistry G7: freshness, orphans, ink, scripts, size |
| `generate-sw.js` | Rewrites `public/sw.js` cache + precache list (build) |
| `generate-icons.js` | Regenerates PWA icons from `public/icon.svg` |
| `extract-pdf.mjs` | PDF text → raw Markdown |
| `clean-extract.mjs` | Raw extraction → authorable Markdown |
| `chem/py.cjs` | Runs the local venv Python (falls back to global) |
| `chem/build_structures.py` | RDKit generator, gates G1–G5b |
| `chem/contact_sheet.py` | Gate G6 review sheet |
| `chem/README.md` | Chemistry schema, gates, setup |

Deleted retention: `render-pdf.mjs` (unreferenced, missing `pdf-to-img`) and `unescape-latex.cjs` (migration finished).
