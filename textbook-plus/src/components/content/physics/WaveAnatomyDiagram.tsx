const VIOLET = "#8b5cf6";
const AMBER = "#f59e0b";

export function WaveAnatomyDiagram() {
  const mean = 120;
  const amp = 58;
  const x0 = 40;
  const x1 = 535;
  const lambda = 190;

  const points = Array.from({ length: 166 }, (_, i) => {
    const x = x0 + (i * (x1 - x0)) / 165;
    const y = mean - amp * Math.sin((2 * Math.PI * (x - x0)) / lambda);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

  const crestX = x0 + lambda / 4;
  const troughX = x0 + (3 * lambda) / 4;
  const nextCrestX = crestX + lambda;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          Anatomy of a wave
        </span>
      </div>
      <div className="px-3 py-3">
        <svg viewBox="0 0 560 250" className="h-auto w-full" role="img" aria-label="Wave diagram showing mean position, amplitude, wavelength, crest and trough">
          {/* mean position (propagation axis) */}
          <line
            x1={x0}
            y1={mean}
            x2={x1 + 5}
            y2={mean}
            stroke="var(--foreground)"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
          <polygon points={`${x1 + 11},${mean} ${x1 + 1},${mean - 5} ${x1 + 1},${mean + 5}`} fill="var(--foreground)" fillOpacity="0.3" />
          <text x={x1 - 4} y={mean - 8} fontSize="12" textAnchor="end" fill="var(--muted-foreground)">
            Mean position
          </text>

          {/* the wave */}
          <polyline points={points} fill="none" stroke={VIOLET} strokeWidth="2.5" strokeLinecap="round" />

          {/* crest */}
          <circle cx={crestX} cy={mean - amp} r="4.5" fill={VIOLET} />
          <text x={crestX} y={mean - amp - 12} fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--foreground)">
            Crest
          </text>

          {/* trough */}
          <circle cx={troughX} cy={mean + amp} r="4.5" fill={VIOLET} />
          <text x={troughX} y={mean + amp + 22} fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--foreground)">
            Trough
          </text>

          {/* amplitude */}
          <line x1={crestX} y1={mean} x2={crestX} y2={mean - amp} stroke={AMBER} strokeWidth="2" />
          <polygon points={`${crestX},${mean - amp} ${crestX - 5},${mean - amp + 8} ${crestX + 5},${mean - amp + 8}`} fill={AMBER} />
          <polygon points={`${crestX},${mean} ${crestX - 5},${mean - 8} ${crestX + 5},${mean - 8}`} fill={AMBER} />
          <text x={crestX + 10} y={mean - amp / 2 + 4} fontSize="12" fontWeight="700" fill={AMBER}>
            Amplitude (A)
          </text>

          {/* wavelength: one crest to the next */}
          <line x1={crestX} y1={232} x2={nextCrestX} y2={232} stroke="var(--foreground)" strokeOpacity="0.65" strokeWidth="1.5" />
          <polygon points={`${crestX},232 ${crestX + 8},227 ${crestX + 8},237`} fill="var(--foreground)" fillOpacity="0.65" />
          <polygon points={`${nextCrestX},232 ${nextCrestX - 8},227 ${nextCrestX - 8},237`} fill="var(--foreground)" fillOpacity="0.65" />
          <text x={(crestX + nextCrestX) / 2} y={224} fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--foreground)">
            Wavelength (λ)
          </text>
        </svg>
      </div>
    </div>
  );
}
