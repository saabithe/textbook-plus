import type { ReactNode } from "react";

import { Callout } from "@/components/content/Callout";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FactCard } from "@/components/content/concept/FactCard";
import { TableCard } from "@/components/content/data/TableCard";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";

/* ------------------------------------------------------------------ */
/* Figure shell + SVG primitives (local to this chapter)               */
/* ------------------------------------------------------------------ */

const ROSE = "#e11d48";
const EMERALD = "#10b981";
const VIOLET = "#8b5cf6";
const AMBER = "#f59e0b";
const STRUCT = "var(--foreground)";
const MUTED = "var(--muted-foreground)";

function Figure({ n, caption, children }: { n: string; caption: string; children: ReactNode }) {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
          Fig. {n}
        </span>
      </div>
      <div className="px-2 py-3">{children}</div>
      <figcaption className="px-4 pb-3 text-center text-[0.72rem] leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

function Lbl({
  x,
  y,
  children,
  anchor = "middle",
  color = MUTED,
  size = 10,
}: {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: "start" | "middle" | "end";
  color?: string;
  size?: number;
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={color === MUTED ? 500 : 700} fill={color}>
      {children}
    </text>
  );
}

function LblY({ x, y, children }: { x: number; y: number; children: ReactNode }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontSize={10}
      fontWeight={500}
      fill={MUTED}
      transform={`rotate(-90 ${x} ${y})`}
    >
      {children}
    </text>
  );
}

function Ray({
  d,
  color = STRUCT,
  dash,
  width = 1.6,
}: {
  d: string;
  color?: string;
  dash?: string;
  width?: number;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeDasharray={dash}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Fig. 11.1 — experimental arrangement                                */
/* ------------------------------------------------------------------ */

function PhotoelectricSetup() {
  return (
    <Figure
      n="11.1"
      caption="Experimental arrangement for the study of the photoelectric effect. Monochromatic light of short wavelength passes through the quartz window W and falls on the photosensitive plate C; the emitted electrons are collected by A, whose potential is set by the battery and reversed by a commutator."
    >
      <svg viewBox="0 0 440 285" className="h-auto w-full" role="img" aria-label="Photoelectric effect experimental set-up">
        <rect x="72" y="46" width="228" height="150" rx="16" fill="none" stroke={STRUCT} strokeWidth="1.8" strokeOpacity="0.55" />
        <line x1="112" y1="76" x2="112" y2="166" stroke={STRUCT} strokeWidth="4" strokeLinecap="round" />
        <line x1="252" y1="76" x2="252" y2="166" stroke={STRUCT} strokeWidth="4" strokeLinecap="round" />
        <Lbl x={112} y={68} color={STRUCT}>C</Lbl>
        <Lbl x={252} y={68} color={STRUCT}>A</Lbl>
        <line x1="72" y1="104" x2="72" y2="142" stroke={AMBER} strokeWidth={5} strokeLinecap="round" />
        <Lbl x={92} y={158} anchor="start" color={AMBER}>W</Lbl>
        <circle cx="20" cy="123" r="6" fill={ROSE} />
        <Lbl x={20} y={105} color={ROSE}>S</Lbl>
        <Ray d="M 28 123 L 62 123" color={ROSE} width={2} />
        <polygon points="70,123 60,119 60,127" fill={ROSE} />
        <circle cx="146" cy="123" r="3.6" fill={EMERALD} />
        <circle cx="178" cy="108" r="3.6" fill={EMERALD} />
        <circle cx="206" cy="138" r="3.6" fill={EMERALD} />
        <polygon points="162,123 154,120 154,126" fill={EMERALD} />
        <polygon points="194,108 186,105 186,111" fill={EMERALD} />
        <polygon points="222,138 214,135 214,141" fill={EMERALD} />
        <Lbl x={176} y={158} color={EMERALD}>e⁻</Lbl>
        <Ray d="M 112 166 L 112 218 L 158 218" />
        <Ray d="M 252 166 L 252 218 L 222 218" />
        <line x1="160" y1="208" x2="160" y2="228" stroke={STRUCT} strokeWidth="2.2" />
        <line x1="170" y1="213" x2="170" y2="223" stroke={STRUCT} strokeWidth="2.2" />
        <Ray d="M 170 218 L 196 218" />
        <circle cx="210" cy="218" r="12" fill="none" stroke={STRUCT} strokeWidth="1.6" />
        <Lbl x={210} y={222} color={STRUCT} size={9}>µA</Lbl>
        <Ray d="M 112 218 L 112 256 L 184 256" />
        <circle cx="198" cy="256" r="12" fill="none" stroke={STRUCT} strokeWidth="1.6" />
        <Lbl x={198} y={260} color={STRUCT} size={9}>V</Lbl>
        <Ray d="M 212 256 L 252 256 L 252 218" />
        <Lbl x={186} y={32}>Evacuated glass / quartz tube</Lbl>
        <Lbl x={196} y={246} size={9}>source of p.d.</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* Fig. 11.2 — photocurrent against intensity                          */
/* ------------------------------------------------------------------ */

function IntensityGraph() {
  return (
    <Figure
      n="11.2"
      caption="Variation of photocurrent with intensity of the incident light, at fixed frequency and fixed collector potential. The straight line through the origin means the photocurrent is directly proportional to the intensity."
    >
      <svg viewBox="0 0 350 235" className="h-auto w-full" role="img" aria-label="Photocurrent against intensity of light">
        <line x1="54" y1="186" x2="306" y2="186" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="314,186 304,182 304,190" fill={STRUCT} />
        <line x1="54" y1="186" x2="54" y2="44" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="54,36 50,46 58,46" fill={STRUCT} />
        <Ray d="M 54 186 L 262 62" color={ROSE} width={2.6} />
        <circle cx="54" cy="186" r="2.6" fill={ROSE} />
        <Lbl x={46} y={202}>O</Lbl>
        <Lbl x={190} y={216}>Intensity of incident light (I)</Lbl>
        <LblY x={24} y={112}>Photocurrent</LblY>
        <Lbl x={270} y={58} color={ROSE} anchor="start" size={9}>i ∝ I</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* Fig. 11.3 — photocurrent against collector potential, three I       */
/* ------------------------------------------------------------------ */

function PotentialGraph() {
  return (
    <Figure
      n="11.3"
      caption="Variation of photocurrent with collector-plate potential at three intensities I₁ < I₂ < I₃ of the same frequency. The saturation current rises with intensity, but all three curves cut the axis at the same stopping potential −V₀."
    >
      <svg viewBox="0 0 350 240" className="h-auto w-full" role="img" aria-label="Photocurrent against collector potential at three intensities">
        <line x1="36" y1="196" x2="320" y2="196" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="328,196 318,192 318,200" fill={STRUCT} />
        <line x1="156" y1="196" x2="156" y2="42" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="156,34 152,44 160,44" fill={STRUCT} />
        <Ray d="M 96 196 C 108 196 128 118 156 118 L 300 118" color={VIOLET} width={2.2} />
        <Ray d="M 96 196 C 112 196 130 92 156 92 L 300 92" color={AMBER} width={2.2} />
        <Ray d="M 96 196 C 116 196 132 66 156 66 L 300 66" color={ROSE} width={2.2} />
        <Lbl x={272} y={112} color={VIOLET} size={9}>I₁</Lbl>
        <Lbl x={272} y={86} color={AMBER} size={9}>I₂</Lbl>
        <Lbl x={272} y={60} color={ROSE} size={9}>I₃</Lbl>
        <Lbl x={96} y={214} color={ROSE}>−V₀</Lbl>
        <Lbl x={156} y={214}>O</Lbl>
        <Lbl x={326} y={214}>V</Lbl>
        <LblY x={112} y={112}>Photocurrent</LblY>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* Fig. 11.4 — photocurrent against potential, three frequencies       */
/* ------------------------------------------------------------------ */

function FrequencyGraph() {
  return (
    <Figure
      n="11.4"
      caption="Variation of photocurrent with collector-plate potential at three frequencies ν₁ < ν₂ < ν₃ of the same intensity. The saturation current is the same in all three cases, but the stopping potential becomes more negative as the frequency rises: V₀₃ > V₀₂ > V₀₁."
    >
      <svg viewBox="0 0 360 250" className="h-auto w-full" role="img" aria-label="Photocurrent against collector potential at three frequencies">
        <line x1="30" y1="200" x2="330" y2="200" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="338,200 328,196 328,204" fill={STRUCT} />
        <line x1="160" y1="200" x2="160" y2="42" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="160,34 156,44 164,44" fill={STRUCT} />
        <Ray d="M 72 200 C 96 200 132 66 160 66 L 312 66" color={VIOLET} width={2.2} />
        <Ray d="M 104 200 C 118 200 138 66 160 66 L 312 66" color={AMBER} width={2.2} />
        <Ray d="M 138 200 C 146 200 154 66 160 66 L 312 66" color={ROSE} width={2.2} />
        <Lbl x={286} y={58} color={STRUCT} size={9}>saturation current</Lbl>
        <Lbl x={70} y={218} color={VIOLET}>−V₀₃</Lbl>
        <Lbl x={104} y={234} color={AMBER}>−V₀₂</Lbl>
        <Lbl x={140} y={218} color={ROSE}>−V₀₁</Lbl>
        <Lbl x={176} y={218}>O</Lbl>
        <Lbl x={332} y={218}>V</Lbl>
        <LblY x={130} y={112}>Photocurrent</LblY>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* Fig. 11.5 — stopping potential against frequency                    */
/* ------------------------------------------------------------------ */

function StoppingPotentialGraph() {
  return (
    <Figure
      n="11.5"
      caption="Stopping potential V₀ against frequency ν of the incident radiation for a given photosensitive material. The graph is a straight line of slope h/e; it cuts the ν-axis at the threshold frequency ν₀ and the V₀-axis at −φ₀/e."
    >
      <svg viewBox="0 0 350 250" className="h-auto w-full" role="img" aria-label="Stopping potential against frequency of incident light">
        <line x1="60" y1="132" x2="316" y2="132" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="324,132 314,128 314,136" fill={STRUCT} />
        <line x1="96" y1="214" x2="96" y2="44" stroke={STRUCT} strokeWidth="1.6" />
        <polygon points="96,36 92,46 100,46" fill={STRUCT} />
        <Ray d="M 96 196 L 296 52" color={VIOLET} width={2.6} />
        <Ray d="M 96 132 L 96 196" color={MUTED} dash="4 4" width={1.2} />
        <Ray d="M 185 132 L 185 150" color={MUTED} dash="4 4" width={1.2} />
        <circle cx="96" cy="196" r="2.6" fill={VIOLET} />
        <Lbl x={86} y={200} anchor="end" color={VIOLET} size={9}>−φ₀/e</Lbl>
        <Lbl x={86} y={146}>O</Lbl>
        <Lbl x={185} y={164}>ν₀</Lbl>
        <Lbl x={322} y={146}>ν</Lbl>
        <LblY x={70} y={88}>V₀</LblY>
        <Lbl x={230} y={70} anchor="start" color={AMBER} size={9}>slope = h/e</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* Matter wave picture                                                 */
/* ------------------------------------------------------------------ */

function DeBroglieWave() {
  return (
    <Figure
      n="11.6"
      caption="A matter wave travelling with the particle. The wavelength λ is set by the momentum through the de Broglie relation λ = h/p, so a heavier or faster particle carries a shorter wave."
    >
      <svg viewBox="0 0 420 195" className="h-auto w-full" role="img" aria-label="Matter wave associated with a moving particle">
        <Ray d="M 24 90 L 404 90" color={MUTED} dash="4 5" width={1} />
        <circle cx="40" cy="90" r="13" fill={EMERALD} fillOpacity="0.22" stroke={EMERALD} strokeWidth="1.8" />
        <Lbl x={40} y={94} color={EMERALD} size={11}>m</Lbl>
        <Ray d="M 60 48 L 140 48" color={ROSE} width={1.8} />
        <polygon points="148,48 138,44 138,52" fill={ROSE} />
        <Lbl x={104} y={40} color={ROSE}>v</Lbl>
        <Ray
          d="M 62 90 C 72 46 92 46 102 90 C 112 134 132 134 142 90 C 152 46 172 46 182 90 C 192 134 212 134 222 90 C 232 46 252 46 262 90 C 272 134 292 134 302 90 C 312 46 332 46 342 90 C 352 134 372 134 382 90"
          color={VIOLET}
          width={2.2}
        />
        <Ray d="M 82 30 L 82 160" color={MUTED} dash="3 4" width={1} />
        <Ray d="M 162 30 L 162 160" color={MUTED} dash="3 4" width={1} />
        <Ray d="M 82 168 L 162 168" color={AMBER} width={1.6} />
        <polygon points="82,168 92,164 92,172" fill={AMBER} />
        <polygon points="162,168 152,164 152,172" fill={AMBER} />
        <Lbl x={122} y={186} color={AMBER}>λ = h/p</Lbl>
        <Lbl x={300} y={40} anchor="start" size={9}>matter wave</Lbl>
      </svg>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* Chapter                                                             */
/* ------------------------------------------------------------------ */

export default function DualNatureOfRadiationAndMatterChapter() {
  return (
    <>
      <h2 id="h-11-1">11.1 Introduction</h2>
      <p>
        Maxwell&apos;s equations of electromagnetism, and Hertz&apos;s experiments on the generation and detection of
        electromagnetic waves in 1887, had strongly established the <strong>wave nature of light</strong>.
      </p>
      <p>
        Towards the same period at the end of the nineteenth century, experiments on the conduction of electricity
        (electric discharge) through gases at low pressure in a discharge tube led to discoveries no less historic.
      </p>
      <ul>
        <li>At a sufficiently low pressure of about 0.001 mm of mercury column, a discharge takes place between the two electrodes when an electric field is applied to the gas in the tube.</li>
        <li>A fluorescent glow appears on the glass opposite the cathode.</li>
        <li>The colour of the glow depends on the type of glass — yellowish-green for soda glass.</li>
        <li>The cause of this fluorescence was attributed to radiation which appeared to be coming from the cathode.</li>
      </ul>
      <FactCard
        icon="◉"
        title="Cathode rays"
        definition="These radiations from the cathode were discovered in 1870 by William Crookes, who later, in 1879, suggested that they consisted of streams of fast-moving negatively charged particles."
      />
      <ul>
        <li>The British physicist J. J. Thomson confirmed this hypothesis.</li>
        <li>By applying mutually perpendicular electric and magnetic fields across the discharge tube, Thomson was the first to determine experimentally the speed and the specific charge (charge-to-mass ratio e/m) of the cathode-ray particles.</li>
        <li>The particles were found to travel with speeds ranging from about 0.1 to 0.2 times the speed of light.</li>
        <li>The presently accepted value of e/m is 1.76 × 10¹¹ C/kg.</li>
        <li>The value of e/m was independent of the nature of the metal used as the cathode, and of the gas introduced in the discharge tube.</li>
        <li>That independence suggested the <strong>universality</strong> of the cathode-ray particles.</li>
      </ul>
      <p>
        Around the same time, in 1887, it was found that certain metals, when irradiated by ultraviolet light, emitted
        negatively charged particles having small speeds. Certain metals heated to a high temperature were also found to
        emit negatively charged particles.
      </p>
      <ul>
        <li>The value of e/m of these particles was found to be the same as that of the cathode-ray particles.</li>
        <li>All these particles, although produced under different conditions, were therefore identical in nature.</li>
        <li>J. J. Thomson, in 1897, named these particles <strong>electrons</strong>, and suggested that they were fundamental, universal constituents of matter.</li>
        <li>He was awarded the Nobel Prize in Physics in 1906 for the discovery of the electron.</li>
      </ul>
      <p>
        In 1913, the American physicist R. A. Millikan performed the pioneering <strong>oil-drop experiment</strong> for
        the precise measurement of the charge on an electron.
      </p>
      <ul>
        <li>He found that the charge on an oil droplet was always an integral multiple of an elementary charge, 1.602 × 10⁻¹⁹ C.</li>
        <li>
          Millikan&apos;s experiment therefore established that{" "}
          <Highlight color="green">electric charge is quantised</Highlight>.
        </li>
        <li>From the values of the charge e and the specific charge e/m, the mass m of the electron could be determined.</li>
      </ul>
      <div className="grid gap-4 sm:grid-cols-3 [&>div]:my-0">
        <MetricCard label="Elementary charge" value="1.602 × 10⁻¹⁹" unit="C" description="Measured by Millikan; every droplet carried an integral multiple of it." />
        <MetricCard label="Specific charge e/m" value="1.76 × 10¹¹" unit="C kg⁻¹" description="Same for cathode rays, photoelectrons and thermionic electrons." />
        <MetricCard label="Electron mass" value="9.11 × 10⁻³¹" unit="kg" description="Obtained from e and e/m." />
      </div>
      <TableCard
        title="Milestones on the road to the electron"
        headers={["Year", "Physicist", "Contribution"]}
        rows={[
          { cells: ["1870", "William Crookes", "Discovered the cathode rays"] },
          { cells: ["1879", "William Crookes", "Suggested they are streams of fast-moving negative particles"] },
          { cells: ["1887", "Heinrich Hertz", "Observed photoelectric emission during his electromagnetic-wave experiments"] },
          { cells: ["1895", "W. C. Roentgen", "Discovered X-rays"] },
          { cells: ["1897", "J. J. Thomson", "Confirmed the cathode rays are electrons; measured v and e/m"] },
          { cells: ["1913", "R. A. Millikan", "Oil-drop experiment: electric charge is quantised"] },
        ]}
        caption="These discoveries were the first indication that matter itself is electrical in structure."
      />
      <KeyPoint title="Where this chapter goes">
        The same electron that Thomson pulled out of a discharge tube turns out to be the particle knocked out of a metal
        by light — and the light itself behaves like a stream of particles. At the far end, matter borrows the wave
        behaviour back from radiation.
      </KeyPoint>

      <h2 id="h-11-2">11.2 Electron Emission</h2>
      <p>
        Metals have <strong>free electrons</strong> — the negatively charged particles responsible for their
        conductivity. These electrons cannot normally escape out of the metal surface.
      </p>
      <ul>
        <li>If an electron attempts to come out of the metal, the metal surface acquires a positive charge and pulls the electron back.</li>
        <li>The free electron is held inside the metal surface by the attractive forces of the ions.</li>
        <li>It can come out only if it has sufficient energy to overcome the attractive pull.</li>
      </ul>
      <Callout type="important" title="Definition — work function">
        A certain minimum amount of energy is required to be given to an electron to pull it out from the surface of the
        metal. This <strong>minimum energy required by an electron to escape from the metal surface</strong> is called the{" "}
        <strong>work function</strong> of the metal.
      </Callout>
      <ul>
        <li>It is generally denoted by <Formula>{String.raw`\phi_0`}</Formula> and measured in eV (electron volt).</li>
        <li>The work function <Formula>{String.raw`\phi_0`}</Formula> depends on the properties of the metal and the nature of its surface.</li>
      </ul>
      <FactCard
        icon="⚡"
        title="One electron volt"
        definition="One electron volt is the energy gained by an electron when it has been accelerated by a potential difference of 1 volt, so that 1 eV = 1.602 × 10⁻¹⁹ J. This unit of energy is commonly used in atomic and nuclear physics."
      />
      <p>
        The minimum energy required for electron emission from the metal surface can be supplied to the free electrons by
        any one of three physical processes.
      </p>
      <TableCard
        title="The three routes out of the metal"
        headers={["Process", "How the escape energy is supplied", "Where you meet it"]}
        rows={[
          {
            cells: [
              "Thermionic emission",
              "By suitably heating, sufficient thermal energy is imparted to the free electrons to enable them to come out of the metal",
              "Electron guns, cathode-ray tubes, valves",
            ],
          },
          {
            cells: [
              "Field emission",
              "By applying a very strong electric field of the order of 10⁸ V m⁻¹, electrons are pulled out of the metal",
              "Spark plug, field-emission displays",
            ],
          },
          {
            cells: [
              "Photoelectric emission",
              "By illuminating the metal surface with light of suitable frequency, electrons are emitted from the surface",
              "Photocells, photomultipliers",
            ],
          },
        ]}
        caption="Electrons produced by light are called photoelectrons — photo(light)-generated electrons."
      />
      <Comparison
        columns={[
          {
            title: "Thermionic emission",
            children: (
              <ul>
                <li>Energy comes from <strong>heat</strong>.</li>
                <li>The metal is raised to a high temperature.</li>
                <li>Emission is a continuous function of temperature, not of any frequency.</li>
                <li>No threshold frequency is involved.</li>
              </ul>
            ),
          },
          {
            title: "Photoelectric emission",
            children: (
              <ul>
                <li>Energy comes from <strong>light</strong>.</li>
                <li>The metal stays cold; only its surface is illuminated.</li>
                <li>Emission needs a minimum frequency, the threshold frequency.</li>
                <li>Emission starts within about 10⁻⁹ s of illumination.</li>
              </ul>
            ),
          },
        ]}
      />

      <h2 id="h-11-3">11.3 The Photoelectric Effect</h2>
      <h3 id="h-11-3-1">11.3.1 Hertz&apos;s observations</h3>
      <p>
        The phenomenon of photoelectric emission was discovered in 1887 by Heinrich Hertz, during his electromagnetic
        wave experiments.
      </p>
      <ul>
        <li>In his investigation on the production of electromagnetic waves by means of a spark discharge, Hertz observed that high-voltage sparks across the detector loop were <strong>enhanced</strong> when the emitter plate was illuminated by ultraviolet light from an arc lamp.</li>
        <li>Light shining on the metal surface somehow facilitated the escape of free charged particles — electrons.</li>
        <li>When light falls on a metal surface, some electrons near the surface absorb enough energy from the incident radiation to overcome the attraction of the positive ions in the surface material.</li>
        <li>After gaining sufficient energy, those electrons escape from the surface into the surrounding space.</li>
      </ul>

      <h3 id="h-11-3-2">11.3.2 Hallwachs&apos; and Lenard&apos;s observations</h3>
      <p>
        Wilhelm Hallwachs and Philipp Lenard investigated the phenomenon of photoelectric emission in detail during
        1886–1902.
      </p>
      <ul>
        <li>Lenard observed that when ultraviolet radiations were allowed to fall on the emitter plate of an evacuated glass tube enclosing two electrodes, current flows in the circuit.</li>
        <li>As soon as the ultraviolet radiations were stopped, the current flow also stopped.</li>
        <li>Electrons are ejected from the emitter plate C and are attracted towards the positive collector plate A by the electric field.</li>
        <li>The electrons flow through the evacuated glass tube, producing the current — light falling on the surface of the emitter causes current in the external circuit.</li>
      </ul>
      <p>
        Hallwachs, in 1888, undertook the study further and connected a negatively charged zinc plate to an electroscope.
      </p>
      <ul>
        <li>The zinc plate <strong>lost</strong> its charge when it was illuminated by ultraviolet light.</li>
        <li>An uncharged zinc plate became <strong>positively</strong> charged when irradiated by ultraviolet light.</li>
        <li>The positive charge on a positively charged zinc plate was further enhanced under ultraviolet light.</li>
        <li>He concluded that negatively charged particles were emitted from the zinc plate under the action of ultraviolet light.</li>
      </ul>
      <Callout type="important" title="Definition — threshold frequency">
        When ultraviolet light fell on the emitter plate, <strong>no electrons were emitted at all when the frequency of
        the incident light was smaller than a certain minimum value</strong>, called the{" "}
        <strong>threshold frequency</strong>. This minimum frequency depends on the nature of the material of the emitter
        plate.
      </Callout>
      <FactCard
        icon="✦"
        title="Photoelectrons and the photoelectric effect"
        definition="After the discovery of electrons, the electrons emitted by light were termed photoelectrons, and the phenomenon is called the photoelectric effect."
      />
      <p>Different photosensitive materials respond to completely different regions of the spectrum.</p>
      <ul>
        <li>Certain metals like zinc, cadmium and magnesium responded only to ultraviolet light, having short wavelength.</li>
        <li>Some alkali metals — lithium, sodium, potassium, caesium and rubidium — were sensitive even to visible light.</li>
      </ul>
      <KeyPoint title="The puzzle in one line">
        If light were a wave, a brighter beam should always work and a dim one should merely take longer. The threshold
        frequency says otherwise — which is why this chapter had to be written.
      </KeyPoint>

      <h2 id="h-11-4">11.4 Experimental Study of the Photoelectric Effect</h2>
      <p>
        Fig. 11.1 depicts a schematic view of the arrangement used for the experimental study of the photoelectric effect.
      </p>
      <PhotoelectricSetup />
      <ul>
        <li>An evacuated glass or quartz tube holds a thin photosensitive plate C and another metal plate A.</li>
        <li>Monochromatic light from the source S of sufficiently short wavelength passes through the window W and falls on the photosensitive plate C (emitter).</li>
        <li>A transparent <strong>quartz window</strong> is sealed onto the glass tube; it permits ultraviolet radiation to pass through and irradiate plate C.</li>
        <li>Electrons emitted by plate C are collected by the plate A (collector), by the electric field created by the battery.</li>
        <li>The battery maintains the potential difference between C and A, which can be varied.</li>
        <li>The polarity of the plates can be reversed by a <strong>commutator</strong>, so A can be kept at any desired positive or negative potential with respect to C.</li>
        <li>The potential difference is measured by a voltmeter and the resulting photocurrent by a microammeter.</li>
        <li>Light of different frequencies is obtained by putting an appropriate coloured filter in the path of the light; the intensity is varied by changing the distance of the source from the emitter.</li>
      </ul>
      <Callout type="note" title="Four variables, one apparatus">
        The same arrangement is used to study the variation of photocurrent with (a) the intensity of radiation, (b) the
        frequency of incident radiation, (c) the potential difference between A and C, and (d) the nature of the material
        of plate C.
      </Callout>

      <h3 id="h-11-4-1">11.4.1 Effect of intensity of light on photocurrent</h3>
      <ul>
        <li>The collector A is kept at a positive potential with respect to emitter C, so the ejected electrons are attracted towards A.</li>
        <li>With the frequency and the potential kept fixed, the intensity of light is varied and the photocurrent measured each time.</li>
        <li>The photocurrent increases <strong>linearly</strong> with the intensity of incident light.</li>
        <li>The photocurrent is directly proportional to the number of photoelectrons emitted per second.</li>
        <li>Hence the number of photoelectrons emitted per second is directly proportional to the intensity of the incident radiation.</li>
      </ul>
      <IntensityGraph />

      <h3 id="h-11-4-2">11.4.2 Effect of potential on photoelectric current</h3>
      <ul>
        <li>Plate A is first kept at a positive potential with respect to C, with light of fixed frequency ν and fixed intensity I₁.</li>
        <li>The photocurrent increases with an increase in the positive (accelerating) potential.</li>
        <li>At a certain positive potential of A, all the emitted electrons are collected and the current becomes maximum.</li>
        <li>Increasing the accelerating potential further does not increase the photocurrent.</li>
      </ul>
      <Callout type="important" title="Definition — saturation current">
        This maximum value of the photoelectric current is called the <strong>saturation current</strong>. Saturation
        current corresponds to the case when all the photoelectrons emitted by the emitter plate C reach the collector
        plate A.
      </Callout>
      <ul>
        <li>A negative (retarding) potential is now applied to plate A and made increasingly negative.</li>
        <li>Electrons are repelled, and only the sufficiently energetic ones reach the collector.</li>
        <li>The photocurrent decreases rapidly until it drops to zero at a certain sharply defined, critical value of the negative potential V₀.</li>
      </ul>
      <Callout type="important" title="Definition — stopping (cut-off) potential">
        For a particular frequency of incident radiation, the <strong>minimum negative (retarding) potential V₀</strong>{" "}
        given to plate A for which the photocurrent stops or becomes zero is called the{" "}
        <strong>cut-off or stopping potential</strong>.
      </Callout>
      <p>
        All the photoelectrons emitted from the metal do not have the same energy. The photocurrent is zero when the
        stopping potential is sufficient to repel even the most energetic photoelectrons, with the maximum kinetic energy{" "}
        <Formula>{String.raw`K_{\max}`}</Formula>, so that
      </p>
      <FormulaBlock latex={String.raw`K_{\max}=eV_0`} important tag="Eq. 11.1" />
      <p>
        The experiment is repeated with radiation of the same frequency but of higher intensities I₂ and I₃, with
        I₃ &gt; I₂ &gt; I₁.
      </p>
      <ul>
        <li>The saturation currents are now found to be at higher values.</li>
        <li>More electrons are emitted per second, in proportion to the intensity of the incident radiation.</li>
        <li>The stopping potential, however, remains the same as it was for intensity I₁.</li>
      </ul>
      <PotentialGraph />
      <p>
        Thus, for a given frequency of the incident radiation,{" "}
        <Highlight color="yellow">the stopping potential is independent of its intensity</Highlight>. In other words, the
        maximum kinetic energy of the photoelectrons depends on the light source and the emitter plate material, but is
        independent of the intensity of the incident radiation.
      </p>
      <MistakeCard
        mistake="Treating the stopping potential as an energy, and reporting K_max in joules as numerically equal to V₀."
        correction="K_max = eV₀, so the kinetic energy in electron volts equals V₀ in volts — but in joules it must be multiplied by e = 1.6 × 10⁻¹⁹ C."
        example="V₀ = 1.5 V means K_max = 1.5 eV = 1.5 × 1.6 × 10⁻¹⁹ = 2.4 × 10⁻¹⁹ J."
      />
      <MistakeCard
        mistake="Expecting a brighter (more intense) beam to eject faster photoelectrons."
        correction="Intensity fixes how many photons arrive per second, so it fixes the photocurrent. The energy of each photon, and hence the maximum kinetic energy, is fixed by the frequency alone."
        example="At the same frequency, doubling the intensity doubles the saturation current but leaves V₀ untouched."
      />

      <h3 id="h-11-4-3">11.4.3 Effect of frequency on stopping potential</h3>
      <p>
        The same intensity of light is adjusted at various frequencies, and the variation of photocurrent with collector
        plate potential is studied again.
      </p>
      <ul>
        <li>Different values of stopping potential are obtained, but the <strong>same</strong> value of saturation current, for incident radiation of different frequencies.</li>
        <li>The energy of the emitted electrons depends on the frequency of the incident radiations.</li>
        <li>The stopping potential is more negative for higher frequencies of incident radiation.</li>
        <li>The stopping potentials are in the order V₀₃ &gt; V₀₂ &gt; V₀₁ when the frequencies are in the order ν₃ &gt; ν₂ &gt; ν₁.</li>
        <li>The greater the frequency of incident light, the greater is the maximum kinetic energy of the photoelectrons, and the greater the retarding potential needed to stop them completely.</li>
      </ul>
      <FrequencyGraph />
      <p>
        A graph between the frequency of incident radiation and the corresponding stopping potential, for different
        metals, gives a straight line. The graph shows that
      </p>
      <ul>
        <li>the stopping potential V₀ varies <strong>linearly</strong> with the frequency of incident radiation for a given photosensitive material;</li>
        <li>there exists a certain minimum cut-off frequency ν₀ for which the stopping potential is zero.</li>
      </ul>
      <StoppingPotentialGraph />
      <p>These observations have two implications.</p>
      <ul>
        <li>
          The maximum kinetic energy of the photoelectrons varies linearly with the frequency of incident radiation, but
          is independent of its intensity.
        </li>
        <li>
          For a frequency ν of incident radiation lower than the cut-off frequency ν₀, no photoelectric emission is
          possible even if the intensity is large.
        </li>
      </ul>
      <ul>
        <li>This minimum cut-off frequency ν₀ is called the <strong>threshold frequency</strong>, and it is different for different metals.</li>
        <li>Different photosensitive materials respond differently to light: selenium is more sensitive than zinc or copper.</li>
        <li>The same substance gives a different response to light of different wavelengths — ultraviolet gives rise to photoelectric effect in copper, while green or red light does not.</li>
        <li>If the frequency of the incident radiation exceeds the threshold frequency, the photoelectric emission starts <strong>instantaneously</strong>, without any apparent time lag, even if the incident radiation is very dim.</li>
        <li>Emission starts in a time of the order of 10⁻⁹ s or less.</li>
      </ul>
      <TableCard
        title="The four experimental facts"
        headers={["Observation", "Quantitative statement"]}
        rows={[
          { cells: ["Photocurrent against intensity", "For a given material and frequency above ν₀, the photocurrent is directly proportional to the intensity of incident light"] },
          { cells: ["Saturation current against intensity", "Saturation current is proportional to intensity, whereas the stopping potential is independent of intensity"] },
          { cells: ["Threshold frequency", "Below ν₀ no emission at all, however intense the light; above ν₀ the stopping potential increases linearly with frequency"] },
          { cells: ["Time lag", "Emission is instantaneous, with a lag of about 10⁻⁹ s or less, even for exceedingly dim light"] },
        ]}
        caption="Facts one and four fix the number of electrons; two and three fix their energy. No single classical picture can do both."
      />

      <h2 id="h-11-5">11.5 Photoelectric Effect and Wave Theory of Light</h2>
      <p>
        The wave nature of light was well established by the end of the nineteenth century. Interference, diffraction
        and polarisation were explained in a natural and satisfactory way by the wave picture, in which light is an
        electromagnetic wave with a <strong>continuous distribution of energy</strong> over the region of space in which
        the wave is extended.
      </p>
      <p>Compare what that continuous picture predicts with what the experiment shows.</p>
      <ul>
        <li>The free electrons at the surface absorb the radiant energy <strong>continuously</strong>.</li>
        <li>The greater the intensity, the greater the amplitude of the electric and magnetic fields.</li>
        <li>Hence the greater the intensity, the greater should be the energy absorbed by each electron.</li>
        <li>The maximum kinetic energy would then be expected to increase with increase in intensity — which is not observed.</li>
        <li>No matter what the frequency is, a sufficiently intense beam acting over sufficient time should be able to give an electron enough energy to escape.</li>
        <li>A threshold frequency, therefore, should not exist — yet it does.</li>
      </ul>
      <p>
        In the wave picture the absorption of energy by an electron takes place continuously over the entire wavefront of
        the radiation.
      </p>
      <ul>
        <li>Since a large number of electrons absorb energy, the energy absorbed per electron per unit time turns out to be small.</li>
        <li>Explicit calculations estimate that it can take <strong>hours or more</strong> for a single electron to pick up sufficient energy to overcome the work function.</li>
        <li>This is in striking contrast to the observation that photoelectric emission is instantaneous.</li>
      </ul>
      <Callout type="warning" title="Verdict on the wave picture">
        The wave picture is unable to explain the most basic features of photoelectric emission — the independence of
        K_max from intensity, the existence of a threshold frequency, and the instantaneous nature of the process.
      </Callout>

      <h2 id="h-11-6">11.6 Einstein&apos;s Photoelectric Equation: Energy Quantum of Radiation</h2>
      <p>
        In 1905, Albert Einstein proposed a radically new picture of electromagnetic radiation to explain the
        photoelectric effect.
      </p>
      <ul>
        <li>Photoelectric emission does <strong>not</strong> take place by continuous absorption of energy from radiation.</li>
        <li>Radiation energy is built up of discrete units — the so-called <strong>quanta</strong> of energy of radiation.</li>
        <li>Each quantum of radiant energy has energy hν, where h is Planck&apos;s constant and ν the frequency of light.</li>
        <li>In the photoelectric effect an electron absorbs a <strong>single</strong> quantum of energy hν of radiation.</li>
      </ul>
      <Callout type="important" title="Einstein&apos;s photoelectric equation">
        If this quantum of energy absorbed exceeds the minimum energy needed for the electron to escape from the metal
        surface (work function φ₀), the electron is emitted with maximum kinetic energy{" "}
        <Formula>{String.raw`K_{\max}=h\nu-\phi_0`}</Formula>.
      </Callout>
      <FormulaBlock latex={String.raw`K_{\max}=h\nu-\phi_0`} important label="Einstein's photoelectric equation" tag="Eq. 11.2" />
      <ul>
        <li>More tightly bound electrons emerge with kinetic energies less than this maximum value.</li>
        <li>The intensity of light of a given frequency is determined by the number of photons incident per second.</li>
        <li>Increasing the intensity increases the number of emitted electrons per second.</li>
        <li>The maximum kinetic energy of the emitted photoelectrons is determined by the energy of each photon.</li>
      </ul>
      <p>How this one equation accounts for every observation:</p>
      <Stepper
        steps={[
          {
            label: "K_max depends linearly on ν and not on intensity",
            description: (
              <>
                In Einstein&apos;s picture the effect arises from the absorption of a <em>single</em> quantum by a{" "}
                <em>single</em> electron. The intensity, which is proportional to the number of quanta per unit area per
                unit time, is irrelevant to this basic process.
              </>
            ),
          },
          {
            label: "A threshold frequency must exist",
            description: (
              <>
                Since <Formula>{String.raw`K_{\max}`}</Formula> must be non-negative, emission is possible only if{" "}
                <Formula>{String.raw`h\nu>\phi_0`}</Formula>, that is <Formula>{String.raw`\nu>\nu_0`}</Formula>.
              </>
            ),
          },
          {
            label: "Below ν₀ nothing happens, however intense the light",
            description:
              "No matter how many quanta arrive, each carries energy hν < φ₀ — too little for any one electron to escape, and an electron absorbs only one quantum.",
          },
          {
            label: "Photocurrent is proportional to intensity",
            description:
              "The greater the number of energy quanta available, the greater the number of electrons absorbing quanta, and hence the greater the number of electrons coming out of the metal for ν > ν₀.",
          },
          {
            label: "Emission is instantaneous",
            description:
              "The elementary process is the absorption of one light quantum by one electron. Low intensity does not mean delay; it only means that fewer electrons take part in the process.",
          },
        ]}
      />
      <p>Equation (11.3) follows from the threshold condition:</p>
      <FormulaBlock latex={String.raw`\nu_0=\frac{\phi_0}{h}`} important label="Threshold frequency" tag="Eq. 11.3" />
      <ul>
        <li>The greater the work function φ₀, the higher the minimum or threshold frequency ν₀ needed to emit photoelectrons.</li>
        <li>Below ν₀ no photoelectric emission is possible, no matter how intense the incident radiation may be or how long it falls on the surface.</li>
      </ul>
      <p>
        Using <Formula>{String.raw`K_{\max}=eV_0`}</Formula>, the photoelectric equation can be rewritten as a straight-line
        relation between the stopping potential and the frequency.
      </p>
      <Stepper
        steps={[
          {
            label: (
              <>
                Start from <Formula>{String.raw`K_{\max}=h\nu-\phi_0`}</Formula>
              </>
            ),
            description: "Energy conservation for one photon absorbed by one electron.",
          },
          {
            label: (
              <>
                Replace <Formula>{String.raw`K_{\max}`}</Formula> by <Formula>{String.raw`eV_0`}</Formula>
              </>
            ),
            description: (
              <>
                <Formula>{String.raw`eV_0=h\nu-\phi_0,\quad \nu\ge\nu_0`}</Formula>
              </>
            ),
          },
          {
            label: "Divide throughout by e",
            description: (
              <>
                <Formula>{String.raw`V_0=\frac{h}{e}\nu-\frac{\phi_0}{e}`}</Formula>
              </>
            ),
          },
          {
            label: "Read off the graph",
            description:
              "The V₀ against ν curve is a straight line whose slope h/e is independent of the material; the intercept on the V₀-axis gives −φ₀/e and the intercept on the ν-axis gives ν₀.",
          },
        ]}
      />
      <FormulaBlock latex={String.raw`eV_0=h\nu-\phi_0\quad\Longrightarrow\quad V_0=\frac{h}{e}\nu-\frac{\phi_0}{e}`} important tag="Eq. 11.4" />
      <MetricCard
        label="Planck's constant"
        value="6.626 × 10⁻³⁴"
        unit="J s"
        trend="neutral"
        description="Millikan obtained a value close to this from the slope of the V₀–ν line, in an experiment designed to disprove Einstein's equation."
      />
      <Callout type="tip" title="One number worth memorising">
        <Formula>{String.raw`hc\approx 1240\ \text{eV nm}`}</Formula> — so a photon of wavelength λ nm carries about
        1240/λ eV, which turns photoelectric numericals into one division.
      </Callout>
      <p>
        During 1906–1916, Millikan performed a series of experiments on the photoelectric effect aimed at{" "}
        <em>disproving</em> Einstein&apos;s equation.
      </p>
      <ul>
        <li>He measured the slope of the straight line obtained for sodium.</li>
        <li>Using the known value of e, he determined the value of Planck&apos;s constant h.</li>
        <li>That value was close to the one obtained in an entirely different context (blackbody radiation).</li>
        <li>In this way, in 1916, Millikan <strong>proved the validity</strong> of Einstein&apos;s photoelectric equation instead of disproving it.</li>
        <li>He verified it with great precision for a number of alkali metals over a wide range of radiation frequencies.</li>
      </ul>

      <Expandable title="Example 11.1 — Photons per second from a laser" variant="example">
        <ProblemSolution.Problem>
          <p>
            Monochromatic light of frequency 6.0 × 10¹⁴ Hz is produced by a laser. The power emitted is 2.0 × 10⁻³ W.
            (a) What is the energy of a photon in the light beam? (b) How many photons per second, on an average, are
            emitted by the source?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a)</strong> Each photon has an energy
          </p>
          <FormulaBlock latex={String.raw`E=h\nu=(6.63\times10^{-34}\ \text{J s})(6.0\times10^{14}\ \text{Hz})`} />
          <FormulaBlock latex={String.raw`E=3.98\times10^{-19}\ \text{J}`} important />
          <p>
            <strong>(b)</strong> If N is the number of photons emitted by the source per second, the power P transmitted
            in the beam equals N times the energy per photon E, so that{" "}
            <Formula>{String.raw`P=NE`}</Formula>. Then
          </p>
          <FormulaBlock latex={String.raw`N=\frac{P}{E}=\frac{2.0\times10^{-3}\ \text{W}}{3.98\times10^{-19}\ \text{J}}`} />
          <FormulaBlock latex={String.raw`N=5.0\times10^{15}\ \text{photons per second}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 11.2 — Caesium: threshold frequency and wavelength" variant="example">
        <ProblemSolution.Problem>
          <p>
            The work function of caesium is 2.14 eV. Find (a) the threshold frequency for caesium, and (b) the wavelength
            of the incident light if the photocurrent is brought to zero by a stopping potential of 0.60 V.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a)</strong> For the cut-off or threshold frequency, the energy hν₀ of the incident radiation must
            equal the work function φ₀, so that
          </p>
          <FormulaBlock latex={String.raw`\nu_0=\frac{\phi_0}{h}=\frac{2.14\ \text{eV}}{6.63\times10^{-34}\ \text{J s}}`} />
          <FormulaBlock latex={String.raw`\nu_0=\frac{2.14\times1.6\times10^{-19}\ \text{J}}{6.63\times10^{-34}\ \text{J s}}=5.16\times10^{14}\ \text{Hz}`} important />
          <p>Thus, for frequencies less than this threshold frequency, no photoelectrons are ejected.</p>
          <p>
            <strong>(b)</strong> The photocurrent reduces to zero when the maximum kinetic energy of the emitted
            photoelectrons equals the potential energy eV₀ provided by the retarding potential V₀. Einstein&apos;s
            photoelectric equation is
          </p>
          <FormulaBlock latex={String.raw`eV_0=h\nu-\phi_0=\frac{hc}{\lambda}-\phi_0`} />
          <FormulaBlock latex={String.raw`\lambda=\frac{hc}{eV_0+\phi_0}`} />
          <FormulaBlock latex={String.raw`\lambda=\frac{(6.63\times10^{-34}\ \text{J s})(3\times10^{8}\ \text{m/s})}{(0.60\ \text{eV}+2.14\ \text{eV})}`} />
          <FormulaBlock latex={String.raw`\lambda=\frac{19.89\times10^{-26}\ \text{J m}}{2.74\times1.6\times10^{-19}\ \text{J}}`} />
          <FormulaBlock latex={String.raw`\lambda=454\ \text{nm}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-11-7">11.7 Particle Nature of Light: The Photon</h2>
      <p>
        The photoelectric effect gave evidence to a strange fact: in interaction with matter, light behaved as if it was
        made of quanta or packets of energy, each of energy hν.
      </p>
      <ul>
        <li>Einstein arrived at the important result that the light quantum can also be associated with momentum hν/c.</li>
        <li>A definite value of energy <em>as well as</em> momentum is a strong sign that the light quantum can be associated with a particle.</li>
        <li>This particle was later named the <strong>photon</strong>.</li>
        <li>The particle-like behaviour of light was further confirmed in 1924 by the experiment of A. H. Compton on the scattering of X-rays from electrons.</li>
        <li>Einstein was awarded the Nobel Prize in Physics in 1921 for his contribution to theoretical physics and the photoelectric effect.</li>
        <li>Millikan was awarded the Nobel Prize in Physics in 1923 for his work on the elementary charge of electricity and on the photoelectric effect.</li>
      </ul>
      <Callout type="important" title="The photon picture — statement (i)">
        In interaction of radiation with matter, radiation behaves as if it is made up of particles called{" "}
        <strong>photons</strong>.
      </Callout>
      <ul>
        <li>All photons of light of a particular frequency ν, or wavelength λ, have the same energy and momentum, whatever the intensity of the radiation may be.</li>
        <li>
          Increasing the intensity of light of a given wavelength only increases the number of photons per second crossing
          a given area;{" "}
          <Highlight color="yellow">each photon keeps the same energy, so photon energy is independent of intensity</Highlight>.
        </li>
        <li>Photons are electrically neutral and are not deflected by electric and magnetic fields.</li>
        <li>In a photon–particle collision (such as a photon–electron collision) the total energy and the total momentum are conserved.</li>
        <li>The number of photons, however, may not be conserved — a photon may be absorbed, or a new photon may be created.</li>
      </ul>
      <FormulaCard>
        <p className="text-[0.75rem] font-medium text-muted-foreground">Energy and momentum of a photon — must-memorise pair</p>
        <FormulaBlock latex={String.raw`E=h\nu=\frac{hc}{\lambda}`} important />
        <FormulaBlock latex={String.raw`p=\frac{h\nu}{c}=\frac{h}{\lambda}`} important />
      </FormulaCard>
      <KeyPoint title="Energy is fixed by frequency, numbers by intensity">
        Photon energy is independent of the intensity of radiation. Intensity decides how many photons arrive per second —
        hence the photocurrent — while frequency decides how energetic each one is — hence the maximum kinetic energy of
        the ejected electrons.
      </KeyPoint>

      <h2 id="h-11-8">11.8 Wave Nature of Matter</h2>
      <p>
        The dual (wave–particle) nature of light comes out clearly from what we have learnt. The wave nature of light
        shows up in interference, diffraction and polarisation; in the photoelectric and Compton effects, which involve
        energy and momentum transfer, radiation behaves as if it is made up of a bunch of particles — the photons.
      </p>
      <Comparison
        columns={[
          {
            title: "Wave picture",
            children: (
              <ul>
                <li>Light is an electromagnetic wave.</li>
                <li>Energy is spread continuously over the wavefront.</li>
                <li>Explains interference, diffraction and polarisation.</li>
                <li>Shows up whenever light is gathered, focused or made to superpose.</li>
                <li>Cannot explain the threshold frequency or the instantaneity of photoelectric emission.</li>
              </ul>
            ),
          },
          {
            title: "Particle (photon) picture",
            children: (
              <ul>
                <li>Light is a stream of photons, each of energy hν and momentum h/λ.</li>
                <li>Energy is delivered in discrete packets, one photon to one electron.</li>
                <li>Explains the photoelectric effect and the Compton effect.</li>
                <li>Shows up whenever light exchanges energy and momentum with matter.</li>
                <li>Cannot on its own describe interference and diffraction.</li>
              </ul>
            ),
          },
        ]}
      />
      <Callout type="note" title="The description follows the experiment">
        Whether a particle or a wave description is best suited for understanding an experiment depends on the nature of
        the experiment. In the familiar phenomenon of seeing an object by our eye, both descriptions are important: the
        gathering and focusing of light by the eye-lens is well described in the wave picture, but its absorption by the
        rods and cones of the retina requires the photon picture.
      </Callout>
      <p>
        A natural question arises: if radiation has a dual (wave–particle) nature, might not the particles of nature —
        the electrons, protons, etc. — also exhibit a wave-like character?
      </p>
      <Callout type="important" title="De Broglie&apos;s hypothesis (1924)">
        The French physicist Louis Victor de Broglie put forward the bold hypothesis that{" "}
        <Highlight color="yellow">
          moving particles of matter should display wave-like properties under suitable conditions
        </Highlight>
        . He reasoned that nature was symmetrical, and that the two basic physical entities — matter and energy — must
        have symmetrical character. If radiation shows dual aspects, so should matter.
      </Callout>
      <p>
        De Broglie proposed that the wave length λ associated with a particle of momentum p is given as
      </p>
      <FormulaBlock latex={String.raw`\lambda=\frac{h}{p}=\frac{h}{mv}`} important label="De Broglie relation" tag="Eq. 11.5" />
      <ul>
        <li>Here m is the mass of the particle and v its speed.</li>
        <li>The wavelength λ of the matter wave is called the <strong>de Broglie wavelength</strong>.</li>
        <li>The waves associated with moving material particles are called <strong>matter waves</strong> or de Broglie waves.</li>
        <li>The dual aspect of matter is evident in the relation itself: on the left λ is the attribute of a wave, while on the right the momentum p is a typical attribute of a particle.</li>
        <li>Planck&apos;s constant h relates the two attributes.</li>
      </ul>
      <DeBroglieWave />
      <p>
        Equation (11.5) for a material particle is a hypothesis whose validity can be tested only by experiment. It is
        interesting, however, that it is satisfied also by a photon.
      </p>
      <Stepper
        steps={[
          {
            label: "Momentum of a photon",
            description: (
              <>
                <Formula>{String.raw`p=\frac{h\nu}{c}`}</Formula>
              </>
            ),
          },
          {
            label: "Put it into the de Broglie relation",
            description: (
              <>
                <Formula>{String.raw`\lambda=\frac{h}{p}=\frac{hc}{h\nu}`}</Formula>
              </>
            ),
          },
          {
            label: "Cancel h",
            description: (
              <>
                <Formula>{String.raw`\lambda=\frac{c}{\nu}`}</Formula>
              </>
            ),
          },
          {
            label: "Recognise the wave relation",
            description: (
              <>
                For any wave <Formula>{String.raw`c=\nu\lambda`}</Formula>, so the de Broglie wavelength of a photon equals
                the wavelength of the electromagnetic radiation of which the photon is a quantum of energy and momentum.
              </>
            ),
          },
        ]}
      />
      <FormulaBlock latex={String.raw`\lambda=\frac{h}{p}=\frac{c}{\nu}`} tag="Eq. 11.7" />
      <KeyPoint title="Shorter for heavier or faster">
        From <Formula>{String.raw`\lambda=h/p`}</Formula>, λ is smaller for a heavier particle (large m) or a more
        energetic particle (large v). That is why the wave character is invisible in daily life and dominant in the
        sub-atomic domain.
      </KeyPoint>
      <p>For example, the de Broglie wavelength of a ball of mass 0.12 kg moving with a speed of 20 m s⁻¹ is easily calculated:</p>
      <FormulaBlock latex={String.raw`p=mv=(0.12\ \text{kg})(20\ \text{m s}^{-1})=2.40\ \text{kg m s}^{-1}`} />
      <FormulaBlock latex={String.raw`\lambda=\frac{h}{p}=\frac{6.63\times10^{-34}\ \text{J s}}{2.40\ \text{kg m s}^{-1}}=2.76\times10^{-34}\ \text{m}`} />
      <ul>
        <li>This wavelength is so small that it is beyond any measurement.</li>
        <li>That is the reason why macroscopic objects in our daily life do not show wave-like properties.</li>
        <li>In the sub-atomic domain, on the other hand, the wave character of particles is significant and measurable.</li>
        <li>The de Broglie wavelength is independent of the charge and nature of the material particle.</li>
        <li>It is significantly measurable — of the order of the atomic-plane spacing in crystals — only for sub-atomic particles like electrons and protons, because of the smallness of their masses and hence of their momenta.</li>
      </ul>
      <MistakeCard
        mistake="Applying λ = h/p to a cricket ball or a car and expecting a measurable wavelength."
        correction="The relation is exact for every body, but for a macroscopic mass the momentum is so large that λ comes out around 10⁻³⁴ m — far below any conceivable measurement."
        example="A 0.15 kg ball at 30 m/s has p = 4.5 kg m/s and λ = 1.5 × 10⁻³⁴ m."
      />

      <Expandable title="Example 11.3 — de Broglie wavelength of an electron and of a ball" variant="example">
        <ProblemSolution.Problem>
          <p>
            What is the de Broglie wavelength associated with (a) an electron moving with a speed of 5.4 × 10⁶ m/s, and
            (b) a ball of mass 150 g travelling at 30.0 m/s?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a) For the electron:</strong> mass m = 9.11 × 10⁻³¹ kg, speed v = 5.4 × 10⁶ m/s. Then the momentum is
          </p>
          <FormulaBlock latex={String.raw`p=mv=(9.11\times10^{-31}\ \text{kg})(5.4\times10^{6}\ \text{m/s})`} />
          <FormulaBlock latex={String.raw`p=4.92\times10^{-24}\ \text{kg m/s}`} />
          <p>
            The de Broglie wavelength is <Formula>{String.raw`\lambda=h/p`}</Formula>:
          </p>
          <FormulaBlock latex={String.raw`\lambda=\frac{6.63\times10^{-34}\ \text{J s}}{4.92\times10^{-24}\ \text{kg m/s}}`} />
          <FormulaBlock latex={String.raw`\lambda=0.135\ \text{nm}`} important />
          <p>
            <strong>(b) For the ball:</strong> mass m′ = 0.150 kg, speed v′ = 30.0 m/s. Then its momentum is
          </p>
          <FormulaBlock latex={String.raw`p'=m'v'=(0.150\ \text{kg})(30.0\ \text{m/s})=4.50\ \text{kg m/s}`} />
          <p>
            The de Broglie wavelength is <Formula>{String.raw`\lambda'=h/p'`}</Formula>:
          </p>
          <FormulaBlock latex={String.raw`\lambda'=\frac{6.63\times10^{-34}\ \text{J s}}{4.50\ \text{kg m/s}}`} />
          <FormulaBlock latex={String.raw`\lambda'=1.47\times10^{-34}\ \text{m}`} important />
          <p>
            The de Broglie wavelength of the electron is comparable with X-ray wavelengths. For the ball it is about
            10⁻¹⁹ times the size of the proton — quite beyond experimental measurement.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-11-equations">Key Equations — Revision Board</h2>
      <TableCard
        title="Quantities, dimensions and units"
        headers={["Physical quantity", "Symbol", "Dimensions", "Unit", "Remark"]}
        rows={[
          { cells: ["Planck's constant", "h", "[ML² T⁻¹]", "J s", "E = hν"] },
          { cells: ["Stopping potential", "V₀", "[ML² T⁻³ A⁻¹]", "V", "eV₀ = K_max"] },
          { cells: ["Work function", "φ₀", "[ML² T⁻²]", "J; eV", "K_max = E − φ₀"] },
          { cells: ["Threshold frequency", "ν₀", "[T⁻¹]", "Hz", "ν₀ = φ₀/h"] },
          { cells: ["de Broglie wavelength", "λ", "[L]", "m", "λ = h/p"] },
        ]}
        caption="The first four belong to the photoelectric effect; the last carries the duality of matter in a single symbol."
      />

      <h2 id="h-11-exercises">Back-of-Chapter Exercises</h2>
      <p className="text-sm text-muted-foreground">
        All 11 NCERT exercises with the complete answer key. Work each one out before opening the panel.
      </p>
      <Expandable title="Exercises 11.1 – 11.11 — questions and answer key" variant="exercise">
        <ExerciseQa
          questions={[
            "Find the (a) maximum frequency, and (b) minimum wavelength of X-rays produced by 30 kV electrons.",
            "The work function of caesium metal is 2.14 eV. When light of frequency 6 × 10¹⁴ Hz is incident on the metal surface, photoemission of electrons occurs. What is the (a) maximum kinetic energy of the emitted electrons, (b) stopping potential, and (c) maximum speed of the emitted photoelectrons?",
            "The photoelectric cut-off voltage in a certain experiment is 1.5 V. What is the maximum kinetic energy of photoelectrons emitted?",
            "Monochromatic light of wavelength 632.8 nm is produced by a helium-neon laser. The power emitted is 9.42 mW. (a) Find the energy and momentum of each photon in the light beam, (b) How many photons per second, on the average, arrive at a target irradiated by this beam? (Assume the beam to have uniform cross-section which is less than the target area), and (c) How fast does a hydrogen atom have to travel in order to have the same momentum as that of the photon?",
            "In an experiment on photoelectric effect, the slope of the cut-off voltage versus frequency of incident light is found to be 4.12 × 10⁻¹⁵ V s. Calculate the value of Planck's constant.",
            "The threshold frequency for a certain metal is 3.3 × 10¹⁴ Hz. If light of frequency 8.2 × 10¹⁴ Hz is incident on the metal, predict the cut-off voltage for the photoelectric emission.",
            "The work function for a certain metal is 4.2 eV. Will this metal give photoelectric emission for incident radiation of wavelength 330 nm?",
            "Light of frequency 7.21 × 10¹⁴ Hz is incident on a metal surface. Electrons with a maximum speed of 6.0 × 10⁵ m/s are ejected from the surface. What is the threshold frequency for photoemission of electrons?",
            "Light of wavelength 488 nm is produced by an argon laser which is used in the photoelectric effect. When light from this spectral line is incident on the emitter, the stopping (cut-off) potential of photoelectrons is 0.38 V. Find the work function of the material from which the emitter is made.",
            "What is the de Broglie wavelength of (a) a bullet of mass 0.040 kg travelling at the speed of 1.0 km/s, (b) a ball of mass 0.060 kg moving at a speed of 1.0 m/s, and (c) a dust particle of mass 1.0 × 10⁻⁹ kg drifting with a speed of 2.2 m/s?",
            "Show that the wavelength of electromagnetic radiation is equal to the de Broglie wavelength of its quantum (photon).",
          ]}
          answers={[
            "The electron energy is eV = 3.0 × 10⁴ eV = 4.8 × 10⁻¹⁵ J. (a) ν_max = E/h = 4.8 × 10⁻¹⁵/6.63 × 10⁻³⁴ = 7.24 × 10¹⁸ Hz. (b) λ_min = c/ν_max = 3 × 10⁸/7.24 × 10¹⁸ = 4.14 × 10⁻¹¹ m ≈ 0.041 nm.",
            "hν = 6.63 × 10⁻³⁴ × 6 × 10¹⁴ = 3.98 × 10⁻¹⁹ J = 2.49 eV. (a) K_max = 2.49 − 2.14 = 0.35 eV = 5.5 × 10⁻²⁰ J. (b) V₀ = K_max/e = 0.35 V. (c) v_max = √(2K/m) = √(2 × 5.5 × 10⁻²⁰/9.11 × 10⁻³¹) = 3.5 × 10⁵ m/s.",
            "K_max = eV₀ = 1.5 eV = 1.5 × 1.6 × 10⁻¹⁹ = 2.4 × 10⁻¹⁹ J.",
            "(a) E = hc/λ = (6.63 × 10⁻³⁴ × 3 × 10⁸)/(632.8 × 10⁻⁹) = 3.14 × 10⁻¹⁹ J ≈ 2.0 eV; p = E/c = 1.05 × 10⁻²⁷ kg m/s. (b) N = P/E = 9.42 × 10⁻³/3.14 × 10⁻¹⁹ = 3.0 × 10¹⁶ photons per second. (c) For a hydrogen atom of mass 1.67 × 10⁻²⁷ kg, v = p/m = 1.05 × 10⁻²⁷/1.67 × 10⁻²⁷ = 0.63 m/s.",
            "The slope of the V₀ against ν line is h/e, so h = e × slope = 1.6 × 10⁻¹⁹ × 4.12 × 10⁻¹⁵ = 6.6 × 10⁻³⁴ J s — the known value of Planck's constant.",
            "V₀ = (h/e)(ν − ν₀) = (6.63 × 10⁻³⁴/1.6 × 10⁻¹⁹)(8.2 − 3.3) × 10¹⁴ = 4.14 × 10⁻¹⁵ × 4.9 × 10¹⁴ = 2.03 V. The cut-off voltage is about 2.0 V.",
            "The photon energy is hc/λ = 1240/330 = 3.76 eV (or 1.99 × 10⁻²⁵/3.3 × 10⁻⁷ = 6.0 × 10⁻¹⁹ J). Since 3.76 eV < 4.2 eV, the photon energy is less than the work function, so no photoelectric emission takes place.",
            "K_max = ½mv² = ½ × 9.11 × 10⁻³¹ × (6.0 × 10⁵)² = 1.64 × 10⁻¹⁹ J = 1.02 eV. Then hν₀ = hν − K_max gives ν₀ = 7.21 × 10¹⁴ − 1.64 × 10⁻¹⁹/6.63 × 10⁻³⁴ = 7.21 × 10¹⁴ − 2.47 × 10¹⁴ = 4.7 × 10¹⁴ Hz.",
            "hc/λ = 1.99 × 10⁻²⁵/4.88 × 10⁻⁷ = 4.08 × 10⁻¹⁹ J = 2.54 eV. Then φ₀ = 2.54 − 0.38 = 2.16 eV ≈ 2.2 eV.",
            "(a) p = 0.040 × 1000 = 40 kg m/s, so λ = 6.63 × 10⁻³⁴/40 = 1.7 × 10⁻³⁵ m. (b) p = 0.060 × 1.0 = 0.060 kg m/s, so λ = 6.63 × 10⁻³⁴/0.060 = 1.1 × 10⁻³² m. (c) p = 1.0 × 10⁻⁹ × 2.2 = 2.2 × 10⁻⁹ kg m/s, so λ = 6.63 × 10⁻³⁴/2.2 × 10⁻⁹ = 3.0 × 10⁻²⁵ m. All three are far too small to be detected.",
            "For a photon of frequency ν and wavelength λ, the energy is E = hν = hc/λ and the momentum is p = hν/c = h/λ. The de Broglie wavelength of this quantum is λ_dB = h/p = h/(h/λ) = λ. Hence the de Broglie wavelength of a photon equals the wavelength of the electromagnetic radiation of which it is the quantum.",
          ]}
        />
      </Expandable>
    </>
  );
}




