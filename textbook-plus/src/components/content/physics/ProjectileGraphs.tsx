const AXIS = "var(--foreground)";
const LABEL = "var(--muted-foreground)";
const GRID = "var(--border)";
const VX = "#8b5cf6";
const VY = "#10b981";

export function ProjectileComponentGraphs() {
  return (
    <div className="my-2 grid gap-4 sm:grid-cols-2">
      <figure className="rounded-xl border border-border/70 bg-card p-3">
        <svg
          viewBox="0 0 250 170"
          role="img"
          aria-label="Horizontal velocity component of a projectile against time"
          className="mx-auto h-auto w-full max-w-[260px]"
        >
          <line x1="40" y1="150" x2="233" y2="150" stroke={AXIS} strokeWidth="1.2" opacity="0.85" />
          <line x1="40" y1="18" x2="40" y2="150" stroke={AXIS} strokeWidth="1.2" opacity="0.85" />
          <line x1="225" y1="150" x2="225" y2="45" stroke={GRID} strokeWidth="1" strokeDasharray="3 3" />
          <line x1="40" y1="45" x2="225" y2="45" stroke={VX} strokeWidth="2.5" />
          <polygon points="225,45 213,39 213,51" fill={VX} />
          <text x="58" y="36" fontSize="11" fontWeight="700" fill={VX}>
            v₀ cosθ₀
          </text>
          <text x="90" y="165" fontSize="10" textAnchor="middle" fill={LABEL}>
            t
          </text>
          <text x="30" y="154" fontSize="10" textAnchor="end" fill={LABEL}>
            0
          </text>
          <text x="225" y="165" fontSize="10" textAnchor="middle" fill={LABEL}>
            T
          </text>
          <text x="34" y="50" fontSize="10" textAnchor="end" fill={LABEL}>
            vₓ
          </text>
        </svg>
        <figcaption className="mt-1 text-center text-xs font-bold text-muted-foreground">
          vₓ vs t — horizontal line (constant)
        </figcaption>
      </figure>

      <figure className="rounded-xl border border-border/70 bg-card p-3">
        <svg
          viewBox="0 0 250 170"
          role="img"
          aria-label="Vertical velocity component of a projectile against time"
          className="mx-auto h-auto w-full max-w-[260px]"
        >
          <line x1="40" y1="85" x2="233" y2="85" stroke={AXIS} strokeWidth="1.2" opacity="0.7" />
          <line x1="40" y1="18" x2="40" y2="152" stroke={AXIS} strokeWidth="1.2" opacity="0.85" />
          <line x1="132" y1="152" x2="132" y2="40" stroke={GRID} strokeWidth="1" strokeDasharray="3 3" />
          <polyline
            points="40,30 132,85 225,140"
            fill="none"
            stroke={VY}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <polygon points="225,140 213,132.5 214,149.5" fill={VY} />
          <circle cx="132" cy="85" r="3.5" fill={VY} />
          <text x="44" y="27" fontSize="11" fontWeight="700" fill={VY}>
            u sinθ
          </text>
          <text x="44" y="147" fontSize="11" fontWeight="700" fill={VY}>
            −u sinθ
          </text>
          <text x="30" y="154" fontSize="10" textAnchor="end" fill={LABEL}>
            0
          </text>
          <text x="34" y="70" fontSize="10" textAnchor="end" fill={LABEL}>
            v_y
          </text>
          <text x="132" y="165" fontSize="10" textAnchor="middle" fill={LABEL}>
            t_m
          </text>
          <text x="225" y="165" fontSize="10" textAnchor="middle" fill={LABEL}>
            T
          </text>
          <text x="90" y="165" fontSize="10" textAnchor="middle" fill={LABEL}>
            t
          </text>
        </svg>
        <figcaption className="mt-1 text-center text-xs font-bold text-muted-foreground">
          v_y vs t — straight line, slope −g
        </figcaption>
      </figure>
    </div>
  );
}

export function CircularMotionVectors() {
  return (
    <figure className="my-2 w-fit max-w-full rounded-xl border border-border/70 bg-card p-3">
      <svg
        viewBox="0 0 200 200"
        role="img"
        aria-label="Velocity is tangential and centripetal acceleration is radial at a point on a circular path"
        className="mx-auto h-auto w-full max-w-[220px]"
      >
        <circle cx="100" cy="100" r="70" fill="none" stroke={GRID} strokeWidth="2" />
        <line
          x1="100"
          y1="100"
          x2="170"
          y2="100"
          stroke={LABEL}
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <circle cx="100" cy="100" r="3.5" fill={LABEL} />
        <circle cx="170" cy="100" r="4" fill={AXIS} />
        <line x1="170" y1="100" x2="170" y2="58" stroke="#0284c7" strokeWidth="2.5" />
        <polygon points="170,58 164,72 176,72" fill="#0284c7" />
        <line x1="170" y1="100" x2="118" y2="100" stroke="#e11d48" strokeWidth="2.5" />
        <polygon points="118,100 130,95 130,105" fill="#e11d48" />
        <text x="178" y="72" fontSize="12.5" fontWeight="700" fill="#0284c7">
          v
        </text>
        <text x="128" y="92" fontSize="12.5" fontWeight="700" fill="#e11d48">
          a_c
        </text>
        <text x="80" y="92" fontSize="11.5" fill={LABEL}>
          O
        </text>
        <text x="178" y="122" fontSize="11.5" fill={LABEL}>
          P
        </text>
        <text x="52" y="188" fontSize="10" fill={LABEL}>
          circular path, radius r
        </text>
      </svg>
      <figcaption className="mt-1 text-center text-xs font-bold text-muted-foreground">
        v tangential ⊥ radius · a_c radial inward
      </figcaption>
    </figure>
  );
}