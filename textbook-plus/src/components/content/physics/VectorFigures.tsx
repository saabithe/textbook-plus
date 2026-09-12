const VEC = "#8b5cf6";
const VEC2 = "#10b981";
const REV = "#e11d48";
const AXIS = "var(--foreground)";
const LABEL = "var(--muted-foreground)";

export function VectorTypeFigures() {
  const cards = [
    {
      title: "Modulus",
      blurb: "The length of the vector — written |A| or simply A.",
      svg: (
        <svg viewBox="0 0 140 72" className="h-full w-full">
          <line x1="12" y1="28" x2="104" y2="28" stroke={VEC} strokeWidth="2.5" />
          <polygon points="104,28 92,22 92,34" fill={VEC} />
          <text x="114" y="32" fontSize="11" fill={LABEL}>A</text>
          <line x1="26" y1="52" x2="90" y2="52" stroke={LABEL} strokeWidth="1.2" />
          <line x1="26" y1="48" x2="26" y2="56" stroke={LABEL} strokeWidth="1.2" />
          <line x1="90" y1="48" x2="90" y2="56" stroke={LABEL} strokeWidth="1.2" />
          <text x="58" y="66" fontSize="10" textAnchor="middle" fill={LABEL}>|A|</text>
        </svg>
      ),
    },
    {
      title: "Unit vector",
      blurb: "Magnitude 1 along a direction — î, ĵ, k̂ along the axes.",
      svg: (
        <svg viewBox="0 0 140 72" className="h-full w-full">
          <circle cx="14" cy="30" r="2.5" fill={AXIS} />
          <line x1="14" y1="30" x2="66" y2="30" stroke={VEC} strokeWidth="2.5" />
          <polygon points="66,30 54,24 54,36" fill={VEC} />
          <text x="76" y="34" fontSize="11" fill={LABEL}>Â</text>
          <line x1="20" y1="52" x2="52" y2="52" stroke={LABEL} strokeWidth="1.2" />
          <line x1="20" y1="48" x2="20" y2="56" stroke={LABEL} strokeWidth="1.2" />
          <line x1="52" y1="48" x2="52" y2="56" stroke={LABEL} strokeWidth="1.2" />
          <text x="36" y="66" fontSize="10" textAnchor="middle" fill={LABEL}>1</text>
        </svg>
      ),
    },
    {
      title: "Equal vectors",
      blurb: "Same magnitude and same direction — A = B.",
      svg: (
        <svg viewBox="0 0 140 72" className="h-full w-full">
          <line x1="12" y1="22" x2="100" y2="22" stroke={VEC} strokeWidth="2.5" />
          <polygon points="100,22 88,16 88,28" fill={VEC} />
          <text x="108" y="26" fontSize="11" fill={LABEL}>A</text>
          <line x1="12" y1="52" x2="100" y2="52" stroke={VEC2} strokeWidth="2.5" />
          <polygon points="100,52 88,46 88,58" fill={VEC2} />
          <text x="108" y="56" fontSize="11" fill={LABEL}>B</text>
          <text x="56" y="14" fontSize="9" textAnchor="middle" fill={VEC2}>same length &amp; direction</text>
        </svg>
      ),
    },
    {
      title: "Null (zero) vector",
      blurb: "Zero magnitude, direction arbitrary — e.g. position of the origin.",
      svg: (
        <svg viewBox="0 0 140 72" className="h-full w-full">
          <circle cx="70" cy="30" r="3" fill={LABEL} />
          <text x="80" y="34" fontSize="12" fill={LABEL}>0</text>
          <text x="70" y="58" fontSize="11" textAnchor="middle" fill={LABEL}>|0| = 0</text>
        </svg>
      ),
    },
  ];
  return (
    <div className="my-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <figure key={c.title} className="rounded-xl border border-border/70 bg-card p-3">
          <div className="mx-auto h-16 w-full">{c.svg}</div>
          <figcaption className="mt-1">
            <p className="font-bold text-sm">{c.title}</p>
            <p className="text-xs text-muted-foreground">{c.blurb}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ScalarMultiplicationFigure() {
  return (
    <figure className="my-2 w-fit max-w-full rounded-xl border border-border/70 bg-card p-3">
      <svg
        viewBox="0 0 460 96"
        role="img"
        aria-label="Stretching a vector by positive and negative scalars"
        className="mx-auto h-auto w-full max-w-[480px]"
      >
        <circle cx="215" cy="58" r="2.5" fill={LABEL} />
        <text x="215" y="74" fontSize="9" textAnchor="middle" fill={LABEL}>0</text>

        <line x1="215" y1="58" x2="285" y2="58" stroke={VEC} strokeWidth="2" />
        <polygon points="285,58 273,52 273,64" fill={VEC} />
        <text x="250" y="44" fontSize="10.5" textAnchor="middle" fill={LABEL}>A</text>

        <line x1="215" y1="58" x2="355" y2="58" stroke={VEC} strokeWidth="2" />
        <polygon points="355,58 343,52 343,64" fill={VEC} />
        <text x="285" y="44" fontSize="10.5" textAnchor="middle" fill={LABEL}>2A</text>

        <line x1="215" y1="58" x2="145" y2="58" stroke={REV} strokeWidth="2" />
        <polygon points="145,58 157,52 157,64" fill={REV} />
        <text x="180" y="44" fontSize="10.5" textAnchor="middle" fill={LABEL}>−A</text>

        <line x1="215" y1="58" x2="110" y2="58" stroke={REV} strokeWidth="2" />
        <polygon points="110,58 122,52 122,64" fill={REV} />
        <text x="163" y="44" fontSize="10.5" textAnchor="middle" fill={LABEL}>−1.5A</text>
      </svg>
      <figcaption className="mt-1 text-center text-xs font-bold text-muted-foreground">
        2A stretches the same way · −A and −1.5A reverse the direction
      </figcaption>
    </figure>
  );
}

export function RectangularComponentsFigure() {
  return (
    <figure className="my-2 w-fit max-w-full rounded-xl border border-border/70 bg-card p-3">
      <svg
        viewBox="0 0 200 175"
        role="img"
        aria-label="Position vector broken into rectangular components"
        className="mx-auto h-auto w-full max-w-[220px]"
      >
        <line x1="30" y1="145" x2="185" y2="145" stroke={AXIS} strokeWidth="1.2" opacity="0.85" />
        <polygon points="185,145 173,139 173,151" fill={AXIS} />
        <line x1="30" y1="145" x2="30" y2="18" stroke={AXIS} strokeWidth="1.2" opacity="0.85" />
        <polygon points="30,18 24,30 36,30" fill={AXIS} />
        <text x="176" y="138" fontSize="11" fill={LABEL}>x</text>
        <text x="18" y="22" fontSize="11" fill={LABEL}>y</text>

        <line x1="30" y1="145" x2="150" y2="145" stroke={LABEL} strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1="150" y1="145" x2="150" y2="50" stroke={LABEL} strokeWidth="1.2" strokeDasharray="4 3" />

        <line x1="30" y1="145" x2="150" y2="50" stroke={VEC} strokeWidth="2.5" />
        <polygon points="150,50 137,47 141,60" fill={VEC} />
        <circle cx="150" cy="50" r="3.5" fill={AXIS} />

        <path d="M 55 145 A 25 25 0 0 0 52 127" fill="none" stroke={LABEL} strokeWidth="1.1" />
        <text x="63" y="134" fontSize="10.5" fill={LABEL}>θ</text>

        <text x="88" y="163" fontSize="10.5" fill={LABEL}>rₓî</text>
        <text x="160" y="100" fontSize="10.5" fill={LABEL}>r_yĵ</text>
        <text x="160" y="58" fontSize="12" fontWeight="700" fill={VEC}>r</text>
        <text x="16" y="130" fontSize="10.5" fill={LABEL}>O</text>
        <text x="156" y="44" fontSize="10.5" fill={LABEL}>P</text>
      </svg>
      <figcaption className="mt-1 text-center text-xs font-bold text-muted-foreground">
        r = rₓî + r_yĵ
      </figcaption>
    </figure>
  );
}

export function AdditionSubtractionFigure() {
  return (
    <figure className="my-2 w-fit max-w-full rounded-xl border border-border/70 bg-card p-3">
      <div className="grid gap-2 sm:grid-cols-2">
        <svg
          viewBox="0 0 170 100"
          role="img"
          aria-label="Triangle law: R = A + B closes the triangle"
          className="mx-auto h-auto w-full max-w-[200px]"
        >
          <line x1="15" y1="70" x2="65" y2="70" stroke={VEC} strokeWidth="2.2" />
          <polygon points="65,70 53,64 53,76" fill={VEC} />
          <line x1="65" y1="70" x2="95" y2="35" stroke={VEC2} strokeWidth="2.2" />
          <polygon points="95,35 83,32 87,45" fill={VEC2} />
          <line x1="15" y1="70" x2="95" y2="35" stroke={REV} strokeWidth="2.2" />
          <polygon points="95,35 80,33 87,48" fill={REV} />
          <text x="36" y="56" fontSize="11" fill={LABEL}>A</text>
          <text x="84" y="60" fontSize="11" fill={LABEL}>B</text>
          <text x="46" y="30" fontSize="11" fontWeight="700" fill={REV}>R = A + B</text>
        </svg>
        <svg
          viewBox="0 0 170 100"
          role="img"
          aria-label="Subtraction: A − B = A + (−B), draw B reversed"
          className="mx-auto h-auto w-full max-w-[200px]"
        >
          <line x1="15" y1="70" x2="70" y2="70" stroke={VEC} strokeWidth="2.2" />
          <polygon points="70,70 58,64 58,76" fill={VEC} />
          <line x1="70" y1="70" x2="100" y2="95" stroke={VEC2} strokeWidth="2.2" strokeDasharray="5 3" />
          <line x1="70" y1="70" x2="100" y2="45" stroke="#f59e0b" strokeWidth="2.2" />
          <polygon points="100,45 87,41 92,55" fill="#f59e0b" />
          <line x1="15" y1="70" x2="100" y2="45" stroke={REV} strokeWidth="2.2" />
          <polygon points="100,45 86,44 92,58" fill={REV} />
          <text x="38" y="56" fontSize="11" fill={LABEL}>A</text>
          <text x="98" y="60" fontSize="10" fill={LABEL}>−B</text>
          <text x="46" y="32" fontSize="11" fontWeight="700" fill={REV}>A − B</text>
        </svg>
      </div>
      <figcaption className="mt-1 text-center text-xs font-bold text-muted-foreground">
        Add: put B head-to-tail. Subtract: add the reversed −B.
      </figcaption>
    </figure>
  );
}