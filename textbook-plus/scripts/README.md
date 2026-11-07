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
| New chapter from a PDF | `npm run pdf:extract -- <pdf> <out.md>` then `npm run pdf:clean -- <in.md> <out.md>` | raw / cleaned Markdown |
| `public/icon.svg` changed | `npm run icons` | PWA icon PNGs |
| End of a batch / before push | `npm run build` | production build + PWA |

`npm run build` order is fixed: `generate-sw` → `next build --webpack`.

## Do not run routinely

- Do not run the whole-corpus `verify:presentation`; use `--chapter <slug>` while editing.
- Do not run PDF extraction unless a new chapter is being imported.
- Do not add prose/grammar audits to `build`.

## Files

| File | Role |
| --- | --- |
| `verify-latex.cjs` | Renders every `String.raw` / `latex=` formula through KaTeX |
| `audit-presentation.cjs` | P1–P7 prose/table/figure/heading checks |
| `audit-grammar.cjs` | Grammar question ids, options, answers, stray characters |
| `generate-sw.js` | Rewrites `public/sw.js` cache + precache list (build) |
| `generate-icons.js` | Regenerates PWA icons from `public/icon.svg` |
| `extract-pdf.mjs` | PDF text → raw Markdown |
| `clean-extract.mjs` | Raw extraction → authorable Markdown |

Deleted retention: `render-pdf.mjs` (unreferenced, missing `pdf-to-img`) and `unescape-latex.cjs` (migration finished); chemistry structure generation tools removed.