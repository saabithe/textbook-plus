# AGENTS.md

## Repo Structure

The Next.js app lives in `textbook-plus/`, **not** the repo root. Run all commands from `textbook-plus/`.

Root-level docs:
- `PRD.md` — full product spec, database schema, content pipeline, site map
- `USER_PREFERENCES.md` — design decisions (colors, layout, naming, typography)
- `Developer_Deliveries/` — user-provided assets and content (gitignored). Contains chapter name references, source images (e.g., app logo SVG), and any files the user drops for the AI to integrate. When the user provides content here, cross-check where it belongs, compare with existing data, and integrate the best version.
- `Pending/` — saved work-in-progress plans for future sessions. Files follow the pattern `plan_NNNN.md` (e.g., `plan_0002.md`). When the user says "continue plan_NNNN.md", resume from that file and delete it when done. If work stops mid-task, save the plan here.

## Commands

All run from `textbook-plus/`:

```bash
npm install          # install deps
npm run dev          # dev server (port 3000) — uses --webpack (Windows SWC fix)
npm run build        # production build (uses --webpack)
npm run lint         # eslint (next core-web-vitals + typescript)
```

**Note**: `dev` and `build` both use `--webpack` flag (Windows SWC binary workaround). Vercel/Linux also needs it since Turbopack native bindings aren't available on all platforms.

No test framework is configured. No typecheck script exists (TypeScript errors surface via `npm run build`).

## Tech Stack

- **Next.js 16.3.1** (App Router, React 19) — not Next 15; the PRD is aspirational, the actual version is 16
- **Tailwind CSS v4** with `@tailwindcss/postcss` — no `tailwind.config.ts` file; config is in `globals.css` via `@theme inline`
- **shadcn/ui** — style `base-nova`, uses `@base-ui/react` (not Radix). Add components via `npx shadcn@latest add <component>`
- **TypeScript strict mode** with `@/*` path alias → `./src/*`
- **Font**: Plus Jakarta Sans loaded via `next/font/google`, stored as `--font-sans` CSS variable
- **Lucide React** for icons
- **MDX** with `@next/mdx`, `remark-math`, `rehype-katex` for KaTeX-rendered math formulas

## Key Architecture Decisions

- Subject and chapter data is **hardcoded** in `src/data/subjects.ts` and `src/data/chapters.ts` — no database yet
- Subject colors are CSS custom properties (`--subject-{name}` and `--subject-{name}-light`) defined in `globals.css` `:root` and `.dark` blocks
- Content lives in `src/content/{subject-slug}/{chapter-slug}/page.mdx` — MDX files with KaTeX math
- Content registry is `src/lib/content.ts` — maps slugs to MDX components and section headings
- Chapter pages have **Learning** and **Practice** tabs (Practice is placeholder UI for now)
- Components follow the shadcn pattern: placed in `src/components/{category}/`

## Content & Data Model

6 subjects, 75 chapters total. When adding chapters or subjects:
1. Update `src/data/subjects.ts` (array + `getSubjectBySlug` helper)
2. Update `src/data/chapters.ts` (add to the `chapters` record)
3. Subject colors: add CSS vars in both `:root` and `.dark` in `globals.css`

When adding MDX content:
1. Create `src/content/{subject-slug}/{chapter-slug}/page.mdx`
2. Add the MDX import to `src/lib/content.ts` (MDX_MAP + SECTIONS_MAP)
3. The chapter page will automatically render MDX instead of "Content coming soon"

## Design Conventions

- UI language: English only
- Cards use CSS custom property shadows/borders via inline `style` (see `SubjectCard.tsx` for the pattern)
- The `cn()` utility from `src/lib/utils.ts` merges Tailwind classes (clsx + tailwind-merge)
- Light mode is the default; dark mode toggle is wired up and persists via localStorage
- Nav links: Home `/`, Progress `/progress`, Search `Ctrl+K`
- Chapter pages: two-column layout (sidebar + content) on desktop, sheet sidebar on mobile
- Scrollbar is hidden globally via CSS
- All pages align to `max-w-6xl` (matching navbar width)

## Git Rules

- **Never auto-push.** Always wait for explicit user approval before pushing to GitHub. Commits can be made, but `git push` only when the user says "push", "go", or explicitly approves.
