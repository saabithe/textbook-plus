"use client";

import { cn } from "@/lib/utils";

interface UnitCircleProps {
  angle?: number;
  caption?: string;
  className?: string;
}

const W = 300;
const H = 280;
const CX = 140;
const CY = 140;
const R = 96;

export function UnitCircle({ angle = 1, caption, className }: UnitCircleProps) {
  const px = CX + R * Math.cos(angle);
  const py = CY - R * Math.sin(angle);
  const mx = px;
  const my = CY;

  const arcEnd = {
    x: CX + 30 * Math.cos(angle),
    y: CY - 30 * Math.sin(angle),
  };

  const largeArc = angle > Math.PI ? 1 : 0;
  const sweep = 0;

  return (
    <figure className={cn("my-4", className)}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mx-auto w-full max-w-[300px]"
        role="img"
        aria-label={caption ?? "Unit circle definition of sine and cosine"}
        style={{ color: "var(--foreground)" }}
      >
        <defs>
          <marker id="uc-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="currentColor" opacity="0.6" />
          </marker>
          <marker id="uc-arrow-main" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="currentColor" />
          </marker>
        </defs>

        <line x1={20} y1={CY} x2={W - 14} y2={CY} stroke="currentColor" strokeWidth="1.3" markerEnd="url(#uc-arrow)" />
        <line x1={CX} y1={H - 16} x2={CX} y2={14} stroke="currentColor" strokeWidth="1.3" markerEnd="url(#uc-arrow)" />

        <circle cx={CX} cy={CY} r={R} fill="none" stroke="currentColor" strokeWidth="1.5" />

        <line
          x1={CX}
          y1={CY}
          x2={arcEnd.x}
          y2={arcEnd.y}
          stroke="var(--subject-mathematics)"
          strokeWidth="2"
          markerEnd="url(#uc-arrow-main)"
        />
        <text x={CX + 42 * Math.cos(angle / 2)} y={CY - 40 * Math.sin(angle / 2)} fontSize="13" fontStyle="italic" fill="currentColor">
          x
        </text>

        <circle cx={px} cy={py} r="4" fill="var(--subject-mathematics)" />
        <text x={px + (Math.cos(angle) >= 0 ? 8 : -8)} y={py + (Math.sin(angle) > 0.15 ? -8 : 14)} textAnchor={Math.cos(angle) >= 0 ? "start" : "end"} fontSize="12" fill="currentColor">
          P(a, b)
        </text>

        <line x1={px} y1={py} x2={mx} y2={my} stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        <rect x={mx - 1} y={my - 1} width="7" height="7" fill="none" stroke="currentColor" strokeWidth="1" transform={`rotate(45 ${mx - 1} ${my - 1})`} opacity="0.55" />

        <text x={CX - 12} y={CY - 6} fontSize="11" fill="currentColor">O</text>
        <text x={CX + R - 4} y={CY + 16} fontSize="11" fill="currentColor">A</text>
        <text x={(CX + mx) / 2 - 6} y={CY + 15} fontSize="11" fill="currentColor">M</text>

        <path d={`M ${CX + R * 0.28} ${CY} A ${R * 0.28} ${R * 0.28} 0 0 0 ${CX + R * 0.28} ${CY - 2}`} fill="none" stroke="none" />
        <text x={CX - 34} y={CY - 52} fontSize="11" fill="currentColor">radius = 1</text>

        <text x={W - 26} y={CY - 8} fontSize="11" fontStyle="italic" fill="currentColor">x</text>
        <text x={CX + 10} y={22} fontSize="11" fontStyle="italic" fill="currentColor">y</text>
      </svg>
      {caption && (
        <figcaption className="mt-1 text-center text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
