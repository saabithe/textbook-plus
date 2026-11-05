/**
 * Ray Optics and Optical Instruments — rebuilt from the user's own notes.
 *
 * Sections 9.1–9.2 only: light, reflection, spherical mirrors, the four
 * construction rays and the R = 2f derivation. Figures are `FigureSpec`s from
 * `./figures.ts` (registered in `diagram/examples.ts`, gated by `verify:figures`).
 *
 * The retired NCERT-based version is frozen in the tag
 * `backup/ray-optics-full-2026-11-04`.
 */
import { Callout } from "@/components/content/Callout";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Highlight } from "@/components/content/Highlight";
import { KeyPoint } from "@/components/content/KeyPoint";
import { TableCard } from "@/components/content/data/TableCard";
import { PhysicsFigure } from "@/components/content/physics/diagram/PhysicsFigure";
import {
  concaveMirrorTerms,
  convexMirrorTerms,
  planeReflection,
  ruleCentre,
  ruleFocus,
  ruleParallel,
  rulePole,
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
        <Formula>{String.raw`R = 2f`}</Formula>. The proof is at the end of this section.
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
        ]}
      />
    </>
  );
}
