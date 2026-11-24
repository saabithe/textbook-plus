/*
 * VectorAdditionPropertiesGrid — compact 2×2 revision of the four properties
 * of vector addition. One property, one equation and one direct restatement
 * per card. Purely presentational: no hooks, no client directive, no external
 * libraries. LaTeX stays in String.raw with single backslashes.
 */

import { Formula } from "@/components/content/Formula";

const ACCENT = "var(--subject-mathematics)";

const PROPERTIES = [
  {
    name: "Commutative",
    latex: String.raw`\vec a+\vec b=\vec b+\vec a`,
    meaning: "Order does not change the sum.",
  },
  {
    name: "Associative",
    latex: String.raw`(\vec a+\vec b)+\vec c=\vec a+(\vec b+\vec c)`,
    meaning: "Grouping does not change the sum.",
  },
  {
    name: "Additive Identity",
    latex: String.raw`\vec a+\vec 0=\vec a=\vec 0+\vec a`,
    meaning: "Adding zero leaves the vector unchanged.",
  },
  {
    name: "Additive Inverse",
    latex: String.raw`\vec a+(-\vec a)=\vec 0`,
    meaning: "A vector plus its negative is zero.",
  },
] as const;

export function VectorAdditionPropertiesGrid() {
  return (
    <section className="my-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {PROPERTIES.map((property) => (
          <article
            key={property.name}
            className="min-w-0 rounded-2xl border border-border/60 bg-card p-4 shadow-sm"
          >
            <h3 className="t-micro" style={{ color: ACCENT }}>
              {property.name}
            </h3>
            <div className="mt-2 overflow-x-auto text-sm font-extrabold leading-snug text-foreground">
              <Formula>{property.latex}</Formula>
            </div>
            <p className="mt-2 text-sm leading-[1.7] text-foreground/80">{property.meaning}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
