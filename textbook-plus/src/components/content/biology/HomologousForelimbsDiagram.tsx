const BONE = {
  humerus: {
    fill: "fill-amber-400 dark:fill-amber-300",
    stroke: "stroke-amber-600 dark:stroke-amber-500",
  },
  radius: {
    fill: "fill-sky-400 dark:fill-sky-300",
    stroke: "stroke-sky-600 dark:stroke-sky-500",
  },
  ulna: {
    fill: "fill-teal-400 dark:fill-teal-300",
    stroke: "stroke-teal-600 dark:stroke-teal-500",
  },
  carpals: {
    fill: "fill-violet-400 dark:fill-violet-300",
    stroke: "stroke-violet-600 dark:stroke-violet-500",
  },
  metacarpals: {
    fill: "fill-rose-400 dark:fill-rose-300",
    stroke: "stroke-rose-600 dark:stroke-rose-500",
    line: "stroke-rose-400 dark:stroke-rose-300",
  },
  phalanges: {
    fill: "fill-emerald-400 dark:fill-emerald-300",
    stroke: "stroke-emerald-600 dark:stroke-emerald-500",
    line: "stroke-emerald-400 dark:stroke-emerald-300",
  },
} as const;

interface LimbLabel {
  x: number;
  name: string;
  fn: string;
}

const LIMB_LABELS: LimbLabel[] = [
  { x: 96, name: "Whale flipper", fn: "Swimming" },
  { x: 282, name: "Bat wing", fn: "Flight" },
  { x: 468, name: "Cheetah foreleg", fn: "Running" },
  { x: 654, name: "Human arm", fn: "Manipulation" },
];

const LEGEND = [
  { label: "Humerus", fill: BONE.humerus.fill, stroke: BONE.humerus.stroke },
  { label: "Radius", fill: BONE.radius.fill, stroke: BONE.radius.stroke },
  { label: "Ulna", fill: BONE.ulna.fill, stroke: BONE.ulna.stroke },
  { label: "Carpals", fill: BONE.carpals.fill, stroke: BONE.carpals.stroke },
  { label: "Metacarpals", fill: BONE.metacarpals.fill, stroke: BONE.metacarpals.stroke },
  { label: "Phalanges", fill: BONE.phalanges.fill, stroke: BONE.phalanges.stroke },
];

const LEGEND_COLUMNS = [30, 280, 530];
const LEGEND_ROWS = [322, 348];

export interface HomologousForelimbsDiagramProps {
  /** Small heading shown at the top of the card. */
  title?: string;
}

/**
 * Homologous forelimbs: the same six bone groups, rearranged for four very
 * different jobs. Proximal (shoulder) end is at the top, distal at the bottom,
 * so the proportion changes read straight down the figure.
 */
export function HomologousForelimbsDiagram({
  title = "Same bones, different jobs",
}: HomologousForelimbsDiagramProps) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
      <div className="mb-2">
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          {title}
        </span>
      </div>

      <svg
        viewBox="0 0 760 356"
        className="h-auto w-full"
        role="img"
        aria-label="Four forelimbs drawn side by side — whale flipper, bat wing, cheetah foreleg and human arm — each made of the same colour-coded bones: humerus, radius, ulna, carpals, metacarpals and phalanges, arranged in different proportions."
      >
        <title>Homologous forelimbs: same bones, different jobs</title>

        {/* faint separators between the four limbs */}
        <g aria-hidden="true" className="stroke-border" strokeWidth="1" strokeDasharray="3 5" opacity="0.55">
          <line x1="187" y1="22" x2="187" y2="258" />
          <line x1="373" y1="22" x2="373" y2="258" />
          <line x1="559" y1="22" x2="559" y2="258" />
        </g>

        {/* ── 1. Whale flipper — short sleeve, huge paddle of phalanges ── */}
        <g>
          <rect
            x="85"
            y="32"
            width="22"
            height="48"
            rx="9"
            strokeWidth="1"
            className={`${BONE.humerus.fill} ${BONE.humerus.stroke}`}
          />
          <rect
            x="80"
            y="82"
            width="13"
            height="50"
            rx="6"
            strokeWidth="1"
            className={`${BONE.ulna.fill} ${BONE.ulna.stroke}`}
          />
          <rect
            x="99"
            y="82"
            width="13"
            height="50"
            rx="6"
            strokeWidth="1"
            className={`${BONE.radius.fill} ${BONE.radius.stroke}`}
          />
          <rect
            x="81"
            y="134"
            width="30"
            height="15"
            rx="5"
            strokeWidth="1"
            className={`${BONE.carpals.fill} ${BONE.carpals.stroke}`}
          />
          <rect
            x="77"
            y="151"
            width="38"
            height="12"
            rx="5"
            strokeWidth="1"
            className={`${BONE.metacarpals.fill} ${BONE.metacarpals.stroke}`}
          />
          {/* fused phalanges: one long paddle, no free digits */}
          <rect
            x="68"
            y="165"
            width="56"
            height="76"
            rx="22"
            strokeWidth="1"
            className={`${BONE.phalanges.fill} ${BONE.phalanges.stroke}`}
          />
        </g>

        {/* ── 2. Bat wing — long forearm, enormously stretched hand bones ── */}
        <g>
          <rect
            x="271"
            y="32"
            width="22"
            height="38"
            rx="9"
            strokeWidth="1"
            className={`${BONE.humerus.fill} ${BONE.humerus.stroke}`}
          />
          <rect
            x="266"
            y="72"
            width="12"
            height="48"
            rx="6"
            strokeWidth="1"
            className={`${BONE.ulna.fill} ${BONE.ulna.stroke}`}
          />
          <rect
            x="286"
            y="72"
            width="12"
            height="48"
            rx="6"
            strokeWidth="1"
            className={`${BONE.radius.fill} ${BONE.radius.stroke}`}
          />
          <rect
            x="268"
            y="122"
            width="28"
            height="13"
            rx="5"
            strokeWidth="1"
            className={`${BONE.carpals.fill} ${BONE.carpals.stroke}`}
          />

          {/* wing membrane, decorative */}
          <polygon
            points="282,124 228.8,240.1 263.7,251.5 300.3,251.5 335.2,240.1"
            fillOpacity="0.12"
            aria-hidden="true"
            className="fill-emerald-500 dark:fill-emerald-300"
          />

          {/* metacarpals fanning out from the wrist */}
          <g className={BONE.metacarpals.line} strokeWidth="9" strokeLinecap="round" fill="none">
            <line x1="282" y1="135" x2="256.8" y2="191.6" />
            <line x1="282" y1="135" x2="273.4" y2="196.4" />
            <line x1="282" y1="135" x2="290.6" y2="196.4" />
            <line x1="282" y1="135" x2="307.2" y2="191.6" />
          </g>

          {/* phalanges: the finger bones that hold the wing open */}
          <g className={BONE.phalanges.line} strokeWidth="7" strokeLinecap="round" fill="none">
            <line x1="256.8" y1="191.6" x2="228.8" y2="240.1" />
            <line x1="273.4" y1="196.4" x2="263.7" y2="251.5" />
            <line x1="290.6" y1="196.4" x2="300.3" y2="251.5" />
            <line x1="307.2" y1="191.6" x2="335.2" y2="240.1" />
          </g>
        </g>

        {/* ── 3. Cheetah foreleg — long radius/ulna, compact foot ── */}
        <g>
          <rect
            x="456"
            y="32"
            width="24"
            height="58"
            rx="9"
            strokeWidth="1"
            className={`${BONE.humerus.fill} ${BONE.humerus.stroke}`}
          />
          <rect
            x="453"
            y="92"
            width="11"
            height="64"
            rx="5"
            strokeWidth="1"
            className={`${BONE.ulna.fill} ${BONE.ulna.stroke}`}
          />
          <rect
            x="467"
            y="92"
            width="16"
            height="64"
            rx="7"
            strokeWidth="1"
            className={`${BONE.radius.fill} ${BONE.radius.stroke}`}
          />
          <rect
            x="452"
            y="158"
            width="32"
            height="13"
            rx="5"
            strokeWidth="1"
            className={`${BONE.carpals.fill} ${BONE.carpals.stroke}`}
          />
          <rect
            x="450"
            y="173"
            width="36"
            height="18"
            rx="6"
            strokeWidth="1"
            className={`${BONE.metacarpals.fill} ${BONE.metacarpals.stroke}`}
          />
          <rect
            x="452"
            y="193"
            width="32"
            height="18"
            rx="7"
            strokeWidth="1"
            className={`${BONE.phalanges.fill} ${BONE.phalanges.stroke}`}
          />
        </g>

        {/* ── 4. Human arm — the standard plan, four free digits ── */}
        <g>
          <rect
            x="642"
            y="32"
            width="24"
            height="70"
            rx="9"
            strokeWidth="1"
            className={`${BONE.humerus.fill} ${BONE.humerus.stroke}`}
          />
          <rect
            x="640"
            y="104"
            width="11"
            height="54"
            rx="5"
            strokeWidth="1"
            className={`${BONE.ulna.fill} ${BONE.ulna.stroke}`}
          />
          <rect
            x="655"
            y="104"
            width="13"
            height="54"
            rx="6"
            strokeWidth="1"
            className={`${BONE.radius.fill} ${BONE.radius.stroke}`}
          />
          <rect
            x="638"
            y="160"
            width="32"
            height="14"
            rx="5"
            strokeWidth="1"
            className={`${BONE.carpals.fill} ${BONE.carpals.stroke}`}
          />
          <g strokeWidth="1" className={`${BONE.metacarpals.fill} ${BONE.metacarpals.stroke}`}>
            <rect x="634.5" y="176" width="6" height="20" rx="3" />
            <rect x="645.5" y="176" width="6" height="20" rx="3" />
            <rect x="656.5" y="176" width="6" height="20" rx="3" />
            <rect x="667.5" y="176" width="6" height="20" rx="3" />
          </g>
          <g strokeWidth="1" className={`${BONE.phalanges.fill} ${BONE.phalanges.stroke}`}>
            <rect x="634.5" y="198" width="6" height="34" rx="3" />
            <rect x="645.5" y="198" width="6" height="40" rx="3" />
            <rect x="656.5" y="198" width="6" height="38" rx="3" />
            <rect x="667.5" y="198" width="6" height="32" rx="3" />
          </g>
        </g>

        {/* limb names + what each limb is for */}
        <g>
          {LIMB_LABELS.map((limb) => (
            <g key={limb.name}>
              <text
                x={limb.x}
                y="270"
                fontSize="20"
                fontWeight="700"
                textAnchor="middle"
                className="fill-foreground"
              >
                {limb.name}
              </text>
              <text
                x={limb.x}
                y="290"
                fontSize="16"
                textAnchor="middle"
                className="fill-muted-foreground"
              >
                {limb.fn}
              </text>
            </g>
          ))}
        </g>

        {/* legend */}
        <g>
          {LEGEND.map((item, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const x = LEGEND_COLUMNS[col];
            const y = LEGEND_ROWS[row];
            return (
              <g key={item.label}>
                <rect
                  x={x}
                  y={y - 14}
                  width="18"
                  height="18"
                  rx="4"
                  strokeWidth="1"
                  className={`${item.fill} ${item.stroke}`}
                  aria-hidden="true"
                />
                <text x={x + 28} y={y} fontSize="19" className="fill-foreground">
                  {item.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Proximal end (shoulder) at the top, distal end (tips) at the bottom. Swimming, flight, running
        and grasping all reuse the same six bone groups — only their proportions change.
      </p>
    </div>
  );
}
