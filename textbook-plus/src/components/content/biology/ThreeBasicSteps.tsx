/**
 * ThreeBasicSteps — the overview that opens the tools section.
 *
 * Three equally sized stages on one rail, so the third stage's two actions
 * (maintenance and transfer) read as the pair they are. Deliberately plainer
 * than the laboratory procedures further down: no enzymes, no diagrams.
 */

const STEPS = [
  {
    n: "1",
    action: "Identification",
    detail: "Identification of DNA containing desirable genes.",
  },
  {
    n: "2",
    action: "Introduction",
    detail: "Introduction of the identified DNA into the host organism.",
  },
  {
    n: "3",
    action: "Maintenance & Transfer",
    detail: "Maintenance of introduced DNA in the host and its transfer to progeny.",
    chips: ["Maintenance", "Transfer"],
  },
];

export function ThreeBasicSteps() {
  return (
    <div className="my-5" role="list">
      {STEPS.map((step, index) => (
        <div key={step.n} className="relative pb-3 pl-11 last:pb-0" role="listitem">
          {index < STEPS.length - 1 && (
            <span className="absolute bottom-0 left-[15px] top-10 w-px bg-border" aria-hidden />
          )}

          <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600/30 bg-card text-xs font-bold tabular-nums text-indigo-800 dark:text-indigo-300">
            {step.n}
          </span>

          <div className="rounded-xl border border-border bg-card px-3.5 py-3">
            <div className="text-sm font-semibold tracking-tight text-foreground">{step.action}</div>
            <div className="mt-0.5 text-sm leading-snug text-foreground/80">{step.detail}</div>

            {step.chips && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {step.chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-md border border-amber-600/30 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-amber-900 dark:bg-amber-950/30 dark:text-amber-300"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
