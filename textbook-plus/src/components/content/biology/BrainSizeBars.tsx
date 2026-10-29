import { Brain } from "lucide-react";

interface BrainSizeBarsProps {
  title?: string;
}

interface BrainStage {
  stage: string;
  /** Plot value in cc — the midpoint for the Homo habilis range. */
  value: number;
  label: string;
}

const MAX_CC = 1400;

const STAGES: BrainStage[] = [
  { stage: "Homo habilis", value: 725, label: "650–800 cc" },
  { stage: "Homo erectus", value: 900, label: "900 cc" },
  { stage: "Homo sapiens", value: 1350, label: "1350 cc" },
  { stage: "Neanderthal man", value: 1400, label: "1400 cc" },
];

export function BrainSizeBars({ title = "Brain size along the human line" }: BrainSizeBarsProps) {
  return (
    <div className="my-6 rounded-lg border border-border bg-card p-4">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
          <Brain className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="text-sm font-extrabold tracking-tight text-foreground">{title}</span>
      </div>

      <div
        role="img"
        aria-label="Horizontal bar chart of brain capacity along the human line: Homo habilis about 650 to 800 cc, Homo erectus 900 cc, Homo sapiens 1350 cc, and Neanderthal man 1400 cc — an overall increase with the largest jump between Homo erectus and Homo sapiens."
        className="mt-4 flex flex-col gap-3"
      >
        {STAGES.map(({ stage, value, label }) => {
          const pct = Math.max((value / MAX_CC) * 100, 4);

          return (
            <div
              key={stage}
              className="grid grid-cols-1 items-center gap-x-3 gap-y-1.5 sm:grid-cols-[8.5rem_1fr_4.5rem]"
            >
              <span className="text-sm font-bold leading-snug text-foreground">{stage}</span>
              <div className="h-2.5 w-full overflow-hidden rounded-[3px] bg-muted">
                <div
                  className="h-full rounded-[3px] bg-[var(--subject-biology)]"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-xs font-semibold tabular-nums text-muted-foreground sm:text-right">
                {label}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        650–800 cc for Homo habilis; the range is shown at its midpoint.
      </p>
    </div>
  );
}
