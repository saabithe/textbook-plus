import { SignBadge } from "@/components/content/biology/InteractionSigns";

/**
 * AmensalismExamples — the mirror image of the commensalism gallery: the same
 * row anatomy, but the harmed side carries the − badge and the partner the 0.
 * Three mechanisms, one shape, so the asymmetry is what the eye reads.
 */

interface AmensalismRow {
  title: string;
  pair: string;
  mechanism: string;
  harmed: string;
  harmedEffect: string;
  unaffected: string;
  glyph: React.ReactNode;
}

const ROWS: AmensalismRow[] = [
  {
    title: "Antibiosis",
    pair: "Penicillium and bacteria",
    mechanism: "The mould secretes penicillin, which kills the bacteria around it.",
    harmed: "Bacteria",
    harmedEffect: "Killed by the penicillin the mould releases",
    unaffected: "Penicillium mould",
    glyph: <AntibiosisGlyph />,
  },
  {
    title: "Allelopathy",
    pair: "Black walnut tree and surrounding crops",
    mechanism: "Roots and leaves secrete juglone into the soil.",
    harmed: "Surrounding crops, such as tomatoes",
    harmedEffect: "Wilting — juglone inhibits them",
    unaffected: "Black walnut tree",
    glyph: <AllelopathyGlyph />,
  },
  {
    title: "Canopy shading",
    pair: "Tall forest trees and low-lying herbs",
    mechanism: "The tall canopy shades the ground layer below it.",
    harmed: "Low-lying herbs",
    harmedEffect: "Deprived of light under the canopy",
    unaffected: "Tall forest trees",
    glyph: <CanopyGlyph />,
  },
];

export function AmensalismExamples() {
  return (
    <div className="my-5 space-y-2" role="list">
      {ROWS.map((row) => (
        <div key={row.title} className="rounded-xl border border-border bg-card p-3" role="listitem">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/30 text-foreground/70">
              {row.glyph}
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-sm font-semibold tracking-tight text-foreground">{row.title}</span>
                <span className="text-xs text-muted-foreground">{row.pair}</span>
              </div>
              <div className="mt-0.5 text-xs leading-snug text-muted-foreground">{row.mechanism}</div>

              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex items-start gap-2 rounded-md border border-border border-l-2 border-l-rose-500/50 bg-muted/20 px-2.5 py-2">
                  <SignBadge sign="−" size="sm" />
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                      Harmed
                    </div>
                    <div className="text-sm font-medium leading-snug text-foreground">{row.harmed}</div>
                    <div className="text-xs leading-snug text-muted-foreground">{row.harmedEffect}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-md border border-border border-l-2 border-l-slate-400/60 bg-muted/20 px-2.5 py-2">
                  <SignBadge sign="0" size="sm" />
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                      Unaffected
                    </div>
                    <div className="text-sm font-medium leading-snug text-foreground">{row.unaffected}</div>
                    <div className="text-xs leading-snug text-muted-foreground">Neither helped nor harmed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="rounded-lg border border-border bg-muted/20 px-3 py-2.5 text-xs leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">Only one side pays.</span> In competition both species lose
        (−&nbsp;/&nbsp;−); here the partner is not touched at all (0), which is what separates amensalism from
        competition.
      </div>
    </div>
  );
}

const GLYPH = "h-7 w-7";

function AntibiosisGlyph() {
  return (
    <svg viewBox="0 0 48 48" className={GLYPH} aria-hidden>
      {/* dish */}
      <circle cx="24" cy="24" r="19" className="fill-none stroke-current" strokeWidth="1.6" />
      {/* mould colony */}
      <circle cx="24" cy="24" r="5" className="fill-current" />
      {/* inhibition halo */}
      <circle cx="24" cy="24" r="10.5" className="fill-none stroke-current" strokeWidth="1.2" strokeDasharray="3 2.5" />
      {/* surviving bacteria outside the halo */}
      <circle cx="38" cy="13" r="1.5" className="fill-current" />
      <circle cx="41" cy="26" r="1.5" className="fill-current" />
      <circle cx="36" cy="35" r="1.5" className="fill-current" />
      <circle cx="24" cy="40" r="1.5" className="fill-current" />
      <circle cx="10" cy="34" r="1.5" className="fill-current" />
      <circle cx="8" cy="21" r="1.5" className="fill-current" />
      <circle cx="15" cy="10" r="1.5" className="fill-current" />
      <circle cx="30" cy="8" r="1.5" className="fill-current" />
    </svg>
  );
}

function AllelopathyGlyph() {
  return (
    <svg viewBox="0 0 48 48" className={GLYPH} aria-hidden>
      {/* walnut tree */}
      <line x1="17" y1="20" x2="17" y2="30" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17" cy="14" r="7.5" className="fill-none stroke-current" strokeWidth="1.6" />
      {/* juglone spreading through the soil */}
      <path
        d="M 17 30 C 20 34, 26 34, 31 32"
        className="fill-none stroke-current"
        strokeWidth="1.3"
        strokeDasharray="2.5 2.5"
        strokeLinecap="round"
      />
      <path
        d="M 17 30 C 13 34, 9 34, 6 31"
        className="fill-none stroke-current"
        strokeWidth="1.3"
        strokeDasharray="2.5 2.5"
        strokeLinecap="round"
      />
      {/* wilting crop */}
      <path d="M 34 40 L 34 32" className="stroke-current" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 34 34 C 37 33, 38 35, 37 37" className="fill-none stroke-current" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 34 37 C 31 36, 30 38, 31 40" className="fill-none stroke-current" strokeWidth="1.2" strokeLinecap="round" />
      {/* soil line */}
      <line x1="4" y1="40" x2="44" y2="40" className="stroke-current" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function CanopyGlyph() {
  return (
    <svg viewBox="0 0 48 48" className={GLYPH} aria-hidden>
      {/* canopy */}
      <path
        d="M 8 18 C 8 10, 16 6, 24 7 C 32 8, 40 11, 41 18 C 42 24, 34 27, 26 26 C 17 25, 8 24, 8 18 Z"
        className="fill-current opacity-80"
      />
      {/* trunk */}
      <line x1="24" y1="26" x2="24" y2="40" className="stroke-current" strokeWidth="2" strokeLinecap="round" />
      {/* blocked light */}
      <line x1="12" y1="4" x2="18" y2="10" className="stroke-current" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="36" y1="4" x2="30" y2="10" className="stroke-current" strokeWidth="1.4" strokeLinecap="round" />
      {/* shaded ground herbs */}
      <path d="M 6 40 L 6 35 M 10 40 L 10 33 M 14 40 L 14 36" className="stroke-current" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 34 40 L 34 36 M 38 40 L 38 34 M 42 40 L 42 35" className="stroke-current" strokeWidth="1.3" strokeLinecap="round" />
      {/* ground */}
      <line x1="3" y1="40" x2="45" y2="40" className="stroke-current" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
