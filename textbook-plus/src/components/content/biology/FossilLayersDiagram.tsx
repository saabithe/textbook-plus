interface FossilProps {
  cx: number;
  cy: number;
}

const FOSSIL_FILL = "fill-white dark:fill-stone-100";
const BONE_STROKE = "stroke-white dark:stroke-stone-100";
const GROOVE = "fill-none stroke-stone-900/35 dark:stroke-stone-900/40";
const GROOVE_FILL = "fill-stone-900/35 dark:fill-stone-900/40";

/* ── layout constants ────────────────────────────────────────────────── */

const TOP = 36;
const LAYER_H = 50;
const STEP = 58;
const STRATA_X = 158;
const STRATA_W = 358;
const FOSSIL_CX = 232;
const NAME_X = 292;
const LABEL_X = 534;

interface Stratum {
  age: string;
  period: string;
  fossil: string;
  band: string;
}

const STRATA: Stratum[] = [
  {
    age: "Recent",
    period: "Quaternary",
    fossil: "mammal skull",
    band: "fill-amber-200/90 stroke-amber-400/80 dark:fill-amber-900/50 dark:stroke-amber-700/70",
  },
  {
    age: "65 mya",
    period: "Cretaceous",
    fossil: "dinosaur",
    band:
      "fill-orange-200/90 stroke-orange-400/80 dark:fill-orange-900/45 dark:stroke-orange-700/70",
  },
  {
    age: "150 mya",
    period: "Jurassic",
    fossil: "ammonite",
    band: "fill-rose-200/90 stroke-rose-400/80 dark:fill-rose-900/45 dark:stroke-rose-700/70",
  },
  {
    age: "250 mya",
    period: "Permian",
    fossil: "fish skeleton",
    band: "fill-stone-300/80 stroke-stone-400/80 dark:fill-stone-800/70 dark:stroke-stone-600/70",
  },
  {
    age: "500 mya",
    period: "Cambrian",
    fossil: "trilobite",
    band:
      "fill-violet-200/90 stroke-violet-400/80 dark:fill-violet-900/45 dark:stroke-violet-700/70",
  },
];

/* ── fossils (drawn around 0,0, roughly 70 × 40 units) ───────────────── */

/** Mammal skull in profile, snout to the right, mouth slightly open. */
function MammalSkull({ cx, cy }: FossilProps) {
  return (
    <g transform={`translate(${cx} ${cy})`} filter="url(#fossil-layer-shadow)">
      <path
        className={FOSSIL_FILL}
        d="M -29 -4 C -29 -17 -17 -22 -5 -17 L 24 -11 Q 31 -9 30 -3 L 29 3 L 13 7 L 12 14 L 2 14 L 1 8 L -9 12 C -23 14 -30 6 -29 -4 Z"
      />
      {/* eye socket */}
      <circle className={GROOVE_FILL} cx={-14} cy={-6} r={4.6} />
      {/* cheekbone */}
      <path className={GROOVE} strokeWidth={1.5} d="M -18 -1 Q -7 3 4 1" />
      {/* nostril */}
      <circle className={GROOVE_FILL} cx={24} cy={-7} r={1.8} />
    </g>
  );
}

/** Small theropod dinosaur in profile, facing right. */
function Dinosaur({ cx, cy }: FossilProps) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(0.9)`} filter="url(#fossil-layer-shadow)">
      {/* tail, back, neck and head in one silhouette */}
      <path
        className={FOSSIL_FILL}
        d="M -37 -6 Q -24 -4 -16 1 Q -6 -10 2 -11 L 9 -13 L 14 -20 Q 19 -25 24 -22 L 32 -19 Q 35 -17 34 -14 L 26 -11 L 19 -12 L 13 -4 Q 8 4 0 4 L -6 2 Q -12 4 -16 6 Q -27 1 -37 -6 Z"
      />
      {/* hind leg */}
      <path className={FOSSIL_FILL} d="M -14 1 L -6 1 L -7 12 L -1 18 L -8 22 L -12 15 L -15 12 Z" />
      {/* fore leg */}
      <path className={FOSSIL_FILL} d="M 3 0 L 10 0 L 9 10 L 15 16 L 9 20 L 5 13 L 2 10 Z" />
      {/* mouth line */}
      <path className={GROOVE} strokeWidth={1.5} d="M 20 -12 L 33 -15" />
      {/* eye */}
      <circle className={GROOVE_FILL} cx={26} cy={-17} r={1.8} />
    </g>
  );
}

/** Logarithmic coil — 2.7 whorls shrinking from r = 21 to r ≈ 3. */
const AMMONITE_SPIRAL = (() => {
  const turns = 2.7;
  const steps = 150;
  const points: string[] = [];
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const theta = t * turns * Math.PI * 2;
    const r = 21 * Math.pow(0.487, turns * t);
    points.push(`${(r * Math.cos(theta)).toFixed(1)},${(r * Math.sin(theta)).toFixed(1)}`);
  }
  return points.join(" ");
})();

/** Spiral ammonite shell. */
function Ammonite({ cx, cy }: FossilProps) {
  return (
    <g transform={`translate(${cx} ${cy})`} filter="url(#fossil-layer-shadow)">
      <polyline
        points={AMMONITE_SPIRAL}
        fill="none"
        className={BONE_STROKE}
        strokeWidth={3.2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle className={FOSSIL_FILL} cx={0} cy={0} r={2.6} />
    </g>
  );
}

const FISH_RIBS = [-8, -2, 4, 10, 16];

/** Fish skeleton, head to the left: skull, vertebral column, ribs, forked tail. */
function FishSkeleton({ cx, cy }: FossilProps) {
  return (
    <g transform={`translate(${cx} ${cy})`} filter="url(#fossil-layer-shadow)">
      {/* vertebral column */}
      <line x1={-15} y1={0} x2={22} y2={0} className={BONE_STROKE} strokeWidth={2.4} strokeLinecap="round" />
      {/* ribs */}
      <g className={BONE_STROKE} strokeWidth={1.6} strokeLinecap="round">
        {FISH_RIBS.map((x) => (
          <g key={x}>
            <line x1={x} y1={0} x2={x - 6} y2={-8.5} />
            <line x1={x} y1={0} x2={x - 6} y2={8.5} />
          </g>
        ))}
      </g>
      {/* skull */}
      <path className={FOSSIL_FILL} d="M -34 -1 L -15 -10 L -15 10 L -34 4 Z" />
      <circle className={GROOVE_FILL} cx={-26} cy={-2} r={2} />
      {/* forked tail fin */}
      <path className={FOSSIL_FILL} d="M 21 0 L 36 -12 L 32 0 L 36 12 Z" />
    </g>
  );
}

const TRILOBITE_SEGMENTS = [-10, -6, -2, 2, 6];

/** Trilobite: oval shield with an axial lobe, thoracic segments and spines. */
function Trilobite({ cx, cy }: FossilProps) {
  return (
    <g transform={`translate(${cx} ${cy})`} filter="url(#fossil-layer-shadow)">
      {/* anterior spines */}
      <g className={BONE_STROKE} strokeWidth={2.4} strokeLinecap="round">
        <line x1={-25} y1={-6} x2={-37} y2={-12} />
        <line x1={-25} y1={6} x2={-37} y2={12} />
      </g>
      {/* body shield */}
      <ellipse className={FOSSIL_FILL} cx={0} cy={0} rx={27} ry={13} />
      {/* axial lobe */}
      <ellipse className={GROOVE} strokeWidth={1.4} cx={-1} cy={0} rx={19} ry={5.5} />
      {/* cephalon and pygidium boundaries */}
      <path className={GROOVE} strokeWidth={1.4} d="M -14 -12 Q -19 0 -14 12" />
      <path className={GROOVE} strokeWidth={1.4} d="M 12 -11.5 Q 17 0 12 11.5" />
      {/* thoracic segments */}
      <g className={GROOVE} strokeWidth={1.3}>
        {TRILOBITE_SEGMENTS.map((x) => (
          <line key={x} x1={x} y1={-11.8} x2={x} y2={11.8} />
        ))}
      </g>
      {/* eyes */}
      <circle className={GROOVE_FILL} cx={-17} cy={-6} r={1.9} />
      <circle className={GROOVE_FILL} cx={-17} cy={6} r={1.9} />
    </g>
  );
}

const FOSSILS = [MammalSkull, Dinosaur, Ammonite, FishSkeleton, Trilobite] as const;

export interface FossilLayersDiagramProps {
  /** Small heading shown at the top of the card. */
  title?: string;
}

/**
 * The palaeontological record: five sedimentary strata stacked as they were
 * laid down, youngest on top. The deeper you dig, the older the fossil — each
 * band carries the kind of life that was around when it formed.
 */
export function FossilLayersDiagram({ title = "Deeper layers are older" }: FossilLayersDiagramProps) {
  return (
    <div className="my-6 rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
      <p className="mb-3 text-sm font-extrabold text-foreground">{title}</p>

      <svg
        viewBox="0 0 680 340"
        className="h-auto w-full"
        role="img"
        aria-label="Five stacked sedimentary rock layers. From the top down: Recent rock with a mammal skull, 65 million years ago with a dinosaur, 150 million years ago with an ammonite, 250 million years ago with a fish skeleton, and 500 million years ago with a trilobite. A downward arrow on the left shows that deeper layers are older."
      >
        <title>Deeper layers are older: an arrow runs down the stack from younger Recent rock to Cambrian rock 500 million years old.</title>

        <defs>
          <filter id="fossil-layer-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.28" />
          </filter>
        </defs>

        {/* ── age axis on the left ── */}
        <g aria-hidden="true">
          <line
            x1={100}
            y1={42}
            x2={100}
            y2={305}
            className="stroke-stone-500/70 dark:stroke-stone-400/60"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <polygon points="100,318 91,299 109,299" className="fill-stone-500/80 dark:fill-stone-400/70" />
          <text
            transform="rotate(-90 74 74)"
            x={74}
            y={74}
            textAnchor="middle"
            fontSize={12}
            fontWeight={800}
            letterSpacing={1.2}
            className="fill-muted-foreground"
          >
            YOUNGER
          </text>
          <text
            transform="rotate(-90 74 276)"
            x={74}
            y={276}
            textAnchor="middle"
            fontSize={12}
            fontWeight={800}
            letterSpacing={1.2}
            className="fill-muted-foreground"
          >
            OLDER
          </text>
        </g>

        {/* ── the five strata ── */}
        {STRATA.map((layer, i) => {
          const y = TOP + i * STEP;
          const cy = y + LAYER_H / 2;
          const Fossil = FOSSILS[i];
          return (
            <g key={layer.age}>
              <rect
                x={STRATA_X}
                y={y}
                width={STRATA_W}
                height={LAYER_H}
                rx={4}
                strokeWidth={1.5}
                className={layer.band}
              />
              <Fossil cx={FOSSIL_CX} cy={cy} />
              <text
                x={NAME_X}
                y={cy + 4.5}
                fontSize={13}
                fontWeight={700}
                className="fill-stone-900/80 dark:fill-stone-100/85"
              >
                {layer.fossil}
              </text>

              {/* period label on the right, aligned to its layer */}
              <line
                x1={STRATA_X + STRATA_W + 4}
                y1={cy}
                x2={LABEL_X - 6}
                y2={cy}
                strokeWidth={2}
                className="stroke-stone-400/60 dark:stroke-stone-600/70"
              />
              <text x={LABEL_X} y={cy - 1} fontSize={14} fontWeight={800} className="fill-foreground">
                {layer.age}
              </text>
              <text x={LABEL_X} y={cy + 15} fontSize={12} className="fill-muted-foreground">
                {layer.period}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Rock layers settle flat and level, one on top of the other, so the sequence reads like the
        pages of a book: the top layer formed last and holds the youngest fossils, and the bottom
        layer is the oldest.
      </p>
    </div>
  );
}
