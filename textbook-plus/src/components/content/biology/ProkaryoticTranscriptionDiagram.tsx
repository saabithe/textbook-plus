import { Expandable } from "@/components/content/Expandable";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

/* Horizontal double helix: phase ±π/2 keeps the two strands maximally apart
   at both ends, so the 3′/5′ labels never collide. */
const HELIX_START = 18;
const HELIX_END = 342;
const HELIX_CY = 78;
const HELIX_AMP = 16;
const HELIX_PITCH = 108;

function helixY(x: number, phase: number): number {
  return HELIX_CY + HELIX_AMP * Math.sin(((x - HELIX_START) / HELIX_PITCH) * Math.PI * 2 + phase);
}

function helixPath(phase: number): string {
  const points: string[] = [];
  for (let x = HELIX_START; x <= HELIX_END; x += 4) {
    points.push(`${points.length === 0 ? "M" : "L"}${x} ${helixY(x, phase).toFixed(1)}`);
  }
  return points.join(" ");
}

const HELIX_STRAND_TOP = helixPath(-Math.PI / 2);
const HELIX_STRAND_BOTTOM = helixPath(Math.PI / 2);
const HELIX_RUNGS = Array.from({ length: 18 }, (_, i) => 27 + i * 18);

const STAGE_ONE_LABELS: string[] = [
  "DNA double helix",
  "Promoter region",
  "RNA polymerase + σ (Sigma factor)",
];

const STAGE_TWO_LABELS: string[] = [
  "Unwound DNA region",
  "RNA polymerase moving along DNA",
  "RNA transcript being synthesised",
  "Sigma factor shown detached",
];

const STAGE_THREE_LABELS: string[] = [
  "Terminator region",
  "RNA transcript released",
  "ρ (Rho factor) near RNA polymerase",
];

const DUPLEX_RUNGS_LEFT = [30, 46, 62, 78, 94];
const DUPLEX_RUNGS_RIGHT = [286, 302, 318, 334];

function LabelLegend({ labels }: { labels: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {labels.map((label) => (
        <li
          key={label}
          className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[0.7rem] font-semibold leading-snug text-muted-foreground"
        >
          {label}
        </li>
      ))}
    </ul>
  );
}

function InitiationPanel() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className={EYEBROW}>Stage 1 · Initiation</div>
      <svg
        viewBox="0 0 360 176"
        className="mt-2 h-auto w-full"
        role="img"
        aria-label="Initiation schematic: a horizontal DNA double helix with the promoter region on the left, and an RNA polymerase with its sigma factor attached further along the strand. The upper strand runs 5 prime on the left to 3 prime on the right; the lower strand runs 3 prime on the left to 5 prime on the right."
      >
        {/* promoter region on the left */}
        <rect x="24" y="44" width="92" height="68" rx="8" className="fill-emerald-50/70 stroke-emerald-500/60 dark:fill-emerald-950/20" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="70" y="34" textAnchor="middle" className="fill-emerald-700 text-[10px] font-bold dark:fill-emerald-300">
          Promoter
        </text>

        {/* helix rungs and strands */}
        {HELIX_RUNGS.map((x) => (
          <line
            key={x}
            x1={x}
            x2={x}
            y1={helixY(x, -Math.PI / 2)}
            y2={helixY(x, Math.PI / 2)}
            className="stroke-violet-500/45 dark:stroke-violet-400/50"
            strokeWidth="2.5"
          />
        ))}
        <path d={HELIX_STRAND_TOP} fill="none" className="stroke-rose-500" strokeWidth="3.5" strokeLinecap="round" />
        <path d={HELIX_STRAND_BOTTOM} fill="none" className="stroke-sky-500" strokeWidth="3.5" strokeLinecap="round" />

        {/* strand polarity */}
        <text x="8" y="66" textAnchor="end" className="fill-rose-700 text-[11px] font-bold dark:fill-rose-300">3′</text>
        <text x="8" y="100" textAnchor="end" className="fill-sky-700 text-[11px] font-bold dark:fill-sky-300">5′</text>
        <text x="354" y="66" textAnchor="end" className="fill-rose-700 text-[11px] font-bold dark:fill-rose-300">5′</text>
        <text x="354" y="100" textAnchor="end" className="fill-sky-700 text-[11px] font-bold dark:fill-sky-300">3′</text>

        {/* RNA polymerase with sigma factor attached */}
        <ellipse cx="240" cy="78" rx="38" ry="26" className="fill-violet-100 stroke-violet-600 dark:fill-violet-950/40 dark:stroke-violet-400" strokeWidth="2" />
        <text x="240" y="82" textAnchor="middle" className="fill-violet-900 text-[8px] font-bold dark:fill-violet-200">
          RNA polymerase
        </text>
        <circle cx="288" cy="52" r="11" className="fill-amber-100 stroke-amber-600 dark:fill-amber-950/40 dark:stroke-amber-400" strokeWidth="1.5" />
        <text x="288" y="57" textAnchor="middle" className="fill-amber-900 text-[11px] font-bold dark:fill-amber-200">σ</text>
      </svg>
      <LabelLegend labels={STAGE_ONE_LABELS} />
    </div>
  );
}

function ElongationPanel() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className={EYEBROW}>Stage 2 · Elongation</div>
      <svg
        viewBox="0 0 360 176"
        className="mt-2 h-auto w-full"
        role="img"
        aria-label="Elongation schematic: a DNA duplex with an unwound region around an RNA polymerase that moves rightwards along the strand from promoter towards terminator. An RNA transcript emerges from the polymerase while the sigma factor sits detached nearby. Upper strand is 5 prime on the left and 3 prime on the right; lower strand is 3 prime on the left and 5 prime on the right."
      >
        <defs>
          <marker id="pt-elongation-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
            <path d="M0,0 L9,4.5 L0,9 z" className="fill-foreground/70" />
          </marker>
        </defs>

        {/* promoter at left, terminator at right */}
        <rect x="24" y="52" width="64" height="52" rx="6" className="fill-emerald-50/70 stroke-emerald-500/60 dark:fill-emerald-950/20" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="56" y="44" textAnchor="middle" className="fill-emerald-700 text-[9px] font-bold dark:fill-emerald-300">Promoter</text>
        <rect x="292" y="52" width="56" height="52" rx="6" className="fill-rose-50/70 stroke-rose-500/60 dark:fill-rose-950/20" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="320" y="44" textAnchor="middle" className="fill-rose-700 text-[9px] font-bold dark:fill-rose-300">Terminator</text>

        {/* duplex on both sides, unwound bubble in the middle */}
        {DUPLEX_RUNGS_LEFT.map((x) => (
          <line key={`left-${x}`} x1={x} x2={x} y1="64" y2="92" className="stroke-violet-500/45 dark:stroke-violet-400/50" strokeWidth="2" />
        ))}
        {DUPLEX_RUNGS_RIGHT.map((x) => (
          <line key={`right-${x}`} x1={x} x2={x} y1="64" y2="92" className="stroke-violet-500/45 dark:stroke-violet-400/50" strokeWidth="2" />
        ))}
        <line x1="18" y1="64" x2="112" y2="64" className="stroke-rose-500" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="18" y1="92" x2="112" y2="92" className="stroke-sky-500" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M112 64 C 148 64 148 38 190 38 C 232 38 232 64 268 64" fill="none" className="stroke-rose-500" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M112 92 C 148 92 148 118 190 118 C 232 118 232 92 268 92" fill="none" className="stroke-sky-500" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="268" y1="64" x2="342" y2="64" className="stroke-rose-500" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="268" y1="92" x2="342" y2="92" className="stroke-sky-500" strokeWidth="3.5" strokeLinecap="round" />

        {/* strand polarity */}
        <text x="10" y="60" textAnchor="end" className="fill-rose-700 text-[10px] font-bold dark:fill-rose-300">5′</text>
        <text x="10" y="101" textAnchor="end" className="fill-sky-700 text-[10px] font-bold dark:fill-sky-300">3′</text>
        <text x="354" y="60" textAnchor="end" className="fill-rose-700 text-[10px] font-bold dark:fill-rose-300">3′</text>
        <text x="354" y="101" textAnchor="end" className="fill-sky-700 text-[10px] font-bold dark:fill-sky-300">5′</text>

        {/* polymerase moving along DNA */}
        <line x1="158" y1="22" x2="222" y2="22" className="stroke-foreground/60" strokeWidth="1.5" markerEnd="url(#pt-elongation-arrow)" />
        <ellipse cx="190" cy="78" rx="36" ry="25" className="fill-violet-100 stroke-violet-600 dark:fill-violet-950/40 dark:stroke-violet-400" strokeWidth="2" />
        <text x="190" y="82" textAnchor="middle" className="fill-violet-900 text-[8px] font-bold dark:fill-violet-200">
          RNA polymerase
        </text>

        {/* emerging RNA transcript */}
        <path d="M190 104 C 190 122 200 132 220 132 L 254 132" fill="none" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" strokeLinecap="round" />
        <text x="260" y="136" className="fill-emerald-700 text-[10px] font-bold dark:fill-emerald-300">RNA</text>

        {/* sigma factor detached */}
        <circle cx="288" cy="26" r="11" className="fill-amber-100 stroke-amber-600 dark:fill-amber-950/40 dark:stroke-amber-400" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="288" y="31" textAnchor="middle" className="fill-amber-900 text-[11px] font-bold dark:fill-amber-200">σ</text>
      </svg>
      <LabelLegend labels={STAGE_TWO_LABELS} />
    </div>
  );
}

function TerminationPanel() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className={EYEBROW}>Stage 3 · Termination</div>
      <svg
        viewBox="0 0 360 176"
        className="mt-2 h-auto w-full"
        role="img"
        aria-label="Termination schematic: an RNA polymerase at the terminator region on the right of the DNA, with rho factor nearby and the RNA transcript released below. Upper strand is 5 prime on the left and 3 prime on the right; lower strand is 3 prime on the left and 5 prime on the right."
      >
        <defs>
          <marker id="pt-termination-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
            <path d="M0,0 L9,4.5 L0,9 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
        </defs>

        {/* DNA duplex with a short unwound stretch at the polymerase */}
        {DUPLEX_RUNGS_LEFT.map((x) => (
          <line key={`left-${x}`} x1={x} x2={x} y1="64" y2="92" className="stroke-violet-500/45 dark:stroke-violet-400/50" strokeWidth="2" />
        ))}
        {DUPLEX_RUNGS_RIGHT.map((x) => (
          <line key={`right-${x}`} x1={x} x2={x} y1="64" y2="92" className="stroke-violet-500/45 dark:stroke-violet-400/50" strokeWidth="2" />
        ))}
        <line x1="18" y1="64" x2="174" y2="64" className="stroke-rose-500" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="18" y1="92" x2="174" y2="92" className="stroke-sky-500" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M174 64 C 194 64 194 46 218 46 C 242 46 242 64 262 64" fill="none" className="stroke-rose-500" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M174 92 C 194 92 194 110 218 110 C 242 110 242 92 262 92" fill="none" className="stroke-sky-500" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="262" y1="64" x2="342" y2="64" className="stroke-rose-500" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="262" y1="92" x2="342" y2="92" className="stroke-sky-500" strokeWidth="3.5" strokeLinecap="round" />

        {/* terminator region on the right */}
        <rect x="268" y="50" width="70" height="56" rx="6" className="fill-rose-50/70 stroke-rose-500/60 dark:fill-rose-950/20" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="303" y="42" textAnchor="middle" className="fill-rose-700 text-[9px] font-bold dark:fill-rose-300">Terminator</text>

        {/* strand polarity */}
        <text x="10" y="60" textAnchor="end" className="fill-rose-700 text-[10px] font-bold dark:fill-rose-300">5′</text>
        <text x="10" y="101" textAnchor="end" className="fill-sky-700 text-[10px] font-bold dark:fill-sky-300">3′</text>
        <text x="354" y="60" textAnchor="end" className="fill-rose-700 text-[10px] font-bold dark:fill-rose-300">3′</text>
        <text x="354" y="101" textAnchor="end" className="fill-sky-700 text-[10px] font-bold dark:fill-sky-300">5′</text>

        {/* rho factor near the polymerase */}
        <circle cx="256" cy="28" r="12" className="fill-orange-100 stroke-orange-600 dark:fill-orange-950/40 dark:stroke-orange-400" strokeWidth="1.5" />
        <text x="256" y="33" textAnchor="middle" className="fill-orange-900 text-[12px] font-bold dark:fill-orange-200">ρ</text>

        {/* polymerase and released transcript */}
        <ellipse cx="218" cy="78" rx="34" ry="24" className="fill-violet-100 stroke-violet-600 dark:fill-violet-950/40 dark:stroke-violet-400" strokeWidth="2" />
        <text x="218" y="82" textAnchor="middle" className="fill-violet-900 text-[8px] font-bold dark:fill-violet-200">
          RNA polymerase
        </text>
        <path d="M218 103 C 218 126 232 138 252 138" fill="none" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="266" y1="138" x2="318" y2="138" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#pt-termination-arrow)" />
        <text x="326" y="142" className="fill-emerald-700 text-[10px] font-bold dark:fill-emerald-300">RNA</text>
      </svg>
      <LabelLegend labels={STAGE_THREE_LABELS} />
    </div>
  );
}

function CoupledProcessDiagram() {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-muted/20 p-2">
      <svg
        viewBox="0 0 720 286"
        className="mx-auto h-auto w-full"
        role="img"
        aria-label="Coupled transcription and translation: DNA at the left with an RNA transcript emerging from it, and a ribosome moving along that same mRNA with a growing chain, so translation begins while transcription continues. The DNA upper strand is 5 prime on the left and 3 prime on the right; the lower strand is 3 prime on the left and 5 prime on the right."
      >
        <defs>
          <marker id="pt-coupled-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
            <path d="M0,0 L9,4.5 L0,9 z" className="fill-violet-600 dark:fill-violet-400" />
          </marker>
        </defs>

        {/* DNA at the left */}
        {[38, 58, 78, 98, 118, 138, 158, 178].map((x) => (
          <line key={x} x1={x} x2={x} y1="92" y2="120" className="stroke-violet-500/45 dark:stroke-violet-400/50" strokeWidth="2" />
        ))}
        <line x1="24" y1="92" x2="192" y2="92" className="stroke-rose-500" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="24" y1="120" x2="192" y2="120" className="stroke-sky-500" strokeWidth="3.5" strokeLinecap="round" />
        <text x="24" y="72" className="fill-foreground text-[11px] font-bold">DNA</text>
        <text x="16" y="88" textAnchor="end" className="fill-rose-700 text-[10px] font-bold dark:fill-rose-300">5′</text>
        <text x="16" y="128" textAnchor="end" className="fill-sky-700 text-[10px] font-bold dark:fill-sky-300">3′</text>
        <text x="200" y="88" className="fill-rose-700 text-[10px] font-bold dark:fill-rose-300">3′</text>
        <text x="200" y="128" className="fill-sky-700 text-[10px] font-bold dark:fill-sky-300">5′</text>

        {/* RNA transcript emerging from DNA */}
        <ellipse cx="192" cy="106" rx="22" ry="19" className="fill-violet-100 stroke-violet-600 dark:fill-violet-950/40 dark:stroke-violet-400" strokeWidth="2" />
        <text x="192" y="110" textAnchor="middle" className="fill-violet-900 text-[8px] font-bold dark:fill-violet-200">RNA pol.</text>
        <path d="M212 106 C 258 106 268 174 330 174 L 660 174" fill="none" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="3" strokeLinecap="round" />
        <text x="246" y="130" className="fill-emerald-700 text-[10px] font-bold dark:fill-emerald-300">RNA transcript</text>

        {/* ribosome moving along the same mRNA */}
        <line x1="418" y1="72" x2="500" y2="72" className="stroke-foreground/60" strokeWidth="1.5" markerEnd="url(#pt-coupled-arrow)" />
        <rect x="400" y="150" width="96" height="48" rx="20" className="fill-blue-100 stroke-blue-600 dark:fill-blue-950/40 dark:stroke-blue-400" strokeWidth="2" />
        <text x="448" y="179" textAnchor="middle" className="fill-blue-900 text-[10px] font-bold dark:fill-blue-200">
          Ribosome
        </text>
        <text x="448" y="222" textAnchor="middle" className="fill-foreground text-[10px] font-semibold">
          Translation
        </text>

        {/* growing chain */}
        <path d="M448 150 L448 116 L472 100" fill="none" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="448" cy="114" r="4" className="fill-amber-500 dark:fill-amber-400" />
        <circle cx="474" cy="98" r="4" className="fill-amber-500 dark:fill-amber-400" />
        <text x="486" y="102" className="fill-amber-700 text-[10px] font-bold dark:fill-amber-300">
          Growing chain
        </text>
      </svg>
    </div>
  );
}

export function ProkaryoticTranscriptionDiagram() {
  return (
    <div className="my-8 space-y-6">
      <Expandable title="Complete prokaryotic transcription — textbook diagram">
        <div className="grid gap-4 lg:grid-cols-3">
          <InitiationPanel />
          <ElongationPanel />
          <TerminationPanel />
        </div>
      </Expandable>

      <div className="rounded-2xl border border-border bg-card p-4">
        <div className={EYEBROW}>4.5 Coupled transcription and translation</div>
        <p className="text-sm leading-relaxed text-foreground">
          In bacteria, transcription and translation can occur simultaneously.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-3.5">
            <div className={EYEBROW}>Reasons</div>
            <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
              <li><strong>mRNA</strong> requires no post-transcriptional processing.</li>
              <li><strong>There is no nuclear–cytoplasmic compartmentalisation.</strong></li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-3.5">
            <div className={EYEBROW}>Result</div>
            <p className="text-sm leading-relaxed text-foreground">
              <strong>Translation</strong> can begin while mRNA is still being transcribed.
            </p>
          </div>
        </div>

        <CoupledProcessDiagram />

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-3.5 text-sm leading-relaxed text-foreground">
            No post-transcriptional processing
          </div>
          <div className="rounded-xl border border-border bg-card p-3.5 text-sm leading-relaxed text-foreground">
            No nuclear–cytoplasmic compartmentalisation
          </div>
        </div>
      </div>
    </div>
  );
}
