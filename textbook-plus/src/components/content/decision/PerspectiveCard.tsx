interface Perspective {
  label: string;
  viewpoint: string;
  icon?: string;
}

interface PerspectiveCardProps {
  title?: string;
  perspectives: Perspective[];
}

export function PerspectiveCard({ title, perspectives }: PerspectiveCardProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
      <div className="grid gap-3 sm:grid-cols-2">
        {perspectives.map((p, i) => (
          <div key={i} className="rounded-lg border border-border/40 p-3">
            <div className="flex items-center gap-2 mb-1">
              {p.icon && <span className="text-base">{p.icon}</span>}
              <span className="text-sm font-semibold">{p.label}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.viewpoint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
