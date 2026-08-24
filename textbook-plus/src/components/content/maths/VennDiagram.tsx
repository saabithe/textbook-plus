import { useId } from "react";

type Shade =
  | "none"
  | "a"
  | "b"
  | "union"
  | "intersection"
  | "a-b"
  | "b-a"
  | "symdiff"
  | "outside-a"
  | "outside-both";

const SHADE_OPACITY = 0.32;

interface Geometry {
  ax: number;
  ay: number;
  ar: number;
  bx: number;
  by: number;
  br: number;
}

const GEOM: Record<string, Geometry> = {
  overlap: { ax: 130, ay: 105, ar: 68, bx: 210, by: 105, br: 68 },
  disjoint: { ax: 100, ay: 105, ar: 58, bx: 240, by: 105, br: 58 },
  subset: { ax: 170, ay: 100, ar: 82, bx: 170, by: 124, br: 40 },
};

const SLOTS = {
  aOnly: [
    [98, 72],
    [88, 102],
    [98, 132],
    [114, 87],
    [114, 117],
  ],
  both: [
    [170, 80],
    [170, 130],
    [170, 105],
  ],
  bOnly: [
    [242, 72],
    [252, 102],
    [242, 132],
    [226, 87],
    [226, 117],
  ],
};

const SUBSET_A_SLOTS: number[][] = [
  [112, 64],
  [228, 64],
  [102, 118],
  [238, 118],
  [170, 42],
];

/** Base slots plus a spread column so counts beyond the base never stack duplicates. */
function slotsFor(base: number[][], count: number): number[][] {
  if (count <= base.length) return base.slice(0, count);
  const extra = count - base.length;
  const spread: number[][] = [];
  for (let j = 0; j < extra; j++) {
    spread.push([170, 58 + ((j + 0.5) * 96) / extra]);
  }
  return [...base, ...spread];
}

interface VennDiagramProps {
  layout?: "overlap" | "disjoint" | "subset";
  shade?: Shade;
  labelA?: string;
  labelB?: string;
  labelU?: string;
  elementsA?: string[];
  elementsBoth?: string[];
  elementsB?: string[];
  elementsU?: string[];
  caption?: string;
}

export function VennDiagram({
  layout = "overlap",
  shade = "none",
  labelA = "A",
  labelB = "B",
  labelU = "U",
  elementsA,
  elementsBoth,
  elementsB,
  elementsU,
  caption,
}: VennDiagramProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const g = GEOM[layout];
  const fill = "var(--subject-mathematics)";
  const stroke = "currentColor";
  const mOutA = `${uid}-outa`;
  const mOutB = `${uid}-outb`;
  const mInB = `${uid}-inb`;
  const mInA = `${uid}-ina`;
  const mOutAB = `${uid}-outab`;

  const shadeFills: React.ReactNode[] = [];

  if (shade === "a" || shade === "union") {
    shadeFills.push(<circle key="fa" cx={g.ax} cy={g.ay} r={g.ar} fill={fill} opacity={SHADE_OPACITY} />);
  }
  if (shade === "b" || shade === "union") {
    if (shade === "union") {
      shadeFills.push(
        <circle key="fb" cx={g.bx} cy={g.by} r={g.br} fill={fill} opacity={SHADE_OPACITY} mask={`url(#${mOutA})`} />
      );
    } else {
      shadeFills.push(<circle key="fb" cx={g.bx} cy={g.by} r={g.br} fill={fill} opacity={SHADE_OPACITY} />);
    }
  }
  if (shade === "intersection") {
    shadeFills.push(
      <circle key="fi" cx={g.ax} cy={g.ay} r={g.ar} fill={fill} opacity={SHADE_OPACITY} mask={`url(#${mInB})`} />
    );
  }
  if (shade === "a-b") {
    shadeFills.push(
      <circle key="fab" cx={g.ax} cy={g.ay} r={g.ar} fill={fill} opacity={SHADE_OPACITY} mask={`url(#${mOutB})`} />
    );
  }
  if (shade === "b-a") {
    shadeFills.push(
      <circle key="fba" cx={g.bx} cy={g.by} r={g.br} fill={fill} opacity={SHADE_OPACITY} mask={`url(#${mOutA})`} />
    );
  }
  if (shade === "symdiff") {
    shadeFills.push(
      <circle key="fs1" cx={g.ax} cy={g.ay} r={g.ar} fill={fill} opacity={SHADE_OPACITY} mask={`url(#${mOutB})`} />,
      <circle key="fs2" cx={g.bx} cy={g.by} r={g.br} fill={fill} opacity={SHADE_OPACITY} mask={`url(#${mOutA})`} />
    );
  }
  if (shade === "outside-a") {
    shadeFills.push(
      <rect key="foa" x="8" y="8" width="324" height="194" rx="10" fill={fill} opacity="0.25" mask={`url(#${mOutA})`} />
    );
  }
  if (shade === "outside-both") {
    shadeFills.push(
      <rect key="fob" x="8" y="8" width="324" height="194" rx="10" fill={fill} opacity="0.25" mask={`url(#${mOutAB})`} />
    );
  }

  let labelNodes: React.ReactNode;
  if (layout === "subset") {
    labelNodes = (
      <>
        <text x={104} y={52} fontSize="15" fontStyle="italic" fontWeight="600" fill={stroke}>
          {labelA}
        </text>
        <text x={214} y={130} fontSize="14" fontStyle="italic" fontWeight="600" fill={stroke}>
          {labelB}
        </text>
      </>
    );
  } else {
    labelNodes = (
      <>
        <text x={72} y={50} fontSize="15" fontStyle="italic" fontWeight="600" fill={stroke}>
          {labelA}
        </text>
        <text x={268} y={50} fontSize="15" fontStyle="italic" fontWeight="600" fill={stroke}>
          {labelB}
        </text>
      </>
    );
  }

  let elementNodes: React.ReactNode;
  if (layout === "subset") {
    const subSlots = slotsFor(SUBSET_A_SLOTS, elementsA?.length ?? 0);
    elementNodes = (
      <>
        {(elementsB ?? []).map((e, i) => (
          <text
            key={`eb${i}`}
            x={170}
            y={124 + i * 16 - ((elementsB!.length - 1) * 16) / 2 + 4}
            textAnchor="middle"
            fontSize="13"
            fill={stroke}
          >
            {e}
          </text>
        ))}
        {(elementsA ?? []).map((e, i) => {
          const [sx, sy] = subSlots[i];
          return (
            <text key={`ea${i}`} x={sx} y={sy} textAnchor="middle" fontSize="13" fill={stroke}>
              {e}
            </text>
          );
        })}
      </>
    );
  } else {
    const aSlots = slotsFor(SLOTS.aOnly, elementsA?.length ?? 0);
    const bothSlots = slotsFor(SLOTS.both, elementsBoth?.length ?? 0);
    const bSlots = slotsFor(SLOTS.bOnly, elementsB?.length ?? 0);
    elementNodes = (
      <>
        {(elementsA ?? []).map((e, i) => {
          const [sx, sy] = aSlots[i];
          return (
            <text key={`ea${i}`} x={sx} y={sy} textAnchor="middle" fontSize="13" fill={stroke}>
              {e}
            </text>
          );
        })}
        {(elementsBoth ?? []).map((e, i) => {
          const [sx, sy] = bothSlots[i];
          return (
            <text key={`ebo${i}`} x={sx} y={sy} textAnchor="middle" fontSize="13" fill={stroke}>
              {e}
            </text>
          );
        })}
        {(elementsB ?? []).map((e, i) => {
          const [sx, sy] = bSlots[i];
          return (
            <text key={`eb${i}`} x={sx} y={sy} textAnchor="middle" fontSize="13" fill={stroke}>
              {e}
            </text>
          );
        })}
        {(elementsU ?? []).map((e, i) => {
          const x = 20 + i * 30;
          const y = 190;
          return (
            <text key={`eu${i}`} x={x} y={y} textAnchor="middle" fontSize="13" fill={stroke}>
              {e}
            </text>
          );
        })}
      </>
    );
  }

  return (
    <figure className="my-4">
      <svg aria-label="Venn diagram" viewBox="0 0 340 210" className="mx-auto w-full max-w-sm" role="img" style={{ color: "var(--foreground)" }}>
        <defs>
          <mask id={mOutA}>
            <rect width="340" height="210" fill="white" />
            <circle cx={g.ax} cy={g.ay} r={g.ar} fill="black" />
          </mask>
          <mask id={mOutB}>
            <rect width="340" height="210" fill="white" />
            <circle cx={g.bx} cy={g.by} r={g.br} fill="black" />
          </mask>
          <mask id={mInA}>
            <rect width="340" height="210" fill="black" />
            <circle cx={g.ax} cy={g.ay} r={g.ar} fill="white" />
          </mask>
          <mask id={mInB}>
            <rect width="340" height="210" fill="black" />
            <circle cx={g.bx} cy={g.by} r={g.br} fill="white" />
          </mask>
          <mask id={mOutAB}>
            <rect width="340" height="210" fill="white" />
            <circle cx={g.ax} cy={g.ay} r={g.ar} fill="black" />
            <circle cx={g.bx} cy={g.by} r={g.br} fill="black" />
          </mask>
        </defs>

        <rect x="8" y="8" width="324" height="194" rx="10" fill="none" stroke={stroke} strokeOpacity="0.45" strokeWidth="1.5" />
        {shadeFills}
        <circle cx={g.ax} cy={g.ay} r={g.ar} fill="none" stroke={stroke} strokeOpacity="0.75" strokeWidth="1.8" />
        <circle cx={g.bx} cy={g.by} r={g.br} fill="none" stroke={stroke} strokeOpacity="0.75" strokeWidth="1.8" />

        <text x={322} y={28} textAnchor="end" fontSize="13" fontStyle="italic" fill={stroke} opacity="0.7">
          {labelU}
        </text>
        {labelNodes}
        {elementNodes}
      </svg>
      {caption && (
        <figcaption className="mt-1 text-center text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}

interface ThreeSetVennProps {
  shade?: "none" | "a-cap-buc" | "acb-u-acc";
  caption?: string;
  labelU?: string;
}

const T = { ax: 115, ay: 82, bx: 225, by: 82, cx: 170, cy: 148, r: 62 };

export function ThreeSetVenn({ shade = "none", caption, labelU = "U" }: ThreeSetVennProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const fill = "var(--subject-mathematics)";
  const stroke = "currentColor";
  const mInB = `${uid}-tinb`;
  const mInC = `${uid}-tinc`;
  const mInBUc = `${uid}-tinbuc`;

  return (
    <figure className="my-4">
      <svg aria-label="Venn diagram" viewBox="0 0 340 230" className="mx-auto w-full max-w-xs" role="img" style={{ color: "var(--foreground)" }}>
        <defs>
          <mask id={mInB}>
            <rect width="340" height="230" fill="black" />
            <circle cx={T.bx} cy={T.by} r={T.r} fill="white" />
          </mask>
          <mask id={mInC}>
            <rect width="340" height="230" fill="black" />
            <circle cx={T.cx} cy={T.cy} r={T.r} fill="white" />
          </mask>
          {/* White inside B ∪ C so a single fill shades A∩(B∪C) uniformly */}
          <mask id={mInBUc}>
            <rect width="340" height="230" fill="black" />
            <circle cx={T.bx} cy={T.by} r={T.r} fill="white" />
            <circle cx={T.cx} cy={T.cy} r={T.r} fill="white" />
          </mask>
        </defs>

        {/* A∩(B∪C) ≡ (A∩B)∪(A∩C) — one uniform fill, no double-shaded lens */}
        {(shade === "a-cap-buc" || shade === "acb-u-acc") && (
          <circle cx={T.ax} cy={T.ay} r={T.r} fill={fill} opacity={SHADE_OPACITY} mask={`url(#${mInBUc})`} />
        )}

        <rect x="8" y="8" width="324" height="214" rx="10" fill="none" stroke={stroke} strokeOpacity="0.45" strokeWidth="1.5" />

        <circle cx={T.ax} cy={T.ay} r={T.r} fill="none" stroke={stroke} strokeOpacity="0.75" strokeWidth="1.8" />
        <circle cx={T.bx} cy={T.by} r={T.r} fill="none" stroke={stroke} strokeOpacity="0.75" strokeWidth="1.8" />
        <circle cx={T.cx} cy={T.cy} r={T.r} fill="none" stroke={stroke} strokeOpacity="0.75" strokeWidth="1.8" />

        <text x={60} y={34} fontSize="15" fontStyle="italic" fontWeight="600" fill={stroke}>
          A
        </text>
        <text x={280} y={34} fontSize="15" fontStyle="italic" fontWeight="600" fill={stroke}>
          B
        </text>
        <text x={170} y={222} textAnchor="middle" fontSize="15" fontStyle="italic" fontWeight="600" fill={stroke}>
          C
        </text>
        <text x={322} y={28} textAnchor="end" fontSize="13" fontStyle="italic" fill={stroke} opacity="0.7">
          {labelU}
        </text>
      </svg>
      {caption && (
        <figcaption className="mt-1 text-center text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
