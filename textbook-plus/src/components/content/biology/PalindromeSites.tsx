import { Fragment } from "react";
import { cn } from "@/lib/utils";

/**
 * PalindromeSites — the palindromic sequence, the EcoRI site, and the cut that
 * leaves sticky ends.
 *
 * The two sequence blocks are monospaced and set with fixed letter cells so the
 * strands stay aligned and the cut markers land between the right bases. They
 * are wrapped in a horizontally scrollable box rather than allowed to wrap.
 */

const RECOGNITION = {
  top: ["G", "A", "A", "T", "T", "C"],
  bottom: ["C", "T", "T", "A", "A", "G"],
};

const CUT = {
  top: ["G", "A", "A", "T", "T", "C"],
  bottom: ["C", "T", "T", "A", "A", "G"],
  cutTopAfter: 0,
  cutBottomAfter: 4,
};

export function PalindromeDefinition() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-sm font-semibold tracking-tight text-foreground">Palindromic DNA sequence</div>
      <div className="mt-1 text-sm leading-relaxed text-foreground/85">
        A sequence of base pairs that reads identically on both complementary strands when the orientation of reading is
        kept the same.
      </div>

      <div className="mt-2.5 inline-flex items-center gap-2 rounded-lg border border-indigo-600/30 bg-indigo-50/60 px-3 py-1.5 dark:bg-indigo-950/25">
        <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
          Same reading direction
        </span>
        <span className="font-mono text-sm font-semibold text-foreground">5′ → 3′ on both strands</span>
      </div>
    </div>
  );
}

export function EcoRIRecognitionSite() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="t-micro">EcoRI recognition sequence</div>
        <div className="text-xs text-muted-foreground">
          Recognition sequence · <span className="font-semibold text-foreground">6 base pairs (bp)</span>
        </div>
      </div>

      <div className="mt-3 overflow-x-auto">
        <div className="mx-auto w-max rounded-lg border border-border bg-muted/25 px-4 py-3">
          <Strand label="5′" bases={RECOGNITION.top} end="3′" />
          <div className="h-1" />
          <Strand label="3′" bases={RECOGNITION.bottom} end="5′" />
        </div>
      </div>

      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Read the top strand left to right and the bottom strand left to right: the same letters appear in the same order.
      </figcaption>
    </figure>
  );
}

export function EcoRICutSite() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="t-micro">EcoRI cut site</div>
        <div className="text-xs text-muted-foreground">Vertical bars mark the cleavage positions</div>
      </div>

      <div className="mt-3 overflow-x-auto">
        <div className="mx-auto w-max rounded-lg border border-border bg-muted/25 px-4 py-3">
          <CutStrand label="5′" bases={CUT.top} end="3′" after={CUT.cutTopAfter} />
          <div className="h-1" />
          <CutStrand label="3′" bases={CUT.bottom} end="5′" after={CUT.cutBottomAfter} />
        </div>
      </div>

      <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
        The enzyme cuts slightly away from the centre of the palindrome — between the same two bases on opposite strands.
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5 rounded-lg border border-border bg-muted/25 px-3 py-2">
        {["Recognition site", "Cleavage", "Sticky ends"].map((step, index) => (
          <Fragment key={step}>
            <span
              className={cn(
                "rounded border px-2 py-0.5 text-[11px] font-medium",
                index === 2
                  ? "border-2 border-emerald-600/40 bg-emerald-50/60 text-foreground dark:bg-emerald-950/25"
                  : "border-border bg-card text-foreground",
              )}
            >
              {step}
            </span>
            {index < 2 && (
              <span className="text-[10px] text-muted-foreground" aria-hidden>
                →
              </span>
            )}
          </Fragment>
        ))}
      </div>

      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        The staggered cut is what produces the sticky ends that later pair up.
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ atoms */

function Strand({ label, bases, end }: { label: string; bases: string[]; end: string }) {
  return (
    <div className="flex items-center gap-2 font-mono text-sm">
      <span className="w-5 shrink-0 text-right text-xs text-muted-foreground">{label}</span>
      <span className="text-muted-foreground">—</span>
      <span className="flex gap-2.5 whitespace-nowrap">
        {bases.map((base, index) => (
          <span key={index} className="w-3.5 text-center font-semibold text-foreground">
            {base}
          </span>
        ))}
      </span>
      <span className="text-muted-foreground">—</span>
      <span className="w-5 shrink-0 text-xs text-muted-foreground">{end}</span>
    </div>
  );
}

function CutStrand({
  label,
  bases,
  end,
  after,
}: {
  label: string;
  bases: string[];
  end: string;
  after: number;
}) {
  return (
    <div className="flex items-center gap-2 font-mono text-sm">
      <span className="w-5 shrink-0 text-right text-xs text-muted-foreground">{label}</span>
      <span className="text-muted-foreground">—</span>
      <span className="flex items-center gap-2.5 whitespace-nowrap">
        {bases.map((base, index) => (
          <Fragment key={index}>
            <span className="w-3.5 text-center font-semibold text-foreground">{base}</span>
            {index === after && (
              <span className="-mx-1.5 h-5 w-0.5 rounded bg-rose-600 dark:bg-rose-400" aria-label="cut site" />
            )}
          </Fragment>
        ))}
      </span>
      <span className="text-muted-foreground">—</span>
      <span className="w-5 shrink-0 text-xs text-muted-foreground">{end}</span>
    </div>
  );
}
