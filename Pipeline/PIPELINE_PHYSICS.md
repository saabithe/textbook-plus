# PIPELINE_PHYSICS.md

> NCERT Class 12 Physics — 14 chapters. Formula-heavy, derivation-rich, numerically intensive.

---

## Subject Info

| Property | Value |
|----------|-------|
| Subject | Physics |
| Slug | `physics` |
| Chapters | 14 |
| Color | `--subject-physics` (blue) |
| Content type | Formulas, derivations, numericals, process flows |
| Practice types | MCQs, numerical problems, flashcards |

---

## Chapter List

| # | Chapter | Slug | Status |
|---|---------|------|--------|
| 1 | Electric Charges and Fields | `electric-charges-and-fields` | ✅ Content (6/13 sections) |
| 2 | Electrostatic Potential and Capacitance | `electrostatic-potential-and-capacitance` | 🔲 Pending |
| 3 | Current Electricity | `current-electricity` | 🔲 Pending |
| 4 | Moving Charges and Magnetism | `moving-charges-and-magnetism` | 🔲 Pending |
| 5 | Magnetism and Matter | `magnetism-and-matter` | 🔲 Pending |
| 6 | Electromagnetic Induction | `electromagnetic-induction` | 🔲 Pending |
| 7 | Alternating Current | `alternating-current` | 🔲 Pending |
| 8 | Electromagnetic Waves | `electromagnetic-waves` | 🔲 Pending |
| 9 | Ray Optics and Optical Instruments | `ray-optics-and-optical-instruments` | 🔲 Pending |
| 10 | Wave Optics | `wave-optics` | 🔲 Pending |
| 11 | Dual Nature of Radiation and Matter | `dual-nature-of-radiation-and-matter` | 🔲 Pending |
| 12 | Atoms | `atoms` | 🔲 Pending |
| 13 | Nuclei | `nuclei` | 🔲 Pending |
| 14 | Semiconductor Electronics | `semiconductor-electronics` | 🔲 Pending |

---

## Pipeline Steps (Dynamic — 17 steps)

Physics gets the **full 17-step pipeline** because of formula density and derivation complexity.

### Shared Steps (Steps 1–6)

| Step | Name | Description | Input | Output |
|------|------|-------------|-------|--------|
| 1 | Input | Provide NCERT chapter PDF | PDF file | Source file |
| 2 | Extract | Complete exhaustive extraction → markdown | PDF | `{slug}-extracted.md` |
| 2a | Verify | Compare extraction against PDF, fill gaps | Extraction + PDF | Gap-filled extraction |
| 3 | Structure | Reconstruct chapter hierarchy from extraction | Extraction | Topic tree |
| 4 | Decompose | Break into knowledge units | Extraction | Unit list |
| 5 | Map Source | Match each unit to extraction + line refs | Units + extraction | Source traceability |
| 6 | Audit | Completeness check against extraction | Units + extraction | Gap report |

### Physics Content Steps (Steps 7–12)

| Step | Name | Description | Component Suggestions |
|------|------|-------------|----------------------|
| 7 | Understanding Layer | Build foundation → bridge → content | Callout, KeyPoint, Expandable |
| 8 | Transform | Convert to interactive formats | **FormulaCard**, **ProcessCard**, **FlowDiagram**, Comparison, TableCard |
| 9 | Exam Layer | Definitions, formulas, PYQs, important concepts | **FormulaBlock** (important), Example, MetricCard |
| 10 | Learning Layer | Questions, recall, practice, mistakes | ProblemSolution, **MistakeCard**, GuidedStepper |
| 11 | Revision Layer | Full → summary → one-page → last-minute | Expandable, Checklist, Timeline |
| 12 | Validate | Completeness, accuracy, no hallucinations | — |

### Registration Steps (Steps 13–17)

| Step | Name | Description |
|------|------|-------------|
| 13 | Output Files | Create `page.tsx`, `questions.json`, `flashcards.json` |
| 14 | Verify Subject | Confirm `physics` exists in `src/data/subjects.ts` |
| 15 | Register Chapter | Add entry to `src/data/chapters.ts` |
| 16 | Add Sections | Add section IDs to `SECTIONS_MAP` in `src/lib/content.ts` |
| 17 | Build & Verify | `npm run build` — 0 errors, chapter live |

---

## Physics-Specific Rules

### Formula Handling
- **Every formula** must be rendered with `FormulaBlock` (block) or `FormulaInline` (inline)
- **Important formulas** get `FormulaBlock` with `important={true}` (bordered card)
- **FormulaCard** groups related formulas + physical constants together
- **Vector notation**: bold arrows for vectors, regular for scalars — match NCERT exactly
- **Units**: Always include SI units in parentheses after numerical values

### Derivation Steps
- Use `Expandable` for full derivations (collapsed by default)
- Each derivation step must show: equation → explanation → result
- Use `Stepper` when derivation has 3+ clear sequential steps
- Final result must be highlighted with `FormulaBlock` (important)

### Numerical Problems
- Use `ProblemSolution` for all NCERT worked examples
- Include: Given → Formula → Substitution → Result with units
- Use `MetricCard` for key numerical values (constants, conversion factors)
- Use `MistakeCard` for common unit conversion errors

### Process Flows
- Use `ProcessCard` for charge transfer, current flow, magnetic field processes
- Use `FlowDiagram` for cause-effect chains (e.g., electromagnetic induction)
- Use `CycleDiagram` for AC cycles, LC oscillations

### Comparison Tables
- Use `Comparison` (side-by-side) for 2 items: vacuum vs medium, AC vs DC
- Use `TableCard` for 3+ items: conductor types, material properties

---

## Component Priority (Physics)

| Priority | Components | Why |
|----------|-----------|-----|
| **Must-have** | FormulaCard, FormulaBlock, ProblemSolution | Every chapter has formulas + numericals |
| **High** | ProcessCard, FlowDiagram, Comparison, TableCard | Derivations, processes, comparisons |
| **Medium** | Stepper, MetricCard, MistakeCard | Sequential steps, constants, errors |
| **Low** | Checklist, Timeline, Expandable | Revision aids, less critical |

---

## Example Chapter Reference

**Electric Charges and Fields** (`src/content/physics/electric-charges-and-fields/page.tsx`)

Already completed sections demonstrate the component patterns:
- Section 1.1: Stepper (charging process)
- Section 1.2: Comparison table (repel/attract)
- Section 1.3: FlowDiagram (charge transfer), Example (NCERT)
- Section 1.4: Expandable (properties), Comparison (Coulomb vs Gravitational)
- Section 1.5: FormulaCard (Coulomb's Law), Comparison (vacuum vs medium)
- Section 1.6: ProblemSolution (superposition), Expandable (derivation)

---

## Practice Rules (Physics)

### Questions (`questions.json`)
- **MCQs**: 4 options, 1 correct, explanation for each option
- **Numerical problems**: Given → Formula → Solution → Answer with units
- **Derivation questions**: Step-by-step with formula references
- Mix: 60% MCQs, 30% numericals, 10% short answer

### Flashcards (`flashcards.json`)
- **Front**: Formula name / concept / law statement
- **Back**: Formula with variables defined / definition / key points
- **Tags**: `formula`, `definition`, `law`, `derivation`, `numerical`

---

## Content Density Targets

| Content Type | Target per Section |
|-------------|-------------------|
| Formulas | 2–4 per section (grouped in FormulaCard) |
| Examples | 1–2 NCERT worked examples per major section |
| Comparisons | 1 per section where applicable |
| KeyPoints | 1 per section (only if core insight exists) |
| Callouts | 1 per definition/law statement |
| Expandables | 1 per derivation or detailed process |
