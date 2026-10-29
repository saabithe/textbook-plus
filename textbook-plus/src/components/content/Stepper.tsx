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
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] border border-border bg-card text-xs font-bold text-foreground">
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className="my-1 w-px flex-1 bg-border" />
            )}
          </div>
          <div className="pb-6 pt-0.5 flex-1 min-w-0">
            <div className="text-sm font-semibold tracking-tight text-foreground leading-snug">
              {step.label}
            </div>
            {step.description && (
              <div className="text-sm text-foreground/75 mt-1 leading-relaxed border-t border-border pt-2">
                {step.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}