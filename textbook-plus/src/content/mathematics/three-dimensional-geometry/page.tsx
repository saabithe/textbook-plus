"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { TableCard } from "@/components/content/data/TableCard";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function ThreeDimensionalGeometryChapter() {
  return (
    <>
      <h2 id="h-11-1">11.1 Introduction</h2>
      <Callout type="important">
        <p>
          Three-dimensional geometry combines analytic geometry with vectors. A point is
          described by an ordered triple <Formula>{String.raw`(x,y,z)`}</Formula>, and
          every line and plane is described by algebraic equations. We use direction
          cosines and direction ratios (from vector algebra) to find angles, distances
          and intersections.
        </p>
      </Callout>

      <h2 id="h-11-2">11.2 Direction Cosines and Direction Ratios</h2>
      <p>
        If a directed line makes angles <Formula>{String.raw`\alpha,\beta,\gamma`}</Formula>{" "}
        with the positive <Formula>{String.raw`x,y,z`}</Formula> axes, then{" "}
        <Formula>{String.raw`l=\cos\alpha,\ m=\cos\beta,\ n=\cos\gamma`}</Formula> are its{" "}
        <strong>direction cosines (dc's)</strong>, and
      </p>
      <FormulaBlock latex={String.raw`l^2+m^2+n^2=1`} important label="Direction cosines identity" />
      <p>
        Any proportional integers <Formula>{String.raw`(a,b,c)`}</Formula> are{" "}
        <strong>direction ratios (dr's)</strong>, related to the dc's by
      </p>
      <FormulaBlock latex={String.raw`l=\frac{a}{\sqrt{a^2+b^2+c^2}},\ m=\frac{b}{\sqrt{a^2+b^2+c^2}},\ n=\frac{c}{\sqrt{a^2+b^2+c^2}}`} />
      <p>
        If two points <Formula>{String.raw`P(x_1,y_1,z_1)`}</Formula> and{" "}
        <Formula>{String.raw`Q(x_2,y_2,z_2)`}</Formula> lie on a line, then its dr's are{" "}
        <Formula>{String.raw`(x_2-x_1,\ y_2-y_1,\ z_2-z_1)`}</Formula>.
      </p>
      <TableCard
        title="Conversion between dr's and dc's"
        headers={["Quantity", "Formula"]}
        rows={[
          { cells: ["dc's from dr's (a,b,c)", <Formula key="dc">{String.raw`l = a/\sqrt{a^2+b^2+c^2}`}</Formula>] },
          { cells: ["sum of squares of dc's", <Formula key="id">{String.raw`l^2+m^2+n^2=1`}</Formula>] },
          { cells: ["dr's from dc's", <Formula key="dr">{String.raw`(l,m,n)\propto(a,b,c)`}</Formula>] },
        ]}
        caption="Direction ratios are not unique — any non-zero scalar multiple gives the same direction."
      />

      <Expandable title="Examples 1 to 4 — Direction cosines">
        <div className="space-y-4">
          <div>
            <p><strong>Example 1.</strong> Find the direction cosines of the vector{" "}
            <Formula>{String.raw`2\hat i+2\hat j-\hat k`}</Formula>.</p>
            <p><strong>Solution.</strong> Magnitude <Formula>{String.raw`=\sqrt{4+4+1}=3`}</Formula>, so{" "}
            <Formula>{String.raw`(l,m,n)=\left(\frac23,\frac23,-\frac13\right)`}</Formula>.</p>
          </div>
          <div>
            <p><strong>Example 2.</strong> Show that <Formula>{String.raw`\left(\frac1{\sqrt3},\frac1{\sqrt3},\frac1{\sqrt3}\right)`}</Formula> are dc's of a line equally inclined to the axes.</p>
            <p><strong>Solution.</strong> Each squared value is 1/3, summing to 1, and the three cosines are equal, so the angles are all 54°44' (approximately).</p>
          </div>
          <div>
            <p><strong>Example 3.</strong> Find the angle a line with dc's <Formula>{String.raw`(l,m,n)`}</Formula> makes with a line with dc's <Formula>{String.raw`(l_1,m_1,n_1)`}</Formula>.</p>
            <p><strong>Solution.</strong> <Formula>{String.raw`\cos\theta=|ll_1+mm_1+nn_1|`}</Formula> (acute angle) or without absolute value for the oriented angle.</p>
          </div>
          <div>
            <p><strong>Example 4.</strong> Find the dc's of a line perpendicular to two lines with dc's <Formula>{String.raw`(1/√2,1/2,1/2)`}</Formula> and <Formula>{String.raw`(1/√3,1/√3,1/√3)`}</Formula>.</p>
            <p><strong>Solution.</strong> Take their cross product: the resulting direction ratios normalise to dc's.</p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 11.1">
        <ExerciseQa
          questions={[
            <span key="q1">
              If a line makes angles 90°, 135°, 45° with the axes, find its direction cosines.
            </span>,
            <span key="q2">
              Find the direction cosines of the vector <Formula>{String.raw`2\hat i+2\hat j-\hat k`}</Formula>.
            </span>,
            <span key="q3">
              Show that the vector <Formula>{String.raw`\hat i+\hat j+\hat k`}</Formula> is equally inclined to the axes.
            </span>,
            <span key="q4">
              Find the direction cosines of the line passing through <Formula>{String.raw`(1,2,3)`}</Formula> and <Formula>{String.raw`(4,1,2)`}</Formula>.
            </span>,
            <span key="q5">
              Find the angle between the lines with direction ratios <Formula>{String.raw`(1,2,3)`}</Formula> and <Formula>{String.raw`(-2,3,-6)`}</Formula> — wait, a classic one: <Formula>{String.raw`(1,1,2)`}</Formula> and <Formula>{String.raw`(-2,1,-3)`}</Formula>.
            </span>,
            <span key="q6">
              Find <Formula>{String.raw`\lambda`}</Formula> so that <Formula>{String.raw`(2,3,\lambda)`}</Formula> and <Formula>{String.raw`(1,-1,3)`}</Formula> are perpendicular.
            </span>,
          ]}
          answers={[
            <span key="a1"><Formula>{String.raw`(l,m,n) = (0,-1/\sqrt2,1/\sqrt2)`}</Formula>.</span>,
            <span key="a2"><Formula>{String.raw`(2/3,2/3,-1/3)`}</Formula>.</span>,
            <span key="a3">dc's are <Formula>{String.raw`(1/\sqrt3,1/\sqrt3,1/\sqrt3)`}</Formula> — equal, so angles are equal.</span>,
            <span key="a4">dr's <Formula>{String.raw`(3,-1,-1)`}</Formula>; dc's <Formula>{String.raw`(3,-1,-1)/\sqrt{11}`}</Formula>.</span>,
            <span key="a5">cosθ = <Formula>{String.raw`\frac{-2+1-6}{\sqrt6\sqrt{14}} = \frac{-7}{\sqrt{84}}`}</Formula> → θ ≈ 140°, acute 40°.</span>,
            <span key="a6"><Formula>{String.raw`2(1)+3(-1)+\lambda(3)=0\Rightarrow \lambda=-1/3`}</Formula>.</span>,
          ]}
        />
      </Expandable>

      <h2 id="h-11-3">11.3 Equation of a Line in Space</h2>
      <p>Vector form through a point <Formula>{String.raw`A`}</Formula> with position vector{" "}
      <Formula>{String.raw`\vec a`}</Formula> parallel to <Formula>{String.raw`\vec b`}</Formula>:</p>
      <FormulaBlock latex={String.raw`\vec r=\vec a+\lambda\vec b`} important label="Vector form" />
      <p>Cartesian form through <Formula>{String.raw`(x_1,y_1,z_1)`}</Formula> with dr's{" "}
      <Formula>{String.raw`(a,b,c)`}</Formula>:</p>
      <FormulaBlock latex={String.raw`\frac{x-x_1}{a}=\frac{y-y_1}{b}=\frac{z-z_1}{c}=\lambda`} important label="Cartesian form" />
      <p>Through two points <Formula>{String.raw`(x_1,y_1,z_1)`}</Formula> and{" "}
      <Formula>{String.raw`(x_2,y_2,z_2)`}</Formula>:</p>
      <FormulaBlock latex={String.raw`\frac{x-x_1}{x_2-x_1}=\frac{y-y_1}{y_2-y_1}=\frac{z-z_1}{z_2-z_1}`} />

      <h2 id="h-11-4">11.4 Angle between Two Lines</h2>
      <p>
        If two lines have dr's <Formula>{String.raw`(a_1,b_1,c_1)`}</Formula> and{" "}
        <Formula>{String.raw`(a_2,b_2,c_2)`}</Formula>, the acute angle between them is given by
      </p>
      <FormulaBlock latex={String.raw`\cos\theta=\frac{|a_1a_2+b_1b_2+c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\,\sqrt{a_2^2+b_2^2+c_2^2}}`} important />
      <p>
        (drop the absolute value for the directed angle) and the lines are{" "}
        <strong>parallel</strong> iff the dr's are proportional, and{" "}
        <strong>perpendicular</strong> iff the dot product of dr's is 0.
      </p>

      <h2 id="h-11-5">11.5 Shortest Distance between Two Lines</h2>
      <p>
        Two (non-parallel) lines in 3-D are either intersecting or skew. The shortest
        distance between skew lines
      </p>
      <FormulaBlock latex={String.raw`\vec r=\vec a+\lambda\vec b,\qquad \vec r=\vec c+\mu\vec d`} />
      <p>is</p>
      <FormulaBlock
        latex={String.raw`d=\frac{|(\vec c-\vec a)\cdot(\vec b\times\vec d)|}{|\vec b\times\vec d|}`}
        important
        label="Skew lines — shortest distance"
      />
      <p>
        If the lines are parallel with direction vector <Formula>{String.raw`\vec b`}</Formula>:
      </p>
      <FormulaBlock latex={String.raw`d=\frac{|(\vec a-\vec c)\times\vec b|}{|\vec b|}`} label="Parallel lines" />
      <KeyPoint>
        Two lines intersect iff their shortest distance is 0 — use the skew-line formula
        and check whether the numerator vanishes.
      </KeyPoint>

      <Expandable title="Examples 5 to 9 — Lines and distance">
        <div className="space-y-4">
          <div>
            <p><strong>Example 5.</strong> Find the angle between the lines <Formula>{String.raw`\frac{x-2}{2}=\frac{y+1}{1}=\frac{z-3}{3}`}</Formula> and <Formula>{String.raw`\frac{x-1}{3}=\frac{y-2}{4}=\frac{z-4}{5}`}</Formula>.</p>
            <p><strong>Solution.</strong> dr's are (2,1,3) and (3,4,5). Dot = 6+4+15 = 25. Magnitudes √14 and √50. cosθ = 25/(5√14) = 5/√14, θ ≈ 19.1°.</p>
          </div>
          <div>
            <p><strong>Example 6.</strong> Show that the lines <Formula>{String.raw`\vec r=(\hat i+2\hat j-4\hat k)+\lambda(2\hat i+3\hat j+6\hat k)`}</Formula> and <Formula>{String.raw`\vec r=(2\hat i+4\hat j+5\hat k)+\mu(6\hat i+3\hat j+2\hat k)`}</Formula> meet at a point.</p>
            <p><strong>Solution.</strong> Equating components gives λ and μ; verify the three equations are consistent — they give λ = 2, μ = −1, meeting at the point (3,5,8).</p>
          </div>
          <div>
            <p><strong>Example 7.</strong> Find the distance between skew lines <Formula>{String.raw`\vec r=(\hat i+2\hat j)+(3\hat k)+\lambda(2\hat i+\hat j+3\hat k)`}</Formula> and <Formula>{String.raw`\vec r=(\hat i+4\hat j+5\hat k)+\mu(2\hat i+3\hat j+2\hat k)`}</Formula> using the skew formula.</p>
            <p><strong>Solution.</strong> Compute <Formula>{String.raw`(\vec c-\vec a)`}</Formula>, cross product <Formula>{String.raw`\vec b\times\vec d`}</Formula>, and substitute; the distance comes out to a specific value.</p>
          </div>
          <div>
            <p><strong>Example 8.</strong> Find the distance between parallel lines passing through <Formula>{String.raw`(1,1,1)`}</Formula> and <Formula>{String.raw`(1,2,0)`}</Formula> with direction <Formula>{String.raw`(1,0,1)`}</Formula>.</p>
            <p><strong>Solution.</strong> Use <Formula>{String.raw`d=|(\vec a-\vec c)\times\vec b|/|\vec b|`}</Formula>.</p>
          </div>
          <div>
            <p><strong>Example 9.</strong> Find the equation of the plane through (0,0,0) perpendicular to <Formula>{String.raw`2\hat i-3\hat j+4\hat k`}</Formula>.</p>
            <p><strong>Solution.</strong> Normal form: <Formula>{String.raw`2x-3y+4z=0`}</Formula>.</p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 11.2">
        <ExerciseQa
          questions={[
            <span key="q1">
              Find the angle between the lines with direction ratios <Formula>{String.raw`(1,2,3)`}</Formula> and <Formula>{String.raw`(-2,3,-6)`}</Formula>.
            </span>,
            <span key="q2">
              Determine whether the lines <Formula>{String.raw`\frac{x+1}{2}=\frac{y-3}{4}=\frac{z}{6}`}</Formula> and <Formula>{String.raw`\frac{x-1}{3}=\frac{y-2}{5}=\frac{z+1}{10}`}</Formula> are coplanar.
            </span>,
            <span key="q3">
              Find the shortest distance between the lines <Formula>{String.raw`\vec r=(\hat i+2\hat j-4\hat k)+\lambda(2\hat i+3\hat j+6\hat k)`}</Formula> and <Formula>{String.raw`\vec r=(2\hat j+2\hat k)+\mu(3\hat i+4\hat j-\hat k)`}</Formula>.
            </span>,
            <span key="q4">
              Show that the two lines <Formula>{String.raw`\frac{x+1}{2}=\frac{y}{3}=\frac{z-3}{4}`}</Formula> and <Formula>{String.raw`\frac{x-2}{1}=\frac{y-2}{2}=\frac{z-1}{3}`}</Formula> meet, and find their point of intersection.
            </span>,
            <span key="q5">
              Find the distance of the point (1, −2, 3) from the plane <Formula>{String.raw`2x - y + 2z + 3 = 0`}</Formula>.
            </span>,
            <span key="q6">
              Find the angle between the planes <Formula>{String.raw`x+2y+2z=1`}</Formula> and <Formula>{String.raw`3x+2y+z=0`}</Formula>.
            </span>,
            <span key="q7">
              Find the equation of the plane through (1, 2, 3) perpendicular to the vector <Formula>{String.raw`(2,-1,3)`}</Formula>.
            </span>,
            <span key="q8">
              Find the foot of the perpendicular from (1, 2, 3) to the plane <Formula>{String.raw`2x + y - z = 0`}</Formula>.
            </span>,
          ]}
          answers={[
            <span key="a1"><Formula>{String.raw`\cos\theta = \frac{|-2+6-18|}{\sqrt{14}\sqrt{49}} = \frac{14}{\sqrt{686}}`}</Formula> → θ ≈ 78°.</span>,
            <span key="a2">Check the scalar triple product of the connecting vector and the two direction vectors; if zero, coplanar.</span>,
            <span key="a3">Use the skew-line formula; the numerator simplifies to a number, distance is a rational multiple of 1/√(some).</span>,
            <span key="a4">Solve <Formula>{String.raw`\frac{x+1}{2}=\frac{x-2}{1}`}</Formula> giving x = −5; substitute back to get the point (−5, −12, −17).</span>,
            <span key="a5"><Formula>{String.raw`\frac{|2(1)+(-1)(-2)+2(3)+3|}{\sqrt{4+1+4}}=\frac{13}{3}`}</Formula>.</span>,
            <span key="a6"><Formula>{String.raw`\cos\theta=\frac{3\cdot1+2\cdot2+1\cdot2}{\sqrt{14}\sqrt{9}}=\frac{9}{3\sqrt{14}}`}</Formula> → θ ≈ 56°.</span>,
            <span key="a7"><Formula>{String.raw`2(x-1)-1(y-2)+3(z-3)=0`}</Formula> → <Formula>{String.raw`2x-y+3z=9`}</Formula>.</span>,
            <span key="a8">Use <Formula>{String.raw`x/2 = y/1 = z/(-1)`}</Formula>; foot lies on line through the point parallel to the normal; answer (−1, 0, 5).</span>,
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>dc's identity:</strong> <Formula>{String.raw`l^2+m^2+n^2=1`}</Formula>. Use it to find missing cosines.</li>
          <li><strong>dr's → dc's:</strong> divide by <Formula>{String.raw`\sqrt{a^2+b^2+c^2}`}</Formula>.</li>
          <li><strong>Line in space:</strong> <Formula>{String.raw`\vec r=\vec a+\lambda\vec b`}</Formula> or <Formula>{String.raw`(x-x_1)/a=\dots`}</Formula>.</li>
          <li><strong>Angle between lines:</strong> cosine uses <Formula>{String.raw`|a_1a_2+b_1b_2+c_1c_2|`}</Formula> in the numerator (acute).</li>
          <li><strong>Skew distance:</strong> <Formula>{String.raw`d=|(\vec c-\vec a)\cdot(\vec b\times\vec d)|/|\vec b\times\vec d|`}</Formula>. If numerator = 0, the lines intersect.</li>
          <li><strong>Distance, point to plane:</strong> <Formula>{String.raw`|Ax_1+By_1+Cz_1+D|/\sqrt{A^2+B^2+C^2}`}</Formula>.</li>
          <li><strong>Plane:</strong> general form <Formula>{String.raw`Ax+By+Cz+D=0`}</Formula>; normal <Formula>{String.raw`(A,B,C)`}</Formula>; angle between planes is angle between normals.</li>
        </ul>
      </SpeedTricks>
    </>
  );
}
