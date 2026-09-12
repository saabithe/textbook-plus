const NORM = "#8b5cf6";
const NORM_DIM = "#c084fc";
const FRIC = "#10b981";
const WEIGHT = "#e11d48";
const VEL = "#3b82f6";
const BODY = "#334155";
const WHEEL = "#0f172a";
const LABEL = "var(--muted-foreground)";
const ROAD = "#94a3b8";

const Arrow = ({ x1, y1, x2, y2, color }: { x1: number; y1: number; x2: number; y2: number; color: string }) => {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2.2" markerEnd="url(#lom-head)" />
  );
};

export function LevelRoadFigure() {
  return (
    <figure className="my-4">
      <div className="mx-auto max-w-xl rounded-xl border border-border/70 bg-card p-3">
        <svg viewBox="0 0 320 150" className="h-auto w-full">
          <defs>
            <marker id="lom-head" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 z" fill="context-stroke" />
            </marker>
          </defs>
          <rect x="30" y="118" width="260" height="16" fill={ROAD} opacity="0.35" />
          <line x1="30" y1="118" x2="290" y2="118" stroke={ROAD} strokeWidth="2" />
          <rect x="128" y="88" width="56" height="18" rx="5" fill={BODY} />
          <rect x="140" y="54" width="32" height="34" rx="4" fill={BODY} />
          <circle cx="140" cy="118" r="8" fill={WHEEL} />
          <circle cx="168" cy="118" r="8" fill={WHEEL} />
          <Arrow x1={148} y1={84} x2={148} y2={122} color={WEIGHT} />
          <text x="128" y="128" fontSize="11" fill={LABEL}>W = mg</text>
          <Arrow x1={180} y1={122} x2={180} y2={88} color={NORM} />
          <text x="188" y="106" fontSize="11" fill={LABEL}>N</text>
          <line x1="156" y1="112" x2="112" y2="112" stroke={FRIC} strokeWidth="2.2" />
          <polygon points="112,112 122,106.5 122,117.5" fill={FRIC} />
          <text x="96" y="104" fontSize="11" fill={FRIC}>fₛ — friction</text>
          <text x="96" y="116" fontSize="10" fill={LABEL}>towards centre</text>
        </svg>
      </div>
      <figcaption className="mx-auto mt-1 max-w-xl text-center text-xs text-muted-foreground">
        Forces on a car turning on a level circular road — static friction alone supplies the centripetal force.
      </figcaption>
    </figure>
  );
}

export function BankedRoadFigure() {
  return (
    <figure className="my-4">
      <div className="mx-auto max-w-xl rounded-xl border border-border/70 bg-card p-3">
        <svg viewBox="0 0 320 170" className="h-auto w-full">
          <polygon points="40,150 260,58 260,160 40,160" fill="#94a3b8" opacity="0.30" />
          <line x1="40" y1="150" x2="260" y2="58" stroke={ROAD} strokeWidth="2.4" />
          <line x1="40" y1="150" x2="110" y2="150" stroke={LABEL} strokeWidth="1.1" strokeDasharray="4 3" />
          <path d="M 50 150 Q 58 140 68 139" fill="none" stroke={LABEL} strokeWidth="1.1" />
          <text x="76" y="148" fontSize="11" fill={LABEL}>θ</text>
          <g transform="rotate(-23 180 92)">
            <rect x="158" y="70" width="44" height="16" rx="4" fill={BODY} />
            <circle cx="168" cy="86" r="5.5" fill={WHEEL} />
            <circle cx="192" cy="86" r="5.5" fill={WHEEL} />
          </g>
          <Arrow x1={180} y1={84} x2={180} y2={136} color={WEIGHT} />
          <text x="152" y="148" fontSize="11" fill={LABEL}>B = W = mg</text>
          <Arrow x1={180} y1={86} x2={157} y2={27} color={NORM} />
          <text x="118" y="20" fontSize="11" fill={LABEL}>A = N</text>
          <line x1="157" y1="27" x2="157" y2="86" stroke={NORM_DIM} strokeWidth="1.1" strokeDasharray="4 3" />
          <line x1="157" y1="86" x2="180" y2="86" stroke={NORM_DIM} strokeWidth="1.1" strokeDasharray="4 3" />
          <polygon points="157,86 167,80.5 167,91.5" fill={NORM_DIM} />
          <text x="188" y="54" fontSize="10" fill={NORM_DIM}>N cosθ</text>
          <text x="162" y="80" fontSize="10" fill={NORM_DIM}>N sinθ</text>
          <Arrow x1={182} y1={96} x2={140} y2={114} color={FRIC} />
          <text x="118" y="120" fontSize="11" fill={FRIC}>F = f</text>
          <text x="196" y="160" fontSize="10" fill={LABEL}>centre of turn ←</text>
        </svg>
      </div>
      <figcaption className="mx-auto mt-1 max-w-xl text-center text-xs text-muted-foreground">
        Forces on a car on a banked road — N and friction F together provide the centripetal force; N sinθ and F cosθ
        act horizontally towards the centre.
      </figcaption>
    </figure>
  );
}

export function RecoilFigure() {
  return (
    <figure className="my-4">
      <div className="mx-auto max-w-xl rounded-xl border border-border/70 bg-card p-3">
        <svg viewBox="0 0 320 120" className="h-auto w-full">
          <rect x="46" y="58" width="70" height="20" rx="5" fill={BODY} />
          <rect x="110" y="63" width="36" height="10" fill={BODY} />
          <circle cx="154" cy="68" r="5" fill={VEL} />
          <Arrow x1={166} y1={68} x2={214} y2={68} color={VEL} />
          <text x="224" y="64" fontSize="11" fill={VEL}>vᵦ</text>
          <Arrow x1={124} y1={38} x2={82} y2={38} color={WEIGHT} />
          <text x="74" y="32" fontSize="11" fill={WEIGHT}>v_g (recoil)</text>
          <text x="81" y="96" fontSize="11" fill={LABEL}>gun</text>
        </svg>
      </div>
      <figcaption className="mx-auto mt-1 max-w-xl text-center text-xs text-muted-foreground">
        Firing a bullet forward pushes the gun backward — momentum of the (gun + bullet) system stays zero.
      </figcaption>
    </figure>
  );
}