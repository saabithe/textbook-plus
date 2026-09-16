"use client";

function Figure({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[100px] h-[70px] flex items-center justify-center">
        {children}
      </div>
      <span className="text-[0.6rem] text-muted-foreground text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

function Axis({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="currentColor"
      strokeWidth={0.8}
      strokeDasharray="2 1.5"
      opacity={0.5}
    />
  );
}

export function MoiDiagrams() {
  return (
    <div className="my-4 flex flex-wrap items-end justify-center gap-x-4 gap-y-3">
      <Figure label="Ring (centre, ⊥)">
        <svg viewBox="0 0 100 70" className="w-full h-full">
          <Axis x1={50} y1={5} x2={50} y2={65} />
          <circle cx={50} cy={35} r={22} fill="none" stroke="currentColor" strokeWidth={2} />
          <circle cx={50} cy={35} r={2.5} fill="currentColor" />
        </svg>
      </Figure>
      <Figure label="Ring (diameter)">
        <svg viewBox="0 0 100 70" className="w-full h-full">
          <Axis x1={50} y1={5} x2={50} y2={65} />
          <ellipse cx={50} cy={35} rx={10} ry={22} fill="none" stroke="currentColor" strokeWidth={2} />
          <circle cx={50} cy={35} r={2.5} fill="currentColor" />
        </svg>
      </Figure>
      <Figure label="Rod (midpoint, ⊥)">
        <svg viewBox="0 0 100 70" className="w-full h-full">
          <Axis x1={50} y1={5} x2={50} y2={65} />
          <line x1={18} y1={35} x2={82} y2={35} stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
          <circle cx={50} cy={35} r={2.5} fill="currentColor" />
        </svg>
      </Figure>
      <Figure label="Disc (centre, ⊥)">
        <svg viewBox="0 0 100 70" className="w-full h-full">
          <Axis x1={50} y1={5} x2={50} y2={65} />
          <ellipse cx={50} cy={35} rx={22} ry={8} fill="none" stroke="currentColor" strokeWidth={1.5} />
          <ellipse cx={50} cy={35} rx={22} ry={22} fill="none" stroke="currentColor" strokeWidth={2} />
          <circle cx={50} cy={35} r={2.5} fill="currentColor" />
        </svg>
      </Figure>
      <Figure label="Disc (diameter)">
        <svg viewBox="0 0 100 70" className="w-full h-full">
          <Axis x1={50} y1={5} x2={50} y2={65} />
          <ellipse cx={50} cy={35} rx={10} ry={22} fill="none" stroke="currentColor" strokeWidth={2} />
          <line x1={40} y1={35} x2={60} y2={35} stroke="currentColor" strokeWidth={1.2} />
          <circle cx={50} cy={35} r={2.5} fill="currentColor" />
        </svg>
      </Figure>
      <Figure label="Hollow cylinder">
        <svg viewBox="0 0 100 70" className="w-full h-full">
          <Axis x1={50} y1={5} x2={50} y2={65} />
          <ellipse cx={50} cy={22} rx={18} ry={6} fill="none" stroke="currentColor" strokeWidth={1.5} />
          <ellipse cx={50} cy={48} rx={18} ry={6} fill="none" stroke="currentColor" strokeWidth={1.5} />
          <line x1={32} y1={22} x2={32} y2={48} stroke="currentColor" strokeWidth={2} />
          <line x1={68} y1={22} x2={68} y2={48} stroke="currentColor" strokeWidth={2} />
          <circle cx={50} cy={35} r={2.5} fill="currentColor" />
        </svg>
      </Figure>
      <Figure label="Solid cylinder">
        <svg viewBox="0 0 100 70" className="w-full h-full">
          <Axis x1={50} y1={5} x2={50} y2={65} />
          <ellipse cx={50} cy={22} rx={18} ry={6} fill="currentColor" fillOpacity={0.15} stroke="currentColor" strokeWidth={2} />
          <ellipse cx={50} cy={48} rx={18} ry={6} fill="none" stroke="currentColor" strokeWidth={2} />
          <line x1={32} y1={22} x2={32} y2={48} stroke="currentColor" strokeWidth={2} />
          <line x1={68} y1={22} x2={68} y2={48} stroke="currentColor" strokeWidth={2} />
          <circle cx={50} cy={35} r={2.5} fill="currentColor" />
        </svg>
      </Figure>
      <Figure label="Solid sphere">
        <svg viewBox="0 0 100 70" className="w-full h-full">
          <Axis x1={50} y1={5} x2={50} y2={65} />
          <circle cx={50} cy={35} r={22} fill="currentColor" fillOpacity={0.1} stroke="currentColor" strokeWidth={2} />
          <ellipse cx={50} cy={35} rx={22} ry={7} fill="none" stroke="currentColor" strokeWidth={1} strokeDasharray="2 1.5" opacity={0.5} />
          <circle cx={50} cy={35} r={2.5} fill="currentColor" />
        </svg>
      </Figure>
    </div>
  );
}
