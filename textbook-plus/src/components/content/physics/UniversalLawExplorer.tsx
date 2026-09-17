"use client";

import { useState } from "react";
import { Hand } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

const G = 6.67e-11;
const VIEW_W = 460;
const VIEW_H = 170;
const MAX_SPAN = 5; // m, for the slider range

function toSci(x: number): string {
  if (x === 0) return "0";
  const exp = Math.floor(Math.log10(x));
  const mant = x / Math.pow(10, exp);
  return `${mant.toFixed(1)} × 10${exp}`;
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="flex items-baseline justify-between text-[0.7rem]">
        <span className="font-extrabold uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
        <span className="font-bold text-violet-700 dark:text-violet-300">
          {value} {unit}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-violet-500/20 accent-violet-600"
      />
    </label>
  );
}

export function UniversalLawExplorer() {
  const [m1, setM1] = useState(1);
  const [m2, setM2] = useState(1);
  const [r, setR] = useState(1);

  const F = (G * m1 * m2) / (r * r);

  const cx = VIEW_W / 2;
  const half = 45 + (r / MAX_SPAN) * 160;
  const x1 = cx - half;
  const x2 = cx + half;
  const R1 = 14 + Math.sqrt(m1) * 5;
  const R2 = 14 + Math.sqrt(m2) * 5;
  const y = VIEW_H / 2 - 8;
  const arrow = 22 + r * 3;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-violet-500/25 bg-card shadow-sm">
      <div className="flex items-center gap-2 border-b border-violet-500/10 bg-violet-500/[0.06] px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
        <Hand className="h-3.5 w-3.5" />
        Universal law — drag to feel the force
      </div>

      <div className="grid gap-3 p-3">
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full" role="img" aria-label="Two point masses attract with force F">
          <line
            x1={x1}
            y1={y}
            x2={x2}
            y2={y}
            stroke="var(--muted-foreground)"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* force arrows  */}
          <g stroke="var(--foreground)" strokeWidth="2.2" strokeLinecap="round">
            <line x1={x2 - R2} y1={y} x2={x2 - R2 - arrow} y2={y} markerEnd="url(#ulArrowL)" />
            <line x1={x1 + R1} y1={y} x2={x1 + R1 + arrow} y2={y} markerEnd="url(#ulArrowR)" />
          </g>
          <defs>
            <marker id="ulArrowL" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--foreground)" />
            </marker>
            <marker id="ulArrowR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--foreground)" />
            </marker>
          </defs>

          <circle cx={x1} cy={y} r={R1} fill="#8b5cf6" fillOpacity="0.22" stroke="#8b5cf6" strokeWidth="2.5" />
          <circle cx={x2} cy={y} r={R2} fill="#06b6d4" fillOpacity="0.22" stroke="#06b6d4" strokeWidth="2.5" />

          <text x={x1} y={y - R1 - 10} textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--foreground)">m₁</text>
          <text x={x2} y={y - R2 - 10} textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--foreground)">m₂</text>
          <text x={cx} y={y + 34} textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--muted-foreground)">r = {r} m</text>
        </svg>

        <div className="rounded-xl border border-border/40 bg-muted/15 px-3 py-2 text-center">
          <p className="mb-0.5 text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
            Force on each mass
          </p>
          <p className="text-base font-black text-violet-800 dark:text-violet-200">
            F = <Formula>{String.raw`\frac{G\,m_1 m_2}{r^2}`}</Formula>
            {" "}= <span className="text-emerald-600 dark:text-emerald-400">{toSci(F)} N</span>
          </p>
        </div>

        <div className="flex flex-col gap-2.5 rounded-xl border border-border/40 bg-muted/20 p-3">
          <Slider label="Mass m₁" value={m1} min={0.5} max={10} step={0.5} unit="kg" onChange={setM1} />
          <Slider label="Mass m₂" value={m2} min={0.5} max={10} step={0.5} unit="kg" onChange={setM2} />
          <Slider label="Distance r" value={r} min={0.5} max={5} step={0.5} unit="m" onChange={setR} />
        </div>
        <p className={cn(
          "rounded-lg px-3 py-2 text-[0.7rem] leading-snug",
          "border border-violet-500/30 bg-violet-500/[0.08] text-violet-900 dark:text-violet-100"
        )}>
          <strong>Doubling m</strong> doubles F; <strong>halving r</strong> quadruples F.
          Even at 10 kg, 60 cm apart the force is ~2 × 10⁻⁹ N — gravity is the weakest force.
        </p>
      </div>
    </div>
  );
}