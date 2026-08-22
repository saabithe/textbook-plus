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

export function ArrowDiagram({
  leftLabel = "A",
  rightLabel = "B",
  leftItems,
  rightItems,
  arrows,
  caption,
}: ArrowDiagramProps) {
  const rows = Math.max(leftItems.length, rightItems.length);
  const h = TOP + rows * ROW + 18;

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
            id={`arrow-${leftItems.length}-${rightItems.length}-${arrows.length}`}
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 z" fill="var(--subject-mathematics)" />
          </marker>
        </defs>

        <ellipse cx="80" cy={h / 2} rx="62" ry={h / 2 - 12} fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" />
        <ellipse cx="260" cy={h / 2} rx="62" ry={h / 2 - 12} fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" />

        <text x={80} y={24} textAnchor="middle" fontSize="14" fontStyle="italic" fontWeight="600" fill="currentColor">
          {leftLabel}
        </text>
        <text x={260} y={24} textAnchor="middle" fontSize="14" fontStyle="italic" fontWeight="600" fill="currentColor">
          {rightLabel}
        </text>

        {leftItems.map((item, i) => (
          <text key={`l${i}`} x={70} y={TOP + i * ROW - ((rows * ROW - leftItems.length * ROW) / 2) + 5} textAnchor="end" fontSize="13" fill="currentColor">
            {item}
          </text>
        ))}
        {rightItems.map((item, i) => (
          <text key={`r${i}`} x={270} y={TOP + i * ROW - ((rows * ROW - rightItems.length * ROW) / 2) + 5} textAnchor="start" fontSize="13" fill="currentColor">
            {item}
          </text>
        ))}

        {arrows.map(([from, to], i) => {
          const y1 = TOP + from * ROW - ((rows * ROW - leftItems.length * ROW) / 2);
          const y2 = TOP + to * ROW - ((rows * ROW - rightItems.length * ROW) / 2);
          return (
            <line
              key={`a${i}`}
              x1={76}
              y1={y1}
              x2={264}
              y2={y2}
              stroke="var(--subject-mathematics)"
              strokeWidth="1.6"
              markerEnd={`url(#arrow-${leftItems.length}-${rightItems.length}-${arrows.length})`}
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
