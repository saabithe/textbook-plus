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
        <div className="mb-1 text-center text-[0.9rem] font-extrabold tracking-wide text-foreground">
          {title}
        </div>
      )}
      <div className="space-y-0">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-3.5">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-extrabold text-white shadow-md ring-2",
                  s.final
                    ? "bg-gradient-to-br from-emerald-500 to-teal-500 shadow-emerald-500/30 ring-emerald-500/25"
                    : "bg-gradient-to-br from-violet-500 to-purple-500 shadow-violet-500/30 ring-violet-500/25"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              {i < steps.length - 1 && (
                <div className="my-1 w-0.5 flex-1 rounded-full bg-gradient-to-b from-violet-500/30 to-violet-500/5" />
              )}
            </div>
            <div className="min-w-0 flex-1 pb-6 pt-0.5">
              <div className="text-sm font-semibold leading-snug tracking-tight text-violet-900 dark:text-violet-100">
                {s.label}
              </div>
              <FormulaBlock latex={s.equation} important={s.final} tag={s.tag} />
              {s.note && (
                <p className="-mt-4 text-sm leading-relaxed text-foreground/75">{s.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}