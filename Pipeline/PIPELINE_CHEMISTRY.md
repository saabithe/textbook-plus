# PIPELINE_CHEMISTRY.md

> NCERT Class 12 Chemistry — 10 chapters. Reaction-heavy, classification-rich, cycle-oriented.

---

## Subject Info

| Property | Value |
|----------|-------|
| Subject | Chemistry |
| Slug | `chemistry` |
| Chapters | 10 |
| Color | `--subject-chemistry` (green) |
| Content type | Reactions, equations, classifications, cycles, organic mechanisms |
| Practice types | MCQs, reaction equations, flashcards |

---

## Chapter List

| # | Chapter | Slug | Status |
|---|---------|------|--------|
| 1 | Solutions | `solutions` | 🔲 Pending |
| 2 | Electrochemistry | `electrochemistry` | 🔲 Pending |
| 3 | Chemical Kinetics | `chemical-kinetics` | 🔲 Pending |
| 4 | The d- and f-Block Elements | `d-and-f-block-elements` | 🔲 Pending |
| 5 | Coordination Compounds | `coordination-compounds` | 🔲 Pending |
| 6 | Haloalkanes and Haloarenes | `haloalkanes-and-haloarenes` | 🔲 Pending |
| 7 | Alcohols, Phenols and Ethers | `alcohols-phenols-and-ethers` | 🔲 Pending |
| 8 | Aldehydes, Ketones and Carboxylic Acids | `aldehydes-ketones-and-carboxylic-acids` | 🔲 Pending |
| 9 | Amines | `amines` | 🔲 Pending |
| 10 | Biomolecules | `biomolecules` | 🔲 Pending |

---

## Pipeline Steps (Dynamic — 15 steps)

Chemistry gets **15 steps** — lighter on derivations than Physics, heavier on reaction mechanisms and cycles.

### Shared Steps (Steps 1–6)

Same as master pipeline: Input → Extract → Verify → Structure → Decompose → Map Source → Audit.

### Chemistry Content Steps (Steps 7–12)

| Step | Name | Description | Component Suggestions |
|------|------|-------------|----------------------|
| 7 | Understanding Layer | Foundation → bridge → content | Callout, KeyPoint, FactCard |
| 8 | Transform | Convert to interactive formats | **FlowDiagram**, **CycleDiagram**, **TableCard**, ConceptCard |
| 9 | Exam Layer | Definitions, formulas, reactions, important concepts | **FormulaBlock**, Example, ProcessCard |
| 10 | Learning Layer | Questions, recall, practice, mistakes | MistakeCard, GuidedStepper, ProblemSolution |
| 11 | Revision Layer | Full → summary → one-page → last-minute | Expandable, Checklist, Timeline |
| 12 | Validate | Completeness, accuracy, no hallucinations | — |

### Registration Steps (Steps 13–17)

Same as master pipeline: Output Files → Verify Subject → Register Chapter → Add Sections → Build & Verify.

---

## Chemistry-Specific Rules

### Reaction Handling
- **Balanced equations** must be rendered with `FormulaBlock`
- Use `FlowDiagram` for multi-step reaction mechanisms
- Use `CycleDiagram` for catalytic cycles, reaction loops
- Use `ProcessCard` for sequential reaction steps

### Classification & Groups
- Use `ConceptCard` for element groups, compound families
- Use `TableCard` for periodic trends, property comparisons
- Use `TreeDiagram` for classification hierarchies (e.g., organic compound types)

### Organic Chemistry
- Use `FlowDiagram` for reaction pathways (e.g., alcohol → aldehyde → carboxylic acid)
- Use `Comparison` for side-by-side reaction comparisons
- Use `MistakeCard` for common naming errors, functional group confusion

### Physical Chemistry
- Use `FormulaCard` for equations (thermodynamics, kinetics, equilibrium)
- Use `MetricCard` for key constants (activation energy, rate constants)
- Use `Stepper` for calculation steps

---

## Component Priority (Chemistry)

| Priority | Components | Why |
|----------|-----------|-----|
| **Must-have** | FlowDiagram, CycleDiagram, TableCard | Every chapter has reactions + classifications |
| **High** | FormulaBlock, ProcessCard, ConceptCard | Equations, mechanisms, groups |
| **Medium** | Comparison, MistakeCard, MetricCard | Comparisons, errors, constants |
| **Low** | Checklist, Timeline, Expandable | Revision aids |

---

## Example Chapter Reference

*No completed chapters yet. First chapter to be processed will serve as the reference.*

---

## Practice Rules (Chemistry)

### Questions (`questions.json`)
- **MCQs**: 4 options, 1 correct, explanation for each
- **Reaction equations**: Balance the equation, name products
- **Mechanism questions**: Step-by-step with intermediate structures
- Mix: 50% MCQs, 30% equations, 20% short answer

### Flashcards (`flashcards.json`)
- **Front**: Reaction name / compound class / functional group
- **Back**: Equation / definition / key properties
- **Tags**: `reaction`, `mechanism`, `classification`, `formula`, `property`

---

## Content Density Targets

| Content Type | Target per Section |
|-------------|-------------------|
| Reactions | 2–4 balanced equations per section |
| Flow diagrams | 1 per reaction mechanism |
| Cycle diagrams | 1 per catalytic cycle or loop |
| Tables | 1 per classification or trend |
| KeyPoints | 1 per section (only if core insight) |
| Callouts | 1 per definition or law |
