import { Thermometer } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Pcr — the amplification technique.
 *
 * Concept card, the four components, the thermal cycle with a small drawing per
 * stage, the enzyme that makes the cycle possible, and the doubling that follows
 * from repeating it. Temperatures are the note's; nothing else is added.
 */

export function PcrConcept() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-muted/30 px-4 py-2.5">
        <div className="text-sm font-semibold tracking-tight text-foreground">Polymerase chain reaction (PCR)</div>
        <span className="inline-flex items-center rounded-full bg-indigo-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
          In vitro amplification
        </span>
      </div>

      <div className="px-4 py-3">
        <div className="text-sm leading-relaxed text-foreground">
          An <em>in vitro</em> technique used to amplify a desired DNA fragment by synthesising multiple copies of the
          target DNA segment.
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-border bg-muted/20 px-4 py-2">
        <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Developed by</span>
        <span className="text-sm font-semibold text-foreground">Kary Mullis</span>
        <span className="rounded border border-border bg-card px-1.5 py-px text-[10px] font-semibold tabular-nums text-muted-foreground">
          1983
        </span>
      </div>
    </div>
  );
}

const COMPONENTS = [
  {
    name: "DNA template",
    fn: "Target DNA containing the sequence to be amplified.",
  },
  {
    name: "Primers",
    fn: "Two sets of small, chemically synthesised oligonucleotides complementary to specific regions at the 3′ ends of the template strands.",
  },
  {
    name: "Free deoxyribonucleotides",
    fn: "Building blocks used to synthesise new DNA strands.",
  },
  {
    name: "DNA polymerase",
    fn: "Enzyme that extends primers by adding nucleotides along the template strands.",
  },
];

export function PcrComponents() {
  return (
    <div className="my-5">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {COMPONENTS.map((component) => (
          <div key={component.name} className="rounded-xl border border-border bg-card px-3.5 py-3">
            <div className="text-sm font-semibold tracking-tight text-foreground">{component.name}</div>
            <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{component.fn}</div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-start gap-2 rounded-lg border border-amber-600/30 border-l-[3px] bg-amber-50/60 px-3 py-2 dark:bg-amber-950/20">
        <span className="mt-0.5 shrink-0 rounded bg-amber-600 px-1.5 py-px text-[9px] font-bold uppercase tracking-[0.08em] text-white">
          3′-OH
        </span>
        <div className="text-xs leading-relaxed text-foreground">
          Primers provide a free <strong className="font-semibold">3′-OH group</strong> — the starting point DNA
          polymerase needs.
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- cycle */

const STAGES = [
  {
    n: "1",
    name: "Denaturation",
    temp: "94 °C",
    lines: ["Heat is applied to double-stranded DNA.", "Hydrogen-bonded strands separate into two single strands."],
    tone: "amber" as const,
    art: <DenaturationArt />,
  },
  {
    n: "2",
    name: "Annealing",
    temp: "60 °C",
    lines: ["Temperature is lowered.", "Primers bind to their complementary sequences on the single-stranded template DNA."],
    tone: "indigo" as const,
    art: <AnnealingArt />,
  },
  {
    n: "3",
    name: "Extension",
    temp: "72 °C",
    lines: ["Taq polymerase extends the primers.", "Free deoxyribonucleotides are added to synthesise complementary DNA strands."],
    tone: "violet" as const,
    art: <ExtensionArt />,
  },
];

export function PcrCycle() {
  return (
    <div className="my-5" role="list">
      {STAGES.map((stage, index) => (
        <div key={stage.n} className="relative pb-3 pl-10 last:pb-0" role="listitem">
          {index < STAGES.length - 1 && (
            <span className="absolute bottom-0 left-[13px] top-9 w-px bg-border" aria-hidden />
          )}

          <span
            className={cn(
              "absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-bold tabular-nums",
              stage.tone === "amber" && "border-amber-600/35 bg-amber-50 text-amber-900 dark:bg-amber-950/30 dark:text-amber-300",
              stage.tone === "indigo" &&
                "border-indigo-600/30 bg-indigo-50 text-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-300",
              stage.tone === "violet" &&
                "border-violet-600/35 bg-violet-50 text-violet-900 dark:bg-violet-950/30 dark:text-violet-300",
            )}
          >
            {stage.n}
          </span>

          <div className="rounded-xl border border-border bg-card p-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-semibold tracking-tight text-foreground">{stage.name}</div>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-bold tabular-nums",
                      stage.tone === "amber" && "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200",
                      stage.tone === "indigo" && "bg-indigo-100 text-indigo-900 dark:bg-indigo-900/40 dark:text-indigo-200",
                      stage.tone === "violet" && "bg-violet-100 text-violet-900 dark:bg-violet-900/40 dark:text-violet-200",
                    )}
                  >
                    <Thermometer className="h-3 w-3" aria-hidden />
                    {stage.temp}
                  </span>
                </div>

                <div className="mt-1.5 space-y-1">
                  {stage.lines.map((line, i) => (
                    <div key={i} className="text-xs leading-relaxed text-foreground">
                      {line}
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 sm:w-36">{stage.art}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------- taq */

const TAQ_ROWS = [
  { label: "Source", value: <em>Thermus aquaticus</em> },
  { label: "Nature", value: "Thermostable DNA polymerase" },
  {
    label: "Heat resistance",
    value: "Remains active despite the high temperatures required during DNA denaturation",
  },
  { label: "Function", value: "Extends primers during the extension step" },
];

export function TaqPolymerase() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border-2 border-violet-600/35 bg-card">
      <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
        <div className="bg-violet-50/60 px-4 py-3 dark:bg-violet-950/25">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
            Enzyme
          </div>
          <div className="text-base font-bold tracking-tight text-foreground">Taq polymerase</div>
          <div className="mt-1 inline-flex items-center rounded-full bg-violet-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
            Thermostable
          </div>
        </div>

        <div className="bg-card px-4 py-3">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Isolated from
          </div>
          <div className="text-base font-semibold italic tracking-tight text-foreground">Thermus aquaticus</div>
          <div className="mt-1 text-[11px] leading-snug text-muted-foreground">a bacterium</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
        {TAQ_ROWS.map((row) => (
          <div key={row.label} className="bg-card px-4 py-2">
            <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {row.label}
            </div>
            <div className="text-xs leading-snug text-foreground">{row.value}</div>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2 border-t border-border bg-muted/20 px-4 py-2">
        <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-violet-600" aria-hidden />
        <div className="text-xs leading-relaxed text-foreground">
          Because it survives the 94 °C denaturation step, the same enzyme is still active for extension in the next
          cycle — which is what makes repeated cycling possible.
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ amplification */

const DOUBLING = [
  { copies: "1", label: "Start" },
  { copies: "2", label: "Cycle 1" },
  { copies: "4", label: "Cycle 2" },
  { copies: "8", label: "Cycle 3" },
  { copies: "16", label: "Cycle 4" },
  { copies: "32", label: "Cycle 5" },
  { copies: "64", label: "Cycle 6" },
];

export function ExponentialAmplification() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        DNA amplification sequence
      </div>

      <div className="mt-1 text-xs leading-relaxed text-foreground">
        Repeating the cycles amplifies the target DNA exponentially.
      </div>

      <div className="mt-3 flex flex-wrap items-end gap-1.5">
        {DOUBLING.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center gap-1">
            <div
              className="w-6 rounded-t bg-indigo-500/70 dark:bg-indigo-400/60"
              style={{ height: `${10 + index * 4}px` }}
              aria-hidden
            />
            <div className="text-xs font-bold tabular-nums text-foreground">{step.copies}</div>
            <div className="text-[8px] font-medium uppercase tracking-[0.06em] text-muted-foreground">{step.label}</div>
          </div>
        ))}

        <div className="flex flex-col items-center gap-1">
          <div className="h-9 w-6 rounded-t border border-dashed border-border bg-muted/30" aria-hidden />
          <div className="text-xs font-bold text-muted-foreground">…</div>
          <div className="text-[8px] font-medium uppercase tracking-[0.06em] text-muted-foreground">Cycle 7</div>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-2 rounded-lg border-2 border-emerald-600/40 bg-emerald-50/60 px-4 py-3 dark:bg-emerald-950/25 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
            After amplification
          </div>
          <div className="text-xl font-bold tracking-tight text-foreground">~1 billion copies</div>
        </div>
        <div className="text-xs font-medium text-foreground sm:text-right">
          Approximately 30 cycles
          <div className="text-[10px] font-normal text-muted-foreground">Each cycle approximately doubles the copies</div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- art */

function DenaturationArt() {
  return (
    <svg viewBox="0 0 150 84" className="h-20 w-full" aria-hidden>
      {/* intact duplex */}
      <line x1="14" y1="26" x2="66" y2="26" className="stroke-indigo-500" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="14" y1="50" x2="66" y2="50" className="stroke-indigo-500" strokeWidth="2.4" strokeLinecap="round" />
      {[22, 33, 44, 55].map((x) => (
        <line key={x} x1={x} y1="28" x2={x} y2="48" className="stroke-indigo-400" strokeWidth="1.3" />
      ))}

      {/* strands parting */}
      <path d="M74 32 L82 22" className="stroke-amber-600" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M82 22 L78 24 M82 22 L80 27" className="stroke-amber-600" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M74 44 L82 54" className="stroke-amber-600" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M82 54 L78 52 M82 54 L80 51" className="stroke-amber-600" strokeWidth="1.6" fill="none" strokeLinecap="round" />

      {/* separated single strands */}
      <line x1="92" y1="16" x2="138" y2="16" className="stroke-indigo-500" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="92" y1="60" x2="138" y2="60" className="stroke-indigo-500" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function AnnealingArt() {
  return (
    <svg viewBox="0 0 150 84" className="h-20 w-full" aria-hidden>
      {/* template strand */}
      <line x1="12" y1="42" x2="138" y2="42" className="stroke-indigo-500" strokeWidth="2.4" strokeLinecap="round" />

      {/* primers */}
      <line x1="30" y1="30" x2="64" y2="30" className="stroke-violet-500" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="86" y1="54" x2="120" y2="54" className="stroke-violet-500" strokeWidth="4.5" strokeLinecap="round" />

      {/* base pairing between primer and template */}
      {[34, 42, 50, 58].map((x) => (
        <line key={`a${x}`} x1={x} y1="33" x2={x} y2="40" className="stroke-violet-400" strokeWidth="1.2" strokeDasharray="2 2" />
      ))}
      {[90, 98, 106, 114].map((x) => (
        <line key={`b${x}`} x1={x} y1="44" x2={x} y2="51" className="stroke-violet-400" strokeWidth="1.2" strokeDasharray="2 2" />
      ))}
    </svg>
  );
}

function ExtensionArt() {
  return (
    <svg viewBox="0 0 150 84" className="h-20 w-full" aria-hidden>
      {/* template strand */}
      <line x1="12" y1="52" x2="138" y2="52" className="stroke-indigo-500" strokeWidth="2.4" strokeLinecap="round" />

      {/* primer */}
      <line x1="20" y1="40" x2="50" y2="40" className="stroke-violet-500" strokeWidth="4.5" strokeLinecap="round" />

      {/* new strand growing from the primer */}
      <line x1="50" y1="40" x2="120" y2="40" className="stroke-indigo-500" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M120 40 L128 40" className="stroke-indigo-500" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M128 40 L123 37 M128 40 L123 43" className="stroke-indigo-500" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* nucleotides being added */}
      {[58, 68, 78, 88, 98, 108].map((x) => (
        <rect key={x} x={x} y="34" width="5" height="5" rx="1" className="fill-violet-400/70" />
      ))}
    </svg>
  );
}
