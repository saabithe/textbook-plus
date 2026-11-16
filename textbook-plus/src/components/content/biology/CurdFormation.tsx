import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * CurdFormationStrip — the chapter's one worked process: organism + raw
 * material → product. Organism and raw material are visually distinct (tinted
 * vs neutral); the product is the strongest node.
 *
 * Reused at three sizes: full diagram, EFB example card, Old-BT comparison.
 */

interface CurdFormationStripProps {
  compact?: boolean;
  caption?: string;
  className?: string;
}

export function CurdFormationStrip({ compact = false, caption, className }: CurdFormationStripProps) {
  return (
    <figure
      className={cn("rounded-xl border border-border bg-card", compact ? "p-2.5" : "p-3.5", className)}
      aria-label="Lactobacillus plus milk gives curd"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2.5">
        <div className="flex flex-wrap items-center gap-1.5">
          <Node label="Organism" tone="organism" compact={compact}>
            <em>Lactobacillus</em> (B)
          </Node>
          <span className="px-0.5 text-sm font-semibold text-muted-foreground" aria-hidden>
            +
          </span>
          <Node label="Raw material" tone="plain" compact={compact}>
            Milk
          </Node>
        </div>

        <Connector label="Curd formation" />

        <Node label="Product" tone="product" compact={compact}>
          Curd
        </Node>
      </div>

      {caption && (
        <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}

function Node({
  label,
  tone,
  compact,
  children,
}: {
  label: string;
  tone: "organism" | "plain" | "product";
  compact: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-lg border",
        compact ? "px-2 py-1" : "px-2.5 py-1.5",
        tone === "organism" && "border-teal-600/35 bg-teal-50/70 dark:bg-teal-950/30",
        tone === "plain" && "border-border bg-muted/40",
        tone === "product" && "border-foreground/25 bg-foreground/5",
      )}
    >
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{label}</div>
      <div
        className={cn(
          "leading-snug",
          compact ? "text-[13px]" : "text-sm",
          tone === "product" ? "font-semibold" : "font-medium",
          tone === "organism" ? "text-teal-950 dark:text-teal-100" : "text-foreground",
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 py-0.5 sm:w-40 sm:flex-col sm:justify-center sm:gap-0.5 sm:py-0">
      <span className="text-muted-foreground" aria-hidden>
        <ArrowDown className="h-3.5 w-3.5 sm:hidden" />
        <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
      </span>
      <span className="text-[10px] leading-tight text-muted-foreground sm:text-center">{label}</span>
    </div>
  );
}
