"use client";

import { useState } from "react";
import { ChevronRight, Sigma } from "lucide-react";
import { cn } from "@/lib/utils";
import { FormulaBlock } from "@/components/content/Formula";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

interface DerivationStep {
  label: React.ReactNode;
  latex: string;
  note?: React.ReactNode;
}

interface DerivationProps {
  title: string;
  steps: DerivationStep[];
  /** Marks the last step as the highlighted result. Defaults to true. */
  highlightResult?: boolean;
}

export function Derivation({
  title,
  steps,
  highlightResult = true,
}: DerivationProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-violet-500/25 bg-card shadow-sm">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="group flex w-full items-center gap-2.5 px-4 py-3 text-left transition-colors border-b border-violet-500/10 bg-violet-500/[0.06] hover:bg-violet-500/[0.10] dark:bg-violet-500/[0.10] dark:hover:bg-violet-500/[0.14]">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-400 text-white shadow-sm shadow-violet-500/30 transition-transform duration-200 group-hover:-rotate-6">
            <Sigma className="h-3.5 w-3.5" />
          </span>
          <ChevronRight
            className={cn(
              "h-4 w-4 shrink-0 text-violet-600 dark:text-violet-300 transition-transform duration-200",
              open && "rotate-90"
            )}
          />
          <span className="text-sm font-extrabold tracking-wide text-violet-900 dark:text-violet-100">
            {title}
          </span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-5 py-4">
            <div className="space-y-0">
              {steps.map((step, i) => {
                const isFinal = highlightResult && i === steps.length - 1;
                return (
                  <div key={i} className="flex gap-3.5">
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-extrabold text-white shadow-md ring-2",
                          isFinal
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
                        {step.label}
                      </div>
                      <FormulaBlock latex={step.latex} important={isFinal} />
                      {step.note && (
                        <p className="-mt-4 text-sm leading-relaxed text-foreground/75">
                          {step.note}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}