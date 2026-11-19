const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

/* Eight histone molecules clustered around one centre. */
const CX = 168;
const CY = 140;
const HISTONES = Array.from({ length: 8 }, (_, i) => {
  const angle = (i * 45 * Math.PI) / 180;
  return { x: CX + 48 * Math.cos(angle), y: CY + 48 * Math.sin(angle) };
});

/* DNA ribbon makes ~1.65 turns around the octamer. */
const DNA_PATH = Array.from({ length: 100 }, (_, i) => {
  const t = i / 99;
  const angle = ((200 + t * 594) * Math.PI) / 180;
  const r = 62 + t * 10;
  return `${i ? "L" : "M"}${(CX + r * Math.cos(angle)).toFixed(1)} ${(
    CY +
    r * Math.sin(angle) * 0.86
  ).toFixed(1)}`;
}).join(" ");

const H1 = { x: CX + 72 * Math.cos((74 * Math.PI) / 180), y: CY + 72 * Math.sin((74 * Math.PI) / 180) * 0.86 };

const BEADS = [
  { x: 44, y: 62 },
  { x: 96, y: 82 },
  { x: 148, y: 60 },
  { x: 200, y: 82 },
  { x: 252, y: 62 },
  { x: 304, y: 82 },
];

function NucleosomeCoreArt() {
  return (
    <svg
      viewBox="0 0 340 285"
      className="mt-2 h-auto w-full"
      role="img"
      aria-label="Nucleosome core: negatively charged DNA wrapped around a positively charged histone octamer of eight proteins, secured at its entry and exit by an H1 histone"
    >
      {HISTONES.map((h, i) => (
        <g key={i}>
          <circle
            cx={h.x}
            cy={h.y}
            r="17"
            className="fill-violet-500/30 stroke-violet-600/70"
            strokeWidth="1.5"
          />
          <text
            x={h.x}
            y={h.y + 4}
            textAnchor="middle"
            className="fill-violet-800 dark:fill-violet-200 text-[13px] font-bold"
          >
            +
          </text>
        </g>
      ))}

      <path
        d={DNA_PATH}
        fill="none"
        className="stroke-rose-500"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={DNA_PATH}
        fill="none"
        className="stroke-rose-200/40 dark:stroke-rose-100/25"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle cx={H1.x} cy={H1.y} r="15" className="fill-amber-400/35 stroke-amber-600" strokeWidth="2" />
      <text
        x={H1.x}
        y={H1.y + 4}
        textAnchor="middle"
        className="fill-amber-900 dark:fill-amber-200 text-[11px] font-bold"
      >
        H1
      </text>

      <line x1="86" x2="132" y1="30" y2="98" className="stroke-violet-600/60" />
      <text x="10" y="24" className="fill-violet-800 dark:fill-violet-200 text-[11px] font-bold">
        Histone octamer
      </text>
      <text x="10" y="38" className="fill-muted-foreground text-[9px]">
        8 histones · Lys / Arg rich · positive
      </text>

      <line x1={H1.x + 12} x2="268" y1={H1.y + 6} y2="238" className="stroke-amber-600/60" />
      <text x="272" y="242" className="fill-amber-800 dark:fill-amber-200 text-[11px] font-bold">
        H1 histone
      </text>

      <line x1="110" x2="70" y1="169" y2="244" className="stroke-rose-500/60" />
      <text x="10" y="260" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-bold">
        DNA ≈ 200 bp · negative
      </text>
    </svg>
  );
}

function BeadsOnStringArt() {
  return (
    <svg
      viewBox="0 0 340 140"
      className="mt-2 h-auto w-full"
      role="img"
      aria-label="Electron-microscope appearance of repeating nucleosomes as beads on a string, with one bead identified as a single nucleosome"
    >
      <polyline
        points={BEADS.map((b) => `${b.x},${b.y}`).join(" ")}
        fill="none"
        className="stroke-rose-400/70"
        strokeWidth="4"
      />
      {BEADS.map((bead, i) => (
        <g key={bead.x}>
          <circle
            cx={bead.x}
            cy={bead.y}
            r="17"
            className="fill-violet-500/25 stroke-violet-600/70"
            strokeWidth="1.5"
          />
          <circle cx={bead.x} cy={bead.y} r="8" className="fill-violet-600/55" />
          {i === 2 && (
            <circle
              cx={bead.x}
              cy={bead.y}
              r="23"
              fill="none"
              className="stroke-emerald-500"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
          )}
        </g>
      ))}
      <line x1="148" x2="148" y1="34" y2="42" className="stroke-emerald-600/70" />
      <text x="148" y="28" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-bold">
        one nucleosome
      </text>
      <text x="170" y="132" textAnchor="middle" className="fill-muted-foreground text-[10px]">
        EM appearance: repeating beads on a string
      </text>
    </svg>
  );
}

const FACTS = [
  {
    title: "Histone proteins",
    body: "Positively charged, basic proteins — rich in the basic amino acids Lysine (Lys) and Arginine (Arg).",
  },
  {
    title: "Histone octamer",
    body: "Eight histone protein molecules. Negatively charged DNA wraps around this positively charged core.",
  },
  {
    title: "Nucleosome formation",
    body: "DNA wrapped around a histone octamer; ≈ 200 base pairs. Repeating units form chromatin and look like beads on a string under EM — each bead is one nucleosome.",
  },
];

export function NucleosomeStructure() {
  return (
    <div className="my-6">
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl border border-violet-500/30 bg-card p-4">
          <div className={EYEBROW}>Nucleosome core · labelled</div>
          <NucleosomeCoreArt />
        </div>
        <div className="rounded-2xl border border-rose-500/30 bg-card p-4">
          <div className={EYEBROW}>Electron microscope appearance</div>
          <BeadsOnStringArt />
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {FACTS.map((fact) => (
          <div key={fact.title} className="rounded-xl border border-border bg-card p-3.5">
            <div className="text-sm font-bold tracking-tight text-foreground">{fact.title}</div>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{fact.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
