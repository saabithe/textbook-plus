import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * GeneticEngineeringFlow — three numbered stages, each arrow meaning "then".
 * The third node is the output (GMO) and carries the only strong border.
 */

const MECHANISM = [
  "Modification of genetic material (DNA/RNA).",
  "Introduction of modified genetic material into a host organism.",
  "Change in the host organism's phenotype.",
];

export function GeneticEngineeringDefinition() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Definition</div>

      <div className="mt-2 text-[1.0625rem] leading-[1.7] text-foreground">
        Techniques used to modify the{" "}
        <span className="rounded-[4px] bg-indigo-100 px-1.5 py-0.5 font-semibold text-indigo-900 dark:bg-indigo-900/50 dark:text-indigo-100">
          chemistry of genetic material (DNA and RNA)
        </span>
        , introduce it into{" "}
        <span className="rounded-[4px] bg-teal-100 px-1.5 py-0.5 font-semibold text-teal-900 dark:bg-teal-900/50 dark:text-teal-100">
          host organisms
        </span>{" "}
        and alter the{" "}
        <span className="rounded-[4px] bg-amber-100 px-1.5 py-0.5 font-semibold text-amber-900 dark:bg-amber-900/50 dark:text-amber-100">
          phenotype
        </span>{" "}
        of the host.
      </div>

      <div className="mt-4 border-t border-border pt-3">
        <div className="t-micro">Mechanism</div>
        <div className="mt-2 space-y-1.5">
          {MECHANISM.map((step, index) => (
            <div key={step} className="flex items-start gap-2">
              <span className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded border border-border bg-muted/40 text-[9px] font-bold text-muted-foreground">
                {index + 1}
              </span>
              <div className="text-sm leading-snug text-foreground">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GeneticEngineeringFlow() {
  return (
    <figure className="my-6 rounded-xl border border-border bg-card p-4">
      <div className="mt-1">
        <Stage n="1" title="Gene isolation" />
        <Step />
        <Stage n="2" title="Incorporation into host organism" detail="Bacteria / host cell" />
        <Step />
        <Stage n="3" title="Genetically Modified Organism (GMO)" output />
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Isolation, then incorporation into a host cell, then a genetically modified organism — the modified material now
        changes the host&rsquo;s phenotype.
      </figcaption>
    </figure>
  );
}

export function GeneticEngineeringExample() {
  return (
    <div className="my-4 flex items-start gap-2.5 rounded-lg border border-indigo-600/25 bg-indigo-50/60 px-3 py-2.5 dark:bg-indigo-950/25">
      <span className="mt-0.5 shrink-0 text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
        Example
      </span>
      <div className="text-sm leading-relaxed text-foreground">
        <strong className="font-semibold">β-cell gene</strong> inserted into a{" "}
        <strong className="font-semibold">host bacterium</strong>.
      </div>
    </div>
  );
}

function Stage({
  n,
  title,
  detail,
  output = false,
}: {
  n: string;
  title: string;
  detail?: string;
  output?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border px-3 py-2.5",
        output ? "border-foreground/30 bg-foreground/5" : "border-border bg-muted/25",
      )}
    >
      <span
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border bg-card text-[11px] font-bold",
          output ? "border-foreground/30 text-foreground" : "border-border text-muted-foreground",
        )}
      >
        {n}
      </span>

      <div className="min-w-0 flex-1">
        <div
          className={cn(
            "text-sm leading-snug",
            output ? "font-semibold text-foreground" : "font-medium text-foreground",
          )}
        >
          {title}
        </div>
        {detail && <div className="mt-0.5 text-xs leading-snug text-muted-foreground">{detail}</div>}
      </div>

      {output && (
        <span className="hidden shrink-0 self-center rounded-md bg-foreground px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-background sm:block">
          Output
        </span>
      )}
    </div>
  );
}

function Step() {
  return (
    <div className="flex justify-center py-1 text-muted-foreground" aria-hidden>
      <ArrowDown className="h-4 w-4" />
    </div>
  );
}
