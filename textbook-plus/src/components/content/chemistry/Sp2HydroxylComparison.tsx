import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Sp2Case {
  title: string;
  structure: ReactNode;
  caption?: string;
  definition: ReactNode;
}

interface Sp2HydroxylComparisonProps {
  cases: Sp2Case[];
}

/**
 * Sp2HydroxylComparison — vinylic alcohols beside phenols. Both structures put
 * the same green mark on the sp² carbon that carries –OH, so the shared
 * classification reads at a glance.
 */
export function Sp2HydroxylComparison({ cases }: Sp2HydroxylComparisonProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <span className="t-micro">–OH bonded to an sp² carbon</span>
      </div>

      <div className="grid sm:grid-cols-2">
        {cases.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "min-w-0 p-4",
              index === 0 && "sm:border-r sm:border-border",
              index > 0 && "border-t border-border sm:border-t-0",
            )}
          >
            <p className="text-sm font-extrabold text-foreground">{item.title}</p>

            <div className="mt-3 flex min-h-[6rem] items-center justify-center overflow-x-auto rounded-md border border-border/70 bg-muted/30 px-3 py-5">
              <div className="text-xl font-extrabold tracking-tight text-foreground">
                {item.structure}
              </div>
            </div>

            {item.caption && (
              <p className="mt-2 text-center text-xs text-muted-foreground">{item.caption}</p>
            )}

            <p className="mt-3 text-sm leading-relaxed text-foreground/90">
              <span className="font-extrabold text-foreground">Definition:</span> {item.definition}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-border px-4 py-2.5">
        <span
          aria-hidden
          className="h-2 w-2 rounded-[2px] bg-[color-mix(in_oklab,var(--subject-chemistry)_55%,transparent)]"
        />
        <span className="text-[0.72rem] text-muted-foreground">
          Highlighted — the sp² carbon directly bonded to –OH.
        </span>
      </div>
    </section>
  );
}
