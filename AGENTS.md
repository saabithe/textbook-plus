# AGENTS.md

## Repo Structure

The Next.js app lives in `textbook-plus/`, **not** the repo root. Run all commands from `textbook-plus/`.

Root-level docs:
- `PRD.md` — full product spec, database schema, content pipeline, site map
- `USER_PREFERENCES.md` — design decisions (colors, layout, naming, typography)
- `Developer_Deliveries/` — chapter name references

## Commands

All run from `textbook-plus/`:

```bash
npm install          # install deps
npm run dev          # dev server (port 3000) — requires --webpack flag (see below)
npm run build        # production build
npm run lint         # eslint (next core-web-vitals + typescript)
```

**Critical**: `dev` and `build` scripts use `--webpack` flag. If you recreate package.json scripts, preserve this flag.

No test framework is configured. No typecheck script exists (TypeScript errors surface via `npm run build`).

## Tech Stack

- **Next.js 16.3.1** (App Router, React 19) — not Next 15; the PRD is aspirational, the actual version is 16
- **Tailwind CSS v4** with `@tailwindcss/postcss` — no `tailwind.config.ts` file; config is in `globals.css` via `@theme inline`
- **shadcn/ui** — style `base-nova`, uses `@base-ui/react` (not Radix). Add components via `npx shadcn@latest add <component>`
- **TypeScript strict mode** with `@/*` path alias → `./src/*`
- **Font**: Plus Jakarta Sans loaded via `next/font/google`, stored as `--font-sans` CSS variable
- **Lucide React** for icons

## Key Architecture Decisions

- Subject and chapter data is **hardcoded** in `src/data/subjects.ts` and `src/data/chapters.ts` — no database yet
- Subject colors are CSS custom properties (`--subject-{name}` and `--subject-{name}-light`) defined in `globals.css` `:root` and `.dark` blocks
- No Supabase, auth, MDX pipeline, or content directory exists yet — PRD describes the full vision but only the homepage and subject list pages are built
- Components follow the shadcn pattern: placed in `src/components/{category}/`

## Content & Data Model

6 subjects, 94 chapters total. When adding chapters or subjects:
1. Update `src/data/subjects.ts` (array + `getSubjectBySlug` helper)
2. Update `src/data/chapters.ts` (add to the `chapters` record)
3. Subject colors: add CSS vars in both `:root` and `.dark` in `globals.css`

## Design Conventions

- UI language: English only
- Cards use CSS custom property shadows/borders via inline `style` (see `SubjectCard.tsx` for the pattern)
- The `cn()` utility from `src/lib/utils.ts` merges Tailwind classes (clsx + tailwind-merge)
- Light mode is the default; dark mode CSS vars are defined but theme toggle is not wired up yet
- Nav links: Home `/`, Progress `/progress`
