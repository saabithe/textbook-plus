import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Field = "octahedral" | "tetrahedral";
type Tone = "warning" | "physics";

interface Level {
  set: ReactNode;
  orbitals: ReactNode[];
  value: string;
  tone: Tone;
}

interface DiagramData {
  title: string;
  upper: Level;
  lower: Level;
}

const OCTAHEDRAL: DiagramData = {
  title: "Octahedral field",
  upper: {
    set: (
      <>
        e<sub>g</sub> set
      </>
    ),
    orbitals: [
      <>
        d<sub>x²−y²</sub>
      </>,
      <>
        d<sub>z²</sub>
      </>,
    ],
    value: "+0.6Δₒ",
    tone: "warning",
  },
  lower: {
    set: (
      <>
        t<sub>2g</sub> set
      </>
    ),
    orbitals: [
      <>
        d<sub>xy</sub>
      </>,
      <>
        d<sub>yz</sub>
      </>,
      <>
        d<sub>xz</sub>
      </>,
    ],
    value: "−0.4Δₒ",
    tone: "physics",
  },
};

const TETRAHEDRAL: DiagramData = {
  title: "Tetrahedral field",
  upper: {
    set: (
      <>
        t<sub>2</sub> set
      </>
    ),
    orbitals: [
      <>
        d<sub>xy</sub>
      </>,
      <>
        d<sub>yz</sub>
      </>,
      <>
        d<sub>xz</sub>
      </>,
    ],
    value: "+0.4Δₜ",
    tone: "warning",
  },
  lower: {
    set: (
      <>
        e set
      </>
    ),
    orbitals: [
      <>
        d<sub>x²−y²</sub>
      </>,
      <>
        d<sub>z²</sub>
      </>,
    ],
    value: "−0.6Δₜ",
    tone: "physics",
  },
};

const TONE = {
  warning: {
    frame: "border-warning/40",
    fill: "bg-warning/10",
    badge: "bg-warning/15 text-warning",
    dot: "bg-warning",
  },
  physics: {
    frame: "border-[color-mix(in_oklab,var(--subject-physics)_40%,transparent)]",
    fill: "bg-[color-mix(in_oklab,var(--subject-physics)_10%,transparent)]",
    badge:
      "bg-[color-mix(in_oklab,var(--subject-physics)_15%,transparent)] text-[var(--subject-physics)]",
    dot: "bg-[var(--subject-physics)]",
  },
} as const;

function Level({ level }: { level: Level }) {
  const tone = TONE[level.tone];

  return (
    <div>
      <div className="flex items-stretch gap-3">
        <div className={cn("min-w-0 flex-1 rounded-md border px-3 py-2.5", tone.frame, tone.fill)}>
          <p className="flex items-center gap-2 text-sm font-extrabold text-foreground">
            <span aria-hidden className={cn("h-2 w-2 rounded-[1px]", tone.dot)} />
            {level.set}
          </p>
          <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.82rem] font-semibold text-foreground/80">
            {level.orbitals.map((orbital, index) => (
              <span key={index}>{orbital}</span>
            ))}
          </p>
        </div>
        <div className="flex w-[5.5rem] shrink-0 items-center justify-end">
          <span
            className={cn(
              "rounded-[3px] px-2 py-1 text-xs font-extrabold tabular-nums",
              tone.badge,
            )}
          >
            {level.value}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * CrystalFieldSplittingDiagram — two horizontal orbital groups with the
 * barycentre between them. `e_g` / `t_2g` in an octahedral field, `t_2` / `e`
 * in a tetrahedral field. Energy values sit beside each group.
 */
export function CrystalFieldSplittingDiagram({
  field = "octahedral",
}: {
  field?: Field;
}) {
  const data = field === "octahedral" ? OCTAHEDRAL : TETRAHEDRAL;

  return (
    <figure className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-3 border-b border-border px-4 py-3">
        <span className="t-micro">{data.title}</span>
        <span className="t-micro">Energy</span>
      </div>

      <div className="p-4">
        <Level level={data.upper} />

        <div className="relative my-3 flex items-center justify-center">
          <span
            aria-hidden
            className="absolute inset-x-0 top-1/2 border-t border-dashed border-border"
          />
          <span className="t-micro relative bg-card px-2">Barycentre</span>
        </div>

        <Level level={data.lower} />
      </div>
    </figure>
  );
}
