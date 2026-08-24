interface KanbanItem {
  label: string;
  description?: string;
}

interface KanbanColumn {
  title: string;
  items: KanbanItem[];
}

interface KanbanProps {
  title?: string;
  columns: KanbanColumn[];
}

export function Kanban({ title, columns }: KanbanProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div
        className="grid grid-cols-1 gap-3 sm:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))]"
        style={{ "--cols": String(columns.length) } as React.CSSProperties}
      >
        {columns.map((col, i) => (
          <div key={i} className="rounded-lg border border-border/40 bg-muted/20 p-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{col.title}</span>
            <div className="mt-2 space-y-2">
              {col.items.map((item, j) => (
                <div key={j} className="rounded bg-background border border-border/30 p-2">
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  {item.description && (
                    <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
