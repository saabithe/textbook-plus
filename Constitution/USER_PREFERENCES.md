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
| Font family | Plus Jakarta Sans | Aug 2026 |

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
| Summary section | **Do not include** a Summary section / "Summary" heading in chapters | Aug 2026 |
| Points to Ponder | **Do not include** a "Points to Ponder" section in chapters | Aug 2026 |
| Worked examples | Rendering of worked Examples as **collapsed Expandable** blocks (not expanded `Example` blocks) | Aug 2026 |

---

*This file is append-only. Previous decisions are never deleted, only updated with new values when explicitly changed by the user.*
