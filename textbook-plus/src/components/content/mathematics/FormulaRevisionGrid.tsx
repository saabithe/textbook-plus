/*
 * FormulaRevisionGrid — compact two-column revision of the eight vector and
 * direction-cosine formulae. One concept and one formula per card. No client
 * directive, no hooks, no external libraries.
 */

import { Formula } from "@/components/content/Formula";

export function FormulaRevisionGrid() {
  return (
    <section className="my-6">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="min-w-0 rounded-xl border border-border/60 bg-card px-3 py-2.5">
          <p className="t-micro">Position vector</p>
          <div className="mt-1 overflow-x-auto text-sm font-extrabold leading-snug text-foreground">
            <Formula>{String.raw`\vec r=x\hat i+y\hat j+z\hat k`}</Formula>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-border/60 bg-card px-3 py-2.5">
          <p className="t-micro">Magnitude</p>
          <div className="mt-1 overflow-x-auto text-sm font-extrabold leading-snug text-foreground">
            <Formula>{String.raw`\sqrt{x^2+y^2+z^2}`}</Formula>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-border/60 bg-card px-3 py-2.5">
          <p className="t-micro">Direction cosines</p>
          <div className="mt-1 overflow-x-auto text-sm font-extrabold leading-snug text-foreground">
            <Formula>{String.raw`l=\cos\alpha,\ m=\cos\beta,\ n=\cos\gamma`}</Formula>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-border/60 bg-card px-3 py-2.5">
          <p className="t-micro">Fundamental identity</p>
          <div className="mt-1 overflow-x-auto text-sm font-extrabold leading-snug text-foreground">
            <Formula>{String.raw`l^2+m^2+n^2=1`}</Formula>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-border/60 bg-card px-3 py-2.5">
          <p className="t-micro">Direction ratios</p>
          <div className="mt-1 overflow-x-auto text-sm font-extrabold leading-snug text-foreground">
            <Formula>{String.raw`a=\lambda l,\ b=\lambda m,\ c=\lambda n`}</Formula>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-border/60 bg-card px-3 py-2.5">
          <p className="t-micro">Collinearity</p>
          <div className="mt-1 overflow-x-auto text-sm font-extrabold leading-snug text-foreground">
            <Formula>{String.raw`\vec b=\lambda\vec a,\ \lambda\neq0`}</Formula>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-border/60 bg-card px-3 py-2.5">
          <p className="t-micro">Unit vector</p>
          <div className="mt-1 overflow-x-auto text-sm font-extrabold leading-snug text-foreground">
            <Formula>{String.raw`\hat a=\dfrac{\vec a}{|\vec a|}`}</Formula>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-border/60 bg-card px-3 py-2.5">
          <p className="t-micro">Vector magnitude</p>
          <div className="mt-1 overflow-x-auto text-sm font-extrabold leading-snug text-foreground">
            <Formula>{String.raw`|\vec a|=\sqrt{x^2+y^2+z^2}`}</Formula>
          </div>
        </div>
      </div>
    </section>
  );
}
