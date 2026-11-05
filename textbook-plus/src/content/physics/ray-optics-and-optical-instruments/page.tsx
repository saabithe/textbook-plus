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
import { PhysicsFigure } from "@/components/content/physics/diagram/PhysicsFigure";
import {
  concaveMirrorTerms,
  concaveRealImage,
  convexMirrorTerms,
  mirrorEquationGeometry,
  planeReflection,
  ruleCentre,
  ruleFocus,
  ruleParallel,
  rulePole,
  signConventionConcave,
  signConventionConvex,
} from "./figures";

export default function RayOpticsAndOpticalInstrumentsChapter() {
  return (
    <>
      <h2 id="h-9-1">9.1 Introduction</h2>
      <p>
        Light is the narrow band of the electromagnetic spectrum the eye can detect — and the only way we read the
        world at a distance.
      </p>

      <h3 id="h-9-1-light">Light and the visible spectrum</h3>
      <Callout type="note" title="Light — definition">
        <p>
          <strong>Light</strong> is electromagnetic radiation within a narrow range of wavelengths,{" "}
          <Highlight>400 nm to 750 nm</Highlight>, which the retina of the human eye can detect.
        </p>
      </Callout>
      <p>It is mainly through light and the sense of vision that we know and interpret the world around us.</p>

      <h3 id="h-9-1-speed">Speed of light</h3>
      <p>Light travels with enormous speed. Its accepted value in vacuum is</p>
      <FormulaBlock
        label="Speed of light in vacuum"
        latex={String.raw`c = 2.99792458 \times 10^{8}\ \text{m s}^{-1}`}
      />
      <p>For every calculation here the first three digits are enough:</p>
      <FormulaBlock important latex={String.raw`c \approx 3 \times 10^{8}\ \text{m s}^{-1}`} />
      <KeyPoint title="Universal limit">
        The speed of light in vacuum is the highest speed attainable in nature. Every other speed is measured against
        it.
      </KeyPoint>

      <h2 id="h-9-2">9.2 Reflection of Light by Spherical Mirrors</h2>
      <p>
        A ray of light that meets a smooth polished surface bounces back into the medium it came from. The two laws
        that govern that bounce hold on curved mirrors exactly as they do on flat ones.
      </p>

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
      <FormulaBlock latex={String.raw`i + r + \delta = 180^\circ`} />
      <p>The two angles are equal, so</p>
      <FormulaBlock latex={String.raw`2i + \delta = 180^\circ`} />
      <p>and the deviation follows from the angle of incidence alone:</p>
      <FormulaBlock important label="Angle of deviation" latex={String.raw`\delta = 180^\circ - 2i`} />
      <FormulaBlock label="The same result in terms of r" latex={String.raw`\delta = 180^\circ - 2r`} />
      <p>
        At normal incidence <Formula>{String.raw`i = 0`}</Formula>, so{" "}
        <Formula>{String.raw`\delta = 180^\circ`}</Formula>: the ray returns along the path it came on.
      </p>

      <h3 id="h-9-2-types">9.2.3 Types of mirrors</h3>
      <p>Every mirror is named by the shape of its reflecting surface.</p>
      <ul className="my-6 list-none space-y-2 pl-0">
        <li>
          <strong>Plane mirror</strong> — a flat reflecting surface.
        </li>
        <li>
          <strong>Concave mirror</strong> — the surface curves inward, so its hollow side faces the light.
        </li>
        <li>
          <strong>Convex mirror</strong> — the surface bulges outward, toward the light.
        </li>
      </ul>
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
        <Formula>{String.raw`R = 2f`}</Formula>. The proof is in 9.2.8.
      </p>

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
        Any two of the four rays below are enough to locate an image. Each one leaves the mirror along a path fixed by
        the laws of reflection.
      </p>
      <p>
        <strong>Rule 1 — a ray parallel to the principal axis.</strong> After reflection it passes through the focus
        of a concave mirror, or appears to come from the focus of a convex mirror.
      </p>
      <PhysicsFigure spec={ruleParallel} />
      <p>
        <strong>Rule 2 — a ray through the focus.</strong> A ray passing through F — or directed towards it — leaves
        parallel to the principal axis.
      </p>
      <PhysicsFigure spec={ruleFocus} />
      <p>
        <strong>Rule 3 — a ray through the centre of curvature.</strong> A ray passing through C, or directed towards
        it, strikes the mirror normally and reflects back along the same path.
      </p>
      <PhysicsFigure spec={ruleCentre} />
      <p>
        <strong>Rule 4 — a ray at the pole.</strong> A ray striking P obliquely is reflected symmetrically, making
        equal angles with the principal axis, because the axis is the normal there.
      </p>
      <PhysicsFigure spec={rulePole} />

      <h3 id="h-9-2-derivation">9.2.8 Relation between R and f</h3>
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
          The geometry of the proof (Fig. 9.4). The foot of the perpendicular from M meets the axis almost at P, so MP
          is treated as perpendicular to the axis and CP, FP as the axis distances.
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

      <h3 id="h-9-2-convention">9.2.9 Sign convention</h3>
      <p>
        One mirror formula has to describe an object in front of the mirror, a real image in front and a virtual image
        behind it. A single set of sign rules makes that possible.
      </p>
      <TableCard
        title="How every distance gets its sign"
        headers={["Measured", "Positive", "Negative"]}
        rows={[
          {
            cells: [
              "Along the axis",
              "in the direction of the incident light",
              "against the direction of the incident light",
            ],
          },
          {
            cells: ["Across the axis", "upward, above the principal axis", "downward, below it"],
          },
        ]}
      />
      <p>
        Every distance starts at the pole <Formula>{String.raw`P`}</Formula>, and light travels from left to right in
        all the figures here. So the right of P is positive and the left of P is negative.
      </p>
      <PhysicsFigure spec={signConventionConcave} />
      <PhysicsFigure spec={signConventionConvex} />
      <p>
        Heights use the same frame. An object standing above the axis has a positive <Formula>{String.raw`h_o`}</Formula>
        ; an inverted image below it has a negative <Formula>{String.raw`h_i`}</Formula>.
      </p>

      <h3 id="h-9-2-symbols">9.2.10 Symbols</h3>
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

      <h3 id="h-9-2-reading">9.2.11 Reading the signs off a problem</h3>
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

      <h3 id="h-9-2-real-image">9.2.12 The image of a real object</h3>
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
            <strong>Real and inverted</strong> — the image lies on the object's side, so u, v and h_i take the same
            sign.
          </li>
          <li>
            <strong>Virtual and erect</strong> — the image lies on the far side, so v and h_i are positive.
          </li>
        </ul>
      </KeyPoint>

      <h3 id="h-9-2-at-a-glance">9.2.13 Signs at a glance</h3>
      <TableCard
        title="The sign of every quantity, by mirror"
        headers={["Mirror", "f", "u", "v", "h_o", "h_i"]}
        rows={[
          { cells: ["Concave", "−", "−", "real −  ·  virtual +", "+", "real −  ·  virtual +"] },
          { cells: ["Convex", "+", "−", "+", "+", "+"] },
        ]}
      />
      <p>The object is real in every problem here, which is why u stays negative.</p>

      <h3 id="h-9-2-magnification">9.2.14 Linear magnification</h3>
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

      <h3 id="h-9-2-mirror-equation">9.2.15 The mirror equation</h3>
      <p>
        Object distance, image distance and focal length are tied by one relation, and it drops out of two pairs of
        similar triangles.
      </p>
      <PhysicsFigure spec={mirrorEquationGeometry} />
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
      <p>
        <strong>The mirror equation</strong> is the last line. With the signs of 9.2.9 in place it covers every case —
        real or virtual, concave or convex.
      </p>

      <h3 id="h-9-2-worked">9.2.16 Worked examples</h3>
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

      <h3 id="h-9-2-book-figures">Figures in the printed book</h3>
      <p>The same results are drawn in the textbook; these are the figures to check against.</p>
      <TableCard
        title="Chapter 9 figures behind sections 9.1 and 9.2"
        headers={["Figure", "What it shows"]}
        rows={[
          {
            cells: [
              "9.1 — Reflection at a plane surface",
              "Incident ray, reflected ray and the normal at the point of incidence, showing that all three lie in one plane and that i = r.",
            ],
          },
          {
            cells: [
              "9.3 — Focus of a concave and a convex mirror",
              "(a) Parallel paraxial rays converge at F on a concave mirror. (b) They appear to diverge from F on a convex mirror.",
            ],
          },
          {
            cells: [
              "9.4 — Geometry of reflection",
              "A ray parallel to the axis strikes at M; CM is the normal there, and the small-aperture geometry gives f = R/2.",
            ],
          },
          {
            cells: [
              "9.5 — Ray diagram for image formation",
              "Three construction rays drawn from the tip of an object locate the image formed by a concave mirror.",
            ],
          },
          {
            cells: [
              "9.6 — Virtual image, concave and convex",
              "Object between P and F: the image is virtual and erect behind the mirror. A convex mirror gives the same for any placement.",
            ],
          },
        ]}
      />
    </>
  );
}
