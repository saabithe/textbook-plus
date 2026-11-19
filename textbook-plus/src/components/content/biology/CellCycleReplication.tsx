import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Highlight } from "@/components/content/Highlight";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

interface CycleStage {
  label: string;
  highlight: boolean;
}

const CYCLE_STAGES: CycleStage[] = [
  { label: "DNA replication (S-phase)", highlight: true },
  { label: "Preparation for cell division", highlight: false },
  { label: "Cell division", highlight: false },
];

interface StepChip {
  content: ReactNode;
  number: number;
}

function StepSequence({ steps }: { steps: StepChip[] }) {
  return (
    <div className="mt-3 flex flex-col gap-2">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center gap-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-muted/40 text-[10px] font-bold tabular-nums text-muted-foreground">
            {step.number}
          </span>
          <div className="flex-1 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold leading-snug text-foreground">
            {step.content}
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-muted-foreground sm:hidden" aria-hidden />
          )}
        </div>
      ))}
    </div>
  );
}

function CycleStrip() {
  return (
    <div className="mt-4">
      <div className={EYEBROW}>Cell-cycle strip — S-phase highlighted</div>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-stretch">
        {CYCLE_STAGES.map((stage, index) => (
          <div key={stage.label} className="flex flex-1 items-center gap-2">
            <div
              className={cn(
                "flex-1 rounded-xl border p-3.5",
                stage.highlight
                  ? "border-emerald-500/50 bg-emerald-50/60 dark:bg-emerald-950/20"
                  : "border-border bg-card"
              )}
            >
              <div
                className={cn(
                  "text-sm font-semibold leading-snug",
                  stage.highlight ? "text-emerald-900 dark:text-emerald-200" : "text-foreground"
                )}
              >
                {stage.highlight ? <Highlight color="green">{stage.label}</Highlight> : stage.label}
              </div>
              {stage.highlight && (
                <div className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-emerald-700 dark:text-emerald-300">
                  S-phase
                </div>
              )}
            </div>
            {index < CYCLE_STAGES.length - 1 && (
              <ArrowRight className="mx-auto hidden h-4 w-4 shrink-0 rotate-90 text-muted-foreground sm:block sm:rotate-0" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CellCycleReplication() {
  return (
    <section className="my-8 space-y-6">
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className={EYEBROW}>5.1 S-phase</div>
        <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
          <li>
            In <strong>eukaryotic cells</strong>, DNA replication occurs during the{" "}
            <strong>S-phase (Synthesis phase)</strong> of the cell cycle.
          </li>
          <li>DNA replication takes place before cell division.</li>
        </ul>
        <CycleStrip />
      </div>

      <div>
        <div className={EYEBROW}>5.2 Relationship with cell division</div>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-4">
            <div className={EYEBROW}>Normal sequence</div>
            <StepSequence
              steps={[
                { number: 1, content: <Highlight color="green">DNA replication</Highlight> },
                { number: 2, content: "Preparation for cell division" },
                { number: 3, content: "Cell division" },
              ]}
            />
          </div>

          <div className="rounded-2xl border border-orange-500/40 bg-card p-4">
            <div className={cn(EYEBROW, "text-orange-700 dark:text-orange-300")}>Polyploidy</div>
            <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
              <li>Failure of cell division after DNA replication can result in <strong>polyploidy</strong>.</li>
              <li>
                Polyploidy refers to an increase in the number of <strong>complete chromosome sets</strong>.
              </li>
            </ul>
            <StepSequence
              steps={[
                { number: 1, content: "DNA replication" },
                { number: 2, content: "Failure of cell division" },
                {
                  number: 3,
                  content: (
                    <Highlight color="yellow">Increase in the number of complete chromosome sets</Highlight>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
