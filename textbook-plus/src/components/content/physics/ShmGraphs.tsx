const PX0 = 40; // plot left edge (inside each panel)
const PW = 200; // plot width
const YMID = 116; // x = 0 line
const AMPP = 52; // pixels per unit amplitude
const BASELINE = 196;
const TOP = 36;

/** Sample x(t) = amp·cos(2π·freq·t + phase) over t ∈ [0, 1] to an SVG polyline string. */
function curvePoints(
  amp: number,
  phase: number,
  freq: number,
  originX: number,
  steps = 140
): string {
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const px = originX + PX0 + t * PW;
    const val = amp * Math.cos(2 * Math.PI * freq * t + phase);
    const py = YMID - val * AMPP;
    pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  return pts.join(" ");
}

export function ShmGraphs() {
  return (
    <figure className="my-6 rounded-xl border border-border/60 bg-white p-3 dark:bg-zinc-900">
      <svg
        viewBox="0 0 780 330"
        className="h-auto w-full"
        role="img"
        aria-labelledby="shmGraphsTitle shmGraphsDesc"
      >
        <title id="shmGraphsTitle">Displacement x as a function of time t for several SHMs</title>
        <desc id="shmGraphsDesc">
          Three plots, one period of motion each. (a) Phase constant zero with two different amplitudes: curve 1 has
          amplitude A and curve 2 has a smaller amplitude B. (b) Same amplitude with curve 3 for phase constant zero,
          x = A cos(omega t), and curve 4 for phase constant minus pi over 4, x = A cos(omega t minus pi over 4). (c)
          Phase constant zero with two different periods: the solid curve has angular frequency omega and the dashed
          curve twice that, two omega.
        </desc>

        {/* panel titles */}
        <text x={PX0 + PW / 2} y="20" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--foreground)">
          (a) different amplitudes
        </text>
        <text x={270 + PX0 + PW / 2} y="20" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--foreground)">
          (b) different phase constants
        </text>
        <text x={520 + PX0 + PW / 2} y="20" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--foreground)">
          (c) different periods
        </text>

        {/* (a) amplitudes A and B, φ = 0 */}
        <g>
          <line x1={20 + PX0} y1={BASELINE} x2={20 + PX0 + PW} y2={BASELINE} stroke="var(--muted-foreground)" strokeWidth="1.5" />
          <line x1={20 + PX0} y1={TOP} x2={20 + PX0} y2={BASELINE} stroke="var(--muted-foreground)" strokeWidth="1.5" />
          <text x={20 + PX0 - 6} y={YMID - AMPP + 4} textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--foreground)">+A</text>
          <text x={20 + PX0 - 6} y={YMID - AMPP * 0.6 + 4} textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--muted-foreground)">+B</text>
          <text x={20 + PX0 - 6} y={YMID + AMPP * 0.6 + 4} textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--muted-foreground)">−B</text>
          <text x={20 + PX0 - 6} y={YMID + AMPP + 4} textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--foreground)">−A</text>
          <polyline points={curvePoints(1, 0, 1, 20)} fill="none" stroke="#6366f1" strokeWidth="2.5" />
          <polyline points={curvePoints(0.6, 0, 1, 20)} fill="none" stroke="#f43f5e" strokeWidth="2.5" />
          <text x={20 + PX0 + 0.94 * PW + 4} y={YMID - AMPP * Math.cos(2 * Math.PI * 0.94) + 4} fontSize="11" fontWeight="800" fill="#6366f1">1</text>
          <text x={20 + PX0 + 0.94 * PW + 4} y={YMID - AMPP * 0.6 * Math.cos(2 * Math.PI * 0.94) + 4} fontSize="11" fontWeight="800" fill="#f43f5e">2</text>
          <text x={20 + PX0 + PW / 2} y={222} textAnchor="middle" fontSize="10.5" fill="var(--muted-foreground)">
            φ = 0 — one period T
          </text>
          <text x={20 + PX0 + PW / 2} y={238} textAnchor="middle" fontSize="10.5" fill="var(--muted-foreground)">
            curve 1: amplitude A · curve 2: amplitude B (B &lt; A)
          </text>
        </g>

        {/* (b) same amplitude, φ = 0 vs φ = −π/4 */}
        <g>
          <line x1={270 + PX0} y1={BASELINE} x2={270 + PX0 + PW} y2={BASELINE} stroke="var(--muted-foreground)" strokeWidth="1.5" />
          <line x1={270 + PX0} y1={TOP} x2={270 + PX0} y2={BASELINE} stroke="var(--muted-foreground)" strokeWidth="1.5" />
          <text x={270 + PX0 - 6} y={YMID - AMPP + 4} textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--foreground)">+A</text>
          <text x={270 + PX0 - 6} y={YMID + AMPP + 4} textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--foreground)">−A</text>
          <text x={270 + PX0 + 4} y={TOP - 4} fontSize="10.5" fontWeight="700" fill="var(--foreground)">x</text>
          <polyline points={curvePoints(1, 0, 1, 270)} fill="none" stroke="#6366f1" strokeWidth="2.5" />
          <polyline points={curvePoints(1, -Math.PI / 4, 1, 270)} fill="none" stroke="#10b981" strokeWidth="2.5" />
          <text x={270 + PX0 + 0.94 * PW + 4} y={YMID - AMPP * Math.cos(2 * Math.PI * 0.94) + 4} fontSize="11" fontWeight="800" fill="#6366f1">3</text>
          <text x={270 + PX0 + 0.94 * PW + 4} y={YMID - AMPP * Math.cos(2 * Math.PI * 0.94 - Math.PI / 4) + 4} fontSize="11" fontWeight="800" fill="#10b981">4</text>
          <text x={270 + PX0 + PW / 2} y={222} textAnchor="middle" fontSize="10.5" fill="var(--muted-foreground)">
            curve 3: x = A cos(ωt), φ = 0
          </text>
          <text x={270 + PX0 + PW / 2} y={238} textAnchor="middle" fontSize="10.5" fill="var(--muted-foreground)">
            curve 4: x = A cos(ωt − π/4) — lags by T/8
          </text>
        </g>

        {/* (c) φ = 0, two different periods */}
        <g>
          <line x1={520 + PX0} y1={BASELINE} x2={520 + PX0 + PW} y2={BASELINE} stroke="var(--muted-foreground)" strokeWidth="1.5" />
          <line x1={520 + PX0} y1={TOP} x2={520 + PX0} y2={BASELINE} stroke="var(--muted-foreground)" strokeWidth="1.5" />
          <text x={520 + PX0 - 6} y={YMID - AMPP + 4} textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--foreground)">+A</text>
          <text x={520 + PX0 - 6} y={YMID + AMPP + 4} textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--foreground)">−A</text>
          <polyline points={curvePoints(1, 0, 1, 520)} fill="none" stroke="#6366f1" strokeWidth="2.5" />
          <polyline
            points={curvePoints(1, 0, 2, 520)}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeDasharray="6 5"
          />
          <text x={520 + PX0 + PW / 2} y={222} textAnchor="middle" fontSize="10.5" fill="var(--muted-foreground)">
            φ = 0 — one period of the slower motion
          </text>
          <text x={520 + PX0 + PW / 2} y={238} textAnchor="middle" fontSize="10.5" fill="var(--muted-foreground)">
            solid: ω (period T) · dashed: 2ω (period T/2)
          </text>
        </g>
      </svg>
      <figcaption className="mt-2 text-center text-xs leading-relaxed text-muted-foreground">
        Fig. 13.7–13.8 — Displacement as a function of time: (a) φ = 0 with amplitudes A and B (curves 1 and 2); (b) the
        same amplitude and frequency with φ = 0 (curve 3, x = A cos ωt) and φ = −π/4 (curve 4, x = A cos(ωt − π/4));
        (c) φ = 0 with two different periods — the dashed curve with twice the frequency completes two cycles in the
        same interval.
      </figcaption>
    </figure>
  );
}