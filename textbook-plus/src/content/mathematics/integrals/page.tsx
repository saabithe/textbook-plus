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
import { Comparison } from "@/components/content/Comparison";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function IntegralsChapter() {
  return (
    <>
      <h2 id="h-7-1">7.1 Introduction</h2>
      <p>
        Differential calculus is built on a single idea — the <strong>derivative</strong>.
        Its original motivation was geometric: to define the tangent to the graph of a
        function and to measure the slope of that tangent. Integral calculus begins from
        the opposite question: given the graph of a function, how do we define and measure
        the <strong>area of the region</strong> it bounds?
      </p>
      <p>
        There is a second motivation, purely algebraic. If <Formula>f</Formula> is
        differentiable on an interval <Formula>I</Formula>, then{" "}
        <Formula>{String.raw`f'(x)`}</Formula> exists at every point of{" "}
        <Formula>I</Formula>. Now reverse it: given{" "}
        <Formula>{String.raw`f'(x)`}</Formula> at every point, can we recover{" "}
        <Formula>f</Formula>? The functions that could have produced a given derivative are
        its <strong>anti derivatives</strong>, and the machinery that finds them all is
        integration.
      </p>
      <Callout type="important">
        <p>
          If <Formula>{String.raw`F'(x) = f(x)`}</Formula> for all{" "}
          <Formula>{String.raw`x \in I`}</Formula>, then <Formula>F</Formula> is an{" "}
          <Highlight color="yellow">anti derivative</Highlight> (or{" "}
          <strong>primitive</strong>) of <Formula>f</Formula>. The formula listing{" "}
          <em>all</em> its anti derivatives is the{" "}
          <Highlight color="yellow">indefinite integral</Highlight> of{" "}
          <Formula>f</Formula>, written{" "}
          <Formula>{String.raw`\int f(x)\,dx`}</Formula>, and the process of finding it is
          called <strong>integration</strong> (or anti differentiation).
        </p>
      </Callout>

      <Comparison
        columns={[
          {
            title: "Question 1 — a function from its derivative",
            children: (
              <>
                <p>
                  A derivative is known at every instant and the original function is not.
                  For example, the instantaneous velocity of a moving object is known at
                  each instant — can its position at each instant be recovered?
                </p>
                <p>
                  The answer is a family of functions, so this leads to the{" "}
                  <strong>indefinite integral</strong>.
                </p>
              </>
            ),
          },
          {
            title: "Question 2 — area under a graph",
            children: (
              <>
                <p>
                  A region is bounded by the graph of a function and certain lines — how
                  large is it?
                </p>
                <p>
                  The answer is a single number, so this leads to the{" "}
                  <strong>definite integral</strong>.
                </p>
              </>
            ),
          },
        ]}
      />

      <p>
        Indefinite and definite integrals together make up the{" "}
        <strong>integral calculus</strong>. The link between them — the{" "}
        <Highlight color="blue">Fundamental Theorem of Calculus</Highlight> — is what turns
        the definite integral from a limit of sums into a practical tool for science and
        engineering. Definite integrals are also used in economics, finance and
        probability. In this chapter we study both forms and their elementary properties,
        together with the standard techniques of integration.
      </p>
      <Callout type="note">
        <p>
          <strong>G.W. Leibniz (1646–1716)</strong> introduced the notation{" "}
          <Formula>{String.raw`\int f(x)\,dx`}</Formula> — an elongated{" "}
          <Formula>S</Formula> for <em>summa</em> — and the name{" "}
          <em>calculus integralis</em>. Both survive unchanged today.
        </p>
      </Callout>

      <h2 id="h-7-2">7.2 Integration as an Inverse Process of Differentiation</h2>
      <p>
        Instead of differentiating a function we are handed its derivative and asked for
        the original function. Three known derivatives immediately give three anti
        derivatives.
      </p>
      <TableCard
        title="Read each row forwards, then backwards"
        headers={["Derivative you know", "Anti derivative it gives"]}
        rows={[
          {
            cells: [
              <Formula key="d1">{String.raw`\frac{d}{dx}\sin x = \cos x`}</Formula>,
              <Formula key="i1">{String.raw`\int \cos x\,dx = \sin x + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="d2">{String.raw`\frac{d}{dx}\left(\frac{x^3}{3}\right) = x^2`}</Formula>,
              <Formula key="i2">{String.raw`\int x^2\,dx = \frac{x^3}{3} + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="d3">{String.raw`\frac{d}{dx}e^x = e^x`}</Formula>,
              <Formula key="i3">{String.raw`\int e^x\,dx = e^x + C`}</Formula>,
            ],
          },
        ]}
        caption="The constant C appears because the derivative of any constant is zero — every anti derivative comes with a free constant."
      />
      <p>
        So <Formula>{String.raw`\sin x`}</Formula> is an anti derivative of{" "}
        <Formula>{String.raw`\cos x`}</Formula>,{" "}
        <Formula>{String.raw`x^3/3`}</Formula> is an anti derivative of{" "}
        <Formula>{String.raw`x^2`}</Formula>, and <Formula>{String.raw`e^x`}</Formula> is
        its own anti derivative. And because{" "}
        <Formula>{String.raw`\frac{d}{dx}(C) = 0`}</Formula>, we may add any real number{" "}
        <Formula>C</Formula> to each answer.
      </p>
      <FormulaBlock
        latex={String.raw`\frac{d}{dx}\left[\sin x + C\right] = \cos x,\qquad \frac{d}{dx}\left[\frac{x^3}{3} + C\right] = x^2,\qquad \frac{d}{dx}\left[e^x + C\right] = e^x`}
        label="Same derivative, any constant"
      />
      <Callout type="note">
        <p>
          Anti derivatives are therefore <strong>not unique</strong>. There are infinitely
          many, obtained by choosing <Formula>C</Formula> freely from{" "}
          <Formula>{String.raw`\mathbb{R}`}</Formula>. This is why{" "}
          <Formula>C</Formula> is called the{" "}
          <Highlight color="yellow">arbitrary constant</Highlight> — or the{" "}
          <strong>constant of integration</strong>. Varying{" "}
          <Formula>C</Formula> slides the curve up and down without changing its slope at
          any point.
        </p>
      </Callout>
      <FormulaBlock
        latex={String.raw`\int f(x)\,dx = F(x) + C \quad\Longleftrightarrow\quad \frac{d}{dx}\left[F(x) + C\right] = f(x),\ \ x \in I`}
        label="Definition — indefinite integral"
        important
      />
      <p>
        So <Formula>{String.raw`\{F(x) + C : C \in \mathbb{R}\}`}</Formula> is the whole{" "}
        <strong>family of anti derivatives</strong> of <Formula>f</Formula>. Every member
        of the family has the same graph shape; only the vertical position differs.
      </p>

      <KeyPoint title="Two functions with the same derivative differ by a constant">
        <p>
          Let <Formula>g</Formula> and <Formula>h</Formula> have the same derivative on{" "}
          <Formula>I</Formula>, and put{" "}
          <Formula>{String.raw`\phi(x) = g(x) - h(x)`}</Formula>. Then{" "}
          <Formula>{String.raw`\phi'(x) = 0`}</Formula> on{" "}
          <Formula>I</Formula>, and a function whose derivative vanishes on an interval is
          constant there. Hence{" "}
          <Formula>{String.raw`g(x) = h(x) + C`}</Formula>. This is exactly why two
          anti derivatives of the same function can differ only in the constant.
        </p>
      </KeyPoint>

      <h3 id="h-7-2-a">The standard integrals</h3>
      <p>
        Every entry below is a derivative formula read backwards. They are the working
        table for the whole chapter — learn them cold, because every technique later on is
        judged by whether it lands on one of these rows.
      </p>
      <TableCard
        title="Standard integrals (anti derivatives)"
        headers={["Integral", "Value"]}
        rows={[
          {
            cells: [
              <Formula key="s1">{String.raw`\int x^n\,dx,\ n \neq -1`}</Formula>,
              <Formula key="v1">{String.raw`\frac{x^{n+1}}{n+1} + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s2">{String.raw`\int 1\,dx`}</Formula>,
              <Formula key="v2">{String.raw`x + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s3">{String.raw`\int \cos x\,dx`}</Formula>,
              <Formula key="v3">{String.raw`\sin x + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s4">{String.raw`\int \sin x\,dx`}</Formula>,
              <Formula key="v4">{String.raw`-\cos x + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s5">{String.raw`\int \sec^2 x\,dx`}</Formula>,
              <Formula key="v5">{String.raw`\tan x + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s6">{String.raw`\int \operatorname{cosec}^2 x\,dx`}</Formula>,
              <Formula key="v6">{String.raw`-\cot x + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s7">{String.raw`\int \sec x \tan x\,dx`}</Formula>,
              <Formula key="v7">{String.raw`\sec x + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s8">{String.raw`\int \operatorname{cosec} x \cot x\,dx`}</Formula>,
              <Formula key="v8">{String.raw`-\operatorname{cosec} x + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s9">{String.raw`\int \frac{dx}{\sqrt{1-x^2}}`}</Formula>,
              <Formula key="v9">{String.raw`\sin^{-1}x + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s10">{String.raw`\int \frac{dx}{\sqrt{1-x^2}}`}</Formula>,
              <Formula key="v10">{String.raw`-\cos^{-1}x + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s11">{String.raw`\int \frac{dx}{1+x^2}`}</Formula>,
              <Formula key="v11">{String.raw`\tan^{-1}x + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s12">{String.raw`\int e^x\,dx`}</Formula>,
              <Formula key="v12">{String.raw`e^x + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s13">{String.raw`\int \frac{dx}{x}`}</Formula>,
              <Formula key="v13">{String.raw`\log|x| + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s14">{String.raw`\int a^x\,dx,\ a>0,\ a\neq 1`}</Formula>,
              <Formula key="v14">{String.raw`\frac{a^x}{\log a} + C`}</Formula>,
            ],
          },
        ]}
        caption="The two entries for 1/√(1−x²) are both correct — they differ by the constant π/2, which is absorbed into C."
      />
      <Callout type="tip">
        <p>
          In practice we never write the interval of definition. But in a specific problem
          the interval matters: <Formula>{String.raw`\log|x|`}</Formula> is needed because{" "}
          <Formula>{String.raw`1/x`}</Formula> has one anti derivative on{" "}
          <Formula>{String.raw`x>0`}</Formula> and another on{" "}
          <Formula>{String.raw`x<0`}</Formula>, and the modulus handles both at once.
        </p>
      </Callout>

      <h3 id="h-7-2-1">7.2.1 Some properties of the indefinite integral</h3>
      <p>
        These five properties are what make integration mechanical rather than a guessing
        game. Each is proved by differentiating both sides and using the fact that two
        anti derivatives of the same thing differ by a constant.
      </p>
      <TableCard
        title="Properties of indefinite integrals"
        headers={["", "Property"]}
        rows={[
          {
            cells: [
              <span key="p1n">(I)</span>,
              <span key="p1v">
                <Formula>{String.raw`\frac{d}{dx}\int f(x)\,dx = f(x)`}</Formula> and{" "}
                <Formula>{String.raw`\int f'(x)\,dx = f(x) + C`}</Formula> — differentiation
                and integration undo each other
              </span>,
            ],
          },
          {
            cells: [
              <span key="p2n">(II)</span>,
              <span key="p2v">
                Two integrals with the same derivative give the{" "}
                <strong>same family of curves</strong>, so they are equivalent:{" "}
                <Formula>{String.raw`\int f = \int g`}</Formula> means their families{" "}
                coincide
              </span>,
            ],
          },
          {
            cells: [
              <span key="p3n">(III)</span>,
              <Formula key="p3v">{String.raw`\int \left[f(x) + g(x)\right]dx = \int f(x)\,dx + \int g(x)\,dx`}</Formula>,
            ],
          },
          {
            cells: [
              <span key="p4n">(IV)</span>,
              <Formula key="p4v">{String.raw`\int k\,f(x)\,dx = k\int f(x)\,dx`}</Formula>,
            ],
          },
          {
            cells: [
              <span key="p5n">(V)</span>,
              <Formula key="p5v">{String.raw`\int \left[k_1f_1 + k_2f_2 + \cdots + k_nf_n\right]dx = k_1\int f_1\,dx + k_2\int f_2\,dx + \cdots + k_n\int f_n\,dx`}</Formula>,
            ],
          },
        ]}
        caption="Property (V) is the one you use constantly: split a sum, pull constants out, integrate each piece separately."
      />

      <Expandable title="Examples 1 to 4 — NCERT">
        <KeyPoint title="Example 1">
          <p>
            Write an anti derivative for each function using the method of inspection: (i){" "}
            <Formula>{String.raw`\cos 2x`}</Formula> (ii){" "}
            <Formula>{String.raw`3x^2 + 4x^3`}</Formula> (iii){" "}
            <Formula>{String.raw`\frac{1}{x},\ x \neq 0`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong>
          </p>
          <p>
            (i) We look for a function whose derivative is <Formula>{String.raw`\cos 2x`}</Formula>.
            Now{" "}
            <Formula>{String.raw`\frac{d}{dx}\sin 2x = 2\cos 2x`}</Formula>, so{" "}
            <Formula>{String.raw`\cos 2x = \frac{1}{2}\frac{d}{dx}(\sin 2x) = \frac{d}{dx}\left(\frac{1}{2}\sin 2x\right)`}</Formula>.
            Hence an anti derivative of <Formula>{String.raw`\cos 2x`}</Formula> is{" "}
            <Formula>{String.raw`\frac{1}{2}\sin 2x`}</Formula>.
          </p>
          <p>
            (ii) Since{" "}
            <Formula>{String.raw`\frac{d}{dx}(x^3 + x^4) = 3x^2 + 4x^3`}</Formula>, an anti
            derivative of <Formula>{String.raw`3x^2 + 4x^3`}</Formula> is{" "}
            <Formula>{String.raw`x^3 + x^4`}</Formula>.
          </p>
          <p>
            (iii) We know{" "}
            <Formula>{String.raw`\frac{d}{dx}(\log x) = \frac{1}{x}`}</Formula> for{" "}
            <Formula>{String.raw`x>0`}</Formula> and{" "}
            <Formula>{String.raw`\frac{d}{dx}\left[\log(-x)\right] = \frac{1}{x}`}</Formula>{" "}
            for <Formula>{String.raw`x<0`}</Formula>. Combining,{" "}
            <Formula>{String.raw`\frac{d}{dx}\log|x| = \frac{1}{x},\ x\neq 0`}</Formula>, so
            an anti derivative of <Formula>{String.raw`1/x`}</Formula> is{" "}
            <Formula>{String.raw`\log|x|`}</Formula>.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 2">
          <p>
            Find (i){" "}
            <Formula>{String.raw`\int \left(x^{3/2} - x^{-1/2}\right)dx`}</Formula> (ii){" "}
            <Formula>{String.raw`\int \left(x^{2/3} + 1\right)dx`}</Formula> (iii){" "}
            <Formula>{String.raw`\int \left(x^{3/2} + 2e^x - \frac{1}{x}\right)dx`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong>
          </p>
          <p>
            (i) Split and use the power rule:{" "}
            <Formula>{String.raw`\int x^{3/2}dx - \int x^{-1/2}dx = \frac{x^{5/2}}{5/2} - \frac{x^{1/2}}{1/2} + C = \frac{2}{5}x^{5/2} - 2x^{1/2} + C`}</Formula>.
          </p>
          <p>
            (ii){" "}
            <Formula>{String.raw`\int \left(x^{2/3} + 1\right)dx = \frac{x^{5/3}}{5/3} + x + C = \frac{3}{5}x^{5/3} + x + C`}</Formula>.
          </p>
          <p>
            (iii){" "}
            <Formula>{String.raw`\int x^{3/2}dx + 2\int e^x\,dx - \int \frac{dx}{x} = \frac{2}{5}x^{5/2} + 2e^x - \log|x| + C`}</Formula>.
          </p>
          <p>
            <em>Note:</em> from now on only one constant of integration is written in the
            final answer — the separate constants from each piece are absorbed into it.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 3">
          <p>
            Find (i){" "}
            <Formula>{String.raw`\int (\sin x + \cos x)\,dx`}</Formula> (ii){" "}
            <Formula>{String.raw`\int \operatorname{cosec} x\,(\operatorname{cosec} x + \cot x)\,dx`}</Formula>{" "}
            (iii){" "}
            <Formula>{String.raw`\int \frac{1 - \sin x}{\cos^2 x}\,dx`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong>
          </p>
          <p>
            (i){" "}
            <Formula>{String.raw`\int \sin x\,dx + \int \cos x\,dx = -\cos x + \sin x + C`}</Formula>.
          </p>
          <p>
            (ii) Expand first:{" "}
            <Formula>{String.raw`\int \left(\operatorname{cosec}^2 x + \operatorname{cosec} x\cot x\right)dx = -\cot x - \operatorname{cosec} x + C`}</Formula>.
          </p>
          <p>
            (iii) Split the fraction:{" "}
            <Formula>{String.raw`\int \frac{dx}{\cos^2 x} - \int \frac{\sin x}{\cos^2 x}dx = \int \sec^2 x\,dx - \int \sec x \tan x\,dx = \tan x - \sec x + C`}</Formula>.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 4">
          <p>
            Find the anti derivative <Formula>F</Formula> of{" "}
            <Formula>{String.raw`f(x) = 4x^3 - 6`}</Formula> where{" "}
            <Formula>{String.raw`F(0) = 3`}</Formula>.
          </p>
          <p>
            <strong>Solution:</strong> One anti derivative of{" "}
            <Formula>{String.raw`4x^3 - 6`}</Formula> is{" "}
            <Formula>{String.raw`x^4 - 6x`}</Formula>, since{" "}
            <Formula>{String.raw`\frac{d}{dx}(x^4 - 6x) = 4x^3 - 6`}</Formula>. The general
            anti derivative is therefore{" "}
            <Formula>{String.raw`F(x) = x^4 - 6x + C`}</Formula>.
          </p>
          <p>
            The condition <Formula>{String.raw`F(0) = 3`}</Formula> gives{" "}
            <Formula>{String.raw`3 = 0 - 0 + C`}</Formula>, so{" "}
            <Formula>{String.raw`C = 3`}</Formula>. The unique required anti derivative is{" "}
            <Formula>{String.raw`F(x) = x^4 - 6x + 3`}</Formula>.
          </p>
        </KeyPoint>
        <Callout type="note">
          <p>
            A condition like <Formula>{String.raw`F(0) = 3`}</Formula> pins down one member
            of the family. Without such a condition the answer remains a one-parameter
            family — and some functions, such as{" "}
            <Formula>{String.raw`e^{-x^2}`}</Formula>, have no anti derivative expressible
            in elementary functions at all.
          </p>
        </Callout>
      </Expandable>

      <Expandable title="Exercise 7.1">
        <ExerciseQa
          questions={[
            <>
              Find an anti derivative of <Formula>{String.raw`\sin 2x`}</Formula> by the
              method of inspection.
            </>,
            <>
              Find an anti derivative of <Formula>{String.raw`\cos 3x`}</Formula>.
            </>,
            <>
              Find an anti derivative of <Formula>{String.raw`e^{2x}`}</Formula>.
            </>,
            <>
              Find an anti derivative of <Formula>{String.raw`(ax + b)^2`}</Formula>.
            </>,
            <>
              Find an anti derivative of{" "}
              <Formula>{String.raw`\sin 2x - 4e^{3x}`}</Formula>.
            </>,
            <>
              Find <Formula>{String.raw`\int \left(4e^{3x} + 1\right)dx`}</Formula>.
            </>,
            <>
              Find <Formula>{String.raw`\int x^2\left(1 - \frac{1}{x^2}\right)dx`}</Formula>.
            </>,
            <>
              Find <Formula>{String.raw`\int \left(ax^2 + bx + c\right)dx`}</Formula>.
            </>,
            <>
              Find <Formula>{String.raw`\int \left(2x^2 + e^x\right)dx`}</Formula>.
            </>,
            <>
              Find{" "}
              <Formula>{String.raw`\int \left(\sqrt{x} - \frac{1}{\sqrt{x}}\right)^2 dx`}</Formula>.
            </>,
            <>
              Find <Formula>{String.raw`\int \frac{x^3 + 5x^2 - 4}{x^2}\,dx`}</Formula>.
            </>,
            <>
              Find <Formula>{String.raw`\int \frac{x^3 + 3x + 4}{\sqrt{x}}\,dx`}</Formula>.
            </>,
            <>
              Find <Formula>{String.raw`\int \frac{x^3 - x^2 + x - 1}{x - 1}\,dx`}</Formula>.
            </>,
            <>
              Find <Formula>{String.raw`\int (1 - x)\sqrt{x}\,dx`}</Formula>.
            </>,
            <>
              Find <Formula>{String.raw`\int \sec x\,(\sec x + \tan x)\,dx`}</Formula>.
            </>,
            <>
              Find <Formula>{String.raw`\int \frac{\sec^2 x}{\operatorname{cosec}^2 x}\,dx`}</Formula>.
            </>,
            <>
              Find <Formula>{String.raw`\int \frac{2 - 3\sin x}{\cos^2 x}\,dx`}</Formula>.
            </>,
            <>
              The anti derivative of{" "}
              <Formula>{String.raw`\left(\sqrt{x} + \frac{1}{\sqrt{x}}\right)`}</Formula>{" "}
              equals (A){" "}
              <Formula>{String.raw`\frac{1}{3}x^{1/3} + 2x^{1/2} + C`}</Formula> (B){" "}
              <Formula>{String.raw`\frac{2}{3}x^{2/3} + \frac{1}{2}x^2 + C`}</Formula> (C){" "}
              <Formula>{String.raw`\frac{2}{3}x^{3/2} + 2x^{1/2} + C`}</Formula> (D){" "}
              <Formula>{String.raw`\frac{3}{2}x^{3/2} + \frac{1}{2}x^{1/2} + C`}</Formula>
            </>,
            <>
              If{" "}
              <Formula>{String.raw`\frac{d}{dx}f(x) = 4x^3 - \frac{3}{x^4}`}</Formula> and{" "}
              <Formula>{String.raw`f(2) = 0`}</Formula>, then <Formula>f(x)</Formula> is (A){" "}
              <Formula>{String.raw`x^4 + \frac{1}{x^3} - \frac{129}{8}`}</Formula> (B){" "}
              <Formula>{String.raw`x^4 + \frac{1}{x^3} + \frac{129}{8}`}</Formula> (C){" "}
              <Formula>{String.raw`x^4 - \frac{1}{x^3} + \frac{129}{8}`}</Formula> (D) none
              of these
            </>,
          ]}
          answers={[
            <>
              <Formula>{String.raw`-\frac{1}{2}\cos 2x + C`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{1}{3}\sin 3x + C`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{1}{2}e^{2x} + C`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{1}{3a}(ax + b)^3 + C`}</Formula>
            </>,
            <>
              <Formula>{String.raw`-\frac{1}{2}\cos 2x - \frac{4}{3}e^{3x} + C`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{4}{3}e^{3x} + x + C`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{x^3}{3} - x + C`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{a}{3}x^3 + \frac{b}{2}x^2 + cx + C`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{2}{3}x^3 + e^x + C`}</Formula>
            </>,
            <>
              Expand to <Formula>{String.raw`x - 2 + \frac{1}{x}`}</Formula>: answer{" "}
              <Formula>{String.raw`\frac{x^2}{2} - 2x + \log|x| + C`}</Formula>.
            </>,
            <>
              Divide first:{" "}
              <Formula>{String.raw`x + 5 - \frac{4}{x^2}`}</Formula>, so{" "}
              <Formula>{String.raw`\frac{x^2}{2} + 5x + \frac{4}{x} + C`}</Formula>.
            </>,
            <>
              Split: <Formula>{String.raw`x^{5/2} + 3x^{1/2} + 4x^{-1/2}`}</Formula>, so{" "}
              <Formula>{String.raw`\frac{2}{5}x^{5/2} + 2x^{3/2} + 8x^{1/2} + C`}</Formula>.
            </>,
            <>
              Factor:{" "}
              <Formula>{String.raw`x^3 - x^2 + x - 1 = (x - 1)(x^2 + 1)`}</Formula>, so{" "}
              <Formula>{String.raw`\int (x^2 + 1)\,dx = \frac{x^3}{3} + x + C`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`\int \left(x^{1/2} - x^{3/2}\right)dx = \frac{2}{3}x^{3/2} - \frac{2}{5}x^{5/2} + C`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\tan x + \sec x + C`}</Formula>
            </>,
            <>
              The integrand is <Formula>{String.raw`\tan^2 x`}</Formula>, so{" "}
              <Formula>{String.raw`\tan x - x + C`}</Formula>.
            </>,
            <>
              Split into <Formula>{String.raw`2\sec^2 x - 3\sec x\tan x`}</Formula>: answer{" "}
              <Formula>{String.raw`2\tan x - 3\sec x + C`}</Formula>.
            </>,
            <>(C)</>,
            <>(A)</>,
          ]}
        />
      </Expandable>
    </>
  );
}
