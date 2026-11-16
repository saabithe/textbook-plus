/**
 * BiotechDefinitionCard — the chapter's opening concept card.
 *
 * The three load-bearing phrases carry one accent each so the sentence can be
 * read as three parts: what does the work (living organisms), the agent
 * (enzymes), and the output (products and processes).
 */

const EXAMPLES = ["Making curd", "Making bread", "Making wine"];

export function BiotechDefinitionCard() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border bg-card">
      <div className="border-b border-border bg-muted/40 px-4 py-2.5 sm:px-5">
        <span className="t-micro">Biotechnology (BT) — definition</span>
      </div>

      <div className="px-4 py-4 sm:px-5 sm:py-5">
        <div className="text-[1.0625rem] leading-[1.75] text-foreground sm:text-lg">
          Technology that uses{" "}
          <span className="rounded-[4px] bg-teal-100 px-1.5 py-0.5 font-semibold text-teal-900 dark:bg-teal-900/50 dark:text-teal-100">
            living organisms
          </span>{" "}
          or{" "}
          <span className="rounded-[4px] bg-violet-100 px-1.5 py-0.5 font-semibold text-violet-900 dark:bg-violet-900/50 dark:text-violet-100">
            enzymes
          </span>{" "}
          obtained from organisms to produce{" "}
          <span className="rounded-[4px] bg-amber-100 px-1.5 py-0.5 font-semibold text-amber-900 dark:bg-amber-900/50 dark:text-amber-100">
            products and processes
          </span>{" "}
          useful to humans.
        </div>

        <div className="mt-4 border-t border-border pt-3">
          <div className="t-micro">Examples</div>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {EXAMPLES.map((example) => (
              <span
                key={example}
                className="inline-flex items-center rounded-full border border-border bg-muted/40 px-3 py-1 text-sm text-foreground"
              >
                {example}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
