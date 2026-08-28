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

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export function FormulaBlock({ latex, important = false }: { latex: string; important?: boolean }) {
  const html = katex.renderToString(latex, {
    displayMode: true,
    throwOnError: false,
  });

  return (
    <div className={`my-6 text-center overflow-x-auto ${important ? "rounded-xl border border-border/60 bg-muted/30 py-4 px-6" : ""}`}>
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}