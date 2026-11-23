import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { TableCard } from "@/components/content/data/TableCard";
import { Comparison } from "@/components/content/Comparison";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import {
  DirectionAnglesDiagram,
  AxisCosinesDiagrams,
  EqualAnglesDiagram,
  CollinearPointsDiagram,
  TwoPointsSegmentDiagram,
} from "@/components/content/mathematics/DirectionCosines3D";
import {
  AstcQuadrantDiagram,
  TwoStepFlowDiagram,
  ProportionalTriplesDiagram,
} from "@/components/content/mathematics/DirectionCosinesSignDiagrams";

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

export default function ThreeDimensionalGeometryChapter() {
  return (
    <>
      <h2 id="h-11-1">11.1 Direction Cosines and Direction Ratios of a Line</h2>

      <h3 id="h-11-1-1">1.1 Direction Cosines</h3>
      <p>
        The <strong>direction cosines</strong> of a line are the cosines of the angles it makes
        with the positive directions of the three coordinate axes.
      </p>
      <TableCard
        title="Notation"
        headers={["Coordinate axis", "Angle", "Direction cosine"]}
        rows={[
          {
            cells: [
              "X-axis",
              <Formula key="ax">{String.raw`\alpha`}</Formula>,
              <Formula key="dcx">{String.raw`l=\cos\alpha`}</Formula>,
            ],
          },
          {
            cells: [
              "Y-axis",
              <Formula key="ay">{String.raw`\beta`}</Formula>,
              <Formula key="dcy">{String.raw`m=\cos\beta`}</Formula>,
            ],
          },
          {
            cells: [
              "Z-axis",
              <Formula key="az">{String.raw`\gamma`}</Formula>,
              <Formula key="dcz">{String.raw`n=\cos\gamma`}</Formula>,
            ],
          },
        ]}
      />
      <FormulaBlock
        latex={String.raw`\boxed{l^2+m^2+n^2=1}`}
        label="Fundamental identity"
        important
      />
      <DirectionAnglesDiagram />

      <SolvedProblem
        title="Example 1 — Finding Direction Cosines"
        question={
          <p>
            A line makes angles <Formula>{String.raw`90^\circ,60^\circ,30^\circ`}</Formula> with
            the positive X, Y and Z axes respectively. Find its direction cosines.
          </p>
        }
      >
        <SolutionStep label="Calculate each cosine">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <FormulaBlock latex={String.raw`l=\cos90^\circ=0`} />
            </div>
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <FormulaBlock latex={String.raw`m=\cos60^\circ=\frac12`} />
            </div>
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <FormulaBlock latex={String.raw`n=\cos30^\circ=\frac{\sqrt3}{2}`} />
            </div>
          </div>
        </SolutionStep>
        <SolutionStep label="Answer">
          <FormulaBlock
            latex={String.raw`\boxed{\left(0,\frac12,\frac{\sqrt3}{2}\right)}`}
            important
          />
        </SolutionStep>
        <SolutionStep label="Verification">
          <FormulaBlock
            latex={String.raw`0^2+\left(\frac12\right)^2+\left(\frac{\sqrt3}{2}\right)^2=1`}
          />
        </SolutionStep>
      </SolvedProblem>

      <h3 id="h-11-1-2">1.2 Direction Ratios</h3>
      <p>
        <strong>Direction ratios (DRs)</strong> are any three numbers proportional to the
        direction cosines of a line.
      </p>
      <FormulaBlock latex={String.raw`a=kl,\qquad b=km,\qquad c=kn`} />
      <p>
        Here <Formula>k</Formula> is a non-zero constant, so
      </p>
      <FormulaBlock latex={String.raw`\boxed{\frac{a}{l}=\frac{b}{m}=\frac{c}{n}=k}`} important />
      <p>
        Direction ratios and direction cosines describe the same direction, but they are not
        generally equal.
      </p>

      <Comparison
        columns={[
          {
            title: "Direction cosines",
            children: (
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Fixed by the line: <Formula>{String.raw`l=\cos\alpha,\ m=\cos\beta,\ n=\cos\gamma`}</Formula>.
                </li>
                <li>
                  Always satisfy <Formula>{String.raw`l^2+m^2+n^2=1`}</Formula>.
                </li>
              </ul>
            ),
          },
          {
            title: "Direction ratios",
            children: (
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Any proportional triple: <Formula>{String.raw`a=kl,\ b=km,\ c=kn`}</Formula>.
                </li>
                <li>
                  Not unique; any non-zero multiple gives the same direction.
                </li>
              </ul>
            ),
          },
        ]}
      />
      <ProportionalTriplesDiagram />
      <p>
        <Highlight>Proportional triples represent the same direction.</Highlight>
      </p>

      <p className="mt-6 font-semibold">Conversion: Direction Ratios → Direction Cosines</p>
      <p>
        For direction ratios <Formula>{String.raw`a,b,c`}</Formula>:
      </p>
      <div className="space-y-2">
        <FormulaBlock latex={String.raw`\boxed{l=\frac{a}{\sqrt{a^2+b^2+c^2}}}`} />
        <FormulaBlock latex={String.raw`\boxed{m=\frac{b}{\sqrt{a^2+b^2+c^2}}}`} />
        <FormulaBlock latex={String.raw`\boxed{n=\frac{c}{\sqrt{a^2+b^2+c^2}}}`} />
      </div>
      <p>
        The same formula applies if the direction ratios are represented by{" "}
        <Formula>{String.raw`p,q,r`}</Formula>.
      </p>

      <SolvedProblem
        title="Example 2 — Finding Direction Cosines from Direction Ratios"
        question={
          <p>
            A line has direction ratios <Formula>{String.raw`2,-1,-2`}</Formula>. Find its
            direction cosines.
          </p>
        }
      >
        <SolutionStep label="Given">
          <FormulaBlock latex={String.raw`a=2,\quad b=-1,\quad c=-2`} />
        </SolutionStep>
        <SolutionStep label="Denominator">
          <FormulaBlock
            latex={String.raw`\sqrt{a^2+b^2+c^2}=\sqrt{4+1+4}=3`}
          />
        </SolutionStep>
        <SolutionStep label="Direction cosines">
          <FormulaBlock latex={String.raw`l=\frac23,\qquad m=-\frac13,\qquad n=-\frac23`} />
        </SolutionStep>
        <SolutionStep label="Answer">
          <FormulaBlock
            latex={String.raw`\boxed{\left(\frac23,-\frac13,-\frac23\right)}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <h3 id="h-11-1-3">1.3 Practice Questions — Direction Cosines</h3>
      <Expandable
        title="Practice questions — direction cosines"
        subjectColor="var(--subject-mathematics)"
      >
        <ExerciseQa
          questions={[
            <div key="q1">
              <p>Which of the following triples can represent direction cosines?</p>
              <TableCard
                headers={["Option", "Triple"]}
                rows={[
                  {
                    cells: [
                      "A",
                      <Formula key="qa">{String.raw`\left(\frac12,\frac12,\frac12\right)`}</Formula>,
                    ],
                  },
                  {
                    cells: [
                      "B",
                      <Formula key="qb">{String.raw`\left(\frac{\sqrt3}{2},\frac12,4\right)`}</Formula>,
                    ],
                  },
                  {
                    cells: [
                      "C",
                      <Formula key="qc">{String.raw`\left(1,1,0\right)`}</Formula>,
                    ],
                  },
                  {
                    cells: [
                      "D",
                      <Formula key="qd">{String.raw`\left(0,-\frac{\sqrt2}{2},\frac{\sqrt2}{2}\right)`}</Formula>,
                    ],
                  },
                ]}
              />
            </div>,
            <p key="q2">
              A line is equally inclined to the Y- and Z-axes and makes{" "}
              <Formula>{String.raw`60^\circ`}</Formula> with the X-axis. Find its direction
              cosines.
            </p>,
            <p key="q3">
              A line has direction ratios proportional to{" "}
              <Formula>{String.raw`(1,-2,2)`}</Formula>. Find the angle it makes with the X-axis.
            </p>,
            <div key="q4">
              <p>A line makes an obtuse angle with the Z-axis.</p>
              <p>
                Its direction cosines are{" "}
                <Formula>{String.raw`l=\frac{\sqrt3}{2},\ m=\frac14`}</Formula>. Find{" "}
                <Formula>n</Formula>.
              </p>
            </div>,
            <p key="q5">
              Direction cosines are <Formula>{String.raw`(l,m,n)`}</Formula>, where{" "}
              <Formula>{String.raw`m=0`}</Formula> and{" "}
              <Formula>{String.raw`l:n=1:\sqrt3`}</Formula>. Find the angle with the Z-axis.
            </p>,
          ]}
          answers={[
            <div key="a1">
              <p>
                <strong>Answer: D.</strong> Check with{" "}
                <Formula>{String.raw`l^2+m^2+n^2=1`}</Formula>:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  A: <Formula>{String.raw`3/4\ne1`}</Formula>.
                </li>
                <li>
                  B: <Formula>{String.raw`>1`}</Formula>.
                </li>
                <li>
                  C: <Formula>{String.raw`2\ne1`}</Formula>.
                </li>
                <li>
                  D: <Formula>{String.raw`0+1/2+1/2=1`}</Formula>.
                </li>
              </ul>
            </div>,
            <div key="a2">
              <FormulaBlock latex={String.raw`l=\cos60^\circ=\frac12,\qquad m=n`} />
              <FormulaBlock latex={String.raw`\frac14+m^2+n^2=1`} />
              <FormulaBlock latex={String.raw`2m^2=\frac34`} />
              <FormulaBlock latex={String.raw`m=n=\frac{\sqrt3}{2\sqrt2}`} />
              <p>
                <strong>Answer: B.</strong>{" "}
                <Formula>{String.raw`\boxed{\left(\frac12,\frac{\sqrt3}{2\sqrt2},\frac{\sqrt3}{2\sqrt2}\right)}`}</Formula>
              </p>
            </div>,
            <div key="a3">
              <FormulaBlock latex={String.raw`l=\frac{1}{\sqrt{1+4+4}}=\frac13`} />
              <p>
                Since <Formula>{String.raw`l=\cos\alpha`}</Formula>:
              </p>
              <FormulaBlock latex={String.raw`\boxed{\alpha=\cos^{-1}\left(\frac13\right)}`} />
              <p>
                <strong>Answer: A.</strong>
              </p>
            </div>,
            <div key="a4">
              <FormulaBlock latex={String.raw`\frac34+\frac1{16}+n^2=1`} />
              <FormulaBlock latex={String.raw`n^2=\frac3{16}`} />
              <FormulaBlock latex={String.raw`n=\pm\frac{\sqrt3}{4}`} />
              <p>
                The angle with the Z-axis is obtuse, so{" "}
                <Formula>{String.raw`n=\cos\gamma<0`}</Formula>.
              </p>
              <p>
                <strong>Answer: B.</strong> <Formula>{String.raw`\boxed{n=-\frac{\sqrt3}{4}}`}</Formula>
              </p>
            </div>,
            <div key="a5">
              <FormulaBlock latex={String.raw`l=k,\qquad n=\sqrt3k`} />
              <FormulaBlock latex={String.raw`k^2+0+3k^2=1`} />
              <FormulaBlock latex={String.raw`n^2=\frac34`} />
              <p>For the acute-angle case:</p>
              <FormulaBlock latex={String.raw`n=\frac{\sqrt3}{2},\qquad \cos\gamma=\frac{\sqrt3}{2}`} />
              <p>
                <strong>Answer: A — </strong>
                <Formula>{String.raw`30^\circ`}</Formula>.
              </p>
            </div>,
          ]}
        />
      </Expandable>

      <h3 id="h-11-1-4">2. Direction Cosines of a Line Passing Through Two Points</h3>
      <p>
        Consider a line passing through{" "}
        <Formula>{String.raw`P(x_1,y_1,z_1),\quad Q(x_2,y_2,z_2)`}</Formula>.
      </p>
      <TwoStepFlowDiagram />

      <p className="mt-6 font-semibold">Step 1 — Find Direction Ratios</p>
      <FormulaBlock
        latex={String.raw`\boxed{a=x_2-x_1,\quad b=y_2-y_1,\quad c=z_2-z_1}`}
        important
      />

      <p className="mt-6 font-semibold">Step 2 — Convert to Direction Cosines</p>
      <div className="space-y-2">
        <FormulaBlock latex={String.raw`\boxed{l=\frac{x_2-x_1}{d}}`} />
        <FormulaBlock latex={String.raw`\boxed{m=\frac{y_2-y_1}{d}}`} />
        <FormulaBlock latex={String.raw`\boxed{n=\frac{z_2-z_1}{d}}`} />
      </div>
      <FormulaBlock
        latex={String.raw`d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}`}
      />
      <TwoPointsSegmentDiagram />

      <SolvedProblem
        title="Example 1 — Numerical Illustration"
        question={
          <p>
            Given points <Formula>{String.raw`P(2,3,5),\quad Q(4,8,9)`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Step 1 — Direction ratios">
          <FormulaBlock latex={String.raw`a=4-2=2`} />
          <FormulaBlock latex={String.raw`b=8-3=5`} />
          <FormulaBlock latex={String.raw`c=9-5=4`} />
          <FormulaBlock latex={String.raw`\text{DRs}=(2,5,4)`} important />
        </SolutionStep>
        <SolutionStep label="Step 2 — Direction cosines">
          <FormulaBlock latex={String.raw`d=\sqrt{2^2+5^2+4^2}=\sqrt{45}`} />
          <FormulaBlock
            latex={String.raw`l=\frac2{\sqrt{45}},\quad m=\frac5{\sqrt{45}},\quad n=\frac4{\sqrt{45}}`}
          />
        </SolutionStep>
        <SolutionStep label="Answer">
          <FormulaBlock
            latex={String.raw`\boxed{\left(\frac2{\sqrt{45}},\frac5{\sqrt{45}},\frac4{\sqrt{45}}\right)}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Example 2 — Line Through Two Given Points"
        question={
          <p>
            Find the direction cosines of the line passing through{" "}
            <Formula>{String.raw`(-2,4,-5)`}</Formula> and{" "}
            <Formula>{String.raw`(1,2,3)`}</Formula>.
          </p>
        }
      >
        <SolutionStep label="Step 1 — Direction ratios">
          <FormulaBlock latex={String.raw`a=1-(-2)=3`} />
          <FormulaBlock latex={String.raw`b=2-4=-2`} />
          <FormulaBlock latex={String.raw`c=3-(-5)=8`} />
          <FormulaBlock latex={String.raw`\text{DRs}=(3,-2,8)`} important />
        </SolutionStep>
        <SolutionStep label="Step 2 — Denominator">
          <FormulaBlock latex={String.raw`d=\sqrt{3^2+(-2)^2+8^2}`} />
          <FormulaBlock latex={String.raw`d=\sqrt{9+4+64}=\sqrt{77}`} />
        </SolutionStep>
        <SolutionStep label="Step 3 — Direction cosines">
          <FormulaBlock
            latex={String.raw`l=\frac3{\sqrt{77}},\quad m=-\frac2{\sqrt{77}},\quad n=\frac8{\sqrt{77}}`}
          />
        </SolutionStep>
        <SolutionStep label="Answer">
          <FormulaBlock
            latex={String.raw`\boxed{\left(\frac3{\sqrt{77}},-\frac2{\sqrt{77}},\frac8{\sqrt{77}}\right)}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <h3 id="h-11-1-5">3. Important Questions</h3>

      <Expandable title="Q1. Find the Direction Cosines of the Coordinate Axes" variant="example" id="h-11-1-5-1">
        <p>
          Each coordinate axis makes an angle of <Formula>{String.raw`0^\circ`}</Formula> with
          itself and <Formula>{String.raw`90^\circ`}</Formula> with the other two axes.
        </p>
        <TableCard
          headers={[
            "Axis",
            <Formula key="angles">{String.raw`(\alpha,\beta,\gamma)`}</Formula>,
            "Direction cosines",
          ]}
          rows={[
            {
              cells: [
                "X-axis",
                <Formula key="xa">{String.raw`(0^\circ,90^\circ,90^\circ)`}</Formula>,
                <Formula key="xd">{String.raw`(1,0,0)`}</Formula>,
              ],
            },
            {
              cells: [
                "Y-axis",
                <Formula key="ya">{String.raw`(90^\circ,0^\circ,90^\circ)`}</Formula>,
                <Formula key="yd">{String.raw`(0,1,0)`}</Formula>,
              ],
            },
            {
              cells: [
                "Z-axis",
                <Formula key="za">{String.raw`(90^\circ,90^\circ,0^\circ)`}</Formula>,
                <Formula key="zd">{String.raw`(0,0,1)`}</Formula>,
              ],
            },
          ]}
        />
        <AxisCosinesDiagrams />
      </Expandable>

      <SolvedProblem
        title="Q2. Angles 90°, 135°, 45° with the X, Y and Z Axes"
        question={
          <>
            <p>
              A line makes angles <Formula>{String.raw`90^\circ,135^\circ,45^\circ`}</Formula>{" "}
              with the X, Y and Z axes. Find its direction cosines.
            </p>
            <AstcQuadrantDiagram />
          </>
        }
      >
        <SolutionStep label="Calculate each cosine">
          <FormulaBlock latex={String.raw`l=\cos90^\circ=0`} />
          <FormulaBlock
            latex={String.raw`m=\cos135^\circ=\cos(180^\circ-45^\circ)=-\frac1{\sqrt2}`}
          />
          <FormulaBlock latex={String.raw`n=\cos45^\circ=\frac1{\sqrt2}`} />
        </SolutionStep>
        <SolutionStep label="Answer">
          <Callout type="note" title="Sign check">
            <p>
              Cosine is negative in the second quadrant. This explains the negative sign of{" "}
              <Formula>m</Formula>.
            </p>
          </Callout>
          <FormulaBlock
            latex={String.raw`\boxed{\left(0,-\frac1{\sqrt2},\frac1{\sqrt2}\right)}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Q3. Equal Angles with the Coordinate Axes"
        question={
          <>
            <p>Find the direction cosines of a line making equal angles with the coordinate axes.</p>
            <EqualAnglesDiagram />
          </>
        }
      >
        <SolutionStep label="Use equal angles">
          <FormulaBlock latex={String.raw`\alpha=\beta=\gamma\;\Rightarrow\;l=m=n`} />
          <FormulaBlock latex={String.raw`l^2+m^2+n^2=1`} />
          <FormulaBlock latex={String.raw`3l^2=1`} />
          <FormulaBlock latex={String.raw`l^2=\frac13`} />
          <FormulaBlock latex={String.raw`l=m=n=\pm\frac1{\sqrt3}`} />
        </SolutionStep>
        <SolutionStep label="Important clarification">
          <Callout type="important" title="Signs must be consistent">
            <p>
              The three angles are equal, so the signs cannot be chosen independently.
            </p>
            <p>The valid triples are only:</p>
            <div className="grid gap-2 sm:grid-cols-2">
              <FormulaBlock latex={String.raw`\boxed{\left(\frac1{\sqrt3},\frac1{\sqrt3},\frac1{\sqrt3}\right)}`} />
              <FormulaBlock latex={String.raw`\boxed{\left(-\frac1{\sqrt3},-\frac1{\sqrt3},-\frac1{\sqrt3}\right)}`} />
            </div>
          </Callout>
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Q4. Collinearity of A, B and C"
        question={
          <>
            <p>
              Show that the points <Formula>{String.raw`A(2,3,-4)`}</Formula>,{" "}
              <Formula>{String.raw`B(1,-2,3)`}</Formula> and{" "}
              <Formula>{String.raw`C(3,8,-11)`}</Formula> are collinear.
            </p>
            <CollinearPointsDiagram />
          </>
        }
      >
        <SolutionStep label="Step 1 — Direction ratios of AB">
          <FormulaBlock latex={String.raw`\overrightarrow{AB}=B-A`} />
          <FormulaBlock latex={String.raw`=(1-2,-2-3,3-(-4))`} />
          <FormulaBlock latex={String.raw`=(-1,-5,7)`} />
        </SolutionStep>
        <SolutionStep label="Step 2 — Direction ratios of BC">
          <FormulaBlock latex={String.raw`\overrightarrow{BC}=C-B`} />
          <FormulaBlock latex={String.raw`=(3-1,8-(-2),-11-3)`} />
          <FormulaBlock latex={String.raw`=(2,10,-14)`} />
        </SolutionStep>
        <SolutionStep label="Step 3 — Compare the ratios">
          <FormulaBlock latex={String.raw`\frac{2}{-1}=-2`} />
          <FormulaBlock latex={String.raw`\frac{10}{-5}=-2`} />
          <FormulaBlock latex={String.raw`\frac{-14}{7}=-2`} />
          <p>All three ratios are equal, so the direction ratios are proportional.</p>
          <FormulaBlock latex={String.raw`\overrightarrow{BC}=-2\overrightarrow{AB}`} />
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <FormulaBlock
            latex={String.raw`\boxed{A,B,C\text{ are collinear.}}`}
            important
          />
        </SolutionStep>
      </SolvedProblem>

      <Expandable title="Quick Revision Sheet" variant="recall" id="h-11-1-6">
        <TableCard
          headers={["Concept", "Formula / Result"]}
          rows={[
            {
              cells: [
                "Direction cosines",
                <Formula key="r1">{String.raw`l=\cos\alpha,\ m=\cos\beta,\ n=\cos\gamma`}</Formula>,
              ],
            },
            {
              cells: [
                "Fundamental identity",
                <Formula key="r2">{String.raw`l^2+m^2+n^2=1`}</Formula>,
              ],
            },
            {
              cells: [
                "DR–DC relationship",
                <Formula key="r3">{String.raw`a=kl,\ b=km,\ c=kn`}</Formula>,
              ],
            },
            {
              cells: [
                "DR to DC denominator",
                <Formula key="r4">{String.raw`\sqrt{a^2+b^2+c^2}`}</Formula>,
              ],
            },
            {
              cells: [
                "Direction ratios through two points",
                <Formula key="r5">
                  {String.raw`(x_2-x_1,\ y_2-y_1,\ z_2-z_1)`}
                </Formula>,
              ],
            },
            {
              cells: [
                "X-axis direction cosines",
                <Formula key="r6">{String.raw`(1,0,0)`}</Formula>,
              ],
            },
            {
              cells: [
                "Y-axis direction cosines",
                <Formula key="r7">{String.raw`(0,1,0)`}</Formula>,
              ],
            },
            {
              cells: [
                "Z-axis direction cosines",
                <Formula key="r8">{String.raw`(0,0,1)`}</Formula>,
              ],
            },
            {
              cells: [
                "Collinearity condition",
                "Direction ratios of connecting vectors are proportional",
              ],
            },
          ]}
        />

        <p className="mt-6 font-semibold">Important Sign Rules</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Acute angle</strong> with an axis → corresponding direction cosine is positive.
          </li>
          <li>
            <strong>Obtuse angle</strong> with an axis → corresponding direction cosine is negative.
          </li>
          <li>
            <strong>Right angle</strong> with an axis → corresponding direction cosine is zero.
          </li>
        </ul>
      </Expandable>

      <h2 id="h-11-2">11.2 Equation of a Line in Space</h2>
      <p>Vector form through a point <Formula>{String.raw`A`}</Formula> with position vector{" "}
      <Formula>{String.raw`\vec a`}</Formula> parallel to <Formula>{String.raw`\vec b`}</Formula>:</p>
      <FormulaBlock latex={String.raw`\vec r=\vec a+\lambda\vec b`} important label="Vector form" />
      <p>Cartesian form through <Formula>{String.raw`(x_1,y_1,z_1)`}</Formula> with dr’s{" "}
      <Formula>{String.raw`(a,b,c)`}</Formula>:</p>
      <FormulaBlock latex={String.raw`\frac{x-x_1}{a}=\frac{y-y_1}{b}=\frac{z-z_1}{c}=\lambda`} important label="Cartesian form" />
      <p>Through two points <Formula>{String.raw`(x_1,y_1,z_1)`}</Formula> and{" "}
      <Formula>{String.raw`(x_2,y_2,z_2)`}</Formula>:</p>
      <FormulaBlock latex={String.raw`\frac{x-x_1}{x_2-x_1}=\frac{y-y_1}{y_2-y_1}=\frac{z-z_1}{z_2-z_1}`} />

      <h2 id="h-11-3">11.3 Angle between Two Lines</h2>
      <p>
        If two lines have dr’s <Formula>{String.raw`(a_1,b_1,c_1)`}</Formula> and{" "}
        <Formula>{String.raw`(a_2,b_2,c_2)`}</Formula>, the acute angle between them is given by
      </p>
      <FormulaBlock latex={String.raw`\cos\theta=\frac{|a_1a_2+b_1b_2+c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\,\sqrt{a_2^2+b_2^2+c_2^2}}`} important />
      <p>
        (drop the absolute value for the directed angle) and the lines are{" "}
        <strong>parallel</strong> iff the dr’s are proportional, and{" "}
        <strong>perpendicular</strong> iff the dot product of dr’s is 0.
      </p>

      <h2 id="h-11-4">11.4 Shortest Distance between Two Lines</h2>
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
            <p><strong>Solution.</strong></p>
            <ul className="list-disc space-y-1 pl-5">
              <li>First line: dr’s (2,1,3).</li>
              <li>Second line: dr’s (3,4,5).</li>
              <li>Dot = 6 + 4 + 15 = 25.</li>
              <li>Magnitudes √14 and √50.</li>
              <li>cosθ = 25/(5√14) = 5/√14, θ ≈ 19.1°.</li>
            </ul>
          </div>
          <div>
            <p><strong>Example 6.</strong> Show that the lines <Formula>{String.raw`\vec r=(\hat i+2\hat j-4\hat k)+\lambda(2\hat i+3\hat j+6\hat k)`}</Formula> and <Formula>{String.raw`\vec r=(2\hat i+4\hat j+5\hat k)+\mu(6\hat i+3\hat j+2\hat k)`}</Formula> meet at a point.</p>
            <p><strong>Solution.</strong> Equate components to find λ and μ.</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>The three equations are consistent.</li>
              <li>They give λ = 2, μ = −1.</li>
              <li>The lines meet at the point (3,5,8).</li>
            </ul>
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
          <li><strong>dc’s identity:</strong> <Formula>{String.raw`l^2+m^2+n^2=1`}</Formula>. Use it to find missing cosines.</li>
          <li><strong>dr’s → dc’s:</strong> divide by <Formula>{String.raw`\sqrt{a^2+b^2+c^2}`}</Formula>.</li>
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
