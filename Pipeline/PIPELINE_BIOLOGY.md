# PIPELINE_BIOLOGY.md

> NCERT Class 12 Biology — 13 chapters. Classification-rich, cycle-heavy, diagram-dependent.

---

## Subject Info

| Property | Value |
|----------|-------|
| Subject | Biology |
| Slug | `biology` |
| Chapters | 13 |
| Color | `--subject-biology` (teal) |
| Content type | Classifications, cycles, processes, terminology, diagrams |
| Practice types | MCQs, labeling exercises, flashcards |

---

## Chapter List

| # | Chapter | Slug | Status |
|---|---------|------|--------|
| 1 | Sexual Reproduction in Flowering Plants | `sexual-reproduction-in-flowering-plants` | 🔲 Pending |
| 2 | Human Reproduction | `human-reproduction` | 🔲 Pending |
| 3 | Reproductive Health | `reproductive-health` | 🔲 Pending |
| 4 | Principles of Inheritance and Variation | `principles-of-inheritance-and-variation` | 🔲 Pending |
| 5 | Molecular Basis of Inheritance | `molecular-basis-of-inheritance` | 🔲 Pending |
| 6 | Evolution | `evolution` | 🔲 Pending |
| 7 | Human Health and Diseases | `human-health-and-diseases` | 🔲 Pending |
| 8 | Microbes in Human Welfare | `microbes-in-human-welfare` | 🔲 Pending |
| 9 | Biotechnology: Principles and Processes | `biotechnology-principles-and-processes` | 🔲 Pending |
| 10 | Biotechnology and its Applications | `biotechnology-and-its-applications` | 🔲 Pending |
| 11 | Organisms and Populations | `organisms-and-populations` | 🔲 Pending |
| 12 | Ecosystem | `ecosystem` | 🔲 Pending |
| 13 | Biodiversity and Conservation | `biodiversity-and-conservation` | 🔲 Pending |

---

## Pipeline Steps (Dynamic — 16 steps)

Biology follows the **master 16-step pipeline** with subject-specific content rules, component suggestions, and practice ratios.

### Analysis Phase (Steps 1–7)

| Step | Name | Description | Input | Output |
|------|------|-------------|-------|--------|
| 1 | Input | Provide NCERT chapter PDF | PDF file | Source file |
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
| 9 | Transform + Exam | Auto-suggest components, user approves | **TreeDiagram**, **CycleDiagram**, **Timeline**, **ConceptCard**, ProcessCard, FlowDiagram |
| 10 | Learning | Auto-generate practice content | MistakeCard, GuidedStepper, TableCard |
| 11 | Revision | Generate 3 views (Full → Revision → Last-Minute) | Expandable, Checklist, MetricCard |
| 12 | Validate | Automated accuracy + completeness check | — |

**Step 9 component suggestions:** Biology chapters typically need TreeDiagram (biological classifications), CycleDiagram (biological cycles — menstrual, cardiac, Calvin, Krebs), Timeline (evolutionary timelines, developmental stages), ConceptCard (grouping organisms/processes/structures), ProcessCard (linear biological sequences), FlowDiagram (cause-effect chains). AI suggests per chapter, user approves.

**Step 10 notes:** Include labeling questions, process ordering, and commonly confused concept practice. Mix is AI-decided per chapter based on content.

### Output & Registration Phase (Steps 13–16)

| Step | Name | Description |
|------|------|-------------|
| 13 | Output | Create `page.tsx` + optional `questions.json`, `flashcards.json` |
| 14 | Verify Subject | Confirm `biology` exists in `src/data/subjects.ts` |
| 15 | Register | Auto-register chapter + sections |
| 16 | Build | `npm run build` — 0 errors, chapter live |

---

## Biology-Specific Rules

### Classification & Hierarchy
- Use `TreeDiagram` for biological classifications (e.g., taxonomic hierarchy)
- Use `ConceptCard` for grouping related organisms, processes, or structures
- Use `TableCard` for comparing species, traits, or processes
- Use `NetworkDiagram` for relationship maps (e.g., food chains, ecological relationships)

### Biological Cycles
- Use `CycleDiagram` for all recurring biological processes:
  - Menstrual cycle, cardiac cycle, Calvin cycle, Krebs cycle
  - Nitrogen cycle, carbon cycle, water cycle
- Use `ProcessCard` for linear biological sequences (e.g., DNA → mRNA → Protein)

### Processes & Mechanisms
- Use `FlowDiagram` for cause-effect chains (e.g., hormone cascades)
- Use `Timeline` for evolutionary timelines, developmental stages
- Use `Stepper` for sequential biological processes (e.g., cell division stages)

### Terminology
- Use `FactCard` for key definitions (one per card)
- Use `Comparison` for differentiating similar terms (e.g., mitosis vs meiosis)
- Use `MistakeCard` for commonly confused concepts

---

## Text Emphasis Rules

- **Bold** key terms on first use + final answers; *italics* for emphasis/contrast; `Highlight` component for exam-critical phrases only (max 1–2 per section)
- Never bold/italicize whole paragraphs — full spec: `CHAPTER_PIPELINE.md → Text Emphasis Rules`

---

## Practice Rules (Biology)

Practice content is **dynamic** — AI decides per chapter, user approves.

### Questions (`questions.json`)
- **Format:** 4 options, 1 correct, explanation for each option
- **Question types:** MCQs, labeling questions, process questions, short answer
- **Mix:** AI decides per chapter based on content type and complexity
- **Trigger:** AI suggests generating practice when content is substantial enough

### Flashcards (`flashcards.json`)
- **Front**: Term / process name / structure name
- **Back**: Definition / function / key characteristics
- **Tags**: `definition`, `process`, `structure`, `classification`, `function`

### Practice Generation
- AI suggests adding practice content after learning content is complete
- User approves whether to add practice for each chapter
- Not every chapter needs practice — only when it genuinely helps learning
- Keep file format (questions.json + flashcards.json) — migrate to Supabase when backend is activated
