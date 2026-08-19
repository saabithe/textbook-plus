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

## Pipeline Steps (Dynamic — 14 steps)

Biology gets **14 steps** — classification hierarchies and biological cycles need special attention.

### Shared Steps (Steps 1–6)

Same as master pipeline: Input → Extract → Verify → Structure → Decompose → Map Source → Audit.

### Biology Content Steps (Steps 7–12)

| Step | Name | Description | Component Suggestions |
|------|------|-------------|----------------------|
| 7 | Understanding Layer | Foundation → bridge → content | Callout, KeyPoint, FactCard |
| 8 | Transform | Convert to interactive formats | **TreeDiagram**, **CycleDiagram**, **Timeline**, **ConceptCard** |
| 9 | Exam Layer | Definitions, processes, important concepts | **FormulaBlock** (equations), Example, Comparison |
| 10 | Learning Layer | Questions, recall, practice, mistakes | MistakeCard, GuidedStepper, TableCard |
| 11 | Revision Layer | Full → summary → one-page → last-minute | Expandable, Checklist, MetricCard |
| 12 | Validate | Completeness, accuracy, no hallucinations | — |

### Registration Steps (Steps 13–17)

Same as master pipeline: Output Files → Verify Subject → Register Chapter → Add Sections → Build & Verify.

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

## Component Priority (Biology)

| Priority | Components | Why |
|----------|-----------|-----|
| **Must-have** | TreeDiagram, CycleDiagram, ConceptCard | Every chapter has classifications + cycles |
| **High** | Timeline, ProcessCard, FlowDiagram | Evolution, sequences, mechanisms |
| **Medium** | Comparison, FactCard, TableCard | Terminology, comparisons, data |
| **Low** | Checklist, MistakeCard, MetricCard | Revision aids, error prevention |

---

## Example Chapter Reference

*No completed chapters yet. First chapter to be processed will serve as the reference.*

---

## Practice Rules (Biology)

### Questions (`questions.json`)
- **MCQs**: 4 options, 1 correct, explanation for each
- **Labeling questions**: Describe structure/function (no images in questions)
- **Process questions**: Describe steps in order
- Mix: 60% MCQs, 20% labeling, 20% short answer

### Flashcards (`flashcards.json`)
- **Front**: Term / process name / structure name
- **Back**: Definition / function / key characteristics
- **Tags**: `definition`, `process`, `structure`, `classification`, `function`

---

## Content Density Targets

| Content Type | Target per Section |
|-------------|-------------------|
| Classification trees | 1 per chapter (or per major group) |
| Cycle diagrams | 1 per biological cycle |
| Process flows | 1 per mechanism |
| Tables | 1 per comparison or data set |
| FactCards | 2–3 per section (key terms) |
| KeyPoints | 1 per section (core insight only) |
| Callouts | 1 per definition |
