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
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      {title && (
        <div className="flex items-center gap-2.5 border-b border-border/40 bg-muted/30 px-4 py-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 shadow-sm shadow-amber-500/30">
            <ListOrdered className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="text-sm font-extrabold tracking-tight text-foreground">{title}</span>
        </div>
      )}
      <div className="px-5 py-4">
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-xs font-extrabold text-white shadow-md shadow-blue-500/30 ring-2 ring-blue-500/25">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-500/30 to-blue-500/5 my-1 rounded-full" />
                )}
              </div>
              <div className="pb-5 pt-0.5 flex-1 min-w-0">
                <p className="text-sm font-semibold leading-snug text-foreground">{step.label}</p>
                {step.description && (
                  <p className="mt-1 rounded-xl border border-border/30 bg-muted/20 px-3 py-2 text-sm leading-relaxed text-foreground/75">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}