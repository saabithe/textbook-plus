const HEAD_DX = -20;
const HEAD_CY = 126;
const HEAD_RX = 32;
const HEAD_RY = 31;
const PANEL_STEP = 190;
const FIRST_PANEL_X = 95;

interface BeakSpec {
  name: string;
  diet: string;
  /** Series colour for the beak and chip, as a CSS colour value. */
  color: string;
  /** Beak outline, drawn rightwards from the base x inside the head. */
  path: (bx: number) => string;
}

const FINCHES: BeakSpec[] = [
  {
    name: "Large ground finch",
    diet: "Seeds",
    color: "var(--subject-biology)",
    // deep, stout, crushing
    path: (bx) => `M ${bx} 106 Q ${bx + 23} 109 ${bx + 29} 124 Q ${bx + 23} 139 ${bx} 142 Z`,
  },
  {
    name: "Warbler finch",
    diet: "Insects",
    color: "var(--foreground)",
    // small, slender, pointed
    path: (bx) => `M ${bx} 117 Q ${bx + 15} 119 ${bx + 26} 124 Q ${bx + 15} 129 ${bx} 131 Z`,
  },
  {
    name: "Cactus finch",
    diet: "Cactus / nectar",
    color: "var(--muted-foreground)",
    // long, stout, slightly curved downwards
    path: (bx) => `M ${bx} 111 Q ${bx + 22} 112 ${bx + 35} 126 Q ${bx + 22} 133 ${bx} 137 Z`,
  },
  {
    name: "Vegetarian finch",
    diet: "Buds and fruit",
    color: "var(--faint)",
    // short, thick, curved
    path: (bx) => `M ${bx} 108 Q ${bx + 15} 112 ${bx + 17} 126 Q ${bx + 13} 140 ${bx} 144 Z`,
  },
];

function FinchPanel({ cx, spec }: { cx: number; spec: BeakSpec }) {
  const headCx = cx + HEAD_DX;
  const beakBaseX = cx + 2;

  return (
    <g>
      {/* beak sits behind the head so the join stays seamless */}
      <path d={spec.path(beakBaseX)} fill={spec.color} stroke={spec.color} strokeWidth={1} strokeLinejoin="round" />
      <ellipse
        cx={headCx}
        cy={HEAD_CY}
        rx={HEAD_RX}
        ry={HEAD_RY}
        strokeWidth={1.5}
        className="fill-muted stroke-border"
      />
      <circle cx={headCx + 12} cy={HEAD_CY - 11} r={3.4} className="fill-foreground" />
      <circle cx={headCx + 11} cy={HEAD_CY - 12} r={1.2} className="fill-card" />

      <text x={cx} y={186} fontSize={13} fontWeight={700} textAnchor="middle" className="fill-foreground">
        {spec.name}
      </text>
      <rect
        x={cx - 58}
        y={194}
        width={116}
        height={21}
        rx={3}
        fill={spec.color}
        fillOpacity={0.16}
        stroke={spec.color}
        strokeOpacity={0.4}
        strokeWidth={1}
      />
      <text x={cx} y={208.5} fontSize={11.5} fontWeight={600} textAnchor="middle" className="fill-muted-foreground">
        {spec.diet}
      </text>
    </g>
  );
}

interface FinchBeaksDiagramProps {
  title?: string;
}

export function FinchBeaksDiagram({ title = "One ancestor, four beaks" }: FinchBeaksDiagramProps) {
  const fanOrigin = { x: 380, y: 44 };
  const panels = FINCHES.map((spec, i) => ({ cx: FIRST_PANEL_X + i * PANEL_STEP, spec }));

  return (
    <div className="my-6 rounded-lg border border-border bg-card p-4">
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">{title}</p>
      <svg
        viewBox="0 0 760 240"
        className="h-auto w-full"
        role="img"
        aria-label="Adaptive radiation in Darwin's finches: one ancestral seed-eating finch radiates into four species whose beaks suit seeds, insects, cactus nectar, and buds and fruit"
      >
        <title>{title} — adaptive radiation in Darwin&apos;s finches</title>

        {/* ancestor strip */}
        <rect x={196} y={10} width={368} height={32} rx={6} fillOpacity={0.4} strokeWidth={1} className="fill-muted stroke-border" />
        <g className="fill-foreground" fillOpacity={0.45}>
          <polygon points="215,27 205,21 205,33" />
          <ellipse cx={224} cy={27} rx={10} ry={7} />
          <circle cx={234} cy={21} r={4.6} />
          <polygon points="238,20 243,22 238,23.6" />
        </g>
        <text x={252} y={30} fontSize={12} fontWeight={600} className="fill-muted-foreground">
          one ancestral seed-eating finch → four beaks
        </text>

        {/* radiation lines: one ancestor, four beaks */}
        {panels.map(({ cx }) => (
          <line
            key={`fan-${cx}`}
            x1={fanOrigin.x}
            y1={fanOrigin.y}
            x2={cx}
            y2={82}
            strokeWidth={1.5}
            strokeDasharray="4 3"
            className="stroke-border"
          />
        ))}
        {panels.map(({ cx }) => (
          <circle key={`node-${cx}`} cx={cx} cy={82} r={2.4} fillOpacity={0.5} className="fill-muted-foreground" />
        ))}

        {/* panel separators */}
        {[190, 380, 570].map((x) => (
          <line key={`sep-${x}`} x1={x} y1={70} x2={x} y2={222} strokeWidth={1} strokeDasharray="3 5" className="stroke-border" />
        ))}

        {panels.map(({ cx, spec }) => (
          <FinchPanel key={spec.name} cx={cx} spec={spec} />
        ))}
      </svg>
    </div>
  );
}
