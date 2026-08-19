interface CycleStep {
  label: string;
  detail?: string;
}

interface CycleDiagramProps {
  title?: string;
  steps: CycleStep[];
}

export function CycleDiagram({ title, steps }: CycleDiagramProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="flex flex-wrap justify-center gap-3">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="rounded-full border border-border/60 bg-muted/30 px-4 py-2 text-center min-w-[100px]">
              <p className="text-sm font-medium text-foreground">{step.label}</p>
              {step.detail && (
                <p className="text-xs text-muted-foreground mt-0.5">{step.detail}</p>
              )}
            </div>
            {i < steps.length - 1 && (
              <span className="text-muted-foreground text-lg">→</span>
            )}
          </div>
        ))}
        <span className="text-muted-foreground text-lg">↻</span>
      </div>
    </div>
  );
}
