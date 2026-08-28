import type { ReactNode } from "react";

interface Step {
  label: ReactNode;
  description?: ReactNode;
}

interface StepperProps {
  steps: Step[];
}

export function Stepper({ steps }: StepperProps) {
  return (
    <div className="my-6 space-y-0">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-3.5">
          <div className="flex flex-col items-center">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-bold shadow-sm ring-2 ring-blue-500/20">
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-500/30 to-blue-500/5 my-1 rounded-full" />
            )}
          </div>
          <div className="pb-6 pt-0.5 flex-1 min-w-0">
            <div className="text-sm font-semibold tracking-tight text-blue-900 dark:text-blue-100 leading-snug">
              {step.label}
            </div>
            {step.description && (
              <div className="text-sm text-foreground/75 mt-1 leading-relaxed bg-muted/20 rounded-lg px-3 py-2 border border-border/30">
                {step.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
