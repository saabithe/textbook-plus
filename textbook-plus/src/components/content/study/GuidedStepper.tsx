"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface GuidedStep {
  instruction: string;
  checkpoint?: string;
}

interface GuidedStepperProps {
  title?: string;
  steps: GuidedStep[];
}

export function GuidedStepper({ title, steps }: GuidedStepperProps) {
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setCompleted(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="space-y-0">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <button
                onClick={() => toggle(i)}
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors",
                  completed.has(i)
                    ? "bg-green-500 text-white"
                    : "bg-primary/10 text-primary"
                )}
              >
                {completed.has(i) ? <Check className="h-3.5 w-3.5" /> : i + 1}
              </button>
              {i < steps.length - 1 && (
                <div className={cn(
                  "w-px flex-1 my-1",
                  completed.has(i) ? "bg-green-500/30" : "bg-border/60"
                )} />
              )}
            </div>
            <div className="pb-5 pt-0.5">
              <p className={cn(
                "text-sm leading-snug",
                completed.has(i) ? "text-muted-foreground line-through" : "text-foreground font-medium"
              )}>
                {step.instruction}
              </p>
              {step.checkpoint && (
                <p className="text-xs text-muted-foreground mt-1 italic">Checkpoint: {step.checkpoint}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
