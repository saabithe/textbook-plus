# PIPELINE_ARABIC.md

> Kerala Board Class 12 Arabic — 12 chapters. RTL layout required, grammar + vocabulary + literary analysis.

---

## Subject Info

| Property | Value |
|----------|-------|
| Subject | Arabic |
| Slug | `arabic` |
| Chapters | 12 |
| Color | `--subject-arabic` (red) |
| Content type | Arabic literature, grammar, vocabulary, poetry, essays (RTL) |
| Practice types | MCQs, grammar exercises, vocabulary, flashcards |
| **RTL** | **Yes — full right-to-left layout support** |

---

## Chapter List

| # | Chapter | Slug | Type | Status |
|---|---------|------|------|--------|
| 1 | خَيْرُ الله | `khairullah` | Poem | 🔲 Pending |
| 2 | عَبْقَرِيٌّ مِنْ أَبْنَاءِ كِيرَلا | `abqariyyun-min-abna'i-kerala` | Essay | 🔲 Pending |
| 3 | كِيرَلا وَنِعَمُ اللهِ | `kerala-wa-ni'amullah` | Essay | 🔲 Pending |
| 4 | نَامُوا وَلا تَسْتَيْقِظُوا | `naamu-wa-la-tastaiqidhoo` | Poem | 🔲 Pending |
| 5 | شُرْطِيُّ المُرُورِ | `shurtiyyul-muroor` | Story | 🔲 Pending |
| 6 | كِيمْيَاءُ السَّعَادَةِ | `keemiyaus-saadah` | Essay | 🔲 Pending |
| 7 | لُغَةُ الضَّادِ | `lughatud-dhaad` | Essay | 🔲 Pending |
| 8 | لا تَلُمْنِي | `la-talumnee` | Poem | 🔲 Pending |
| 9 | لَآلِئُ لُغَوِيَّةٌ | `laaliu-lughawiyyah` | Essay | 🔲 Pending |
| 10 | هَلْ أَنْتِ وَحِيدَةٌ | `hal-anti-waheedah` | Poem | 🔲 Pending |
| 11 | لا تَقْتُلُوا أَنْفُسَكُمْ | `la-taqtuloo-anfusakum` | Essay | 🔲 Pending |
| 12 | وَصِيَّةٌ مِنَ الوَدُودِ | `wasiyyatun-minal-vadood` | Essay | 🔲 Pending |

---

## Pipeline Steps (Dynamic — 16 steps)

Arabic follows the **master 16-step pipeline** with subject-specific content rules, component suggestions, and practice ratios.

### Analysis Phase (Steps 1–7)

| Step | Name | Description | Input | Output |
|------|------|-------------|-------|--------|
| 1 | Input | Provide Kerala Board Arabic textbook PDF | PDF file | Source file |
| 2 | Extract | Complete exhaustive extraction → markdown | PDF | `{slug}-extracted.md` |
| 3 | Clean/Reformat | Tool + AI → clean markdown (ALL content preserved) | Extraction | Clean markdown |
| 4 | Verify | Automated comparison against PDF | Extraction + PDF | Gap-filled extraction |
| 5 | Structure | Reconstruct chapter hierarchy from extraction | Extraction | Topic tree |
| 6 | Decompose + Map | Break into knowledge units + source traceability | Extraction | Unit list + refs |
| 7 | Audit | Automated completeness check against extraction | Units + extraction | Gap report |

**Step 1 note:** PDF location: TBD — create folder in `Developer_Deliveries/Chapters/`

### Content Creation Phase (Steps 8–12)

| Step | Name | Description | Component Suggestions |
|------|------|-------------|----------------------|
| 8 | Understanding | Auto-generate foundation → bridge → content | Callout, KeyPoint, FactCard |
| 9 | Transform + Exam | Auto-suggest components, user approves | **Comparison**, **PerspectiveCard**, **Timeline**, Checklist, TableCard, MistakeCard |
| 10 | Learning | Auto-generate practice content | GuidedStepper, ConceptCard, FactCard |
| 11 | Revision | Generate 3 views (Full → Revision → Last-Minute) | Expandable, Checklist |
| 12 | Validate | Automated accuracy + completeness check | — |

#### RTL Validation (Sub-step under Step 12)

| Step | Name | Description |
|------|------|-------------|
| **12a** | **RTL Validate** | Verify all components render correctly in RTL context |

**Step 9 component suggestions:** Arabic chapters typically need Comparison (character analysis, grammar rule comparisons), PerspectiveCard (themes with multiple interpretations), Timeline (historical context), Checklist (grammar checklists), TableCard (vocabulary lists), MistakeCard (common grammar errors). AI suggests per chapter, user approves.

**Step 10 notes:** Include comprehension questions, literary device identification, grammar exercises, and vocabulary practice. Mix is AI-decided per chapter based on content.

### Output & Registration Phase (Steps 13–16)

| Step | Name | Description |
|------|------|-------------|
| 13 | Output | Create `page.tsx` + optional `questions.json`, `flashcards.json` |
| 14 | Verify Subject | Confirm `arabic` exists in `src/data/subjects.ts` |
| 15 | Register | Auto-register chapter + sections |
| 16 | Build | `npm run build` — 0 errors, chapter live |

---

## RTL Support Rules (Arabic-Specific)

### Text Direction
- All Arabic content must have `dir="rtl"` on the container
- Use CSS logical properties: `ms-start`, `ms-end`, `ps-`, `pe-` instead of `ml-`, `mr-`, `pl-`, `pr-`
- KaTeX formulas remain LTR even in RTL context

### Component RTL Audit

Every content component must be checked for RTL compatibility:

| Component | RTL Issue | Fix |
|-----------|----------|-----|
| FlowDiagram | Arrow direction | Flip arrows in RTL mode |
| ProcessCard | Step numbers | Keep numbers on right side |
| CycleDiagram | Loop direction | Flip cycle direction |
| Timeline | Event alignment | Events on right, timeline on left |
| Comparison | Side-by-side | Flip columns in RTL |
| TreeDiagram | Indentation | Indent from right |
| TableCard | Text alignment | Right-align text, left-align numbers |
| Expandable | Arrow icon | Flip chevron icon |
| All cards | Padding/margin | Use logical properties |

### CSS Implementation

Add to `globals.css`:
```css
[dir="rtl"] .flow-arrow { transform: scaleX(-1); }
[dir="rtl"] .cycle-direction { direction: rtl; }
[dir="rtl"] .tree-indent { margin-right: 1rem; margin-left: 0; }
[dir="rtl"] .timeline-events { text-align: right; }
```

### Layout Requirements
- Sidebar navigation: mirrored for RTL
- TOC (Table of Contents): right-aligned
- Progress bars: direction-aware
- Icons with directional meaning: flipped in RTL

---

## Arabic-Specific Content Rules

### Vocabulary
- Arabic word in Arabic script + transliteration + English meaning
- Use `FactCard` for vocabulary (front: Arabic, back: meaning + example)
- Use `TableCard` for vocabulary lists (word | meaning | example)

### Grammar
- Use `Comparison` for grammar rule comparisons (e.g., verb forms)
- Use `MistakeCard` for common grammar errors
- Use `Checklist` for grammar rule checklists
- Use `ConceptCard` for grammar categories

### Poetry
- Use `KeyPoint` for themes and imagery
- Use `PerspectiveCard` for multiple interpretations
- Use `Comparison` for contrasting stanzas
- Use `Timeline` for historical context

### Literary Analysis
- Same approach as English pipeline
- Additional: Compare Arabic literary devices with English equivalents where relevant

---

## Text Emphasis Rules

- **Bold** key terms on first use + final answers; *italics* for emphasis/contrast; `Highlight` component for exam-critical phrases only (max 1–2 per section)
- Never bold/italicize whole paragraphs — full spec: `CHAPTER_PIPELINE.md → Text Emphasis Rules`

---

## Practice Rules (Arabic)

Practice content is **dynamic** — AI decides per chapter, user approves.

### Questions (`questions.json`)
- **Format:** 4 options (MCQs) or open-ended (short answer, grammar)
- **Question types:** MCQs, comprehension, short answer, grammar exercises, vocabulary
- **Mix:** AI decides per chapter based on content type and complexity
- **Trigger:** AI suggests generating practice when content is substantial enough

### Flashcards (`flashcards.json`)
- **Front**: Arabic vocabulary / literary device / grammar rule
- **Back**: English meaning / example / explanation
- **Tags**: `vocabulary`, `literary-device`, `grammar`, `theme`, `character`

### Practice Generation
- AI suggests adding practice content after learning content is complete
- User approves whether to add practice for each chapter
- Not every chapter needs practice — only when it genuinely helps learning
- Keep file format (questions.json + flashcards.json) — migrate to Supabase when backend is activated
