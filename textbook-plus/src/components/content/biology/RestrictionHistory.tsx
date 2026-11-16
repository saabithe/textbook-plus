/**
 * RestrictionHistory — where the enzymes came from.
 *
 * A three-point timeline (1963, Hind II, the current library), then a focused
 * Hind II discovery card, then the plain list of enzymes in use. Kept apart
 * from the naming and action panels so the history reads as history.
 */

const TIMELINE = [
  {
    anchor: "1963",
    title: "Bacteriophage defence",
    lines: [
      <>
        Two enzymes restricting bacteriophage growth in <em>Escherichia coli</em> were isolated.
      </>,
    ],
    pair: [
      { label: "One enzyme", detail: "Added methyl groups to host DNA." },
      { label: "The other", detail: "Cut viral DNA — named restriction endonuclease." },
    ],
  },
  {
    anchor: "5 years later",
    title: "Hind II",
    lines: [
      <>
        The first restriction endonuclease, <strong className="font-semibold">Hind II</strong>, was isolated and
        characterised.
      </>,
    ],
    pair: [
      { label: "Cuts", detail: "DNA molecules at a specific recognition sequence." },
      { label: "Recognition sequence", detail: "6 base pairs (bp)." },
    ],
  },
  {
    anchor: "Now",
    title: "Current enzyme library",
    lines: [<>Over 900 restriction enzymes isolated, from more than 230 bacterial strains.</>],
    pair: [{ label: "Specificity", detail: "Each recognises different specific sequences." }],
  },
];

export function RestrictionHistoryTimeline() {
  return (
    <div className="my-5" role="list">
      {TIMELINE.map((point, index) => (
        <div key={point.anchor} className="relative pb-3 pl-11 last:pb-0" role="listitem">
          {index < TIMELINE.length - 1 && (
            <span className="absolute bottom-0 left-[15px] top-10 w-px bg-border" aria-hidden />
          )}

          <span className="absolute left-0 top-0 flex h-8 min-w-8 items-center justify-center rounded-full border border-indigo-600/30 bg-card px-1.5 text-[8px] font-bold leading-none tracking-tight text-indigo-800 dark:text-indigo-300">
            {index === 0 ? "1963" : index === 1 ? "Hind II" : "900+"}
          </span>

          <div className="rounded-xl border border-border bg-card px-3.5 py-3">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="rounded border border-border bg-muted/40 px-1.5 py-px text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                {point.anchor}
              </span>
              <div className="text-sm font-semibold tracking-tight text-foreground">{point.title}</div>
            </div>

            <div className="mt-1.5 space-y-1">
              {point.lines.map((line, i) => (
                <div key={i} className="text-xs leading-relaxed text-foreground">
                  {line}
                </div>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
              {point.pair.map((item) => (
                <div key={item.label} className="bg-muted/20 px-2.5 py-1.5">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="text-xs leading-snug text-foreground">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function HindIICard() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border-2 border-indigo-600/35 bg-card">
      <div className="border-b border-border bg-indigo-50/50 px-4 py-2.5 dark:bg-indigo-950/25">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
          First restriction endonuclease
        </div>
        <div className="text-lg font-bold tracking-tight text-foreground">Hind II</div>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
        <div className="bg-card px-4 py-2.5">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Source</div>
          <div className="text-sm leading-snug text-foreground">
            <em>Haemophilus influenzae</em>
          </div>
        </div>
        <div className="bg-card px-4 py-2.5">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Recognition sequence
          </div>
          <div className="text-sm leading-snug text-foreground">
            A specific sequence of <strong className="font-semibold">6 base pairs</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

const COMMON = ["Hind II", "EcoRI", "BamHI", "Sal I", "PvuI", "Pst I"];

export function CommonEnzymesGrid() {
  return (
    <div className="my-5 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
      {COMMON.map((enzyme) => (
        <span
          key={enzyme}
          className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-2 py-1.5 text-sm font-semibold tracking-tight text-foreground"
        >
          {enzyme}
        </span>
      ))}
    </div>
  );
}
