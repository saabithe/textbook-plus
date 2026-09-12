# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo Structure

The Next.js app lives in `textbook-plus/`, **not** the repo root. Run all commands from `textbook-plus/`.

Root-level docs:
- `Constitution/PRD.md` — full product spec, database schema, content pipeline, site map
- `Constitution/USER_PREFERENCES.md` — design decisions (colors, layout, naming, typography)
- `CHAPTER_PIPELINE.md` — 17-step content pipeline (NCERT PDF → live chapter). Content format is JSX `page.tsx` files with custom React components.
- `Pipeline/PIPELINE_{SUBJECT}.md` — per-subject pipelines with dynamic steps, component suggestions, and subject-specific rules. Each file is self-contained.
- `Developer_Deliveries/` — user-provided assets and content (gitignored). Contains chapter name references, source images, and textbook PDFs.
  - **Two-folder convention** (preference): keep **raw PDF inputs** in `Chapters/{Subject} Textbooks/` (e.g. `Chapters/Physics Textbooks/` holds only `leph1XX.pdf`). Keep **extraction work outputs** in a separate subject working folder `Chapters/{Subject}/` (no "Textbooks"), matching `Chapters/Mathematics/`. Per `Pipeline/CHAPTER_PIPELINE.md`, extractions live at `Chapters/{Subject}/{chapter-slug}-extracted.md`; also `-raw.md`, `-prerequisites.md`, `pdf-page-*.png`, and `{chapter-slug}-backup/` (practice-data JSON backups) go there. Never dump extraction files into the `Textbooks/` input folder.
- `Pending/` — saved work-in-progress plans for future sessions. Files follow `plan_NNNN.md`. When user says "continue plan_NNNN.md", resume and delete when done.

## Commands

All run from `textbook-plus/`:

```bash
npm install          # install deps
npm run dev          # dev server (port 3000) — uses --webpack (Windows SWC fix)
npm run build        # production build — runs generate-sw.js then next build --webpack
npm run lint         # eslint (next core-web-vitals + typescript)
```

**Note**: `dev` and `build` both use `--webpack` flag (Windows SWC binary workaround). Vercel/Linux also needs it.

No test framework. No typecheck script (TypeScript errors surface via `npm run build`).

## Tech Stack

- **Next.js 16.3.1** (App Router, React 19)
- **Tailwind CSS v4** with `@tailwindcss/postcss` — no `tailwind.config.ts`; config in `globals.css` via `@theme inline`
- **shadcn/ui** — style `base-nova`, uses `@base-ui/react` (not Radix). Add via `npx shadcn@latest add <component>`
- **TypeScript strict** with `@/*` → `./src/*`
- **Font**: Plus Jakarta Sans for UI via `next/font/google` → `--font-sans` CSS variable; **notes content** (`.prose-custom`) renders in **Caveat** (handwriting, `--font-hand` from `next/font/google`, `font-family: var(--font-hand), cursive`, 1.2rem / weight 500) — home page / app shell stays Jakarta. Code blocks stay monospace. Inline math uses `.prose-custom .formula-inline` (scroll-safe wrapper that keeps KaTeX on the text baseline).
- **Lucide React** for icons
- **KaTeX** for math rendering (`katex` package, imported via `@/components/content/Formula`)
- **Supabase** for auth + cloud progress sync (`@supabase/ssr`)

## Content System (JSX)

Content is stored as **TSX `page.tsx` files** with custom React components, not BlockNote JSON or MDX.

**Content files** per chapter:
```
src/content/{subject-slug}/{chapter-slug}/
  page.tsx           ← React component (learning content)
  questions.json     ← Question[] (MCQ + short answer)
  flashcards.json    ← Flashcard[] (flip cards)
  chapter-text.md    ← Reference text (source of truth for content authoring)
```

**English chapter-text.md**: Cleaned, readable version of the textbook pages. Located at `src/content/english/{slug}/chapter-text.md`. Contains the complete chapter text (story/poem/speech/play) + About the Author + Read and Respond questions. This is the single source of truth for authoring `page.tsx` content. No OCR artifacts, no interleaved activities, no supplementary readings.

**Custom content components** (in `src/components/content/`):

*Core (9):* Callout, Example, KeyPoint, Comparison, Expandable, Formula/FormulaBlock, FormulaCard, ProblemSolution, Stepper

*Data (4):* TableCard, Checklist, SortableTable, Kanban

*Process (4):* ProcessCard, FlowDiagram, CycleDiagram, Timeline

*Concept (4):* FactCard, ConceptCard, TreeDiagram, NetworkDiagram

*Decision (4):* DecisionTree, RiskMatrix, ScenarioCard, PerspectiveCard

*Study (3):* MetricCard, MistakeCard, GuidedStepper

*System (4):* ArchitectureCard, IODiagram, EventFlow, RoadmapCard

*Subject-specific (not in barrel export):* AuthorCard (collapsible), CharacterSketch, CharacterComparison, ContentTabs, SummaryLevels, ReadRespond, Highlight, CollapsibleSection

**Barrel export** (`src/components/content/index.ts`) — exports all 30 transformation components. Subject-specific components are imported directly.

**Content registry** (`src/lib/content.ts`):
- `SECTIONS_MAP` — manually maintained section IDs + titles per chapter (for sidebar/ToC). Each section has an optional `tab?: "read" | "discourses"` property for sidebar filtering.
- `QUESTIONS_MAP` / `FLASHCARDS_MAP` — manually imported JSON data
- `hasQuestions()` / `hasFlashcards()` — check if chapter has practice data
- `hasChapterContent()` — checks if chapter has any content

**Content routing** (`src/app/chapter/[slug]/chapter-content.tsx`):
- Maps slug → dynamic `import()` of the chapter's `page.tsx`
- Only chapters with content are registered; others show "Content coming soon..."
- Content wrapped in `<div className="prose-custom">` for typography

**Adding content for a new chapter:**
1. Create `src/content/{subject-slug}/{chapter-slug}/page.tsx` (React component using content primitives)
2. Create `questions.json` and `flashcards.json` in the same directory
3. Add section IDs to `SECTIONS_MAP` in `src/lib/content.ts`
4. Import questions/flashcards in `src/lib/content.ts` and add to their maps
5. Register the chapter in `chapter-content.tsx` dynamic import map

**Transformation registry** (`src/lib/transformations.ts`):
- Maps 24 content types → components with `whenToUse` guidance
- `selectTransformation(contentTypes)` — auto-selects best component
- `getTransformationsFor(contentType)` — returns all matching components

## Data Model

- **6 subjects, 78 chapters** total (Physics 14, Chemistry 10, Mathematics 13, Biology 13, English 16, Arabic 12)
- Subject/chapter data hardcoded in `src/data/subjects.ts` and `src/data/chapters.ts`
- Subject colors: CSS custom properties (`--subject-{name}` / `--subject-{name}-light`) in `globals.css` `:root` and `.dark`
- Chapter data source of truth: `Developer_Deliveries/Chapter names.md`

**Currently 4 chapters have content:** Physics Ch1 + Ch2, English (Horegallu + Mending Wall). All other 74 chapters show placeholder UI.

## Supabase (Auth + Cloud Sync)

- **Auth**: Anonymous sign-in on first visit. Email/password signup, login, password reset.
- **Cloud progress**: Progress data synced to Supabase PostgreSQL. localStorage used as offline fallback.
- **Middleware**: `src/middleware.ts` refreshes Supabase sessions on every request.
- **Env vars** (in `.env.local`, gitignored):
  - `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anonymous/public key
- **Auth pages**: `/login`, `/signup`, `/reset-password`, `/account`, `/auth/callback`, `/auth/auth-code-error`
- **Providers**: `AuthProvider` (auth state) → `SyncProvider` (cloud sync) → `MigrateBanner` (anonymous→account prompt)
- **Offline handling**: Writes queued when offline, replayed on reconnect.

**Important**: Supabase env vars have placeholder values. Set real values in `.env.local` before testing auth/sync features.

## Key Architecture

- Chapter pages: two-column layout (sidebar + content) on desktop, sheet sidebar on mobile
- Sidebar: sticky, scrollable when sections overflow (`max-h-[calc(100vh-8rem)] overflow-y-auto`)
- Chapter tabs: **Learning** (JSX content) and **Practice** (questions + flashcards)
- Practice tab: real interactive UI when `hasQuestions(slug)` / `hasFlashcards(slug)` is true; placeholder otherwise
- English chapter tabs: **Read** (author, intro, summary, themes, key takeaway, read & respond) and **Discourses** (character sketches, poetic devices, appreciation, genre analysis). No Practice tab for English/Arabic.
- Sidebar is tab-aware: shows only sections matching the active Read/Discourses tab. Custom event `content-tab-change` communicates inner tab state to ChapterLayout.
- Admin page at `/admin` — lists chapters, shows which have content
- Search: `Ctrl+K` global search
- Dark mode: toggle persists via localStorage, flash-prevention script in `layout.tsx`
- PWA: manifest, service worker, favicon, icons configured
- Scrollbar hidden globally via CSS

## Design Conventions

- UI language: English only
- Cards use CSS custom property shadows/borders via inline `style` (see `SubjectCard.tsx`)
- `cn()` utility from `src/lib/utils.ts` (clsx + tailwind-merge)
- All pages align to `max-w-6xl` (matching navbar width)
- Nav: Home `/`, Progress `/progress`, Search `Ctrl+K`
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

## Todo Rule

When starting any multi-step task:
1. Create a `todowrite` list at the start
2. Mark each task `in_progress` as you begin it, then `completed` when done
3. Mark tasks `cancelled` if they become unnecessary
4. **Clear all todos** (all `completed`/`cancelled`) once the entire job is finished — the list should be empty when work is done

This is mandatory — never leave stale todos behind.

## Git Rules

- **Never auto-push.** Wait for explicit user approval before `git push`. Commits OK, push only when user says "push", "go", or approves.
- **Shorthand**: `p` means commit + push (user-approved).
