"use client";

import { useId } from "react";

interface ArrowDiagramProps {
  leftLabel?: string;
  rightLabel?: string;
  leftItems: string[];
  rightItems: string[];
  arrows: [number, number][];
  caption?: string;
}

const ROW = 34;
const TOP = 46;
const LX = 80;
const RX = 260;

type Pt = { x: number; y: number };

/** Intersection of segment p→q with ellipse (cx,cy,rx,ry).
 *  pick "exit" = farthest root from p; "enter" = nearest root beyond exit. */
function clipToEllipse(p: Pt, q: Pt, cx: number, cy: number, rx: number, ry: number, mode: "exit" | "enter", minT = 0): Pt {
  const ux = (p.x - cx) / rx;
  const uy = (p.y - cy) / ry;
  const dx = (q.x - p.x) / rx;
  const dy = (q.y - p.y) / ry;
  const a = dx * dx + dy * dy;
  const b = 2 * (ux * dx + uy * dy);
  const c0 = ux * ux + uy * uy - 1;
  const disc = b * b - 4 * a * c0;
  if (a === 0 || disc < 0) return mode === "exit" ? p : q;
  const sq = Math.sqrt(disc);
  const roots = [(-b - sq) / (2 * a), (-b + sq) / (2 * a)].filter((t) => t >= minT && t <= 1);
  if (roots.length === 0) return mode === "exit" ? p : q;
  const t = mode === "exit" ? Math.max(...roots) : Math.min(...roots);
  return { x: p.x + t * (q.x - p.x), y: p.y + t * (q.y - p.y) };
}

export function ArrowDiagram({
  leftLabel = "A",
  rightLabel = "B",
  leftItems,
  rightItems,
  arrows,
  caption,
}: ArrowDiagramProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const markerId = `${uid}-arrowhead`;
  const rows = Math.max(leftItems.length, rightItems.length);
  const h = TOP + rows * ROW + 18;
  const cy = h / 2;
  const ryE = h / 2 - 12;

  const yOf = (i: number, len: number) => TOP + i * ROW - ((rows * ROW - len * ROW) / 2) + 5;

  return (
    <figure className="my-4">
      <svg
        viewBox={`0 0 340 ${h}`}
        className="mx-auto w-full max-w-sm"
        role="img"
        style={{ color: "var(--foreground)" }}
      >
        <defs>
          <marker
            id={markerId}
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 z" fill="var(--subject-mathematics)" />
          </marker>
        </defs>

        <ellipse cx={LX} cy={cy} rx={62} ry={ryE} fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" />
        <ellipse cx={RX} cy={cy} rx={62} ry={ryE} fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" />

        <text x={LX} y={24} textAnchor="middle" fontSize="14" fontStyle="italic" fontWeight="600" fill="currentColor">
          {leftLabel}
        </text>
        <text x={RX} y={24} textAnchor="middle" fontSize="14" fontStyle="italic" fontWeight="600" fill="currentColor">
          {rightLabel}
        </text>

        {leftItems.map((item, i) => (
          <text key={`l${i}`} x={70} y={yOf(i, leftItems.length)} textAnchor="end" fontSize="13" fill="currentColor">
            {item}
          </text>
        ))}
        {rightItems.map((item, i) => (
          <text key={`r${i}`} x={270} y={yOf(i, rightItems.length)} textAnchor="start" fontSize="13" fill="currentColor">
            {item}
          </text>
        ))}

        {arrows.map(([from, to], i) => {
          const start: Pt = { x: 70, y: yOf(from, leftItems.length) };
          const end: Pt = { x: 270, y: yOf(to, rightItems.length) };
          const exitPt = clipToEllipse(start, end, LX, cy, 62, ryE, "exit");
          const entryPt = clipToEllipse(start, end, RX, cy, 62, ryE, "enter");
          return (
            <line
              key={`a${i}`}
              x1={exitPt.x}
              y1={exitPt.y}
              x2={entryPt.x}
              y2={entryPt.y}
              stroke="var(--subject-mathematics)"
              strokeWidth="1.6"
              markerEnd={`url(#${markerId})`}
            />
          );
        })}
      </svg>
      {caption && (
        <figcaption className="mt-1 text-center text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
