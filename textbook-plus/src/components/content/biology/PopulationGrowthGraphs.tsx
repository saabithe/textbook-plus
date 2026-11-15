export function PopulationGrowthGraphs() {
  const stroke = "#000000";
  const sw = 1.5;
  const jColor = "#2563eb";
  const sColor = "#059669";

  return (
    <div className="my-6 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-border/60 bg-card p-3 shadow-sm">
        <p className="mb-2 text-center text-sm font-semibold text-foreground">Exponential growth (J-shaped)</p>
        <svg viewBox="0 0 360 280" className="mx-auto h-auto w-full max-w-[360px]" role="img" aria-labelledby="j-curve-title">
          <title id="j-curve-title">J-shaped exponential growth curve</title>
          <rect x={0} y={0} width={360} height={280} fill="#ffffff" />
          {/* axes */}
          <line x1={50} y1={230} x2={330} y2={230} stroke={stroke} strokeWidth={sw} />
          <line x1={50} y1={230} x2={50} y2={30} stroke={stroke} strokeWidth={sw} />
          <text x={190} y={265} textAnchor="middle" fontSize="11" fill={stroke} fontFamily="sans-serif">
            Time
          </text>
          <text x={18} y={135} textAnchor="middle" fontSize="11" fill={stroke} fontFamily="sans-serif" transform="rotate(-90 18 135)">
            Population density (N)
          </text>
          {/* J curve */}
          <path d="M 60 220 C 90 218, 140 210, 190 170 C 230 135, 270 60, 310 40" fill="none" stroke={jColor} strokeWidth={2.5} />
          <text x={290} y={55} fontSize="11" fill={jColor} fontFamily="sans-serif">
            J
          </text>
        </svg>
      </div>
      <div className="rounded-2xl border border-border/60 bg-card p-3 shadow-sm">
        <p className="mb-2 text-center text-sm font-semibold text-foreground">Logistic growth (S-shaped)</p>
        <svg viewBox="0 0 360 280" className="mx-auto h-auto w-full max-w-[360px]" role="img" aria-labelledby="s-curve-title">
          <title id="s-curve-title">S-shaped logistic growth curve with carrying capacity K</title>
          <rect x={0} y={0} width={360} height={280} fill="#ffffff" />
          {/* axes */}
          <line x1={50} y1={230} x2={330} y2={230} stroke={stroke} strokeWidth={sw} />
          <line x1={50} y1={230} x2={50} y2={30} stroke={stroke} strokeWidth={sw} />
          <text x={190} y={265} textAnchor="middle" fontSize="11" fill={stroke} fontFamily="sans-serif">
            Time
          </text>
          <text x={18} y={135} textAnchor="middle" fontSize="11" fill={stroke} fontFamily="sans-serif" transform="rotate(-90 18 135)">
            Population density (N)
          </text>
          {/* K line */}
          <line x1={55} y1={70} x2={320} y2={70} stroke="#6b7280" strokeWidth={1.5} strokeDasharray="6 4" />
          <text x={325} y={74} fontSize="11" fill="#374151" fontFamily="sans-serif">
            K
          </text>
          {/* S curve (sigmoid) */}
          <path d="M 60 220 C 80 218, 100 200, 120 170 C 150 120, 200 80, 250 72 C 290 70, 310 70, 320 70" fill="none" stroke={sColor} strokeWidth={2.5} />
          {/* phase labels (approx) */}
          <text x={70} y={245} fontSize="9" fill={stroke} fontFamily="sans-serif">
            Lag
          </text>
          <text x={140} y={245} fontSize="9" fill={stroke} fontFamily="sans-serif">
            Accel.
          </text>
          <text x={220} y={245} fontSize="9" fill={stroke} fontFamily="sans-serif">
            Decel.
          </text>
          <text x={290} y={245} fontSize="9" fill={stroke} fontFamily="sans-serif">
            Asymptote
          </text>
        </svg>
      </div>
    </div>
  );
}
