import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { TableCard } from "@/components/content/data/TableCard";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { VectorChapterHeader } from "@/components/content/mathematics/VectorChapterHeader";
import { ScalarVectorComparison } from "@/components/content/mathematics/ScalarVectorComparison";
import {
  DirectedLineSegmentDiagram,
  PositionVector3DDiagram,
} from "@/components/content/mathematics/VectorConceptDiagrams";
import { DirectionCosinesChain } from "@/components/content/mathematics/DirectionCosinesChain";
import { VectorTypesGrid } from "@/components/content/mathematics/VectorTypesGrid";
import {
  TriangleLawPanel,
  ParallelogramLawPanel,
} from "@/components/content/mathematics/VectorAdditionLawPanels";
import { VectorAdditionPropertiesGrid } from "@/components/content/mathematics/VectorAdditionPropertiesGrid";
import { ScalarMultiplicationVisual } from "@/components/content/mathematics/ScalarMultiplicationVisual";
import { VectorComponentsDiagram } from "@/components/content/mathematics/VectorComponentsDiagram";
import { VectorJoiningPointsDiagram } from "@/components/content/mathematics/VectorJoiningPointsDiagram";
import {
  SectionFormulaIllustration,
  InternalDivisionCard,
  ExternalDivisionCard,
  MidpointCard,
} from "@/components/content/mathematics/SectionFormulaPanels";
import { VectorProblemCards } from "@/components/content/mathematics/VectorProblemCards";
import { VectorFormulaSheetDashboard } from "@/components/content/mathematics/VectorFormulaSheetDashboard";

export default function VectorAlgebraChapter() {
  return (
    <>
      <VectorChapterHeader />

      <h2 id="h-10-1">10.1 Basic Vector Concepts</h2>
      <h3 id="h-10-1-1">1. Fundamental Concepts</h3>

      <h4 id="h-10-1-1-1">1.1 Scalar vs. Vector Quantities</h4>
      <ScalarVectorComparison />

      <h4 id="h-10-1-1-2">1.2 Directed Line Segment</h4>
      <p>
        A <strong>directed line segment</strong> is a line segment assigned a specific direction:
      </p>
      <ul className="list-disc space-y-1.5 pl-5">
        <li><strong>Initial point</strong> → <Formula>{String.raw`A`}</Formula></li>
        <li><strong>Terminal point</strong> → <Formula>{String.raw`B`}</Formula></li>
        <li>
          <strong>Direction</strong> → From <Formula>{String.raw`A`}</Formula> to{" "}
          <Formula>{String.raw`B`}</Formula>
        </li>
      </ul>
      <p><strong>Magnitude notation:</strong></p>
      <DirectedLineSegmentDiagram />

      <h4 id="h-10-1-1-3">1.3 Position Vector</h4>
      <p>
        The <strong>position vector</strong> of a point <Formula>{String.raw`P(x,y,z)`}</Formula> with
        respect to the origin <Formula>{String.raw`O(0,0,0)`}</Formula> is the directed line segment
        from <Formula>{String.raw`O`}</Formula> to <Formula>{String.raw`P`}</Formula>.
      </p>
      <FormulaBlock latex={String.raw`\boxed{\vec r=\vec{OP}=x\hat i+y\hat j+z\hat k}`} important />
      <p><strong>Magnitude of Position Vector</strong></p>
      <FormulaBlock latex={String.raw`\boxed{|\vec r|=\sqrt{x^2+y^2+z^2}}`} important />
      <p>Where:</p>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>
          <Formula>{String.raw`x,y,z`}</Formula> → Coordinates of point <Formula>{String.raw`P`}</Formula>.
        </li>
        <li>
          <Formula>{String.raw`\hat i,\hat j,\hat k`}</Formula> → Unit vectors along the positive{" "}
          <Formula>{String.raw`x,y,z`}</Formula>-axes respectively.
        </li>
      </ul>
      <PositionVector3DDiagram />

      <h3 id="h-10-1-2">2. Direction Angles, Cosines & Ratios</h3>
      <DirectionCosinesChain />

      <h2 id="h-10-2">10.2 Types of Vectors</h2>
      <VectorTypesGrid />

      <h2 id="h-10-3">10.3 — Vector Addition, Component Operations &amp; Section Formula</h2>

      <h3 id="h-10-3-1">1. Vector Addition</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <h4 id="h-10-3-1-1">1.1 Triangle Law of Vector Addition</h4>
          <p>
            If two vectors <Formula>{String.raw`\vec a`}</Formula> and{" "}
            <Formula>{String.raw`\vec b`}</Formula> are represented in magnitude and direction by two
            sides of a triangle taken in order, their sum{" "}
            <Formula>{String.raw`\vec a+\vec b`}</Formula> is represented by the third side, directed
            from the initial point of <Formula>{String.raw`\vec a`}</Formula> to the terminal point
            of <Formula>{String.raw`\vec b`}</Formula>.
          </p>
          <TriangleLawPanel />
        </div>
        <div>
          <h4 id="h-10-3-1-2">1.2 Parallelogram Law of Vector Addition</h4>
          <p>
            If two coinitial vectors <Formula>{String.raw`\vec a`}</Formula> and{" "}
            <Formula>{String.raw`\vec b`}</Formula> form adjacent sides of a parallelogram, their
            sum is represented by the diagonal passing through their common initial point.
          </p>
          <ParallelogramLawPanel />
        </div>
      </div>

      <h4 id="h-10-3-1-3">1.3 Properties of Vector Addition</h4>
      <VectorAdditionPropertiesGrid />

      <h3 id="h-10-3-2">2. Multiplication of a Vector by a Scalar</h3>
      <p>
        Multiplying a vector <Formula>{String.raw`\vec a`}</Formula> by a scalar{" "}
        <Formula>{String.raw`\lambda`}</Formula> produces a scaled vector{" "}
        <Formula>{String.raw`\lambda\vec a`}</Formula>.
      </p>
      <FormulaBlock
        latex={String.raw`\boxed{|\lambda\vec a|=|\lambda||\vec a|}`}
        important
        label="Magnitude:"
      />
      <p><strong>Effect on direction:</strong></p>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>
          <Formula>{String.raw`\lambda>0`}</Formula> → Direction remains unchanged.
        </li>
        <li>
          <Formula>{String.raw`\lambda<0`}</Formula> → Direction reverses.
        </li>
      </ul>
      <ScalarMultiplicationVisual />

      <h4 id="h-10-3-2-1">Distributive Laws</h4>
      <FormulaBlock
        latex={String.raw`\boxed{k(\vec a+\vec b)=k\vec a+k\vec b}`}
        important
      />
      <FormulaBlock
        latex={String.raw`\boxed{(k+m)\vec a=k\vec a+m\vec a}`}
        important
      />

      <h3 id="h-10-3-3">3. Vector Representation in Components</h3>
      <h4 id="h-10-3-3-1">3.1 Three-Dimensional Component Form</h4>
      <p>
        Any vector <Formula>{String.raw`\vec a`}</Formula> can be expressed using the orthogonal
        unit vectors <Formula>{String.raw`\hat i,\hat j,\hat k`}</Formula> along the{" "}
        <Formula>{String.raw`x,y,z`}</Formula>-axes.
      </p>
      <VectorComponentsDiagram />

      <h4 id="h-10-3-3-2">3.2 Algebraic Operations on Vector Components</h4>
      <p>Given two vectors:</p>
      <FormulaBlock latex={String.raw`\vec a=a_1\hat i+a_2\hat j+a_3\hat k`} />
      <FormulaBlock latex={String.raw`\vec b=b_1\hat i+b_2\hat j+b_3\hat k`} />
      <p>Their operations are performed by operating on corresponding components.</p>
      <TableCard
        title="Component operations"
        headers={["Operation", "Result"]}
        rows={[
          {
            cells: [
              "Addition",
              <Formula key="add">{String.raw`(a_1+b_1)\hat i+(a_2+b_2)\hat j+(a_3+b_3)\hat k`}</Formula>,
            ],
          },
          {
            cells: [
              "Subtraction",
              <Formula key="sub">{String.raw`(a_1-b_1)\hat i+(a_2-b_2)\hat j+(a_3-b_3)\hat k`}</Formula>,
            ],
          },
          {
            cells: [
              "Scalar multiplication",
              <Formula key="scalar">{String.raw`(\lambda a_1)\hat i+(\lambda a_2)\hat j+(\lambda a_3)\hat k`}</Formula>,
            ],
          },
          {
            cells: [
              "Equality",
              <Formula key="equal">{String.raw`a_1=b_1,\ a_2=b_2,\ a_3=b_3`}</Formula>,
            ],
          },
        ]}
      />
      <p><strong>Condition for Equality:</strong></p>
      <FormulaBlock
        latex={String.raw`\boxed{ \vec a=\vec b \iff a_1=b_1,\quad a_2=b_2,\quad a_3=b_3 }`}
        important
      />

      <h4 id="h-10-3-3-3">3.3 Vector Joining Two Points</h4>
      <p>For two points:</p>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>
          Initial point: <Formula>{String.raw`P(x_1,y_1,z_1)`}</Formula>
        </li>
        <li>
          Terminal point: <Formula>{String.raw`Q(x_2,y_2,z_2)`}</Formula>
        </li>
      </ul>
      <p>The vector joining <Formula>{String.raw`P`}</Formula> to{" "}
        <Formula>{String.raw`Q`}</Formula> is:</p>
      <VectorJoiningPointsDiagram />

      <h3 id="h-10-3-4">4. Section Formula</h3>
      <p>
        The section formula gives the position vector of a point <Formula>{String.raw`R`}</Formula>{" "}
        dividing the line segment joining two points <Formula>{String.raw`P(\vec a)`}</Formula> and{" "}
        <Formula>{String.raw`Q(\vec b)`}</Formula> in the ratio{" "}
        <Formula>{String.raw`m:n`}</Formula>.
      </p>
      <SectionFormulaIllustration />

      <h4 id="h-10-3-4-1">4.1 Internal Division</h4>
      <InternalDivisionCard />

      <h4 id="h-10-3-4-2">4.2 External Division</h4>
      <ExternalDivisionCard />

      <h4 id="h-10-3-4-3">4.3 Midpoint Formula</h4>
      <MidpointCard />

      <p><strong>Quick comparison</strong></p>
      <TableCard
        title="Section formula comparison"
        headers={["Division", "Formula"]}
        rows={[
          {
            cells: [
              "Internal",
              <Formula key="internal">{String.raw`\dfrac{m\vec b+n\vec a}{m+n}`}</Formula>,
            ],
          },
          {
            cells: [
              "External",
              <Formula key="external">{String.raw`\dfrac{m\vec b-n\vec a}{m-n}`}</Formula>,
            ],
          },
          {
            cells: [
              "Midpoint",
              <Formula key="midpoint">{String.raw`\dfrac{\vec a+\vec b}{2}`}</Formula>,
            ],
          },
        ]}
      />

      <h3 id="h-10-3-problem-solving">5. Problem-Solving: Types, Methods &amp; Examples</h3>
      <VectorProblemCards />

      <h3 id="h-10-quick-revision">6. Quick Revision — Formula Sheet</h3>
      <VectorFormulaSheetDashboard />

      <Expandable title="Exercise 10.1">
        <ExerciseQa
          questions={[
            <span key="q1">Classify: time, speed, force, work, mass, volume, velocity, acceleration (scalar vs vector).</span>,
            <span key="q2">Find the unit vector in the direction of <Formula>{String.raw`\vec a=\hat i+\hat j+\sqrt2\,\hat k`}</Formula>.</span>,
            <span key="q3">Find a unit vector opposite to <Formula>{String.raw`\vec a=2\hat i-3\hat j+\hat k`}</Formula>.</span>,
            <span key="q4">Find <Formula>{String.raw`\vec a+\vec b`}</Formula> for <Formula>{String.raw`\vec a=3\hat i-4\hat j,\ \vec b=-2\hat i+\hat j+2\hat k`}</Formula>.</span>,
            <span key="q5">If <Formula>{String.raw`\vec x=3\hat i-6\hat j-\hat k,\ \vec y=-\hat i+4\hat j+3\hat k,\ \vec z=2\hat i-3\hat j+2\hat k`}</Formula>, compute <Formula>{String.raw`\vec x+\vec y+\vec z`}</Formula>.</span>,
            <span key="q6">Three forces <Formula>{String.raw`\vec F_1=2\hat i+3\hat j-\hat k,\ \vec F_2=-2\hat i-\hat j+2\hat k,\ \vec F_3=-\hat i+\hat j+2\hat k`}</Formula> act on a particle. Find the resultant.</span>,
          ]}
          answers={[
            <span key="a1">Scalars: time, speed, mass, volume, work. Vectors: force, velocity, acceleration.</span>,
            <span key="a2"><Formula>{String.raw`\frac12(\hat i+\hat j+\sqrt2\,\hat k)`}</Formula>.</span>,
            <span key="a3"><Formula>{String.raw`-\frac{1}{\sqrt{14}}(2\hat i-3\hat j+\hat k)`}</Formula>.</span>,
            <span key="a4"><Formula>{String.raw`\hat i-3\hat j+2\hat k`}</Formula>.</span>,
            <span key="a5"><Formula>{String.raw`4\hat i-5\hat j+4\hat k`}</Formula>.</span>,
            <span key="a6"><Formula>{String.raw`-\hat i+3\hat j+3\hat k`}</Formula>.</span>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 10.2">
        <ExerciseQa
          questions={[
            <span key="q1">If <Formula>{String.raw`A=4\hat i+2\hat j-3\hat k,\ B=6\hat i+3\hat j-2\hat k`}</Formula>, find <Formula>{String.raw`\vec{AB}`}</Formula>, its magnitude and unit vector.</span>,
            <span key="q2">Show that for <Formula>{String.raw`A=(-2,3,5),\ B=(1,2,3),\ C=(7,0,-1)`}</Formula>, <Formula>{String.raw`\vec{AB}+\vec{BC}=\vec{AC}`}</Formula>.</span>,
            <span key="q3">The two adjacent sides of a parallelogram are <Formula>{String.raw`2\hat i+4\hat j-5\hat k`}</Formula> and <Formula>{String.raw`-\hat i+2\hat j+3\hat k`}</Formula>. Find the diagonals.</span>,
            <span key="q4">If <Formula>{String.raw`\vec a,\vec b,\vec c`}</Formula> are mutually perpendicular unit vectors, find <Formula>{String.raw`|\vec a+\vec b+\vec c|`}</Formula>.</span>,
          ]}
          answers={[
            <span key="a1"><Formula>{String.raw`\vec{AB}=2\hat i+\hat j+\hat k,\ |\vec{AB}|=\sqrt6,\ \hat{AB}=\frac{1}{\sqrt6}(2\hat i+\hat j+\hat k)`}</Formula>.</span>,
            <span key="a2">Compute <Formula>{String.raw`\vec{AB}=(3,-1,-2),\ \vec{BC}=(6,-2,-4)`}</Formula>; sum = <Formula>{String.raw`(9,-3,-6)=\vec{AC}`}</Formula>.</span>,
            <span key="a3">Diagonals <Formula>{String.raw`\vec a+\vec b`}</Formula> and <Formula>{String.raw`\vec a-\vec b`}</Formula>; use dot product for the angle.</span>,
            <span key="a4"><Formula>{String.raw`|\vec a+\vec b+\vec c|^2=3`}</Formula>, so <Formula>{String.raw`\sqrt3`}</Formula>.</span>,
          ]}
        />
      </Expandable>

      <h2 id="h-10-6">10.6 Products of Vectors</h2>
      <h3 id="h-10-6-1">10.6.1 Scalar (dot) product</h3>
      <p>The dot product measures the angle between two vectors:</p>
      <FormulaBlock latex={String.raw`\vec a\cdot\vec b=|\vec a|\,|\vec b|\cos\theta,\qquad 0\le\theta\le\pi`} important label="Dot product" />
      <p>Component form:</p>
      <FormulaBlock latex={String.raw`\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3`} important />
      <p>
        Orthogonal iff <Formula>{String.raw`\vec a\cdot\vec b=0`}</Formula>. Useful identities:
      </p>
      <FormulaCard>
        <div className="space-y-2">
          <div><Formula>{String.raw`\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}`}</Formula></div>
          <div><Formula>{String.raw`(\vec a+\vec b)\cdot\vec c=\vec a\cdot\vec c+\vec b\cdot\vec c`}</Formula></div>
          <div><Formula>{String.raw`(\lambda\vec a)\cdot\vec b=\lambda(\vec a\cdot\vec b)`}</Formula></div>
          <div><Formula>{String.raw`\vec a\cdot\vec a=|\vec a|^2`}</Formula></div>
        </div>
      </FormulaCard>

      <h3 id="h-10-6-2">10.6.2 Projection</h3>
      <FormulaBlock latex={String.raw`\operatorname{proj}_{\vec b}\vec a=\frac{\vec a\cdot\vec b}{|\vec b|}`} label="Scalar projection" />
      <FormulaBlock latex={String.raw`\operatorname{Proj}_{\vec b}\vec a=\frac{\vec a\cdot\vec b}{|\vec b|^2}\vec b`} label="Vector projection" important />

      <h3 id="h-10-6-3">10.6.3 Vector (cross) product</h3>
      <p>A vector perpendicular to both, whose magnitude is the parallelogram area:</p>
      <FormulaBlock latex={String.raw`\vec a\times\vec b=|\vec a|\,|\vec b|\sin\theta\,\hat n`} important label="Cross product (magnitude, direction)" />
      <FormulaBlock
        latex={String.raw`\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\ a_1&a_2&a_3\\ b_1&b_2&b_3\end{vmatrix}`}
        important
      />
      <FormulaCard>
        <div className="space-y-2">
          <div><Formula>{String.raw`\vec a\times\vec b=-\vec b\times\vec a`}</Formula> (anti-commutative)</div>
          <div><Formula>{String.raw`\vec a\times(\vec b+\vec c)=\vec a\times\vec b+\vec a\times\vec c`}</Formula></div>
          <div><Formula>{String.raw`(\lambda\vec a)\times\vec b=\lambda(\vec a\times\vec b)`}</Formula></div>
          <div><Formula>{String.raw`\vec a\times\vec a=\vec 0,\quad |\vec a\times\vec b|=|\vec a||\vec b|\sin\theta`}</Formula></div>
          <div><Formula>{String.raw`\vec a\times\vec b=\text{area of parallelogram};\ \text{triangle area}=\frac12|\vec a\times\vec b|`}</Formula></div>
          <div><Formula>{String.raw`\vec a,\vec b,\vec c\ \text{coplanar}\iff(\vec a\times\vec b)\cdot\vec c=0`}</Formula></div>
        </div>
      </FormulaCard>
      <p>
        The scalar triple product gives the parallelepiped volume:
      </p>
      <FormulaBlock latex={String.raw`\vec a\cdot(\vec b\times\vec c)=\begin{vmatrix}a_1&a_2&a_3\\ b_1&b_2&b_3\\ c_1&c_2&c_3\end{vmatrix}`} important />

      <Expandable title="Examples on Products — NCERT">
        <div className="space-y-4">
          <div>
            <p><strong>Example.</strong> Angle between <Formula>{String.raw`\vec a=3\hat i+\hat j+2\hat k`}</Formula> and <Formula>{String.raw`\vec b=2\hat i-4\hat j-\hat k`}</Formula>.</p>
            <p><strong>Solution.</strong> <Formula>{String.raw`\vec a\cdot\vec b=6-4-2=0`}</Formula>, so the angle is 90° — the vectors are perpendicular.</p>
          </div>
          <div>
            <p><strong>Example.</strong> Magnitude of a cross product for perpendicular vectors: if <Formula>{String.raw`\vec a\cdot\vec b=0`}</Formula>, then <Formula>{String.raw`|\vec a\times\vec b|=|\vec a||\vec b|`}</Formula>.</p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 10.3">
        <ExerciseQa
          questions={[
            <span key="q1">
              Find the dot product of <Formula>{String.raw`\vec a=3\hat i+4\hat j`}</Formula> and <Formula>{String.raw`\vec b=\hat i+2\hat k`}</Formula>.
            </span>,
            <span key="q2">
              Find <Formula>{String.raw`\vec a\cdot\vec b`}</Formula> given <Formula>{String.raw`|\vec a|=2,\ |\vec b|=3,\ \theta=60^\circ`}</Formula>.
            </span>,
            <span key="q3">
              Find the projection of <Formula>{String.raw`\vec a=3\hat i+6\hat j+2\hat k`}</Formula> on <Formula>{String.raw`\vec b=12\hat i+3\hat j-4\hat k`}</Formula>.
            </span>,
            <span key="q4">
              Prove <Formula>{String.raw`|\vec a\times\vec b|^2+|\vec a\cdot\vec b|^2=|\vec a|^2|\vec b|^2`}</Formula>.
            </span>,
            <span key="q5">
              Prove the cosine law <Formula>{String.raw`c^2=a^2+b^2-2ab\cos C`}</Formula> by vector methods.
            </span>,
          ]}
          answers={[
            <span key="a1"><Formula>{String.raw`\vec a\cdot\vec b=3\ne0`}</Formula> → not perpendicular.</span>,
            <span key="a2"><Formula>{String.raw`\vec a\cdot\vec b=|\vec a||\vec b|\cos60^\circ=2\cdot3\cdot(1/2)=3`}</Formula>.</span>,
            <span key="a3">Scalar: <Formula>{String.raw`\frac{36+18-8}{\sqrt{144+9+16}}=\frac{46}{13}`}</Formula>.</span>,
            <span key="a4">Use <Formula>{String.raw`|\vec a\times\vec b|^2=a^2b^2\sin^2\theta`}</Formula> and <Formula>{String.raw`(\vec a\cdot\vec b)^2=a^2b^2\cos^2\theta`}</Formula>.</span>,
            <span key="a5">Square the vector equation for the third side: <Formula>{String.raw`|\vec a-\vec b|^2=a^2+b^2-2\vec a\cdot\vec b`}</Formula>, and identify <Formula>{String.raw`\vec a\cdot\vec b=ab\cos C`}</Formula>.</span>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 10.4">
        <ExerciseQa
          questions={[
            <span key="q1">
              Find <Formula>{String.raw`\vec a\times\vec b`}</Formula> for <Formula>{String.raw`\vec a=2\hat i+\hat j+3\hat k,\ \vec b=\hat i-2\hat j-\hat k`}</Formula>.
            </span>,
            <span key="q2">
              Find a unit vector perpendicular to both <Formula>{String.raw`2\hat i+\hat j+2\hat k`}</Formula> and <Formula>{String.raw`4\hat i-\hat j+\hat k`}</Formula>.
            </span>,
            <span key="q3">
              Find the area of the triangle with vertices <Formula>{String.raw`A(1,1,1),\ B(3,3,3),\ C(1,3,5)`}</Formula>.
            </span>,
            <span key="q4">
              Test whether <Formula>{String.raw`2\hat i+\hat j+3\hat k,\ 4\hat j+6\hat k,\ -\hat i-\hat j+\hat k`}</Formula> are coplanar.
            </span>,
            <span key="q5">
              Find the volume of the parallelepiped with coterminous edges <Formula>{String.raw`3\hat i+2\hat j,\ \hat i+2\hat j,\ 3\hat i-\hat j+2\hat k`}</Formula>.
            </span>,
          ]}
          answers={[
            <span key="a1"><Formula>{String.raw`\vec a\times\vec b=(7,1,-5)`}</Formula>.</span>,
            <span key="a2"><Formula>{String.raw`\frac{1}{\sqrt{174}}(-5,7,-10)`}</Formula>.</span>,
            <span key="a3"><Formula>{String.raw`\frac12|\overrightarrow{AB}\times\overrightarrow{AC}| = 6`}</Formula>.</span>,
            <span key="a4">Compute the scalar triple product; if non-zero, they are not coplanar.</span>,
            <span key="a5"><Formula>{String.raw`|\vec a\cdot(\vec b\times\vec c)|=9`}</Formula>.</span>,
          ]}
        />
      </Expandable>

      <Expandable title="Miscellaneous Exercise on Chapter 10">
        <ExerciseQa
          questions={[
            <span key="q1">
              A vector <Formula>{String.raw`\vec r`}</Formula> makes equal angles with the three axes and has magnitude 4. Find it.
            </span>,
            <span key="q2">
              Prove <Formula>{String.raw`|\vec a\times\vec b|^2=|\vec a|^2|\vec b|^2-(\vec a\cdot\vec b)^2`}</Formula>.
            </span>,
            <span key="q3">
              If <Formula>{String.raw`\vec a,\vec b,\vec c`}</Formula> are unit vectors with <Formula>{String.raw`\vec a+\vec b+\vec c=\vec0`}</Formula>, prove they are 120° apart.
            </span>,
            <span key="q4">
              Find a vector of magnitude 5 parallel to <Formula>{String.raw`(2,3,-1)`}</Formula>, in both directions.
            </span>,
          ]}
          answers={[
            <span key="a1"><Formula>{String.raw`\pm\frac{4}{\sqrt3}(\hat i+\hat j+\hat k)`}</Formula>.</span>,
            <span key="a2">Use <Formula>{String.raw`|\vec a\times\vec b|^2=a^2b^2\sin^2\theta`}</Formula> and <Formula>{String.raw`(\vec a\cdot\vec b)^2=a^2b^2\cos^2\theta`}</Formula>.</span>,
            <span key="a3">Square <Formula>{String.raw`\vec a+\vec b+\vec c=\vec0`}</Formula>; cosines all equal = −1/2, giving 120°.</span>,
            <span key="a4"><Formula>{String.raw`\pm\frac{5}{\sqrt{14}}(2\hat i+3\hat j-\hat k)`}</Formula>.</span>,
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Parallel / perpendicular:</strong> <Formula>{String.raw`\vec a\parallel\vec b\iff\vec a\times\vec b=\vec0`}</Formula>, and <Formula>{String.raw`\vec a\perp\vec b\iff\vec a\cdot\vec b=0`}</Formula>.</li>
          <li><strong>Magnitude:</strong> <Formula>{String.raw`|\vec a|=\sqrt{a_1^2+a_2^2+a_3^2}`}</Formula>; magnitude of cross product is parallelogram area.</li>
          <li><strong>Angle:</strong> <Formula>{String.raw`\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}`}</Formula>.</li>
          <li><strong>Projections:</strong> scalar <Formula>{String.raw`=\frac{\vec a\cdot\vec b}{|\vec b|}`}</Formula>, vector <Formula>{String.raw`=\frac{\vec a\cdot\vec b}{|\vec b|^2}\vec b`}</Formula>.</li>
          <li><strong>Volume:</strong> <Formula>{String.raw`|\vec a\cdot(\vec b\times\vec c)|`}</Formula>; coplanar iff zero.</li>
          <li><strong>Cross product as determinant:</strong> <Formula>{String.raw`\hat i,\hat j,\hat k`}</Formula> top row, then components.</li>
        </ul>
      </SpeedTricks>
    </>
  );
}
