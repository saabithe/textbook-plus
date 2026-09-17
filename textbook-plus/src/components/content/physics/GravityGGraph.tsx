import { Formula } from "@/components/content/Formula";

export function GravityGGraph() {
  return (
    <figure className="my-4 overflow-hidden rounded-xl border border-border/40 bg-card">
      <div className="flex items-center gap-2 border-b border-border/30 bg-muted/20 px-4 py-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
          Variation of g with distance from the earth&rsquo;s centre
        </span>
      </div>
      <div className="p-3">
        <svg viewBox="0 0 440 230" className="w-full" role="img" aria-label="Graph of g against distance from earth's centre">
          <defs>
            <marker id="gxArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--muted-foreground)" />
            </marker>
            <marker id="gyArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--muted-foreground)" />
            </marker>
          </defs>

          {/* axes */}
          <line x1={50} y1={190} x2={420} y2={190} stroke="var(--muted-foreground)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#gxArrow)" />
          <line x1={50} y1={190} x2={50} y2={20} stroke="var(--muted-foreground)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#gyArrow)" />

          {/* inside the earth — linear rise  */}
          <line x1={50} y1={190} x2={190} y2={60} stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" />
          {/* outside — inverse-square fall  */}
          <path d="M 190 60 Q 210 66 228 78 T 300 130 T 415 184" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />

          {/* cutoff at R_e */}
          <line x1={190} y1={190} x2={190} y2={52} stroke="var(--muted-foreground)" strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="5 4" />
          <circle cx={190} cy={60} r="4" fill="#8b5cf6" />

          {/* labels */}
          <text x={188} y={200} fontSize="14" textAnchor="middle" fill="var(--foreground)">R</text>
          <text x={70} y={140} fontSize="13" fill="#8b5cf6">g ∝ r</text>
          <text x={330} y={120} fontSize="13" fill="#06b6d4">g ∝ 1/r²</text>
          <text x={52} y={212} fontSize="13" fill="var(--muted-foreground)">0</text>
          <text x={330} y={212} fontSize="13" fill="var(--muted-foreground)">distance r →</text>
          <text x={28} y={70} fontSize="13" fill="var(--muted-foreground)">g</text>

          <text x={215} y={30} fontSize="12.5" fontWeight="700" fill="var(--foreground)">
            peak at the surface (r = R)
          </text>
        </svg>
      </div>
      <figcaption className="border-t border-border/30 bg-muted/20 px-4 py-2.5 text-center text-xs leading-relaxed text-muted-foreground">
        Inside the earth (<Formula>{String.raw`r < R`}</Formula>) g grows <strong>linearly</strong> from 0 at the
        centre to its surface value; outside (<Formula>{String.raw`r > R`}</Formula>) it falls as{" "}
        <Formula>{String.raw`1/r^2`}</Formula>. g is maximum exactly at the surface.
      </figcaption>
    </figure>
  );
}