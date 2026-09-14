"use client";

import katex from "katex";

interface FormulaProps {
  children: string;
  block?: boolean;
}

export function Formula({ children, block = false }: FormulaProps) {
  const html = katex.renderToString(children, {
    displayMode: block,
    throwOnError: false,
  });

  if (block) {
    return (
      <div className="my-6 text-center overflow-x-auto">
        <span dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }

  return (
    <span className="formula-inline">
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </span>
  );
}

export function FormulaBlock({
  latex,
  important = false,
  label,
  tag,
}: {
  latex: string;
  important?: boolean;
  /** Meaning label shown above the equation (e.g. "FLUX THROUGH CAPACITOR"). */
  label?: React.ReactNode;
  /** Tiny reference tag (e.g. "Eq. 8.3") shown in the top-right corner. */
  tag?: string;
}) {
  const html = katex.renderToString(latex, {
    displayMode: true,
    throwOnError: false,
  });

  return (
    <div className="my-6">
      {label && (
        <div className="mb-1.5 text-center text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
          {label}
        </div>
      )}
      <div className="relative">
        <div className={`text-center overflow-x-auto ${important ? "rounded-xl border border-violet-500/20 bg-violet-500/[0.06] dark:bg-violet-500/[0.10] py-4 px-6 shadow-sm" : ""}`}>
          <span dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        {tag && (
          <span className="absolute -top-1 right-0 text-[0.65rem] font-semibold tracking-wide text-muted-foreground/80">
            {tag}
          </span>
        )}
      </div>
    </div>
  );
}