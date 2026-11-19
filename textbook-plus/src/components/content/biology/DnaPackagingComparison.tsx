const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

const PROKARYOTE_LOOPS = [
  { cx: 138, cy: 92, rx: 48, ry: 25, rotate: -18, opacity: "opacity-80" },
  { cx: 184, cy: 100, rx: 42, ry: 23, rotate: 20, opacity: "opacity-70" },
  { cx: 160, cy: 116, rx: 36, ry: 19, rotate: 4, opacity: "opacity-50" },
];

const EUKARYOTE_BEADS = [
  { x: 112, y: 76 },
  { x: 136, y: 100 },
  { x: 162, y: 74 },
  { x: 188, y: 100 },
  { x: 214, y: 76 },
];

const PLUS_MARKERS = [
  { x: 96, y: 60 },
  { x: 222, y: 62 },
  { x: 100, y: 134 },
  { x: 224, y: 136 },
];

function ProkaryoteArt() {
  return (
    <svg
      viewBox="0 0 320 190"
      className="mt-2 h-auto w-full"
      role="img"
      aria-label="Prokaryotic cell with no defined nucleus: negatively charged DNA organised as large loops in a region called the nucleoid, with positively charged proteins nearby"
    >
      <rect
        x="14"
        y="14"
        width="292"
        height="162"
        rx="26"
        className="fill-sky-50/70 stroke-sky-500/40 dark:fill-sky-950/20"
        strokeWidth="1.5"
      />
      <text x="28" y="38" className="fill-sky-800 dark:fill-sky-200 text-[10px] font-bold">
        cell — no well-defined nucleus
      </text>

      <ellipse
        cx="160"
        cy="98"
        rx="106"
        ry="60"
        className="fill-sky-500/5 stroke-sky-500/50"
        strokeWidth="1.5"
        strokeDasharray="6 5"
      />

      {PROKARYOTE_LOOPS.map((loop) => (
        <ellipse
          key={loop.cx}
          cx={loop.cx}
          cy={loop.cy}
          rx={loop.rx}
          ry={loop.ry}
          transform={`rotate(${loop.rotate} ${loop.cx} ${loop.cy})`}
          fill="none"
          className={`stroke-rose-500 ${loop.opacity}`}
          strokeWidth="4"
        />
      ))}

      {PLUS_MARKERS.map((marker) => (
        <g key={`${marker.x}-${marker.y}`}>
          <circle
            cx={marker.x}
            cy={marker.y}
            r="9"
            className="fill-amber-400/20 stroke-amber-500/60"
          />
          <text
            x={marker.x}
            y={marker.y + 4}
            textAnchor="middle"
            className="fill-amber-700 dark:fill-amber-300 text-[12px] font-bold"
          >
            +
          </text>
        </g>
      ))}

      <line x1="160" x2="160" y1="150" y2="138" className="stroke-sky-600/70" />
      <text x="160" y="166" textAnchor="middle" className="fill-sky-800 dark:fill-sky-200 text-[12px] font-bold">
        nucleoid — DNA in large loops
      </text>
    </svg>
  );
}

function EukaryoteArt() {
  return (
    <svg
      viewBox="0 0 320 190"
      className="mt-2 h-auto w-full"
      role="img"
      aria-label="Eukaryotic cell with a nucleus: DNA wraps around histone proteins to form nucleosomes, which pack into chromatin and then chromosomes"
    >
      <rect
        x="14"
        y="14"
        width="292"
        height="162"
        rx="26"
        className="fill-violet-50/70 stroke-violet-500/40 dark:fill-violet-950/20"
        strokeWidth="1.5"
      />
      <circle
        cx="160"
        cy="96"
        r="66"
        className="fill-violet-500/5 stroke-violet-500/45"
        strokeWidth="1.5"
      />
      <text x="160" y="40" textAnchor="middle" className="fill-violet-800 dark:fill-violet-200 text-[10px] font-bold">
        nucleus
      </text>

      <polyline
        points={EUKARYOTE_BEADS.map((b) => `${b.x},${b.y}`).join(" ")}
        fill="none"
        className="stroke-rose-400/70"
        strokeWidth="3"
      />
      {EUKARYOTE_BEADS.map((bead) => (
        <g key={bead.x}>
          <circle
            cx={bead.x}
            cy={bead.y}
            r="13"
            className="fill-violet-500/25 stroke-violet-600/70"
            strokeWidth="1.5"
          />
          <circle cx={bead.x} cy={bead.y} r="6" className="fill-violet-600/60" />
        </g>
      ))}

      <line x1="162" x2="162" y1="74" y2="58" className="stroke-violet-600/70" />
      <text x="162" y="52" textAnchor="middle" className="fill-violet-800 dark:fill-violet-200 text-[10px] font-bold">
        histones
      </text>
      <text x="160" y="164" textAnchor="middle" className="fill-violet-800 dark:fill-violet-200 text-[12px] font-bold">
        nucleosomes → chromatin → chromosomes
      </text>
    </svg>
  );
}

export function DnaPackagingComparison() {
  return (
    <div className="my-6 grid gap-5 lg:grid-cols-2">
      <section className="rounded-2xl border border-sky-500/30 bg-card p-4">
        <div className={EYEBROW}>A · Prokaryotes</div>
        <p className="mt-1 text-sm font-bold tracking-tight text-foreground">
          Example: <em>Escherichia coli</em> (<em>E. coli</em>)
        </p>
        <ProkaryoteArt />
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
          <li><strong>No defined nucleus.</strong> Prokaryotes lack a well-defined nucleus.</li>
          <li><strong>Charge pairing.</strong> Negatively charged DNA associates with positively charged proteins.</li>
          <li><strong>Nucleoid.</strong> DNA is organised into large loops within this region.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-violet-500/30 bg-card p-4">
        <div className={EYEBROW}>B · Eukaryotes</div>
        <p className="mt-1 text-sm font-bold tracking-tight text-foreground">Histone-based packaging</p>
        <EukaryoteArt />
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
          <li><strong>Histones.</strong> DNA is associated with positively charged proteins called histones.</li>
          <li><strong>Nucleosomes.</strong> DNA wraps around histones to form nucleosomes.</li>
          <li><strong>Chromatin → chromosomes.</strong> Nucleosomes form chromatin, then chromosomes.</li>
        </ul>
      </section>
    </div>
  );
}
