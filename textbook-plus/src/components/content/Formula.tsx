"use client";

import katex from "katex";

interface FormulaProps {
  children: string;
  block?: boolean;
}

/**
 * A formula is centred ink, never a framed widget.
 *
 * KaTeX owns `.katex` at `1.21em`, so the parent is set to 1.05rem (≈16.8px)
 * which renders the display math at ≈20px — overriding `.katex` itself from
 * here would lose to the unlayered katex stylesheet.
 */
export function Formula({ children, block = false }: FormulaProps) {
  const html = katex.renderToString(children, {
    displayMode: block,
    throwOnError: false,
  });

  if (block) {
    return (
      <div className="my-6 overflow-x-auto text-center text-foreground">
        <span
          className="text-[1.05rem]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }

  return (
    <span className="formula-inline text-foreground">
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
      {label && <div className="t-micro mb-2 text-center">{label}</div>}
      <div className="relative">
        <div className="overflow-x-auto text-center text-foreground">
          <span
            className={important ? "text-[1.1rem]" : "text-[1.05rem]"}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        {tag && <span className="t-micro absolute -top-1 right-0">{tag}</span>}
      </div>
    </div>
  );
}
