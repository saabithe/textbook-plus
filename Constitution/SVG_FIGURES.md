# SVG figures for physics

Status: **installed** (Nov 2026). Engine at
`textbook-plus/src/components/content/physics/diagram/`, reference figures in
`examples.ts`, gallery at `/dev/figures`, gate at `npm run verify:figures`.

## The problem this solves

A hand-written `<svg>` in a chapter is a picture of a diagram. Nothing in it
knows that the refracted ray should leave at 28.1°, so a typo in one coordinate
ships a ray that is physically wrong — and no linter can see it, because a
wrong coordinate is still valid SVG.

The rule this system enforces:

> A figure never states a geometry it did not solve. Description → spec →
> solved geometry → SVG, and every law the figure claims is re-derived by a
> script before the figure can land.

## How others do it

| Method | How it works | Strengths | Where it fails us |
| --- | --- | --- | --- |
| **Penrose** (CMU) | Substance (`.sub`) declares objects and constraints; Style (`.sty`) declares drawing; the optimiser solves label/objective placement | Beautiful output, real constraint solver, domain libraries | Needs its own toolchain (`penrose` CLI / `@penrose/core` wasm) at build time; output is a `.svg` blob, so it cannot use our theme CSS vars, cannot be tree-shaken, and a failed solve is a blank figure, not an error we can tsc |
| **TikZ + dvisvgm** | LaTeX picture language, compiled to PDF/DVI, converted to SVG | The physics/chemistry gold standard; `tikz-3dplot`, `pgfplots`, circuitikz | Requires a TeX distribution on the build machine — impossible in CI and on Vercel; fonts in the SVG are outlines or need embedding; no React integration |
| **Asymptote** | Vector language, `asy` compiler, LaTeX labels | Precise, scriptable, good 3-D | Same TeX/toolchain cost; stale ecosystem; again an opaque SVG artefact |
| **matplotlib / Manim** | Python draws the figure; save as SVG | Great for plots and animation; huge library | Python at build time; output is a raster-like SVG with baked transforms and no semantic structure; animation is irrelevant here |
| **JSXGraph** | Runtime JS board in the browser, geometry objects | Interactive, constraints by construction | Ships JS to the client for a static teaching figure; layout can shift after hydration; heavy for a PWA; not printable-stable |
| **Raw inline SVG** (what we had) | Author writes coordinates | Zero deps, themeable, exact | Nobody checks the physics; every new figure is hand-arithmetic; silent errors |
| **Typed spec + pure solver + React renderer** (chosen) | Figure is data; geometry/optics are pure functions; one React component renders it | Zero runtime deps, themeable via CSS vars, deterministic, validated in Node, law-correct by construction | We own the primitive vocabulary; new figure *kinds* need a new builder |

**Decision:** the last one. Penrose's idea (declare, don't draw) without
Penrose's toolchain. TikZ's law-correctness without a TeX install. Inline SVG's
zero-cost rendering with a machine-checkable spec in front of it.

## Architecture

```
description ──► FigureSpec (data) ──┬──► PhysicsFigure.tsx ──► inline SVG
                                    ├──► validateFigure()  ──► errors/warnings
                                    └──► scripts/verify-figures.mjs ──► CI gate
```

Four layers, each pure and independently testable:

1. **`geometry.ts`** — vectors, unit directions, intersections, sampled arcs,
   bounding boxes. Spec space is **y-up**, like the page; the renderer flips to
   SVG's y-down exactly once. No React, no DOM, no I/O.
2. **`optics.ts`** — the laws as functions: vector Snell (`refract`), `reflect`,
   `criticalAngleDeg`, `traceRay` (multi-surface, tracks the current medium,
   handles total internal reflection), `solveThinLens` (returns the image and
   the three principal rays), `prismDeviation`, `minimumDeviation`,
   `slabLateralShift`, `apparentDepth`.
3. **`scene.ts`** — the figure language: primitives (`poly`, `arrow`, `circle`,
   `dot`, `label`), builders (`body`, `normal`, `angleMark`, `rightAngle`,
   `tick`, `lensOutline`, `arrowFrom`) and `validateFigure`, which checks
   frame bounds, degenerate arrows, duplicate points, label collisions and runs
   the spec's `checks`.
4. **`PhysicsFigure.tsx`** — renders one spec. Colour tokens map to the app's
   CSS variables (`--foreground`, `--subject-physics`, `--destructive`,
   `--ok`, `--warning`), so light and dark mode are automatic and no colour is
   hard-coded.

Node runs `.ts` natively in this repo, which is why the engine and specs import
with explicit `.ts` extensions. `tsconfig.json` carries
`allowImportingTsExtensions: true`; app code imports the same modules
extensionless.

## Writing a figure from a description

1. **Restate the physics in numbers.** A description like "a ray hits a glass
   slab at 30° and comes out shifted" becomes: slab `n = 1.5`, incidence 30°,
   entry and exit faces parallel.
2. **Let the engine place the rays.** Build the body polygon, then call
   `traceRay` / `refract` / `solveThinLens`. Never compute an angle by hand.
3. **Add marks and labels** with `normal`, `angleMark`, `rightAngle`, `label`.
   Only frame size, label positions and stroke styles are hand-placed.
4. **Declare what must be true** in `checks` — `snell`, `reflect`, `lens`, or a
   generic `value` (e.g. "emergent ∥ incident").
5. **Run the gate.** `npm run verify:figures` must print zero errors. Warnings
   mean a label collides or runs out of frame — fix the label, not the checker.
6. **Look at it** at `/dev/figures`, then use it in the chapter:

```tsx
import { PhysicsFigure } from "@/components/content/physics/diagram/PhysicsFigure";
import { glassSlab } from "@/components/content/physics/diagram/figures/glass-slab";
```

```tsx
<PhysicsFigure spec={glassSlab} />
```

## What the gate checks

* every coordinate finite and inside the frame;
* arrows longer than 0.4 units, positive stroke widths;
* polygons with enough points and no repeated vertices;
* label text boxes inside the frame and not overlapping each other;
* the drawing is not a stamp in the corner of an empty frame;
* `snell`: `n₁ sin i = n₂ sin r` re-solved from the printed angles;
* `reflect`: `i = r`;
* `lens`: `1/v + 1/u − 1/f ≈ 0`;
* `value`: any other invariant, with an explicit tolerance.

A failure is an error and exits non-zero. Layout complaints are warnings so a
figure can still land while its labels are being nudged.

## Conventions

* **One figure per file** under `physics/diagram/figures/`, exported by name and
  registered in `examples.ts` (or a chapter-local list) for the gate.
* Ids are kebab-case and unique repo-wide; the id is also the gallery anchor.
* `caption` is the printed caption (unicode sub/superscripts fine); `alt` is the
  screen-reader sentence; `source` carries the textbook number (`Fig. 9.12`).
* A figure that cannot be drawn honestly (no real image when `u ≤ f`, a TIR ray
  that would "exit") returns `null` from the solver and must not be drawn — the
  spec has no way to fake it.
* Real specimens stay photographs; this engine is for schematics (rays, lenses,
  prisms, circuits, wave profiles, fields).

## Known limits

* 2-D only; 3-D (helix, field lines in space) still needs hand-authored SVG.
* Arrows are straight; curved motion uses sampled polylines (`poly`).
* The validator checks declared invariants, not "does this look right" — a
  physically legal but ugly figure can pass. The gallery is the human check.
* Label metrics are estimated (`0.62 em` per character), so very long labels
  can warn late; shorten the label.
