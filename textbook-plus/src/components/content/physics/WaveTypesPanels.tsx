const VIOLET = "#8b5cf6";
const AMBER = "#f59e0b";

function TransversePanel() {
  const W = 300;
  const mean = 76;
  const amp = 34;
  const x0 = 18;
  const x1 = 282;
  const lambda = 130;

  const points = Array.from({ length: 67 }, (_, i) => {
    const x = x0 + (i * (x1 - x0)) / 66;
    const y = mean - amp * Math.sin((2 * Math.PI * (x - x0)) / lambda);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

  const crestX = x0 + lambda / 4;

  return (
    <svg viewBox={`0 0 ${W} 156`} className="h-auto w-full" role="img" aria-label="Transverse wave: particles oscillate perpendicular to propagation">
      <line
        x1={x0}
        y1={mean}
        x2={x1}
        y2={mean}
        stroke="var(--foreground)"
        strokeOpacity="0.25"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <polyline points={points} fill="none" stroke={VIOLET} strokeWidth="2.5" strokeLinecap="round" />
      {/* particle oscillation (perpendicular) */}
      <line x1={crestX} y1={mean - amp} x2={crestX} y2={mean + amp} stroke={VIOLET} strokeWidth="2" />
      <polygon points={`${crestX},${mean - amp} ${crestX - 5},${mean - amp + 8} ${crestX + 5},${mean - amp + 8}`} fill={VIOLET} />
      <polygon points={`${crestX},${mean + amp} ${crestX - 5},${mean + amp - 8} ${crestX + 5},${mean + amp - 8}`} fill={VIOLET} />
      <circle cx={crestX} cy={mean - amp} r="4.5" fill={VIOLET} />
      <text x={crestX + 10} y={mean + 4} fontSize="11" fill="var(--muted-foreground)">
        particle
      </text>
      {/* propagation */}
      <line x1={34} y1={140} x2={252} y2={140} stroke="var(--foreground)" strokeOpacity="0.65" strokeWidth="1.5" />
      <polygon points={`258,140 248,135 248,145`} fill="var(--foreground)" fillOpacity="0.65" />
      <text x={30} y={144} fontSize="11" fill="var(--muted-foreground)">
        propagation
      </text>
    </svg>
  );
}

function LongitudinalPanel() {
  const W = 300;
  const mean = 76;
  const x0 = 20;
  const x1 = 280;
  const lambda = 130;
  const compressionAt = 52;

  const bars = Array.from({ length: 60 }, (_, i) => {
    const x = x0 + (i * (x1 - x0)) / 59;
    const d = (1 + Math.cos((2 * Math.PI * (x - compressionAt)) / lambda)) / 2;
    return { x, d };
  });

  return (
    <svg viewBox={`0 0 ${W} 156`} className="h-auto w-full" role="img" aria-label="Longitudinal wave: particles oscillate parallel to propagation">
      <line
        x1={x0}
        y1={mean}
        x2={x1}
        y2={mean}
        stroke="var(--foreground)"
        strokeOpacity="0.25"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      {bars.map(({ x, d }, i) => (
        <line
          key={i}
          x1={x}
          y1={mean - 32}
          x2={x}
          y2={mean + 32}
          stroke={AMBER}
          strokeWidth={0.8 + 3.4 * d}
          strokeLinecap="round"
          strokeOpacity={0.18 + 0.82 * d}
        />
      ))}
      {/* highlighted particle oscillation (parallel) */}
      <line x1={compressionAt - 16} y1={126} x2={compressionAt + 16} y2={126} stroke={AMBER} strokeWidth="2" />
      <polygon points={`${compressionAt - 16},126 ${compressionAt - 8},121 ${compressionAt - 8},131`} fill={AMBER} />
      <polygon points={`${compressionAt + 16},126 ${compressionAt + 8},121 ${compressionAt + 8},131`} fill={AMBER} />
      <line x1={compressionAt} y1={mean + 32 + 4} x2={compressionAt} y2={126} stroke={AMBER} strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.6" />
      <circle cx={compressionAt} cy={mean} r="4.5" fill={AMBER} />
      <text x={compressionAt + 24} y={130} fontSize="11" fill="var(--muted-foreground)">
        particle
      </text>
      {/* propagation */}
      <line x1={34} y1={140} x2={252} y2={140} stroke="var(--foreground)" strokeOpacity="0.65" strokeWidth="1.5" />
      <polygon points={`258,140 248,135 248,145`} fill="var(--foreground)" fillOpacity="0.65" />
      <text x={30} y={144} fontSize="11" fill="var(--muted-foreground)">
        propagation
      </text>
    </svg>
  );
}

function Panel({
  label,
  symbol,
  caption,
  accent,
  children,
}: {
  label: string;
  symbol: string;
  caption: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span
          className="flex h-6 w-6 items-center justify-center rounded-lg text-sm font-extrabold text-white shadow-sm"
          style={{ background: accent }}
        >
          {symbol}
        </span>
        <span className="text-xs font-extrabold uppercase tracking-[0.14em]" style={{ color: accent }}>
          {label}
        </span>
      </div>
      <div className="px-3 py-3">{children}</div>
      <div className="border-t border-border/40 bg-muted/20 px-4 py-2 text-center text-xs font-semibold text-muted-foreground">
        {caption}
      </div>
    </div>
  );
}

export function WaveTypesPanels() {
  return (
    <div className="my-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Panel label="Transverse" symbol="⟂" caption="Particle motion ⟂ propagation" accent={VIOLET}>
          <TransversePanel />
        </Panel>
        <Panel label="Longitudinal" symbol="∥" caption="Particle motion ∥ propagation" accent={AMBER}>
          <LongitudinalPanel />
        </Panel>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 px-4 py-3 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
            Transverse = Perpendicular
          </p>
        </div>
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-300">
            Longitudinal = Parallel
          </p>
        </div>
      </div>
    </div>
  );
}
