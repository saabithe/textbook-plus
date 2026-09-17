const VIOLET = "#8b5cf6";
const AMBER = "#f59e0b";

const W = 320;
const X0 = 30;
const X1 = 290;
const MID = 53;
const AMP = 24;

function points(fn: (t: number) => number): string {
  return Array.from({ length: 81 }, (_, i) => {
    const t = i / 80;
    const x = X0 + t * (X1 - X0);
    const y = MID - AMP * fn(t);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

function ModeRow({
  title,
  fn,
  nodes,
  antis,
  tube,
  closedEnd,
}: {
  title: string;
  fn: (t: number) => number;
  nodes: number[];
  antis: number[];
  tube?: boolean;
  closedEnd?: boolean;
}) {
  return (
    <div>
      <p className="mb-1 text-xs font-extrabold text-foreground">{title}</p>
      <svg viewBox={`0 0 ${W} 102`} className="h-auto w-full" role="img" aria-label={title}>
        {tube && (
          <rect x={X0} y={MID - 32} width={X1 - X0} height={64} rx="6" fill="var(--foreground)" fillOpacity="0.05" stroke="var(--foreground)" strokeOpacity="0.25" strokeWidth="1.5" />
        )}
        {closedEnd && (
          <line x1={X0} y1={MID - 32} x2={X0} y2={MID + 32} stroke="var(--foreground)" strokeOpacity="0.6" strokeWidth="4" strokeLinecap="round" />
        )}
        {!tube && (
          <line x1={X0} y1={MID} x2={X1} y2={MID} stroke="var(--foreground)" strokeOpacity="0.2" strokeWidth="1.5" />
        )}
        <polyline points={points(fn)} fill="none" stroke={VIOLET} strokeWidth="2.5" strokeLinecap="round" />
        {nodes.map((t, i) => {
          const x = X0 + t * (X1 - X0);
          return (
            <g key={`n${i}`}>
              <circle cx={x} cy={MID} r="4.5" fill="var(--foreground)" />
              <text x={x} y={MID + 22} fontSize="9.5" fontWeight="800" textAnchor="middle" fill="var(--foreground)">
                N
              </text>
            </g>
          );
        })}
        {antis.map((t, i) => {
          const x = X0 + t * (X1 - X0);
          const y = MID - AMP * fn(t);
          const above = fn(t) > 0;
          return (
            <g key={`a${i}`}>
              <circle cx={x} cy={y} r="4.5" fill="var(--card)" stroke={AMBER} strokeWidth="2.5" />
              <text x={x} y={above ? y - 8 : y + 16} fontSize="9.5" fontWeight="800" textAnchor="middle" fill={AMBER}>
                AN
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border/50 bg-muted/20 px-3 py-3">
      <p className="mb-2 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">{title}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function StandingModesDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          Standing-wave patterns — nodes (● N) and antinodes (○ AN)
        </span>
      </div>
      <div className="grid gap-3 px-3 py-3 md:grid-cols-3">
        <Group title="String fixed at both ends — N at both ends">
          <ModeRow title="Mode 1 · f₁ = v/2l" fn={(t) => Math.sin(Math.PI * t)} nodes={[0, 1]} antis={[0.5]} />
          <ModeRow title="Mode 2 · f₂ = 2f₁" fn={(t) => Math.sin(2 * Math.PI * t)} nodes={[0, 0.5, 1]} antis={[0.25, 0.75]} />
          <ModeRow title="Mode 3 · f₃ = 3f₁" fn={(t) => Math.sin(3 * Math.PI * t)} nodes={[0, 1 / 3, 2 / 3, 1]} antis={[1 / 6, 0.5, 5 / 6]} />
        </Group>
        <Group title="Open pipe — AN at both ends">
          <ModeRow title="Mode 1 · f₁ = v/2l" tube fn={(t) => Math.cos(Math.PI * t)} nodes={[0.5]} antis={[0, 1]} />
          <ModeRow title="Mode 2 · f₂ = 2f₁" tube fn={(t) => Math.cos(2 * Math.PI * t)} nodes={[0.25, 0.75]} antis={[0, 0.5, 1]} />
        </Group>
        <Group title="Closed pipe — N at closed end, AN at open end">
          <ModeRow title="Mode 1 · f₁ = v/4l" tube closedEnd fn={(t) => Math.sin((Math.PI * t) / 2)} nodes={[0]} antis={[1]} />
          <ModeRow title="Mode 2 · f₂ = 3f₁" tube closedEnd fn={(t) => Math.sin((3 * Math.PI * t) / 2)} nodes={[0, 2 / 3]} antis={[1 / 3, 1]} />
        </Group>
      </div>
    </div>
  );
}
