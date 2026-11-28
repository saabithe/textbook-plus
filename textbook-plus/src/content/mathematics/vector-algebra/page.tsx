import { CollapsibleRevision } from "@/components/content/CollapsibleRevision";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
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
import {
  DotProductGeometryDiagram,
  TriangleAngleDiagram,
} from "@/components/content/mathematics/DotProductDiagrams";
import {
  CrossProductDirectionDiagram,
  TriangleAreaDiagram,
  ParallelogramAreaDiagram,
  RectangleAreaDiagram,
} from "@/components/content/mathematics/CrossProductDiagrams";

/** One labelled stage inside a worked solution. */
function SolutionStep({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-3 first:border-t-0 first:pt-0">
      <div className="t-micro mb-1.5">{label}</div>
      <div className="space-y-2 [&>div]:my-0 [&>p]:mb-0">{children}</div>
    </div>
  );
}

/** A worked problem: question and full solution sit behind one collapsible. */
function SolvedProblem({
  title,
  question,
  children,
}: {
  title: string;
  question: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Expandable
      title={title}
      variant="example"
      subjectColor="var(--subject-mathematics)"
    >
      <div className="space-y-3">
        <SolutionStep label="Question">{question}</SolutionStep>
        {children}
      </div>
    </Expandable>
  );
}

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

      <CollapsibleRevision
        className="my-6 rounded-xl border border-border bg-card"
        contentClassName="p-4"
        label="Quick Revision — Formula Sheet"
        header={
          <div className="border-b border-border bg-muted/25 px-4 py-3 pr-12">
            <h3 id="h-10-quick-revision" className="m-0! border-0! p-0! text-base! font-semibold! tracking-tight!">
              6. Quick Revision — Formula Sheet
            </h3>
          </div>
        }
      >
        <VectorFormulaSheetDashboard />
      </CollapsibleRevision>

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

      <h2 id="h-10-4">10.4 Product of Two Vectors</h2>
      <p>
        The <strong>scalar product</strong> of two vectors gives a single number, not a vector.
        It is also called the dot product.
      </p>

      <h3 id="h-10-4-1">1. Scalar (Dot) Product</h3>

      <h4 id="h-10-4-1-1">1.1 Definition and Geometric Meaning</h4>
      <p>
        For two non-zero vectors <Formula>{String.raw`\vec a`}</Formula> and{" "}
        <Formula>{String.raw`\vec b`}</Formula>, the product is the magnitude of each vector
        multiplied by the cosine of the angle between them.
      </p>
      <FormulaBlock
        latex={String.raw`\boxed{\vec a\cdot\vec b=|\vec a|\,|\vec b|\cos\theta}`}
        important
        label="Scalar product"
      />
      <FormulaBlock latex={String.raw`0\le\theta\le\pi`} label="Range of the angle" />
      <p>
        If either vector is the zero vector, <Formula>{String.raw`\theta`}</Formula> is not
        defined, and the product is taken as zero.
      </p>
      <FormulaBlock
        latex={String.raw`\vec a=\vec 0\ \text{ or }\ \vec b=\vec 0\ \Longrightarrow\ \vec a\cdot\vec b=0`}
      />
      <p>
        <strong>Sign.</strong> The cosine decides the sign: positive for an acute angle, zero at{" "}
        <Formula>{String.raw`90^\circ`}</Formula>, negative for an obtuse angle.
      </p>
      <DotProductGeometryDiagram />

      <h4 id="h-10-4-1-2">1.2 Properties</h4>
      <TableCard
        title="Properties of the dot product"
        headers={["Property", "Statement"]}
        rows={[
          {
            cells: [
              "Commutativity",
              <span key="comm">
                <Formula>{String.raw`\vec a\cdot\vec b=\vec b\cdot\vec a`}</Formula>
              </span>,
            ],
          },
          {
            cells: [
              "Perpendicularity",
              <span key="perp">
                For non-zero vectors, <Formula>{String.raw`\vec a\cdot\vec b=0`}</Formula> if
                and only if <Formula>{String.raw`\vec a\perp\vec b`}</Formula>, since{" "}
                <Formula>{String.raw`\cos 90^\circ=0`}</Formula>.
              </span>,
            ],
          },
          {
            cells: [
              "Self dot product",
              <span key="self">
                <Formula>{String.raw`\vec a\cdot\vec a=|\vec a|^2`}</Formula>
              </span>,
            ],
          },
        ]}
        caption="The second row is the test for perpendicular vectors."
      />
      <p>
        For the orthonormal base vectors <Formula>{String.raw`\hat i,\hat j,\hat k`}</Formula>,
        each vector dotted with itself gives 1, and two different base vectors give 0.
      </p>
      <FormulaBlock
        latex={String.raw`\hat i\cdot\hat i=\hat j\cdot\hat j=\hat k\cdot\hat k=1`}
      />
      <FormulaBlock
        latex={String.raw`\hat i\cdot\hat j=\hat j\cdot\hat k=\hat k\cdot\hat i=0`}
      />

      <h4 id="h-10-4-1-3">1.3 Component Form</h4>
      <p>Let the two vectors be given in components.</p>
      <FormulaBlock latex={String.raw`\vec a=a_1\hat i+a_2\hat j+a_3\hat k`} />
      <FormulaBlock latex={String.raw`\vec b=b_1\hat i+b_2\hat j+b_3\hat k`} />
      <p>The product is the sum of the products of corresponding components.</p>
      <FormulaBlock
        latex={String.raw`\boxed{\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3}`}
        important
        label="Component form"
      />

      <h4 id="h-10-4-1-4">1.4 Angle Between Two Vectors</h4>
      <p>Rearranging the definition gives the cosine of the angle.</p>
      <FormulaBlock
        latex={String.raw`\boxed{\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}}`}
        important
      />
      <p>Written out in components:</p>
      <FormulaBlock
        latex={String.raw`\cos\theta=\frac{a_1b_1+a_2b_2+a_3b_3}{\sqrt{a_1^2+a_2^2+a_3^2}\,\sqrt{b_1^2+b_2^2+b_3^2}}`}
      />

      <h4 id="h-10-4-1-5">1.5 Projection of a Vector on a Line</h4>
      <p>
        The scalar projection of <Formula>{String.raw`\vec a`}</Formula> on{" "}
        <Formula>{String.raw`\vec b`}</Formula> is written with the unit vector{" "}
        <Formula>{String.raw`\hat b`}</Formula> along{" "}
        <Formula>{String.raw`\vec b`}</Formula>.
      </p>
      <FormulaBlock
        latex={String.raw`\boxed{\text{Projection of }\vec a\text{ on }\vec b=\frac{\vec a\cdot\vec b}{|\vec b|}=\vec a\cdot\hat b}`}
        important
        label="Scalar projection"
      />

      <h4 id="h-10-4-1-6">1.6 Solved Problems</h4>
      <p>
        Twelve problems follow. Each one is collapsed; open it to see the full working.
      </p>

      <SolvedProblem
        title="Problem 1 — Angle between î + ĵ − k̂ and î − ĵ + k̂"
        question={
          <p>
            Find the angle <Formula>{String.raw`\theta`}</Formula> between{" "}
            <Formula>{String.raw`\vec a=\hat i+\hat j-\hat k`}</Formula> and{" "}
            <Formula>{String.raw`\vec b=\hat i-\hat j+\hat k`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="The two vectors">
          <FormulaBlock latex={String.raw`\vec a=\hat i+\hat j-\hat k`} />
          <FormulaBlock latex={String.raw`\vec b=\hat i-\hat j+\hat k`} />
        </SolutionStep>
        <SolutionStep label="Dot product">
          <FormulaBlock
            latex={String.raw`\vec a\cdot\vec b=(1\times1)+(1\times-1)+(-1\times1)`}
          />
          <FormulaBlock latex={String.raw`=1-1-1`} />
          <FormulaBlock latex={String.raw`=-1`} />
        </SolutionStep>
        <SolutionStep label="Magnitudes">
          <FormulaBlock
            latex={String.raw`|\vec a|=\sqrt{1^2+1^2+(-1)^2}=\sqrt3`}
          />
          <FormulaBlock
            latex={String.raw`|\vec b|=\sqrt{1^2+(-1)^2+1^2}=\sqrt3`}
          />
        </SolutionStep>
        <SolutionStep label="Formula">
          <FormulaBlock
            latex={String.raw`\theta=\cos^{-1}\left(\frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}\right)`}
          />
        </SolutionStep>
        <SolutionStep label="Calculation">
          <FormulaBlock
            latex={String.raw`\theta=\cos^{-1}\left(\frac{-1}{\sqrt3\cdot\sqrt3}\right)`}
          />
          <FormulaBlock
            latex={String.raw`\boxed{\theta=\cos^{-1}\left(-\frac13\right)}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Problem 2 — Show that a + b and a − b are perpendicular"
        question={
          <p>
            If <Formula>{String.raw`\vec a=5\hat i-\hat j-3\hat k`}</Formula> and{" "}
            <Formula>{String.raw`\vec b=\hat i+3\hat j-5\hat k`}</Formula>, show that the vectors{" "}
            <Formula>{String.raw`\vec a+\vec b`}</Formula> and{" "}
            <Formula>{String.raw`\vec a-\vec b`}</Formula> are perpendicular.
          </p>
        }
      >
        <SolutionStep label="To prove">
          <FormulaBlock
            latex={String.raw`(\vec a+\vec b)\cdot(\vec a-\vec b)=0`}
          />
        </SolutionStep>
        <SolutionStep label="Sum and difference">
          <FormulaBlock
            latex={String.raw`\vec a+\vec b=6\hat i+2\hat j-8\hat k`}
          />
          <FormulaBlock
            latex={String.raw`\vec a-\vec b=4\hat i-4\hat j+2\hat k`}
          />
        </SolutionStep>
        <SolutionStep label="Dot product">
          <FormulaBlock
            latex={String.raw`(\vec a+\vec b)\cdot(\vec a-\vec b)=(6\times4)+(2\times-4)+(-8\times2)`}
          />
          <FormulaBlock latex={String.raw`=24-8-16`} />
          <FormulaBlock latex={String.raw`=24-24`} />
          <FormulaBlock latex={String.raw`\boxed{=0}`} important />
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <p>
            <Formula>{String.raw`\therefore\ \vec a+\vec b`}</Formula> and{" "}
            <Formula>{String.raw`\vec a-\vec b`}</Formula> are perpendicular vectors.
          </p>
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Problem 3 — Find |a − b| from the magnitudes and a · b"
        question={
          <p>
            Find <Formula>{String.raw`|\vec a-\vec b|`}</Formula>, if two vectors{" "}
            <Formula>{String.raw`\vec a`}</Formula> and{" "}
            <Formula>{String.raw`\vec b`}</Formula> are such that{" "}
            <Formula>{String.raw`|\vec a|=2`}</Formula>,{" "}
            <Formula>{String.raw`|\vec b|=3`}</Formula> and{" "}
            <Formula>{String.raw`\vec a\cdot\vec b=4`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Expand the square">
          <FormulaBlock
            latex={String.raw`|\vec a-\vec b|^2=(\vec a-\vec b)\cdot(\vec a-\vec b)`}
          />
          <FormulaBlock
            latex={String.raw`=\vec a\cdot\vec a-\vec b\cdot\vec a-\vec a\cdot\vec b+\vec b\cdot\vec b`}
          />
        </SolutionStep>
        <SolutionStep label="Use a · a = |a|² and b · a = a · b">
          <FormulaBlock
            latex={String.raw`=|\vec a|^2-\vec a\cdot\vec b-\vec a\cdot\vec b+|\vec b|^2`}
          />
          <FormulaBlock
            latex={String.raw`=|\vec a|^2-2\vec a\cdot\vec b+|\vec b|^2`}
          />
        </SolutionStep>
        <SolutionStep label="Substitute the values">
          <FormulaBlock latex={String.raw`=2^2-2\times4+3^2`} />
          <FormulaBlock latex={String.raw`=4-8+9`} />
          <FormulaBlock latex={String.raw`|\vec a-\vec b|^2=5`} />
          <FormulaBlock
            latex={String.raw`\boxed{|\vec a-\vec b|=\sqrt5}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Problem 4 — Angle from magnitudes √3 and 2, with a · b = √6"
        question={
          <p>
            Find the angle between two vectors <Formula>{String.raw`\vec a`}</Formula> and{" "}
            <Formula>{String.raw`\vec b`}</Formula> with magnitudes{" "}
            <Formula>{String.raw`\sqrt3`}</Formula> and <Formula>{String.raw`2`}</Formula>,
            respectively, having <Formula>{String.raw`\vec a\cdot\vec b=\sqrt6`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Given">
          <FormulaBlock
            latex={String.raw`|\vec a|=\sqrt3,\qquad |\vec b|=2,\qquad \vec a\cdot\vec b=\sqrt6`}
          />
        </SolutionStep>
        <SolutionStep label="Substitute in the angle formula">
          <FormulaBlock
            latex={String.raw`\theta=\cos^{-1}\left(\frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}\right)`}
          />
          <FormulaBlock
            latex={String.raw`\theta=\cos^{-1}\left(\frac{\sqrt6}{\sqrt3\times2}\right)`}
          />
        </SolutionStep>
        <SolutionStep label="Simplify">
          <FormulaBlock
            latex={String.raw`=\cos^{-1}\left(\sqrt{\frac63}\times\frac12\right)`}
          />
          <FormulaBlock
            latex={String.raw`=\cos^{-1}\left(\frac{\sqrt2}{\sqrt2\times\sqrt2}\right)`}
          />
          <FormulaBlock latex={String.raw`=\cos^{-1}\left(\frac{1}{\sqrt2}\right)`} />
          <FormulaBlock
            latex={String.raw`\boxed{\theta=\frac{\pi}{4}\ \text{ or }\ 45^\circ}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Problem 5 — Angle between î − 2ĵ + 3k̂ and 3î − 2ĵ + k̂"
        question={
          <p>
            Find the angle between the vectors{" "}
            <Formula>{String.raw`\hat i-2\hat j+3\hat k`}</Formula> and{" "}
            <Formula>{String.raw`3\hat i-2\hat j+\hat k`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="The two vectors">
          <FormulaBlock latex={String.raw`\vec a=\hat i-2\hat j+3\hat k`} />
          <FormulaBlock latex={String.raw`\vec b=3\hat i-2\hat j+\hat k`} />
        </SolutionStep>
        <SolutionStep label="Dot product">
          <FormulaBlock
            latex={String.raw`\vec a\cdot\vec b=(1\times3)+(-2\times-2)+(3\times1)`}
          />
          <FormulaBlock latex={String.raw`=3+4+3`} />
          <FormulaBlock latex={String.raw`=10`} />
        </SolutionStep>
        <SolutionStep label="Magnitudes">
          <FormulaBlock
            latex={String.raw`|\vec a|=\sqrt{1^2+(-2)^2+3^2}=\sqrt{14}`}
          />
          <FormulaBlock
            latex={String.raw`|\vec b|=\sqrt{3^2+(-2)^2+1^2}=\sqrt{14}`}
          />
        </SolutionStep>
        <SolutionStep label="Angle">
          <FormulaBlock
            latex={String.raw`\theta=\cos^{-1}\left(\frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}\right)`}
          />
          <FormulaBlock
            latex={String.raw`=\cos^{-1}\left(\frac{10}{\sqrt{14}\times\sqrt{14}}\right)`}
          />
          <FormulaBlock
            latex={String.raw`\boxed{\theta=\cos^{-1}\left(\frac{10}{14}\right)}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Problem 6 — Equal magnitudes from a 60° angle and a · b = ½"
        question={
          <p>
            Find the magnitude of two vectors <Formula>{String.raw`\vec a`}</Formula> and{" "}
            <Formula>{String.raw`\vec b`}</Formula>, having the same magnitude and such that the
            angle between them is <Formula>{String.raw`60^\circ`}</Formula> and their scalar
            product is <Formula>{String.raw`\frac12`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Given">
          <FormulaBlock
            latex={String.raw`|\vec a|=|\vec b|=?,\qquad \theta=60^\circ=\frac{\pi}{3},\qquad \vec a\cdot\vec b=\frac12`}
          />
        </SolutionStep>
        <SolutionStep label="Put the values in the angle formula">
          <FormulaBlock
            latex={String.raw`\theta=\cos^{-1}\left(\frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}\right)`}
          />
          <FormulaBlock
            latex={String.raw`60^\circ=\cos^{-1}\left(\frac{\frac12}{|\vec a|\cdot|\vec a|}\right)`}
          />
        </SolutionStep>
        <SolutionStep label="Take the cosine of both sides">
          <FormulaBlock
            latex={String.raw`\cos60^\circ=\frac{1}{2|\vec a|^2}`}
          />
          <FormulaBlock
            latex={String.raw`\frac12=\frac12\times\frac{1}{|\vec a|^2}`}
          />
          <FormulaBlock latex={String.raw`|\vec a|^2=1`} />
          <FormulaBlock
            latex={String.raw`\boxed{|\vec a|=|\vec b|=1}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Problem 7 — What a · a = 0 and a · b = 0 imply about b"
        question={
          <p>
            If <Formula>{String.raw`\vec a\cdot\vec a=0`}</Formula> and{" "}
            <Formula>{String.raw`\vec a\cdot\vec b=0`}</Formula>, then what can be concluded about
            the vector <Formula>{String.raw`\vec b`}</Formula>?
          </p>
        }
      >
        <SolutionStep label="From a · a = 0">
          <FormulaBlock latex={String.raw`\vec a\cdot\vec a=0`} />
          <FormulaBlock latex={String.raw`|\vec a|^2=0`} />
          <FormulaBlock latex={String.raw`|\vec a|=0`} />
          <p>
            So <Formula>{String.raw`\vec a`}</Formula> is the zero vector.
          </p>
        </SolutionStep>
        <SolutionStep label="From a · b = 0">
          <FormulaBlock latex={String.raw`\vec a\cdot\vec b=0`} />
          <FormulaBlock
            latex={String.raw`|\vec a|\,|\vec b|\cos\theta=0`}
          />
          <p>
            The product is zero whatever <Formula>{String.raw`\vec b`}</Formula> is, so{" "}
            <Formula>{String.raw`\vec b`}</Formula> can be any vector.
          </p>
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Problem 8 — Find |a| and |b| when (a + b) · (a − b) = 8"
        question={
          <p>
            Find <Formula>{String.raw`|\vec a|`}</Formula> and{" "}
            <Formula>{String.raw`|\vec b|`}</Formula>, if{" "}
            <Formula>{String.raw`(\vec a+\vec b)\cdot(\vec a-\vec b)=8`}</Formula> and{" "}
            <Formula>{String.raw`|\vec a|=8|\vec b|`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Expand the product">
          <FormulaBlock
            latex={String.raw`(\vec a+\vec b)\cdot(\vec a-\vec b)=8`}
          />
          <FormulaBlock
            latex={String.raw`\vec a\cdot\vec a+\vec b\cdot\vec a-\vec a\cdot\vec b-\vec b\cdot\vec b=8`}
          />
          <FormulaBlock
            latex={String.raw`|\vec a|^2+\vec a\cdot\vec b-\vec a\cdot\vec b-|\vec b|^2=8`}
          />
        </SolutionStep>
        <SolutionStep label="Substitute |a| = 8|b|">
          <FormulaBlock latex={String.raw`(8|\vec b|)^2-|\vec b|^2=8`} />
          <FormulaBlock latex={String.raw`64|\vec b|^2-|\vec b|^2=8`} />
          <FormulaBlock latex={String.raw`63|\vec b|^2=8`} />
          <FormulaBlock latex={String.raw`|\vec b|^2=\frac{8}{63}`} />
          <FormulaBlock
            latex={String.raw`|\vec b|=\sqrt{\frac{8}{63}}=\frac{2\sqrt2}{3\sqrt7}`}
          />
        </SolutionStep>
        <SolutionStep label="Then |a| = 8|b|">
          <FormulaBlock
            latex={String.raw`\boxed{|\vec a|=\frac{16\sqrt2}{3\sqrt7},\qquad |\vec b|=\frac{2\sqrt2}{3\sqrt7}}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Problem 9 — Evaluate (3a − 5b) · (2a + 7b)"
        question={
          <p>
            Evaluate the product{" "}
            <Formula>{String.raw`(3\vec a-5\vec b)\cdot(2\vec a+7\vec b)`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Multiply out">
          <FormulaBlock
            latex={String.raw`(3\vec a-5\vec b)\cdot(2\vec a+7\vec b)`}
          />
          <FormulaBlock
            latex={String.raw`=6\vec a\cdot\vec a+21\vec a\cdot\vec b-10\vec b\cdot\vec a-35\vec b\cdot\vec b`}
          />
          <FormulaBlock
            latex={String.raw`\boxed{=6|\vec a|^2+11\vec a\cdot\vec b-35|\vec b|^2}`}
            important
          />
        </SolutionStep>
        <SolutionStep label="Used above">
          <FormulaBlock latex={String.raw`\vec a\cdot\vec b=\vec b\cdot\vec a`} />
          <FormulaBlock latex={String.raw`\vec a\cdot\vec a=|\vec a|^2`} />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Problem 10 — Find |x| for a unit vector a"
        question={
          <p>
            Find <Formula>{String.raw`|\vec x|`}</Formula>, if for a unit vector{" "}
            <Formula>{String.raw`\vec a`}</Formula>,{" "}
            <Formula>{String.raw`(\vec x-\vec a)\cdot(\vec x+\vec a)=12`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Given">
          <FormulaBlock latex={String.raw`|\vec a|=1`} />
        </SolutionStep>
        <SolutionStep label="Expand the product">
          <FormulaBlock
            latex={String.raw`(\vec x-\vec a)\cdot(\vec x+\vec a)=12`}
          />
          <FormulaBlock
            latex={String.raw`\vec x\cdot\vec x+\vec x\cdot\vec a-\vec a\cdot\vec x-\vec a\cdot\vec a=12`}
          />
          <FormulaBlock
            latex={String.raw`|\vec x|^2-|\vec a|^2=12`}
          />
          <FormulaBlock latex={String.raw`|\vec x|^2-1=12`} />
          <FormulaBlock latex={String.raw`|\vec x|^2=13`} />
          <FormulaBlock
            latex={String.raw`\boxed{|\vec x|=\sqrt{13}}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Problem 11 — Find λ when a + λb is perpendicular to c"
        question={
          <p>
            If <Formula>{String.raw`\vec a=2\hat i+2\hat j+3\hat k`}</Formula>,{" "}
            <Formula>{String.raw`\vec b=-\hat i+2\hat j+\hat k`}</Formula> and{" "}
            <Formula>{String.raw`\vec c=3\hat i+\hat j`}</Formula> are such that{" "}
            <Formula>{String.raw`\vec a+\lambda\vec b`}</Formula> is perpendicular to{" "}
            <Formula>{String.raw`\vec c`}</Formula>, then find the value of{" "}
            <Formula>{String.raw`\lambda`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Form a + λb">
          <FormulaBlock
            latex={String.raw`\vec a+\lambda\vec b=2\hat i+2\hat j+3\hat k-\lambda\hat i+2\lambda\hat j+\lambda\hat k`}
          />
          <FormulaBlock
            latex={String.raw`=(2-\lambda)\hat i+(2+2\lambda)\hat j+(3+\lambda)\hat k`}
          />
        </SolutionStep>
        <SolutionStep label="Set the dot product with c to zero">
          <FormulaBlock latex={String.raw`\vec c=3\hat i+\hat j`} />
          <FormulaBlock latex={String.raw`(\vec a+\lambda\vec b)\cdot\vec c=0`} />
          <FormulaBlock
            latex={String.raw`(2-\lambda)3+(2+2\lambda)\times1+(3+\lambda)\times0=0`}
          />
        </SolutionStep>
        <SolutionStep label="Solve">
          <FormulaBlock latex={String.raw`6-3\lambda+2+2\lambda=0`} />
          <FormulaBlock latex={String.raw`8-\lambda=0`} />
          <FormulaBlock latex={String.raw`\boxed{\lambda=8}`} important />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Problem 12 — Find ∠ABC of the triangle A(1, 2, 3), B(−1, 0, 0), C(0, 1, 2)"
        question={
          <p>
            If the vertices <Formula>{String.raw`A`}</Formula>,{" "}
            <Formula>{String.raw`B`}</Formula>, <Formula>{String.raw`C`}</Formula> of a triangle{" "}
            <Formula>{String.raw`ABC`}</Formula> are{" "}
            <Formula>{String.raw`(1,2,3)`}</Formula>,{" "}
            <Formula>{String.raw`(-1,0,0)`}</Formula>,{" "}
            <Formula>{String.raw`(0,1,2)`}</Formula> respectively, then find{" "}
            <Formula>{String.raw`\angle ABC`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Which vectors form the angle">
          <p>
            <Formula>{String.raw`\angle ABC`}</Formula> is the angle between the vectors{" "}
            <Formula>{String.raw`\overrightarrow{BA}`}</Formula> and{" "}
            <Formula>{String.raw`\overrightarrow{BC}`}</Formula>.
          </p>
          <TriangleAngleDiagram />
        </SolutionStep>
        <SolutionStep label="The two vectors">
          <FormulaBlock
            latex={String.raw`\overrightarrow{BA}=2\hat i+2\hat j+3\hat k`}
          />
          <FormulaBlock
            latex={String.raw`\overrightarrow{BC}=\hat i+\hat j+2\hat k`}
          />
        </SolutionStep>
        <SolutionStep label="Magnitudes and dot product">
          <FormulaBlock
            latex={String.raw`|\overrightarrow{BA}|=\sqrt{2^2+2^2+3^2}=\sqrt{17}`}
          />
          <FormulaBlock
            latex={String.raw`|\overrightarrow{BC}|=\sqrt{1^2+1^2+2^2}=\sqrt6`}
          />
          <FormulaBlock
            latex={String.raw`\overrightarrow{BA}\cdot\overrightarrow{BC}=(2\times1)+(2\times1)+(3\times2)=10`}
          />
        </SolutionStep>
        <SolutionStep label="Angle between BA and BC">
          <FormulaBlock
            latex={String.raw`\theta=\cos^{-1}\left(\frac{\overrightarrow{BA}\cdot\overrightarrow{BC}}{|\overrightarrow{BA}|\,|\overrightarrow{BC}|}\right)`}
          />
          <FormulaBlock
            latex={String.raw`=\cos^{-1}\left(\frac{10}{\sqrt{17}\times\sqrt6}\right)`}
          />
          <FormulaBlock
            latex={String.raw`\boxed{\theta=\cos^{-1}\left(\frac{10}{\sqrt{102}}\right)}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <h3 id="h-10-4-2">2. Vector (Cross) Product</h3>
      <p>
        The <strong>vector product</strong> of two vectors gives a vector, not a number. It is also
        called the cross product.
      </p>

      <h4 id="h-10-4-2-1">2.1 Definition and Direction</h4>
      <p>
        For two non-zero vectors <Formula>{String.raw`\vec a`}</Formula> and{" "}
        <Formula>{String.raw`\vec b`}</Formula>, the product carries the sine of the angle between
        them.
      </p>
      <FormulaBlock
        latex={String.raw`\boxed{\vec a\times\vec b=|\vec a|\,|\vec b|\sin\theta\,\hat n}`}
        important
        label="Vector product"
      />
      <FormulaBlock latex={String.raw`0\le\theta\le\pi`} label="Range of the angle" />
      <p>
        <Formula>{String.raw`\hat n`}</Formula> is a unit vector perpendicular to both{" "}
        <Formula>{String.raw`\vec a`}</Formula> and <Formula>{String.raw`\vec b`}</Formula>, chosen
        so that <Formula>{String.raw`\vec a,\vec b,\hat n`}</Formula> form a right-handed system.
      </p>
      <CrossProductDirectionDiagram />

      <h4 id="h-10-4-2-2">2.2 Properties</h4>
      <TableCard
        title="Properties of the cross product"
        headers={["Property", "Statement"]}
        rows={[
          {
            cells: [
              "Anti-commutativity",
              <span key="anti">
                <Formula>{String.raw`\vec a\times\vec b=-(\vec b\times\vec a)`}</Formula>
              </span>,
            ],
          },
          {
            cells: [
              "Parallelism",
              <span key="par">
                For non-zero vectors, <Formula>{String.raw`\vec a\times\vec b=\vec 0`}</Formula>{" "}
                if and only if <Formula>{String.raw`\vec a\parallel\vec b`}</Formula>, since{" "}
                <Formula>{String.raw`\sin 0^\circ=0`}</Formula>.
              </span>,
            ],
          },
        ]}
        caption="A zero cross product means the two vectors lie along one line."
      />
      <p>For the orthonormal base vectors, a vector crossed with itself gives the zero vector.</p>
      <FormulaBlock
        latex={String.raw`\hat i\times\hat i=\hat j\times\hat j=\hat k\times\hat k=\vec 0`}
      />
      <p>Two different base vectors, taken in cyclic order, give the third.</p>
      <FormulaBlock
        latex={String.raw`\hat i\times\hat j=\hat k,\qquad \hat j\times\hat k=\hat i,\qquad \hat k\times\hat i=\hat j`}
      />

      <h4 id="h-10-4-2-3">2.3 Determinant Component Form</h4>
      <p>
        For two vectors in components, the product is the determinant with the base vectors in the
        first row.
      </p>
      <FormulaBlock latex={String.raw`\vec a=a_1\hat i+a_2\hat j+a_3\hat k`} />
      <FormulaBlock latex={String.raw`\vec b=b_1\hat i+b_2\hat j+b_3\hat k`} />
      <FormulaBlock
        latex={String.raw`\boxed{\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\ a_1&a_2&a_3\\ b_1&b_2&b_3\end{vmatrix}}`}
        important
        label="Component form"
      />

      <h4 id="h-10-4-2-4">2.4 Unit Vector Perpendicular to Both</h4>
      <p>Dividing the product by its own magnitude gives a unit vector, with either sign.</p>
      <FormulaBlock
        latex={String.raw`\boxed{\hat n=\pm\frac{\vec a\times\vec b}{|\vec a\times\vec b|}}`}
        important
      />

      <h4 id="h-10-4-2-5">2.5 Sine of the Angle Between Two Vectors</h4>
      <p>Rearranging the definition gives the sine of the angle.</p>
      <FormulaBlock
        latex={String.raw`\boxed{\sin\theta=\frac{|\vec a\times\vec b|}{|\vec a|\,|\vec b|}}`}
        important
      />

      <h4 id="h-10-4-2-6">2.6 Geometric Area Applications</h4>
      <TableCard
        title="Areas from the cross product"
        headers={["Figure", "Given", "Area"]}
        rows={[
          {
            cells: [
              "Parallelogram",
              <span key="p1">
                Adjacent sides <Formula>{String.raw`\vec a`}</Formula> and{" "}
                <Formula>{String.raw`\vec b`}</Formula>
              </span>,
              <Formula key="p1a">{String.raw`|\vec a\times\vec b|`}</Formula>,
            ],
          },
          {
            cells: [
              "Parallelogram",
              <span key="p2">
                Diagonals <Formula>{String.raw`\vec d_1`}</Formula> and{" "}
                <Formula>{String.raw`\vec d_2`}</Formula>
              </span>,
              <Formula key="p2a">{String.raw`\frac12|\vec d_1\times\vec d_2|`}</Formula>,
            ],
          },
          {
            cells: [
              "Triangle",
              <span key="p3">
                Adjacent sides <Formula>{String.raw`\vec a`}</Formula> and{" "}
                <Formula>{String.raw`\vec b`}</Formula>
              </span>,
              <Formula key="p3a">{String.raw`\frac12|\vec a\times\vec b|`}</Formula>,
            ],
          },
        ]}
        caption="A triangle is half the parallelogram built on the same two sides."
      />

      <h3 id="h-10-4-3">3. Integrated Problem Types &amp; Applications</h3>
      <p>Each type below states the method, then works one example.</p>

      <h4 id="h-10-4-3-1">Type 1 — Projection of a Vector</h4>
      <p>
        <strong>Method.</strong> Compute{" "}
        <Formula>{String.raw`\frac{\vec a\cdot\vec b}{|\vec b|}`}</Formula>.
      </p>
      <SolvedProblem
        title="Example — projection of î + 3ĵ + 7k̂ on 7î − ĵ + 8k̂"
        question={
          <p>
            Find the projection of <Formula>{String.raw`\vec a=\hat i+3\hat j+7\hat k`}</Formula>{" "}
            on <Formula>{String.raw`\vec b=7\hat i-\hat j+8\hat k`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Dot product">
          <FormulaBlock latex={String.raw`\vec a\cdot\vec b=(1)(7)+(3)(-1)+(7)(8)`} />
          <FormulaBlock latex={String.raw`=7-3+56=60`} />
        </SolutionStep>
        <SolutionStep label="Magnitude of b">
          <FormulaBlock
            latex={String.raw`|\vec b|=\sqrt{7^2+(-1)^2+8^2}=\sqrt{49+1+64}=\sqrt{114}`}
          />
        </SolutionStep>
        <SolutionStep label="Projection">
          <FormulaBlock
            latex={String.raw`\boxed{\text{Projection}=\frac{60}{\sqrt{114}}}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <h4 id="h-10-4-3-2">Type 2 — Parameter Determination via Orthogonality</h4>
      <p>
        <strong>Method.</strong> Set <Formula>{String.raw`\vec a\cdot\vec b=0`}</Formula> and
        solve for the unknown parameter.
      </p>
      <SolvedProblem
        title="Example — find λ when a = 2î + λĵ + k̂ is perpendicular to b = î − 2ĵ + 3k̂"
        question={
          <p>
            Find <Formula>{String.raw`\lambda`}</Formula> if{" "}
            <Formula>{String.raw`\vec a=2\hat i+\lambda\hat j+\hat k`}</Formula> and{" "}
            <Formula>{String.raw`\vec b=\hat i-2\hat j+3\hat k`}</Formula> are perpendicular.
          </p>
        }
      >
        <SolutionStep label="Dot product">
          <FormulaBlock latex={String.raw`\vec a\cdot\vec b=2(1)+\lambda(-2)+1(3)`} />
          <FormulaBlock latex={String.raw`=5-2\lambda=0`} />
        </SolutionStep>
        <SolutionStep label="Solve for λ">
          <FormulaBlock latex={String.raw`\boxed{\lambda=\frac52}`} important />
        </SolutionStep>
      </SolvedProblem>

      <h4 id="h-10-4-3-3">Type 3 — Unit Normal Vector</h4>
      <p>
        <strong>Method.</strong> Compute <Formula>{String.raw`\vec a\times\vec b`}</Formula>, then
        divide by its magnitude.
      </p>
      <SolvedProblem
        title="Example — unit vector perpendicular to î + ĵ + k̂ and î + 2ĵ + 3k̂"
        question={
          <p>
            Find a unit vector perpendicular to{" "}
            <Formula>{String.raw`\vec a=\hat i+\hat j+\hat k`}</Formula> and{" "}
            <Formula>{String.raw`\vec b=\hat i+2\hat j+3\hat k`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Cross product">
          <FormulaBlock
            latex={String.raw`\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\ 1&1&1\\ 1&2&3\end{vmatrix}`}
          />
          <FormulaBlock
            latex={String.raw`=\hat i(3-2)-\hat j(3-1)+\hat k(2-1)`}
          />
          <FormulaBlock latex={String.raw`=\hat i-2\hat j+\hat k`} />
        </SolutionStep>
        <SolutionStep label="Magnitude">
          <FormulaBlock
            latex={String.raw`|\vec a\times\vec b|=\sqrt{1^2+(-2)^2+1^2}=\sqrt6`}
          />
        </SolutionStep>
        <SolutionStep label="Unit vector">
          <FormulaBlock
            latex={String.raw`\boxed{\hat n=\frac{1}{\sqrt6}\hat i-\frac{2}{\sqrt6}\hat j+\frac{1}{\sqrt6}\hat k}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <h4 id="h-10-4-3-4">Type 4 — Area of Parallelogram and Triangle</h4>
      <SolvedProblem
        title="Example — area of the triangle A(1, 1, 1), B(1, 2, 3), C(2, 3, 1)"
        question={
          <p>
            Find the area of the triangle with vertices{" "}
            <Formula>{String.raw`A(1,1,1)`}</Formula>,{" "}
            <Formula>{String.raw`B(1,2,3)`}</Formula>,{" "}
            <Formula>{String.raw`C(2,3,1)`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Two sides as vectors">
          <FormulaBlock
            latex={String.raw`\overrightarrow{AB}=(1-1)\hat i+(2-1)\hat j+(3-1)\hat k=\hat j+2\hat k`}
          />
          <FormulaBlock
            latex={String.raw`\overrightarrow{AC}=(2-1)\hat i+(3-1)\hat j+(1-1)\hat k=\hat i+2\hat j`}
          />
        </SolutionStep>
        <SolutionStep label="Cross product">
          <FormulaBlock
            latex={String.raw`\overrightarrow{AB}\times\overrightarrow{AC}=\begin{vmatrix}\hat i&\hat j&\hat k\\ 0&1&2\\ 1&2&0\end{vmatrix}`}
          />
          <FormulaBlock
            latex={String.raw`=\hat i(0-4)-\hat j(0-2)+\hat k(0-1)`}
          />
          <FormulaBlock latex={String.raw`=-4\hat i+2\hat j-\hat k`} />
        </SolutionStep>
        <SolutionStep label="Magnitude and area">
          <FormulaBlock
            latex={String.raw`|\overrightarrow{AB}\times\overrightarrow{AC}|=\sqrt{(-4)^2+2^2+(-1)^2}=\sqrt{21}`}
          />
          <FormulaBlock
            latex={String.raw`\boxed{\text{Area of triangle}=\frac12\sqrt{21}\text{ sq. units}}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <h3 id="h-10-4-4">4. Area of Triangle and Parallelogram</h3>

      <h4 id="h-10-4-4-1">4.1 Area of a Triangle</h4>
      <p>
        The two vectors are adjacent sides drawn from one vertex of the triangle.
      </p>
      <TriangleAreaDiagram />
      <FormulaBlock
        latex={String.raw`\boxed{\text{Area}=\frac12|\vec a\times\vec b|}`}
        important
        label="Triangle"
      />

      <h4 id="h-10-4-4-2">4.2 Area of a Parallelogram</h4>
      <p>
        The same two vectors are the adjacent sides of the parallelogram.
      </p>
      <ParallelogramAreaDiagram />
      <FormulaBlock
        latex={String.raw`\boxed{\text{Area}=|\vec a\times\vec b|}`}
        important
        label="Parallelogram"
      />

      <h4 id="h-10-4-4-3">4.3 Solved Problems</h4>
      <SolvedProblem
        title="Area problem 1 — triangle A(1, 1, 2), B(2, 3, 5), C(1, 5, 5)"
        question={
          <p>
            Find the area of the triangle with vertices{" "}
            <Formula>{String.raw`A(1,1,2)`}</Formula>,{" "}
            <Formula>{String.raw`B(2,3,5)`}</Formula> and{" "}
            <Formula>{String.raw`C(1,5,5)`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Sides as vectors">
          <TriangleAreaDiagram vertices={["A(1, 1, 2)", "B(2, 3, 5)", "C(1, 5, 5)"]} />
          <FormulaBlock
            latex={String.raw`\overrightarrow{AB}=\vec a=\hat i+2\hat j+3\hat k`}
          />
          <FormulaBlock
            latex={String.raw`\overrightarrow{AC}=\vec b=0\hat i+4\hat j+3\hat k`}
          />
          <FormulaBlock
            latex={String.raw`\text{Area of }\triangle=\frac12|\vec a\times\vec b|`}
          />
        </SolutionStep>
        <SolutionStep label="Cross product">
          <FormulaBlock
            latex={String.raw`\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\ 1&2&3\\ 0&4&3\end{vmatrix}`}
          />
          <FormulaBlock
            latex={String.raw`=\hat i(6-12)-\hat j(3-0)+\hat k(4-0)`}
          />
          <FormulaBlock latex={String.raw`=-6\hat i-3\hat j+4\hat k`} />
        </SolutionStep>
        <SolutionStep label="Magnitude and area">
          <FormulaBlock
            latex={String.raw`|\vec a\times\vec b|=\sqrt{(-6)^2+(-3)^2+4^2}`}
          />
          <FormulaBlock latex={String.raw`=\sqrt{36+9+16}=\sqrt{61}`} />
          <FormulaBlock
            latex={String.raw`\boxed{\text{Area of }\triangle=\frac12\sqrt{61}\text{ sq. units}}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Area problem 2 [Imp] — parallelogram with sides î − ĵ + 3k̂ and 2î − 7ĵ + k̂"
        question={
          <p>
            Find the area of the parallelogram whose adjacent sides are determined by the vectors{" "}
            <Formula>{String.raw`\vec a=\hat i-\hat j+3\hat k`}</Formula> and{" "}
            <Formula>{String.raw`\vec b=2\hat i-7\hat j+\hat k`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="The two sides">
          <ParallelogramAreaDiagram />
          <FormulaBlock latex={String.raw`\vec a=\hat i-\hat j+3\hat k`} />
          <FormulaBlock latex={String.raw`\vec b=2\hat i-7\hat j+\hat k`} />
        </SolutionStep>
        <SolutionStep label="Cross product">
          <FormulaBlock
            latex={String.raw`\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\ 1&-1&3\\ 2&-7&1\end{vmatrix}`}
          />
          <FormulaBlock
            latex={String.raw`=\hat i(-1-(-21))-\hat j(1-6)+\hat k(-7-(-2))`}
          />
          <FormulaBlock latex={String.raw`=20\hat i+5\hat j-5\hat k`} />
        </SolutionStep>
        <SolutionStep label="Magnitude and area">
          <FormulaBlock
            latex={String.raw`|\vec a\times\vec b|=\sqrt{20^2+5^2+(-5)^2}=\sqrt{450}`}
          />
          <FormulaBlock
            latex={String.raw`\boxed{\text{Area}=\sqrt{450}\text{ sq. units}}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Area problem 3 (MCQ) — when a × b is a unit vector"
        question={
          <>
            <p>
              Let the vectors <Formula>{String.raw`\vec a`}</Formula> and{" "}
              <Formula>{String.raw`\vec b`}</Formula> be such that{" "}
              <Formula>{String.raw`|\vec a|=3`}</Formula> and{" "}
              <Formula>{String.raw`|\vec b|=\frac{\sqrt2}{3}`}</Formula>. Then{" "}
              <Formula>{String.raw`\vec a\times\vec b`}</Formula> is a unit vector if the angle
              between <Formula>{String.raw`\vec a`}</Formula> and{" "}
              <Formula>{String.raw`\vec b`}</Formula> is
            </p>
            <p className="mt-2">
              (A) <Formula>{String.raw`\pi/6`}</Formula> &nbsp;&nbsp; (B){" "}
              <Formula>{String.raw`\pi/4`}</Formula> &nbsp;&nbsp; (C){" "}
              <Formula>{String.raw`\pi/3`}</Formula> &nbsp;&nbsp; (D){" "}
              <Formula>{String.raw`\pi/2`}</Formula>
            </p>
          </>
        }
      >
        <SolutionStep label="Magnitude of the product">
          <FormulaBlock latex={String.raw`|\vec a\times\vec b|=1`} />
        </SolutionStep>
        <SolutionStep label="Sine of the angle">
          <FormulaBlock
            latex={String.raw`\sin\theta=\frac{|\vec a\times\vec b|}{|\vec a|\,|\vec b|}`}
          />
          <FormulaBlock
            latex={String.raw`\sin\theta=\frac{1}{3\times\frac{\sqrt2}{3}}`}
          />
        </SolutionStep>
        <SolutionStep label="Angle">
          <FormulaBlock
            latex={String.raw`\theta=\sin^{-1}\left(\frac{1}{\sqrt2}\right)`}
          />
          <FormulaBlock latex={String.raw`\theta=\frac{\pi}{4}`} />
          <p>
            <strong>Correct option:</strong> (B){" "}
            <Formula>{String.raw`\pi/4`}</Formula>.
          </p>
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Area problem 4 (MCQ) — area of the rectangle ABCD"
        question={
          <>
            <p>
              The area of the rectangle <Formula>{String.raw`ABCD`}</Formula> is asked. Its four
              corners have these position vectors:
            </p>
            <TableCard
              headers={["Corner", "Position vector"]}
              rows={[
                {
                  cells: [
                    <Formula key="a">A</Formula>,
                    <Formula key="av">{String.raw`-\hat i+\frac12\hat j+4\hat k`}</Formula>,
                  ],
                },
                {
                  cells: [
                    <Formula key="b">B</Formula>,
                    <Formula key="bv">{String.raw`\hat i+\frac12\hat j+4\hat k`}</Formula>,
                  ],
                },
                {
                  cells: [
                    <Formula key="c">C</Formula>,
                    <Formula key="cv">{String.raw`\hat i-\frac12\hat j+4\hat k`}</Formula>,
                  ],
                },
                {
                  cells: [
                    <Formula key="d">D</Formula>,
                    <Formula key="dv">{String.raw`-\hat i-\frac12\hat j+4\hat k`}</Formula>,
                  ],
                },
              ]}
            />
            <p className="mt-2">The area of the rectangle is</p>
            <p className="mt-2">
              (A) <Formula>{String.raw`\frac12`}</Formula> &nbsp;&nbsp; (B){" "}
              <Formula>{String.raw`1`}</Formula> &nbsp;&nbsp; (C){" "}
              <Formula>{String.raw`2`}</Formula> &nbsp;&nbsp; (D){" "}
              <Formula>{String.raw`4`}</Formula>
            </p>
          </>
        }
      >
        <SolutionStep label="The rectangle">
          <RectangleAreaDiagram
            labels={["A(−1, ½, 4)", "B(1, ½, 4)", "C(1, −½, 4)", "D(−1, −½, 4)"]}
          />
          <FormulaBlock
            latex={String.raw`\text{Area of rectangle}=l\times b=|\overrightarrow{AB}|\times|\overrightarrow{AD}|`}
          />
        </SolutionStep>
        <SolutionStep label="The two sides">
          <FormulaBlock
            latex={String.raw`\overrightarrow{AB}=2\hat i+0\hat j+0\hat k`}
          />
          <FormulaBlock
            latex={String.raw`\overrightarrow{AD}=0\hat i-\hat j+0\hat k`}
          />
        </SolutionStep>
        <SolutionStep label="Lengths">
          <FormulaBlock
            latex={String.raw`|\overrightarrow{AB}|=\sqrt{2^2+0^2+0^2}=2`}
          />
          <FormulaBlock
            latex={String.raw`|\overrightarrow{AD}|=\sqrt{0^2+(-1)^2+0^2}=1`}
          />
        </SolutionStep>
        <SolutionStep label="Area">
          <FormulaBlock
            latex={String.raw`\text{Area of rectangle}=2\times1=2`}
          />
          <p>
            <strong>Correct option:</strong> (C) <Formula>{String.raw`2`}</Formula>.
          </p>
        </SolutionStep>
      </SolvedProblem>

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
