import { Callout } from "@/components/content/Callout";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { TableCard } from "@/components/content/data/TableCard";
import { Comparison } from "@/components/content/Comparison";
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
import { LineEquationForms } from "@/components/content/mathematics/LineEquationForms";
import {
  IntersectingLinesAngleDiagram,
  ParallelLinesDistanceDiagram,
} from "@/components/content/mathematics/LineGeometry3D";

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

/** One numbered question or illustration with its own working. */
function QuestionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-4 first:border-t-0 first:pt-0">
      <p className="t-micro mb-3">{title}</p>
      <div className="space-y-3">{children}</div>
    </div>
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
      <p>A line in 3D space is determined by two components:</p>
      <ol className="list-decimal space-y-1.5 pl-5">
        <li><strong>Passing point:</strong> A point through which the line passes.</li>
        <li><strong>Parallel vector:</strong> A vector that gives the direction of the line.</li>
      </ol>

      <TableCard
        title="Required components"
        headers={["Component", "Form"]}
        rows={[
          {
            cells: [
              "Passing point",
              <Formula key="pc">{String.raw`\left(x_1,y_1,z_1\right)`}</Formula>,
            ],
          },
          {
            cells: [
              "Parallel vector",
              <Formula key="vc">{String.raw`a\hat i+b\hat j+c\hat k`}</Formula>,
            ],
          },
        ]}
      />

      <h3 id="h-11-2-1">1.1 Vector Form</h3>
      <p>Let:</p>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>
          <strong>Position vector of passing point:</strong>{" "}
          <Formula>{String.raw`\vec a=x_1\hat i+y_1\hat j+z_1\hat k`}</Formula>
        </li>
        <li>
          <strong>Parallel vector:</strong>{" "}
          <Formula>{String.raw`\vec b=a\hat i+b\hat j+c\hat k`}</Formula>
        </li>
        <li><strong>Scalar parameter:</strong> <Formula>{String.raw`\lambda`}</Formula></li>
      </ul>
      <p>The vector equation is:</p>
      <FormulaBlock latex={String.raw`\boxed{\vec r=\vec a+\lambda\vec b}`} important />
      <p>Expanded form:</p>
      <FormulaBlock
        latex={String.raw`\boxed{\vec r=x_1\hat i+y_1\hat j+z_1\hat k+\lambda(a\hat i+b\hat j+c\hat k)}`}
        important
      />

      <h3 id="h-11-2-2">1.2 Cartesian Form</h3>
      <FormulaBlock
        latex={String.raw`\boxed{\frac{x-x_1}{a}=\frac{y-y_1}{b}=\frac{z-z_1}{c}}`}
        important
      />
      <p>
        Here, <Formula>{String.raw`a,b,c`}</Formula> are the direction ratios of the line.
      </p>
      <LineEquationForms />

      <h3 id="h-11-2-3">1.3 Numerical Illustrations</h3>
      <Expandable
        title="Numerical illustrations — equation of a line"
        variant="example"
        subjectColor="var(--subject-mathematics)"
      >
        <QuestionBlock title="Illustration 1 — Given a point and parallel vector">
          <SolutionStep label="Passing point">
            <FormulaBlock latex={String.raw`\left(3,2,5\right)`} />
          </SolutionStep>
          <SolutionStep label="Parallel vector">
            <FormulaBlock latex={String.raw`5\hat i-2\hat j+3\hat k`} />
          </SolutionStep>
          <SolutionStep label="Required equation">
            <p><strong>Vector form:</strong></p>
            <FormulaBlock
              latex={String.raw`\boxed{\vec r=\left(3\hat i+2\hat j+5\hat k\right)+\lambda(5\hat i-2\hat j+3\hat k)}`}
              important
            />
            <p><strong>Cartesian form:</strong></p>
            <FormulaBlock
              latex={String.raw`\boxed{\frac{x-3}{5}=\frac{y-2}{-2}=\frac{z-5}{3}}`}
              important
            />
          </SolutionStep>
        </QuestionBlock>

        <QuestionBlock title="Illustration 2 — Given vector equation">
          <SolutionStep label="Given">
            <FormulaBlock latex={String.raw`\vec r=2\hat i+3\hat j+7\hat k+\lambda(3\hat i-2\hat j+\hat k)`} />
          </SolutionStep>
          <SolutionStep label="Extract the components">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Passing point:</strong> <Formula>{String.raw`(2,3,7)`}</Formula>
              </li>
              <li>
                <strong>Parallel vector:</strong> <Formula>{String.raw`(3,-2,1)`}</Formula>
              </li>
            </ul>
          </SolutionStep>
          <SolutionStep label="Required equation">
            <p><strong>Cartesian form:</strong></p>
            <FormulaBlock
              latex={String.raw`\boxed{\frac{x-2}{3}=\frac{y-3}{-2}=\frac{z-7}{1}}`}
              important
            />
          </SolutionStep>
        </QuestionBlock>

        <QuestionBlock title="Illustration 3 — Given Cartesian equation">
          <SolutionStep label="Given">
            <FormulaBlock latex={String.raw`\frac{x-5}{2}=\frac{y+3}{5}=\frac{z-3}{8}`} />
          </SolutionStep>
          <SolutionStep label="Extract the components">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Passing point:</strong> <Formula>{String.raw`(5,-3,3)`}</Formula>
              </li>
              <li>
                <strong>Parallel vector:</strong>{" "}
                <Formula>{String.raw`2\hat i+5\hat j+8\hat k`}</Formula>
              </li>
            </ul>
          </SolutionStep>
        </QuestionBlock>
      </Expandable>

      <h3 id="h-11-2-4">1.4 Practice Problems</h3>
      <Expandable
        title="Practice problems — equation of a line"
        variant="exercise"
        subjectColor="var(--subject-mathematics)"
      >
        <QuestionBlock title="Problem 1">
          <p>
            Find the vector and Cartesian equations of the line passing through{" "}
            <Formula>{String.raw`(5,2,-4)`}</Formula> and parallel to{" "}
            <Formula>{String.raw`3\hat i+2\hat j-8\hat k`}</Formula>.
          </p>
          <SolutionStep label="Given">
            <FormulaBlock latex={String.raw`\vec a=5\hat i+2\hat j-4\hat k`} />
            <FormulaBlock latex={String.raw`\vec b=3\hat i+2\hat j-8\hat k`} />
          </SolutionStep>
          <SolutionStep label="Vector form">
            <FormulaBlock
              latex={String.raw`\boxed{\vec r=5\hat i+2\hat j-4\hat k+\lambda(3\hat i+2\hat j-8\hat k)}`}
              important
            />
          </SolutionStep>
          <SolutionStep label="Cartesian form">
            <FormulaBlock
              latex={String.raw`\boxed{\frac{x-5}{3}=\frac{y-2}{2}=\frac{z+4}{-8}}`}
              important
            />
          </SolutionStep>
        </QuestionBlock>

        <QuestionBlock title="Problem 2 — Cartesian to vector">
          <p>Convert the following Cartesian equation into vector form.</p>
          <SolutionStep label="Given">
            <FormulaBlock latex={String.raw`\frac{x-5}{3}=\frac{y+4}{7}=\frac{z-6}{2}`} />
          </SolutionStep>
          <SolutionStep label="Extracted components">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Passing point:</strong> <Formula>{String.raw`(5,-4,6)`}</Formula>
              </li>
              <li>
                <strong>Parallel vector:</strong>{" "}
                <Formula>{String.raw`3\hat i+7\hat j+2\hat k`}</Formula>
              </li>
            </ul>
          </SolutionStep>
          <SolutionStep label="Answer">
            <FormulaBlock
              latex={String.raw`\boxed{\vec r=5\hat i-4\hat j+6\hat k+\lambda(3\hat i+7\hat j+2\hat k)}`}
              important
            />
          </SolutionStep>
        </QuestionBlock>

        <QuestionBlock title="Problem 3 — Vector to Cartesian">
          <p>Convert the following vector equation into Cartesian form.</p>
          <SolutionStep label="Given">
            <FormulaBlock latex={String.raw`\vec r=2\hat i-5\hat j+\hat k+\lambda(3\hat i+2\hat j+6\hat k)`} />
          </SolutionStep>
          <SolutionStep label="Extracted components">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Passing point:</strong> <Formula>{String.raw`(2,-5,1)`}</Formula>
              </li>
              <li>
                <strong>Parallel vector:</strong> <Formula>{String.raw`(3,2,6)`}</Formula>
              </li>
            </ul>
          </SolutionStep>
          <SolutionStep label="Answer">
            <FormulaBlock
              latex={String.raw`\boxed{\frac{x-2}{3}=\frac{y+5}{2}=\frac{z-1}{6}}`}
              important
            />
          </SolutionStep>
        </QuestionBlock>
      </Expandable>

      <h2 id="h-11-3">11.3 Angle Between Two Lines</h2>
      <p>
        The angle between two lines is calculated using their parallel (direction) vectors.
      </p>
      <p>Let the direction vectors be:</p>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>
          <Formula>{String.raw`\vec b_1=a_1\hat i+b_1\hat j+c_1\hat k`}</Formula>
        </li>
        <li>
          <Formula>{String.raw`\vec b_2=a_2\hat i+b_2\hat j+c_2\hat k`}</Formula>
        </li>
      </ul>
      <p><strong>Formula:</strong></p>
      <FormulaBlock
        latex={String.raw`\boxed{\cos\theta=\left|\frac{\vec b_1\cdot\vec b_2}{|\vec b_1||\vec b_2|}\right|}`}
        important
      />
      <p>
        The absolute value gives the acute angle between the two lines (or{" "}
        <Formula>{String.raw`90^\circ`}</Formula> if perpendicular).
      </p>
      <p><strong>Expanded formula:</strong></p>
      <FormulaBlock
        latex={String.raw`\boxed{\cos\theta=\frac{|a_1a_2+b_1b_2+c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\sqrt{a_2^2+b_2^2+c_2^2}}}`}
        important
      />
      <IntersectingLinesAngleDiagram />

      <h3 id="h-11-3-1">2.1 Numerical Illustration</h3>
      <Expandable
        title="Numerical illustration — angle between lines"
        variant="example"
        subjectColor="var(--subject-mathematics)"
      >
        <QuestionBlock title="Worked example — perpendicular lines">
          <SolutionStep label="Given">
            <FormulaBlock latex={String.raw`\vec r=7\hat i+2\hat j+8\hat k+\lambda_1(5\hat i+2\hat j-3\hat k)`} />
            <FormulaBlock latex={String.raw`\vec r=3\hat i+3\hat j-2\hat k+\lambda_2(5\hat i-2\hat j+7\hat k)`} />
          </SolutionStep>
          <SolutionStep label="Step 1 — Extract parallel vectors">
            <FormulaBlock latex={String.raw`\vec b_1=(5,2,-3)`} />
            <FormulaBlock latex={String.raw`\vec b_2=(5,-2,7)`} />
          </SolutionStep>
          <SolutionStep label="Step 2 — Dot product">
            <FormulaBlock latex={String.raw`\vec b_1\cdot\vec b_2=25-4-21=0`} />
          </SolutionStep>
          <SolutionStep label="Step 3 — Magnitudes">
            <FormulaBlock latex={String.raw`|\vec b_1|=\sqrt{25+4+9}=\sqrt{38}`} />
            <FormulaBlock latex={String.raw`|\vec b_2|=\sqrt{25+4+49}=\sqrt{78}`} />
          </SolutionStep>
          <SolutionStep label="Step 4 — Calculate angle">
            <FormulaBlock latex={String.raw`\cos\theta=\left|\frac{0}{\sqrt{38}\sqrt{78}}\right|=0`} />
            <FormulaBlock latex={String.raw`\boxed{\theta=90^\circ}`} important />
            <p><strong>Conclusion:</strong> Perpendicular lines</p>
          </SolutionStep>
        </QuestionBlock>
      </Expandable>

      <h3 id="h-11-3-2">2.2 Practice Problems</h3>
      <Expandable
        title="Practice problems — angle between lines"
        variant="exercise"
        subjectColor="var(--subject-mathematics)"
      >
        <QuestionBlock title="Problem 1">
          <p>Find the angle between:</p>
          <SolutionStep label="Given">
            <FormulaBlock latex={String.raw`\vec r=3\hat i+2\hat j-4\hat k+\lambda(\hat i+2\hat j+2\hat k)`} />
            <FormulaBlock latex={String.raw`\vec r=5\hat i-2\hat j+\mu(3\hat i+2\hat j+6\hat k)`} />
          </SolutionStep>
          <SolutionStep label="Step 1 — Parallel vectors">
            <FormulaBlock latex={String.raw`\vec b_1=(1,2,2),\qquad \vec b_2=(3,2,6)`} />
          </SolutionStep>
          <SolutionStep label="Step 2 — Dot product">
            <FormulaBlock latex={String.raw`\vec b_1\cdot\vec b_2=3+4+12=19`} />
          </SolutionStep>
          <SolutionStep label="Step 3 — Magnitudes">
            <FormulaBlock latex={String.raw`|\vec b_1|=\sqrt9=3`} />
            <FormulaBlock latex={String.raw`|\vec b_2|=\sqrt{49}=7`} />
          </SolutionStep>
          <SolutionStep label="Step 4 — Angle">
            <FormulaBlock latex={String.raw`\cos\theta=\frac{19}{3\times7}=\frac{19}{21}`} />
            <FormulaBlock latex={String.raw`\boxed{\theta=\cos^{-1}\left(\frac{19}{21}\right)}`} important />
          </SolutionStep>
        </QuestionBlock>

        <QuestionBlock title="Problem 2">
          <p>Find the angle between:</p>
          <SolutionStep label="Given">
            <FormulaBlock latex={String.raw`\frac{x+3}{3}=\frac{y-1}{5}=\frac{z+3}{4}`} />
            <FormulaBlock latex={String.raw`\frac{x+1}{1}=\frac{y-4}{1}=\frac{z-5}{2}`} />
          </SolutionStep>
          <SolutionStep label="Parallel vectors">
            <FormulaBlock latex={String.raw`\vec b_1=(3,5,4)`} />
            <FormulaBlock latex={String.raw`\vec b_2=(1,1,2)`} />
          </SolutionStep>
          <SolutionStep label="Dot product">
            <FormulaBlock latex={String.raw`\vec b_1\cdot\vec b_2=3+5+8=16`} />
          </SolutionStep>
          <SolutionStep label="Magnitudes">
            <FormulaBlock latex={String.raw`|\vec b_1|=\sqrt{50}`} />
            <FormulaBlock latex={String.raw`|\vec b_2|=\sqrt6`} />
          </SolutionStep>
          <SolutionStep label="Angle">
            <FormulaBlock latex={String.raw`\cos\theta=\frac{16}{\sqrt{50}\sqrt6}`} />
            <FormulaBlock
              latex={String.raw`\boxed{\theta=\cos^{-1}\left(\frac{16}{\sqrt{300}}\right)}`}
              important
            />
          </SolutionStep>
        </QuestionBlock>
      </Expandable>

      <h3 id="h-11-3-3">2.3 Multiple-Choice Questions</h3>
      <Expandable
        title="Multiple-choice questions — angle between lines"
        variant="exercise"
        subjectColor="var(--subject-mathematics)"
      >
        <QuestionBlock title="Q1. Direction ratios (1, 2, 3) and (2, −1, 2)">
          <p>Find the angle between lines with direction ratios{" "}
            <Formula>{String.raw`(1,2,3)`}</Formula> and <Formula>{String.raw`(2,-1,2)`}</Formula>.
          </p>
          <SolutionStep label="Working">
            <FormulaBlock latex={String.raw`\vec b_1\cdot\vec b_2=2-2+6=6`} />
            <FormulaBlock latex={String.raw`|\vec b_1|=\sqrt{14},\qquad |\vec b_2|=3`} />
            <FormulaBlock latex={String.raw`\cos\theta=\frac6{3\sqrt{14}}=\frac2{\sqrt{14}}`} />
          </SolutionStep>
          <SolutionStep label="Answer">
            <p><strong>Answer: A</strong></p>
            <FormulaBlock latex={String.raw`\boxed{\theta=\cos^{-1}\left(\frac2{\sqrt{14}}\right)}`} important />
          </SolutionStep>
        </QuestionBlock>

        <QuestionBlock title="Q2. Direction ratios (2, 1, −1) and (1, 1, 1)">
          <p>
            Direction ratios of two lines are <Formula>{String.raw`(2,1,-1)`}</Formula> and{" "}
            <Formula>{String.raw`(1,1,1)`}</Formula>. Find the angle.
          </p>
          <SolutionStep label="Working">
            <FormulaBlock latex={String.raw`\vec b_1\cdot\vec b_2=2+1-1=2`} />
            <FormulaBlock latex={String.raw`|\vec b_1|=\sqrt6,\qquad |\vec b_2|=\sqrt3`} />
            <FormulaBlock latex={String.raw`\cos\theta=\frac2{\sqrt6\sqrt3}=\frac2{3\sqrt2}`} />
          </SolutionStep>
          <SolutionStep label="Answer">
            <p><strong>Answer: A (exact), B (approximate)</strong></p>
            <FormulaBlock
              latex={String.raw`\boxed{\theta=\cos^{-1}\left(\frac2{3\sqrt2}\right)\approx61.87^\circ}`}
              important
            />
          </SolutionStep>
        </QuestionBlock>
      </Expandable>

      <h2 id="h-11-4">11.4 Distance Between Parallel Lines</h2>
      <p>Two lines are parallel when their direction vectors are proportional.</p>
      <p>For the given vector forms:</p>
      <FormulaBlock latex={String.raw`L_1:\vec r=\vec a_1+\lambda\vec b`} />
      <FormulaBlock latex={String.raw`L_2:\vec r=\vec a_2+\mu\vec b`} />
      <p>where:</p>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>
          <strong><Formula>{String.raw`\vec a_1`}</Formula></strong> = position vector of a point on
          the first line.
        </li>
        <li>
          <strong><Formula>{String.raw`\vec a_2`}</Formula></strong> = position vector of a point on
          the second line.
        </li>
        <li>
          <strong><Formula>{String.raw`\vec b`}</Formula></strong> = common parallel vector.
        </li>
      </ul>

      <h3 id="h-11-4-1">3.1 Shortest Distance Formula</h3>
      <FormulaBlock
        latex={String.raw`\boxed{d=\frac{|\vec b\times(\vec a_2-\vec a_1)|}{|\vec b|}}`}
        important
      />
      <p>
        The cross product gives a vector perpendicular to both the parallel direction and the
        displacement between the lines.
      </p>
      <ParallelLinesDistanceDiagram />

      <h3 id="h-11-4-2">3.2 Step-by-Step Procedure</h3>
      <ol className="list-decimal space-y-2 pl-5">
        <li><strong>Identify</strong> <Formula>{String.raw`\vec a_1,\vec a_2,\vec b`}</Formula>.</li>
        <li>
          <strong>Calculate the difference:</strong>
          <FormulaBlock latex={String.raw`\vec a_2-\vec a_1`} />
        </li>
        <li>
          <strong>Calculate the cross product:</strong>
          <FormulaBlock latex={String.raw`\vec b\times(\vec a_2-\vec a_1)`} />
        </li>
        <li>
          <strong>Calculate both magnitudes:</strong>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li><Formula>{String.raw`|\vec b|`}</Formula></li>
            <li><Formula>{String.raw`|\vec b\times(\vec a_2-\vec a_1)|`}</Formula></li>
          </ul>
        </li>
        <li><strong>Substitute</strong> into the shortest-distance formula.</li>
      </ol>

      <h3 id="h-11-4-3">3.3 Component Extraction Illustration</h3>
      <Expandable
        title="Component extraction — parallel lines"
        variant="example"
        subjectColor="var(--subject-mathematics)"
      >
        <QuestionBlock title="Extract the vectors">
          <SolutionStep label="Given">
            <FormulaBlock latex={String.raw`\vec r=5\hat i+3\hat j+7\hat k+\lambda(5\hat i+4\hat j+8\hat k)`} />
            <FormulaBlock latex={String.raw`\vec r=2\hat i+3\hat j-8\hat k+\lambda(5\hat i+4\hat j+8\hat k)`} />
          </SolutionStep>
          <SolutionStep label="Extracted vectors">
            <FormulaBlock latex={String.raw`\vec a_1=(5,3,7)`} />
            <FormulaBlock latex={String.raw`\vec a_2=(2,3,-8)`} />
            <FormulaBlock latex={String.raw`\vec b=(5,4,8)`} />
          </SolutionStep>
          <SolutionStep label="Observation">
            <p>
              <Highlight>Both lines have the same direction vector.</Highlight>
            </p>
          </SolutionStep>
        </QuestionBlock>
      </Expandable>

      <h3 id="h-11-4-4">3.4 Practice Problem — Shortest Distance</h3>
      <Expandable
        title="Practice problem — shortest distance between parallel lines"
        variant="exercise"
        subjectColor="var(--subject-mathematics)"
      >
        <QuestionBlock title="Find the distance">
          <p>Find the distance between:</p>
          <SolutionStep label="Given">
            <FormulaBlock latex={String.raw`L_1:\vec r=\hat i+2\hat j-4\hat k+\lambda(2\hat i+3\hat j+6\hat k)`} />
            <FormulaBlock latex={String.raw`L_2:\vec r=3\hat i+3\hat j-5\hat k+\mu(2\hat i+3\hat j+6\hat k)`} />
          </SolutionStep>
          <SolutionStep label="Step 1 — Identify vectors">
            <FormulaBlock latex={String.raw`\vec a_1=(1,2,-4)`} />
            <FormulaBlock latex={String.raw`\vec a_2=(3,3,-5)`} />
            <FormulaBlock latex={String.raw`\vec b=(2,3,6)`} />
          </SolutionStep>
          <SolutionStep label="Step 2 — Find the difference">
            <FormulaBlock latex={String.raw`\vec a_2-\vec a_1=(3-1,3-2,-5+4)`} />
            <FormulaBlock latex={String.raw`=(2,1,-1)`} />
          </SolutionStep>
          <SolutionStep label="Step 3 — Calculate cross product">
            <FormulaBlock
              latex={String.raw`\vec b\times(\vec a_2-\vec a_1)=\begin{vmatrix} \hat i&\hat j&\hat k\\ 2&3&6\\ 2&1&-1 \end{vmatrix}`}
            />
            <FormulaBlock latex={String.raw`=\hat i(-3-6)-\hat j(-2-12)+\hat k(2-6)`} />
            <FormulaBlock latex={String.raw`=-9\hat i+14\hat j-4\hat k`} />
          </SolutionStep>
          <SolutionStep label="Step 4 — Calculate magnitudes">
            <FormulaBlock latex={String.raw`|\vec b|=\sqrt{2^2+3^2+6^2}=\sqrt{49}=7`} />
            <FormulaBlock latex={String.raw`|\vec b\times(\vec a_2-\vec a_1)|=\sqrt{(-9)^2+14^2+(-4)^2}`} />
            <FormulaBlock latex={String.raw`=\sqrt{81+196+16}=\sqrt{293}`} />
          </SolutionStep>
          <SolutionStep label="Step 5 — Calculate shortest distance">
            <FormulaBlock latex={String.raw`d=\frac{\sqrt{293}}7`} />
          </SolutionStep>
          <SolutionStep label="Final Answer">
            <FormulaBlock latex={String.raw`\boxed{d=\frac{\sqrt{293}}7\text{ units}}`} important />
          </SolutionStep>
        </QuestionBlock>
      </Expandable>

      <Expandable title="Formula Revision Sheet" variant="recall" id="h-11-5">
        <TableCard
          headers={["Topic", "Formula"]}
          rows={[
            {
              cells: [
                "Vector equation of a line",
                <Formula key="f1">{String.raw`\vec r=\vec a+\lambda\vec b`}</Formula>,
              ],
            },
            {
              cells: [
                "Cartesian equation",
                <Formula key="f2">{String.raw`\frac{x-x_1}{a}=\frac{y-y_1}{b}=\frac{z-z_1}{c}`}</Formula>,
              ],
            },
            {
              cells: [
                "Direction vector",
                <Formula key="f3">{String.raw`(a,b,c)`}</Formula>,
              ],
            },
            {
              cells: [
                "Dot product",
                <Formula key="f4">{String.raw`a_1a_2+b_1b_2+c_1c_2`}</Formula>,
              ],
            },
            {
              cells: [
                "Vector magnitude",
                <Formula key="f5">{String.raw`\sqrt{a^2+b^2+c^2}`}</Formula>,
              ],
            },
            {
              cells: [
                "Angle between lines",
                <Formula key="f6">{String.raw`\cos\theta=\frac{\|\vec b_1\cdot\vec b_2\|}{\|\vec b_1\|\|\vec b_2\|}`}</Formula>,
              ],
            },
            {
              cells: ["Parallel lines", "Direction vectors proportional"],
            },
            {
              cells: [
                "Shortest distance between parallel lines",
                <Formula key="f8">{String.raw`\frac{\|\vec b\times(\vec a_2-\vec a_1)\|}{\|\vec b\|}`}</Formula>,
              ],
            },
          ]}
        />
      </Expandable>
    </>
  );
}
