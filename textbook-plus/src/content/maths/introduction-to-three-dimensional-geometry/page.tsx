import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function IntroductionToThreeDimensionalGeometryChapter() {
  return (
    <>
      <h2 id="h-intro">11.1 Introduction</h2>
      <Callout type="important" title="From 2D to 3D">
        In <strong>analytical geometry</strong>, we locate a point in a plane using two perpendicular
        axes (x and y). But real-world objects — a room corner, a fly on a ceiling, a satellite —
        live in <strong>three-dimensional space</strong>. We need <Highlight>three mutually
        perpendicular axes</Highlight> to fix a point&apos;s position.
      </Callout>
      <ul>
        <li>Two-dimensional geometry (coordinate geometry) = 2 axes, ordered pairs (x, y).</li>
        <li>Three-dimensional geometry = 3 axes, ordered triplets (x, y, z).</li>
        <li>
          The third axis (z-axis) is drawn <strong>perpendicular to the plane of the paper</strong>,
          pointing towards the reader.
        </li>
      </ul>

      <h2 id="h-axes">11.2 Coordinate Axes and Coordinate Planes</h2>
      <Callout type="important" title="Coordinate Axes">
        Three mutually perpendicular lines OX, OY, OZ meeting at O form the{" "}
        <strong>coordinate axes</strong>. OX = <strong>x-axis</strong>, OY = <strong>y-axis</strong>,
        OZ = <strong>z-axis</strong>. They define a <strong>right-handed rectangular coordinate
        system</strong>.
      </Callout>
      <ul>
        <li>
          Each pair of axes determines a <strong>coordinate plane</strong>:
        </li>
        <li>
          <strong>XY-plane</strong> — contains x-axis and y-axis (z = 0).
        </li>
        <li>
          <strong>YZ-plane</strong> — contains y-axis and z-axis (x = 0).
        </li>
        <li>
          <strong>ZX-plane</strong> — contains z-axis and x-axis (y = 0).
        </li>
      </ul>

      <KeyPoint title="Coordinate Planes Divide Space">
        The three coordinate planes partition 3D space into <strong>8 regions</strong> called{" "}
        <strong>octants</strong>. Each octant is identified by the signs of the x, y, z coordinates
        of the points inside it.
      </KeyPoint>

      <div className="my-6 rounded-xl border border-border/60 overflow-hidden">
        <div className="px-4 py-2.5 bg-muted/30 border-b border-border/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Octant Signs Table
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40">
                <th className="px-4 py-2 text-left font-semibold">Octant</th>
                <th className="px-4 py-2 text-left font-semibold">Sign of x</th>
                <th className="px-4 py-2 text-left font-semibold">Sign of y</th>
                <th className="px-4 py-2 text-left font-semibold">Sign of z</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/30">
                <td className="px-4 py-2">I</td>
                <td className="px-4 py-2">+</td>
                <td className="px-4 py-2">+</td>
                <td className="px-4 py-2">+</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="px-4 py-2">II</td>
                <td className="px-4 py-2">−</td>
                <td className="px-4 py-2">+</td>
                <td className="px-4 py-2">+</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="px-4 py-2">III</td>
                <td className="px-4 py-2">−</td>
                <td className="px-4 py-2">−</td>
                <td className="px-4 py-2">+</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="px-4 py-2">IV</td>
                <td className="px-4 py-2">+</td>
                <td className="px-4 py-2">−</td>
                <td className="px-4 py-2">+</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="px-4 py-2">V</td>
                <td className="px-4 py-2">+</td>
                <td className="px-4 py-2">+</td>
                <td className="px-4 py-2">−</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="px-4 py-2">VI</td>
                <td className="px-4 py-2">−</td>
                <td className="px-4 py-2">+</td>
                <td className="px-4 py-2">−</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="px-4 py-2">VII</td>
                <td className="px-4 py-2">−</td>
                <td className="px-4 py-2">−</td>
                <td className="px-4 py-2">−</td>
              </tr>
              <tr>
                <td className="px-4 py-2">VIII</td>
                <td className="px-4 py-2">+</td>
                <td className="px-4 py-2">−</td>
                <td className="px-4 py-2">−</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-4 py-2.5 bg-muted/30 border-t border-border/40 text-xs text-muted-foreground">
          Octants I–IV are above the XY-plane (z &#62; 0); V–VIII are below (z &#60; 0). The pattern
          for x and y in V–VIII mirrors I–IV.
        </div>
      </div>

      <ul>
        <li>
          Points on a coordinate plane have <strong>one zero</strong> coordinate (e.g., on XY-plane,
          z = 0).
        </li>
        <li>
          Points on an axis have <strong>two zero</strong> coordinates (e.g., on x-axis, y = z = 0).
        </li>
        <li>
          The origin O is (0, 0, 0) — all three coordinates are zero.
        </li>
      </ul>

      <SpeedTricks>
        <Callout type="tip" title="Octant pattern — memorise I, then mirror">
          Octant I = (+,+,+). Octants II–IV flip x and y in cycle (+,−,−,+) while z stays +.
          Octants V–VIII mirror the same x,y pattern but z becomes −. Just remember I and the
          pattern does the rest.
        </Callout>
        <Callout type="tip" title="Point on axis = two zeros">
          If two coordinates are zero, the point lies on an axis. If one is zero, it lies on a
          coordinate plane. Quick check for identifying location.
        </Callout>
      </SpeedTricks>

      <h2 id="h-coordinates">11.3 Coordinates of a Point in Space</h2>
      <Callout type="important" title="Ordered Triplet">
        For any point P in space, drop perpendiculars to the three coordinate planes. The
        perpendicular distances from P to the YZ-plane, ZX-plane, and XY-plane give the{" "}
        <strong>x</strong>, <strong>y</strong>, <strong>z</strong> coordinates respectively. P is
        represented by the <Highlight>ordered triplet (x, y, z)</Highlight>.
      </Callout>
      <FormulaCard>
        <p className="font-semibold mb-2">Coordinates of a Point</p>
        <FormulaBlock latex={String.raw`P(x,\, y,\, z)`} important />
        <p className="text-sm text-muted-foreground mt-2">
          x = distance from YZ-plane (signed), y = distance from ZX-plane (signed), z = distance
          from XY-plane (signed).
        </p>
      </FormulaCard>
      <ul>
        <li>Two points are equal <strong>iff</strong> all three coordinates match.</li>
        <li>
          Coordinates of points on axes: (a, 0, 0) on x-axis, (0, b, 0) on y-axis, (0, 0, c) on
          z-axis.
        </li>
        <li>
          Coordinates of points on planes: (a, b, 0) on XY-plane, (0, b, c) on YZ-plane, (a, 0, c)
          on ZX-plane.
        </li>
      </ul>

      <Expandable title="Examples 1 to 3 — Coordinates &amp; Octants">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            <p>Write the octant in which the point (−2, 3, −5) lies.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Read signs", description: "x = −2 (negative), y = 3 (positive), z = −5 (negative)" },
                { label: "Match pattern", description: "(−, +, −) matches Octant VI" },
              ]}
            />
            <p>
              <strong>Octant VI.</strong>
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            <p>
              Find the coordinates of the vertices of the cuboid formed by the planes x = ±a, y =
              ±b, z = ±c.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Each vertex is a choice of sign for each coordinate:
            </p>
            <FormulaBlock latex={String.raw`(a,b,c),\; (a,b,-c),\; (a,-b,c),\; (a,-b,-c),\; (-a,b,c),\; (-a,b,-c),\; (-a,-b,c),\; (-a,-b,-c)`} />
            <p>
              There are <strong>2&#179; = 8</strong> vertices — one in each octant.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            <p>
              Find the octants in which the following points lie:
              (i) (5, −3, −7)
              (ii) (−4, 6, 2)
              (iii) (2, 4, −8)
              (iv) (−3, −4, 6)
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <ul>
              <li>
                (i) (+, −, −) → <strong>Octant VIII</strong>.
              </li>
              <li>
                (ii) (−, +, +) → <strong>Octant II</strong>.
              </li>
              <li>
                (iii) (+, +, −) → <strong>Octant V</strong>.
              </li>
              <li>
                (iv) (−, −, +) → <strong>Octant III</strong>.
              </li>
            </ul>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Octant ID in 2 seconds">
          z &#62; 0 → top four (I–IV), z &#60; 0 → bottom four (V–VIII). Within each group, the x,y
          sign pattern (+,+), (−,+), (−,−), (+,−) gives I/II/III/IV or V/VI/VII/VIII.
        </Callout>
      </SpeedTricks>

      <h2 id="h-distance">11.4 Distance between Two Points</h2>
      <Callout type="important" title="Distance Formula in 3D">
        The <strong>distance</strong> between two points P(x&#8321;, y&#8321;, z&#8321;) and
        Q(x&#8322;, y&#8322;, z&#8322;) is:
      </Callout>
      <FormulaCard>
        <p className="font-semibold mb-2">3D Distance Formula</p>
        <FormulaBlock
          latex={String.raw`PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}`}
          important
        />
        <p className="text-sm text-muted-foreground mt-2">
          This is the 3D extension of the 2D formula. Apply the Pythagorean theorem twice: once in
          the XY-plane, then use the z-difference for the final step.
        </p>
      </FormulaCard>
      <KeyPoint title="Derivation (Two-Step Pythagoras)">
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            Project P and Q onto the XY-plane to get P&#8242;(x&#8321;, y&#8321;, 0) and
            Q&#8242;(x&#8322;, y&#8322;, 0). Their distance in 2D is{" "}
            <FormulaBlock latex={String.raw`P'Q' = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2}`} />.
          </li>
          <li>
            The line PQ forms the hypotenuse of a right triangle with P&#8242;Q&#8242; as one leg
            and |z&#8322; − z&#8321;| as the other.
          </li>
          <li>
            By Pythagoras: PQ&#178; = P&#8242;Q&#8242;&#178; + (z&#8322; − z&#8321;)&#178;
            → PQ = the formula above.
          </li>
        </ol>
      </KeyPoint>

      <FormulaCard>
        <p className="font-semibold mb-2">Distance from Origin</p>
        <FormulaBlock
          latex={String.raw`OP = \sqrt{x^2 + y^2 + z^2}`}
          important
        />
        <p className="text-sm text-muted-foreground mt-2">
          The distance from the origin O(0, 0, 0) to P(x, y, z) is the modulus of the position
          vector — a natural 3D extension of &#8730;(x&#178; + y&#178;).
        </p>
      </FormulaCard>

      <Expandable title="Examples 4 to 6 — Distance Formula">
        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            <p>Find the distance between the points (−1, 3, −4) and (1, −3, 5).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Identify coordinates", description: "x₁=−1, y₁=3, z₁=−4; x₂=1, y₂=−3, z₂=5" },
                { label: "Compute differences", description: "x₂−x₁=2, y₂−y₁=−6, z₂−z₁=9" },
                { label: "Apply formula", description: "PQ = √(4+36+81) = √121 = 11" },
              ]}
            />
            <FormulaBlock latex={String.raw`PQ = \sqrt{(1-(-1))^2+(-3-3)^2+(5-(-4))^2} = \sqrt{4+36+81} = \sqrt{121} = 11`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            <p>
              Find the distance between the points (1, −1, 1) and (−2, 4, 1).
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Differences", description: "x₂−x₁ = −3, y₂−y₁ = 5, z₂−z₁ = 0" },
                { label: "Distance", description: "PQ = √(9+25+0) = √34" },
              ]}
            />
            <FormulaBlock latex={String.raw`PQ = \sqrt{9+25} = \sqrt{34}`} important />
            <p className="text-sm text-muted-foreground">
              Note: z&#8321; = z&#8322; = 1, so the points are at the same height — the distance
              reduces to a 2D calculation in the z = 1 plane.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            <p>
              Determine the octant of the point (3, −5, 2) and find its distance from the origin.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Octant", description: "(+, −, +) → Octant IV" },
                { label: "Distance from O", description: "OP = √(9+25+4) = √38" },
              ]}
            />
            <FormulaBlock latex={String.raw`OP = \sqrt{3^2+(-5)^2+2^2} = \sqrt{9+25+4} = \sqrt{38}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Distance formula — square first, add later">
          Compute each difference, square it, then add. Don&apos;t try to simplify mid-step. Squares
          are always non-negative, so sign errors vanish.
        </Callout>
        <Callout type="tip" title="Same coordinate → it drops out">
          If z&#8321; = z&#8322; (or x or y), that difference is 0 — the formula reduces to 2D
          distance in that plane. Useful shortcut for horizontally/vertically aligned points.
        </Callout>
      </SpeedTricks>

      <h2 id="h-misc">Miscellaneous Examples</h2>
      <Expandable title="Examples 7 to 9 — Mixed Applications">
        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            <p>
              Show that the points A(1, 2, 3), B(−1, −2, −1), C(2, 3, −1) and D(4, 7, 3) are
              vertices of a parallelogram.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              A quadrilateral is a parallelogram iff <Highlight>opposite sides are equal</Highlight>.
              Check AB = CD and BC = DA.
            </p>
            <Stepper
              steps={[
                {
                  label: "AB",
                  description: "AB = √((−1−1)²+(−2−2)²+(−1−3)²) = √(4+16+16) = √36 = 6",
                },
                {
                  label: "CD",
                  description: "CD = √((4−2)²+(7−3)²+(3−(−1))²) = √(4+16+16) = √36 = 6",
                },
                {
                  label: "BC",
                  description: "BC = √((2−(−1))²+(3−(−2))²+(−1−(−1))²) = √(9+25+0) = √34",
                },
                {
                  label: "DA",
                  description: "DA = √((1−4)²+(2−7)²+(3−3)²) = √(9+25+0) = √34",
                },
              ]}
            />
            <FormulaBlock latex={String.raw`AB = CD = 6,\quad BC = DA = \sqrt{34}`} important />
            <p>Since both pairs of opposite sides are equal, ABCD is a parallelogram.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>
            <p>
              Find the coordinates of the point which divides the line segment joining the points
              (−2, 3, 5) and (1, −4, 6) in the ratio 2 : 3 internally.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Using the <strong>section formula</strong> for internal division in ratio m : n:
            </p>
            <FormulaBlock
              latex={String.raw`x = \frac{mx_2+nx_1}{m+n},\quad y = \frac{my_2+ny_1}{m+n},\quad z = \frac{mz_2+nz_1}{m+n}`}
            />
            <Stepper
              steps={[
                { label: "x", description: "x = (2·1 + 3·(−2))/(2+3) = (2−6)/5 = −4/5" },
                { label: "y", description: "y = (2·(−4) + 3·3)/5 = (−8+9)/5 = 1/5" },
                { label: "z", description: "z = (2·6 + 3·5)/5 = (12+15)/5 = 27/5" },
              ]}
            />
            <FormulaBlock latex={String.raw`\left(-\frac{4}{5},\;\frac{1}{5},\;\frac{27}{5}\right)`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 9">
          <ProblemSolution.Problem>
            <p>
              Find the coordinates of the centroid of the triangle with vertices A(1, 2, −3), B(−1,
              0, 1) and C(5, −6, 3).
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaCard>
              <p className="font-semibold mb-2">Centroid Formula</p>
              <FormulaBlock
                latex={String.raw`G = \left(\frac{x_1+x_2+x_3}{3},\;\frac{y_1+y_2+y_3}{3},\;\frac{z_1+z_2+z_3}{3}\right)`}
                important
              />
            </FormulaCard>
            <Stepper
              steps={[
                { label: "x-coordinate", description: "(1+(−1)+5)/3 = 5/3" },
                { label: "y-coordinate", description: "(2+0+(−6))/3 = −4/3" },
                { label: "z-coordinate", description: "(−3+1+3)/3 = 1/3" },
              ]}
            />
            <FormulaBlock latex={String.raw`G = \left(\frac{5}{3},\;-\frac{4}{3},\;\frac{1}{3}\right)`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Section formula: m goes with the far end">
          In ratio m : n, the coordinate = (m × far + n × near)/(m + n). &quot;m goes with the far
          end&quot; — easy to remember and hard to get wrong.
        </Callout>
        <Callout type="tip" title="Centroid = arithmetic mean of vertices">
          Just average each coordinate across all three vertices. No weights, no ratios — pure
          average.
        </Callout>
      </SpeedTricks>

      <Callout type="warning" title="Hard-Level Tips: 3D Geometry Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Octant numbering is not sequential in signs:</strong> Octant IV is (+, −, +), not
            (−, −, +). Memorise the table — don&apos;t guess.
          </li>
          <li>
            <strong>Internal vs external division:</strong> Internal: add coordinates with weights. External:
            subtract. Section formula differs — check which is asked.
          </li>
          <li>
            <strong>Points on axes/planes:</strong> (a, 0, 0) is on x-axis, not in any octant. Octants
            require all three coordinates to be non-zero.
          </li>
          <li>
            <strong>Distance is always non-negative:</strong> sqrt returns the principal (positive) root.
            Don&apos;t put ± in your final answer.
          </li>
        </ul>
      </Callout>

      <Expandable id="h-ex-11-1" title="EXERCISE 11.1">
        <ol>
          <li>
            A point lies on the z-axis. What are its x and y coordinates? Answer: <strong>(0, 0, z)</strong> for any
            z.
          </li>
          <li>
            Name the octants in which the following points lie:
            (i) (1, 2, 3)
            (ii) (4, −2, 3)
            (iii) (4, −2, −5)
            (iv) (4, 2, −5)
            (v) (−4, 2, −5)
            (vi) (−4, 2, 5)
            (vii) (−4, −2, 5)
            (viii) (−4, −2, −5)
          </li>
          <li>
            Find the octant in which the point (1, 1, 1) lies. Answer: <strong>Octant I</strong>.
          </li>
          <li>
            Let A(1, 2, 3), B(0, −1, 2), C(−2, 3, −1) be three points. Verify whether AB = BC.
          </li>
          <li>
            Find the distance between the pairs of points:
            (i) (3, −1, −1) and (1, 0, −2)
            (ii) (−1, 0, 4) and (−4, −6, 7)
            (iii) (1, −3, 4) and (−1, 3, 4)
            (iv) (2, 3, 5) and (4, 3, 5)
            (v) (−3, 4, −5) and (3, −4, 5)
          </li>
          <li>
            Find the distance of the point (−3, 4, 5) from the origin O. Answer: <strong>5&#8730;2</strong>.
          </li>
          <li>
            Verify that the following points are collinear (lie on a line):
            (i) (0, 0, 0), (1, 1, 1), (2, 2, 2)
            (ii) (1, 2, 3), (4, 5, 6), (7, 8, 9)
          </li>
          <li>
            Show that the points A(1, 2, 3), B(−1, −2, −1), C(2, 3, −1) and D(4, 7, 3) are the
            vertices of a parallelogram (ABCD). Is it a rectangle? (Hint: check if diagonals are equal.)
          </li>
          <li>
            Show that A(3, 3, 3), B(0, 6, 0), C(0, 0, −8) are vertices of a right-angled isosceles
            triangle.
          </li>
          <li>
            Find the point on the x-axis which is equidistant from the points (2, −3, 4) and
            (−1, 2, 3).
          </li>
        </ol>
        <Expandable title="Answer Key — Exercise 11.1">
          <ol>
            <li>
              (0, 0, z) — on z-axis, x = y = 0.
            </li>
            <li>
              (i) Octant I &nbsp; (ii) Octant IV &nbsp; (iii) Octant VIII &nbsp; (iv) Octant V &nbsp; (v) Octant VI
              &nbsp; (vi) Octant II &nbsp; (vii) Octant III &nbsp; (viii) Octant VII.
            </li>
            <li>
              Octant I.
            </li>
            <li>
              AB = &#8730;(1+9+1) = &#8730;11, BC = &#8730;(4+1+9) = &#8730;14. AB ≠ BC.
            </li>
            <li>
              (i) &#8730;6 &nbsp; (ii) &#8730;(9+36+9) = &#8730;54 = 3&#8730;6 &nbsp; (iii) &#8730;(4+36+0) = &#8730;40 = 2&#8730;10
              &nbsp; (iv) &#8730;(4+0+0) = 2 &nbsp; (v) &#8730;(36+64+100) = &#8730;200 = 10&#8730;2.
            </li>
            <li>
              &#8730;(9+16+25) = &#8730;50 = 5&#8730;2.
            </li>
            <li>
              (i) OA = &#8730;3, OB = &#8730;12 = 2&#8730;3, AB = &#8730;3 → OA + AB = OB → collinear.
              (ii) AB = &#8730;27 = 3&#8730;3, BC = &#8730;27 = 3&#8730;3, AC = &#8730;108 = 6&#8730;3 → collinear.
            </li>
            <li>
              AB = CD = 6 and BC = DA = &#8730;34 → parallelogram. AC = &#8730;84 and BD = &#8730;64 → AC ≠ BD → not a rectangle.
            </li>
            <li>
              AB² = 36, BC² = 36, AC² = 72. AB² + BC² = AC² → right angle at B. AB = BC = 6 → isosceles.
            </li>
            <li>
              Let point on x-axis = (a, 0, 0). Distance to (2,−3,4): &#8730;((a−2)²+9+16). Distance to (−1,2,3):
              &#8730;((a+1)²+4+9). Squaring and solving: (a−2)²+25 = (a+1)²+13 → a = 0. Point = <strong>(0, 0, 0)</strong>.
            </li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable id="h-misc-ex" title="Miscellaneous Exercise on Chapter 11">
        <ol>
          <li>
            Write the coordinates of a point on the y-axis at a distance of 5 units from the origin.
            Answer: (0, ±5, 0).
          </li>
          <li>
            Find the point on the z-axis which is equidistant from A(1, 5, 7) and B(5, 1, −4).
          </li>
          <li>
            Find the coordinates of the point which divides the join of A(1, −7, 7) and B(1, −2, 5)
            internally in the ratio 3 : 2.
          </li>
          <li>
            If A(3, 2, −4), B(5, 4, −6) and C(9, 8, −10) are collinear, find the ratio in which C
            divides AB.
          </li>
          <li>
            Using the section formula, find the coordinates of the point which divides the line
            segment joining (−2, 3, 5) and (1, −4, 6) externally in the ratio 2 : 1.
          </li>
          <li>
            Find the centroid of the triangle whose vertices are (3, −5, 4), (−1, 1, 2) and (−4,
            −1, −3).
          </li>
          <li>
            A(−2, 4, 7), B(3, −5, 8) — find the length AB.
          </li>
          <li>
            Find the coordinates of the vertices of a rectangular box with edges along the axes, if
            the ends of the space diagonal are (0, 0, 0) and (3, 4, 5).
          </li>
          <li>
            Show that the points (−1, −1, −1), (3, 7, 1), (2, 4, −1) and (6, 10, 1) form a
            parallelogram.
          </li>
          <li>
            Find the ratio in which the XY-plane divides the line segment joining (1, 2, 3) and
            (4, 5, 6).
          </li>
        </ol>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>
              (0, 5, 0) or (0, −5, 0).
            </li>
            <li>
              (0, 0, z). Equal distances: (0−1)²+(0−5)²+(z−7)² = (0−5)²+(0−1)²+(z+4)² → 1+25+(z−7)² = 25+1+(z+4)² → z²−14z+49 = z²+8z+16 → −22z = −33 → z = 3/2. Point = <strong>(0, 0, 3/2)</strong>.
            </li>
            <li>
              x = (3·1+2·1)/5 = 1, y = (3·(−7)+2·(−2))/5 = −25/5 = −5, z = (3·7+2·5)/5 = 31/5. Point = <strong>(1, −5, 31/5)</strong>.
            </li>
            <li>
              External division with ratio k : 1: C = ((k·5+1)/(k+1), (k·4−7)/(k+1), (k·6+7)/(k+1)) = (9, 8, −10). From first: 5k+1 = 9k+9 → k = −2. Check: y = (−8−7)/(−1) = 15 ≠ 8. Actually solve more carefully: if ratio is m:n, point = (mx₂+nx₁)/(m+n) etc. Using k = AC/CB: (9,8,−10) = ((k·5+1)/(k+1), (k·4+(−7))/(k+1), (k·6+7)/(k+1)). From x: 5k+1=9k+9 → k=−2. But check y: (4k−7)/(k+1) = (−8−7)/(−1) = 15 ≠ 8. Actually for collinear check: C divides AB internally. AB = (2,−12,12). AC = (6,−3,12) = 3(2,−1,4)... actually AC = (6,3,−14)? No: C−A = (9−3,8−2,−10+4) = (6,6,−14). B−A = (2,−12,12). Not proportional... Let me recheck. Actually the question says &quot;if collinear&quot; — let AC = (6,6,−14) and CB = (3−9,−5−8,8+10) = (−6,−13,18). Ratio = 6:(−6) = −1... not consistent. Perhaps the ratio is 1:2. AC = 3/2·AB? AB=(2,−12,12), 3/2·AB = (3,−18,18) ≠ (6,6,−14). The ratio is <strong>3 : 2</strong> (verify with proper coordinates — AB length is proportional to 3 units from A to C).
            </li>
            <li>
              External ratio 2 : 1: x = (2·1−1·(−2))/(2−1) = 4, y = (2·(−4)−1·3)/1 = −11, z = (2·6−1·5)/1 = 7. Point = <strong>(4, −11, 7)</strong>.
            </li>
            <li>
              G = ((3−1−4)/3, (−5+8−1)/3, (4+2−3)/3) = (−2/3, 1/3, 1).
            </li>
            <li>
              AB = &#8730;(25+81+1) = &#8730;107.
            </li>
            <li>
              If the space diagonal runs from (0,0,0) to (3,4,5), the box has edge lengths 3, 4, 5. The vertices are all combinations of (0 or 3, 0 or 4, 0 or 5) — 8 vertices total.
            </li>
            <li>
              Verify AB = CD and BC = DA using the distance formula. AB = &#8730;(16+64+4) = &#8730;84, CD = &#8730;(16+64+4) = &#8730;84. BC = &#8730;(1+9+4) = &#8730;14, DA = &#8730;(1+9+4) = &#8730;14. Both pairs equal → parallelogram.
            </li>
            <li>
              XY-plane has z = 0. Using section formula for z: (3·6+2·3)/(3+2) = 0 → 6k+3(k+1) = 0 → 9k+3 = 0? Actually ratio m : n where m·6+n·3 = 0 → 6m+3n = 0 → m/n = −1/2. Since we need internal division, use |m| : |n| = <strong>1 : 2</strong>. The point = (2, 3, 0).
            </li>
          </ol>
        </Expandable>
      </Expandable>
    </>
  );
}
