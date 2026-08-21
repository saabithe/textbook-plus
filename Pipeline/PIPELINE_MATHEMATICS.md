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

## Pipeline Steps (Dynamic — 16 steps)

Mathematics follows the **master 16-step pipeline** with subject-specific content rules, component suggestions, and practice ratios.

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
| 9 | Transform + Exam | Auto-suggest components, user approves | **FormulaCard**, **Stepper**, **GuidedStepper**, TableCard, FormulaBlock, Comparison |
| 10 | Learning | Auto-generate practice content | **ProblemSolution**, **MistakeCard**, Stepper |
| 11 | Revision | Generate 3 views (Full → Revision → Last-Minute) | Expandable, Checklist |
| 12 | Validate | Automated accuracy + completeness check | — |

**Step 9 component suggestions:** Mathematics chapters typically need FormulaCard (grouped formulas), Stepper (sequential proof steps), GuidedStepper (proofs with checkpoints), TableCard (method comparisons), FormulaBlock (important results), Comparison (side-by-side formula comparison). AI suggests per chapter, user approves.

**Step 10 notes:** Include step-by-step problem solutions, common algebraic/trigonometric errors, and proof-based questions. Mix is AI-decided per chapter based on content.

### Output & Registration Phase (Steps 13–16)

| Step | Name | Description |
|------|------|-------------|
| 13 | Output | Create `page.tsx` + optional `questions.json`, `flashcards.json` |
| 14 | Verify Subject | Confirm `mathematics` exists in `src/data/subjects.ts` |
| 15 | Register | Auto-register chapter + sections |
| 16 | Build | `npm run build` — 0 errors, chapter live |

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

## Practice Rules (Mathematics)

Practice content is **dynamic** — AI decides per chapter, user approves.

### Questions (`questions.json`)
- **Format:** 4 options (MCQs) or open-ended (problems/proofs)
- **Question types:** Problem sets, proof questions, MCQs
- **Mix:** AI decides per chapter based on content type and complexity
- **Trigger:** AI suggests generating practice when content is substantial enough

### Flashcards (`flashcards.json`)
- **Front**: Formula / theorem name / problem type
- **Back**: Formula with conditions / proof outline / solution method
- **Tags**: `formula`, `theorem`, `proof`, `technique`, `identity`

### Practice Generation
- AI suggests adding practice content after learning content is complete
- User approves whether to add practice for each chapter
- Not every chapter needs practice — only when it genuinely helps learning
- Keep file format (questions.json + flashcards.json) — migrate to Supabase when backend is activated
