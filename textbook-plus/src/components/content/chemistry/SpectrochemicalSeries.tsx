import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpectrochemicalSeriesProps {
  ligands: ReactNode[];
}

const TONE = {
  weak: "border-warning/40 bg-warning/10 text-foreground",
  middle: "border-border bg-muted text-foreground",
  strong:
    "border-[color-mix(in_oklab,var(--subject-physics)_40%,transparent)] bg-[color-mix(in_oklab,var(--subject-physics)_10%,transparent)] text-foreground",
} as const;

function toneFor(index: number, total: number): keyof typeof TONE {
  const position = index / Math.max(total - 1, 1);
  if (position < 1 / 3) return "weak";
  if (position > 2 / 3) return "strong";
  return "middle";
}

/**
 * SpectrochemicalSeries — one left-to-right progression of ligand chips. The
 * chips warm at the weak-field end and cool at the strong-field end; the arrow
 * underneath names the direction. The whole run scrolls on small screens
 * instead of shrinking.
 */
export function SpectrochemicalSeries({ ligands }: SpectrochemicalSeriesProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-3 border-b border-border px-4 py-3">
        <span className="t-micro">Spectrochemical series</span>
        <span className="t-micro">Δₒ increases</span>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-max px-4 py-4">
          <div className="flex items-center gap-1.5">
            {ligands.map((ligand, index) => (
              <span
                key={index}
                className={cn(
                  "rounded-[3px] border px-2.5 py-1 text-[0.8rem] font-semibold",
                  TONE[toneFor(index, ligands.length)],
                )}
              >
                {ligand}
              </span>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="t-micro whitespace-nowrap">Weak field</span>
            <span
              aria-hidden
              className="h-px flex-1 bg-gradient-to-r from-warning/60 via-border to-[var(--subject-physics)]"
            />
            <ArrowRight aria-hidden className="h-4 w-4 text-[var(--subject-physics)]" />
            <span className="t-micro whitespace-nowrap">Strong field</span>
          </div>

          <p className="t-micro mt-2">Increasing crystal field splitting strength</p>
        </div>
      </div>
    </div>
  );
}
