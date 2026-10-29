import { FormulaBlock } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

interface EquationLadderStep {
  label: string;
  equation: string;
  note?: string;
  /** Marks the terminal step — emphasised with the violet "final answer" treatment. */
  final?: boolean;
  /** Optional textbook equation reference tag (e.g. "Eq. 8.5"). */
  tag?: string;
}

interface EquationLadderProps {
  title?: string;
  steps: EquationLadderStep[];
}

export function EquationLadder({ title, steps }: EquationLadderProps) {
  return (
    <div className="my-6">
      {title && (
        <div className="mb-2 text-center text-sm font-bold tracking-tight text-foreground">
          {title}
        </div>
      )}
      <div>
        {steps.map((s, i) => (
          <div
            key={i}
            className={cn(
              "py-3",
              i < steps.length - 1 ? "border-b border-border" : "",
              s.final && "border-t-2 border-foreground",
            )}
          >
            <div className="flex items-start gap-3">
              <span className="t-micro mt-1 shrink-0 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0 flex-1">
                <div className={cn("text-sm font-semibold leading-snug tracking-tight", s.final ? "text-foreground" : "text-foreground/90")}>
                  {s.label}
                </div>
                <FormulaBlock latex={s.equation} important={s.final} tag={s.tag} />
                {s.note && (
                  <p className="text-sm leading-relaxed text-foreground/75">{s.note}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}