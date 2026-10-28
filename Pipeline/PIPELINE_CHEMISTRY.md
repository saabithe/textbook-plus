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
| 1 | Solutions | `solutions` | ✅ Content |
| 2 | Electrochemistry | `electrochemistry` | ✅ Content |
| 3 | Chemical Kinetics | `chemical-kinetics` | ✅ Content |
| 4 | The d- and f-Block Elements | `d-and-f-block-elements` | ✅ Content |
| 5 | Coordination Compounds | `coordination-compounds` | ✅ Content |
| 6 | Haloalkanes and Haloarenes | `haloalkanes-and-haloarenes` | ✅ Content |
| 7 | Alcohols, Phenols and Ethers | `alcohols-phenols-and-ethers` | ✅ Content |
| 8 | Aldehydes, Ketones and Carboxylic Acids | `aldehydes-ketones-and-carboxylic-acids` | ✅ Content |
| 9 | Amines | `amines` | ✅ Content |
| 10 | Biomolecules | `biomolecules` | ✅ Content |

**Structure figures status:** every chapter still needs its `structures.json` authored and generated (see "Chemical Structure Figures" below).

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

**Step 1 note:** PDFs located at `Developer_Deliveries/Chapters/02_Chemistry/Textbooks/`

### Content Creation Phase (Steps 8–12)

| Step | Name | Description | Component Suggestions |
|------|------|-------------|----------------------|
| 8 | Understanding | Auto-generate foundation → bridge → content | Callout, KeyPoint, FactCard |
| 9 | Transform + Exam | Auto-suggest components, user approves | **EquationLadder**, **CycleDiagram**, **TableCard**, ConceptCard, FormulaBlock, ProcessCard |
| 10 | Learning | Auto-generate practice content | MistakeCard, Stepper, ProblemSolution |
| 11 | Revision | Generate 3 views (Full → Revision → Last-Minute) | Expandable, Checklist, Timeline |
| 12 | Validate | Automated accuracy + completeness check | — |

**Step 9 component suggestions:** Chemistry chapters typically need EquationLadder (reaction sequences), CycleDiagram (catalytic cycles), TableCard (periodic trends, property comparisons), ConceptCard (element groups, compound families), FormulaBlock (balanced equations), ProcessCard (sequential reaction steps), MoleculeStructure (every structure the chapter depicts). AI suggests per chapter, user approves.

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

### Chemical Structure Figures (mandatory, never hand-drawn)

Every compound the chapter depicts is generated — not drawn:

| Artifact | Path |
| --- | --- |
| Source of truth (authored) | `src/content/chemistry/{slug}/structures.json` — SMILES + formula + `ncertName` + source |
| Generated (committed, never hand-edited) | `src/content/chemistry/{slug}/structures.generated.ts` |
| Renderer | `src/components/content/chemistry/MoleculeStructure.tsx` |
| Toolchain | `scripts/chem/` — see `scripts/chem/README.md` |

```powershell
npm run chem:build -- --chapter <slug>   # gates G1–G5
npm run chem:sheet -- --chapter <slug>   # gate G6 — review PNG for the user
npm run verify:chem                       # gate G7 — also runs in npm run build
```

Rules:
- The **SMILES is the only chemical truth**. Never hand-edit an SVG.
- `ncertName` must appear verbatim in `{slug}-extracted.md`; a compound the chapter never mentions cannot be drawn.
- Formula and mass are recomputed from the SMILES and must match the authored values.
- Stereo must be claimed (`"stereo": true`) **and** visible as a wedge/dash in the drawing.
- One **contact-sheet PNG** per chapter goes to the user for sign-off before merge. Nothing merges without it.
- A structure that fails a gate is **deleted, not patched**.
- Not automatable — keep hand-authored SVG: curly-arrow mechanisms, crystal lattices/unit cells, chair/Newman conformations, orbital and crystal-field diagrams, multi-step industrial flow schemes.

### Reaction Handling
- **Balanced equations** must be rendered with `FormulaBlock`
- Use `EquationLadder` for multi-step reaction sequences
- Use `CycleDiagram` for catalytic cycles, reaction loops
- Use `ProcessCard` for sequential reaction steps

### Classification & Groups
- Use `ConceptCard` for element groups, compound families
- Use `TableCard` for periodic trends, property comparisons
- Use `TreeDiagram` for classification hierarchies (e.g., organic compound types)

### Organic Chemistry
- Use `MoleculeStructure` for every structure the chapter depicts (see "Chemical Structure Figures" above)
- Use `EquationLadder` for reaction pathways (e.g., alcohol → aldehyde → carboxylic acid)
- Use `Comparison` for side-by-side reaction comparisons
- Use `MistakeCard` for common naming errors, functional group confusion
- Curly-arrow mechanisms are hand-authored SVG overlays — never auto-generated

### Physical Chemistry
- Use `FormulaCard` for equations (thermodynamics, kinetics, equilibrium)
- Use `MetricCard` for key constants (activation energy, rate constants)
- Use `Stepper` for calculation steps

---

## Text Emphasis Rules

- **Bold** key terms on first use + final answers; *italics* for emphasis/contrast; `Highlight` component for exam-critical phrases only (max 1–2 per section)
- Never bold/italicize whole paragraphs — full spec: `CHAPTER_PIPELINE.md → Text Emphasis Rules`

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
- Keep file format (questions.json + flashcards.json) — a shared backend may be added later
