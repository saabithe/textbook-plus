import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";

/* ---------- local inline figures (no shared component files) ---------- */

function FigureShell({
  number,
  caption,
  children,
}: {
  number: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-border/40 bg-card">
      <div className="border-b border-border/40 bg-muted/20 px-4 py-2.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
        {number}
      </div>
      <div className="px-3 py-3">{children}</div>
      <figcaption className="px-4 pb-3 text-center text-xs text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

function ViCurves() {
  return (
    <svg
      viewBox="0 0 430 150"
      className="w-full text-foreground/70"
      role="img"
      aria-label="Voltage against current for a good conductor, a diode and GaAs"
    >
      <g stroke="currentColor" strokeWidth={1.2} fill="none">
        <line x1="22" y1="125" x2="122" y2="125" />
        <line x1="22" y1="125" x2="22" y2="30" />
        <line x1="160" y1="78" x2="292" y2="78" />
        <line x1="222" y1="132" x2="222" y2="28" />
        <line x1="322" y1="125" x2="420" y2="125" />
        <line x1="322" y1="125" x2="322" y2="30" />
      </g>
      <line x1="22" y1="125" x2="112" y2="38" stroke="#8b5cf6" strokeWidth={1.4} strokeDasharray="4 3" />
      <path d="M22 125 L 70 88 Q 100 66 114 48" stroke="currentColor" strokeWidth={1.8} fill="none" />
      <path d="M222 78 Q 258 76 288 34" stroke="currentColor" strokeWidth={1.8} fill="none" />
      <path d="M222 78 Q 196 80 168 122" stroke="#e11d48" strokeWidth={1.8} fill="none" />
      <path
        d="M322 125 C 352 108 392 86 392 62 C 392 42 360 40 336 62"
        stroke="currentColor"
        strokeWidth={1.8}
        fill="none"
      />
      <g fontSize={11} fill="currentColor">
        <text x="126" y="129">I</text>
        <text x="26" y="26">V</text>
        <text x="296" y="82">I</text>
        <text x="226" y="24">V</text>
        <text x="424" y="129">I</text>
        <text x="326" y="26">V</text>
      </g>
    </svg>
  );
}

function CylinderFieldFigure() {
  return (
    <svg
      viewBox="0 0 360 150"
      className="w-full text-foreground/70"
      role="img"
      aria-label="Metallic cylinder with charge plus Q on one face and minus Q on the other"
    >
      <rect x="60" y="45" width="240" height="62" fill="none" stroke="currentColor" strokeWidth={1.4} />
      <ellipse cx="60" cy="76" rx="12" ry="31" fill="none" stroke="currentColor" strokeWidth={1.4} />
      <ellipse cx="300" cy="76" rx="12" ry="31" fill="none" stroke="currentColor" strokeWidth={1.4} />
      <line x1="48" y1="41" x2="48" y2="111" stroke="#10b981" strokeWidth={3} />
      <line x1="312" y1="41" x2="312" y2="111" stroke="#e11d48" strokeWidth={3} />
      <defs>
        <marker id="arrow3-1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="currentColor" />
        </marker>
      </defs>
      <line x1="120" y1="76" x2="240" y2="76" stroke="currentColor" strokeWidth={1.4} markerEnd="url(#arrow3-1)" />
      <line x1="230" y1="100" x2="130" y2="100" stroke="#8b5cf6" strokeWidth={1.4} markerEnd="url(#arrow3-1)" strokeDasharray="5 3" />
      <g fontSize={12} fill="currentColor">
        <text x="30" y="76">+Q</text>
        <text x="316" y="76">−Q</text>
        <text x="176" y="70">E</text>
        <text x="160" y="118">electrons drift</text>
      </g>
    </svg>
  );
}

function DriftPathFigure() {
  return (
    <svg
      viewBox="0 0 360 170"
      className="w-full text-foreground/70"
      role="img"
      aria-label="Zig-zag electron path between collisions with and without an electric field"
    >
      <path
        d="M28 128 L 68 62 L 106 108 L 146 52 L 184 98 L 222 44 L 258 88 L 296 52"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <path
        d="M28 128 L 62 62 L 94 108 L 128 52 L 160 98 L 190 44 L 220 88 L 246 60"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth={1.6}
        strokeDasharray="5 4"
      />
      {[
        [68, 62],
        [106, 108],
        [146, 52],
        [184, 98],
        [222, 44],
        [258, 88],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={2.6} fill="currentColor" />
      ))}
      <circle cx="28" cy="128" r="3.4" fill="#10b981" />
      <circle cx="296" cy="52" r="3.4" fill="#e11d48" />
      <circle cx="246" cy="60" r="3.4" fill="#8b5cf6" />
      <defs>
        <marker id="arrow3-3" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="currentColor" />
        </marker>
      </defs>
      <line x1="60" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth={1.4} markerEnd="url(#arrow3-3)" />
      <g fontSize={12} fill="currentColor">
        <text x="286" y="154">E</text>
        <text x="18" y="142">A</text>
        <text x="300" y="42">B</text>
        <text x="236" y="76">B′</text>
      </g>
    </svg>
  );
}

function TemperatureGraphs() {
  return (
    <svg
      viewBox="0 0 430 150"
      className="w-full text-foreground/70"
      role="img"
      aria-label="Resistivity against temperature for copper, nichrome and a semiconductor"
    >
      <g stroke="currentColor" strokeWidth={1.2} fill="none">
        <line x1="26" y1="120" x2="120" y2="120" />
        <line x1="26" y1="120" x2="26" y2="30" />
        <line x1="166" y1="120" x2="262" y2="120" />
        <line x1="166" y1="120" x2="166" y2="30" />
        <line x1="308" y1="120" x2="404" y2="120" />
        <line x1="308" y1="120" x2="308" y2="30" />
      </g>
      <path d="M26 114 C 52 96 74 58 116 34" stroke="currentColor" strokeWidth={1.9} fill="none" />
      <line x1="60" y1="86" x2="112" y2="40" stroke="#8b5cf6" strokeWidth={1.1} strokeDasharray="4 3" />
      <path d="M166 78 L 256 64" stroke="currentColor" strokeWidth={1.9} fill="none" />
      <path d="M308 34 C 340 46 366 92 400 114" stroke="currentColor" strokeWidth={1.9} fill="none" />
      <g fontSize={11} fill="currentColor">
        <text x="124" y="124">T</text>
        <text x="30" y="26">ρ</text>
        <text x="266" y="124">T</text>
        <text x="170" y="26">ρ</text>
        <text x="408" y="124">T</text>
        <text x="312" y="26">ρ</text>
      </g>
      <g fontSize={10} fill="currentColor">
        <text x="40" y="140">copper</text>
        <text x="180" y="140">nichrome</text>
        <text x="316" y="140">semiconductor</text>
      </g>
    </svg>
  );
}

function CellTerminalFigure() {
  return (
    <svg
      viewBox="0 0 360 160"
      className="w-full text-foreground/70"
      role="img"
      aria-label="Cell with internal resistance driving current through an external resistor"
    >
      <path d="M60 40 H 300 V 130 H 60 Z" fill="none" stroke="currentColor" strokeWidth={1.4} />
      <line x1="118" y1="32" x2="118" y2="48" stroke="currentColor" strokeWidth={2.4} />
      <line x1="134" y1="36" x2="134" y2="44" stroke="currentColor" strokeWidth={2.4} />
      <rect x="238" y="30" width="28" height="20" fill="none" stroke="currentColor" strokeWidth={1.4} />
      <defs>
        <marker id="arrow3-12" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="currentColor" />
        </marker>
      </defs>
      <line x1="170" y1="40" x2="150" y2="40" stroke="#8b5cf6" strokeWidth={1.4} markerEnd="url(#arrow3-12)" />
      <line x1="170" y1="130" x2="210" y2="130" stroke="#8b5cf6" strokeWidth={1.4} markerEnd="url(#arrow3-12)" />
      <g fontSize={11} fill="currentColor">
        <text x="96" y="26">P (+)</text>
        <text x="146" y="26">N (−)</text>
        <text x="236" y="22">R</text>
        <text x="152" y="62">ε, r</text>
        <text x="176" y="146">I</text>
      </g>
    </svg>
  );
}

function CellsComboFigure() {
  return (
    <svg
      viewBox="0 0 430 170"
      className="w-full text-foreground/70"
      role="img"
      aria-label="Two cells in series and two cells in parallel"
    >
      <g stroke="currentColor" strokeWidth={1.4} fill="none">
        <line x1="20" y1="45" x2="60" y2="45" />
        <line x1="60" y1="35" x2="60" y2="55" />
        <line x1="70" y1="39" x2="70" y2="51" />
        <line x1="70" y1="45" x2="120" y2="45" />
        <line x1="120" y1="35" x2="120" y2="55" />
        <line x1="130" y1="39" x2="130" y2="51" />
        <line x1="130" y1="45" x2="180" y2="45" />
      </g>
      <g fontSize={11} fill="currentColor">
        <text x="52" y="26">ε₁, r₁</text>
        <text x="112" y="26">ε₂, r₂</text>
        <text x="120" y="72">series</text>
        <text x="20" y="72">A</text>
        <text x="176" y="72">C</text>
      </g>
      <g stroke="currentColor" strokeWidth={1.4} fill="none">
        <line x1="250" y1="35" x2="250" y2="80" />
        <line x1="250" y1="35" x2="400" y2="35" />
        <line x1="250" y1="80" x2="400" y2="80" />
        <line x1="250" y1="35" x2="250" y2="80" />
      </g>
      <line x1="250" y1="52" x2="250" y2="36" stroke="currentColor" strokeWidth={2.4} />
      <g stroke="currentColor" strokeWidth={1.4} fill="none">
        <line x1="282" y1="35" x2="282" y2="80" />
        <line x1="282" y1="35" x2="356" y2="35" />
        <line x1="282" y1="80" x2="356" y2="80" />
        <line x1="356" y1="35" x2="356" y2="80" />
      </g>
      <line x1="320" y1="42" x2="320" y2="48" stroke="currentColor" strokeWidth={2.4} />
      <line x1="284" y1="56" x2="284" y2="40" stroke="currentColor" strokeWidth={2.4} />
      <line x1="354" y1="56" x2="354" y2="40" stroke="currentColor" strokeWidth={2.4} />
      <g fontSize={11} fill="currentColor">
        <text x="238" y="26">ε₁, r₁</text>
        <text x="344" y="26">ε₂, r₂</text>
        <text x="330" y="100">parallel</text>
        <text x="232" y="100">B₁</text>
        <text x="368" y="100">B₂</text>
      </g>
    </svg>
  );
}

function KirchhoffFigure() {
  return (
    <svg
      viewBox="0 0 430 170"
      className="w-full text-foreground/70"
      role="img"
      aria-label="Junction rule at a node and loop rule around a closed circuit"
    >
      <g stroke="currentColor" strokeWidth={1.4} fill="none">
        <line x1="20" y1="80" x2="80" y2="80" />
        <line x1="80" y1="80" x2="140" y2="40" />
        <line x1="80" y1="80" x2="140" y2="120" />
      </g>
      <defs>
        <marker id="arrow3-15" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="currentColor" />
        </marker>
      </defs>
      <line x1="34" y1="80" x2="58" y2="80" stroke="#10b981" strokeWidth={1.6} markerEnd="url(#arrow3-15)" />
      <line x1="78" y1="72" x2="104" y2="44" stroke="#8b5cf6" strokeWidth={1.6} markerEnd="url(#arrow3-15)" />
      <line x1="78" y1="88" x2="104" y2="116" stroke="#8b5cf6" strokeWidth={1.6} markerEnd="url(#arrow3-15)" />
      <circle cx="80" cy="80" r="3.6" fill="currentColor" />
      <g fontSize={11} fill="currentColor">
        <text x="30" y="70">I₃</text>
        <text x="112" y="36">I₁</text>
        <text x="112" y="136">I₂</text>
        <text x="58" y="158">junction rule</text>
      </g>
      <g stroke="currentColor" strokeWidth={1.4} fill="none">
        <rect x="250" y="35" width="140" height="90" rx="4" />
      </g>
      <rect x="286" y="28" width="26" height="14" fill="none" stroke="currentColor" strokeWidth={1.3} />
      <line x1="372" y1="60" x2="372" y2="76" stroke="currentColor" strokeWidth={2.2} />
      <line x1="380" y1="63" x2="380" y2="73" stroke="currentColor" strokeWidth={2.2} />
      <line x1="266" y1="104" x2="300" y2="104" stroke="currentColor" strokeWidth={1.4} markerEnd="url(#arrow3-15)" />
      <g fontSize={11} fill="currentColor">
        <text x="292" y="22">R₁</text>
        <text x="360" y="100">ε</text>
        <text x="304" y="146">loop rule</text>
      </g>
    </svg>
  );
}

function CubeNetworkFigure() {
  return (
    <svg
      viewBox="0 0 360 230"
      className="w-full text-foreground/70"
      role="img"
      aria-label="Cube of twelve equal resistors with the battery across diagonally opposite corners"
    >
      <g stroke="currentColor" strokeWidth={1.4} fill="none">
        <rect x="60" y="70" width="140" height="120" />
        <rect x="140" y="30" width="140" height="120" />
        <line x1="60" y1="70" x2="140" y2="30" />
        <line x1="200" y1="70" x2="280" y2="30" />
        <line x1="200" y1="190" x2="280" y2="150" />
        <line x1="60" y1="190" x2="140" y2="150" />
      </g>
      {[
        [60, 70],
        [200, 70],
        [200, 190],
        [60, 190],
        [140, 30],
        [280, 30],
        [280, 150],
        [140, 150],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={3.4} fill="currentColor" />
      ))}
      <g fontSize={12} fill="currentColor">
        <text x="44" y="64">A</text>
        <text x="206" y="64">B</text>
        <text x="206" y="206">C</text>
        <text x="42" y="206">D</text>
        <text x="126" y="22">E</text>
        <text x="284" y="22">F</text>
        <text x="286" y="148">G</text>
        <text x="126" y="148">H</text>
      </g>
      <line x1="30" y1="88" x2="30" y2="172" stroke="#10b981" strokeWidth={2.2} />
      <line x1="36" y1="88" x2="36" y2="172" stroke="#10b981" strokeWidth={2.2} strokeDasharray="3 4" />
      <g fontSize={10} fill="currentColor">
        <text x="10" y="130">ε</text>
      </g>
    </svg>
  );
}

function WheatstoneFigure() {
  return (
    <svg
      viewBox="0 0 360 220"
      className="w-full text-foreground/70"
      role="img"
      aria-label="Wheatstone bridge with four resistors, a galvanometer and a battery"
    >
      <path d="M180 30 L 300 110 L 180 190 L 60 110 Z" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1="180" y1="30" x2="180" y2="190" stroke="currentColor" strokeWidth={1.2} strokeDasharray="4 4" />
      <line x1="60" y1="110" x2="300" y2="110" stroke="currentColor" strokeWidth={1.2} strokeDasharray="4 4" />
      <circle cx="180" cy="110" r="11" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <circle cx="180" cy="30" r="3" fill="currentColor" />
      <circle cx="300" cy="110" r="3" fill="currentColor" />
      <circle cx="180" cy="190" r="3" fill="currentColor" />
      <circle cx="60" cy="110" r="3" fill="currentColor" />
      <line x1="26" y1="70" x2="26" y2="90" stroke="#10b981" strokeWidth={2.2} />
      <line x1="32" y1="74" x2="32" y2="86" stroke="#10b981" strokeWidth={2.2} />
      <g fontSize={12} fill="currentColor">
        <text x="172" y="22">A</text>
        <text x="308" y="106">B</text>
        <text x="172" y="208">C</text>
        <text x="40" y="106">D</text>
        <text x="150" y="96">G</text>
        <text x="120" y="66">R₁</text>
        <text x="248" y="66">R₂</text>
        <text x="240" y="160">R₄</text>
        <text x="96" y="160">R₃</text>
        <text x="14" y="130">ε</text>
      </g>
    </svg>
  );
}

/* ---------- chapter ---------- */

export default function CurrentElectricityChapter() {
  return (
    <>
      <h2 id="h-3-1">3.1 Introduction</h2>
      <Callout type="important">
        Charges in motion constitute an electric current.
      </Callout>
      <ul>
        <li>In Chapter 1 all charges, whether free or bound, were considered to be at rest.</li>
        <li>Lightning is a natural current: charges flow from the clouds to the earth through the atmosphere, sometimes with disastrous results.</li>
        <li>The flow of charges in lightning is not steady.</li>
        <li>A torch and a cell-driven clock carry charges in a steady manner, like water flowing smoothly in a river.</li>
        <li>This chapter studies the basic laws concerning <strong>steady electric currents</strong>.</li>
      </ul>

      <h2 id="h-3-2">3.2 Electric Current</h2>
      <p>
        Imagine a small area <Highlight>held normal to the direction of flow of charges</Highlight>. Both the positive
        and the negative charges may flow forward and backward across the area.
      </p>
      <ul>
        <li>In a time interval <Formula>{String.raw`t`}</Formula>, let <Formula>{String.raw`q_{+}`}</Formula> be the net amount (forward minus backward) of positive charge that flows in the forward direction across the area.</li>
        <li>Let <Formula>{String.raw`q_{-}`}</Formula> be the net amount of negative charge flowing across the area in the forward direction.</li>
        <li>The net charge crossing the area forward in time <Formula>{String.raw`t`}</Formula> is then <Formula>{String.raw`q = q_{+} - q_{-}`}</Formula>.</li>
        <li>For a steady current this net charge is proportional to <Formula>{String.raw`t`}</Formula>, and the quotient <Formula>{String.raw`q/t`}</Formula> is defined to be the current across the area in the forward direction.</li>
        <li>If the quotient turns out to be negative, it implies a current in the backward direction.</li>
      </ul>
      <FormulaBlock latex={String.raw`I = \frac{q}{t}`} tag="3.1" />
      <p>Currents are not always steady, so the current is defined more generally:</p>
      <Callout type="important">
        Let <Formula>{String.raw`\Delta Q`}</Formula> be the net charge flowing across a cross-section of a conductor during the
        time interval <Formula>{String.raw`\Delta t`}</Formula> (i.e. between times <Formula>{String.raw`t`}</Formula> and{" "}
        <Formula>{String.raw`t + \Delta t`}</Formula>). Then, the current at time <Formula>{String.raw`t`}</Formula> across the
        cross-section of the conductor is defined as the value of the ratio of <Formula>{String.raw`\Delta Q`}</Formula> to{" "}
        <Formula>{String.raw`\Delta t`}</Formula> in the limit of <Formula>{String.raw`\Delta t`}</Formula> tending to zero.
      </Callout>
      <FormulaBlock latex={String.raw`I(t) \equiv \lim_{\Delta t \to 0} \frac{\Delta Q}{\Delta t}`} important tag="3.2" />
      <ul>
        <li>In SI units the unit of current is the <strong>ampere</strong> (A).</li>
        <li>An ampere is defined through the magnetic effects of currents (Chapter 4).</li>
        <li>1 A is typically the order of magnitude of currents in domestic appliances.</li>
      </ul>
      <TableCard
        title="How large are currents in practice?"
        headers={["Situation", "Order of magnitude of current"]}
        rows={[
          { cells: ["Domestic appliances", "About 1 A"] },
          { cells: ["Average lightning", "Tens of thousands of amperes"] },
          { cells: ["Currents in our nerves", "A few microamperes"] },
        ]}
        caption="The ampere spans an enormous range: from microamperes in nerves to tens of thousands of amperes in a lightning stroke."
      />
      <MistakeCard
        mistake="Treating current as a vector because it is drawn with an arrow."
        correction="Current is a scalar. It is the scalar product of two vectors, I = j · ΔS, and currents add algebraically, not by vector addition. The arrow only shows the sense of flow along the wire."
      />

      <h2 id="h-3-3">3.3 Electric Currents in Conductors</h2>
      <ul>
        <li>A charge experiences a force in an electric field; if it is free to move, it moves and contributes to a current.</li>
        <li>Free charged particles do exist in nature — for example in the upper strata of the atmosphere called the <strong>ionosphere</strong>.</li>
        <li>In atoms and molecules the electrons and the positively charged nuclei are bound to each other and are not free to move.</li>
        <li>A gram of water contains approximately <Formula>{String.raw`10^{22}`}</Formula> molecules, packed so closely that electrons are no longer attached to individual nuclei.</li>
        <li>In some materials electrons stay bound; in metals some electrons are practically free to move within the bulk material — such materials are called <strong>conductors</strong>.</li>
        <li>In solid conductors the current is carried by the <strong>negatively charged electrons</strong>; in electrolytic solutions both positive and negative charges can move.</li>
      </ul>
      <Callout type="note">
        This chapter deals only with <strong>solid conductors</strong>, so the current is carried by electrons in the
        background of fixed positive ions.
      </Callout>
      <Comparison
        columns={[
          {
            title: "No electric field",
            children: (
              <ul>
                <li>Electrons move due to thermal motion and collide with the fixed ions.</li>
                <li>An electron emerges from a collision with the same speed, but in a completely random direction.</li>
                <li>At any instant there is no preferential direction: as many electrons travel one way as the other.</li>
                <li>Net result: <strong>no electric current</strong>.</li>
              </ul>
            ),
          },
          {
            title: "Steady electric field",
            children: (
              <ul>
                <li>Electrons are accelerated by the field and move to neutralise the charges at the ends.</li>
                <li>While they move they constitute a current.</li>
                <li>Without replenishment the current lasts only a very short while.</li>
                <li>Fresh charges supplied at the ends keep the field steady: a <strong>continuous current</strong>.</li>
              </ul>
            ),
          },
        ]}
      />
      <FigureShell
        number="Figure 3.1"
        caption="Charges +Q and −Q put at the ends of a metallic cylinder. The electrons drift because of the electric field created to neutralise the charges; the current stops after a while unless +Q and −Q are continuously replenished."
      >
        <CylinderFieldFigure />
      </FigureShell>
      <ProcessCard
        title="Why a steady field needs a source"
        steps={[
          {
            label: "Two charged discs on a cylindrical conductor",
            description: "A dielectric disc with +Q on one flat face, and one with −Q on the other.",
          },
          {
            label: "An electric field is set up",
            description: "Directed from the positive towards the negative charge, inside the conductor.",
          },
          {
            label: "Electrons accelerate towards +Q",
            description: "While moving they constitute an electric current, and they neutralise the charges.",
          },
          {
            label: "The current stops",
            description: "Once the charges are neutralised there is no field left, so the current lasts only a very short while.",
          },
          {
            label: "Replenish the charges",
            description: "Cells or batteries maintain a steady field, and hence a continuous current.",
          },
        ]}
      />

      <h2 id="h-3-4">3.4 Ohm&apos;s Law</h2>
      <p>
        A basic law regarding the flow of currents was discovered by G.S. Ohm in 1828, long before the
        physical mechanism responsible for the flow of currents was discovered.
      </p>
      <Callout type="important">
        Imagine a conductor through which a current <Formula>{String.raw`I`}</Formula> is flowing and let{" "}
        <Formula>{String.raw`V`}</Formula> be the potential difference between the ends of the conductor. Then Ohm&apos;s law
        states that <Formula>{String.raw`V \propto I`}</Formula>, or <Formula>{String.raw`V = RI`}</Formula>, where the
        constant of proportionality <Formula>{String.raw`R`}</Formula> is called the <strong>resistance</strong> of the
        conductor.
      </Callout>
      <FormulaBlock latex={String.raw`V = R\,I`} important tag="3.3" />
      <ul>
        <li>The SI unit of resistance is the <strong>ohm</strong>, denoted by the symbol Ω.</li>
        <li>The resistance depends not only on the material of the conductor but also on its dimensions.</li>
      </ul>

      <h3 id="h-3-4-1">Dependence of resistance on dimensions</h3>
      <Expandable title="Derivation — why R ∝ l and R ∝ 1/A">
        <Stepper
          steps={[
            {
              label: "Start with a slab of length l and cross-section A",
              description: "It obeys V = RI, so the resistance of the slab is R = V/I.",
            },
            {
              label: "Place two identical slabs side by side",
              description: "The combination has length 2l and the same cross-section A. The same current I flows through both slabs, and the potential difference across each is V, so the combination has p.d. 2V.",
            },
            {
              label: "Resistance of the doubled slab",
              description: "R_C = 2V/I = 2R. Doubling the length doubles the resistance, so R ∝ l.",
            },
            {
              label: "Cut the slab lengthwise into two half-slabs",
              description: "Each has length l but cross-sectional area A/2. For the same voltage V, the current through each half-slab is I/2.",
            },
            {
              label: "Resistance of a half-slab",
              description: "R_1 = V/(I/2) = 2R. Halving the area doubles the resistance, so R ∝ 1/A.",
            },
            {
              label: "Combine the two dependences",
              description: "R ∝ l/A, hence R = ρl/A, where the constant ρ depends on the material but not on the dimensions. It is called the resistivity.",
            },
          ]}
        />
        <FormulaBlock latex={String.raw`R_C = \frac{2V}{I} = 2R`} tag="3.4" />
        <FormulaBlock latex={String.raw`R_1 = \frac{V}{I/2} = 2R`} tag="3.6" />
        <FormulaBlock latex={String.raw`R \propto l \qquad \text{and} \qquad R \propto \frac{1}{A}`} tag="3.5, 3.7" />
        <FormulaBlock latex={String.raw`R = \rho \frac{l}{A}`} important tag="3.9" />
      </Expandable>
      <Callout type="important">
        <Formula>{String.raw`\rho`}</Formula> depends on the material of the conductor but not on its dimensions, and is
        called the <strong>resistivity</strong>. It is{" "}
        <Highlight>the property of the material, not of the specimen</Highlight>.
      </Callout>
      <p>Using this relation, Ohm&apos;s law reads</p>
      <FormulaBlock latex={String.raw`V = I\,R = \frac{I\,\rho\, l}{A}`} tag="3.10" />

      <h3 id="h-3-4-2">Current density and conductivity</h3>
      <FactCard
        title="Current density (j)"
        definition="Current per unit area, taken normal to the current: j = I/A. Its SI unit is A m⁻²."
        icon="➡️"
      />
      <ul>
        <li>If <Formula>{String.raw`E`}</Formula> is the magnitude of the uniform field in a conductor of length <Formula>{String.raw`l`}</Formula>, then <Formula>{String.raw`V = El`}</Formula>.</li>
        <li>Substituting in Ohm&apos;s law gives <Formula>{String.raw`E = j\rho`}</Formula>.</li>
        <li>The current density is directed along <Formula>{String.raw`E`}</Formula>, so this can be written in vector form.</li>
      </ul>
      <FormulaCard>
        <p className="text-[0.85rem] text-muted-foreground mb-2">The three equivalent statements of Ohm&apos;s law</p>
        <p className="text-[0.75rem] font-medium text-muted-foreground">In terms of potential difference</p>
        <FormulaBlock latex={String.raw`V = I R`} />
        <p className="text-[0.75rem] font-medium text-muted-foreground">In terms of fields</p>
        <FormulaBlock latex={String.raw`\vec{E} = \rho \vec{j}`} />
        <p className="text-[0.75rem] font-medium text-muted-foreground">With conductivity σ = 1/ρ</p>
        <FormulaBlock latex={String.raw`\vec{j} = \sigma \vec{E}`} />
        <p className="text-[0.85rem] text-muted-foreground">σ = 1/ρ is called the conductivity. Ohm&apos;s law is often stated in the equivalent form j = σE in addition to V = IR.</p>
      </FormulaCard>
      <KeyPoint title="One law, two faces">
        <Formula>{String.raw`V = IR`}</Formula> is the circuit form; <Formula>{String.raw`\vec{j} = \sigma\vec{E}`}</Formula> is
        the field form. The next section shows that the second form follows from the drift of electrons.
      </KeyPoint>

      <h2 id="h-3-5">3.5 Drift of Electrons and the Origin of Resistivity</h2>
      <ul>
        <li>An electron suffers collisions with the heavy fixed ions, but after a collision it emerges with the <em>same speed</em> in a random direction.</li>
        <li>Since the directions are random, the average velocity of all the electrons is zero.</li>
        <li>If there are <Formula>{String.raw`N`}</Formula> electrons and the velocity of the <Formula>{String.raw`i`}</Formula>th electron at a given time is <Formula>{String.raw`v_i`}</Formula>, then the average is zero.</li>
      </ul>
      <FormulaBlock latex={String.raw`\frac{1}{N}\sum_{i=1}^{N} v_i = 0`} tag="3.14" />
      <p>
        Now switch on an electric field. The electrons are accelerated by it, and their velocities are no
        longer distributed symmetrically about zero.
      </p>
      <FormulaBlock latex={String.raw`\vec{a} = -\frac{e\vec{E}}{m}`} tag="3.15" />
      <Expandable title="Derivation — drift velocity and the origin of Ohm&apos;s law">
        <p>
          Consider the <Formula>{String.raw`i`}</Formula>th electron at a given time{" "}
          <Formula>{String.raw`t`}</Formula>. Its last collision occurred some time before{" "}
          <Formula>{String.raw`t`}</Formula>; let <Formula>{String.raw`\tau_i`}</Formula> be the time elapsed since that
          collision and <Formula>{String.raw`v_i`}</Formula> its velocity immediately after the collision.
        </p>
        <FormulaBlock latex={String.raw`\vec{V}_i = \vec{v}_i - \frac{e\vec{E}}{m}\tau_i`} tag="3.16" />
        <Stepper
          steps={[
            {
              label: "Immediately after a collision",
              description: "The electron starts with velocity v_i in a completely random direction, so the average of all the v_i is zero.",
            },
            {
              label: "Accelerated by the field for a time τ_i",
              description: "By the time t its velocity is V_i = v_i − eEτ_i/m, because it has been accelerated since its last collision.",
            },
            {
              label: "Average over all N electrons",
              description: "Collisions occur at random times, so some electrons have spent more than the average time between collisions and some less; the average of τ_i is the relaxation time τ.",
            },
            {
              label: "Drift velocity",
              description: "The average of V_i is v_d = −eEτ/m: a velocity independent of time, although every electron is accelerated. This is the phenomenon of drift.",
            },
            {
              label: "Count the carriers crossing an area",
              description: "In time Δt all electrons within a distance |v_d|Δt of a planar area A cross it, so the charge transported is neA|v_d|Δt.",
            },
            {
              label: "Identify the conductivity",
              description: "With I = |j|A this gives j = (ne²τ/m)E; comparing with j = σE gives σ = ne²τ/m, which is exactly Ohm's law, provided n and τ are independent of E.",
            },
          ]}
        />
        <FormulaBlock latex={String.raw`\vec{v}_d \equiv \langle \vec{V}_i \rangle = \langle \vec{v}_i \rangle - \frac{e\vec{E}}{m}\langle \tau_i \rangle = 0 - \frac{e\vec{E}}{m}\tau`} tag="3.17" />
        <FormulaBlock latex={String.raw`\vec{v}_d = -\frac{e\tau}{m}\vec{E}`} important />
        <p>
          The drift velocity is <Highlight>independent of time, although the electrons are accelerated</Highlight>.
          This is the phenomenon of <strong>drift</strong>.
        </p>
        <p>
          Counting the electrons that cross a planar area <Formula>{String.raw`A`}</Formula> in a time{" "}
          <Formula>{String.raw`\Delta t`}</Formula>: all electrons within a distance{" "}
          <Formula>{String.raw`|v_d|\Delta t`}</Formula> of the area cross it, so the charge transported is{" "}
          <Formula>{String.raw`-neA|v_d|\Delta t`}</Formula>. Hence
        </p>
        <FormulaBlock latex={String.raw`I\,\Delta t = n\,e\,A\,|v_d|\,\Delta t`} tag="3.18" />
        <FormulaBlock latex={String.raw`I = n\,e\,A\,v_d`} important />
        <p>With <Formula>{String.raw`I = |j|A`}</Formula> this gives the magnitude of the current density:</p>
        <FormulaBlock latex={String.raw`j = \frac{n e^2 \tau}{m} E`} tag="3.21" />
        <p>
          The vector <Formula>{String.raw`\vec{j}`}</Formula> is parallel to{" "}
          <Formula>{String.raw`\vec{E}`}</Formula>, so comparison with{" "}
          <Formula>{String.raw`\vec{j} = \sigma\vec{E}`}</Formula> identifies the conductivity as
        </p>
        <FormulaBlock latex={String.raw`\sigma = \frac{n e^2 \tau}{m}`} important tag="3.23" />
        <p>
          A very simple picture of electrical conduction therefore reproduces Ohm&apos;s law. The assumptions made are
          that <Formula>{String.raw`\tau`}</Formula> and <Formula>{String.raw`n`}</Formula> are constants, independent of{" "}
          <Formula>{String.raw`E`}</Formula>.
        </p>
      </Expandable>
      <Callout type="important">
        The electrons move with an average velocity which is independent of time, although electrons are
        accelerated. This is the phenomenon of drift and the velocity{" "}
        <Formula>{String.raw`v_d`}</Formula> is called the <strong>drift velocity</strong>.
      </Callout>
      <FigureShell
        number="Figure 3.3"
        caption="An electron moving from A to B through repeated collisions (full lines). With an electric field applied, it ends up at B′ (dotted lines): a slight drift in the direction opposite to the field is visible."
      >
        <DriftPathFigure />
      </FigureShell>
      <div className="grid gap-4 sm:grid-cols-3 [&>div]:my-0">
        <FactCard
          title="Drift velocity (v_d)"
          definition="The average velocity acquired by the free electrons of a conductor along the direction opposite to the applied field."
          icon="🏃"
        />
        <FactCard
          title="Relaxation time (τ)"
          definition="The average time between two successive collisions of a free electron with the ions of the metal."
          icon="⏱️"
        />
        <FactCard
          title="Current density (j)"
          definition="The current per unit area normal to the flow: j = n e v_d. It is a vector parallel to E."
          icon="➡️"
        />
      </div>
      <MetricCard
        label="Electron number density in copper"
        value="8.5 × 10²⁸"
        unit="m⁻³"
        trend="neutral"
        description="Estimated in Example 3.1 assuming one conduction electron per copper atom. This enormous density is why a measurable current needs only a tiny drift speed."
      />

      <Expandable title="Example 3.1 — Drift speed in a copper wire" variant="example">
        <ProblemSolution.Problem>
          <p>
            (a) Estimate the average drift speed of conduction electrons in a copper wire of cross-sectional area{" "}
            <Formula>{String.raw`1.0 \times 10^{-7}\ \text{m}^2`}</Formula> carrying a current of 1.5 A. Assume that
            each copper atom contributes roughly one conduction electron. The density of copper is{" "}
            <Formula>{String.raw`9.0 \times 10^{3}\ \text{kg/m}^3`}</Formula>, and its atomic mass is 63.5 u.
          </p>
          <p>
            (b) Compare the drift speed obtained above with (i) thermal speeds of copper atoms at ordinary
            temperatures, (ii) the speed of propagation of the electric field along the conductor which causes the
            drift motion.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a)</strong> The direction of drift velocity of conduction electrons is opposite to the
            electric field, i.e. electrons drift in the direction of increasing potential. The drift speed is given
            by <Formula>{String.raw`v_d = I/(neA)`}</Formula>.
          </p>
          <p>
            Here <Formula>{String.raw`e = 1.6 \times 10^{-19}\ \text{C}`}</Formula>,{" "}
            <Formula>{String.raw`A = 1.0 \times 10^{-7}\ \text{m}^2`}</Formula>,{" "}
            <Formula>{String.raw`I = 1.5\ \text{A}`}</Formula>. The density of conduction electrons equals the number
            of atoms per cubic metre (one conduction electron per Cu atom, from its valence electron count of one).
            A cubic metre of copper has a mass of <Formula>{String.raw`9.0 \times 10^{3}`}</Formula> kg, and{" "}
            <Formula>{String.raw`6.0 \times 10^{23}`}</Formula> copper atoms have a mass of 63.5 g, so
          </p>
          <FormulaBlock latex={String.raw`n = \frac{6.0 \times 10^{23}}{63.5} \times 9.0 \times 10^{3} = 8.5 \times 10^{28}\ \text{m}^{-3}`} />
          <p>which gives</p>
          <FormulaBlock latex={String.raw`v_d = \frac{1.5}{8.5 \times 10^{28} \times 1.6 \times 10^{-19} \times 1.0 \times 10^{-7}}`} />
          <FormulaBlock latex={String.raw`v_d = 1.1 \times 10^{-3}\ \text{m s}^{-1} = 1.1\ \text{mm s}^{-1}`} important />
          <p>
            <strong>(b)(i)</strong> At a temperature <Formula>{String.raw`T`}</Formula>, the thermal speed of a
            copper atom of mass <Formula>{String.raw`M`}</Formula> follows from{" "}
            <Formula>{String.raw`\langle \tfrac{1}{2} M v^2 \rangle = \tfrac{3}{2} k_B T`}</Formula> and is typically
            of the order of <Formula>{String.raw`\sqrt{k_B T / M}`}</Formula>, where{" "}
            <Formula>{String.raw`k_B`}</Formula> is the Boltzmann constant. For copper at 300 K this is about{" "}
            <Formula>{String.raw`2 \times 10^{2}\ \text{m/s}`}</Formula>. This figure indicates the random vibrational
            speeds of copper atoms in a conductor. The drift speed of electrons is much smaller — about{" "}
            <Formula>{String.raw`10^{-5}`}</Formula> times the typical thermal speed at ordinary temperatures.
          </p>
          <p>
            <strong>(b)(ii)</strong> An electric field travelling along the conductor has the speed of an
            electromagnetic wave, namely <Formula>{String.raw`3.0 \times 10^{8}\ \text{m s}^{-1}`}</Formula>. The drift
            speed is, in comparison, extremely small — smaller by a factor of{" "}
            <Formula>{String.raw`10^{-11}`}</Formula>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <Comparison
        columns={[
          {
            title: "Drift speed of electrons",
            children: (
              <ul>
                <li>Of the order of <strong>1 mm s⁻¹</strong> for a few amperes in a copper wire.</li>
                <li>Superposed on the random thermal motion.</li>
                <li>Proportional to the current: <Formula>{String.raw`v_d = I/(neA)`}</Formula>.</li>
              </ul>
            ),
          },
          {
            title: "Thermal speed of electrons",
            children: (
              <ul>
                <li>About <strong>2 × 10² m s⁻¹</strong> at 300 K.</li>
                <li>Random in direction, so it averages to zero.</li>
                <li>Roughly 10⁵ times larger than the drift speed.</li>
              </ul>
            ),
          },
        ]}
      />

      <Expandable title="Example 3.2 — Five conceptual questions on drift" variant="example">
        <ProblemSolution.Problem>
          <p>
            (a) In Example 3.1 the electron drift speed is estimated to be only a few mm s⁻¹ for currents in the
            range of a few amperes. How then is current established almost the instant a circuit is closed?
          </p>
          <p>
            (b) The electron drift arises due to the force experienced by electrons in the electric field inside the
            conductor. But force should cause acceleration. Why then do the electrons acquire a steady average drift
            speed?
          </p>
          <p>
            (c) If the electron drift speed is so small, and the electron&apos;s charge is small, how can we still obtain
            large amounts of current in a conductor?
          </p>
          <p>
            (d) When electrons drift in a metal from lower to higher potential, does it mean that all the
            &ldquo;free&rdquo; electrons of the metal are moving in the same direction?
          </p>
          <p>
            (e) Are the paths of electrons straight lines between successive collisions with the positive ions of
            the metal in the (i) absence of an electric field, (ii) presence of an electric field?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a)</strong> The electric field is established throughout the circuit almost instantly (with the
            speed of light), causing at every point a local electron drift. Establishment of a current does not have
            to wait for electrons from one end of the conductor to travel to the other end. It does, however, take a
            little while for the current to reach its steady value.
          </p>
          <p>
            <strong>(b)</strong> Each free electron does accelerate, increasing its drift speed until it collides with
            a positive ion of the metal. It loses its drift speed after the collision, then starts to accelerate again,
            only to suffer another collision, and so on. On the average, therefore, electrons acquire only a drift
            speed.
          </p>
          <p>
            <strong>(c)</strong> Because the electron number density is enormous, about{" "}
            <Formula>{String.raw`10^{29}\ \text{m}^{-3}`}</Formula>: even a tiny drift speed moves a huge number of
            carriers through any cross-section every second.
          </p>
          <p>
            <strong>(d)</strong> By no means. The drift velocity is superposed over the large random velocities of the
            electrons, so individual electrons still move in all directions.
          </p>
          <p>
            <strong>(e)</strong> In the absence of an electric field the paths are straight lines; in the presence of
            an electric field the paths are, in general, curved.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-3-5-1">3.5.1 Mobility</h3>
      <p>Conductivity arises from mobile charge carriers, and these differ from material to material.</p>
      <TableCard
        title="Mobile charge carriers"
        headers={["Material", "Carriers of current"]}
        rows={[
          { cells: ["Metals", "Electrons"] },
          { cells: ["Ionised gas", "Electrons and positively charged ions"] },
          { cells: ["Electrolyte", "Both positive and negative ions"] },
        ]}
        caption="In most substances the carriers are electrons; in ionic crystals and electrolytic liquids, positive and negative ions also carry the current."
      />
      <Callout type="important">
        An important quantity is the <strong>mobility</strong> <Formula>{String.raw`\mu`}</Formula> defined as the
        magnitude of the drift velocity per unit electric field.
      </Callout>
      <FormulaBlock latex={String.raw`\mu = \frac{|v_d|}{E}`} important tag="3.24" />
      <ul>
        <li>The SI unit of mobility is m² V⁻¹ s⁻¹, and it is 10⁴ times the mobility in the practical unit cm² V⁻¹ s⁻¹.</li>
        <li>Mobility is positive.</li>
      </ul>
      <FormulaBlock latex={String.raw`\mu = \frac{|v_d|}{E} = \frac{e\tau}{m}`} tag="3.25" />
      <p>where <Formula>{String.raw`\tau`}</Formula> is the average collision time for electrons.</p>

      <h2 id="h-3-6">3.6 Limitations of Ohm&apos;s Law</h2>
      <p>
        Ohm&apos;s law has been found valid over a large class of materials, but there do exist materials and devices
        used in electric circuits where the proportionality of <Formula>{String.raw`V`}</Formula> and{" "}
        <Formula>{String.raw`I`}</Formula> does not hold. The deviations are broadly of three types.
      </p>
      <ul>
        <li>(a) <Formula>{String.raw`V`}</Formula> ceases to be proportional to <Formula>{String.raw`I`}</Formula>.</li>
        <li>(b) The relation between <Formula>{String.raw`V`}</Formula> and <Formula>{String.raw`I`}</Formula> depends on the sign of <Formula>{String.raw`V`}</Formula> — reversing the direction of <Formula>{String.raw`V`}</Formula> while keeping its magnitude fixed does not produce a current of the same magnitude in the opposite direction. This happens, for example, in a diode.</li>
        <li>(c) The relation between <Formula>{String.raw`V`}</Formula> and <Formula>{String.raw`I`}</Formula> is not unique, i.e. there is more than one value of <Formula>{String.raw`V`}</Formula> for the same current <Formula>{String.raw`I`}</Formula>. A material exhibiting such behaviour is GaAs.</li>
      </ul>
      <FigureShell
        number="Figures 3.5–3.7"
        caption="Left: the dashed line is the linear Ohm's law, the solid line the V–I curve of a good conductor. Centre: characteristic curve of a diode. Right: variation of current with voltage for GaAs — the relation is not unique."
      >
        <ViCurves />
      </FigureShell>
      <TableCard
        title="The three ways Ohm's law can fail"
        headers={["Deviation", "What it means", "Example"]}
        rows={[
          { cells: ["V not proportional to I", "The V–I graph is curved", "A good conductor at large currents"] },
          { cells: ["Sign-dependent relation", "Reversing V gives a different |I|", "Diode"] },
          { cells: ["Non-unique relation", "More than one V for the same I", "GaAs"] },
        ]}
        caption="Materials and devices that do not obey Ohm's law in the form V = RI are widely used in electronic circuits; this chapter and the next few study only materials that do obey it."
      />
      <Callout type="note">
        <strong>V = RI is not a statement of Ohm&apos;s law.</strong> The equation defines resistance and applies to all
        conducting devices, whether or not they obey Ohm&apos;s law. Ohm&apos;s law asserts that the plot of{" "}
        <Formula>{String.raw`I`}</Formula> versus <Formula>{String.raw`V`}</Formula> is linear, i.e. that{" "}
        <Formula>{String.raw`R`}</Formula> is independent of <Formula>{String.raw`V`}</Formula>. In field language, a
        material obeys Ohm&apos;s law when its resistivity does not depend on the magnitude and direction of the applied
        electric field.
      </Callout>

      <h2 id="h-3-7">3.7 Resistivity of Various Materials</h2>
      <Callout type="important">
        The materials are classified as <strong>conductors</strong>, <strong>semiconductors</strong> and{" "}
        <strong>insulators</strong> depending on their resistivities, in an increasing order of their values.
      </Callout>
      <ul>
        <li>Metals have low resistivities, in the range of 10⁻⁸ Ω m to 10⁻⁶ Ω m.</li>
        <li>At the other end are insulators like ceramic, rubber and plastics, with resistivities 10¹⁸ times greater than metals or more.</li>
        <li>In between the two are the semiconductors.</li>
        <li>Semiconductor resistivities characteristically <em>decrease</em> with a rise in temperature.</li>
        <li>The resistivity of a semiconductor can be decreased by adding a small amount of suitable impurities — the feature exploited in semiconductor devices.</li>
      </ul>
      <TableCard
        title="Resistivity bands and temperature behaviour"
        headers={["Class", "Resistivity", "Behaviour with rising temperature", "Typical members"]}
        rows={[
          { cells: ["Conductors (metals)", "10⁻⁸ Ω m to 10⁻⁶ Ω m", "Increases", "Copper, silver"] },
          { cells: ["Semiconductors", "Between metals and insulators", "Decreases", "Si, Ge"] },
          { cells: ["Insulators", "About 10¹⁸ times metals or more", "—", "Ceramic, rubber, plastics"] },
        ]}
        caption="The three classes are separated by many powers of ten; on a logarithmic scale the semiconductors lie roughly in the middle."
      />
      <KeyPoint title="Why doping matters">
        A small amount of a suitable impurity can lower a semiconductor&apos;s resistivity by orders of magnitude. Every
        semiconductor device in Chapter 14 depends on this control of resistivity.
      </KeyPoint>

      <h2 id="h-3-8">3.8 Temperature Dependence of Resistivity</h2>
      <p>
        The resistivity of a material depends on temperature, and different materials do not exhibit the same
        dependence. Over a limited range of temperatures that is not too large, the resistivity of a metallic
        conductor is approximately given by a linear relation.
      </p>
      <FormulaBlock latex={String.raw`\rho_T = \rho_0\,\left[1 + \alpha\,(T - T_0)\right]`} important tag="3.26" />
      <Callout type="important">
        <Formula>{String.raw`\rho_T`}</Formula> is the resistivity at temperature <Formula>{String.raw`T`}</Formula> and{" "}
        <Formula>{String.raw`\rho_0`}</Formula> the same at a reference temperature{" "}
        <Formula>{String.raw`T_0`}</Formula>. <Formula>{String.raw`\alpha`}</Formula> is called the{" "}
        <strong>temperature co-efficient of resistivity</strong>, and the dimension of{" "}
        <Formula>{String.raw`\alpha`}</Formula> is (Temperature)⁻¹. For metals, <Formula>{String.raw`\alpha`}</Formula> is
        positive.
      </Callout>
      <ul>
        <li>The relation implies that a graph of <Formula>{String.raw`\rho_T`}</Formula> against <Formula>{String.raw`T`}</Formula> is a straight line.</li>
        <li>At temperatures much lower than 0 °C the graph deviates considerably from a straight line (copper, Fig. 3.8).</li>
        <li>The equation can therefore be used only over a limited range of <Formula>{String.raw`T`}</Formula> around a reference temperature <Formula>{String.raw`T_0`}</Formula>, where the graph is approximately straight.</li>
        <li>Some materials — Nichrome (an alloy of nickel, iron and chromium), manganin and constantan — show a very weak dependence of resistivity on temperature.</li>
        <li>Such materials are widely used in wire-bound standard resistors, since their resistance values change very little with temperature.</li>
        <li>Unlike metals, the resistivities of semiconductors <em>decrease</em> with increasing temperature.</li>
      </ul>
      <FigureShell
        number="Figures 3.8–3.10"
        caption="Left: resistivity of copper against temperature — linear over a limited range (dashed), deviating at low temperature. Centre: nichrome, an almost flat dependence. Right: a typical semiconductor, whose resistivity falls as T rises."
      >
        <TemperatureGraphs />
      </FigureShell>
      <p>The temperature dependence follows from the expression for resistivity obtained from the drift picture.</p>
      <FormulaBlock latex={String.raw`\rho = \frac{1}{\sigma} = \frac{m}{n\,e^2\,\tau}`} tag="3.27" />
      <ul>
        <li><Formula>{String.raw`\rho`}</Formula> depends inversely on the number <Formula>{String.raw`n`}</Formula> of free electrons per unit volume and on the average time <Formula>{String.raw`\tau`}</Formula> between collisions.</li>
        <li>As temperature increases, the average speed of the carriers increases, so collisions become more frequent and <Formula>{String.raw`\tau`}</Formula> decreases.</li>
        <li>In a metal <Formula>{String.raw`n`}</Formula> is practically independent of temperature, so the fall in <Formula>{String.raw`\tau`}</Formula> makes <Formula>{String.raw`\rho`}</Formula> rise.</li>
        <li>For insulators and semiconductors <Formula>{String.raw`n`}</Formula> increases with temperature, and this increase more than compensates the decrease in <Formula>{String.raw`\tau`}</Formula>, so <Formula>{String.raw`\rho`}</Formula> falls.</li>
      </ul>
      <MistakeCard
        mistake="Substituting the temperature itself in R = R₀[1 + α(T − T₀)], or using α in K⁻¹ when the table gives °C⁻¹."
        correction="Substitute the temperature difference ΔT = T − T₀. A temperature interval has the same numerical value in °C and in K, so α per °C and α per K are numerically equal."
        example="Example 3.3: ΔT = 85.8 − 75.3 divided by (75.3 × 1.70 × 10⁻⁴) = 820 °C, and then T = 820 + 27 = 847 °C."
      />

      <Expandable title="Example 3.3 — Steady temperature of a toaster element" variant="example">
        <ProblemSolution.Problem>
          <p>
            An electric toaster uses nichrome for its heating element. When a negligibly small current passes through
            it, its resistance at room temperature (27.0 °C) is found to be 75.3 Ω. When the toaster is connected to a
            230 V supply, the current settles, after a few seconds, to a steady value of 2.68 A. What is the steady
            temperature of the nichrome element? The temperature coefficient of resistance of nichrome averaged over
            the temperature range involved is <Formula>{String.raw`1.70 \times 10^{-4}\ ^\circ\text{C}^{-1}`}</Formula>.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            When the current through the element is very small, heating effects can be ignored and the temperature{" "}
            <Formula>{String.raw`T_1`}</Formula> of the element is the same as room temperature. When the toaster is
            connected to the supply, its initial current is slightly higher than its steady value of 2.68 A, but due to
            the heating effect the temperature rises. This increases the resistance and slightly decreases the current.
            In a few seconds a steady state is reached when the temperature rises no further, and both the resistance
            and the current achieve steady values.
          </p>
          <FormulaBlock latex={String.raw`R_2 = \frac{230\ \text{V}}{2.68\ \text{A}} = 85.8\ \Omega`} />
          <p>Using the relation</p>
          <FormulaBlock latex={String.raw`R_2 = R_1\left[1 + \alpha (T_2 - T_1)\right]`} />
          <p>
            with <Formula>{String.raw`\alpha = 1.70 \times 10^{-4}\ ^\circ\text{C}^{-1}`}</Formula>, we get
          </p>
          <FormulaBlock latex={String.raw`T_2 - T_1 = \frac{85.8 - 75.3}{75.3 \times 1.70 \times 10^{-4}} = 820\ ^\circ\text{C}`} />
          <p>that is,</p>
          <FormulaBlock latex={String.raw`T_2 = (820 + 27.0)\ ^\circ\text{C} = 847\ ^\circ\text{C}`} important />
          <p>
            Thus the steady temperature of the heating element — when the heating effect of the current equals the heat
            loss to the surroundings — is 847 °C.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 3.4 — Platinum resistance thermometer" variant="example">
        <ProblemSolution.Problem>
          <p>
            The resistance of the platinum wire of a platinum resistance thermometer at the ice point is 5 Ω and at
            the steam point is 5.23 Ω. When the thermometer is inserted in a hot bath, the resistance of the platinum
            wire is 5.795 Ω. Calculate the temperature of the bath.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Here <Formula>{String.raw`R_0 = 5\ \Omega`}</Formula>,{" "}
            <Formula>{String.raw`R_{100} = 5.23\ \Omega`}</Formula> and{" "}
            <Formula>{String.raw`R_t = 5.795\ \Omega`}</Formula>. The resistance varies linearly with temperature, so
          </p>
          <FormulaBlock latex={String.raw`R_t = R_0(1 + \alpha t), \qquad t = \frac{R_t - R_0}{R_{100} - R_0} \times 100`} />
          <FormulaBlock latex={String.raw`t = \frac{5.795 - 5}{5.23 - 5} \times 100 = \frac{0.795}{0.23} \times 100 = 345.65\ ^\circ\text{C}`} important />
          <p>The temperature of the bath is therefore 345.65 °C.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-3-9">3.9 Electrical Energy, Power</h2>
      <p>
        Consider a conductor with end points A and B, in which a current{" "}
        <Formula>{String.raw`I`}</Formula> is flowing from A to B. The potentials at A and B are{" "}
        <Formula>{String.raw`V(A)`}</Formula> and <Formula>{String.raw`V(B)`}</Formula>, and since current flows from A to B,{" "}
        <Formula>{String.raw`V(A) > V(B)`}</Formula>; the potential difference across AB is{" "}
        <Formula>{String.raw`V = V(A) - V(B) > 0`}</Formula>.
      </p>
      <ul>
        <li>In a time interval <Formula>{String.raw`\Delta t`}</Formula> an amount of charge <Formula>{String.raw`\Delta Q = I\Delta t`}</Formula> travels from A to B.</li>
        <li>The potential energy of that charge at A was <Formula>{String.raw`\Delta Q\, V(A)`}</Formula> and at B it is <Formula>{String.raw`\Delta Q\, V(B)`}</Formula>.</li>
        <li>If charges moved without collisions, conservation of total energy would convert this loss of potential energy entirely into kinetic energy.</li>
        <li>In a real conductor the carriers move with a steady drift velocity because of collisions with ions and atoms, and during collisions the energy gained is shared with the atoms.</li>
        <li>The atoms vibrate more vigorously — the conductor heats up.</li>
      </ul>
      <FormulaBlock latex={String.raw`\Delta U_{\text{pot}} = \Delta Q\,[V(B) - V(A)] = -\Delta Q\,V = -I\,V\,\Delta t < 0`} tag="3.28" />
      <FormulaBlock latex={String.raw`\Delta K = -\Delta U_{\text{pot}}`} tag="3.29" />
      <FormulaBlock latex={String.raw`\Delta K = I\,V\,\Delta t > 0`} tag="3.30" />
      <FormulaBlock latex={String.raw`\Delta W = I\,V\,\Delta t`} tag="3.31" />
      <p>
        The energy dissipated per unit time is the power dissipated,{" "}
        <Formula>{String.raw`P = \Delta W/\Delta t`}</Formula>, and using Ohm&apos;s law{" "}
        <Formula>{String.raw`V = IR`}</Formula>:
      </p>
      <FormulaBlock latex={String.raw`P = I\,V`} important tag="3.32" />
      <FormulaCard>
        <p className="text-[0.85rem] text-muted-foreground mb-2">Power loss (&ldquo;ohmic loss&rdquo;) in a resistor of resistance R</p>
        <FormulaBlock latex={String.raw`P = I\,V`} />
        <FormulaBlock latex={String.raw`P = I^2 R`} tag="3.33" />
        <FormulaBlock latex={String.raw`P = \frac{V^2}{R}`} />
        <p className="text-[0.85rem] text-muted-foreground">It is this power which heats the coil of an electric bulb to incandescence, radiating out heat and light.</p>
      </FormulaCard>
      <p>
        Where does the power come from? An external source is needed to keep a steady current, and it is this source
        which supplies the power. In a simple circuit with a cell, it is the chemical energy of the cell which supplies
        this power for as long as it can.
      </p>

      <h3 id="h-3-9-1">Power transmission</h3>
      <p>
        Electrical power is transmitted from power stations to homes and factories, which may be hundreds of miles
        away, via transmission cables. The power loss in the cables must be minimised.
      </p>
      <ul>
        <li>A device of resistance <Formula>{String.raw`R`}</Formula> is to be delivered a power <Formula>{String.raw`P`}</Formula>, through cables of resistance <Formula>{String.raw`R_c`}</Formula>.</li>
        <li>If <Formula>{String.raw`V`}</Formula> is the voltage across the device and <Formula>{String.raw`I`}</Formula> the current through it, then <Formula>{String.raw`P = VI`}</Formula>.</li>
        <li>The power wasted in the connecting wires is <Formula>{String.raw`P_c = I^2R_c`}</Formula>.</li>
      </ul>
      <FormulaBlock latex={String.raw`P_c = I^2 R_c = \frac{P^2 R_c}{V^2}`} important tag="3.35" />
      <ul>
        <li>The wasted power is <Highlight>inversely proportional to <Formula>{String.raw`V^2`}</Formula></Highlight>.</li>
        <li>Transmission cables are hundreds of miles long and their resistance <Formula>{String.raw`R_c`}</Formula> is considerable.</li>
        <li>To reduce <Formula>{String.raw`P_c`}</Formula> the wires carry current at enormous values of <Formula>{String.raw`V`}</Formula> — the reason for the high-voltage danger signs on transmission lines.</li>
        <li>Using electricity at such voltages is not safe, so at the consumer end a device called a <strong>transformer</strong> lowers the voltage to a value suitable for use.</li>
      </ul>
      <MistakeCard
        mistake="Thinking that a higher transmission voltage pushes more current through the cables and hence wastes more power."
        correction="For a fixed power P delivered, a higher V means a smaller I, since P = VI. The loss P_c = I²R_c = P²R_c/V² therefore falls as V² rises."
      />

      <h2 id="h-3-10">3.10 Cells, EMF, Internal Resistance</h2>
      <p>
        A simple device to maintain a steady current in an electric circuit is the electrolytic cell. A cell has two
        electrodes, called the positive (P) and the negative (N), immersed in an electrolytic solution. Dipped in the
        solution, the electrodes exchange charges with the electrolyte.
      </p>
      <ul>
        <li>The positive electrode has a potential difference <Formula>{String.raw`V_+`}</Formula>{" "}
          (<Formula>{String.raw`V_+ > 0`}</Formula>) between itself and the electrolyte immediately adjacent to it.</li>
        <li>The negative electrode develops a negative potential <Formula>{String.raw`-V_-`}</Formula>{" "}
          (<Formula>{String.raw`V_- \geq 0`}</Formula>) relative to the electrolyte adjacent to it.</li>
        <li>When there is no current, the electrolyte has the same potential throughout, so the potential difference
          between P and N is <Formula>{String.raw`V_+ + V_-`}</Formula>.</li>
      </ul>
      <Callout type="important">
        This difference is called the <strong>electromotive force (emf)</strong> of the cell and is denoted by{" "}
        <Formula>{String.raw`\varepsilon`}</Formula>. Thus <Formula>{String.raw`\varepsilon = V_+ + V_- > 0`}</Formula>.
      </Callout>
      <FormulaBlock latex={String.raw`\varepsilon = V_+ + V_- > 0`} important tag="3.36" />
      <Callout type="note">
        <Formula>{String.raw`\varepsilon`}</Formula> is actually a <em>potential difference</em> and not a force. The
        name &ldquo;emf&rdquo; is used for historical reasons, and was given at a time when the phenomenon was not
        understood properly.
      </Callout>
      <FigureShell
        number="Figure 3.12"
        caption="A cell with positive terminal P and negative terminal N driving a current through an external resistor R. The electrolyte has a finite internal resistance r; the current flows from N to P inside the cell and from P to N through R."
      >
        <CellTerminalFigure />
      </FigureShell>
      <ul>
        <li>The electrolyte through which a current flows has a finite resistance <Formula>{String.raw`r`}</Formula>, called the <strong>internal resistance</strong>.</li>
        <li>If <Formula>{String.raw`R`}</Formula> is infinite then <Formula>{String.raw`I = 0`}</Formula>, and the potential difference between P and N equals <Formula>{String.raw`\varepsilon`}</Formula>.</li>
        <li>Thus emf is the potential difference between the positive and negative electrodes in an{" "}
          <Highlight>open circuit</Highlight>, when no current flows through the cell.</li>
        <li>If <Formula>{String.raw`R`}</Formula> is finite, <Formula>{String.raw`I`}</Formula> is not zero and the potential difference is reduced by <Formula>{String.raw`Ir`}</Formula>.</li>
        <li>The negative sign appears in the <Formula>{String.raw`Ir`}</Formula> term because the current flows from B to A inside the electrolyte.</li>
      </ul>
      <FormulaBlock latex={String.raw`V = V_+ + V_- - I r = \varepsilon - I r`} important tag="3.38" />
      <p>Since <Formula>{String.raw`V`}</Formula> is the potential difference across <Formula>{String.raw`R`}</Formula>, Ohm&apos;s law gives <Formula>{String.raw`V = IR`}</Formula>, and combining the two relations:</p>
      <FormulaBlock latex={String.raw`I\,R = \varepsilon - I\,r \quad \Rightarrow \quad I = \frac{\varepsilon}{R + r}`} important tag="3.40" />
      <ul>
        <li>Internal resistances may be neglected in calculations when <Formula>{String.raw`\varepsilon \gg Ir`}</Formula>.</li>
        <li>Actual values of internal resistance vary from cell to cell.</li>
        <li>The internal resistance of dry cells is much higher than that of the common electrolytic cells.</li>
        <li>The maximum current that can be drawn from a cell is for <Formula>{String.raw`R = 0`}</Formula>: <Formula>{String.raw`I_{\max} = \varepsilon/r`}</Formula>.</li>
        <li>In most cells the maximum allowed current is much lower than this, to prevent permanent damage.</li>
      </ul>
      <Comparison
        columns={[
          {
            title: "EMF (ε)",
            children: (
              <ul>
                <li>The potential difference between the terminals in an <strong>open circuit</strong>.</li>
                <li>Work done per unit charge by the source in taking charge from lower to higher potential energy.</li>
                <li>Equal to <Formula>{String.raw`V_+ + V_-`}</Formula>; a property of the cell alone.</li>
                <li>Independent of the current drawn (ideal cell).</li>
              </ul>
            ),
          },
          {
            title: "Terminal potential difference (V)",
            children: (
              <ul>
                <li>The potential difference between the terminals when the cell is <strong>in a closed circuit</strong>.</li>
                <li>Equal to <Formula>{String.raw`IR`}</Formula>, the voltage across the external resistance.</li>
                <li>Given by <Formula>{String.raw`V = \varepsilon - Ir`}</Formula>; a property of the cell and the circuit.</li>
                <li>Always less than ε when the cell is discharging.</li>
              </ul>
            ),
          },
        ]}
      />
      <FormulaCard>
        <p className="text-[0.85rem] text-muted-foreground mb-2">A cell with emf ε and internal resistance r</p>
        <FormulaBlock latex={String.raw`V = \varepsilon - I r`} />
        <FormulaBlock latex={String.raw`I = \frac{\varepsilon}{R + r}`} />
        <FormulaBlock latex={String.raw`V_{\text{ext}} = I R = \frac{\varepsilon R}{R + r}`} />
        <FormulaBlock latex={String.raw`I_{\max} = \frac{\varepsilon}{r} \quad (R = 0)`} />
        <p className="text-[0.85rem] text-muted-foreground">R is the external resistance, r the internal resistance, and V_ext the voltage available across the external resistor.</p>
      </FormulaCard>

      <h2 id="h-3-11">3.11 Cells in Series and in Parallel</h2>
      <p>Like resistors, cells can be combined, and a combination can be replaced by an equivalent cell.</p>

      <h3 id="h-3-11-1">Cells in series</h3>
      <p>
        Two cells are joined with one terminal of each connected together, leaving the other terminal of either cell
        free. Let <Formula>{String.raw`\varepsilon_1, \varepsilon_2`}</Formula> be their emfs and{" "}
        <Formula>{String.raw`r_1, r_2`}</Formula> their internal resistances.
      </p>
      <EquationLadder
        title="Equivalent emf and internal resistance of two cells in series"
        steps={[
          {
            label: "Potential difference across the first cell",
            equation: String.raw`V_{AB} \equiv V(A) - V(B) = \varepsilon_1 - I r_1`,
            tag: "3.41",
          },
          {
            label: "Potential difference across the second cell",
            equation: String.raw`V_{BC} \equiv V(B) - V(C) = \varepsilon_2 - I r_2`,
            tag: "3.42",
          },
          {
            label: "Add the two — the p.d. is path independent",
            equation: String.raw`V_{AC} = (\varepsilon_1 + \varepsilon_2) - I(r_1 + r_2)`,
            tag: "3.43",
          },
          {
            label: "Compare with a single equivalent cell",
            equation: String.raw`V_{AC} = \varepsilon_{\text{eq}} - I r_{\text{eq}}`,
            tag: "3.44",
          },
          {
            label: "Equivalent emf and internal resistance",
            equation: String.raw`\varepsilon_{\text{eq}} = \varepsilon_1 + \varepsilon_2, \qquad r_{\text{eq}} = r_1 + r_2`,
            tag: "3.45, 3.46",
            final: true,
          },
        ]}
      />
      <ul>
        <li>If the two negative electrodes are joined instead, the algebra changes to <Formula>{String.raw`V_{BC} = -\varepsilon_2 - Ir_2`}</Formula> and the equivalent emf becomes <Formula>{String.raw`\varepsilon_{\text{eq}} = \varepsilon_1 - \varepsilon_2`}</Formula> (with <Formula>{String.raw`\varepsilon_1 > \varepsilon_2`}</Formula>).</li>
        <li>The rule extends to any number of cells: the equivalent emf is the sum of the individual emfs, and the equivalent internal resistance is the sum of the internal resistances.</li>
        <li>This holds when the current leaves each cell from the positive electrode.</li>
        <li>If in the combination the current leaves any cell from the negative electrode, the emf of that cell enters the expression for <Formula>{String.raw`\varepsilon_{\text{eq}}`}</Formula> with a negative sign.</li>
      </ul>

      <h3 id="h-3-11-2">Cells in parallel</h3>
      <p>
        Take two cells connected in parallel, with <Formula>{String.raw`I_1`}</Formula> and{" "}
        <Formula>{String.raw`I_2`}</Formula> the currents leaving their positive electrodes. At the junction{" "}
        <Formula>{String.raw`B_1`}</Formula>, <Formula>{String.raw`I_1`}</Formula> and{" "}
        <Formula>{String.raw`I_2`}</Formula> flow in while <Formula>{String.raw`I`}</Formula> flows out.
      </p>
      <Expandable title="Derivation — equivalent emf of two cells in parallel">
        <Stepper
          steps={[
            {
              label: "Junction rule at B₁",
              description: "As much charge flows in as out: I = I₁ + I₂.",
            },
            {
              label: "Potential difference across each cell",
              description: "With V = V(B₁) − V(B₂): for the first cell V = ε₁ − I₁r₁, for the second V = ε₂ − I₂r₂.",
            },
            {
              label: "Eliminate I₁ and I₂",
              description: "Write each current from the corresponding cell relation and add, to express I in terms of V.",
            },
            {
              label: "Solve for V",
              description: "V is the same for both cells because they are connected between the same two points.",
            },
            {
              label: "Compare with a single equivalent cell",
              description: "V = ε_eq − I r_eq, and matching coefficients gives ε_eq and r_eq.",
            },
          ]}
        />
        <FormulaBlock latex={String.raw`I = I_1 + I_2 \quad \text{and} \quad V = \varepsilon_1 - I_1 r_1 = \varepsilon_2 - I_2 r_2`} tag="3.48–3.50" />
        <FormulaBlock latex={String.raw`V = \frac{\varepsilon_1 r_2 + \varepsilon_2 r_1}{r_1 + r_2} - I\,\frac{r_1 r_2}{r_1 + r_2}`} tag="3.52" />
        <FormulaBlock latex={String.raw`\varepsilon_{\text{eq}} = \frac{\varepsilon_1 r_2 + \varepsilon_2 r_1}{r_1 + r_2}, \qquad r_{\text{eq}} = \frac{r_1 r_2}{r_1 + r_2}`} tag="3.54, 3.55" />
      </Expandable>
      <FormulaCard>
        <p className="text-[0.85rem] text-muted-foreground mb-2">Two cells in parallel — the compact form</p>
        <FormulaBlock latex={String.raw`\frac{1}{r_{\text{eq}}} = \frac{1}{r_1} + \frac{1}{r_2}`} />
        <FormulaBlock latex={String.raw`\frac{\varepsilon_{\text{eq}}}{r_{\text{eq}}} = \frac{\varepsilon_1}{r_1} + \frac{\varepsilon_2}{r_2}`} />
        <p className="text-[0.85rem] text-muted-foreground">For n cells, the same two relations extend term by term. If the negative terminal of the second cell is joined to the positive terminal of the first, the relations still hold with ε₂ replaced by −ε₂.</p>
      </FormulaCard>
      <FigureShell
        number="Figures 3.13–3.14"
        caption="Left: two cells in series, for connections across A and C. Right: two cells in parallel, for connections across B₁ and B₂. Each combination can be replaced by one cell of emf ε_eq and internal resistance r_eq."
      >
        <CellsComboFigure />
      </FigureShell>
      <TableCard
        title="Series versus parallel combination of cells"
        headers={["Quantity", "Series", "Parallel"]}
        rows={[
          { cells: ["Equivalent emf", "ε₁ + ε₂", "(ε₁r₂ + ε₂r₁)/(r₁ + r₂)"] },
          { cells: ["Equivalent internal resistance", "r₁ + r₂", "r₁r₂/(r₁ + r₂)"] },
          { cells: ["Compact form", "ε_eq = Σεᵢ, r_eq = Σrᵢ", "1/r_eq = Σ1/rᵢ"] },
          { cells: ["Polarity condition", "ε_eq = ε₁ + ε₂ when the current leaves each cell from the positive electrode", "ε₂ is replaced by −ε₂ if the negative terminal of one cell is joined to the positive terminal of the other"] },
        ]}
        caption="The series rule adds emfs and internal resistances; the parallel rule adds conductances and adds the ratios ε/r."
      />

      <h2 id="h-3-12">3.12 Kirchhoff&apos;s Rules</h2>
      <p>
        Circuits generally consist of a number of resistors and cells interconnected, sometimes in a complicated way.
        The formulae for series and parallel combinations are not always sufficient to determine all the currents and
        potential differences, so two rules are used.
      </p>
      <ul>
        <li>Label the current in each resistor with a symbol and a directed arrow.</li>
        <li>If the value finally comes out positive, the actual current is along the arrow; if negative, it is opposite to the arrow.</li>
        <li>For each source, label the positive and negative electrodes and draw a directed arrow for the current through the cell.</li>
        <li>With the current <Formula>{String.raw`I`}</Formula> flowing from N to P through the cell, <Formula>{String.raw`V = V(P) - V(N) = \varepsilon - Ir`}</Formula>.</li>
        <li>If, while labelling the current through the cell, one goes from P to N, then <Formula>{String.raw`V = \varepsilon + Ir`}</Formula>.</li>
      </ul>
      <Callout type="important" title="Kirchhoff's junction rule">
        At any junction, the sum of the currents entering the junction is equal to the sum of currents leaving the
        junction.
      </Callout>
      <Callout type="important" title="Kirchhoff's loop rule">
        The algebraic sum of changes in potential around any closed loop involving resistors and cells in the loop is
        zero.
      </Callout>
      <FigureShell
        number="Figure 3.15"
        caption="At junction a the current leaving is I₁ + I₂ and the current entering is I₃, so I₃ = I₁ + I₂. At point h the current entering is I₁ and, by the junction rule, the current leaving is also I₁. The loop rule applied to closed loops gives the circuit equations."
      >
        <KirchhoffFigure />
      </FigureShell>
      <ul>
        <li>The junction rule applies equally well to a point in a single line, not just to a junction of several lines.</li>
        <li>Its proof follows from the fact that when currents are steady there is no accumulation of charge at any junction or at any point in a line.</li>
        <li>The total current flowing in — the rate at which charge flows in — must equal the total current flowing out.</li>
        <li>The loop rule is obvious because electric potential depends only on the location of the point: starting anywhere and returning to the same point, the total change must be zero.</li>
      </ul>
      <MistakeCard
        mistake="Dropping the signs when traversing a loop: adding every emf and subtracting every resistor term regardless of the direction of travel."
        correction="Fix a sense of traversal first. Across a resistor the potential falls by IR when you go along the current and rises by IR against it; across a cell the potential rises by ε when you go from the negative to the positive electrode and falls by ε the other way."
        example="Example 3.5: going A → B → C → G gives drops IR, (I/2)R and IR; crossing the battery from its negative to its positive terminal gives +ε. Hence ε = (5/2)IR."
      />

      <Expandable title="Example 3.5 — Twelve resistors on the edges of a cube" variant="example">
        <ProblemSolution.Problem>
          <p>
            A battery of 10 V and negligible internal resistance is connected across the diagonally opposite corners of a
            cubical network consisting of 12 resistors each of resistance 1 Ω. Determine the equivalent resistance of the
            network and the current along each edge of the cube.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FigureShell
            number="Figure 3.16"
            caption="The cubical network. The battery is connected across the diagonally opposite corners A and G, so the three edges meeting at A carry I, the six middle edges carry I/2, and the three edges meeting at G carry I again."
          >
            <CubeNetworkFigure />
          </FigureShell>
          <p>
            The network is not reducible to a simple series and parallel combination of resistors. There is, however, a
            clear symmetry in the problem which can be exploited.
          </p>
          <ul>
            <li>The paths from A along the three edges meeting at A are symmetrically placed, so the current in each must be the same, say <Formula>{String.raw`I`}</Formula>.</li>
            <li>At each of the next corners the incoming current <Formula>{String.raw`I`}</Formula> must split equally into the two outgoing branches, giving <Formula>{String.raw`I/2`}</Formula> in each of the six middle edges.</li>
            <li>The three edges meeting at the opposite corner G then carry <Formula>{String.raw`I`}</Formula> again.</li>
            <li>The total current entering the network is therefore <Formula>{String.raw`3I`}</Formula>.</li>
          </ul>
          <p>Now apply Kirchhoff&apos;s loop rule to the closed loop A–B–C–G–A, taking the last leg through the battery:</p>
          <FormulaBlock latex={String.raw`-IR - \tfrac{1}{2}IR - IR + \varepsilon = 0`} />
          <p>where <Formula>{String.raw`R`}</Formula> is the resistance of each edge and <Formula>{String.raw`\varepsilon`}</Formula> the emf of the battery. Thus</p>
          <FormulaBlock latex={String.raw`\varepsilon = \tfrac{5}{2}IR`} />
          <p>The equivalent resistance of the network is</p>
          <FormulaBlock latex={String.raw`R_{\text{eq}} = \frac{\varepsilon}{3I} = \frac{5R}{6}`} important />
          <p>
            For <Formula>{String.raw`R = 1\ \Omega`}</Formula>,{" "}
            <Formula>{String.raw`R_{\text{eq}} = 5/6\ \Omega`}</Formula>, and for{" "}
            <Formula>{String.raw`\varepsilon = 10\ \text{V}`}</Formula> the total current{" "}
            <Formula>{String.raw`3I`}</Formula> in the network is
          </p>
          <FormulaBlock latex={String.raw`3I = \frac{10}{5/6} = 12\ \text{A} \quad \Rightarrow \quad I = 4\ \text{A}`} important />
          <p>
            The current in each edge then follows: <Formula>{String.raw`4\ \text{A}`}</Formula> in the three edges at A,{" "}
            <Formula>{String.raw`2\ \text{A}`}</Formula> in the six middle edges, and{" "}
            <Formula>{String.raw`4\ \text{A}`}</Formula> in the three edges meeting at G.
          </p>
          <p>
            Because of the symmetry, the full power of Kirchhoff&apos;s rules is not apparent here. In a general network
            there is no such simplification, and only the application of the rules to junctions and closed loops — as
            many as necessary to solve the unknowns — can handle the problem, as the next example shows.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 3.6 — Three simultaneous loop equations" variant="example">
        <ProblemSolution.Problem>
          <p>
            Determine the current in each branch of the network shown in Fig. 3.17 of the textbook. Each branch is
            assigned an unknown current, and the junction rule is used at every junction to reduce the number of
            unknowns to three: <Formula>{String.raw`I_1, I_2, I_3`}</Formula>. The loop rule is then applied to three
            different closed loops.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Kirchhoff&apos;s second rule for the closed loop ADCA gives</p>
          <FormulaBlock latex={String.raw`10 - 4(I_1 - I_2) + 2(I_2 + I_3 - I_1) - I_1 = 0`} tag="3.61(a)" />
          <p>that is,</p>
          <FormulaBlock latex={String.raw`7I_1 - 6I_2 - 2I_3 = 10`} />
          <p>For the closed loop ABCA we get</p>
          <FormulaBlock latex={String.raw`10 - 4I_2 - 2(I_2 + I_3) - I_1 = 0`} />
          <p>that is,</p>
          <FormulaBlock latex={String.raw`I_1 + 6I_2 + 2I_3 = 10`} tag="3.61(b)" />
          <p>For the closed loop BCDEB we get</p>
          <FormulaBlock latex={String.raw`5 - 2(I_2 + I_3) - 2(I_2 + I_3 - I_1) = 0`} />
          <p>that is,</p>
          <FormulaBlock latex={String.raw`2I_1 - 4I_2 - 4I_3 = -5`} tag="3.61(c)" />
          <p>
            Equations (3.61a, b, c) are three simultaneous equations in three unknowns. Adding the first two eliminates
            the last two terms and gives
          </p>
          <FormulaBlock latex={String.raw`8I_1 = 20 \quad \Rightarrow \quad I_1 = 2.5\ \text{A}`} />
          <p>
            Substituting <Formula>{String.raw`I_1 = 2.5\ \text{A}`}</Formula> in (3.61b) gives{" "}
            <Formula>{String.raw`6I_2 + 2I_3 = 7.5`}</Formula>, and in (3.61c) gives{" "}
            <Formula>{String.raw`4I_2 + 4I_3 = 10`}</Formula>, that is{" "}
            <Formula>{String.raw`I_2 + I_3 = 2.5\ \text{A}`}</Formula>. Solving the pair,
          </p>
          <FormulaBlock latex={String.raw`I_2 = \frac{5}{8}\ \text{A}, \qquad I_3 = \frac{15}{8}\ \text{A}`} important />
          <p>The currents in the various branches of the network are then</p>
          <TableCard
            headers={["Branch", "Current"]}
            rows={[
              { cells: ["AB", "5/8 A"] },
              { cells: ["BC", "5/2 A"] },
              { cells: ["CA", "5/2 A"] },
              { cells: ["AD", "15/8 A"] },
              { cells: ["DEB", "15/8 A"] },
              { cells: ["CD", "0 A"] },
            ]}
            caption="The branch currents follow from I₁ = 2.5 A, I₂ = 5/8 A and I₃ = 15/8 A through the junction rule at each node."
          />
          <p>
            It is easily verified that the loop rule applied to the remaining closed loops does not provide any
            additional independent equation. For example, for the loop ADCA,
          </p>
          <FormulaBlock latex={String.raw`10 - 4(2.5 - 0.625) + 2(0.625 + 1.875 - 2.5) - 2.5 = 10 - 7.5 + 0 - 2.5 = 0`} />
          <p>as required by Kirchhoff&apos;s second rule.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-3-13">3.13 Wheatstone Bridge</h2>
      <p>
        As an application of Kirchhoff&apos;s rules, consider the circuit known as the <strong>Wheatstone bridge</strong>. It
        has four resistors <Formula>{String.raw`R_1, R_2, R_3, R_4`}</Formula>.
      </p>
      <ul>
        <li>A source is connected across one pair of diagonally opposite points — AC in the figure — called the <strong>battery arm</strong>.</li>
        <li>Between the other two vertices B and D a galvanometer G, a device to detect currents, is connected; BD is called the <strong>galvanometer arm</strong>.</li>
        <li>For simplicity the cell is taken to have no internal resistance.</li>
        <li>In general there are currents in all the resistors as well as a current <Formula>{String.raw`I_g`}</Formula> through G.</li>
        <li>Of special interest is the <em>balanced</em> bridge, for which the resistors are such that <Formula>{String.raw`I_g = 0`}</Formula>.</li>
      </ul>
      <FigureShell
        number="Figure 3.18"
        caption="The Wheatstone bridge. R₁ is in arm AB, R₂ in BC, R₃ in AD and R₄ in DC; the galvanometer is across BD and the battery across AC. When the bridge is balanced the galvanometer shows no deflection."
      >
        <WheatstoneFigure />
      </FigureShell>
      <Expandable title="Derivation — the balance condition of a Wheatstone bridge">
        <Stepper
          steps={[
            {
              label: "Balance means no current through the galvanometer",
              description: "Set I_g = 0 in the galvanometer arm BD.",
            },
            {
              label: "Apply the junction rule at B and D",
              description: "At B the current I₁ arriving from A leaves entirely through R₂; at D the current I₂ arriving from A leaves entirely through R₄. So the current I₁ continues unchanged through R₁ and R₂, and I₂ through R₃ and R₄.",
            },
            {
              label: "Apply the loop rule to ABDA",
              description: "Traversing A → B → D → A, the drop across R₁ is balanced by the rise across R₃.",
            },
            {
              label: "Apply the loop rule to BCDB",
              description: "Traversing B → C → D → B, the drop across R₂ is balanced by the rise across R₄.",
            },
            {
              label: "Divide the two equations",
              description: "The ratio I₁/I₂ cancels, leaving a relation between the four resistances alone — the balance condition.",
            },
          ]}
        />
        <FormulaBlock latex={String.raw`-I_1 R_1 + 0 + I_2 R_3 = 0 \qquad (I_g = 0)`} tag="3.62" />
        <FormulaBlock latex={String.raw`-I_1 R_2 + I_2 R_4 + 0 = 0`} tag="3.63" />
        <FormulaBlock latex={String.raw`\frac{I_1}{I_2} = \frac{R_3}{R_1} \qquad \text{and} \qquad \frac{I_1}{I_2} = \frac{R_4}{R_2}`} />
        <FormulaBlock latex={String.raw`\frac{R_2}{R_1} = \frac{R_4}{R_3}`} important tag="3.64(a)" />
      </Expandable>
      <Callout type="important">
        The relation <Formula>{String.raw`R_2/R_1 = R_4/R_3`}</Formula> — equivalently{" "}
        <Formula>{String.raw`R_1/R_2 = R_3/R_4`}</Formula> — is called the <strong>balance condition</strong> for the
        galvanometer to give zero or null deflection.
      </Callout>
      <p>
        The bridge and its balance condition provide{" "}
        <Highlight>a practical method for determining an unknown resistance</Highlight>. Insert the unknown in the
        fourth arm, keep known resistances <Formula>{String.raw`R_1`}</Formula> and{" "}
        <Formula>{String.raw`R_2`}</Formula> in the first and second arms, and vary{" "}
        <Formula>{String.raw`R_3`}</Formula> until the galvanometer shows a null deflection.
      </p>
      <FormulaBlock latex={String.raw`R_4 = R_3 \frac{R_2}{R_1}`} tag="3.64(b)" />
      <p>A practical device using this principle is called the <strong>meter bridge</strong>.</p>
      <Callout type="note">
        The rationalised edition of this chapter ends with the Wheatstone bridge. The detailed treatment of the metre
        bridge and of the potentiometer (comparing emfs, measuring internal resistance) is not part of this chapter, so
        it is not covered here.
      </Callout>

      <Expandable title="Example 3.7 — Current through the galvanometer of an unbalanced bridge" variant="example">
        <ProblemSolution.Problem>
          <p>
            The four arms of a Wheatstone bridge have the following resistances: AB = 100 Ω, BC = 10 Ω, CD = 5 Ω and
            DA = 60 Ω. A galvanometer of 15 Ω resistance is connected across BD. Calculate the current through the
            galvanometer when a potential difference of 10 V is maintained across AC.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Considering the mesh BADB, we have</p>
          <FormulaBlock latex={String.raw`100 I_1 + 15 I_g - 60 I_2 = 0`} />
          <p>or</p>
          <FormulaBlock latex={String.raw`20 I_1 + 3 I_g - 12 I_2 = 0`} tag="3.65(a)" />
          <p>Considering the mesh BCDB, we have</p>
          <FormulaBlock latex={String.raw`10(I_1 - I_g) - 15 I_g - 5(I_2 + I_g) = 0`} />
          <FormulaBlock latex={String.raw`10 I_1 - 30 I_g - 5 I_2 = 0`} />
          <p>or</p>
          <FormulaBlock latex={String.raw`2 I_1 - 6 I_g - I_2 = 0`} tag="3.65(b)" />
          <p>Considering the mesh ADCEA,</p>
          <FormulaBlock latex={String.raw`60 I_2 + 5(I_2 + I_g) = 10`} />
          <FormulaBlock latex={String.raw`65 I_2 + 5 I_g = 10`} />
          <p>or</p>
          <FormulaBlock latex={String.raw`13 I_2 + I_g = 2`} tag="3.65(c)" />
          <p>Multiplying Eq. (3.65b) by 10,</p>
          <FormulaBlock latex={String.raw`20 I_1 - 60 I_g - 10 I_2 = 0`} tag="3.65(d)" />
          <p>From Eqs. (3.65d) and (3.65a) we have</p>
          <FormulaBlock latex={String.raw`63 I_g - 2 I_2 = 0 \quad \Rightarrow \quad I_2 = 31.5 I_g`} tag="3.65(e)" />
          <p>Substituting the value of <Formula>{String.raw`I_2`}</Formula> into Eq. (3.65c), we get</p>
          <FormulaBlock latex={String.raw`13(31.5 I_g) + I_g = 2`} />
          <FormulaBlock latex={String.raw`410.5 I_g = 2`} />
          <FormulaBlock latex={String.raw`I_g = 4.87\ \text{mA}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-3-units">Quantities, Units and Dimensions</h2>
      <p>The quantities introduced in this chapter, with their dimensions, SI units and defining relations:</p>
      <TableCard
        headers={["Quantity", "Symbol", "Dimensions", "SI unit", "Remark"]}
        rows={[
          { cells: ["Electric current", "I", "[A]", "A", "SI base unit"] },
          { cells: ["Charge", "Q, q", "[T A]", "C", "—"] },
          { cells: ["Voltage, electric potential difference", "V", "[M L² T⁻³ A⁻¹]", "V", "Work/charge"] },
          { cells: ["Electromotive force", "ε", "[M L² T⁻³ A⁻¹]", "V", "Work/charge"] },
          { cells: ["Resistance", "R", "[M L² T⁻³ A⁻²]", "Ω", "R = V/I"] },
          { cells: ["Resistivity", "ρ", "[M L³ T⁻³ A⁻²]", "Ω m", "R = ρl/A"] },
          { cells: ["Electrical conductivity", "σ", "[M⁻¹ L⁻³ T³ A²]", "S", "σ = 1/ρ"] },
          { cells: ["Electric field", "E", "[M L T⁻³ A⁻¹]", "V m⁻¹", "Electric force/charge"] },
          { cells: ["Drift speed", "v_d", "[L T⁻¹]", "m s⁻¹", "v_d = eEτ/m"] },
          { cells: ["Relaxation time", "τ", "[T]", "s", "—"] },
          { cells: ["Current density", "j", "[L⁻² A]", "A m⁻²", "Current/area"] },
          { cells: ["Mobility", "μ", "[M⁻¹ L⁰ T² A]", "m² V⁻¹ s⁻¹", "|v_d|/E"] },
        ]}
        caption="Charge is [T A] because 1 C = 1 A × 1 s; resistivity and conductivity carry the extra powers of length that come from R = ρl/A."
      />

      <h2 id="h-3-exercises">Exercises</h2>
      <Expandable title="Exercise 3.1 – 3.9 — NCERT end-of-chapter questions" variant="exercise">
        <ExerciseQa
          questions={[
            "The storage battery of a car has an emf of 12 V. If the internal resistance of the battery is 0.4 Ω, what is the maximum current that can be drawn from the battery?",
            "A battery of emf 10 V and internal resistance 3 Ω is connected to a resistor. If the current in the circuit is 0.5 A, what is the resistance of the resistor? What is the terminal voltage of the battery when the circuit is closed?",
            "At room temperature (27.0 °C) the resistance of a heating element is 100 Ω. What is the temperature of the element if the resistance is found to be 117 Ω, given that the temperature coefficient of the material of the resistor is 1.70 × 10⁻⁴ °C⁻¹?",
            "A negligibly small current is passed through a wire of length 15 m and uniform cross-section 6.0 × 10⁻⁷ m², and its resistance is measured to be 5.0 Ω. What is the resistivity of the material at the temperature of the experiment?",
            "A silver wire has a resistance of 2.1 Ω at 27.5 °C, and a resistance of 2.7 Ω at 100 °C. Determine the temperature coefficient of resistivity of silver.",
            "A heating element using nichrome connected to a 230 V supply draws an initial current of 3.2 A which settles after a few seconds to a steady value of 2.8 A. What is the steady temperature of the heating element if the room temperature is 27.0 °C? Temperature coefficient of resistance of nichrome averaged over the temperature range involved is 1.70 × 10⁻⁴ °C⁻¹.",
            "Determine the current in each branch of the network shown in Fig. 3.20 of the textbook.",
            "A storage battery of emf 8.0 V and internal resistance 0.5 Ω is being charged by a 120 V dc supply using a series resistor of 15.5 Ω. What is the terminal voltage of the battery during charging? What is the purpose of having a series resistor in the charging circuit?",
            "The number density of free electrons in a copper conductor estimated in Example 3.1 is 8.5 × 10²⁸ m⁻³. How long does an electron take to drift from one end of a wire 3.0 m long to its other end? The area of cross-section of the wire is 2.0 × 10⁻⁶ m² and it is carrying a current of 3.0 A.",
          ]}
          answers={[
            <>
              The maximum current is drawn when the terminals are shorted, <Formula>{String.raw`R = 0`}</Formula>:{" "}
              <Formula>{String.raw`I_{\max} = \varepsilon/r = 12/0.4 = 30\ \text{A}`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`R = \varepsilon/I - r = 10/0.5 - 3 = 17\ \Omega`}</Formula>. Terminal voltage{" "}
              <Formula>{String.raw`V = IR = 0.5 \times 17 = 8.5\ \text{V}`}</Formula>, which checks with{" "}
              <Formula>{String.raw`\varepsilon - Ir = 10 - 1.5 = 8.5\ \text{V}`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`\Delta T = \frac{R - R_0}{R_0 \alpha} = \frac{17}{100 \times 1.70 \times 10^{-4}} = 1000\ ^\circ\text{C}`}</Formula>{" "}
              so <Formula>{String.raw`T = 27 + 1000 = 1027\ ^\circ\text{C}`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`\rho = \frac{R A}{l} = \frac{5.0 \times 6.0 \times 10^{-7}}{15} = 2.0 \times 10^{-7}\ \Omega\,\text{m}`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`\alpha = \frac{R_2 - R_1}{R_1 (T_2 - T_1)} = \frac{0.6}{2.1 \times 72.5} = 3.9 \times 10^{-3}\ ^\circ\text{C}^{-1}`}</Formula>.
            </>,
            <>
              The initial resistance is <Formula>{String.raw`R_1 = 230/3.2 = 71.9\ \Omega`}</Formula> and the steady one{" "}
              <Formula>{String.raw`R_2 = 230/2.8 = 82.1\ \Omega`}</Formula>. Then{" "}
              <Formula>{String.raw`\Delta T = \frac{R_2 - R_1}{R_1\alpha} \approx 840\ ^\circ\text{C}`}</Formula>, so the
              steady temperature is <Formula>{String.raw`27 + 840 \approx 867\ ^\circ\text{C}`}</Formula>.
            </>,
            <>
              The figure fixes the topology, so the method is the one used in Example 3.6: assign one unknown current to
              each branch, use the junction rule at every junction to reduce the number of unknowns, then apply the loop
              rule to as many independent loops as there are unknowns and solve the simultaneous equations. The number of
              independent loop equations equals the number of unknown branch currents.
            </>,
            <>
              During charging the current is driven against the battery emf:{" "}
              <Formula>{String.raw`I = \frac{120 - 8.0}{15.5 + 0.5} = 7.0\ \text{A}`}</Formula>. The terminal voltage is
              therefore <Formula>{String.raw`V = \varepsilon + Ir = 8.0 + 7.0 \times 0.5 = 11.5\ \text{V}`}</Formula>. The
              series resistor limits the charging current to a safe value — without it the current would be{" "}
              <Formula>{String.raw`(120 - 8.0)/0.5 = 224\ \text{A}`}</Formula>, which would damage the battery.
            </>,
            <>
              <Formula>{String.raw`v_d = \frac{I}{neA} = \frac{3.0}{8.5 \times 10^{28} \times 1.6 \times 10^{-19} \times 2.0 \times 10^{-6}} = 1.1 \times 10^{-4}\ \text{m s}^{-1}`}</Formula>.
              The time is <Formula>{String.raw`t = l/v_d = 3.0/(1.1 \times 10^{-4}) \approx 2.7 \times 10^{4}\ \text{s}`}</Formula>,
              about <Formula>{String.raw`7.6`}</Formula> hours.
            </>,
          ]}
        />
      </Expandable>
    </>
  );
}
