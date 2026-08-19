# PIPELINE_MATHEMATICS.md

> NCERT Class 12 Mathematics — 13 chapters. Proof-heavy, step-by-step solutions, formula-intensive.

---

## Subject Info

| Property | Value |
|----------|-------|
| Subject | Mathematics |
| Slug | `mathematics` |
| Chapters | 13 |
| Color | `--subject-mathematics` (purple) |
| Content type | Proofs, derivations, step-by-step solutions, formulas |
| Practice types | Problem sets, proofs, flashcards |

---

## Chapter List

| # | Chapter | Slug | Status |
|---|---------|------|--------|
| 1 | Relations and Functions | `relations-and-functions` | 🔲 Pending |
| 2 | Inverse Trigonometric Functions | `inverse-trigonometric-functions` | 🔲 Pending |
| 3 | Matrices | `matrices` | 🔲 Pending |
| 4 | Determinants | `determinants` | 🔲 Pending |
| 5 | Continuity and Differentiability | `continuity-and-differentiability` | 🔲 Pending |
| 6 | Application of Derivatives | `application-of-derivatives` | 🔲 Pending |
| 7 | Integrals | `integrals` | 🔲 Pending |
| 8 | Application of Integrals | `application-of-integrals` | 🔲 Pending |
| 9 | Differential Equations | `differential-equations` | 🔲 Pending |
| 10 | Vector Algebra | `vector-algebra` | 🔲 Pending |
| 11 | Three Dimensional Geometry | `three-dimensional-geometry` | 🔲 Pending |
| 12 | Linear Programming | `linear-programming` | 🔲 Pending |
| 13 | Probability | `probability` | 🔲 Pending |

---

## Pipeline Steps (Dynamic — 14 steps)

Mathematics gets **14 steps** — fewer diagram steps, more derivation and proof validation.

### Shared Steps (Steps 1–6)

Same as master pipeline: Input → Extract → Verify → Structure → Decompose → Map Source → Audit.

### Mathematics Content Steps (Steps 7–12)

| Step | Name | Description | Component Suggestions |
|------|------|-------------|----------------------|
| 7 | Understanding Layer | Foundation → bridge → content | Callout, KeyPoint, FactCard |
| 8 | Transform | Convert to interactive formats | **FormulaCard**, **Stepper**, **GuidedStepper**, TableCard |
| 9 | Exam Layer | Definitions, formulas, important theorems | **FormulaBlock**, Example, Comparison |
| 10 | Learning Layer | Questions, practice, problem-solving | **ProblemSolution**, **MistakeCard**, Stepper |
| 11 | Revision Layer | Full → summary → one-page → last-minute | Expandable, Checklist |
| 12 | Validate | Completeness, accuracy, no hallucinations | — |

### Registration Steps (Steps 13–17)

Same as master pipeline: Output Files → Verify Subject → Register Chapter → Add Sections → Build & Verify.

---

## Mathematics-Specific Rules

### Formula Handling
- **Every formula** must be rendered with `FormulaBlock` or `FormulaInline`
- **Important formulas** (key results, theorems) get `FormulaBlock` with `important={true}`
- Use `FormulaCard` to group related formulas (e.g., all derivative rules together)
- **Vector notation**: bold with arrow, match NCERT exactly
- **Set notation**: proper symbols for union, intersection, complement

### Proofs & Derivations
- Use `Stepper` for sequential proof steps (each step = one logical move)
- Use `GuidedStepper` when proof has checkpoints (e.g., "verify this condition before proceeding")
- Use `Expandable` for long proofs (collapsed by default, click to expand)
- Each proof step: Statement → Reason → Next step

### Problem Solving
- Use `ProblemSolution` for all NCERT worked examples
- Include: Given → Formula → Step-by-step substitution → Final answer
- Use `MistakeCard` for common algebraic/trigonometric errors
- Use `Stepper` for multi-step calculations

### Classification
- Use `TableCard` for comparing methods (e.g., integration techniques)
- Use `Comparison` for side-by-side formula comparison (2 items)
- Use `ConceptCard` for theorem families (e.g., continuity conditions)

---

## Component Priority (Mathematics)

| Priority | Components | Why |
|----------|-----------|-----|
| **Must-have** | FormulaCard, Stepper, ProblemSolution | Every chapter has formulas + solutions |
| **High** | GuidedStepper, FormulaBlock, TableCard | Proofs, important results, comparisons |
| **Medium** | Comparison, MistakeCard, Expandable | Comparisons, errors, long proofs |
| **Low** | Checklist, ConceptCard, MetricCard | Revision aids, classification |

---

## Example Chapter Reference

*No completed chapters yet. First chapter to be processed will serve as the reference.*

---

## Practice Rules (Mathematics)

### Questions (`questions.json`)
- **Problem sets**: Full solutions with step-by-step working
- **Proof questions**: Logical steps with reasons
- **MCQs**: Quick formula/concept recall
- Mix: 40% problems, 30% proofs, 30% MCQs

### Flashcards (`flashcards.json`)
- **Front**: Formula / theorem name / problem type
- **Back**: Formula with conditions / proof outline / solution method
- **Tags**: `formula`, `theorem`, `proof`, `technique`, `identity`

---

## Content Density Targets

| Content Type | Target per Section |
|-------------|-------------------|
| Formulas | 3–6 per section (grouped in FormulaCard) |
| Worked examples | 1–2 per major section |
| Proof steps | Full derivation for each theorem |
| KeyPoints | 1 per section (core insight only) |
| Callouts | 1 per theorem statement or definition |
| Tables | 1 per method comparison |
