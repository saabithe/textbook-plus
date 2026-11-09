import type { ReactNode } from "react";

interface AlcoholClassRow {
  classification: string;
  groups: string;
  example: ReactNode;
}

interface PhenolClass {
  classification: string;
  groups: string;
}

interface HydroxylGroupClassificationProps {
  alcoholRows: AlcoholClassRow[];
  phenolClasses: PhenolClass[];
}

/**
 * HydroxylGroupClassification — one framed classification block split in two:
 * the alcohols keep their examples in a table, the phenols sit as three compact
 * count cards. Both halves share the same "number of –OH groups" basis.
 */
export function HydroxylGroupClassification({
  alcoholRows,
  phenolClasses,
}: HydroxylGroupClassificationProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">Basis of classification</span>
        <span className="text-xs text-muted-foreground">
          Number of hydroxyl groups present in the structure.
        </span>
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr]">
        <div className="min-w-0 p-4 lg:border-r lg:border-border">
          <p className="text-sm font-extrabold text-foreground">Alcohols</p>

          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-2 pr-3 align-bottom text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                    Classification
                  </th>
                  <th className="pb-2 pr-3 align-bottom text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                    –OH groups
                  </th>
                  <th className="pb-2 align-bottom text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody>
                {alcoholRows.map((row) => (
                  <tr key={row.classification} className="border-b border-border/60 last:border-0">
                    <td className="py-2.5 pr-3 align-top font-semibold text-foreground">
                      {row.classification}
                    </td>
                    <td className="py-2.5 pr-3 align-top tabular-nums text-foreground/90">
                      {row.groups}
                    </td>
                    <td className="py-2.5 align-top text-foreground/90">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t border-border p-4 lg:border-t-0">
          <p className="text-sm font-extrabold text-foreground">Phenols</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Classified by the number of –OH groups directly attached to the benzene ring.
          </p>

          <div className="mt-3 space-y-2">
            {phenolClasses.map((item, index) => (
              <div
                key={item.classification}
                className="flex items-center gap-3 rounded-md border border-border/70 bg-muted/30 px-3 py-2"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_13%,transparent)] text-xs font-extrabold text-[var(--subject-chemistry)]">
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">{item.classification}</p>
                  <p className="text-xs text-muted-foreground">{item.groups}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
