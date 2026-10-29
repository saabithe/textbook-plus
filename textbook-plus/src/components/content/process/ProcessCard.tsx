import type { ReactNode } from "react";
import { ListOrdered } from "lucide-react";

interface Step {
  label: string;
  description?: ReactNode;
}

interface ProcessCardProps {
  title?: string;
  steps: Step[];
}

export function ProcessCard({ title, steps }: ProcessCardProps) {
  return (
    <div className="my-6 rounded-lg border border-border bg-card">
      {title && (
        <div className="flex items-center gap-2.5 border-b border-border px-5 py-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-[3px] border border-border bg-card text-muted-foreground">
            <ListOrdered className="h-3.5 w-3.5" />
          </span>
          <span className="t-micro text-foreground">{title}</span>
        </div>
      )}
      <div className="px-5 py-4">
        <div>
          {steps.map((step, i) => (
            <div key={i} className={i < steps.length - 1 ? "border-b border-border py-3" : "py-3"}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border border-border bg-muted t-micro text-muted-foreground tabular-nums">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-base font-medium leading-snug text-foreground">{step.label}</p>
                  {step.description && (
                    <p className="mt-1 text-sm leading-relaxed text-foreground/75">{step.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}