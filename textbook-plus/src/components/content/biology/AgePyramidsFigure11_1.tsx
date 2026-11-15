export function AgePyramidsFigure11_1() {
  // Three pyramids: Expanding (A), Stable (B), Declining (C)
  // Each uses left = males, right = females, symmetric about center vertical axis.
  // Vertical bands from bottom to top: Pre-reproductive, Reproductive, Post-reproductive
  const stroke = "#000000";
  const sw = 1.6;
  const fill = "#d9d9d9";

  // Layout
  const W = 920;
  const H = 420;
  const topTitleY = 28;
  const axisTop = 70;
  const axisBottom = 330;
  const bandH = (axisBottom - axisTop) / 3; // 86.67
  const preY = axisTop + bandH * 2; // bottom band top? "from bottom to top" labels: bottom = Pre, middle = Repro, top = Post
  // So bands in drawing from bottom up: y range [axisBottom-bandH, axisBottom] = Pre-reproductive; [axisBottom-2bandH, axisBottom-bandH]=Reproductive; [axisTop, axisTop+bandH]=Post-reproductive
  const postTop = axisTop;
  const reproTop = axisTop + bandH;
  const preTop = axisTop + bandH * 2;

  // For each pyramid: centerX, halfWidths for males/females by band (expressed as width of half from center outward)
  // Pyramid A (Expanding): broad base (pre), taper to narrow top (post). Triangular.
  // Pyramid B (Stable): middle nearly rectangular, base moderately wide, slight taper near top. Bell/pillar.
  // Pyramid C (Declining): narrow base (pre), wider middle, moderately broad upper before taper. Urn.

  function Pyramid({
    cx,
    preHalf,
    reproHalf,
    postHalf,
    label,
  }: {
    cx: number;
    preHalf: number; // width from center to outer edge for pre-repro band (each side)
    reproHalf: number;
    postHalf: number;
    label: string;
  }) {
    // Draw left (males) and right (females) as polygons per band row? Easier: for each of the 3 bands draw a rectangle-like shape band:
    // but to form pyramid taper smoothly vertically, draw a single polygon outline per side is cleaner.
    // Build left polygon: from bottom-center up along outer edge steps? Simpler: draw three horizontal bars stacked, widths vary by band => gives stepped pyramid look; spec says "age-group widths only" — stepped is fine (textbook style).
    // Draw stepped:
    const bands = [
      { y: preTop, h: bandH, half: preHalf, name: "pre" },
      { y: reproTop, h: bandH, half: reproHalf, name: "repro" },
      { y: postTop, h: bandH, half: postHalf, name: "post" },
    ];
    return (
      <g>
        {bands.map((b, i) => (
          <g key={i}>
            {/* left (males) */}
            <rect
              x={cx - b.half}
              y={b.y}
              width={b.half}
              height={b.h}
              fill={fill}
              stroke={stroke}
              strokeWidth={sw}
            />
            {/* right (females) */}
            <rect
              x={cx}
              y={b.y}
              width={b.half}
              height={b.h}
              fill={fill}
              stroke={stroke}
              strokeWidth={sw}
            />
          </g>
        ))}
        {/* center axis line */}
        <line x1={cx} y1={axisTop - 4} x2={cx} y2={axisBottom + 4} stroke={stroke} strokeWidth={sw} />
        {/* labels */}
        <text x={cx - 55} y={axisTop - 12} textAnchor="middle" fontSize="12" fill={stroke} fontFamily="sans-serif">
          Male
        </text>
        <text x={cx + 55} y={axisTop - 12} textAnchor="middle" fontSize="12" fill={stroke} fontFamily="sans-serif">
          Female
        </text>
        <text x={cx} y={axisBottom + 24} textAnchor="middle" fontSize="13" fill={stroke} fontFamily="sans-serif">
          {label}
        </text>
      </g>
    );
  }

  return (
    <div className="my-6 overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto h-auto w-full max-w-[920px]" role="img" aria-labelledby="age-pyramids-title">
        <title id="age-pyramids-title">Representation of age pyramids for human population</title>
        <rect x={0} y={0} width={W} height={H} fill="#ffffff" />
        <text x={W / 2} y={topTitleY} textAnchor="middle" fontSize="16" fontWeight="600" fill={stroke} fontFamily="sans-serif">
          Representation of age pyramids for human population
        </text>
        {/* Age group labels along left */}
        <text x={40} y={postTop + bandH / 2 + 4} textAnchor="start" fontSize="11" fill={stroke} fontFamily="sans-serif">
          Post-reproductive
        </text>
        <text x={40} y={reproTop + bandH / 2 + 4} textAnchor="start" fontSize="11" fill={stroke} fontFamily="sans-serif">
          Reproductive
        </text>
        <text x={40} y={preTop + bandH / 2 + 4} textAnchor="start" fontSize="11" fill={stroke} fontFamily="sans-serif">
          Pre-reproductive
        </text>

        {/* Pyramids */}
        <Pyramid cx={220} preHalf={95} reproHalf={65} postHalf={22} label="(a) Expanding Population" />
        <Pyramid cx={460} preHalf={70} reproHalf={72} postHalf={30} label="(b) Stable Population" />
        <Pyramid cx={700} preHalf={35} reproHalf={80} postHalf={55} label="(c) Declining Population" />
      </svg>
      <p className="mt-2 text-center text-xs text-muted-foreground">Figure 11.1 — Age pyramids for human population (schematic).</p>
    </div>
  );
}
