"use client";

import { useState } from "react";
import { Compass, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type Dir = "+x" | "-x" | "+y" | "-y" | "+z" | "-z";

const DIRS: Dir[] = ["+x", "-x", "+y", "-y", "+z", "-z"];

const AXES: Record<string, "x" | "y" | "z"> = {
  "+x": "x", "-x": "x", "+y": "y", "-y": "y", "+z": "z", "-z": "z",
};
const SIGNS: Record<string, 1 | -1> = {
  "+x": 1, "-x": -1, "+y": 1, "-y": -1, "+z": 1, "-z": -1,
};

function toVec(d: Dir): [number, number, number] {
  const s = SIGNS[d];
  return AXES[d] === "x" ? [s, 0, 0] : AXES[d] === "y" ? [0, s, 0] : [0, 0, s];
}

function fromVec(w: [number, number, number]): Dir | null {
  const [x, y, z] = w;
  const abs = [Math.abs(x), Math.abs(y), Math.abs(z)];
  if (abs[0] + abs[1] + abs[2] === 0) return null;
  if (abs[0] >= 1 && abs[1] === 0 && abs[2] === 0) return x > 0 ? "+x" : "-x";
  if (abs[1] >= 1 && abs[0] === 0 && abs[2] === 0) return y > 0 ? "+y" : "-y";
  if (abs[2] >= 1 && abs[0] === 0 && abs[1] === 0) return z > 0 ? "+z" : "-z";
  return null;
}

function cross(a: Dir, b: Dir): [number, number, number] {
  const [ax, ay, az] = toVec(a);
  const [bx, by, bz] = toVec(b);
  return [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
}

const DIR_LABEL: Record<Dir, string> = {
  "+x": "+x (right)", "-x": "−x (left)", "+y": "+y (up)", "-y": "−y (down)", "+z": "+z (out of page)", "-z": "−z (into page)",
};

function DirectionGlyph({ dir }: { dir: Dir }) {
  if (dir === "+z") {
    return (
      <svg viewBox="0 0 40 40" className="h-10 w-10" aria-label="out of page">
        <circle cx="20" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="3.5" fill="currentColor" />
      </svg>
    );
  }
  if (dir === "-z") {
    return (
      <svg viewBox="0 0 40 40" className="h-10 w-10" aria-label="into page">
        <circle cx="20" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="13" y1="27" x2="27" y2="13" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  const horizontal = dir === "+x" || dir === "-x";
  const positive = dir === "+x" || dir === "+y";
  const w = 44;
  const cx0 = 8, cy0 = 24, cx1 = 36, cy1 = 24;
  return (
    <svg viewBox="0 0 44 46" className="h-11 w-11" aria-label={dir}>
      {horizontal ? (
        <g>
          <line x1={cx0} y1={cy0} x2={cx1} y2={cy1} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <polygon
            points={positive ? `${cx1 + 3},${cy1} ${cx1 - 4},${cy1 - 5} ${cx1 - 4},${cy1 + 5}` : `${cx0 - 3},${cy0} ${cx0 + 4},${cy0 - 5} ${cx0 + 4},${cy0 + 5}`}
            fill="currentColor"
          />
        </g>
      ) : (
        <g>
          <line x1={24} y1={36} x2={24} y2={10} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <polygon
            points={positive ? `24,5 19,14 29,14` : `24,41 19,32 29,32`}
            fill="currentColor"
          />
        </g>
      )}
    </svg>
  );
}

function CyclicWheel() {
  return (
    <svg viewBox="0 0 220 170" className="h-40 w-full max-w-[260px]" aria-hidden="true">
      {[
        { x: 110, y: 28, label: "î" },
        { x: 196, y: 102, label: "ĵ" },
        { x: 24, y: 102, label: "k̂" },
      ].map((node, i, arr) => {
        const from = node;
        const to = arr[(i + 1) % arr.length];
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        return (
          <g key={i}>
            <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="var(--muted-foreground)" strokeOpacity="0.45" strokeWidth="1.5" />
            <text x={midX} y={midY - 4} fontSize="13" textAnchor="middle" fill="var(--muted-foreground)">
              {i + 1}
            </text>
          </g>
        );
      })}
      {[
        { x: 110, y: 28, label: "î" },
        { x: 196, y: 102, label: "ĵ" },
        { x: 24, y: 102, label: "k̂" },
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r="17" fill="var(--background)" stroke="#8b5cf6" strokeWidth="2" />
          <text x={node.x} y={node.y + 5} fontSize="16" textAnchor="middle" fontWeight="800" fill="#8b5cf6">
            {node.label}
          </text>
        </g>
      ))}
      <path d="M 110 28 A 74 74 0 0 0 24 102" fill="none" stroke="var(--foreground)" opacity="0.5" strokeWidth="1.5" markerEnd="url(#wheelArrow)" />
      <defs>
        <marker id="wheelArrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--foreground)" opacity="0.6" />
        </marker>
      </defs>
      <text x="110" y="156" fontSize="10.5" textAnchor="middle" fill="var(--muted-foreground)">
        cyclic order — î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ
      </text>
    </svg>
  );
}

function DirMenu({ label, value, onChange }: { label: string; value: Dir; onChange: (d: Dir) => void }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
      <div className="grid grid-cols-3 gap-1.5">
        {DIRS.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => onChange(d)}
            className={cn(
              "rounded-lg border px-1.5 py-2 text-[0.72rem] font-bold tracking-tight transition-colors",
              value === d
                ? "border-violet-500 bg-violet-500 text-white shadow-sm shadow-violet-500/30"
                : "border-border/60 bg-muted/35 text-foreground/70 hover:bg-muted/60"
            )}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}

export function PropagationExplorer() {
  const [eDir, setEDir] = useState<Dir>("+y");
  const [bDir, setBDir] = useState<Dir>("-x");

  const product = cross(eDir, bDir);
  const vDir = fromVec(product);
  const parallel = vDir === null;

  return (
    <div className="my-6 rounded-2xl border border-violet-500/25 bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
        <Compass className="h-4 w-4" />
        Find the direction
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div>
          <div className="mb-3 flex flex-wrap gap-3">
            <DirMenu label="E axis" value={eDir} onChange={setEDir} />
            <DirMenu label="B axis" value={bDir} onChange={setBDir} />
          </div>

          <div className="rounded-xl border border-border/50 bg-muted/15 px-4 py-4">
            <div className="mb-1 text-center text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
              v = E × B
            </div>
            {parallel ? (
              <p className="py-6 text-center text-sm font-semibold text-amber-600 dark:text-amber-400">
                E and B are parallel — no wave can propagate in that case.
              </p>
            ) : (
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-3 text-[0.85rem] font-bold">
                  <span className="text-violet-700 dark:text-violet-300">E: {DIR_LABEL[eDir]}</span>
                  <span className="text-muted-foreground">×</span>
                  <span className="text-violet-700 dark:text-violet-300">B: {DIR_LABEL[bDir]}</span>
                </div>
                <div className="mt-1 text-sm font-black text-emerald-600 dark:text-emerald-400">
                  v: {DIR_LABEL[vDir!]}
                </div>
                <DirectionGlyph dir={vDir!} />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-border/50 bg-muted/10 px-4 py-4">
          <p className="mb-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
            Cyclic unit-vector rule
          </p>
          <CyclicWheel />
          <p className="mt-2 text-center text-[0.75rem] leading-snug text-muted-foreground">
            Reverse any pair → the result reverses sign. e.g. ĵ × î = −k̂.
          </p>
          <button
            type="button"
            onClick={() => {
              setEDir("+y");
              setBDir("-x");
            }}
            className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/30 px-3 py-1.5 text-xs font-bold text-foreground/70 transition-colors hover:bg-muted/50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset demo
          </button>
        </div>
      </div>
    </div>
  );
}