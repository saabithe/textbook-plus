import type { ReactNode } from "react";

interface NamingSystem {
  label: string;
  rule: ReactNode;
  example: ReactNode;
}

interface NamingSystemCardsProps {
  systems: NamingSystem[];
}

/**
 * NamingSystemCards — one card per naming system. Each card keeps the same two
 * blocks: the rule, then the worked example it produces.
 */
export function NamingSystemCards({ systems }: NamingSystemCardsProps) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {systems.map((system) => (
        <article
          key={system.label}
          className="flex h-full flex-col rounded-lg border border-border bg-card p-4"
        >
          <p className="text-sm font-extrabold text-foreground">{system.label}</p>

          <div className="mt-3 rounded-md border border-border/70 bg-muted/30 px-3 py-2.5">
            <p className="t-micro">Rule</p>
            <p className="mt-1 text-sm font-semibold leading-relaxed text-foreground/90">
              {system.rule}
            </p>
          </div>

          <div className="mt-3 flex flex-1 flex-col justify-center rounded-md border border-border/70 bg-muted/30 px-3 py-4">
            <p className="t-micro text-center">Example</p>
            <p className="mt-2 overflow-x-auto whitespace-nowrap text-center text-lg font-extrabold tracking-tight text-foreground">
              {system.example}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
