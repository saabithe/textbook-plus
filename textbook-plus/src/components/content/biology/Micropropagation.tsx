import { ArrowDown, ArrowRight } from "lucide-react";

/**
 * Micropropagation — tissue culture turned into a production method, and the
 * somaclones it yields.
 *
 * The plantlets in the flow are deliberately identical glyphs: the whole point
 * of the picture is that thousands of plants come out genetically the same.
 */

const PLANT = "var(--subject-biology)";
const AMBER = "var(--warning)";

function Plantlet() {
  return (
    <svg viewBox="0 0 24 28" className="h-6 w-5" aria-hidden>
      <path d="M12 26 L12 9" stroke={PLANT} strokeWidth={2} strokeLinecap="round" fill="none" />
      <ellipse
        cx={6.5}
        cy={15}
        rx={6}
        ry={2.6}
        transform="rotate(-24 6.5 15)"
        fill={PLANT}
        fillOpacity={0.3}
        stroke={PLANT}
        strokeOpacity={0.6}
        strokeWidth={1}
      />
      <ellipse
        cx={17.5}
        cy={12}
        rx={6}
        ry={2.6}
        transform="rotate(24 17.5 12)"
        fill={PLANT}
        fillOpacity={0.3}
        stroke={PLANT}
        strokeOpacity={0.6}
        strokeWidth={1}
      />
      <circle cx={12} cy={6} r={2.6} fill={AMBER} fillOpacity={0.45} stroke={AMBER} strokeWidth={1} />
    </svg>
  );
}

function TubeGlyph() {
  return (
    <svg viewBox="0 0 44 64" className="h-14 w-10" aria-hidden>
      <path d="M10 8 V44 Q10 58 22 58 Q34 58 34 44 V8" fill={PLANT} fillOpacity={0.06} stroke="var(--foreground)" strokeOpacity={0.45} strokeWidth={1.8} strokeLinejoin="round" />
      <ellipse cx={22} cy={8} rx={12} ry={2.6} fill="none" stroke="var(--foreground)" strokeOpacity={0.45} strokeWidth={1.8} />
      <path d="M11 34 V44 Q11 56 22 56 Q33 56 33 44 V34 Z" fill={PLANT} fillOpacity={0.22} />
      <line x1={11} y1={34} x2={33} y2={34} stroke={PLANT} strokeOpacity={0.7} strokeWidth={1.4} />
    </svg>
  );
}

export function MicropropagationFlow() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-3">
        <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-muted/20 px-3 py-3 sm:w-36">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Tissue culture
          </div>
          <div className="mt-2">
            <TubeGlyph />
          </div>
        </div>

        <div className="flex items-center justify-center text-muted-foreground" aria-hidden>
          <ArrowDown className="h-4 w-4 sm:hidden" />
          <ArrowRight className="hidden h-4 w-4 sm:block" />
        </div>

        <div className="flex-1 rounded-lg border border-border bg-muted/20 px-3 py-3">
          <div className="flex flex-wrap items-baseline justify-between gap-x-2">
            <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
              Micro-propagation
            </div>
            <div className="text-xs font-semibold text-foreground">Thousands of plants</div>
          </div>

          <div className="mt-2.5 grid grid-cols-8 gap-x-1 gap-y-1.5">
            {Array.from({ length: 24 }).map((_, i) => (
              <Plantlet key={i} />
            ))}
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Micro-propagation is the production of thousands of plants through tissue culture.
      </figcaption>
    </figure>
  );
}

const EXAMPLES = ["Tomato", "Banana", "Apple"];

export function SomaclonesCard() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
        Somaclones
      </div>
      <div className="mt-1 text-sm leading-relaxed text-foreground">
        Plants produced through tissue culture that are genetically identical to the original parent plant.
      </div>

      <div className="mt-3 rounded-lg border-2 border-emerald-600/35 bg-emerald-50/50 px-3 py-2.5 text-center dark:bg-emerald-950/25">
        <div className="text-sm font-bold tracking-tight text-emerald-950 dark:text-emerald-100">
          Somaclones = Genetically Identical Plants
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Examples</span>
        {EXAMPLES.map((example) => (
          <span
            key={example}
            className="inline-flex items-center rounded border border-border bg-muted/40 px-1.5 py-0.5 text-[11px] font-medium text-foreground"
          >
            {example}
          </span>
        ))}
      </div>
    </div>
  );
}
