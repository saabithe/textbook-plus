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
const LX = 80;
const RX = 260;
const RX_R = 62;
const DOT_L_X = LX - RX_R + 14;
const TEXT_L_X = LX - RX_R + 24;
const DOT_R_X = RX + RX_R - 14;
const TEXT_R_X = RX + RX_R - 24;

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

  const ryFor = (len: number) => Math.max(46, ((len - 1) * ROW) / 2 + 34);
  const ryL = ryFor(leftItems.length);
  const ryR = ryFor(rightItems.length);
  const h = Math.max(ryL, ryR) * 2 + 20;
  const cy = h / 2;

  // Items of EACH set are centered within their OWN oval — no cross-column offset math.
  const yItem = (i: number, len: number) => cy - ((len - 1) * ROW) / 2 + i * ROW;

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

        <ellipse cx={LX} cy={cy} rx={RX_R} ry={ryL} fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" />
        <ellipse cx={RX} cy={cy} rx={RX_R} ry={ryR} fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" />

        {/* Set labels sit just inside each oval's top */}
        <text x={LX} y={cy - ryL + 20} textAnchor="middle" fontSize="14" fontStyle="italic" fontWeight="600" fill="currentColor">
          {leftLabel}
        </text>
        <text x={RX} y={cy - ryR + 20} textAnchor="middle" fontSize="14" fontStyle="italic" fontWeight="600" fill="currentColor">
          {rightLabel}
        </text>

        {leftItems.map((item, i) => (
          <g key={`l${i}`}>
            <circle cx={DOT_L_X} cy={yItem(i, leftItems.length)} r="2.6" fill="currentColor" />
            <text
              x={TEXT_L_X}
              y={yItem(i, leftItems.length) + 4}
              textAnchor="start"
              fontSize="13"
              fill="currentColor"
            >
              {item}
            </text>
          </g>
        ))}
        {rightItems.map((item, i) => (
          <g key={`r${i}`}>
            <circle cx={DOT_R_X} cy={yItem(i, rightItems.length)} r="2.6" fill="currentColor" />
            <text
              x={TEXT_R_X}
              y={yItem(i, rightItems.length) + 4}
              textAnchor="end"
              fontSize="13"
              fill="currentColor"
            >
              {item}
            </text>
          </g>
        ))}

        {arrows.map(([from, to], i) => (
          <line
            key={`a${i}`}
            x1={DOT_L_X + 4}
            y1={yItem(from, leftItems.length)}
            x2={DOT_R_X - 5}
            y2={yItem(to, rightItems.length)}
            stroke="var(--subject-mathematics)"
            strokeWidth="1.6"
            markerEnd={`url(#${markerId})`}
          />
        ))}
      </svg>
      {caption && (
        <figcaption className="mt-1 text-center text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
