import { SignBadge, type Sign } from "@/components/content/biology/InteractionSigns";

export interface InteractionEntry {
  name: string;
  href: string;
  a: Sign;
  b: Sign;
  aSpecies: string;
  bSpecies: string;
  aRole: string;
  bRole: string;
  meaning: string;
}

interface InteractionMatrixProps {
  items: InteractionEntry[];
}

/**
 * InteractionMatrix — 2 × 3 reference grid on desktop, single column on
 * mobile. Cells are separated by hairlines (a 1px grid gap over the border
 * colour), never by six independent card frames. Each interaction name links
 * to its detailed section.
 */
export function InteractionMatrix({ items }: InteractionMatrixProps) {
  return (
    <div className="my-6">
      <div className="t-micro">The six interactions at a glance</div>
      <div className="mt-3 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            style={{ textDecoration: "none" }}
            className="group flex flex-col gap-3 bg-card p-4 no-underline transition-colors hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:outline-none"
          >
            <span className="text-sm font-semibold tracking-tight text-foreground underline-offset-4 group-hover:underline">
              {item.name}
            </span>

            <div className="grid grid-cols-2 gap-3">
              <div className="min-w-0">
                <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  {item.aSpecies}
                </div>
                <SignBadge sign={item.a} size="lg" className="mt-1.5" />
                <div className="mt-1.5 text-xs leading-snug text-foreground/80">{item.aRole}</div>
              </div>
              <div className="min-w-0 border-l border-border pl-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  {item.bSpecies}
                </div>
                <SignBadge sign={item.b} size="lg" className="mt-1.5" />
                <div className="mt-1.5 text-xs leading-snug text-foreground/80">{item.bRole}</div>
              </div>
            </div>

            <div className="mt-auto text-xs leading-relaxed text-muted-foreground">{item.meaning}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
