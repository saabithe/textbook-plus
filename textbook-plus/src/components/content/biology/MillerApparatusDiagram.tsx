const SKY = "#0ea5e9";
const AMBER = "#f59e0b";
const EMERALD = "#10b981";
const INK = "var(--foreground)";

/**
 * Tubing drawn as a dark casing with the card colour inside, so every pipe
 * reads as glass with two walls (1.5px each) at any width.
 */
function GlassPipe({ d }: { d: string }) {
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke={INK}
        strokeOpacity={0.55}
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={d}
        fill="none"
        stroke="var(--card)"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

interface MillerApparatusDiagramProps {
  title?: string;
  /** Scale the drawing down and centre it — use when the diagram is supporting, not the focus. */
  compact?: boolean;
}

export function MillerApparatusDiagram({
  title = "The Urey–Miller apparatus",
  compact = false,
}: MillerApparatusDiagramProps) {
  return (
    <div className="my-6 rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
      <p className="mb-3 text-sm font-extrabold tracking-tight text-foreground">{title}</p>

      <svg
        viewBox="0 0 620 420"
        className={compact ? "mx-auto h-auto w-full max-w-[19rem]" : "h-auto w-full"}
        role="img"
        aria-label="Schematic of the Urey–Miller apparatus: a large flask holding methane, ammonia, hydrogen and water vapour, with two electrodes and an electric spark; vapour passes right into a condenser and drips into a trap of water and organic compounds, while the mixture circulates back down to a boiling flask heated by a flame."
      >
        <title>{title} — spark chamber, condenser, trap and boiling flask</title>

        <defs>
          <clipPath id="miller-boil-clip">
            <circle cx={185} cy={318} r={33} />
          </clipPath>
          <clipPath id="miller-trap-clip">
            <circle cx={424} cy={330} r={29} />
          </clipPath>
        </defs>

        {/* ── circulation: trap -> boiling flask ───────────────────────── */}
        <GlassPipe d="M410 356 V392 H232 V324 H226" />
        <polygon points="219,324 231,318.5 231,329.5" fill={INK} fillOpacity={0.55} />

        {/* ── vapour: sparking flask -> condenser ──────────────────────── */}
        <GlassPipe d="M241 130 H420" />

        {/* ── glassware ────────────────────────────────────────────────── */}
        {/* boiling flask */}
        <circle
          cx={185}
          cy={318}
          r={35}
          fill={SKY}
          fillOpacity={0.1}
          stroke={INK}
          strokeOpacity={0.6}
          strokeWidth={2.2}
        />

        {/* sparking flask */}
        <circle
          cx={185}
          cy={185}
          r={78}
          fill={SKY}
          fillOpacity={0.1}
          stroke={INK}
          strokeOpacity={0.6}
          strokeWidth={2.2}
        />

        {/* necks: mouth of the sparking flask, and the join to the boiler */}
        <line x1={160} y1={80} x2={160} y2={111} stroke={INK} strokeOpacity={0.6} strokeWidth={2.2} />
        <line x1={210} y1={80} x2={210} y2={111} stroke={INK} strokeOpacity={0.6} strokeWidth={2.2} />
        <line x1={173} y1={262} x2={173} y2={289} stroke={INK} strokeOpacity={0.6} strokeWidth={2.2} />
        <line x1={197} y1={262} x2={197} y2={289} stroke={INK} strokeOpacity={0.6} strokeWidth={2.2} />

        {/* flow cue up the neck */}
        <path
          d="M179 281 L185 273 L191 281"
          fill="none"
          stroke={INK}
          strokeOpacity={0.32}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* electrodes (sealed through the stopper) */}
        <polyline
          points="170,38 170,140 175,152"
          fill="none"
          stroke={INK}
          strokeOpacity={0.75}
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="200,38 200,140 195,152"
          fill="none"
          stroke={INK}
          strokeOpacity={0.75}
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={170} cy={38} r={2.6} fill={INK} fillOpacity={0.5} />
        <circle cx={200} cy={38} r={2.6} fill={INK} fillOpacity={0.5} />

        {/* stopper */}
        <rect
          x={152}
          y={70}
          width={66}
          height={13}
          rx={3.5}
          fill={INK}
          fillOpacity={0.16}
          stroke={INK}
          strokeOpacity={0.45}
          strokeWidth={1.4}
        />

        {/* electric discharge */}
        <path
          d="M175 152 L178 144 L182 158 L186 144 L190 158 L193 146 L195 152"
          fill="none"
          stroke={AMBER}
          strokeOpacity={0.18}
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M175 152 L178 144 L182 158 L186 144 L190 158 L193 146 L195 152"
          fill="none"
          stroke={AMBER}
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={175} cy={152} r={2.2} fill={AMBER} />
        <circle cx={195} cy={152} r={2.2} fill={AMBER} />

        {/* condenser tube (open at the mouth, where the vapour pipe joins) */}
        <path
          d="M414 126 V284 H434 V126"
          fill={SKY}
          fillOpacity={0.1}
          stroke={INK}
          strokeOpacity={0.6}
          strokeWidth={2}
          strokeLinejoin="round"
        />
        {/* cooling-water jacket */}
        <rect
          x={404}
          y={150}
          width={40}
          height={112}
          rx={10}
          fill={SKY}
          fillOpacity={0.16}
          stroke={INK}
          strokeOpacity={0.5}
          strokeWidth={1.6}
        />
        <line x1={414} y1={160} x2={414} y2={252} stroke={INK} strokeOpacity={0.45} strokeWidth={1.4} />
        <line x1={434} y1={160} x2={434} y2={252} stroke={INK} strokeOpacity={0.45} strokeWidth={1.4} />

        {/* trap flask */}
        <line x1={414} y1={284} x2={414} y2={306} stroke={INK} strokeOpacity={0.6} strokeWidth={2} />
        <line x1={434} y1={284} x2={434} y2={306} stroke={INK} strokeOpacity={0.6} strokeWidth={2} />
        <circle
          cx={424}
          cy={330}
          r={31}
          fill={SKY}
          fillOpacity={0.1}
          stroke={INK}
          strokeOpacity={0.6}
          strokeWidth={2.2}
        />

        {/* ── contents ────────────────────────────────────────────────── */}
        {/* water in the boiler */}
        <g clipPath="url(#miller-boil-clip)">
          <rect x={150} y={312} width={70} height={46} fill={SKY} fillOpacity={0.28} />
          <path
            d="M150 312 q9 -5 18 0 t18 0 t18 0"
            fill="none"
            stroke={SKY}
            strokeOpacity={0.8}
            strokeWidth={1.8}
          />
          <circle cx={172} cy={334} r={3} fill="none" stroke={SKY} strokeOpacity={0.7} strokeWidth={1.3} />
          <circle cx={192} cy={325} r={2.4} fill="none" stroke={SKY} strokeOpacity={0.7} strokeWidth={1.3} />
          <circle cx={199} cy={342} r={3.2} fill="none" stroke={SKY} strokeOpacity={0.7} strokeWidth={1.3} />
        </g>

        {/* organic layer in the trap */}
        <g clipPath="url(#miller-trap-clip)">
          <rect x={392} y={320} width={64} height={46} fill={EMERALD} fillOpacity={0.35} />
          <path
            d="M392 320 q8 -4 16 0 t16 0 t16 0"
            fill="none"
            stroke={EMERALD}
            strokeOpacity={0.9}
            strokeWidth={1.8}
          />
        </g>
        {/* falling drop of condensate */}
        <circle cx={424} cy={294} r={2.6} fill={EMERALD} />
        <line x1={424} y1={285} x2={424} y2={289} stroke={EMERALD} strokeOpacity={0.5} strokeWidth={1.6} />

        {/* ── heat source ─────────────────────────────────────────────── */}
        <path
          d="M185 355 C172 363 167 373 174 380 C178 384 182 386 185 386 C189 386 195 384 198 379 C203 372 196 364 185 355 Z"
          fill={AMBER}
          fillOpacity={0.22}
          stroke={AMBER}
          strokeOpacity={0.7}
          strokeWidth={1.6}
        />
        <path
          d="M185 366 C179 370 177 375 180 379 C182 382 186 383 188 381 C191 378 190 372 185 366 Z"
          fill={AMBER}
          fillOpacity={0.55}
        />

        {/* ── labels ──────────────────────────────────────────────────── */}
        {/* inside the sparking flask */}
        <text
          x={185}
          y={177}
          fontSize={11}
          fontWeight={600}
          textAnchor="middle"
          fill="var(--muted-foreground)"
        >
          electric discharge
        </text>
        <text
          x={185}
          y={192}
          fontSize={11}
          fontWeight={600}
          textAnchor="middle"
          fill="var(--muted-foreground)"
        >
          (lightning)
        </text>
        <text
          x={185}
          y={216}
          fontSize={12}
          fontWeight={700}
          textAnchor="middle"
          fill={INK}
          fillOpacity={0.85}
        >
          CH₄ + NH₃ + H₂
        </text>
        <text
          x={185}
          y={233}
          fontSize={12}
          fontWeight={700}
          textAnchor="middle"
          fill={INK}
          fillOpacity={0.85}
        >
          + H₂O vapour
        </text>

        {/* vapour pipe */}
        <text
          x={392}
          y={120}
          fontSize={11}
          fontWeight={600}
          textAnchor="end"
          fill="var(--muted-foreground)"
        >
          vapour
        </text>
        <path
          d="M395 115 L401 120 L395 125"
          fill="none"
          stroke={INK}
          strokeOpacity={0.35}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* condenser */}
        <text x={452} y={196} fontSize={12} fontWeight={800} fill={INK}>
          condenser
        </text>
        <text x={452} y={214} fontSize={11} fontWeight={600} fill="var(--muted-foreground)">
          cooling water
        </text>

        {/* trap */}
        <text x={460} y={320} fontSize={12} fontWeight={800} fill={INK}>
          trap
        </text>
        <text x={460} y={337} fontSize={11} fontWeight={600} fill="var(--muted-foreground)">
          water + organic
        </text>
        <text x={460} y={352} fontSize={11} fontWeight={600} fill="var(--muted-foreground)">
          compounds
        </text>

        {/* boiler */}
        <text x={140} y={322} fontSize={11} fontWeight={700} textAnchor="end" fill={INK}>
          boiling water
        </text>

        {/* circulation */}
        <text
          x={300}
          y={381}
          fontSize={11}
          fontWeight={600}
          textAnchor="middle"
          fill="var(--muted-foreground)"
        >
          circulation
        </text>
      </svg>
    </div>
  );
}
