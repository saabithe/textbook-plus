import type { ReactNode } from "react";

const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

interface Criterion {
  number: number;
  title: string;
  detail: ReactNode;
}

const CRITERIA: Criterion[] = [
  {
    number: 1,
    title: "Replication",
    detail: (
      <>
        <strong>DNA and RNA</strong> can both replicate in appropriate biological
        systems, but <strong>proteins</strong> cannot independently fulfil this
        requirement.
      </>
    ),
  },
  {
    number: 2,
    title: "Chemical and Structural Stability",
    detail:
      "It must remain sufficiently stable across life stages, ages and physiological conditions, because excessive instability would compromise genetic information.",
  },
  {
    number: 3,
    title: "Mutation",
    detail:
      "It must allow mutations at a controlled rate, since mutations provide the variation required for evolution.",
  },
  {
    number: 4,
    title: "Expression",
    detail:
      "It must be capable of expressing its information as inherited (Mendelian) characters.",
  },
];

/**
 * GeneticMaterialCriteria — the four requirements a molecule must satisfy to
 * act as genetic material, as four compact numbered cards.
 */
export function GeneticMaterialCriteria() {
  return (
    <section className="my-6">
      <div className="text-sm font-bold tracking-tight text-foreground">
        What makes a molecule suitable as genetic material?
      </div>
      <p className="mt-1 text-sm leading-relaxed text-foreground">
        A molecule functioning as genetic material must satisfy{" "}
        <strong>four major criteria</strong>:
      </p>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {CRITERIA.map((criterion) => (
          <div
            key={criterion.number}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <div className={EYEBROW}>Criterion {criterion.number}</div>
            <p className="mt-1.5 text-sm font-bold tracking-tight text-foreground">
              {criterion.title}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground">
              {criterion.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
