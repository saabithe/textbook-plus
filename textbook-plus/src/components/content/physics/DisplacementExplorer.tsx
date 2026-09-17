"use client";

import { useState } from "react";
import { Formula, FormulaBlock } from "@/components/content/Formula";

type TermId = "a" | "k" | "w" | "p";

interface Term {
  id: TermId;
  chip: string;
  name: string;
  color: string;
  blurb: string;
  latex: string;
}

const TERMS: Term[] = [
  {
    id: "a",
    chip: "a",
    name: "Amplitude",
    color: "#f59e0b",
    blurb: "Scales the wave vertically — the maximum displacement of any particle from the mean position.",
    latex: String.raw`-a \le y \le +a`,
  },
  {
    id: "k",
    chip: "k",
    name: "Angular wave number",
    color: "#8b5cf6",
    blurb: "Sets the spatial repetition — how tightly the wave is packed along the x-axis.",
    latex: String.raw`k = \frac{2\pi}{\lambda}`,
  },
  {
    id: "w",
    chip: "ω",
    name: "Angular frequency",
    color: "#3b82f6",
    blurb: "Sets the temporal oscillation — how fast each particle of the medium vibrates in time.",
    latex: String.raw`\omega = \frac{2\pi}{T}`,
  },
  {
    id: "p",
    chip: "φ",
    name: "Initial phase angle",
    color: "#10b981",
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
        stroke="var(--foreground)"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <polygon points={`${X1 + 11},${MEAN} ${X1 + 1},${MEAN - 5} ${X1 + 1},${MEAN + 5}`} fill="var(--foreground)" fillOpacity="0.3" />
      <text x={X1 - 4} y={MEAN - 8} fontSize="12" textAnchor="end" fill="var(--muted-foreground)">
        Mean position
      </text>

      {/* k highlight: one full wavelength */}
      {term === "k" && (
        <g>
          <rect x={CREST_X} y={36} width={LAMBDA} height={224} fill="#8b5cf6" fillOpacity="0.08" rx="8" />
          <line x1={CREST_X} y1={36} x2={CREST_X} y2={260} stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="5 4" />
          <line x1={NEXT_CREST_X} y1={36} x2={NEXT_CREST_X} y2={260} stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="5 4" />
          <line x1={CREST_X} y1={284} x2={NEXT_CREST_X} y2={284} stroke="#8b5cf6" strokeWidth="2" />
          <polygon points={`${CREST_X},284 ${CREST_X + 9},279 ${CREST_X + 9},289`} fill="#8b5cf6" />
          <polygon points={`${NEXT_CREST_X},284 ${NEXT_CREST_X - 9},279 ${NEXT_CREST_X - 9},289`} fill="#8b5cf6" />
          <text x={(CREST_X + NEXT_CREST_X) / 2} y={276} fontSize="12" fontWeight="700" textAnchor="middle" fill="#8b5cf6">
            one wavelength λ — spatial repetition
          </text>
        </g>
      )}

      {/* φ highlight: shifted ghost wave */}
      {term === "p" && (
        <g>
          <polyline points={wavePoints(70)} fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="7 5" strokeOpacity="0.85" />
          <line x1={CREST_X} y1={40} x2={CREST_X + 70} y2={40} stroke="#10b981" strokeWidth="2" />
          <polygon points={`${CREST_X},40 ${CREST_X + 9},35 ${CREST_X + 9},45`} fill="#10b981" />
          <polygon points={`${CREST_X + 70},40 ${CREST_X + 61},35 ${CREST_X + 61},45`} fill="#10b981" />
          <text x={CREST_X + 35} y={30} fontSize="12" fontWeight="700" textAnchor="middle" fill="#10b981">
            φ shifts the wave sideways
          </text>
        </g>
      )}

      {/* the wave */}
      <polyline points={wavePoints()} fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" />

      {/* a highlight: vertical extent */}
      {term === "a" && (
        <g>
          <line x1={X0} y1={MEAN - AMP} x2={X1} y2={MEAN - AMP} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 4" />
          <line x1={X0} y1={MEAN + AMP} x2={X1} y2={MEAN + AMP} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 4" />
          <text x={X1 - 4} y={MEAN - AMP - 7} fontSize="12" fontWeight="700" textAnchor="end" fill="#f59e0b">
            +a
          </text>
          <text x={X1 - 4} y={MEAN + AMP + 17} fontSize="12" fontWeight="700" textAnchor="end" fill="#f59e0b">
            −a
          </text>
        </g>
      )}
      <line
        x1={CREST_X}
        y1={MEAN - AMP}
        x2={CREST_X}
        y2={MEAN + AMP}
        stroke="#f59e0b"
        strokeWidth={term === "a" ? 3 : 1.5}
        strokeOpacity={term === "a" ? 1 : 0.45}
      />
      <polygon
        points={`${CREST_X},${MEAN - AMP} ${CREST_X - 5},${MEAN - AMP + 9} ${CREST_X + 5},${MEAN - AMP + 9}`}
        fill="#f59e0b"
        fillOpacity={term === "a" ? 1 : 0.45}
      />
      <polygon
        points={`${CREST_X},${MEAN + AMP} ${CREST_X - 5},${MEAN + AMP - 9} ${CREST_X + 5},${MEAN + AMP - 9}`}
        fill="#f59e0b"
        fillOpacity={term === "a" ? 1 : 0.45}
      />
      {term === "a" && (
        <text x={CREST_X + 12} y={MEAN + 4} fontSize="12" fontWeight="700" fill="#f59e0b">
          −a ≤ y ≤ +a
        </text>
      )}

      {/* ω highlight: one particle oscillating in time */}
      {term === "w" && (
        <g>
          <line x1={430} y1={MEAN - AMP} x2={430} y2={MEAN + AMP} stroke="#3b82f6" strokeWidth="2" />
          <polygon points={`430,${MEAN - AMP} 425,${MEAN - AMP + 9} 435,${MEAN - AMP + 9}`} fill="#3b82f6" />
          <polygon points={`430,${MEAN + AMP} 425,${MEAN + AMP - 9} 435,${MEAN + AMP - 9}`} fill="#3b82f6" />
          <text x={516} y={32} fontSize="12" fontWeight="700" textAnchor="end" fill="#3b82f6">
            one particle oscillates in time
          </text>
        </g>
      )}
      <circle cx={term === "w" ? 430 : -20} cy={MEAN} r="6" fill="#3b82f6" stroke="var(--card)" strokeWidth="2">
        <animate attributeName="cy" values={`${MEAN - AMP};${MEAN + AMP};${MEAN - AMP}`} dur="2s" repeatCount="indefinite" />
      </circle>

      {/* crest marker */}
      <circle cx={CREST_X} cy={MEAN - AMP} r="5" fill="#8b5cf6" stroke="var(--card)" strokeWidth="2" />
      <text x={CREST_X + 12} y={MEAN - AMP - 2} fontSize="13" fontWeight="800" fill="var(--foreground)">
        Crest
      </text>
      <text x={CREST_X + 12} y={MEAN - AMP + 13} fontSize="11" fill="var(--muted-foreground)">
        maximum positive displacement
      </text>

      {/* trough marker */}
      <circle cx={TROUGH_X} cy={MEAN + AMP} r="5" fill="#8b5cf6" stroke="var(--card)" strokeWidth="2" />
      <text x={TROUGH_X + 12} y={MEAN + AMP - 2} fontSize="13" fontWeight="800" fill="var(--foreground)">
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

  return (
    <div className="mt-6">
      <p className="mb-3 text-center text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
        Which way does it travel? Tap a sign
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setDir("pos")}
          aria-pressed={dir === "pos"}
          className={`rounded-2xl border px-4 py-3 text-center transition-shadow ${
            dir === "pos"
              ? "border-violet-500/60 bg-violet-500/10 shadow-md"
              : "border-border/60 bg-card hover:shadow-sm"
          }`}
        >
          <span className="text-lg font-extrabold text-foreground">− ωt</span>
          <span className="mt-1 block">
            <Formula>{String.raw`y = a\sin(kx - \omega t + \phi)`}</Formula>
          </span>
          <span className={`mt-2 block text-sm font-extrabold ${dir === "pos" ? "text-violet-700 dark:text-violet-300" : "text-muted-foreground"}`}>
            travels → +x
          </span>
        </button>
        <button
          type="button"
          onClick={() => setDir("neg")}
          aria-pressed={dir === "neg"}
          className={`rounded-2xl border px-4 py-3 text-center transition-shadow ${
            dir === "neg"
              ? "border-violet-500/60 bg-violet-500/10 shadow-md"
              : "border-border/60 bg-card hover:shadow-sm"
          }`}
        >
          <span className="text-lg font-extrabold text-foreground">+ ωt</span>
          <span className="mt-1 block">
            <Formula>{String.raw`y = a\sin(kx + \omega t + \phi)`}</Formula>
          </span>
          <span className={`mt-2 block text-sm font-extrabold ${dir === "neg" ? "text-violet-700 dark:text-violet-300" : "text-muted-foreground"}`}>
            travels ← −x
          </span>
        </button>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 px-4 py-2.5 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
            Minus → +x
          </p>
        </div>
        <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 px-4 py-2.5 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
            Plus → −x
          </p>
        </div>
      </div>
    </div>
  );
}

export function DisplacementExplorer() {
  const [term, setTerm] = useState<TermId>("a");
  const active = TERMS.find((t) => t.id === term)!;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-3">
        <p className="text-center text-[0.95rem] font-bold text-foreground">
          y(x, t) ={" "}
          <button
            type="button"
            onClick={() => setTerm("a")}
            aria-pressed={term === "a"}
            className="mx-0.5 rounded-lg px-2 py-0.5 font-extrabold text-white shadow-sm transition-transform"
            style={{ background: TERMS[0].color, outline: term === "a" ? "2px solid var(--foreground)" : "none", outlineOffset: "2px" }}
          >
            a
          </button>{" "}
          sin({" "}
          <button
            type="button"
            onClick={() => setTerm("k")}
            aria-pressed={term === "k"}
            className="mx-0.5 rounded-lg px-2 py-0.5 font-extrabold text-white shadow-sm"
            style={{ background: TERMS[1].color, outline: term === "k" ? "2px solid var(--foreground)" : "none", outlineOffset: "2px" }}
          >
            k
          </button>
          x −{" "}
          <button
            type="button"
            onClick={() => setTerm("w")}
            aria-pressed={term === "w"}
            className="mx-0.5 rounded-lg px-2 py-0.5 font-extrabold text-white shadow-sm"
            style={{ background: TERMS[2].color, outline: term === "w" ? "2px solid var(--foreground)" : "none", outlineOffset: "2px" }}
          >
            ω
          </button>
          t +{" "}
          <button
            type="button"
            onClick={() => setTerm("p")}
            aria-pressed={term === "p"}
            className="mx-0.5 rounded-lg px-2 py-0.5 font-extrabold text-white shadow-sm"
            style={{ background: TERMS[3].color, outline: term === "p" ? "2px solid var(--foreground)" : "none", outlineOffset: "2px" }}
          >
            φ
          </button>{" "}
          )
        </p>
      </div>

      <div className="px-3 pt-3">
        <WaveFigure term={term} />
      </div>

      <div className="border-t border-border/40 bg-muted/20 px-4 py-3">
        <p className="text-sm font-extrabold" style={{ color: active.color }}>
          {active.chip} — {active.name}
        </p>
        <p className="mt-0.5 text-sm text-muted-foreground">{active.blurb}</p>
        <FormulaBlock latex={active.latex} />
      </div>

      <div className="border-t border-border/40 px-4 pb-4">
        <DirectionToggle />
      </div>
    </div>
  );
}
