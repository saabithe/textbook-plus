"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { MousePointerClick } from "lucide-react";
import { cn } from "@/lib/utils";
import { Formula } from "@/components/content/Formula";

type TermId = "xt" | "amp" | "w" | "phase" | "phi" | "te";

interface Term {
  id: TermId;
  chip: string;
  name: string;
  color: string;
  meaning: ReactNode;
}

const TERMS: Term[] = [
  {
    id: "xt",
    chip: "x(t)",
    name: "Displacement",
    color: "#f43f5e",
    meaning: (
      <>
        The position of the particle at the instant <em>t</em>, measured from the mean (equilibrium) position — the
        quantity every other term in the equation controls.
      </>
    ),
  },
  {
    id: "amp",
    chip: "A",
    name: "Amplitude",
    color: "#f59e0b",
    meaning: (
      <>
        The maximum displacement from the mean position. The cosine factor only oscillates between +1 and −1, so the
        particle is confined to the range <strong>−A ≤ x ≤ +A</strong> at all times.
      </>
    ),
  },
  {
    id: "w",
    chip: "ω",
    name: "Angular frequency",
    color: "#3b82f6",
    meaning: (
      <>
        How fast the motion cycles in time: <strong>ω = 2π/T = 2πν</strong>, measured in radians per second. A larger
        ω means a shorter period and a quicker oscillation.
      </>
    ),
  },
  {
    id: "phase",
    chip: "ωt + φ",
    name: "Phase",
    color: "#8b5cf6",
    meaning: (
      <>
        The time-varying quantity (ωt + φ) is the <strong>phase</strong> — it grows steadily with time and describes
        the state of motion (position and velocity) at any instant t.
      </>
    ),
  },
  {
    id: "phi",
    chip: "φ",
    name: "Phase constant",
    color: "#10b981",
    meaning: (
      <>
        The value of the phase at t = 0. Because it is fixed by the displacement and velocity of the particle when the
        stopwatch is started, φ records the <strong>initial conditions</strong> — it answers:{" "}
        <em>where did the motion start?</em>
      </>
    ),
  },
  {
    id: "te",
    chip: "ωt",
    name: "Time evolution",
    color: "#06b6d4",
    meaning: (
      <>
        The term ωt makes the phase (ωt + φ) advance uniformly with time. In one period T the argument grows by 2π, so
        the particle returns to exactly the same state — this is what makes the motion repeat.
      </>
    ),
  },
];

/** The three parts of the equation that the deconstruction calls out. */
const DECONSTRUCT: { id: TermId; term: string; label: string }[] = [
  { id: "amp", term: "A", label: "amplitude" },
  { id: "te", term: "ωt", label: "time evolution" },
  { id: "phi", term: "φ", label: "initial phase" },
];

/** Full clickable set — matches the "click each term" table. */
const CHIPS: TermId[] = ["xt", "amp", "w", "phase", "phi"];

export function ShmEquationAnatomy() {
  const [selected, setSelected] = useState<TermId>("amp");
  const active = TERMS.find((t) => t.id === selected)!;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-3">
        <p className="text-center text-sm font-extrabold tracking-tight text-foreground">
          <MousePointerClick className="mr-1.5 inline h-4 w-4 text-violet-500" />
          Anatomy of the SHM equation — click each term
        </p>
      </div>

      <div className="px-5 pb-5 pt-4">
        <Formula block>{String.raw`x(t) = A \cos(\omega t + \phi)`}</Formula>

        {/* deconstruction row */}
        <div className="mt-6 flex items-start justify-center gap-10">
          {DECONSTRUCT.map((d) => {
            const t = TERMS.find((x) => x.id === d.id)!;
            const isSel = selected === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelected(d.id)}
                aria-pressed={isSel}
                className="flex flex-col items-center outline-none"
              >
                <span
                  style={{ color: t.color }}
                  className={cn(
                    "font-serif text-[1.6rem] font-bold leading-none transition-transform",
                    isSel && "scale-110"
                  )}
                >
                  {d.term}
                </span>
                <span
                  className="my-1.5 h-5 w-px transition-colors"
                  style={{ background: isSel ? t.color : "var(--border)" }}
                />
                <span
                  className="text-[0.68rem] font-extrabold uppercase tracking-wider transition-colors"
                  style={{ color: isSel ? t.color : "var(--muted-foreground)" }}
                >
                  {d.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* clickable term chips */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 border-t border-border/50 pt-4">
          {CHIPS.map((id) => {
            const t = TERMS.find((x) => x.id === id)!;
            const isSel = selected === id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelected(t.id)}
                aria-pressed={isSel}
                className={cn(
                  "rounded-xl border px-3 py-1.5 font-serif text-[0.95rem] font-semibold transition-all",
                  isSel && "scale-105"
                )}
                style={{
                  borderColor: isSel ? t.color : "var(--border)",
                  background: isSel ? `${t.color}1a` : "transparent",
                  color: isSel ? t.color : "var(--foreground)",
                }}
              >
                {t.chip}
              </button>
            );
          })}
        </div>

        {/* meaning panel */}
        <div
          className="mt-4 rounded-2xl border p-4"
          style={{ borderColor: `${active.color}55`, background: `${active.color}10` }}
        >
          <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.15em]" style={{ color: active.color }}>
            {active.name}
          </p>
          <p className="mt-1 text-[0.95rem] leading-relaxed text-foreground/85">{active.meaning}</p>
        </div>
      </div>
    </div>
  );
}