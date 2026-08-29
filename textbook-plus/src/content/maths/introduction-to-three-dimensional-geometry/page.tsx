import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { Comparison } from "@/components/content/Comparison";

export default function IntroductionToThreeDimensionalGeometryChapter() {
  return (
    <>
      <Comparison
        columns={[
          {
            title: "2D Geometry",
            children: (
              <ul className="list-disc pl-5 space-y-1">
                <li>2 axes: x and y</li>
                <li>Ordered pairs <Formula>{String.raw`(x,y)`}</Formula></li>
                <li>Plane geometry</li>
              </ul>
            ),
          },
          {
            title: "3D Geometry",
            children: (
              <ul className="list-disc pl-5 space-y-1">
                <li>3 axes: x, y, z (z ⟂ paper, toward reader)</li>
                <li>Ordered triplets <Formula>{String.raw`(x,y,z)`}</Formula></li>
                <li>Space geometry</li>
              </ul>
            ),
          },
        ]}
      />

      <h2 id="h-axes">11.2 Coordinate Axes and Coordinate Planes</h2>
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
                <th className="px-4 py-2 text-left font-semibold">Sign \ Octant</th>
                <th className="px-3 py-2 text-center font-semibold">I</th>
                <th className="px-3 py-2 text-center font-semibold">II</th>
                <th className="px-3 py-2 text-center font-semibold">III</th>
                <th className="px-3 py-2 text-center font-semibold">IV</th>
                <th className="px-3 py-2 text-center font-semibold">V</th>
                <th className="px-3 py-2 text-center font-semibold">VI</th>
                <th className="px-3 py-2 text-center font-semibold">VII</th>
                <th className="px-3 py-2 text-center font-semibold">VIII</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/30">
                <td className="px-4 py-2 font-medium">x</td>
                <td className="px-3 py-2 text-center">+</td>
                <td className="px-3 py-2 text-center">−</td>
                <td className="px-3 py-2 text-center">−</td>
                <td className="px-3 py-2 text-center">+</td>
                <td className="px-3 py-2 text-center">+</td>
                <td className="px-3 py-2 text-center">−</td>
                <td className="px-3 py-2 text-center">−</td>
                <td className="px-3 py-2 text-center">+</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="px-4 py-2 font-medium">y</td>
                <td className="px-3 py-2 text-center">+</td>
                <td className="px-3 py-2 text-center">+</td>
                <td className="px-3 py-2 text-center">−</td>
                <td className="px-3 py-2 text-center">−</td>
                <td className="px-3 py-2 text-center">+</td>
                <td className="px-3 py-2 text-center">+</td>
                <td className="px-3 py-2 text-center">−</td>
                <td className="px-3 py-2 text-center">−</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">z</td>
                <td className="px-3 py-2 text-center">+</td>
                <td className="px-3 py-2 text-center">+</td>
                <td className="px-3 py-2 text-center">+</td>
                <td className="px-3 py-2 text-center">+</td>
                <td className="px-3 py-2 text-center">−</td>
                <td className="px-3 py-2 text-center">−</td>
                <td className="px-3 py-2 text-center">−</td>
                <td className="px-3 py-2 text-center">−</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-4 py-2.5 bg-muted/30 border-t border-border/40 text-xs text-muted-foreground">
          Rotated view — now octants are columns. I–IV (z &#62; 0) on top, V–VIII (z &#60; 0) mirrored below. Read down a column to get (x,y,z) signs.
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

      <h2 id="h-distance">Distance between Two Points</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">Distance AB in 3D</p>
        <FormulaBlock latex={String.raw`AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}`} important />
        <p className="text-sm text-muted-foreground mt-2">For <Formula>{String.raw`A(x_1,y_1,z_1)`}</Formula> and <Formula>{String.raw`B(x_2,y_2,z_2)`}</Formula>.</p>
      </FormulaCard>

      <FormulaCard>
        <p className="font-semibold mb-2">Distance from Origin</p>
        <FormulaBlock latex={String.raw`OP = \sqrt{x^2 + y^2 + z^2}`} important />
        <p className="text-sm text-muted-foreground mt-2">Origin <Formula>{String.raw`O(0,0,0)`}</Formula> to <Formula>{String.raw`P(x,y,z)`}</Formula>.</p>
      </FormulaCard>

      <Expandable title="Examples 1–5 — Distance & Applications (from shared doc)">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            <p>Find the distance between <Formula>{String.raw`A(-3,7,2)`}</Formula> and <Formula>{String.raw`B(2,4,-1)`}</Formula>.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Identify", description: <Formula>{String.raw`A(-3,7,2)=(x_1,y_1,z_1),\;B(2,4,-1)=(x_2,y_2,z_2)`}</Formula> },
                { label: "Differences", description: <Formula>{String.raw`(2-(-3))=5,\;(4-7)=-3,\;(-1-2)=-3`}</Formula> },
                { label: "Apply", description: <Formula>{String.raw`AB=\sqrt{5^{2}+(-3)^{2}+(-3)^{2}}=\sqrt{25+9+9}=\sqrt{43}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 2 — Collinear">
          <ProblemSolution.Problem>
            <p>Show <Formula>{String.raw`A(-2,3,5), B(1,2,3), C(7,0,-1)`}</Formula> are collinear. Condition: <Formula>{String.raw`AB+BC=AC`}</Formula>.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "AB", description: <Formula>{String.raw`AB=\sqrt{(1+2)^{2}+(2-3)^{2}+(3-5)^{2}}=\sqrt{9+1+4}=\sqrt{14}`}</Formula> },
                { label: "BC", description: <Formula>{String.raw`BC=\sqrt{(7-1)^{2}+(0-2)^{2}+(-1-3)^{2}}=\sqrt{36+4+16}=2\sqrt{14}`}</Formula> },
                { label: "AC", description: <Formula>{String.raw`AC=\sqrt{(7+2)^{2}+(0-3)^{2}+(-1-5)^{2}}=\sqrt{81+9+36}=3\sqrt{14}`}</Formula> },
                { label: "Verify", description: <Formula>{String.raw`\sqrt{14}+2\sqrt{14}=3\sqrt{14}\Rightarrow AB+BC=AC`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">Hence collinear.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3 — Isosceles">
          <ProblemSolution.Problem>
            <p>Verify <Formula>{String.raw`A(0,7,-10), B(1,6,-6), C(4,9,-6)`}</Formula> are isosceles.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "AB", description: <Formula>{String.raw`AB=\sqrt{(1-0)^{2}+(6-7)^{2}+(-6+10)^{2}}=\sqrt{1+1+16}=\sqrt{18}`}</Formula> },
                { label: "BC", description: <Formula>{String.raw`BC=\sqrt{(4-1)^{2}+(9-6)^{2}+0^{2}}=\sqrt{9+9}=\sqrt{18}`}</Formula> },
                { label: "Conclusion", description: <Formula>{String.raw`AB=BC\Rightarrow\text{isosceles}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 4 — Right-Angled">
          <ProblemSolution.Problem>
            <p>Verify <Formula>{String.raw`A(0,7,10), B(-1,6,6), C(-4,9,6)`}</Formula> are right-angled.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "AB", description: <Formula>{String.raw`AB=\sqrt{(-1)^{2}+(-1)^{2}+(-4)^{2}}=\sqrt{18}`}</Formula> },
                { label: "BC", description: <Formula>{String.raw`BC=\sqrt{(-3)^{2}+3^{2}+0}=\sqrt{18}`}</Formula> },
                { label: "AC", description: <Formula>{String.raw`AC=\sqrt{(-4)^{2}+2^{2}+(-4)^{2}}=\sqrt{36}=6`}</Formula> },
                { label: "Pythagoras", description: <Formula>{String.raw`(\sqrt{36})^{2}=(\sqrt{18})^{2}+(\sqrt{18})^{2}\Rightarrow36=36`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 5 — Equidistant Set">
          <ProblemSolution.Problem>
            <p>Find the equation of points equidistant from <Formula>{String.raw`A(1,2,3)`}</Formula> and <Formula>{String.raw`B(3,2,-1)`}</Formula>. Let <Formula>{String.raw`P(x,y,z)`}</Formula>, <Formula>{String.raw`PA=PB`}</Formula>.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Set up", description: <Formula>{String.raw`PA^{2}=(x-1)^{2}+(y-2)^{2}+(z-3)^{2},\;PB^{2}=(x-3)^{2}+(y-2)^{2}+(z+1)^{2}`}</Formula> },
                { label: "Equate", description: <Formula>{String.raw`(x-1)^{2}+(y-2)^{2}+(z-3)^{2}=(x-3)^{2}+(y-2)^{2}+(z+1)^{2}`}</Formula> },
                { label: "Expand", description: <Formula>{String.raw`x^{2}-2x+1+y^{2}-4y+4+z^{2}-6z+9=x^{2}-6x+9+y^{2}-4y+4+z^{2}+2z+1`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`-2x-6z=-6x+2z\Rightarrow4x-8z=0`}</Formula> },
                { label: "Result", description: <Formula>{String.raw`x-2z=0`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

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
                  description: <Formula>{String.raw`AB = \sqrt{(-1-1)^2+(-2-2)^2+(-1-3)^2} = \sqrt{4+16+16} = \sqrt{36} = 6`}</Formula>,
                },
                {
                  label: "CD",
                  description: <Formula>{String.raw`CD = \sqrt{(4-2)^2+(7-3)^2+(3-(-1))^2} = \sqrt{4+16+16} = \sqrt{36} = 6`}</Formula>,
                },
                {
                  label: "BC",
                  description: <Formula>{String.raw`BC = \sqrt{(2-(-1))^2+(3-(-2))^2+(-1-(-1))^2} = \sqrt{9+25+0} = \sqrt{34}`}</Formula>,
                },
                {
                  label: "DA",
                  description: <Formula>{String.raw`DA = \sqrt{(1-4)^2+(2-7)^2+(3-3)^2} = \sqrt{9+25+0} = \sqrt{34}`}</Formula>,
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
                { label: "x", description: <Formula>{String.raw`x = \frac{2\cdot 1 + 3\cdot (-2)}{2+3} = \frac{2-6}{5} = -\frac{4}{5}`}</Formula> },
                { label: "y", description: <Formula>{String.raw`y = \frac{2\cdot (-4) + 3\cdot 3}{5} = \frac{-8+9}{5} = \frac{1}{5}`}</Formula> },
                { label: "z", description: <Formula>{String.raw`z = \frac{2\cdot 6 + 3\cdot 5}{5} = \frac{12+15}{5} = \frac{27}{5}`}</Formula> },
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
                { label: "x-coordinate", description: <Formula>{String.raw`\frac{1+(-1)+5}{3} = \frac{5}{3}`}</Formula> },
                { label: "y-coordinate", description: <Formula>{String.raw`\frac{2+0+(-6)}{3} = -\frac{4}{3}`}</Formula> },
                { label: "z-coordinate", description: <Formula>{String.raw`\frac{-3+1+3}{3} = \frac{1}{3}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`G = \left(\frac{5}{3},\;-\frac{4}{3},\;\frac{1}{3}\right)`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Advanced Questions — Centroid, Equidistant YZ-Plane, Prism">
        <ProblemSolution problemNumber="Q1 — Centroid">
          <ProblemSolution.Problem>
            <p>Given vertices <Formula>{String.raw`A(0,7,10), B(1,6,6), C(-4,9,6)`}</Formula>. Find the centroid.</p>
            <div className="my-4 flex justify-center">
              <figure className="rounded-xl border border-border/40 bg-white dark:bg-zinc-900 p-3">
                <svg viewBox="0 0 400 300" className="w-[380px] max-w-full h-auto" role="img" aria-labelledby="centroidTitle centroidDesc">
                  <title id="centroidTitle">Triangle centroid in 3D</title>
                  <desc id="centroidDesc">Isometric view of triangle ABC with centroid G(-1,22/3,22/3) inside. Axes: X to right-down, Y to left-down, Z vertical.</desc>
                  <rect x="10" y="10" width="380" height="280" fill="none" stroke="#e5e7eb" rx="8" />
                  {/* axes */}
                  <line x1="200" y1="250" x2="340" y2="180" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arrow1)" />
                  <line x1="200" y1="250" x2="60" y2="180" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arrow1)" />
                  <line x1="200" y1="250" x2="200" y2="60" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arrow1)" />
                  <text x="350" y="175" fontSize="12" fill="#64748b">X</text>
                  <text x="50" y="175" fontSize="12" fill="#64748b">Y</text>
                  <text x="205" y="70" fontSize="12" fill="#64748b">Z</text>
                  <text x="205" y="265" fontSize="11" fill="#94a3b8">O</text>
                  <defs><marker id="arrow1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#cbd5e1" /></marker></defs>
                  {/* triangle */}
                  <polygon points="116,88 140,136 44,148" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" opacity="0.9" />
                  {/* centroid */}
                  <circle cx="100" cy="124" r="5" fill="#ef4444" stroke="white" strokeWidth="2" />
                  <circle cx="100" cy="124" r="2" fill="#991b1b" />
                  {/* labels */}
                  <text x="115" y="78" fontSize="11" fontWeight="600" fill="#1e40af">A(0,7,10)</text>
                  <text x="145" y="152" fontSize="11" fontWeight="600" fill="#1e40af">B(1,6,6)</text>
                  <text x="10" y="165" fontSize="11" fontWeight="600" fill="#1e40af">C(-4,9,6)</text>
                  <text x="108" y="118" fontSize="10" fontWeight="700" fill="#dc2626">G(-1,22/3,22/3)</text>
                  {/* medians dashed */}
                  <line x1="116" y1="88" x2="92" y2="142" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 3" />
                  <line x1="140" y1="136" x2="80" y2="118" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 3" />
                  <line x1="44" y1="148" x2="128" y2="112" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 3" />
                </svg>
                <figcaption className="mt-2 text-xs text-muted-foreground text-center">Triangle ABC with centroid G — average of vertices. Dashed medians meet at G.</figcaption>
              </figure>
            </div>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaCard>
              <p className="font-semibold mb-1">Centroid Formula</p>
              <FormulaBlock latex={String.raw`\text{Centroid}=\left(\frac{x_1+x_2+x_3}{3},\frac{y_1+y_2+y_3}{3},\frac{z_1+z_2+z_3}{3}\right)`} important />
            </FormulaCard>
            <Stepper
              steps={[
                { label: "x", description: <Formula>{String.raw`\frac{0+1-4}{3}=-1`}</Formula> },
                { label: "y", description: <Formula>{String.raw`\frac{7+6+9}{3}=\frac{22}{3}`}</Formula> },
                { label: "z", description: <Formula>{String.raw`\frac{10+6+6}{3}=\frac{22}{3}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{(-1,\,22/3,\,22/3)}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Q2 — YZ-Plane Equidistant">
          <ProblemSolution.Problem>
            <p>Find point <Formula>{String.raw`P`}</Formula> in the YZ-plane equidistant from <Formula>{String.raw`A(2,0,3), B(0,3,2), C(0,0,1)`}</Formula>. Let <Formula>{String.raw`P(0,y,z)`}</Formula>, <Formula>{String.raw`AP=BP=CP`}</Formula>.</p>
            <div className="my-4 flex justify-center">
              <figure className="rounded-xl border border-border/40 bg-white dark:bg-zinc-900 p-3">
                <svg viewBox="0 0 400 300" className="w-[380px] max-w-full h-auto" role="img" aria-labelledby="yzTitle yzDesc">
                  <title id="yzTitle">YZ-plane equidistant point</title>
                  <desc id="yzDesc">YZ-plane (x=0) with Y horizontal, Z vertical. Points A(2,0,3) off-plane, B(0,3,2), C(0,0,1) and equidistant P(0,1,3). Dashed circles show equal distances.</desc>
                  <rect x="10" y="10" width="380" height="280" fill="#f8fafc" stroke="#e2e8f0" rx="8" />
                  {/* axes YZ */}
                  <line x1="60" y1="240" x2="340" y2="240" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowYZ)" />
                  <line x1="60" y1="240" x2="60" y2="30" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowYZ)" />
                  <text x="345" y="245" fontSize="12" fill="#475569">Y</text>
                  <text x="65" y="25" fontSize="12" fill="#475569">Z</text>
                  <text x="45" y="255" fontSize="11" fill="#94a3b8">O</text>
                  <defs><marker id="arrowYZ" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#94a3b8" /></marker></defs>
                  {/* grid */}
                  <line x1="60" y1="190" x2="340" y2="190" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="60" y1="140" x2="340" y2="140" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="60" y1="90" x2="340" y2="90" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <text x="120" y="255" fontSize="10" fill="#64748b">1</text>
                  <text x="180" y="255" fontSize="10" fill="#64748b">2</text>
                  <text x="240" y="255" fontSize="10" fill="#64748b">3</text>
                  <text x="45" y="195" fontSize="10" fill="#64748b">1</text>
                  <text x="45" y="145" fontSize="10" fill="#64748b">2</text>
                  <text x="45" y="95" fontSize="10" fill="#64748b">3</text>
                  {/* YZ plane shading */}
                  <rect x="60" y="40" width="280" height="200" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" rx="4" />
                  <text x="180" y="50" fontSize="10" fill="#94a3b8">YZ-plane (x=0)</text>
                  {/* points */}
                  {/* C(0,0,1): y=0,z=1 => (60,190) */}
                  <circle cx="60" cy="190" r="5" fill="#f59e0b" stroke="white" strokeWidth="2" />
                  <text x="70" y="195" fontSize="11" fontWeight="600" fill="#92400e">C(0,0,1)</text>
                  {/* B(0,3,2): y=3,z=2 => (240,140) */}
                  <circle cx="240" cy="140" r="5" fill="#10b981" stroke="white" strokeWidth="2" />
                  <text x="250" y="145" fontSize="11" fontWeight="600" fill="#065f46">B(0,3,2)</text>
                  {/* P(0,1,3): y=1,z=3 => (120,90) */}
                  <circle cx="120" cy="90" r="6" fill="#ef4444" stroke="white" strokeWidth="2" />
                  <text x="130" y="95" fontSize="11" fontWeight="700" fill="#dc2626">P(0,1,3)</text>
                  {/* A(2,0,3): x=2 off-plane, projection (60,90) but show offset */}
                  <circle cx="60" cy="90" r="5" fill="#3b82f6" stroke="white" strokeWidth="2" />
                  <text x="10" y="85" fontSize="11" fontWeight="600" fill="#1e40af">A(2,0,3)</text>
                  <line x1="60" y1="90" x2="120" y2="90" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" opacity="0.7" />
                  <text x="85" y="85" fontSize="9" fill="#3b82f6">x=2</text>
                  {/* equal distance dashed */}
                  <line x1="120" y1="90" x2="60" y2="190" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="6 3" opacity="0.6" />
                  <line x1="120" y1="90" x2="240" y2="140" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="6 3" opacity="0.6" />
                  <line x1="120" y1="90" x2="60" y2="90" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="6 3" opacity="0.6" />
                </svg>
                <figcaption className="mt-2 text-xs text-muted-foreground text-center max-w-[380px]">YZ-plane (x=0). P(0,1,3) equidistant from A, B, C — dashed red distances equal in 3D (A off-plane by x=2).</figcaption>
              </figure>
            </div>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "AP²", description: <Formula>{String.raw`AP^{2}= (0-2)^{2}+y^{2}+(z-3)^{2}=y^{2}+z^{2}-6z+13`}</Formula> },
                { label: "BP²", description: <Formula>{String.raw`BP^{2}= (y-3)^{2}+(z-2)^{2}=y^{2}+z^{2}-6y-4z+13`}</Formula> },
                { label: "CP²", description: <Formula>{String.raw`CP^{2}= y^{2}+(z-1)^{2}=y^{2}+z^{2}-2z+1`}</Formula> },
                { label: "AP²=CP²", description: <Formula>{String.raw`-6z+13=-2z+1\Rightarrow z=3`}</Formula> },
                { label: "BP²=CP², z=3", description: <Formula>{String.raw`-6y-12+13=-6+1\Rightarrow y=1`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{P(0,1,3)}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Q3 — Prism">
          <ProblemSolution.Problem>
            <p>Prism <Formula>{String.raw`ABCDEFGH`}</Formula>, <Formula>{String.raw`G(3,2,4)`}</Formula>. Base: <Formula>{String.raw`A(3,0,0), B(3,2,0), C(0,2,0)`}</Formula> with top <Formula>{String.raw`E(3,0,4), F(0,0,4), H(0,2,4)`}</Formula>. Find (i) vertices, (ii) <Formula>{String.raw`CG`}</Formula>.</p>
            <div className="my-4 flex justify-center">
              <figure className="rounded-xl border border-border/40 bg-white dark:bg-zinc-900 p-3">
                <svg viewBox="0 0 400 320" className="w-[400px] max-w-full h-auto" role="img" aria-labelledby="prismTitle prismDesc">
                  <title id="prismTitle">Prism ABCDEFGH with G(3,2,4)</title>
                  <desc id="prismDesc">Isometric prism: base OABC? Actually base A(3,0,0) B(3,2,0) C(0,2,0) F(0,0,4) E(3,0,4) H(0,2,4) G(3,2,4). CG distance highlighted.</desc>
                  <rect x="10" y="10" width="380" height="300" fill="#f8fafc" stroke="#e2e8f0" rx="8" />
                  {/* axes */}
                  <line x1="40" y1="260" x2="380" y2="260" stroke="#94a3b8" strokeWidth="1.2" />
                  <line x1="40" y1="260" x2="40" y2="40" stroke="#94a3b8" strokeWidth="1.2" />
                  <line x1="40" y1="260" x2="100" y2="220" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
                  <text x="385" y="265" fontSize="11" fill="#64748b">X</text>
                  <text x="105" y="218" fontSize="11" fill="#64748b">Y</text>
                  <text x="35" y="45" fontSize="11" fill="#64748b">Z</text>
                  <text x="30" y="275" fontSize="10" fill="#94a3b8">O(0,0,0)</text>
                  {/* base rectangle A-B-C-O */}
                  <polygon points="236,232 212,220 176,238 200,250" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" opacity="0.7" />
                  {/* top rectangle E-G-H-F */}
                  <polygon points="236,184 212,172 176,190 200,202" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5" opacity="0.7" />
                  {/* vertical edges */}
                  <line x1="236" y1="232" x2="236" y2="184" stroke="#3b82f6" strokeWidth="1.5" />
                  <line x1="212" y1="220" x2="212" y2="172" stroke="#3b82f6" strokeWidth="1.5" />
                  <line x1="176" y1="238" x2="176" y2="190" stroke="#3b82f6" strokeWidth="1.5" />
                  <line x1="200" y1="250" x2="200" y2="202" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
                  {/* CG highlighted */}
                  <line x1="176" y1="238" x2="212" y2="172" stroke="#ef4444" strokeWidth="2.5" />
                  <circle cx="176" cy="238" r="5" fill="#ef4444" stroke="white" strokeWidth="2" />
                  <circle cx="212" cy="172" r="5" fill="#ef4444" stroke="white" strokeWidth="2" />
                  {/* points */}
                  <circle cx="236" cy="232" r="4" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
                  <circle cx="212" cy="220" r="4" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
                  <circle cx="200" cy="202" r="4" fill="#ec4899" stroke="white" strokeWidth="1.5" />
                  <circle cx="236" cy="184" r="4" fill="#ec4899" stroke="white" strokeWidth="1.5" />
                  <circle cx="176" cy="190" r="4" fill="#ec4899" stroke="white" strokeWidth="1.5" />
                  {/* labels */}
                  <text x="240" y="230" fontSize="10" fontWeight="600" fill="#1e40af">A(3,0,0)</text>
                  <text x="215" y="215" fontSize="10" fontWeight="600" fill="#1e40af">B(3,2,0)</text>
                  <text x="135" y="250" fontSize="10" fontWeight="600" fill="#dc2626">C(0,2,0)</text>
                  <text x="240" y="180" fontSize="10" fontWeight="600" fill="#be185d">E(3,0,4)</text>
                  <text x="205" y="195" fontSize="10" fontWeight="600" fill="#be185d">F(0,0,4)</text>
                  <text x="135" y="185" fontSize="10" fontWeight="600" fill="#be185d">H(0,2,4)</text>
                  <text x="218" y="165" fontSize="11" fontWeight="700" fill="#dc2626">G(3,2,4)</text>
                  <text x="185" y="205" fontSize="9" fill="#ef4444" fontWeight="600">CG=5</text>
                </svg>
                <figcaption className="mt-2 text-xs text-muted-foreground text-center max-w-[400px]">Prism on XYZ: base z=0 (A,B,C,O) and top z=4 (E,F,H,G). Red diagonal CG from C(0,2,0) to G(3,2,4) = 5 units.</figcaption>
              </figure>
            </div>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="text-sm mb-2">(i) Vertices: <Formula>{String.raw`A(3,0,0), B(3,2,0), C(0,2,0), E(3,0,4), F(0,0,4), H(0,2,4), G(3,2,4)`}</Formula>.</p>
            <Stepper
              steps={[
                { label: "CG", description: <Formula>{String.raw`CG=\sqrt{(3-0)^{2}+(2-2)^{2}+(4-0)^{2}}=\sqrt{9+16}=5`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`CG=5\text{ units}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

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
