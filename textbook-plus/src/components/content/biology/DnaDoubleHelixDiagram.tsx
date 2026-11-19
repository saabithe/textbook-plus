const CX = 210;
const AMP = 82;
const TOP = 26;
const PITCH = 150;
const END = TOP + 300;

function strandX(phase: number, y: number) {
  return CX + AMP * Math.cos((2 * Math.PI * (y - TOP)) / PITCH + phase);
}

function strandPath(phase: number) {
  let d = "";
  for (let y = TOP; y <= END; y += 5) {
    d += `${d ? "L" : "M"}${strandX(phase, y).toFixed(1)} ${y} `;
  }
  return d.trim();
}

const STRAND_1 = strandPath(0);
const STRAND_2 = strandPath(Math.PI);
const RUNGS = Array.from({ length: 21 }, (_, i) => TOP + i * 15);

/** Schematic of one and a bit turns, dimensioned from the supplied note. */
export function DnaDoubleHelixDiagram() {
  return (
    <figure className="my-6 rounded-2xl border border-border bg-card p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <figcaption className="text-sm font-bold tracking-tight text-foreground">
          DNA double helix — right-handed coil
        </figcaption>
        <span className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[0.7rem] font-semibold text-muted-foreground">
          antiparallel strands
        </span>
      </div>

      <svg
        viewBox="0 0 480 372"
        className="mt-3 h-auto w-full"
        role="img"
        aria-label="Right-handed DNA double helix with two antiparallel strands: strand 1 runs 5 prime to 3 prime and strand 2 runs 3 prime to 5 prime. One full turn spans 10 base pairs and 3.4 nanometres; adjacent base pairs are 0.34 nanometres apart."
      >
        {/* one full turn bracket */}
        <line x1="108" y1={TOP} x2="108" y2={TOP + PITCH} className="stroke-muted-foreground/60" />
        <line x1="102" y1={TOP} x2="114" y2={TOP} className="stroke-muted-foreground/60" />
        <line x1="102" y1={TOP + PITCH} x2="114" y2={TOP + PITCH} className="stroke-muted-foreground/60" />
        <text x="96" y={TOP + PITCH / 2 - 6} textAnchor="end" className="fill-foreground text-[11px] font-bold">
          One full turn
        </text>
        <text x="96" y={TOP + PITCH / 2 + 10} textAnchor="end" className="fill-muted-foreground text-[10px]">
          10 bp · 3.4 nm
        </text>

        {/* adjacent base-pair bracket */}
        <line x1="320" y1={TOP + 14 * 15} x2="320" y2={TOP + 15 * 15} className="stroke-muted-foreground/60" />
        <line x1="314" y1={TOP + 14 * 15} x2="326" y2={TOP + 14 * 15} className="stroke-muted-foreground/60" />
        <line x1="314" y1={TOP + 15 * 15} x2="326" y2={TOP + 15 * 15} className="stroke-muted-foreground/60" />
        <text x="332" y={TOP + 14 * 15 - 4} className="fill-foreground text-[11px] font-bold">0.34 nm</text>
        <text x="332" y={TOP + 15 * 15 + 12} className="fill-muted-foreground text-[10px]">adjacent bp</text>

        {/* base-pair rungs */}
        {RUNGS.map((y) => {
          const a = strandX(0, y);
          const b = strandX(Math.PI, y);
          return (
            <line
              key={y}
              x1={Math.min(a, b)}
              x2={Math.max(a, b)}
              y1={y}
              y2={y}
              className="stroke-violet-500/45 dark:stroke-violet-400/50"
              strokeWidth="3"
            />
          );
        })}

        {/* the two sugar-phosphate strands */}
        <path d={STRAND_2} fill="none" className="stroke-rose-500" strokeWidth="4" strokeLinecap="round" />
        <path d={STRAND_1} fill="none" className="stroke-sky-500" strokeWidth="4" strokeLinecap="round" />

        {/* antiparallel ends */}
        <text x="120" y="20" textAnchor="end" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-bold">Strand 2 · 3′</text>
        <text x="300" y="20" className="fill-sky-700 dark:fill-sky-300 text-[11px] font-bold">Strand 1 · 5′</text>
        <text x="120" y={END + 14} textAnchor="end" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-bold">5′</text>
        <text x="300" y={END + 14} className="fill-sky-700 dark:fill-sky-300 text-[11px] font-bold">3′</text>

        {/* stacking callout */}
        <line x1="252" x2="214" y1="146" y2="146" className="stroke-muted-foreground/60" />
        <text x="258" y="142" className="fill-muted-foreground text-[10px]">base pairs stacked</text>
        <text x="258" y="156" className="fill-muted-foreground text-[10px]">one above another</text>

        <text x="240" y="364" textAnchor="middle" className="fill-muted-foreground text-[10px]">
          one turn = 10 bp = 3.4 nm · adjacent bp = 0.34 nm
        </text>
      </svg>
    </figure>
  );
}
