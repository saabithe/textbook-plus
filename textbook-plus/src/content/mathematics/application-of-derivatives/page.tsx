"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { TableCard } from "@/components/content/data/TableCard";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { Stepper } from "@/components/content/Stepper";

export default function ApplicationOfDerivativesChapter() {
  return (
    <>
      <h2 id="h-6-1">6.1 Introduction</h2>
      <blockquote>
        <p>
          &ldquo;With the Calculus as a key, Mathematics can be successfully applied to the
          explanation of the course of Nature.&rdquo;
        </p>
        <p>
          <strong>— A. N. Whitehead</strong>
        </p>
      </blockquote>
      <p>
        In Chapter 5 we learnt how to find the derivative of composite functions, inverse
        trigonometric functions, implicit functions, exponential functions and logarithmic
        functions. In this chapter we put that machinery to work. The derivative is not an end in
        itself — it is a <strong>rate-measuring instrument</strong>, and every application below is
        a different reading of the same instrument.
      </p>
      <Callout type="note">
        <p>The derivative is used in this chapter to:</p>
        <ul className="mt-2 space-y-1.5">
          <li>(i) determine the <strong>rate of change</strong> of one quantity with respect to another;</li>
          <li>(ii) find the equations of the <strong>tangent and normal</strong> to a curve at a point;</li>
          <li>(iii) locate the <strong>turning points</strong> of a graph — the points where the largest or smallest (local) value of a function occurs;</li>
          <li>(iv) find the <strong>intervals</strong> on which a function is increasing or decreasing;</li>
          <li>(v) find the <strong>approximate value</strong> of certain quantities.</li>
        </ul>
      </Callout>
      <p>
        The same ideas travel far outside the mathematics classroom — into engineering, the
        physical and life sciences, economics and the social sciences. A biologist tracking a
        growing colony, an engineer minimising the metal in a can and an economist maximising
        profit are all solving the same problem: <em>where is the derivative zero, and what does
        the sign of the derivative tell me there?</em>
      </p>

      <h2 id="h-6-2">6.2 Rate of Change of Quantities</h2>
      <p>
        Recall that by the derivative{" "}
        <Formula>{String.raw`\frac{ds}{dt}`}</Formula> we mean the rate of change of distance{" "}
        <Formula>s</Formula> with respect to time <Formula>t</Formula>. In the same fashion,
        whenever one quantity <Formula>y</Formula> varies with another quantity{" "}
        <Formula>x</Formula> satisfying some rule{" "}
        <Formula>{String.raw`y = f(x)`}</Formula>, the derivative{" "}
        <Formula>{String.raw`\frac{dy}{dx}`}</Formula> represents the rate of change of{" "}
        <Formula>y</Formula> with respect to <Formula>x</Formula>, and its value at{" "}
        <Formula>{String.raw`x = x_0`}</Formula> is the rate of change <em>at that instant</em>.
      </p>
      <FormulaBlock
        latex={String.raw`\left.\frac{dy}{dx}\right|_{x=x_0} = f'(x_0)`}
        label="Rate of change at a point"
        important
      />
      <p>
        Very often both quantities are functions of a third variable — time, say — so that{" "}
        <Formula>{String.raw`x = f(t)`}</Formula> and{" "}
        <Formula>{String.raw`y = g(t)`}</Formula>. The Chain Rule then converts their separate
        rates into the rate of one with respect to the other.
      </p>
      <FormulaBlock
        latex={String.raw`\frac{dy}{dx} = \frac{dy/dt}{dx/dt},\qquad \frac{dx}{dt} \neq 0`}
        label="Chain rule for related rates"
        important
      />
      <p>
        So the rate of change of <Formula>y</Formula> with respect to <Formula>x</Formula> is the
        ratio of two <em>time</em> rates. This is the whole technique of &ldquo;related
        rates&rdquo;: differentiate the relation connecting the quantities with respect to{" "}
        <Formula>t</Formula>, then substitute the known rate.
      </p>
      <Callout type="note">
        <p>
          <Formula>{String.raw`\frac{dy}{dx}`}</Formula> is{" "}
          <Highlight color="blue">positive</Highlight> if <Formula>y</Formula> increases as{" "}
          <Formula>x</Formula> increases, and{" "}
          <Highlight color="blue">negative</Highlight> if <Formula>y</Formula> decreases as{" "}
          <Formula>x</Formula> increases. A negative answer is not an error — it is the word
          &ldquo;decreasing&rdquo; written in symbols.
        </p>
      </Callout>

      <Expandable title="Examples 1 to 6 — NCERT">
        <KeyPoint title="Example 1">
          <p>
            Find the rate of change of the area of a circle per second with respect to its radius{" "}
            <Formula>r</Formula> when <Formula>{String.raw`r = 5`}</Formula> cm.
          </p>
          <p>
            <strong>Solution.</strong> The area is{" "}
            <Formula>{String.raw`A = \pi r^2`}</Formula>, so
          </p>
          <p>
            <Formula>{String.raw`\frac{dA}{dr} = \frac{d}{dr}\left(\pi r^2\right) = 2\pi r`}</Formula>
          </p>
          <p>
            When <Formula>{String.raw`r = 5`}</Formula> cm,{" "}
            <Formula>{String.raw`\frac{dA}{dr} = 10\pi`}</Formula>. The area is changing at{" "}
            <Formula>{String.raw`10\pi\ \text{cm}^2/\text{s}`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 2">
          <p>
            The volume of a cube is increasing at <Formula>{String.raw`9\ \text{cm}^3/\text{s}`}</Formula>.
            How fast is the surface area increasing when the edge is <Formula>10</Formula> cm?
          </p>
          <p>
            <strong>Solution.</strong> Let <Formula>x</Formula> be the edge,{" "}
            <Formula>V</Formula> the volume and <Formula>S</Formula> the surface area:
          </p>
          <p>
            <Formula>{String.raw`V = x^3,\qquad S = 6x^2`}</Formula>
          </p>
          <p>
            Given <Formula>{String.raw`\frac{dV}{dt} = 9`}</Formula>. By the Chain Rule,
          </p>
          <p>
            <Formula>{String.raw`9 = \frac{dV}{dt} = \frac{d}{dx}\left(x^3\right)\cdot\frac{dx}{dt} = 3x^2\frac{dx}{dt}`}</Formula>
          </p>
          <p>
            so <Formula>{String.raw`\frac{dx}{dt} = \frac{3}{x^2}`}</Formula>. Next,
          </p>
          <p>
            <Formula>{String.raw`\frac{dS}{dt} = \frac{d}{dx}\left(6x^2\right)\cdot\frac{dx}{dt} = 12x\cdot\frac{3}{x^2} = \frac{36}{x}`}</Formula>
          </p>
          <p>
            At <Formula>{String.raw`x = 10`}</Formula> cm,{" "}
            <Formula>{String.raw`\frac{dS}{dt} = 3.6\ \text{cm}^2/\text{s}`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 3">
          <p>
            A stone is dropped into a quiet lake and waves move in circles at{" "}
            <Formula>{String.raw`4`}</Formula> cm/s. When the radius is <Formula>10</Formula> cm,
            how fast is the enclosed area increasing?
          </p>
          <p>
            <strong>Solution.</strong> With <Formula>{String.raw`A = \pi r^2`}</Formula>,
          </p>
          <p>
            <Formula>{String.raw`\frac{dA}{dt} = \frac{d}{dr}\left(\pi r^2\right)\cdot\frac{dr}{dt} = 2\pi r\frac{dr}{dt}`}</Formula>
          </p>
          <p>
            Here <Formula>{String.raw`\frac{dr}{dt} = 4`}</Formula> cm/s, so at{" "}
            <Formula>{String.raw`r = 10`}</Formula> cm,
          </p>
          <p>
            <Formula>{String.raw`\frac{dA}{dt} = 2\pi(10)(4) = 80\pi\ \text{cm}^2/\text{s}`}</Formula>
          </p>
          <p>The enclosed area grows at <Formula>{String.raw`80\pi\ \text{cm}^2/\text{s}`}</Formula>.</p>
        </KeyPoint>
        <KeyPoint title="Example 4">
          <p>
            The length <Formula>x</Formula> of a rectangle decreases at{" "}
            <Formula>{String.raw`3`}</Formula> cm/min and the width <Formula>y</Formula> increases
            at <Formula>{String.raw`2`}</Formula> cm/min. When{" "}
            <Formula>{String.raw`x = 10`}</Formula> cm and <Formula>{String.raw`y = 6`}</Formula>{" "}
            cm, find the rates of change of (a) the perimeter and (b) the area.
          </p>
          <p>
            <strong>Solution.</strong> Signs matter:{" "}
            <Formula>{String.raw`\frac{dx}{dt} = -3`}</Formula> and{" "}
            <Formula>{String.raw`\frac{dy}{dt} = 2`}</Formula>.
          </p>
          <p>
            (a) <Formula>{String.raw`P = 2(x+y)`}</Formula>, so
          </p>
          <p>
            <Formula>{String.raw`\frac{dP}{dt} = 2\left(\frac{dx}{dt} + \frac{dy}{dt}\right) = 2(-3+2) = -2\ \text{cm/min}`}</Formula>
          </p>
          <p>
            (b) <Formula>{String.raw`A = xy`}</Formula> (product rule), so
          </p>
          <p>
            <Formula>{String.raw`\frac{dA}{dt} = y\frac{dx}{dt} + x\frac{dy}{dt} = 6(-3) + 10(2) = 2\ \text{cm}^2/\text{min}`}</Formula>
          </p>
          <p>
            The perimeter decreases at <Formula>2</Formula> cm/min while the area increases at{" "}
            <Formula>{String.raw`2\ \text{cm}^2/\text{min}`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 5">
          <p>
            The total cost of producing <Formula>x</Formula> units is{" "}
            <Formula>{String.raw`C(x) = 0.005x^3 - 0.02x^2 + 30x + 5000`}</Formula> rupees. Find
            the marginal cost when 3 units are produced (marginal cost = instantaneous rate of
            change of total cost with respect to output).
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`\text{MC} = \frac{dC}{dx} = 0.005\left(3x^2\right) - 0.02(2x) + 30 = 0.015x^2 - 0.04x + 30`}</Formula>
          </p>
          <p>
            At <Formula>{String.raw`x = 3`}</Formula>:
          </p>
          <p>
            <Formula>{String.raw`\text{MC} = 0.015(9) - 0.04(3) + 30 = 0.135 - 0.12 + 30 = 30.015`}</Formula>
          </p>
          <p>
            The marginal cost is about <Formula>{String.raw`\text{Rs }30.02`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 6">
          <p>
            The total revenue from the sale of <Formula>x</Formula> units is{" "}
            <Formula>{String.raw`R(x) = 3x^2 + 36x + 5`}</Formula> rupees. Find the marginal
            revenue when <Formula>{String.raw`x = 5`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`\text{MR} = \frac{dR}{dx} = 6x + 36`}</Formula>
          </p>
          <p>
            At <Formula>{String.raw`x = 5`}</Formula>,{" "}
            <Formula>{String.raw`\text{MR} = 6(5) + 36 = 66`}</Formula>. The marginal revenue is{" "}
            <Formula>{String.raw`\text{Rs }66`}</Formula>.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 6.1 — Rate of Change of Quantities">
        <ExerciseQa
          questions={[
            <>
              Find the rate of change of the area of a circle with respect to its radius{" "}
              <Formula>r</Formula> when (a) <Formula>{String.raw`r = 3`}</Formula> cm, (b){" "}
              <Formula>{String.raw`r = 4`}</Formula> cm.
            </>,
            <>
              The volume of a cube is increasing at <Formula>{String.raw`8\ \text{cm}^3/\text{s}`}</Formula>.
              How fast is the surface area increasing when the edge is <Formula>12</Formula> cm?
            </>,
            <>
              The radius of a circle increases uniformly at <Formula>{String.raw`3`}</Formula>{" "}
              cm/s. Find the rate at which the area increases when{" "}
              <Formula>{String.raw`r = 10`}</Formula> cm.
            </>,
            <>
              An edge of a variable cube increases at <Formula>{String.raw`3`}</Formula> cm/s. How
              fast is the volume increasing when the edge is <Formula>10</Formula> cm long?
            </>,
            <>
              A stone is dropped into a quiet lake and waves move in circles at{" "}
              <Formula>{String.raw`5`}</Formula> cm/s. When the radius of the wave is{" "}
              <Formula>8</Formula> cm, how fast is the enclosed area increasing?
            </>,
            <>
              The radius of a circle increases at <Formula>{String.raw`0.7`}</Formula> cm/s. What
              is the rate of increase of its circumference?
            </>,
            <>
              The length <Formula>x</Formula> of a rectangle decreases at{" "}
              <Formula>{String.raw`5`}</Formula> cm/min and the width <Formula>y</Formula>{" "}
              increases at <Formula>{String.raw`4`}</Formula> cm/min. When{" "}
              <Formula>{String.raw`x = 8`}</Formula> cm and{" "}
              <Formula>{String.raw`y = 6`}</Formula> cm, find the rates of change of (a) the
              perimeter, (b) the area.
            </>,
            <>
              A spherical balloon is inflated by pumping in <Formula>{String.raw`900`}</Formula>{" "}
              cm³ of gas per second. Find the rate at which the radius increases when{" "}
              <Formula>{String.raw`r = 15`}</Formula> cm.
            </>,
            <>
              A spherical balloon has a variable radius. Find the rate at which its volume
              increases with the radius when the radius is <Formula>10</Formula> cm.
            </>,
            <>
              A ladder <Formula>5</Formula> m long leans against a wall. Its foot is pulled away
              from the wall at <Formula>{String.raw`2`}</Formula> cm/s. How fast is its height on
              the wall decreasing when the foot is <Formula>4</Formula> m from the wall?
            </>,
            <>
              A particle moves along the curve{" "}
              <Formula>{String.raw`6y = x^3 + 2`}</Formula>. Find the points on the curve at which
              the <Formula>y</Formula>-coordinate changes 8 times as fast as the{" "}
              <Formula>x</Formula>-coordinate.
            </>,
            <>
              The radius of an air bubble increases at{" "}
              <Formula>{String.raw`\frac{1}{2}`}</Formula> cm/s. At what rate is the volume
              increasing when <Formula>{String.raw`r = 1`}</Formula> cm?
            </>,
            <>
              A spherical balloon has variable diameter{" "}
              <Formula>{String.raw`\frac{3}{2}(2x+1)`}</Formula>. Find the rate of change of its
              volume with respect to <Formula>x</Formula>.
            </>,
            <>
              Sand pours from a pipe at <Formula>{String.raw`12\ \text{cm}^3/\text{s}`}</Formula>{" "}
              and forms a cone whose height is always one-sixth of the base radius. How fast is
              the height increasing when <Formula>{String.raw`h = 4`}</Formula> cm?
            </>,
            <>
              The total cost of producing <Formula>x</Formula> units is{" "}
              <Formula>{String.raw`C(x) = 0.007x^3 - 0.003x^2 + 15x + 4000`}</Formula> rupees.
              Find the marginal cost when 17 units are produced.
            </>,
            <>
              The total revenue from <Formula>x</Formula> units is{" "}
              <Formula>{String.raw`R(x) = 13x^2 + 26x + 15`}</Formula> rupees. Find the marginal
              revenue when <Formula>{String.raw`x = 7`}</Formula>.
            </>,
            <>
              The rate of change of the area of a circle with respect to its radius at{" "}
              <Formula>{String.raw`r = 6`}</Formula> cm is: (A) <Formula>{String.raw`10\pi`}</Formula>{" "}
              (B) <Formula>{String.raw`12\pi`}</Formula> (C){" "}
              <Formula>{String.raw`8\pi`}</Formula> (D) <Formula>{String.raw`11\pi`}</Formula>
            </>,
            <>
              For <Formula>{String.raw`R(x) = 3x^2 + 36x + 5`}</Formula>, the marginal revenue at{" "}
              <Formula>{String.raw`x = 15`}</Formula> is: (A) 116 (B) 96 (C) 90 (D) 126
            </>,
          ]}
          answers={[
            <>
              (a) <Formula>{String.raw`6\pi\ \text{cm}^2/\text{cm}`}</Formula> (b){" "}
              <Formula>{String.raw`8\pi\ \text{cm}^2/\text{cm}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{8}{3}\ \text{cm}^2/\text{s}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`60\pi\ \text{cm}^2/\text{s}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`900\ \text{cm}^3/\text{s}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`80\pi\ \text{cm}^2/\text{s}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`1.4\pi\ \text{cm/s}`}</Formula>
            </>,
            <>
              (a) <Formula>{String.raw`-2`}</Formula> cm/min (decreasing) (b){" "}
              <Formula>{String.raw`2\ \text{cm}^2/\text{min}`}</Formula> (increasing)
            </>,
            <>
              <Formula>{String.raw`\frac{1}{\pi}`}</Formula> cm/s
            </>,
            <>
              <Formula>{String.raw`400\pi\ \text{cm}^3/\text{cm}`}</Formula>
            </>,
            <>
              Decreasing at <Formula>{String.raw`\frac{8}{3}`}</Formula> cm/s
            </>,
            <>
              <Formula>{String.raw`(4,\,11)`}</Formula> and{" "}
              <Formula>{String.raw`\left(-4,\,-\frac{31}{3}\right)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`2\pi\ \text{cm}^3/\text{s}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{27\pi}{8}(2x+1)^2`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{1}{48\pi}`}</Formula> cm/s
            </>,
            <>
              <Formula>{String.raw`\text{Rs }20.97`}</Formula> (nearly)
            </>,
            <>
              <Formula>{String.raw`\text{Rs }208`}</Formula>
            </>,
            <>
              (B)
            </>,
            <>
              (D)
            </>,
          ]}
        />
      </Expandable>

      <h2 id="h-6-3">6.3 Increasing and Decreasing Functions</h2>
      <p>
        Look at the graph of <Formula>{String.raw`f(x) = x^2`}</Formula>. To the right of the
        origin the height of the graph rises continuously as we move from left to right — the
        function is <strong>increasing</strong> for <Formula>{String.raw`x > 0`}</Formula>. To the
        left of the origin the height falls continuously — the function is{" "}
        <strong>decreasing</strong> for <Formula>{String.raw`x < 0`}</Formula>. The derivative
        turns this visual observation into arithmetic.
      </p>
      <KeyPoint title="Definition 1 — increasing / decreasing on an interval">
        <p>
          Let <Formula>I</Formula> be an interval in the domain of a real valued function{" "}
          <Formula>f</Formula>, and let{" "}
          <Formula>{String.raw`x_1, x_2 \in I`}</Formula>.
        </p>
        <p>
          (i) <Formula>f</Formula> is <strong>increasing</strong> on <Formula>I</Formula> if{" "}
          <Formula>{String.raw`x_1 < x_2 \Rightarrow f(x_1) \le f(x_2)`}</Formula>.
        </p>
        <p>
          (ii) <Formula>f</Formula> is <strong>decreasing</strong> on <Formula>I</Formula> if{" "}
          <Formula>{String.raw`x_1 < x_2 \Rightarrow f(x_1) \ge f(x_2)`}</Formula>.
        </p>
        <p>
          (iii) <Formula>f</Formula> is <strong>constant</strong> on <Formula>I</Formula> if{" "}
          <Formula>{String.raw`f(x) = c`}</Formula> for all <Formula>{String.raw`x \in I`}</Formula>.
        </p>
        <p>
          (iv) <strong>Strictly increasing</strong>:{" "}
          <Formula>{String.raw`x_1 < x_2 \Rightarrow f(x_1) < f(x_2)`}</Formula>;{" "}
          <strong>strictly decreasing</strong>:{" "}
          <Formula>{String.raw`x_1 < x_2 \Rightarrow f(x_1) > f(x_2)`}</Formula>.
        </p>
      </KeyPoint>
      <p>
        A function is increasing <em>at a point</em> <Formula>{String.raw`x_0`}</Formula> when it
        is increasing on some open interval containing <Formula>{String.raw`x_0`}</Formula>
        (Definition 2). But checking every pair of points is slow. The Mean Value Theorem of
        Chapter 5 gives a shortcut that needs only the sign of one derivative.
      </p>
      <KeyPoint title="Theorem 1 — first derivative test for monotonicity">
        <p>
          Let <Formula>f</Formula> be continuous on{" "}
          <Formula>{String.raw`[a,b]`}</Formula> and differentiable on{" "}
          <Formula>{String.raw`(a,b)`}</Formula>. Then <Formula>f</Formula> is
        </p>
        <p>
          (a) <strong>increasing</strong> in <Formula>{String.raw`[a,b]`}</Formula> if{" "}
          <Formula>{String.raw`f'(x) > 0`}</Formula> for each{" "}
          <Formula>{String.raw`x \in (a,b)`}</Formula>;
        </p>
        <p>
          (b) <strong>decreasing</strong> in <Formula>{String.raw`[a,b]`}</Formula> if{" "}
          <Formula>{String.raw`f'(x) < 0`}</Formula> for each{" "}
          <Formula>{String.raw`x \in (a,b)`}</Formula>;
        </p>
        <p>
          (c) <strong>constant</strong> in <Formula>{String.raw`[a,b]`}</Formula> if{" "}
          <Formula>{String.raw`f'(x) = 0`}</Formula> for each{" "}
          <Formula>{String.raw`x \in (a,b)`}</Formula>.
        </p>
        <p>
          <strong>Proof of (a).</strong> Let{" "}
          <Formula>{String.raw`x_1 < x_2`}</Formula> in{" "}
          <Formula>{String.raw`[a,b]`}</Formula>. By the Mean Value Theorem there is a{" "}
          <Formula>c</Formula> between <Formula>{String.raw`x_1`}</Formula> and{" "}
          <Formula>{String.raw`x_2`}</Formula> with
        </p>
        <p>
          <Formula>{String.raw`f(x_2) - f(x_1) = f'(c)(x_2 - x_1) > 0`}</Formula>
        </p>
        <p>
          since <Formula>{String.raw`f'(c) > 0`}</Formula> and{" "}
          <Formula>{String.raw`x_2 - x_1 > 0`}</Formula>. Hence{" "}
          <Formula>{String.raw`f(x_1) < f(x_2)`}</Formula> and <Formula>f</Formula> is increasing.
          Parts (b) and (c) are proved similarly.
        </p>
      </KeyPoint>
      <Callout type="note">
        <p>
          A more general statement: if <Formula>{String.raw`f'(x) > 0`}</Formula> on an interval
          except at isolated points where it vanishes, and <Formula>f</Formula> is continuous
          there, then <Formula>f</Formula> is still increasing. A derivative that is zero at one
          point (like <Formula>{String.raw`f'(x) = 3(x-1)^2`}</Formula>) does not break
          monotonicity.
        </p>
      </Callout>

      <Expandable title="Examples 7 to 13 — NCERT">
        <KeyPoint title="Example 7">
          <p>
            Show that <Formula>{String.raw`f(x) = 7x - 3`}</Formula> is increasing on{" "}
            <Formula>{String.raw`\mathbb{R}`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> Let{" "}
            <Formula>{String.raw`x_1 < x_2`}</Formula>. Then{" "}
            <Formula>{String.raw`7x_1 < 7x_2`}</Formula>, hence{" "}
            <Formula>{String.raw`7x_1 - 3 < 7x_2 - 3`}</Formula>, i.e.{" "}
            <Formula>{String.raw`f(x_1) < f(x_2)`}</Formula>. By Definition 1,{" "}
            <Formula>f</Formula> is strictly increasing on <Formula>{String.raw`\mathbb{R}`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 8">
          <p>
            Show that{" "}
            <Formula>{String.raw`f(x) = x^3 - 3x^2 + 4x`}</Formula> is increasing on{" "}
            <Formula>{String.raw`\mathbb{R}`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> Complete the square in the derivative:
          </p>
          <p>
            <Formula>{String.raw`f'(x) = 3x^2 - 6x + 4 = 3\left(x^2 - 2x + 1\right) + 1 = 3(x-1)^2 + 1 > 0`}</Formula>
          </p>
          <p>
            The derivative is positive on every interval of{" "}
            <Formula>{String.raw`\mathbb{R}`}</Formula>, so <Formula>f</Formula> is increasing.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 9">
          <p>
            Prove that <Formula>{String.raw`f(x) = \cos x`}</Formula> is (a) decreasing in{" "}
            <Formula>{String.raw`(0,\pi)`}</Formula>, (b) increasing in{" "}
            <Formula>{String.raw`(\pi, 2\pi)`}</Formula>, and (c) neither in{" "}
            <Formula>{String.raw`(0,2\pi)`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>{" "}
            <Formula>{String.raw`f'(x) = -\sin x`}</Formula>.
          </p>
          <p>
            (a) For <Formula>{String.raw`x \in (0,\pi)`}</Formula>,{" "}
            <Formula>{String.raw`\sin x > 0`}</Formula>, so{" "}
            <Formula>{String.raw`f'(x) < 0`}</Formula> — decreasing.
          </p>
          <p>
            (b) For <Formula>{String.raw`x \in (\pi, 2\pi)`}</Formula>,{" "}
            <Formula>{String.raw`\sin x < 0`}</Formula>, so{" "}
            <Formula>{String.raw`f'(x) > 0`}</Formula> — increasing.
          </p>
          <p>
            (c) Both behaviours occur in{" "}
            <Formula>{String.raw`(0,2\pi)`}</Formula>, so <Formula>f</Formula> is neither
            increasing nor decreasing there.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 10">
          <p>
            Find the intervals in which{" "}
            <Formula>{String.raw`f(x) = x^2 - 4x + 6`}</Formula> is (a) increasing (b) decreasing.
          </p>
          <p>
            <strong>Solution.</strong>{" "}
            <Formula>{String.raw`f'(x) = 2x - 4`}</Formula>, which vanishes at{" "}
            <Formula>{String.raw`x = 2`}</Formula>. This point splits{" "}
            <Formula>{String.raw`\mathbb{R}`}</Formula> into{" "}
            <Formula>{String.raw`(-\infty, 2)`}</Formula> and{" "}
            <Formula>{String.raw`(2, \infty)`}</Formula>.
          </p>
          <p>
            On <Formula>{String.raw`(-\infty, 2)`}</Formula>:{" "}
            <Formula>{String.raw`f'(x) < 0`}</Formula> — decreasing. On{" "}
            <Formula>{String.raw`(2, \infty)`}</Formula>:{" "}
            <Formula>{String.raw`f'(x) > 0`}</Formula> — increasing.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 11">
          <p>
            Find the intervals in which{" "}
            <Formula>{String.raw`f(x) = 4x^3 - 6x^2 - 72x + 30`}</Formula> is (a) increasing (b)
            decreasing.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`f'(x) = 12x^2 - 12x - 72 = 12\left(x^2 - x - 6\right) = 12(x-3)(x+2)`}</Formula>
          </p>
          <p>
            So <Formula>{String.raw`f'(x) = 0`}</Formula> at{" "}
            <Formula>{String.raw`x = -2`}</Formula> and{" "}
            <Formula>{String.raw`x = 3`}</Formula>, which divide{" "}
            <Formula>{String.raw`\mathbb{R}`}</Formula> into three intervals. Test the sign of
            each factor:
          </p>
          <TableCard
            headers={["Interval", "Sign of f'(x)", "Nature of f"]}
            rows={[
              {
                cells: [
                  <span key="r1">
                    <Formula>{String.raw`(-\infty,-2)`}</Formula>
                  </span>,
                  <span key="r1s">
                    <Formula>{String.raw`(-)(-) > 0`}</Formula>
                  </span>,
                  "increasing",
                ],
              },
              {
                cells: [
                  <span key="r2">
                    <Formula>{String.raw`(-2,3)`}</Formula>
                  </span>,
                  <span key="r2s">
                    <Formula>{String.raw`(-)(+) < 0`}</Formula>
                  </span>,
                  "decreasing",
                ],
              },
              {
                cells: [
                  <span key="r3">
                    <Formula>{String.raw`(3,\infty)`}</Formula>
                  </span>,
                  <span key="r3s">
                    <Formula>{String.raw`(+)(+) > 0`}</Formula>
                  </span>,
                  "increasing",
                ],
              },
            ]}
          />
          <p>
            The function is increasing in{" "}
            <Formula>{String.raw`(-\infty,-2) \cup (3,\infty)`}</Formula> and decreasing in{" "}
            <Formula>{String.raw`(-2,3)`}</Formula>; it is neither increasing nor decreasing on
            the whole of <Formula>{String.raw`\mathbb{R}`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 12">
          <p>
            Find the intervals in which{" "}
            <Formula>{String.raw`f(x) = \sin 3x`}</Formula>,{" "}
            <Formula>{String.raw`x \in \left[0,\frac{\pi}{2}\right]`}</Formula>, is (a) increasing
            (b) decreasing.
          </p>
          <p>
            <strong>Solution.</strong>{" "}
            <Formula>{String.raw`f'(x) = 3\cos 3x`}</Formula>. Now{" "}
            <Formula>{String.raw`f'(x) = 0`}</Formula> when{" "}
            <Formula>{String.raw`\cos 3x = 0`}</Formula>, i.e.{" "}
            <Formula>{String.raw`3x = \frac{\pi}{2},\ \frac{3\pi}{2}`}</Formula>; with{" "}
            <Formula>{String.raw`x \in \left[0,\frac{\pi}{2}\right]`}</Formula> this gives{" "}
            <Formula>{String.raw`x = \frac{\pi}{6}`}</Formula> and{" "}
            <Formula>{String.raw`x = \frac{\pi}{2}`}</Formula>.
          </p>
          <p>
            For <Formula>{String.raw`0 \le x < \frac{\pi}{6}`}</Formula> we have{" "}
            <Formula>{String.raw`0 \le 3x < \frac{\pi}{2}`}</Formula>, so{" "}
            <Formula>{String.raw`\cos 3x > 0`}</Formula> and{" "}
            <Formula>{String.raw`f'(x) > 0`}</Formula>. For{" "}
            <Formula>{String.raw`\frac{\pi}{6} < x < \frac{\pi}{2}`}</Formula> we have{" "}
            <Formula>{String.raw`\frac{\pi}{2} < 3x < \frac{3\pi}{2}`}</Formula>, so{" "}
            <Formula>{String.raw`\cos 3x < 0`}</Formula> and{" "}
            <Formula>{String.raw`f'(x) < 0`}</Formula>.
          </p>
          <p>
            As <Formula>f</Formula> is continuous at{" "}
            <Formula>{String.raw`x = \frac{\pi}{6}`}</Formula>, <Formula>f</Formula> is increasing
            on <Formula>{String.raw`\left[0,\frac{\pi}{6}\right]`}</Formula> and decreasing on{" "}
            <Formula>{String.raw`\left[\frac{\pi}{6},\frac{\pi}{2}\right]`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 13">
          <p>
            Find the intervals in which{" "}
            <Formula>{String.raw`f(x) = \sin x + \cos x`}</Formula>,{" "}
            <Formula>{String.raw`0 \le x \le 2\pi`}</Formula>, is increasing or decreasing.
          </p>
          <p>
            <strong>Solution.</strong>{" "}
            <Formula>{String.raw`f'(x) = \cos x - \sin x`}</Formula>. Now{" "}
            <Formula>{String.raw`f'(x) = 0`}</Formula> gives{" "}
            <Formula>{String.raw`\sin x = \cos x`}</Formula>, i.e.{" "}
            <Formula>{String.raw`x = \frac{\pi}{4}`}</Formula> and{" "}
            <Formula>{String.raw`x = \frac{5\pi}{4}`}</Formula> in{" "}
            <Formula>{String.raw`[0,2\pi]`}</Formula>.
          </p>
          <TableCard
            headers={["Interval", "Sign of f'(x)", "Nature of f"]}
            rows={[
              {
                cells: [
                  <span key="s1">
                    <Formula>{String.raw`\left[0,\frac{\pi}{4}\right)`}</Formula>
                  </span>,
                  <span key="s1v">
                    <Formula>{String.raw`> 0`}</Formula>
                  </span>,
                  "increasing",
                ],
              },
              {
                cells: [
                  <span key="s2">
                    <Formula>{String.raw`\left(\frac{\pi}{4},\frac{5\pi}{4}\right)`}</Formula>
                  </span>,
                  <span key="s2v">
                    <Formula>{String.raw`< 0`}</Formula>
                  </span>,
                  "decreasing",
                ],
              },
              {
                cells: [
                  <span key="s3">
                    <Formula>{String.raw`\left(\frac{5\pi}{4},2\pi\right]`}</Formula>
                  </span>,
                  <span key="s3v">
                    <Formula>{String.raw`> 0`}</Formula>
                  </span>,
                  "increasing",
                ],
              },
            ]}
          />
          <p>
            Hence <Formula>f</Formula> is increasing in{" "}
            <Formula>{String.raw`\left[0,\frac{\pi}{4}\right] \cup \left[\frac{5\pi}{4},2\pi\right]`}</Formula>{" "}
            and decreasing in{" "}
            <Formula>{String.raw`\left[\frac{\pi}{4},\frac{5\pi}{4}\right]`}</Formula>.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 6.2 — Increasing and Decreasing Functions">
        <ExerciseQa
          questions={[
            <>
              Show that <Formula>{String.raw`f(x) = 3x + 17`}</Formula> is increasing on{" "}
              <Formula>{String.raw`\mathbb{R}`}</Formula>.
            </>,
            <>
              Show that <Formula>{String.raw`f(x) = e^{2x}`}</Formula> is increasing on{" "}
              <Formula>{String.raw`\mathbb{R}`}</Formula>.
            </>,
            <>
              Show that <Formula>{String.raw`f(x) = \sin x`}</Formula> is (a) increasing in{" "}
              <Formula>{String.raw`\left(0,\frac{\pi}{2}\right)`}</Formula> (b) decreasing in{" "}
              <Formula>{String.raw`\left(\frac{\pi}{2},\pi\right)`}</Formula> (c) neither
              increasing nor decreasing in <Formula>{String.raw`(0,\pi)`}</Formula>.
            </>,
            <>
              Find the intervals in which{" "}
              <Formula>{String.raw`f(x) = 2x^2 - 3x`}</Formula> is (a) increasing (b) decreasing.
            </>,
            <>
              Find the intervals in which{" "}
              <Formula>{String.raw`f(x) = 2x^3 - 3x^2 - 36x + 7`}</Formula> is (a) increasing (b)
              decreasing.
            </>,
            <>
              Find the intervals in which the following are strictly increasing or decreasing:
              (a) <Formula>{String.raw`x^2 + 2x - 5`}</Formula> (b){" "}
              <Formula>{String.raw`10 - 6x - 2x^2`}</Formula> (c){" "}
              <Formula>{String.raw`-2x^3 - 9x^2 - 12x + 1`}</Formula> (d){" "}
              <Formula>{String.raw`6 - 9x - x^2`}</Formula> (e){" "}
              <Formula>{String.raw`(x+1)^3(x-3)^3`}</Formula>.
            </>,
            <>
              Show that{" "}
              <Formula>{String.raw`y = \log(1+x) - \frac{2x}{2+x}`}</Formula>,{" "}
              <Formula>{String.raw`x > -1`}</Formula>, is an increasing function of{" "}
              <Formula>x</Formula> throughout its domain.
            </>,
            <>
              Find the values of <Formula>x</Formula> for which{" "}
              <Formula>{String.raw`y = \left[x(x-2)\right]^2`}</Formula> is increasing.
            </>,
            <>
              Prove that{" "}
              <Formula>{String.raw`y = \frac{4\sin\theta}{2+\cos\theta} - \theta`}</Formula> is an
              increasing function of <Formula>\theta</Formula> in{" "}
              <Formula>{String.raw`\left[0,\frac{\pi}{2}\right]`}</Formula>.
            </>,
            <>
              Prove that the logarithmic function is increasing on{" "}
              <Formula>{String.raw`(0,\infty)`}</Formula>.
            </>,
            <>
              Prove that <Formula>{String.raw`f(x) = x^2 - x + 1`}</Formula> is neither strictly
              increasing nor decreasing on <Formula>{String.raw`(-1,1)`}</Formula>.
            </>,
            <>
              Which of the following functions are decreasing on{" "}
              <Formula>{String.raw`\left(0,\frac{\pi}{2}\right)`}</Formula>? (A){" "}
              <Formula>{String.raw`\cos x`}</Formula> (B){" "}
              <Formula>{String.raw`\cos 2x`}</Formula> (C){" "}
              <Formula>{String.raw`\cos 3x`}</Formula> (D) <Formula>{String.raw`\tan x`}</Formula>
            </>,
            <>
              On which interval is{" "}
              <Formula>{String.raw`f(x) = x^{100} + \sin x - 1`}</Formula> decreasing? (A){" "}
              <Formula>{String.raw`(0,1)`}</Formula> (B){" "}
              <Formula>{String.raw`\left(\frac{\pi}{2},\pi\right)`}</Formula> (C){" "}
              <Formula>{String.raw`\left(0,\frac{\pi}{2}\right)`}</Formula> (D) None of these
            </>,
            <>
              For what values of <Formula>a</Formula> is{" "}
              <Formula>{String.raw`f(x) = x^2 + ax + 1`}</Formula> increasing on{" "}
              <Formula>{String.raw`[1,2]`}</Formula>?
            </>,
            <>
              Let <Formula>I</Formula> be any interval disjoint from{" "}
              <Formula>{String.raw`[-1,1]`}</Formula>. Prove that{" "}
              <Formula>{String.raw`f(x) = x + \frac{1}{x}`}</Formula> is increasing on{" "}
              <Formula>I</Formula>.
            </>,
            <>
              Prove that <Formula>{String.raw`f(x) = \log\sin x`}</Formula> is increasing on{" "}
              <Formula>{String.raw`\left(0,\frac{\pi}{2}\right)`}</Formula> and decreasing on{" "}
              <Formula>{String.raw`\left(\frac{\pi}{2},\pi\right)`}</Formula>.
            </>,
            <>
              Prove that <Formula>{String.raw`f(x) = \log|\cos x|`}</Formula> is decreasing on{" "}
              <Formula>{String.raw`\left(0,\frac{\pi}{2}\right)`}</Formula> and increasing on{" "}
              <Formula>{String.raw`\left(\frac{3\pi}{2},2\pi\right)`}</Formula>.
            </>,
            <>
              Prove that{" "}
              <Formula>{String.raw`f(x) = x^3 - 3x^2 + 3x - 100`}</Formula> is increasing in{" "}
              <Formula>{String.raw`\mathbb{R}`}</Formula>.
            </>,
            <>
              The interval in which <Formula>{String.raw`y = x^2 e^{-x}`}</Formula> is increasing
              is (A) <Formula>{String.raw`(-\infty,\infty)`}</Formula> (B){" "}
              <Formula>{String.raw`(-2,0)`}</Formula> (C){" "}
              <Formula>{String.raw`(2,\infty)`}</Formula> (D){" "}
              <Formula>{String.raw`(0,2)`}</Formula>
            </>,
          ]}
          answers={[
            <>
              <Formula>{String.raw`f'(x) = 3 > 0`}</Formula> for all <Formula>x</Formula>
            </>,
            <>
              <Formula>{String.raw`f'(x) = 2e^{2x} > 0`}</Formula> for all <Formula>x</Formula>
            </>,
            <>
              <Formula>{String.raw`f'(x) = \cos x`}</Formula>: positive on{" "}
              <Formula>{String.raw`\left(0,\frac{\pi}{2}\right)`}</Formula>, negative on{" "}
              <Formula>{String.raw`\left(\frac{\pi}{2},\pi\right)`}</Formula>
            </>,
            <>
              decreasing on <Formula>{String.raw`\left(-\infty,\frac{3}{4}\right)`}</Formula>,
              increasing on{" "}
              <Formula>{String.raw`\left(\frac{3}{4},\infty\right)`}</Formula>
            </>,
            <>
              increasing on{" "}
              <Formula>{String.raw`(-\infty,-2) \cup (3,\infty)`}</Formula>, decreasing on{" "}
              <Formula>{String.raw`(-2,3)`}</Formula>
            </>,
            <>
              (a) decreasing <Formula>{String.raw`(-\infty,-1)`}</Formula>, increasing{" "}
              <Formula>{String.raw`(-1,\infty)`}</Formula>; (b) increasing{" "}
              <Formula>{String.raw`(-\infty,-\frac{3}{2})`}</Formula>, decreasing{" "}
              <Formula>{String.raw`(-\frac{3}{2},\infty)`}</Formula>; (c) increasing on{" "}
              <Formula>{String.raw`(-2,-1)`}</Formula>, decreasing on{" "}
              <Formula>{String.raw`(-\infty,-2) \cup (-1,\infty)`}</Formula>; (d) increasing{" "}
              <Formula>{String.raw`(-\infty,-\frac{9}{2})`}</Formula>, decreasing{" "}
              <Formula>{String.raw`(-\frac{9}{2},\infty)`}</Formula>; (e) increasing for{" "}
              <Formula>{String.raw`x > 1`}</Formula>, decreasing for{" "}
              <Formula>{String.raw`x < 1`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{dy}{dx} = \frac{1}{1+x} - \frac{4}{(2+x)^2} = \frac{x^2}{(1+x)(2+x)^2} > 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`(0,1) \cup (2,\infty)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{dy}{d\theta} = \frac{\cos\theta\,(4-\cos\theta)}{(2+\cos\theta)^2} > 0`}</Formula>{" "}
              on <Formula>{String.raw`\left(0,\frac{\pi}{2}\right)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{d}{dx}\log x = \frac{1}{x} > 0`}</Formula> for{" "}
              <Formula>{String.raw`x > 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`f'(x) = 2x - 1`}</Formula> changes sign at{" "}
              <Formula>{String.raw`x = \frac{1}{2}`}</Formula>, which lies in{" "}
              <Formula>{String.raw`(-1,1)`}</Formula>
            </>,
            <>
              (A) and (B)
            </>,
            <>
              (D)
            </>,
            <>
              <Formula>{String.raw`a \ge -2`}</Formula>
            </>,
            <>
              <Formula>{String.raw`f'(x) = 1 - \frac{1}{x^2} > 0`}</Formula> when{" "}
              <Formula>{String.raw`|x| > 1`}</Formula>
            </>,
            <>
              <Formula>{String.raw`f'(x) = \cot x`}</Formula>{" "}
            </>,
            <>
              <Formula>{String.raw`f'(x) = -\tan x`}</Formula>;{" "}
              <Formula>{String.raw`\tan x > 0`}</Formula> on{" "}
              <Formula>{String.raw`\left(0,\frac{\pi}{2}\right)`}</Formula>,{" "}
              <Formula>{String.raw`\tan x < 0`}</Formula> on{" "}
              <Formula>{String.raw`\left(\frac{3\pi}{2},2\pi\right)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`f'(x) = 3(x-1)^2 \ge 0`}</Formula>
            </>,
            <>
              (D)
            </>,
          ]}
        />
      </Expandable>

      <h2 id="h-6-4">6.4 Maxima and Minima</h2>
      <p>
        Here we use the derivative to find the <strong>maximum or minimum values</strong> of a
        function. Geometrically we are hunting for the &lsquo;turning points&rsquo; of the graph —
        points where the graph reaches its highest or lowest value locally. Such points are what
        make a sketch of a function possible, and they are what every optimisation problem in
        science, business and engineering is really asking for.
      </p>
      <Callout type="tip">
        <p>Three everyday problems that all have the same mathematical shape:</p>
        <ol className="mt-2 space-y-1.5">
          <li>
            (i) The profit from a grove of orange trees is{" "}
            <Formula>{String.raw`P(x) = ax + bx^2`}</Formula>, where <Formula>x</Formula> is the
            number of trees per acre. How many trees per acre maximise the profit?
          </li>
          <li>
            (ii) A ball thrown from a building 60 m high travels along{" "}
            <Formula>{String.raw`h(x) = 60 + \frac{x}{60} - x^2`}</Formula>. What is the maximum
            height it reaches?
          </li>
          <li>
            (iii) An Apache helicopter flies along{" "}
            <Formula>{String.raw`f(x) = x^2 + 7`}</Formula>. A soldier at{" "}
            <Formula>{String.raw`(1,2)`}</Formula> wants to shoot when it is nearest. What is the
            nearest distance?
          </li>
        </ol>
      </Callout>
      <KeyPoint title="Definition 3 — maximum / minimum value on an interval I">
        <p>
          (a) <Formula>f</Formula> has a <strong>maximum value</strong> in{" "}
          <Formula>I</Formula> if there is <Formula>{String.raw`c \in I`}</Formula> with{" "}
          <Formula>{String.raw`f(c) \ge f(x)`}</Formula> for all{" "}
          <Formula>{String.raw`x \in I`}</Formula>. Then <Formula>f(c)</Formula> is the maximum
          value and <Formula>c</Formula> a point of maximum value.
        </p>
        <p>
          (b) <Formula>f</Formula> has a <strong>minimum value</strong> in{" "}
          <Formula>I</Formula> if there is <Formula>{String.raw`c \in I`}</Formula> with{" "}
          <Formula>{String.raw`f(c) \le f(x)`}</Formula> for all{" "}
          <Formula>{String.raw`x \in I`}</Formula>; <Formula>f(c)</Formula> is the minimum value.
        </p>
        <p>
          (c) <Formula>f</Formula> has an <strong>extreme value</strong> in{" "}
          <Formula>I</Formula> if <Formula>f(c)</Formula> is either a maximum or a minimum value;
          then <Formula>c</Formula> is an <strong>extreme point</strong>.
        </p>
      </KeyPoint>

      <Expandable title="Examples 14 to 16 — NCERT">
        <KeyPoint title="Example 14">
          <p>
            Find the maximum and minimum values, if any, of{" "}
            <Formula>{String.raw`f(x) = x^2`}</Formula>,{" "}
            <Formula>{String.raw`x \in \mathbb{R}`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> From the graph, <Formula>{String.raw`f(x) = 0`}</Formula>{" "}
            only at <Formula>{String.raw`x = 0`}</Formula>, and{" "}
            <Formula>{String.raw`f(x) \ge 0`}</Formula> for all <Formula>x</Formula>. So the
            minimum value is <Formula>0</Formula> at <Formula>{String.raw`x = 0`}</Formula>. The
            graph rises without bound, so there is no maximum value and no point of maximum value
            in <Formula>{String.raw`\mathbb{R}`}</Formula>.
          </p>
          <p>
            <strong>Note.</strong> If the domain is restricted to{" "}
            <Formula>{String.raw`[-2,1]`}</Formula>, then{" "}
            <Formula>f</Formula> has maximum value{" "}
            <Formula>{String.raw`(-2)^2 = 4`}</Formula> at{" "}
            <Formula>{String.raw`x = -2`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 15">
          <p>
            Find the maximum and minimum values, if any, of{" "}
            <Formula>{String.raw`f(x) = |x|`}</Formula>,{" "}
            <Formula>{String.raw`x \in \mathbb{R}`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> Here{" "}
            <Formula>{String.raw`f(x) \ge 0`}</Formula> always and{" "}
            <Formula>{String.raw`f(x) = 0`}</Formula> at <Formula>{String.raw`x = 0`}</Formula>.
            The minimum value is <Formula>0</Formula> at{" "}
            <Formula>{String.raw`x = 0`}</Formula>; there is no maximum value.
          </p>
          <p>
            <strong>Note.</strong> On <Formula>{String.raw`[-2,1]`}</Formula> the maximum value is{" "}
            <Formula>{String.raw`|-2| = 2`}</Formula>. Also{" "}
            <Formula>f</Formula> is <em>not differentiable</em> at{" "}
            <Formula>{String.raw`x = 0`}</Formula> — an extreme point need not be a smooth point.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 16">
          <p>
            Find the maximum and minimum values, if any, of{" "}
            <Formula>{String.raw`f(x) = x`}</Formula>,{" "}
            <Formula>{String.raw`x \in (0,1)`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> This is a strictly increasing function on the open
            interval. It seems the minimum should be at a point closest to{" "}
            <Formula>0</Formula> on the right and the maximum at a point closest to{" "}
            <Formula>1</Formula> on the left — but no such points exist. If{" "}
            <Formula>{String.raw`x_0 > 0`}</Formula> were closest to 0, then{" "}
            <Formula>{String.raw`\frac{x_0}{2} < x_0`}</Formula> lies in{" "}
            <Formula>{String.raw`(0,1)`}</Formula> too; similarly{" "}
            <Formula>{String.raw`\frac{x_1+1}{2} > x_1`}</Formula>. Hence{" "}
            <Formula>f</Formula> has neither a maximum nor a minimum value in{" "}
            <Formula>{String.raw`(0,1)`}</Formula>.
          </p>
          <p>
            <strong>Remark.</strong> Extending the domain to{" "}
            <Formula>{String.raw`[0,1]`}</Formula> gives minimum{" "}
            <Formula>0</Formula> at <Formula>{String.raw`x = 0`}</Formula> and maximum{" "}
            <Formula>1</Formula> at <Formula>{String.raw`x = 1`}</Formula>.
          </p>
        </KeyPoint>
      </Expandable>

      <Callout type="important">
        <p>
          Two results (stated without proof) explain the examples above:
        </p>
        <ul className="mt-2 space-y-1.5">
          <li>
            Every <strong>monotonic</strong> function (increasing on <Formula>I</Formula>, or
            decreasing on <Formula>I</Formula>) assumes its maximum and minimum values at the{" "}
            <Highlight color="yellow">end points</Highlight> of its domain.
          </li>
          <li>
            Every <strong>continuous</strong> function on a closed interval{" "}
            <Formula>{String.raw`[a,b]`}</Formula> has both a maximum and a minimum value.
          </li>
        </ul>
      </Callout>

      <p>
        Now look at a graph that changes direction. At the points marked on a typical curve the
        function changes from decreasing to increasing or vice-versa — these are the{" "}
        <strong>turning points</strong>, where the graph has a little valley or a little hill. The
        bottom of a valley gives a <strong>local minimum</strong>, the top of a hill a{" "}
        <strong>local maximum</strong>.
      </p>
      <KeyPoint title="Definition 4 — local maxima and local minima">
        <p>
          Let <Formula>f</Formula> be a real valued function and{" "}
          <Formula>c</Formula> an interior point of its domain.
        </p>
        <p>
          (a) <Formula>c</Formula> is a point of <strong>local maxima</strong> if there is{" "}
          <Formula>{String.raw`h > 0`}</Formula> such that{" "}
          <Formula>{String.raw`f(c) \ge f(x)`}</Formula> for all{" "}
          <Formula>{String.raw`x \in (c-h,\ c+h)`}</Formula>,{" "}
          <Formula>{String.raw`x \neq c`}</Formula>. The value <Formula>f(c)</Formula> is the local
          maximum value.
        </p>
        <p>
          (b) <Formula>c</Formula> is a point of <strong>local minima</strong> if there is{" "}
          <Formula>{String.raw`h > 0`}</Formula> such that{" "}
          <Formula>{String.raw`f(c) \le f(x)`}</Formula> for all{" "}
          <Formula>{String.raw`x \in (c-h,\ c+h)`}</Formula>. The value <Formula>f(c)</Formula> is
          the local minimum value.
        </p>
      </KeyPoint>
      <p>
        At a local maximum the function is increasing just to the left of <Formula>c</Formula>{" "}
        (<Formula>{String.raw`f'(x) > 0`}</Formula>) and decreasing just to the right
        (<Formula>{String.raw`f'(x) < 0`}</Formula>); at a local minimum the pattern reverses.
        Either way the derivative must vanish — or fail to exist.
      </p>
      <KeyPoint title="Theorem 2 — where can an extreme value occur?">
        <p>
          Let <Formula>f</Formula> be defined on an open interval{" "}
          <Formula>I</Formula> and let <Formula>{String.raw`c \in I`}</Formula>. If{" "}
          <Formula>f</Formula> has a local maximum or local minimum at{" "}
          <Formula>{String.raw`x = c`}</Formula>, then either{" "}
          <Formula>{String.raw`f'(c) = 0`}</Formula> or <Formula>f</Formula> is not differentiable
          at <Formula>c</Formula>.
        </p>
      </KeyPoint>
      <Callout type="warning">
        <p>
          The converse is <strong>false</strong>: a point where the derivative vanishes need not
          be an extreme point. For <Formula>{String.raw`f(x) = x^3`}</Formula> we have{" "}
          <Formula>{String.raw`f'(x) = 3x^2`}</Formula> and so{" "}
          <Formula>{String.raw`f'(0) = 0`}</Formula>, yet <Formula>{String.raw`x = 0`}</Formula> is
          neither a local maximum nor a local minimum. Such a point is a{" "}
          <Highlight color="blue">point of inflexion</Highlight>.
        </p>
      </Callout>
      <p>
        A point <Formula>c</Formula> in the domain of <Formula>f</Formula> at which either{" "}
        <Formula>{String.raw`f'(c) = 0`}</Formula> or <Formula>f</Formula> is not differentiable is
        called a <strong>critical point</strong> of <Formula>f</Formula>. Only critical points can
        be extreme points — but not every critical point is one.
      </p>
      <KeyPoint title="Theorem 3 — First Derivative Test">
        <p>
          Let <Formula>f</Formula> be continuous at a critical point{" "}
          <Formula>{String.raw`c \in I`}</Formula>.
        </p>
        <p>
          (i) If <Formula>{String.raw`f'(x)`}</Formula> changes sign from{" "}
          <strong>positive to negative</strong> as <Formula>x</Formula> increases through{" "}
          <Formula>c</Formula>, then <Formula>c</Formula> is a point of{" "}
          <strong>local maxima</strong>.
        </p>
        <p>
          (ii) If <Formula>{String.raw`f'(x)`}</Formula> changes sign from{" "}
          <strong>negative to positive</strong> as <Formula>x</Formula> increases through{" "}
          <Formula>c</Formula>, then <Formula>c</Formula> is a point of{" "}
          <strong>local minima</strong>.
        </p>
        <p>
          (iii) If <Formula>{String.raw`f'(x)`}</Formula> does <strong>not change sign</strong>,
          then <Formula>c</Formula> is neither a local maximum nor a local minimum — it is a point
          of <strong>inflexion</strong>.
        </p>
      </KeyPoint>
      <KeyPoint title="Theorem 4 — Second Derivative Test">
        <p>
          Let <Formula>f</Formula> be twice differentiable at <Formula>{String.raw`c \in I`}</Formula>{" "}
          with <Formula>{String.raw`f'(c) = 0`}</Formula>. Then
        </p>
        <p>
          (i) <Formula>{String.raw`f''(c) < 0`}</Formula> gives a{" "}
          <strong>local maximum</strong> at <Formula>c</Formula>, with local maximum value{" "}
          <Formula>f(c)</Formula>;
        </p>
        <p>
          (ii) <Formula>{String.raw`f''(c) > 0`}</Formula> gives a{" "}
          <strong>local minimum</strong> at <Formula>c</Formula>, with local minimum value{" "}
          <Formula>f(c)</Formula>;
        </p>
        <p>
          (iii) the test <strong>fails</strong> if{" "}
          <Formula>{String.raw`f''(c) = 0`}</Formula> — then go back to the first derivative test.
        </p>
      </KeyPoint>

      <Expandable title="Examples 17 to 21 — NCERT">
        <KeyPoint title="Example 17">
          <p>
            Find all points of local maxima and local minima of{" "}
            <Formula>{String.raw`f(x) = x^3 - 3x + 3`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`f'(x) = 3x^2 - 3 = 3(x-1)(x+1)`}</Formula>, so{" "}
            <Formula>{String.raw`f'(x) = 0`}</Formula> at{" "}
            <Formula>{String.raw`x = 1`}</Formula> and{" "}
            <Formula>{String.raw`x = -1`}</Formula>. These are the only critical points.
          </p>
          <TableCard
            headers={["Value of x", "Sign of f'(x)", "Conclusion"]}
            rows={[
              {
                cells: [
                  "just right of 1",
                  <span key="e1">
                    <Formula>{String.raw`> 0`}</Formula>
                  </span>,
                  "f increases",
                ],
              },
              {
                cells: [
                  "just left of 1",
                  <span key="e2">
                    <Formula>{String.raw`< 0`}</Formula>
                  </span>,
                  "f decreases",
                ],
              },
              {
                cells: [
                  "just left of -1",
                  <span key="e3">
                    <Formula>{String.raw`> 0`}</Formula>
                  </span>,
                  "f increases",
                ],
              },
              {
                cells: [
                  "just right of -1",
                  <span key="e4">
                    <Formula>{String.raw`< 0`}</Formula>
                  </span>,
                  "f decreases",
                ],
              },
            ]}
          />
          <p>
            <Formula>{String.raw`f'`}</Formula> changes from negative to positive at{" "}
            <Formula>{String.raw`x = 1`}</Formula>: local minimum, value{" "}
            <Formula>{String.raw`f(1) = 1 - 3 + 3 = 1`}</Formula>. It changes from positive to
            negative at <Formula>{String.raw`x = -1`}</Formula>: local maximum, value{" "}
            <Formula>{String.raw`f(-1) = -1 + 3 + 3 = 5`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 18">
          <p>
            Find all points of local maxima and local minima of{" "}
            <Formula>{String.raw`f(x) = 2x^3 - 6x^2 + 6x + 5`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`f'(x) = 6x^2 - 12x + 6 = 6(x-1)^2`}</Formula>, so{" "}
            <Formula>{String.raw`f'(x) = 0`}</Formula> only at{" "}
            <Formula>{String.raw`x = 1`}</Formula>. But{" "}
            <Formula>{String.raw`f'(x) \ge 0`}</Formula> for every{" "}
            <Formula>{String.raw`x \in \mathbb{R}`}</Formula>: the derivative is positive on both
            sides of <Formula>1</Formula> and never changes sign.
          </p>
          <p>
            By the first derivative test, <Formula>{String.raw`x = 1`}</Formula> is{" "}
            <strong>neither</strong> a local maximum nor a local minimum. It is a point of
            inflexion, and the graph has no turning point at all.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 19">
          <p>
            Find the local minimum value of{" "}
            <Formula>{String.raw`f(x) = 3 + |x|`}</Formula>,{" "}
            <Formula>{String.raw`x \in \mathbb{R}`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> The function is not differentiable at{" "}
            <Formula>{String.raw`x = 0`}</Formula>, so the second derivative test is unavailable.
            Use the first derivative: to the left of 0,{" "}
            <Formula>{String.raw`f(x) = 3 - x`}</Formula> and{" "}
            <Formula>{String.raw`f'(x) = -1 < 0`}</Formula>; to the right,{" "}
            <Formula>{String.raw`f(x) = 3 + x`}</Formula> and{" "}
            <Formula>{String.raw`f'(x) = 1 > 0`}</Formula>.
          </p>
          <p>
            The sign changes from negative to positive at{" "}
            <Formula>{String.raw`x = 0`}</Formula>, so <Formula>0</Formula> is a point of local
            minima with local minimum value <Formula>{String.raw`f(0) = 3`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 20">
          <p>
            Find the local maximum and local minimum values of{" "}
            <Formula>{String.raw`f(x) = 3x^4 + 4x^3 - 12x^2 + 12`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`f'(x) = 12x^3 + 12x^2 - 24x = 12x(x-1)(x+2)`}</Formula>, so{" "}
            <Formula>{String.raw`f'(x) = 0`}</Formula> at{" "}
            <Formula>{String.raw`x = 0,\ 1,\ -2`}</Formula>. Next,
          </p>
          <p>
            <Formula>{String.raw`f''(x) = 36x^2 + 24x - 24 = 12\left(3x^2 + 2x - 2\right)`}</Formula>
          </p>
          <p>
            so <Formula>{String.raw`f''(0) = -24 < 0`}</Formula>,{" "}
            <Formula>{String.raw`f''(1) = 36 > 0`}</Formula>,{" "}
            <Formula>{String.raw`f''(-2) = 72 > 0`}</Formula>. By the second derivative test:
          </p>
          <p>
            <Formula>{String.raw`x = 0`}</Formula> — local maximum,{" "}
            <Formula>{String.raw`f(0) = 12`}</Formula>;
          </p>
          <p>
            <Formula>{String.raw`x = 1`}</Formula> — local minimum,{" "}
            <Formula>{String.raw`f(1) = 3 + 4 - 12 + 12 = 7`}</Formula>;
          </p>
          <p>
            <Formula>{String.raw`x = -2`}</Formula> — local minimum,{" "}
            <Formula>{String.raw`f(-2) = 48 - 32 - 48 + 12 = -20`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 21">
          <p>
            Find all points of local maxima and local minima of{" "}
            <Formula>{String.raw`f(x) = 2x^3 - 6x^2 + 6x + 5`}</Formula> using the second
            derivative test.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`f'(x) = 6x^2 - 12x + 6 = 6(x-1)^2`}</Formula> and{" "}
            <Formula>{String.raw`f''(x) = 12(x-1)`}</Formula>. Now{" "}
            <Formula>{String.raw`f'(x) = 0`}</Formula> gives{" "}
            <Formula>{String.raw`x = 1`}</Formula>, and{" "}
            <Formula>{String.raw`f''(1) = 0`}</Formula> — the second derivative test{" "}
            <strong>fails</strong>.
          </p>
          <p>
            Returning to the first derivative test (Example 18),{" "}
            <Formula>{String.raw`x = 1`}</Formula> is neither a local maximum nor a local minimum:
            it is a point of inflexion.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Examples 22 to 26 — NCERT">
        <KeyPoint title="Example 22">
          <p>
            Find two positive numbers whose sum is 15 and the sum of whose squares is minimum.
          </p>
          <p>
            <strong>Solution.</strong> Let one number be <Formula>x</Formula>; the other is{" "}
            <Formula>{String.raw`15 - x`}</Formula>. Then
          </p>
          <p>
            <Formula>{String.raw`S(x) = x^2 + (15-x)^2 = 2x^2 - 30x + 225`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`S'(x) = 4x - 30,\qquad S''(x) = 4`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`S'(x) = 0`}</Formula> gives{" "}
            <Formula>{String.raw`x = \frac{15}{2}`}</Formula>, and{" "}
            <Formula>{String.raw`S''\left(\frac{15}{2}\right) = 4 > 0`}</Formula>, so this is a
            point of local minima. The numbers are{" "}
            <Formula>{String.raw`\frac{15}{2}`}</Formula> and{" "}
            <Formula>{String.raw`\frac{15}{2}`}</Formula>.
          </p>
          <p>
            <strong>Remark.</strong> In general, two positive numbers with sum{" "}
            <Formula>k</Formula> have minimum sum of squares when both equal{" "}
            <Formula>{String.raw`\frac{k}{2}`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 23">
          <p>
            Find the shortest distance of the point <Formula>{String.raw`(0,c)`}</Formula> from
            the parabola <Formula>{String.raw`y = x^2`}</Formula>, where{" "}
            <Formula>{String.raw`\frac{1}{2} \le c \le 5`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> Let <Formula>{String.raw`(h,k)`}</Formula> be a point on the
            parabola. Then <Formula>{String.raw`k = h^2`}</Formula> and
          </p>
          <p>
            <Formula>{String.raw`D^2 = h^2 + (k-c)^2 = k + (k-c)^2`}</Formula>
          </p>
          <p>
            Write <Formula>{String.raw`D \equiv D(k) = \sqrt{k + (k-c)^2}`}</Formula>. Then
          </p>
          <p>
            <Formula>{String.raw`D'(k) = \frac{1 + 2(k-c)}{2\sqrt{k + (k-c)^2}}`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`D'(k) = 0`}</Formula> gives{" "}
            <Formula>{String.raw`k = \frac{2c-1}{2}`}</Formula>. For{" "}
            <Formula>{String.raw`k < \frac{2c-1}{2}`}</Formula> the numerator{" "}
            <Formula>{String.raw`1 + 2(k-c) < 0`}</Formula> and{" "}
            <Formula>{String.raw`D'(k) < 0`}</Formula>; for{" "}
            <Formula>{String.raw`k > \frac{2c-1}{2}`}</Formula> we get{" "}
            <Formula>{String.raw`D'(k) > 0`}</Formula>. By the first derivative test{" "}
            <Formula>D</Formula> is minimum there.
          </p>
          <p>
            Hence the shortest distance is
          </p>
          <p>
            <Formula>{String.raw`D = \sqrt{\frac{2c-1}{2} + \left(\frac{2c-1}{2} - c\right)^2} = \sqrt{\frac{2c-1}{2} + \frac{1}{4}} = \frac{1}{2}\sqrt{4c-1}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 24">
          <p>
            <Formula>AP</Formula> and <Formula>BQ</Formula> are vertical poles at{" "}
            <Formula>A</Formula> and <Formula>B</Formula> with{" "}
            <Formula>{String.raw`AP = 16`}</Formula> m,{" "}
            <Formula>{String.raw`BQ = 22`}</Formula> m and{" "}
            <Formula>{String.raw`AB = 20`}</Formula> m. Find the distance of a point{" "}
            <Formula>R</Formula> on <Formula>AB</Formula> from <Formula>A</Formula> such that{" "}
            <Formula>{String.raw`RP^2 + RQ^2`}</Formula> is minimum.
          </p>
          <p>
            <strong>Solution.</strong> Let <Formula>{String.raw`AR = x`}</Formula> m; then{" "}
            <Formula>{String.raw`RB = 20 - x`}</Formula> m. By Pythagoras,
          </p>
          <p>
            <Formula>{String.raw`RP^2 + RQ^2 = \left(x^2 + 16^2\right) + \left((20-x)^2 + 22^2\right)`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`S(x) = 2x^2 - 40x + 1140,\qquad S'(x) = 4x - 40,\qquad S''(x) = 4 > 0`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`S'(x) = 0`}</Formula> gives{" "}
            <Formula>{String.raw`x = 10`}</Formula>, and{" "}
            <Formula>{String.raw`S''(10) > 0`}</Formula> confirms a local minimum. So{" "}
            <Formula>{String.raw`AR = 10`}</Formula> m.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 25">
          <p>
            If three sides of a trapezium other than the base are each 10 cm, find the area of the
            trapezium when it is maximum.
          </p>
          <p>
            <strong>Solution.</strong> Drop perpendiculars <Formula>DP</Formula> and{" "}
            <Formula>CQ</Formula> on the base <Formula>AB</Formula> and let{" "}
            <Formula>{String.raw`AP = x`}</Formula> cm. Since{" "}
            <Formula>{String.raw`\triangle APD \sim \triangle BQC`}</Formula>, we get{" "}
            <Formula>{String.raw`QB = x`}</Formula>, and by Pythagoras{" "}
            <Formula>{String.raw`DP = QC = \sqrt{100 - x^2}`}</Formula>. The base is{" "}
            <Formula>{String.raw`2x + 10`}</Formula>, so
          </p>
          <p>
            <Formula>{String.raw`A(x) = \frac{1}{2}(2x + 10 + 10)\sqrt{100-x^2} = (x + 10)\sqrt{100-x^2}`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`A'(x) = \sqrt{100-x^2} + (x+10)\cdot\frac{-x}{\sqrt{100-x^2}} = \frac{(100 - x^2) - x^2 - 10x}{\sqrt{100-x^2}} = \frac{-2x^2 - 10x + 100}{\sqrt{100-x^2}}`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`A'(x) = 0`}</Formula> gives{" "}
            <Formula>{String.raw`2x^2 + 10x - 100 = 0`}</Formula>, i.e.{" "}
            <Formula>{String.raw`x = 5`}</Formula> or{" "}
            <Formula>{String.raw`x = -10`}</Formula>. A distance cannot be negative, so{" "}
            <Formula>{String.raw`x = 5`}</Formula>. Differentiating again and simplifying,
          </p>
          <p>
            <Formula>{String.raw`A''(x) = \frac{-2x^3 - 300x - 1000}{(100-x^2)^{3/2}}`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`A''(5) = \frac{-250 - 1500 - 1000}{75\sqrt{75}} = \frac{-2750}{75\sqrt{75}}`}</Formula>{" "}
            which is negative, so the area is maximum at{" "}
            <Formula>{String.raw`x = 5`}</Formula>. The maximum area is
          </p>
          <p>
            <Formula>{String.raw`A(5) = 15\sqrt{75} = 75\sqrt{3}\ \text{cm}^2`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 26">
          <p>
            Prove that the radius of the right circular cylinder of greatest curved surface area
            that can be inscribed in a given cone is half the radius of the cone.
          </p>
          <p>
            <strong>Solution.</strong> Let <Formula>r</Formula> be the cone&rsquo;s radius and{" "}
            <Formula>h</Formula> its height; let the inscribed cylinder have radius{" "}
            <Formula>{String.raw`OE = x`}</Formula>. Since{" "}
            <Formula>{String.raw`\triangle QEC \sim \triangle AOC`}</Formula>,
          </p>
          <p>
            <Formula>{String.raw`\frac{QE}{h} = \frac{r-x}{r}\quad\Rightarrow\quad QE = \frac{h(r-x)}{r}`}</Formula>
          </p>
          <p>
            The curved surface area is{" "}
            <Formula>{String.raw`S(x) = 2\pi x\cdot\frac{h(r-x)}{r} = \frac{2\pi h}{r}\left(rx - x^2\right)`}</Formula>.
            Hence
          </p>
          <p>
            <Formula>{String.raw`S'(x) = \frac{2\pi h}{r}(r - 2x),\qquad S''(x) = -\frac{4\pi h}{r} < 0`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`S'(x) = 0`}</Formula> gives{" "}
            <Formula>{String.raw`x = \frac{r}{2}`}</Formula>, and{" "}
            <Formula>{String.raw`S''\left(\frac{r}{2}\right) < 0`}</Formula>, so this is the point
            of maximum curved surface area. The cylinder&rsquo;s radius is half that of the cone.
          </p>
        </KeyPoint>
      </Expandable>

      <h3 id="h-6-4-1">6.4.1 Maximum and Minimum Values in a Closed Interval</h3>
      <p>
        Consider <Formula>{String.raw`f(x) = x + 2`}</Formula> on{" "}
        <Formula>{String.raw`(0,1)`}</Formula>. It is continuous there, yet it has neither a
        maximum nor a minimum value, and no local maximum or minimum either. Extend the domain to{" "}
        <Formula>{String.raw`[0,1]`}</Formula> and the picture changes: the maximum value is{" "}
        <Formula>{String.raw`3 = f(1)`}</Formula> and the minimum value is{" "}
        <Formula>{String.raw`2 = f(0)`}</Formula>, even though there is still no <em>local</em>{" "}
        turning point.
      </p>
      <p>
        The value <Formula>3</Formula> at <Formula>{String.raw`x = 1`}</Formula> is the{" "}
        <strong>absolute maximum value</strong> (global maximum, greatest value) of{" "}
        <Formula>f</Formula> on <Formula>{String.raw`[0,1]`}</Formula>; the value{" "}
        <Formula>2</Formula> at <Formula>{String.raw`x = 0`}</Formula> is the{" "}
        <strong>absolute minimum value</strong> (global minimum, least value).
      </p>
      <Callout type="important">
        <p>
          A <Highlight color="yellow">local</Highlight> maximum is the largest value in some small
          neighbourhood; an <Highlight color="yellow">absolute</Highlight> maximum is the largest
          value on the whole interval. They are different ideas, and on a closed interval the
          absolute extreme value very often occurs at an <strong>end point</strong>, where the
          derivative need not vanish.
        </p>
      </Callout>
      <KeyPoint title="Theorem 5 and Theorem 6">
        <p>
          <strong>Theorem 5.</strong> If <Formula>f</Formula> is continuous on{" "}
          <Formula>{String.raw`I = [a,b]`}</Formula>, then <Formula>f</Formula> has an absolute
          maximum value and attains it at least once in <Formula>I</Formula>; likewise it has an
          absolute minimum value and attains it at least once in <Formula>I</Formula>.
        </p>
        <p>
          <strong>Theorem 6.</strong> Let <Formula>f</Formula> be differentiable on the closed
          interval <Formula>I</Formula> and <Formula>c</Formula> an interior point of{" "}
          <Formula>I</Formula>. Then <Formula>{String.raw`f'(c) = 0`}</Formula> if{" "}
          <Formula>f</Formula> attains its absolute maximum value at <Formula>c</Formula>, and also
          if it attains its absolute minimum value at <Formula>c</Formula>.
        </p>
      </KeyPoint>
      <Stepper
        steps={[
          {
            label: <>Step 1 — Collect the critical points</>,
            description: (
              <>
                Find every <Formula>x</Formula> in the interval where{" "}
                <Formula>{String.raw`f'(x) = 0`}</Formula> or where <Formula>f</Formula> is not
                differentiable.
              </>
            ),
          },
          {
            label: <>Step 2 — Add the end points</>,
            description: (
              <>
                Take the end points <Formula>a</Formula> and <Formula>b</Formula> of the interval
                as candidates. An absolute extreme value may live only there.
              </>
            ),
          },
          {
            label: <>Step 3 — Evaluate f at every candidate</>,
            description: (
              <>
                Compute <Formula>f</Formula> at all the points listed in Steps 1 and 2.
              </>
            ),
          },
          {
            label: <>Step 4 — Compare the values</>,
            description: (
              <>
                The largest value is the absolute maximum, the smallest is the absolute minimum.
                No derivative sign analysis is needed once the table of values is complete.
              </>
            ),
          },
        ]}
      />

      <Expandable title="Examples 27 to 29 — NCERT">
        <KeyPoint title="Example 27">
          <p>
            Find the absolute maximum and minimum values of{" "}
            <Formula>{String.raw`f(x) = 2x^3 - 15x^2 + 36x + 1`}</Formula> on{" "}
            <Formula>{String.raw`[1,5]`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>{" "}
            <Formula>{String.raw`f'(x) = 6x^2 - 30x + 36 = 6(x-3)(x-2)`}</Formula>, so the critical
            points in the interval are <Formula>{String.raw`x = 2`}</Formula> and{" "}
            <Formula>{String.raw`x = 3`}</Formula>. Evaluate at these and at the end points:
          </p>
          <TableCard
            headers={["x", "f(x)"]}
            rows={[
              { cells: ["1 (end point)", "24"] },
              { cells: ["2 (critical)", "29"] },
              { cells: ["3 (critical)", "28"] },
              { cells: ["5 (end point)", "56"] },
            ]}
          />
          <p>
            The absolute maximum value on <Formula>{String.raw`[1,5]`}</Formula> is{" "}
            <Formula>56</Formula> at <Formula>{String.raw`x = 5`}</Formula>; the absolute minimum
            value is <Formula>24</Formula> at <Formula>{String.raw`x = 1`}</Formula>. Notice that
            both extreme values occur at <strong>end points</strong>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 28">
          <p>
            Find the absolute maximum and minimum values of{" "}
            <Formula>{String.raw`f(x) = 12x^{4/3} - 6x^{1/3}`}</Formula> on{" "}
            <Formula>{String.raw`[-1,1]`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`f'(x) = 16x^{1/3} - 2x^{-2/3} = \frac{2\left(8x - 1\right)}{x^{2/3}}`}</Formula>
          </p>
          <p>
            So <Formula>{String.raw`f'(x) = 0`}</Formula> at{" "}
            <Formula>{String.raw`x = \frac{1}{8}`}</Formula>, and{" "}
            <Formula>{String.raw`f'`}</Formula> is not defined at{" "}
            <Formula>{String.raw`x = 0`}</Formula>. The critical points are{" "}
            <Formula>0</Formula> and <Formula>{String.raw`\frac{1}{8}`}</Formula>. Now:
          </p>
          <p>
            <Formula>{String.raw`f(-1) = 12 + 6 = 18`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`f(0) = 0`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`f\left(\frac{1}{8}\right) = 12\left(\frac{1}{16}\right) - 6\left(\frac{1}{2}\right) = \frac{3}{4} - 3 = -\frac{9}{4}`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`f(1) = 12 - 6 = 6`}</Formula>
          </p>
          <p>
            Hence the absolute maximum value is <Formula>18</Formula> at{" "}
            <Formula>{String.raw`x = -1`}</Formula>, and the absolute minimum value is{" "}
            <Formula>{String.raw`-\frac{9}{4}`}</Formula> at{" "}
            <Formula>{String.raw`x = \frac{1}{8}`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 29">
          <p>
            A helicopter flies along <Formula>{String.raw`y = x^2 + 7`}</Formula>. A soldier at{" "}
            <Formula>{String.raw`(3,7)`}</Formula> wants to shoot when it is nearest. Find the
            nearest distance.
          </p>
          <p>
            <strong>Solution.</strong> At abscissa <Formula>x</Formula> the helicopter is at{" "}
            <Formula>{String.raw`(x,\ x^2+7)`}</Formula>, so the square of the distance is{" "}
            <Formula>{String.raw`(x-3)^2 + x^4`}</Formula>. Let
          </p>
          <p>
            <Formula>{String.raw`f(x) = (x-3)^2 + x^4`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`f'(x) = 2(x-3) + 4x^3 = 2(x-1)\left(2x^2 + 2x + 3\right)`}</Formula>
          </p>
          <p>
            The quadratic factor has discriminant <Formula>{String.raw`4 - 24 < 0`}</Formula> and
            so no real root. Thus <Formula>{String.raw`x = 1`}</Formula> is the only critical point
            and there are no end points. Now{" "}
            <Formula>{String.raw`f(1) = 4 + 1 = 5`}</Formula>.
          </p>
          <p>
            To decide whether <Formula>5</Formula> is the minimum, compare:{" "}
            <Formula>{String.raw`f(0) = 9 > 5`}</Formula>, and{" "}
            <Formula>{String.raw`f(x) \to \infty`}</Formula> as{" "}
            <Formula>{String.raw`x \to \pm\infty`}</Formula>. Hence{" "}
            <Formula>5</Formula> is the minimum value of <Formula>{String.raw`f`}</Formula>, and
            the nearest distance is <Formula>{String.raw`\sqrt{5}`}</Formula>.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 6.3 — Maxima and Minima">
        <ExerciseQa
          questions={[
            <>
              Find the maximum and minimum values, if any, of (i){" "}
              <Formula>{String.raw`f(x) = (2x-1)^2 + 3`}</Formula> (ii){" "}
              <Formula>{String.raw`f(x) = 9x^2 + 12x + 2`}</Formula> (iii){" "}
              <Formula>{String.raw`f(x) = -(x-1)^2 + 10`}</Formula> (iv){" "}
              <Formula>{String.raw`g(x) = x^3 + 1`}</Formula>.
            </>,
            <>
              Find the maximum and minimum values, if any, of (i){" "}
              <Formula>{String.raw`f(x) = |x+2| - 1`}</Formula> (ii){" "}
              <Formula>{String.raw`g(x) = -|x+1| + 3`}</Formula> (iii){" "}
              <Formula>{String.raw`h(x) = \sin(2x) + 5`}</Formula> (iv){" "}
              <Formula>{String.raw`f(x) = |\sin 4x + 3|`}</Formula> (v){" "}
              <Formula>{String.raw`h(x) = x + 1,\ x \in (-1,1)`}</Formula>.
            </>,
            <>
              Find the local maxima and local minima, if any, and the corresponding local maximum
              and local minimum values: (i) <Formula>{String.raw`f(x) = x^2`}</Formula> (ii){" "}
              <Formula>{String.raw`g(x) = x^3 - 3x`}</Formula> (iii){" "}
              <Formula>{String.raw`h(x) = \sin x + \cos x,\ 0 < x < \frac{\pi}{2}`}</Formula> (iv){" "}
              <Formula>{String.raw`f(x) = \sin x - \cos x,\ 0 < x < 2\pi`}</Formula> (v){" "}
              <Formula>{String.raw`f(x) = x^3 - 6x^2 + 9x + 15`}</Formula> (vi){" "}
              <Formula>{String.raw`g(x) = \frac{x}{2} + \frac{2}{x},\ x > 0`}</Formula> (vii){" "}
              <Formula>{String.raw`g(x) = \frac{1}{x^2+2}`}</Formula> (viii){" "}
              <Formula>{String.raw`f(x) = x\sqrt{1-x},\ 0 < x < 1`}</Formula>.
            </>,
            <>
              Prove that the following functions do not have maxima or minima: (i){" "}
              <Formula>{String.raw`f(x) = e^x`}</Formula> (ii){" "}
              <Formula>{String.raw`g(x) = \log x`}</Formula> (iii){" "}
              <Formula>{String.raw`h(x) = x^3 + x^2 + x + 1`}</Formula>.
            </>,
            <>
              Find the absolute maximum and absolute minimum values in the given intervals: (i){" "}
              <Formula>{String.raw`f(x) = x^3,\ x \in [-2,2]`}</Formula> (ii){" "}
              <Formula>{String.raw`f(x) = \sin x + \cos x,\ x \in [0,\pi]`}</Formula> (iii){" "}
              <Formula>{String.raw`f(x) = 4x - \frac{1}{2}x^2,\ x \in \left[-2,\frac{9}{2}\right]`}</Formula>{" "}
              (iv) <Formula>{String.raw`f(x) = (x-1)^2 + 3,\ x \in [-3,1]`}</Formula>.
            </>,
            <>
              Find the maximum profit that a company can make if the profit function is{" "}
              <Formula>{String.raw`p(x) = 41 - 72x - 18x^2`}</Formula>.
            </>,
            <>
              Find both the maximum and the minimum value of{" "}
              <Formula>{String.raw`3x^4 - 8x^3 + 12x^2 - 48x + 25`}</Formula> on{" "}
              <Formula>{String.raw`[0,3]`}</Formula>.
            </>,
            <>
              At what points in <Formula>{String.raw`[0,2\pi]`}</Formula> does{" "}
              <Formula>{String.raw`\sin 2x`}</Formula> attain its maximum value?
            </>,
            <>
              What is the maximum value of <Formula>{String.raw`\sin x + \cos x`}</Formula>?
            </>,
            <>
              Find the maximum value of{" "}
              <Formula>{String.raw`2x^3 - 24x + 107`}</Formula> in{" "}
              <Formula>{String.raw`[1,3]`}</Formula>, and also in{" "}
              <Formula>{String.raw`[-3,-1]`}</Formula>.
            </>,
            <>
              It is given that at <Formula>{String.raw`x = 1`}</Formula> the function{" "}
              <Formula>{String.raw`x^4 - 62x^2 + ax + 9`}</Formula> attains its maximum value on{" "}
              <Formula>{String.raw`[0,2]`}</Formula>. Find <Formula>a</Formula>.
            </>,
            <>
              Find the maximum and minimum values of{" "}
              <Formula>{String.raw`x + \sin 2x`}</Formula> on{" "}
              <Formula>{String.raw`[0,2\pi]`}</Formula>.
            </>,
            <>Find two numbers whose sum is 24 and whose product is as large as possible.</>,
            <>
              Find two positive numbers <Formula>x</Formula> and <Formula>y</Formula> such that{" "}
              <Formula>{String.raw`x + y = 60`}</Formula> and{" "}
              <Formula>{String.raw`xy^3`}</Formula> is maximum.
            </>,
            <>
              Find two positive numbers <Formula>x</Formula> and <Formula>y</Formula> such that
              their sum is 35 and <Formula>{String.raw`x^2y^5`}</Formula> is maximum.
            </>,
            <>
              Find two positive numbers whose sum is 16 and the sum of whose cubes is minimum.
            </>,
            <>
              A square piece of tin of side 18 cm is made into a box without top by cutting a
              square from each corner and folding up the flaps. What should be the side of the
              square cut off so that the volume is maximum?
            </>,
            <>
              A rectangular sheet of tin 45 cm by 24 cm is made into a box without top in the same
              way. What should be the side of the square cut off for maximum volume?
            </>,
            <>
              Show that of all rectangles inscribed in a given fixed circle, the square has the
              maximum area.
            </>,
            <>
              Show that the right circular cylinder of given surface and maximum volume is such
              that its height equals the diameter of the base.
            </>,
            <>
              Of all closed cylindrical cans of a given volume of 100 cm³, find the dimensions of
              the can with minimum surface area.
            </>,
            <>
              A wire of length 28 m is cut into two pieces, one made into a square and the other
              into a circle. What should be the lengths of the pieces so that the combined area is
              minimum?
            </>,
            <>
              Prove that the volume of the largest cone that can be inscribed in a sphere of radius{" "}
              <Formula>R</Formula> is <Formula>{String.raw`\frac{8}{27}`}</Formula> of the volume of
              the sphere.
            </>,
            <>
              Show that the right circular cone of least curved surface and given volume has an
              altitude equal to <Formula>{String.raw`\sqrt{2}`}</Formula> times the radius of the
              base.
            </>,
            <>
              Show that the semi-vertical angle of the cone of maximum volume and of given slant
              height is <Formula>{String.raw`\tan^{-1}\sqrt{2}`}</Formula>.
            </>,
            <>
              Show that the semi-vertical angle of a right circular cone of given surface area and
              maximum volume is <Formula>{String.raw`\sin^{-1}\left(\frac{1}{3}\right)`}</Formula>.
            </>,
            <>
              The point on the curve <Formula>{String.raw`x^2 = 2y`}</Formula> nearest to{" "}
              <Formula>{String.raw`(0,5)`}</Formula> is (A){" "}
              <Formula>{String.raw`(2\sqrt{2},4)`}</Formula> (B){" "}
              <Formula>{String.raw`(2\sqrt{2},0)`}</Formula> (C){" "}
              <Formula>{String.raw`(0,0)`}</Formula> (D){" "}
              <Formula>{String.raw`(2,2)`}</Formula>
            </>,
            <>
              For all real <Formula>x</Formula>, the minimum value of{" "}
              <Formula>{String.raw`\frac{x^2 - x + 1}{x^2 + x + 1}`}</Formula> is (A) 0 (B) 1 (C) 3
              (D) <Formula>{String.raw`\frac{1}{3}`}</Formula>
            </>,
            <>
              The maximum value of{" "}
              <Formula>{String.raw`\left[x(x-1)+1\right]^{1/3}`}</Formula>,{" "}
              <Formula>{String.raw`0 \le x \le 1`}</Formula>, is (A){" "}
              <Formula>{String.raw`\left(\frac{1}{3}\right)^{1/3}`}</Formula> (B){" "}
              <Formula>{String.raw`\frac{1}{2}`}</Formula> (C) 1 (D) 0
            </>,
          ]}
          answers={[
            <>
              (i) minimum 3, no maximum (ii) minimum{" "}
              <Formula>{String.raw`-2`}</Formula>, no maximum (iii) maximum 10, no minimum (iv)
              neither
            </>,
            <>
              (i) minimum <Formula>{String.raw`-1`}</Formula>, no maximum (ii) maximum 3, no
              minimum (iii) maximum 6, minimum 4 (iv) maximum 4, minimum 2 (v) neither (open
              interval)
            </>,
            <>
              (i) local minimum 0 at <Formula>{String.raw`x = 0`}</Formula> (ii) local maximum 2 at{" "}
              <Formula>{String.raw`x = -1`}</Formula>, local minimum{" "}
              <Formula>{String.raw`-2`}</Formula> at <Formula>{String.raw`x = 1`}</Formula> (iii)
              local maximum <Formula>{String.raw`\sqrt{2}`}</Formula> at{" "}
              <Formula>{String.raw`x = \frac{\pi}{4}`}</Formula> (iv) local maximum{" "}
              <Formula>{String.raw`\sqrt{2}`}</Formula> at{" "}
              <Formula>{String.raw`x = \frac{3\pi}{4}`}</Formula>, local minimum{" "}
              <Formula>{String.raw`-\sqrt{2}`}</Formula> at{" "}
              <Formula>{String.raw`x = \frac{7\pi}{4}`}</Formula> (v) local maximum 19 at{" "}
              <Formula>{String.raw`x = 1`}</Formula>, local minimum 15 at{" "}
              <Formula>{String.raw`x = 3`}</Formula> (vi) local minimum 2 at{" "}
              <Formula>{String.raw`x = 2`}</Formula> (vii) local maximum{" "}
              <Formula>{String.raw`\frac{1}{2}`}</Formula> at{" "}
              <Formula>{String.raw`x = 0`}</Formula> (viii) local maximum{" "}
              <Formula>{String.raw`\frac{2}{3\sqrt{3}}`}</Formula> at{" "}
              <Formula>{String.raw`x = \frac{2}{3}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`f'(x) = e^x > 0`}</Formula>;{" "}
              <Formula>{String.raw`g'(x) = \frac{1}{x} > 0`}</Formula> for{" "}
              <Formula>{String.raw`x > 0`}</Formula>;{" "}
              <Formula>{String.raw`h'(x) = 3x^2 + 2x + 1 > 0`}</Formula> since its discriminant is
              negative. No critical points, so no extrema.
            </>,
            <>
              (i) maximum 8 at <Formula>{String.raw`x = 2`}</Formula>, minimum{" "}
              <Formula>{String.raw`-8`}</Formula> at <Formula>{String.raw`x = -2`}</Formula> (ii)
              maximum <Formula>{String.raw`\sqrt{2}`}</Formula>, minimum{" "}
              <Formula>{String.raw`-1`}</Formula> (iii) maximum 8 at{" "}
              <Formula>{String.raw`x = 4`}</Formula>, minimum{" "}
              <Formula>{String.raw`-10`}</Formula> at <Formula>{String.raw`x = -2`}</Formula> (iv)
              maximum 19 at <Formula>{String.raw`x = -3`}</Formula>, minimum 3 at{" "}
              <Formula>{String.raw`x = 1`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\text{Rs }113`}</Formula>
            </>,
            <>
              maximum 25 at <Formula>{String.raw`x = 0`}</Formula>, minimum{" "}
              <Formula>{String.raw`-39`}</Formula> at <Formula>{String.raw`x = 2`}</Formula>
            </>,
            <>
              <Formula>{String.raw`x = \frac{\pi}{4}`}</Formula> and{" "}
              <Formula>{String.raw`x = \frac{5\pi}{4}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\sqrt{2}`}</Formula>
            </>,
            <>
              89 at <Formula>{String.raw`x = 3`}</Formula> on{" "}
              <Formula>{String.raw`[1,3]`}</Formula>; 139 at{" "}
              <Formula>{String.raw`x = -2`}</Formula> on{" "}
              <Formula>{String.raw`[-3,-1]`}</Formula>
            </>,
            <>
              <Formula>{String.raw`a = 120`}</Formula>
            </>,
            <>
              maximum <Formula>{String.raw`2\pi`}</Formula> at{" "}
              <Formula>{String.raw`x = 2\pi`}</Formula>, minimum 0 at{" "}
              <Formula>{String.raw`x = 0`}</Formula>
            </>,
            <>12 and 12</>,
            <>
              <Formula>{String.raw`x = 15`}</Formula> and{" "}
              <Formula>{String.raw`y = 45`}</Formula>
            </>,
            <>
              <Formula>{String.raw`x = 10`}</Formula> and{" "}
              <Formula>{String.raw`y = 25`}</Formula>
            </>,
            <>8 and 8</>,
            <>
              3 cm
            </>,
            <>
              5 cm
            </>,
            <>
              If the sides are <Formula>{String.raw`2x`}</Formula> and{" "}
              <Formula>{String.raw`2y`}</Formula> with{" "}
              <Formula>{String.raw`x^2 + y^2 = r^2`}</Formula>, area{" "}
              <Formula>{String.raw`A = 4xy`}</Formula> is maximum when{" "}
              <Formula>{String.raw`x = y`}</Formula> — a square.
            </>,
            <>
              With <Formula>{String.raw`S = 2\pi r^2 + 2\pi rh`}</Formula>, volume{" "}
              <Formula>{String.raw`V = \pi r^2 h`}</Formula> is maximum when{" "}
              <Formula>{String.raw`h = 2r`}</Formula>, i.e. height = diameter.
            </>,
            <>
              <Formula>{String.raw`r = \left(\frac{50}{\pi}\right)^{1/3}`}</Formula> cm and{" "}
              <Formula>{String.raw`h = 2\left(\frac{50}{\pi}\right)^{1/3}`}</Formula> cm
            </>,
            <>
              <Formula>{String.raw`\frac{112}{4+\pi}`}</Formula> m for the square and{" "}
              <Formula>{String.raw`\frac{28\pi}{4+\pi}`}</Formula> m for the circle
            </>,
            <>
              Take the cone of height <Formula>{String.raw`R + x`}</Formula> from the centre of the
              sphere; the volume <Formula>{String.raw`\frac{\pi}{3}(R+x)(R^2 - x^2)`}</Formula> is
              maximum at <Formula>{String.raw`x = \frac{R}{3}`}</Formula>, giving{" "}
              <Formula>{String.raw`\frac{8}{27}`}</Formula> of the sphere&rsquo;s volume.
            </>,
            <>
              With <Formula>{String.raw`l^2 = r^2 + h^2`}</Formula> and{" "}
              <Formula>{String.raw`V`}</Formula> fixed, <Formula>{String.raw`S = \pi r l`}</Formula>{" "}
              is least when <Formula>{String.raw`h = \sqrt{2}\,r`}</Formula>.
            </>,
            <>
              Maximising <Formula>{String.raw`V = \frac{\pi}{3}l^3\sin^2\alpha\cos\alpha`}</Formula>{" "}
              gives <Formula>{String.raw`\tan\alpha = \sqrt{2}`}</Formula>.
            </>,
            <>
              Maximising <Formula>{String.raw`V`}</Formula> subject to{" "}
              <Formula>{String.raw`S = \pi r(r+l)`}</Formula> gives{" "}
              <Formula>{String.raw`\sin\alpha = \frac{1}{3}`}</Formula>.
            </>,
            <>
              (A)
            </>,
            <>
              (D)
            </>,
            <>
              (C)
            </>,
          ]}
        />
      </Expandable>

      <h2 id="h-6-5">6.5 Tangents and Normals</h2>
      <Callout type="note">
        <p>
          This section and the next appear in the full edition of the chapter; the current NCERT
          reprint trims them into the exercises. They are kept here because the tangent line is the
          geometric meaning of the derivative, and because approximation is the first application
          of the differential.
        </p>
      </Callout>
      <p>
        Let the curve be <Formula>{String.raw`y = f(x)`}</Formula> and let{" "}
        <Formula>{String.raw`P(x_0, y_0)`}</Formula> be a point on it. The derivative at{" "}
        <Formula>{String.raw`P`}</Formula> is the slope of the line that touches the curve there.
        If <Formula>{String.raw`\psi`}</Formula> is the angle the tangent makes with the positive{" "}
        <Formula>x</Formula>-axis, then
      </p>
      <FormulaBlock
        latex={String.raw`m = \left.\frac{dy}{dx}\right|_{(x_0,y_0)} = f'(x_0) = \tan\psi`}
        label="Slope of the tangent"
        important
      />
      <p>
        The line through <Formula>{String.raw`P`}</Formula> perpendicular to the tangent is the{" "}
        <Highlight color="yellow">normal</Highlight>. Its slope is the negative reciprocal of{" "}
        <Formula>m</Formula>, so the two equations are:
      </p>
      <FormulaBlock
        latex={String.raw`y - y_0 = m\,(x - x_0)\qquad\text{(tangent)}`}
        label="Equation of the tangent"
      />
      <FormulaBlock
        latex={String.raw`y - y_0 = -\frac{1}{m}\,(x - x_0),\qquad m \neq 0\qquad\text{(normal)}`}
        label="Equation of the normal"
      />
      <Callout type="important">
        <p>Three special cases worth memorising:</p>
        <ul className="mt-2 space-y-1.5">
          <li>
            If <Formula>{String.raw`m = 0`}</Formula> the tangent is the horizontal line{" "}
            <Formula>{String.raw`y = y_0`}</Formula> and the normal is the vertical line{" "}
            <Formula>{String.raw`x = x_0`}</Formula>.
          </li>
          <li>
            If the curve has a vertical tangent at <Formula>{String.raw`P`}</Formula> (
            <Formula>{String.raw`\frac{dy}{dx} \to \infty`}</Formula>), the tangent is{" "}
            <Formula>{String.raw`x = x_0`}</Formula> and the normal is{" "}
            <Formula>{String.raw`y = y_0`}</Formula>.
          </li>
          <li>
            When the curve is given parametrically by{" "}
            <Formula>{String.raw`x = u(t)`}</Formula>,{" "}
            <Formula>{String.raw`y = v(t)`}</Formula>, then{" "}
            <Formula>{String.raw`\frac{dy}{dx} = \frac{v'(t)}{u'(t)}`}</Formula>,{" "}
            <Formula>{String.raw`u'(t) \neq 0`}</Formula>.
          </li>
        </ul>
      </Callout>
      <TableCard
        title="Reading a question into a slope"
        headers={["The question says", "The condition is", "Solve"]}
        rows={[
          {
            cells: [
              "tangent is parallel to the x-axis",
              <span key="t1">
                <Formula>{String.raw`f'(x_0) = 0`}</Formula>
              </span>,
              <span key="t1s">
                <Formula>{String.raw`f'(x) = 0`}</Formula>
              </span>,
            ],
          },
          {
            cells: [
              "tangent is parallel to y = mx + c",
              <span key="t2">
                <Formula>{String.raw`f'(x_0) = m`}</Formula>
              </span>,
              <span key="t2s">
                <Formula>{String.raw`f'(x) = m`}</Formula>
              </span>,
            ],
          },
          {
            cells: [
              "tangent is perpendicular to a line of slope m",
              <span key="t3">
                <Formula>{String.raw`f'(x_0)\cdot m = -1`}</Formula>
              </span>,
              <span key="t3s">
                <Formula>{String.raw`f'(x) = -\frac{1}{m}`}</Formula>
              </span>,
            ],
          },
          {
            cells: [
              "normal is parallel to a line of slope m",
              <span key="t4">
                <Formula>{String.raw`f'(x_0) = -\frac{1}{m}`}</Formula>
              </span>,
              <span key="t4s">
                <Formula>{String.raw`f'(x) = -\frac{1}{m}`}</Formula>
              </span>,
            ],
          },
        ]}
        caption={
          <>
            Find <Formula>{String.raw`x_0`}</Formula> from the slope condition, then substitute into
            the curve to get <Formula>{String.raw`y_0`}</Formula>.
          </>
        }
      />

      <Expandable title="Worked Examples — Tangents and Normals">
        <KeyPoint title="Worked example 1">
          <p>
            Find the tangent and normal to <Formula>{String.raw`y = x^3 - 3x + 2`}</Formula> at{" "}
            <Formula>{String.raw`(2,4)`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>{" "}
            <Formula>{String.raw`\frac{dy}{dx} = 3x^2 - 3`}</Formula>, so at{" "}
            <Formula>{String.raw`x = 2`}</Formula> the slope is{" "}
            <Formula>{String.raw`m = 12 - 3 = 9`}</Formula>.
          </p>
          <p>
            Tangent: <Formula>{String.raw`y - 4 = 9(x-2)`}</Formula>, i.e.{" "}
            <Formula>{String.raw`9x - y - 14 = 0`}</Formula>.
          </p>
          <p>
            Normal: <Formula>{String.raw`y - 4 = -\frac{1}{9}(x-2)`}</Formula>, i.e.{" "}
            <Formula>{String.raw`x + 9y - 38 = 0`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 2">
          <p>
            Find the points on <Formula>{String.raw`y = x^3 - 3x`}</Formula> where the tangent is
            parallel to <Formula>{String.raw`3x - y + 5 = 0`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> The line is{" "}
            <Formula>{String.raw`y = 3x + 5`}</Formula>, slope 3. So we need{" "}
            <Formula>{String.raw`3x^2 - 3 = 3`}</Formula>, i.e.{" "}
            <Formula>{String.raw`x^2 = 2`}</Formula>, giving{" "}
            <Formula>{String.raw`x = \pm\sqrt{2}`}</Formula>.
          </p>
          <p>
            At <Formula>{String.raw`x = \sqrt{2}`}</Formula>,{" "}
            <Formula>{String.raw`y = 2\sqrt{2} - 3\sqrt{2} = -\sqrt{2}`}</Formula>; at{" "}
            <Formula>{String.raw`x = -\sqrt{2}`}</Formula>,{" "}
            <Formula>{String.raw`y = -2\sqrt{2} + 3\sqrt{2} = \sqrt{2}`}</Formula>. The points are{" "}
            <Formula>{String.raw`(\sqrt{2}, -\sqrt{2})`}</Formula> and{" "}
            <Formula>{String.raw`(-\sqrt{2}, \sqrt{2})`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 3">
          <p>
            Find the tangent to <Formula>{String.raw`y = x^2 + 4x - 5`}</Formula> perpendicular to{" "}
            <Formula>{String.raw`x - 2y + 3 = 0`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> The given line has slope{" "}
            <Formula>{String.raw`\frac{1}{2}`}</Formula>, so the required tangent has slope{" "}
            <Formula>{String.raw`-2`}</Formula>. Then{" "}
            <Formula>{String.raw`2x + 4 = -2`}</Formula> gives{" "}
            <Formula>{String.raw`x = -3`}</Formula> and{" "}
            <Formula>{String.raw`y = 9 - 12 - 5 = -8`}</Formula>.
          </p>
          <p>
            Tangent: <Formula>{String.raw`y + 8 = -2(x+3)`}</Formula>, i.e.{" "}
            <Formula>{String.raw`2x + y + 14 = 0`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 4">
          <p>
            For the curve <Formula>{String.raw`x = t^2`}</Formula>,{" "}
            <Formula>{String.raw`y = 2t`}</Formula>, find the tangent at{" "}
            <Formula>{String.raw`t = 2`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>{" "}
            <Formula>{String.raw`\frac{dx}{dt} = 2t`}</Formula> and{" "}
            <Formula>{String.raw`\frac{dy}{dt} = 2`}</Formula>, hence
          </p>
          <p>
            <Formula>{String.raw`\frac{dy}{dx} = \frac{2}{2t} = \frac{1}{t}`}</Formula>
          </p>
          <p>
            At <Formula>{String.raw`t = 2`}</Formula> the point is{" "}
            <Formula>{String.raw`(4,4)`}</Formula> and the slope is{" "}
            <Formula>{String.raw`\frac{1}{2}`}</Formula>. Tangent:{" "}
            <Formula>{String.raw`y - 4 = \frac{1}{2}(x-4)`}</Formula>, i.e.{" "}
            <Formula>{String.raw`x - 2y + 4 = 0`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 5">
          <p>
            Find the normal to <Formula>{String.raw`y = x^3 + 2x + 6`}</Formula> which is parallel
            to <Formula>{String.raw`x + 14y + 4 = 0`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> The given line has slope{" "}
            <Formula>{String.raw`-\frac{1}{14}`}</Formula>, so the normal must have slope{" "}
            <Formula>{String.raw`-\frac{1}{14}`}</Formula> and the tangent slope{" "}
            <Formula>{String.raw`14`}</Formula>. Then{" "}
            <Formula>{String.raw`3x^2 + 2 = 14`}</Formula> gives{" "}
            <Formula>{String.raw`x = \pm 2`}</Formula>.
          </p>
          <p>
            At <Formula>{String.raw`x = 2`}</Formula>, <Formula>{String.raw`y = 18`}</Formula>:
            normal is <Formula>{String.raw`x + 14y = 254`}</Formula>.
          </p>
          <p>
            At <Formula>{String.raw`x = -2`}</Formula>,{" "}
            <Formula>{String.raw`y = -6`}</Formula>: normal is{" "}
            <Formula>{String.raw`x + 14y + 86 = 0`}</Formula>.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 6.4 — Tangents and Normals">
        <ExerciseQa
          questions={[
            <>
              Find the slope of the tangent to <Formula>{String.raw`y = x^3 - x + 1`}</Formula> at{" "}
              <Formula>{String.raw`x = 2`}</Formula>.
            </>,
            <>
              Find the equation of the tangent to{" "}
              <Formula>{String.raw`y = x^2 + 3x + 4`}</Formula> at{" "}
              <Formula>{String.raw`(1,8)`}</Formula>.
            </>,
            <>
              Find the point on <Formula>{String.raw`y = x^2 - 4x + 5`}</Formula> where the tangent
              is parallel to <Formula>{String.raw`2x - y + 3 = 0`}</Formula>.
            </>,
            <>
              Find the tangent and normal to <Formula>{String.raw`y = x^3`}</Formula> at{" "}
              <Formula>{String.raw`(1,1)`}</Formula>.
            </>,
            <>
              Find the normal to <Formula>{String.raw`x^2 = 4y`}</Formula> at{" "}
              <Formula>{String.raw`(2,1)`}</Formula>.
            </>,
            <>
              Find the points on <Formula>{String.raw`y = x^3 - 3x^2 + 3x - 1`}</Formula> where the
              tangent is parallel to the <Formula>x</Formula>-axis.
            </>,
            <>
              Find the tangent to <Formula>{String.raw`xy = 4`}</Formula> at{" "}
              <Formula>{String.raw`(2,2)`}</Formula>.
            </>,
            <>
              Find the normal to <Formula>{String.raw`y = x^3 + 2x + 6`}</Formula> parallel to{" "}
              <Formula>{String.raw`x + 14y + 4 = 0`}</Formula>.
            </>,
            <>
              Find the tangent to <Formula>{String.raw`y = \sin x`}</Formula> at{" "}
              <Formula>{String.raw`x = 0`}</Formula>.
            </>,
            <>
              Find the slope of the normal to{" "}
              <Formula>{String.raw`y = 2x^2 + 3\sin x`}</Formula> at{" "}
              <Formula>{String.raw`x = 0`}</Formula>.
            </>,
          ]}
          answers={[
            <>
              <Formula>{String.raw`11`}</Formula>
            </>,
            <>
              <Formula>{String.raw`5x - y + 3 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`(3,2)`}</Formula>
            </>,
            <>
              tangent <Formula>{String.raw`3x - y - 2 = 0`}</Formula>, normal{" "}
              <Formula>{String.raw`x + 3y - 4 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`x + y - 3 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`(1,0)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`x + y - 4 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`x + 14y = 254`}</Formula> and{" "}
              <Formula>{String.raw`x + 14y + 86 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y = x`}</Formula>
            </>,
            <>
              <Formula>{String.raw`-\frac{1}{3}`}</Formula>
            </>,
          ]}
        />
      </Expandable>

      <h2 id="h-6-6">6.6 Approximation</h2>
      <p>
        A small change in the input produces a small change in the output, and for small changes
        the curve is almost its own tangent. That single sentence is the whole theory of
        approximation. Let <Formula>{String.raw`y = f(x)`}</Formula> and let{" "}
        <Formula>{String.raw`\Delta x`}</Formula> be a small change in{" "}
        <Formula>x</Formula>; the corresponding change in <Formula>y</Formula> is{" "}
        <Formula>{String.raw`\Delta y = f(x + \Delta x) - f(x)`}</Formula>.
      </p>
      <FormulaBlock
        latex={String.raw`\Delta y \approx f'(x)\,\Delta x \qquad\text{i.e.}\qquad dy = f'(x)\,dx`}
        label="The differential"
        important
      />
      <p>
        Solving for the new value gives the working formula for approximations:
      </p>
      <FormulaBlock
        latex={String.raw`f(x + \Delta x) \approx f(x) + f'(x)\,\Delta x`}
        label="Linear approximation"
        important
      />
      <Callout type="tip">
        <p>
          The approximation is good when <Formula>{String.raw`\Delta x`}</Formula> is small compared
          with <Formula>x</Formula>, and it fails near points where{" "}
          <Formula>{String.raw`f'`}</Formula> is large or undefined. Choose{" "}
          <Formula>x</Formula> to be the nearest number whose <Formula>f</Formula> value you can
          compute exactly.
        </p>
      </Callout>
      <TableCard
        title="Errors — the language of measurement"
        headers={["Quantity", "Meaning", "Formula"]}
        rows={[
          {
            cells: [
              "absolute error",
              "size of the mistake in the measured value",
              <span key="a1">
                <Formula>{String.raw`\Delta x`}</Formula>
              </span>,
            ],
          },
          {
            cells: [
              "relative error",
              "the mistake compared with the value itself",
              <span key="a2">
                <Formula>{String.raw`\frac{\Delta x}{x}`}</Formula>
              </span>,
            ],
          },
          {
            cells: [
              "percentage error",
              "relative error written as a percentage",
              <span key="a3">
                <Formula>{String.raw`\frac{\Delta x}{x}\times 100`}</Formula>
              </span>,
            ],
          },
        ]}
        caption={
          <>
            For a computed quantity <Formula>{String.raw`y = f(x)`}</Formula>, the errors propagate
            as <Formula>{String.raw`\Delta y \approx f'(x)\Delta x`}</Formula>.
          </>
        }
      />

      <Expandable title="Worked Examples — Approximation">
        <KeyPoint title="Worked example 1">
          <p>
            Use differentials to find an approximate value of{" "}
            <Formula>{String.raw`\sqrt{25.3}`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> Take{" "}
            <Formula>{String.raw`f(x) = \sqrt{x}`}</Formula>,{" "}
            <Formula>{String.raw`x = 25`}</Formula>,{" "}
            <Formula>{String.raw`\Delta x = 0.3`}</Formula>. Then{" "}
            <Formula>{String.raw`f'(x) = \frac{1}{2\sqrt{x}}`}</Formula> and{" "}
            <Formula>{String.raw`f'(25) = \frac{1}{10}`}</Formula>, so
          </p>
          <p>
            <Formula>{String.raw`dy = f'(25)\Delta x = \frac{1}{10}(0.3) = 0.03`}</Formula>
          </p>
          <p>
            Hence <Formula>{String.raw`\sqrt{25.3} \approx 5 + 0.03 = 5.03`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 2">
          <p>
            Find an approximate value of <Formula>{String.raw`(1.999)^5`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> Take{" "}
            <Formula>{String.raw`f(x) = x^5`}</Formula>, <Formula>{String.raw`x = 2`}</Formula>,{" "}
            <Formula>{String.raw`\Delta x = -0.001`}</Formula>. Then{" "}
            <Formula>{String.raw`f'(x) = 5x^4`}</Formula> and{" "}
            <Formula>{String.raw`f'(2) = 80`}</Formula>, so
          </p>
          <p>
            <Formula>{String.raw`dy = 80(-0.001) = -0.08`}</Formula>
          </p>
          <p>
            Hence <Formula>{String.raw`(1.999)^5 \approx 32 - 0.08 = 31.92`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 3">
          <p>
            The radius of a sphere is measured as 7 m with an error of 0.02 m. Find the approximate
            error in calculating its volume.
          </p>
          <p>
            <strong>Solution.</strong> With{" "}
            <Formula>{String.raw`V = \frac{4}{3}\pi r^3`}</Formula>,
          </p>
          <p>
            <Formula>{String.raw`\frac{dV}{dr} = 4\pi r^2`}</Formula>
          </p>
          <p>
            so for <Formula>{String.raw`r = 7`}</Formula> m and{" "}
            <Formula>{String.raw`\Delta r = 0.02`}</Formula> m,
          </p>
          <p>
            <Formula>{String.raw`\Delta V \approx 4\pi(49)(0.02) = 3.92\pi \approx 12.31\ \text{m}^3`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 4">
          <p>
            The radius of a sphere is measured as 9 m with an error of 0.03 m. Find the approximate
            error in calculating its surface area.
          </p>
          <p>
            <strong>Solution.</strong> With{" "}
            <Formula>{String.raw`S = 4\pi r^2`}</Formula>,{" "}
            <Formula>{String.raw`\frac{dS}{dr} = 8\pi r`}</Formula>, so
          </p>
          <p>
            <Formula>{String.raw`\Delta S \approx 8\pi(9)(0.03) = 2.16\pi \approx 6.79\ \text{m}^2`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 5">
          <p>
            If the edge of a cube is measured with a 1% error, what is the percentage error in its
            surface area?
          </p>
          <p>
            <strong>Solution.</strong> With <Formula>{String.raw`S = 6x^2`}</Formula>,{" "}
            <Formula>{String.raw`\Delta S \approx 12x\,\Delta x`}</Formula>, hence
          </p>
          <p>
            <Formula>{String.raw`\frac{\Delta S}{S} = \frac{12x\,\Delta x}{6x^2} = 2\frac{\Delta x}{x}`}</Formula>
          </p>
          <p>
            A 1% error in <Formula>x</Formula> therefore gives a 2% error in the surface area.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 6.5 — Approximation">
        <ExerciseQa
          questions={[
            <>
              Find the approximate value of <Formula>{String.raw`\sqrt{25.3}`}</Formula>.
            </>,
            <>
              Find the approximate value of <Formula>{String.raw`\sqrt{49.5}`}</Formula>.
            </>,
            <>
              Find the approximate value of <Formula>{String.raw`(1.999)^5`}</Formula>.
            </>,
            <>
              Find the approximate value of <Formula>{String.raw`(2.001)^4`}</Formula>.
            </>,
            <>
              Find the approximate value of <Formula>{String.raw`(15)^{1/4}`}</Formula>.
            </>,
            <>
              Find the approximate value of <Formula>{String.raw`(0.999)^{1/10}`}</Formula>.
            </>,
            <>
              The radius of a sphere is measured as 7 m with an error of 0.02 m. Find the
              approximate error in its volume.
            </>,
            <>
              The radius of a sphere is measured as 9 m with an error of 0.03 m. Find the
              approximate error in its surface area.
            </>,
          ]}
          answers={[
            <>
              <Formula>{String.raw`5.03`}</Formula>
            </>,
            <>
              <Formula>{String.raw`7 + \frac{0.5}{14} \approx 7.036`}</Formula>
            </>,
            <>
              <Formula>{String.raw`31.92`}</Formula>
            </>,
            <>
              <Formula>{String.raw`16.032`}</Formula>
            </>,
            <>
              <Formula>{String.raw`2 - \frac{1}{32} = 1.96875`}</Formula>
            </>,
            <>
              <Formula>{String.raw`1 - 0.0001 = 0.9999`}</Formula>
            </>,
            <>
              <Formula>{String.raw`3.92\pi \approx 12.31\ \text{m}^3`}</Formula>
            </>,
            <>
              <Formula>{String.raw`2.16\pi \approx 6.79\ \text{m}^2`}</Formula>
            </>,
          ]}
        />
      </Expandable>

      <Expandable title="Miscellaneous Examples 30 to 37 — NCERT">
        <KeyPoint title="Example 30">
          <p>
            A car starts from <Formula>P</Formula> at <Formula>{String.raw`t = 0`}</Formula> s and
            stops at <Formula>Q</Formula>. The distance covered in <Formula>t</Formula> s is{" "}
            <Formula>{String.raw`x = t^2\left(2 - \frac{t}{3}\right)`}</Formula>. Find the time
            taken to reach <Formula>Q</Formula> and the distance <Formula>PQ</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> The velocity is
          </p>
          <p>
            <Formula>{String.raw`v = \frac{dx}{dt} = 4t - t^2 = t(4-t)`}</Formula>
          </p>
          <p>
            So <Formula>{String.raw`v = 0`}</Formula> at <Formula>{String.raw`t = 0`}</Formula> and{" "}
            <Formula>{String.raw`t = 4`}</Formula>. The car is at rest at{" "}
            <Formula>P</Formula> when <Formula>{String.raw`t = 0`}</Formula>, so it stops at{" "}
            <Formula>Q</Formula> when <Formula>{String.raw`t = 4`}</Formula> s. The distance is
          </p>
          <p>
            <Formula>{String.raw`x\big|_{t=4} = 16\left(2 - \frac{4}{3}\right) = \frac{32}{3}\ \text{m}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 31">
          <p>
            An inverted conical tank has semi-vertical angle{" "}
            <Formula>{String.raw`\tan^{-1}(0.5)`}</Formula>. Water is poured in at{" "}
            <Formula>{String.raw`5\ \text{m}^3/\text{h}`}</Formula>. Find the rate at which the
            level rises when the depth is 4 m.
          </p>
          <p>
            <strong>Solution.</strong> From{" "}
            <Formula>{String.raw`\tan\alpha = \frac{r}{h} = 0.5`}</Formula> we get{" "}
            <Formula>{String.raw`r = \frac{h}{2}`}</Formula>. Then
          </p>
          <p>
            <Formula>{String.raw`V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi\left(\frac{h}{2}\right)^2 h = \frac{\pi h^3}{12}`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`\frac{dV}{dt} = \frac{\pi h^2}{4}\cdot\frac{dh}{dt}`}</Formula>
          </p>
          <p>
            With <Formula>{String.raw`\frac{dV}{dt} = 5`}</Formula> and{" "}
            <Formula>{String.raw`h = 4`}</Formula>:
          </p>
          <p>
            <Formula>{String.raw`5 = \frac{\pi(16)}{4}\frac{dh}{dt} \Rightarrow \frac{dh}{dt} = \frac{5}{4\pi} = \frac{35}{88}\ \text{m/h}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 32">
          <p>
            A man 2 m tall walks at 5 km/h away from a 6 m lamp post. Find the rate at which his
            shadow lengthens.
          </p>
          <p>
            <strong>Solution.</strong> Let <Formula>{String.raw`AM = l`}</Formula> be the
            man&rsquo;s distance from the post and <Formula>{String.raw`MS = s`}</Formula> the
            shadow. Since <Formula>{String.raw`\triangle MSN \sim \triangle ASB`}</Formula>,
          </p>
          <p>
            <Formula>{String.raw`\frac{MS}{AS} = \frac{MN}{AB} = \frac{2}{6} \Rightarrow AS = 3s`}</Formula>
          </p>
          <p>
            Hence <Formula>{String.raw`l = AM = 3s - s = 2s`}</Formula>, so{" "}
            <Formula>{String.raw`\frac{dl}{dt} = 2\frac{ds}{dt}`}</Formula>. With{" "}
            <Formula>{String.raw`\frac{dl}{dt} = 5`}</Formula> km/h,
          </p>
          <p>
            <Formula>{String.raw`\frac{ds}{dt} = \frac{5}{2}\ \text{km/h}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 33">
          <p>
            Find the intervals in which{" "}
            <Formula>{String.raw`f(x) = \frac{3}{10}x^4 - \frac{4}{5}x^3 - 3x^2 + \frac{36}{5}x + 11`}</Formula>{" "}
            is (a) increasing (b) decreasing.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`f'(x) = \frac{6}{5}x^3 - \frac{12}{5}x^2 - 6x + \frac{36}{5} = \frac{6}{5}(x-1)(x+2)(x-3)`}</Formula>
          </p>
          <p>
            So <Formula>{String.raw`f'(x) = 0`}</Formula> at{" "}
            <Formula>{String.raw`x = 1,\ -2,\ 3`}</Formula>, giving four intervals. Test the sign of
            each factor in turn:
          </p>
          <TableCard
            headers={["Interval", "Sign of f'(x)", "Nature of f"]}
            rows={[
              {
                cells: [
                  <span key="m1">
                    <Formula>{String.raw`(-\infty,-2)`}</Formula>
                  </span>,
                  <span key="m1v">
                    <Formula>{String.raw`< 0`}</Formula>
                  </span>,
                  "decreasing",
                ],
              },
              {
                cells: [
                  <span key="m2">
                    <Formula>{String.raw`(-2,1)`}</Formula>
                  </span>,
                  <span key="m2v">
                    <Formula>{String.raw`> 0`}</Formula>
                  </span>,
                  "increasing",
                ],
              },
              {
                cells: [
                  <span key="m3">
                    <Formula>{String.raw`(1,3)`}</Formula>
                  </span>,
                  <span key="m3v">
                    <Formula>{String.raw`< 0`}</Formula>
                  </span>,
                  "decreasing",
                ],
              },
              {
                cells: [
                  <span key="m4">
                    <Formula>{String.raw`(3,\infty)`}</Formula>
                  </span>,
                  <span key="m4v">
                    <Formula>{String.raw`> 0`}</Formula>
                  </span>,
                  "increasing",
                ],
              },
            ]}
          />
          <p>
            Hence <Formula>f</Formula> is decreasing on{" "}
            <Formula>{String.raw`(-\infty,-2)`}</Formula> and{" "}
            <Formula>{String.raw`(1,3)`}</Formula>, increasing on{" "}
            <Formula>{String.raw`(-2,1)`}</Formula> and{" "}
            <Formula>{String.raw`(3,\infty)`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 34">
          <p>
            Show that{" "}
            <Formula>{String.raw`f(x) = \tan^{-1}(\sin x + \cos x)`}</Formula>,{" "}
            <Formula>{String.raw`x > 0`}</Formula>, is increasing in{" "}
            <Formula>{String.raw`\left(0,\frac{\pi}{4}\right)`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`f'(x) = \frac{\cos x - \sin x}{1 + (\sin x + \cos x)^2} = \frac{\cos x - \sin x}{2 + \sin 2x}`}</Formula>
          </p>
          <p>
            Since <Formula>{String.raw`2 + \sin 2x > 0`}</Formula> on{" "}
            <Formula>{String.raw`\left(0,\frac{\pi}{4}\right)`}</Formula>, the sign of{" "}
            <Formula>{String.raw`f'`}</Formula> is the sign of{" "}
            <Formula>{String.raw`\cos x - \sin x`}</Formula>. Now{" "}
            <Formula>{String.raw`\cos x > \sin x`}</Formula> exactly when{" "}
            <Formula>{String.raw`\tan x < 1`}</Formula>, i.e. when{" "}
            <Formula>{String.raw`0 < x < \frac{\pi}{4}`}</Formula>. Hence{" "}
            <Formula>{String.raw`f'(x) > 0`}</Formula> there and <Formula>f</Formula> is increasing.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 35">
          <p>
            A circular disc of radius 3 cm is heated so that its radius increases at 0.05 cm/s.
            Find the rate at which its area increases when the radius is 3.2 cm.
          </p>
          <p>
            <strong>Solution.</strong> With <Formula>{String.raw`A = \pi r^2`}</Formula>,
          </p>
          <p>
            <Formula>{String.raw`\frac{dA}{dt} = 2\pi r\frac{dr}{dt}`}</Formula>
          </p>
          <p>
            and <Formula>{String.raw`dr \approx \frac{dr}{dt}\Delta t = 0.05`}</Formula> for a unit
            time step. Hence
          </p>
          <p>
            <Formula>{String.raw`dA = 2\pi(3.2)(0.05) = 0.32\pi\ \text{cm}^2/\text{s}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 36">
          <p>
            An open topped box is made by removing equal squares from each corner of a 3 m by 8 m
            sheet and folding up the sides. Find the volume of the largest such box.
          </p>
          <p>
            <strong>Solution.</strong> Let <Formula>x</Formula> be the side of the removed square.
            The box has height <Formula>x</Formula>, length{" "}
            <Formula>{String.raw`8 - 2x`}</Formula> and breadth{" "}
            <Formula>{String.raw`3 - 2x`}</Formula>, so
          </p>
          <p>
            <Formula>{String.raw`V(x) = x(3-2x)(8-2x) = 4x^3 - 22x^2 + 24x`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`V'(x) = 12x^2 - 44x + 24 = 4(3x-2)(x-3)`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`V'(x) = 0`}</Formula> gives{" "}
            <Formula>{String.raw`x = \frac{2}{3}`}</Formula> or{" "}
            <Formula>{String.raw`x = 3`}</Formula>. But{" "}
            <Formula>{String.raw`x = 3`}</Formula> makes the breadth zero, so it is rejected. With{" "}
            <Formula>{String.raw`V''(x) = 24x - 44`}</Formula>,{" "}
          </p>
          <p>
            <Formula>{String.raw`V''\left(\frac{2}{3}\right) = 16 - 44 = -28 < 0`}</Formula>
          </p>
          <p>
            so <Formula>{String.raw`x = \frac{2}{3}`}</Formula> is the point of maximum volume. The
            largest volume is
          </p>
          <p>
            <Formula>{String.raw`V\left(\frac{2}{3}\right) = \frac{2}{3}\cdot\frac{5}{3}\cdot\frac{20}{3} = \frac{200}{27}\ \text{m}^3`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 37">
          <p>
            A manufacturer can sell <Formula>x</Formula> items at{" "}
            <Formula>{String.raw`\left(5 - \frac{x}{100}\right)`}</Formula> rupees each; the cost of{" "}
            <Formula>x</Formula> items is{" "}
            <Formula>{String.raw`\left(\frac{x}{5} + 500\right)`}</Formula> rupees. Find the number
            of items he should sell to earn maximum profit.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`S(x) = x\left(5 - \frac{x}{100}\right) = 5x - \frac{x^2}{100},\qquad C(x) = \frac{x}{5} + 500`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`P(x) = S(x) - C(x) = \frac{24}{5}x - \frac{x^2}{100} - 500`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`P'(x) = \frac{24}{5} - \frac{x}{50},\qquad P''(x) = -\frac{1}{50} < 0`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`P'(x) = 0`}</Formula> gives{" "}
            <Formula>{String.raw`x = 240`}</Formula>, and{" "}
            <Formula>{String.raw`P''(240) < 0`}</Formula> confirms a maximum. The manufacturer
            should sell <Formula>240</Formula> items.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Miscellaneous Exercise on Chapter 6">
        <ExerciseQa
          questions={[
            <>
              Show that <Formula>{String.raw`f(x) = \frac{\log x}{x}`}</Formula> has a maximum at{" "}
              <Formula>{String.raw`x = e`}</Formula>.
            </>,
            <>
              The two equal sides of an isosceles triangle with fixed base <Formula>b</Formula>{" "}
              decrease at <Formula>{String.raw`3`}</Formula> cm/s. How fast is the area decreasing
              when the equal sides equal the base?
            </>,
            <>
              Find the intervals in which{" "}
              <Formula>{String.raw`f(x) = \frac{4\sin x - 2x - x\cos x}{2 + \cos x}`}</Formula> is
              (i) increasing (ii) decreasing.
            </>,
            <>
              Find the intervals in which{" "}
              <Formula>{String.raw`f(x) = x^3 + \frac{1}{x^3}`}</Formula>,{" "}
              <Formula>{String.raw`x \neq 0`}</Formula>, is (i) increasing (ii) decreasing.
            </>,
            <>
              Find the maximum area of an isosceles triangle inscribed in the ellipse{" "}
              <Formula>{String.raw`\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1`}</Formula> with its vertex
              at one end of the major axis.
            </>,
            <>
              A tank with rectangular base and sides, open at the top, has depth 2 m and volume{" "}
              <Formula>{String.raw`8\ \text{m}^3`}</Formula>. The base costs{" "}
              <Formula>{String.raw`\text{Rs }70`}</Formula> per m² and the sides{" "}
              <Formula>{String.raw`\text{Rs }45`}</Formula> per m². Find the cost of the least
              expensive tank.
            </>,
            <>
              The sum of the perimeters of a circle and a square is <Formula>k</Formula>. Prove that
              the sum of their areas is least when the side of the square is double the radius of
              the circle.
            </>,
            <>
              A window is a rectangle surmounted by a semicircular opening, with total perimeter 10
              m. Find the dimensions that admit maximum light.
            </>,
            <>
              A point on the hypotenuse of a right triangle is at distances{" "}
              <Formula>a</Formula> and <Formula>b</Formula> from the two sides. Show that the
              minimum length of the hypotenuse is{" "}
              <Formula>{String.raw`\left(a^{2/3} + b^{2/3}\right)^{3/2}`}</Formula>.
            </>,
            <>
              Find the points at which{" "}
              <Formula>{String.raw`f(x) = (x-2)^4(x+1)^3`}</Formula> has (i) local maxima (ii) local
              minima (iii) a point of inflexion.
            </>,
            <>
              Find the absolute maximum and minimum values of{" "}
              <Formula>{String.raw`f(x) = \cos^2 x + \sin x`}</Formula>,{" "}
              <Formula>{String.raw`x \in [0,\pi]`}</Formula>.
            </>,
            <>
              Show that the altitude of the right circular cone of maximum volume inscribed in a
              sphere of radius <Formula>r</Formula> is{" "}
              <Formula>{String.raw`\frac{4r}{3}`}</Formula>.
            </>,
            <>
              Let <Formula>f</Formula> be defined on <Formula>{String.raw`[a,b]`}</Formula> with{" "}
              <Formula>{String.raw`f'(x) > 0`}</Formula> for all{" "}
              <Formula>{String.raw`x \in (a,b)`}</Formula>. Prove that <Formula>f</Formula> is
              increasing on <Formula>{String.raw`(a,b)`}</Formula>.
            </>,
            <>
              Show that the height of the cylinder of maximum volume inscribed in a sphere of
              radius <Formula>R</Formula> is{" "}
              <Formula>{String.raw`\frac{2R}{\sqrt{3}}`}</Formula>. Also find the maximum volume.
            </>,
            <>
              Show that the height of the cylinder of greatest volume inscribed in a right circular
              cone of height <Formula>h</Formula> and semi-vertical angle{" "}
              <Formula>\alpha</Formula> is one-third that of the cone, and the greatest volume is{" "}
              <Formula>{String.raw`\frac{4}{27}\pi h^3\tan^2\alpha`}</Formula>.
            </>,
            <>
              A cylindrical tank of radius 10 m is filled with wheat at{" "}
              <Formula>{String.raw`314\ \text{m}^3`}</Formula> per hour. The depth is increasing at:
              (A) <Formula>{String.raw`1`}</Formula> m/h (B){" "}
              <Formula>{String.raw`0.1`}</Formula> m/h (C){" "}
              <Formula>{String.raw`1.1`}</Formula> m/h (D){" "}
              <Formula>{String.raw`0.5`}</Formula> m/h
            </>,
          ]}
          answers={[
            <>
              <Formula>{String.raw`f'(x) = \frac{1 - \log x}{x^2} = 0`}</Formula> at{" "}
              <Formula>{String.raw`x = e`}</Formula>; <Formula>{String.raw`f''(e) < 0`}</Formula>,
              so it is a maximum.
            </>,
            <>
              Decreasing at <Formula>{String.raw`\sqrt{3}\,b\ \text{cm}^2/\text{s}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`f'(x) = \frac{\cos x\,(4-\cos x)}{(2+\cos x)^2}`}</Formula>: (i)
              increasing on <Formula>{String.raw`\left(0,\frac{\pi}{2}\right)`}</Formula> (ii)
              decreasing on <Formula>{String.raw`\left(\frac{\pi}{2},\pi\right)`}</Formula>
            </>,
            <>
              (i) increasing on{" "}
              <Formula>{String.raw`(-1,0) \cup (1,\infty)`}</Formula> (ii) decreasing on{" "}
              <Formula>{String.raw`(-\infty,-1) \cup (0,1)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{3\sqrt{3}}{4}ab`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\text{Rs }1000`}</Formula>
            </>,
            <>
              With <Formula>{String.raw`4a + 2\pi r = k`}</Formula>,{" "}
              <Formula>{String.raw`\frac{dA}{dr} = 0`}</Formula> forces{" "}
              <Formula>{String.raw`a = 2r`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`r = \frac{10}{4+\pi}`}</Formula> m, height{" "}
              <Formula>{String.raw`\frac{10}{4+\pi}`}</Formula> m, width{" "}
              <Formula>{String.raw`\frac{20}{4+\pi}`}</Formula> m
            </>,
            <>
              Writing the hypotenuse as <Formula>{String.raw`l = b\csc\theta + a\sec\theta`}</Formula>{" "}
              and setting <Formula>{String.raw`\frac{dl}{d\theta} = 0`}</Formula> gives the stated
              minimum.
            </>,
            <>
              (i) local maximum at <Formula>{String.raw`x = \frac{2}{7}`}</Formula> (ii) local
              minimum at <Formula>{String.raw`x = 2`}</Formula> (iii) point of inflexion at{" "}
              <Formula>{String.raw`x = -1`}</Formula>
            </>,
            <>
              maximum <Formula>{String.raw`\frac{5}{4}`}</Formula>, minimum{" "}
              <Formula>1</Formula>
            </>,
            <>
              Maximising <Formula>{String.raw`\frac{\pi}{3}(r+x)(r^2-x^2)`}</Formula> gives{" "}
              <Formula>{String.raw`x = \frac{r}{3}`}</Formula>, so the altitude is{" "}
              <Formula>{String.raw`\frac{4r}{3}`}</Formula>.
            </>,
            <>
              Apply the Mean Value Theorem to{" "}
              <Formula>{String.raw`x_1 < x_2`}</Formula> in{" "}
              <Formula>{String.raw`(a,b)`}</Formula>:{" "}
              <Formula>{String.raw`f(x_2) - f(x_1) = f'(c)(x_2-x_1) > 0`}</Formula>.
            </>,
            <>
              height <Formula>{String.raw`\frac{2R}{\sqrt{3}}`}</Formula>, maximum volume{" "}
              <Formula>{String.raw`\frac{4\pi R^3}{3\sqrt{3}}`}</Formula>
            </>,
            <>
              Maximise <Formula>{String.raw`V = \pi r^2(h-y)`}</Formula> with{" "}
              <Formula>{String.raw`\frac{r}{h} = \frac{y}{h-y}\tan\alpha`}</Formula>.
            </>,
            <>
              (A)
            </>,
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Rate problems:</strong> write the relation between the quantities <em>first</em>,
            differentiate with respect to <Formula>t</Formula>, and substitute only at the end.
            Never differentiate the numbers.
          </li>
          <li>
            <strong>Sign discipline:</strong> &ldquo;decreasing&rdquo; means a negative rate. Put
            the minus sign in <Formula>{String.raw`\frac{dx}{dt}`}</Formula> at the very start.
          </li>
          <li>
            <strong>Maxima/minima in one line:</strong> solve{" "}
            <Formula>{String.raw`f'(x) = 0`}</Formula>, then read{" "}
            <Formula>{String.raw`f''(c) > 0`}</Formula> as minimum and{" "}
            <Formula>{String.raw`f''(c) < 0`}</Formula> as maximum.
          </li>
          <li>
            <strong>Second test fails</strong> (<Formula>{String.raw`f''(c) = 0`}</Formula>)? Go
            straight to the sign chart of <Formula>{String.raw`f'`}</Formula> — no sign change means
            a point of inflexion, not an extremum.
          </li>
          <li>
            <strong>Absolute extrema on [a, b]:</strong> only the candidates matter — the critical
            points <em>inside</em> the interval plus the two end points. A table of values settles
            it with no sign analysis at all.
          </li>
          <li>
            <strong>Applied optimisation:</strong> reduce to one variable, note its admissible
            range (a length cannot be negative), and check that the critical point lies in that
            range before declaring an answer.
          </li>
          <li>
            <strong>Tangent slope:</strong>{" "}
            <Formula>{String.raw`m = f'(x_0)`}</Formula>; parallel lines share <Formula>m</Formula>,
            perpendicular lines satisfy{" "}
            <Formula>{String.raw`m_1m_2 = -1`}</Formula>.
          </li>
          <li>
            <strong>Approximation:</strong> pick the nearest perfect value, compute{" "}
            <Formula>{String.raw`dy = f'(x)\,dx`}</Formula>, add it on. The answer is always slightly
            better than it looks when <Formula>{String.raw`dx`}</Formula> is small.
          </li>
        </ul>
      </SpeedTricks>
    </>
  );
}
