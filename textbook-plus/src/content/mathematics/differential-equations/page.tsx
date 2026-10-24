"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { TableCard } from "@/components/content/data/TableCard";
import { Comparison } from "@/components/content/Comparison";
import { FactCard } from "@/components/content/concept/FactCard";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function DifferentialEquationsChapter() {
  return (
    <>
      <h2 id="h-9-1">9.1 Introduction</h2>
      <Callout type="important">
        <p>
          In Class XI we learnt to differentiate a given function <Formula>f</Formula> and to
          integrate a given function <Formula>g</Formula>. A differential equation asks the reverse
          question in one compact statement: given <Formula>g</Formula>, find a function{" "}
          <Formula>{String.raw`y = f(x)`}</Formula> such that
        </p>
        <FormulaBlock latex={String.raw`\frac{dy}{dx} = g(x)`} important />
        <p>
          An equation of this type — one that contains a derivative — is called a{" "}
          <Highlight color="yellow">differential equation</Highlight>.
        </p>
      </Callout>
      <p>
        Such equations arise wherever a quantity and its rate of change are linked: the decay of a
        radioactive sample, the growth of a bacterial culture, the cooling of a hot body, the
        interest earned by a bank deposit, the slope of a curve at each of its points, or the motion
        of a body under a force. That is why an in-depth study of differential equations has assumed
        prime importance in all modern scientific investigation.
      </p>
      <p>
        In this chapter we study the basic concepts (order and degree), general and particular
        solutions, and three standard methods of solving a first order–first degree differential
        equation — <strong>variable separable</strong>, <strong>homogeneous</strong> and{" "}
        <strong>linear</strong> — followed by applications to growth, decay and curves.
      </p>
      <FactCard
        title="Jules Henri Poincaré (1854–1912)"
        definition="French mathematician and physicist who insisted on calling the answer to a differential equation a 'solution' rather than an 'integral'. He founded the qualitative theory of differential equations — studying the shape of solution curves without solving the equation explicitly."
        icon="∂"
      />

      <h2 id="h-9-2">9.2 Basic Concepts</h2>
      <p>
        We are already familiar with equations such as <Formula>{String.raw`x^2 - 3x + 3 = 0`}</Formula>,{" "}
        <Formula>{String.raw`\sin x + \cos x = 0`}</Formula> and{" "}
        <Formula>{String.raw`x + y = 7`}</Formula>. Each of these involves only the variables. Now
        consider
      </p>
      <FormulaBlock latex={String.raw`x\frac{dy}{dx} + y = 0`} />
      <p>
        This equation involves the variables <Formula>x</Formula>, <Formula>y</Formula> <em>and</em>{" "}
        the derivative <Formula>{String.raw`\frac{dy}{dx}`}</Formula>. In general:
      </p>
      <Callout type="note">
        <p>
          An equation involving derivatives of the dependent variable with respect to the
          independent variable (or variables) is called a{" "}
          <Highlight color="yellow">differential equation</Highlight>.
        </p>
      </Callout>
      <p>
        When the derivatives are with respect to <strong>one</strong> independent variable only, the
        equation is an <strong>ordinary differential equation</strong> (O.D.E.); when derivatives
        with respect to two or more independent variables occur, it is a{" "}
        <strong>partial differential equation</strong>. In this chapter “differential equation” will
        always mean an ordinary differential equation.
      </p>
      <KeyPoint title="Notation">
        <p>
          We write <Formula>{String.raw`y' = \frac{dy}{dx}`}</Formula>,{" "}
          <Formula>{String.raw`y'' = \frac{d^2y}{dx^2}`}</Formula>,{" "}
          <Formula>{String.raw`y''' = \frac{d^3y}{dx^3}`}</Formula>. For higher orders, dashes become
          unmanageable, so the <Formula>n</Formula>-th order derivative is written{" "}
          <Formula>{String.raw`y^{(n)} = \frac{d^ny}{dx^n}`}</Formula>. The differential equation
          itself is often written as <Formula>{String.raw`F(x, y, y', y'', \ldots) = 0`}</Formula>.
        </p>
      </KeyPoint>

      <h3 id="h-9-2-1">9.2.1 Order of a differential equation</h3>
      <p>
        The <strong>order</strong> of a differential equation is the order of the{" "}
        <Highlight color="blue">highest order derivative</Highlight> of the dependent variable that
        occurs in it. Consider:
      </p>
      <FormulaBlock latex={String.raw`\frac{dy}{dx} = e^x`} />
      <FormulaBlock latex={String.raw`\frac{d^2y}{dx^2} + y = 0`} />
      <FormulaBlock latex={String.raw`\left(\frac{d^3y}{dx^3}\right)^2 + x\left(\frac{d^2y}{dx^2}\right)^2 = 0`} />
      <p>
        The highest derivatives occurring in these three equations are of order one, two and three
        respectively, so their orders are <Formula>1</Formula>, <Formula>2</Formula> and{" "}
        <Formula>3</Formula>.
      </p>

      <h3 id="h-9-2-2">9.2.2 Degree of a differential equation</h3>
      <p>
        Degree is defined <strong>only</strong> when the differential equation is a polynomial
        equation in its derivatives <Formula>y'</Formula>, <Formula>y''</Formula>,{" "}
        <Formula>y'''</Formula>, … (it need not be a polynomial in <Formula>y</Formula>). When that
        is so, the <strong>degree</strong> is the highest power (positive integral index) of the
        highest order derivative involved.
      </p>
      <TableCard
        title="Is the degree defined?"
        headers={["Equation", "Polynomial in derivatives?", "Degree"]}
        rows={[
          {
            cells: [
              <span key="d1">
                <Formula>{String.raw`\frac{d^3y}{dx^3} + \left(\frac{d^2y}{dx^2}\right)^2 - y\frac{dy}{dx} = 0`}</Formula>
              </span>,
              "Yes",
              <span key="d1a">1</span>,
            ],
          },
          {
            cells: [
              <span key="d2">
                <Formula>{String.raw`\left(\frac{dy}{dx}\right)^2 + \sin\left(\frac{dy}{dx}\right) - y = 0`}</Formula>
              </span>,
              "Yes (not polynomial in y, but that is allowed)",
              <span key="d2a">2</span>,
            ],
          },
          {
            cells: [
              <span key="d3">
                <Formula>{String.raw`\frac{dy}{dx} + \sin\left(\frac{dy}{dx}\right) = 0`}</Formula>
              </span>,
              "No — the sine of a derivative occurs",
              <span key="d3a">Not defined</span>,
            ],
          },
        ]}
        caption="Both order and degree (when defined) are always positive integers."
      />
      <Callout type="warning">
        <p>
          <Formula>{String.raw`\sin y`}</Formula>, <Formula>{String.raw`e^y`}</Formula> or{" "}
          <Formula>{String.raw`y^2`}</Formula> appearing in the equation does <strong>not</strong>{" "}
          affect the degree. Only non-polynomial behaviour in the <em>derivatives</em> (like{" "}
          <Formula>{String.raw`\sin y'`}</Formula> or <Formula>{String.raw`e^{y'}`}</Formula>) makes
          the degree undefined.
        </p>
      </Callout>

      <Expandable title="Examples 1 to 3 — NCERT">
        <KeyPoint title="Example 1">
          <p>
            Find the order and degree, if defined, of each differential equation.
          </p>
          <p>
            <strong>(i)</strong> <Formula>{String.raw`\frac{dy}{dx} - \cos x = 0`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong> The highest derivative is{" "}
            <Formula>{String.raw`\frac{dy}{dx}`}</Formula>, so the order is 1. The equation is a
            polynomial in <Formula>y'</Formula> and the highest power of{" "}
            <Formula>{String.raw`\frac{dy}{dx}`}</Formula> is 1, so the degree is 1.
          </p>
          <p>
            <strong>(ii)</strong>{" "}
            <Formula>{String.raw`\frac{d^2y}{dx^2} + \left(\frac{dy}{dx}\right)^2 - xy = 0`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong> The highest derivative is{" "}
            <Formula>{String.raw`\frac{d^2y}{dx^2}`}</Formula>, so the order is 2. It is a polynomial
            in <Formula>{String.raw`\frac{d^2y}{dx^2}`}</Formula> and{" "}
            <Formula>{String.raw`\frac{dy}{dx}`}</Formula>, and the highest power of{" "}
            <Formula>{String.raw`\frac{d^2y}{dx^2}`}</Formula> is 1 — so the degree is 1.
          </p>
          <p>
            <strong>(iii)</strong> <Formula>{String.raw`y''' + y^2 + e^{y'} = 0`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong> The highest derivative is <Formula>y'''</Formula>, so the
            order is 3. But <Formula>{String.raw`e^{y'}`}</Formula> is not a polynomial in{" "}
            <Formula>y'</Formula>, so the degree is <strong>not defined</strong>.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 9.1">
        <ExerciseQa
          questions={[
            <>
              <Formula>{String.raw`\frac{d^4y}{dx^4} + \sin\left(y'''\right) = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y' + 5y = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\left(\frac{ds}{dt}\right)^4 + 3s\frac{d^2s}{dt^2} = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\left(\frac{d^2y}{dx^2}\right)^2 + \cos\left(\frac{dy}{dx}\right) = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{d^2y}{dx^2} = \cos 3x + \sin 3x`}</Formula>
            </>,
            <>
              <Formula>{String.raw`(y''')^2 + (y'')^3 + (y')^4 + y^5 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y''' + 2y'' + y' = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y' + y = e^x`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y'' + (y')^2 + 2y = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y'' + 2y' + \sin y = 0`}</Formula>
            </>,
            <>
              The degree of{" "}
              <Formula>{String.raw`\left(\frac{d^2y}{dx^2}\right)^3 + \left(\frac{dy}{dx}\right)^2 + \sin\left(\frac{dy}{dx}\right) + 1 = 0`}</Formula>{" "}
              is<br />
              (A) 3 (B) 2 (C) 1 (D) not defined
            </>,
            <>
              The order of{" "}
              <Formula>{String.raw`2x^2\frac{d^2y}{dx^2} - 3\frac{dy}{dx} + y = 0`}</Formula> is<br />
              (A) 2 (B) 1 (C) 0 (D) not defined
            </>,
          ]}
          answers={[
            <>Order 4; degree not defined (<Formula>{String.raw`\sin y'''`}</Formula> is not a polynomial in <Formula>y'''</Formula>).</>,
            <>Order 1, degree 1.</>,
            <>Order 2, degree 1.</>,
            <>Order 2; degree not defined (<Formula>{String.raw`\cos y'`}</Formula>).</>,
            <>Order 2, degree 1.</>,
            <>Order 3, degree 2.</>,
            <>Order 3, degree 1.</>,
            <>Order 1, degree 1.</>,
            <>Order 2, degree 1.</>,
            <>Order 2, degree 1.</>,
            <>(D) not defined</>,
            <>(A) 2</>,
          ]}
        />
      </Expandable>
      <h2 id="h-9-3">9.3 General and Particular Solutions of a Differential Equation</h2>
      <p>
        Solving <Formula>{String.raw`x^2 + 1 = 0`}</Formula> or{" "}
        <Formula>{String.raw`\sin^2 x - \cos x = 0`}</Formula> gives <strong>numbers</strong>. A
        differential equation is different: its solution is a <strong>function</strong>.
      </p>
      <p>
        Consider{" "}
        <Formula>{String.raw`\frac{d^2y}{dx^2} + y = 0`}</Formula>. The function{" "}
        <Formula>{String.raw`\varphi(x) = a\sin(x + b)`}</Formula>, where{" "}
        <Formula>{String.raw`a, b \in \mathbb{R}`}</Formula>, satisfies it: differentiating twice gives{" "}
        <Formula>{String.raw`\varphi'' = -a\sin(x+b) = -\varphi`}</Formula>, so{" "}
        <Formula>{String.raw`\varphi'' + \varphi = 0`}</Formula>. The curve{" "}
        <Formula>{String.raw`y = \varphi(x)`}</Formula> is called a{" "}
        <Highlight color="yellow">solution curve</Highlight> (integral curve) of the differential
        equation.
      </p>
      <p>
        Putting <Formula>{String.raw`a = 2`}</Formula> and{" "}
        <Formula>{String.raw`b = \frac{\pi}{4}`}</Formula> gives{" "}
        <Formula>{String.raw`y = 2\sin\left(x + \frac{\pi}{4}\right)`}</Formula>, which also
        satisfies the equation — but it carries no arbitrary constant. The two kinds of answer have
        names:
      </p>
      <Comparison
        columns={[
          {
            title: "General solution (primitive)",
            children: (
              <>
                <p>
                  Contains as many <strong>arbitrary constants</strong> as the order of the
                  differential equation.
                </p>
                <p>
                  <Formula>{String.raw`y = a\sin(x+b)`}</Formula> — two constants for a second order
                  equation.
                </p>
                <p>Geometrically: a whole family of solution curves.</p>
              </>
            ),
          },
          {
            title: "Particular solution",
            children: (
              <>
                <p>
                  Free from arbitrary constants — obtained by giving{" "}
                  <strong>particular values</strong> to those constants (usually from an initial
                  condition).
                </p>
                <p>
                  <Formula>{String.raw`y = 2\sin\left(x+\frac{\pi}{4}\right)`}</Formula>.
                </p>
                <p>Geometrically: one member of the family — one specific curve.</p>
              </>
            ),
          },
        ]}
      />
      <Callout type="tip">
        <p>
          A differential equation of order <Formula>n</Formula> needs <Formula>n</Formula>{" "}
          conditions to pin down one particular solution, because its general solution carries{" "}
          <Formula>n</Formula> arbitrary constants. A particular solution of a third order equation
          therefore contains <Highlight color="green">zero</Highlight> arbitrary constants.
        </p>
      </Callout>

      <Expandable title="Examples 2 to 3 — NCERT">
        <KeyPoint title="Example 2">
          <p>
            Verify that <Formula>{String.raw`y = e^{-3x}`}</Formula> is a solution of{" "}
            <Formula>{String.raw`\frac{d^2y}{dx^2} + \frac{dy}{dx} - 6y = 0`}</Formula>.
          </p>
          <p>
            <strong>Step 1.</strong> Differentiate:{" "}
            <Formula>{String.raw`\frac{dy}{dx} = -3e^{-3x}`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong> Differentiate again:{" "}
            <Formula>{String.raw`\frac{d^2y}{dx^2} = 9e^{-3x}`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong> Substitute all three in the left side:
          </p>
          <p>
            <Formula>{String.raw`\text{L.H.S.} = 9e^{-3x} + (-3e^{-3x}) - 6e^{-3x} = 9e^{-3x} - 9e^{-3x} = 0 = \text{R.H.S.}`}</Formula>
          </p>
          <p>Hence the given function is a solution.</p>
        </KeyPoint>
        <KeyPoint title="Example 3">
          <p>
            Verify that <Formula>{String.raw`y = a\cos x + b\sin x`}</Formula>, where{" "}
            <Formula>{String.raw`a, b \in \mathbb{R}`}</Formula>, is a solution of{" "}
            <Formula>{String.raw`\frac{d^2y}{dx^2} + y = 0`}</Formula>.
          </p>
          <p>
            <strong>Step 1.</strong> <Formula>{String.raw`\frac{dy}{dx} = -a\sin x + b\cos x`}</Formula>
          </p>
          <p>
            <strong>Step 2.</strong>{" "}
            <Formula>{String.raw`\frac{d^2y}{dx^2} = -a\cos x - b\sin x = -y`}</Formula>
          </p>
          <p>
            <strong>Step 3.</strong>{" "}
            <Formula>{String.raw`\text{L.H.S.} = (-a\cos x - b\sin x) + (a\cos x + b\sin x) = 0 = \text{R.H.S.}`}</Formula>
          </p>
          <p>
            So <Formula>{String.raw`y = a\cos x + b\sin x`}</Formula> is the{" "}
            <strong>general solution</strong> of <Formula>{String.raw`y'' + y = 0`}</Formula> — two
            arbitrary constants for an equation of order two.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 9.2">
        <ExerciseQa
          questions={[
            <>
              <Formula>{String.raw`y = e^x + 1`}</Formula> : <Formula>{String.raw`y'' - y' = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y = x^2 + 2x + C`}</Formula> : <Formula>{String.raw`y' - 2x - 2 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y = \cos x + C`}</Formula> : <Formula>{String.raw`y' + \sin x = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y = \sqrt{1 + x^2}`}</Formula> :{" "}
              <Formula>{String.raw`y' = \frac{xy}{1 + x^2}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y = Ax`}</Formula> : <Formula>{String.raw`xy' = y\ (x \neq 0)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y = x\sin x`}</Formula> :{" "}
              <Formula>{String.raw`xy' = y + x\sqrt{x^2 - y^2}`}</Formula>{" "}
              (<Formula>{String.raw`x \neq 0`}</Formula>)
            </>,
            <>
              <Formula>{String.raw`xy = \log y + C`}</Formula> :{" "}
              <Formula>{String.raw`y' = \frac{y^2}{1 - xy}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y - \cos y = x`}</Formula> :{" "}
              <Formula>{String.raw`(y\sin y + \cos y + x)y' = y`}</Formula>
            </>,
            <>
              <Formula>{String.raw`x + y = \tan^{-1}y`}</Formula> :{" "}
              <Formula>{String.raw`y^2 y' + y^2 + 1 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y = \sqrt{a^2 - x^2},\ x \in (-a, a)`}</Formula> :{" "}
              <Formula>{String.raw`x + y\frac{dy}{dx} = 0`}</Formula>
            </>,
            <>
              The number of arbitrary constants in the general solution of a differential equation of
              fourth order is<br />
              (A) 0 (B) 2 (C) 3 (D) 4
            </>,
            <>
              The number of arbitrary constants in the particular solution of a differential equation
              of third order is<br />
              (A) 3 (B) 2 (C) 1 (D) 0
            </>,
          ]}
          answers={[
            <><Formula>{String.raw`y' = e^x,\ y'' = e^x \Rightarrow y'' - y' = 0`}</Formula> — verified.</>,
            <><Formula>{String.raw`y' = 2x + 2 \Rightarrow y' - 2x - 2 = 0`}</Formula> — verified.</>,
            <><Formula>{String.raw`y' = -\sin x \Rightarrow y' + \sin x = 0`}</Formula> — verified.</>,
            <><Formula>{String.raw`y' = \frac{x}{\sqrt{1+x^2}} = \frac{xy}{1+x^2}`}</Formula> — verified.</>,
            <><Formula>{String.raw`xy' = xA = y`}</Formula> — verified.</>,
            <>
              <Formula>{String.raw`y' = \sin x + x\cos x`}</Formula>, so{" "}
              <Formula>{String.raw`xy' = x\sin x + x^2\cos x = y + x\sqrt{x^2 - y^2}`}</Formula> —
              verified.
            </>,
            <>
              Differentiating implicitly:{" "}
              <Formula>{String.raw`y + xy' = \frac{y'}{y} \Rightarrow y' = \frac{y^2}{1 - xy}`}</Formula>{" "}
              — verified.
            </>,
            <>
              <Formula>{String.raw`y' - (-\sin y)y' = 1 \Rightarrow (1 + \sin y)y' = 1`}</Formula>,
              and multiplying by <Formula>{String.raw`(y\sin y + \cos y + x)`}</Formula> gives{" "}
              <Formula>{String.raw`y`}</Formula> — verified.
            </>,
            <>
              <Formula>{String.raw`1 + y' = \frac{y'}{1 + y^2} \Rightarrow y' = -(1+y^2)/y^2`}</Formula>{" "}
              — hence <Formula>{String.raw`y^2y' + y^2 + 1 = 0`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`2yy' = -2x \Rightarrow x + yy' = 0`}</Formula> — verified.
            </>,
            <>(D) 4</>,
            <>(D) 0</>,
          ]}
        />
      </Expandable>

      {/* __MORE__ */}
    </>
  );
}
