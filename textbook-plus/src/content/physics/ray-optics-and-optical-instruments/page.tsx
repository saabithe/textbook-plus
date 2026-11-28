/**
 * Ray Optics and Optical Instruments — rebuilt from the user's own notes.
 *
 * Sections 9.1–9.2: light, reflection, spherical mirrors, the four
 * construction rays, R = 2f, the sign convention, magnification and the mirror
 * equation. Figures are `FigureSpec`s from `./figures.ts` (registered in
 * `diagram/examples.ts`, gated by `verify:figures`).
 *
 * The retired NCERT-based version is frozen in the tag
 * `backup/ray-optics-full-2026-11-04`.
 */
import type { ReactNode } from "react";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Expandable } from "@/components/content/Expandable";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { Callout } from "@/components/content/Callout";
import { CollapsibleRevision } from "@/components/content/CollapsibleRevision";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { KeyPoint } from "@/components/content/KeyPoint";
import { TableCard } from "@/components/content/data/TableCard";
import { PhysicsFigure } from "@/components/content/physics/diagram/PhysicsFigure";
import {
  ApplicationCard,
  ConditionStrip,
  ConnectedCards,
  DerivationPair,
  DirectionPair,
  FormulaStrip,
  RankStrip,
  RefractionHero,
  ResultCard,
  TakeawayBlock,
} from "@/components/content/physics/RefractionPanels";
import {
  AngleProgression,
  AngleResultStrip,
  ApplicationFigureCard,
  BoundaryPair,
  CaseCard,
  ConditionCards,
  ReferenceCard,
  RevisionDashboard,
  SplitRayPanel,
  TIRHero,
} from "@/components/content/physics/TIRPanels";
import {
  DefinitionGrid,
  DerivationStages,
  GraphConditions,
  PrismHero,
  PrismRevisionGrid,
  SpectrumSequence,
} from "@/components/content/physics/PrismPanels";
import {
  ApproximationBlock,
  ComparisonPair,
  LensRayLegend,
  ProminentFormula,
  SphericalLensHero,
  SignCard,
} from "@/components/content/physics/SphericalLensPanels";
import {
  cassegrain,
  compoundMicroscope,
  concaveLensRays,
  concaveMirrorTerms,
  concaveRealImage,
  convexLensRays,
  convexMirrorTerms,
  equilateralPrism,
  mirrorEquationGeometry,
  planeReflection,
  prismDerivationGeometry,
  prismDeviationGraph,
  prismDispersion,
  prismHeader,
  prismRayPath,
  rayAndBeam,
  refractingTelescope,
  refractionApparentConcept,
  refractionApparentDepth,
  refractionDenserToRarer,
  refractionHeaderCrossing,
  refractionParallelEmergence,
  refractionPlaneBoundary,
  refractionRarerToDenser,
  refractionSlabFourAngles,
  refractionSnellDiagram,
  ruleCentre,
  ruleFocus,
  ruleParallel,
  rulePole,
  signConventionConcave,
  signConventionConvex,
  simpleMicroscope,
  tirCaseAbove,
  tirCaseBelow,
  tirCaseCritical,
  tirCriticalAngle,
  tirEndoscope,
  tirFibreCrossSection,
  tirFibreLongitudinal,
  tirFocused,
  tirHeaderBounces,
  tirPartialSplit,
  tirPureReflection,
  tirPureRefraction,
  tirTelecomSignal,
} from "./figures";
import {
  concaveLensPrincipalRays,
  concavePowerRay,
  convexLensObjectAtCentre,
  convexLensThreePrincipalRays,
  convexPowerRay,
  lensSignConventionPair,
  lensTypesPair,
  sphericalSurfaceLensHeader,
  sphericalSurfaceRefractionGeometry,
  thinLensTwoSurfaceSetup,
} from "./sphericalLensFigures";

const POSITIVE = "var(--ok)";
const NEGATIVE = "var(--destructive)";

/** One answer-key row: the result on top, the working underneath. */
function AnswerQa({ result, work }: { result: string; work: string }) {
  return (
    <div>
      <p className="text-[0.9375rem] font-semibold leading-[1.5] tracking-[-0.01em] text-foreground">{result}</p>
      <p className="mt-1 text-[0.875rem] leading-[1.75] text-foreground/75">{work}</p>
    </div>
  );
}

type DerivationRow = {
  label: string;
  latex: string;
  tag?: string;
  important?: boolean;
};

type DerivationStage = {
  title: string;
  rows: DerivationRow[];
};

/** Keeps the solved diagram beside the staged equations on desktop. */
function FigureBesideStages({ figure, stages }: { figure: ReactNode; stages: DerivationStage[] }) {
  return (
    <div className="my-6 grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start">
      <div className="min-w-0 rounded-2xl border border-border/60 bg-card p-2 shadow-sm lg:sticky lg:top-4">{figure}</div>
      <div className="space-y-3">
        {stages.map((stage, index) => (
          <section key={stage.title} className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
            <div className="flex items-center gap-3 border-b border-border/40 bg-muted/25 px-4 py-2.5">
              <span className="t-micro tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-sm font-extrabold leading-snug tracking-tight text-foreground">{stage.title}</p>
            </div>
            <div className="space-y-2 px-3 py-3 sm:px-4">
              {stage.rows.map((row) => (
                <div key={row.label} className="min-w-0 [&>div]:my-0">
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground">{row.label}</p>
                  <div className="mt-1">
                    <FormulaBlock latex={row.latex} tag={row.tag} important={row.important} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default function RayOpticsAndOpticalInstrumentsChapter() {
  return (
    <>
      <h2 id="h-9-1">9.1 Introduction</h2>

      <h3 id="h-9-1-light">Light, and the sense of vision</h3>
      <p>
        Nature has endowed the human eye — the retina — with the sensitivity to detect electromagnetic waves within a
        small range of the electromagnetic spectrum.
      </p>
      <Callout type="note" title="Light — definition">
        <p>
          <strong>Light</strong> is electromagnetic radiation with a wavelength of about{" "}
          <Highlight>400 nm to 750 nm</Highlight> — the band the retina can detect.
        </p>
      </Callout>
      <p>It is mainly through light and the sense of vision that we know and interpret the world around us.</p>

      <h3 id="h-9-1-facts">Two facts common experience gives</h3>
      <p>Two things about light can be stated from common experience alone.</p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>It travels with enormous speed.</strong> That speed is finite and measurable, but it took people
          some time to realise it.
        </li>
        <li>
          <strong>It travels in a straight line.</strong>
        </li>
      </ul>

      <h3 id="h-9-1-speed">The speed of light</h3>
      <p>Its presently accepted value in vacuum is</p>
      <FormulaBlock
        important
        label="Speed of light in vacuum"
        latex={String.raw`c = 2.99792458 \times 10^{8}\ \text{m s}^{-1}`}
      />
      <p>
        For many purposes it suffices to take{" "}
        <Formula>{String.raw`c \approx 3 \times 10^{8}\ \text{m s}^{-1}`}</Formula>.
      </p>
      <KeyPoint title="Highest speed attainable in nature">
        <p>Light in vacuum has no faster traveller to compete with: this is the highest speed attainable in nature.</p>
      </KeyPoint>

      <h3 id="h-9-1-ray">Why the straight line is still the right picture</h3>
      <p>
        Chapter 8 called light an electromagnetic wave. On its own, that description seems to contradict a
        straight-line path.
      </p>
      <p>
        The resolution is one of scale. The wavelength of light is very small compared with the ordinary objects we
        meet — generally a few centimetres or larger.
      </p>
      <p>
        At that scale a light wave can be treated as travelling from one point to another along the straight line
        joining them.
      </p>
      <PhysicsFigure spec={rayAndBeam} />
      <div className="my-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm font-semibold tracking-tight text-foreground">Ray</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground/75">
            The straight-line path the wave is treated as taking.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm font-semibold tracking-tight text-foreground">Beam</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground/75">A bundle of such rays.</p>
        </div>
      </div>

      <h3 id="h-9-1-ahead">The chapter ahead</h3>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Mirrors.</strong> Image formation by spherical mirrors, and the mirror equation.
        </li>
        <li>
          <strong>Refraction.</strong> At plane and spherical surfaces, through lenses and through a prism.
        </li>
        <li>
          <strong>Instruments.</strong> The microscope and the telescope built from these surfaces.
        </li>
      </ul>

      <h2 id="h-9-2">9.2 Reflection of Light by Spherical Mirrors</h2>

      <h3 id="h-9-2-reflection">Reflection and its laws</h3>
      <p>
        <strong>Reflection</strong> is the process in which a ray of light approaches a smooth polished surface and
        bounces back into the same medium.
      </p>
      <PhysicsFigure spec={planeReflection} />
      <p>The two laws below hold at every point of any reflecting surface, plane or curved.</p>
      <KeyPoint title="Laws of reflection">
        <ol className="mt-1 list-decimal space-y-2 pl-5">
          <li>
            <strong>Equal angles.</strong> The angle of incidence equals the angle of reflection:{" "}
            <Formula>{String.raw`i = r`}</Formula>.
          </li>
          <li>
            <strong>One plane.</strong> The incident ray, the reflected ray and the normal at the point of incidence
            all lie in the same plane.
          </li>
        </ol>
      </KeyPoint>
      <Callout type="important" title="The normal on a curved mirror">
        <p>
          At a curved surface the normal is drawn perpendicular to the <em>tangent</em> at the point of incidence. On
          a spherical mirror that is simply <strong>the radius line joining the centre of curvature to the point</strong>.
        </p>
      </Callout>

      <h3 id="h-9-2-deviation">Angle of deviation</h3>
      <p>
        The <strong>angle of deviation</strong> δ is the angle between the incident ray produced and the reflected
        ray.
      </p>
      <p>
        The two rays enclose <Formula>{String.raw`i + r`}</Formula> on the mirror side, so the deviation is what is
        left of a straight line:
      </p>
      <FormulaBlock
        important
        label="Angle of deviation"
        latex={String.raw`\delta = 180^\circ - (i + r) = 180^\circ - 2i`}
      />
      <p>
        At normal incidence <Formula>{String.raw`i = 0`}</Formula>, so{" "}
        <Formula>{String.raw`\delta = 180^\circ`}</Formula>: the ray returns along the path it came on.
      </p>

      <h3 id="h-9-2-types">Types of mirrors</h3>
      <p>Every mirror is named by the shape of its reflecting surface.</p>
      <div className="my-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm font-semibold tracking-tight text-foreground">Plane mirror</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground/75">A flat reflecting surface.</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm font-semibold tracking-tight text-foreground">Concave mirror</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground/75">
            The surface curves inward, so its hollow side faces the light.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm font-semibold tracking-tight text-foreground">Convex mirror</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground/75">
            The surface bulges outward, toward the light.
          </p>
        </div>
      </div>
      <p>A spherical mirror is a cut-out of a sphere. The two figures below mark the points that describe it.</p>
      <PhysicsFigure spec={concaveMirrorTerms} />
      <PhysicsFigure spec={convexMirrorTerms} />

      <h3 id="h-9-2-terms">Terms related to spherical mirrors</h3>
      <TableCard
        title="The points and distances that describe a spherical mirror"
        headers={["Term", "Meaning"]}
        rows={[
          {
            cells: ["Centre of curvature (C)", "The centre of the sphere of which the mirror is a part."],
          },
          {
            cells: ["Pole (P)", "The geometric centre of the spherical mirror."],
          },
          {
            cells: ["Principal axis", "The line passing through the pole and the centre of curvature."],
          },
          {
            cells: ["Radius of curvature (R)", "The distance between C and P."],
          },
          {
            cells: [
              "Focus (F) — concave",
              "Paraxial rays parallel to the axis converge at this point after reflection: a real focus.",
            ],
          },
          {
            cells: [
              "Focus (F) — convex",
              "Paraxial rays parallel to the axis appear to diverge from this point after reflection: a virtual focus.",
            ],
          },
          {
            cells: ["Focal length (f)", "The distance between the focus F and the pole P."],
          },
        ]}
      />

      <h3 id="h-9-2-focus">Focus and focal length</h3>
      <p>For a mirror of small aperture the focus sits halfway from the pole to the centre of curvature.</p>
      <FormulaBlock
        important
        label="Focal length of a spherical mirror"
        tag="Eq. 9.3"
        latex={String.raw`f = \frac{R}{2}`}
      />
      <p>
        Written the other way round, the radius is twice the focal length:{" "}
        <Formula>{String.raw`R = 2f`}</Formula>.
      </p>
      <Expandable title="Derivation — why R = 2f">
        <p>
          Take a paraxial ray parallel to the principal axis. It strikes the mirror at M, and CM is normal to the
          surface there.
        </p>
        <figure className="my-8 overflow-hidden rounded-xl border border-border/60 bg-card">
          <div className="bg-neutral-950 p-2 sm:p-3">
            <img
              src="/images/physics/ray-optics-and-optical-instruments/derivation-r-equals-2f.png"
              alt="Hand-worked geometry for the focal-length proof: a concave mirror arc with centre C, pole P, focus F and the point of incidence M; θ is marked at C and 2θ at F."
              className="mx-auto block h-auto w-full max-w-2xl"
              loading="lazy"
            />
          </div>
          <figcaption className="px-4 py-3 text-center text-xs leading-relaxed text-muted-foreground">
            The geometry of the proof (Fig. 9.4). The foot of the perpendicular from M meets the axis almost at P, so
            MP is treated as perpendicular to the axis and CP, FP as the axis distances.
          </figcaption>
        </figure>
        <EquationLadder
          title="Step by step"
          steps={[
            {
              label: "Target",
              equation: String.raw`R = 2f`,
              note: "For a small aperture CP ≈ R and FP ≈ f.",
            },
            {
              label: "From the right triangle CPM",
              equation: String.raw`\tan \theta = \frac{MP}{CP}`,
              tag: "Eq. 9.1",
            },
            {
              label: "From the right triangle FPM",
              equation: String.raw`\tan 2\theta = \frac{MP}{FP}`,
            },
            {
              label: "Small angles: tan θ ≈ θ, which gives Eq. (1)",
              equation: String.raw`\theta = \frac{MP}{CP}`,
            },
            {
              label: "And tan 2θ ≈ 2θ, which gives Eq. (2)",
              equation: String.raw`2\theta = \frac{MP}{FP}`,
            },
            {
              label: "Substitute Eq. (1) into Eq. (2)",
              equation: String.raw`2 \left( \frac{MP}{CP} \right) = \frac{MP}{FP}`,
            },
            {
              label: "Cancel MP on both sides",
              equation: String.raw`\frac{2}{CP} = \frac{1}{FP}`,
            },
            {
              label: "Put CP = R and FP = f",
              equation: String.raw`\frac{2}{R} = \frac{1}{f}`,
            },
            {
              label: "Final result",
              equation: String.raw`R = 2f`,
              final: true,
            },
          ]}
        />
      </Expandable>

      <h3 id="h-9-2-paraxial">Paraxial rays</h3>
      <p>
        <strong>Paraxial rays</strong> are rays incident close to the pole P, making small angles with the principal
        axis.
      </p>
      <p>
        Only for these rays does the mirror keep its simple behaviour: they meet at one focus, and{" "}
        <Formula>{String.raw`f = R/2`}</Formula> holds. Rays far from the axis miss the focus — the defect called
        spherical aberration.
      </p>

      <h3 id="h-9-2-rules">Rules for image formation</h3>
      <p>
        Any two of these four rays are enough to locate an image. Each one leaves the mirror along a path fixed by the
        laws of reflection.
      </p>
      <div className="my-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="t-micro">Rule 1</p>
          <p className="mt-1 text-sm font-semibold tracking-tight text-foreground">Parallel to the axis</p>
          <PhysicsFigure spec={ruleParallel} showCaption={false} labelScale={1.5} />
          <p className="text-sm leading-relaxed text-foreground/75">
            After reflection the ray passes through the focus of a concave mirror, or appears to come from it on a
            convex mirror.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="t-micro">Rule 2</p>
          <p className="mt-1 text-sm font-semibold tracking-tight text-foreground">Through the focus</p>
          <PhysicsFigure spec={ruleFocus} showCaption={false} labelScale={1.5} />
          <p className="text-sm leading-relaxed text-foreground/75">
            A ray passing through F — or directed towards it — leaves parallel to the principal axis.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="t-micro">Rule 3</p>
          <p className="mt-1 text-sm font-semibold tracking-tight text-foreground">Through the centre of curvature</p>
          <PhysicsFigure spec={ruleCentre} showCaption={false} labelScale={1.5} />
          <p className="text-sm leading-relaxed text-foreground/75">
            A ray through C, or directed towards it, meets the surface normally and reflects back along the same path.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="t-micro">Rule 4</p>
          <p className="mt-1 text-sm font-semibold tracking-tight text-foreground">At the pole</p>
          <PhysicsFigure spec={rulePole} showCaption={false} labelScale={1.5} />
          <p className="text-sm leading-relaxed text-foreground/75">
            A ray striking P obliquely reflects symmetrically, at equal angles to the axis, because the axis is the
            normal there.
          </p>
        </div>
      </div>

      <h3 id="h-9-2-convention">Sign convention</h3>
      <PhysicsFigure spec={signConventionConcave} />
      <PhysicsFigure spec={signConventionConvex} />
      <p>
        Heights use the same frame. An object standing above the axis has a positive <Formula>{String.raw`h_o`}</Formula>
        ; an inverted image below it has a negative <Formula>{String.raw`h_i`}</Formula>.
      </p>

      <h3 id="h-9-2-symbols">Symbols</h3>
      <TableCard
        title="The six quantities a mirror problem uses"
        headers={["Symbol", "Stands for"]}
        rows={[
          { cells: ["u", "Distance between the object and the pole"] },
          { cells: ["v", "Distance between the image and the pole"] },
          { cells: ["f", "Focal length"] },
          { cells: ["R", "Radius of curvature"] },
          { cells: ["h_o", "Height of the object"] },
          { cells: ["h_i", "Height of the image"] },
        ]}
      />

      <h3 id="h-9-2-reading">Reading the signs off a problem</h3>
      <p>Before any substitution, decide which side of the pole each point lies on.</p>
      <TableCard
        title="Three statements translated into signs"
        headers={["Statement", "u", "v", "f", "h_o", "h_i"]}
        rows={[
          {
            cells: [
              "Concave mirror: object 20 cm away, real image 30 cm away, 3 cm tall",
              "−20 cm",
              "−30 cm",
              "−",
              "+3 cm",
              "−3 cm",
            ],
          },
          {
            cells: [
              "Convex mirror: virtual image 20 cm behind the mirror, 10 cm tall",
              "−10 cm",
              "+20 cm",
              "+",
              "+3 cm",
              "+10 cm",
            ],
          },
          {
            cells: ["Concave mirror: f = 10 cm, object at 15 cm, image at 30 cm", "−15 cm", "−30 cm", "−10 cm", "+", "−"],
          },
        ]}
      />
      <p className="text-sm text-muted-foreground">
        Read these rows for the signs alone — a real convex mirror always gives a diminished image.
      </p>

      <h3 id="h-9-2-real-image">The image of a real object</h3>
      <p>An object standing between F and C of a concave mirror sends back rays that meet beyond C.</p>
      <PhysicsFigure spec={concaveRealImage} />
      <p>
        That image is real, inverted and magnified: twice the size here, where the object sits one and a half focal
        lengths from the pole.
      </p>
      <TableCard
        title="What each mirror can produce"
        headers={["Mirror", "Object placed", "Image", "Forms"]}
        rows={[
          {
            cells: ["Concave", "anywhere but between P and F", "real, inverted", "same side as the object"],
          },
          { cells: ["Concave", "between P and F", "virtual, erect", "behind the mirror"] },
          { cells: ["Convex", "anywhere", "virtual, erect", "behind the mirror"] },
        ]}
      />
      <p>
        In five of the six placements the image is real and inverted; only an object between P and F makes it virtual
        and erect.
      </p>
      <p>
        With the object exactly at F the reflected rays leave parallel, so no image forms at a finite distance.
      </p>
      <KeyPoint title="Two shortcuts">
        <ul className="mt-1 list-disc space-y-2 pl-5">
          <li>
            <strong>Real and inverted</strong> — the image lies on the object&apos;s side, so u, v and h_i take the
            same sign.
          </li>
          <li>
            <strong>Virtual and erect</strong> — the image lies on the far side, so v and h_i are positive.
          </li>
        </ul>
      </KeyPoint>

      <h3 id="h-9-2-at-a-glance">Signs at a glance</h3>
      <TableCard
        title="The sign of every quantity, by mirror"
        headers={["Mirror", "f", "u", "v", "h_o", "h_i"]}
        rows={[
          { cells: ["Concave", "−", "−", "real −  ·  virtual +", "+", "real −  ·  virtual +"] },
          { cells: ["Convex", "+", "−", "+", "+", "+"] },
        ]}
      />
      <p>The object is real in every problem here, which is why u stays negative.</p>

      <h3 id="h-9-2-magnification">Linear magnification</h3>
      <p>The size of the image compared with the size of the object is the linear magnification.</p>
      <FormulaBlock
        important
        label="Linear magnification"
        tag="Eq. 9.9"
        latex={String.raw`m = \frac{h_i}{h_o} = -\frac{v}{u}`}
      />
      <p>It is one length divided by another, so it carries no unit.</p>
      <ul className="my-6 list-none space-y-3 pl-0">
        <li>
          <strong>The sign names the kind of image.</strong> Positive m means virtual and erect; negative m means real
          and inverted.
        </li>
        <li>
          <strong>The magnitude measures the size.</strong> Below 1 the image is diminished, at exactly 1 it matches
          the object, above 1 it is magnified.
        </li>
      </ul>
      <TableCard
        title="Reading a magnification"
        headers={["m", "Nature", "Size"]}
        rows={[
          { cells: ["+2", "virtual, erect", "magnified, twice the size"] },
          { cells: ["−0.5", "real, inverted", "diminished, half the size"] },
          { cells: ["−1", "real, inverted", "same size as the object"] },
        ]}
      />

      <h3 id="h-9-2-mirror-equation">The mirror equation</h3>
      <p>
        Object distance, image distance and focal length are tied by one relation, and it drops out of two pairs of
        similar triangles.
      </p>
      <PhysicsFigure spec={mirrorEquationGeometry} />
      <Expandable title="Derivation — the mirror equation">
        <EquationLadder
          title="Step by step"
          steps={[
            {
              label: "From the triangles OBP and IMP",
              equation: String.raw`\frac{IM}{OB} = \frac{IP}{OP}`,
            },
            {
              label: "From the triangles FPN and FIM, with PN = OB",
              equation: String.raw`\frac{IM}{OB} = \frac{IF}{FP}`,
            },
            {
              label: "Both left-hand sides are IM/OB, so equate the right-hand sides",
              equation: String.raw`\frac{IP}{OP} = \frac{IF}{FP}`,
            },
            {
              label: "Put IF = IP − FP and FP = f",
              equation: String.raw`\frac{IP}{OP} = \frac{IP - FP}{FP}`,
            },
            {
              label: "Write IP = v and OP = u",
              equation: String.raw`\frac{v}{u} = \frac{v - f}{f}`,
            },
            {
              label: "Multiply out",
              equation: String.raw`vf = uv - uf`,
            },
            {
              label: "Divide every term by uvf",
              equation: String.raw`\frac{1}{u} = \frac{1}{f} - \frac{1}{v}`,
            },
            {
              label: "Mirror equation",
              tag: "Eq. 9.7",
              equation: String.raw`\frac{1}{f} = \frac{1}{u} + \frac{1}{v}`,
              final: true,
            },
          ]}
        />
      </Expandable>
      <p>
        <strong>The mirror equation</strong> is the last line. With the sign convention in place it covers every case —
        real or virtual, concave or convex.
      </p>

      <h3 id="h-9-2-worked">Worked examples</h3>
      <Expandable title="Example — object 6 cm from a concave mirror of focal length 12 cm" variant="example">
        <ProblemSolution.Problem>
          <p>
            An object is placed at a distance of 6 cm from a concave mirror of focal length 12 cm. Find the position,
            nature and magnification of the image.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <Stepper
            steps={[
              {
                label: "Take the signs first",
                description: (
                  <p>
                    Object in front of the pole: <Formula>{String.raw`u = -6\ \text{cm}`}</Formula>. Concave mirror:{" "}
                    <Formula>{String.raw`f = -12\ \text{cm}`}</Formula>.
                  </p>
                ),
              },
              {
                label: "Rearrange the mirror equation for v",
                description: (
                  <p>
                    <Formula>{String.raw`\frac{1}{v} = \frac{1}{f} - \frac{1}{u}`}</Formula>
                  </p>
                ),
              },
              {
                label: "Substitute the signs",
                description: (
                  <p>
                    <Formula>{String.raw`\frac{1}{v} = \frac{1}{-12} - \frac{1}{-6} = -\frac{1}{12} + \frac{1}{6}`}</Formula>
                  </p>
                ),
              },
              {
                label: "Add the fractions",
                description: (
                  <p>
                    <Formula>{String.raw`\frac{1}{v} = \frac{-1 + 2}{12} = \frac{1}{12}`}</Formula>, so{" "}
                    <Formula>{String.raw`v = +12\ \text{cm}`}</Formula>.
                  </p>
                ),
              },
              {
                label: "Read the sign of v",
                description: (
                  <p>
                    Positive v puts the image 12 cm behind the mirror, so it is virtual and erect.
                  </p>
                ),
              },
              {
                label: "Magnification",
                description: (
                  <p>
                    <Formula>{String.raw`m = -\frac{v}{u} = -\frac{12}{-6} = +2`}</Formula> — virtual, erect and twice
                    the size of the object.
                  </p>
                ),
              },
            ]}
          />
          <FormulaBlock important latex={String.raw`v = +12\ \text{cm}, \quad m = +2`} />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example — object distance for a real image of magnification 2" variant="example">
        <ProblemSolution.Problem>
          <p>
            The focal length of a concave mirror is 10 cm. At what distance must an object be placed so that a real
            image of magnification 2 is obtained?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <Stepper
            steps={[
              {
                label: "A real image is inverted, so m is negative",
                description: (
                  <p>
                    <Formula>{String.raw`m = -2`}</Formula>, with{" "}
                    <Formula>{String.raw`f = -10\ \text{cm}`}</Formula>.
                  </p>
                ),
              },
              {
                label: "Use the magnification formula",
                description: (
                  <p>
                    <Formula>{String.raw`m = -\frac{v}{u} = -2`}</Formula>, so{" "}
                    <Formula>{String.raw`v = 2u`}</Formula>.
                  </p>
                ),
              },
              {
                label: "Substitute into the mirror equation",
                description: (
                  <p>
                    <Formula>{String.raw`\frac{1}{f} = \frac{1}{u} + \frac{1}{v}`}</Formula> becomes{" "}
                    <Formula>{String.raw`\frac{1}{-10} = \frac{1}{u} + \frac{1}{2u}`}</Formula>.
                  </p>
                ),
              },
              {
                label: "Add the right-hand side",
                description: (
                  <p>
                    <Formula>{String.raw`-\frac{1}{10} = \frac{2 + 1}{2u} = \frac{3}{2u}`}</Formula>
                  </p>
                ),
              },
              {
                label: "Solve for u",
                description: (
                  <p>
                    <Formula>{String.raw`2u = -30`}</Formula>, so the object goes 15 cm in front of the mirror.
                  </p>
                ),
              },
            ]}
          />
          <FormulaBlock important latex={String.raw`u = -15\ \text{cm}`} />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-9-3">9.3 Refraction</h2>

      <RefractionHero
        blocks={["Refractive Index", "Laws of Refraction", "Applications of Refraction"]}
        figure={
          <PhysicsFigure
            spec={refractionHeaderCrossing}
            showCaption={false}
            labelScale={1.1}
            className="my-0"
          />
        }
      />

      <h3 id="h-9-3-speed">Speed of light in different media</h3>
      <p>
        <strong>No.</strong> The speed of light changes when it travels through different media.
      </p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Maximum speed → Vacuum.</strong>
        </li>
        <li>
          <strong>Minimum speed → Diamond.</strong>
        </li>
      </ul>
      <RankStrip
        title="Relative order of speed"
        direction="descending"
        items={[
          { label: <Formula>{String.raw`v_{\text{Vacuum}}`}</Formula>, extreme: true },
          { label: <Formula>{String.raw`v_{\text{Air}}`}</Formula> },
          { label: <Formula>{String.raw`v_{\text{Glass}}`}</Formula> },
          { label: <Formula>{String.raw`v_{\text{Diamond}}`}</Formula>, extreme: true },
        ]}
      />
      <RankStrip
        title="Corresponding refractive index order"
        direction="ascending"
        items={[
          { label: <Formula>{String.raw`n_{\text{Vacuum}}`}</Formula>, extreme: true },
          { label: <Formula>{String.raw`n_{\text{Air}}`}</Formula> },
          { label: <Formula>{String.raw`n_{\text{Glass}}`}</Formula> },
          { label: <Formula>{String.raw`n_{\text{Diamond}}`}</Formula>, extreme: true },
        ]}
      />

      <h3 id="h-9-3-index">Refractive index (n)</h3>
      <FormulaCard label="Definition — refractive index" subjectColor="var(--subject-physics)">
        <p>
          The <strong>refractive index</strong> of a medium is the ratio of the velocity of light in vacuum to the
          velocity of light in that medium.
        </p>
        <FormulaBlock label="Vacuum to medium" latex={String.raw`\text{Vacuum}\xrightarrow{c}\text{Medium}\xrightarrow{v}`} />
        <FormulaBlock important latex={String.raw`n=\frac{c}{v}`} />
      </FormulaCard>
      <TableCard
        title="Symbols"
        headers={["Symbol", "Meaning"]}
        rows={[
          { cells: [<Formula key="n">{String.raw`n`}</Formula>, "Absolute refractive index of the medium"] },
          { cells: [<Formula key="c">{String.raw`c`}</Formula>, "Speed of light in vacuum"] },
          { cells: [<Formula key="v">{String.raw`v`}</Formula>, "Speed of light in the medium"] },
        ]}
      />
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Unit → No unit.</strong>
        </li>
        <li>
          <strong>Dimension → Dimensionless.</strong>
        </li>
      </ul>
      <h4>Vacuum / air</h4>
      <FormulaStrip>
        <FormulaBlock latex={String.raw`n_{\text{Vacuum/Air}}=\frac{c}{c}=1`} />
      </FormulaStrip>
      <FormulaStrip>
        <FormulaBlock important label="Minimum refractive index" latex={String.raw`n_{\min}=1`} />
      </FormulaStrip>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Minimum refractive index → Vacuum / Air.</strong>
        </li>
        <li>
          <strong>Condition →</strong> <Formula>{String.raw`n<1`}</Formula> is not possible in the stated real-life
          context of these notes.
        </li>
      </ul>
      <h4>Important relationship</h4>
      <ConnectedCards
        top={<FormulaBlock latex={String.raw`n=\frac{c}{v}`} />}
        bottom={
          <>
            <FormulaBlock important latex={String.raw`v\downarrow\quad\Longrightarrow\quad n\uparrow`} />
            <p>Lower speed in a medium corresponds to a higher refractive index.</p>
          </>
        }
      />

      <h3 id="h-9-3-absolute-examples">Numerical problems — absolute refractive index</h3>
      <p>
        <strong>General method.</strong> Use <Formula>{String.raw`n=\frac{c}{v}`}</Formula>.
      </p>
      <p>
        <strong>Use.</strong> <Formula>{String.raw`c=3\times10^8\ \text{m/s}`}</Formula>.
      </p>
      <div className="my-6 grid gap-4 lg:grid-cols-2">
        <Expandable
          title="Example A — speed 2×10⁸ m/s"
          variant="example"
          subjectColor="var(--subject-physics)"
        >
          <Stepper
            steps={[
              {
                label: "Given",
                description: <Formula>{String.raw`v=2\times10^8\ \text{m/s}`}</Formula>,
              },
              {
                label: "Formula",
                description: <Formula>{String.raw`n=\frac{c}{v}`}</Formula>,
              },
              {
                label: "Substitution",
                description: <Formula>{String.raw`n=\frac{3\times10^8}{2\times10^8}`}</Formula>,
              },
              {
                label: "Answer",
                description: <Formula>{String.raw`n=1.5`}</Formula>,
              },
            ]}
          />
        </Expandable>
        <Expandable
          title="Example B — speed 0.5×10⁸ m/s"
          variant="example"
          subjectColor="var(--subject-physics)"
        >
          <Stepper
            steps={[
              {
                label: "Given",
                description: <Formula>{String.raw`v=0.5\times10^8\ \text{m/s}`}</Formula>,
              },
              {
                label: "Formula",
                description: <Formula>{String.raw`n=\frac{c}{v}`}</Formula>,
              },
              {
                label: "Substitution",
                description: <Formula>{String.raw`n=\frac{3\times10^8}{0.5\times10^8}`}</Formula>,
              },
              {
                label: "Answer",
                description: (
                  <div className="space-y-2">
                    <p>
                      <Highlight>
                        <Formula>{String.raw`n=6`}</Formula>
                      </Highlight>
                    </p>
                    <p>
                      The speed of light in the medium is <Formula>{String.raw`1/6`}</Formula> of its speed in vacuum.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </Expandable>
      </div>

      <h3 id="h-9-3-boundary">Refraction at a plane boundary</h3>
      <Callout type="note" title="Refraction — definition">
        <p>
          <Highlight>
            <strong>Refraction</strong>
          </Highlight>{" "}
          is the bending or deviation of the path of light when it travels obliquely from one medium to another.
        </p>
      </Callout>
      <PhysicsFigure spec={refractionPlaneBoundary} />
      <TableCard
        title="Important terminology"
        headers={["Term", "Meaning"]}
        rows={[
          { cells: ["Incident ray", "Ray approaching the boundary"] },
          { cells: ["Refracted ray", "Ray entering the second medium"] },
          { cells: ["Normal", "Perpendicular to the boundary"] },
          {
            cells: [
              <>Angle of incidence (<Formula>{String.raw`i`}</Formula>)</>,
              "Angle between incident ray and normal",
            ],
          },
          {
            cells: [
              <>Angle of refraction (<Formula>{String.raw`r`}</Formula>)</>,
              "Angle between refracted ray and normal",
            ],
          },
        ]}
      />
      <Callout type="tip" title="Special case — normal incidence">
        <p>
          When light strikes the boundary perpendicularly (along the normal), it passes into the second medium without
          bending.
        </p>
      </Callout>

      <h3 id="h-9-3-bending">Bending between rarer and denser media</h3>
      <div className="my-6 grid gap-5 lg:grid-cols-2">
        <div className="min-w-0">
          <h4>Rarer medium → denser medium</h4>
          <PhysicsFigure spec={refractionRarerToDenser} showCaption={false} labelScale={1.15} className="my-3" />
          <ConditionStrip
            items={[
              <Formula key="n">{String.raw`n_1<n_2`}</Formula>,
              <Formula key="v">{String.raw`v_1>v_2`}</Formula>,
              <Formula key="i">{String.raw`i>r`}</Formula>,
            ]}
          />
          <p>
            Light bends <Highlight>towards the normal</Highlight> when travelling from a rarer medium to a denser
            medium.
          </p>
        </div>
        <div className="min-w-0">
          <h4>Denser medium → rarer medium</h4>
          <PhysicsFigure spec={refractionDenserToRarer} showCaption={false} labelScale={1.15} className="my-3" />
          <ConditionStrip
            items={[
              <Formula key="n">{String.raw`n_1>n_2`}</Formula>,
              <Formula key="v">{String.raw`v_1<v_2`}</Formula>,
              <Formula key="i">{String.raw`i<r`}</Formula>,
            ]}
          />
          <p>
            Light bends <Highlight>away from the normal</Highlight> when travelling from a denser medium to a rarer
            medium.
          </p>
        </div>
      </div>
      <TableCard
        title="Comparison — direction of bending"
        headers={["Property", "Rarer → denser", "Denser → rarer"]}
        rows={[
          {
            cells: [
              "Refractive index",
              <Formula key="a">{String.raw`n_1<n_2`}</Formula>,
              <Formula key="b">{String.raw`n_1>n_2`}</Formula>,
            ],
          },
          {
            cells: [
              "Speed",
              <Formula key="a">{String.raw`v_1>v_2`}</Formula>,
              <Formula key="b">{String.raw`v_1<v_2`}</Formula>,
            ],
          },
          {
            cells: [
              "Angles",
              <Formula key="a">{String.raw`i>r`}</Formula>,
              <Formula key="b">{String.raw`i<r`}</Formula>,
            ],
          },
          { cells: ["Bending", "Towards normal", "Away from normal"] },
        ]}
      />
      <p className="t-micro">Remember</p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Denser medium → Towards normal.</strong>
        </li>
        <li>
          <strong>Rarer medium → Away from normal.</strong>
        </li>
      </ul>

      <h3 id="h-9-3-snell">Snell&rsquo;s law</h3>
      <ConnectedCards
        top={
          <>
            <p className="t-micro">Statement</p>
            <p>
              The ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant for a
              given pair of media.
            </p>
            <FormulaStrip>
              <FormulaBlock
                important
                label="Mathematical expression"
                latex={String.raw`\frac{\sin i}{\sin r}=\text{constant}`}
              />
            </FormulaStrip>
          </>
        }
        bottom={
          <>
            <p className="t-micro">Refractive-index form</p>
            <p>When light travels from Medium 1 to Medium 2:</p>
            <FormulaStrip>
              <FormulaBlock
                important
                latex={String.raw`\frac{\sin i}{\sin r}=\frac{n_2}{n_1}=n_{21}`}
              />
            </FormulaStrip>
            <ul className="my-3 list-none space-y-2 pl-0">
              <li>
                <strong>i → Angle of incidence.</strong>
              </li>
              <li>
                <strong>r → Angle of refraction.</strong>
              </li>
              <li>
                <strong>n₁ → Absolute refractive index of Medium 1.</strong>
              </li>
              <li>
                <strong>n₂ → Absolute refractive index of Medium 2.</strong>
              </li>
            </ul>
          </>
        }
      />
      <div className="mx-auto max-w-xs">
        <PhysicsFigure spec={refractionSnellDiagram} showCaption={false} labelScale={1.2} className="my-0" />
      </div>

      <h3 id="h-9-3-relative-index">Relative refractive index</h3>
      <DirectionPair
        first={{
          direction: <>Medium 1 → Medium 2</>,
          formula: (
            <>
              <FormulaBlock latex={String.raw`\frac{\sin i}{\sin r}=\frac{n_2}{n_1}`} />
              <FormulaBlock important latex={String.raw`n_{21}=\frac{n_2}{n_1}`} />
            </>
          ),
          meaning: "This is the refractive index of Medium 2 with respect to Medium 1.",
        }}
        second={{
          direction: <>Medium 2 → Medium 1</>,
          formula: (
            <>
              <FormulaBlock latex={String.raw`\frac{\sin i}{\sin r}=\frac{n_1}{n_2}`} />
              <FormulaBlock important latex={String.raw`n_{12}=\frac{n_1}{n_2}`} />
            </>
          ),
          meaning: "This is the refractive index of Medium 1 with respect to Medium 2.",
        }}
        reciprocal={<FormulaBlock important latex={String.raw`n_{12}=\frac{1}{n_{21}}`} />}
      />
      <p>
        <strong>Combining both.</strong> The two relative indices are reciprocals.
      </p>

      <h3 id="h-9-3-relative-velocity">Relative refractive index in terms of velocity</h3>
      <p>
        <strong>Using the absolute refractive index formula</strong> <Formula>{String.raw`n=\frac{c}{v}`}</Formula>.
      </p>
      <DerivationPair
        columns={[
          {
            title: "Medium 2 with respect to Medium 1",
            rows: [
              {
                label: "Absolute R.I. ratio",
                formula: <FormulaBlock latex={String.raw`n_{21}=\frac{n_2}{n_1}`} />,
              },
              {
                label: "Substitute c / v",
                formula: <FormulaBlock latex={String.raw`=\frac{c/v_2}{c/v_1}`} />,
              },
              {
                label: "Simplify",
                formula: <FormulaBlock important latex={String.raw`n_{21}=\frac{v_1}{v_2}`} />,
                final: true,
              },
            ],
          },
          {
            title: "Medium 1 with respect to Medium 2",
            rows: [
              {
                label: "Absolute R.I. ratio",
                formula: <FormulaBlock latex={String.raw`n_{12}=\frac{n_1}{n_2}`} />,
              },
              {
                label: "Substitute c / v",
                formula: <FormulaBlock latex={String.raw`=\frac{c/v_1}{c/v_2}`} />,
              },
              {
                label: "Simplify",
                formula: <FormulaBlock important latex={String.raw`n_{12}=\frac{v_2}{v_1}`} />,
                final: true,
              },
            ],
          },
        ]}
      />
      <TableCard
        title="Complete formula comparison"
        headers={["Relative refractive index", "In terms of absolute R.I.", "In terms of velocity"]}
        rows={[
          {
            cells: [
              <Formula key="n21">{String.raw`n_{21}`}</Formula>,
              <Formula key="a">{String.raw`\frac{n_2}{n_1}`}</Formula>,
              <Formula key="b">{String.raw`\frac{v_1}{v_2}`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="n12">{String.raw`n_{12}`}</Formula>,
              <Formula key="a">{String.raw`\frac{n_1}{n_2}`}</Formula>,
              <Formula key="b">{String.raw`\frac{v_2}{v_1}`}</Formula>,
            ],
          },
        ]}
      />
      <FormulaStrip>
        <FormulaBlock important label="Reciprocal relationship" latex={String.raw`n_{12}=\frac{1}{n_{21}}`} />
      </FormulaStrip>

      <h3 id="h-9-3-laws-answer">Laws of refraction — 2 marks</h3>
      <KeyPoint title="Exam-answer block">
        <ol className="mt-1 list-decimal space-y-3 pl-5">
          <li>
            <strong>First law.</strong> The incident ray, refracted ray and normal at the point of incidence lie in the
            same plane.
          </li>
          <li>
            <strong>Second law (Snell&rsquo;s law).</strong> The ratio of the sine of the angle of incidence to the
            sine of the angle of refraction is constant.
          </li>
        </ol>
      </KeyPoint>
      <FormulaStrip>
        <FormulaBlock
          important
          label="Second law — highlighted strip"
          latex={String.raw`\frac{\sin i}{\sin r}=\text{constant}`}
        />
      </FormulaStrip>

      <h3 id="h-9-3-relative-problem">Worked problem — relative refractive index</h3>
      <Expandable
        title="Worked problem — relative refractive index"
        variant="example"
        subjectColor="var(--subject-physics)"
      >
        <TableCard
          headers={["Quantity", "Medium 1", "Medium 2"]}
          rows={[
            {
              cells: [
                "Velocity",
                <Formula key="m1">{String.raw`2\times10^8\ \text{m/s}`}</Formula>,
                <Formula key="m2">{String.raw`0.5\times10^8\ \text{m/s}`}</Formula>,
              ],
            },
            {
              cells: [
                "Absolute R.I.",
                <Formula key="m1">{String.raw`n_1=?`}</Formula>,
                <Formula key="m2">{String.raw`n_2=?`}</Formula>,
              ],
            },
          ]}
        />
        <FormulaStrip>
          <FormulaBlock important label="Direction of travel" latex={String.raw`1\rightarrow2`} />
        </FormulaStrip>
        <p>
          Since <Formula>{String.raw`n_1<n_2`}</Formula>, light travels from a rarer medium to a denser medium.
        </p>
        <Stepper
          steps={[
            {
              label: "Step 1 — Find absolute refractive indices",
              description: (
                <div className="space-y-2">
                  <p>
                    Using <Formula>{String.raw`n=\frac{c}{v}`}</Formula>.
                  </p>
                  <p>
                    For Medium 1: <Formula>{String.raw`n_1=\frac{3\times10^8}{2\times10^8}`}</Formula>
                  </p>
                  <p>
                    <Formula>{String.raw`n_1=1.5`}</Formula>
                  </p>
                  <p>
                    For Medium 2: <Formula>{String.raw`n_2=\frac{3\times10^8}{0.5\times10^8}`}</Formula>
                  </p>
                  <p>
                    <Formula>{String.raw`n_2=6`}</Formula>
                  </p>
                </div>
              ),
            },
            {
              label: "Step 2 — Find n₁₂",
              description: (
                <div className="space-y-2">
                  <p>
                    Refractive index of Medium 1 with respect to Medium 2:{" "}
                    <Formula>{String.raw`n_{12}=\frac{n_1}{n_2}=\frac{v_2}{v_1}`}</Formula>
                  </p>
                  <p>
                    Substitution: <Formula>{String.raw`n_{12}=\frac{1.5}{6}`}</Formula>
                  </p>
                  <p>
                    <Formula>{String.raw`=\frac{0.5\times10^8}{2\times10^8}`}</Formula>
                  </p>
                  <p>
                    <Formula>{String.raw`n_{12}=0.25`}</Formula>
                  </p>
                </div>
              ),
            },
            {
              label: "Step 3 — Find n₂₁",
              description: (
                <div className="space-y-2">
                  <p>
                    Refractive index of Medium 2 with respect to Medium 1:{" "}
                    <Formula>{String.raw`n_{21}=\frac{n_2}{n_1}=\frac{v_1}{v_2}`}</Formula>
                  </p>
                  <p>
                    Substitution: <Formula>{String.raw`n_{21}=\frac{6}{1.5}`}</Formula>
                  </p>
                  <p>
                    <Formula>{String.raw`=\frac{2\times10^8}{0.5\times10^8}`}</Formula>
                  </p>
                  <p>
                    <Formula>{String.raw`n_{21}=4`}</Formula>
                  </p>
                </div>
              ),
            },
            {
              label: "Step 4 — Verify reciprocal relationship",
              description: (
                <div className="space-y-2 [&>div]:my-0">
                  <FormulaBlock latex={String.raw`n_{12}=\frac{1}{n_{21}}`} />
                  <FormulaBlock latex={String.raw`=\frac14`} />
                  <FormulaBlock important latex={String.raw`n_{12}=0.25`} />
                </div>
              ),
            },
          ]}
        />
        <p className="t-micro">Final Results</p>
        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <ResultCard
            label="Medium 1 w.r.t. Medium 2"
            value="0.25"
            symbol={<Formula>{String.raw`n_{12}`}</Formula>}
          />
          <ResultCard
            label="Medium 2 w.r.t. Medium 1"
            value="4"
            symbol={<Formula>{String.raw`n_{21}`}</Formula>}
          />
        </div>
        <p>Reciprocal relationship verified.</p>
      </Expandable>

      <h3 id="h-9-3-applications">Applications of refraction in real life</h3>
      <p>Two applications covered:</p>
      <ol className="my-6 list-decimal space-y-2 pl-5">
        <li>Lateral Shift of a Ray Refracted Through a Parallel-Sided Slab.</li>
        <li>Apparent Depth.</li>
      </ol>
      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <ApplicationCard
          title="Lateral Shift of a Ray Refracted Through a Parallel-Sided Slab"
          href="#h-9-3-lateral-shift"
          figure={
            <PhysicsFigure
              spec={refractionSlabFourAngles}
              showCaption={false}
              labelScale={1.2}
              className="my-0"
            />
          }
        />
        <ApplicationCard
          title="Apparent Depth"
          href="#h-9-3-apparent-depth"
          figure={
            <PhysicsFigure
              spec={refractionApparentConcept}
              showCaption={false}
              labelScale={1.2}
              className="my-0"
            />
          }
        />
      </div>

      <h3 id="h-9-3-lateral-shift">Lateral shift through a parallel-sided glass slab</h3>
      <h4>Refraction through a parallel-sided slab</h4>
      <p>A parallel-sided slab represents Medium 2, surrounded by Medium 1.</p>
      <FormulaStrip>
        <FormulaBlock important label="Medium condition" latex={String.raw`n_2>n_1`} />
      </FormulaStrip>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Medium 1 → Surrounding medium.</strong>
        </li>
        <li>
          <strong>Medium 2 → Slab medium.</strong>
        </li>
      </ul>
      <h4>Ray diagram and terminology</h4>
      <PhysicsFigure spec={refractionSlabFourAngles} />
      <h4>Important geometrical relationship</h4>
      <p>
        Since <Formula>{String.raw`N_1`}</Formula> and <Formula>{String.raw`N_2`}</Formula> are parallel:
      </p>
      <FormulaStrip>
        <FormulaBlock important latex={String.raw`r_1=i_2`} />
      </FormulaStrip>
      <p>This follows from alternate interior angles.</p>
      <h4>Key result</h4>
      <p>The emergent ray is parallel to the incident ray.</p>
      <TakeawayBlock
        formula={<FormulaStrip><FormulaBlock important latex={String.raw`i_1=r_2`} /></FormulaStrip>}
        figure={
          <PhysicsFigure
            spec={refractionParallelEmergence}
            showCaption={false}
            labelScale={1.2}
            className="my-0"
          />
        }
      />
      <p>
        <Highlight>Angle of incidence = Angle of emergence</Highlight>
      </p>
      <h4>Proof — emergent ray is parallel to incident ray</h4>
      <Stepper
        steps={[
          {
            label: "At the first interface (Medium 1 → Medium 2)",
            description: (
              <div className="space-y-2">
                <p>By Snell&rsquo;s law:</p>
                <FormulaBlock tag="(1)" latex={String.raw`\frac{\sin i_1}{\sin r_1}=\frac{n_2}{n_1}`} />
              </div>
            ),
          },
          {
            label: "At the second interface (Medium 2 → Medium 1)",
            description: (
              <div className="space-y-2">
                <p>By Snell&rsquo;s law:</p>
                <FormulaBlock latex={String.raw`\frac{\sin i_2}{\sin r_2}=\frac{n_1}{n_2}`} />
                <p>Taking the reciprocal:</p>
                <FormulaBlock tag="(2)" latex={String.raw`\frac{\sin r_2}{\sin i_2}=\frac{n_2}{n_1}`} />
              </div>
            ),
          },
          {
            label: "Equating (1) and (2)",
            description: (
              <div className="space-y-2">
                <FormulaBlock latex={String.raw`\frac{\sin i_1}{\sin r_1}=\frac{\sin r_2}{\sin i_2}`} />
                <p>From the slab diagram, since the normals are parallel:</p>
                <FormulaBlock latex={String.raw`r_1=i_2`} />
                <p>Therefore:</p>
                <FormulaBlock latex={String.raw`\sin r_1=\sin i_2`} />
                <p>Substituting:</p>
                <FormulaBlock latex={String.raw`\sin i_1=\sin r_2`} />
                <p>Hence:</p>
                <FormulaBlock important latex={String.raw`i_1=r_2`} />
              </div>
            ),
          },
        ]}
      />
      <p>
        <strong>Conclusion.</strong> The emergent ray is parallel to the incident ray.
      </p>

      <h3 id="h-9-3-apparent-depth">Apparent depth</h3>
      <h4>Principle</h4>
      <p>
        When an object in a denser medium is viewed from a rarer medium, its image appears to be raised towards the
        surface.
      </p>
      <PhysicsFigure spec={refractionApparentConcept} />
      <h4>Apparent depth vs. real depth</h4>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Upper medium → Rarer medium (Air),</strong> <Formula>{String.raw`n_1`}</Formula>.
        </li>
        <li>
          <strong>Lower medium → Denser medium (Water),</strong> <Formula>{String.raw`n_2`}</Formula>.
        </li>
        <li>
          <strong>Eye → Above the surface</strong> in the rarer medium.
        </li>
        <li>
          <strong>Rays → Bend away from the normal</strong> on entering the rarer medium.
        </li>
        <li>
          <strong>Backward extensions → Locate the virtual image</strong> above the actual object.
        </li>
      </ul>
      <PhysicsFigure spec={refractionApparentDepth} />
      <h4>Relationship between real depth and apparent depth</h4>
      <p>
        The refractive index of Medium 2 (denser) with respect to Medium 1 (rarer) is:
      </p>
      <FormulaStrip>
        <div className="w-full space-y-2 [&>div]:my-0">
          <FormulaBlock latex={String.raw`n_{21}=\frac{\text{Real depth}}{\text{Apparent depth}}`} />
          <FormulaBlock important label="Substituting" latex={String.raw`n_{21}=\frac{d}{d'}`} />
        </div>
      </FormulaStrip>
      <h4>Formula for apparent depth</h4>
      <ConnectedCards
        top={<FormulaBlock latex={String.raw`n_{21}=\frac{d}{d'}`} />}
        bottom={
          <FormulaBlock important label="Primary calculation formula" latex={String.raw`d'=\frac{d}{n_{21}}`} />
        }
      />
      <TableCard
        title="Symbols"
        headers={["Symbol", "Meaning"]}
        rows={[
          { cells: [<Formula key="d">{String.raw`d`}</Formula>, "Real depth"] },
          { cells: [<Formula key="dp">{String.raw`d'`}</Formula>, "Apparent depth"] },
          {
            cells: [
              <Formula key="n21">{String.raw`n_{21}`}</Formula>,
              "Refractive index of denser medium with respect to rarer medium",
            ],
          },
        ]}
      />

      <CollapsibleRevision
        className="my-6 rounded-xl border border-border bg-card"
        contentClassName="p-4 [&>div]:my-0"
        label="Quick revision — refraction formula sheet"
        header={
          <div className="border-b border-border bg-muted/25 px-4 py-3 pr-12">
            <h3
              id="h-9-3-formula-sheet"
              className="m-0! border-0! p-0! text-base! font-semibold! tracking-tight!"
            >
              Quick revision — refraction formula sheet
            </h3>
          </div>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <FormulaCard label="Absolute refractive index" subjectColor="var(--subject-physics)">
            <FormulaBlock latex={String.raw`n=\frac{c}{v}`} />
          </FormulaCard>
          <FormulaCard label="Snell’s law" subjectColor="var(--subject-physics)">
            <FormulaBlock latex={String.raw`\frac{\sin i}{\sin r}=\frac{n_2}{n_1}`} />
          </FormulaCard>
          <FormulaCard label="Relative refractive index — absolute form" subjectColor="var(--subject-physics)">
            <FormulaBlock latex={String.raw`n_{21}=\frac{n_2}{n_1}`} />
            <FormulaBlock latex={String.raw`n_{12}=\frac{n_1}{n_2}`} />
          </FormulaCard>
          <FormulaCard label="Relative refractive index — velocity form" subjectColor="var(--subject-physics)">
            <FormulaBlock latex={String.raw`n_{21}=\frac{v_1}{v_2}`} />
            <FormulaBlock latex={String.raw`n_{12}=\frac{v_2}{v_1}`} />
            <FormulaBlock latex={String.raw`n_{12}=\frac{1}{n_{21}}`} />
          </FormulaCard>
          <div className="sm:col-span-2">
            <FormulaCard label="Applications" subjectColor="var(--subject-physics)">
              <TableCard
                headers={["Concept", "Key result"]}
                rows={[
                  {
                    cells: [
                      "Parallel-sided slab",
                      <Formula key="slab">{String.raw`i_1=r_2`}</Formula>,
                    ],
                  },
                  {
                    cells: [
                      "Apparent depth",
                      <Formula key="ad">{String.raw`n_{21}=\frac{d}{d'}`}</Formula>,
                    ],
                  },
                  {
                    cells: [
                      "Apparent depth formula",
                      <Formula key="adf">{String.raw`d'=\frac{d}{n_{21}}`}</Formula>,
                    ],
                  },
                ]}
              />
            </FormulaCard>
          </div>
        </div>
      </CollapsibleRevision>

      <h2 id="h-9-4">9.4 Total Internal Reflection</h2>

      <TIRHero
        figure={
          <PhysicsFigure
            spec={tirHeaderBounces}
            showCaption={false}
            labelScale={1.2}
            className="my-0"
          />
        }
        blocks={["Critical Angle", "Total Internal Reflection", "Applications"]}
      />

      <h3 id="h-9-4-boundary">Reflection and Refraction at a Boundary</h3>
      <h4>Pure reflection vs. pure refraction</h4>
      <BoundaryPair
        first={{
          title: "Pure Reflection",
          accent: "var(--warning)",
          figure: (
            <PhysicsFigure
              spec={tirPureReflection}
              showCaption={false}
              labelScale={1.2}
              className="my-0"
            />
          ),
          points: [
            "Incident ray strikes the boundary.",
            "Entire ray reflects back into Medium 1.",
            "No refracted ray enters Medium 2.",
          ],
        }}
        second={{
          title: "Pure Refraction",
          accent: "var(--ok)",
          figure: (
            <PhysicsFigure
              spec={tirPureRefraction}
              showCaption={false}
              labelScale={1.2}
              className="my-0"
            />
          ),
          points: [
            "Incident ray strikes the boundary.",
            "Ray bends into Medium 2.",
            "No reflected ray is shown.",
          ],
        }}
      />

      <h4>What happens in real life?</h4>
      <p>
        In most cases, when light travels from a <strong>denser medium to a rarer medium</strong>, both phenomena occur
        simultaneously:
      </p>
      <SplitRayPanel
        figure={
          <PhysicsFigure
            spec={tirPartialSplit}
            showCaption={false}
            labelScale={1.2}
            className="my-0"
          />
        }
      />

      <h3 id="h-9-4-critical-angle">Critical Angle</h3>
      <h4>Definition</h4>
      <p>
        The <strong>critical angle</strong> is the angle of incidence in the denser medium when the angle of refraction
        in the rarer medium becomes <Formula>{String.raw`90^\circ`}</Formula>.
      </p>
      <FormulaStrip>
        <FormulaBlock important label="Condition" latex={String.raw`r=90^\circ`} />
      </FormulaStrip>

      <h4>Critical angle — ray diagram</h4>
      <PhysicsFigure spec={tirCriticalAngle} />

      <h4>Formula for critical angle (rarer medium = air)</h4>
      <Callout type="note" title="Given setup — rarer medium = air">
        <ul className="my-0 list-none space-y-2 pl-0">
          <li>
            <strong>Denser medium</strong> → <Formula>{String.raw`n_1=n`}</Formula>
          </li>
          <li>
            <strong>Air</strong> → <Formula>{String.raw`n_2=1`}</Formula>
          </li>
          <li>
            <strong>Angle of incidence</strong> → <Formula>{String.raw`i=i_c`}</Formula>
          </li>
          <li>
            <strong>Angle of refraction</strong> → <Formula>{String.raw`r=90^\circ`}</Formula>
          </li>
        </ul>
      </Callout>
      <Stepper
        steps={[
          {
            label: "Step 1 — Apply Snell’s law",
            description: <FormulaBlock latex={String.raw`\frac{\sin i}{\sin r}=\frac{n_2}{n_1}`} />,
          },
          {
            label: "Step 2 — Substitute critical-angle conditions",
            description: <FormulaBlock latex={String.raw`\frac{\sin i_c}{\sin90^\circ}=\frac{1}{n}`} />,
          },
          {
            label: "Step 3 — Simplify",
            description: (
              <div className="space-y-2">
                <p>Since:</p>
                <FormulaBlock latex={String.raw`\sin90^\circ=1`} />
                <FormulaBlock latex={String.raw`\sin i_c=\frac{1}{n}`} />
              </div>
            ),
          },
        ]}
      />
      <FormulaCard label="Important formula" subjectColor="var(--subject-physics)">
        <FormulaBlock important latex={String.raw`\sin i_c=\frac{1}{n}`} />
        <FormulaBlock important latex={String.raw`i_c=\sin^{-1}\left(\frac{1}{n}\right)`} />
      </FormulaCard>

      <h3 id="h-9-4-behavior">Behavior of Light at a Denser-to-Rarer Interface</h3>
      <p>
        <strong>Basic condition:</strong>
      </p>
      <FormulaStrip>
        <FormulaBlock important latex={String.raw`n_1>n_2`} />
      </FormulaStrip>
      <p>Light travels from Medium 1 (denser) to Medium 2 (rarer).</p>

      <h4>Three cases of incidence</h4>
      <div className="my-6 grid gap-4 md:grid-cols-3">
        <CaseCard
          title="Case 1 — Angle of Incidence Less Than Critical Angle"
          condition={
            <FormulaStrip>
              <div className="w-full space-y-1 [&>div]:my-0">
                <FormulaBlock latex={String.raw`i<i_c`} />
                <FormulaBlock latex={String.raw`r<90^\circ`} />
              </div>
            </FormulaStrip>
          }
          figure={
            <PhysicsFigure
              spec={tirCaseBelow}
              showCaption={false}
              labelScale={1.2}
              className="my-0"
            />
          }
          points={["Light refracts into the rarer medium.", "Refracted ray bends away from the normal."]}
        />
        <CaseCard
          title="Case 2 — Angle of Incidence Equal to Critical Angle"
          condition={
            <FormulaStrip>
              <div className="w-full space-y-1 [&>div]:my-0">
                <FormulaBlock latex={String.raw`i=i_c`} />
                <FormulaBlock latex={String.raw`r=90^\circ`} />
              </div>
            </FormulaStrip>
          }
          figure={
            <PhysicsFigure
              spec={tirCaseCritical}
              showCaption={false}
              labelScale={1.2}
              className="my-0"
            />
          }
          points={["Refracted ray travels along the boundary.", "Ray grazes the interface."]}
        />
        <CaseCard
          title="Case 3 — Angle of Incidence Greater Than Critical Angle"
          condition={
            <FormulaStrip>
              <FormulaBlock latex={String.raw`i>i_c`} />
            </FormulaStrip>
          }
          figure={
            <PhysicsFigure
              spec={tirCaseAbove}
              showCaption={false}
              labelScale={1.2}
              className="my-0"
            />
          }
          points={[
            "No refracted ray enters the rarer medium.",
            "Entire incident ray reflects into the denser medium.",
            "Angle of reflection equals angle of incidence.",
          ]}
          featured
        />
      </div>
      <AngleProgression
        items={[
          <Formula key="less">{String.raw`i<i_c`}</Formula>,
          <Formula key="equal">{String.raw`i=i_c`}</Formula>,
          <Formula key="greater">{String.raw`i>i_c`}</Formula>,
        ]}
      />

      <h3 id="h-9-4-definition">Total Internal Reflection (TIR)</h3>
      <h4>Definition</h4>
      <p>
        When light travels from a denser medium to a rarer medium and the angle of incidence exceeds the critical angle,
        the light is reflected completely back into the denser medium. This phenomenon is called{" "}
        <strong>Total Internal Reflection (TIR)</strong>.
      </p>

      <h4>Diagram — Total Internal Reflection</h4>
      <PhysicsFigure spec={tirFocused} />

      <h4>Two mandatory conditions for TIR</h4>
      <ConditionCards
        items={[
          {
            title: "Condition 1 — Direction of travel",
            formula: <FormulaBlock important latex={String.raw`n_1>n_2`} />,
            description: "Light must travel from an optically denser medium to an optically rarer medium.",
          },
          {
            title: "Condition 2 — Angle of incidence",
            formula: <FormulaBlock important latex={String.raw`i>i_c`} />,
            description: "The angle of incidence must be greater than the critical angle.",
          },
        ]}
      />
      <p className="text-center text-sm font-extrabold uppercase tracking-wide text-foreground/75">
        Both conditions are necessary
      </p>

      <h4>Phenomenon of TIR — key points</h4>
      <AngleResultStrip
        items={[
          {
            condition: <Formula>{String.raw`i<i_c`}</Formula>,
            result: "Refraction occurs along with partial reflection.",
          },
          {
            condition: <Formula>{String.raw`i=i_c`}</Formula>,
            result: "Refracted ray grazes the interface.",
          },
          {
            condition: <Formula>{String.raw`i>i_c`}</Formula>,
            result: "Total internal reflection occurs.",
          },
        ]}
      />
      <KeyPoint title="TIR takeaway">
        <p>
          In TIR → 100% of incident light is reflected back into the denser medium, with zero transmission.
        </p>
        <p>
          <Highlight>
            Unlike ordinary mirror reflection, TIR involves no light energy loss, according to the supplied notes.
          </Highlight>
        </p>
      </KeyPoint>

      <h3 id="h-9-4-common-media">Critical Angles of Common Media</h3>
      <ReferenceCard
        medium="Water"
        index={<Formula>{String.raw`1.33`}</Formula>}
        angle={<Formula>{String.raw`48.75^\circ`}</Formula>}
      />

      <h3 id="h-9-4-applications">Applications of Total Internal Reflection</h3>
      <h4>Optical Fibre Cable (OFC)</h4>
      <h5>Principle</h5>
      <p>
        When light travels through an optical fibre and strikes the core–cladding boundary at an angle greater than the
        critical angle (<Formula>{String.raw`i>i_c`}</Formula>), it undergoes repeated{" "}
        <strong>Total Internal Reflection</strong>.
      </p>

      <h5>Structure of optical fibre</h5>
      <p>An optical fibre is a cylindrical waveguide consisting of:</p>
      <div className="my-6 grid items-center gap-4 md:grid-cols-2">
        <PhysicsFigure
          spec={tirFibreCrossSection}
          showCaption={false}
          labelScale={1.2}
          className="my-0"
        />
        <TableCard
          headers={["Component", "Description"]}
          rows={[
            {
              cells: [
                <strong key="core">Core</strong>,
                <>
                  Inner part of the optical fibre; refractive index <Formula>{String.raw`n_1`}</Formula>
                </>,
              ],
            },
            {
              cells: [
                <strong key="cladding">Cladding</strong>,
                <>
                  Outer surrounding layer; refractive index <Formula>{String.raw`n_2`}</Formula>
                </>,
              ],
            },
          ]}
        />
      </div>
      <FormulaStrip>
        <FormulaBlock important label="Refractive index condition" latex={String.raw`n_1>n_2`} />
      </FormulaStrip>

      <h5>Working of optical fibre</h5>
      <PhysicsFigure spec={tirFibreLongitudinal} />
      <p>
        <strong>Ray path:</strong>
      </p>
      <Stepper
        steps={[
          { label: "Light enters the core obliquely." },
          {
            label: "It strikes the core–cladding boundary at an angle greater than the critical angle.",
          },
          { label: "Total internal reflection occurs." },
          { label: "Repeated reflections guide light forward along the core." },
          { label: "Light does not escape into the cladding." },
        ]}
      />
      <p>
        <strong>Governing condition:</strong>
      </p>
      <FormulaStrip>
        <div className="w-full space-y-1 [&>div]:my-0">
          <FormulaBlock important latex={String.raw`n_1>n_2`} />
          <FormulaBlock important latex={String.raw`i>i_c`} />
        </div>
      </FormulaStrip>

      <h5>Uses of optical fibre cable</h5>
      <div className="my-6 grid gap-4 md:grid-cols-2">
        <ApplicationFigureCard
          title="Telecommunications"
          description="Carries signals in the form of light."
          figure={
            <PhysicsFigure
              spec={tirTelecomSignal}
              showCaption={false}
              labelScale={1.2}
              className="my-0"
            />
          }
        />
        <ApplicationFigureCard
          title="Medical Diagnosis"
          description="Used in endoscopy."
          figure={
            <PhysicsFigure
              spec={tirEndoscope}
              showCaption={false}
              labelScale={1.2}
              className="my-0"
            />
          }
        />
      </div>

      <h3 id="h-9-4-merits">Merits of Optical Fibre Cable Over Coaxial Cable</h3>
      <p>
        <strong>Question:</strong> What are the advantages of optical fibre cable over coaxial cable for signal
        transmission?
      </p>
      <TableCard
        headers={["Merit", "Key point"]}
        rows={[
          { cells: [<strong key="fast">Fast</strong>, "Fast signal transmission"] },
          { cells: [<strong key="cheaper">Cheaper</strong>, "Lower cost"] },
          { cells: [<strong key="loss">Low energy loss</strong>, "Less energy loss"] },
          {
            cells: [
              <strong key="signals">Multiple signals</strong>,
              "Many signals can be transmitted simultaneously",
            ],
          },
        ]}
      />

      <CollapsibleRevision
        className="my-6 rounded-xl border border-border bg-card"
        contentClassName="p-4 [&>div]:my-0"
        label="Quick Revision — Total Internal Reflection"
        header={
          <div className="border-b border-border bg-muted/25 px-4 py-3 pr-12">
            <h3
              id="h-9-4-revision"
              className="m-0! border-0! p-0! text-base! font-semibold! tracking-tight!"
            >
              Quick Revision — Total Internal Reflection
            </h3>
          </div>
        }
      >
        <RevisionDashboard
        critical={
          <div className="space-y-2">
            <FormulaBlock latex={String.raw`r=90^\circ`} />
            <FormulaBlock important latex={String.raw`\sin i_c=\frac{1}{n}`} />
            <FormulaBlock important latex={String.raw`i_c=\sin^{-1}\left(\frac1n\right)`} />
            <p className="t-micro">Applicable when the rarer medium is air.</p>
          </div>
        }
        conditions={
          <div className="space-y-2">
            <FormulaBlock important latex={String.raw`n_1>n_2`} />
            <FormulaBlock important latex={String.raw`i>i_c`} />
          </div>
        }
        cases={
          <TableCard
            headers={["Condition", "Result"]}
            rows={[
              { cells: [<Formula key="less">{String.raw`i<i_c`}</Formula>, "Refraction"] },
              { cells: [<Formula key="equal">{String.raw`i=i_c`}</Formula>, "Grazing refraction"] },
              {
                cells: [
                  <Formula key="greater">{String.raw`i>i_c`}</Formula>,
                  "Total internal reflection",
                ],
              },
            ]}
          />
        }
        fibre={
          <div className="space-y-2">
            <FormulaBlock important latex={String.raw`n_{\text{core}}>n_{\text{cladding}}`} />
            <ul className="list-none space-y-2 pl-0 text-sm text-foreground/80">
              <li>
                <strong>Principle</strong> → Repeated TIR.
              </li>
              <li>
                <strong>Uses</strong> → Telecommunications, Endoscopy.
              </li>
            </ul>
          </div>
        }
        />
      </CollapsibleRevision>

      <h3 id="h-9-4-practice">Practice Problems — Critical Angle</h3>
      <div className="my-6 grid gap-4 md:grid-cols-2 [&>div]:my-0">
        <Expandable
          title="Problem 1 — Critical angle 45°"
          variant="example"
          subjectColor="var(--subject-physics)"
        >
          <p>
            <strong>Question:</strong> The critical angle of a medium is <Formula>{String.raw`45^\circ`}</Formula>. Find
            its refractive index.
          </p>
          <Stepper
            steps={[
              {
                label: "Given",
                description: <FormulaBlock latex={String.raw`i_c=45^\circ,\qquad n=?`} />,
              },
              {
                label: "Formula",
                description: (
                  <div className="space-y-2">
                    <FormulaBlock latex={String.raw`\sin i_c=\frac1n`} />
                    <p>Rearranging:</p>
                    <FormulaBlock latex={String.raw`n=\frac1{\sin i_c}`} />
                  </div>
                ),
              },
              {
                label: "Substitution",
                description: (
                  <div className="space-y-2">
                    <FormulaBlock latex={String.raw`n=\frac1{\sin45^\circ}`} />
                    <FormulaBlock latex={String.raw`=\frac1{1/\sqrt2}`} />
                  </div>
                ),
              },
              {
                label: "Final Answer",
                description: (
                  <FormulaCard label="Final answer" subjectColor="var(--subject-physics)">
                    <FormulaBlock important latex={String.raw`n=\sqrt2`} />
                  </FormulaCard>
                ),
              },
            ]}
          />
        </Expandable>

        <Expandable
          title="Problem 2 — Refractive index 2"
          variant="example"
          subjectColor="var(--subject-physics)"
        >
          <p>
            <strong>Question:</strong> The refractive index of a medium is <Formula>{String.raw`2`}</Formula>. Find its
            critical angle with air.
          </p>
          <Stepper
            steps={[
              {
                label: "Given",
                description: <FormulaBlock latex={String.raw`n=2,\qquad i_c=?`} />,
              },
              {
                label: "Formula",
                description: <FormulaBlock latex={String.raw`\sin i_c=\frac1n`} />,
              },
              {
                label: "Substitution",
                description: (
                  <div className="space-y-2">
                    <FormulaBlock latex={String.raw`\sin i_c=\frac12`} />
                    <FormulaBlock latex={String.raw`i_c=\sin^{-1}\left(\frac12\right)`} />
                  </div>
                ),
              },
              {
                label: "Final Answer",
                description: (
                  <FormulaCard label="Final answer" subjectColor="var(--subject-physics)">
                    <FormulaBlock important latex={String.raw`i_c=30^\circ`} />
                  </FormulaCard>
                ),
              },
            ]}
          />
        </Expandable>
      </div>

      <h2 id="h-9-5">9.5 Refraction at Spherical Surfaces and by Lenses</h2>
      <SphericalLensHero
        parts={[
          "Spherical Surface Refraction",
          "Lens Maker's Formula",
          "Image Formation by Lenses",
          "Lens Magnification & Power",
        ]}
        figure={<PhysicsFigure spec={sphericalSurfaceLensHeader} showCaption={false} labelScale={1.15} />}
      />

      <h3 id="h-9-5-part-1">Part 1 — Refraction at Spherical Surfaces</h3>
      <h4 id="h-9-5-surface">1. Refraction at a Spherical Surface</h4>
      <p>A spherical refracting surface separates two transparent media having different refractive indices.</p>
      <p className="t-micro">Medium conditions</p>
      <FormulaBlock latex={String.raw`n_2>n_1`} />
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          Medium 1 → Rarer medium (<Formula>{String.raw`n_1`}</Formula>).
        </li>
        <li>
          Medium 2 → Denser medium (<Formula>{String.raw`n_2`}</Formula>).
        </li>
      </ul>

      <h4 id="h-9-5-approximations">1.2 Important Approximations</h4>
      <p>For the derivation, the following angles are assumed to be very small:</p>
      <ApproximationBlock
        items={[
          { label: "Small angles", value: <Formula>{String.raw`i,r,\alpha,\beta,\theta\ll1`}</Formula> },
          { label: "Tangent", value: <Formula>{String.raw`\tan\phi\approx\phi`}</Formula> },
          { label: "Sine", value: <Formula>{String.raw`\sin\phi\approx\phi`}</Formula> },
          { label: "Near the pole", value: <Formula>{String.raw`PN\approx0`}</Formula> },
        ]}
        note="Small-angle approximations are used throughout the derivation."
      />

      <h4 id="h-9-5-surface-derivation">2. Refraction at a Spherical Surface — Derivation</h4>
      <p className="t-micro">Important derivation</p>
      <FigureBesideStages
        figure={<PhysicsFigure spec={sphericalSurfaceRefractionGeometry} showCaption={false} labelScale={0.95} />}
        stages={[
          {
            title: "Step 1 — Small-Angle Geometrical Relations",
            rows: [
              { label: "Right triangle at O", latex: String.raw`\tan\alpha\approx\alpha=\frac{MP}{-u}` },
              { label: "Right triangle at C", latex: String.raw`\tan\beta\approx\beta=\frac{MP}{R}` },
              { label: "Right triangle at I", latex: String.raw`\tan\theta\approx\theta=\frac{MP}{v}` },
            ],
          },
          {
            title: "Step 2 — Geometrical Relationships",
            rows: [
              { label: "From triangle OCM", latex: String.raw`i=\alpha+\beta` },
              { label: "From triangle MIC", latex: String.raw`\beta=r+\theta` },
              { label: "Therefore", latex: String.raw`r=\beta-\theta` },
            ],
          },
          {
            title: "Step 3 — Apply Snell's Law",
            rows: [
              { label: "Snell's law", latex: String.raw`\frac{\sin i}{\sin r}=\frac{n_2}{n_1}` },
              { label: "Small-angle form", latex: String.raw`\frac{i}{r}=\frac{n_2}{n_1}` },
              { label: "Therefore", latex: String.raw`n_1i=n_2r` },
            ],
          },
          {
            title: "Step 4 — Substitute Geometrical Relationships",
            rows: [{ label: "Using i = α + β and r = β − θ", latex: String.raw`n_1(\alpha+\beta)=n_2(\beta-\theta)` }],
          },
          {
            title: "Step 5 — Substitute Small-Angle Expressions",
            rows: [
              {
                label: "Substitute the three ratios",
                latex: String.raw`n_1\left(\frac{MP}{-u}+\frac{MP}{R}\right)=n_2\left(\frac{MP}{R}-\frac{MP}{v}\right)`,
              },
              {
                label: "Divide both sides by MP",
                latex: String.raw`-\frac{n_1}{u}+\frac{n_1}{R}=\frac{n_2}{R}-\frac{n_2}{v}`,
              },
            ],
          },
          {
            title: "Step 6 — Rearrange",
            rows: [
              {
                label: "Collect the object and image terms",
                latex: String.raw`-\frac{n_1}{u}+\frac{n_2}{v}=\frac{n_2}{R}-\frac{n_1}{R}`,
              },
            ],
          },
        ]}
      />
      <ProminentFormula
        label="Refraction at a Spherical Surface"
        tag="Final formula"
        latex={String.raw`\frac{n_2}{v}-\frac{n_1}{u}=\frac{n_2-n_1}{R}`}
      />

      <h4 id="h-9-5-surface-numerical">3. Numerical Problem — Spherical Surface Refraction</h4>
      <p className="t-micro">NCERT Problem</p>
      <Expandable title="NCERT Problem — Spherical Surface Refraction" variant="example">
        <ProblemSolution.Problem>
          <p>A point source in air sends light towards a spherical glass surface.</p>
          <p className="mt-3">Find the position of the image.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p className="t-micro">Given</p>
          <TableCard
            headers={["Quantity", "Value"]}
            rows={[
              { cells: ["Air refractive index", <Formula key="n1">{String.raw`n_1=1`}</Formula>] },
              { cells: ["Glass refractive index", <Formula key="n2">{String.raw`n_2=1.5`}</Formula>] },
              { cells: ["Object distance", <Formula key="u">{String.raw`u=-100\ \text{cm}`}</Formula>] },
              { cells: ["Radius of curvature", <Formula key="R">{String.raw`R=+20\ \text{cm}`}</Formula>] },
              { cells: ["Image distance", <Formula key="v">{String.raw`v=?`}</Formula>] },
            ]}
          />
          <Stepper
            steps={[
              {
                label: "Formula",
                description: (
                  <div className="space-y-2 [&>div]:my-0">
                    <FormulaBlock latex={String.raw`\frac{n_2}{v}-\frac{n_1}{u}=\frac{n_2-n_1}{R}`} />
                  </div>
                ),
              },
              {
                label: "Substitution",
                description: (
                  <div className="space-y-2 [&>div]:my-0">
                    <FormulaBlock latex={String.raw`\frac{1.5}{v}-\frac{1}{-100}=\frac{1.5-1}{20}`} />
                    <FormulaBlock latex={String.raw`\frac{1.5}{v}+\frac{1}{100}=\frac{0.5}{20}`} />
                    <FormulaBlock latex={String.raw`\frac{1.5}{v}+\frac{1}{100}=\frac{1}{40}`} />
                  </div>
                ),
              },
              {
                label: "Simplification",
                description: (
                  <div className="space-y-2 [&>div]:my-0">
                    <FormulaBlock latex={String.raw`\frac{1.5}{v}=\frac{1}{40}-\frac{1}{100}`} />
                    <FormulaBlock latex={String.raw`\frac{1.5}{v}=\frac{100-40}{4000}`} />
                    <FormulaBlock latex={String.raw`\frac{1.5}{v}=\frac{60}{4000}`} />
                  </div>
                ),
              },
              {
                label: "Solve for v",
                description: (
                  <div className="space-y-2 [&>div]:my-0">
                    <FormulaBlock latex={String.raw`v=\frac{1.5\times4000}{60}`} />
                  </div>
                ),
              },
            ]}
          />
          <ProminentFormula
            label="Final answer"
            latex={String.raw`v=+100\ \text{cm}`}
            note={
              <span>
                Image is formed{" "}
                <Highlight>
                  <Formula>{String.raw`+100\ \text{cm}`}</Formula>
                </Highlight>{" "}
                inside the glass medium, in the direction of incident light.
              </span>
            }
          />
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-9-5-part-2">Part 2 — Lenses</h3>
      <h4 id="h-9-5-lens-geometry">4. Basic Geometry of Lenses</h4>
      <p className="t-micro">4.1 Types of Lenses</p>
      <p>Lenses are represented by two spherical surfaces.</p>
      <PhysicsFigure spec={lensTypesPair} />
      <ComparisonPair
        first={{
          title: "Convex Lens",
          children: (
            <ul className="my-0 list-none space-y-2 pl-0">
              <li>Formed by the overlapping intersection of two circles (spheres).</li>
              <li>
                Principal foci → <Formula>{String.raw`F,F'`}</Formula>.
              </li>
              <li>
                Centres of curvature → <Formula>{String.raw`C,C'`}</Formula>.
              </li>
            </ul>
          ),
        }}
        second={{
          title: "Concave Lens",
          children: (
            <ul className="my-0 list-none space-y-2 pl-0">
              <li>Formed by the inward-curving region bounded between two non-overlapping circles (spheres).</li>
              <li>
                Principal foci → <Formula>{String.raw`F,F'`}</Formula>.
              </li>
              <li>
                Centres of curvature → <Formula>{String.raw`C,C'`}</Formula>.
              </li>
            </ul>
          ),
        }}
      />
      <p className="t-micro">Common geometrical elements</p>
      <TableCard
        headers={["Element", "Symbol"]}
        rows={[
          { cells: ["Optical centre", <Formula key="o">{String.raw`O\ /\ P`}</Formula>] },
          { cells: ["Principal foci", <Formula key="f">{String.raw`F,F'`}</Formula>] },
          { cells: ["Centres of curvature", <Formula key="c">{String.raw`C,C'`}</Formula>] },
          { cells: ["Focal length", <Formula key="fl">{String.raw`f`}</Formula>] },
          { cells: ["Radii of curvature", <Formula key="r">{String.raw`R_1,R_2`}</Formula>] },
          { cells: ["Principal axis", "Horizontal axis through optical centre"] },
        ]}
      />

      <h4 id="h-9-5-sign-convention">5. Sign Convention for Lenses</h4>
      <p className="t-micro">5.1 Direction of Measurement</p>
      <p>Incident light travels from left to right.</p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>Distance measured in the direction of incident light → Positive.</li>
        <li>Distance measured opposite to incident light → Negative.</li>
      </ul>
      <p className="t-micro">5.2 Radii of Curvature and Focal Length</p>
      <PhysicsFigure spec={lensSignConventionPair} />
      <p className="t-micro">5.3 Sign Convention — Quick Comparison</p>
      <TableCard
        headers={[
          "Lens type",
          <Formula key="r1">{String.raw`R_1`}</Formula>,
          <Formula key="r2">{String.raw`R_2`}</Formula>,
          <Formula key="f">{String.raw`f`}</Formula>,
        ]}
        rows={[
          {
            cells: [
              "Convex",
              <span key="r1" style={{ color: POSITIVE }}><Formula>{String.raw`+`}</Formula></span>,
              <span key="r2" style={{ color: NEGATIVE }}><Formula>{String.raw`-`}</Formula></span>,
              <span key="f" style={{ color: POSITIVE }}><Formula>{String.raw`+`}</Formula></span>,
            ],
          },
          {
            cells: [
              "Concave",
              <span key="r1" style={{ color: NEGATIVE }}><Formula>{String.raw`-`}</Formula></span>,
              <span key="r2" style={{ color: POSITIVE }}><Formula>{String.raw`+`}</Formula></span>,
              <span key="f" style={{ color: NEGATIVE }}><Formula>{String.raw`-`}</Formula></span>,
            ],
          },
        ]}
      />
      <ComparisonPair
        first={{
          title: "A. Biconvex Lens",
          children: (
            <>
              <ul className="my-0 list-none space-y-2 pl-0">
                <li>First surface curves rightward.</li>
                <li>Centre of curvature of first surface lies to the right.</li>
              </ul>
              <div className="mt-3 [&>div]:my-0">
                <FormulaBlock latex={String.raw`R_1=+\text{ve}`} />
              </div>
              <ul className="my-0 list-none space-y-2 pl-0">
                <li>Second surface curves leftward.</li>
                <li>Centre of curvature of second surface lies to the left.</li>
              </ul>
              <div className="mt-3 [&>div]:my-0">
                <FormulaBlock latex={String.raw`R_2=-\text{ve}`} />
              </div>
              <p className="t-micro mt-4">Focal length</p>
              <div className="[&>div]:my-0">
                <FormulaBlock latex={String.raw`f=+\text{ve}`} />
              </div>
            </>
          ),
        }}
        second={{
          title: "B. Biconcave Lens",
          children: (
            <>
              <ul className="my-0 list-none space-y-2 pl-0">
                <li>First surface curves leftward.</li>
                <li>Centre of curvature of first surface lies to the left.</li>
              </ul>
              <div className="mt-3 [&>div]:my-0">
                <FormulaBlock latex={String.raw`R_1=-\text{ve}`} />
              </div>
              <ul className="my-0 list-none space-y-2 pl-0">
                <li>Second surface curves rightward.</li>
                <li>Centre of curvature of second surface lies to the right.</li>
              </ul>
              <div className="mt-3 [&>div]:my-0">
                <FormulaBlock latex={String.raw`R_2=+\text{ve}`} />
              </div>
              <p className="t-micro mt-4">Focal length</p>
              <div className="[&>div]:my-0">
                <FormulaBlock latex={String.raw`f=-\text{ve}`} />
              </div>
            </>
          ),
        }}
      />

      <h4 id="h-9-5-lens-maker">6. Lens Maker's Formula — 4-Mark Derivation</h4>
      <p className="t-micro">Important derivation</p>
      <p className="t-micro">6.1 Basic Setup</p>
      <p>
        A thin biconvex lens <Formula>{String.raw`ABCD`}</Formula> is placed in a surrounding medium.
      </p>
      <p className="t-micro">Refractive indices</p>
      <FormulaBlock latex={String.raw`n_2>n_1`} />
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          Lens medium → <Formula>{String.raw`n_2`}</Formula>.
        </li>
        <li>
          Surrounding medium → <Formula>{String.raw`n_1`}</Formula>.
        </li>
      </ul>
      <PhysicsFigure spec={thinLensTwoSurfaceSetup} />
      <p className="t-micro">6.2 Step-by-Step Derivation</p>
      <div className="my-6 space-y-3">
        <section className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="flex items-center gap-3 border-b border-border/40 bg-muted/25 px-4 py-2.5">
            <span className="t-micro tabular-nums">01</span>
            <p className="text-sm font-extrabold leading-snug tracking-tight text-foreground">
              Step 1 — Refraction at the First Surface (<Formula>{String.raw`ABC`}</Formula>)
            </p>
          </div>
          <div className="px-4 py-3">
            <ul className="my-0 list-none space-y-1.5 pl-0 text-sm text-foreground/80">
              <li>
                Object → <Formula>{String.raw`O`}</Formula> (Real).
              </li>
              <li>
                Image → <Formula>{String.raw`I'`}</Formula> (Virtual).
              </li>
              <li>
                Object distance → <Formula>{String.raw`u`}</Formula>.
              </li>
              <li>
                Image distance → <Formula>{String.raw`v'`}</Formula>.
              </li>
              <li>
                Radius of curvature → <Formula>{String.raw`R_1`}</Formula>.
              </li>
              <li>
                Medium transition → <Formula>{String.raw`n_1\rightarrow n_2`}</Formula>.
              </li>
            </ul>
            <p className="t-micro mt-3">Using the spherical surface formula</p>
            <div className="mt-1 [&>div]:my-0">
              <FormulaBlock
                latex={String.raw`\frac{n_2}{v'}-\frac{n_1}{u}=\frac{n_2-n_1}{R_1}`}
                tag="(1)"
                important
              />
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="flex items-center gap-3 border-b border-border/40 bg-muted/25 px-4 py-2.5">
            <span className="t-micro tabular-nums">02</span>
            <p className="text-sm font-extrabold leading-snug tracking-tight text-foreground">
              Step 2 — Refraction at the Second Surface (<Formula>{String.raw`ADC`}</Formula>)
            </p>
          </div>
          <div className="px-4 py-3">
            <ul className="my-0 list-none space-y-1.5 pl-0 text-sm text-foreground/80">
              <li>
                Object → <Formula>{String.raw`I'`}</Formula> (Virtual).
              </li>
              <li>
                Image → <Formula>{String.raw`I`}</Formula> (Real).
              </li>
              <li>
                Object distance → <Formula>{String.raw`v'`}</Formula>.
              </li>
              <li>
                Image distance → <Formula>{String.raw`v`}</Formula>.
              </li>
              <li>
                Radius of curvature → <Formula>{String.raw`R_2`}</Formula>.
              </li>
              <li>
                Medium transition → <Formula>{String.raw`n_2\rightarrow n_1`}</Formula>.
              </li>
            </ul>
            <p className="t-micro mt-3">Applying the spherical surface formula</p>
            <div className="mt-1 space-y-2 [&>div]:my-0">
              <FormulaBlock latex={String.raw`\frac{n_1}{v}-\frac{n_2}{v'}=\frac{n_1-n_2}{R_2}`} />
              <FormulaBlock
                latex={String.raw`\frac{n_1}{v}-\frac{n_2}{v'}=-\frac{n_2-n_1}{R_2}`}
                tag="(2)"
                important
              />
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-[var(--ok)]/50 bg-card shadow-sm">
          <div className="flex items-center gap-3 border-b border-[var(--ok)]/40 bg-muted/25 px-4 py-2.5">
            <span className="t-micro tabular-nums">03</span>
            <p className="text-sm font-extrabold leading-snug tracking-tight text-foreground">
              Step 3 — Add Equations (1) and (2)
            </p>
          </div>
          <div className="space-y-2 px-4 py-3 [&>div]:my-0">
            <FormulaBlock
              latex={String.raw`\left(\frac{n_2}{v'}-\frac{n_1}{u}\right)+\left(\frac{n_1}{v}-\frac{n_2}{v'}\right)`}
            />
            <FormulaBlock latex={String.raw`=\frac{n_2-n_1}{R_1}-\frac{n_2-n_1}{R_2}`} />
            <Callout type="important" title="The intermediate-image terms cancel">
              <FormulaBlock
                latex={String.raw`\frac{n_1}{v}-\frac{n_1}{u}=(n_2-n_1)\left[\frac1{R_1}-\frac1{R_2}\right]`}
                important
              />
            </Callout>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="flex items-center gap-3 border-b border-border/40 bg-muted/25 px-4 py-2.5">
            <span className="t-micro tabular-nums">04</span>
            <p className="text-sm font-extrabold leading-snug tracking-tight text-foreground">
              Step 4 — Divide Both Sides by <Formula>{String.raw`n_1`}</Formula>
            </p>
          </div>
          <div className="space-y-2 px-4 py-3 [&>div]:my-0">
            <FormulaBlock
              latex={String.raw`\frac1v-\frac1u=\frac{n_2-n_1}{n_1}\left[\frac1{R_1}-\frac1{R_2}\right]`}
            />
            <p className="t-micro">Since</p>
            <FormulaBlock latex={String.raw`n_{21}=\frac{n_2}{n_1}`} />
            <p className="t-micro">Therefore</p>
            <FormulaBlock
              latex={String.raw`\frac1v-\frac1u=(n_{21}-1)\left[\frac1{R_1}-\frac1{R_2}\right]`}
              tag="(3)"
              important
            />
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="flex items-center gap-3 border-b border-border/40 bg-muted/25 px-4 py-2.5">
            <span className="t-micro tabular-nums">05</span>
            <p className="text-sm font-extrabold leading-snug tracking-tight text-foreground">
              Step 5 — Apply Principal Focus Condition
            </p>
          </div>
          <div className="space-y-2 px-4 py-3 [&>div]:my-0">
            <p className="t-micro">For an object at infinity</p>
            <FormulaBlock latex={String.raw`u=\infty`} />
            <p className="t-micro">The image is formed at the principal focus</p>
            <FormulaBlock latex={String.raw`v=f`} />
            <p className="t-micro">Substituting into equation (3)</p>
            <FormulaBlock
              latex={String.raw`\frac1f-\frac1\infty=(n_{21}-1)\left[\frac1{R_1}-\frac1{R_2}\right]`}
            />
            <p className="t-micro">Since</p>
            <FormulaBlock latex={String.raw`\frac1\infty=0`} />
          </div>
        </section>
      </div>
      <ProminentFormula
        label="Lens Maker's Formula"
        tag="(4)"
        latex={String.raw`\frac1f=(n_{21}-1)\left[\frac1{R_1}-\frac1{R_2}\right]`}
        note={
          <span>
            Where <Formula>{String.raw`n_{21}=\frac{n_2}{n_1}`}</Formula>. Applicable to lenses under the stated
            thin-lens and surrounding-medium conditions.
          </span>
        }
      />

      <h4 id="h-9-5-thin-lens">7. Thin Lens Formula</h4>
      <p className="t-micro">7.1 Derivation from Lens Maker's Formula</p>
      <div className="my-6 grid gap-3 md:grid-cols-2">
        <section className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <p className="t-micro">From equation (3)</p>
          <div className="mt-2 [&>div]:my-0">
            <FormulaBlock latex={String.raw`\frac1v-\frac1u=(n_{21}-1)\left[\frac1{R_1}-\frac1{R_2}\right]`} />
          </div>
        </section>
        <section className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <p className="t-micro">From equation (4)</p>
          <div className="mt-2 [&>div]:my-0">
            <FormulaBlock latex={String.raw`\frac1f=(n_{21}-1)\left[\frac1{R_1}-\frac1{R_2}\right]`} />
          </div>
        </section>
      </div>
      <p className="t-micro">Common right-hand expression</p>
      <div
        className="my-3 rounded-xl border px-3 py-2 [&>div]:my-0"
        style={{ borderColor: "var(--subject-physics)", backgroundColor: "color-mix(in oklab, var(--subject-physics) 8%, var(--card))" }}
      >
        <FormulaBlock latex={String.raw`(n_{21}-1)\left[\frac1{R_1}-\frac1{R_2}\right]`} important />
      </div>
      <p>Equating both expressions:</p>
      <ProminentFormula label="Thin Lens Formula" latex={String.raw`\frac1f=\frac1v-\frac1u`} />

      <h4 id="h-9-5-lens-maker-numerical">8. Numerical Problem — Lens Maker's Formula</h4>
      <Expandable title="Numerical Problem — Lens Maker's Formula" variant="example">
        <ProblemSolution.Problem>
          <p>
            The radii of curvature of the faces of a double-convex lens are <Formula>{String.raw`10\ \text{cm}`}</Formula>{" "}
            and <Formula>{String.raw`15\ \text{cm}`}</Formula>.
          </p>
          <p className="mt-3">Its focal length is <Formula>{String.raw`12\ \text{cm}`}</Formula>.</p>
          <p className="mt-3">Find the refractive index of glass.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p className="t-micro">Given</p>
          <TableCard
            headers={["Quantity", "Value"]}
            rows={[
              { cells: ["Surrounding medium (Air)", <Formula key="n1">{String.raw`n_1=1`}</Formula>] },
              { cells: ["Glass refractive index", <Formula key="n2">{String.raw`n_2=n=?`}</Formula>] },
              { cells: ["First radius", <Formula key="r1">{String.raw`R_1=+10\ \text{cm}`}</Formula>] },
              { cells: ["Second radius", <Formula key="r2">{String.raw`R_2=-15\ \text{cm}`}</Formula>] },
              { cells: ["Focal length", <Formula key="f">{String.raw`f=+12\ \text{cm}`}</Formula>] },
            ]}
          />
          <Callout type="important" title="The sign of R₂">
            <p>
              The negative sign of <Formula>{String.raw`R_2`}</Formula> changes subtraction into addition.
            </p>
          </Callout>
          <Stepper
            steps={[
              {
                label: "Formula",
                description: (
                  <div className="space-y-2 [&>div]:my-0">
                    <FormulaBlock latex={String.raw`\frac1f=(n_{21}-1)\left[\frac1{R_1}-\frac1{R_2}\right]`} />
                    <p className="t-micro">Since</p>
                    <FormulaBlock latex={String.raw`n_{21}=\frac{n_2}{n_1}`} />
                    <p className="t-micro">And n₁ = 1</p>
                    <FormulaBlock latex={String.raw`\frac1f=(n-1)\left[\frac1{R_1}-\frac1{R_2}\right]`} />
                  </div>
                ),
              },
              {
                label: "Substitution",
                description: (
                  <div className="space-y-2 [&>div]:my-0">
                    <FormulaBlock latex={String.raw`\frac1{12}=(n-1)\left[\frac1{10}-\frac1{-15}\right]`} />
                    <FormulaBlock latex={String.raw`\frac1{12}=(n-1)\left[\frac1{10}+\frac1{15}\right]`} />
                    <FormulaBlock latex={String.raw`\frac1{12}=(n-1)\left[\frac{15+10}{150}\right]`} />
                    <FormulaBlock latex={String.raw`\frac1{12}=(n-1)\frac{25}{150}`} />
                    <FormulaBlock latex={String.raw`\frac1{12}=\frac{n-1}{6}`} />
                  </div>
                ),
              },
              {
                label: "Simplification",
                description: (
                  <div className="space-y-2 [&>div]:my-0">
                    <FormulaBlock latex={String.raw`6=12n-12`} />
                    <FormulaBlock latex={String.raw`12n=18`} />
                  </div>
                ),
              },
            ]}
          />
          <ProminentFormula
            label="Final answer"
            latex={String.raw`n=\frac{18}{12}=\frac32=1.5`}
            note={<span>Refractive index of glass.</span>}
          />
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-9-5-part-3">Part 3 — Image Formation by Lenses</h3>
      <h4 id="h-9-5-ray-rules">9. Fundamental Ray Rules for Lenses</h4>
      <p>Ray diagrams are constructed using the fundamental rules of refraction through lenses.</p>
      <p className="t-micro">9.1 Convex Lens — Three Principal Rays</p>
      <div className="my-6 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
        <div className="min-w-0 rounded-2xl border border-border/60 bg-card p-2 shadow-sm">
          <PhysicsFigure spec={convexLensThreePrincipalRays} showCaption={false} labelScale={0.95} />
          <LensRayLegend
            items={[
              { label: "1 — Parallel to axis", color: NEGATIVE },
              { label: "2 — Through optical centre", color: "var(--subject-physics)" },
              { label: "3 — Through focus", color: POSITIVE },
            ]}
          />
        </div>
        <div className="space-y-3">
          <section className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white"
                style={{ backgroundColor: NEGATIVE }}
              >
                1
              </span>
              <p className="text-sm font-extrabold tracking-tight text-foreground">Parallel to Principal Axis</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              An incident ray travelling parallel to the principal axis refracts through the principal focus{" "}
              <Formula>{String.raw`F'`}</Formula> on the opposite side.
            </p>
          </section>
          <section className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white"
                style={{ backgroundColor: "var(--subject-physics)" }}
              >
                2
              </span>
              <p className="text-sm font-extrabold tracking-tight text-foreground">Through Optical Centre</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              An incident ray passing through the optical centre <Formula>{String.raw`O`}</Formula> continues undeviated
              along a straight path.
            </p>
          </section>
          <section className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white"
                style={{ backgroundColor: POSITIVE }}
              >
                3
              </span>
              <p className="text-sm font-extrabold tracking-tight text-foreground">Through Principal Focus</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              An incident ray passing through the principal focus <Formula>{String.raw`F`}</Formula> on the object side
              emerges parallel to the principal axis.
            </p>
          </section>
        </div>
      </div>

      <p className="t-micro">9.2 Concave Lens — Principal Rays</p>
      <PhysicsFigure spec={concaveLensPrincipalRays} />
      <LensRayLegend
        items={[
          { label: "1 — Incident parallel ray", color: NEGATIVE },
          { label: "Actual refracted ray", color: NEGATIVE },
          { label: "Backward extension", color: NEGATIVE, dashed: true },
          { label: "2 — Through optical centre", color: "var(--subject-physics)" },
        ]}
      />
      <ComparisonPair
        first={{
          title: "Ray 1 — Parallel to Principal Axis",
          children: (
            <ul className="my-0 list-none space-y-2 pl-0">
              <li>Incident ray travels parallel to the principal axis.</li>
              <li>After refraction, it diverges away from the principal axis.</li>
              <li>
                Its backward dashed extension passes through the principal focus <Formula>{String.raw`F`}</Formula> on
                the same side.
              </li>
            </ul>
          ),
        }}
        second={{
          title: "Ray 2 — Through Optical Centre",
          children: (
            <ul className="my-0 list-none space-y-2 pl-0">
              <li>
                Incident ray passes through optical centre <Formula>{String.raw`O`}</Formula>.
              </li>
              <li>Continues undeviated along a straight path.</li>
            </ul>
          ),
        }}
      />

      <h4 id="h-9-5-image-formation">10. Image Formation — Convex Lens</h4>
      <p className="t-micro">Practice Question</p>
      <p>
        <strong>
          Draw the ray diagram for image formation when an object is placed at the centre of curvature of a
          double-convex lens.
        </strong>
      </p>
      <div className="my-6 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
        <div className="min-w-0 rounded-2xl border border-border/60 bg-card p-2 shadow-sm">
          <PhysicsFigure spec={convexLensObjectAtCentre} showCaption={false} labelScale={0.95} />
        </div>
        <div>
          <p className="t-micro">Diagram requirements</p>
          <ul className="my-3 list-none space-y-2 pl-0 text-sm leading-relaxed text-foreground/80">
            <li>Biconvex lens at the centre.</li>
            <li>Horizontal principal axis.</li>
            <li>
              Left side → <Formula>{String.raw`C,F`}</Formula>.
            </li>
            <li>
              Right side → <Formula>{String.raw`F',C'`}</Formula>.
            </li>
            <li>
              Object arrow placed upright at <Formula>{String.raw`C`}</Formula> on the left.
            </li>
            <li>
              Ray 1 → From the top of the object, parallel to the principal axis; after refraction, passes through{" "}
              <Formula>{String.raw`F'`}</Formula>.
            </li>
            <li>
              Ray 2 → From the top of the object through optical centre <Formula>{String.raw`O`}</Formula>; continues
              undeviated.
            </li>
            <li>
              Image → Formed at <Formula>{String.raw`C'`}</Formula>, below the principal axis.
            </li>
          </ul>
        </div>
      </div>
      <p className="t-micro">Image characteristics</p>
      <TableCard
        headers={["Property", "Result"]}
        rows={[
          { cells: ["Position", <Formula key="pos">{String.raw`C'`}</Formula>] },
          { cells: ["Nature", "Real"] },
          { cells: ["Orientation", "Inverted"] },
          { cells: ["Size", "Same as object"] },
        ]}
      />

      <h3 id="h-9-5-part-4">Part 4 — Lens Magnification &amp; Power</h3>
      <h4 id="h-9-5-magnification">11. Linear Magnification of a Lens (<Formula>{String.raw`m`}</Formula>)</h4>
      <p className="t-micro">11.1 Definition</p>
      <p>Linear magnification is the ratio of the size of the image to the size of the object.</p>
      <p className="t-micro">11.2 Magnification Formula</p>
      <ProminentFormula label="Linear magnification" latex={String.raw`m=\frac{h_i}{h_o}=\frac vu`} />
      <TableCard
        headers={["Symbol", "Meaning"]}
        rows={[
          { cells: [<Formula key="m">{String.raw`m`}</Formula>, "Linear magnification"] },
          { cells: [<Formula key="hi">{String.raw`h_i`}</Formula>, "Height of image"] },
          { cells: [<Formula key="ho">{String.raw`h_o`}</Formula>, "Height of object"] },
          { cells: [<Formula key="v">{String.raw`v`}</Formula>, "Image distance"] },
          { cells: [<Formula key="u">{String.raw`u`}</Formula>, "Object distance"] },
        ]}
      />
      <p className="t-micro">Lens vs. Mirror</p>
      <ComparisonPair
        first={{
          title: "Lens",
          children: <FormulaBlock latex={String.raw`m=\frac{h_i}{h_o}=\frac vu`} />,
        }}
        second={{
          title: "Mirror",
          children: (
            <FormulaBlock
              latex={String.raw`m=\frac{h_i}{h_o}=-\frac vu`}
              label={<Highlight color="pink">the minus sign is the difference</Highlight>}
            />
          ),
        }}
      />
      <p>Unit → Dimensionless.</p>

      <p className="t-micro">11.3 Interpretation of Magnification</p>
      <p>Magnification is interpreted using two aspects:</p>
      <div className="my-6 grid gap-3 sm:grid-cols-2">
        <SignCard title="A. Sign of magnification" sign="+ ve" tone="positive">
          Virtual, Erect
        </SignCard>
        <SignCard title="A. Sign of magnification" sign="− ve" tone="negative">
          Real, Inverted
        </SignCard>
      </div>
      <TableCard
        title="B. Magnitude of magnification — image size"
        headers={["Condition", "Image size"]}
        rows={[
          {
            cells: [
              <Formula key="gt">{String.raw`|m|>1`}</Formula>,
              <span key="gt-r">
                <Formula>{String.raw`h_i>h_o`}</Formula> → Magnified
              </span>,
            ],
          },
          {
            cells: [
              <Formula key="eq">{String.raw`|m|=1`}</Formula>,
              <span key="eq-r">
                <Formula>{String.raw`h_i=h_o`}</Formula> → Same size
              </span>,
            ],
          },
          {
            cells: [
              <Formula key="lt">{String.raw`|m|<1`}</Formula>,
              <span key="lt-r">
                <Formula>{String.raw`h_i<h_o`}</Formula> → Diminished
              </span>,
            ],
          },
        ]}
      />

      <p className="t-micro">11.4 Example — Interpreting Magnification</p>
      <Expandable title="Example — Interpreting m = −0.5" variant="example">
        <div className="my-0 rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <p className="t-micro">Given</p>
          <div className="mt-2 [&>div]:my-0">
            <FormulaBlock latex={String.raw`m=-0.5`} />
          </div>
          <Stepper
            steps={[
              {
                label: "Step 1 — Sign",
                description: (
                  <div className="space-y-2 [&>div]:my-0">
                    <FormulaBlock latex={String.raw`m<0`} />
                    <p>→ Real and inverted.</p>
                  </div>
                ),
              },
              {
                label: "Step 2 — Magnitude",
                description: (
                  <div className="space-y-2 [&>div]:my-0">
                    <FormulaBlock latex={String.raw`|m|=0.5<1`} />
                    <p>→ Image is diminished.</p>
                  </div>
                ),
              },
            ]}
          />
          <p className="t-micro">Final interpretation</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Nature → Real", "Orientation → Inverted", "Size → Diminished"].map((item) => (
              <span
                key={item}
                className="rounded-xl border border-border/60 bg-muted/30 px-3 py-2 text-sm font-bold text-foreground/85"
              >
                <Highlight>{item}</Highlight>
              </span>
            ))}
          </div>
        </div>
      </Expandable>

      <h4 id="h-9-5-power">12. Power of a Lens (<Formula>{String.raw`P`}</Formula>)</h4>
      <p className="t-micro">12.1 Definition</p>
      <p>The power of a lens is the reciprocal of its focal length expressed in metres.</p>
      <ProminentFormula
        label="Power of a lens"
        tag="Dioptre (D)"
        latex={String.raw`P=\frac1f`}
        note={
          <span>
            Where <Formula>{String.raw`f`}</Formula> must be expressed in metres. Unit →{" "}
            <Highlight>Dioptre (D)</Highlight>.
          </span>
        }
      />
      <Callout type="important" title="Before calculating">
        <p>
          Convert focal length into metres first: <Highlight><Formula>{String.raw`f`}</Formula> in metres</Highlight>.
        </p>
      </Callout>
      <p className="t-micro">12.2 Sign Convention — Power &amp; Focal Length</p>
      <ComparisonPair
        first={{
          title: "Convex lens",
          children: (
            <>
              <div className="mx-auto w-full max-w-[16rem] [&>figure]:my-0">
                <PhysicsFigure spec={convexPowerRay} showCaption={false} />
              </div>
              <p className="mt-3">Converges parallel rays</p>
              <div className="mt-2 grid gap-2 text-sm font-extrabold">
                <span style={{ color: POSITIVE }}>Focal length → +</span>
                <span style={{ color: POSITIVE }}>Power → +</span>
              </div>
            </>
          ),
        }}
        second={{
          title: "Concave lens",
          children: (
            <>
              <div className="mx-auto w-full max-w-[16rem] [&>figure]:my-0">
                <PhysicsFigure spec={concavePowerRay} showCaption={false} />
              </div>
              <p className="mt-3">Diverges parallel rays</p>
              <div className="mt-2 grid gap-2 text-sm font-extrabold">
                <span style={{ color: NEGATIVE }}>Focal length → −</span>
                <span style={{ color: NEGATIVE }}>Power → −</span>
              </div>
            </>
          ),
        }}
      />
      <p className="t-micro">12.3 Numerical Problem — Power of a Convex Lens</p>
      <Expandable title="Numerical Problem — Power of a Convex Lens" variant="example">
        <div className="my-0 rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <p className="t-micro">Question</p>
          <p>
            If <Formula>{String.raw`f=20\ \text{cm}`}</Formula> for a convex lens, calculate its power.
          </p>
          <p className="t-micro mt-4">Given</p>
          <div className="mt-2 [&>div]:my-0">
            <FormulaBlock latex={String.raw`f=+20\ \text{cm}`} />
          </div>
          <Stepper
            steps={[
              {
                label: "Step 1 — Convert into metres",
                description: (
                  <div className="space-y-2 [&>div]:my-0">
                    <FormulaBlock latex={String.raw`f=\frac{+20}{100}`} />
                    <FormulaBlock latex={String.raw`f=+0.2\ \text{m}`} />
                  </div>
                ),
              },
              {
                label: "Step 2 — Apply power formula",
                description: (
                  <div className="space-y-2 [&>div]:my-0">
                    <FormulaBlock latex={String.raw`P=\frac1f`} />
                    <FormulaBlock latex={String.raw`P=\frac1{0.2}`} />
                  </div>
                ),
              },
            ]}
          />
          <ProminentFormula
            label="Final answer"
            latex={String.raw`P=+5\ \text{D}`}
            note={<span>The positive sign is retained.</span>}
          />
        </div>
      </Expandable>

      <CollapsibleRevision
        className="my-6 rounded-xl border border-border bg-card"
        contentClassName="p-4 [&>div]:my-0"
        label="Quick Revision — Spherical Surfaces & Lenses"
        header={
          <div className="border-b border-border bg-muted/25 px-4 py-3 pr-12">
            <h3
              id="h-9-5-revision"
              className="m-0! border-0! p-0! text-base! font-semibold! tracking-tight!"
            >
              13. Quick Revision — Spherical Surfaces &amp; Lenses
            </h3>
          </div>
        }
      >
        <PrismRevisionGrid
          sections={[
            {
              title: "A. Refraction at Spherical Surfaces",
              rows: [
                <FormulaBlock
                  key="surface"
                  latex={String.raw`\frac{n_2}{v}-\frac{n_1}{u}=\frac{n_2-n_1}{R}`}
                  important
                />,
              ],
            },
            {
              title: "B. Lens Maker's Formula",
              rows: [
                <FormulaBlock
                  key="maker"
                  latex={String.raw`\frac1f=(n_{21}-1)\left[\frac1{R_1}-\frac1{R_2}\right]`}
                  important
                />,
                <FormulaBlock key="n21" latex={String.raw`n_{21}=\frac{n_2}{n_1}`} />,
              ],
            },
            {
              title: "C. Thin Lens Formula",
              rows: [<FormulaBlock key="thin" latex={String.raw`\frac1f=\frac1v-\frac1u`} important />],
            },
            {
              title: "D. Magnification & Power",
              rows: [
                <FormulaBlock key="m" latex={String.raw`m=\frac{h_i}{h_o}=\frac vu`} important />,
                <FormulaBlock key="p" latex={String.raw`P=\frac1f`} important />,
              ],
            },
          ]}
        />
      </CollapsibleRevision>


      <h2 id="h-9-6">9.6 Refraction Through a Prism</h2>

      <PrismHero
        blocks={[
          "1. Refraction Through a Prism",
          "2. Refractive Index of a Prism",
          "3. Dispersion of Light",
        ]}
        figure={<PhysicsFigure spec={prismHeader} />}
      />

      <h3 id="h-9-6-refraction">1. Refraction Through a Prism</h3>

      <h4 id="h-9-6-basic">1.1 Basic Structure &amp; Ray Path</h4>
      <p>
        A prism is represented by a triangular transparent medium through which light enters and exits via two
        refracting faces.
      </p>
      <p className="t-micro">Medium conditions</p>
      <FormulaBlock latex={String.raw`n_2>n_1`} />
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Prism.</strong> Denser medium <Formula>{String.raw`n_2`}</Formula>.
        </li>
        <li>
          <strong>Surrounding medium (Air).</strong> Rarer medium <Formula>{String.raw`n_1`}</Formula>.
        </li>
      </ul>
      <PhysicsFigure spec={prismRayPath} />

      <h4 id="h-9-6-definitions">1.2 Key Definitions</h4>
      <DefinitionGrid
        items={[
          {
            tag: "A",
            title: (
              <>
                Angle of Prism (<Formula>{String.raw`A`}</Formula>)
              </>
            ),
            body: (
              <p>
                The angle between the two plane surfaces (refracting faces) of the prism.
              </p>
            ),
          },
          {
            tag: "B",
            title: "Equilateral Prism",
            body: <p>A prism with all three angles equal to 60°.</p>,
            figure: <PhysicsFigure spec={equilateralPrism} />,
            formula: <FormulaBlock important latex={String.raw`A=60^\circ`} />,
          },
          {
            tag: "C",
            title: (
              <>
                Angle of Deviation (<Formula>{String.raw`d`}</Formula>)
              </>
            ),
            body: (
              <p>
                The angle between the original direction of the incident ray and the emergent ray is called the{" "}
                <strong>angle of deviation</strong>.
              </p>
            ),
          },
          {
            tag: "D",
            title: (
              <>
                Angle of Minimum Deviation (<Formula>{String.raw`D`}</Formula>)
              </>
            ),
            body: (
              <>
                <p>The minimum value of the angle of deviation is called the angle of minimum deviation.</p>
                <p>
                  At minimum deviation, the refracted ray inside the prism becomes parallel to its base.
                </p>
              </>
            ),
            formula: <FormulaBlock important latex={String.raw`d=D`} />,
            featured: true,
          },
        ]}
      />
      <Callout type="note" title="Source clarification">
        <p>
          The supplied handwritten note about an &quot;Unequal Prism&quot; is unclear. Its meaning cannot be
          established reliably, so it is not included as a factual definition.
        </p>
      </Callout>

      <h4 id="h-9-6-curve">2. Angle of Incidence–Deviation Curve (<Formula>{String.raw`i-d`}</Formula> Curve)</h4>
      <p className="t-micro">2.1 Graph &amp; Behaviour</p>
      <p>
        The graph represents the relationship between the angle of incidence (<Formula>{String.raw`i`}</Formula>) and
        the angle of deviation (<Formula>{String.raw`d`}</Formula>).
      </p>
      <GraphConditions
        graph={<PhysicsFigure spec={prismDeviationGraph} />}
        conditions={[
          <FormulaBlock important latex={String.raw`i=e`} />,
          <FormulaBlock important latex={String.raw`r_1=r_2=r`} />,
          <FormulaBlock important latex={String.raw`d=D`} />,
        ]}
      />
      <p className="t-micro">2.2 Variation of Deviation</p>
      <Stepper
        steps={[
          {
            label: "Stage 1 — Deviation decreases",
            description: <Formula>{String.raw`i\uparrow\quad\Rightarrow\quad d\downarrow`}</Formula>,
          },
          {
            label: "Stage 2 — Minimum deviation",
            description: <Formula>{String.raw`d=D`}</Formula>,
          },
          {
            label: "Stage 3 — Deviation increases",
            description: <Formula>{String.raw`i\uparrow\quad\Rightarrow\quad d\uparrow`}</Formula>,
          },
        ]}
      />

      <h3 id="h-9-6-refractive-index">3. Refractive Index of a Prism — 4-Mark Derivation</h3>
      <p className="t-micro">Important derivation</p>
      <p className="t-micro">3.1 Required Diagram — Prism Geometry</p>
      <PhysicsFigure spec={prismDerivationGeometry} />
      <p className="t-micro">3.2 Step-by-Step Derivation</p>
      <DerivationStages
        stages={[
          {
            title: "From quadrilateral APQR",
            rows: [
              { label: "Angles of the quadrilateral", latex: String.raw`\angle A+\angle Q=180^\circ`, tag: "(1)" },
            ],
          },
          {
            title: "From triangle PQR",
            rows: [
              { label: "Angles of the triangle", latex: String.raw`r_1+r_2+\angle Q=180^\circ`, tag: "(2)" },
            ],
          },
          {
            title: "Comparing (1) and (2)",
            rows: [{ label: "Apex angle", latex: String.raw`A=r_1+r_2`, tag: "(3)", important: true }],
          },
          {
            title: "From triangle PMR",
            wide: true,
            rows: [
              { label: "Exterior-angle property", latex: String.raw`d=x+y` },
              { label: "Vertically opposite angles", latex: String.raw`i=x+r_1` },
              { label: "First deviation", latex: String.raw`x=i-r_1` },
              { label: "Similarly", latex: String.raw`e=r_2+y` },
              { label: "Second deviation", latex: String.raw`y=e-r_2` },
              { label: "Substitute", latex: String.raw`d=(i-r_1)+(e-r_2)` },
              { label: "Combine", latex: String.raw`d=(i+e)-(r_1+r_2)` },
              { label: "Using equation (3)", latex: String.raw`d=i+e-A`, tag: "(4)", important: true },
            ],
          },
          {
            title: "At minimum deviation",
            wide: true,
            rows: [
              { label: "First condition", latex: String.raw`i=e` },
              { label: "Second condition", latex: String.raw`r_1=r_2=r` },
              { label: "Third condition", latex: String.raw`d=D` },
              { label: "From equation (3)", latex: String.raw`A=r+r` },
              { label: "Half the apex angle", latex: String.raw`r=\frac A2`, tag: "(5)" },
              { label: "From equation (4)", latex: String.raw`D=i+i-A` },
              { label: "Simplify", latex: String.raw`D=2i-A` },
              { label: "Therefore", latex: String.raw`2i=A+D` },
              { label: "Incidence at minimum", latex: String.raw`i=\frac{A+D}{2}`, tag: "(6)", important: true },
            ],
          },
          {
            title: "Apply Snell's Law",
            wide: true,
            rows: [
              { label: "Relative refractive index", latex: String.raw`n_{21}=\frac{n_2}{n_1}=\frac{\sin i}{\sin r}` },
              {
                label: "Substitute equations (5) and (6)",
                latex: String.raw`n_{21}= \frac{ \sin\left(\frac{A+D}{2}\right) }{ \sin\left(\frac A2\right) }`,
              },
            ],
          },
          {
            title: "When the Surrounding Medium is Air",
            wide: true,
            rows: [
              { label: "Rarer medium", latex: String.raw`n_1=1` },
              { label: "Prism medium", latex: String.raw`n_2=n` },
            ],
          },
        ]}
      />
      <p>The refractive index of the prism becomes:</p>
      <FormulaCard label="Final derivation formula" subjectColor="var(--subject-physics)">
        <FormulaBlock
          important
          latex={String.raw`n= \frac{ \sin\left(\frac{A+D}{2}\right) }{ \sin\left(\frac A2\right) }`}
        />
      </FormulaCard>
      <p>Refractive index of prism when the surrounding medium is air.</p>

      <h4 id="h-9-6-numerical">4. Numerical Problem — Refractive Index of a Prism</h4>
      <Expandable
        title="Numerical — refractive index of a prism"
        variant="example"
        subjectColor="var(--subject-physics)"
      >
        <ProblemSolution.Problem>
          <p>
            Calculate the refractive index of a prism if the angle of prism is <Formula>{String.raw`60^\circ`}</Formula>{" "}
            and the angle of minimum deviation is <Formula>{String.raw`30^\circ`}</Formula>.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-muted/20 px-3 py-3">
              <p className="t-micro">Given</p>
              <div className="mt-1 [&>div]:my-0">
                <FormulaBlock latex={String.raw`A=60^\circ,\qquad D=30^\circ`} />
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/20 px-3 py-3">
              <p className="t-micro">Formula</p>
              <div className="mt-1 [&>div]:my-0">
                <FormulaBlock
                  latex={String.raw`n= \frac{ \sin\left(\frac{A+D}{2}\right) }{ \sin\left(\frac A2\right) }`}
                />
              </div>
            </div>
          </div>
          <p className="t-micro mt-4">Substitution</p>
          <div className="[&>div]:my-0">
            <FormulaBlock
              latex={String.raw`n= \frac{ \sin\left(\frac{60^\circ+30^\circ}{2}\right) }{ \sin\left(\frac{60^\circ}{2}\right) }`}
            />
            <FormulaBlock latex={String.raw`=\frac{\sin45^\circ}{\sin30^\circ}`} />
            <FormulaBlock latex={String.raw`=\frac{1/\sqrt2}{1/2}`} />
          </div>
          <p className="mt-2 text-sm text-foreground/75">
            Used values: <Highlight><Formula>{String.raw`\sin45^\circ=\frac{1}{\sqrt2}`}</Formula></Highlight> and{" "}
            <Highlight><Formula>{String.raw`\sin30^\circ=\frac12`}</Formula></Highlight>.
          </p>
          <FormulaBlock
            important
            label="FINAL ANSWER"
            latex={String.raw`\boxed{n=\sqrt2\approx1.414}`}
          />
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-9-6-dispersion">5. Dispersion of Light</h3>

      <h4 id="h-9-6-dispersion-definition">5.1 Definition</h4>
      <p>
        <strong>Dispersion</strong> is the splitting of white light into its constituent seven colours, known as{" "}
        <strong>VIBGYOR</strong>.
      </p>
      <FormulaCard label="Dispersion" subjectColor="var(--subject-physics)">
        <FormulaBlock important latex={String.raw`\boxed{\text{White Light}\rightarrow\text{Seven Colours}}`} />
      </FormulaCard>

      <h4 id="h-9-6-dispersion-prism">5.2 Dispersion Through a Prism</h4>
      <PhysicsFigure spec={prismDispersion} />
      <SpectrumSequence />

      <h4 id="h-9-6-dispersion-properties">5.3 Key Properties of Dispersion</h4>
      <p className="t-micro">A. Deviation</p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Minimum deviation.</strong> Red.
        </li>
        <li>
          <strong>Maximum deviation.</strong> Violet.
        </li>
      </ul>
      <FormulaBlock important latex={String.raw`\boxed{\text{Deviation}\propto\frac1\lambda}`} />
      <p className="t-micro">B. Wavelength (<Formula>{String.raw`\lambda`}</Formula>)</p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Maximum wavelength.</strong> Red.
        </li>
        <li>
          <strong>Minimum wavelength.</strong> Violet.
        </li>
      </ul>
      <p className="t-micro">C. Relationship Between Wavelength and Deviation</p>
      <div className="[&>div]:my-0">
        <FormulaBlock latex={String.raw`\text{Longer wavelength} \Rightarrow \text{Less deviation}`} />
        <FormulaBlock latex={String.raw`\text{Shorter wavelength} \Rightarrow \text{More deviation}`} />
      </div>
      <TableCard
        title="Red vs. Violet"
        headers={[
          "Property",
          <span key="red" style={{ color: "var(--spectrum-red)" }}>
            Red
          </span>,
          <span key="violet" style={{ color: "var(--spectrum-violet)" }}>
            Violet
          </span>,
        ]}
        rows={[
          { cells: ["Wavelength", "Maximum", "Minimum"] },
          { cells: ["Deviation", "Minimum", "Maximum"] },
          { cells: ["Position in spectrum", "Top", "Bottom"] },
        ]}
      />

      <CollapsibleRevision
        className="my-6 rounded-xl border border-border bg-card"
        contentClassName="p-4 [&>div]:my-0"
        label="Quick Revision — Prism & Dispersion"
        header={
          <div className="border-b border-border bg-muted/25 px-4 py-3 pr-12">
            <h3
              id="h-9-6-revision"
              className="m-0! border-0! p-0! text-base! font-semibold! tracking-tight!"
            >
              6. Quick Revision — Prism &amp; Dispersion
            </h3>
          </div>
        }
      >
        <PrismRevisionGrid
          sections={[
            {
              title: "1. Prism Angle",
              rows: [
                <FormulaBlock key="meaning" latex={String.raw`A=\text{Angle between refracting faces}`} />,
                <FormulaBlock key="equilateral" latex={String.raw`A=60^\circ`} />,
              ],
            },
            {
              title: "2. Angle of Deviation",
              rows: [<FormulaBlock key="deviation" important latex={String.raw`d=i+e-A`} />],
            },
            {
              title: "3. Minimum Deviation Conditions",
              rows: [
                <FormulaBlock key="ie" latex={String.raw`i=e`} />,
                <FormulaBlock key="rr" latex={String.raw`r_1=r_2=\frac A2`} />,
                <FormulaBlock key="dD" latex={String.raw`d=D`} />,
              ],
            },
            {
              title: "4. Refractive Index of Prism",
              featured: true,
              full: true,
              rows: [
                <FormulaBlock
                  key="index"
                  important
                  latex={String.raw`\boxed{ n= \frac{\sin\left(\frac{A+D}{2}\right)} {\sin\left(\frac A2\right)} }`}
                />,
              ],
            },
            {
              title: "5. Dispersion",
              full: true,
              list: [
                "White light → Seven colours.",
                "Colour sequence → VIBGYOR.",
                "Minimum deviation → Red.",
                "Maximum deviation → Violet.",
                "Maximum wavelength → Red.",
                "Minimum wavelength → Violet.",
              ],
            },
          ]}
        />
      </CollapsibleRevision>

      <h2 id="h-9-7">9.7 Optical Instruments</h2>

      <p>
        A number of optical devices and instruments have been designed utilising the reflecting and refracting properties
        of <strong>mirrors, lenses and prisms</strong>.
      </p>
      <div className="my-6 flex flex-wrap gap-2">
        {["Periscope", "Kaleidoscope", "Binoculars", "Telescope", "Microscope"].map((device) => (
          <span
            key={device}
            className="rounded-full border border-border bg-muted/40 px-3 py-1 text-sm text-foreground/80"
          >
            {device}
          </span>
        ))}
      </div>
      <p>Those are some of the optical devices and instruments in common use.</p>
      <Callout type="note" title="The eye">
        <p>
          Our eye is one of the most important optical devices nature has endowed us with. We have already studied the
          human eye in Class X.
        </p>
      </Callout>
      <p>We now go on to describe the principles of working of the microscope and the telescope.</p>

      <h3 id="h-9-7-microscope">The microscope</h3>

      <p className="t-micro">The simple magnifier</p>
      <p>
        A simple magnifier or microscope is a <strong>converging lens of small focal length</strong> (Fig. 9.23).
      </p>
      <PhysicsFigure spec={simpleMicroscope} />
      <p>To use such a lens as a microscope:</p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>The lens is held near the object</strong>, one focal length away or less.
        </li>
        <li>
          <strong>The eye sits close to the lens</strong>, on the other side of it.
        </li>
      </ul>
      <p>
        The idea is to get an <strong>erect, magnified and virtual image</strong> of the object at a distance where it can
        be viewed comfortably — 25 cm or more.
      </p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Object at a distance f</strong> — the image is at infinity.
        </li>
        <li>
          <strong>Object slightly less than f</strong> — the image is virtual, and closer than infinity.
        </li>
      </ul>
      <Callout type="note" title="Why the image at infinity is the comfortable setting">
        <p>
          The closest comfortable distance for viewing the image is the near point, <Formula>{String.raw`D \approx 25\ \text{cm}`}</Formula>,
          but it causes some strain on the eye.
        </p>
        <p>
          The image formed at infinity is therefore often considered most suitable for viewing by the relaxed eye.
          Fig. 9.23 shows both cases.
        </p>
      </Callout>

      <p className="t-micro">Magnification with the image at the near point</p>
      <p>
        The linear magnification <Formula>{String.raw`m`}</Formula>, for the image formed at the near point{" "}
        <Formula>{String.raw`D`}</Formula>, follows from <Formula>{String.raw`m = v/u`}</Formula> and the lens formula.
      </p>
      <EquationLadder
        steps={[
          {
            label: "Magnification by a single lens",
            equation: String.raw`m = \frac{v}{u}`,
          },
          {
            label: "Thin lens formula, rearranged",
            equation: String.raw`\frac{1}{u} = \frac{1}{v} - \frac{1}{f}`,
          },
          {
            label: "Substitute",
            equation: String.raw`m = \frac{v}{u} = 1 - \frac{v}{f}`,
          },
          {
            label: "Sign convention: the image is virtual, so |v| = D",
            equation: String.raw`m = 1 + \frac{D}{f}`,
            tag: "Eq. 9.39",
            final: true,
          },
        ]}
      />
      <Expandable title="Example — the lens that gives a magnification of six" variant="example">
        <p>
          With <Formula>{String.raw`D \approx 25\ \text{cm}`}</Formula>, a magnification of six needs a focal length of:
        </p>
        <Stepper
          steps={[
            {
              label: "Eq. 9.39 with m = 6",
              description: (
                <p>
                  <Formula>{String.raw`6 = 1 + \frac{25}{f}`}</Formula>
                </p>
              ),
            },
            {
              label: "Solve for f",
              description: (
                <p>
                  <Formula>{String.raw`\frac{25}{f} = 5`}</Formula>
                </p>
              ),
            },
          ]}
        />
        <FormulaBlock important latex={String.raw`f = 5\ \text{cm}`} />
      </Expandable>
      <p>
        Note that <Formula>{String.raw`m = h'/h`}</Formula>, where <Formula>{String.raw`h`}</Formula> is the size of the
        object and <Formula>{String.raw`h'`}</Formula> the size of the image.
      </p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>It is also an angle ratio.</strong> It is the ratio of the angle subtended by the image to that
          subtended by the object if placed at <Formula>{String.raw`D`}</Formula> for comfortable viewing.
        </li>
        <li>
          <strong>But not the angle the object actually subtends</strong> at the eye, which is{" "}
          <Formula>{String.raw`h/u`}</Formula>.
        </li>
        <li>
          <strong>What a single-lens magnifier achieves</strong> is that it allows the object to be brought closer to the
          eye than <Formula>{String.raw`D`}</Formula>.
        </li>
      </ul>

      <p className="t-micro">The image at infinity: angular magnification</p>
      <p>
        With the image at infinity the magnification has to be an <strong>angular</strong> one. Take an object of height{" "}
        <Formula>{String.raw`h`}</Formula>.
      </p>
      <EquationLadder
        steps={[
          {
            label: "Largest angle it can subtend and still be clearly visible — at the near point, a distance D away",
            equation: String.raw`\tan\theta_o = \frac{h}{D} \simeq \theta_o`,
            tag: "Eq. 9.40",
          },
          {
            label: "Angle subtended at the eye by the image, from m = h′/h = v/u",
            equation: String.raw`\tan\theta_i = \frac{h'}{|v|} = \frac{h}{|u|} \simeq \theta_i`,
          },
          {
            label: "Object at u = f",
            equation: String.raw`\theta_i = \frac{h}{f}`,
            tag: "Eq. 9.41",
            final: true,
          },
        ]}
      />
      <FormulaBlock
        important
        label="Angular magnification of a simple microscope"
        tag="Eq. 9.42"
        latex={String.raw`m = \frac{\theta_i}{\theta_o} = \frac{D}{f}`}
      />
      <p>
        This is one less than the magnification when the image is at the near point, Eq. 9.39, but the viewing is more
        comfortable and the difference in magnification is usually small.
      </p>
      <TableCard
        title="One lens, two settings"
        headers={["Image at", "Magnification", "The eye"]}
        rows={[
          { cells: ["the near point, D", "m = 1 + D/f", "some strain"] },
          { cells: ["infinity", "m = D/f", "relaxed — the setting assumed from here on"] },
        ]}
      />
      <p>
        In the discussions of optical instruments that follow — microscope and telescope — the image is assumed to be at
        infinity.
      </p>
      <p>
        A simple microscope has a <Highlight>limited maximum magnification (≲ 9)</Highlight> for realistic focal lengths.
        For much larger magnifications one uses two lenses, one compounding the effect of the other — the{" "}
        <strong>compound microscope</strong>.
      </p>

      <p className="t-micro">The compound microscope</p>
      <p>A schematic diagram of a compound microscope is shown in Fig. 9.24.</p>
      <PhysicsFigure spec={compoundMicroscope} />
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>The objective</strong>, the lens nearest the object, forms a real, inverted, magnified image.
        </li>
        <li>
          <strong>The eyepiece</strong> then works on that image like a simple microscope or magnifier, producing the
          final image — enlarged and virtual.
        </li>
        <li>
          <strong>The first inverted image sits near the focal plane of the eyepiece</strong> — at or within it, at a
          distance appropriate for final image formation at infinity, or a little closer for image formation at the near
          point.
        </li>
        <li>
          <strong>The final image is inverted</strong> with respect to the original object.
        </li>
      </ul>
      <p>
        The ray diagram of Fig. 9.24 shows that the linear magnification due to the objective,{" "}
        <Formula>{String.raw`h'/h`}</Formula>, equals <Formula>{String.raw`L/f_o`}</Formula>.
      </p>
      <EquationLadder
        steps={[
          {
            label: "The same angle β at both ends of the tube",
            equation: String.raw`\tan\beta = \frac{h}{f_o} = \frac{h'}{L}`,
          },
          {
            label: "Rearrange",
            equation: String.raw`m_o = \frac{h'}{h} = \frac{L}{f_o}`,
            tag: "Eq. 9.43",
            final: true,
          },
        ]}
      />
      <p>
        Here <Formula>{String.raw`h'`}</Formula> is the size of the first image, the object size being{" "}
        <Formula>{String.raw`h`}</Formula>, and <Formula>{String.raw`f_o`}</Formula> is the focal length of the objective.
      </p>
      <Callout type="note" title="Tube length">
        <p>
          The first image is formed near the focal point of the eyepiece. The distance{" "}
          <Formula>{String.raw`L`}</Formula> — between the second focal point of the objective and the first focal point
          of the eyepiece, of focal length <Formula>{String.raw`f_e`}</Formula> — is called the{" "}
          <strong>tube length</strong> of the compound microscope.
        </p>
      </Callout>
      <p>
        The eyepiece&apos;s own angular magnification is the simple-microscope result, Eq. 9.39 or Eq. 9.42, depending on where
        the final image is.
      </p>
      <EquationLadder
        steps={[
          {
            label: "Final image at the near point",
            equation: String.raw`m_e = 1 + \frac{D}{f_e}`,
            tag: "Eq. 9.44(a)",
          },
          {
            label: "Final image at infinity",
            equation: String.raw`m_e = \frac{D}{f_e}`,
            tag: "Eq. 9.44(b)",
            final: true,
          },
        ]}
      />
      <p>So the total magnification, with the image at infinity, is the product of the two.</p>
      <FormulaBlock
        important
        label="Magnification of a compound microscope"
        tag="Eq. 9.45"
        latex={String.raw`m = m_o m_e = \left(\frac{L}{f_o}\right)\left(\frac{D}{f_e}\right)`}
      />
      <p>
        Clearly, to achieve a large magnification of a small object — hence the name microscope — the objective and the
        eyepiece should have small focal lengths.
      </p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>A focal length much below 1 cm is difficult to make</strong> in practice.
        </li>
        <li>
          <strong>L must be large</strong>, which needs large lenses.
        </li>
      </ul>
      <Expandable
        title="Example — f_o = 1.0 cm, f_e = 2.0 cm, tube length 20 cm"
        variant="example"
      >
        <Stepper
          steps={[
            {
              label: "Magnification of the objective",
              description: (
                <p>
                  <Formula>{String.raw`m_o = \frac{L}{f_o} = \frac{20}{1.0} = 20`}</Formula>
                </p>
              ),
            },
            {
              label: "Magnification of the eyepiece, image at infinity",
              description: (
                <p>
                  <Formula>{String.raw`m_e = \frac{D}{f_e} = \frac{25}{2.0} = 12.5`}</Formula>
                </p>
              ),
            },
            {
              label: "Total",
              description: (
                <p>
                  <Formula>{String.raw`m = 20 \times 12.5`}</Formula>
                </p>
              ),
            },
          ]}
        />
        <FormulaBlock important latex={String.raw`m = \left(\frac{20}{1}\right)\left(\frac{25}{2}\right) = 250`} />
      </Expandable>
      <p>
        Various other factors, such as the illumination of the object, contribute to the quality and visibility of the
        image.
      </p>
      <p>
        In modern microscopes <strong>multi-component lenses</strong> are used for both the objective and the eyepiece, to
        improve image quality by minimising various optical aberrations (defects) in lenses.
      </p>

      <h3 id="h-9-7-telescope">The telescope</h3>

      <p>
        The telescope is used to provide <strong>angular magnification of distant objects</strong> (Fig. 9.25). It also
        has an objective and an eyepiece.
      </p>
      <PhysicsFigure spec={refractingTelescope} />
      <p>
        But here the objective has a <strong>large focal length</strong> and a <strong>much larger aperture</strong> than
        the eyepiece.
      </p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Light from a distant object</strong> enters the objective.
        </li>
        <li>
          <strong>A real image is formed</strong> in the tube, at its second focal point.
        </li>
        <li>
          <strong>The eyepiece magnifies that image</strong>, producing a final inverted image.
        </li>
      </ul>
      <p>
        The magnifying power <Formula>{String.raw`m`}</Formula> is the ratio of the angle{" "}
        <Formula>{String.raw`\beta`}</Formula> subtended at the eye by the final image to the angle{" "}
        <Formula>{String.raw`\alpha`}</Formula> which the object subtends at the lens or the eye.
      </p>
      <EquationLadder
        steps={[
          {
            label: "Fig. 9.25: one image height h, two focal lengths",
            equation: String.raw`\tan\alpha = \frac{h}{f_o}, \qquad \tan\beta = \frac{h}{f_e}`,
          },
          {
            label: "Ratio of the angles, for small angles",
            equation: String.raw`m = \frac{\beta}{\alpha} = \frac{h/f_e}{h/f_o}`,
          },
          {
            label: "Simplify",
            equation: String.raw`m = \frac{f_o}{f_e}`,
            tag: "Eq. 9.46",
            final: true,
          },
        ]}
      />
      <KeyPoint title="Tube length">
        <p>
          In this case the length of the telescope tube is{" "}
          <Formula>{String.raw`f_o + f_e`}</Formula>.
        </p>
      </KeyPoint>
      <p>
        <strong>Terrestrial telescopes</strong> have, in addition, a pair of inverting lenses to make the final image
        erect. Refracting telescopes can be used both for terrestrial and astronomical observations.
      </p>
      <Expandable title="Example — a 100 cm objective and a 1 cm eyepiece" variant="example">
        <Stepper
          steps={[
            {
              label: "Eq. 9.46",
              description: (
                <p>
                  <Formula>{String.raw`m = \frac{f_o}{f_e} = \frac{100}{1}`}</Formula>
                </p>
              ),
            },
            {
              label: "The magnifying power",
              description: (
                <p>
                  <Formula>{String.raw`m = 100`}</Formula>
                </p>
              ),
            },
          ]}
        />
        <FormulaBlock important latex={String.raw`m = \frac{100}{1} = 100`} />
      </Expandable>
      <Expandable title="Example — a pair of stars 1′ apart" variant="example">
        <Stepper
          steps={[
            {
              label: "Actual separation",
              description: (
                <p>1′ (one minute of arc).</p>
              ),
            },
            {
              label: "Apparent separation through the telescope",
              description: (
                <p>
                  <Formula>{String.raw`100 \times 1' = 100'`}</Formula>
                </p>
              ),
            },
            {
              label: "Convert to degrees, 60′ = 1°",
              description: (
                <p>
                  <Formula>{String.raw`100' = 1.67^\circ`}</Formula>
                </p>
              ),
            },
          ]}
        />
        <FormulaBlock important latex={String.raw`100\,' = 1.67^\circ`} />
      </Expandable>

      <p className="t-micro">What an astronomical telescope is judged on</p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Light gathering power</strong> — it clearly depends on the area of the objective. With larger
          diameters, fainter objects can be observed.
        </li>
        <li>
          <strong>Resolution, or resolving power</strong> — the ability to observe two objects distinctly when they are
          in very nearly the same direction. It also depends on the diameter of the objective.
        </li>
      </ul>
      <p>
        So the desirable aim in optical telescopes is to make them with an objective of <strong>large diameter</strong>.
      </p>
      <p>
        The largest lens objective in use is at the Yerkes Observatory in Wisconsin, USA. Such big lenses tend to be very
        heavy, and therefore difficult to make and to support by their edges.
      </p>
      <p>
        Further, it is rather difficult and expensive to make such large-sized lenses which form images that are free from
        any kind of chromatic aberration and distortions.
      </p>

      <p className="t-micro">Why modern telescopes use a mirror</p>
      <p>
        For these reasons modern telescopes use a <strong>concave mirror</strong> rather than a lens for the objective.
        Telescopes with mirror objectives are called <strong>reflecting telescopes</strong>.
      </p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>No chromatic aberration</strong> — there is none in a mirror.
        </li>
        <li>
          <strong>Mechanical support is much less of a problem.</strong> A mirror weighs much less than a lens of
          equivalent optical quality, and can be supported over its entire back surface, not just over its rim.
        </li>
      </ul>
      <Callout type="warning" title="One obvious problem">
        <p>
          The objective mirror focuses light <strong>inside the telescope tube</strong>. One must have an eyepiece and the
          observer right there, obstructing some light — depending on the size of the observer cage.
        </p>
        <p>
          This is what is done in the very large Mt Palomar telescope in California: the viewer sits near the focal point
          of the mirror, in a small cage.
        </p>
      </Callout>
      <p>
        Another solution to the problem is to <strong>deflect the light</strong> being focused by another mirror.
      </p>
      <p>
        One such arrangement uses a <strong>convex secondary mirror</strong> to focus the incident light, which now passes
        through a hole in the objective primary mirror (Fig. 9.26). This is known as a <strong>Cassegrain telescope</strong>,
        after its inventor.
      </p>
      <PhysicsFigure spec={cassegrain} />
      <p>It has the advantages of a large focal length in a short telescope.</p>

      <p className="t-micro">The largest optical telescopes</p>
      <div className="my-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="t-micro">Lens</p>
          <p className="mt-2 text-[1.0625rem] font-semibold tracking-tight text-foreground">
            Yerkes Observatory, Wisconsin, USA
          </p>
          <p className="mt-3 text-[2rem] font-semibold leading-none tracking-tight tabular-nums text-foreground">
            40 inch
            <span className="ml-1.5 align-baseline text-[0.9375rem] font-normal text-muted-foreground">≈ 1.02 m</span>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/75">The largest lens objective in use.</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="t-micro">Mirror</p>
          <p className="mt-2 text-[1.0625rem] font-semibold tracking-tight text-foreground">
            Mt Palomar, California, USA
          </p>
          <p className="mt-3 text-[2rem] font-semibold leading-none tracking-tight tabular-nums text-foreground">
            200 inch
            <span className="ml-1.5 align-baseline text-[0.9375rem] font-normal text-muted-foreground">≈ 5.08 m</span>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/75">
            The observer sits in a small cage near the mirror&apos;s focus.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="t-micro">Cassegrain mirror</p>
          <p className="mt-2 text-[1.0625rem] font-semibold tracking-tight text-foreground">Kavalur, Tamil Nadu, India</p>
          <p className="mt-3 text-[2rem] font-semibold leading-none tracking-tight tabular-nums text-foreground">2.34 m</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/75">
            The largest telescope in India. Ground and polished, set up and used by the Indian Institute of Astrophysics,
            Bangalore.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="t-micro">Mirror · a pair</p>
          <p className="mt-2 text-[1.0625rem] font-semibold tracking-tight text-foreground">Keck, Hawaii, USA</p>
          <p className="mt-3 text-[2rem] font-semibold leading-none tracking-tight tabular-nums text-foreground">10 m</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/75">
            The largest reflecting telescopes in the world.
          </p>
        </div>
      </div>

      <h2 id="h-9-exercises">Back-of-Chapter Exercises</h2>
      <p>
        Every exercise of this chapter&apos;s printed text, with the complete answer key. Work each one out on paper
        before opening the panel.
      </p>

      <Expandable title="Exercises 9.1 – 9.31 — questions and answer key" variant="exercise">
        <ExerciseQa
          questions={[
            "A small candle, 2.5 cm in size is placed at 27 cm in front of a concave mirror of radius of curvature 36 cm. At what distance from the mirror should a screen be placed in order to obtain a sharp image? Describe the nature and size of the image. If the candle is moved closer to the mirror, how would the screen have to be moved?",
            "A 4.5 cm needle is placed 12 cm away from a convex mirror of focal length 15 cm. Give the location of the image and the magnification. Describe what happens as the needle is moved farther from the mirror.",
            "A tank is filled with water to a height of 12.5 cm. The apparent depth of a needle lying at the bottom of the tank is measured by a microscope to be 9.4 cm. What is the refractive index of water? If water is replaced by a liquid of refractive index 1.63 up to the same height, by what distance would the microscope have to be moved to focus on the needle again?",
            "Figures 9.27(a) and (b) show the refraction of a ray in air incident at 60° with the normal to a glass-air and a water-air interface — it bends to about 35° in glass and about 40° in water. Predict the angle of refraction in glass when the angle of incidence in water is 45° with the normal to a water-glass interface [Fig. 9.27(c)].",
            "A small bulb is placed at the bottom of a tank containing water to a depth of 80 cm. What is the area of the surface of water through which light from the bulb can emerge out? Refractive index of water is 1.33. (Consider the bulb to be a point source.)",
            "A prism is made of glass of unknown refractive index. A parallel beam of light is incident on a face of the prism. The angle of minimum deviation is measured to be 40°. What is the refractive index of the material of the prism? The refracting angle of the prism is 60°. If the prism is placed in water (refractive index 1.33), predict the new angle of minimum deviation of a parallel beam of light.",
            "Double-convex lenses are to be manufactured from a glass of refractive index 1.55, with both faces of the same radius of curvature. What is the radius of curvature required if the focal length is to be 20 cm?",
            "A beam of light converges at a point P. Now a lens is placed in the path of the convergent beam 12 cm from P. At what point does the beam converge if the lens is (a) a convex lens of focal length 20 cm, and (b) a concave lens of focal length 16 cm?",
            "An object of size 3.0 cm is placed 14 cm in front of a concave lens of focal length 21 cm. Describe the image produced by the lens. What happens if the object is moved further away from the lens?",
            "What is the focal length of a convex lens of focal length 30 cm in contact with a concave lens of focal length 20 cm? Is the system a converging or a diverging lens? Ignore thickness of the lenses.",
            "A compound microscope consists of an objective lens of focal length 2.0 cm and an eyepiece of focal length 6.25 cm separated by a distance of 15 cm. How far from the objective should an object be placed in order to obtain the final image at (a) the least distance of distinct vision (25 cm), and (b) at infinity? What is the magnifying power of the microscope in each case?",
            "A person with a normal near point (25 cm) using a compound microscope with objective of focal length 8.0 mm and an eyepiece of focal length 2.5 cm can bring an object placed at 9.0 mm from the objective in sharp focus. What is the separation between the two lenses? Calculate the magnifying power of the microscope.",
            "A small telescope has an objective lens of focal length 144 cm and an eyepiece of focal length 6.0 cm. What is the magnifying power of the telescope? What is the separation between the objective and the eyepiece?",
            "(a) A giant refracting telescope at an observatory has an objective lens of focal length 15 m. If an eyepiece of focal length 1.0 cm is used, what is the angular magnification of the telescope? (b) If this telescope is used to view the moon, what is the diameter of the image of the moon formed by the objective lens? The diameter of the moon is 3.48 × 10⁶ m, and the radius of the lunar orbit is 3.8 × 10⁸ m.",
            "Use the mirror equation to deduce that: (a) an object placed between f and 2f of a concave mirror produces a real image beyond 2f; (b) a convex mirror always produces a virtual image independent of the location of the object; (c) the virtual image produced by a convex mirror is always diminished in size and is located between the focus and the pole; (d) an object placed between the pole and focus of a concave mirror produces a virtual and enlarged image.",
            "A small pin fixed on a table top is viewed from above from a distance of 50 cm. By what distance would the pin appear to be raised if it is viewed from the same point through a 15 cm thick glass slab held parallel to the table? Refractive index of glass = 1.5. Does the answer depend on the location of the slab?",
            "(a) Figure 9.28 shows a cross-section of a light pipe made of a glass fibre of refractive index 1.68. The outer covering of the pipe is made of a material of refractive index 1.44. What is the range of the angles of the incident rays with the axis of the pipe for which total reflection inside the pipe takes place? (b) What is the answer if there is no outer covering of the pipe?",
            "The image of a small electric bulb fixed on the wall of a room is to be obtained on the opposite wall 3 m away by means of a large convex lens. What is the maximum possible focal length of the lens required for the purpose?",
            "A screen is placed 90 cm from an object. The image of the object on the screen is formed by a convex lens at two different locations separated by 20 cm. Determine the focal length of the lens.",
            "(a) Determine the effective focal length of the combination of the two lenses in Exercise 9.10, if they are placed 8.0 cm apart with their principal axes coincident. Does the answer depend on which side of the combination a beam of parallel light is incident? Is the notion of effective focal length of this system useful at all? (b) An object 1.5 cm in size is placed on the side of the convex lens in the arrangement (a) above, 40 cm from it. Determine the magnification produced by the two-lens system, and the size of the image.",
            "At what angle should a ray of light be incident on the face of a prism of refracting angle 60° so that it just suffers total internal reflection at the other face? The refractive index of the material of the prism is 1.524.",
            "A card sheet divided into squares each of size 1 mm² is being viewed at a distance of 9 cm through a magnifying glass (a converging lens of focal length 9 cm) held close to the eye. (a) What is the magnification produced by the lens? How much is the area of each square in the virtual image? (b) What is the angular magnification (magnifying power) of the lens? (c) Is the magnification in (a) equal to the magnifying power in (b)? Explain.",
            "(a) At what distance should the lens be held from the card sheet in Exercise 9.22 in order to view the squares distinctly with the maximum possible magnifying power? (b) What is the magnification in this case? (c) Is the magnification equal to the magnifying power in this case? Explain.",
            "What should be the distance between the object in Exercise 9.23 and the magnifying glass if the virtual image of each square is to have an area of 6.25 mm²? Would you be able to see the squares distinctly with your eyes very close to the magnifier?",
            "Answer the following questions: (a) The angle subtended at the eye by an object is equal to the angle subtended at the eye by the virtual image produced by a magnifying glass. In what sense then does a magnifying glass provide angular magnification? (b) In viewing through a magnifying glass, one usually positions one's eyes very close to the lens. Does angular magnification change if the eye is moved back? (c) Magnifying power of a simple microscope is inversely proportional to the focal length of the lens. What then stops us from using a convex lens of smaller and smaller focal length and achieving greater and greater magnifying power? (d) Why must both the objective and the eyepiece of a compound microscope have short focal lengths? (e) When viewing through a compound microscope, our eyes should be positioned not on the eyepiece but a short distance away from it for best viewing. Why?",
            "An angular magnification (magnifying power) of 30X is desired using an objective of focal length 1.25 cm and an eyepiece of focal length 5 cm. How will you set up the compound microscope?",
            "A small telescope has an objective lens of focal length 140 cm and an eyepiece of focal length 5.0 cm. What is the magnifying power of the telescope for viewing distant objects when (a) the telescope is in normal adjustment (i.e., when the final image is at infinity)? (b) the final image is formed at the least distance of distinct vision (25 cm)?",
            "(a) For the telescope described in Exercise 9.27(a), what is the separation between the objective lens and the eyepiece? (b) If this telescope is used to view a 100 m tall tower 3 km away, what is the height of the image of the tower formed by the objective lens? (c) What is the height of the final image of the tower if it is formed at 25 cm?",
            "A Cassegrain telescope uses two mirrors, as shown in Fig. 9.26. Such a telescope is built with the mirrors 20 mm apart. If the radius of curvature of the large mirror is 220 mm and that of the small mirror is 140 mm, where will the final image of an object at infinity be?",
            "Light incident normally on a plane mirror attached to a galvanometer coil retraces backwards. A current in the coil produces a deflection of 3.5° of the mirror. What is the displacement of the reflected spot of light on a screen placed 1.5 m away?",
            "An equiconvex lens (of refractive index 1.50) is in contact with a liquid layer on top of a plane mirror. A small needle with its tip on the principal axis is moved along the axis until its inverted image is found at the position of the needle. The distance of the needle from the lens is measured to be 45.0 cm. The liquid is removed and the experiment is repeated; the new distance is 30.0 cm. What is the refractive index of the liquid?",
          ]}
          answers={[
            <AnswerQa key={1} result="Screen at 54 cm · image 5.0 cm, real and inverted" work="f = R/2 = −18 cm and u = −27 cm, so 1/v = 1/f − 1/u = −1/18 + 1/27 = −1/54 and v = −54 cm, with m = −v/u = −2. Bringing the candle nearer (still outside f) pushes the image farther out and makes it grow, so the screen must move away; inside the focus the image turns virtual and no screen can catch it." />,
            <AnswerQa key={2} result="6.7 cm behind the mirror · m = +0.56, image 2.5 cm tall" work="For a convex mirror f = +15 cm and u = −12 cm: 1/v = 1/15 + 1/12 = 9/60, so v = +6.7 cm, virtual and erect. As the needle moves farther away the image slides towards the focus (v → 15 cm) and keeps shrinking (m → 0)." />,
            <AnswerQa key={3} result="n = 1.33 · microscope raised by 1.7 cm" work="The index is real depth over apparent depth: 12.5/9.4 = 1.33. With the liquid the apparent depth becomes 12.5/1.63 = 7.7 cm, so the tube must come up by 9.4 − 7.7 ≈ 1.7 cm." />,
            <AnswerQa key={4} result="r ≈ 39°" work="The two panels give n_glass ≈ 1.5 and n_water ≈ 1.33. Water to glass: 1.33 sin 45° = 1.5 sin r, so sin r = 0.63." />,
            <AnswerQa key={5} result="2.6 m²" work="sin c = 1/1.33 = 0.75 gives c = 48.8°. The escaping patch is a circle of radius r = h tan c = 80 × 1.14 ≈ 91 cm, so its area is πr²." />,
            <AnswerQa key={6} result="n = 1.53 · new δm ≈ 10°" work="n = sin[(A + δm)/2] ÷ sin(A/2) = sin 50°/sin 30° = 1.53. In water the relative index is 1.53/1.33 = 1.15, so sin[(60° + δm′)/2] = 0.575 and (60° + δm′)/2 = 35.1°." />,
            <AnswerQa key={7} result="R = 22 cm" work="Equiconvex means R₁ = +R and R₂ = −R, so 1/f = (n − 1)(2/R). With 1/20 = 0.55 × 2/R the radius comes out at 22 cm." />,
            <AnswerQa key={8} result="(a) 7.5 cm past the lens (b) 48 cm past the lens" work="The beam is converging on P, so the lens meets a virtual object at u = +12 cm. (a) 1/v = 1/20 + 1/12 = 8/60 gives v = 7.5 cm, short of P. (b) 1/v = −1/16 + 1/12 = 1/48 gives v = 48 cm, well beyond P." />,
            <AnswerQa key={9} result="8.4 cm from the lens, virtual · m = +0.6" work="With f = −21 cm and u = −14 cm, 1/v = 1/f + 1/u = −5/42, so v = −8.4 cm on the object's side: erect, and 1.8 cm tall. Moving the object away slides the image towards the focus at 21 cm and shrinks it further." />,
            <AnswerQa key={10} result="F = −60 cm · diverging" work="In contact 1/F = 1/30 − 1/20 = −1/60, so the pair behaves as a diverging lens of focal length 60 cm." />,
            <AnswerQa key={11} result="(a) object at 2.5 cm, power 20 (b) 2.6 cm, power 13.5" work="(a) 1/u_e = −1/25 − 1/6.25 gives u_e = −5 cm, so the objective's image must sit 10 cm behind it; 1/u_o = 1/10 − 1/2 gives u_o = −2.5 cm, with m_o = −4 and m_e = +5. (b) With the image at infinity v_o = 15 − 6.25 = 8.75 cm, so u_o = −2.6 cm and the power is 3.4 × 4." />,
            <AnswerQa key={12} result="9.5 cm apart · m = 88" work="1/v_o = 1/8 − 1/9 gives v_o = 72 mm = 7.2 cm. For the final image at 25 cm, 1/u_e = −1/25 − 1/2.5 gives u_e = −2.27 cm, so the lenses sit 7.2 + 2.3 ≈ 9.5 cm apart and m = (7.2/0.9)(1 + 25/2.5) = 8 × 11." />,
            <AnswerQa key={13} result="m = 24 · separation 150 cm" work="In normal adjustment the power is f_o/f_e and the separation is the sum of the focal lengths." />,
            <AnswerQa key={14} result="(a) 1500 (b) 13.7 cm" work="m = 15/0.01. The moon subtends 3.48 × 10⁶ / 3.8 × 10⁸ = 9.16 × 10⁻³ rad, so the image at the objective's focus is 15 × 9.16 × 10⁻³ = 0.137 m across." />,
            <AnswerQa key={15} result="all four follow from 1/v = 1/f − 1/u" work="(a) With f = −f₀ and f₀ < u₀ < 2f₀, 1/v = −1/f₀ + 1/u₀ = (f₀ − u₀)/(f₀u₀) is negative, a real image in front of the mirror, and its distance f₀u₀/(u₀ − f₀) exceeds 2f₀ exactly when u₀ < 2f₀. (b) For a convex mirror f = +f₀, so 1/v = 1/f₀ + 1/u₀ > 0 for every u₀: always behind the mirror, always virtual. (c) That gives v = f₀u₀/(u₀ + f₀) < f₀, between the pole and the focus, with |m| = f₀/(u₀ + f₀) < 1. (d) For a concave mirror with u₀ < f₀, 1/v = (f₀ − u₀)/(f₀u₀) > 0 — virtual — and |m| = f₀/(f₀ − u₀) > 1." />,
            <AnswerQa key={16} result="raised by 5.0 cm · pin appears 45 cm away" work="A slab shifts the image by t(1 − 1/n) = 15(1 − 2/3) = 5.0 cm. The shift depends only on the thickness and the index, not on where the slab sits." />,
            <AnswerQa key={17} result="(a) i ≤ 60° (b) every ray is trapped" work="(a) sin c = 1.44/1.68 = 0.86 gives c = 59°, so the ray inside may make at most 31° with the axis, and sin i = 1.68 sin 31° = 0.87 gives i ≤ 60°. (b) With no covering c = 36.5° and the internal angle may reach 53.5°, but 1.68 sin 53.5° = 1.35 exceeds 1, so no ray escapes through the wall." />,
            <AnswerQa key={18} result="75 cm" work="Object and image are 3 m apart, and f = uv/(u + v) peaks at u = v = 1.5 m, giving f = 1.5/2." />,
            <AnswerQa key={19} result="≈ 21.4 cm" work="Displacement method: f = (D² − d²)/4D = (0.81 − 0.04)/3.6." />,
            <AnswerQa key={20} result="(a) F = −300 cm, same from either side (b) m = 0.65, image 0.98 cm" work="(a) 1/F = 1/30 − 1/20 − 8/(30 × −20) = −1/300. The expression is symmetric, so the incident side does not matter; with F so large and the principal planes far outside the lenses, the notion is of little practical use. (b) 1/v₁ = 1/30 − 1/40 gives v₁ = 120 cm and m₁ = −3; that image is a virtual object 112 cm beyond the concave lens, so 1/v₂ = −1/20 + 1/112 gives v₂ = −24.3 cm and m₂ = −0.22. The final image lands 24.3 cm to the left of the concave lens." />,
            <AnswerQa key={21} result="i ≈ 30°" work="Total internal reflection at the second face means r₂ = c, with sin c = 1/1.524 and c = 41°. Then r₁ = 60° − 41° = 19° and sin i = 1.524 sin 19° = 0.50." />,
            <AnswerQa key={22} result="(a) image at infinity (b) 2.8 (c) no" work="(a) The object sits at the focus, so the rays leave parallel: the virtual image is at infinity and its linear size is unbounded. (b) Magnifying power is D/f = 25/9. (c) One compares image and object sizes, the other compares angles at the eye — the infinitely distant, infinitely large image still subtends only 2.8 times the unaided angle." />,
            <AnswerQa key={23} result="(a) 6.6 cm from the card (b) 3.8 (c) yes" work="(a) Put the image at D: 1/u = −1/25 − 1/9 gives u = −6.6 cm. (b) m = 1 + D/f = 1 + 25/9. (c) With the image at the near point its angle at the eye is h′/D against the unaided h/D, so the two magnifications coincide." />,
            <AnswerQa key={24} result="5.4 cm · image at 13.5 cm, not seen distinctly" work="An area ratio of 6.25 is a linear magnification of 2.5, so the image sits at 2.5 times the object distance: −1/(2.5u) + 1/u = 1/9 gives 0.6/u = 1/9. The image at 13.5 cm is nearer than the 25 cm near point, so a normal eye cannot focus on it." />,
            <AnswerQa key={25} result="(a) it changes where the object can sit (b) yes, it falls (c) aberration (d) the two gains multiply (e) sit at the exit pupil" work="(a) The angle itself is unchanged, but the lens lets the object come far inside 25 cm and still be sharp, so the angle beats the unaided h/D. (b) The power is a ratio of angles at the eye, and moving back shrinks the image angle. (c) Stronger curvature brings spherical and chromatic aberration, and the lens would have to touch the eye, so the pupil and the field set the ceiling. (d) A short objective f lets the object sit just outside the focus and throw a big real image; a short eyepiece f then adds a large D/f_e. (e) At the exit pupil — the image of the objective formed by the eyepiece, a couple of centimetres behind the glass — the whole field is visible." />,
            <AnswerQa key={26} result="object 1.5 cm out · lenses 11.7 cm apart" work="With the image at 25 cm, m_e = 1 + 25/5 = 6, so m_o = 5 and v_o = 5u_o; then 1/(5u) + 1/u = 1/1.25 gives u = 1.5 cm and v_o = 7.5 cm. The eyepiece needs u_e = −4.2 cm." />,
            <AnswerQa key={27} result="(a) 28 (b) 33.6" work="(a) f_o/f_e = 140/5.0. (b) 28(1 + 5/25) = 28 × 1.2." />,
            <AnswerQa key={28} result="(a) 145 cm (b) 4.67 cm (c) 28 cm" work="(a) f_o + f_e. (b) The tower subtends 1/30 rad, so the objective's image is 140/30 cm tall. (c) The eyepiece then magnifies by 1 + 25/5 = 6." />,
            <AnswerQa key={29} result="19.4 mm behind the large mirror" work="The primary focuses parallel light 110 mm in front of it; the secondary stands 20 mm out, 90 mm short of that focus, so the beam reaches it converging on a point 90 mm behind it. With u = −90 mm and f = +70 mm, 1/v + 1/u = 1/f gives v = +39.4 mm: 39.4 mm in front of the secondary, that is 19.4 mm behind the primary, out through its hole." />,
            <AnswerQa key={30} result="≈ 18 cm" work="The mirror turns by θ and the ray turns by 2θ = 7.0°, so the spot moves 1.5 tan 7.0° = 0.18 m." />,
            <AnswerQa key={31} result="n ≈ 1.33" work="For the image to land on the needle the light must retrace its path, so the needle sits at the focal length of lens plus liquid: 45.0 cm. With the liquid gone f_lens = 30.0 cm, so 1/45 = 1/30 + 1/f_liquid gives f_liquid = −90 cm. The liquid is plano-concave with R = 30 cm, and 1/90 = (n − 1)/30." />,
          ]}
        />
      </Expandable>
    </>
  );
}
