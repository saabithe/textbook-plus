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
      <p>Topics covered in this chapter:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>🔄 Introduction</li>
        <li>🔄 Integration by substitution</li>
        <li>📐 Integration using trigonometric identities</li>
        <li>🔍 Integrals of some particular functions</li>
        <li>✂️ Integration by parts</li>
        <li>🧩 Integration by partial fractions</li>
        <li>📏 Definite integrals</li>
      </ul>
      <p className="mt-4">
        <strong>What is Integration?</strong> Integration is the inverse process of
        differentiation.
      </p>
      <p>
        If <Formula>{String.raw`\frac{d}{dx}(\sin x)=\cos x`}</Formula>, then{" "}
        <Formula>{String.raw`\int \cos x\,dx=\sin x+C`}</Formula>.
      </p>
      <p>
        General form: if <Formula>{String.raw`\frac{d}{dx}[f(x)]=F(x)`}</Formula>, then{" "}
        <Formula>{String.raw`\int F(x)\,dx=f(x)+C`}</Formula>.
      </p>


      <h2 id="h-7-c">A quick note on the constant of integration</h2>
      <p>
        The derivative of any constant is zero, so every indefinite integral
        comes with an arbitrary constant <Formula>{String.raw`C`}</Formula>.
      </p>
      <p>
        <strong>Example.</strong>{" "}
        <Formula>{String.raw`\int \cos x\,dx = \sin x + C`}</Formula>, since the
        derivative of <Formula>{String.raw`\sin x`}</Formula>,{" "}
        <Formula>{String.raw`\sin x + 5`}</Formula> or{" "}
        <Formula>{String.raw`\sin x + 10`}</Formula> is always{" "}
        <Formula>{String.raw`\cos x`}</Formula>.
      </p>
      <p className="text-muted-foreground">
        Rule: always add <Formula>{String.raw`C`}</Formula> to an indefinite integral.
      </p>

      <h2 id="h-7-types">Two types of integrals</h2>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard
          icon="∞"
          title="Indefinite integral"
          definition="A family of functions differing by a constant C. Example: ∫ cos x dx."
        />
        <FactCard
          icon="∑"
          title="Definite integral"
          definition="A single number obtained by evaluating between limits a and b. Example: ∫_0^π cos x dx."
        />
      </div>

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
          {
            cells: [
              <Formula key="s15">{String.raw`\int \frac{dx}{a^2+x^2},\ a>0`}</Formula>,
              <Formula key="v15">{String.raw`\frac{1}{a}\tan^{-1}\frac{x}{a} + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s16">{String.raw`\int \frac{dx}{a^2-x^2}`}</Formula>,
              <Formula key="v16">{String.raw`\frac{1}{2a}\log\left|\frac{a+x}{a-x}\right| + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s17">{String.raw`\int \frac{dx}{x^2-a^2}`}</Formula>,
              <Formula key="v17">{String.raw`\frac{1}{2a}\log\left|\frac{x-a}{x+a}\right| + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s18">{String.raw`\int \frac{dx}{\sqrt{a^2-x^2}}`}</Formula>,
              <Formula key="v18">{String.raw`\sin^{-1}\frac{x}{a} + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s19">{String.raw`\int \frac{dx}{\sqrt{x^2-a^2}}`}</Formula>,
              <Formula key="v19">{String.raw`\log\left|x+\sqrt{x^2-a^2}\right| + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s20">{String.raw`\int \frac{dx}{x\sqrt{x^2-1}}`}</Formula>,
              <Formula key="v20">{String.raw`\sec^{-1}|x| + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s21">{String.raw`\int \frac{dx}{\sqrt{x^2+a^2}}`}</Formula>,
              <Formula key="v21">{String.raw`\log\left|x+\sqrt{x^2+a^2}\right| + C`}</Formula>,
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
          {
            cells: [
              <Formula key="s22">{String.raw`\int 0\,dx`}</Formula>,
              <Formula key="v22">{String.raw`C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s23">{String.raw`\int k\,dx,\ k\in\mathbb{R}`}</Formula>,
              <Formula key="v23">{String.raw`kx + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s24">{String.raw`\int \sqrt{x}\,dx`}</Formula>,
              <Formula key="v24">{String.raw`\frac{2}{3}x^{3/2} + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s25">{String.raw`\int \frac{1}{x^{2}}\,dx`}</Formula>,
              <Formula key="v25">{String.raw`-\frac{1}{x} + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s26">{String.raw`\int \frac{1}{\sqrt{x}}\,dx`}</Formula>,
              <Formula key="v26">{String.raw`2\sqrt{x} + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s27">{String.raw`\int \tan x\,dx`}</Formula>,
              <Formula key="v27">{String.raw`-\log|\cos x| + C = \log|\sec x| + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s28">{String.raw`\int \cot x\,dx`}</Formula>,
              <Formula key="v28">{String.raw`\log|\sin x| + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s29">{String.raw`\int \sec x\,dx`}</Formula>,
              <Formula key="v29">{String.raw`\log|\sec x+\tan x| + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s30">{String.raw`\int \csc x\,dx`}</Formula>,
              <Formula key="v30">{String.raw`\log|\csc x-\cot x| + C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="s31">{String.raw`\int e^{ax}\,dx,\ a\neq 0`}</Formula>,
              <Formula key="v31">{String.raw`\frac{e^{ax}}{a} + C`}</Formula>,
            ],
          },
        ]}
        caption="sin⁻¹ and −cos⁻¹ differ by π/2, absorbed into C; the general forms below scale by a."
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

      <KeyPoint title="Linearity of the indefinite integral">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <Formula>{String.raw`\int [f(x)+g(x)]\,dx = \int f(x)\,dx + \int g(x)\,dx`}</Formula>
          </li>
          <li>
            <Formula>{String.raw`\int [f(x)-g(x)]\,dx = \int f(x)\,dx - \int g(x)\,dx`}</Formula>
          </li>
          <li>
            <Formula>{String.raw`\int k\,f(x)\,dx = k\int f(x)\,dx,\quad k\in\mathbb{R}`}</Formula>
          </li>
        </ul>
      </KeyPoint>

      <h2 id="h-7-3">7.3 Methods of Integration</h2>
      <p>
        The table in 7.2 handles integrands that are already standard. Real problems
        arrive disguised, and four reductions remove the disguise. Everything after this
        point is bookkeeping: recognise the pattern, apply the right reduction, and land
        back on a row of the standard table.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard
          icon="1"
          title="Substitution"
          definition="Undoes the chain rule. Spot an inner function whose derivative is also sitting in the integrand, and rename that inner function as a single letter."
        />
        <FactCard
          icon="2"
          title="Trigonometric identities"
          definition="Turns products and powers of sines and cosines into sums of single angles, which then integrate term by term."
        />
        <FactCard
          icon="3"
          title="Partial fractions"
          definition="Splits a rational function into simpler fractions whose integrals are only logarithms, inverse tangents and powers."
        />
        <FactCard
          icon="4"
          title="Integration by parts"
          definition="Undoes the product rule: it shifts the derivative from the awkward factor onto the easy one, one step at a time."
        />
      </div>

      <h3 id="h-7-3-1">7.3.1 Integration by substitution</h3>
      <p>
        The chain rule says that differentiating{" "}
        <Formula>{String.raw`F(g(x))`}</Formula> multiplies by{" "}
        <Formula>{String.raw`g'(x)`}</Formula>. Integration reverses that: if a factor{" "}
        <Formula>{String.raw`g'(x)`}</Formula> is present beside a function of{" "}
        <Formula>{String.raw`g(x)`}</Formula>, the variable can be changed.
      </p>
      <FormulaBlock
        latex={String.raw`\int f\bigl(g(x)\bigr)\,g'(x)\,dx=\int f(t)\,dt,\qquad t=g(x)`}
        important
        label="Substitution rule"
      />
      <p>
        In practice the differential is written directly. Putting{" "}
        <Formula>{String.raw`t=g(x)`}</Formula> gives{" "}
        <Formula>{String.raw`dt=g'(x)\,dx`}</Formula>, so the whole group{" "}
        <Formula>{String.raw`g'(x)\,dx`}</Formula> is replaced by{" "}
        <Formula>{String.raw`dt`}</Formula>. The integrand must then involve{" "}
        <Formula>{String.raw`x`}</Formula> nowhere else.
      </p>
      <TableCard
        title="What to substitute — read the left column, then reach for the right"
        headers={["If the integrand contains", "Put"]}
        rows={[
          {
            cells: [
              "a linear expression inside a function",
              <Formula key="s1">{String.raw`t=ax+b,\qquad dx=\frac{dt}{a}`}</Formula>,
            ],
          },
          {
            cells: [
              <span key="p2">
                <Formula>{String.raw`x^{n-1}`}</Formula> beside something in{" "}
                <Formula>{String.raw`x^{n}`}</Formula>
              </span>,
              <Formula key="s2">{String.raw`t=x^{n},\qquad dt=n\,x^{n-1}\,dx`}</Formula>,
            ],
          },
          {
            cells: [
              "a function of a function, with that function's derivative outside",
              <Formula key="s3">{String.raw`t=f(x),\qquad dt=f'(x)\,dx`}</Formula>,
            ],
          },
          {
            cells: [
              "a numerator that is the derivative of the denominator",
              <Formula key="s4">{String.raw`t=(\text{denominator}),\qquad \text{answer}=\log|t|+C`}</Formula>,
            ],
          },
          {
            cells: [
              <span key="p5">
                <Formula>{String.raw`e^{x}`}</Formula> beside a function of{" "}
                <Formula>{String.raw`e^{x}`}</Formula>
              </span>,
              <Formula key="s5">{String.raw`t=e^{x},\qquad dt=e^{x}\,dx`}</Formula>,
            ],
          },
          {
            cells: [
              <span key="p6">
                <Formula>{String.raw`\frac{1}{x}`}</Formula> beside a function of{" "}
                <Formula>{String.raw`\log x`}</Formula>
              </span>,
              <Formula key="s6">{String.raw`t=\log x,\qquad dt=\frac{dx}{x}`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="p7">{String.raw`\cos x`}</Formula>,
              <Formula key="s7">{String.raw`t=\sin x,\qquad dt=\cos x\,dx`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="p8">{String.raw`\sin x`}</Formula>,
              <Formula key="s8">{String.raw`t=\cos x,\qquad dt=-\sin x\,dx`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="p9">{String.raw`\sec^{2}x`}</Formula>,
              <Formula key="s9">{String.raw`t=\tan x,\qquad dt=\sec^{2}x\,dx`}</Formula>,
            ],
          },
        ]}
        caption="If no row fits, manipulate the integrand algebraically first — expand, divide out, or complete the square."
      />

      <Expandable title="Worked Examples 5–8 · Substitution">
        <div className="space-y-5">
          <div>
            <p>
              <strong>Example 5.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{2x}{1+x^{2}}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> The numerator is exactly the derivative of the
              denominator. Put <Formula>{String.raw`t=1+x^{2}`}</Formula>, so{" "}
              <Formula>{String.raw`dt=2x\,dx`}</Formula>.
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{2x}{1+x^{2}}\,dx=\int \frac{dt}{t}=\log|t|+C=\log(1+x^{2})+C`}
            />
            <p>
              No modulus is needed because{" "}
              <Formula>{String.raw`1+x^{2}>0`}</Formula> for every{" "}
              <Formula>{String.raw`x`}</Formula>.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 6.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{(\log x)^{2}}{x}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Put <Formula>{String.raw`t=\log x`}</Formula>, so{" "}
              <Formula>{String.raw`dt=\frac{dx}{x}`}</Formula>. Then
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{(\log x)^{2}}{x}\,dx=\int t^{2}\,dt=\frac{t^{3}}{3}+C=\frac{(\log x)^{3}}{3}+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 7.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{e^{\tan^{-1}x}}{1+x^{2}}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Put{" "}
              <Formula>{String.raw`t=\tan^{-1}x`}</Formula>, so{" "}
              <Formula>{String.raw`dt=\frac{dx}{1+x^{2}}`}</Formula>. Then
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{e^{\tan^{-1}x}}{1+x^{2}}\,dx=\int e^{t}\,dt=e^{t}+C=e^{\tan^{-1}x}+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 8.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{x^{2}}{1+x^{6}}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Write{" "}
              <Formula>{String.raw`x^{6}=(x^{3})^{2}`}</Formula> and put{" "}
              <Formula>{String.raw`t=x^{3}`}</Formula>, so{" "}
              <Formula>{String.raw`dt=3x^{2}\,dx`}</Formula>. Then
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{x^{2}}{1+x^{6}}\,dx=\frac{1}{3}\int \frac{dt}{1+t^{2}}=\frac{1}{3}\tan^{-1}(x^{3})+C`}
            />
            <p>
              The trick was spotting that{" "}
              <Formula>{String.raw`x^{6}`}</Formula> is a square in disguise — always look
              for a power that is twice another power.
            </p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 7.2">
        <ExerciseQa
          questions={[
            <span key="q1">
              <Formula>{String.raw`\int \frac{2x}{1+x^{2}}\,dx`}</Formula>
            </span>,
            <span key="q2">
              <Formula>{String.raw`\int \frac{(\log x)^{2}}{x}\,dx`}</Formula>
            </span>,
            <span key="q3">
              <Formula>{String.raw`\int \frac{1}{x+x\log x}\,dx`}</Formula>
            </span>,
            <span key="q4">
              <Formula>{String.raw`\int \sin x\,\sin(\cos x)\,dx`}</Formula>
            </span>,
            <span key="q5">
              <Formula>{String.raw`\int \sin(ax+b)\cos(ax+b)\,dx`}</Formula>
            </span>,
            <span key="q6">
              <Formula>{String.raw`\int \sqrt{ax+b}\,dx`}</Formula>
            </span>,
            <span key="q7">
              <Formula>{String.raw`\int x\sqrt{x+2}\,dx`}</Formula>
            </span>,
            <span key="q8">
              <Formula>{String.raw`\int x\sqrt{1+2x^{2}}\,dx`}</Formula>
            </span>,
            <span key="q9">
              <Formula>{String.raw`\int x^{2}e^{x^{3}}\,dx`}</Formula>
            </span>,
            <span key="q10">
              <Formula>{String.raw`\int \frac{2x}{(x^{2}+1)^{2}}\,dx`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`\log(1+x^{2})+C`}</Formula>
            </span>,
            <span key="a2">
              <Formula>{String.raw`\frac{(\log x)^{3}}{3}+C`}</Formula>
            </span>,
            <span key="a3">
              <Formula>{String.raw`\log|1+\log x|+C`}</Formula>
            </span>,
            <span key="a4">
              <Formula>{String.raw`\cos(\cos x)+C`}</Formula>
            </span>,
            <span key="a5">
              <Formula>{String.raw`-\frac{\cos 2(ax+b)}{4a}+C`}</Formula>
            </span>,
            <span key="a6">
              <Formula>{String.raw`\frac{2}{3a}(ax+b)^{3/2}+C`}</Formula>
            </span>,
            <span key="a7">
              <Formula>{String.raw`\frac{2}{5}(x+2)^{5/2}-\frac{4}{3}(x+2)^{3/2}+C`}</Formula>
            </span>,
            <span key="a8">
              <Formula>{String.raw`\frac{1}{6}(1+2x^{2})^{3/2}+C`}</Formula>
            </span>,
            <span key="a9">
              <Formula>{String.raw`\frac{1}{3}e^{x^{3}}+C`}</Formula>
            </span>,
            <span key="a10">
              <Formula>{String.raw`-\frac{1}{x^{2}+1}+C`}</Formula>
            </span>,
          ]}
        />
      </Expandable>

      <h3 id="h-7-3-2">7.3.2 Integration using trigonometric identities</h3>
      <p>
        A product or a power of sines and cosines has no direct standard integral — but
        every such expression can be rewritten as a sum of single-angle terms, and those
        integrate immediately. These are the identities actually used.
      </p>
      <TableCard
        title="Identities that reduce an integrand to standard form"
        headers={["Identity", "Use"]}
        rows={[
          {
            cells: [
              <Formula key="i1">{String.raw`\sin^{2}x=\frac{1-\cos 2x}{2}`}</Formula>,
              <span key="u1">removes the square of a sine</span>,
            ],
          },
          {
            cells: [
              <Formula key="i2">{String.raw`\cos^{2}x=\frac{1+\cos 2x}{2}`}</Formula>,
              <span key="u2">removes the square of a cosine</span>,
            ],
          },
          {
            cells: [
              <Formula key="i3">{String.raw`\sin^{3}x=\frac{3\sin x-\sin 3x}{4}`}</Formula>,
              <span key="u3">reduces an odd power</span>,
            ],
          },
          {
            cells: [
              <Formula key="i4">{String.raw`\cos^{3}x=\frac{3\cos x+\cos 3x}{4}`}</Formula>,
              <span key="u4">reduces an odd power</span>,
            ],
          },
          {
            cells: [
              <Formula key="i5">{String.raw`2\sin A\sin B=\cos(A-B)-\cos(A+B)`}</Formula>,
              <span key="u5">turns a product into a difference</span>,
            ],
          },
          {
            cells: [
              <Formula key="i6">{String.raw`2\cos A\cos B=\cos(A-B)+\cos(A+B)`}</Formula>,
              <span key="u6">turns a product into a sum</span>,
            ],
          },
          {
            cells: [
              <Formula key="i7">{String.raw`2\sin A\cos B=\sin(A+B)+\sin(A-B)`}</Formula>,
              <span key="u7">mixed product</span>,
            ],
          },
          {
            cells: [
              <Formula key="i8">{String.raw`\tan^{2}x=\sec^{2}x-1`}</Formula>,
              <span key="u8">converts an even power of tangent</span>,
            ],
          },
        ]}
        caption="For an even power of sine or cosine, halve the angle repeatedly; for a product, use the sum-to-product form."
      />

      <Expandable title="Worked Examples 9–12 · Trigonometric identities">
        <div className="space-y-5">
          <div>
            <p>
              <strong>Example 9.</strong> Find{" "}
              <Formula>{String.raw`\int \sin^{2}x\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Replace the square by the double-angle form:
            </p>
            <FormulaBlock
              latex={String.raw`\int \sin^{2}x\,dx=\frac{1}{2}\int (1-\cos 2x)\,dx=\frac{x}{2}-\frac{\sin 2x}{4}+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 10.</strong> Find{" "}
              <Formula>{String.raw`\int \sin 4x\,\sin 8x\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> With{" "}
              <Formula>{String.raw`A=4x`}</Formula> and{" "}
              <Formula>{String.raw`B=8x`}</Formula>, the product-to-sum identity gives{" "}
              <Formula>{String.raw`2\sin 4x\sin 8x=\cos 4x-\cos 12x`}</Formula>, so
            </p>
            <FormulaBlock
              latex={String.raw`\int \sin 4x\,\sin 8x\,dx=\frac{1}{2}\int(\cos 4x-\cos 12x)\,dx=\frac{\sin 4x}{8}-\frac{\sin 12x}{24}+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 11.</strong> Find{" "}
              <Formula>{String.raw`\int \sin^{3}x\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Use{" "}
              <Formula>{String.raw`\sin^{3}x=\frac{3\sin x-\sin 3x}{4}`}</Formula>:
            </p>
            <FormulaBlock
              latex={String.raw`\int \sin^{3}x\,dx=\frac{1}{4}\left(-3\cos x+\frac{\cos 3x}{3}\right)+C=-\frac{3}{4}\cos x+\frac{\cos 3x}{12}+C`}
            />
            <p>
              The alternative route, writing{" "}
              <Formula>{String.raw`\sin^{3}x=(1-\cos^{2}x)\sin x`}</Formula> and
              substituting <Formula>{String.raw`t=\cos x`}</Formula>, gives the same
              family of functions.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 12.</strong> Find{" "}
              <Formula>{String.raw`\int \sin^{2}x\cos^{2}x\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Use{" "}
              <Formula>{String.raw`\sin x\cos x=\frac{\sin 2x}{2}`}</Formula> first:
            </p>
            <FormulaBlock
              latex={String.raw`\sin^{2}x\cos^{2}x=\frac{\sin^{2}2x}{4}=\frac{1-\cos 4x}{8}`}
            />
            <FormulaBlock
              latex={String.raw`\int \sin^{2}x\cos^{2}x\,dx=\frac{x}{8}-\frac{\sin 4x}{32}+C`}
            />
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 7.3">
        <ExerciseQa
          questions={[
            <span key="q1">
              <Formula>{String.raw`\int \sin^{2}(2x+5)\,dx`}</Formula>
            </span>,
            <span key="q2">
              <Formula>{String.raw`\int \sin 4x\,\sin 8x\,dx`}</Formula>
            </span>,
            <span key="q3">
              <Formula>{String.raw`\int \cos 4x\,\cos 2x\,dx`}</Formula>
            </span>,
            <span key="q4">
              <Formula>{String.raw`\int \sin^{3}(2x+1)\,dx`}</Formula>
            </span>,
            <span key="q5">
              <Formula>{String.raw`\int \cos^{3}x\,dx`}</Formula>
            </span>,
            <span key="q6">
              <Formula>{String.raw`\int \sin^{2}x\cos^{2}x\,dx`}</Formula>
            </span>,
            <span key="q7">
              <Formula>{String.raw`\int \sin 2x\,\cos 3x\,dx`}</Formula>
            </span>,
            <span key="q8">
              <Formula>{String.raw`\int \tan^{2}x\,dx`}</Formula>
            </span>,
            <span key="q9">
              <Formula>{String.raw`\int \frac{\sin^{2}x}{1+\cos x}\,dx`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`\frac{x}{2}-\frac{\sin(4x+10)}{8}+C`}</Formula>
            </span>,
            <span key="a2">
              <Formula>{String.raw`\frac{\sin 4x}{8}-\frac{\sin 12x}{24}+C`}</Formula>
            </span>,
            <span key="a3">
              <Formula>{String.raw`\frac{\sin 2x}{4}+\frac{\sin 6x}{12}+C`}</Formula>
            </span>,
            <span key="a4">
              <Formula>{String.raw`-\frac{3}{8}\cos(2x+1)+\frac{1}{24}\cos(6x+3)+C`}</Formula>
            </span>,
            <span key="a5">
              <Formula>{String.raw`\sin x-\frac{\sin^{3}x}{3}+C`}</Formula>
            </span>,
            <span key="a6">
              <Formula>{String.raw`\frac{x}{8}-\frac{\sin 4x}{32}+C`}</Formula>
            </span>,
            <span key="a7">
              <Formula>{String.raw`\frac{\cos x}{2}-\frac{\cos 5x}{10}+C`}</Formula>
            </span>,
            <span key="a8">
              <Formula>{String.raw`\tan x-x+C`}</Formula>
            </span>,
            <span key="a9">
              <span key="a9b">
                Write the numerator as <Formula>{String.raw`1-\cos^{2}x`}</Formula> and
                cancel: <Formula>{String.raw`x-\sin x+C`}</Formula>.
              </span>
            </span>,
          ]}
        />
      </Expandable>

      <h2 id="h-7-4">7.4 Integrals of Some Particular Functions</h2>
      <p>
        A handful of rational and irrational integrands appear so often that their results
        are memorised in the same way as the standard table. Every entry below is proved
        by differentiating the right-hand side, and each is obtained from substitution or
        partial fractions — the results are worked out once, then quoted.
      </p>
      <TableCard
        title="Rational integrands"
        headers={["Integral", "Value"]}
        rows={[
          {
            cells: [
              <Formula key="r1">{String.raw`\int \frac{dx}{x^{2}-a^{2}}`}</Formula>,
              <Formula key="rv1">{String.raw`\frac{1}{2a}\log\left|\frac{x-a}{x+a}\right|+C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="r2">{String.raw`\int \frac{dx}{a^{2}-x^{2}}`}</Formula>,
              <Formula key="rv2">{String.raw`\frac{1}{2a}\log\left|\frac{a+x}{a-x}\right|+C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="r3">{String.raw`\int \frac{dx}{x^{2}+a^{2}}`}</Formula>,
              <Formula key="rv3">{String.raw`\frac{1}{a}\tan^{-1}\frac{x}{a}+C`}</Formula>,
            ],
          },
        ]}
        caption="Complete the square first whenever the denominator is quadratic but not of this exact shape."
      />
      <TableCard
        title="Irrational integrands"
        headers={["Integral", "Value"]}
        rows={[
          {
            cells: [
              <Formula key="t4">{String.raw`\int \frac{dx}{\sqrt{x^{2}-a^{2}}}`}</Formula>,
              <Formula key="tv4">{String.raw`\log\left|x+\sqrt{x^{2}-a^{2}}\right|+C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="t5">{String.raw`\int \frac{dx}{\sqrt{a^{2}-x^{2}}}`}</Formula>,
              <Formula key="tv5">{String.raw`\sin^{-1}\frac{x}{a}+C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="t6">{String.raw`\int \frac{dx}{\sqrt{x^{2}+a^{2}}}`}</Formula>,
              <Formula key="tv6">{String.raw`\log\left|x+\sqrt{x^{2}+a^{2}}\right|+C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="t7">{String.raw`\int \sqrt{x^{2}-a^{2}}\,dx`}</Formula>,
              <Formula key="tv7">{String.raw`\frac{x}{2}\sqrt{x^{2}-a^{2}}-\frac{a^{2}}{2}\log\left|x+\sqrt{x^{2}-a^{2}}\right|+C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="t8">{String.raw`\int \sqrt{a^{2}-x^{2}}\,dx`}</Formula>,
              <Formula key="tv8">{String.raw`\frac{x}{2}\sqrt{a^{2}-x^{2}}+\frac{a^{2}}{2}\sin^{-1}\frac{x}{a}+C`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="t9">{String.raw`\int \sqrt{x^{2}+a^{2}}\,dx`}</Formula>,
              <Formula key="tv9">{String.raw`\frac{x}{2}\sqrt{x^{2}+a^{2}}+\frac{a^{2}}{2}\log\left|x+\sqrt{x^{2}+a^{2}}\right|+C`}</Formula>,
            ],
          },
        ]}
        caption="The last three follow from integration by parts; they are easier to quote than to re-derive under time pressure."
      />

      <Expandable title="Worked Examples 13–17 · Particular functions">
        <div className="space-y-5">
          <div>
            <p>
              <strong>Example 13.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{dx}{x^{2}-16}`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Here{" "}
              <Formula>{String.raw`a^{2}=16`}</Formula>, so{" "}
              <Formula>{String.raw`a=4`}</Formula>. Quoting the first row:
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{dx}{x^{2}-16}=\frac{1}{8}\log\left|\frac{x-4}{x+4}\right|+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 14.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{dx}{9+25x^{2}}`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Put{" "}
              <Formula>{String.raw`u=5x`}</Formula>, so{" "}
              <Formula>{String.raw`dx=\frac{du}{5}`}</Formula> and the denominator becomes{" "}
              <Formula>{String.raw`9+u^{2}`}</Formula>, with{" "}
              <Formula>{String.raw`a=3`}</Formula>:
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{dx}{9+25x^{2}}=\frac{1}{5}\cdot\frac{1}{3}\tan^{-1}\frac{5x}{3}+C=\frac{1}{15}\tan^{-1}\frac{5x}{3}+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 15.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{dx}{\sqrt{9-25x^{2}}}`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> With{" "}
              <Formula>{String.raw`u=5x`}</Formula> and{" "}
              <Formula>{String.raw`a=3`}</Formula>, this is the inverse-sine row:
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{dx}{\sqrt{9-25x^{2}}}=\frac{1}{5}\sin^{-1}\frac{5x}{3}+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 16.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{dx}{x^{2}+2x+2}`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Complete the square in the denominator:
            </p>
            <FormulaBlock latex={String.raw`x^{2}+2x+2=(x+1)^{2}+1`} />
            <p>
              Put <Formula>{String.raw`u=x+1`}</Formula>, so{" "}
              <Formula>{String.raw`du=dx`}</Formula> and{" "}
              <Formula>{String.raw`a=1`}</Formula>:
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{dx}{x^{2}+2x+2}=\int \frac{du}{u^{2}+1}=\tan^{-1}(x+1)+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 17.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{dx}{\sqrt{x^{2}+2x+5}}`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Complete the square under the root:
            </p>
            <FormulaBlock latex={String.raw`x^{2}+2x+5=(x+1)^{2}+4=(x+1)^{2}+2^{2}`} />
            <p>
              With <Formula>{String.raw`u=x+1`}</Formula> and{" "}
              <Formula>{String.raw`a=2`}</Formula>, the root row gives
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{dx}{\sqrt{x^{2}+2x+5}}=\log\left|x+1+\sqrt{x^{2}+2x+5}\right|+C`}
            />
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 7.4">
        <ExerciseQa
          questions={[
            <span key="q1">
              <Formula>{String.raw`\int \frac{3x^{2}}{x^{6}+1}\,dx`}</Formula>
            </span>,
            <span key="q2">
              <Formula>{String.raw`\int \frac{dx}{\sqrt{1+4x^{2}}}`}</Formula>
            </span>,
            <span key="q3">
              <Formula>{String.raw`\int \frac{dx}{9-25x^{2}}`}</Formula>
            </span>,
            <span key="q4">
              <Formula>{String.raw`\int \frac{x^{2}}{1-x^{6}}\,dx`}</Formula>
            </span>,
            <span key="q5">
              <Formula>{String.raw`\int \frac{dx}{x^{2}+2x+2}`}</Formula>
            </span>,
            <span key="q6">
              <Formula>{String.raw`\int \sqrt{x^{2}+4x+6}\,dx`}</Formula>
            </span>,
            <span key="q7">
              <Formula>{String.raw`\int \frac{dx}{\sqrt{x^{2}-4x+5}}`}</Formula>
            </span>,
            <span key="q8">
              <Formula>{String.raw`\int \frac{x+2}{x^{2}+4x+5}\,dx`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`\tan^{-1}(x^{3})+C`}</Formula>
            </span>,
            <span key="a2">
              <Formula>{String.raw`\frac{1}{2}\log\left|2x+\sqrt{1+4x^{2}}\right|+C`}</Formula>
            </span>,
            <span key="a3">
              <Formula>{String.raw`\frac{1}{30}\log\left|\frac{3+5x}{3-5x}\right|+C`}</Formula>
            </span>,
            <span key="a4">
              <Formula>{String.raw`\frac{1}{6}\log\left|\frac{1+x^{3}}{1-x^{3}}\right|+C`}</Formula>
            </span>,
            <span key="a5">
              <Formula>{String.raw`\tan^{-1}(x+1)+C`}</Formula>
            </span>,
            <span key="a6">
              <Formula>{String.raw`\frac{x+2}{2}\sqrt{x^{2}+4x+6}+\log\left|x+2+\sqrt{x^{2}+4x+6}\right|+C`}</Formula>
            </span>,
            <span key="a7">
              <Formula>{String.raw`\log\left|x-2+\sqrt{x^{2}-4x+5}\right|+C`}</Formula>
            </span>,
            <span key="a8">
              <span key="a8b">
                The numerator is half the derivative of the denominator:{" "}
                <Formula>{String.raw`\frac{1}{2}\log(x^{2}+4x+5)+C`}</Formula>.
              </span>
            </span>,
          ]}
        />
      </Expandable>

      <h2 id="h-7-5">7.5 Integration by Partial Fractions</h2>
      <p>
        A rational function — one polynomial divided by another — is not immediately
        integrable. But every proper rational function decomposes into a sum of pieces of
        only three kinds, and each kind integrates to a logarithm, an inverse tangent, or a
        power. The decomposition is the whole method.
      </p>
      <TableCard
        title="Which decomposition to write"
        headers={["Denominator factor", "Contribution to the decomposition"]}
        rows={[
          {
            cells: [
              <span key="f1">
                a single linear factor <Formula>{String.raw`(x-a)`}</Formula>
              </span>,
              <Formula key="fv1">{String.raw`\frac{A}{x-a}`}</Formula>,
            ],
          },
          {
            cells: [
              <span key="f2">
                a repeated linear factor{" "}
                <Formula>{String.raw`(x-a)^{2}`}</Formula>
              </span>,
              <Formula key="fv2">{String.raw`\frac{A}{x-a}+\frac{B}{(x-a)^{2}}`}</Formula>,
            ],
          },
          {
            cells: [
              <span key="f3">
                an irreducible quadratic{" "}
                <Formula>{String.raw`x^{2}+bx+c`}</Formula>
              </span>,
              <Formula key="fv3">{String.raw`\frac{Ax+B}{x^{2}+bx+c}`}</Formula>,
            ],
          },
          {
            cells: [
              "improper fraction (degree of numerator at least that of denominator)",
              <span key="fv4">
                divide first: write it as polynomial plus proper fraction
              </span>,
            ],
          },
        ]}
        caption="One unknown per factor power. A repeated factor needs a term for every power up to its multiplicity."
      />
      <KeyPoint title="The three steps, every time">
        <p>
          <strong>Step 1.</strong> Factor the denominator completely over the reals.{" "}
          <strong>Step 2.</strong> Write the decomposition with unknown constants and solve
          for them (substituting the roots is fastest; comparing coefficients is the
          fallback). <strong>Step 3.</strong> Integrate each piece with the standard table —
          linear denominators give logarithms, irreducible quadratics give inverse tangents
          after completing the square.
        </p>
      </KeyPoint>

      <Expandable title="Worked Examples 18–21 · Partial fractions">
        <div className="space-y-5">
          <div>
            <p>
              <strong>Example 18.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{x+2}{(x-1)(x+3)}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Write
            </p>
            <FormulaBlock
              latex={String.raw`\frac{x+2}{(x-1)(x+3)}=\frac{A}{x-1}+\frac{B}{x+3}`}
            />
            <p>
              Multiplying out gives{" "}
              <Formula>{String.raw`x+2=A(x+3)+B(x-1)`}</Formula>. Putting{" "}
              <Formula>{String.raw`x=1`}</Formula> gives{" "}
              <Formula>{String.raw`3=4A`}</Formula>, so{" "}
              <Formula>{String.raw`A=\frac{3}{4}`}</Formula>; putting{" "}
              <Formula>{String.raw`x=-3`}</Formula> gives{" "}
              <Formula>{String.raw`-1=-4B`}</Formula>, so{" "}
              <Formula>{String.raw`B=\frac{1}{4}`}</Formula>. Therefore
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{x+2}{(x-1)(x+3)}\,dx=\frac{3}{4}\log|x-1|+\frac{1}{4}\log|x+3|+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 19.</strong> Derive{" "}
              <Formula>{String.raw`\int \frac{dx}{x^{2}-a^{2}}`}</Formula> by partial
              fractions.
            </p>
            <p>
              <strong>Solution.</strong> Factor the denominator and split:
            </p>
            <FormulaBlock
              latex={String.raw`\frac{1}{x^{2}-a^{2}}=\frac{1}{(x-a)(x+a)}=\frac{1}{2a}\left(\frac{1}{x-a}-\frac{1}{x+a}\right)`}
            />
            <p>
              Integrating each term and combining the logarithms gives the standard result:
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{dx}{x^{2}-a^{2}}=\frac{1}{2a}\log\left|\frac{x-a}{x+a}\right|+C`}
            />
            <p>
              This is exactly how the first row of the 7.4 table is proved — worth
              remembering as a template rather than an isolated fact.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 20.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{x^{2}+1}{x^{2}-1}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> The fraction is improper, so divide first:
            </p>
            <FormulaBlock
              latex={String.raw`\frac{x^{2}+1}{x^{2}-1}=1+\frac{2}{x^{2}-1}`}
            />
            <p>
              Using Example 19 with{" "}
              <Formula>{String.raw`a=1`}</Formula>,{" "}
              <Formula>{String.raw`\frac{2}{x^{2}-1}`}</Formula> integrates to{" "}
              <Formula>{String.raw`\log\left|\frac{x-1}{x+1}\right|`}</Formula>, so
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{x^{2}+1}{x^{2}-1}\,dx=x+\log\left|\frac{x-1}{x+1}\right|+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 21.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{3x-2}{(x+1)(x+3)}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Writing{" "}
              <Formula>{String.raw`3x-2=A(x+3)+B(x+1)`}</Formula> and substituting the
              roots: at <Formula>{String.raw`x=-1`}</Formula>,{" "}
              <Formula>{String.raw`-5=2A`}</Formula> so{" "}
              <Formula>{String.raw`A=-\frac{5}{2}`}</Formula>; at{" "}
              <Formula>{String.raw`x=-3`}</Formula>,{" "}
              <Formula>{String.raw`-11=-2B`}</Formula> so{" "}
              <Formula>{String.raw`B=\frac{11}{2}`}</Formula>. Hence
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{3x-2}{(x+1)(x+3)}\,dx=-\frac{5}{2}\log|x+1|+\frac{11}{2}\log|x+3|+C`}
            />
            <p>
              The coefficients are allowed to be negative and fractional — always check by
              differentiating back.
            </p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 7.5">
        <ExerciseQa
          questions={[
            <span key="q1">
              <Formula>{String.raw`\int \frac{x}{(x+1)(x+2)}\,dx`}</Formula>
            </span>,
            <span key="q2">
              <Formula>{String.raw`\int \frac{dx}{x^{2}-9}`}</Formula>
            </span>,
            <span key="q3">
              <Formula>{String.raw`\int \frac{dx}{x(x-1)}`}</Formula>
            </span>,
            <span key="q4">
              <Formula>{String.raw`\int \frac{x-1}{(x+1)(x+2)}\,dx`}</Formula>
            </span>,
            <span key="q5">
              <Formula>{String.raw`\int \frac{2x+3}{x^{2}+3x+2}\,dx`}</Formula>
            </span>,
            <span key="q6">
              <Formula>{String.raw`\int \frac{dx}{(x+1)(x+2)}`}</Formula>
            </span>,
            <span key="q7">
              <Formula>{String.raw`\int \frac{x^{2}+x+1}{x^{2}-1}\,dx`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`-\log|x+1|+2\log|x+2|+C`}</Formula>
            </span>,
            <span key="a2">
              <Formula>{String.raw`\frac{1}{6}\log\left|\frac{x-3}{x+3}\right|+C`}</Formula>
            </span>,
            <span key="a3">
              <Formula>{String.raw`\log\left|\frac{x-1}{x}\right|+C`}</Formula>
            </span>,
            <span key="a4">
              <Formula>{String.raw`-2\log|x+1|+3\log|x+2|+C`}</Formula>
            </span>,
            <span key="a5">
              <span key="a5b">
                The numerator is the derivative of the denominator:{" "}
                <Formula>{String.raw`\log|x^{2}+3x+2|+C`}</Formula>.
              </span>
            </span>,
            <span key="a6">
              <Formula>{String.raw`\log\left|\frac{x+2}{x+1}\right|+C`}</Formula>
            </span>,
            <span key="a7">
              <Formula>{String.raw`x+\frac{3}{2}\log|x-1|-\frac{1}{2}\log|x+1|+C`}</Formula>
            </span>,
          ]}
        />
      </Expandable>

      <h2 id="h-7-6">7.6 Integration by Parts</h2>
      <p>
        The product rule for derivatives is{" "}
        <Formula>{String.raw`(uv)'=u'v+uv'`}</Formula>. Integrating both sides and
        rearranging turns it into a rule for integrals of products.
      </p>
      <FormulaBlock
        latex={String.raw`\int u\,v'\,dx=uv-\int u'\,v\,dx`}
        important
        label="Integration by parts"
      />
      <p>
        In the form used most often in computation, the whole rule reads
      </p>
      <FormulaBlock
        latex={String.raw`\int u\,v\,dx=u\int v\,dx-\int\left(\frac{du}{dx}\int v\,dx\right)dx`}
      />
      <p>
        The rule trades one integral for another. It helps only when the new integral is
        easier — so the choice of which factor to differentiate matters. The convention is
        remembered as <strong>ILATE</strong>.
      </p>
      <TableCard
        title="ILATE — the priority order for choosing u"
        headers={["Letter", "Family", "Better to differentiate", "Better to integrate"]}
        rows={[
          { cells: ["I", "inverse trigonometric", "yes", "no"] },
          { cells: ["L", "logarithmic", "yes", "no"] },
          { cells: ["A", "algebraic", "sometimes", "sometimes"] },
          { cells: ["T", "trigonometric", "sometimes", "sometimes"] },
          { cells: ["E", "exponential", "no", "yes"] },
        ]}
        caption="Whichever family appears earlier is chosen as u; the later one is dv."
      />

      <Expandable title="Worked Examples 22–26 · Integration by parts">
        <div className="space-y-5">
          <div>
            <p>
              <strong>Example 22.</strong> Find{" "}
              <Formula>{String.raw`\int x\cos x\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Take{" "}
              <Formula>{String.raw`u=x`}</Formula> and{" "}
              <Formula>{String.raw`v'=\cos x`}</Formula>, so{" "}
              <Formula>{String.raw`u'=1`}</Formula> and{" "}
              <Formula>{String.raw`v=\sin x`}</Formula>:
            </p>
            <FormulaBlock
              latex={String.raw`\int x\cos x\,dx=x\sin x-\int \sin x\,dx=x\sin x+\cos x+C`}
            />
            <p>
              The algebraic factor was differentiated away, which is exactly the point of
              the rule.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 23.</strong> Find{" "}
              <Formula>{String.raw`\int x e^{x}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Take{" "}
              <Formula>{String.raw`u=x`}</Formula>,{" "}
              <Formula>{String.raw`v'=e^{x}`}</Formula>:
            </p>
            <FormulaBlock
              latex={String.raw`\int x e^{x}\,dx=x e^{x}-\int e^{x}\,dx=(x-1)e^{x}+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 24.</strong> Find{" "}
              <Formula>{String.raw`\int \log x\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> There is only one factor, so take{" "}
              <Formula>{String.raw`u=\log x`}</Formula> and{" "}
              <Formula>{String.raw`v'=1`}</Formula>, giving{" "}
              <Formula>{String.raw`v=x`}</Formula>:
            </p>
            <FormulaBlock
              latex={String.raw`\int \log x\,dx=x\log x-\int x\cdot\frac{1}{x}\,dx=x\log x-x+C`}
            />
            <p>
              This trick — inventing a factor of 1 — also handles{" "}
              <Formula>{String.raw`\int \tan^{-1}x\,dx`}</Formula> and{" "}
              <Formula>{String.raw`\int \sin^{-1}x\,dx`}</Formula>.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 25.</strong> Find{" "}
              <Formula>{String.raw`\int x^{2}e^{x}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Apply the rule twice. First, with{" "}
              <Formula>{String.raw`u=x^{2}`}</Formula>,{" "}
              <Formula>{String.raw`v'=e^{x}`}</Formula>:
            </p>
            <FormulaBlock
              latex={String.raw`\int x^{2}e^{x}\,dx=x^{2}e^{x}-2\int x e^{x}\,dx`}
            />
            <p>
              The remaining integral is Example 23, so
            </p>
            <FormulaBlock
              latex={String.raw`\int x^{2}e^{x}\,dx=x^{2}e^{x}-2(x-1)e^{x}+C=(x^{2}-2x+2)e^{x}+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 26.</strong> Find{" "}
              <Formula>{String.raw`\int \tan^{-1}x\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Take{" "}
              <Formula>{String.raw`u=\tan^{-1}x`}</Formula> and{" "}
              <Formula>{String.raw`v'=1`}</Formula>:
            </p>
            <FormulaBlock
              latex={String.raw`\int \tan^{-1}x\,dx=x\tan^{-1}x-\int \frac{x}{1+x^{2}}\,dx`}
            />
            <p>
              The second integral is a substitution with{" "}
              <Formula>{String.raw`t=1+x^{2}`}</Formula>, giving{" "}
              <Formula>{String.raw`\frac{1}{2}\log(1+x^{2})`}</Formula>. Hence
            </p>
            <FormulaBlock
              latex={String.raw`\int \tan^{-1}x\,dx=x\tan^{-1}x-\frac{1}{2}\log(1+x^{2})+C`}
            />
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 7.6">
        <ExerciseQa
          questions={[
            <span key="q1">
              <Formula>{String.raw`\int x\sin x\,dx`}</Formula>
            </span>,
            <span key="q2">
              <Formula>{String.raw`\int x^{2}e^{3x}\,dx`}</Formula>
            </span>,
            <span key="q3">
              <Formula>{String.raw`\int x\log x\,dx`}</Formula>
            </span>,
            <span key="q4">
              <Formula>{String.raw`\int x\sec^{2}x\,dx`}</Formula>
            </span>,
            <span key="q5">
              <Formula>{String.raw`\int x\tan^{-1}x\,dx`}</Formula>
            </span>,
            <span key="q6">
              <Formula>{String.raw`\int (\log x)^{2}\,dx`}</Formula>
            </span>,
            <span key="q7">
              <Formula>{String.raw`\int x\cos 2x\,dx`}</Formula>
            </span>,
            <span key="q8">
              <Formula>{String.raw`\int \sin^{-1}x\,dx`}</Formula>
            </span>,
            <span key="q9">
              <Formula>{String.raw`\int x^{2}\log x\,dx`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`-x\cos x+\sin x+C`}</Formula>
            </span>,
            <span key="a2">
              <Formula>{String.raw`e^{3x}\left(\frac{x^{2}}{3}-\frac{2x}{9}+\frac{2}{27}\right)+C`}</Formula>
            </span>,
            <span key="a3">
              <Formula>{String.raw`\frac{x^{2}}{2}\log x-\frac{x^{2}}{4}+C`}</Formula>
            </span>,
            <span key="a4">
              <Formula>{String.raw`x\tan x+\log|\cos x|+C`}</Formula>
            </span>,
            <span key="a5">
              <Formula>{String.raw`\frac{x^{2}+1}{2}\tan^{-1}x-\frac{x}{2}+C`}</Formula>
            </span>,
            <span key="a6">
              <Formula>{String.raw`x(\log x)^{2}-2x\log x+2x+C`}</Formula>
            </span>,
            <span key="a7">
              <Formula>{String.raw`\frac{x}{2}\sin 2x+\frac{\cos 2x}{4}+C`}</Formula>
            </span>,
            <span key="a8">
              <Formula>{String.raw`x\sin^{-1}x+\sqrt{1-x^{2}}+C`}</Formula>
            </span>,
            <span key="a9">
              <Formula>{String.raw`\frac{x^{3}}{3}\log x-\frac{x^{3}}{9}+C`}</Formula>
            </span>,
          ]}
        />
      </Expandable>

      <h3 id="h-7-6-1">7.6.1 The type e^x [f(x) + f′(x)]</h3>
      <p>
        One special product deserves its own rule. Differentiating{" "}
        <Formula>{String.raw`e^{x}f(x)`}</Formula> produces exactly the pattern{" "}
        <Formula>{String.raw`e^{x}\left[f(x)+f'(x)\right]`}</Formula>, so the integral
        collapses in a single line.
      </p>
      <FormulaBlock
        latex={String.raw`\int e^{x}\left[f(x)+f'(x)\right]dx=e^{x}f(x)+C`}
        important
        label="The e-to-the-x bracket rule"
      />
      <p>
        The skill is only in recognising which part is{" "}
        <Formula>{String.raw`f(x)`}</Formula>: look for a function whose derivative is the
        other term.
      </p>

      <Expandable title="Worked Examples 27–29 · The bracket rule">
        <div className="space-y-5">
          <div>
            <p>
              <strong>Example 27.</strong> Find{" "}
              <Formula>{String.raw`\int e^{x}(\sin x+\cos x)\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Take{" "}
              <Formula>{String.raw`f(x)=\sin x`}</Formula>; then{" "}
              <Formula>{String.raw`f'(x)=\cos x`}</Formula>, which is the second term. So
            </p>
            <FormulaBlock
              latex={String.raw`\int e^{x}(\sin x+\cos x)\,dx=e^{x}\sin x+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 28.</strong> Find{" "}
              <Formula>{String.raw`\int e^{x}(\tan x+\sec^{2}x)\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Here{" "}
              <Formula>{String.raw`f(x)=\tan x`}</Formula> and{" "}
              <Formula>{String.raw`f'(x)=\sec^{2}x`}</Formula>, so the integral is{" "}
              <Formula>{String.raw`e^{x}\tan x+C`}</Formula>.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 29.</strong> Find{" "}
              <Formula>{String.raw`\int e^{x}\left(\frac{1}{x}-\frac{1}{x^{2}}\right)dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Take{" "}
              <Formula>{String.raw`f(x)=\frac{1}{x}`}</Formula>, whose derivative is{" "}
              <Formula>{String.raw`-\frac{1}{x^{2}}`}</Formula>. Then
            </p>
            <FormulaBlock
              latex={String.raw`\int e^{x}\left(\frac{1}{x}-\frac{1}{x^{2}}\right)dx=\frac{e^{x}}{x}+C`}
            />
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 7.7">
        <ExerciseQa
          questions={[
            <span key="q1">
              <Formula>{String.raw`\int e^{x}(\sin x+\cos x)\,dx`}</Formula>
            </span>,
            <span key="q2">
              <Formula>{String.raw`\int e^{x}\left(\frac{1}{x}-\frac{1}{x^{2}}\right)dx`}</Formula>
            </span>,
            <span key="q3">
              <Formula>{String.raw`\int e^{x}(\tan x+\sec^{2}x)\,dx`}</Formula>
            </span>,
            <span key="q4">
              <Formula>{String.raw`\int e^{x}(\cos x-\sin x)\,dx`}</Formula>
            </span>,
            <span key="q5">
              <Formula>{String.raw`\int e^{2x}(\sin 2x+\cos 2x)\,dx`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`e^{x}\sin x+C`}</Formula>
            </span>,
            <span key="a2">
              <Formula>{String.raw`\frac{e^{x}}{x}+C`}</Formula>
            </span>,
            <span key="a3">
              <Formula>{String.raw`e^{x}\tan x+C`}</Formula>
            </span>,
            <span key="a4">
              <Formula>{String.raw`e^{x}\cos x+C`}</Formula>
            </span>,
            <span key="a5">
              <span key="a5b">
                Because the exponential is <Formula>{String.raw`e^{2x}`}</Formula>, the
                pattern needs a factor 2: <Formula>{String.raw`\frac{1}{2}e^{2x}\sin 2x+C`}</Formula>.
              </span>
            </span>,
          ]}
        />
      </Expandable>

      <h2 id="h-7-7">7.7 Definite Integral</h2>
      <p>
        An indefinite integral is a <em>function</em>. A definite integral is a{" "}
        <em>number</em>: the area bounded by the graph of a function, the{" "}
        <Formula>{String.raw`x`}</Formula>-axis and two vertical lines. It is defined as a
        limit of sums of rectangle areas, exactly as the area problem demands.
      </p>
      <FormulaBlock
        latex={String.raw`\int_{a}^{b} f(x)\,dx=(b-a)\lim_{n\to\infty}\frac{1}{n}\left[f(a)+f(a+h)+\cdots+f\bigl(a+(n-1)h\bigr)\right]`}
        important
        label="Definite integral as a limit of a sum"
      />
      <p>
        Here <Formula>{String.raw`h=\frac{b-a}{n}`}</Formula> is the width of each of the{" "}
        <Formula>{String.raw`n`}</Formula> sub-intervals and{" "}
        <Formula>{String.raw`f(a+rh)`}</Formula> is the height of the{" "}
        <Formula>{String.raw`r`}</Formula>-th rectangle. The limit is written more briefly as
      </p>
      <FormulaBlock
        latex={String.raw`\int_{a}^{b} f(x)\,dx=\lim_{h\to 0} h\left[f(a)+f(a+h)+\cdots+f\bigl(a+(n-1)h\bigr)\right]`}
      />
      <Callout type="note">
        <p>
          The definition explains the notation: <Formula>{String.raw`\int`}</Formula> is an
          elongated <Formula>S</Formula> for <em>summa</em> and{" "}
          <Formula>{String.raw`dx`}</Formula> records the vanishing width of each strip. The
          limits <Formula>{String.raw`a`}</Formula> and{" "}
          <Formula>{String.raw`b`}</Formula> are part of the symbol; the definite integral
          has a value, not a family of values, so the constant{" "}
          <Formula>C</Formula> never appears.
        </p>
      </Callout>

      <Expandable title="Worked Example 30 · Evaluating from the definition">
        <div>
          <p>
            <strong>Example 30.</strong> Evaluate{" "}
            <Formula>{String.raw`\int_{0}^{2} x^{2}\,dx`}</Formula> as the limit of a sum.
          </p>
          <p>
            <strong>Solution.</strong> Divide the interval into{" "}
            <Formula>{String.raw`n`}</Formula> equal parts, so
          </p>
          <FormulaBlock latex={String.raw`h=\frac{2-0}{n}=\frac{2}{n},\qquad x_{r}=0+rh=\frac{2r}{n}`} />
          <p>The heights are <Formula>{String.raw`f(x_{r})=x_{r}^{2}=\frac{4r^{2}}{n^{2}}`}</Formula>, so</p>
          <FormulaBlock
            latex={String.raw`S_{n}=\sum_{r=0}^{n-1} f(x_{r})\,h=\sum_{r=0}^{n-1}\frac{4r^{2}}{n^{2}}\cdot\frac{2}{n}=\frac{8}{n^{3}}\sum_{r=0}^{n-1} r^{2}`}
          />
          <p>
            Using <Formula>{String.raw`\sum_{r=0}^{n-1} r^{2}=\frac{(n-1)n(2n-1)}{6}`}</Formula>,
          </p>
          <FormulaBlock
            latex={String.raw`S_{n}=\frac{8}{n^{3}}\cdot\frac{(n-1)n(2n-1)}{6}=\frac{4}{3}\cdot\frac{(n-1)(2n-1)}{n^{2}}`}
          />
          <p>
            As <Formula>{String.raw`n\to\infty`}</Formula> the fraction tends to{" "}
            <Formula>{String.raw`2`}</Formula>, so
          </p>
          <FormulaBlock latex={String.raw`\int_{0}^{2} x^{2}\,dx=\frac{4}{3}\cdot 2=\frac{8}{3}`} important />
          <p>
            The area under <Formula>{String.raw`y=x^{2}`}</Formula> from{" "}
            <Formula>{String.raw`0`}</Formula> to <Formula>{String.raw`2`}</Formula> is
            therefore <Formula>{String.raw`\frac{8}{3}`}</Formula> square units — and the
            next section shows how to get this answer in one line.
          </p>
        </div>
      </Expandable>

      <h2 id="h-7-8">7.8 Fundamental Theorem of Calculus</h2>
      <p>
        The limit of a sum is unusable in practice. The fundamental theorem removes the
        need for it by proving that area and anti differentiation are the same operation —
        the single most important result in calculus.
      </p>

      <h3 id="h-7-8-1">7.8.1 The area function</h3>
      <p>
        Fix <Formula>{String.raw`a`}</Formula> and let the upper limit vary. Define
      </p>
      <FormulaBlock
        latex={String.raw`A(x)=\int_{a}^{x} f(t)\,dt,\qquad x\in[a,b]`}
        label="Area function"
      />
      <p>
        <Formula>{String.raw`A(x)`}</Formula> is the area from{" "}
        <Formula>{String.raw`a`}</Formula> up to <Formula>{String.raw`x`}</Formula>, so it is
        itself a function of <Formula>{String.raw`x`}</Formula>. Note{" "}
        <Formula>{String.raw`A(a)=0`}</Formula> and, for a non-negative{" "}
        <Formula>{String.raw`f`}</Formula>, that <Formula>{String.raw`A`}</Formula> is
        increasing.
      </p>

      <h3 id="h-7-8-2">7.8.2 First fundamental theorem</h3>
      <FormulaBlock
        latex={String.raw`A'(x)=\frac{d}{dx}\int_{a}^{x} f(t)\,dt=f(x)`}
        important
        label="First fundamental theorem of integral calculus"
      />
      <p>
        In words: differentiating an integral with respect to its upper limit returns the
        integrand. The area function is an anti derivative of{" "}
        <Formula>{String.raw`f`}</Formula> — which is precisely why anti derivatives solve
        the area problem.
      </p>
      <KeyPoint title="Chain-rule form">
        <p>
          If the upper limit is itself a function, the chain rule applies:
        </p>
        <FormulaBlock latex={String.raw`\frac{d}{dx}\int_{a}^{g(x)} f(t)\,dt=f\bigl(g(x)\bigr)\,g'(x)`} />
        <p>
          For example,{" "}
          <Formula>{String.raw`\frac{d}{dx}\int_{0}^{x^{2}}\sin t\,dt=2x\sin(x^{2})`}</Formula>.
        </p>
      </KeyPoint>

      <h3 id="h-7-8-3">7.8.3 Second fundamental theorem</h3>
      <FormulaBlock
        latex={String.raw`\int_{a}^{b} f(x)\,dx=F(b)-F(a)`}
        important
        label="Second fundamental theorem of integral calculus"
      />
      <p>
        Here <Formula>{String.raw`F`}</Formula> is <em>any</em> anti derivative of{" "}
        <Formula>{String.raw`f`}</Formula>. Any two anti derivatives differ by a constant,
        and that constant cancels in the subtraction — which is why the definite integral
        is independent of the choice of <Formula>{String.raw`F`}</Formula>.
      </p>
      <p>
        The evaluation is written with square brackets:
      </p>
      <FormulaBlock
        latex={String.raw`\int_{a}^{b} f(x)\,dx=\Bigl[F(x)\Bigr]_{a}^{b}=F(b)-F(a)`}
      />

      <Expandable title="Worked Examples 31–33 · The fundamental theorem">
        <div className="space-y-5">
          <div>
            <p>
              <strong>Example 31.</strong> Evaluate{" "}
              <Formula>{String.raw`\int_{1}^{2} x^{2}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> An anti derivative is{" "}
              <Formula>{String.raw`F(x)=\frac{x^{3}}{3}`}</Formula>, so
            </p>
            <FormulaBlock
              latex={String.raw`\int_{1}^{2} x^{2}\,dx=\left[\frac{x^{3}}{3}\right]_{1}^{2}=\frac{8}{3}-\frac{1}{3}=\frac{7}{3}`}
            />
            <p>
              Compare Example 30: the same machinery gives an answer in one line instead of
              a page of limits.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 32.</strong> Evaluate{" "}
              <Formula>{String.raw`\int_{0}^{\pi/2}\cos x\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong>
            </p>
            <FormulaBlock
              latex={String.raw`\int_{0}^{\pi/2}\cos x\,dx=\left[\sin x\right]_{0}^{\pi/2}=1-0=1`}
            />
          </div>
          <div>
            <p>
              <strong>Example 33.</strong> Find{" "}
              <Formula>{String.raw`\frac{d}{dx}\int_{0}^{x^{2}}\sin t\,dt`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> The upper limit is{" "}
              <Formula>{String.raw`x^{2}`}</Formula>, not{" "}
              <Formula>{String.raw`x`}</Formula>, so the chain-rule form applies:
            </p>
            <FormulaBlock
              latex={String.raw`\frac{d}{dx}\int_{0}^{x^{2}}\sin t\,dt=\sin(x^{2})\cdot 2x=2x\sin(x^{2})`}
            />
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 7.8">
        <ExerciseQa
          questions={[
            <span key="q1">
              <Formula>{String.raw`\int_{-1}^{1}(x+1)\,dx`}</Formula>
            </span>,
            <span key="q2">
              <Formula>{String.raw`\int_{2}^{3} x^{2}\,dx`}</Formula>
            </span>,
            <span key="q3">
              <Formula>{String.raw`\int_{1}^{2}\left(4x^{3}-5x^{2}+6x+9\right)dx`}</Formula>
            </span>,
            <span key="q4">
              <Formula>{String.raw`\int_{0}^{\pi/4}\sin 2x\,dx`}</Formula>
            </span>,
            <span key="q5">
              <Formula>{String.raw`\int_{0}^{\pi/2}\cos^{2}x\,dx`}</Formula>
            </span>,
            <span key="q6">
              <Formula>{String.raw`\int_{2}^{3}\frac{dx}{x^{2}-1}`}</Formula>
            </span>,
            <span key="q7">
              <Formula>{String.raw`\int_{0}^{1} x e^{x^{2}}\,dx`}</Formula>
            </span>,
            <span key="q8">
              <Formula>{String.raw`\int_{1}^{2}\left(\frac{1}{x}-\frac{1}{x^{2}}\right)dx`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`2`}</Formula>
            </span>,
            <span key="a2">
              <Formula>{String.raw`\frac{19}{3}`}</Formula>
            </span>,
            <span key="a3">
              <Formula>{String.raw`\frac{64}{3}`}</Formula>
            </span>,
            <span key="a4">
              <Formula>{String.raw`\frac{1}{2}`}</Formula>
            </span>,
            <span key="a5">
              <Formula>{String.raw`\frac{\pi}{4}`}</Formula>
            </span>,
            <span key="a6">
              <Formula>{String.raw`\frac{1}{2}\log\frac{3}{2}`}</Formula>
            </span>,
            <span key="a7">
              <Formula>{String.raw`\frac{e-1}{2}`}</Formula>
            </span>,
            <span key="a8">
              <Formula>{String.raw`\log 2-\frac{1}{2}`}</Formula>
            </span>,
          ]}
        />
      </Expandable>

      <h2 id="h-7-9">7.9 Evaluation of Definite Integrals by Substitution</h2>
      <p>
        A definite integral can be transformed exactly like an indefinite one, with one
        extra rule: the limits must be transformed too. Once that is done there is no need
        to return to the original variable.
      </p>
      <FormulaBlock
        latex={String.raw`\int_{a}^{b} f(x)\,dx=\int_{\alpha}^{\beta} f\bigl(g(t)\bigr)\,g'(t)\,dt,\qquad a=g(\alpha),\quad b=g(\beta)`}
        important
        label="Substitution with new limits"
      />
      <KeyPoint title="Why change the limits">
        <p>
          If <Formula>{String.raw`x=g(t)`}</Formula> then{" "}
          <Formula>{String.raw`dx=g'(t)\,dt`}</Formula>, and the point{" "}
          <Formula>{String.raw`x=a`}</Formula> corresponds to{" "}
          <Formula>{String.raw`t=\alpha`}</Formula> while{" "}
          <Formula>{String.raw`x=b`}</Formula> corresponds to{" "}
          <Formula>{String.raw`t=\beta`}</Formula>. Forgetting to change them is the single
          most common error in this section — it silently gives a wrong number.
        </p>
      </KeyPoint>

      <Expandable title="Worked Examples 34–36 · Substitution in a definite integral">
        <div className="space-y-5">
          <div>
            <p>
              <strong>Example 34.</strong> Evaluate{" "}
              <Formula>{String.raw`\int_{0}^{\pi/2}\frac{\sin x}{1+\cos^{2}x}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Put <Formula>{String.raw`t=\cos x`}</Formula>, so{" "}
              <Formula>{String.raw`dt=-\sin x\,dx`}</Formula>. When{" "}
              <Formula>{String.raw`x=0`}</Formula>, <Formula>{String.raw`t=1`}</Formula>;
              when <Formula>{String.raw`x=\frac{\pi}{2}`}</Formula>,{" "}
              <Formula>{String.raw`t=0`}</Formula>. Hence
            </p>
            <FormulaBlock
              latex={String.raw`\int_{0}^{\pi/2}\frac{\sin x}{1+\cos^{2}x}\,dx=\int_{1}^{0}\frac{-dt}{1+t^{2}}=\int_{0}^{1}\frac{dt}{1+t^{2}}=\left[\tan^{-1}t\right]_{0}^{1}=\frac{\pi}{4}`}
            />
            <p>
              The negative sign from <Formula>{String.raw`dt`}</Formula> was used to flip
              the limits — a convenient habit.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 35.</strong> Evaluate{" "}
              <Formula>{String.raw`\int_{0}^{1}\frac{\tan^{-1}x}{1+x^{2}}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Put{" "}
              <Formula>{String.raw`t=\tan^{-1}x`}</Formula>, so{" "}
              <Formula>{String.raw`dt=\frac{dx}{1+x^{2}}`}</Formula>. The limits become{" "}
              <Formula>{String.raw`t=0`}</Formula> and{" "}
              <Formula>{String.raw`t=\frac{\pi}{4}`}</Formula>, giving
            </p>
            <FormulaBlock
              latex={String.raw`\int_{0}^{1}\frac{\tan^{-1}x}{1+x^{2}}\,dx=\int_{0}^{\pi/4} t\,dt=\left[\frac{t^{2}}{2}\right]_{0}^{\pi/4}=\frac{\pi^{2}}{32}`}
            />
          </div>
          <div>
            <p>
              <strong>Example 36.</strong> Evaluate{" "}
              <Formula>{String.raw`\int_{1}^{2}\frac{dx}{x(1+\log x)^{2}}`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Put{" "}
              <Formula>{String.raw`t=1+\log x`}</Formula>, so{" "}
              <Formula>{String.raw`dt=\frac{dx}{x}`}</Formula>. The limits become{" "}
              <Formula>{String.raw`t=1`}</Formula> and{" "}
              <Formula>{String.raw`t=1+\log 2`}</Formula>, so
            </p>
            <FormulaBlock
              latex={String.raw`\int_{1}^{2}\frac{dx}{x(1+\log x)^{2}}=\int_{1}^{1+\log 2}\frac{dt}{t^{2}}=\left[-\frac{1}{t}\right]_{1}^{1+\log 2}=1-\frac{1}{1+\log 2}`}
            />
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 7.9">
        <ExerciseQa
          questions={[
            <span key="q1">
              <Formula>{String.raw`\int_{0}^{1} x e^{x^{2}}\,dx`}</Formula>
            </span>,
            <span key="q2">
              <Formula>{String.raw`\int_{0}^{\pi/2}\frac{\sin x}{1+\cos^{2}x}\,dx`}</Formula>
            </span>,
            <span key="q3">
              <Formula>{String.raw`\int_{0}^{1}\frac{\tan^{-1}x}{1+x^{2}}\,dx`}</Formula>
            </span>,
            <span key="q4">
              <Formula>{String.raw`\int_{1}^{2}\frac{(1+\log x)^{2}}{x}\,dx`}</Formula>
            </span>,
            <span key="q5">
              <Formula>{String.raw`\int_{0}^{\pi/4}\tan x\,dx`}</Formula>
            </span>,
            <span key="q6">
              <Formula>{String.raw`\int_{1}^{e}\frac{\log x}{x}\,dx`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`\frac{e-1}{2}`}</Formula>
            </span>,
            <span key="a2">
              <Formula>{String.raw`\frac{\pi}{4}`}</Formula>
            </span>,
            <span key="a3">
              <Formula>{String.raw`\frac{\pi^{2}}{32}`}</Formula>
            </span>,
            <span key="a4">
              <Formula>{String.raw`\frac{(1+\log 2)^{3}-1}{3}`}</Formula>
            </span>,
            <span key="a5">
              <Formula>{String.raw`\frac{1}{2}\log 2`}</Formula>
            </span>,
            <span key="a6">
              <Formula>{String.raw`\frac{1}{2}`}</Formula>
            </span>,
          ]}
        />
      </Expandable>

      <h2 id="h-7-10">7.10 Some Properties of Definite Integrals</h2>
      <p>
        These eight properties turn integrals that look impossible into integrals that
        collapse by symmetry. They are worth learning as a toolkit, because whole families of
        competition-style questions are solved by one of them.
      </p>
      <TableCard
        title="The standard properties"
        headers={["", "Property", "What it buys you"]}
        rows={[
          {
            cells: [
              <span key="p0n">P0</span>,
              <Formula key="p0v">{String.raw`\int_{a}^{b} f(x)\,dx=\int_{a}^{b} f(t)\,dt`}</Formula>,
              <span key="p0u">dummy variable is irrelevant</span>,
            ],
          },
          {
            cells: [
              <span key="p1n">P1</span>,
              <Formula key="p1v">{String.raw`\int_{a}^{b} f(x)\,dx=-\int_{b}^{a} f(x)\,dx,\qquad \int_{a}^{a} f(x)\,dx=0`}</Formula>,
              <span key="p1u">reversing limits flips the sign</span>,
            ],
          },
          {
            cells: [
              <span key="p2n">P2</span>,
              <Formula key="p2v">{String.raw`\int_{a}^{b} f(x)\,dx=\int_{a}^{c} f(x)\,dx+\int_{c}^{b} f(x)\,dx`}</Formula>,
              <span key="p2u">split at a point (use it at a kink)</span>,
            ],
          },
          {
            cells: [
              <span key="p3n">P3</span>,
              <Formula key="p3v">{String.raw`\int_{a}^{b} f(x)\,dx=\int_{a}^{b} f(a+b-x)\,dx`}</Formula>,
              <span key="p3u">swap x for the mirror point of the interval</span>,
            ],
          },
          {
            cells: [
              <span key="p4n">P4</span>,
              <Formula key="p4v">{String.raw`\int_{0}^{a} f(x)\,dx=\int_{0}^{a} f(a-x)\,dx`}</Formula>,
              <span key="p4u">the workhorse for sin and cos on [0, pi/2]</span>,
            ],
          },
          {
            cells: [
              <span key="p5n">P5</span>,
              <Formula key="p5v">{String.raw`\int_{0}^{2a} f(x)\,dx=\int_{0}^{a} f(x)\,dx+\int_{0}^{a} f(2a-x)\,dx`}</Formula>,
              <span key="p5u">splits a double interval</span>,
            ],
          },
          {
            cells: [
              <span key="p6n">P6</span>,
              <Formula key="p6v">{String.raw`\int_{-a}^{a} f(x)\,dx=\begin{cases}2\int_{0}^{a} f(x)\,dx, & f\text{ even}\\[2pt] 0, & f\text{ odd}\end{cases}`}</Formula>,
              <span key="p6u">kills odd integrands instantly</span>,
            ],
          },
          {
            cells: [
              <span key="p7n">P7</span>,
              <Formula key="p7v">{String.raw`\int_{0}^{2a} f(x)\,dx=\begin{cases}2\int_{0}^{a} f(x)\,dx, & f(2a-x)=f(x)\\[2pt] 0, & f(2a-x)=-f(x)\end{cases}`}</Formula>,
              <span key="p7u">symmetry about the midpoint</span>,
            ],
          },
        ]}
        caption="P3 and P4 are the same statement written for a general interval and for the interval starting at 0."
      />

      <KeyPoint title="A result worth memorising">
        <p>
          Applying P4 with <Formula>{String.raw`a=\pi`}</Formula> to{" "}
          <Formula>{String.raw`I=\int_{0}^{\pi} x f(\sin x)\,dx`}</Formula> gives{" "}
          <Formula>{String.raw`I=\int_{0}^{\pi}(\pi-x)f(\sin x)\,dx`}</Formula>. Adding the
          two expressions for <Formula>{String.raw`I`}</Formula> cancels the{" "}
          <Formula>{String.raw`x`}</Formula>:
        </p>
        <FormulaBlock latex={String.raw`\int_{0}^{\pi} x f(\sin x)\,dx=\frac{\pi}{2}\int_{0}^{\pi} f(\sin x)\,dx`} important />
        <p>
          This is why the awkward factor <Formula>{String.raw`x`}</Formula> disappears from
          so many integrals on <Formula>{String.raw`[0,\pi]`}</Formula>.
        </p>
      </KeyPoint>

      <Expandable title="Worked Examples 37–40 · Using the properties">
        <div className="space-y-5">
          <div>
            <p>
              <strong>Example 37.</strong> Evaluate{" "}
              <Formula>{String.raw`\int_{0}^{\pi/2}\sin^{2}x\,dx`}</Formula> using P4.
            </p>
            <p>
              <strong>Solution.</strong> Let{" "}
              <Formula>{String.raw`I=\int_{0}^{\pi/2}\sin^{2}x\,dx`}</Formula>. Replacing{" "}
              <Formula>{String.raw`x`}</Formula> by{" "}
              <Formula>{String.raw`\frac{\pi}{2}-x`}</Formula> turns{" "}
              <Formula>{String.raw`\sin^{2}x`}</Formula> into{" "}
              <Formula>{String.raw`\cos^{2}x`}</Formula>, so{" "}
              <Formula>{String.raw`I=\int_{0}^{\pi/2}\cos^{2}x\,dx`}</Formula>. Adding,
            </p>
            <FormulaBlock
              latex={String.raw`2I=\int_{0}^{\pi/2}\left(\sin^{2}x+\cos^{2}x\right)dx=\int_{0}^{\pi/2}1\,dx=\frac{\pi}{2}`}
            />
            <p>
              Hence <Formula>{String.raw`I=\frac{\pi}{4}`}</Formula>, with no anti
              derivative computed at all.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 38.</strong> Evaluate{" "}
              <Formula>{String.raw`\int_{0}^{2\pi}|\sin x|\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Here{" "}
              <Formula>{String.raw`|\sin(2\pi-x)|=|\sin x|`}</Formula>, so P7 applies with{" "}
              <Formula>{String.raw`a=\pi`}</Formula>:
            </p>
            <FormulaBlock
              latex={String.raw`\int_{0}^{2\pi}|\sin x|\,dx=2\int_{0}^{\pi}\sin x\,dx=2\left[-\cos x\right]_{0}^{\pi}=2(1+1)=4`}
            />
          </div>
          <div>
            <p>
              <strong>Example 39.</strong> Evaluate{" "}
              <Formula>{String.raw`\int_{0}^{\pi}\frac{x\sin x}{1+\cos^{2}x}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> The integrand is{" "}
              <Formula>{String.raw`x f(\sin x)`}</Formula> with{" "}
              <Formula>{String.raw`f(\sin x)=\frac{\sin x}{1+\cos^{2}x}`}</Formula>, so the
              key result applies:
            </p>
            <FormulaBlock
              latex={String.raw`\int_{0}^{\pi}\frac{x\sin x}{1+\cos^{2}x}\,dx=\frac{\pi}{2}\int_{0}^{\pi}\frac{\sin x}{1+\cos^{2}x}\,dx`}
            />
            <p>
              For the remaining integral put{" "}
              <Formula>{String.raw`t=\cos x`}</Formula>:
            </p>
            <FormulaBlock
              latex={String.raw`\int_{0}^{\pi}\frac{\sin x}{1+\cos^{2}x}\,dx=\left[-\tan^{-1}(\cos x)\right]_{0}^{\pi}=\frac{\pi}{4}+\frac{\pi}{4}=\frac{\pi}{2}`}
            />
            <p>
              Therefore the required value is{" "}
              <Formula>{String.raw`\frac{\pi}{2}\cdot\frac{\pi}{2}=\frac{\pi^{2}}{4}`}</Formula>.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 40.</strong> Use P6 to evaluate{" "}
              <Formula>{String.raw`\int_{-1}^{1}x^{3}\,dx`}</Formula> and{" "}
              <Formula>{String.raw`\int_{-1}^{1}x^{2}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> The first integrand is odd, so the integral is{" "}
              <Formula>{String.raw`0`}</Formula>. The second is even, so
            </p>
            <FormulaBlock
              latex={String.raw`\int_{-1}^{1}x^{2}\,dx=2\int_{0}^{1}x^{2}\,dx=2\cdot\frac{1}{3}=\frac{2}{3}`}
            />
            <p>
              Both answers are immediate — no anti derivative of the odd power is needed.
            </p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 7.10">
        <ExerciseQa
          questions={[
            <span key="q1">
              <Formula>{String.raw`\int_{0}^{\pi/2}\cos^{2}x\,dx`}</Formula>
            </span>,
            <span key="q2">
              <Formula>{String.raw`\int_{-\pi/2}^{\pi/2}\sin^{2}x\,dx`}</Formula>
            </span>,
            <span key="q3">
              <Formula>{String.raw`\int_{-1}^{1}x^{5}\,dx`}</Formula>
            </span>,
            <span key="q4">
              <Formula>{String.raw`\int_{0}^{2\pi}|\cos x|\,dx`}</Formula>
            </span>,
            <span key="q5">
              <Formula>{String.raw`\int_{0}^{1}\frac{x}{1+x^{2}}\,dx`}</Formula>
            </span>,
            <span key="q6">
              <Formula>{String.raw`\int_{0}^{\pi}\frac{x\sin x}{1+\cos^{2}x}\,dx`}</Formula>
            </span>,
            <span key="q7">
              <Formula>{String.raw`\int_{0}^{\pi/2}\frac{\sin x-\cos x}{1+\sin x\cos x}\,dx`}</Formula>
            </span>,
            <span key="q8">
              <Formula>{String.raw`\int_{0}^{1}x(1-x)^{10}\,dx`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`\frac{\pi}{4}`}</Formula>
            </span>,
            <span key="a2">
              <span key="a2b">
                The integrand is even:{" "}
                <Formula>{String.raw`2\int_{0}^{\pi/2}\sin^{2}x\,dx=\frac{\pi}{2}`}</Formula>.
              </span>
            </span>,
            <span key="a3">
              <span key="a3b">
                The integrand is odd, so the value is <Formula>{String.raw`0`}</Formula>.
              </span>
            </span>,
            <span key="a4">
              <Formula>{String.raw`4`}</Formula>
            </span>,
            <span key="a5">
              <Formula>{String.raw`\frac{1}{2}\log 2`}</Formula>
            </span>,
            <span key="a6">
              <Formula>{String.raw`\frac{\pi^{2}}{4}`}</Formula>
            </span>,
            <span key="a7">
              <span key="a7b">
                Under <Formula>{String.raw`x\mapsto\frac{\pi}{2}-x`}</Formula> the integrand
                changes sign, so <Formula>{String.raw`I=-I`}</Formula> and{" "}
                <Formula>{String.raw`I=0`}</Formula>.
              </span>
            </span>,
            <span key="a8">
              <span key="a8b">
                By P4 with <Formula>{String.raw`a=1`}</Formula>, this equals{" "}
                <Formula>{String.raw`\int_{0}^{1}(1-x)x^{10}\,dx=\frac{1}{11}-\frac{1}{12}=\frac{1}{132}`}</Formula>.
              </span>
            </span>,
          ]}
        />
      </Expandable>

      <h2 id="h-7-misc">Miscellaneous Examples</h2>
      <Expandable title="Worked Examples 41–44 · Mixed techniques">
        <div className="space-y-5">
          <div>
            <p>
              <strong>Example 41.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{dx}{1+\sqrt{x}}`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> The square root is the obstacle, so remove it: put{" "}
              <Formula>{String.raw`x=t^{2}`}</Formula>, so{" "}
              <Formula>{String.raw`dx=2t\,dt`}</Formula>. Then
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{dx}{1+\sqrt{x}}=\int \frac{2t\,dt}{1+t}=\int \left(2-\frac{2}{1+t}\right)dt=2t-2\log|1+t|+C`}
            />
            <p>
              Returning to <Formula>{String.raw`x`}</Formula>,
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{dx}{1+\sqrt{x}}=2\sqrt{x}-2\log\left(1+\sqrt{x}\right)+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 42.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{dx}{x^{2}(x+1)}`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> The factor <Formula>{String.raw`x^{2}`}</Formula>{" "}
              is repeated, so the decomposition needs two terms:
            </p>
            <FormulaBlock
              latex={String.raw`\frac{1}{x^{2}(x+1)}=\frac{A}{x}+\frac{B}{x^{2}}+\frac{C}{x+1}`}
            />
            <p>
              Multiplying out, <Formula>{String.raw`1=Ax(x+1)+B(x+1)+Cx^{2}`}</Formula>.
              Putting <Formula>{String.raw`x=0`}</Formula> gives{" "}
              <Formula>{String.raw`B=1`}</Formula>; putting{" "}
              <Formula>{String.raw`x=-1`}</Formula> gives{" "}
              <Formula>{String.raw`C=1`}</Formula>; comparing the{" "}
              <Formula>{String.raw`x^{2}`}</Formula> coefficients gives{" "}
              <Formula>{String.raw`A+C=0`}</Formula>, so{" "}
              <Formula>{String.raw`A=-1`}</Formula>. Hence
            </p>
            <FormulaBlock
              latex={String.raw`\int \frac{dx}{x^{2}(x+1)}=-\log|x|-\frac{1}{x}+\log|x+1|+C=\log\left|\frac{x+1}{x}\right|-\frac{1}{x}+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 43.</strong> Find{" "}
              <Formula>{String.raw`\int e^{\sqrt{x}}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Put <Formula>{String.raw`t=\sqrt{x}`}</Formula>, so{" "}
              <Formula>{String.raw`x=t^{2}`}</Formula> and{" "}
              <Formula>{String.raw`dx=2t\,dt`}</Formula>. The integral becomes a product,
              handled by parts:
            </p>
            <FormulaBlock
              latex={String.raw`\int e^{\sqrt{x}}\,dx=2\int t e^{t}\,dt=2(t-1)e^{t}+C=2\left(\sqrt{x}-1\right)e^{\sqrt{x}}+C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 44.</strong> Evaluate{" "}
              <Formula>{String.raw`\int_{0}^{\pi/2}\frac{\sqrt{\sin x}}{\sqrt{\sin x}+\sqrt{\cos x}}\,dx`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Let the integral be{" "}
              <Formula>{String.raw`I`}</Formula> and apply P4, replacing{" "}
              <Formula>{String.raw`x`}</Formula> by{" "}
              <Formula>{String.raw`\frac{\pi}{2}-x`}</Formula>. The sine and cosine swap, so
              the integrand becomes the complementary fraction:
            </p>
            <FormulaBlock
              latex={String.raw`I=\int_{0}^{\pi/2}\frac{\sqrt{\cos x}}{\sqrt{\sin x}+\sqrt{\cos x}}\,dx`}
            />
            <p>
              Adding the two expressions for <Formula>{String.raw`I`}</Formula>, the
              numerators now fill the denominator:
            </p>
            <FormulaBlock
              latex={String.raw`2I=\int_{0}^{\pi/2}1\,dx=\frac{\pi}{2}\quad\Longrightarrow\quad I=\frac{\pi}{4}`}
            />
          </div>
        </div>
      </Expandable>

      <Expandable title="Miscellaneous Exercise on Chapter 7">
        <ExerciseQa
          questions={[
            <span key="q1">
              <Formula>{String.raw`\int \frac{dx}{1+\sqrt{x}}`}</Formula>
            </span>,
            <span key="q2">
              <Formula>{String.raw`\int \frac{dx}{x^{2}(x+1)}`}</Formula>
            </span>,
            <span key="q3">
              <Formula>{String.raw`\int e^{\sqrt{x}}\,dx`}</Formula>
            </span>,
            <span key="q4">
              <Formula>{String.raw`\int_{0}^{\pi/2}\frac{\sqrt{\sin x}}{\sqrt{\sin x}+\sqrt{\cos x}}\,dx`}</Formula>
            </span>,
            <span key="q5">
              <Formula>{String.raw`\int_{2}^{3}\frac{dx}{x^{2}-1}`}</Formula>
            </span>,
            <span key="q6">
              <Formula>{String.raw`\int \frac{x^{3}}{x+1}\,dx`}</Formula>
            </span>,
            <span key="q7">
              <Formula>{String.raw`\int_{0}^{1}\frac{x^{2}}{1+x^{2}}\,dx`}</Formula>
            </span>,
            <span key="q8">
              <Formula>{String.raw`\int x\cos^{-1}x\,dx`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`2\sqrt{x}-2\log\left(1+\sqrt{x}\right)+C`}</Formula>
            </span>,
            <span key="a2">
              <Formula>{String.raw`\log\left|\frac{x+1}{x}\right|-\frac{1}{x}+C`}</Formula>
            </span>,
            <span key="a3">
              <Formula>{String.raw`2\left(\sqrt{x}-1\right)e^{\sqrt{x}}+C`}</Formula>
            </span>,
            <span key="a4">
              <Formula>{String.raw`\frac{\pi}{4}`}</Formula>
            </span>,
            <span key="a5">
              <Formula>{String.raw`\frac{1}{2}\log\frac{3}{2}`}</Formula>
            </span>,
            <span key="a6">
              <span key="a6b">
                Divide first:{" "}
                <Formula>{String.raw`x^{2}-x+1-\frac{1}{x+1}`}</Formula>, so the integral is{" "}
                <Formula>{String.raw`\frac{x^{3}}{3}-\frac{x^{2}}{2}+x-\log|x+1|+C`}</Formula>.
              </span>
            </span>,
            <span key="a7">
              <Formula>{String.raw`1-\frac{\pi}{4}`}</Formula>
            </span>,
            <span key="a8">
              <Formula>{String.raw`\frac{x^{2}}{2}\cos^{-1}x-\frac{1}{4}\left(x\sqrt{1-x^{2}}-\sin^{-1}x\right)+C`}</Formula>
            </span>,
          ]}
        />
      </Expandable>

      
      <h2 id="h-7-manip">Supplementary worked examples</h2>
      <p>
        These sit on top of the numbered examples above: they collect the kinds of
        manipulation that exam papers favour, and each one keeps full step-by-step
        working so no intermediate algebra is hidden.
      </p>

      <Expandable title="Worked Examples 45–54 · Manipulation and initial value problems">
        <div className="space-y-5">
          <div>
            <p><strong>Example 45.</strong> Find{" "}
              <Formula>{String.raw`\int \left(\sqrt{x}-\frac{1}{\sqrt{x}}\right)^{2}dx`}</Formula>.
            </p>
            <p><strong>Solution.</strong> Expand first using <Formula>{String.raw`(a-b)^{2}=a^{2}-2ab+b^{2}`}</Formula>:</p>
            <FormulaBlock latex={String.raw`\left(\sqrt{x}-\frac{1}{\sqrt{x}}\right)^{2}=x-2+\frac{1}{x}`} />
            <FormulaBlock latex={String.raw`\int \left(x-2+\frac{1}{x}\right)dx=\frac{x^{2}}{2}-2x+\log|x|+C`} />
          </div>
          <div>
            <p><strong>Example 46.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{1-\sin x}{\cos^{2}x}\,dx`}</Formula>.
            </p>
            <p><strong>Solution.</strong> Split the fraction into standard forms:</p>
            <FormulaBlock latex={String.raw`\int \frac{1-\sin x}{\cos^{2}x}\,dx=\int \sec^{2}x\,dx-\int \sec x\tan x\,dx`} />
            <FormulaBlock latex={String.raw`=\tan x-\sec x+C`} />
          </div>
          <div>
            <p><strong>Example 47.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{2-3\sin x}{\cos^{2}x}\,dx`}</Formula>.
            </p>
            <p><strong>Solution.</strong></p>
            <FormulaBlock latex={String.raw`\int \frac{2-3\sin x}{\cos^{2}x}\,dx=2\int \sec^{2}x\,dx-3\int \sec x\tan x\,dx`} />
            <FormulaBlock latex={String.raw`=2\tan x-3\sec x+C`} />
          </div>
          <div>
            <p><strong>Example 48.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{x^{3}+5x^{2}-4}{x^{2}}\,dx`}</Formula>.
            </p>
            <p><strong>Solution.</strong> Divide every term by <Formula>{String.raw`x^{2}`}</Formula>:</p>
            <FormulaBlock latex={String.raw`\int \left(x+5-\frac{4}{x^{2}}\right)dx=\frac{x^{2}}{2}+5x+\frac{4}{x}+C`} />
          </div>
          <div>
            <p><strong>Example 49.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{x^{3}-x^{2}+x-1}{x-1}\,dx`}</Formula>.
            </p>
            <p><strong>Solution.</strong> Factor by grouping and cancel the common factor:</p>
            <FormulaBlock latex={String.raw`\frac{x^{3}-x^{2}+x-1}{x-1}=\frac{x^{2}(x-1)+1(x-1)}{x-1}=x^{2}+1`} />
            <FormulaBlock latex={String.raw`\int (x^{2}+1)\,dx=\frac{x^{3}}{3}+x+C`} />
          </div>
          <div>
            <p><strong>Example 50.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{x^{3}+3x+4}{\sqrt{x}}\,dx`}</Formula>.
            </p>
            <p><strong>Solution.</strong> Rewrite radicals and combine exponents:</p>
            <FormulaBlock latex={String.raw`\int \left(x^{5/2}+3x^{1/2}+4x^{-1/2}\right)dx`} />
            <FormulaBlock latex={String.raw`=\frac{2}{7}x^{7/2}+2x^{3/2}+8\sqrt{x}+C`} />
          </div>
          <div>
            <p><strong>Example 51.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{\sec^{2}x}{\csc^{2}x}\,dx`}</Formula>.
            </p>
            <p><strong>Solution.</strong> Convert to sine and cosine, then use the tangent identity:</p>
            <FormulaBlock latex={String.raw`\int \frac{\sin^{2}x}{\cos^{2}x}\,dx=\int \tan^{2}x\,dx=\int (\sec^{2}x-1)\,dx`} />
            <FormulaBlock latex={String.raw`= \tan x - x + C`} />
          </div>
          <div>
            <p><strong>Example 52.</strong> Find{" "}
              <Formula>{String.raw`\int \cot^{2}x\,dx`}</Formula>.
            </p>
            <p><strong>Solution.</strong> Use <Formula>{String.raw`\cot^{2}x=\csc^{2}x-1`}</Formula>:</p>
            <FormulaBlock latex={String.raw`\int (\csc^{2}x-1)\,dx=-\cot x - x + C`} />
          </div>
          <div>
            <p><strong>Example 53.</strong> Find{" "}
              <Formula>{String.raw`\int \frac{x^{2}}{x^{2}+1}\,dx`}</Formula>.
            </p>
            <p><strong>Solution.</strong> Adjust the numerator:</p>
            <FormulaBlock latex={String.raw`\int \frac{x^{2}}{x^{2}+1}\,dx=\int \left(1-\frac{1}{x^{2}+1}\right)dx`} />
            <FormulaBlock latex={String.raw`=x-\tan^{-1}x+C`} />
          </div>
          <div>
            <p><strong>Example 54.</strong> Find{" "}
              <Formula>{String.raw`\int \sec x(\sec x+\tan x)\,dx`}</Formula>.
            </p>
            <p><strong>Solution.</strong></p>
            <FormulaBlock latex={String.raw`\int (\sec^{2}x+\sec x\tan x)\,dx=\tan x+\sec x+C`} />
          </div>
          <div>
            <p><strong>Example 55 (initial value problem).</strong> Given <Formula>{String.raw`\frac{d}{dx}f(x)=\sec^{2}x`}</Formula> and <Formula>{String.raw`f(45^{\circ})=3`}</Formula>, find <Formula>{String.raw`f(x)`}</Formula>.</p>
            <p><strong>Solution.</strong> Integrate to get <Formula>{String.raw`f(x)=\tan x+C`}</Formula>, then use the condition: <Formula>{String.raw`1+C=3`}</Formula>, so <Formula>{String.raw`C=2`}</Formula>.</p>
            <FormulaBlock latex={String.raw`f(x)=\tan x+2`} />
          </div>
        </div>
      </Expandable>

          <div>
            <p>
              <strong>Example 56.</strong> Find{" "}
              <Formula>{String.raw`\int (2x^{2}-3\sin x+5\sqrt{x})\,dx`}</Formula>.
            </p>
            <p><strong>Solution.</strong> Split and integrate term by term:</p>
            <FormulaBlock
              latex={String.raw`2\int x^{2}\,dx - 3\int \sin x\,dx + 5\int x^{1/2}\,dx`}
            />
            <FormulaBlock
              latex={String.raw`= \frac{2}{3}x^{3} + 3\cos x + \frac{10}{3}x^{3/2} + C`}
            />
          </div>
          <div>
            <p>
              <strong>Example 57 (initial value problem).</strong> Given{" "}
              <Formula>{String.raw`\frac{d}{dx}f(x)=\cos x`}</Formula> and{" "}
              <Formula>{String.raw`f(90^{\circ})=2`}</Formula>, find{" "}
              <Formula>{String.raw`f(x)`}</Formula>.
            </p>
            <p><strong>Solution.</strong> Integrate:</p>
            <FormulaBlock latex={String.raw`f(x)=\sin x + C`} />
            <p>
              Using <Formula>{String.raw`f(90^{\circ})=2`}</Formula>, i.e.{" "}
              <Formula>{String.raw`1+C=2`}</Formula>, gives <Formula>{String.raw`C=1`}</Formula>.
            </p>
            <FormulaBlock latex={String.raw`f(x)=\sin x + 1`} />
          </div>

      <Expandable title="Supplementary Exercise 7.11">
        <p>A compact mixed bank drawn from the manipulation above.</p>
        <ExerciseQa
          questions={[
            <span key="sq1"><Formula>{String.raw`\int \left(\sqrt{x}-\frac{1}{\sqrt{x}}\right)^{2}dx`}</Formula></span>,
            <span key="sq2"><Formula>{String.raw`\int \frac{1-\sin x}{\cos^{2}x}\,dx`}</Formula></span>,
            <span key="sq3"><Formula>{String.raw`\int \frac{2-3\sin x}{\cos^{2}x}\,dx`}</Formula></span>,
            <span key="sq4"><Formula>{String.raw`\int \frac{x^{3}-x^{2}+x-1}{x-1}\,dx`}</Formula></span>,
            <span key="sq5"><Formula>{String.raw`\int \frac{x^{2}}{x^{2}+1}\,dx`}</Formula></span>,
            <span key="sq6"><Formula>{String.raw`\int \frac{\sec^{2}x}{\csc^{2}x}\,dx`}</Formula></span>,
            <span key="sq7"><Formula>{String.raw`\int \frac{x^{3}+3x+4}{\sqrt{x}}\,dx`}</Formula></span>,
            <span key="sq8"><Formula>{String.raw`\int \sec x(\sec x+\tan x)\,dx`}</Formula></span>,
          ]}
          answers={[
            <span key="sa1"><Formula>{String.raw`\frac{x^{2}}{2}-2x+\log|x|+C`}</Formula></span>,
            <span key="sa2"><Formula>{String.raw`\tan x-\sec x+C`}</Formula></span>,
            <span key="sa3"><Formula>{String.raw`2\tan x-3\sec x+C`}</Formula></span>,
            <span key="sa4"><Formula>{String.raw`\frac{x^{3}}{3}+x+C`}</Formula></span>,
            <span key="sa5"><Formula>{String.raw`x-\tan^{-1}x+C`}</Formula></span>,
            <span key="sa6"><Formula>{String.raw`\tan x-x+C`}</Formula></span>,
            <span key="sa7"><Formula>{String.raw`\frac{2}{7}x^{7/2}+2x^{3/2}+8\sqrt{x}+C`}</Formula></span>,
            <span key="sa8"><Formula>{String.raw`\tan x+\sec x+C`}</Formula></span>,
          ]}
        />
      </Expandable>

<SpeedTricks>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Check by differentiating.</strong> An indefinite integral is never
            finished until you differentiate the answer once in your head — it should
            reproduce the integrand.
          </li>
          <li>
            <strong>Substitute when a derivative is watching.</strong> If part of the
            integrand is the derivative of another part, that part is begging to become{" "}
            <Formula>{String.raw`t`}</Formula>.
          </li>
          <li>
            <strong>Even powers of sin and cos: halve the angle.</strong>{" "}
            <Formula>{String.raw`\sin^{2}x`}</Formula> and{" "}
            <Formula>{String.raw`\cos^{2}x`}</Formula> always reduce with the{" "}
            <Formula>{String.raw`2x`}</Formula> identities; never look for a cleverer route.
          </li>
          <li>
            <strong>Products of trig functions: sum, not product.</strong> Convert{" "}
            <Formula>{String.raw`\sin A\sin B`}</Formula> and friends into differences of
            cosines before integrating anything.
          </li>
          <li>
            <strong>ILATE decides by parts.</strong> The earlier family is differentiated.
            If the result does not simplify, the choice was wrong — swap and retry.
          </li>
          <li>
            <strong>Odd function over a symmetric interval is zero.</strong> Spotting an
            odd integrand across <Formula>{String.raw`[-a,a]`}</Formula> saves the entire
            calculation.
          </li>
          <li>
            <strong>In a definite integral, change the limits with the variable.</strong>{" "}
            If you keep the old limits you must convert back; if you convert the limits you
            never look at <Formula>{String.raw`x`}</Formula> again.
          </li>
          <li>
            <strong>Complete the square before quoting a formula.</strong>{" "}
            <Formula>{String.raw`x^{2}+bx+c`}</Formula> is a shifted version of{" "}
            <Formula>{String.raw`u^{2}+a^{2}`}</Formula>, never a new result.
          </li>
        </ul>
      </SpeedTricks>
    </>
  );
}
