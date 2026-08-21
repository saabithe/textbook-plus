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

## Pipeline Steps (Dynamic — 16 steps)

Chemistry follows the **master 16-step pipeline** with subject-specific content rules, component suggestions, and practice ratios.

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

**Step 1 note:** PDFs located at `Developer_Deliveries/Chapters/Chemistry Textbooks/`

### Content Creation Phase (Steps 8–12)

| Step | Name | Description | Component Suggestions |
|------|------|-------------|----------------------|
| 8 | Understanding | Auto-generate foundation → bridge → content | Callout, KeyPoint, FactCard |
| 9 | Transform + Exam | Auto-suggest components, user approves | **FlowDiagram**, **CycleDiagram**, **TableCard**, ConceptCard, FormulaBlock, ProcessCard |
| 10 | Learning | Auto-generate practice content | MistakeCard, GuidedStepper, ProblemSolution |
| 11 | Revision | Generate 3 views (Full → Revision → Last-Minute) | Expandable, Checklist, Timeline |
| 12 | Validate | Automated accuracy + completeness check | — |

**Step 9 component suggestions:** Chemistry chapters typically need FlowDiagram (reaction mechanisms), CycleDiagram (catalytic cycles), TableCard (periodic trends, property comparisons), ConceptCard (element groups, compound families), FormulaBlock (balanced equations), ProcessCard (sequential reaction steps). AI suggests per chapter, user approves.

**Step 10 notes:** Include reaction equation practice, mechanism questions, and common naming errors. Mix is AI-decided per chapter based on content.

### Output & Registration Phase (Steps 13–16)

| Step | Name | Description |
|------|------|-------------|
| 13 | Output | Create `page.tsx` + optional `questions.json`, `flashcards.json` |
| 14 | Verify Subject | Confirm `chemistry` exists in `src/data/subjects.ts` |
| 15 | Register | Auto-register chapter + sections |
| 16 | Build | `npm run build` — 0 errors, chapter live |

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

## Practice Rules (Chemistry)

Practice content is **dynamic** — AI decides per chapter, user approves.

### Questions (`questions.json`)
- **Format:** 4 options, 1 correct, explanation for each option
- **Question types:** MCQs, reaction equations, mechanism questions, short answer
- **Mix:** AI decides per chapter based on content type and complexity
- **Trigger:** AI suggests generating practice when content is substantial enough

### Flashcards (`flashcards.json`)
- **Front**: Reaction name / compound class / functional group
- **Back**: Equation / definition / key properties
- **Tags**: `reaction`, `mechanism`, `classification`, `formula`, `property`

### Practice Generation
- AI suggests adding practice content after learning content is complete
- User approves whether to add practice for each chapter
- Not every chapter needs practice — only when it genuinely helps learning
- Keep file format (questions.json + flashcards.json) — migrate to Supabase when backend is activated
