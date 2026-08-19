interface Component {
  name: string;
  description?: string;
}

interface Connection {
  from: string;
  to: string;
  label?: string;
}

interface ArchitectureCardProps {
  title?: string;
  components: Component[];
  connections?: Connection[];
}

export function ArchitectureCard({ title, components, connections }: ArchitectureCardProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((c, i) => (
          <div key={i} className="rounded-lg border border-border/40 bg-muted/20 p-3">
            <p className="text-sm font-medium text-foreground">{c.name}</p>
            {c.description && (
              <p className="text-xs text-muted-foreground mt-0.5">{c.description}</p>
            )}
          </div>
        ))}
      </div>
      {connections && connections.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
          {connections.map((c, i) => (
            <span key={i}>{c.from} → {c.to}{c.label ? `: ${c.label}` : ""}</span>
          ))}
        </div>
      )}
    </div>
  );
}
