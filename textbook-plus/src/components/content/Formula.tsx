"use client";

import { useEffect, useRef } from "react";
import katex from "katex";

interface FormulaProps {
  children: string;
  block?: boolean;
}

export function Formula({ children, block = false }: FormulaProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      katex.render(children, ref.current, {
        displayMode: block,
        throwOnError: false,
      });
    }
  }, [children, block]);

  if (block) {
    return (
      <div className="my-6 text-center overflow-x-auto">
        <span ref={ref} />
      </div>
    );
  }

  return <span ref={ref} />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FormulaBlock({ latex, important = false }: { latex: string; important?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      katex.render(latex, ref.current, {
        displayMode: true,
        throwOnError: false,
      });
    }
  }, [latex]);

  return (
    <div className={`my-6 text-center overflow-x-auto ${important ? "rounded-xl border border-border/60 bg-muted/30 py-4 px-6" : ""}`}>
      <span ref={ref} />
    </div>
  );
}
