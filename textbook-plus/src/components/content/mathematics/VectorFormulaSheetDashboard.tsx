/*
 * VectorFormulaSheetDashboard — compact grouped revision dashboard for the
 * vector formula sheet. One formula per row; no hooks, no "use client",
 * no external libraries.
 */

import { Formula } from "@/components/content/Formula";

const ACCENT = "var(--subject-mathematics)";

const GROUPS: { title: string; formulas: string[] }[] = [
  {
    title: "Vector Addition",
    formulas: [
      String.raw`\vec{AB}+\vec{BC}=\vec{AC}`,
      String.raw`\vec a+\vec b=\vec b+\vec a`,
      String.raw`(\vec a+\vec b)+\vec c =\vec a+(\vec b+\vec c)`,
    ],
  },
  {
    title: "Scalar Multiplication",
    formulas: [
      String.raw`|\lambda\vec a|=|\lambda||\vec a|`,
      String.raw`k(\vec a+\vec b)=k\vec a+k\vec b`,
      String.raw`(k+m)\vec a=k\vec a+m\vec a`,
    ],
  },
  {
    title: "Component Operations",
    formulas: [
      String.raw`\vec a=a_1\hat i+a_2\hat j+a_3\hat k`,
      String.raw`|\vec a|=\sqrt{a_1^2+a_2^2+a_3^2}`,
    ],
  },
  {
    title: "Vector Joining Two Points",
    formulas: [String.raw`\vec{PQ}=(x_2-x_1)\hat i+ (y_2-y_1)\hat j+ (z_2-z_1)\hat k`],
  },
  {
    title: "Section Formula",
    formulas: [
      String.raw`\text{Internal: }\quad \vec r=\frac{m\vec b+n\vec a}{m+n}`,
      String.raw`\text{External: }\quad \vec r=\frac{m\vec b-n\vec a}{m-n}`,
      String.raw`\text{Midpoint: }\quad \vec r=\frac{\vec a+\vec b}{2}`,
    ],
  },
];

export function VectorFormulaSheetDashboard() {
  return (
    <section className="my-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {GROUPS.map((group) => (
          <article
            key={group.title}
            className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70"
              style={{ backgroundColor: ACCENT }}
            />
            <p className="text-sm font-extrabold tracking-tight text-foreground">
              {group.title}
            </p>
            <div className="mt-4 space-y-2">
              {group.formulas.map((latex, index) => (
                <div
                  key={index}
                  className="overflow-x-auto rounded-lg border border-border/40 bg-muted/20 px-3 py-2 text-[0.95rem] font-semibold leading-relaxed text-foreground"
                >
                  <Formula>{latex}</Formula>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
