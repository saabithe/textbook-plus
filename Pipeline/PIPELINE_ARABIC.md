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

## Pipeline Steps (Dynamic — 13 steps)

Arabic gets **13 steps** — same as English plus 1 extra RTL validation step.

### Shared Steps (Steps 1–6)

Same as master pipeline: Input → Extract → Verify → Structure → Decompose → Map Source → Audit.

### Arabic Content Steps (Steps 7–12)

| Step | Name | Description | Component Suggestions |
|------|------|-------------|----------------------|
| 7 | Understanding Layer | Foundation → bridge → content | Callout, KeyPoint, FactCard |
| 8 | Transform | Convert to interactive formats | **Comparison**, **PerspectiveCard**, **Timeline**, Checklist |
| 9 | Exam Layer | Literary devices, themes, grammar rules | **MistakeCard**, TableCard, MetricCard |
| 10 | Learning Layer | Questions, vocabulary, grammar | GuidedStepper, ConceptCard, FactCard |
| 11 | Revision Layer | Full → summary → one-page → last-minute | Expandable, Checklist |
| 12 | Validate | Completeness, accuracy, no hallucinations | — |

### RTL Validation Step (Step 12a)

| Step | Name | Description |
|------|------|-------------|
| **12a** | **RTL Validate** | Verify all components render correctly in RTL context |

### Registration Steps (Steps 13–17)

Same as master pipeline: Output Files → Verify Subject → Register Chapter → Add Sections → Build & Verify.

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

## Component Priority (Arabic)

| Priority | Components | Why |
|----------|-----------|-----|
| **Must-have** | Comparison, PerspectiveCard, FactCard | Every chapter has analysis + vocabulary |
| **High** | Timeline, TableCard, MistakeCard | Plot, grammar rules, errors |
| **Medium** | Checklist, ConceptCard, MetricCard | Grammar checks, devices, statistics |
| **Low** | GuidedStepper, Expandable, ProcessCard | Revision aids, analysis depth |

---

## Example Chapter Reference

*No completed chapters yet. First chapter to be processed will serve as the reference.*

---

## Practice Rules (Arabic)

### Questions (`questions.json`)
- **MCQs**: Comprehension, literary devices, grammar, vocabulary
- **Short answer**: Theme analysis, character questions
- **Grammar exercises**: Fill in blanks, correct errors
- Mix: 50% MCQs, 30% short answer, 20% grammar

### Flashcards (`flashcards.json`)
- **Front**: Arabic vocabulary / literary device / grammar rule
- **Back**: English meaning / example / explanation
- **Tags**: `vocabulary`, `literary-device`, `grammar`, `theme`, `character`

---

## Content Density Targets

| Content Type | Target per Section |
|-------------|-------------------|
| Vocabulary cards | 5–8 per section |
| Comparisons | 1 per section (characters, themes, grammar) |
| Perspectives | 1 per major theme |
| Timelines | 1 per narrative chapter |
| FactCards | 3–5 per section (vocabulary, terms) |
| KeyPoints | 1 per section (core insight only) |
| Callouts | 1 per key quote or definition |
