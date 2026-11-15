import { FlowRow } from "@/components/content/biology/FlowRow";

/**
 * PreyDefenceTree — two-level defence classification.
 * Level 1: Animal defences / Plant defences.
 * Level 2: Animal → camouflage, toxicity. Plant → morphological, chemical.
 */
export function PreyDefenceTree() {
  return (
    <div className="my-6">
      <div className="t-micro">Prey defences — two levels</div>

      <div className="mt-3 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-2">
        {/* Level 1 — animals */}
        <section className="bg-card p-4">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-muted/40 text-[11px] font-bold text-foreground">
              A
            </span>
            <div className="text-sm font-semibold tracking-tight text-foreground">Animal defences</div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <DefenceCard mechanism="Camouflage / cryptic coloration" example="Insects, frogs" />
            <DefenceCard mechanism="Toxicity" example="Monarch butterfly" />
          </div>

          <div className="mt-3 rounded-lg border border-border bg-muted/20 p-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Monarch butterfly — chemical accumulation
            </div>
            <FlowRow
              className="my-0 mt-1.5"
              items={[
                { label: "Caterpillar stage", detail: "feeds on a poisonous weed" },
                { label: "Distasteful chemicals accumulate" },
              ]}
            />
          </div>
        </section>

        {/* Level 1 — plants */}
        <section className="bg-card p-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-muted/40 text-[11px] font-bold text-foreground">
                P
              </span>
              <div className="text-sm font-semibold tracking-tight text-foreground">Plant defences</div>
            </div>
            <div className="flex items-baseline gap-1.5 rounded-md border border-border bg-muted/30 px-2 py-1">
              <span className="text-sm font-bold tabular-nums text-foreground">~25%</span>
              <span className="text-[10px] leading-tight text-muted-foreground">
                of insects are phytophagous
              </span>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            <div className="rounded-lg border border-border bg-muted/20 p-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Morphological
              </div>
              <div className="mt-0.5 text-sm text-foreground">Physical structures</div>
              <div className="mt-0.5 text-xs leading-snug text-muted-foreground">
                Thorns in <em>Acacia</em> and <em>Cactus</em>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-muted/20 p-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Chemical
              </div>
              <div className="mt-0.5 text-sm text-foreground">Chemical substances</div>

              <div className="mt-1.5 space-y-1 text-xs leading-snug text-muted-foreground">
                <div>
                  Cardiac glycosides in <em>Calotropis</em> — protect against browsing by cattle and goats
                </div>
                <div>
                  Secondary metabolites —{" "}
                  <span className="text-foreground">
                    nicotine, caffeine, quinine, strychnine, opium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function DefenceCard({ mechanism, example }: { mechanism: string; example: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/20 p-3">
      <div className="text-sm font-medium leading-snug text-foreground">{mechanism}</div>
      <div className="mt-1 text-xs font-medium text-foreground/80">{example}</div>
    </div>
  );
}
