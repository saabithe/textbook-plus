import type { ReactNode } from "react";

interface PhthalicAcidCardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Common name, e.g. "Phthalic acid". */
  common: ReactNode;
  /** IUPAC name, e.g. "Benzene-1,2-dicarboxylic acid". */
  iupac: ReactNode;
  /** Molecular formula, e.g. "C₆H₄(COOH)₂". */
  formula: ReactNode;
  /** Line about the positions the two groups occupy. */
  note?: ReactNode;
}

/** Benzene ring with –COOH on adjacent carbons, numbered 1 and 2. */
function OrthoRing() {
  return (
    <svg
      viewBox="0 0 200 150"
      role="img"
      aria-label="Benzene ring with carboxylic acid groups on adjacent carbons 1 and 2"
      className="h-auto w-44 shrink-0 text-foreground"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.4}>
        <polygon points="78,52 103,66 103,94 78,108 53,94 53,66" />
        <circle cx="78" cy="80" r="19" opacity={0.4} />
        <line x1="78" y1="52" x2="78" y2="34" />
        <line x1="103" y1="66" x2="121" y2="56" />
      </g>

      <text x="78" y="30" textAnchor="middle" fontSize={10} fontWeight={700} fill="currentColor">
        COOH
      </text>
      <text x="126" y="52" textAnchor="start" fontSize={10} fontWeight={700} fill="currentColor">
        COOH
      </text>

      <text
        x="66"
        y="48"
        textAnchor="middle"
        fontSize={7}
        fontWeight={700}
        fill="currentColor"
        opacity={0.55}
      >
        1
      </text>
      <text
        x="106"
        y="62"
        textAnchor="middle"
        fontSize={7}
        fontWeight={700}
        fill="currentColor"
        opacity={0.55}
      >
        2
      </text>
    </svg>
  );
}

/**
 * PhthalicAcidCard — the one aromatic dicarboxylic acid drawn rather than
 * tabulated: a benzene ring with the two –COOH groups on adjacent carbons, and
 * the two names beside the structure. The ring makes "adjacent" a position on
 * the page instead of a word in a note.
 */
export function PhthalicAcidCard({
  title,
  common,
  iupac,
  formula,
  note,
}: PhthalicAcidCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Aromatic dicarboxylic acid"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-[var(--subject-chemistry)]">
          ortho
        </span>
      </div>

      <div className="flex flex-col gap-3 px-3 py-3 sm:flex-row sm:items-center sm:px-4 sm:py-4">
        <div className="flex justify-center rounded-md border border-border/70 bg-muted/15 py-2 sm:w-52">
          <OrthoRing />
        </div>

        <dl className="grid min-w-0 flex-1 gap-2">
          <div className="rounded-md border border-border/70 bg-card px-3 py-2">
            <dt className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              Common name
            </dt>
            <dd className="mt-0.5 text-[0.92rem] font-extrabold leading-snug text-foreground">
              {common}
            </dd>
          </div>
          <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_32%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-2">
            <dt className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
              IUPAC name
            </dt>
            <dd className="mt-0.5 text-[0.92rem] font-extrabold leading-snug text-foreground">
              {iupac}
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 px-1">
            <dt className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              Formula
            </dt>
            <dd className="text-[0.9rem] font-bold tabular-nums text-foreground">{formula}</dd>
          </div>
          {note && (
            <p className="px-1 text-[0.78rem] leading-relaxed text-muted-foreground">{note}</p>
          )}
        </dl>
      </div>
    </section>
  );
}
