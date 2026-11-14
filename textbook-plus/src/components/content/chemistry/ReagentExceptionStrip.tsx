import type { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface ReagentExceptionStripProps {
  /** Reagent that breaks the pattern, e.g. "NaBH₄". */
  agent: ReactNode;
  /** Full name or formula line under the agent. */
  formula?: ReactNode;
  /** What it does not do, e.g. "Does not reduce carboxylic acids." */
  statement: ReactNode;
  /** Optional line explaining the consequence. */
  note?: ReactNode;
}

/**
 * ReagentExceptionStrip — one reagent pulled out of a reducing-agent set and
 * given its own warning strip. The agent is set largest, the exception is the
 * only sentence, and the strip sits outside the reaction card so it cannot be
 * read as one more reagent that works.
 */
export function ReagentExceptionStrip({
  agent,
  formula,
  statement,
  note,
}: ReagentExceptionStripProps) {
  return (
    <aside className="my-6 flex items-start gap-3 rounded-lg border border-warning/40 bg-warning/[0.06] px-4 py-3">
      <AlertTriangle
        aria-hidden
        className="mt-0.5 h-4 w-4 shrink-0 text-warning"
        strokeWidth={2.2}
      />
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-warning">
            Exception
          </span>
          <span className="text-[0.95rem] font-extrabold leading-none text-foreground">
            {agent}
          </span>
          {formula && (
            <span className="text-[0.72rem] font-semibold text-muted-foreground">{formula}</span>
          )}
        </div>
        <p className="mt-1 text-[0.84rem] font-bold leading-snug text-foreground">
          {statement}
        </p>
        {note && (
          <p className="mt-0.5 text-[0.74rem] leading-relaxed text-muted-foreground">{note}</p>
        )}
      </div>
    </aside>
  );
}
