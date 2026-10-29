interface FactCardProps {
  title?: string;
  definition: string;
  icon?: string;
}

export function FactCard({ title, definition, icon }: FactCardProps) {
  return (
    <div className="my-6 rounded-lg border border-border bg-card px-5 py-4">
      <div className="flex items-start gap-3">
        {icon && (
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] border border-border bg-card text-base leading-none text-muted-foreground">
            {icon}
          </span>
        )}
        <div className="min-w-0">
          {title && <span className="t-micro mb-1 block text-foreground">{title}</span>}
          <p className="text-base leading-relaxed text-foreground/80">{definition}</p>
        </div>
      </div>
    </div>
  );
}