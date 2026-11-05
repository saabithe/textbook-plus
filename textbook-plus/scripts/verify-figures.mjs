#!/usr/bin/env node
/**
 * verify-figures.mjs — the gate over every physics figure spec.
 *
 * Runs the same code the page runs: the geometry is re-solved, the bounds are
 * re-checked, and every law the figure claims (Snell, reflection, thin lens,
 * "emergent ∥ incident") is re-derived from the textbook formula and compared
 * with the number in the spec.
 *
 * Usage:
 *   node scripts/verify-figures.mjs            # all figures
 *   node scripts/verify-figures.mjs lens       # only ids containing "lens"
 */
import { FIGURES } from "../src/components/content/physics/diagram/examples.ts";
import { errorsOf, validateFigure, warningsOf } from "../src/components/content/physics/diagram/scene.ts";

const filter = process.argv[2];
const chosen = filter ? FIGURES.filter((f) => f.id.includes(filter)) : FIGURES;

let totalErrors = 0;
let totalWarnings = 0;
const seen = new Set();

for (const spec of chosen) {
  if (seen.has(spec.id)) {
    console.error(`✗ duplicate figure id "${spec.id}"`);
    totalErrors += 1;
  }
  seen.add(spec.id);

  const issues = validateFigure(spec);
  const errors = errorsOf(issues);
  const warnings = warningsOf(issues);
  totalErrors += errors.length;
  totalWarnings += warnings.length;

  const { width, height } = spec.frame;
  const marks = errors.length === 0 ? "✓" : "✗";
  console.log(
    `${marks} ${spec.id.padEnd(34)} ${String(width).padStart(3)}×${String(height).padEnd(3)} ` +
      `${String(spec.elements.length).padStart(3)} elements  ${String(spec.checks?.length ?? 0)} checks`,
  );
  for (const issue of issues) {
    const mark = issue.level === "error" ? "  ✗" : "  !";
    console.log(`${mark} ${issue.code.padEnd(14)} ${issue.message}`);
  }
}

console.log(
  `\n${chosen.length} figures · ${totalErrors} errors · ${totalWarnings} warnings` +
    (filter ? ` (filter: "${filter}")` : ""),
);

process.exit(totalErrors === 0 ? 0 : 1);
