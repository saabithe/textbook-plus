import { Fragment } from "react";
import { ArrowDown, ShieldCheck, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * RestrictionEnzymes — what the enzyme is, why bacteria have it, how the two
 * nuclease types differ, how it cuts, and what the cut leaves behind.
 */

export function RestrictionEnzymeConcept() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-muted/30 px-4 py-2.5">
        <div className="text-sm font-semibold tracking-tight text-foreground">Restriction endonucleases (RE)</div>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">
          <Scissors className="h-3 w-3" aria-hidden />
          Molecular scissors
        </span>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
        <div className="bg-card px-4 py-3">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Enzyme family
          </div>
          <div className="mt-0.5 text-sm font-semibold text-foreground">Nucleases</div>
        </div>
        <div className="bg-card px-4 py-3">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Function</div>
          <div className="mt-0.5 text-sm font-semibold text-foreground">Cut DNA at specific positions</div>
        </div>
      </div>
    </div>
  );
}

const DEFENCE = [
  {
    name: "Methylase",
    action: "Adds methyl groups",
    target: "Bacterial own DNA — protection",
    tone: "teal" as const,
  },
  {
    name: "Nuclease",
    action: "Cuts DNA",
    target: "Unmethylated foreign phage DNA",
    tone: "rose" as const,
  },
];

export function BacterialDefence() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded border border-border bg-muted/40 px-2 py-0.5 font-medium text-foreground">
          Bacteriophage infection
        </span>
        <span className="text-muted-foreground" aria-hidden>
          →
        </span>
        <span className="rounded border border-border bg-muted/40 px-2 py-0.5 font-medium text-foreground">
          Bacterial defence
        </span>
      </div>

      <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
        A bacteriophage attacks bacteria (e.g., <em>E. coli</em>) by injecting viral DNA. The bacterium answers with two
        enzymes.
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {DEFENCE.map((enzyme) => (
          <div
            key={enzyme.name}
            className={cn(
              "rounded-lg border px-3 py-2.5",
              enzyme.tone === "teal"
                ? "border-teal-600/30 bg-teal-50/50 dark:bg-teal-950/25"
                : "border-rose-600/30 bg-rose-50/50 dark:bg-rose-950/25",
            )}
          >
            <div className="flex items-center gap-1.5">
              {enzyme.tone === "teal" ? (
                <ShieldCheck className="h-3.5 w-3.5 text-teal-700 dark:text-teal-300" aria-hidden />
              ) : (
                <Scissors className="h-3.5 w-3.5 text-rose-700 dark:text-rose-300" aria-hidden />
              )}
              <div
                className={cn(
                  "text-sm font-semibold tracking-tight",
                  enzyme.tone === "teal"
                    ? "text-teal-900 dark:text-teal-200"
                    : "text-rose-900 dark:text-rose-200",
                )}
              >
                {enzyme.name}
              </div>
            </div>

            <div className="mt-1.5 space-y-1">
              <div className="text-xs leading-snug text-foreground">
                <span className="text-muted-foreground">Action · </span>
                {enzyme.action}
              </div>
              <div className="text-xs leading-snug text-foreground">
                <span className="text-muted-foreground">Target · </span>
                {enzyme.target}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-2 text-xs">
        <span className="text-foreground">
          <span className="font-semibold">Methylase</span> → protects bacterial DNA.
        </span>
        <span className="text-foreground">
          <span className="font-semibold">Nuclease</span> → cuts foreign phage DNA.
        </span>
      </div>
    </div>
  );
}

export function NucleaseTypes() {
  return (
    <div className="my-5">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Exonucleases
          </div>
          <div className="mt-1 text-2xl font-bold tracking-tight text-foreground">Ends</div>
          <div className="mt-1 text-sm leading-snug text-foreground">
            Remove nucleotides from the <strong className="font-semibold">ends</strong> of DNA strands.
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-4">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Endonucleases
          </div>
          <div className="mt-1 text-2xl font-bold tracking-tight text-foreground">Internal</div>
          <div className="mt-1 text-sm leading-snug text-foreground">
            Make cuts at specific <strong className="font-semibold">internal positions</strong> within DNA.
          </div>
        </div>
      </div>

      <div className="mt-2 rounded-lg border border-border border-l-[3px] border-l-amber-500 bg-amber-50/50 px-3 py-2 text-xs leading-relaxed text-foreground dark:bg-amber-950/20">
        <span className="font-semibold">Note</span> — restriction endonucleases are the specific endonucleases commonly
        used in biotechnology.
      </div>
    </div>
  );
}

const MECHANISM = [
  { n: "1", title: "Inspection", detail: "The enzyme inspects the length of a DNA sequence." },
  {
    n: "2",
    title: "Recognition",
    detail: "Recognises and binds to a specific recognition sequence — a palindromic nucleotide sequence.",
  },
  {
    n: "3",
    title: "Cleavage",
    detail:
      "Cleaves the sugar-phosphate backbone — breaks phosphodiester bonds on both strands at specific points.",
  },
  {
    n: "4",
    title: "Sticky ends formation",
    detail: "Cutting often leaves single-stranded overhanging stretches called sticky ends.",
    output: true,
  },
];

const BONDS = [
  { bond: "Phosphodiester bonds", action: "Broken during cleavage", broken: true },
  { bond: "Hydrogen bonds between bases", action: "Not broken", broken: false },
];

export function RestrictionMechanism() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Sequential mechanism
      </div>

      <div className="mt-3">
        {MECHANISM.map((stage, index) => (
          <Fragment key={stage.n}>
            <div
              className={cn(
                "flex items-start gap-2.5 rounded-lg border px-3 py-2.5",
                stage.output ? "border-2 border-emerald-600/40 bg-emerald-50/50 dark:bg-emerald-950/25" : "border-border bg-muted/25",
              )}
            >
              <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-card text-[10px] font-bold tabular-nums text-muted-foreground">
                {stage.n}
              </span>
              <div className="min-w-0">
                <div className="text-sm font-semibold leading-snug text-foreground">{stage.title}</div>
                <div className="mt-0.5 text-xs leading-relaxed text-foreground/80">{stage.detail}</div>

                {stage.n === "3" && (
                  <div className="mt-2 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
                    {BONDS.map((bond) => (
                      <div key={bond.bond} className="bg-card px-2.5 py-1.5">
                        <div className="text-[10px] leading-snug text-muted-foreground">{bond.bond}</div>
                        <div
                          className={cn(
                            "text-xs font-semibold",
                            bond.broken
                              ? "text-rose-700 dark:text-rose-300"
                              : "text-emerald-700 dark:text-emerald-300",
                          )}
                        >
                          {bond.action}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {index < MECHANISM.length - 1 && (
              <div className="flex justify-center py-1 text-muted-foreground" aria-hidden>
                <ArrowDown className="h-3.5 w-3.5" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function StickyEndsDiagram() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Sticky ends</div>

      <svg viewBox="0 0 200 72" className="mt-2 w-full max-w-md text-foreground/75" aria-hidden>
        {/* left fragment */}
        <line x1="6" y1="20" x2="96" y2="20" className="stroke-current" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="6" y1="40" x2="72" y2="40" className="stroke-current" strokeWidth="2.4" strokeLinecap="round" />
        {/* right fragment */}
        <line x1="104" y1="20" x2="194" y2="20" className="stroke-current" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="80" y1="40" x2="194" y2="40" className="stroke-current" strokeWidth="2.4" strokeLinecap="round" />

        {/* hydrogen bonds between the complementary overhangs */}
        {[82, 86, 90, 94].map((x) => (
          <line
            key={x}
            x1={x}
            y1="22"
            x2={x}
            y2="38"
            className="stroke-current opacity-60"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />
        ))}

        {/* labels */}
        <text x="84" y="14" textAnchor="middle" className="fill-current text-[7px] uppercase tracking-wider">
          overhang
        </text>
        <text x="100" y="52" textAnchor="middle" className="fill-current text-[7px] uppercase tracking-wider">
          H-bonds
        </text>
      </svg>

      <div className="mt-1 grid grid-cols-1 gap-1.5 sm:grid-cols-3">
        <Bullet>Formed when DNA is cut, leaving single-stranded overhangs.</Bullet>
        <Bullet>Form hydrogen bonds with complementary cut counterparts.</Bullet>
        <Bullet>
          Facilitate joining through <strong className="font-semibold">DNA ligase</strong>.
        </Bullet>
      </div>
    </figure>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-1.5">
      <span className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-foreground/35" aria-hidden />
      <div className="text-xs leading-snug text-foreground">{children}</div>
    </div>
  );
}
