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
| 1 | Electric Charges and Fields | `electric-charges-and-fields` | ✅ Content |
| 2 | Electrostatic Potential and Capacitance | `electrostatic-potential-and-capacitance` | 🔲 Pending |
| 3 | Current Electricity | `current-electricity` | 🔲 Pending |
| 4 | Moving Charges and Magnetism | `moving-charges-and-magnetism` | 🔲 Pending |
| 5 | Magnetism and Matter | `magnetism-and-matter` | ✅ Content |
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

## Pipeline Steps (Dynamic — 16 steps)

Physics follows the **master 16-step pipeline** with subject-specific content rules, component suggestions, and practice ratios.

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

**Step 1 note:** PDFs located at `Developer_Deliveries/Chapters/Physics Textbooks/`

**Step 5 note:** Maintain derivation flow structure — preserve the logical sequence of equations and explanations. Each derivation step must flow naturally to the next.

### Content Creation Phase (Steps 8–12)

| Step | Name | Description | Component Suggestions |
|------|------|-------------|----------------------|
| 8 | Understanding | Auto-generate foundation → bridge → content | Callout, KeyPoint, Expandable |
| 9 | Transform + Exam | Auto-suggest components, user approves | **FormulaCard**, **FormulaBlock**, **ProcessCard**, **FlowDiagram**, Comparison, TableCard, ProblemSolution, MetricCard |
| 10 | Learning | Auto-generate practice content | ProblemSolution, **MistakeCard**, GuidedStepper |
| 11 | Revision | Generate 3 views (Full → Revision → Last-Minute) | Expandable, Checklist, Timeline |
| 12 | Validate | Automated accuracy + completeness check | — |

**Step 9 component suggestions:** Physics chapters typically need FormulaCard (grouped formulas), FormulaBlock (important formulas), ProcessCard (charge/current processes), FlowDiagram (cause-effect chains), Comparison (vacuum vs medium, AC vs DC), TableCard (material properties), ProblemSolution (numerical examples), MetricCard (constants). AI suggests per chapter, user approves.

**Step 10 notes:** Include unit conversion practice, common numerical mistakes, and derivation-based questions. Mix is AI-decided per chapter based on content.

### Output & Registration Phase (Steps 13–16)

| Step | Name | Description |
|------|------|-------------|
| 13 | Output | Create `page.tsx` + optional `questions.json`, `flashcards.json` |
| 14 | Verify Subject | Confirm `physics` exists in `src/data/subjects.ts` |
| 15 | Register | Auto-register chapter + sections |
| 16 | Build | `npm run build` — 0 errors, chapter live |

---

## Physics-Specific Rules

### Content Preferences (Science-Only — from Magnetism & Matter experience)
- **Summary / Points to Ponder — science only:** Extract but **do not render** `Summary` / `Points to Ponder` headings for Physics (and Chemistry/Biology/Maths). English/Arabic keep them. User preference `USER_PREFERENCES.md:11` clarified as science-only in Aug 2026.
- **Worked Examples + Problems → collapsed `Expandable`:** All NCERT worked examples and end-chapter problems render as **collapsed `Expandable`**, not expanded `Example` / expanded `ProblemSolution`. Use `variant="example"` for examples, `variant="exercise"` for problems. For problems use `<Expandable variant="exercise"><ProblemSolution.Problem>/<ProblemSolution.Solution>` (no outer `<ProblemSolution>` wrapper) to avoid double border — see `magnetism-and-matter/page.tsx:596-640`.
- **Deduplication rule:** If a `TableCard`/`Comparison` already answers a PYQ (e.g., Table 5.2 covers dia/para/ferro comparison), **skip the duplicate PYQ** and add a `Callout type="note"` pointing to the table: “All are answered by Table X.Y”. Keeps exam relevance without repetition.
- **Exam supplement (optional):** Board PYQ slides are a secondary source (beyond NCERT). If provided, render as optional `Board PYQs` section (`h-5-board` pattern) — grouped by theme, each PYQ as collapsed `Expandable` with year tag (e.g., `[March 2025]`), deduplicated against the Table.

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
- **Full expansion required** — do not shorten or summarize derivations. Every step must be understandable to anyone reading it. Expand fully, show all intermediate steps, explain each equation.
- **Ch5 learning:** For `B–H` and `χ–µr` relations always add explicit subsections with 6–8 `FormulaBlock`s and `important` on the final `µr = 1+χ` / `B = µH`.

### Numerical Problems
- Use collapsed `Expandable` (not expanded `ProblemSolution`) for all NCERT worked examples and exercises — see Content Preferences above
- Inside the Expandable use `ProblemSolution.Problem` + `ProblemSolution.Solution` (avoids nested borders)
- Include: Given → Formula → Substitution → Result with units
- Use `MetricCard` for key numerical values (constants, conversion factors)
- Use `MistakeCard` for common unit conversion errors

### Process Flows
- Use `ProcessCard` for charge transfer, current flow, magnetic field processes
- Use `FlowDiagram` for cause-effect chains (e.g., electromagnetic induction)
- Use `CycleDiagram` for AC cycles, LC oscillations

### Comparison Tables
- Use `Comparison` (side-by-side) for 2 items: vacuum vs medium, AC vs DC
- Use `TableCard` for 3+ items: conductor types, material properties (prefer a single comprehensive `TableCard` over 3 separate subsections + redundant Comparison — see ch5 `Table 5.2` consolidation `ac2d3c6`)

---

## Text Emphasis Rules

- **Bold** key terms on first use + final answers; *italics* for emphasis/contrast; `Highlight` component for exam-critical phrases only (max 1–2 per section)
- Never bold/italicize whole paragraphs — full spec: `CHAPTER_PIPELINE.md → Text Emphasis Rules`

---

## Practice Rules (Physics)

Practice content is **dynamic** — AI decides per chapter, user approves.

### Questions (`questions.json`)
- **Format:** 4 options, 1 correct, explanation for each option
- **Question types:** MCQs, numerical problems, derivation questions, short answer
- **Mix:** AI decides per chapter based on content type and complexity
- **Trigger:** AI suggests generating practice when content is substantial enough

### Flashcards (`flashcards.json`)
- **Front**: Formula name / concept / law statement
- **Back**: Formula with variables defined / definition / key points
- **Tags**: `formula`, `definition`, `law`, `derivation`, `numerical`

### Practice Generation
- AI suggests adding practice content after learning content is complete
- User approves whether to add practice for each chapter
- Not every chapter needs practice — only when it genuinely helps learning
- Keep file format (questions.json + flashcards.json) — migrate to Supabase when backend is activated
