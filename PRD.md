# Product Requirements Document (PRD)

## NCERT Interactive Textbook Companion — Class 12

**Version**: 1.0
**Date**: August 2026
**Status**: Draft

---

## 1. Product Overview

### 1.1 Vision

Transform NCERT Class 12 textbooks into a single, self-contained interactive learning system — where a student can **learn, understand, practice, recall, and revise** an entire chapter without ever going back to the physical textbook.

### 1.2 Problem Statement

Current study workflow for Class 12 students:

- Read textbook → make handwritten notes → forget → re-read → solve back exercises → still unsure → find PYQs elsewhere → no systematic revision
- Fragmented across 5-6 different resources (textbook, notes book, sample papers, YouTube, apps)
- No progress tracking, no active recall, no structured revision

### 1.3 Solution

A web application that converts each NCERT chapter into an **interactive learning artifact** containing:

- Restructured chapter notes (concepts, explanations, diagrams, tables, formulas)
- Expandable deep-dive sections
- Built-in quiz system (NCERT + PYQs + Exemplars)
- Active recall flashcards with spaced repetition
- Progress tracking across all subjects and chapters

### 1.4 Key Principles

| Priority | Principle | Meaning |
|----------|-----------|---------|
| 1 | **Completeness** | Every concept, formula, diagram, and explanation from NCERT must be present |
| 2 | **Accuracy** | Content must faithfully represent NCERT — no hallucinated facts |
| 3 | **Understanding** | Explanations should build intuition, not just state facts |
| 4 | **Exam Relevance** | Prioritize board exam patterns, marking schemes, important questions |
| 5 | **Recall** | Active recall mechanisms (flashcards, self-testing) baked into every chapter |
| 6 | **Revision** | Quick revision views for last-minute prep |
| 7 | **UI/UX** | Clean, fast, distraction-free — studying should feel effortless |

### 1.5 What This Is NOT

- **Not an AI-powered tutor** — no chatbots, no AI-generated explanations, no GPT integration
- **Not a video platform** — text + diagrams + interactivity only
- **Not a social platform** — no leaderboards, no sharing, no community features
- **Not a replacement for NCERT** — it's a companion that makes NCERT actionable

---

## 2. Target Users

### 2.1 Primary User

**Class 12 student (CBSE board)** preparing for board exams.

- Age: 16-18
- Devices: Laptop (primary), tablet (secondary), phone (tertiary)
- Internet: Moderate (needs to work on slow connections)
- Study pattern: 2-4 hours daily self-study

### 2.2 User Goals

1. Read and understand a chapter without opening the textbook
2. Test understanding immediately after reading
3. Track what's been covered and what's pending
4. Revise quickly before exams using flashcards and key points
5. Practice exam-level questions with instant feedback

---

## 3. Scope

### 3.1 Subjects (Class 12 CBSE)

| Subject | Chapters | Est. Total Topics |
|---------|----------|-------------------|
| Physics | 14 | ~80 |
| Chemistry (Physical + Organic + Inorganic) | 16 | ~90 |
| Mathematics | 13 | ~70 |
| Biology | 16 | ~90 |
| English (Flamingo + Vistas) | 2 books, ~20 chapters | ~60 |
| Arabic | ~15 | ~60 |
| **Total** | **~94 chapters** | **~450 topics** |

### 3.2 In Scope (v1.0)

- [ ] Chapter reader with restructured NCERT content
- [ ] Expandable/collapsible sections for deep dives
- [ ] Diagram rendering (Mermaid.js + images)
- [ ] Formula rendering (KaTeX)
- [ ] Quiz system with MCQ questions
- [ ] Flashcard system with basic spaced repetition
- [ ] Progress tracking (per chapter, per topic)
- [ ] User authentication (email/password + Google OAuth)
- [ ] Cloud sync of progress across devices
- [ ] Responsive design (desktop + tablet + mobile)
- [ ] Revision mode (key points summary view)
- [ ] PDF-to-Markdown conversion pipeline

### 3.3 Out of Scope (v1.0)

- [ ] AI-powered features (tutor, explanations, generation)
- [ ] Video content embedding
- [ ] Handwriting/drawing input
- [ ] Multi-language support (English only for v1.0)
- [ ] Offline mode / PWA
- [ ] Parent/teacher dashboard
- [ ] Custom note-taking by students
- [ ] Social features (sharing, leaderboards)
- [ ] JEE/NEET specific content (may come in v2.0)
- [ ] Class 11 content

---

## 4. Information Architecture

### 4.1 Site Map

```
Landing Page (/)
├── Login / Signup (/login, /signup)
├── Dashboard (/dashboard)
│   ├── Subject Overview Cards
│   ├── Recent Activity
│   └── Quick Stats
├── Subject Page (/subjects/[subject])
│   ├── Chapter List (with progress indicators)
│   └── Subject Stats
├── Chapter Reader (/chapter/[slug])
│   ├── Table of Contents (sidebar)
│   ├── Chapter Content (expandable sections)
│   ├── Key Formulas Panel
│   └── Navigation (prev/next topic)
├── Quiz Mode (/quiz/[chapterSlug])
│   ├── Quiz Setup (difficulty, question count)
│   ├── Question Cards
│   └── Results + Review
├── Flashcards (/flashcards/[chapterSlug])
│   ├── Card Deck
│   ├── Flip Animation
│   └── Rating (Again/Hard/Good/Easy)
└── Progress (/progress)
    ├── Subject-wise Breakdown
    ├── Chapter-wise Progress
    ├── Quiz Score History
    └── Flashcard Mastery Stats
```

### 4.2 Content Hierarchy

```
Subject
  └── Chapter
        ├── Section (e.g., "1.1 Electric Charge")
        │     ├── Concept Block
        │     ├── Explanation Block
        │     ├── Diagram Block
        │     ├── Table Block
        │     ├── Formula Block
        │     ├── Example Block
        │     └── Key Point Block
        ├── Quiz (collection of questions)
        └── Flashcards (collection of cards)
```

---

## 5. Feature Specifications

### 5.1 Chapter Reader

**Purpose**: Primary interface for reading and understanding chapter content.

**Requirements**:

| ID | Requirement | Priority |
|----|-------------|----------|
| CR-01 | Display chapter content structured into sections/subsections matching NCERT flow | P0 |
| CR-02 | Sidebar table of contents with scroll-spy (highlights current section) | P0 |
| CR-03 | Expandable/collapsible sections for detailed explanations, derivations, examples | P0 |
| CR-04 | Render mathematical formulas using KaTeX | P0 |
| CR-05 | Render diagrams using Mermaid.js (flowcharts, processes, cycles) | P0 |
| CR-06 | Display image-based diagrams (circuit diagrams, biological structures, graphs) | P0 |
| CR-07 | Styled tables for comparisons, summaries, data | P0 |
| CR-08 | Callout boxes (Note, Important, Warning, Did You Know?) | P1 |
| CR-09 | "Key Formulas" floating panel / sidebar for quick reference | P1 |
| CR-10 | Prev/Next topic navigation within chapter | P0 |
| CR-11 | Reading progress indicator (how much of chapter is read) | P1 |
| CR-12 | Dark mode / Light mode toggle | P1 |
| CR-13 | Font size adjustment | P2 |
| CR-14 | Mark section as "read" manually | P1 |

**Content Types Within a Chapter**:

| Type | Description | Rendering |
|------|-------------|-----------|
| Concept | Core theory/explanation | Rich text with expandable details |
| Diagram | Visual representation | Mermaid.js or `<img>` with caption |
| Formula | Mathematical expression | KaTeX block |
| Table | Structured data/comparison | Styled HTML table |
| Example | Solved problem | Numbered box with step-by-step |
| Key Point | Important takeaway | Highlighted callout box |
| Process | Step-by-step procedure | Numbered list or flowchart |
| Comparison | Differentiating concepts | Side-by-side table or cards |

### 5.2 Quiz System

**Purpose**: Test understanding after reading each section/chapter.

**Requirements**:

| ID | Requirement | Priority |
|----|-------------|----------|
| QS-01 | MCQ questions (4 options, 1 correct) | P0 |
| QS-02 | Short answer questions (text input, keyword matching) | P2 |
| QS-03 | Instant feedback on each question (correct/wrong + explanation) | P0 |
| QS-04 | Score display at end of quiz | P0 |
| QS-05 | Filter questions by difficulty (Easy / Medium / Hard) | P1 |
| QS-06 | Filter questions by source (NCERT / PYQ / Exemplar) | P1 |
| QS-07 | Filter questions by topic within chapter | P1 |
| QS-08 | Quiz history per chapter (date, score, accuracy %) | P0 |
| QS-09 | Review mode — revisit wrong answers with explanations | P1 |
| QS-10 | Configurable question count (10 / 20 / 30 / All) | P1 |
| QS-11 | Shuffle question order | P1 |
| QS-12 | Show correct answer count after each question | P0 |
| QS-13 | Timer (optional, exam simulation) | P2 |

**Question Data Structure**:

```json
{
  "id": "string",
  "type": "mcq",
  "question": "string (supports markdown)",
  "options": ["string", "string", "string", "string"],
  "answer": 0,
  "explanation": "string (supports markdown)",
  "difficulty": "easy | medium | hard",
  "source": "ncert | pyq | exemplar",
  "topic": "topic-slug",
  "year": "2024 (for PYQs)",
  "marks": 1
}
```

### 5.3 Flashcard System

**Purpose**: Active recall and spaced repetition for long-term retention.

**Requirements**:

| ID | Requirement | Priority |
|----|-------------|----------|
| FS-01 | Flip animation (click/tap to reveal answer) | P0 |
| FS-02 | Card rating: Again / Hard / Good / Easy | P0 |
| FS-03 | Spaced repetition scheduling (SM-2 algorithm variant) | P0 |
| FS-04 | Show "new" cards first, then "due for review" | P0 |
| FS-05 | Mastery levels: New → Learning → Review → Mastered | P0 |
| FS-06 | Per-chapter flashcard deck | P0 |
| FS-07 | Deck stats: X mastered, Y learning, Z new | P1 |
| FS-08 | "Study All" mode across chapters | P2 |
| FS-09 | Keyboard shortcuts (Space = flip, 1-4 = rate) | P1 |
| FS-10 | Progress saved to cloud (Supabase) | P0 |

**Card Data Structure**:

```json
{
  "id": "string",
  "front": "string (markdown) — concept name, formula, or question",
  "back": "string (markdown) — definition, derivation, or answer",
  "topic": "topic-slug",
  "difficulty": "easy | medium | hard"
}
```

**Spaced Repetition Data**:

```json
{
  "card_id": "string",
  "user_id": "string",
  "ease_factor": 2.5,
  "interval_days": 0,
  "repetitions": 0,
  "next_review": "2026-08-20T00:00:00Z",
  "last_review": "2026-08-17T00:00:00Z"
}
```

### 5.4 Progress Tracking

**Purpose**: Visualize learning progress and motivate consistency.

**Requirements**:

| ID | Requirement | Priority |
|----|-------------|----------|
| PT-01 | Dashboard with subject-wise progress cards | P0 |
| PT-02 | Chapter-level progress (topics completed / total) | P0 |
| PT-03 | Topic-level completion toggle | P0 |
| PT-04 | Quiz score history per chapter (line chart) | P1 |
| PT-05 | Flashcard mastery distribution (pie/bar chart) | P1 |
| PT-06 | Overall stats: total topics mastered, quizzes taken, study streak | P1 |
| PT-07 | "Last studied" timestamp per chapter | P0 |
| PT-08 | Progress synced to cloud (Supabase) | P0 |
| PT-09 | Progress persists across devices | P0 |
| PT-10 | Estimated time to complete subject | P2 |

### 5.5 Authentication & User Management

| ID | Requirement | Priority |
|----|-------------|----------|
| AU-01 | Email/password registration | P0 |
| AU-02 | Email/password login | P0 |
| AU-03 | Google OAuth login | P1 |
| AU-04 | Password reset via email | P0 |
| AU-05 | Session persistence (stay logged in) | P0 |
| AU-06 | Logout | P0 |
| AU-07 | Delete account | P2 |

### 5.6 UI/UX Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| UX-01 | Responsive design (desktop ≥1024px, tablet ≥768px, mobile ≥375px) | P0 |
| UX-02 | Dark mode / Light mode (system preference + manual toggle) | P1 |
| UX-03 | Fast page loads (<2s on 3G) | P0 |
| UX-04 | Accessible (WCAG 2.1 AA) — keyboard nav, screen reader support | P1 |
| UX-05 | Clean typography — readable font sizes, proper line height | P0 |
| UX-06 | Consistent color coding per subject | P1 |
| UX-07 | Loading states (skeletons, not spinners) | P1 |
| UX-08 | Empty states (helpful messages when no data) | P1 |
| UX-09 | Error states (friendly error pages) | P1 |
| UX-10 | Smooth animations (expand/collapse, page transitions) | P2 |

---

## 6. Content Pipeline

### 6.1 PDF-to-Markdown Conversion

```
NCERT PDF (official textbook)
    ↓
Marker (Python CLI) — automated conversion
    ↓
Raw Markdown files
    ↓
Manual review & cleanup — fix formatting, tables, formulas
    ↓
Structured MDX files with frontmatter
    ↓
Quiz questions extracted/curated separately → JSON files
    ↓
Flashcards curated manually → JSON files
```

### 6.2 Content Authoring Standards

**MDX File Format**:

```mdx
---
title: "Chapter Title"
chapter: 1
subject: "physics"
order: 1
topics:
  - slug: "topic-slug"
    title: "Topic Title"
    description: "Brief description"
---

# Chapter Title

## 1.1 Topic Title

Content goes here...

<Expandable title="Deep Dive: ...">
Detailed explanation...
</Expandable>

<Callout type="important">
Key concept to remember...
</Callout>

<Formula>
E = mc²
</Formula>

<Diagram type="mermaid">
graph TD
    A --> B
</Diagram>

<KeyPoint>
Takeaway summary...
</KeyPoint>
```

**Naming Conventions**:

- Chapters: `{chapter-number}-{kebab-case-title}` (e.g., `01-electric-charges-and-fields`)
- Images: `{chapter-slug}-{descriptive-name}.{png|jpg|svg}`
- Questions: `questions.json` per chapter
- Flashcards: `flashcards.json` per chapter

### 6.3 Content Quality Checklist

Before publishing any chapter, verify:

- [ ] Every section from NCERT is covered (completeness)
- [ ] No factual errors (accuracy)
- [ ] Formulas are correctly formatted in KaTeX
- [ ] Diagrams are clear and properly captioned
- [ ] Tables are properly formatted
- [ ] At least 15 quiz questions per chapter (mix of difficulties)
- [ ] At least 20 flashcards per chapter
- [ ] All expandable sections work correctly
- [ ] Mobile responsive
- [ ] No broken links or images

---

## 7. Technical Architecture

### 7.1 Tech Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Framework | Next.js 15 (App Router) | React framework with SSR/SSG |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS | Utility-first CSS |
| Components | shadcn/ui | Accessible, customizable UI primitives |
| Content | MDX (@next/mdx) | Markdown + React components |
| Math | KaTeX (rehype-katex) | Mathematical formula rendering |
| Diagrams | Mermaid.js | Text-based diagram rendering |
| Auth | Supabase Auth | Email/password + OAuth |
| Database | Supabase (PostgreSQL) | Progress storage, user data |
| ORM | Supabase JS SDK | Database queries |
| Hosting | Vercel | Frontend deployment |
| PDF Conversion | Marker (Python) | Offline content pipeline |

### 7.2 System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT (Browser)                    │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│  │ Chapter  │  │  Quiz    │  │Flashcards│  │Progress│ │
│  │ Reader   │  │  Engine  │  │  System  │  │Dashboard│ │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └───┬────┘ │
│       │              │              │             │      │
│  ┌────┴──────────────┴──────────────┴─────────────┴──┐  │
│  │              React + Next.js App Router             │  │
│  └───────────────────────┬───────────────────────────┘  │
└──────────────────────────┼──────────────────────────────┘
                           │
              ┌────────────┴────────────┐
              │                         │
    ┌─────────┴──────────┐   ┌─────────┴──────────┐
    │   Vercel (CDN/Edge) │   │   Supabase Cloud   │
    │   - Static assets   │   │   - PostgreSQL DB   │
    │   - SSR/ISR pages   │   │   - Auth service    │
    │   - API routes      │   │   - Row Level Sec   │
    └─────────────────────┘   └─────────────────────┘
```

### 7.3 Data Flow

**Content Flow** (Build Time):
```
MDX files → Next.js build → Static/ISR pages → Vercel CDN
```

**User Data Flow** (Runtime):
```
User action → Client-side React state
           → Supabase client SDK
           → Supabase PostgreSQL (with RLS)
           → Synced across devices
```

### 7.4 Database Schema

```sql
-- Subjects
CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  icon TEXT,
  color TEXT,
  display_order INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Chapters
CREATE TABLE chapters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  chapter_number INT NOT NULL,
  total_topics INT NOT NULL DEFAULT 0,
  display_order INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- User Progress (per chapter)
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  chapter_id UUID NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  completed_topics TEXT[] DEFAULT '{}',
  quiz_attempts JSONB DEFAULT '[]',
  flashcard_data JSONB DEFAULT '{}',
  last_studied TIMESTAMPTZ,
  is_chapter_completed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, chapter_id)
);

-- RLS Policies
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress"
  ON user_progress FOR DELETE
  USING (auth.uid() = user_id);
```

### 7.5 Project Structure

```
ncert-companion/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   └── layout.tsx
│   ├── (main)/
│   │   ├── dashboard/page.tsx
│   │   ├── subjects/[subject]/page.tsx
│   │   ├── chapter/[slug]/page.tsx
│   │   ├── quiz/[chapterSlug]/page.tsx
│   │   ├── flashcards/[chapterSlug]/page.tsx
│   │   ├── progress/page.tsx
│   │   └── layout.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── mdx/
│   │   ├── Expandable.tsx
│   │   ├── Callout.tsx
│   │   ├── Diagram.tsx
│   │   ├── Formula.tsx
│   │   ├── KeyPoint.tsx
│   │   ├── Example.tsx
│   │   └── Comparison.tsx
│   ├── quiz/
│   │   ├── QuizSetup.tsx
│   │   ├── QuizCard.tsx
│   │   ├── QuizEngine.tsx
│   │   └── QuizResults.tsx
│   ├── flashcards/
│   │   ├── FlashcardDeck.tsx
│   │   ├── Flashcard.tsx
│   │   └── DeckStats.tsx
│   ├── progress/
│   │   ├── SubjectCard.tsx
│   │   ├── ChapterProgress.tsx
│   │   └── StatsOverview.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── MobileNav.tsx
│   └── ui/                    # shadcn/ui components
├── content/                   # MDX chapter content
│   ├── physics/
│   │   ├── 01-electric-charges-and-fields/
│   │   │   ├── page.mdx
│   │   │   ├── questions.json
│   │   │   └── flashcards.json
│   │   └── ...
│   ├── chemistry/
│   ├── mathematics/
│   ├── biology/
│   ├── english/
│   └── computerscience/
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── mdx.ts
│   ├── srs.ts                 # Spaced repetition algorithm
│   └── utils.ts
├── types/
│   ├── subject.ts
│   ├── quiz.ts
│   ├── flashcard.ts
│   └── progress.ts
├── scripts/
│   ├── convert-pdf.ts         # PDF→MD conversion
│   └── seed.ts                # Database seeding
├── public/
│   └── images/
├── supabase/
│   └── migrations/
├── mdx-components.tsx
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 8. Content Structure Per Chapter

Each chapter must contain:

### 8.1 Mandatory Content

| Component | Minimum Count | Notes |
|-----------|---------------|-------|
| Sections/subsections | Match NCERT structure | 1:1 mapping with textbook |
| Concepts explained | All from NCERT | With expandable deep dives |
| Diagrams | All from NCERT | Mermaid where possible, images for complex ones |
| Tables | All from NCERT | Properly formatted |
| Formulas | All from NCERT | KaTeX rendered |
| Examples | All NCERT solved examples | Step-by-step |
| Key Points | 5-10 per chapter | Highlighted takeaways |
| Quiz Questions | ≥15 per chapter | Easy: 5, Medium: 7, Hard: 3 (min) |
| Flashcards | ≥20 per chapter | Concepts + Formulas + Definitions |

### 8.2 Question Sources Distribution

| Source | % of Questions | Notes |
|--------|----------------|-------|
| NCERT Textbook | 40% | Back exercises, in-text questions |
| NCERT Exemplar | 25% | Higher-order thinking |
| Previous Year Questions | 25% | Last 10 years board exams |
| Curated Practice | 10% | Important additional questions |

### 8.3 Difficulty Distribution

| Difficulty | % of Questions | Board Exam Weight |
|------------|----------------|-------------------|
| Easy | 30% | 1-mark, 2-mark questions |
| Medium | 50% | 3-mark questions |
| Hard | 20% | 5-mark, HOTS questions |

---

## 9. Non-Functional Requirements

### 9.1 Performance

| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Time to Interactive (TTI) | < 3.0s |
| Lighthouse Performance Score | ≥ 90 |

### 9.2 Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigable (all interactive elements)
- Screen reader friendly (proper ARIA labels)
- Color contrast ratios met
- Focus indicators visible

### 9.3 Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

### 9.4 Security

- All user data isolated via Row Level Security (RLS)
- No secrets in client-side code
- HTTPS enforced
- Input sanitization on all user inputs
- CSRF protection via Supabase SDK

---

## 10. Success Metrics

### 10.1 Product Metrics

| Metric | Target (3 months post-launch) |
|--------|-------------------------------|
| Registered users | 500+ |
| Monthly active users | 200+ |
| Chapters completed (full) | 50+ |
| Avg. quiz score per chapter | ≥ 60% |
| Flashcards reviewed per session | ≥ 20 |
| Return rate (weekly) | ≥ 40% |

### 10.2 Content Metrics

| Metric | Target |
|--------|--------|
| Subjects covered | 6/6 |
| Chapters with content | ≥ 50% in first month |
| Avg. questions per chapter | ≥ 15 |
| Avg. flashcards per chapter | ≥ 20 |
| Content accuracy (NCERT match) | 100% |

---

## 11. Milestones & Timeline

### Phase 1: Foundation (Week 1)

- [ ] Initialize Next.js 15 project with TypeScript
- [ ] Set up Tailwind CSS + shadcn/ui
- [ ] Set up Supabase project (auth + database)
- [ ] Create database schema + RLS policies
- [ ] Implement auth (email/password + Google)
- [ ] Basic layout (navbar, sidebar, responsive shell)

### Phase 2: Content System (Week 2)

- [ ] MDX pipeline setup (@next/mdx + plugins)
- [ ] Custom MDX components (Expandable, Callout, Formula, Diagram, KeyPoint)
- [ ] Content directory structure
- [ ] PDF conversion script (Marker setup)
- [ ] Convert 1 pilot chapter (Physics Ch1)
- [ ] Chapter reader page

### Phase 3: Quiz System (Week 3)

- [ ] Quiz question data structure
- [ ] Quiz engine component (MCQ flow)
- [ ] Instant feedback + scoring
- [ ] Quiz setup page (difficulty, count filters)
- [ ] Results page + review wrong answers
- [ ] Seed 1 chapter's questions

### Phase 4: Flashcard System (Week 3-4)

- [ ] Flashcard component with flip animation
- [ ] SM-2 spaced repetition algorithm
- [ ] Deck view (new/review/mastered counts)
- [ ] Rating system (Again/Hard/Good/Easy)
- [ ] Save progress to Supabase
- [ ] Seed 1 chapter's flashcards

### Phase 5: Progress Tracking (Week 4)

- [ ] Dashboard with subject cards
- [ ] Chapter progress tracking
- [ ] Quiz score history
- [ ] Flashcard mastery stats
- [ ] Overall stats (topics mastered, streak)

### Phase 6: Content Scaling (Week 5-8)

- [ ] Convert all Physics chapters (14)
- [ ] Convert all Chemistry chapters (16)
- [ ] Convert all Mathematics chapters (13)
- [ ] Convert all Biology chapters (16)
- [ ] Curate quiz questions for all chapters
- [ ] Curate flashcards for all chapters

### Phase 7: Polish & Launch (Week 9-10)

- [ ] Dark mode / Light mode
- [ ] Responsive design audit
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Error handling + empty states
- [ ] Deploy to Vercel
- [ ] Beta testing

---

## 12. Open Questions

| # | Question | Decision Needed By |
|---|----------|-------------------|
| 1 | Should chapters be static (SSG) or ISR (revalidated)? | Build time |
| 2 | How to handle NCERT textbook edition changes? | Content team |
| 3 | Should we include NCERT solutions verbatim or restructured? | Content team |
| 4 | Priority order for subjects during content creation? | Product |
| 5 | Custom domain or Vercel subdomain for launch? | Product |

---

## 13. Appendix

### A. NCERT Class 12 Chapter List

**Physics (14 chapters)**:
1. Electric Charges and Fields
2. Electrostatic Potential and Capacitance
3. Current Electricity
4. Moving Charges and Magnetism
5. Magnetism and Matter
6. Electromagnetic Induction
7. Alternating Current
8. Electromagnetic Waves
9. Ray Optics and Optical Instruments
10. Wave Optics
11. Dual Nature of Radiation and Matter
12. Atoms
13. Nuclei
14. Semiconductor Electronics

**Chemistry (16 chapters)**:
1. The Solid State
2. Solutions
3. Electrochemistry
4. Chemical Kinetics
5. Surface Chemistry
6. General Principles and Processes of Isolation of Elements
7. The p-Block Elements
8. The d- and f-Block Elements
9. Coordination Compounds
10. Haloalkanes and Haloarenes
11. Alcohols, Phenols and Ethers
12. Aldehydes, Ketones and Carboxylic Acids
13. Amines
14. Biomolecules
15. Polymers
16. Chemistry in Everyday Life

**Mathematics (13 chapters)**:
1. Relations and Functions
2. Inverse Trigonometric Functions
3. Matrices
4. Determinants
5. Continuity and Differentiability
6. Application of Derivatives
7. Integrals
8. Application of Integrals
9. Differential Equations
10. Vector Algebra
11. Three Dimensional Geometry
12. Linear Programming
13. Probability

**Biology (16 chapters)**:
1. Reproduction in Organisms
2. Sexual Reproduction in Flowering Plants
3. Human Reproduction
4. Reproductive Health
5. Principles of Inheritance and Variation
6. Molecular Basis of Inheritance
7. Evolution
8. Human Health and Disease
9. Strategies for Enhancement in Food Production
10. Microbes in Human Welfare
11. Biotechnology: Principles and Processes
12. Biotechnology and Its Applications
13. Organisms and Populations
14. Ecosystem
15. Biodiversity and Conservation
16. Environmental Issues

**English**:
- Flamingo (Prose + Poetry): ~12 chapters
- Vistas (Supplementary Reader): ~8 chapters

**Arabic** (~15 chapters):
- To be populated based on NCERT/ CBSE Arabic curriculum

---

*This PRD is a living document. Updates should be tracked with version numbers and dates.*
