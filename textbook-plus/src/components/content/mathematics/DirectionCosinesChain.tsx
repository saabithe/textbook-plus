/*
 * Vertical three-step concept chain: direction angles → direction cosines →
 * direction ratios. Numbered nodes sit on one continuous rule. Static Server
 * Component — no hooks, no client directive, no external libraries; every
 * accent comes from the mathematics subject token.
 */

import type { ReactNode } from "react";
import { Formula, FormulaBlock } from "@/components/content/Formula";

const ACCENT = "var(--subject-mathematics)";

/** A mathematics-tinted callout with a t-micro label, used for the two key results. */
function HighlightBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      className="mt-4 rounded-xl p-4 sm:p-5"
      style={{
        border: `1px solid ${ACCENT}`,
        backgroundColor: "color-mix(in oklab, var(--subject-mathematics) 7%, transparent)",
      }}
    >
      <div className="t-micro mb-1" style={{ color: ACCENT }}>
        {label}
      </div>
      {children}
    </div>
  );
}

export function DirectionCosinesChain() {
  return (
    <ol className="my-6 list-none space-y-0 p-0">
      {/* STEP 1 — Direction Angles */}
      <li className="flex gap-3 sm:gap-4">
        <div className="flex w-8 shrink-0 flex-col items-center">
          <div
            className="z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold text-white shadow-sm"
            style={{
              backgroundColor: ACCENT,
              boxShadow: `0 0 0 4px color-mix(in oklab, var(--subject-mathematics) 16%, transparent)`,
            }}
          >
            1
          </div>
          <div
            className="w-0.5 flex-1"
            style={{ backgroundColor: "color-mix(in oklab, var(--subject-mathematics) 35%, transparent)" }}
          />
        </div>
        <div className="min-w-0 flex-1 pb-5 sm:pb-6">
          <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm sm:rounded-2xl">
            <div
              className="border-b border-border/40 px-4 py-2.5"
              style={{ backgroundColor: "color-mix(in oklab, var(--subject-mathematics) 6%, transparent)" }}
            >
              <div className="t-micro mb-0.5" style={{ color: ACCENT }}>
                Step 1
              </div>
              <h4 className="text-sm font-extrabold tracking-tight text-foreground">
                Direction Angles
              </h4>
            </div>
            <div className="px-4 py-4 sm:px-5">
              <p className="text-[0.95rem] leading-[1.7] text-foreground/85">
                The angles made by a position vector with the positive x, y, z-axes are called
                direction angles.
              </p>
              <div className="mt-4 overflow-x-auto rounded-lg border border-border/40">
                <table className="w-full min-w-[17rem] border-collapse text-left text-[0.9rem]">
                  <tbody>
                    <tr className="border-b border-border/40 last:border-b-0">
                      <td className="px-3 py-2 font-medium text-foreground/85">Positive x-axis</td>
                      <td className="px-3 py-2 text-foreground">
                        <Formula>{String.raw`\alpha`}</Formula>
                      </td>
                      <td className="px-3 py-2 text-foreground">
                        <Formula>{String.raw`0\leq\alpha\leq\pi`}</Formula>
                      </td>
                    </tr>
                    <tr className="border-b border-border/40 last:border-b-0">
                      <td className="px-3 py-2 font-medium text-foreground/85">Positive y-axis</td>
                      <td className="px-3 py-2 text-foreground">
                        <Formula>{String.raw`\beta`}</Formula>
                      </td>
                      <td className="px-3 py-2 text-foreground">
                        <Formula>{String.raw`0\leq\beta\leq\pi`}</Formula>
                      </td>
                    </tr>
                    <tr className="last:border-b-0">
                      <td className="px-3 py-2 font-medium text-foreground/85">Positive z-axis</td>
                      <td className="px-3 py-2 text-foreground">
                        <Formula>{String.raw`\gamma`}</Formula>
                      </td>
                      <td className="px-3 py-2 text-foreground">
                        <Formula>{String.raw`0\leq\gamma\leq\pi`}</Formula>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </li>

      {/* STEP 2 — Direction Cosines */}
      <li className="flex gap-3 sm:gap-4">
        <div className="flex w-8 shrink-0 flex-col items-center">
          <div
            className="z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold text-white shadow-sm"
            style={{
              backgroundColor: ACCENT,
              boxShadow: `0 0 0 4px color-mix(in oklab, var(--subject-mathematics) 16%, transparent)`,
            }}
          >
            2
          </div>
          <div
            className="w-0.5 flex-1"
            style={{ backgroundColor: "color-mix(in oklab, var(--subject-mathematics) 35%, transparent)" }}
          />
        </div>
        <div className="min-w-0 flex-1 pb-5 sm:pb-6">
          <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm sm:rounded-2xl">
            <div
              className="border-b border-border/40 px-4 py-2.5"
              style={{ backgroundColor: "color-mix(in oklab, var(--subject-mathematics) 6%, transparent)" }}
            >
              <div className="t-micro mb-0.5" style={{ color: ACCENT }}>
                Step 2
              </div>
              <h4 className="text-sm font-extrabold tracking-tight text-foreground">
                Direction Cosines
              </h4>
            </div>
            <div className="px-4 py-4 sm:px-5">
              <p className="text-[0.95rem] leading-[1.7] text-foreground/85">
                The cosines of the direction angles are called direction cosines.
              </p>
              <FormulaBlock
                latex={String.raw`l=\cos\alpha,\qquad m=\cos\beta,\qquad n=\cos\gamma`}
              />
              <HighlightBlock label="Fundamental Identity">
                <FormulaBlock latex={String.raw`l^2+m^2+n^2=1`} important />
              </HighlightBlock>
            </div>
          </div>
        </div>
      </li>

      {/* STEP 3 — Direction Ratios */}
      <li className="flex gap-3 sm:gap-4">
        <div className="flex w-8 shrink-0 flex-col items-center">
          <div
            className="z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold text-white shadow-sm"
            style={{
              backgroundColor: ACCENT,
              boxShadow: `0 0 0 4px color-mix(in oklab, var(--subject-mathematics) 16%, transparent)`,
            }}
          >
            3
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm sm:rounded-2xl">
            <div
              className="border-b border-border/40 px-4 py-2.5"
              style={{ backgroundColor: "color-mix(in oklab, var(--subject-mathematics) 6%, transparent)" }}
            >
              <div className="t-micro mb-0.5" style={{ color: ACCENT }}>
                Step 3
              </div>
              <h4 className="text-sm font-extrabold tracking-tight text-foreground">
                Direction Ratios
              </h4>
            </div>
            <div className="px-4 py-4 sm:px-5">
              <p className="text-[0.95rem] leading-[1.7] text-foreground/85">
                Any three real numbers a, b, c proportional to the direction cosines l, m, n are
                called direction ratios.
              </p>
              <FormulaBlock latex={String.raw`a=\lambda l,\qquad b=\lambda m,\qquad c=\lambda n`} />
              <HighlightBlock label="Relation between Direction Cosines and Direction Ratios">
                <div className="[&>div]:my-2">
                  <FormulaBlock latex={String.raw`l=\frac{a}{\pm\sqrt{a^2+b^2+c^2}}`} />
                  <FormulaBlock latex={String.raw`m=\frac{b}{\pm\sqrt{a^2+b^2+c^2}}`} />
                  <FormulaBlock latex={String.raw`n=\frac{c}{\pm\sqrt{a^2+b^2+c^2}}`} />
                </div>
              </HighlightBlock>
            </div>
          </div>
        </div>
      </li>
    </ol>
  );
}
