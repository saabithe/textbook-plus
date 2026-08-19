# AGENTS.md

## Repo Structure

The Next.js app lives in `textbook-plus/`, **not** the repo root. Run all commands from `textbook-plus/`.

Root-level docs:
- `PRD.md` — full product spec, database schema, content pipeline, site map
- `USER_PREFERENCES.md` — design decisions (colors, layout, naming, typography)
- `CHAPTER_PIPELINE.md` — 17-step content pipeline (NCERT PDF → live chapter). Content format is JSX `page.tsx` files with custom React components.
- `Developer_Deliveries/` — user-provided assets and content (gitignored). Contains chapter name references, source images, Physics textbook PDFs in `Chapters/Physics Textbooks/`.
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
- **Font**: Plus Jakarta Sans via `next/font/google` → `--font-sans` CSS variable
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
```

**Custom content components** (in `src/components/content/`):
- `Callout` — highlighted callouts (types: `important`, `note`, `warning`, `didyouknow`)
- `Expandable` — collapsible sections
- `KeyPoint` — key insight cards
- `Example` — worked examples
- `Comparison` — side-by-side comparison tables
- `Formula` / `FormulaBlock` — KaTeX math rendering (client-side)

**Content registry** (`src/lib/content.ts`):
- `SECTIONS_MAP` — manually maintained section IDs + titles per chapter (for sidebar/ToC)
- `QUESTIONS_MAP` / `FLASHCARDS_MAP` — manually imported JSON data
- `hasQuestions()` / `hasFlashcards()` — check if chapter has practice data
- `hasChapterContent()` — checks if chapter has any content

**Content routing** (`src/app/chapter/[slug]/chapter-content.tsx`):
- Maps slug → dynamic `import()` of the chapter's `page.tsx`
- Only chapters with content are registered; others show "Content coming soon..."

**Adding content for a new chapter:**
1. Create `src/content/{subject-slug}/{chapter-slug}/page.tsx` (React component using content primitives)
2. Create `questions.json` and `flashcards.json` in the same directory
3. Add section IDs to `SECTIONS_MAP` in `src/lib/content.ts`
4. Import questions/flashcards in `src/lib/content.ts` and add to their maps
5. Register the chapter in `chapter-content.tsx` dynamic import map

## Data Model

- **6 subjects, 76 chapters** total (Physics 14, Chemistry 10, Mathematics 13, Biology 13, English 14, Arabic 12)
- Subject/chapter data hardcoded in `src/data/subjects.ts` and `src/data/chapters.ts`
- Subject colors: CSS custom properties (`--subject-{name}` / `--subject-{name}-light`) in `globals.css` `:root` and `.dark`
- Chapter data source of truth: `Developer_Deliveries/Chapter names.md`

**Currently only 2 chapters have full content** (Physics Ch1 + Ch2): `page.tsx`, `questions.json`, `flashcards.json`. All other 74 chapters show placeholder UI.

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

## Git Rules

- **Never auto-push.** Wait for explicit user approval before `git push`. Commits OK, push only when user says "push", "go", or approves.
