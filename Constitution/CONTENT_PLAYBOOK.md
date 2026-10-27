# Content Playbook

One page. Run it **before**, **during** and **after** every chapter. If a rule here conflicts with prose somewhere else, this page wins — it is the distilled version of `USER_PREFERENCES.md` §11 §14 and the Content Authoring Conventions in `AGENTS.md`.

---

## 0. Read first (5 minutes, every time)

- `USER_PREFERENCES.md` — §11 (preferences table), §11.1 (the canonical structural edit), §11.2 (the canonical figure table), §14 (how to work with the user).
- `AGENTS.md` — "Content Authoring Conventions".
- The previous chapter's `page.tsx` in the same subject, as a quality reference.

---

## 1. Pre-flight — before a line of JSX

| Step | Output |
|---|---|
| Read the model text (`{slug}-extracted.md`) | a flat list of every heading, figure, table, activity and example |
| **Shape map** | a table: *source paragraph → vehicle* (bullets / `TableCard` / `Comparison` / `Stepper` / `Callout` / image) |
| **Figure audit** | every `Fig. x.y` in the model text → one row in a figure table |
| **Visual audit** | each visual: real licensed image (specimen) / inline SVG (schematic) / none |
| **Show the shape map to the user** | approval before code — 30 seconds of review beats a wrong page |

---

## 2. Vehicle cheat-sheet

| Content | Vehicle |
|---|---|
| A list of places, kinds, conditions, examples | one short lead-in + `<ul>` |
| 3+ items carrying 2+ attributes | `TableCard` |
| Two sides of one idea | `Comparison` |
| Ordered steps or a cycle | `Stepper` / `ProcessCard` / `CycleDiagram` |
| One definition, law or exam trap | `Callout` / `KeyPoint` + a single `Highlight` |
| A misconception worth naming | `MistakeCard` |
| A set of peer notes (e.g. six evidences) | `PocketGrid` |
| Textbook figure numbers | `TableCard` — `Figure` / `What it shows` |
| A specimen, organism, organ or bone | **real licensed image**, captioned with source + licence |
| An apparatus, process, strata or abstract graph | inline SVG component |
| A worked example | collapsed `Expandable` |
| A question bank or PYQ set | `ExerciseQa` inside `Expandable` |
| A repetition of something already on the page | upgrade that block — never skip the note |

---

## 3. While writing — the ten laws

1. **Two sentences per paragraph, maximum.** Three is an error.
2. **Never inline a list.** If the sentence enumerates, lift it out.
3. **One lead-in per heading** — the shortest sentence that sets up what follows.
4. **Four bullets per list, maximum**, each with a bold lead phrase.
5. **Table cells ≤ 18 words**, and every table gets a caption.
6. **One `Highlight` per subsection** (max 1–3 per section) — never a whole paragraph.
7. **One formula per row.** Never cram two into a line.
8. **Bold a key term on first use only**, then stop.
9. **No Summary section, no Points to Ponder.**
10. **No repeat content** — but a duplicate *note* gets its block upgraded, not ignored.

---

## 4. Post-flight — before the commit

```bash
node scripts/audit-presentation.cjs --chapter <slug>   # P1–P7 presentation rules
node scripts/verify-latex.cjs                          # every formula renders
npm run typecheck                                      # no type regressions
```

- Read the rendered page top to bottom, as a student would.
- Check 360 px width and dark mode.
- New component? Add it to `/dev/design`.
- **Push once per milestone, not once per tweak.**

---

## 5. Push rule (when to push)

Push **whole batches**, never individual edits.

- **A batch** = any coherent unit of work: a section restructured, a component added, a structural change, a script, a doc update — or a finished chapter. A partial chapter counts if the edits belong together.
- **Not a batch**: a single paragraph, one bullet, a typo, a colour nudge.
- **The test**: if you can describe it as one thing ("restructured the household-products section"), push it.
- **The user's call wins**: if they call it a batch, it is a batch — never hold work back because the chapter is unfinished.
