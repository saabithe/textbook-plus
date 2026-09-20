# AGENTS.md

## Repo Structure

The Next.js app lives in `textbook-plus/`, **not** the repo root. Run all commands from `textbook-plus/`.

Root-level docs:
- `Constitution/PRD.md` — full product spec, database schema, content pipeline, site map
- `Constitution/USER_PREFERENCES.md` — design decisions; §11 content preferences, §12 content-component design system + gallery, §13 shell
- `Pipeline/CHAPTER_PIPELINE.md` + `Pipeline/PIPELINE_{SUBJECT}.md` — content pipeline (NCERT PDF → live chapter). Per-subject files are self-contained with dynamic steps and component suggestions.
- `PIPELINE_STATUS.md` — Class 11 Maths tracker. Manually maintained; **can drift from code** — trust registry keys in `src/lib/content.ts` and the router maps over its checkmarks.
- `Developer_Deliveries/` — user-provided assets (gitignored): `Chapter names.md` (chapter-list source of truth), `Class 11/Maths|Physics/` (PDFs `kemh1XX.pdf`, `keph1XX/keph2XX.pdf`), `Chapters/` (working folders + images).
- `Pending/` (`plan_NNNN.md`) and `.opencode/plans/` (`plan_00NN.md`) — saved work-in-progress plans. When the user says "continue plan_NNNN.md", resume and delete when done.
- `Archive/` — old copy of the app; ignore. `workspace/` — scratch.

**Two-folder convention** (preference): keep raw PDF inputs in `Chapters/{Subject} Textbooks/` (e.g. `Chapters/Physics Textbooks/` holds only `leph1XX.pdf`). Keep extraction outputs in a separate subject folder `Chapters/{Subject}/` (no "Textbooks"). Per `Pipeline/CHAPTER_PIPELINE.md`, extractions live at `Chapters/{Subject}/{slug}-extracted.md`; also `-raw.md`, `-clean.md`, `pdf-page-*.png`, and `{slug}-backup/` (practice-data JSON backups) go there. Never dump extraction files into the `Textbooks/` input folder.

## Commands

All run from `textbook-plus/`:

```bash
npm install          # install deps
npm run dev          # dev server (port 3000) — uses --webpack (Windows SWC fix)
npm run build        # production build — runs scripts/generate-sw.js then next build --webpack
npm run lint         # eslint
node scripts/verify-latex.cjs   # run after any content-math change: renders every formula through KaTeX, fails on error
```

**Note**: `dev` and `build` both use `--webpack` (Windows SWC binary workaround). Vercel/Linux also needs it.

No test framework. No typecheck script (TypeScript errors surface via `npm run build`).

**Scripts** (`textbook-plus/scripts/`): `extract-pdf.mjs` / `clean-extract.mjs` / `render-pdf.mjs` — PDF extraction pipeline (step 2 of CHAPTER_PIPELINE); `unescape-latex.cjs` — codemod rewriting doubled-backslash LaTeX into single-backslash `String.raw` (`node scripts/unescape-latex.cjs <page.tsx> [...]`); `generate-sw.js` / `generate-icons.js` — build-time PWA assets.

**Component gallery**: `/dev/design` (`src/app/dev/design/page.tsx`) renders every content component with sample data — preview component changes there before committing.

## Tech Stack

- **Next.js 16.3.1** (App Router, React 19)
- **Tailwind CSS v4** with `@tailwindcss/postcss` — no `tailwind.config.ts`; config in `globals.css` via `@theme inline`
- **shadcn/ui** — style `base-nova`, uses `@base-ui/react` (not Radix). Add via `npx shadcn@latest add <component>`
- **TypeScript strict** with `@/*` → `./src/*`
- **Fonts**: Plus Jakarta Sans for UI via `next/font/google` → `--font-sans`; notes content (`.prose-custom`) renders in **Source Serif 4** (`--font-serif`, 1.125rem / weight 500) — app shell stays Jakarta. Inline math uses `.prose-custom .formula-inline` (scroll-safe wrapper keeping KaTeX on the text baseline).
- **Lucide React** for icons; **KaTeX** for math (`katex`, imported via `@/components/content/Formula`); **Supabase** for auth + cloud sync (`@supabase/ssr`)

## Content System (JSX)

Content is stored as **TSX `page.tsx` files** with custom React components — not BlockNote JSON or MDX.

**Content files** per chapter:
```
src/content/{subject-slug}/{chapter-slug}/
  page.tsx           ← default-export React component (learning content)
  questions.json     ← Question[] ({type: "mcq"|"short", difficulty, question, options?, answer, explanation})
  flashcards.json    ← Flashcard[] ({id, front, back})
  chapter-text.md    ← English only: cleaned reference text (source of truth for authoring)
```
Types live in `src/types/chapter.ts`.

**English chapter-text.md**: cleaned, readable version of the textbook pages at `src/content/english/{slug}/chapter-text.md` — complete chapter text (story/poem/speech/play) + About the Author + Read and Respond questions. Single source of truth for authoring `page.tsx`. No OCR artifacts, interleaved activities, or supplementary readings.

**Custom content components** (`src/components/content/`, 65 files; canonical inventory in `Constitution/USER_PREFERENCES.md` §12):

*Core:* Callout, Example, KeyPoint, Comparison, Expandable, Formula (exports `Formula` + `FormulaBlock`), FormulaCard, ProblemSolution, SolvedProblem, ExerciseQa, SpeedTricks, Stepper, Highlight

*Data:* TableCard, Checklist

*Process:* ProcessCard, Timeline, CycleDiagram, EquationLadder, RevealAnswer, ProblemInsightSolutionCard, Derivation

*Concept:* FactCard, ConceptCard, ScientistCard, TreeDiagram

*Study:* MetricCard, MistakeCard

*English/Arabic:* AuthorCard, CharacterSketch, CharacterComparison, ContentTabs, CollapsibleSection, SummaryLevels, ReadRespond

*Physics:* SpectrumExplorer, SpectrumTable, OscillationPlayer, PropagationExplorer, AmpereSurfaceToggle, ChargeFateTrio, TransverseLongitudinal, FormulaAnatomy, SpeedLayers, FieldRatio, VectorFigures, ProjectileGraphs, KinematicsGraphs, DisplacementExplorer, WaveTypesPanels, WaveAnatomyDiagram, MoiDiagrams, RigidBodyMotions, GravityGGraph, UniversalLawExplorer, PeriodFrequencyExplorer, ShmDisplacementDiagram

*Maths:* NumberLine, FunctionGraph, VennDiagram, ArrowDiagram, UnitCircle, ArgandDiagram

*Conic:* ConicDiagrams

*Top-level:* OrgChart

**There is NO barrel export** — every import is a direct file path (`import { Callout } from "@/components/content/Callout"`). Do NOT reference components that don't exist: FlowDiagram, SortableTable, Kanban, NetworkDiagram, GuidedStepper, DecisionTree, RiskMatrix, ScenarioCard, PerspectiveCard, ArchitectureCard, IODiagram, EventFlow, RoadmapCard. There is no `decision/` or `system/` folder.

**CRITICAL — LaTeX authoring rule**: All LaTeX in content files MUST be written with **single** backslashes inside **`String.raw`** templates — `latex={String.raw`\frac{a}{b}`}` and `<Formula>{String.raw`\sum x_i`}</Formula>`. Never double backslashes: JSX attributes preserve backslashes literally (doubling breaks KaTeX), and plain `{"`...`"}` template literals strip them. Never write `latex="\frac..."`. Run `node scripts/verify-latex.cjs` after any content-math change.

**Practice-data registry** (`src/lib/content.ts`) — single source of truth for the Practice tab:
- `QUESTION_KEYS` (Set) + `questionLoaders` / `flashcardLoaders` (dynamic-import Records)
- Registry keys: bare slug for the main system (`magnetism-and-matter`), `c11/{subject}/{slug}` for Class 11 (`c11/maths/sets`)
- `hasQuestions(key)` / `hasFlashcards(key)` take the **registry key**, not the slug. `hasChapterContent(key)` derives from QUESTION_KEYS (practice data) and drives the content badges in `components/subject/Class11ChapterList`.
- **Known gaps (Sep 2026)**: `c11/maths/conic-sections` has content + JSON but no registry keys (Practice tab shows placeholder); `c11/maths/introduction-to-three-dimensional-geometry` has a flashcard loader but no question loader. Keep keys and loaders in sync when adding practice data.

**Content routing** — three dynamic-import maps, each wrapped in `<div className="prose-custom">`:
- `src/app/chapter/[slug]/chapter-content.tsx` — main system (Class 12): 4 physics + 16 english + 1 biology registered
- `src/app/class-11/[subject]/[slug]/class-11-chapter-content.tsx` — keys `"maths/{slug}"` / `"physics/{slug}"`; all 28 chapters registered
- `src/app/grammar/[topic]/grammar-content.tsx` and `src/app/discourses/[topic]/discourse-content.tsx`

Chapters not registered show "Content coming soon...".

**Adding content for a new chapter:**
1. Create `src/content/{subject}/{slug}/page.tsx` (default-export component using content primitives)
2. Create `questions.json` / `flashcards.json` (skip for English/Arabic — no Practice tab)
3. Register the dynamic import in the matching router map (chapter-content.tsx / class-11-chapter-content.tsx / grammar-content.tsx / discourse-content.tsx)
4. Add the registry key to `QUESTION_KEYS` + `questionLoaders` + `flashcardLoaders` in `src/lib/content.ts` (enables Practice tab + content badges)
5. Run `node scripts/verify-latex.cjs` and `npm run build`

## Data Model

- **Main system (Class 12 / Plus Two)**: `src/data/subjects.ts` (6 subjects) + `src/data/chapters.ts` (78 chapters: Physics 14, Chemistry 10, Mathematics 13, Biology 13, English 16, Arabic 12). Subject colors: CSS custom props `--subject-{name}` / `--subject-{name}-light` in `globals.css` `:root` and `.dark`. Chapter list source of truth: `Developer_Deliveries/Chapter names.md`.
- **Class 11 Improvement Exam**: separate catalog in `src/data/class11.ts` — 2 subjects (Mathematics 14, Physics 14), distinct routers, slugs, and registry keys.
- **Grammar / Discourses**: `src/data/grammar.ts` (6 topics) and `src/data/discourses.ts` (8 topics), routed at `/grammar/{topic}` and `/discourses/{topic}`.

**Chapters with content** (63 content pages + derivation sheet): Class 11 — all 14 Maths + 14 Physics; main — 4 Physics (electric-charges-and-fields, magnetism-and-matter, electromagnetic-induction, electromagnetic-waves), all 16 English, 1 Biology (molecular-basis-of-inheritance); Grammar all 6; Discourses all 8. Other chapters show placeholder UI. `PIPELINE_STATUS.md` tracks Class 11 Maths per-chapter (14/14 done).

## Class 11 Maths — CRITICAL: Distinguish from Class 12

**⚠ DO NOT CONFUSE the two systems.** They are completely separate catalogs with different chapter lists, routing, and data sources.

| | Class 11 Maths | Class 12 Maths |
|---|---|---|
| Data source | `src/data/class11.ts` | `src/data/chapters.ts` (`mathematics`) |
| Chapter count | 14 | 13 |
| PDFs | `Developer_Deliveries/Class 11/Maths/kemh101–kemh114.pdf` | None provided |
| Content dirs | `src/content/maths/{slug}/` | Same dirs (currently unused) |
| Router | `/class-11/maths/{slug}` → keys `"maths/{slug}"` | `/chapter/{slug}` → bare slug |
| Registry keys | `"c11/maths/{slug}"` in content.ts | Bare slug in content.ts |

Class 11 chapters map 1:1 to `kemh1XX.pdf` by chapter number (no ch4/ch5 mismatch). Class 12 chapters (Relations and Functions, Inverse Trigonometric Functions, Matrices, Determinants, Continuity and Differentiability, Application of Derivatives, Integrals, Application of Integrals, Differential Equations, Vector Algebra, Three Dimensional Geometry, Linear Programming, Probability) have **no PDFs and no content yet** — never treat them as Class 11 work.

**If the user asks to process "maths chapters", always clarify whether they mean Class 11 or Class 12.** Available PDFs are Class 11 only.

## Supabase (Auth + Cloud Sync)

- **Auth**: Anonymous sign-in on first visit. Email/password signup, login, password reset.
- **Cloud progress**: Progress synced to Supabase PostgreSQL; localStorage (`progress:{subject}`, `practice:{subject}`) is the offline fallback. Writes queue offline and flush on reconnect (`SyncProvider`).
- **Middleware**: `src/middleware.ts` refreshes Supabase sessions on every request (also `src/lib/supabase/middleware.ts`).
- **Env vars** (in `textbook-plus/.env.local`, gitignored): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — real values configured.
- **Auth pages**: `/login`, `/signup`, `/reset-password`, `/update-password`, `/account`, `/auth/callback`, `/auth/auth-code-error`
- **Providers**: `AuthProvider` (auth state) → `SyncProvider` (cloud sync) → `MigrateBanner` (anonymous→account prompt). `useProgress` (`src/hooks/useProgress.ts`) reads cloud-first, falls back to localStorage.

## Key Architecture

- Chapter pages are **single-column — no sidebar/ToC**: `ChapterLayout` renders breadcrumb + header (number, title, mark-complete button) + content at `max-w-3xl`, with `ReadingProgress` on top and prev/next `ChapterNav` cards at the bottom. Sections are plain headings inside each page.
- Chapter tabs (non-English/Arabic): **Learning** (JSX content) and **Practice** (questions + flashcards with sub-tabs). Practice availability comes from the `content.ts` registry keys, not the router or the JSON files' existence.
- English pages: **Read** / **Discourses** tabs rendered inside the page by `ContentTabs` (client-side state; dispatches a `content-tab-change` event with no listener left). No Practice tab for English/Arabic. Grammar and Discourses are separate top-level sections.
- Subject hubs in `src/components/subject/` (SubjectCard, SubjectHeaderStats, Class11ChapterList); progress dashboard `src/components/progress/ProgressDashboard` at `/progress` (navbar-linked); `src/lib/recent.ts` powers "Continue learning" (localStorage `recentChapters`, written from `ChapterLayout`).
- Search: `Ctrl+K` via `src/components/search/SearchModal.tsx`. Dark mode via next-themes, flash-prevention script in `layout.tsx`.
- PWA: `manifest.ts`, `public/sw.js` (generated on build), icons, `_offline` page. Scrollbar hidden globally via CSS.
- **There is no `/admin` page** anymore.

## Design Conventions

- UI language: English only
- Cards use CSS custom property shadows/borders via inline `style` (see `SubjectCard.tsx`); `cn()` utility from `src/lib/utils.ts` (clsx + tailwind-merge)
- Pages align to `max-w-6xl` (matching navbar width); nav: Home `/`, Progress `/progress`, Search `Ctrl+K`
- Chapter content uses `.prose-custom` class for typography (defined in `globals.css`)

### Content Preferences (see `Constitution/USER_PREFERENCES.md` §11)
- **No Summary section** and **no "Points to Ponder" section** in chapters — do not add these.
- **Worked examples render as collapsed `Expandable`** blocks (not expanded `Example` blocks).
- Avoid re-stating in one section content already covered elsewhere in the chapter (e.g. removing an aggregate recap/table when the same points are covered in-topic).
- **Capture ALL user-provided solution steps verbatim.** When the user shares step-by-step notes/solutions, reproduce every step they give — never collapse, condense, or drop intermediate steps. Expand worked answers into full step-by-step (e.g. `Stepper` + final highlighted answer) matching the user's supplied derivation, even if a shorter version already exists.

### Content Authoring Conventions (user mandates — apply to ALL chapters, ALL subjects)
- **Deliberate presentation, never dumping.** Sit and think about every piece of extracted content before placing it: pick the best vehicle per piece — a box (`Callout`/`KeyPoint`/`FactCard`), a `TableCard`/`Comparison` for groups of facts, a `Stepper`/diagram for processes, a custom component when the same presentation will recur. Text walls and straight list-dumps of textbook text are rejected. Reuse existing components first; create a new component only when justified.
- **Use `u` for initial velocity**, not `v_0`/`v0`/`v₀` (and `uₓ = u cosθ`, `u_y = u sinθ` for components). Mandatory in all physics content. (Exception: NCERT problem statements that ship with a named initial velocity may keep their symbol only when the whole problem set demands it.)
- **Never cram multiple formulas into one line or list item.** Give each formula its own row (`<li>` or `TableCard` row), then relate them with short sentences. "Period/frequency: T=1/ν, ω=2πν, v=…" style one-liners are forbidden.
- **Exercise/Question banks (incl. PYQs) use the `ExerciseQa` component** inside an `Expandable` — numbered rows with an emerald answer panel, not hand-rolled `<ol>`/answer paragraphs. This styling is chapter-agnostic and must be used everywhere.
- **No repeat content.** Don't re-state in one place what is already covered in the chapter (recap boxes, duplicate facts, re-derived formulas) unless it is a genuinely new angle.
- **Diagrams on demand.** Whenever a question/situation demands a visual (e.g. "shown in the figure" PYQs, types of vectors, projectile paths), create an inline SVG diagram component (like `VectorFigures.tsx`) rather than describing shapes in words.
- **Emphasis convention.** `<Highlight>` (yellow default) for definitions, laws, must-memorize results — max ~1–3 per section, never whole paragraphs. `<strong>` (bold) for key terms on first introduction. `KeyPoint`/`Callout` for laws and exam traps (already the pattern). Applies to all chapters, all subjects.

## Todo Rule

When starting any multi-step task:
1. Create a `todowrite` list at the start
2. Mark each task `in_progress` as you begin it, then `completed` when done
3. Mark tasks `cancelled` if they become unnecessary
4. **Clear all todos** (all `completed`/`cancelled`) once the entire job is finished — the list should be empty when work is done

This is mandatory — never leave stale todos behind.

## Git Rules

- **Always push.** Commit and push after every change by default (user policy change, 11 Sep 2026).
- **Shorthand**: `p` means commit + push.