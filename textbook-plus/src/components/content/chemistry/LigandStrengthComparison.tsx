import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LigandStrengthComparisonProps {
  weak: ReactNode[];
  strong: ReactNode[];
  /** Classifications produced by weak-field ligands. */
  weakForms?: string[];
  /** Classifications produced by strong-field ligands. */
  strongForms?: string[];
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-[3px] border border-border bg-muted px-2.5 py-1 text-[0.8rem] font-semibold text-foreground">
      {children}
    </span>
  );
}

function Column({
  title,
  ligands,
  classifications,
  tone,
}: {
  title: string;
  ligands: ReactNode[];
  classifications: string[];
  tone: "weak" | "strong";
}) {
  const accent = tone === "weak" ? "bg-warning" : "bg-ok";
  const formChip =
    tone === "weak"
      ? "border-warning/40 bg-warning/10 text-foreground"
      : "border-ok/40 bg-ok/10 text-foreground";

  return (
    <section className="rounded-lg border border-border bg-card p-4">
      <p className="t-micro flex items-center gap-2">
        <span aria-hidden className={cn("h-2 w-2 rounded-[1px]", accent)} />
        {title}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {ligands.map((ligand, index) => (
          <Chip key={index}>{ligand}</Chip>
        ))}
      </div>

      <p className="t-micro mt-4">Form</p>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {classifications.map((classification) => (
          <span
            key={classification}
            className={cn(
              "rounded-[3px] border px-2 py-0.5 text-xs font-semibold",
              formChip,
            )}
          >
            {classification}
          </span>
        ))}
      </div>
    </section>
  );
}

/**
 * LigandStrengthComparison — the weak-field / strong-field split, with ligand
 * formulas as compact chips and the resulting complex classifications beneath.
 */
export function LigandStrengthComparison({
  weak,
  strong,
  weakForms = ["High spin complex", "Spin free complex", "Outer orbital complex"],
  strongForms = ["Low spin complex", "Spin paired complex", "Inner orbital complex"],
}: LigandStrengthComparisonProps) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      <Column
        title="Weak field ligands"
        ligands={weak}
        classifications={weakForms}
        tone="weak"
      />
      <Column
        title="Strong field ligands"
        ligands={strong}
        classifications={strongForms}
        tone="strong"
      />
    </div>
  );
}
