interface IOItem {
  label: string;
  description?: string;
}

interface IODiagramProps {
  title?: string;
  inputs: IOItem[];
  process: string;
  outputs: IOItem[];
}

export function IODiagram({ title, inputs, process, outputs }: IODiagramProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <div className="flex-1 rounded-lg border border-border/40 bg-muted/20 p-3">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Inputs</span>
          <ul className="mt-1.5 space-y-1">
            {inputs.map((item, i) => (
              <li key={i} className="text-sm text-foreground">• {item.label}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-muted-foreground text-lg">→</span>
        </div>
        <div className="flex-1 rounded-lg border border-primary/30 bg-primary/5 p-3">
          <span className="text-xs font-medium text-primary uppercase tracking-wide">Process</span>
          <p className="text-sm text-foreground mt-1">{process}</p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-muted-foreground text-lg">→</span>
        </div>
        <div className="flex-1 rounded-lg border border-border/40 bg-muted/20 p-3">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Outputs</span>
          <ul className="mt-1.5 space-y-1">
            {outputs.map((item, i) => (
              <li key={i} className="text-sm text-foreground">• {item.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
