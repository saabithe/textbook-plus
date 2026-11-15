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
import { Expandable } from "@/components/content/Expandable";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { Callout } from "@/components/content/Callout";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Highlight } from "@/components/content/Highlight";
import { KeyPoint } from "@/components/content/KeyPoint";
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { PhysicsFigure } from "@/components/content/physics/diagram/PhysicsFigure";
import {
  apparentDepth,
  cassegrain,
  compoundMicroscope,
  concaveLensRays,
  concaveMirrorTerms,
  concaveRealImage,
  convexLensRays,
  convexMirrorTerms,
  deviationCurve,
  mirrorEquationGeometry,
  opticalFibre,
  planeReflection,
  prismPath,
  rayAndBeam,
  refractingTelescope,
  refractionAtSurface,
  ruleCentre,
  ruleFocus,
  ruleParallel,
  rulePole,
  signConventionConcave,
  signConventionConvex,
  simpleMicroscope,
  slabShift,
  totalInternalReflection,
} from "./figures";

export default function RayOpticsAndOpticalInstrumentsChapter() {
  return (
    <>
      <h2 id="h-9-1">9.1 Introduction</h2>

      <h3 id="h-9-1-light">9.1.1 Light, and the sense of vision</h3>
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

      <h3 id="h-9-1-facts">9.1.2 Two facts common experience gives</h3>
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

      <h3 id="h-9-1-speed">9.1.3 The speed of light</h3>
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

      <h3 id="h-9-1-ray">9.1.4 Why the straight line is still the right picture</h3>
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

      <h3 id="h-9-1-ahead">9.1.5 The chapter ahead</h3>
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

      <h3 id="h-9-2-reflection">9.2.1 Reflection and its laws</h3>
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

      <h3 id="h-9-2-deviation">9.2.2 Angle of deviation</h3>
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

      <h3 id="h-9-2-types">9.2.3 Types of mirrors</h3>
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

      <h3 id="h-9-2-terms">9.2.4 Terms related to spherical mirrors</h3>
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

      <h3 id="h-9-2-focus">9.2.5 Focus and focal length</h3>
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

      <h3 id="h-9-2-paraxial">9.2.6 Paraxial rays</h3>
      <p>
        <strong>Paraxial rays</strong> are rays incident close to the pole P, making small angles with the principal
        axis.
      </p>
      <p>
        Only for these rays does the mirror keep its simple behaviour: they meet at one focus, and{" "}
        <Formula>{String.raw`f = R/2`}</Formula> holds. Rays far from the axis miss the focus — the defect called
        spherical aberration.
      </p>

      <h3 id="h-9-2-rules">9.2.7 Rules for image formation</h3>
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

      <h3 id="h-9-2-convention">9.2.8 Sign convention</h3>
      <PhysicsFigure spec={signConventionConcave} />
      <PhysicsFigure spec={signConventionConvex} />
      <p>
        Heights use the same frame. An object standing above the axis has a positive <Formula>{String.raw`h_o`}</Formula>
        ; an inverted image below it has a negative <Formula>{String.raw`h_i`}</Formula>.
      </p>

      <h3 id="h-9-2-symbols">9.2.9 Symbols</h3>
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

      <h3 id="h-9-2-reading">9.2.10 Reading the signs off a problem</h3>
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

      <h3 id="h-9-2-real-image">9.2.11 The image of a real object</h3>
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

      <h3 id="h-9-2-at-a-glance">9.2.12 Signs at a glance</h3>
      <TableCard
        title="The sign of every quantity, by mirror"
        headers={["Mirror", "f", "u", "v", "h_o", "h_i"]}
        rows={[
          { cells: ["Concave", "−", "−", "real −  ·  virtual +", "+", "real −  ·  virtual +"] },
          { cells: ["Convex", "+", "−", "+", "+", "+"] },
        ]}
      />
      <p>The object is real in every problem here, which is why u stays negative.</p>

      <h3 id="h-9-2-magnification">9.2.13 Linear magnification</h3>
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

      <h3 id="h-9-2-mirror-equation">9.2.14 The mirror equation</h3>
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
        <strong>The mirror equation</strong> is the last line. With the signs of 9.2.8 in place it covers every case —
        real or virtual, concave or convex.
      </p>

      <h3 id="h-9-2-worked">9.2.15 Worked examples</h3>
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

      <h3 id="h-9-3-what">9.3.1 What refraction is</h3>
      <p>
        When a beam of light meets another transparent medium, part of it is reflected back into the first medium and
        the rest enters the second.
      </p>
      <p>
        The part that enters changes direction at the interface, provided the ray is obliquely incident —{" "}
        <Formula>{String.raw`0^\circ < i < 90^\circ`}</Formula>.
      </p>
      <Callout type="note" title="Refraction — definition">
        <p>
          <strong>Refraction</strong> is the change in direction of a ray when it passes obliquely from one
          transparent medium into another.
        </p>
      </Callout>
      <PhysicsFigure spec={refractionAtSurface} />

      <h3 id="h-9-3-laws">9.3.2 Snell&rsquo;s laws of refraction</h3>
      <p>Snell obtained two laws experimentally.</p>
      <KeyPoint title="Laws of refraction">
        <ol className="mt-1 list-decimal space-y-2 pl-5">
          <li>
            <strong>One plane.</strong> The incident ray, the refracted ray and the normal to the interface at the
            point of incidence all lie in the same plane.
          </li>
          <li>
            <strong>Constant ratio.</strong> The ratio of the sine of the angle of incidence to the sine of the angle
            of refraction is a constant.
          </li>
        </ol>
      </KeyPoint>
      <Callout type="important" title="Which angles">
        <p>
          <Formula>{String.raw`i`}</Formula> and <Formula>{String.raw`r`}</Formula> are measured from the{" "}
          <strong>normal</strong>, never from the surface.
        </p>
      </Callout>
      <FormulaBlock
        important
        label="Snell&rsquo;s law of refraction"
        tag="Eq. 9.10"
        latex={String.raw`n_{21} = \frac{\sin i}{\sin r}`}
      />
      <p>
        The constant <Formula>{String.raw`n_{21}`}</Formula> is the{" "}
        <strong>refractive index of the second medium with respect to the first</strong>.
      </p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>It belongs to the pair.</strong> It is a characteristic of the two media together.
        </li>
        <li>
          <strong>The wavelength matters.</strong> The value depends on the wavelength of the light used.
        </li>
        <li>
          <strong>The angle does not.</strong> It is independent of the angle of incidence.
        </li>
      </ul>

      <h3 id="h-9-3-bend">9.3.3 Which way the ray bends</h3>
      <p>The size of <Formula>{String.raw`n_{21}`}</Formula> against 1 decides the direction of the bend.</p>
      <TableCard
        title="Bending towards or away from the normal"
        headers={["Refractive index", "The ray", "The media"]}
        rows={[
          {
            cells: [
              "n₂₁ > 1",
              "r < i — bends towards the normal",
              "medium 2 is optically denser than medium 1",
            ],
          },
          {
            cells: [
              "n₂₁ < 1",
              "r > i — bends away from the normal",
              "the light passes from a denser to a rarer medium",
            ],
          },
        ]}
      />

      <h3 id="h-9-3-density">9.3.4 Optical density is not mass density</h3>
      <p>
        Optical density is the ratio of the speed of light in the two media. Mass density is mass per unit volume.
      </p>
      <MistakeCard
        mistake="A liquid with a higher mass density must be the optically denser medium."
        correction="The two densities measure different things and need not agree. An optically denser medium can have the lower mass density."
        example="Turpentine has a lower mass density than water, but a higher optical density."
      />

      <h3 id="h-9-3-chain">9.3.5 Reversing the pair, and adding a third medium</h3>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Reverse the pair.</strong> <Formula>{String.raw`n_{12} = \frac{1}{n_{21}}`}</Formula>
        </li>
        <li>
          <strong>Insert a third medium.</strong>{" "}
          <Formula>{String.raw`n_{32} = n_{31} \times n_{12}`}</Formula>, where{" "}
          <Formula>{String.raw`n_{31}`}</Formula> is the index of medium 3 with respect to medium 1.
        </li>
      </ul>

      <h3 id="h-9-3-slab">9.3.6 A slab: no deviation, only a side-step</h3>
      <p>A rectangular slab refracts twice — air to glass at the first face, glass to air at the second.</p>
      <p>The faces are parallel, so the angles repeat:</p>
      <FormulaBlock label="The emergent angle repeats the incident one" latex={String.raw`r_2 = i_1`} />
      <p>
        The emergent ray is therefore parallel to the incident ray. It suffers no deviation, but it is displaced
        sideways (Fig. 9.9).
      </p>
      <PhysicsFigure spec={slabShift} />

      <h3 id="h-9-3-depth">9.3.7 The bottom of the tank looks raised</h3>
      <p>A familiar consequence: a tank full of water looks shallower than it is (Fig. 9.10).</p>
      <p>For viewing near the normal direction, the apparent depth is the real depth divided by the refractive index:</p>
      <FormulaBlock
        important
        label="Apparent depth"
        latex={String.raw`h' = \frac{h}{n}`}
      />
      <PhysicsFigure spec={apparentDepth} />

      <h2 id="h-9-4">9.4 Total Internal Reflection</h2>

      <h3 id="h-9-4-internal">9.4.1 The reflection inside the denser medium</h3>
      <p>
        When light travels from an optically denser medium to a rarer one, the interface splits it: part is reflected
        back into the same medium, and part is refracted into the second.
      </p>
      <Callout type="note" title="Internal reflection">
        <p>
          <strong>Internal reflection</strong> is that reflection back into the medium the light came from, at the
          interface with the rarer medium.
        </p>
      </Callout>

      <h3 id="h-9-4-angle">9.4.2 What happens as the angle of incidence grows</h3>
      <p>
        Entering the rarer medium the ray bends away from the normal, so <Formula>{String.raw`r > i`}</Formula> from
        the start. Increase the angle of incidence, and the angle of refraction grows with it (Fig. 9.11).
      </p>
      <Stepper
        steps={[
          {
            label: "A small angle — the ray splits",
            description: (
              <p>
                Part of the ray is reflected back into the denser medium; the rest is transmitted, or refracted, into
                the rarer one.
              </p>
            ),
          },
          {
            label: "A larger angle — the refracted ray swings further out",
            description: <p>The angle of refraction grows as the angle of incidence grows.</p>,
          },
          {
            label: "The critical angle — r reaches 90°",
            description: (
              <p>
                The refracted ray is bent so far away from the normal that it grazes the surface between the two
                media.
              </p>
            ),
          },
          {
            label: "Past the critical angle — refraction stops",
            description: (
              <p>
                Refraction is not possible, so the incident ray is <strong>totally reflected</strong>. That is total
                internal reflection.
              </p>
            ),
          },
        ]}
      />
      <PhysicsFigure spec={totalInternalReflection} />

      <h3 id="h-9-4-total">9.4.3 Why &ldquo;total&rdquo; is the operative word</h3>
      <p>
        When light is reflected by a surface, normally some fraction of it is transmitted. The reflected ray is
        therefore always less intense than the incident ray, however smooth the reflecting surface.
      </p>
      <KeyPoint title="The difference total internal reflection makes">
        <p>
          In total internal reflection, <Highlight>no transmission of light takes place</Highlight> at all.
        </p>
      </KeyPoint>

      <h3 id="h-9-4-critical">9.4.4 The critical angle</h3>
      <Callout type="note" title="Critical angle — definition">
        <p>
          The <strong>critical angle</strong> <Formula>{String.raw`i_c`}</Formula> of a given pair of media is the
          angle of incidence for which the angle of refraction is 90°.
        </p>
      </Callout>
      <p>
        Snell&rsquo;s law can only be satisfied while <Formula>{String.raw`\sin r`}</Formula> stays within its
        maximum value of unity.
      </p>
      <EquationLadder
        title="Where the ceiling comes from"
        steps={[
          {
            label: "Snell's law, denser to rarer",
            equation: String.raw`n_{21} = \frac{\sin i}{\sin r}`,
            tag: "Eq. 9.10",
          },
          {
            label: "The largest value sin r can take",
            equation: String.raw`\sin r \le 1`,
            note: "So there is an upper limit to the value of sin i for which the law can be satisfied.",
          },
          {
            label: "At the critical angle, sin r is exactly 1",
            equation: String.raw`\sin i_c = n_{21}`,
            tag: "Eq. 9.12",
            final: true,
          },
        ]}
      />
      <p>
        For values of <Formula>{String.raw`i`}</Formula> larger than <Formula>{String.raw`i_c`}</Formula>, Snell&rsquo;s
        law cannot be satisfied — and hence no refraction is possible.
      </p>
      <FormulaBlock
        label="Index of the denser medium with respect to the rarer one"
        latex={String.raw`n_{12} = \frac{1}{\sin i_c}`}
      />
      <TableCard
        title="Critical angle of some transparent media with respect to air"
        headers={["Substance (medium)", "Refractive index", "Critical angle (°)"]}
        rows={[
          { cells: ["Water", "1.33", "48.75"] },
          { cells: ["Crown glass", "1.52", "41.14"] },
          { cells: ["Dense flint glass", "1.62", "37.31"] },
          { cells: ["Diamond", "2.42", "24.41"] },
        ]}
      />

      <h3 id="h-9-4-demo">9.4.5 Seeing it: a beaker, a little milk and a laser</h3>
      <p>All optical phenomena can be demonstrated very easily with a laser torch or pointer.</p>
      <Stepper
        steps={[
          {
            label: "Make the beam visible",
            description: (
              <p>
                A glass beaker of clear water, a few drops of milk or another suspension stirred in until the water is
                a little turbid. Shine the laser through it: the path of the beam inside the water shines brightly.
              </p>
            ),
          },
          {
            label: "Partial reflection and partial refraction",
            description: (
              <p>
                Shine the beam from below the beaker so that it strikes the upper water surface at the far end. Part is
                reflected — a spot on the table below — and part is refracted out into the air — a spot on the roof.
              </p>
            ),
          },
          {
            label: "Total internal reflection",
            description: (
              <p>
                Direct the beam from the side so that it strikes the upper surface more obliquely, and adjust the
                direction until the refraction above the water is totally absent and the beam is totally reflected
                back into the water.
              </p>
            ),
          },
          {
            label: "The same thing in a test tube",
            description: (
              <p>
                Pour the water into a long test tube and shine the laser from the top, adjusting until the beam is
                totally internally reflected every time it strikes the walls of the tube. This is similar to what
                happens in optical fibres.
              </p>
            ),
          },
        ]}
      />
      <Callout type="warning" title="Laser safety">
        <p>Never look into the laser beam directly, and never point it at anybody&rsquo;s face.</p>
      </Callout>

      <h3 id="h-9-4-prism">9.4.6 Prisms that turn a ray by 90° or 180°</h3>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Bending the beam.</strong> Prisms designed to bend light by 90° or by 180° make use of total internal
          reflection.
        </li>
        <li>
          <strong>Inverting an image.</strong> Such a prism is also used to invert images without changing their size.
        </li>
        <li>
          <strong>The condition on the glass.</strong> For the 90° and 180° bends, the critical angle for the material
          of the prism must be less than 45° — true of both crown glass and dense flint glass.
        </li>
      </ul>

      <h3 id="h-9-4-fibre">9.4.7 Optical fibres</h3>
      <p>
        Optical fibres are used extensively for transmitting audio and video signals over long distances, and they too
        rest on total internal reflection (Fig. 9.14).
      </p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Built from glass or quartz.</strong> High-quality composite glass/quartz fibres.
        </li>
        <li>
          <strong>Core and cladding.</strong> Each fibre consists of a core and a cladding, and the refractive index of
          the core is higher than that of the cladding.
        </li>
        <li>
          <strong>Launched at a suitable angle.</strong> A signal directed at one end undergoes repeated total internal
          reflections along the length of the fibre and finally comes out at the other end.
        </li>
        <li>
          <strong>No appreciable loss.</strong> Because every stage is total, the intensity of the light signal is not
          appreciably reduced.
        </li>
      </ul>
      <p>
        The fibre is fabricated so that light reflected at one side of the inner surface strikes the other side at an
        angle larger than the critical angle. Even if the fibre is bent, light travels easily along its length.
      </p>
      <KeyPoint title="An optical pipe">
        <p>An optical fibre can act as an optical pipe.</p>
      </KeyPoint>
      <PhysicsFigure spec={opticalFibre} />

      <h3 id="h-9-4-uses">9.4.8 What a bundle of fibres is used for</h3>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Signals, not just light.</strong> A bundle of optical fibres is used for transmitting and receiving
          electrical signals, which are converted to light by suitable transducers.
        </li>
        <li>
          <strong>Optical signals too.</strong> The same fibres can transmit optical signals directly.
        </li>
        <li>
          <strong>A light pipe into the body.</strong> Used to make visual examination of internal organs — the
          esophagus, the stomach, the intestines — possible.
        </li>
        <li>
          <strong>Decorative lamps.</strong> Fine plastic fibres with their free ends forming a fountain-like structure,
          the other end fixed over an electric lamp. Switch the lamp on and the light travels from the bottom of each
          fibre and appears at the tip of its free end as a dot of light.
        </li>
      </ul>

      <h3 id="h-9-4-absorption">9.4.9 What a fibre must not do: absorb</h3>
      <p>
        The main requirement in fabricating an optical fibre is that there should be very little absorption of light as
        it travels the long distances inside it.
      </p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>How it is met.</strong> By purification and special preparation of materials such as quartz.
        </li>
        <li>
          <strong>How well it is met.</strong> In silica glass fibres, more than 95% of the light can be transmitted
          over a fibre length of 1 km.
        </li>
      </ul>
      <p>Compare that with what you would expect for a block of ordinary window glass 1 km thick.</p>

      <h2 id="h-9-5">9.5 Refraction at Spherical Surfaces and by Lenses</h2>

      <h3 id="h-9-5-surface">9.5.1 Refraction at a single spherical surface</h3>
      <p>So far the interface has been plane. Now it curves — a spherical interface between two transparent media.</p>
      <p>
        An infinitesimal part of a spherical surface can be regarded as planar, so the same laws of refraction apply at
        every point on it.
      </p>
      <p>
        As with a spherical mirror, the normal at the point of incidence is perpendicular to the tangent plane there,
        and therefore passes through the centre of curvature.
      </p>
      <Callout type="note" title="What a thin lens is">
        <p>
          A <strong>thin lens</strong> is a transparent optical medium bounded by two surfaces, at least one of which is
          spherical.
        </p>
      </Callout>
      <p>
        Take the aperture of the surface to be small compared with the other distances involved, so that the small-angle
        approximation holds, and take <Formula>{String.raw`NM`}</Formula> to be nearly equal to the perpendicular from{" "}
        <Formula>{String.raw`N`}</Formula> to the principal axis.
      </p>
      <Expandable title="Derivation — the relation between object and image distance">
        <p className="mb-3 text-sm text-foreground/75">
          <Formula>{String.raw`O`}</Formula> is the object, <Formula>{String.raw`I`}</Formula> its image,{" "}
          <Formula>{String.raw`C`}</Formula> the centre of curvature and <Formula>{String.raw`M`}</Formula> the foot of
          the perpendicular from <Formula>{String.raw`N`}</Formula>. The light goes from a medium of index{" "}
          <Formula>{String.raw`n_1`}</Formula> into one of index <Formula>{String.raw`n_2`}</Formula>.
        </p>
        <EquationLadder
          steps={[
            {
              label: "The three tangents, small angles",
              equation: String.raw`\tan\angle NOM = \frac{MN}{OM},\quad \tan\angle NCM = \frac{MN}{MC},\quad \tan\angle NIM = \frac{MN}{MI}`,
              note: "For small angles the tangent is the angle itself.",
            },
            {
              label: "i is the exterior angle of triangle NOC",
              equation: String.raw`i = \angle NOM + \angle NCM = \frac{MN}{OM} + \frac{MN}{MC}`,
              tag: "Eq. 9.13",
            },
            {
              label: "r from the second triangle",
              equation: String.raw`r = \angle NCM - \angle NIM = \frac{MN}{MC} - \frac{MN}{MI}`,
              tag: "Eq. 9.14",
            },
            {
              label: "Snell's law, small angles",
              equation: String.raw`n_1 i = n_2 r`,
            },
            {
              label: "Substitute i and r",
              equation: String.raw`\frac{n_1}{OM} + \frac{n_2}{MI} = \frac{n_2 - n_1}{MC}`,
              tag: "Eq. 9.15",
            },
            {
              label: "Cartesian signs: OM = −u, MI = +v, MC = +R",
              equation: String.raw`\frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}`,
              tag: "Eq. 9.16",
              final: true,
            },
          ]}
        />
      </Expandable>
      <FormulaBlock
        important
        label="Refraction at any curved spherical surface"
        tag="Eq. 9.16"
        latex={String.raw`\frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}`}
      />
      <p>
        It ties the object distance and the image distance to the refractive indices and the radius of curvature, and it
        holds for any curved spherical surface.
      </p>
      <Expandable title="Example 9.5 — a point source in air meets a glass surface" variant="example">
        <ProblemSolution.Problem>
          <p>
            Light from a point source in air falls on a spherical glass surface with <Formula>{String.raw`n = 1.5`}</Formula>{" "}
            and radius of curvature 20 cm. The source is 100 cm from the surface.
          </p>
          <p className="mt-3">Where is the image formed?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <Stepper
            steps={[
              {
                label: "Write down what is given",
                description: (
                  <p>
                    <Formula>{String.raw`u = -100\ \text{cm}`}</Formula>,{" "}
                    <Formula>{String.raw`R = +20\ \text{cm}`}</Formula>,{" "}
                    <Formula>{String.raw`n_1 = 1`}</Formula>, <Formula>{String.raw`n_2 = 1.5`}</Formula>, and{" "}
                    <Formula>{String.raw`v`}</Formula> is wanted.
                  </p>
                ),
              },
              {
                label: "Put them into Eq. 9.16",
                description: (
                  <p>
                    <Formula>{String.raw`\frac{1.5}{v} + \frac{1}{100} = \frac{0.5}{20}`}</Formula>
                  </p>
                ),
              },
              {
                label: "Isolate the v term",
                description: (
                  <p>
                    <Formula>{String.raw`\frac{1.5}{v} = 0.025 - 0.01 = 0.015`}</Formula>
                  </p>
                ),
              },
              {
                label: "Solve for v",
                description: (
                  <p>
                    <Formula>{String.raw`v = +100\ \text{cm}`}</Formula>.
                  </p>
                ),
              },
            ]}
          />
          <FormulaBlock important latex={String.raw`v = +100\ \text{cm}`} />
          <p className="mt-3 text-sm text-foreground/75">
            The image forms 100 cm from the glass surface, in the direction of the incident light.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-9-5-lens">9.5.2 Refraction by a lens</h3>
      <p>A lens is handled as two refractions in a row. The first surface forms an image, and that image becomes the object for the second surface.</p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>First surface.</strong> It forms the image <Formula>{String.raw`I_1`}</Formula> of the object{" "}
          <Formula>{String.raw`O`}</Formula>.
        </li>
        <li>
          <strong>Second surface.</strong> <Formula>{String.raw`I_1`}</Formula> acts as a virtual object for it, and it
          forms the image at <Formula>{String.raw`I`}</Formula>.
        </li>
      </ul>
      <Expandable title="Derivation — from one surface to the lens maker's formula">
        <EquationLadder
          steps={[
            {
              label: "First interface ABC",
              equation: String.raw`\frac{n_1}{OB} + \frac{n_2}{BI_1} = \frac{n_2 - n_1}{BC_1}`,
              tag: "Eq. 9.17",
            },
            {
              label: "Second interface ADC",
              equation: String.raw`-\frac{n_2}{DI_1} + \frac{n_1}{DI} = \frac{n_1 - n_2}{DC_2}`,
              tag: "Eq. 9.18",
              note: "On the right of ADC the index is n₁ and on its left n₂; DI₁ is negative, being measured against the incident light.",
            },
            {
              label: "Thin lens: BI₁ = DI₁, so add the two",
              equation: String.raw`\frac{n_1}{OB} + \frac{n_1}{DI} = (n_2 - n_1)\left(\frac{1}{BC_1} - \frac{1}{DC_2}\right)`,
              tag: "Eq. 9.19",
            },
            {
              label: "Object at infinity: OB → ∞, DI = f",
              equation: String.raw`\frac{n_1}{f} = (n_2 - n_1)\left(\frac{1}{BC_1} - \frac{1}{DC_2}\right)`,
              tag: "Eq. 9.20",
            },
            {
              label: "Apply the sign convention to both surfaces",
              equation: String.raw`\frac{1}{f} = (n_{21} - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)`,
              tag: "Eq. 9.21",
              final: true,
            },
          ]}
        />
      </Expandable>
      <FormulaBlock
        important
        label="The lens maker's formula"
        tag="Eq. 9.21"
        latex={String.raw`\frac{1}{f} = (n_{21} - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)`}
      />
      <p>
        It is what lets a lens of a wanted focal length be designed, from surfaces of suitable radii of curvature.
      </p>
      <p>
        The formula is true for a concave lens also. In that case <Formula>{String.raw`R_1`}</Formula> is negative and{" "}
        <Formula>{String.raw`R_2`}</Formula> positive, and therefore <Formula>{String.raw`f`}</Formula> is negative.
      </p>
      <Callout type="note" title="Focus of a lens">
        <ul className="my-3 list-none space-y-2 pl-0">
          <li>
            <strong>Focus.</strong> The point where the image of an object placed at infinity is formed is the focus{" "}
            <Formula>{String.raw`F`}</Formula>.
          </li>
          <li>
            <strong>Focal length.</strong> The distance <Formula>{String.raw`f`}</Formula> is the focal length.
          </li>
          <li>
            <strong>Two foci.</strong> A lens has <Formula>{String.raw`F`}</Formula> and{" "}
            <Formula>{String.raw`F'`}</Formula>, one on either side.
          </li>
        </ul>
      </Callout>

      <h3 id="h-9-5-formula">9.5.3 The thin lens formula</h3>
      <EquationLadder
        steps={[
          {
            label: "From Eqs. 9.19 and 9.20",
            equation: String.raw`\frac{1}{OB} + \frac{1}{DI} = \frac{1}{f}`,
            tag: "Eq. 9.22",
            note: "In the thin lens approximation B and D are both close to the optical centre.",
          },
          {
            label: "Sign convention: BO = −u, DI = +v",
            equation: String.raw`\frac{1}{v} - \frac{1}{u} = \frac{1}{f}`,
            tag: "Eq. 9.23",
            final: true,
          },
        ]}
      />
      <p>
        Derived for a real image from a convex lens, but valid for convex and concave lenses alike, and for real and
        virtual images.
      </p>
      <p>
        The two foci of a double convex or concave lens are equidistant from the optical centre. The focus on the side of
        the source is the <strong>first focal point</strong>; the other is the <strong>second focal point</strong>.
      </p>

      <h3 id="h-9-5-rays">9.5.4 The three construction rays</h3>
      <p>
        In principle any two rays from a point on the object can be traced by the laws of refraction, and their meeting
        point is the image. In practice two of these three are used (Fig. 9.17).
      </p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Parallel to the axis.</strong> After refraction it passes through the second principal focus{" "}
          <Formula>{String.raw`F'`}</Formula> of a convex lens, or appears to diverge from the first principal focus{" "}
          <Formula>{String.raw`F`}</Formula> of a concave one.
        </li>
        <li>
          <strong>Through the optical centre.</strong> It emerges without any deviation.
        </li>
        <li>
          <strong>Through the first focus.</strong> A ray through the first principal focus of a convex lens emerges
          parallel to the axis; a ray incident on a concave lens as if it were meeting the axis at the second focus
          emerges parallel to the axis.
        </li>
      </ul>
      <PhysicsFigure spec={convexLensRays} />
      <PhysicsFigure spec={concaveLensRays} />
      <p>
        Each point on an object gives out an infinite number of rays — and all of them pass through the same image point
        after refraction at the lens.
      </p>

      <h3 id="h-9-5-magnification">9.5.5 Magnification by a lens</h3>
      <p>Defined as for a mirror: the ratio of the size of the image to that of the object.</p>
      <FormulaBlock
        important
        label="Linear magnification, lens"
        tag="Eq. 9.24"
        latex={String.raw`m = \frac{h'}{h} = \frac{v}{u}`}
      />
      <p>
        With the sign convention, an erect and virtual image gives <Formula>{String.raw`m`}</Formula> positive, while an
        inverted and real image gives it negative.
      </p>
      <Expandable title="Example 9.6 — the vanishing lens" variant="example">
        <ProblemSolution.Problem>
          <p>
            A magician makes a glass lens of <Formula>{String.raw`n = 1.47`}</Formula> disappear in a trough of liquid.
          </p>
          <p className="mt-3">What is the refractive index of the liquid? Could the liquid be water?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <Stepper
            steps={[
              {
                label: "The condition for disappearing",
                description: (
                  <p>
                    The liquid must bend light exactly as the glass does, so its refractive index must be{" "}
                    <Formula>{String.raw`1.47`}</Formula>: that is, <Formula>{String.raw`n_1 = n_2`}</Formula>.
                  </p>
                ),
              },
              {
                label: "What that does to the lens",
                description: (
                  <p>
                    The lens maker's formula gives <Formula>{String.raw`\frac{1}{f} = 0`}</Formula>, so{" "}
                    <Formula>{String.raw`f \to \infty`}</Formula>. The lens acts like a plane sheet of glass.
                  </p>
                ),
              },
              {
                label: "Could it be water?",
                description: (
                  <p>
                    No — water is not 1.47. Glycerine could be.
                  </p>
                ),
              },
            ]}
          />
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-9-5-power">9.5.6 Power of a lens</h3>
      <p>
        Power measures the convergence or divergence a lens introduces in the light falling on it. A lens of shorter
        focal length bends the incident light more.
      </p>
      <Callout type="note" title="Power — definition">
        <p>
          The power <Formula>{String.raw`P`}</Formula> of a lens is the tangent of the angle by which it converges or
          diverges a beam parallel to the principal axis, falling at unit distance from the optical centre.
        </p>
      </Callout>
      <p>
        With the beam at height <Formula>{String.raw`h`}</Formula>, <Formula>{String.raw`\tan\delta = h/f`}</Formula>.
        For <Formula>{String.raw`h = 1`}</Formula> and small <Formula>{String.raw`\delta`}</Formula>,{" "}
        <Formula>{String.raw`\delta = 1/f`}</Formula>.
      </p>
      <FormulaBlock important label="Power of a lens" tag="Eq. 9.25" latex={String.raw`P = \frac{1}{f}`} />
      <p>
        The SI unit is the <strong>dioptre</strong>, <Formula>{String.raw`1\ \text{D} = 1\ \text{m}^{-1}`}</Formula>: a
        lens of focal length 1 metre has a power of one dioptre.
      </p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Positive</strong> for a converging lens.
        </li>
        <li>
          <strong>Negative</strong> for a diverging lens.
        </li>
      </ul>
      <TableCard
        title="Reading a prescription"
        headers={["Prescribed power", "Lens", "Focal length"]}
        rows={[
          { cells: ["+2.5 D", "convex", "+40 cm"] },
          { cells: ["−4.0 D", "concave", "−25 cm"] },
        ]}
      />
      <Expandable title="Example 9.7 — power, index and focal length in water" variant="example">
        <ProblemSolution.Problem>
          <p>
            (i) If <Formula>{String.raw`f = 0.5\ \text{m}`}</Formula> for a glass lens, what is its power?
          </p>
          <p>
            (ii) The radii of curvature of the faces of a double convex lens are 10 cm and 15 cm, and its focal length is
            12 cm. What is the refractive index of the glass?
          </p>
          <p>
            (iii) A convex lens has a 20 cm focal length in air. What is its focal length in water? (Index of
            air–water = 1.33, of air–glass = 1.5.)
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p className="t-micro">Part (i)</p>
          <FormulaBlock latex={String.raw`P = \frac{1}{0.5} = +2\ \text{D}`} />
          <p className="t-micro mt-6">Part (ii)</p>
          <Stepper
            steps={[
              {
                label: "Lens maker's formula, with the signs in",
                description: (
                  <p>
                    <Formula>{String.raw`f = +12\ \text{cm}`}</Formula>,{" "}
                    <Formula>{String.raw`R_1 = +10\ \text{cm}`}</Formula>,{" "}
                    <Formula>{String.raw`R_2 = -15\ \text{cm}`}</Formula>, air taken as unity.
                  </p>
                ),
              },
              {
                label: "Substitute",
                description: (
                  <p>
                    <Formula>{String.raw`\frac{1}{12} = (n - 1)\left(\frac{1}{10} - \frac{1}{-15}\right) = (n - 1)\frac{1}{6}`}</Formula>
                  </p>
                ),
              },
              {
                label: "Solve",
                description: (
                  <p>
                    <Formula>{String.raw`n = 1.5`}</Formula>
                  </p>
                ),
              },
            ]}
          />
          <p className="t-micro mt-6">Part (iii)</p>
          <Stepper
            steps={[
              {
                label: "In air",
                description: (
                  <p>
                    <Formula>{String.raw`\frac{1}{20} = (1.5 - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)`}</Formula>
                  </p>
                ),
              },
              {
                label: "The same lens in water",
                description: (
                  <p>
                    <Formula>{String.raw`\frac{1}{f} = \left(\frac{1.5 - 1.33}{1.33}\right)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)`}</Formula>
                  </p>
                ),
              },
              {
                label: "Combine the two",
                description: (
                  <p>
                    <Formula>{String.raw`f = +78.2\ \text{cm}`}</Formula>
                  </p>
                ),
              },
            ]}
          />
          <FormulaBlock important latex={String.raw`P = +2\ \text{D},\quad n = 1.5,\quad f_{\text{water}} = +78.2\ \text{cm}`} />
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-9-5-combination">9.5.7 Two thin lenses in contact</h3>
      <p>
        Take lenses <Formula>{String.raw`A`}</Formula> and <Formula>{String.raw`B`}</Formula> of focal lengths{" "}
        <Formula>{String.raw`f_1`}</Formula> and <Formula>{String.raw`f_2`}</Formula> in contact, with the object beyond
        the focus of the first.
      </p>
      <p>
        The first lens forms an image at <Formula>{String.raw`I_1`}</Formula>. Being real, that image serves as a virtual
        object for the second lens, which forms the final image at <Formula>{String.raw`I`}</Formula>.
      </p>
      <Callout type="important" title="What the intermediate image is">
        <p>
          The image formed by the first lens is presumed only to fix the position of the final image. The rays actually
          leave the first lens and are modified at the angle at which they strike the second.
        </p>
      </Callout>
      <p>
        Both lenses are thin, so their optical centres are taken to coincide; call that point{" "}
        <Formula>{String.raw`P`}</Formula>.
      </p>
      <EquationLadder
        steps={[
          {
            label: "Image formed by the first lens",
            equation: String.raw`\frac{1}{v_1} - \frac{1}{u} = \frac{1}{f_1}`,
            tag: "Eq. 9.27",
          },
          {
            label: "Image formed by the second lens",
            equation: String.raw`\frac{1}{v} - \frac{1}{v_1} = \frac{1}{f_2}`,
            tag: "Eq. 9.28",
          },
          {
            label: "Add the two",
            equation: String.raw`\frac{1}{v} - \frac{1}{u} = \frac{1}{f_1} + \frac{1}{f_2}`,
            tag: "Eq. 9.29",
          },
          {
            label: "Read the pair as one lens of focal length f",
            equation: String.raw`\frac{1}{f} = \frac{1}{f_1} + \frac{1}{f_2}`,
            tag: "Eq. 9.30",
          },
          {
            label: "Any number of thin lenses in contact",
            equation: String.raw`\frac{1}{f} = \frac{1}{f_1} + \frac{1}{f_2} + \frac{1}{f_3} + \cdots`,
            tag: "Eq. 9.31",
          },
          {
            label: "The same statement in powers",
            equation: String.raw`P = P_1 + P_2 + P_3 + \cdots`,
            tag: "Eq. 9.32",
            note: "An algebraic sum: the terms may be positive (convex) or negative (concave).",
          },
          {
            label: "And the magnification is a product",
            equation: String.raw`m = m_1 m_2 m_3 \cdots`,
            tag: "Eq. 9.33",
            final: true,
          },
        ]}
      />
      <p>
        A combination helps obtain diverging or converging lenses of the magnification wanted, and it enhances the
        sharpness of the image.
      </p>
      <p>Such combinations are used in designing lenses for cameras, microscopes, telescopes and other optical instruments.</p>
      <Expandable title="Example 9.8 — three lenses in a row" variant="example">
        <ProblemSolution.Problem>
          <p>
            Find the position of the image formed by the lens combination of Fig. 9.20: a lens of{" "}
            <Formula>{String.raw`f_1 = +10\ \text{cm}`}</Formula> with the object 30 cm in front of it, a second lens of{" "}
            <Formula>{String.raw`f_2 = -10\ \text{cm}`}</Formula> 5 cm behind the first, and a third of{" "}
            <Formula>{String.raw`f_3 = +30\ \text{cm}`}</Formula> behind that.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <Stepper
            steps={[
              {
                label: "Image formed by the first lens",
                description: (
                  <p>
                    <Formula>{String.raw`\frac{1}{v_1} - \frac{1}{-30} = \frac{1}{10}`}</Formula>, so{" "}
                    <Formula>{String.raw`v_1 = 15\ \text{cm}`}</Formula>.
                  </p>
                ),
              },
              {
                label: "That image becomes the object for the second lens",
                description: (
                  <p>
                    It lies <Formula>{String.raw`15 - 5 = 10\ \text{cm}`}</Formula> to the right of the second lens. Real,
                    but a <em>virtual object</em> for the second lens: the rays only appear to come from it.
                  </p>
                ),
              },
              {
                label: "Image formed by the second lens",
                description: (
                  <p>
                    <Formula>{String.raw`\frac{1}{v_2} - \frac{1}{10} = \frac{1}{-10}`}</Formula>, so{" "}
                    <Formula>{String.raw`v_2 = \infty`}</Formula> — a virtual image at infinity to the left.
                  </p>
                ),
              },
              {
                label: "The third lens takes an object at infinity",
                description: (
                  <p>
                    <Formula>{String.raw`\frac{1}{v_3} - \frac{1}{\infty} = \frac{1}{30}`}</Formula>, so{" "}
                    <Formula>{String.raw`v_3 = 30\ \text{cm}`}</Formula>.
                  </p>
                ),
              },
            ]}
          />
          <FormulaBlock important latex={String.raw`v_3 = +30\ \text{cm}`} />
          <p className="mt-3 text-sm text-foreground/75">
            The final image forms 30 cm to the right of the third lens.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-9-6">9.6 Refraction Through a Prism</h2>

      <h3 id="h-9-6-angles">9.6.1 The prism and its angles</h3>
      <p>
        Fig. 9.21 shows the passage of light through a triangular prism <Formula>{String.raw`ABC`}</Formula>.
      </p>
      <PhysicsFigure spec={prismPath} />
      <TableCard
        title="The angles of Fig. 9.21"
        headers={["Symbol", "What it measures"]}
        rows={[
          { cells: ["i", "angle of incidence at the first face AB"] },
          { cells: ["r₁", "angle of refraction at the first face AB"] },
          { cells: ["r₂", "angle of incidence at the second face AC — glass to air"] },
          { cells: ["e", "angle of refraction, or emergence, at the second face AC"] },
          { cells: ["d", "angle between the emergent ray RS and the direction of the incident ray PQ"] },
        ]}
      />
      <p>
        The angle <Formula>{String.raw`d`}</Formula> is the <strong>angle of deviation</strong>: the angle through which
        the emergent ray has been turned away from where the incident ray was going.
      </p>

      <h3 id="h-9-6-sum">9.6.2 Why r₁ + r₂ = A</h3>
      <p>
        In the quadrilateral <Formula>{String.raw`AQNR`}</Formula>, two of the angles — at the vertices{" "}
        <Formula>{String.raw`Q`}</Formula> and <Formula>{String.raw`R`}</Formula> — are right angles. The sum of the
        other two angles of the quadrilateral is therefore 180°.
      </p>
      <EquationLadder
        steps={[
          {
            label: "Quadrilateral AQNR",
            equation: String.raw`A + \angle QNR = 180^\circ`,
          },
          {
            label: "Triangle QNR",
            equation: String.raw`r_1 + r_2 + \angle QNR = 180^\circ`,
          },
          {
            label: "Compare the two",
            equation: String.raw`r_1 + r_2 = A`,
            tag: "Eq. 9.34",
            final: true,
          },
        ]}
      />
      <p>
        So the two angles inside the prism at the two faces always add up to the apex angle <Formula>{String.raw`A`}</Formula>.
      </p>

      <h3 id="h-9-6-deviation">9.6.3 The angle of deviation</h3>
      <p>
        The total deviation <Formula>{String.raw`d`}</Formula> is the sum of the deviations at the two faces.
      </p>
      <EquationLadder
        steps={[
          {
            label: "Deviations at the two faces",
            equation: String.raw`d = (i - r_1) + (e - r_2)`,
          },
          {
            label: "Use Eq. 9.34",
            equation: String.raw`d = i + e - A`,
            tag: "Eq. 9.35",
            final: true,
          },
        ]}
      />
      <p>
        So the angle of deviation depends on the angle of incidence — the ray is not simply turned by a fixed amount.
      </p>

      <h3 id="h-9-6-curve">9.6.4 Deviation against incidence</h3>
      <p>
        Fig. 9.22 plots the angle of deviation against the angle of incidence. What the plot shows is a curve with a
        single lowest point, <Formula>{String.raw`D_m`}</Formula>.
      </p>
      <PhysicsFigure spec={deviationCurve} />
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Two incidences, one deviation.</strong> Any given <Formula>{String.raw`d`}</Formula>, except at{" "}
          <Formula>{String.raw`i = e`}</Formula>, corresponds to two values of <Formula>{String.raw`i`}</Formula> and
          hence of <Formula>{String.raw`e`}</Formula>.
        </li>
        <li>
          <strong>It is the symmetry of Eq. 9.35.</strong> The deviation stays the same if{" "}
          <Formula>{String.raw`i`}</Formula> and <Formula>{String.raw`e`}</Formula> are interchanged.
        </li>
        <li>
          <strong>Physically, the path can be traced back.</strong> Run the ray backwards through Fig. 9.21 and it leaves
          along the original incident line, through the same deviation.
        </li>
      </ul>

      <h3 id="h-9-6-minimum">9.6.5 Minimum deviation</h3>
      <p>
        At the minimum deviation <Formula>{String.raw`D_m`}</Formula>, the refracted ray inside the prism becomes
        parallel to its base. That is the same as <Formula>{String.raw`d = D_m`}</Formula> and{" "}
        <Formula>{String.raw`i = e`}</Formula>, which implies <Formula>{String.raw`r_1 = r_2`}</Formula>.
      </p>
      <EquationLadder
        steps={[
          {
            label: "Eq. 9.34, with the two refractions equal",
            equation: String.raw`2r = A \quad \text{or} \quad r = \frac{A}{2}`,
            tag: "Eq. 9.36",
          },
          {
            label: "Eq. 9.35, the same way",
            equation: String.raw`D_m = 2i - A \quad \text{or} \quad i = \frac{A + D_m}{2}`,
            tag: "Eq. 9.37",
            final: true,
          },
        ]}
      />
      <p>
        The refractive index of the material of the prism is then given by Snell's law at either face.
      </p>
      <FormulaBlock
        important
        label="Refractive index of the prism"
        tag="Eq. 9.38"
        latex={String.raw`n_{21} = \frac{n_2}{n_1} = \frac{\sin[(A + D_m)/2]}{\sin[A/2]}`}
      />
      <Callout type="note" title="A measurement method">
        <p>
          The angles <Formula>{String.raw`A`}</Formula> and <Formula>{String.raw`D_m`}</Formula> can be measured
          experimentally, so Eq. 9.38 provides a method of determining the refractive index of the material of the prism.
        </p>
      </Callout>

      <h3 id="h-9-6-thin">9.6.6 The thin prism</h3>
      <p>
        For a small-angle prism — a thin prism — <Formula>{String.raw`D_m`}</Formula> is also very small, and the sines
        in Eq. 9.38 can be replaced by the angles themselves.
      </p>
      <EquationLadder
        steps={[
          {
            label: "Small angles: sin θ ≈ θ",
            equation: String.raw`n_{21} \simeq \frac{(A + D_m)/2}{A/2}`,
          },
          {
            label: "Rearrange",
            equation: String.raw`D_m = (n_{21} - 1)A`,
            final: true,
          },
        ]}
      />
      <p>It follows that thin prisms do not deviate light much.</p>

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

      <h3 id="h-9-7-microscope">9.7.1 The microscope</h3>

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
        The eyepiece's own angular magnification is the simple-microscope result, Eq. 9.39 or Eq. 9.42, depending on where
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

      <h3 id="h-9-7-telescope">9.7.2 The telescope</h3>

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
            The observer sits in a small cage near the mirror's focus.
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
    </>
  );
}
