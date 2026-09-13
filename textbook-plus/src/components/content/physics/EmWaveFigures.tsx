const E_COLOR = "#e11d48";
const B_COLOR = "#3b82f6";
const AXIS = "var(--foreground)";
const LABEL = "var(--muted-foreground)";

export function PlaneWaveFigure() {
  return (
    <figure className="my-2 w-fit max-w-full rounded-xl border border-border/70 bg-card p-3">
      <svg
        viewBox="0 0 560 210"
        role="img"
        aria-label="Plane electromagnetic wave with E along x, B along y, propagating along z"
        className="mx-auto h-auto w-full max-w-[560px]"
      >
        {/* z axis (propagation) */}
        <line x1="20" y1="180" x2="540" y2="180" stroke={AXIS} strokeWidth="1.4" />
        <polygon points="540,180 528,174 528,186" fill={AXIS} />
        <text x="500" y="200" fontSize="12" fill={LABEL}>z</text>

        {/* E sinusoid (vertical plane, x-direction) */}
        <path
          d="M30,120 Q 52,40 75,60 T 120,60 T 165,60 T 210,60 T 255,60 T 300,60 T 345,60 T 390,60 T 435,60 T 480,60 T 525,60"
          fill="none"
          stroke={E_COLOR}
          strokeWidth="2"
        />
        {/* E axis arrow (x) */}
        <line x1="12" y1="120" x2="12" y2="18" stroke={E_COLOR} strokeWidth="1.4" />
        <polygon points="12,18 6,30 18,30" fill={E_COLOR} />
        <text x="18" y="16" fontSize="12" fill={E_COLOR}>E&#8322;</text>

        {/* B sinusoid (horizontal plane, y-direction, shifted along x) */}
        <path
          d="M60,180 Q 82,105 105,125 T 150,125 T 195,125 T 240,125 T 285,125 T 330,125 T 375,125 T 420,125 T 465,125 T 510,125 T 540,125"
          fill="none"
          stroke={B_COLOR}
          strokeWidth="2"
        />
        {/* B axis arrow (y) — perpendicular drawn toward viewer */}
        <line x1="30" y1="180" x2="30" y2="234" stroke={B_COLOR} strokeWidth="1.4" />
        <polygon points="30,234 24,222 36,222" fill={B_COLOR} />
        <text x="38" y="228" fontSize="12" fill={B_COLOR}>B&#8917;</text>

        {/* quarter-wave markers along z */}
        <text x="26" y="172" fontSize="10" fill={LABEL}>0</text>
        <text x="195" y="172" fontSize="10" fill={LABEL}>&#955;</text>
        <text x="390" y="172" fontSize="10" fill={LABEL}>2&#955;</text>
      </svg>
      <figcaption className="mt-1 text-center text-xs font-bold text-muted-foreground">
        E and B oscillate perpendicular to each other and to the direction of propagation (z)
      </figcaption>
    </figure>
  );
}

const BANDS = [
  { name: "Gamma", w: 5, color: "#7c3aed" },
  { name: "X-ray", w: 7, color: "#8b5cf6" },
  { name: "UV", w: 8, color: "#a855f7" },
  { name: "Visible", w: 9, color: "#06b6d4" },
  { name: "Infrared", w: 24, color: "#f59e0b" },
  { name: "Microwave", w: 30, color: "#ef4444" },
  { name: "Radio", w: 56, color: "#f97316" },
];

export function SpectrumBandFigure() {
  let x = 8;
  const total = BANDS.reduce((s, b) => s + b.w, 0);
  const width = 500;
  const scale = width / total;
  return (
    <figure className="my-2 w-fit max-w-full rounded-xl border border-border/70 bg-card p-3">
      <svg
        viewBox="0 0 528 96"
        role="img"
        aria-label="Electromagnetic spectrum from gamma rays to radio waves"
        className="mx-auto h-auto w-full max-w-[560px]"
      >
        <rect x="4" y="10" width="520" height="26" rx="6" fill="none" stroke={LABEL} strokeWidth="1" />
        {BANDS.map((b) => {
          const w = b.w * scale;
          const el = (
            <g key={b.name}>
              <rect x={x} y="11" width={w} height="24" rx="2" fill={b.color} opacity="0.75" />
              <text x={x + w / 2} y="27" fontSize="8.5" textAnchor="middle" fill="#fff" fontWeight="700">
                {b.name.replace("X-ray", "X\u2011ray")}
              </text>
            </g>
          );
          x += w;
          return el;
        })}
        <text x="10" y="52" fontSize="9" fill={LABEL}>10&#8315;&#185;&#8304; m</text>
        <text x="490" y="52" fontSize="9" textAnchor="end" fill={LABEL}>10&#8314;&#8303; m</text>
        <text x="264" y="74" fontSize="9.5" textAnchor="middle" fill={LABEL}>
          decreasing frequency &nbsp;&#8592;&nbsp;&nbsp; increasing wavelength &#8594;
        </text>
        <text x="264" y="90" fontSize="8.5" textAnchor="middle" fill={LABEL}>
          (schematic — not to scale)
        </text>
      </svg>
      <figcaption className="mt-1 text-center text-xs font-bold text-muted-foreground">
        The electromagnetic spectrum — no sharp boundaries between bands
      </figcaption>
    </figure>
  );
}

export function ChargingCapacitorFigure() {
  return (
    <figure className="my-2 w-fit max-w-full rounded-xl border border-border/70 bg-card p-3">
      <svg
        viewBox="0 0 360 150"
        role="img"
        aria-label="Parallel plate capacitor being charged, with a circular Ampere loop around it"
        className="mx-auto h-auto w-full max-w-[360px]"
      >
        {/* capacitor plates */}
        <rect x="140" y="12" width="80" height="8" rx="2" fill="#94a3b8" />
        <rect x="140" y="130" width="80" height="8" rx="2" fill="#94a3b8" />
        {/* wire */}
        <line x1="180" y1="20" x2="180" y2="0" stroke={AXIS} strokeWidth="2" />
        <line x1="180" y1="138" x2="180" y2="150" stroke={AXIS} strokeWidth="2" />
        {/* E field between plates */}
        <line x1="160" y1="132" x2="160" y2="20" stroke={E_COLOR} strokeWidth="1.2" className="e-arrow" />
        <line x1="180" y1="132" x2="180" y2="20" stroke={E_COLOR} strokeWidth="1.2" className="e-arrow" />
        <line x1="200" y1="132" x2="200" y2="20" stroke={E_COLOR} strokeWidth="1.2" className="e-arrow" />
        <polygon points="160,24 156,36 164,36" fill={E_COLOR} />
        <polygon points="180,24 176,36 184,36" fill={E_COLOR} />
        <polygon points="200,24 196,36 204,36" fill={E_COLOR} />
        <text x="212" y="72" fontSize="11" fill={E_COLOR}>E</text>
        {/* Ampere loop */}
        <ellipse cx="180" cy="75" rx="110" ry="34" fill="none" stroke={B_COLOR} strokeWidth="1.6" strokeDasharray="5 4" />
        <text x="286" y="52" fontSize="10" fill={B_COLOR}>loop &#961;</text>
        {/* current labels */}
        <text x="196" y="8" fontSize="10" fill={LABEL}>i(t)</text>
        <text x="196" y="148" fontSize="10" fill={LABEL}>i(t)</text>
      </svg>
      <figcaption className="mt-1 text-center text-xs font-bold text-muted-foreground">
        A parallel plate capacitor being charged — the Ampere loop sees different surfaces
      </figcaption>
    </figure>
  );
}