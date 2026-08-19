interface FactCardProps {
  title?: string;
  definition: string;
  icon?: string;
}

export function FactCard({ title, definition, icon }: FactCardProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-muted/30 px-5 py-4 my-6">
      <div className="flex items-start gap-3">
        {icon && <span className="text-lg mt-0.5">{icon}</span>}
        <div>
          {title && <span className="text-sm font-semibold block mb-1">{title}</span>}
          <p className="text-sm leading-relaxed text-muted-foreground">{definition}</p>
        </div>
      </div>
    </div>
  );
}
