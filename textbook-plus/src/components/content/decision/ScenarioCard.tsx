interface Scenario {
  label: string;
  outcome: string;
  probability?: string;
}

interface ScenarioCardProps {
  title?: string;
  scenarios: Scenario[];
}

export function ScenarioCard({ title, scenarios }: ScenarioCardProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="grid gap-3 sm:grid-cols-2">
        {scenarios.map((s, i) => (
          <div key={i} className="rounded-lg border border-border/40 bg-muted/20 p-3">
            <p className="text-sm font-medium text-foreground">{s.label}</p>
            <p className="text-sm text-muted-foreground mt-1">{s.outcome}</p>
            {s.probability && (
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                {s.probability}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
