import { Callout } from "@/components/content/Callout";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function StraightLinesChapter() {
  return (
    <>
      <h2 id="h-intro">9.1 Introduction</h2>
      <ul>
        <li>Every point in the plane is described by an <strong>ordered pair (x, y)</strong>.</li>
        <li>The <Highlight>distance formula</Highlight> gives the length between two points.</li>
        <li>The <Highlight>section formula</Highlight> finds a point dividing a segment in a given ratio.</li>
        <li>The <Highlight>area of a triangle</Highlight> from vertex coordinates is a key tool.</li>
      </ul>

      <FormulaCard>
        <p className="font-semibold mb-2">Key Formulas from Class X</p>
        <FormulaBlock latex={String.raw`d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \quad \text{(Distance)}`} />
        <FormulaBlock latex={String.raw`\left(\frac{x_1+x_2}{2},\; \frac{y_1+y_2}{2}\right) \quad \text{(Midpoint)}`} />
        <FormulaBlock latex={String.raw`\left(\frac{mx_2 + nx_1}{m+n},\; \frac{my_2 + ny_1}{m+n}\right) \quad \text{(Section formula)}`} />
        <FormulaBlock latex={String.raw`\text{Area} = \frac{1}{2}\big|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\big|`} />
      </FormulaCard>

      <SpeedTricks>
        <Callout type="tip" title="Distance formula — order doesn't matter">
          (x&#8322; &#8722; x&#8321;)² = (x&#8321; &#8722; x&#8322;)². The subtraction order is irrelevant
          because squaring removes the sign.
        </Callout>
        <Callout type="tip" title="Section formula memory trick">
          The point dividing AB in ratio m:n uses the <em>cross</em> pattern: m multiplies the{" "}
          <em>far</em> endpoint, n multiplies the <em>near</em> endpoint.
        </Callout>
      </SpeedTricks>

      <Expandable title="Class X Recap — Worked Examples">
        <ProblemSolution problemNumber="Recap 1">
          <ProblemSolution.Problem>
            Find the coordinates of the midpoint of the line joining P(−4, 1) and Q(0, 5).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Apply midpoint formula", description: <Formula>{String.raw`\left(\frac{-4+0}{2},\ \frac{1+5}{2}\right)`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`\left(\frac{-4}{2},\ \frac{6}{2}\right) = (-2,\ 3)`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Recap 2">
          <ProblemSolution.Problem>
            Find the area of the triangle whose vertices are (4, 4), (3, −2) and (−3, 16).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Substitute into area formula", description: <Formula>{String.raw`\frac{1}{2}\big|4(-2-16) + 3(16-4) + (-3)(4-(-2))\big|`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`\frac{1}{2}\big|4(-18) + 3(12) - 3(6)\big| = \frac{1}{2}|{-72 + 36 - 18}|`}</Formula> },
                { label: "Result", description: <Formula>{String.raw`\frac{1}{2}|{-54}| = 27 \text{ sq units}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Recap 3">
          <ProblemSolution.Problem>
            Find a point on the x-axis which is equidistant from the points (7, 6) and (3, 4).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Let point be C(x, 0)", description: <Formula>{String.raw`AC^2 = BC^2`}</Formula> },
                { label: "Equate squared distances", description: <Formula>{String.raw`(7-x)^2 + 6^2 = (3-x)^2 + 4^2`}</Formula> },
                { label: "Solve", description: <Formula>{String.raw`85 - 14x = 25 - 6x \;\Rightarrow\; 60 = 8x \;\Rightarrow\; x = \frac{15}{2} = 7.5`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">Answer: <strong>(7.5, 0)</strong>.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h2 id="h-slope">9.2 Slope of a Line</h2>
      <Callout type="important" title="Definition: Inclination">
        The <strong>inclination</strong> of a line is the angle &#952; (measured{" "}
        <Highlight>anti-clockwise</Highlight>) that the line makes with the positive direction of the
        x-axis, where <strong>0° &#8804; &#952; &lt; 180°</strong>.
      </Callout>
      <ul>
        <li>A horizontal line has &#952; = 0°.</li>
        <li>A vertical line has &#952; = 90°.</li>
        <li>An upward-sloping line: 0° &lt; &#952; &lt; 90°.</li>
        <li>A downward-sloping line: 90° &lt; &#952; &lt; 180°.</li>
      </ul>

      <FormulaBlock latex={String.raw`m = \tan\theta`} important />
      <ul>
        <li>If &#952; = 90°, the slope is <strong>not defined</strong> (tan 90° is undefined).</li>
        <li>Vertical lines have <Highlight>no defined slope</Highlight>.</li>
      </ul>

      <h3>Slope from Two Points</h3>
      <Callout type="important" title="Slope Formula">
        The slope of the line passing through P(x&#8321;, y&#8321;) and Q(x&#8322;, y&#8322;) is:
      </Callout>
      <FormulaBlock latex={String.raw`m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{rise}}{\text{run}}`} important />
      <ul>
        <li>If x&#8321; = x&#8322;, the line is vertical and slope is undefined.</li>
        <li>If y&#8321; = y&#8322;, the line is horizontal and m = 0.</li>
      </ul>

      <Expandable title="Examples 1 and 2 — Slope from Points">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            <p>Find the slope of the line joining A(6, 2) and B(4, 3).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Identify points", description: <Formula>{String.raw`P_1(6, 2)\ \text{and}\ P_2(4, 3)`}</Formula> },
                { label: "Apply formula", description: <Formula>{String.raw`m = \frac{3-2}{4-6} = \frac{1}{-2}`}</Formula> },
                { label: "Result", description: <Formula>{String.raw`m = -\frac{1}{2}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`m = \frac{3-2}{4-6} = \frac{1}{-2} = -\frac{1}{2}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            <p>Find the slope of the line making inclination 30° with the positive direction of the x-axis.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`m = \tan 30° = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}`} important />
            <p>
              The slope is positive, confirming the line rises from left to right.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 1C">
          <ProblemSolution.Problem>
            <p>Find the slope of the line joining the points (2, 2) and (5, 3).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Identify points", description: <Formula>{String.raw`(x_1, y_1) = (2, 2),\ (x_2, y_2) = (5, 3)`}</Formula> },
                { label: "Apply formula", description: <Formula>{String.raw`m = \frac{3 - 2}{5 - 2} = \frac{1}{3}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 1D">
          <ProblemSolution.Problem>
            <p>Find the slope of a line making an angle of 120° with the positive direction of the x-axis.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Use m = tan θ", description: <Formula>{String.raw`m = \tan 120°`}</Formula> },
                { label: "Reduce", description: <Formula>{String.raw`\tan 120° = \tan(180° - 60°) = -\tan 60° = -\sqrt{3}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Parallel and Perpendicular Lines</h3>
      <Callout type="important" title="Parallel Lines Condition">
        Two non-vertical lines are <strong>parallel</strong> if and only if their slopes are equal:
      </Callout>
      <FormulaBlock latex={String.raw`\ell_1 \parallel \ell_2 \;\Leftrightarrow\; m_1 = m_2`} important />

      <Callout type="important" title="Perpendicular Lines Condition">
        Two lines with slopes m&#8321; and m&#8322; are <strong>perpendicular</strong> if and only if:
      </Callout>
      <FormulaBlock latex={String.raw`\ell_1 \perp \ell_2 \;\Leftrightarrow\; m_1 \cdot m_2 = -1`} important />
      <ul>
        <li>Equivalently, m&#8322; = &#8722;1/m&#8321; (one slope is the <Highlight>negative reciprocal</Highlight> of the other).</li>
        <li>If one line is vertical (slope undefined), the other must be horizontal (slope 0) for them to be perpendicular.</li>
      </ul>

      <h3>Angle Between Two Lines</h3>
      <Callout type="important" title="Angle Between Two Lines">
        The acute angle &#952; between two lines with slopes m&#8321; and m&#8322; is:
      </Callout>
      <FormulaBlock latex={String.raw`\tan\theta = \left|\frac{m_2 - m_1}{1 + m_1 m_2}\right|`} important />
      <ul>
        <li>The <strong>absolute value</strong> ensures &#952; is acute (0° &#8804; &#952; &#8804; 90°).</li>
        <li>If m&#8321;m&#8322; = &#8722;1, the denominator is 0, giving &#952; = 90° (perpendicular lines).</li>
      </ul>

      <Expandable title="Examples 3 to 5 — Parallel, Perpendicular, Angle">
        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            <p>
              Line &#8467;&#8321; passes through (&#8722;2, 3) and (4, 1). Line &#8467;&#8322; passes through (3, 5) and
              (1, 8). Are the lines parallel?
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: <Formula>{String.raw`\text{Slope of }\ell_1`}</Formula>, description: <Formula>{String.raw`m_1 = \frac{1-3}{4-(-2)} = \frac{-2}{6} = -\frac{1}{3}`}</Formula> },
                { label: <Formula>{String.raw`\text{Slope of }\ell_2`}</Formula>, description: <Formula>{String.raw`m_2 = \frac{8-5}{1-3} = \frac{3}{-2} = -\frac{3}{2}`}</Formula> },
                { label: "Compare", description: <Formula>{String.raw`m_1 = -\frac{1}{3} \ne -\frac{3}{2} = m_2`}</Formula> },
              ]}
            />
            <p>
              Since m&#8321; &#8800; m&#8322;, the lines are <strong>not parallel</strong>.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            <p>
              The line through (&#8722;4, &#8722;2) and (2, 6) is parallel to the line through (3, 5) and
              (&#8722;5, 1). Verify.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`m_1 = \frac{6-(-2)}{2-(-4)} = \frac{8}{6} = \frac{4}{3}`} />
            <FormulaBlock latex={String.raw`m_2 = \frac{1-5}{-5-3} = \frac{-4}{-8} = \frac{1}{2}`} />
            <p>
              Since 4/3 &#8800; 1/2, the lines are <strong>not parallel</strong>.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            <p>
              Line &#8467;&#8321; is perpendicular to line &#8467;&#8322;. Line &#8467;&#8321; has inclination 60°. Find
              the inclination of &#8467;&#8322;.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`m_1 = \tan 60° = \sqrt{3}`} />
            <FormulaBlock latex={String.raw`m_1 \cdot m_2 = -1 \;\Rightarrow\; m_2 = -\frac{1}{\sqrt{3}}`} />
            <FormulaBlock latex={String.raw`\theta_2 = \tan^{-1}\!\left(-\frac{1}{\sqrt{3}}\right) = 150°`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 5B">
          <ProblemSolution.Problem>
            <p>
              If the angle between two lines is π/4 and the slope of one of them is 1/2, find the slope of the other line.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Set up angle formula", description: <Formula>{String.raw`\tan\frac{\pi}{4} = 1 = \left|\frac{m - \frac{1}{2}}{1 + \frac{1}{2}m}\right| = \left|\frac{2m-1}{2+m}\right|`}</Formula> },
                { label: "Case 1", description: <Formula>{String.raw`\frac{2m-1}{2+m} = 1 \;\Rightarrow\; 2m - 1 = 2 + m \;\Rightarrow\; m = 3`}</Formula> },
                { label: "Case 2", description: <Formula>{String.raw`\frac{2m-1}{2+m} = -1 \;\Rightarrow\; 2m - 1 = -2 - m \;\Rightarrow\; m = -\frac{1}{3}`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">Answer: the other slope is <strong>3</strong> or <strong>−1/3</strong>.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Parallel = same slope">
          Quick check: compute both slopes as fractions, cross-multiply. If a&#8321;b&#8322; = a&#8322;b&#8321;,
          they are parallel. No need for full division.
        </Callout>
        <Callout type="tip" title="Perpendicular = negative reciprocal">
          If m&#8321; = a/b, then m&#8322; must be &#8722;b/a. Just flip and negate. Check: (a/b)(&#8722;b/a) = &#8722;1.
        </Callout>
        <Callout type="tip" title="Angle formula — always take absolute value">
          The formula with |...| gives the acute angle. Without absolute value, you get the angle
          from line 1 to line 2 (possibly obtuse). Exam questions usually want the acute one.
        </Callout>
      </SpeedTricks>

      <Callout type="warning" title="Hard-Level Tips: Slope Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Vertical line:</strong> slope is undefined — never write m = &#8734; or m = 1/0. Say
            &ldquo;slope is not defined.&rdquo;
          </li>
          <li>
            <strong>Order of points:</strong> (y&#8322; &#8722; y&#8321;)/(x&#8322; &#8722; x&#8321;) vs
            (y&#8321; &#8722; y&#8322;)/(x&#8321; &#8722; x&#8322;) give the same answer — but mixing up x and y
            coordinates does not.
          </li>
          <li>
            <strong>Parallel vs identical:</strong> m&#8321; = m&#8322; means parallel <em>or</em> the same
            line. To check identity, verify one point of &#8467;&#8321; satisfies &#8467;&#8322;&apos;s equation.
          </li>
          <li>
            <strong>Perpendicular with vertical:</strong> if one line is vertical, the other must be
            horizontal. Their slopes are undefined and 0 respectively — product rule does not apply
            directly.
          </li>
        </ul>
      </Callout>

      <Expandable id="h-ex-9-1" title="EXERCISE 9.1">
        <ol>
          <li>Draw a quadrilateral in the Cartesian plane with vertices A(4, 3), B(&#8722;5, &#8722;2), C(&#8722;3, &#8722;8), D(5, 2). Use the area formula.</li>
          <li>Find the area of the triangle formed by points (a, b+c), (b, c+a), (c, a+b).</li>
          <li>Find the coordinates of the points which divide the line segment joining A(&#8722;1, 7) and B(4, &#8722;3) in the ratio 2:3.</li>
          <li>Find the ratio in which the line segment joining A(&#8722;2, &#8722;3) and B(3, 7) is divided by the line x + y + 1 = 0.</li>
          <li>Find the coordinates of the foot of the perpendicular from the origin to the line 3x + 4y + 5 = 0.</li>
          <li>Find the vertices of the triangle, the midpoints of whose sides are (0, &#8722;1), (2, 1) and (&#8722;1, 2).</li>
          <li>Find the coordinates of the point which divides the line segment joining A(&#8722;2, 2) and B(2, 8) in the ratio 3:2 internally.</li>
          <li>Find the slope of the line through: (i) (sin&#8308;&#952; &#8722; cos&#8308;&#952;) and (cos&#8308;&#952; &#8722; sin&#8308;&#952;) &nbsp; (ii) (3, 2) and (&#8722;4, 7).</li>
          <li>Find the value of x for which the line through (x, &#8722;1) and (5, 3) is perpendicular to the line through (&#8722;2, &#8722;1) and (&#8722;6, 3).</li>
          <li>Find the slope of a line making inclination 120° with the positive direction of the x-axis.</li>
          <li>Find the angle between the x-axis and the line joining the points (3, &#8722;1) and (4, &#8722;2).</li>
          <li>The slope of a line is double that of another. If the tangent of the angle between them is 1/3, find the slopes.</li>
          <li>Prove that the points (&#8722;2, &#8722;1), (4, 0), (3, 6) and (&#8722;3, 5) taken in order form a parallelogram.</li>
          <li>Find the equation of the line passing through (&#8722;2, 3) and making intercepts a, b on the axes such that a + b = 2.</li>
          <li>Find the equation of the line through (&#8722;2, 3) with slope &#8722;4.</li>
          <li>Find the equation of the line through the origin with slope 2.</li>
          <li>Find the equation of the line passing through (0, 2) making angle 2&#960;/3 with the positive x-axis.</li>
          <li>Find the equation of the line through (2, 2&#8730;3) making angle &#960;/6 with the positive x-axis.</li>
          <li>Find the equation of the line through the origin making angle &#960;/3 with the x-axis.</li>
          <li>Find the equation of the line cutting equal intercepts on the coordinate axes and passing through (2, 3).</li>
          <li>Find the equation of the line passing through (&#8722;3, 5) and making equal intercepts on the axes.</li>
        </ol>
        <Expandable title="Answer Key — Exercise 9.1">
          <ol>
            <li>Area = &#8800;31/2 (absolute value = 31/2 sq units).</li>
            <li>Area = 0 — the points are collinear (check).</li>
            <li>&#8722;1, 1/5.</li>
            <li>2:3 (ratio from A to B).</li>
            <li>(&#8722;3/5, &#8722;4/5).</li>
            <li>Vertices: solve using midpoint formulas as system of equations.</li>
            <li>(1, 5).</li>
            <li>(i) &#8722;1 &nbsp; (ii) &#8722;1.</li>
            <li>x = &#8722;2.</li>
            <li>m = &#8722;&#8730;3.</li>
            <li>&#8722;15° (or equivalently 345°).</li>
            <li>Slopes: 1 and 2, or 2 and 1.</li>
            <li>Check: each pair of opposite sides has equal slopes &#8594; parallelogram.</li>
            <li>x + y = 2.</li>
            <li>4x + y + 5 = 0.</li>
            <li>y = 2x.</li>
            <li>&#8730;3x + y &#8722; 2 = 0.</li>
            <li>x &#8722; &#8730;3y + 4 = 0.</li>
            <li>&#8730;3x &#8722; y = 0.</li>
            <li>x + y = 5.</li>
            <li>x + y + 2 = 0.</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-forms">9.3 Various Forms of the Equation of a Line</h2>
      <Callout type="important" title="General Idea">
        A line in the plane can be described by an equation linking x and y. Different{" "}
        <Highlight>forms</Highlight> of the equation are useful in different situations.
      </Callout>

      <h3>Horizontal and Vertical Lines</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Special Lines</p>
        <FormulaBlock latex={String.raw`y = b \quad \text{(horizontal line, slope = 0)}`} important />
        <FormulaBlock latex={String.raw`x = a \quad \text{(vertical line, slope undefined)}`} important />
      </FormulaCard>
      <ul>
        <li>y = 3 is a horizontal line through (0, 3).</li>
        <li>x = &#8722;2 is a vertical line through (&#8722;2, 0).</li>
      </ul>

      <h3>Point-Slope Form</h3>
      <Callout type="important" title="Point-Slope Form">
        The equation of a line passing through (x&#8321;, y&#8321;) with slope m is:
      </Callout>
      <FormulaBlock latex={String.raw`y - y_1 = m(x - x_1)`} important />
      <ul>
        <li>This is the most commonly used form to <Highlight>write the equation of a line</Highlight>.</li>
        <li>Any point on the line satisfies this equation.</li>
      </ul>

      <Expandable title="Example 6 — Point-Slope Form">
        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            <p>Find the equation of the line through (&#8722;4, 3) with slope &#8722;4.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Identify", description: <Formula>{String.raw`x_1 = -4,\ y_1 = 3,\ m = -4`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`y - 3 = -4(x - (-4))`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`y - 3 = -4(x + 4) = -4x - 16`}</Formula> },
                { label: "Standard form", description: <Formula>{String.raw`4x + y + 13 = 0`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`4x + y + 13 = 0`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Two-Point Form</h3>
      <Callout type="important" title="Two-Point Form">
        The equation of the line passing through (x&#8321;, y&#8321;) and (x&#8322;, y&#8322;) is:
      </Callout>
      <FormulaBlock latex={String.raw`y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)`} important />
      <ul>
        <li>Works as long as x&#8321; &#8800; x&#8322; (non-vertical line).</li>
        <li>If x&#8321; = x&#8322;, the line is simply x = x&#8321;.</li>
      </ul>

      <h3>Slope-Intercept Form</h3>
      <Callout type="important" title="Slope-Intercept Form">
        The equation of a line with slope m and y-intercept c is:
      </Callout>
      <FormulaBlock latex={String.raw`y = mx + c`} important />
      <ul>
        <li>The line crosses the y-axis at (0, c).</li>
        <li>For x-intercept, set y = 0: x = &#8722;c/m (if m &#8800; 0).</li>
      </ul>

      <Expandable title="Example 7 — Slope-Intercept Form">
        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            <p>Find the equation of the line through (6, 2) with y-intercept 3.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Identify intercept", description: "Line passes through (0, 3), so c = 3" },
                { label: "Find slope", description: <Formula>{String.raw`m = \frac{2-3}{6-0} = -\frac{1}{6}`}</Formula> },
                { label: "Write equation", description: <Formula>{String.raw`y = -\frac{1}{6}x + 3`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`y = -\frac{1}{6}x + 3 \;\;\text{or}\;\; x + 6y - 18 = 0`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Intercept Form</h3>
      <Callout type="important" title="Intercept Form">
        The equation of the line with x-intercept a and y-intercept b (a &#8800; 0, b &#8800; 0) is:
      </Callout>
      <FormulaBlock latex={String.raw`\frac{x}{a} + \frac{y}{b} = 1`} important />
      <ul>
        <li>The line passes through (a, 0) and (0, b).</li>
        <li>If either intercept is zero, this form cannot be used.</li>
      </ul>

      <Expandable title="Example 8 — Intercept Form">
        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>
            <p>Find the equation of the line through (&#8722;2, 3) and cutting equal intercepts on the axes.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Let the equal intercepts be a (so a = b). Using intercept form:
            </p>
            <FormulaBlock latex={String.raw`\frac{x}{a} + \frac{y}{a} = 1 \;\Rightarrow\; x + y = a`} />
            <p>
              Substituting (&#8722;2, 3): &#8722;2 + 3 = a &#8594; a = 1.
            </p>
            <FormulaBlock latex={String.raw`x + y = 1 \;\;\text{or}\;\; x + y - 1 = 0`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>General Form</h3>
      <Callout type="important" title="General Form">
        Every straight line can be represented in the form:
      </Callout>
      <FormulaBlock latex={String.raw`Ax + By + C = 0`} important />
      <ul>
        <li>A, B, C are real constants; A and B are not both zero.</li>
        <li>This is the <Highlight>most general form</Highlight> — every line has such an equation.</li>
        <li>If B &#8800; 0, slope = &#8722;A/B; if B = 0, line is vertical.</li>
        <li>If C = 0, line passes through the origin.</li>
      </ul>

      <Expandable title="Examples 9 and 10 — Converting Forms">
        <ProblemSolution problemNumber="Example 9">
          <ProblemSolution.Problem>
            <p>Reduce 3x + 4y + 12 = 0 to (i) slope-intercept form and (ii) intercept form.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="font-medium">(i) Slope-intercept:</p>
            <FormulaBlock latex={String.raw`4y = -3x - 12 \;\Rightarrow\; y = -\frac{3}{4}x - 3`} />
            <p>
              Slope = &#8722;3/4, y-intercept = &#8722;3.
            </p>
            <p className="font-medium mt-3">(ii) Intercept form:</p>
            <FormulaBlock latex={String.raw`\frac{3x}{-12} + \frac{4y}{-12} = 1 \;\Rightarrow\; \frac{x}{-4} + \frac{y}{-3} = 1`} />
            <p>
              x-intercept = &#8722;4, y-intercept = &#8722;3.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 10">
          <ProblemSolution.Problem>
            <p>Reduce y &#8722; 3 = 0 to general form.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`0\cdot x + 1\cdot y - 3 = 0 \quad\text{(here } A=0, B=1, C=-3\text{)}`} />
            <p>
              This is already a horizontal line y = 3 in general form.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Pick the right form quickly">
          Have a point and slope? &#8594; Point-Slope.
          Have two points? &#8594; Two-Point.
          Have slope and y-intercept? &#8594; Slope-Intercept.
          Have both intercepts? &#8594; Intercept Form.
          Any line &#8594; General Form Ax + By + C = 0.
        </Callout>
        <Callout type="tip" title="Intercept form shortcut">
          To get intercepts from Ax + By + C = 0: set y = 0 &#8594; x-intercept = &#8722;C/A.
          Set x = 0 &#8594; y-intercept = &#8722;C/B. Quick and formula-free.
        </Callout>
        <Callout type="tip" title="Slope from general form">
          From Ax + By + C = 0, slope = &#8722;A/B. Just flip coefficients and negate. No rearranging needed.
        </Callout>
        <Callout type="tip" title="All lines &#8712; general form">
          Vertical line x = a &#8594; x &#8722; a = 0. Horizontal line y = b &#8594; y &#8722; b = 0.
          Every line, no matter how special, can be written as Ax + By + C = 0.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-ex-9-2" title="EXERCISE 9.2">
        <ol>
          <li>Find the equation of the line making x-intercept 2 and y-intercept 3.</li>
          <li>Find the equation of the line passing through (&#8722;3, 5) and perpendicular to the line through (2, 5) and (&#8722;3, 6).</li>
          <li>Find the equation of the line perpendicular to the line through A(1, 2) and B(2, 5) and passing through the midpoint of AB.</li>
          <li>Find the equation of the line passing through (&#8722;3, 5) and making equal intercepts on the axes.</li>
          <li>Find the equation of the line passing through (&#8722;4, &#8722;3) parallel to 3x + 7y + 9 = 0.</li>
          <li>Find the equation of the line through (&#8722;2, 3) with slope &#8722;4.</li>
          <li>Find the equation of the line through (0, 2) making angle 2&#960;/3 with the positive x-axis.</li>
          <li>Find the equation of the line through (2, 2&#8730;3) making angle &#960;/6 with the positive x-axis.</li>
          <li>Find the equation of the line through the origin making angle &#960;/3 with the x-axis.</li>
          <li>Find the equation of the line with equal intercepts passing through (2, 3).</li>
        </ol>
        <Expandable title="Answer Key — Exercise 9.2">
          <ol>
            <li>x/2 + y/3 = 1 &#8594; 3x + 2y &#8722; 6 = 0.</li>
            <li>Slope of AB = &#8722;1/5 &#8594; perpendicular slope = 5 &#8594; y &#8722; 5 = 5(x + 3) &#8594; 5x &#8722; y + 20 = 0.</li>
            <li>Midpoint = (3/2, 7/2). Slope of AB = 3 &#8594; perpendicular slope = &#8722;1/3 &#8594; 2x + 6y &#8722; 27 = 0.</li>
            <li>x + y + 2 = 0 (intercepts a = b = &#8722;2).</li>
            <li>3x + 7y + 27 = 0 (parallel &#8594; same slope &#8722;3/7).</li>
            <li>4x + y + 5 = 0.</li>
            <li>&#8730;3x + y &#8722; 2 = 0.</li>
            <li>x &#8722; &#8730;3y + 4 = 0.</li>
            <li>&#8730;3x &#8722; y = 0.</li>
            <li>x + y = 5.</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-distance">9.4 Distance of a Point from a Line</h2>
      <Callout type="important" title="Perpendicular Distance Formula">
        The <Highlight>perpendicular distance</Highlight> from a point (x&#8321;, y&#8321;) to the line
        Ax + By + C = 0 is:
      </Callout>
      <FormulaBlock latex={String.raw`d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}`} important />
      <ul>
        <li>The <strong>absolute value</strong> ensures distance is always non-negative.</li>
        <li>The line must be in <strong>general form</strong> Ax + By + C = 0 before applying.</li>
        <li>If d = 0, the point lies <em>on</em> the line.</li>
      </ul>

      <h3>Distance Between Parallel Lines</h3>
      <Callout type="important" title="Distance Between Parallel Lines">
        The distance between two <strong>parallel</strong> lines Ax + By + C&#8321; = 0 and
        Ax + By + C&#8322; = 0 is:
      </Callout>
      <FormulaBlock latex={String.raw`d = \frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}`} important />
      <ul>
        <li>The coefficients A and B must be <strong>identical</strong> in both equations.</li>
        <li>If they are not, multiply one equation by a constant to match them first.</li>
      </ul>

      <Expandable title="Examples 11 and 12 — Distance Formulas">
        <ProblemSolution problemNumber="Example 11">
          <ProblemSolution.Problem>
            <p>Find the distance of the point (3, &#8722;5) from the line 3x + 4y &#8722; 26 = 0.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`d = \frac{|3(3) + 4(-5) - 26|}{\sqrt{3^2 + 4^2}} = \frac{|9 - 20 - 26|}{\sqrt{25}} = \frac{|-37|}{5} = \frac{37}{5}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 12">
          <ProblemSolution.Problem>
            <p>Find the distance between the parallel lines 3x + 4y + 7 = 0 and 3x + 4y + 5 = 0.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`d = \frac{|7 - 5|}{\sqrt{3^2 + 4^2}} = \frac{2}{5}`} important />
            <p>
              The coefficients A = 3, B = 4 are already identical, so we directly use the formula.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Always convert to general form first">
          If the line is y = mx + c, rewrite as mx &#8722; y + c = 0 before using the distance formula.
          Forgetting to move all terms to one side is the #1 error.
        </Callout>
        <Callout type="tip" title="Parallel lines: match coefficients">
          If lines are 2x + 3y = 5 and 4x + 6y = 7, multiply the first by 2: 4x + 6y &#8722; 10 = 0
          vs 4x + 6y &#8722; 7 = 0. Then d = |&#8722;10 &#8722; (&#8722;7)|/&#8730;(16+36) = 3/&#8730;52.
        </Callout>
        <Callout type="tip" title="Distance = 0 means the point is on the line">
          If the formula gives d = 0, the point satisfies the line equation. This is a quick
          collinearity check: substitute the point and see if the result is 0.
        </Callout>
      </SpeedTricks>

      <Callout type="warning" title="Hard-Level Tips: Distance Formula Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Sign error in C:</strong> The line 3x + 4y = 7 must become 3x + 4y &#8722; 7 = 0.
            C = &#8722;7, not 7.
          </li>
          <li>
            <strong>Absolute value is mandatory:</strong> Without |...|, you get a signed distance.
            Distance is always &#8805; 0.
          </li>
          <li>
            <strong>Non-matching coefficients:</strong> 2x + 3y + 1 = 0 and 4x + 6y + 2 = 0 are the{" "}
            <em>same line</em> (d = 0). 2x + 3y + 1 = 0 and 4x + 6y + 5 = 0 are parallel with
            d = |1 &#8722; 5/2|/&#8730;13 &#8776; 0.277.
          </li>
          <li>
            <strong>Point on the line side:</strong> The sign of Ax&#8321; + By&#8321; + C (without absolute
            value) tells which side of the line the point is on. Two points on opposite sides give
            expressions of opposite signs.
          </li>
        </ul>
      </Callout>

      <Expandable title="Examples 13 to 16 — Miscellaneous">
        <ProblemSolution problemNumber="Example 13">
          <ProblemSolution.Problem>
            <p>Find the equation of the line parallel to 3x &#8722; 4y + 2 = 0 and at distance 4 units from it.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Parallel line: 3x &#8722; 4y + k = 0. Distance between parallel lines:
            </p>
            <FormulaBlock latex={String.raw`\frac{|k - 2|}{\sqrt{9+16}} = 4 \;\Rightarrow\; \frac{|k-2|}{5} = 4`} />
            <FormulaBlock latex={String.raw`|k-2| = 20 \;\Rightarrow\; k = 22 \text{ or } k = -18`} important />
            <p>
              Two solutions: <strong>3x &#8722; 4y + 22 = 0</strong> and{" "}
              <strong>3x &#8722; 4y &#8722; 18 = 0</strong>.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 14">
          <ProblemSolution.Problem>
            <p>
              Find the equation of the line passing through (2, 3) and making the sum of its x- and
              y-intercepts equal to 0.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Let x-intercept = a, so y-intercept = &#8722;a (since a + b = 0). Using intercept form
              (a &#8800; 0):
            </p>
            <FormulaBlock latex={String.raw`\frac{x}{a} + \frac{y}{-a} = 1 \;\Rightarrow\; x - y = a`} />
            <p>
              Substituting (2, 3): 2 &#8722; 3 = a &#8594; a = &#8722;1.
            </p>
            <FormulaBlock latex={String.raw`x - y + 1 = 0`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 15">
          <ProblemSolution.Problem>
            <p>
              Find the image (reflection) of the point (&#8722;1, 3) in the line 3x &#8722; 4y = 1.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Let the image be Q(h, k). The midpoint M of PQ lies on the line, and PQ is perpendicular
              to the line.
            </p>
            <Stepper
              steps={[
                { label: "Midpoint M", description: <Formula>{String.raw`M = \left(\frac{h-1}{2},\ \frac{k+3}{2}\right)`}</Formula> },
                { label: "M on line", description: <Formula>{String.raw`3\left(\frac{h-1}{2}\right) - 4\left(\frac{k+3}{2}\right) = 1 \to 3h - 4k - 17 = 0`}</Formula> },
                { label: <Formula>{String.raw`PQ \perp \text{line}`}</Formula>, description: <><Formula>{String.raw`\text{Slope of }PQ = \frac{k-3}{h+1} = -\frac{4}{3}`}</Formula> (negative reciprocal of 3/4)</> },
                { label: "Solve", description: <Formula>{String.raw`3k - 9 = -4h - 4 \to 4h + 3k - 5 = 0 \implies h = \frac{61}{25},\ k = -\frac{3}{25}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\text{Image} = \left(\frac{61}{25},\; -\frac{3}{25}\right)`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 16">
          <ProblemSolution.Problem>
            <p>
              Find the area of the triangle formed by the lines y &#8722; x = 0, x + y = 0 and
              x &#8722; a = 0.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              The three lines are y = x, y = &#8722;x, and x = a. Vertices of the triangle:
            </p>
            <ul>
              <li>Intersection of y = x and y = &#8722;x: (0, 0).</li>
              <li>Intersection of y = x and x = a: (a, a).</li>
              <li>Intersection of y = &#8722;x and x = a: (a, &#8722;a).</li>
            </ul>
            <FormulaBlock latex={String.raw`\text{Area} = \frac{1}{2}|0(-a-a)+a(-a-0)+a(0-(-a))| = \frac{1}{2}|0-a^2+a^2| = 0`} />
            <p>
              Wait — let us recheck: vertices are O(0,0), P(a, a), Q(a, &#8722;a). Base PQ = 2|a|, height from
              O = |a|.
            </p>
            <FormulaBlock latex={String.raw`\text{Area} = \frac{1}{2}\times 2|a|\times|a| = a^2`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-misc-ex" title="Miscellaneous Exercise on Chapter 9">
        <ol>
          <li>Find the equation of the line parallel to 3x &#8722; 4y + 2 = 0 and at distance 4 units from it.</li>
          <li>Find the equation of the line through the intersection of 2x + y = 5 and x &#8722; 3y = 7, with slope 2.</li>
          <li>Find the image of the point (3, 8) in the line x + 3y &#8722; 7 = 0.</li>
          <li>Find the area of the triangle formed by the lines x &#8722; y + 1 = 0, 3x + 2y &#8722; 12 = 0, and the x-axis.</li>
          <li>Find the equation of the line through (1, 2) perpendicular to 3x + 4y &#8722; 10 = 0.</li>
          <li>Find the distance of the point (2, 3) from the line 2x &#8722; 3y + 18 = 0.</li>
          <li>Find the value of k so that the distance from (h, k) to 3x + 4y + 10 = 0 is 7.</li>
          <li>Find the equation of the line through (&#8722;3, 5) making angle &#960;/4 with the positive x-axis.</li>
          <li>Find the equation of the line through the intersection of x + y = 5 and 2x &#8722; y = 1, passing through (&#8722;2, 3).</li>
          <li>Find the coordinates of the foot of perpendicular from (1, 2) to x &#8722; 3y &#8722; 7 = 0.</li>
          <li>Find the angle between the lines 2x + 3y &#8722; 1 = 0 and x &#8722; 4y + 2 = 0.</li>
          <li>Find the equation of the line making equal intercepts on the axes and passing through (&#8722;3, 5).</li>
          <li>Show that the lines x + 2y &#8722; 3 = 0 and 2x + 4y &#8722; 5 = 0 are parallel. Find the distance between them.</li>
          <li>Find the equation of the perpendicular bisector of the segment joining A(2, 3) and B(4, &#8722;1).</li>
          <li>Find the area of the triangle formed by x + y &#8722; 5 = 0, x &#8722; y = 0, and 2x &#8722; 3y = 0.</li>
        </ol>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>3x &#8722; 4y + 22 = 0 or 3x &#8722; 4y &#8722; 18 = 0.</li>
            <li>Intersection: solve system &#8594; (26/7, 9/7). Slope = 2 &#8594; 14x &#8722; 7y &#8722; 29 = 0.</li>
            <li>Use midpoint + perpendicular slope method &#8594; image = (&#8722;17/5, 24/5).</li>
            <li>Vertices from intersections with x-axis (y=0) and intersection point &#8594; area = 33/4 sq units.</li>
            <li>Perpendicular slope = 4/3 &#8594; 4x &#8722; 3y + 2 = 0.</li>
            <li>d = |4 &#8722; 9 + 18|/&#8730;13 = 13/&#8730;13 = &#8730;13.</li>
            <li>|3h + 4k + 10|/5 = 7 &#8594; 3h + 4k + 10 = &#177;35.</li>
            <li>Slope = tan(&#960;/4) = 1 &#8594; y &#8722; 5 = 1(x + 3) &#8594; x &#8722; y + 8 = 0.</li>
            <li>Intersection: (2, 3) &#8594; line is simply 2x &#8722; y &#8722; 1 = 0 if (&#8722;2,3) satisfies? Check: &#8722;4 &#8722; 3 &#8722; 1 &#8800; 0. Re-solve: intersection &#8594; (2,3), then equation through (&#8722;2,3): slope = 0 &#8594; y = 3.</li>
            <li>Foot: solve system of original line and perpendicular through (1,2) &#8594; (28/5, &#8722;11/5).</li>
            <li>tan&#952; = |(1/4 &#8722; (&#8722;2/3))/(1 + (&#8722;1/3)(1/4))| = |11/12 / (11/12)| = 1 &#8594; &#952; = 45°.</li>
            <li>x + y + 2 = 0 (equal intercepts a = b, substitute (&#8722;3, 5)).</li>
            <li>Coefficients proportional (1/2 = 2/4 &#8800; 3/4) &#8594; parallel. Rewrite: x + 2y &#8722; 3 = 0 and x + 2y &#8722; 5/2 = 0. d = |&#8722;3 &#8722; (&#8722;5/2)|/&#8730;5 = 1/(2&#8730;5).</li>
            <li>Midpoint (3, 1), perpendicular slope = &#8722;1/2 &#8594; x + 2y &#8722; 5 = 0.</li>
            <li>Intersection points give a triangle with area &#8776; 2.5 sq units (compute via vertices).</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-pyq">Previous Year Questions</h2>

      <Expandable id="h-pyq-basic" title="PYQ — Basic (1 Mark)">
        <ProblemSolution problemNumber="PYQ-Q1">
          <ProblemSolution.Problem>
            <p>Write the equation of the y-axis. <span className="text-sm text-muted-foreground">[1 Mark]</span></p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`x = 0`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-pyq-mar25" title="PYQ — March 2025">
        <ProblemSolution problemNumber="PYQ-M1">
          <ProblemSolution.Problem>
            <p>(a) Write the equation of the y-axis. <span className="text-sm text-muted-foreground">[1 Mark]</span></p>
            <p>(b) Find the slope of a line which passes through the origin and the midpoint of the line segment joining the points P(0, −4) and Q(8, 0). <span className="text-sm text-muted-foreground">[2 Marks]</span></p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="font-medium">(a)</p>
            <FormulaBlock latex={String.raw`x = 0`} important />
            <p className="font-medium mt-3">(b)</p>
            <Stepper
              steps={[
                { label: "Midpoint of PQ", description: <Formula>{String.raw`B = \left(\frac{0+8}{2},\;\frac{-4+0}{2}\right) = (4,\; -2)`}</Formula> },
                { label: "Slope through origin A(0,0) and B", description: <Formula>{String.raw`m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{-2 - 0}{4 - 0} = -\frac{1}{2}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-M2">
          <ProblemSolution.Problem>
            <p>(a) Find the equation of a line passing through the point (−2, 3) with slope 1/4. <span className="text-sm text-muted-foreground">[2 Marks]</span></p>
            <p>(b) Find the distance of the point (3, −5) from the line 3x − 4y − 26 = 0. <span className="text-sm text-muted-foreground">[2 Marks]</span></p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="font-medium">(a) — point-slope form y − y₀ = m(x − x₀)</p>
            <Stepper
              steps={[
                { label: "Substitute", description: <Formula>{String.raw`y - 3 = \frac{1}{4}(x + 2)`}</Formula> },
                { label: "Multiply through by 4", description: <Formula>{String.raw`4(y - 3) = x + 2`}</Formula> },
                { label: "Expand", description: <Formula>{String.raw`4y - 12 = x + 2`}</Formula> },
                { label: "Rearrange", description: <Formula>{String.raw`x - 4y + 14 = 0`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`x - 4y + 14 = 0`} important />
            <p className="font-medium mt-4">(b) — distance formula</p>
            <Stepper
              steps={[
                { label: "Formula", description: <Formula>{String.raw`d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}`}</Formula> },
                { label: "Substitute (3, −5)", description: <Formula>{String.raw`d = \frac{|3(3) - 4(-5) - 26|}{\sqrt{3^2 + (-4)^2}}`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`= \frac{|9 + 20 - 26|}{\sqrt{9 + 16}} = \frac{3}{5}\text{ units}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-pyq-model25" title="PYQ — Model 2025">
        <ProblemSolution problemNumber="PYQ-MO1">
          <ProblemSolution.Problem>
            <p>Consider the straight line x − 3y + 4 = 0.</p>
            <p>(i) Find the slope of the line perpendicular to the given line. <span className="text-sm text-muted-foreground">[1 Mark]</span></p>
            <p>(ii) Find the equation of a line perpendicular to the above line and passing through (1, 2). <span className="text-sm text-muted-foreground">[2 Marks]</span></p>
            <p>(iii) Find the coordinates of the point of intersection of the given line and the line obtained in (ii). <span className="text-sm text-muted-foreground">[1 Mark]</span></p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="font-medium">(i)</p>
            <Stepper
              steps={[
                { label: "Slope of given line", description: <Formula>{String.raw`m_1 = -\frac{A}{B} = -\frac{1}{-3} = \frac{1}{3}`}</Formula> },
                { label: "Perpendicular condition", description: <Formula>{String.raw`m_1 \times m_2 = -1 \;\Rightarrow\; \frac{1}{3}m_2 = -1 \;\Rightarrow\; m_2 = -3`}</Formula> },
              ]}
            />
            <p className="font-medium mt-3">(ii)</p>
            <Stepper
              steps={[
                { label: "Point-slope form", description: <Formula>{String.raw`y - 2 = -3(x - 1)`}</Formula> },
                { label: "Expand", description: <Formula>{String.raw`y - 2 = -3x + 3`}</Formula> },
                { label: "Rearrange", description: <Formula>{String.raw`3x + y - 5 = 0`}</Formula> },
              ]}
            />
            <p className="font-medium mt-3">(iii)</p>
            <Stepper
              steps={[
                { label: "Solve together", description: <>3x + y = 5 &#8594; y = 5 − 3x; and x − 3y = −4.</> },
                { label: "Substitute y", description: <Formula>{String.raw`x - 3(5 - 3x) = -4 \;\Rightarrow\; x - 15 + 9x = -4 \;\Rightarrow\; 10x = 11`}</Formula> },
                { label: "x-coordinate", description: <Formula>{String.raw`x = \frac{11}{10}`}</Formula> },
                { label: "y-coordinate", description: <Formula>{String.raw`y = 5 - 3\left(\frac{11}{10}\right) = \frac{50 - 33}{10} = \frac{17}{10}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\left(\frac{11}{10},\;\frac{17}{10}\right)`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-pyq-model24" title="PYQ — Model 2024">
        <ProblemSolution problemNumber="PYQ-MO2">
          <ProblemSolution.Problem>
            <p>Consider the line AB with x-intercept a = −4 and y-intercept b = 3.</p>
            <p>(i) Find the equation of the line AB. <span className="text-sm text-muted-foreground">[1 Mark]</span></p>
            <p>(ii) Find the distance of the origin from the line AB. <span className="text-sm text-muted-foreground">[2 Marks]</span></p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="font-medium">(i) — intercept form x/a + y/b = 1</p>
            <Stepper
              steps={[
                { label: "Intercept form", description: <Formula>{String.raw`\frac{x}{-4} + \frac{y}{3} = 1`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`\frac{3x - 4y}{-12} = 1 \;\Rightarrow\; 3x - 4y + 12 = 0`}</Formula> },
              ]}
            />
            <p className="font-medium mt-3">(ii) — distance from origin (0, 0)</p>
            <Stepper
              steps={[
                { label: "Distance formula", description: <Formula>{String.raw`d = \frac{|3(0) - 4(0) + 12|}{\sqrt{3^2 + (-4)^2}}`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`= \frac{12}{\sqrt{25}} = \frac{12}{5}\text{ units}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-MO3">
          <ProblemSolution.Problem>
            <p>Line l₂ is perpendicular to line l₁, where l₁ makes an angle of 30° with the positive x-axis and passes through the origin, and l₂ passes through (4, 0).</p>
            <p>(i) Find the slope of l₁. <span className="text-sm text-muted-foreground">[1 Mark]</span></p>
            <p>(ii) Find the equation of l₁. <span className="text-sm text-muted-foreground">[1 Mark]</span></p>
            <p>(iii) Find the equation of l₂. <span className="text-sm text-muted-foreground">[2 Marks]</span></p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="font-medium">(i)</p>
            <FormulaBlock latex={String.raw`m_1 = \tan 30^\circ = \frac{1}{\sqrt{3}}`} important />
            <p className="font-medium mt-3">(ii)</p>
            <Stepper
              steps={[
                { label: "Through origin, y₀ = 0", description: <Formula>{String.raw`y - 0 = \frac{1}{\sqrt{3}}(x - 0)`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`\sqrt{3}y = x \;\Rightarrow\; x - \sqrt{3}y = 0`}</Formula> },
              ]}
            />
            <p className="font-medium mt-3">(iii)</p>
            <Stepper
              steps={[
                { label: "Perpendicular slope", description: <Formula>{String.raw`\frac{1}{\sqrt{3}} \times m_2 = -1 \;\Rightarrow\; m_2 = -\sqrt{3}`}</Formula> },
                { label: "Through (4, 0)", description: <Formula>{String.raw`y - 0 = -\sqrt{3}(x - 4) \;\Rightarrow\; y = -\sqrt{3}x + 4\sqrt{3}`}</Formula> },
                { label: "Rearrange", description: <Formula>{String.raw`\sqrt{3}x + y - 4\sqrt{3} = 0`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h2 id="h-advanced">Advanced Questions — Competitive</h2>

      <Expandable id="h-adv-angle" title="Advanced 1 to 3 — Angle, Distance &amp; Slope">
        <ProblemSolution problemNumber="Advanced 1">
          <ProblemSolution.Problem>
            <p>Find the angle between the lines y = (2 − √3)(x + 5) and y = (2 + √3)(x − 7).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Identify slopes", description: <Formula>{String.raw`m_1 = 2 - \sqrt{3},\quad m_2 = 2 + \sqrt{3}`}</Formula> },
                { label: "Use angle formula", description: <Formula>{String.raw`\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`\tan\theta = \left|\frac{(2-\sqrt{3}) - (2+\sqrt{3})}{1 + (2-\sqrt{3})(2+\sqrt{3})}\right|`}</Formula> },
                { label: "Simplify denominator", description: <Formula>{String.raw`= \left|\frac{-2\sqrt{3}}{1 + (4 - 3)}\right| = \left|\frac{-2\sqrt{3}}{2}\right| = \sqrt{3}`}</Formula> },
                { label: "Angle", description: <Formula>{String.raw`\theta = \tan^{-1}(\sqrt{3}) = 60^\circ = \frac{\pi}{3}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\theta = 60^\circ \;\text{or}\; \frac{\pi}{3}\text{ radians}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Advanced 2">
          <ProblemSolution.Problem>
            <p>Find the points on the line x + y = 4 which lie at a unit distance from the line 4x + 3y = 10.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Let (x₁, y₁) be on x + y = 4", description: <Formula>{String.raw`y_1 = 4 - x_1`}</Formula> },
                { label: "Distance formula, d = 1", description: <Formula>{String.raw`1 = \left|\frac{4x_1 + 3y_1 - 10}{\sqrt{4^2 + 3^2}}\right| \;\Rightarrow\; \left|\frac{4x_1 + 3y_1 - 10}{5}\right| = 1`}</Formula> },
                { label: "Drop absolute value", description: <Formula>{String.raw`4x_1 + 3y_1 - 10 = \pm 5`}</Formula> },
                { label: "Case 1 (+5)", description: <><Formula>{String.raw`4x_1 + 3y_1 = 15`}</Formula>, substitute y₁ = 4 − x₁: <Formula>{String.raw`4x_1 + 3(4 - x_1) = 15 \;\Rightarrow\; x_1 = 3,\; y_1 = 1`}</Formula></> },
                { label: "Case 2 (−5)", description: <><Formula>{String.raw`4x_1 + 3y_1 = 5`}</Formula>, substitute y₁ = 4 − x₁: <Formula>{String.raw`4x_1 + 3(4 - x_1) = 5 \;\Rightarrow\; x_1 = -7,\; y_1 = 11`}</Formula></> },
              ]}
            />
            <FormulaBlock latex={String.raw`(3, 1)\quad\text{and}\quad(-7, 11)`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Advanced 3">
          <ProblemSolution.Problem>
            <p>Find the equation of the lines passing through (1, 2) and making an angle of 30° with the y-axis.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Convert to inclination with x-axis", description: <Formula>{String.raw`90^\circ - 30^\circ = 60^\circ \;\Rightarrow\; m = \tan 60^\circ = \sqrt{3}`}</Formula> },
                { label: "Point-slope form", description: <Formula>{String.raw`y - 2 = \sqrt{3}(x - 1)`}</Formula> },
                { label: "Expand", description: <Formula>{String.raw`y - 2 = \sqrt{3}x - \sqrt{3}`}</Formula> },
                { label: "Rearrange", description: <Formula>{String.raw`\sqrt{3}x - y - \sqrt{3} + 2 = 0`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\sqrt{3}x - y - \sqrt{3} + 2 = 0`} important />
            <Callout type="note" title="There is a second line">
              A line making 30° with the y-axis can also have inclination 90° + 30° = 120° with the
              x-axis, giving m = −√3. The second line is
              <Formula>{String.raw`y - 2 = -\sqrt{3}(x - 1) \;\Rightarrow\; \sqrt{3}x + y - \sqrt{3} - 2 = 0`}</Formula>.
            </Callout>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-adv-int" title="Advanced 4 to 5 — Intersection &amp; Triangles">
        <ProblemSolution problemNumber="Advanced 4">
          <ProblemSolution.Problem>
            <p>Find the equation of the line passing through the point of intersection of 2x + y = 5 and x + 3y + 8 = 0 and parallel to the line 3x + 4y = 7.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Set up equations", description: <><Formula>{String.raw`2x + y = 5 \;\Rightarrow\; y = 5 - 2x`}</Formula> and <Formula>{String.raw`x + 3y = -8`}</Formula></> },
                { label: "Substitute y", description: <Formula>{String.raw`x + 3(5 - 2x) = -8 \;\Rightarrow\; x + 15 - 6x = -8 \;\Rightarrow\; -5x = -23`}</Formula> },
                { label: "x-coordinate", description: <Formula>{String.raw`x = \frac{23}{5}`}</Formula> },
                { label: "y-coordinate", description: <Formula>{String.raw`y = 5 - 2\left(\frac{23}{5}\right) = \frac{25 - 46}{5} = -\frac{21}{5}`}</Formula> },
                { label: "Slope of parallel line", description: <Formula>{String.raw`3x + 4y - 7 = 0 \;\Rightarrow\; m = -\frac{A}{B} = -\frac{3}{4}`}</Formula> },
                { label: "Equation through intersection", description: <Formula>{String.raw`y + \frac{21}{5} = -\frac{3}{4}\left(x - \frac{23}{5}\right)`}</Formula> },
                { label: "Clear denominators", description: <Formula>{String.raw`4\left(y + \frac{21}{5}\right) = -3\left(x - \frac{23}{5}\right) \;\Rightarrow\; 4y + \frac{84}{5} = -3x + \frac{69}{5}`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`3x + 4y = \frac{69 - 84}{5} = -3`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`3x + 4y + 3 = 0`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Advanced 5">
          <ProblemSolution.Problem>
            <p>Find the equation of one of the sides of an isosceles right-angled triangle whose hypotenuse is given by 3x + 4y = 4 and the opposite vertex of the hypotenuse is (2, 2).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Slope of hypotenuse", description: <Formula>{String.raw`m_2 = -\frac{3}{4}`}</Formula> },
                { label: "Base angles of isosceles right triangle", description: <Formula>{String.raw`45^\circ`}</Formula> },
                { label: "Angle formula", description: <Formula>{String.raw`\tan 45^\circ = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right| \;\Rightarrow\; 1 = \left|\frac{4m + 3}{4 - 3m}\right|`}</Formula> },
                { label: "Two cases", description: <Formula>{String.raw`\frac{4m + 3}{4 - 3m} = 1\ \ \text{or}\ \ -1`}</Formula> },
                { label: "Case 1", description: <Formula>{String.raw`4m + 3 = 4 - 3m \;\Rightarrow\; 7m = 1 \;\Rightarrow\; m = \frac{1}{7}`}</Formula> },
                { label: "Equation (m = 1/7) through (2, 2)", description: <Formula>{String.raw`y - 2 = \frac{1}{7}(x - 2) \;\Rightarrow\; 7y - 14 = x - 2 \;\Rightarrow\; x - 7y + 12 = 0`}</Formula> },
                { label: "Case 2", description: <Formula>{String.raw`4m + 3 = -(4 - 3m) \;\Rightarrow\; m = -7`}</Formula> },
                { label: "Equation (m = −7) through (2, 2)", description: <Formula>{String.raw`y - 2 = -7(x - 2) \;\Rightarrow\; 7x + y - 16 = 0`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`x - 7y + 12 = 0\ \ \text{and}\ \ 7x + y - 16 = 0`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-adv-mcq" title="Advanced MCQs">
        <ProblemSolution problemNumber="MCQ 1">
          <ProblemSolution.Problem>
            <p>A line cutting off intercept −3 from the y-axis and the tangent of the angle to the x-axis is 3/5. Its equation is: (a) 5y − 3x + 15 = 0 (b) 3y − 5x + 15 = 0 (c) 5y − 3x − 15 = 0 (d) None of these</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Intercept and slope", description: <Formula>{String.raw`c = -3,\quad m = \tan\theta = \frac{3}{5}`}</Formula> },
                { label: "Slope-intercept form", description: <Formula>{String.raw`y = \frac{3}{5}x - 3`}</Formula> },
                { label: "Multiply by 5", description: <Formula>{String.raw`5y = 3x - 15 \;\Rightarrow\; 5y - 3x + 15 = 0`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">Answer: <strong>(a) 5y − 3x + 15 = 0</strong>.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="MCQ 2">
          <ProblemSolution.Problem>
            <p>The slope of a line which cuts off intercepts of equal length on the axes is: (a) −1 (b) 0 (c) 2 (d) √3</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Intercept form with equal intercepts", description: <Formula>{String.raw`\frac{x}{a} + \frac{y}{a} = 1 \;\Rightarrow\; x + y - a = 0`}</Formula> },
                { label: "Slope", description: <Formula>{String.raw`m = -\frac{A}{B} = -\frac{1}{1} = -1`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">Answer: <strong>(a) −1</strong>.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>
    </>
  );
}
