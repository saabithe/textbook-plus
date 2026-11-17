import { ArrowRight } from "lucide-react";

/**
 * BiotechApplications — the seven fields biotechnology is applied in.
 *
 * Equal weight by design: one card shape, one accent, two to a row. The
 * supplied examples sit under their own field and nowhere else, so the grid
 * never implies a ranking between applications.
 */

interface Application {
  n: string;
  name: string;
  /** A two-step relationship shown as a flow, e.g. Diagnosis → Treatment. */
  flow?: [string, string];
  /** Supplied examples for this field only. */
  examples?: string[];
}

const APPLICATIONS: Application[] = [
  { n: "01", name: "Therapeutics" },
  { n: "02", name: "Diagnostics", flow: ["Diagnosis", "Treatment"] },
  { n: "03", name: "Genetically Modified Crops", examples: ["Bt crops", "RNAi"] },
  { n: "04", name: "Processed Food" },
  { n: "05", name: "Bioremediation" },
  { n: "06", name: "Waste Treatment", examples: ["Decontamination"] },
  { n: "07", name: "Energy Production" },
];

export function BiotechApplicationsGrid() {
  return (
    <div className="my-5 grid grid-cols-1 gap-2 sm:grid-cols-2" role="list">
      {APPLICATIONS.map((item) => (
        <div
          key={item.name}
          className="flex flex-col rounded-xl border border-border bg-card px-3.5 py-3"
          role="listitem"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-7 shrink-0 items-center justify-center rounded-md border border-teal-600/30 bg-teal-50 text-[10px] font-bold tabular-nums text-teal-800 dark:bg-teal-950/30 dark:text-teal-300">
              {item.n}
            </span>
            <div className="text-sm font-semibold leading-snug tracking-tight text-foreground">{item.name}</div>
          </div>

          {item.flow && (
            <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
              <span className="rounded border border-border bg-muted/40 px-1.5 py-0.5 text-[11px] font-medium text-foreground">
                {item.flow[0]}
              </span>
              <ArrowRight className="h-3 w-3 text-muted-foreground" aria-hidden />
              <span className="rounded border border-amber-600/30 bg-amber-50 px-1.5 py-0.5 text-[11px] font-medium text-amber-900 dark:bg-amber-950/30 dark:text-amber-300">
                {item.flow[1]}
              </span>
            </div>
          )}

          {item.examples && (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {item.examples.map((example) => (
                <span
                  key={example}
                  className="inline-flex items-center rounded border border-border bg-muted/40 px-1.5 py-0.5 text-[11px] text-foreground"
                >
                  {example}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
