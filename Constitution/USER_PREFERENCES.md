# User Preferences & Decisions Log

This file tracks ALL user preferences, design decisions, and customization choices throughout the project. Nothing is lost here.

**Last Updated**: August 2026

---

## 1. General

| Preference | Value | Date |
|------------|-------|------|
| AI in app | NO — no AI features inside the app | Aug 2026 |
| Implementation style | Step-by-step, brick by brick, fully controlled | Aug 2026 |
| Speed preference | Quality over speed — slow is okay | Aug 2026 |
| Decision workflow | Agent asks before every change via clickable MCQ modals | Aug 2026 |
| Approval style | Controlled — ask, wait for user choice, then implement | Aug 2026 |
| Git push | Only after user approval — never auto-push | Aug 2026 |
| Stop mid-task | Auto-save to `Pending/[name]_NNNN.md` (0001, 0002, ...) — agent does this without asking | Aug 2026 |
| Continue task | User says "continue [name]_NNNN.md" — agent reads it and resumes. Delete file when done. | Aug 2026 |
| Pending folder | Gitignored — lives locally only, not on GitHub | Aug 2026 |
| Developer Deliveries | User provides assets/content here — gitignored | Aug 2026 |
| USER_PREFERENCES.md | All decisions stored here — nothing lost | Aug 2026 |
| Content source | NCERT textbooks (PDF → Markdown pipeline) | Aug 2026 |
| Todo management | Create todo at start, mark each task completed as done, clear all todos when entire job is finished | Aug 2026 |

## 2. Subjects

| # | Subject | Status |
|---|---------|--------|
| 1 | Physics | Confirmed |
| 2 | Chemistry | Confirmed |
| 3 | Mathematics | Confirmed |
| 4 | Biology | Confirmed |
| 5 | English | Confirmed |
| 6 | Arabic | Confirmed (replaced CS/IP) |

## 3. Home Page Design

| Preference | Value | Date |
|------------|-------|------|
| Layout | Card Grid (grid of subject cards) | Aug 2026 |
| Color Theme | Light Mode | Aug 2026 |
| Card Style | Color-coded (each subject has unique accent color) | Aug 2026 |
| Content | Subjects only (no stats, no recent activity yet) | Aug 2026 |

### 3.1 Subject Color Assignments

| Subject | Color | Hex | Status |
|---------|-------|-----|--------|
| Physics | Blue | #3B82F6 | Pending confirmation |
| Chemistry | Green | #22C55E | Pending confirmation |
| Mathematics | Orange | #F97316 | Pending confirmation |
| Biology | Emerald | #10B981 | Pending confirmation |
| English | Purple | #A855F7 | Pending confirmation |
| Arabic | Rose | #F43F5E | Pending confirmation |

### 3.2 Subject Icons

| Preference | Value | Date |
|------------|-------|------|
| Icon style | SVG Icons (Lucide library) | Aug 2026 |

### 3.3 Card Design

| Preference | Value | Date |
|------------|-------|------|
| Card content | Subject name + Icon + Chapter count only | Aug 2026 |
| Grid columns | 3 columns desktop, 2 tablet, 1 mobile | Aug 2026 |
| Hover effect | Combined: Lift + Shadow + Border Glow + Background Tint | Aug 2026 |
| Hover note | Should be smooth, not jarring — subtle and elegant | Aug 2026 |

## 4. Chapter Data Source

| Preference | Value | Date |
|------------|-------|------|
| Source of truth | `Developer_Deliveries/Chapter names.md` | Aug 2026 |

## 5. Chapter Page Design

| Preference | Value | Date |
|------------|-------|------|
| Chapter list layout | Vertical list view | Aug 2026 |
| Chapter card content | Number + Title + subtle topic count (small, faded) | Aug 2026 |
| Subject page header | Large heading with subject name + icon + color accent | Aug 2026 |

## 5. Quiz System

| Preference | Value | Date |
|------------|-------|------|
| — | — | — |

## 6. Flashcard System

| Preference | Value | Date |
|------------|-------|------|
| — | — | — |

## 7. Typography

| Preference | Value | Date |
|------------|-------|------|
| Font family | Plus Jakarta Sans (UI/app shell) · **Source Serif 4** (all `.prose-custom` notes content incl. headings; 1.125rem / weight 500) | Aug 2026 · Sep 2026 |

## 8. App Shell

| Preference | Value | Date |
|------------|-------|------|
| App name | Textbook++ | Aug 2026 |
| Navbar | App name (left) + Nav Links (center) + Theme Toggle (right) | Aug 2026 |
| Spacing | Spacious — lots of whitespace, airy feel | Aug 2026 |

## 9. Animations & Transitions

| Preference | Value | Date |
|------------|-------|------|
| — | — | — |

## 10. English Chapter Page Design

| Preference | Value | Date |
|------------|-------|------|
| Tab layout | Two tabs: **Read** and **Discourses** (no Practice tab for English/Arabic) | Aug 2026 |
| Default tab | Read (active on load) | Aug 2026 |
| Read tab content | Author → Introduction → Summary → **Themes** → **Key Takeaway** → **Read & Respond** | Aug 2026 |
| Discourses tab content | Character Sketches, Character Comparisons, Poetic Devices, Appreciation, genre-specific analysis | Aug 2026 |
| AuthorCard behavior | Collapsible — name always visible, bio hidden behind chevron. Collapsed by default. No chevron if no bio. | Aug 2026 |
| Sidebar behavior | Shows only sections for the active tab (Read or Discourses). Clicking a section scrolls to visible content. | Aug 2026 |
| No auto-creating content | Always ask user via question tool before adding new Discourses sections | Aug 2026 |

## 11. Chapter Content Preferences

| Preference | Value | Date |
|------------|-------|------|
| Summary section | **Do not include** a Summary section / "Summary" heading — **Science subjects only** (Physics/Chemistry/Biology/Maths). English/Arabic keep their Summary. | Aug 2026 |
| Points to Ponder | **Do not include** a "Points to Ponder" section — **Science subjects only**. English/Arabic keep if present in NCERT. | Aug 2026 |
| Worked examples | Rendering of worked Examples **and Problems** as **collapsed Expandable** blocks (not expanded `Example`/`ProblemSolution` blocks). `variant="example"` for Examples, `variant="exercise"` for Problems (`<Expandable><ProblemSolution.Problem/.Solution>` without outer wrapper). | Aug 2026 |
| Avoid repetition | Do not re-state in one section content already covered in another — e.g., skip duplicate PYQ comparison when `TableCard` already answers it; add a `Callout` pointing to the table. | Aug 2026 |
| Board PYQs | Board PYQ slides are an **optional** secondary source — render as optional `Board PYQs` section (collapsed Expandables grouped by theme) only when provided. | Aug 2026 |
| Capture user solution steps | **Capture ALL user-provided solution steps verbatim.** When the user shares step-by-step notes/solutions, reproduce every step they give — never collapse, condense, or drop intermediate steps. Expand worked answers into full step-by-step (e.g. `Stepper` + final highlighted answer) matching the user's supplied derivation, even if a shorter version already exists. | Sep 2026 |
| Deliberate presentation | **Never dump extracted text.** Deliberately decide the best vehicle for every piece of content: boxes (`Callout`/`KeyPoint`/`FactCard`), `TableCard`/`Comparison` for fact groups, `Stepper`/diagrams for processes, custom reusable components when a presentation recurs. Applies to all chapters and all subjects. | Sep 2026 |
| Initial velocity notation | **Always `u`** — never `v_0`/`v0`/`v₀` — plus `uₓ = u cosθ`, `u_y = u sinθ` for components. All physics content. | Sep 2026 |
| Formula layout | **One formula per row** (`<li>` or table row); never cram several formulas into a single line/list item. | Sep 2026 |
| Exercise/PYQ banks | Use the `ExerciseQa` component inside an `Expandable` for ALL question banks incl. PYQs — numbered rows + emerald answer panel, chapter-agnostic. | Sep 2026 |
| Diagrams on demand | Whenever a question/situation demands a visual (e.g. "shown in the figure" PYQs, types of vectors, projectile paths), create an inline SVG diagram component (like `VectorFigures.tsx`) rather than describing shapes in words. | Sep 2026 |
| Emphasis convention | `<Highlight>` (yellow default) for definitions, laws, must-memorize results — max ~1–3 per section, never whole paragraphs. `<strong>` (bold) for key terms on first introduction. `KeyPoint`/`Callout` for laws and exam traps. All chapters, all subjects. | Sep 2026 |

---

## 12. Content Component Design System (In-Page Apps)

**Established**: Sep 2026 · **Source**: Full UI/UX overhaul audit of 57 content components

All new and improved content components follow this design language. The new interactive physics components (SpectrumExplorer, OscillationPlayer, §8.3 set) are the reference standard.

### 12.1 Baseline Patterns

| Pattern | Class String | Notes |
|---------|-------------|-------|
| **Paper Card** (primary container) | `rounded-2xl border border-border/60 bg-card shadow-sm` | Subject-tinted: swap `border-border/60` for `border-{color}-500/20` |
| **Header Bar** (inside card) | `border-b border-border/40 bg-muted/30 px-4 py-2.5` | Subject-tinted: add `bg-{color}-500/[0.06]` |
| **Section Label** (uppercase tracker) | `text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground` | Subject-colored: swap for `text-{color}-600 dark:text-{color}-400` |
| **Card Title** (bold tight) | `text-sm font-extrabold tracking-tight text-foreground` | |
| **Sub-Info Card** | `rounded-xl border border-border/40 bg-card px-3.5 py-2.5` | |
| **Active Pill / Chip** | `rounded-xl border px-3 py-1.5 text-sm font-bold tracking-tight transition-colors` | Active: `border-{color}-500 bg-{color}-500 text-white shadow-sm shadow-{color}-500/30`; Inactive: `border-border/60 bg-muted/40 text-foreground/70 hover:bg-muted/60` |
| **Play / Pause Button** | `rounded-xl px-4 py-1.5 text-sm font-bold tracking-tight text-white shadow-sm` | Play: `bg-blue-600`; Pause: `bg-amber-500` |
| **Reset Button** | `rounded-xl border border-border/60 bg-muted/40 px-3 py-1.5 text-sm font-bold tracking-tight text-foreground/70` | |
| **Answer Panel** (emerald) | `rounded-2xl border border-emerald-300/60 bg-emerald-50/40 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20` | |
| **Question Number Badge** | `h-7 w-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-500 text-white text-[0.75rem] font-bold shadow-sm shadow-indigo-500/30` | |
| **Step Number Badge** | `h-7 w-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white text-xs font-extrabold shadow-md shadow-blue-500/30 ring-2 ring-blue-500/25` | Connector: `w-0.5 bg-gradient-to-b from-blue-500/30 to-blue-500/5` |
| **Decorative Top Bar** (1px accent) | `absolute inset-x-0 top-0 h-px bg-gradient-to-r from-{color}-500/40 via-{color}-500/20 to-transparent` | |
| **Icon Wrap** (gradient tile) | `h-7 w-7 rounded-xl bg-gradient-to-br from-{color}-500 to-{accent}-400 shadow-sm shadow-{color}-500/30` | Large: `h-8 w-8` |
| **Figure Shell** (diagram wrapper) | `rounded-xl border border-border/40 bg-card overflow-hidden` | Header: `bg-muted/20 px-4 py-2.5`; Caption: `text-xs text-muted-foreground text-center` |

### 12.2 Color & Token Rules

| Rule | Detail |
|------|--------|
| **Subject colors** | Always use `--subject-*` CSS vars (defined in `globals.css`). Never inline hardcoded hex for subject accents in UI chrome. |
| **SVG accent hex** | Allowed for semantic vector colors (`#8b5cf6` violet, `#10b981` emerald, `#e11d48` rose) — these stay consistent across themes. |
| **Axis / label / structural lines** | Always `var(--foreground)`, `var(--muted-foreground)`, `var(--border)` — never hardcoded grey hex. |
| **Dark mode** | Every component must use Tailwind's `dark:` prefix or CSS var tokens. No hardcoded hex for structural UI elements. |
| **Border radius** | Content cards: `rounded-2xl`. Inner elements (pills, badges, sub-cards): `rounded-xl` or `rounded-lg`. Never `rounded-md`/`rounded-sm` for cards. |
| **Shadows** | `shadow-sm` on outer cards. `shadow-md` on active pills. Accent shadows: `shadow-{color}-500/30`. |

### 12.3 Typography Scale

| Role | Classes |
|------|---------|
| Section label | `text-xs font-extrabold uppercase tracking-[0.14em–0.22em]` |
| Card title | `text-sm font-extrabold tracking-tight text-foreground` |
| Sub-label / meta | `text-[0.62rem–0.7rem] font-extrabold uppercase tracking-widest text-muted-foreground` |
| Body text | `text-[0.95rem] leading-[1.7–1.75] text-foreground/85` |
| Small body / caption | `text-[0.8rem–0.85rem] leading-relaxed text-foreground/75–85` |
| Badge / chip | `text-[0.68rem–0.72rem] font-bold uppercase tracking-wider` |
| Hint / footnote | `text-[0.7rem–0.72rem] font-semibold text-muted-foreground` |

### 12.4 Mobile Rules

| Rule | Detail |
|------|--------|
| **Touch targets** | Every interactive element (buttons, chips, checkboxes, toggles) must be ≥ 40×40px. |
| **Hover → tap** | Any interaction triggered by `group-hover` or `:hover` must have a `:focus`/click alternative. |
| **Grids** | Every multi-column grid must include a responsive fallback (e.g. `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`). |
| **SVG diagrams** | Never use fixed `width` attributes without responsive wrappers. Use `viewBox` + `w-full` + `max-w-*`. |
| **Overflow** | Wide content (tables, diagrams) must use `overflow-x-auto` on the scroll container. Never `overflow-hidden` on content that may exceed viewport. |
| **Reduced motion** | `globals.css` already reduces all animations at `prefers-reduced-motion: reduce`. New components must respect this (no inline `<style>` keyframes without a `.anim-paused` mechanism). |

### 12.5 Component Classification (Sep 2026 Audit)

**57 real component files** (55 used, 1 dead). AGENTS.md's old barrel export / 30-component list is stale. The `decision/` and `system/` folders are empty. Here is the real inventory:

**Core (8):** Callout, KeyPoint, Example, Comparison, Expandable, Formula/FormulaBlock, FormulaCard, Stepper, Highlight, ProblemSolution, SolvedProblem, ExerciseQa, SpeedTricks

**Data (2):** TableCard, Checklist

**Process (6):** ProcessCard, Timeline, CycleDiagram, EquationLadder, RevealAnswer, ProblemInsightSolutionCard

**Concept (3):** FactCard, ConceptCard, ScientistCard

**Study (2):** MetricCard, MistakeCard

**English/Arabic (8):** AuthorCard, CharacterSketch, CharacterComparison, ContentTabs, CollapsibleSection, SummaryLevels, ReadRespond

**Physics (13):** SpectrumExplorer, SpectrumTable, OscillationPlayer, PropagationExplorer, AmpereSurfaceToggle, ChargeFateTrio, TransverseLongitudinal, FormulaAnatomy, SpeedLayers, FieldRatio, VectorFigures, ProjectileGraphs, KinematicsGraphs

**Maths (7):** NumberLine, FunctionGraph, VennDiagram, ArrowDiagram, UnitCircle, ArgandDiagram

**Conic (1):** ConicDiagrams

**Top-level diagram (1):** OrgChart

**Top-level concept (1):** TreeDiagram

*This file is append-only. Previous decisions are never deleted, only updated with new values when explicitly changed by the user.*
