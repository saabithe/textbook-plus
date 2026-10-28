# AGENTS.md

Next.js 16 interactive NCERT Class 12 companion. The app lives in `textbook-plus/` — **all commands run from there**, not the repo root.

## Commands (run from `textbook-plus/`)

```bash
npm run dev                              # dev server (port 3000), uses --webpack
npm run build                            # generate-sw + check-structures + next build --webpack
npm run lint                             # eslint
npm run typecheck                        # tsc --noEmit (fast, no build)
npm run verify:latex                     # KaTeX render check; after any math edit
npm run verify:presentation -- --chapter <slug>   # P1–P7 presentation linter
npm run verify:grammar                   # static checks over grammar topics
npm run verify:chem                      # structure lint (also runs in build)
npm run pdf:extract -- <pdf> <out.md>    # PDF text → raw Markdown (new chapters only)
npm run pdf:clean -- <in.md> <out.md>    # clean raw extraction (new chapters only)
npm run icons                            # regenerate PWA icons (icon.svg changed)
npm run chem:build -- --chapter <slug>   # regenerate chemistry SVGs from structures.json
npm run chem:sheet -- --chapter <slug>   # per-chapter contact sheet (user sign-off, G6)
```

Run only the check for what changed — full routing table in `textbook-plus/scripts/README.md`. While iterating, run `npm run typecheck` — not a full build or dev server. Build once at the end of a batch.

## Repo Layout

- `Constitution/` — PRD, USER_PREFERENCES (design decisions + component gallery specs)
- `Pipeline/` — content pipeline docs (PDF → live chapter); per-subject files
- `Developer_Deliveries/` — gitignored user assets (`Chapter names.md` is chapter-list source of truth; per-subject `Chapters/{NN_Subject}/{Textbooks,Extractions,Images,Structures}/`; see `Developer_Deliveries/README.md`)
- `Pending/`, `.opencode/plans/` — work-in-progress plans; resume when user says "continue plan_NNNN.md", then delete
- Next app: `textbook-plus/`

No `/admin` page. No barrel export (`src/components/content/index.ts`) — import each primitive by file path.

## Tech Stack Quirks

- Next.js 16 + React 19; `--webpack` required (Windows SWC workaround; Vercel/Linux also).
- Tailwind v4 with `@tailwindcss/postcss`; config lives in `globals.css` via `@theme inline` — no `tailwind.config.ts`.
- shadcn style `base-nova` uses `@base-ui/react`, not Radix.
- TypeScript strict, path alias `@/*` → `./src/*`.
- Fonts: `--font-sans` (Plus Jakarta Sans shell), `--font-content` (DM Sans prose). Arabic: `--font-arabic` (Noto Naskh Arabic, naskh/tashkeel; `.arabic-body`/`.arabic-font`), `--font-arabic-backup` (Scheherazade New), `--font-arabic-ui` (IBM Plex Sans Arabic; `.arabic-font-ui`). No Source Serif 4 / `--font-serif`.
- PWA: `manifest.ts`, `public/sw.js` generated at build.

## Content System (JSX, not MDX)

- Per chapter under `src/content/{subject-slug}/{chapter-slug}/`: `page.tsx` (default-export component), `questions.json`, `flashcards.json`, `chapter-text.md` (English reference text).
- Types in `src/types/chapter.ts`.
- Dynamic-import routers that must be updated when adding content: `src/app/chapter/[slug]/chapter-content.tsx`, `src/app/grammar/[topic]/grammar-content.tsx`, `src/app/discourses/[topic]/discourse-content.tsx`, `src/app/arabic/discourses/[topic]/arabic-discourse-content.tsx`.
- Practice data registry: `src/lib/content.ts` (`QUESTION_KEYS` + `questionLoaders`/`flashcardLoaders`). Practice availability is by registry key, not JSON existence. English and Arabic have no Practice tab / no Q&F files.

**Adding a chapter's content:**
1. Create `src/content/{subject}/{slug}/page.tsx`
2. Add `questions.json`/`flashcards.json` (skip English/Arabic)
3. Register dynamic import in the right router map
4. Add slug to `QUESTION_KEYS` + both loaders in `src/lib/content.ts` if practice data exists
5. Run `npm run verify:latex` + `npm run typecheck`

**LaTeX rule (critical):** single backslashes inside `String.raw` templates only — `latex={String.raw`\frac{a}{b}`}` and `<Formula>{String.raw`\sum x_i`}</Formula>`. Never double backslashes, never `latex="\frac..."`. Run `npm run verify:latex` after any math change.

**Imports:** direct file paths only (`@/components/content/Callout`, `@/components/content/data/TableCard`, `@/components/content/physics/WaveAnatomyDiagram`, `@/components/content/chemistry/MoleculeStructure`, `@/components/content/biology/...`).

Component categories (under `src/components/content/`): Core (top level), `data/`, `process/`, `concept/`, `study/`, `physics/`, `chemistry/`, `biology/`, plus English/Arabic top-level (`ChapterIntro`, `ArabicChapterCard`, `BilingualParagraph`, `ContentTabs`, `CollapsibleSection`, `SummaryLevels`, `ReadRespond`, etc.) and `OrgChart`, `TopicSwitch`, `PocketGrid`, `TopicIndex`.

**Do not reference** removed components: FlowDiagram, SortableTable, Kanban, NetworkDiagram, GuidedStepper, DecisionTree, RiskMatrix, ScenarioCard, PerspectiveCard, ArchitectureCard, IODiagram, EventFlow, RoadmapCard, plus the deleted Class 11 maths/conic/SHM/vector diagrams, `ScientistCard`, `Derivation`.

## Key Architecture

- Chapter pages single-column (no sidebar/ToC): `ChapterLayout` renders breadcrumb + header + content at `max-w-3xl`, with `ReadingProgress` and prev/next `ChapterNav`.
- Chapter tabs (non-English/Arabic): Learning (JSX) and Practice (questions + flashcards). English pages use Read / Discourses tabs inside the page via `ContentTabs`. Arabic has no Practice tab.
- Chapter opening: English pages open with `ChapterIntro` strip (`AUTHOR · Name · Genre` / `CHARACTERS …`); Arabic pages open with `ArabicChapterCard` (author/orator + genre + details behind collapsed "More"; details live on `Chapter.authorDetails` in `chapters.ts`).
- Arabic pages render under `prose-custom prose-ar`, `dir="rtl"`; body uses `.arabic-body`; English translations in `.translation`. `BilingualParagraph` renders Arabic paragraph + English translation (optional point number).
- Practice ships `questions.json`/`flashcards.json` for subject chapters that registered them; English/Arabic have none.
- Grammar: `src/content/grammar/{slug}/page.tsx` built on `GrammarTopicLayout` (Concept/Practice tabs, intro callout; `introExtra` for extra intro blocks). Sections use `GrammarSection` (`{ id, title?, children }`). Practice tab renders `GrammarQuiz`, which accepts `accepted?: string[]` for alternative fill-blank answers.
- Discourses merged (Oct 2026): 10 pages covering 29 writing formats; look-alike formats share a page toggled by `TopicSwitch` — a left/right pager (sticky tab strip + "2 of 4" counter, hover-revealed gutter buttons on desktop, ←/→ and Home/End keys, touch swipe, hash deep links, no wrap at the ends, scroll position kept, only the active pane rendered). Panes in `src/content/discourses/{page}/panes/`. Retired slugs 308-redirect in `next.config.ts` (see `redirects()`). The Arabic counterpart is `/arabic/discourses` (`src/content/arabic/discourses/{slug}/page.tsx`).
- Subject hubs: `src/components/subject/`. Discourses hub is a plain priority-ordered card grid (formats shown as chips) — no section labels/dividers.
- Search `Ctrl+K` (`src/components/search/SearchModal.tsx`). Dark mode via next-themes with flash-prevention in `layout.tsx`.

## Data Model

- 6 subjects (Physics 14, Chemistry 10, Mathematics 13, Biology 13, English 16, Arabic 14 = 80). Subject colors are CSS custom props `--subject-*` / `--subject-*-light` in `globals.css` (light + dark).
- Grammar has 13 topics (`group: "core" | "more"`; six core render above a labelled divider; a topic may carry an optional `tag` chip on the hub card, e.g. "Not clear yet"). Discourses: 10 pages / 29 formats.
- Chapter list source of truth: `Developer_Deliveries/Chapter names.md`.

## Content Preferences (must follow)

- **No Summary and no "Points to Ponder"** sections.
- **Worked examples render collapsed** as `Expandable` (not expanded `Example`) — every sample, no exceptions; `Example` only inside an already-collapsed `Expandable`.
- **Use `u` for initial velocity** (not `v_0`); components `u_x = u cosθ`, `u_y = u sinθ`.
- **Never cram multiple formulas into one line/item** — one formula per row, relate with short sentences.
- **Exercise/question banks (incl. PYQs) use `ExerciseQa` inside an Expandable** (numbered rows + emerald answer panel), not hand-rolled lists.
- **No repeat content** — don't re-state what is already covered; exception: genuinely new angle.
- **Prose that enumerates becomes a shape** (bullet list, `TableCard`/`Comparison`/`Stepper`); applies inside callouts too. Even when the user's note duplicates existing content, fold it into that block and upgrade its shape.
- **Capture ALL user-provided solution steps verbatim** — expand worked answers to full step-by-step (`Stepper` + highlighted final answer).
- **Diagrams**: schematic subjects → inline SVG React components (e.g. `WaveAnatomyDiagram`). Anatomical/biological/real-world subjects → real freely licensed image (Wikimedia Commons PD/CC0/CC BY/CC BY-SA only), saved to `public/images/{subject}/{chapter-slug}/`, captioned with source + licence. Never hand-draw a specimen.
- **Parallel notes in a pocket grid** (`PocketGrid`) — one pocket open at a time.
- **Textbook figures**: render a `TableCard` with `Figure` / `What it shows` rows carrying the **printed figure number** (8.1, 8.2, ...) plus a self-contained description (organism/shape, magnification, what the panel proves).
- **Emphasis**: `<Highlight>` (yellow) for definitions/laws/must-memorize results, max ~1–3 per section, never whole paragraphs. `<strong>` for key terms on first introduction. `KeyPoint`/`Callout` for laws/exam traps.
- **Fill-in template sections carry example cues**: muted italic `e.g. …` line under each `[...]` section.
- **Chapter-specific discourse writing stays in the chapter's own Discourses tab** (`DISCOURSES` array as `CollapsibleSection`s); shortcuts (e.g. "review = heading + intro + standard summary + humour + theme/title/opinion") are chapter-specific plans, not universal structures. Shared `/discourses/*` pages teach the form only.

## Images (user-supplied)

Copy into `textbook-plus/public/images/{subject}/{chapter-slug}/` under a **descriptive name**; then rename the original in the delivery folder by prefixing `consumed__` with that same name marker. Never delete originals; never reference the delivery folder URL in code.

## Chemistry Structures (never hand-drawn)

Generate from committed SMILES at authoring time. Inputs: `src/content/chemistry/{slug}/structures.json` (`smiles`, `formula`, `ncertName`, `source`). Output: `structures.generated.ts` (generated, committed, **never hand-edited**). Usage: `import { STRUCTURES } from "./structures.generated"; <MoleculeStructure {...STRUCTURES.key} caption="…" />`. Seven gates G1–G7; a structure that fails a gate is deleted, not patched. Accepted-but-not-automated: curly-arrow mechanisms, crystal lattices, chair/Newman conformations, orbital/CFT diagrams, multi-step flow schemes (hand-authored SVG). Run `npm run verify:chem` (also in build).

## Removed systems (do not reintroduce)

- **Auth / progress / cloud sync** (Supabase `AuthProvider`/`SyncProvider`/`MigrateBanner`, `useProgress`/`useSync`, `/progress`, `/login`, `/signup`, `/reset-password`, `/update-password`, `/account`, `/auth/*`, `src/middleware.ts`, `src/lib/supabase/`, `src/lib/recent.ts`, `supabase/`) — practice is session-only; nothing persists. Remote Supabase tables were left untouched.
- **Class 11 "Improvement Exam" catalog** (`/class-11/*`, `c11/*` keys, `src/content/maths/` + 14 physics chapters, `mafs`) — deleted Oct 2026.

## Git

Push whole batches, not individual tweaks. A batch = any coherent unit (section restructured, component added, structural change, finished chapter). If you can describe the change as one thing, it's a batch — commit + push it. The user calling it a batch overrides your judgment. Never end a session with a finished batch unpushed. Shorthand `p` = commit + push.

## Agent Workflow Rules

- **Todo list**: create a `todowrite` at the start of any multi-step task; mark `in_progress`/`completed`/`cancelled`; clear all when done.
- **Parallel batches**: when given >1 independent job, split into units and launch one background subagent per unit; never let two subagents edit the same file. Routes/registrations and final typecheck + build stay with you. Report the split used.

## References

- `Constitution/USER_PREFERENCES.md` §11 (content prefs), §12 (content-component design system + gallery), §13 (shell).
- `Constitution/CONTENT_PLAYBOOK.md` — ten laws + pre/post-flight checklists.
- `Pipeline/CHAPTER_PIPELINE.md` + `Pipeline/PIPELINE_{SUBJECT}.md`.
- Component gallery at `/dev/design` (`src/app/dev/design/page.tsx`).