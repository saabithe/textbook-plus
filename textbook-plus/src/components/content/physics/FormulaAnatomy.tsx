import type { ReactNode } from "react";
import { Formula } from "@/components/content/Formula";

interface Token {
  latex: string;
  label: ReactNode;
}

interface FormulaAnatomyProps {
  title?: string;
  /** The full equation, rendered as a faithful single KaTeX block above the anatomy. */
  equation: string;
  tokens: Token[];
}

export function FormulaAnatomy({ title, equation, tokens }: FormulaAnatomyProps) {
  return (
    <div className="my-6 rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
      {title && (
        <div className="mb-3 text-center text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
          {title}
        </div>
      )}
      <div className="mb-5 overflow-x-auto text-center">
        <Formula block>{equation}</Formula>
      </div>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 px-2 pb-2">
        {tokens.map((token, i) => (
          <div key={i} className="flex w-[6rem] min-w-0 flex-col items-center text-center sm:w-[6.5rem]">
            <div className="flex h-10 w-full items-center justify-center overflow-x-auto rounded-xl border border-violet-500/25 bg-violet-500/[0.06] px-1">
              <span className="whitespace-nowrap">
                <Formula>{token.latex}</Formula>
              </span>
            </div>
            <div className="my-1 h-3 w-px shrink-0 bg-violet-500/40" />
            <div className="flex min-h-[2.75rem] items-start justify-center px-0.5">
              <span className="text-[0.72rem] font-semibold leading-tight text-foreground/75">
                {token.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}