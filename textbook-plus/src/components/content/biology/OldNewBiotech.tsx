/**
 * OldNewBiotech — the same anatomy on both sides so the comparison is the
 * only thing that varies: basis and examples. A single hairline divides the
 * two halves.
 */

export function OldNewBiotech() {
  return (
    <div className="my-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-2">
      <section className="flex flex-col bg-card p-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Old biotechnology
        </div>
        <div className="mt-1 text-base font-semibold tracking-tight text-foreground">Natural abilities</div>

        <div className="mt-3 rounded-lg border border-border bg-muted/30 px-3 py-2">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Core basis</div>
          <div className="mt-0.5 text-sm leading-snug text-foreground">Natural abilities of organisms.</div>
        </div>

        <div className="mt-3">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Examples</div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {["Making curd", "Making bread", "Making wine"].map((example) => (
              <span
                key={example}
                className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2 py-0.5 text-xs text-foreground"
              >
                {example}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col bg-card p-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
          New biotechnology
        </div>
        <div className="mt-1 text-base font-semibold tracking-tight text-foreground">Genetic modification</div>

        <div className="mt-3 rounded-lg border border-indigo-600/25 bg-indigo-50/50 px-3 py-2 dark:bg-indigo-950/25">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
            Core basis
          </div>
          <div className="mt-0.5 text-sm leading-snug text-foreground">
            Genetically modifying organisms to obtain products.
          </div>
        </div>

        <div className="mt-3">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Examples</div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {["Insulin production", "Test-tube baby / IVF", "Vaccine production", "Gene therapy"].map((example) => (
              <span
                key={example}
                className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2 py-0.5 text-xs text-foreground"
              >
                {example}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
