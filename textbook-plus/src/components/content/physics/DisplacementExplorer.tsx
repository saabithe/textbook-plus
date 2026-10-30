"use client";

import { useState } from "react";
import { Formula, FormulaBlock } from "@/components/content/Formula";

type TermId = "a" | "k" | "w" | "p";

interface Term {
  id: TermId;
  chip: string;
  name: string;
  blurb: string;
  latex: string;
}

/**
 * One accent (the physics hue) plus the ink ladder — four distinguishable
 * series without inventing a second colour story.
 */
const SERIES: Record<TermId, string> = {
  a: "var(--subject-physics)",
  k: "var(--foreground)",
  w: "var(--muted-foreground)",
  p: "var(--faint)",
};

const TERMS: Term[] = [
  {
    id: "a",
    chip: "a",
    name: "Amplitude",
    blurb: "Scales the wave vertically — the maximum displacement of any particle from the mean position.",
    latex: String.raw`-a \le y \le +a`,
  },
  {
    id: "k",
    chip: "k",
    name: "Angular wave number",
    blurb: "Sets the spatial repetition — how tightly the wave is packed along the x-axis.",
    latex: String.raw`k = \frac{2\pi}{\lambda}`,
  },
  {
    id: "w",
    chip: "ω",
    name: "Angular frequency",
    blurb: "Sets the temporal oscillation — how fast each particle of the medium vibrates in time.",
    latex: String.raw`\omega = \frac{2\pi}{T}`,
  },
  {
    id: "p",
    chip: "φ",
    name: "Initial phase angle",
    blurb: "Shifts the whole wave horizontally — the phase at x = 0, t = 0.",
    latex: String.raw`\phi = \text{phase at } x = 0,\ t = 0`,
  },
];

const MEAN = 150;
const AMP = 70;
const X0 = 40;
const X1 = 520;
const LAMBDA = 200;
const CREST_X = X0 + LAMBDA / 4;
const TROUGH_X = X0 + (3 * LAMBDA) / 4;
const NEXT_CREST_X = CREST_X + LAMBDA;

function wavePoints(shift = 0): string {
  return Array.from({ length: 161 }, (_, i) => {
    const x = X0 + (i * (X1 - X0)) / 160;
    const y = MEAN - AMP * Math.sin((2 * Math.PI * (x - X0 - shift)) / LAMBDA);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

function WaveFigure({ term }: { term: TermId }) {
  return (
    <svg viewBox="0 0 560 300" className="h-auto w-full" role="img" aria-label="Travelling wave with crest, trough and term highlight">
      {/* mean position */}
      <line
        x1={X0}
        y1={MEAN}
        x2={X1 + 5}
        y2={MEAN}
        stroke="var(--border)"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <polygon points={`${X1 + 11},${MEAN} ${X1 + 1},${MEAN - 5} ${X1 + 1},${MEAN + 5}`} fill="var(--muted-foreground)" fillOpacity="0.5" />
      <text x={X1 - 4} y={MEAN - 8} fontSize="11" textAnchor="end" fill="var(--muted-foreground)">
        Mean position
      </text>

      {/* k highlight: one full wavelength */}
      {term === "k" && (
        <g>
          <rect x={CREST_X} y={36} width={LAMBDA} height={224} fill="var(--foreground)" fillOpacity="0.04" />
          <line x1={CREST_X} y1={36} x2={CREST_X} y2={260} stroke="var(--foreground)" strokeWidth="1.5" strokeDasharray="5 4" />
          <line x1={NEXT_CREST_X} y1={36} x2={NEXT_CREST_X} y2={260} stroke="var(--foreground)" strokeWidth="1.5" strokeDasharray="5 4" />
          <line x1={CREST_X} y1={284} x2={NEXT_CREST_X} y2={284} stroke="var(--foreground)" strokeWidth="1.5" />
          <polygon points={`${CREST_X},284 ${CREST_X + 9},279 ${CREST_X + 9},289`} fill="var(--foreground)" />
          <polygon points={`${NEXT_CREST_X},284 ${NEXT_CREST_X - 9},279 ${NEXT_CREST_X - 9},289`} fill="var(--foreground)" />
          <text x={(CREST_X + NEXT_CREST_X) / 2} y={276} fontSize="11" fontWeight="700" textAnchor="middle" fill="var(--foreground)">
            one wavelength λ — spatial repetition
          </text>
        </g>
      )}

      {/* φ highlight: shifted ghost wave */}
      {term === "p" && (
        <g>
          <polyline points={wavePoints(70)} fill="none" stroke="var(--faint)" strokeWidth="2" strokeDasharray="7 5" />
          <line x1={CREST_X} y1={40} x2={CREST_X + 70} y2={40} stroke="var(--faint)" strokeWidth="2" />
          <polygon points={`${CREST_X},40 ${CREST_X + 9},35 ${CREST_X + 9},45`} fill="var(--faint)" />
          <polygon points={`${CREST_X + 70},40 ${CREST_X + 61},35 ${CREST_X + 61},45`} fill="var(--faint)" />
          <text x={CREST_X + 35} y={30} fontSize="11" fontWeight="700" textAnchor="middle" fill="var(--foreground)">
            φ shifts the wave sideways
          </text>
        </g>
      )}

      {/* the wave */}
      <polyline points={wavePoints()} fill="none" stroke="var(--subject-physics)" strokeWidth="2.5" strokeLinecap="round" />

      {/* a highlight: vertical extent */}
      {term === "a" && (
        <g>
          <line x1={X0} y1={MEAN - AMP} x2={X1} y2={MEAN - AMP} stroke="var(--subject-physics)" strokeWidth="1.5" strokeDasharray="5 4" />
          <line x1={X0} y1={MEAN + AMP} x2={X1} y2={MEAN + AMP} stroke="var(--subject-physics)" strokeWidth="1.5" strokeDasharray="5 4" />
          <text x={X1 - 4} y={MEAN - AMP - 7} fontSize="11" fontWeight="700" textAnchor="end" fill="var(--foreground)">
            +a
          </text>
          <text x={X1 - 4} y={MEAN + AMP + 17} fontSize="11" fontWeight="700" textAnchor="end" fill="var(--foreground)">
            −a
          </text>
        </g>
      )}
      <line
        x1={CREST_X}
        y1={MEAN - AMP}
        x2={CREST_X}
        y2={MEAN + AMP}
        stroke="var(--subject-physics)"
        strokeWidth={term === "a" ? 3 : 1.5}
        strokeOpacity={term === "a" ? 1 : 0.45}
      />
      <polygon
        points={`${CREST_X},${MEAN - AMP} ${CREST_X - 5},${MEAN - AMP + 9} ${CREST_X + 5},${MEAN - AMP + 9}`}
        fill="var(--subject-physics)"
        fillOpacity={term === "a" ? 1 : 0.45}
      />
      <polygon
        points={`${CREST_X},${MEAN + AMP} ${CREST_X - 5},${MEAN + AMP - 9} ${CREST_X + 5},${MEAN + AMP - 9}`}
        fill="var(--subject-physics)"
        fillOpacity={term === "a" ? 1 : 0.45}
      />
      {term === "a" && (
        <text x={CREST_X + 12} y={MEAN + 4} fontSize="11" fontWeight="700" fill="var(--foreground)">
          −a ≤ y ≤ +a
        </text>
      )}

      {/* ω highlight: one particle oscillating in time */}
      {term === "w" && (
        <g>
          <line x1={430} y1={MEAN - AMP} x2={430} y2={MEAN + AMP} stroke="var(--muted-foreground)" strokeWidth="2" />
          <polygon points={`430,${MEAN - AMP} 425,${MEAN - AMP + 9} 435,${MEAN - AMP + 9}`} fill="var(--muted-foreground)" />
          <polygon points={`430,${MEAN + AMP} 425,${MEAN + AMP - 9} 435,${MEAN + AMP - 9}`} fill="var(--muted-foreground)" />
          <text x={516} y={32} fontSize="11" fontWeight="700" textAnchor="end" fill="var(--foreground)">
            one particle oscillates in time
          </text>
        </g>
      )}
      <circle cx={term === "w" ? 430 : -20} cy={MEAN} r="6" fill="var(--muted-foreground)" stroke="var(--card)" strokeWidth="2">
        <animate attributeName="cy" values={`${MEAN - AMP};${MEAN + AMP};${MEAN - AMP}`} dur="2s" repeatCount="indefinite" />
      </circle>

      {/* crest marker */}
      <circle cx={CREST_X} cy={MEAN - AMP} r="5" fill="var(--subject-physics)" stroke="var(--card)" strokeWidth="2" />
      <text x={CREST_X + 12} y={MEAN - AMP - 2} fontSize="11" fontWeight="700" fill="var(--foreground)">
        Crest
      </text>
      <text x={CREST_X + 12} y={MEAN - AMP + 13} fontSize="11" fill="var(--muted-foreground)">
        maximum positive displacement
      </text>

      {/* trough marker */}
      <circle cx={TROUGH_X} cy={MEAN + AMP} r="5" fill="var(--subject-physics)" stroke="var(--card)" strokeWidth="2" />
      <text x={TROUGH_X + 12} y={MEAN + AMP - 2} fontSize="11" fontWeight="700" fill="var(--foreground)">
        Trough
      </text>
      <text x={TROUGH_X + 12} y={MEAN + AMP + 13} fontSize="11" fill="var(--muted-foreground)">
        maximum negative displacement
      </text>
    </svg>
  );
}

function DirectionToggle() {
  const [dir, setDir] = useState<"pos" | "neg">("pos");

  const option = (active: boolean) =>
    [
      "rounded-lg border px-4 py-3 text-center transition-colors",
      active
        ? "border-rule-strong bg-[color-mix(in_oklab,var(--foreground)_5%,transparent)]"
        : "border-border bg-card hover:border-rule-strong",
    ].join(" ");

  return (
    <div className="mt-6">
      <p className="t-micro mb-3 text-center">
        Which way does it travel? Tap a sign
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setDir("pos")}
          aria-pressed={dir === "pos"}
          className={option(dir === "pos")}
        >
          <span className="text-base font-bold tabular-nums text-foreground">− ωt</span>
          <span className="mt-1 block">
            <Formula>{String.raw`y = a\sin(kx - \omega t + \phi)`}</Formula>
          </span>
          <span className={`mt-2 block text-sm font-semibold ${dir === "pos" ? "text-foreground" : "text-muted-foreground"}`}>
            travels → +x
          </span>
        </button>
        <button
          type="button"
          onClick={() => setDir("neg")}
          aria-pressed={dir === "neg"}
          className={option(dir === "neg")}
        >
          <span className="text-base font-bold tabular-nums text-foreground">+ ωt</span>
          <span className="mt-1 block">
            <Formula>{String.raw`y = a\sin(kx + \omega t + \phi)`}</Formula>
          </span>
          <span className={`mt-2 block text-sm font-semibold ${dir === "neg" ? "text-foreground" : "text-muted-foreground"}`}>
            travels ← −x
          </span>
        </button>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="border-l-[3px] border-l-foreground px-3 py-1.5">
          <p className="t-micro">Minus → +x</p>
        </div>
        <div className="border-l-[3px] border-l-foreground px-3 py-1.5">
          <p className="t-micro">Plus → −x</p>
        </div>
      </div>
    </div>
  );
}

function TermChip({
  id,
  term,
  onSelect,
}: {
  id: TermId;
  term: TermId;
  onSelect: (t: TermId) => void;
}) {
  const item = TERMS.find((t) => t.id === id)!;
  const active = term === id;

  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      aria-pressed={active}
      className="rounded-[3px] border px-1.5 py-0.5 text-sm font-bold text-foreground transition-colors"
      style={{
        borderColor: active ? "var(--foreground)" : "var(--border)",
        backgroundColor: active ? "color-mix(in oklab, var(--foreground) 6%, transparent)" : "transparent",
      }}
    >
      {item.chip}
    </button>
  );
}

export function DisplacementExplorer() {
  const [term, setTerm] = useState<TermId>("a");
  const active = TERMS.find((t) => t.id === term)!;

  return (
    <div className="my-6 min-w-0 overflow-x-auto rounded-lg border border-border bg-card">      <div className="border-b border-border px-4 py-3">
        <p className="text-center text-sm font-semibold text-foreground">
          y(x, t) ={" "}
          <span className="inline-flex flex-wrap items-baseline justify-center gap-x-1">
            <TermChip id="a" term={term} onSelect={setTerm} />
            <span className="ml-0.5 font-bold text-foreground">sin(</span>
            <TermChip id="k" term={term} onSelect={setTerm} />
            <span className="text-muted-foreground">x −</span>
            <TermChip id="w" term={term} onSelect={setTerm} />
            <span className="text-muted-foreground">t +</span>
            <TermChip id="p" term={term} onSelect={setTerm} />
            <span className="ml-0.5 font-bold text-foreground">)</span>
          </span>
        </p>
      </div>

      <div className="px-3 pt-3">
        <WaveFigure term={term} />
      </div>

      <div className="border-t border-border bg-muted/40 px-4 py-3">
        <p className="flex items-center gap-2 text-sm font-bold text-foreground">
          <span className="inline-block h-3 w-[3px] shrink-0" style={{ background: SERIES[term] }} aria-hidden="true" />
          {active.chip} — {active.name}
        </p>
        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{active.blurb}</p>
        <FormulaBlock latex={active.latex} />
      </div>

      <div className="border-t border-border px-4 pb-4">
        <DirectionToggle />
      </div>
    </div>
  );
}
