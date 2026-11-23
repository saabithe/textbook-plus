/*
 * LineEquationForms — the vector and Cartesian forms of a line in 3-D, shown
 * side by side with one shared colour mapping for the passing point and the
 * parallel vector. Purely presentational: no hooks, no client directive, no
 * external libraries. Both colours come from theme CSS vars so light and dark
 * stay legible; the chips are plain coloured text, never KaTeX colour hacks.
 */

import { Fragment } from "react";
import { Separator } from "@/components/ui/separator";
import { Formula } from "@/components/content/Formula";

const PASSING_POINT = "var(--subject-mathematics)";
const PARALLEL_VECTOR = "var(--ok)";

/** Identical two-colour key, rendered under the formulas in either column. */
function FormLegend() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
      <span className="inline-flex items-center gap-1.5">
        <span
          aria-hidden="true"
          className="inline-block h-2 w-2 shrink-0 rounded-full"
          style={{ backgroundColor: PASSING_POINT }}
        />
        <span className="text-sm font-medium" style={{ color: PASSING_POINT }}>
          (x₁,y₁,z₁)
        </span>
        <span className="t-micro">passing point</span>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span
          aria-hidden="true"
          className="inline-block h-2 w-2 shrink-0 rounded-full"
          style={{ backgroundColor: PARALLEL_VECTOR }}
        />
        <span className="text-sm font-medium" style={{ color: PARALLEL_VECTOR }}>
          (a,b,c)
        </span>
        <span className="t-micro">parallel vector</span>
      </span>
    </div>
  );
}

/**
 * LineEquationForms — no card frame. Two equal columns split by a 1px vertical
 * Separator on `sm` and up; below `sm` the rule turns horizontal and the
 * columns stack. Column labels are micro, never headings.
 */
export function LineEquationForms() {
  return (
    <div
      role="group"
      aria-label="Vector form and Cartesian form of a line in three dimensions, side by side. Each form is followed by the same colour key: the passing point (x1, y1, z1) in the mathematics accent colour and the parallel vector (a, b, c) in the success accent colour."
      className="w-full"
    >
      <div className="flex flex-col sm:flex-row sm:items-stretch">
        <div className="min-w-0 flex-1">
          <div className="t-micro">Vector form</div>
          <div className="mt-2 text-[1.03125rem] leading-[1.7] text-foreground/90">
            <div className="overflow-x-auto py-0.5">
              <Formula>{String.raw`\vec r=\vec a+\lambda\vec b`}</Formula>
            </div>
            <div className="overflow-x-auto py-0.5">
              <Formula>{String.raw`\vec r=x_1\hat i+y_1\hat j+z_1\hat k+\lambda(a\hat i+b\hat j+c\hat k)`}</Formula>
            </div>
            <FormLegend />
          </div>
        </div>

        <Fragment>
          <Separator className="my-4 sm:hidden" />
          <Separator orientation="vertical" className="mx-6 hidden sm:block" />
        </Fragment>

        <div className="min-w-0 flex-1">
          <div className="t-micro">Cartesian form</div>
          <div className="mt-2 text-[1.03125rem] leading-[1.7] text-foreground/90">
            <div className="overflow-x-auto py-0.5">
              <Formula>{String.raw`\frac{x-x_1}{a}=\frac{y-y_1}{b}=\frac{z-z_1}{c}`}</Formula>
            </div>
            <FormLegend />
          </div>
        </div>
      </div>
    </div>
  );
}
