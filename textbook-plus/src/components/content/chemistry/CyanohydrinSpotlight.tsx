import { type ReactNode } from "react";
import { Formula } from "@/components/content/Formula";

export interface CyanohydrinGroup {
  /** Group symbol, e.g. "–OH". */
  symbol: ReactNode;
  /** One line naming what the group is, e.g. "Hydroxyl". */
  label: ReactNode;
}

export interface CyanohydrinCase {
  /** Family name, e.g. "Aldehyde". */
  family: ReactNode;
  /** KaTeX general structure for that family. */
  equation: string;
  /** The two groups sitting on the carbon, spelled out, e.g. "R and H". */
  groups: ReactNode;
}

interface CyanohydrinSpotlightProps {
  /** Small label above the structure. */
  label?: ReactNode;
  /** KaTeX for the general cyanohydrin, e.g. R₂C(OH)(CN). */
  equation: string;
  /** The two groups the addition puts on the carbon. */
  groups: CyanohydrinGroup[];
  /** The same product written for an aldehyde and for a ketone. */
  cases: CyanohydrinCase[];
}

/**
 * CyanohydrinSpotlight — the cyanohydrin drawn once at full size, the two groups
 * the addition installs called out beneath it, then the same structure written
 * for an aldehyde and for a ketone so the R/H difference is visible rather than
 * described.
 */
export function CyanohydrinSpotlight({
  label,
  equation,
  groups,
  cases,
}: CyanohydrinSpotlightProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] bg-card">
      <div className="border-b border-border/70 bg-[color-mix(in_oklab,var(--subject-chemistry)_5%,transparent)] px-3 py-4 text-center">
        <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.12em] text-[var(--subject-chemistry)]">
          {label ?? "General product structure"}
        </p>
        <div className="mt-2 flex min-h-[2.6rem] items-center justify-center overflow-x-auto text-[1.55rem] font-extrabold leading-none tracking-tight text-foreground">
          <Formula>{equation}</Formula>
        </div>

        <ul className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
          {groups.map((group, index) => (
            <li
              key={index}
              className="flex items-baseline gap-1.5 rounded-[3px] border border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-card px-2 py-1"
            >
              <span className="text-[0.9rem] font-extrabold leading-none text-[var(--subject-chemistry)]">
                {group.symbol}
              </span>
              <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.07em] text-muted-foreground">
                {group.label}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
          Newly formed groups
        </p>
      </div>

      <div className="grid gap-px bg-border/70 sm:grid-cols-2">
        {cases.map((item, index) => (
          <div key={index} className="bg-card px-3 py-3">
            <div className="flex items-baseline justify-between gap-2">
              <p className="text-[0.78rem] font-extrabold leading-snug text-foreground">
                {item.family}
              </p>
              <span className="shrink-0 rounded-[3px] bg-muted px-1.5 py-0.5 text-[0.6rem] font-extrabold text-foreground/80">
                {item.groups}
              </span>
            </div>
            <div className="mt-2 overflow-x-auto text-center text-foreground">
              <Formula>{item.equation}</Formula>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
