"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FactCard } from "@/components/content/concept/FactCard";
import { TableCard } from "@/components/content/data/TableCard";
import { Comparison } from "@/components/content/Comparison";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function ApplicationOfIntegralsChapter() {
  return (
    <>
      <h2 id="h-8-1">8.1 Introduction</h2>
      <p>
        Geometry already gives us closed formulas for the areas of triangles, rectangles,
        trapezia and circles. Those formulas are the backbone of countless real-life
        calculations — but they all assume <strong>straight edges</strong> (or a complete
        circle). None of them can measure a region cut off by an arc of a parabola, an
        ellipse or a sine curve.
      </p>
      <p>
        For such regions we need <strong>integral calculus</strong>. In the previous
        chapter the definite integral was built as the limit of a sum: the area under a
        curve was obtained by squeezing it between sums of rectangular strips. That
        construction is exactly what we exploit here, only now we use it directly with the
        Fundamental Theorem of Calculus instead of taking limits of sums.
      </p>
      <Callout type="important">
        <p>
          For <Formula>{String.raw`f(x)\ge 0`}</Formula> the number{" "}
          <Formula>{String.raw`\int_a^b f(x)\,dx`}</Formula>{" "}
          <Highlight color="yellow">is</Highlight> the area of the region bounded by the
          curve <Formula>{String.raw`y=f(x)`}</Formula>, the x-axis and the ordinates{" "}
          <Formula>{String.raw`x=a`}</Formula>, <Formula>{String.raw`x=b`}</Formula>. In
          this chapter we use that number to measure regions bounded by circles,
          parabolas and ellipses in their standard forms, and by lines cutting through
          them.
        </p>
      </Callout>
      <p>
        <strong>A.L. Cauchy (1789–1857)</strong>
      </p>

      <TableCard
        title="Areas you already know"
        headers={["Figure", "Area"]}
        rows={[
          {
            cells: [
              "Triangle",
              <Formula key="a1">{String.raw`\frac{1}{2}\,b\,h`}</Formula>,
            ],
          },
          {
            cells: [
              "Rectangle",
              <Formula key="a2">{String.raw`b\,h`}</Formula>,
            ],
          },
          {
            cells: [
              "Trapezium",
              <Formula key="a3">{String.raw`\frac{1}{2}(a+b)\,h`}</Formula>,
            ],
          },
          {
            cells: [
              "Circle",
              <Formula key="a4">{String.raw`\pi r^2`}</Formula>,
            ],
          },
        ]}
        caption="Every one of these needs straight edges or a full circle. The moment the boundary is an arc of a parabola, an ellipse or a wave, we must integrate."
      />

      <FactCard
        title="The elementary strip"
        icon="▭"
        definition="A very thin vertical strip of height y = f(x) and width dx contributes an elementary area dA = y dx. The definite integral is simply the sum of all such strips stacked from x = a to x = b."
      />

      <h2 id="h-8-2">8.2 Area under Simple Curves</h2>
      <p>
        Consider the region bounded by the curve{" "}
        <Formula>{String.raw`y=f(x)`}</Formula>, the x-axis and the ordinates{" "}
        <Formula>{String.raw`x=a`}</Formula>, <Formula>{String.raw`x=b`}</Formula>. Think
        of the region as a large number of very thin <strong>vertical strips</strong>. An
        arbitrary strip at position <Formula>x</Formula> has height{" "}
        <Formula>{String.raw`y=f(x)`}</Formula> and width{" "}
        <Formula>{String.raw`dx`}</Formula>, so its area is
      </p>
      <FormulaBlock latex={String.raw`dA=y\,dx=f(x)\,dx`} label="elementary area" />
      <p>
        Adding all strips from <Formula>{String.raw`x=a`}</Formula> to{" "}
        <Formula>{String.raw`x=b`}</Formula> gives the whole area:
      </p>
      <FormulaBlock
        latex={String.raw`A=\int_a^b y\,dx=\int_a^b f(x)\,dx`}
        label="Area under a curve (vertical strips)"
        important
      />
      <p>
        If instead the region is bounded by the curve{" "}
        <Formula>{String.raw`x=g(y)`}</Formula>, the y-axis and the lines{" "}
        <Formula>{String.raw`y=c`}</Formula>, <Formula>{String.raw`y=d`}</Formula>, we cut
        it into <strong>horizontal strips</strong>. A strip at height{" "}
        <Formula>y</Formula> has length <Formula>{String.raw`x=g(y)`}</Formula> and
        thickness <Formula>{String.raw`dy`}</Formula>, hence
      </p>
      <FormulaBlock
        latex={String.raw`A=\int_c^d x\,dy=\int_c^d g(y)\,dy`}
        label="Area against the y-axis (horizontal strips)"
        important
      />
      <Callout type="warning">
        <p>
          The integral is signed. If the curve lies <strong>below</strong> the x-axis then{" "}
          <Formula>{String.raw`f(x)<0`}</Formula> on{" "}
          <Formula>{String.raw`[a,b]`}</Formula>, so{" "}
          <Formula>{String.raw`\int_a^b f(x)\,dx`}</Formula> comes out negative. Only the
          numerical value is wanted, so the area is{" "}
          <Formula>{String.raw`\left|\int_a^b f(x)\,dx\right|`}</Formula>.
        </p>
        <p className="mt-2">
          If part of the curve is above and part below, split the region at the point(s)
          where it meets the x-axis and add the magnitudes of the pieces.
        </p>
      </Callout>

      <Comparison
        columns={[
          {
            title: "Curve stays above the axis",
            children: (
              <>
                <p>
                  Here <Formula>{String.raw`f(x)\ge 0`}</Formula> throughout, so the
                  integral is already the area.
                </p>
                <p className="mt-2">
                  <Formula>{String.raw`A=\int_a^b f(x)\,dx`}</Formula>
                </p>
              </>
            ),
          },
          {
            title: "Curve dips below or crosses",
            children: (
              <>
                <p>
                  Below the axis the integral counts area as negative, so it can even
                  cancel area above the axis.
                </p>
                <p className="mt-2">
                  <Formula>{String.raw`A=|A_1|+A_2`}</Formula> — integrate each piece
                  separately.
                </p>
              </>
            ),
          },
        ]}
      />

      <KeyPoint>
        <p>Two habits that prevent almost every mistake:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>
            <strong>Sketch first.</strong> Locate where the curve meets the x-axis; those
            points become the splitting limits.
          </li>
          <li>
            <strong>Always subtract the lower boundary from the upper one</strong> inside
            the integrand, then keep the limits increasing left to right.
          </li>
        </ul>
      </KeyPoint>

      <Expandable title="Examples 1 to 2 — NCERT">
        <KeyPoint title="Example 1">
          <p>
            Find the area enclosed by the circle{" "}
            <Formula>{String.raw`x^2+y^2=a^2`}</Formula>.
          </p>
          <p className="mt-3">
            <strong>Solution.</strong> The circle is symmetrical about both axes, so the
            whole area is <Formula>4</Formula> times the area of the part{" "}
            <Formula>AOBA</Formula> lying in the first quadrant — the region bounded by
            the arc from <Formula>{String.raw`(a,0)`}</Formula> to{" "}
            <Formula>{String.raw`(0,a)`}</Formula> and the two axes.
          </p>
          <p>
            In the first quadrant{" "}
            <Formula>{String.raw`y=+\sqrt{a^2-x^2}`}</Formula> (the positive sign, because
            the region is above the x-axis). Taking vertical strips from{" "}
            <Formula>{String.raw`x=0`}</Formula> to <Formula>{String.raw`x=a`}</Formula>:
          </p>
          <FormulaBlock latex={String.raw`A=4\int_0^a \sqrt{a^2-x^2}\;dx`} />
          <p>Use the standard antiderivative</p>
          <FormulaBlock
            latex={String.raw`\int \sqrt{a^2-x^2}\;dx=\frac{x}{2}\sqrt{a^2-x^2}+\frac{a^2}{2}\sin^{-1}\frac{x}{a}`}
          />
          <p>so that</p>
          <FormulaBlock
            latex={String.raw`A=4\left[\frac{x}{2}\sqrt{a^2-x^2}+\frac{a^2}{2}\sin^{-1}\frac{x}{a}\right]_0^a`}
          />
          <p>
            At <Formula>{String.raw`x=a`}</Formula> the square-root term vanishes and{" "}
            <Formula>{String.raw`\sin^{-1}1=\frac{\pi}{2}`}</Formula>; at{" "}
            <Formula>{String.raw`x=0`}</Formula> both terms vanish. Hence
          </p>
          <FormulaBlock
            latex={String.raw`A=4\left(0+\frac{a^2}{2}\cdot\frac{\pi}{2}\right)=4\cdot\frac{\pi a^2}{4}=\pi a^2`}
            important
          />
          <p>
            <strong>Same answer with horizontal strips.</strong> Writing{" "}
            <Formula>{String.raw`x=+\sqrt{a^2-y^2}`}</Formula> along{" "}
            <Formula>{String.raw`y=0`}</Formula> to <Formula>{String.raw`y=a`}</Formula>{" "}
            and again multiplying by <Formula>4</Formula>,
          </p>
          <FormulaBlock
            latex={String.raw`A=4\int_0^a \sqrt{a^2-y^2}\;dy=4\cdot\frac{\pi a^2}{4}=\pi a^2`}
          />
        </KeyPoint>

        <KeyPoint title="Example 2">
          <p>
            Find the area enclosed by the ellipse{" "}
            <Formula>{String.raw`\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1`}</Formula>.
          </p>
          <p className="mt-3">
            <strong>Solution.</strong> The ellipse is symmetrical about both axes, so the
            required area is <Formula>4</Formula> times the area of the first-quadrant
            region <Formula>AOBA</Formula>.
          </p>
          <p>
            From the equation,{" "}
            <Formula>{String.raw`y=\pm\frac{b}{a}\sqrt{a^2-x^2}`}</Formula>; in the first
            quadrant we take the positive sign:
          </p>
          <FormulaBlock
            latex={String.raw`y=\frac{b}{a}\sqrt{a^2-x^2},\qquad 0\le x\le a`}
          />
          <p>Taking vertical strips,</p>
          <FormulaBlock
            latex={String.raw`A=4\int_0^a \frac{b}{a}\sqrt{a^2-x^2}\;dx=\frac{4b}{a}\int_0^a\sqrt{a^2-x^2}\;dx`}
          />
          <p>
            Using the same antiderivative as in Example 1, the bracket evaluated from{" "}
            <Formula>0</Formula> to <Formula>a</Formula> equals{" "}
            <Formula>{String.raw`\dfrac{\pi a^2}{4}`}</Formula>, therefore
          </p>
          <FormulaBlock
            latex={String.raw`A=\frac{4b}{a}\cdot\frac{\pi a^2}{4}=\pi ab`}
            important
          />
          <p>
            A circular region is the special case{" "}
            <Formula>{String.raw`a=b=r`}</Formula>, giving{" "}
            <Formula>{String.raw`\pi r^2`}</Formula> as it must.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Examples 3 to 4 — NCERT">
        <p>
          These are the textbook&apos;s miscellaneous examples. Both are pure 8.2 problems
          whose only new feature is that the curve changes sign, so the region must be
          split before integrating.
        </p>

        <KeyPoint title="Example 3">
          <p>
            Find the area of the region bounded by the line{" "}
            <Formula>{String.raw`y=3x+2`}</Formula>, the x-axis and the ordinates{" "}
            <Formula>{String.raw`x=-1`}</Formula> and <Formula>{String.raw`x=1`}</Formula>.
          </p>
          <p className="mt-3">
            <strong>Solution.</strong> The line meets the x-axis where{" "}
            <Formula>{String.raw`3x+2=0`}</Formula>, i.e. at{" "}
            <Formula>{String.raw`x=-\dfrac{2}{3}`}</Formula>. So it lies{" "}
            <em>below</em> the axis for{" "}
            <Formula>{String.raw`-1\le x<-\dfrac{2}{3}`}</Formula> and{" "}
            <em>above</em> the axis for{" "}
            <Formula>{String.raw`-\dfrac{2}{3}<x\le 1`}</Formula>. The total area is the sum
            of the magnitudes of the two pieces:
          </p>
          <FormulaBlock
            latex={String.raw`A=\left|\int_{-1}^{-2/3}(3x+2)\,dx\right|+\int_{-2/3}^{1}(3x+2)\,dx`}
          />
          <p>
            Antiderivative:{" "}
            <Formula>{String.raw`\dfrac{3x^2}{2}+2x`}</Formula>.
          </p>
          <FormulaBlock
            latex={String.raw`\int_{-1}^{-2/3}(3x+2)\,dx=\left[\frac{3x^2}{2}+2x\right]_{-1}^{-2/3}=-\frac{2}{3}-\left(-\frac{1}{2}\right)=-\frac{1}{6}`}
          />
          <FormulaBlock
            latex={String.raw`\int_{-2/3}^{1}(3x+2)\,dx=\left[\frac{3x^2}{2}+2x\right]_{-2/3}^{1}=\frac{7}{2}-\left(-\frac{2}{3}\right)=\frac{25}{6}`}
          />
          <p>Therefore</p>
          <FormulaBlock
            latex={String.raw`A=\frac{1}{6}+\frac{25}{6}=\frac{26}{6}=\frac{13}{3}\ \text{sq. units}`}
            important
          />
        </KeyPoint>

        <KeyPoint title="Example 4">
          <p>
            Find the area bounded by the curve{" "}
            <Formula>{String.raw`y=\cos x`}</Formula> between{" "}
            <Formula>{String.raw`x=0`}</Formula> and <Formula>{String.raw`x=2\pi`}</Formula>.
          </p>
          <p className="mt-3">
            <strong>Solution.</strong> Between <Formula>0</Formula> and{" "}
            <Formula>{String.raw`2\pi`}</Formula> the cosine curve is positive on{" "}
            <Formula>{String.raw`(0,\tfrac{\pi}{2})`}</Formula>, negative on{" "}
            <Formula>{String.raw`(\tfrac{\pi}{2},\tfrac{3\pi}{2})`}</Formula> and positive
            again on{" "}
            <Formula>{String.raw`(\tfrac{3\pi}{2},2\pi)`}</Formula>. So the region consists
            of three pieces:
          </p>
          <FormulaBlock
            latex={String.raw`A=\int_0^{\pi/2}\cos x\,dx+\left|\int_{\pi/2}^{3\pi/2}\cos x\,dx\right|+\int_{3\pi/2}^{2\pi}\cos x\,dx`}
          />
          <p>Evaluating each with antiderivative <Formula>{String.raw`\sin x`}</Formula>:</p>
          <FormulaBlock latex={String.raw`\int_0^{\pi/2}\cos x\,dx=\big[\sin x\big]_0^{\pi/2}=1`} />
          <FormulaBlock latex={String.raw`\int_{\pi/2}^{3\pi/2}\cos x\,dx=\big[\sin x\big]_{\pi/2}^{3\pi/2}=-1-1=-2`} />
          <FormulaBlock latex={String.raw`\int_{3\pi/2}^{2\pi}\cos x\,dx=\big[\sin x\big]_{3\pi/2}^{2\pi}=0-(-1)=1`} />
          <p>Adding the magnitudes,</p>
          <FormulaBlock
            latex={String.raw`A=1+2+1=4\ \text{sq. units}`}
            important
          />
          <Callout type="tip">
            <p>
              Notice that{" "}
              <Formula>{String.raw`\int_0^{2\pi}\cos x\,dx=0`}</Formula> would have been a
              disastrous answer — the areas above and below the axis cancel. That is why
              the split is compulsory.
            </p>
          </Callout>
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 8.1">
        <ExerciseQa
          questions={[
            <span key="q1">
              Find the area of the region bounded by the ellipse{" "}
              <Formula>{String.raw`\dfrac{x^2}{16}+\dfrac{y^2}{9}=1`}</Formula>.
            </span>,
            <span key="q2">
              Find the area of the region bounded by the ellipse{" "}
              <Formula>{String.raw`\dfrac{x^2}{4}+\dfrac{y^2}{9}=1`}</Formula>.
            </span>,
            <span key="q3">
              Area lying in the first quadrant and bounded by the circle{" "}
              <Formula>{String.raw`x^2+y^2=4`}</Formula> and the lines{" "}
              <Formula>{String.raw`x=0`}</Formula> and{" "}
              <Formula>{String.raw`x=2`}</Formula> is{" "}
              (A) <Formula>{String.raw`\pi`}</Formula> (B){" "}
              <Formula>{String.raw`\dfrac{\pi}{2}`}</Formula> (C){" "}
              <Formula>{String.raw`\dfrac{\pi}{3}`}</Formula> (D){" "}
              <Formula>{String.raw`\dfrac{\pi}{4}`}</Formula>
            </span>,
            <span key="q4">
              Area of the region bounded by the curve{" "}
              <Formula>{String.raw`y^2=4x`}</Formula>, the y-axis and the line{" "}
              <Formula>{String.raw`y=3`}</Formula> is{" "}
              (A) <Formula>2</Formula> (B){" "}
              <Formula>{String.raw`\dfrac{9}{4}`}</Formula> (C){" "}
              <Formula>{String.raw`\dfrac{9}{3}`}</Formula> (D){" "}
              <Formula>{String.raw`\dfrac{9}{2}`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`\pi ab=\pi\cdot 4\cdot 3=12\pi`}</Formula> sq. units
            </span>,
            <span key="a2">
              <Formula>{String.raw`\pi ab=\pi\cdot 2\cdot 3=6\pi`}</Formula> sq. units
            </span>,
            <span key="a3">
              (A) — a quarter of the circle of radius <Formula>2</Formula>:{" "}
              <Formula>{String.raw`4\int_0^2\sqrt{4-x^2}\,dx=\pi`}</Formula>
            </span>,
            <span key="a4">
              (B){" "}
              <Formula>{String.raw`\int_0^3 x\,dy=\int_0^3\frac{y^2}{4}\,dy=\left[\frac{y^3}{12}\right]_0^3=\frac{9}{4}`}</Formula>
            </span>,
          ]}
        />
      </Expandable>

      <h2 id="h-8-3">8.3 Area of the Region Bounded by a Curve and a Line</h2>
      <p>
        When a straight line cuts across a region bounded by a curve, the line becomes one
        of the boundaries. The region is then trapped between two graphs — the curve and
        the line — and the area is the integral of the <strong>gap</strong> between them.
        Typically the line lies above the curve over part of the region and below it over
        another part, so the intersection points decide how many integrals we need.
      </p>
      <Callout type="note">
        <p className="font-semibold">Working method</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5">
          <li>Sketch the curve and the line on the same axes.</li>
          <li>
            Solve their equations simultaneously to get the points of intersection — these
            give the limits.
          </li>
          <li>
            Between two consecutive intersections decide which graph is <em>upper</em> and
            which is <em>lower</em>.
          </li>
          <li>
            Integrate <Formula>{String.raw`(\text{upper})-(\text{lower})`}</Formula> over
            that interval, and add the pieces if there is more than one.
          </li>
        </ol>
      </Callout>
      <FormulaBlock
        latex={String.raw`A=\int_a^b\big[f(x)-g(x)\big]\,dx,\qquad f(x)\ge g(x)\ \text{on}\ [a,b]`}
        label="Region between a curve and a line"
        important
      />
      <Callout type="tip">
        <p>
          If the line is vertical (say <Formula>{String.raw`x=k`}</Formula>) or the curve
          opens sideways like <Formula>{String.raw`y^2=4x`}</Formula>, it is often easier to
          cut the region into <strong>horizontal</strong> strips and integrate with respect
          to <Formula>y</Formula>.
        </p>
      </Callout>

      <Expandable title="Examples 5 to 8 — NCERT">
        <KeyPoint title="Example 5">
          <p>
            Find the area of the region bounded by the curve{" "}
            <Formula>{String.raw`y^2=4x`}</Formula>, the y-axis and the line{" "}
            <Formula>{String.raw`y=3`}</Formula>.
          </p>
          <p className="mt-3">
            <strong>Solution.</strong> The parabola opens to the right and the region is
            trapped between the y-axis (left) and the arc of the parabola (right), from{" "}
            <Formula>{String.raw`y=0`}</Formula> up to{" "}
            <Formula>{String.raw`y=3`}</Formula>. Horizontal strips are natural here, and
            on the curve{" "}
            <Formula>{String.raw`x=\dfrac{y^2}{4}`}</Formula>. Hence
          </p>
          <FormulaBlock
            latex={String.raw`A=\int_0^3 x\,dy=\int_0^3\frac{y^2}{4}\,dy=\left[\frac{y^3}{12}\right]_0^3`}
          />
          <FormulaBlock
            latex={String.raw`A=\frac{27}{12}=\frac{9}{4}\ \text{sq. units}`}
            important
          />
        </KeyPoint>

        <KeyPoint title="Example 6">
          <p>
            Find the area of the region in the first quadrant enclosed by the x-axis, the
            line <Formula>{String.raw`y=x`}</Formula> and the circle{" "}
            <Formula>{String.raw`x^2+y^2=32`}</Formula>.
          </p>
          <p className="mt-3">
            <strong>Solution.</strong> The line and the circle meet where{" "}
            <Formula>{String.raw`x^2+x^2=32`}</Formula>, i.e.{" "}
            <Formula>{String.raw`x=4`}</Formula>, <Formula>{String.raw`y=4`}</Formula>. The
            circle crosses the x-axis at{" "}
            <Formula>{String.raw`x=\sqrt{32}=4\sqrt{2}`}</Formula>.
          </p>
          <p>
            The region must be split at <Formula>{String.raw`x=4`}</Formula>:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              from <Formula>0</Formula> to <Formula>4</Formula> the upper boundary is the
              line <Formula>{String.raw`y=x`}</Formula>;
            </li>
            <li>
              from <Formula>4</Formula> to{" "}
              <Formula>{String.raw`4\sqrt{2}`}</Formula> the upper boundary is the circle{" "}
              <Formula>{String.raw`y=\sqrt{32-x^2}`}</Formula>.
            </li>
          </ul>
          <FormulaBlock
            latex={String.raw`A=\int_0^4 x\,dx+\int_4^{4\sqrt{2}}\sqrt{32-x^2}\;dx`}
          />
          <p>
            The first integral is{" "}
            <Formula>{String.raw`\left[\dfrac{x^2}{2}\right]_0^4=8`}</Formula>. For the
            second, with <Formula>{String.raw`a=4\sqrt{2}`}</Formula>,
          </p>
          <FormulaBlock
            latex={String.raw`\int \sqrt{32-x^2}\,dx=\frac{x}{2}\sqrt{32-x^2}+16\sin^{-1}\frac{x}{4\sqrt{2}}`}
          />
          <p>Evaluating from <Formula>4</Formula> to <Formula>{String.raw`4\sqrt{2}`}</Formula>:</p>
          <FormulaBlock
            latex={String.raw`\left[\ \right]_4^{4\sqrt{2}}=\left(0+16\cdot\frac{\pi}{2}\right)-\left(2\cdot 4+16\cdot\frac{\pi}{4}\right)=8\pi-(8+4\pi)`}
          />
          <p>So the second piece is <Formula>{String.raw`4\pi-8`}</Formula>, and</p>
          <FormulaBlock
            latex={String.raw`A=8+(4\pi-8)=4\pi\ \text{sq. units}`}
            important
          />
        </KeyPoint>

        <KeyPoint title="Example 7">
          <p>
            Find the area of the smaller region bounded by the ellipse{" "}
            <Formula>{String.raw`\dfrac{x^2}{9}+\dfrac{y^2}{4}=1`}</Formula> and the line{" "}
            <Formula>{String.raw`\dfrac{x}{3}+\dfrac{y}{2}=1`}</Formula>.
          </p>
          <p className="mt-3">
            <strong>Solution.</strong> The line joins{" "}
            <Formula>{String.raw`(3,0)`}</Formula> and{" "}
            <Formula>{String.raw`(0,2)`}</Formula>, which are exactly the ends of the arc of
            the ellipse in the first quadrant. So the smaller region is the part of the
            first-quadrant ellipse lying <em>between</em> the arc and the chord.
          </p>
          <p>
            Upper boundary (arc):{" "}
            <Formula>{String.raw`y=\frac{2}{3}\sqrt{9-x^2}`}</Formula>. Lower boundary
            (chord):{" "}
            <Formula>{String.raw`y=2-\frac{2x}{3}`}</Formula>. Hence
          </p>
          <FormulaBlock
            latex={String.raw`A=\int_0^3\left[\frac{2}{3}\sqrt{9-x^2}-\left(2-\frac{2x}{3}\right)\right]dx`}
          />
          <p>Split it into two integrals:</p>
          <FormulaBlock
            latex={String.raw`\int_0^3\frac{2}{3}\sqrt{9-x^2}\,dx=\frac{2}{3}\cdot\frac{\pi\cdot 9}{4}=\frac{3\pi}{2}`}
          />
          <FormulaBlock
            latex={String.raw`\int_0^3\left(2-\frac{2x}{3}\right)dx=\left[2x-\frac{x^2}{3}\right]_0^3=6-3=3`}
          />
          <p>Therefore</p>
          <FormulaBlock
            latex={String.raw`A=\frac{3\pi}{2}-3=\frac{3(\pi-2)}{2}\ \text{sq. units}`}
            important
          />
          <p>
            The two pieces have a neat reading:{" "}
            <Formula>{String.raw`\frac{3\pi}{2}`}</Formula> is the quarter-ellipse and{" "}
            <Formula>3</Formula> is the right triangle under the chord.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 8">
          <p>
            Find the area of the region enclosed by the parabola{" "}
            <Formula>{String.raw`x^2=y`}</Formula> and the line{" "}
            <Formula>{String.raw`y=x+2`}</Formula>.
          </p>
          <p className="mt-3">
            <strong>Solution.</strong> Substitute <Formula>{String.raw`y=x+2`}</Formula>{" "}
            into the parabola:
          </p>
          <FormulaBlock
            latex={String.raw`x^2=x+2\ \Longrightarrow\ x^2-x-2=0\ \Longrightarrow\ (x-2)(x+1)=0`}
          />
          <p>
            So the points of intersection are{" "}
            <Formula>{String.raw`(2,4)`}</Formula> and{" "}
            <Formula>{String.raw`(-1,1)`}</Formula>, and the limits are{" "}
            <Formula>{String.raw`-1`}</Formula> to <Formula>2</Formula>. On this interval
            the line is the upper boundary and the parabola the lower one:
          </p>
          <FormulaBlock
            latex={String.raw`A=\int_{-1}^{2}\big[(x+2)-x^2\big]\,dx=\left[\frac{x^2}{2}+2x-\frac{x^3}{3}\right]_{-1}^{2}`}
          />
          <p>
            At <Formula>x=2</Formula>:{" "}
            <Formula>{String.raw`2+4-\frac{8}{3}=\frac{10}{3}`}</Formula>. At{" "}
            <Formula>{String.raw`x=-1`}</Formula>:{" "}
            <Formula>{String.raw`\frac{1}{2}-2+\frac{1}{3}=-\frac{7}{6}`}</Formula>. Thus
          </p>
          <FormulaBlock
            latex={String.raw`A=\frac{10}{3}+\frac{7}{6}=\frac{20+7}{6}=\frac{9}{2}\ \text{sq. units}`}
            important
          />
        </KeyPoint>
      </Expandable>

      <h2 id="h-8-4">8.4 Area Between Two Curves</h2>
      <p>
        Sections 8.2 and 8.3 are both special cases of one idea. If two curves{" "}
        <Formula>{String.raw`y=f(x)`}</Formula> and{" "}
        <Formula>{String.raw`y=g(x)`}</Formula> bound a region between{" "}
        <Formula>{String.raw`x=a`}</Formula> and <Formula>{String.raw`x=b`}</Formula>, with{" "}
        <Formula>f</Formula> lying above <Formula>g</Formula> throughout, then the vertical
        strip at <Formula>x</Formula> has height{" "}
        <Formula>{String.raw`f(x)-g(x)`}</Formula>, so
      </p>
      <FormulaBlock
        latex={String.raw`A=\int_a^b\big[f(x)-g(x)\big]\,dx,\qquad f(x)\ge g(x)\ \text{on}\ [a,b]`}
        label="Area between two curves"
        important
      />
      <p>
        The limits <Formula>{String.raw`a`}</Formula> and{" "}
        <Formula>{String.raw`b`}</Formula> are almost always the{" "}
        <strong>points of intersection</strong> of the two curves, obtained by solving{" "}
        <Formula>{String.raw`f(x)=g(x)`}</Formula>.
      </p>
      <Callout type="important">
        <p>
          If the curves cross <em>inside</em> the interval — say at{" "}
          <Formula>{String.raw`x=c`}</Formula> with{" "}
          <Formula>{String.raw`a<c<b`}</Formula> — then which curve is on top{" "}
          <Highlight color="yellow">changes at c</Highlight>. Never integrate straight
          across a crossing; split the region at <Formula>c</Formula> and reverse the
          subtraction on the second piece:
        </p>
        <FormulaBlock
          latex={String.raw`A=\int_a^c\big[f(x)-g(x)\big]dx+\int_c^b\big[g(x)-f(x)\big]dx`}
        />
        <p>
          Everything also works with <Formula>x</Formula> as a function of{" "}
          <Formula>y</Formula>: then a horizontal strip runs from the left curve to the
          right curve and
        </p>
        <FormulaBlock latex={String.raw`A=\int_c^d\big[x_R(y)-x_L(y)\big]\,dy`} />
      </Callout>

      <TableCard
        title="Which strips should I use?"
        headers={["Situation", "Cut the region into", "Formula"]}
        rows={[
          {
            cells: [
              "Both curves given as y = f(x), y = g(x)",
              "Vertical strips",
              <Formula key="r1">{String.raw`\int_a^b (y_{\text{upper}}-y_{\text{lower}})\,dx`}</Formula>,
            ],
          },
          {
            cells: [
              "Curves given as x = g(y) — e.g. y² = 4x",
              "Horizontal strips",
              <Formula key="r2">{String.raw`\int_c^d (x_{\text{right}}-x_{\text{left}})\,dy`}</Formula>,
            ],
          },
          {
            cells: [
              "Curves cross inside the interval",
              "Split at each intersection",
              <Formula key="r3">{String.raw`\int_a^c (f-g)\,dx+\int_c^b (g-f)\,dx`}</Formula>,
            ],
          },
          {
            cells: [
              "Region symmetrical about an axis",
              "One half",
              <Formula key="r4">{String.raw`2\times(\text{one half})`}</Formula>,
            ],
          },
        ]}
        caption="The strip you choose only changes the algebra, never the answer. Choose whichever side makes the boundaries single-valued."
      />

      <Expandable title="Examples 9 to 10 — NCERT">
        <KeyPoint title="Example 9">
          <p>
            Find the area of the region bounded by the two parabolas{" "}
            <Formula>{String.raw`y^2=4x`}</Formula> and{" "}
            <Formula>{String.raw`x^2=4y`}</Formula>.
          </p>
          <p className="mt-3">
            <strong>Solution.</strong> The parabolas meet where{" "}
            <Formula>{String.raw`\left(\dfrac{x^2}{4}\right)^2=4x`}</Formula>, i.e.
          </p>
          <FormulaBlock
            latex={String.raw`x^4=64x\ \Longrightarrow\ x\left(x^3-64\right)=0\ \Longrightarrow\ x=0\ \text{or}\ x=4`}
          />
          <p>
            So the region lies between <Formula>{String.raw`x=0`}</Formula> and{" "}
            <Formula>{String.raw`x=4`}</Formula>, and there the upper boundary is{" "}
            <Formula>{String.raw`y=2\sqrt{x}`}</Formula> while the lower one is{" "}
            <Formula>{String.raw`y=\dfrac{x^2}{4}`}</Formula>. Hence
          </p>
          <FormulaBlock
            latex={String.raw`A=\int_0^4\left(2\sqrt{x}-\frac{x^2}{4}\right)dx=\left[\frac{4}{3}x^{3/2}-\frac{x^3}{12}\right]_0^4`}
          />
          <FormulaBlock
            latex={String.raw`A=\left(\frac{4}{3}\cdot 8-\frac{64}{12}\right)-0=\frac{32}{3}-\frac{16}{3}=\frac{16}{3}\ \text{sq. units}`}
            important
          />
        </KeyPoint>

        <KeyPoint title="Example 10">
          <p>
            Find the area bounded by the curves{" "}
            <Formula>{String.raw`y=x^2`}</Formula> and{" "}
            <Formula>{String.raw`y=\sqrt{x}`}</Formula>, and verify the result by cutting
            the region into horizontal strips.
          </p>
          <p className="mt-3">
            <strong>Solution.</strong> The curves meet at{" "}
            <Formula>{String.raw`x^2=\sqrt{x}`}</Formula>, i.e. at{" "}
            <Formula>{String.raw`x=0`}</Formula> and{" "}
            <Formula>{String.raw`x=1`}</Formula>. On{" "}
            <Formula>{String.raw`(0,1)`}</Formula> we have{" "}
            <Formula>{String.raw`\sqrt{x}>x^2`}</Formula>, so the square-root curve is on
            top:
          </p>
          <FormulaBlock
            latex={String.raw`A=\int_0^1\left(\sqrt{x}-x^2\right)dx=\left[\frac{2}{3}x^{3/2}-\frac{x^3}{3}\right]_0^1`}
          />
          <FormulaBlock latex={String.raw`A=\frac{2}{3}-\frac{1}{3}=\frac{1}{3}\ \text{sq. units}`} />
          <p>
            <strong>Check with horizontal strips.</strong> Height <Formula>y</Formula> runs
            from <Formula>0</Formula> to <Formula>1</Formula>. At that height the right
            boundary is{" "}
            <Formula>{String.raw`x=\sqrt{y}`}</Formula> (from{" "}
            <Formula>{String.raw`y=x^2`}</Formula>) and the left one is{" "}
            <Formula>{String.raw`x=y^2`}</Formula> (from{" "}
            <Formula>{String.raw`y=\sqrt{x}`}</Formula>):
          </p>
          <FormulaBlock
            latex={String.raw`A=\int_0^1\left(\sqrt{y}-y^2\right)dy=\left[\frac{2}{3}y^{3/2}-\frac{y^3}{3}\right]_0^1=\frac{1}{3}`}
            important
          />
          <p>The two methods agree, as they must.</p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 8.2">
        <ExerciseQa
          questions={[
            <span key="q1">
              Find the area of the circle{" "}
              <Formula>{String.raw`4x^2+4y^2=9`}</Formula> which is interior to the
              parabola <Formula>{String.raw`x^2=4y`}</Formula>.
            </span>,
            <span key="q2">
              Find the area bounded by the curves{" "}
              <Formula>{String.raw`(x-1)^2+y^2=1`}</Formula> and{" "}
              <Formula>{String.raw`x^2+y^2=1`}</Formula>.
            </span>,
            <span key="q3">
              Find the area of the region bounded by the curves{" "}
              <Formula>{String.raw`y=x^2+2`}</Formula>, <Formula>{String.raw`y=x`}</Formula>,{" "}
              <Formula>{String.raw`x=0`}</Formula> and{" "}
              <Formula>{String.raw`x=3`}</Formula>.
            </span>,
            <span key="q4">
              Using integration, find the area of the region bounded by the triangle whose
              vertices are <Formula>{String.raw`(-1,0)`}</Formula>,{" "}
              <Formula>{String.raw`(1,3)`}</Formula> and{" "}
              <Formula>{String.raw`(3,2)`}</Formula>.
            </span>,
            <span key="q5">
              Using integration, find the area of the triangular region whose sides have the
              equations <Formula>{String.raw`y=2x+1`}</Formula>,{" "}
              <Formula>{String.raw`y=3x+1`}</Formula> and{" "}
              <Formula>{String.raw`x=4`}</Formula>.
            </span>,
            <span key="q6">
              Smaller area enclosed by the circle{" "}
              <Formula>{String.raw`x^2+y^2=4`}</Formula> and the line{" "}
              <Formula>{String.raw`x+y=2`}</Formula> is{" "}
              (A) <Formula>{String.raw`2(\pi-2)`}</Formula> (B){" "}
              <Formula>{String.raw`\pi-2`}</Formula> (C){" "}
              <Formula>{String.raw`2\pi-1`}</Formula> (D){" "}
              <Formula>{String.raw`2(\pi+2)`}</Formula>
            </span>,
            <span key="q7">
              Area lying between the curves{" "}
              <Formula>{String.raw`y^2=4x`}</Formula> and{" "}
              <Formula>{String.raw`y=2x`}</Formula> is{" "}
              (A) <Formula>{String.raw`\dfrac{2}{3}`}</Formula> (B){" "}
              <Formula>{String.raw`\dfrac{1}{3}`}</Formula> (C){" "}
              <Formula>{String.raw`\dfrac{1}{4}`}</Formula> (D){" "}
              <Formula>{String.raw`\dfrac{3}{4}`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              Intersection at{" "}
              <Formula>{String.raw`x=\pm\sqrt{2},\ y=\tfrac{1}{2}`}</Formula>; the circle is{" "}
              <Formula>{String.raw`x^2+y^2=\tfrac{9}{4}`}</Formula>, so{" "}
              <Formula>{String.raw`A=2\int_0^{\sqrt{2}}\left(\sqrt{\tfrac{9}{4}-x^2}-\frac{x^2}{4}\right)dx=\frac{9}{4}\sin^{-1}\frac{2\sqrt{2}}{3}+\frac{\sqrt{2}}{6}`}</Formula>
            </span>,
            <span key="a2">
              Circles meet at{" "}
              <Formula>{String.raw`x=\tfrac{1}{2}`}</Formula>,{" "}
              <Formula>{String.raw`y=\pm\tfrac{\sqrt{3}}{2}`}</Formula>; the lens is{" "}
              <Formula>{String.raw`A=\frac{2\pi}{3}-\frac{\sqrt{3}}{2}`}</Formula>
            </span>,
            <span key="a3">
              On <Formula>{String.raw`[0,3]`}</Formula> the parabola is above the line:{" "}
              <Formula>{String.raw`\int_0^3(x^2-x+2)\,dx=9-\frac{9}{2}+6=\frac{21}{2}`}</Formula>
            </span>,
            <span key="a4">
              Sides: <Formula>{String.raw`y=\frac{3}{2}(x+1)`}</Formula>,{" "}
              <Formula>{String.raw`y=\frac{x+1}{2}`}</Formula>,{" "}
              <Formula>{String.raw`y=\frac{7-x}{2}`}</Formula>;{" "}
              <Formula>{String.raw`A=\int_{-1}^{1}(x+1)\,dx+\int_{1}^{3}(3-x)\,dx=2+2=4`}</Formula>
            </span>,
            <span key="a5">
              The lines <Formula>{String.raw`y=2x+1`}</Formula> and{" "}
              <Formula>{String.raw`y=3x+1`}</Formula> meet at{" "}
              <Formula>{String.raw`(0,1)`}</Formula>; with{" "}
              <Formula>{String.raw`x=4`}</Formula>,{" "}
              <Formula>{String.raw`A=\int_0^4\big[(3x+1)-(2x+1)\big]dx=\int_0^4 x\,dx=8`}</Formula>
            </span>,
            <span key="a6">
              (B) — quarter circle <Formula>{String.raw`\pi`}</Formula> minus the triangle
              of area <Formula>2</Formula>
            </span>,
            <span key="a7">
              (B) —{" "}
              <Formula>{String.raw`\int_0^1(2\sqrt{x}-2x)\,dx=\frac{4}{3}-1=\frac{1}{3}`}</Formula>
            </span>,
          ]}
        />
      </Expandable>

      <Expandable title="Miscellaneous Exercise on Chapter 8">
        <ExerciseQa
          questions={[
            <span key="q1">
              Find the area under the given curves and given lines:
              <br />
              (i) <Formula>{String.raw`y=x^2`}</Formula>,{" "}
              <Formula>{String.raw`x=1`}</Formula>, <Formula>{String.raw`x=2`}</Formula> and
              the x-axis;
              <br />
              (ii) <Formula>{String.raw`y=x^4`}</Formula>,{" "}
              <Formula>{String.raw`x=1`}</Formula>, <Formula>{String.raw`x=5`}</Formula> and
              the x-axis.
            </span>,
            <span key="q2">
              Sketch the graph of{" "}
              <Formula>{String.raw`y=|x+3|`}</Formula> and evaluate{" "}
              <Formula>{String.raw`\int_{-6}^{0}|x+3|\,dx`}</Formula>.
            </span>,
            <span key="q3">
              Find the area bounded by the curve{" "}
              <Formula>{String.raw`y=\sin x`}</Formula> between{" "}
              <Formula>{String.raw`x=0`}</Formula> and <Formula>{String.raw`x=2\pi`}</Formula>.
            </span>,
            <span key="q4">
              Area bounded by the curve <Formula>{String.raw`y=x^3`}</Formula>, the x-axis
              and the ordinates <Formula>{String.raw`x=-2`}</Formula> and{" "}
              <Formula>{String.raw`x=1`}</Formula> is{" "}
              (A) <Formula>-9</Formula> (B){" "}
              <Formula>{String.raw`-\dfrac{15}{4}`}</Formula> (C){" "}
              <Formula>{String.raw`\dfrac{15}{4}`}</Formula> (D){" "}
              <Formula>{String.raw`\dfrac{17}{4}`}</Formula>
            </span>,
            <span key="q5">
              The area bounded by the curve{" "}
              <Formula>{String.raw`y=x|x|`}</Formula>, the x-axis and the ordinates{" "}
              <Formula>{String.raw`x=-1`}</Formula> and{" "}
              <Formula>{String.raw`x=1`}</Formula> is{" "}
              (A) <Formula>0</Formula> (B){" "}
              <Formula>{String.raw`\dfrac{1}{3}`}</Formula> (C){" "}
              <Formula>{String.raw`\dfrac{2}{3}`}</Formula> (D){" "}
              <Formula>{String.raw`\dfrac{4}{3}`}</Formula>
            </span>,
          ]}
          answers={[
            <span key="a1">
              (i){" "}
              <Formula>{String.raw`\int_1^2 x^2\,dx=\left[\frac{x^3}{3}\right]_1^2=\frac{7}{3}`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`\int_1^5 x^4\,dx=\left[\frac{x^5}{5}\right]_1^5=\frac{3124}{5}`}</Formula>
            </span>,
            <span key="a2">
              The graph is V-shaped with vertex at{" "}
              <Formula>{String.raw`(-3,0)`}</Formula>;{" "}
              <Formula>{String.raw`\int_{-6}^{-3}-(x+3)\,dx+\int_{-3}^{0}(x+3)\,dx=\frac{9}{2}+\frac{9}{2}=9`}</Formula>
            </span>,
            <span key="a3">
              Split at <Formula>{String.raw`\pi`}</Formula>:{" "}
              <Formula>{String.raw`\int_0^{\pi}\sin x\,dx+\left|\int_{\pi}^{2\pi}\sin x\,dx\right|=2+2=4`}</Formula>
            </span>,
            <span key="a4">
              (D){" "}
              <Formula>{String.raw`\left|\int_{-2}^{0}x^3\,dx\right|+\int_0^1x^3\,dx=4+\frac{1}{4}=\frac{17}{4}`}</Formula>
            </span>,
            <span key="a5">
              (C) — <Formula>{String.raw`\int_{-1}^{0}(-x^2)\,dx+\int_0^1x^2\,dx=\frac{1}{3}+\frac{1}{3}=\frac{2}{3}`}</Formula>
            </span>,
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Never integrate a circle or an ellipse.</strong>{" "}
            <Formula>{String.raw`x^2+y^2=a^2\Rightarrow \pi a^2`}</Formula>;{" "}
            <Formula>{String.raw`\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\Rightarrow \pi ab`}</Formula>.
          </li>
          <li>
            <strong>Symmetry first.</strong> If the region is symmetric about an axis,
            compute one quarter (circle, ellipse) or one half and multiply.
          </li>
          <li>
            <strong>Choose strips by the given form.</strong> Equations like{" "}
            <Formula>{String.raw`y^2=4x`}</Formula> or{" "}
            <Formula>{String.raw`x=g(y)`}</Formula> beg for horizontal strips; every
            boundary then becomes single-valued.
          </li>
          <li>
            <strong>Sign check.</strong> A negative integral is a signal, not an answer:
            split at the zeros and add magnitudes. For{" "}
            <Formula>{String.raw`y=\cos x`}</Formula> on{" "}
            <Formula>{String.raw`[0,2\pi]`}</Formula> the integral is <Formula>0</Formula>{" "}
            but the area is <Formula>4</Formula>.
          </li>
          <li>
            <strong>Intersections are the limits.</strong> Solve{" "}
            <Formula>{String.raw`f(x)=g(x)`}</Formula> before writing a single integral
            sign; forgetting this is the most common lost-mark error.
          </li>
          <li>
            <strong>Scaling trick.</strong> If every length is multiplied by{" "}
            <Formula>k</Formula>, the area is multiplied by{" "}
            <Formula>{String.raw`k^2`}</Formula>. So the area between{" "}
            <Formula>{String.raw`y=x^2`}</Formula> and{" "}
            <Formula>{String.raw`y=x`}</Formula> is{" "}
            <Formula>{String.raw`\frac{1}{6}`}</Formula>, and between{" "}
            <Formula>{String.raw`y=2x^2`}</Formula> and{" "}
            <Formula>{String.raw`y=2x`}</Formula> it is{" "}
            <Formula>{String.raw`\frac{1}{3}`}</Formula>.
          </li>
        </ul>
      </SpeedTricks>
    </>
  );
}
