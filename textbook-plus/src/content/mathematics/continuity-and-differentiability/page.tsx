"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { TableCard } from "@/components/content/data/TableCard";
import { Comparison } from "@/components/content/Comparison";
import { FactCard } from "@/components/content/concept/FactCard";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function ContinuityAndDifferentiabilityChapter() {
  return (
    <>
      <p>
        In Class XI we learnt to differentiate polynomial and trigonometric functions. This
        chapter builds the two ideas on which all of calculus rests:{" "}
        <strong>continuity</strong> — a graph that can be drawn without lifting the pen — and{" "}
        <strong>differentiability</strong> — a graph that has a definite tangent at each point.
        We prove that differentiability is the stronger of the two, then extend differentiation
        to composite, implicit, inverse trigonometric, exponential and logarithmic functions, to
        parametric forms and to second order derivatives, and finish with the Mean Value Theorem.
      </p>

      <h2 id="h-5-1">5.1 Continuity</h2>

      <p>
        Two informal examples give the whole idea. In both, look only at what happens{" "}
        <em>near</em> the point <Formula>x = 0</Formula>: whether the pen has to leave the paper
        there, and why.
      </p>

      <Comparison
        columns={[
          {
            title: "A jump at the point",
            children: (
              <>
                <FormulaBlock
                  latex={String.raw`f(x)=\begin{cases} 1, & x\le 0\\ 2, & x>0\end{cases}`}
                />
                <p>
                  Left hand limit <Formula>{String.raw`=1`}</Formula>, right hand limit{" "}
                  <Formula>{String.raw`=2`}</Formula>.
                </p>
                <p>
                  The two one-sided limits <strong>disagree</strong>, so{" "}
                  <Formula>{String.raw`\lim_{x\to 0} f(x)`}</Formula> does not exist. The pen must
                  be lifted at <Formula>0</Formula>.
                </p>
              </>
            ),
          },
          {
            title: "A hole with a filled point",
            children: (
              <>
                <FormulaBlock
                  latex={String.raw`f(x)=\begin{cases} x, & x\ne 0\\ 2, & x=0\end{cases}`}
                />
                <p>
                  Left and right hand limits are both <Formula>{String.raw`1`}</Formula>, so the
                  limit is <Formula>{String.raw`1`}</Formula>.
                </p>
                <p>
                  But <Formula>{String.raw`f(0)=2`}</Formula> does <strong>not</strong> equal that
                  limit. The pen must again be lifted at <Formula>0</Formula>.
                </p>
              </>
            ),
          },
        ]}
      />

      <Callout type="important">
        <p>
          <strong>Definition 1.</strong> Suppose <Formula>f</Formula> is a real function and{" "}
          <Formula>c</Formula> is a point of its domain. Then <Formula>f</Formula> is{" "}
          <Highlight color="yellow">continuous at c</Highlight> if
        </p>
        <FormulaBlock latex={String.raw`\lim_{x\to c} f(x) = f(c)`} important />
        <p>
          That is, the <strong>left hand limit</strong>, the <strong>right hand limit</strong> and
          the <strong>value</strong> <Formula>{String.raw`f(c)`}</Formula> must all exist and be
          equal to one another.
        </p>
      </Callout>

      <KeyPoint title="The three-part continuity test">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <Formula>{String.raw`f(c)`}</Formula> is defined (the point lies in the domain).
          </li>
          <li>
            <Formula>{String.raw`\lim_{x\to c^{-}} f(x) = \lim_{x\to c^{+}} f(x)`}</Formula> — the
            limit exists.
          </li>
          <li>
            That common limit equals <Formula>{String.raw`f(c)`}</Formula>.
          </li>
        </ol>
        <p className="mt-3">
          If any one of the three fails, <Formula>f</Formula> is{" "}
          <strong>discontinuous</strong> at <Formula>c</Formula>, and <Formula>c</Formula> is a{" "}
          <strong>point of discontinuity</strong>.
        </p>
      </KeyPoint>

      <Expandable title="Examples 1 to 9 — NCERT">
        <KeyPoint title="Example 1">
          <p>
            Check the continuity of <Formula>{String.raw`f(x)=2x+3`}</Formula> at{" "}
            <Formula>{String.raw`x=1`}</Formula>.
          </p>
          <p>
            <strong>Step 1.</strong> The function is defined at <Formula>{String.raw`x=1`}</Formula>{" "}
            and <Formula>{String.raw`f(1)=2(1)+3=5`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong>{" "}
            <Formula>{String.raw`\lim_{x\to 1} f(x)=\lim_{x\to 1}(2x+3)=2(1)+3=5`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong>{" "}
            <Formula>{String.raw`\lim_{x\to 1} f(x)=5=f(1)`}</Formula>, so <Formula>f</Formula> is
            continuous at <Formula>{String.raw`x=1`}</Formula>.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 2">
          <p>
            Examine whether <Formula>{String.raw`f(x)=x^{2}`}</Formula> is continuous at{" "}
            <Formula>{String.raw`x=0`}</Formula>.
          </p>
          <p>
            <strong>Step 1.</strong> <Formula>{String.raw`f(0)=0^{2}=0`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong>{" "}
            <Formula>{String.raw`\lim_{x\to 0} f(x)=\lim_{x\to 0} x^{2}=0^{2}=0`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong>{" "}
            <Formula>{String.raw`\lim_{x\to 0} f(x)=0=f(0)`}</Formula>, hence continuous at{" "}
            <Formula>{String.raw`x=0`}</Formula>.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 3">
          <p>
            Discuss the continuity of <Formula>{String.raw`f(x)=|x|`}</Formula> at{" "}
            <Formula>{String.raw`x=0`}</Formula>.
          </p>
          <p>
            <strong>Step 1.</strong> Rewrite the modulus:
          </p>
          <FormulaBlock
            latex={String.raw`f(x)=\begin{cases} -x, & x<0\\ x, & x\ge 0\end{cases}`}
          />
          <p>
            <strong>Step 2.</strong> <Formula>{String.raw`f(0)=0`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong> Left hand limit{" "}
            <Formula>{String.raw`\lim_{x\to 0^{-}}(-x)=0`}</Formula>; right hand limit{" "}
            <Formula>{String.raw`\lim_{x\to 0^{+}} x=0`}</Formula>.
          </p>
          <p>
            <strong>Step 4.</strong> All three values coincide, so <Formula>f</Formula> is
            continuous at <Formula>{String.raw`x=0`}</Formula>.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 4">
          <p>
            Show that{" "}
            <Formula>{String.raw`f(x)=\begin{cases} x^{3}+3, & x\ne 0\\ 1, & x=0\end{cases}`}</Formula>{" "}
            is <strong>not</strong> continuous at <Formula>{String.raw`x=0`}</Formula>.
          </p>
          <p>
            <strong>Step 1.</strong> <Formula>{String.raw`f(0)=1`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong> For <Formula>{String.raw`x\ne 0`}</Formula> the function is a
            polynomial, so{" "}
            <Formula>{String.raw`\lim_{x\to 0}(x^{3}+3)=0^{3}+3=3`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong> <Formula>{String.raw`3\ne 1`}</Formula>: the limit does not
            equal the value, so <Formula>f</Formula> is discontinuous at{" "}
            <Formula>{String.raw`x=0`}</Formula>. It is the only point of discontinuity.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 5">
          <p>
            Check the points where the constant function <Formula>{String.raw`f(x)=k`}</Formula>{" "}
            is continuous.
          </p>
          <p>
            <strong>Step 1.</strong> For any real <Formula>c</Formula>,{" "}
            <Formula>{String.raw`f(c)=k`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong>{" "}
            <Formula>{String.raw`\lim_{x\to c} f(x)=\lim_{x\to c} k=k`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong> The limit equals the value at every real{" "}
            <Formula>c</Formula>, so a constant function is continuous at every real number.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 6">
          <p>
            Prove that the identity function <Formula>{String.raw`f(x)=x`}</Formula> is continuous
            at every real number.
          </p>
          <p>
            <strong>Step 1.</strong> For any real <Formula>c</Formula>,{" "}
            <Formula>{String.raw`f(c)=c`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong>{" "}
            <Formula>{String.raw`\lim_{x\to c} f(x)=\lim_{x\to c} x=c`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong>{" "}
            <Formula>{String.raw`\lim_{x\to c} f(x)=c=f(c)`}</Formula>, hence continuous at every
            real number.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 7">
          <p>
            Is <Formula>{String.raw`f(x)=|x|`}</Formula> a continuous function?
          </p>
          <p>
            <strong>Step 1.</strong> Continuity at <Formula>0</Formula> was settled in Example 3.
          </p>
          <p>
            <strong>Step 2.</strong> Let <Formula>{String.raw`c<0`}</Formula>. Then{" "}
            <Formula>{String.raw`f(c)=-c`}</Formula> and{" "}
            <Formula>{String.raw`\lim_{x\to c} f(x)=\lim_{x\to c}(-x)=-c=f(c)`}</Formula>, so{" "}
            <Formula>f</Formula> is continuous at every negative real number.
          </p>
          <p>
            <strong>Step 3.</strong> Let <Formula>{String.raw`c>0`}</Formula>. Then{" "}
            <Formula>{String.raw`f(c)=c`}</Formula> and{" "}
            <Formula>{String.raw`\lim_{x\to c} x=c=f(c)`}</Formula>, so <Formula>f</Formula> is
            continuous at every positive real number as well.
          </p>
          <p>
            <strong>Step 4.</strong> Hence <Formula>{String.raw`|x|`}</Formula> is continuous at
            every real number — a continuous function.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 8">
          <p>
            Discuss the continuity of{" "}
            <Formula>{String.raw`f(x)=x^{3}+x^{2}-1`}</Formula>.
          </p>
          <p>
            <strong>Step 1.</strong> For any real <Formula>c</Formula>,{" "}
            <Formula>{String.raw`f(c)=c^{3}+c^{2}-1`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong>{" "}
            <Formula>{String.raw`\lim_{x\to c}(x^{3}+x^{2}-1)=c^{3}+c^{2}-1=f(c)`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong> Therefore <Formula>f</Formula> is continuous at every real
            number, i.e. a continuous function.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 9">
          <p>
            Discuss the continuity of{" "}
            <Formula>{String.raw`f(x)=\dfrac{1}{x}`}</Formula>, <Formula>{String.raw`x\ne 0`}</Formula>.
          </p>
          <p>
            <strong>Step 1.</strong> Fix any non-zero real <Formula>c</Formula>. Then{" "}
            <Formula>{String.raw`f(c)=\dfrac{1}{c}`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong>{" "}
            <Formula>{String.raw`\lim_{x\to c}\dfrac{1}{x}=\dfrac{1}{c}`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong> The limit equals the value at every point of the domain, so{" "}
            <Formula>f</Formula> is continuous at every point of its domain — a continuous
            function.
          </p>
        </KeyPoint>
      </Expandable>

      <h3 id="h-5-1-1">What happens to 1/x near zero</h3>
      <p>
        Continuity at <Formula>{String.raw`x=0`}</Formula> is meaningless for{" "}
        <Formula>{String.raw`f(x)=1/x`}</Formula> because <Formula>0</Formula> is not in the
        domain. But the behaviour of the values still needs care.
      </p>

      <TableCard
        title="Values of 1/x as x approaches 0 from the right (Table 5.1)"
        headers={[<span key="h1">x</span>, <span key="h2">f(x) = 1/x</span>]}
        rows={[
          { cells: [<Formula key="r1c1">{String.raw`1`}</Formula>, <Formula key="r1c2">{String.raw`1`}</Formula>] },
          { cells: [<Formula key="r2c1">{String.raw`10^{-1}`}</Formula>, <Formula key="r2c2">{String.raw`10`}</Formula>] },
          { cells: [<Formula key="r3c1">{String.raw`10^{-2}`}</Formula>, <Formula key="r3c2">{String.raw`10^{2}`}</Formula>] },
          { cells: [<Formula key="r4c1">{String.raw`10^{-3}`}</Formula>, <Formula key="r4c2">{String.raw`10^{3}`}</Formula>] },
          { cells: [<Formula key="r5c1">{String.raw`10^{-n}`}</Formula>, <Formula key="r5c2">{String.raw`10^{n}`}</Formula>] },
        ]}
        caption="From the left, 1/x plunges through −1, −10, −10², −10³ … . The values grow without bound in both directions."
      />

      <Callout type="warning">
        <p>
          We write <Formula>{String.raw`\lim_{x\to 0^{+}}\dfrac{1}{x}=+\infty`}</Formula> and{" "}
          <Formula>{String.raw`\lim_{x\to 0^{-}}\dfrac{1}{x}=-\infty`}</Formula>, but{" "}
          <Formula>{String.raw`+\infty`}</Formula> and <Formula>{String.raw`-\infty`}</Formula> are{" "}
          <strong>not real numbers</strong>. So neither one-sided limit exists as a real number,
          and <Formula>{String.raw`1/x`}</Formula> has no limit at <Formula>0</Formula>.
        </p>
      </Callout>

      <Callout type="important">
        <p>
          <strong>Definition 2.</strong> A real function <Formula>f</Formula> is{" "}
          <Highlight color="yellow">continuous</Highlight> if it is continuous at every point of
          its domain.
        </p>
        <p className="mt-2">
          On a closed interval <Formula>{String.raw`[a,b]`}</Formula> only one-sided conditions
          make sense at the ends:
        </p>
        <FormulaBlock latex={String.raw`\lim_{x\to a^{+}} f(x)=f(a)`} />
        <FormulaBlock latex={String.raw`\lim_{x\to b^{-}} f(x)=f(b)`} />
        <p>
          Consequently a function defined at a single point only is continuous there, and a
          function defined on <Formula>{String.raw`\mathbb{R}\setminus\{0\}`}</Formula> can be a
          continuous function even though it has no value at <Formula>0</Formula>.
        </p>
      </Callout>

      <Expandable title="Examples 10 to 15 — NCERT">
        <KeyPoint title="Example 10">
          <p>
            Discuss the continuity of{" "}
            <Formula>{String.raw`f(x)=\begin{cases} x+2, & x\le 1\\ x-2, & x>1\end{cases}`}</Formula>.
          </p>
          <p>
            <strong>Case 1 — c &lt; 1.</strong> <Formula>{String.raw`f(c)=c+2`}</Formula> and{" "}
            <Formula>{String.raw`\lim_{x\to c}(x+2)=c+2=f(c)`}</Formula>, so continuous.
          </p>
          <p>
            <strong>Case 2 — c &gt; 1.</strong> <Formula>{String.raw`f(c)=c-2`}</Formula> and{" "}
            <Formula>{String.raw`\lim_{x\to c}(x-2)=c-2=f(c)`}</Formula>, so continuous.
          </p>
          <p>
            <strong>Case 3 — c = 1.</strong> Left hand limit{" "}
            <Formula>{String.raw`\lim_{x\to 1^{-}}(x+2)=3`}</Formula>; right hand limit{" "}
            <Formula>{String.raw`\lim_{x\to 1^{+}}(x-2)=-1`}</Formula>.
          </p>
          <p>
            The one-sided limits differ, so <Formula>f</Formula> is discontinuous at{" "}
            <Formula>{String.raw`x=1`}</Formula>, the only point of discontinuity.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 11">
          <p>
            Find all points of discontinuity of{" "}
            <Formula>{String.raw`f(x)=\begin{cases} x+2, & x<1\\ 0, & x=1\\ x-2, & x>1\end{cases}`}</Formula>.
          </p>
          <p>
            <strong>Step 1.</strong> Away from <Formula>1</Formula> the function agrees with a
            polynomial on each side, so it is continuous at every{" "}
            <Formula>{String.raw`x\ne 1`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong> Left hand limit at <Formula>1</Formula> is{" "}
            <Formula>{String.raw`1+2=3`}</Formula>; right hand limit is{" "}
            <Formula>{String.raw`1-2=-1`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong> They are unequal, so the only point of discontinuity is{" "}
            <Formula>{String.raw`x=1`}</Formula>. (The value <Formula>{String.raw`f(1)=0`}</Formula>{" "}
            would not save it either.)
          </p>
        </KeyPoint>

        <KeyPoint title="Example 12">
          <p>
            Discuss the continuity of{" "}
            <Formula>{String.raw`f(x)=\begin{cases} x+2, & x<0\\ -x+2, & x>0\end{cases}`}</Formula>.
          </p>
          <p>
            <strong>Step 1.</strong> The function is defined on{" "}
            <Formula>{String.raw`\mathbb{R}\setminus\{0\}`}</Formula>; domain{" "}
            <Formula>{String.raw`D_1\cup D_2`}</Formula> with{" "}
            <Formula>{String.raw`D_1=\{x<0\}`}</Formula>, <Formula>{String.raw`D_2=\{x>0\}`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong> On <Formula>{String.raw`D_1`}</Formula>:{" "}
            <Formula>{String.raw`\lim_{x\to c}(x+2)=c+2=f(c)`}</Formula>. On{" "}
            <Formula>{String.raw`D_2`}</Formula>:{" "}
            <Formula>{String.raw`\lim_{x\to c}(-x+2)=-c+2=f(c)`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong> Continuous at every point of its domain, hence a continuous
            function — even though the graph breaks at <Formula>0</Formula>, a point where the
            function is not defined.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 13">
          <p>
            Discuss the continuity of{" "}
            <Formula>{String.raw`f(x)=\begin{cases} x^{2}, & x<0\\ x, & x\ge 0\end{cases}`}</Formula>.
          </p>
          <p>
            <strong>Step 1 — x &lt; 0.</strong> <Formula>{String.raw`f(x)=x^{2}`}</Formula>, which
            is continuous (Example 2).
          </p>
          <p>
            <strong>Step 2 — x &gt; 0.</strong> <Formula>{String.raw`f(x)=x`}</Formula>, the
            identity function, continuous (Example 6).
          </p>
          <p>
            <strong>Step 3 — x = 0.</strong> <Formula>{String.raw`f(0)=0`}</Formula>; left hand
            limit <Formula>{String.raw`\lim_{x\to 0^{-}}x^{2}=0`}</Formula>; right hand limit{" "}
            <Formula>{String.raw`\lim_{x\to 0^{+}}x=0`}</Formula>.
          </p>
          <p>
            <strong>Step 4.</strong> All three agree, so <Formula>f</Formula> is continuous at{" "}
            <Formula>0</Formula> and hence a continuous function.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 14">
          <p>Show that every polynomial function is continuous.</p>
          <p>
            <strong>Step 1.</strong> Let{" "}
            <Formula>{String.raw`p(x)=a_0+a_1x+\dots+a_nx^{n}`}</Formula> with{" "}
            <Formula>{String.raw`a_n\ne 0`}</Formula>. It is defined for every real number.
          </p>
          <p>
            <strong>Step 2.</strong> For a fixed real <Formula>c</Formula>,{" "}
            <Formula>{String.raw`\lim_{x\to c} p(x)=p(c)`}</Formula> (limits of powers and of sums
            behave as expected).
          </p>
          <p>
            <strong>Step 3.</strong> Since <Formula>c</Formula> was arbitrary,{" "}
            <Formula>p</Formula> is continuous at every real number.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 15">
          <p>
            Find all points of discontinuity of the greatest integer function{" "}
            <Formula>{String.raw`f(x)=[x]`}</Formula>.
          </p>
          <p>
            <strong>Case 1 — c not an integer.</strong> For all <Formula>x</Formula> close enough
            to <Formula>c</Formula>, <Formula>{String.raw`[x]=[c]`}</Formula>; so{" "}
            <Formula>{String.raw`\lim_{x\to c} f(x)=[c]=f(c)`}</Formula> and <Formula>f</Formula>{" "}
            is continuous.
          </p>
          <p>
            <strong>Case 2 — c an integer.</strong> Choose a small{" "}
            <Formula>{String.raw`r>0`}</Formula>. Then{" "}
            <Formula>{String.raw`[c-r]=c-1`}</Formula> while{" "}
            <Formula>{String.raw`[c+r]=c`}</Formula>, so
          </p>
          <FormulaBlock latex={String.raw`\lim_{x\to c^{-}} f(x)=c-1,\qquad \lim_{x\to c^{+}} f(x)=c`} />
          <p>
            The two differ, so <Formula>{String.raw`[x]`}</Formula> is discontinuous at{" "}
            <Highlight color="blue">every integer</Highlight>.
          </p>
        </KeyPoint>
      </Expandable>

      <h3 id="h-5-1-2">Algebra of continuous functions</h3>
      <p>
        Continuity at a point is decided entirely by a limit, so it survives the usual algebraic
        operations.
      </p>

      <KeyPoint title="Theorem 1">
        <p>
          If <Formula>f</Formula> and <Formula>g</Formula> are continuous at a real number{" "}
          <Formula>c</Formula>, then so are:
        </p>
        <FormulaBlock latex={String.raw`f+g,\qquad f-g,\qquad f\cdot g`} />
        <FormulaBlock latex={String.raw`\dfrac{f}{g}\ \ (\text{provided } g(c)\ne 0)`} />
        <p className="mt-2">
          <strong>Idea of proof (for f + g).</strong>{" "}
          <Formula>{String.raw`\lim_{x\to c}(f+g)(x)=\lim_{x\to c}f(x)+\lim_{x\to c}g(x)=f(c)+g(c)=(f+g)(c)`}</Formula>
          . The other parts are identical in spirit.
        </p>
      </KeyPoint>

      <Callout type="note">
        <p>
          Special cases worth remembering: if <Formula>f</Formula> is continuous then so is{" "}
          <Formula>{String.raw`\lambda f`}</Formula> for any constant{" "}
          <Formula>{String.raw`\lambda`}</Formula> (in particular <Formula>{String.raw`-f`}</Formula>
          ), and so is <Formula>{String.raw`1/g`}</Formula> wherever{" "}
          <Formula>{String.raw`g(x)\ne 0`}</Formula>.
        </p>
      </Callout>

      <KeyPoint title="Theorem 2 — continuity of a composite">
        <p>
          Suppose <Formula>{String.raw`(f\circ g)`}</Formula> is defined at{" "}
          <Formula>c</Formula>. If <Formula>g</Formula> is continuous at <Formula>c</Formula> and{" "}
          <Formula>f</Formula> is continuous at <Formula>{String.raw`g(c)`}</Formula>, then{" "}
          <Formula>{String.raw`(f\circ g)`}</Formula> is continuous at <Formula>c</Formula>.
        </p>
        <p className="mt-2">
          This is the standard engine for building new continuous functions:{" "}
          <Formula>{String.raw`\sin(x^{2})`}</Formula>, <Formula>{String.raw`\cos(x^{2})`}</Formula>
          , <Formula>{String.raw`|\cos x|`}</Formula>, <Formula>{String.raw`\sin|x|`}</Formula> are
          all continuous because they are composites of continuous pieces.
        </p>
      </KeyPoint>

      <Expandable title="Examples 16 to 20 — NCERT">
        <KeyPoint title="Example 16">
          <p>Prove that every rational function is continuous.</p>
          <p>
            <strong>Step 1.</strong> A rational function is{" "}
            <Formula>{String.raw`f(x)=\dfrac{p(x)}{q(x)}`}</Formula> with{" "}
            <Formula>{String.raw`q(x)\ne 0`}</Formula>, <Formula>p</Formula> and{" "}
            <Formula>q</Formula> polynomials.
          </p>
          <p>
            <strong>Step 2.</strong> Its domain is all real numbers except the zeros of{" "}
            <Formula>q</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong> Polynomials are continuous (Example 14), so by part (4) of
            Theorem 1 the quotient is continuous wherever it is defined.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 17">
          <p>Discuss the continuity of the sine function.</p>
          <p>
            <strong>Step 1.</strong> We use the standard fact{" "}
            <Formula>{String.raw`\lim_{h\to 0}\sin h=0`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong> Let <Formula>{String.raw`f(x)=\sin x`}</Formula> and put{" "}
            <Formula>{String.raw`x=c+h`}</Formula>; as <Formula>{String.raw`x\to c`}</Formula>,{" "}
            <Formula>{String.raw`h\to 0`}</Formula>. Then
          </p>
          <FormulaBlock latex={String.raw`\lim_{x\to c}\sin x=\lim_{h\to 0}\left[\sin c\cos h+\cos c\sin h\right]`} />
          <p>
            <strong>Step 3.</strong>{" "}
            <Formula>{String.raw`=\sin c\cdot 1+\cos c\cdot 0=\sin c=f(c)`}</Formula>.
          </p>
          <p>
            <strong>Step 4.</strong> Hence <Formula>{String.raw`\sin x`}</Formula> is continuous at
            every real number, so it is a continuous function. The same argument works for{" "}
            <Formula>{String.raw`\cos x`}</Formula>.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 18">
          <p>
            Prove that <Formula>{String.raw`f(x)=\tan x`}</Formula> is a continuous function.
          </p>
          <p>
            <strong>Step 1.</strong> Write{" "}
            <Formula>{String.raw`\tan x=\dfrac{\sin x}{\cos x}`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong> It is defined where{" "}
            <Formula>{String.raw`\cos x\ne 0`}</Formula>, i.e.{" "}
            <Formula>{String.raw`x\ne (2n+1)\dfrac{\pi}{2}`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong> Sine and cosine are continuous, so their quotient is
            continuous wherever the denominator is non-zero. Hence <Formula>{String.raw`\tan x`}</Formula>{" "}
            is continuous on its domain.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 19">
          <p>
            Show that <Formula>{String.raw`f(x)=\sin(x^{2})`}</Formula> is a continuous function.
          </p>
          <p>
            <strong>Step 1.</strong> Read <Formula>f</Formula> as{" "}
            <Formula>{String.raw`(g\circ h)`}</Formula> with{" "}
            <Formula>{String.raw`h(x)=x^{2}`}</Formula> and{" "}
            <Formula>{String.raw`g(t)=\sin t`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong> Both <Formula>g</Formula> and <Formula>h</Formula> are
            continuous, so by Theorem 2 the composite{" "}
            <Formula>{String.raw`f=g\circ h`}</Formula> is continuous.
          </p>
        </KeyPoint>

        <KeyPoint title="Example 20">
          <p>
            Show that{" "}
            <Formula>{String.raw`f(x)=\left|1-x+|x|\right|`}</Formula> is a continuous function.
          </p>
          <p>
            <strong>Step 1.</strong> Let{" "}
            <Formula>{String.raw`g(x)=1-x+|x|`}</Formula> and{" "}
            <Formula>{String.raw`h(t)=|t|`}</Formula>. Then{" "}
            <Formula>{String.raw`(h\circ g)(x)=\left|1-x+|x|\right|=f(x)`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong> <Formula>{String.raw`g`}</Formula> is a sum of a polynomial and
            the modulus function, hence continuous; <Formula>h</Formula> is continuous by Example 7.
          </p>
          <p>
            <strong>Step 3.</strong> Therefore the composite <Formula>f</Formula> is continuous.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 5.1">
        <ExerciseQa
          questions={[
            <>
              Prove that <Formula>{String.raw`f(x)=5x-3`}</Formula> is continuous at{" "}
              <Formula>{String.raw`x=0`}</Formula>, at <Formula>{String.raw`x=-3`}</Formula> and at{" "}
              <Formula>{String.raw`x=5`}</Formula>.
            </>,
            <>
              Examine the continuity of <Formula>{String.raw`f(x)=2x^{2}-1`}</Formula> at{" "}
              <Formula>{String.raw`x=3`}</Formula>.
            </>,
            <>
              Examine the following functions for continuity: (a){" "}
              <Formula>{String.raw`f(x)=x-5`}</Formula> (b){" "}
              <Formula>{String.raw`f(x)=\dfrac{1}{x-5}`}</Formula>, <Formula>{String.raw`x\ne 5`}</Formula>{" "}
              (c) <Formula>{String.raw`f(x)=\dfrac{x^{2}-25}{x+5}`}</Formula>,{" "}
              <Formula>{String.raw`x\ne -5`}</Formula> (d){" "}
              <Formula>{String.raw`f(x)=|x-5|`}</Formula>.
            </>,
            <>
              Prove that <Formula>{String.raw`f(x)=x^{n}`}</Formula> is continuous at{" "}
              <Formula>{String.raw`x=n`}</Formula>, where <Formula>n</Formula> is a positive
              integer.
            </>,
            <>
              Is{" "}
              <Formula>{String.raw`f(x)=\begin{cases} x, & x\le 1\\ 5, & x>1\end{cases}`}</Formula>{" "}
              continuous at <Formula>{String.raw`x=0`}</Formula>? At{" "}
              <Formula>{String.raw`x=1`}</Formula>? At <Formula>{String.raw`x=2`}</Formula>?
            </>,
            <>
              Find all points of discontinuity of{" "}
              <Formula>{String.raw`f(x)=\begin{cases} 2x+3, & x\le 2\\ 2x-3, & x>2\end{cases}`}</Formula>.
            </>,
            <>
              Find all points of discontinuity of
              <FormulaBlock
                latex={String.raw`f(x)=\begin{cases} |x|+3, & x\le -3\\ -2x, & -3<x<3\\ 6x+2, & x\ge 3\end{cases}`}
              />
            </>,
            <>
              Find all points of discontinuity of{" "}
              <Formula>{String.raw`f(x)=\begin{cases} \dfrac{|x|}{x}, & x\ne 0\\ 0, & x=0\end{cases}`}</Formula>.
            </>,
            <>
              Find all points of discontinuity of{" "}
              <Formula>{String.raw`f(x)=\begin{cases} \dfrac{x}{|x|}, & x<0\\ -1, & x\ge 0\end{cases}`}</Formula>.
            </>,
            <>
              Find all points of discontinuity of{" "}
              <Formula>{String.raw`f(x)=\begin{cases} x+1, & x\ge 1\\ x^{2}+1, & x<1\end{cases}`}</Formula>.
            </>,
            <>
              Find all points of discontinuity of{" "}
              <Formula>{String.raw`f(x)=\begin{cases} x^{3}-3, & x\le 2\\ x^{2}+1, & x>2\end{cases}`}</Formula>.
            </>,
            <>
              Find all points of discontinuity of{" "}
              <Formula>{String.raw`f(x)=\begin{cases} x^{10}-1, & x\le 1\\ x^{2}, & x>1\end{cases}`}</Formula>.
            </>,
            <>
              Is{" "}
              <Formula>{String.raw`f(x)=\begin{cases} x+5, & x\le 1\\ x-5, & x>1\end{cases}`}</Formula>{" "}
              a continuous function?
            </>,
            <>
              Discuss the continuity of{" "}
              <Formula>{String.raw`f(x)=\begin{cases} 3, & 0\le x\le 1\\ 4, & 1<x<3\\ 5, & 3\le x\le 10\end{cases}`}</Formula>.
            </>,
            <>
              Discuss the continuity of{" "}
              <Formula>{String.raw`f(x)=\begin{cases} 2x, & x<0\\ 0, & 0\le x\le 1\\ 4x, & x>1\end{cases}`}</Formula>.
            </>,
            <>
              Discuss the continuity of{" "}
              <Formula>{String.raw`f(x)=\begin{cases} -2, & x\le -1\\ 2x, & -1<x\le 1\\ 2, & x>1\end{cases}`}</Formula>.
            </>,
            <>
              Find the relationship between <Formula>a</Formula> and <Formula>b</Formula> so that{" "}
              <Formula>{String.raw`f(x)=\begin{cases} ax+1, & x\le 3\\ bx+3, & x>3\end{cases}`}</Formula>{" "}
              is continuous at <Formula>{String.raw`x=3`}</Formula>.
            </>,
            <>
              For what value of <Formula>{String.raw`\lambda`}</Formula> is{" "}
              <Formula>{String.raw`f(x)=\begin{cases} \lambda(x^{2}-2x), & x\le 0\\ 4x+1, & x>0\end{cases}`}</Formula>{" "}
              continuous at <Formula>{String.raw`x=0`}</Formula>? What about continuity at{" "}
              <Formula>{String.raw`x=1`}</Formula>?
            </>,
            <>
              Show that <Formula>{String.raw`g(x)=x-[x]`}</Formula> is discontinuous at all integral
              points.
            </>,
            <>
              Is <Formula>{String.raw`f(x)=x^{2}-\sin x+5`}</Formula> continuous at{" "}
              <Formula>{String.raw`x=\pi`}</Formula>?
            </>,
            <>
              Discuss the continuity of (a) <Formula>{String.raw`\sin x+\cos x`}</Formula> (b){" "}
              <Formula>{String.raw`\sin x-\cos x`}</Formula> (c){" "}
              <Formula>{String.raw`\sin x\cdot\cos x`}</Formula>.
            </>,
            <>
              Discuss the continuity of the cosine, cosecant, secant and cotangent functions.
            </>,
            <>
              Find all points of discontinuity of{" "}
              <Formula>{String.raw`f(x)=\begin{cases} \dfrac{\sin x}{x}, & x<0\\ x+1, & x\ge 0\end{cases}`}</Formula>.
            </>,
            <>
              Determine if{" "}
              <Formula>{String.raw`f(x)=\begin{cases} x^{2}\sin\dfrac{1}{x}, & x\ne 0\\ 0, & x=0\end{cases}`}</Formula>{" "}
              is a continuous function.
            </>,
            <>
              Examine the continuity of{" "}
              <Formula>{String.raw`f(x)=\begin{cases} \sin x-\cos x, & x\ne 0\\ -1, & x=0\end{cases}`}</Formula>.
            </>,
            <>
              Find <Formula>k</Formula> so that{" "}
              <Formula>{String.raw`f(x)=\begin{cases} \dfrac{k\cos x}{\pi-2x}, & x\ne \dfrac{\pi}{2}\\ 3, & x=\dfrac{\pi}{2}\end{cases}`}</Formula>{" "}
              is continuous at <Formula>{String.raw`x=\dfrac{\pi}{2}`}</Formula>.
            </>,
            <>
              Find <Formula>k</Formula> so that{" "}
              <Formula>{String.raw`f(x)=\begin{cases} kx^{2}, & x\le 2\\ 3, & x>2\end{cases}`}</Formula>{" "}
              is continuous at <Formula>{String.raw`x=2`}</Formula>.
            </>,
            <>
              Find <Formula>k</Formula> so that{" "}
              <Formula>{String.raw`f(x)=\begin{cases} kx+1, & x\le \pi\\ \cos x, & x>\pi\end{cases}`}</Formula>{" "}
              is continuous at <Formula>{String.raw`x=\pi`}</Formula>.
            </>,
            <>
              Find <Formula>k</Formula> so that{" "}
              <Formula>{String.raw`f(x)=\begin{cases} kx+1, & x\le 5\\ 3x-5, & x>5\end{cases}`}</Formula>{" "}
              is continuous at <Formula>{String.raw`x=5`}</Formula>.
            </>,
            <>
              Find <Formula>a</Formula> and <Formula>b</Formula> such that{" "}
              <Formula>{String.raw`f(x)=\begin{cases} 5, & x\le 2\\ ax+b, & 2<x<10\\ 21, & x\ge 10\end{cases}`}</Formula>{" "}
              is a continuous function.
            </>,
            <>
              Show that <Formula>{String.raw`f(x)=\cos(x^{2})`}</Formula> is a continuous function.
            </>,
            <>
              Show that <Formula>{String.raw`f(x)=|\cos x|`}</Formula> is a continuous function.
            </>,
            <>
              Examine that <Formula>{String.raw`\sin|x|`}</Formula> is a continuous function.
            </>,
            <>
              Find all the points of discontinuity of{" "}
              <Formula>{String.raw`f(x)=|x|-|x+1|`}</Formula>.
            </>,
          ]}
          answers={[
            <>
              <Formula>{String.raw`f(0)=-3,\ \lim=-3`}</Formula>;{" "}
              <Formula>{String.raw`f(-3)=-18,\ \lim=-18`}</Formula>;{" "}
              <Formula>{String.raw`f(5)=22,\ \lim=22`}</Formula> — continuous at all three.
            </>,
            <>
              <Formula>{String.raw`f(3)=17=\lim_{x\to 3}(2x^{2}-1)`}</Formula> — continuous.
            </>,
            <>
              (a) polynomial, continuous; (b) quotient of continuous functions, continuous for{" "}
              <Formula>{String.raw`x\ne 5`}</Formula>; (c){" "}
              <Formula>{String.raw`\dfrac{x^{2}-25}{x+5}=x-5`}</Formula> for{" "}
              <Formula>{String.raw`x\ne -5`}</Formula>, continuous; (d) modulus of a continuous
              function, continuous.
            </>,
            <>
              <Formula>{String.raw`f(n)=n^{n}`}</Formula> and{" "}
              <Formula>{String.raw`\lim_{x\to n}x^{n}=n^{n}=f(n)`}</Formula> — continuous.
            </>,
            <>
              At <Formula>0</Formula>: continuous. At <Formula>1</Formula>: LHL{" "}
              <Formula>{String.raw`=1`}</Formula>, RHL <Formula>{String.raw`=5`}</Formula> —
              discontinuous. At <Formula>2</Formula>: continuous.
            </>,
            <>
              LHL at <Formula>2</Formula> is <Formula>{String.raw`7`}</Formula>, RHL is{" "}
              <Formula>{String.raw`1`}</Formula> — discontinuous only at{" "}
              <Formula>{String.raw`x=2`}</Formula>.
            </>,
            <>
              Continuous at <Formula>{String.raw`x=-3`}</Formula> (both sides{" "}
              <Formula>{String.raw`6`}</Formula>); LHL at <Formula>{String.raw`3`}</Formula> is{" "}
              <Formula>{String.raw`-6`}</Formula>, RHL is <Formula>{String.raw`20`}</Formula> —
              discontinuous only at <Formula>{String.raw`x=3`}</Formula>.
            </>,
            <>
              LHL <Formula>{String.raw`=-1`}</Formula>, RHL <Formula>{String.raw`=1`}</Formula> —
              discontinuous at <Formula>{String.raw`x=0`}</Formula>.
            </>,
            <>
              For <Formula>{String.raw`x<0`}</Formula> the function equals{" "}
              <Formula>{String.raw`-1`}</Formula>, and for <Formula>{String.raw`x\ge 0`}</Formula>{" "}
              also <Formula>{String.raw`-1`}</Formula> — a constant, so no point of discontinuity.
            </>,
            <>
              LHL <Formula>{String.raw`=2`}</Formula>, <Formula>{String.raw`f(1)=2`}</Formula> —
              continuous everywhere.
            </>,
            <>
              LHL <Formula>{String.raw`=5`}</Formula>, RHL{" "}
              <Formula>{String.raw`=5=f(2)`}</Formula> — continuous everywhere.
            </>,
            <>
              LHL <Formula>{String.raw`=0`}</Formula>, RHL <Formula>{String.raw`=1`}</Formula> —
              discontinuous at <Formula>{String.raw`x=1`}</Formula>.
            </>,
            <>
              LHL <Formula>{String.raw`=6`}</Formula>, RHL{" "}
              <Formula>{String.raw`=-4`}</Formula> — discontinuous at{" "}
              <Formula>{String.raw`x=1`}</Formula>, so not continuous.
            </>,
            <>
              Discontinuous at <Formula>{String.raw`x=1`}</Formula> and{" "}
              <Formula>{String.raw`x=3`}</Formula>.
            </>,
            <>
              Continuous at <Formula>0</Formula>; LHL at <Formula>1</Formula> is{" "}
              <Formula>0</Formula>, RHL is <Formula>4</Formula> — discontinuous at{" "}
              <Formula>{String.raw`x=1`}</Formula>.
            </>,
            <>
              Continuous at <Formula>{String.raw`x=-1`}</Formula> (both sides{" "}
              <Formula>{String.raw`-2`}</Formula>) and at <Formula>{String.raw`x=1`}</Formula>{" "}
              (both sides <Formula>2</Formula>) — continuous everywhere.
            </>,
            <>
              <Formula>{String.raw`3a+1=3b+3\ \Rightarrow\ a-b=\dfrac{2}{3}`}</Formula>.
            </>,
            <>
              LHL at <Formula>0</Formula> is <Formula>0</Formula>, RHL is{" "}
              <Formula>1</Formula>: no value of <Formula>{String.raw`\lambda`}</Formula> works at{" "}
              <Formula>0</Formula>. At <Formula>1</Formula> the function is continuous for every{" "}
              <Formula>{String.raw`\lambda`}</Formula>.
            </>,
            <>
              At an integer <Formula>c</Formula>: LHL <Formula>{String.raw`=c-1`}</Formula>, RHL{" "}
              <Formula>{String.raw`=c`}</Formula>, <Formula>{String.raw`g(c)=0`}</Formula> — all
              differ, so discontinuous at every integer.
            </>,
            <>
              Yes — both <Formula>{String.raw`x^{2}-\sin x+5`}</Formula> terms are continuous, so
              the value at <Formula>{String.raw`\pi`}</Formula> equals the limit.
            </>,
            <>
              Sum, difference and product of continuous functions — all continuous.
            </>,
            <>
              cosine: continuous; cosecant: discontinuous at{" "}
              <Formula>{String.raw`x=n\pi`}</Formula>; secant: discontinuous at{" "}
              <Formula>{String.raw`x=(2n+1)\dfrac{\pi}{2}`}</Formula>; cotangent: discontinuous at{" "}
              <Formula>{String.raw`x=n\pi`}</Formula>.
            </>,
            <>
              LHL <Formula>{String.raw`=\lim_{x\to 0^{-}}\dfrac{\sin x}{x}=1`}</Formula>, RHL{" "}
              <Formula>{String.raw`=\lim_{x\to 0^{+}}(x+1)=1=f(0)`}</Formula> — no point of
              discontinuity.
            </>,
            <>
              Yes. <Formula>{String.raw`\left|x^{2}\sin\dfrac{1}{x}\right|\le x^{2}\to 0`}</Formula>,
              so the limit at <Formula>0</Formula> is <Formula>{String.raw`0=f(0)`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`\lim_{x\to 0}(\sin x-\cos x)=-1=f(0)`}</Formula> — continuous
              everywhere.
            </>,
            <>
              Put <Formula>{String.raw`t=\dfrac{\pi}{2}-x`}</Formula>: the limit is{" "}
              <Formula>{String.raw`\dfrac{k}{2}=3`}</Formula>, so{" "}
              <Formula>{String.raw`k=6`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`4k=3\ \Rightarrow\ k=\dfrac{3}{4}`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`k\pi+1=\cos\pi=-1\ \Rightarrow\ k=-\dfrac{2}{\pi}`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`5k+1=10\ \Rightarrow\ k=\dfrac{9}{5}`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`2a+b=5`}</Formula> and{" "}
              <Formula>{String.raw`10a+b=21`}</Formula>, giving{" "}
              <Formula>{String.raw`a=2,\ b=1`}</Formula>.
            </>,
            <>
              Composite of <Formula>{String.raw`t=x^{2}`}</Formula> and{" "}
              <Formula>{String.raw`\cos t`}</Formula> — both continuous.
            </>,
            <>
              <Formula>{String.raw`x\mapsto\cos x\mapsto|\cos x|`}</Formula> — composite of
              continuous functions.
            </>,
            <>
              <Formula>{String.raw`x\mapsto|x|\mapsto\sin|x|`}</Formula> — composite of continuous
              functions.
            </>,
            <>
              Discontinuous at <Formula>{String.raw`x=-1`}</Formula> and{" "}
              <Formula>{String.raw`x=0`}</Formula>.
            </>,
          ]}
        />
      </Expandable>

      <h2 id="h-5-2">5.2 Differentiability</h2>
      <p>
        Recall the definition from Class XI. Let <Formula>f</Formula> be a real function and{" "}
        <Formula>c</Formula> a point of its domain. The <strong>derivative of f at c</strong> is
      </p>
      <FormulaBlock
        latex={String.raw`f'(c)=\lim_{h\to 0}\frac{f(c+h)-f(c)}{h}`}
        important
      />
      <p>
        provided this limit exists. Equivalently, writing{" "}
        <Formula>{String.raw`x=c+h`}</Formula>,
      </p>
      <FormulaBlock latex={String.raw`f'(c)=\lim_{x\to c}\frac{f(x)-f(c)}{x-c}`} />
      <p>
        When the limit is taken from the left it is the <strong>left hand derivative</strong>{" "}
        <Formula>{String.raw`Lf'(c)`}</Formula>; from the right it is the{" "}
        <strong>right hand derivative</strong> <Formula>{String.raw`Rf'(c)`}</Formula>. The
        derivative exists exactly when both exist and are equal.
      </p>

      <Comparison
        columns={[
          {
            title: "Where a derivative fails",
            children: (
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>A corner.</strong> <Formula>{String.raw`|x|`}</Formula> at{" "}
                  <Formula>0</Formula>: the two one-sided derivatives are{" "}
                  <Formula>{String.raw`-1`}</Formula> and <Formula>1</Formula>.
                </li>
                <li>
                  <strong>A vertical tangent.</strong>{" "}
                  <Formula>{String.raw`x^{1/3}`}</Formula> at <Formula>0</Formula>: the slope runs
                  off to infinity.
                </li>
                <li>
                  <strong>A break.</strong> Any discontinuity automatically kills
                  differentiability.
                </li>
              </ul>
            ),
          },
          {
            title: "What differentiability gives",
            children: (
              <>
                <p>
                  A well-defined tangent line at <Formula>c</Formula>, hence a definite
                  instantaneous rate of change.
                </p>
                <FormulaBlock latex={String.raw`y-f(c)=f'(c)(x-c)`} />
                <p>
                  Derivative at <Formula>c</Formula> exists{" "}
                  <Formula>{String.raw`\iff Lf'(c)=Rf'(c)`}</Formula>.
                </p>
              </>
            ),
          },
        ]}
      />

      <KeyPoint title="Theorem 3 — differentiable implies continuous">
        <p>
          If <Formula>f</Formula> is differentiable at a point <Formula>c</Formula>, then{" "}
          <Formula>f</Formula> is continuous at <Formula>c</Formula>.
        </p>
        <p className="mt-2">
          <strong>Proof.</strong> For <Formula>{String.raw`x\ne c`}</Formula>,
        </p>
        <FormulaBlock latex={String.raw`f(x)-f(c)=\frac{f(x)-f(c)}{x-c}\cdot(x-c)`} />
        <p>
          Taking limits as <Formula>{String.raw`x\to c`}</Formula>,
        </p>
        <FormulaBlock latex={String.raw`\lim_{x\to c}\left[f(x)-f(c)\right]=f'(c)\cdot 0=0`} />
        <p>
          so <Formula>{String.raw`\lim_{x\to c}f(x)=f(c)`}</Formula> and{" "}
          <Formula>f</Formula> is continuous at <Formula>c</Formula>.
        </p>
        <p className="mt-2">
          <strong>Corollary.</strong> Every differentiable function is continuous.
        </p>
      </KeyPoint>

      <Callout type="warning">
        <p>
          The <Highlight color="yellow">converse is false</Highlight>: continuity does not give
          differentiability. For <Formula>{String.raw`f(x)=|x|`}</Formula>,
        </p>
        <FormulaBlock
          latex={String.raw`Lf'(0)=\lim_{h\to 0^{-}}\frac{f(0+h)-f(0)}{h}=\frac{-h}{h}=-1`}
        />
        <FormulaBlock
          latex={String.raw`Rf'(0)=\lim_{h\to 0^{+}}\frac{f(0+h)-f(0)}{h}=\frac{h}{h}=1`}
        />
        <p>
          These differ, so <Formula>{String.raw`|x|`}</Formula> is continuous but not
          differentiable at <Formula>0</Formula>.
        </p>
      </Callout>

      <h3 id="h-5-2-1">5.2.1 Derivatives of composite functions</h3>
      <p>
        To differentiate <Formula>{String.raw`f(x)=(2x+1)^{3}`}</Formula> one may expand by the
        binomial theorem — but that is hopeless for{" "}
        <Formula>{String.raw`(2x+1)^{100}`}</Formula>. The <strong>chain rule</strong> handles
        composites directly.
      </p>
      <KeyPoint title="Chain rule">
        <p>
          If <Formula>{String.raw`f=v\circ u`}</Formula>, <Formula>{String.raw`t=u(x)`}</Formula>,
          and both <Formula>{String.raw`\dfrac{dt}{dx}`}</Formula> and{" "}
          <Formula>{String.raw`\dfrac{dv}{dt}`}</Formula> exist, then
        </p>
        <FormulaBlock latex={String.raw`\frac{df}{dx}=\frac{dv}{dt}\cdot\frac{dt}{dx}`} important />
        <p className="mt-2">
          In words: differentiate the <em>outer</em> function, then multiply by the derivative of
          the <em>inner</em> function.
        </p>
      </KeyPoint>

      <Expandable title="Example 21 — NCERT">
        <KeyPoint title="Example 21">
          <p>
            Find the derivative of <Formula>{String.raw`f(x)=\sin(x^{2})`}</Formula>.
          </p>
          <p>
            <strong>Step 1.</strong> Identify the inner function:{" "}
            <Formula>{String.raw`t=u(x)=x^{2}`}</Formula>; the outer function is{" "}
            <Formula>{String.raw`v(t)=\sin t`}</Formula>, so{" "}
            <Formula>{String.raw`f(x)=v(u(x))`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong> Both derivatives exist:{" "}
            <Formula>{String.raw`\dfrac{dv}{dt}=\cos t`}</Formula> and{" "}
            <Formula>{String.raw`\dfrac{dt}{dx}=2x`}</Formula>.
          </p>
          <p>
            <strong>Step 3.</strong> By the chain rule,
          </p>
          <FormulaBlock latex={String.raw`\frac{df}{dx}=\cos t\cdot 2x`} />
          <p>
            <strong>Step 4.</strong> Express the answer in terms of <Formula>x</Formula>:
          </p>
          <FormulaBlock latex={String.raw`\frac{df}{dx}=2x\cos(x^{2})`} />
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 5.2">
        <ExerciseQa
          questions={[
            <>
              <Formula>{String.raw`\sin(x^{2}+5)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\cos(\sin x)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\sin(ax+b)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\sec\left(\tan\sqrt{x}\right)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\dfrac{\sin(ax+b)}{\cos(cx+d)}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\cos x^{3}\cdot\sin^{2}(x^{5})`}</Formula>
            </>,
            <>
              <Formula>{String.raw`2\sqrt{\cot(x^{2})}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\cos(\sqrt{x})`}</Formula>
            </>,
            <>
              Prove that <Formula>{String.raw`f(x)=|x-1|`}</Formula>,{" "}
              <Formula>{String.raw`x\in\mathbb{R}`}</Formula>, is not differentiable at{" "}
              <Formula>{String.raw`x=1`}</Formula>.
            </>,
            <>
              Prove that <Formula>{String.raw`f(x)=[x]`}</Formula>,{" "}
              <Formula>{String.raw`0<x<3`}</Formula>, is not differentiable at{" "}
              <Formula>{String.raw`x=1`}</Formula> and <Formula>{String.raw`x=2`}</Formula>.
            </>,
          ]}
          answers={[
            <>
              <Formula>{String.raw`2x\cos(x^{2}+5)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`-\cos x\,\sin(\sin x)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`a\cos(ax+b)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{\sec\left(\tan\sqrt{x}\right)\tan\left(\tan\sqrt{x}\right)\sec^{2}\sqrt{x}}{2\sqrt{x}}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{a\cos(ax+b)\cos(cx+d)+c\sin(ax+b)\sin(cx+d)}{\cos^{2}(cx+d)}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`-3x^{2}\sin x^{3}\sin^{2}(x^{5})+10x^{4}\cos x^{3}\sin(x^{5})\cos(x^{5})`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{-2x\,\operatorname{cosec}^{2}(x^{2})}{\sqrt{\cot(x^{2})}}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`-\frac{\sin\sqrt{x}}{2\sqrt{x}}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`Lf'(1)=-1\ne 1=Rf'(1)`}</Formula> — not differentiable at{" "}
              <Formula>1</Formula>.
            </>,
            <>
              At <Formula>1</Formula> and <Formula>2</Formula> the function jumps, so the
              one-sided derivatives differ (left <Formula>0</Formula>, right unbounded).
            </>,
          ]}
        />
      </Expandable>

      <h3 id="h-5-2-2">5.2.2 Derivatives of implicit functions</h3>
      <p>
        Not every relation can be solved for <Formula>y</Formula>. In{" "}
        <Formula>{String.raw`x-y-\pi=0`}</Formula> we may write{" "}
        <Formula>{String.raw`y=x-\pi`}</Formula> — an <strong>explicit</strong> function. But in{" "}
        <Formula>{String.raw`x+\sin(xy)-y=0`}</Formula> there is no such clean solution; still{" "}
        <Formula>y</Formula> depends on <Formula>x</Formula>, and we say <Formula>y</Formula> is
        given <strong>implicitly</strong>. Differentiate both sides with respect to{" "}
        <Formula>x</Formula>, remembering that <Formula>y</Formula> is a function of{" "}
        <Formula>x</Formula> (so every <Formula>y</Formula> picked up by the chain rule brings a
        factor <Formula>{String.raw`\dfrac{dy}{dx}`}</Formula>), then solve for{" "}
        <Formula>{String.raw`\dfrac{dy}{dx}`}</Formula>.
      </p>

      <Expandable title="Examples 22 to 23 — NCERT">
        <KeyPoint title="Example 22">
          <p>
            Find <Formula>{String.raw`\dfrac{dy}{dx}`}</Formula> if{" "}
            <Formula>{String.raw`x-y=\pi`}</Formula>.
          </p>
          <p>
            <strong>Method 1 — solve first.</strong>{" "}
            <Formula>{String.raw`y=x-\pi`}</Formula>, so{" "}
            <Formula>{String.raw`\dfrac{dy}{dx}=1`}</Formula>.
          </p>
          <p>
            <strong>Method 2 — differentiate directly.</strong>
          </p>
          <FormulaBlock latex={String.raw`\frac{d}{dx}(x-y)=\frac{d}{dx}(\pi)`} />
          <FormulaBlock latex={String.raw`1-\frac{dy}{dx}=0\ \Rightarrow\ \frac{dy}{dx}=1`} />
        </KeyPoint>

        <KeyPoint title="Example 23">
          <p>
            Find <Formula>{String.raw`\dfrac{dy}{dx}`}</Formula> if{" "}
            <Formula>{String.raw`y+\sin y=\cos x`}</Formula>.
          </p>
          <p>
            <strong>Step 1.</strong> Differentiate both sides with respect to{" "}
            <Formula>x</Formula>:
          </p>
          <FormulaBlock latex={String.raw`\frac{dy}{dx}+\cos y\cdot\frac{dy}{dx}=-\sin x`} />
          <p>
            <strong>Step 2.</strong> Take <Formula>{String.raw`\dfrac{dy}{dx}`}</Formula> common:
          </p>
          <FormulaBlock latex={String.raw`\frac{dy}{dx}\,(1+\cos y)=-\sin x`} />
          <p>
            <strong>Step 3.</strong> Hence
          </p>
          <FormulaBlock
            latex={String.raw`\frac{dy}{dx}=-\frac{\sin x}{1+\cos y},\qquad y\ne (2n+1)\pi`}
            important
          />
        </KeyPoint>
      </Expandable>

      <h3 id="h-5-2-3">5.2.3 Derivatives of inverse trigonometric functions</h3>
      <p>
        The inverse trigonometric functions are continuous on their domains, and the chain rule
        gives their derivatives.
      </p>

      <TableCard
        title="Standard derivatives of inverse trigonometric functions"
        headers={[<span key="f">Function</span>, <span key="d">Derivative</span>, <span key="dom">Valid for</span>]}
        rows={[
          {
            cells: [
              <Formula key="1a">{String.raw`\sin^{-1}x`}</Formula>,
              <Formula key="1b">{String.raw`\dfrac{1}{\sqrt{1-x^{2}}}`}</Formula>,
              <Formula key="1c">{String.raw`-1<x<1`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="2a">{String.raw`\cos^{-1}x`}</Formula>,
              <Formula key="2b">{String.raw`-\dfrac{1}{\sqrt{1-x^{2}}}`}</Formula>,
              <Formula key="2c">{String.raw`-1<x<1`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="3a">{String.raw`\tan^{-1}x`}</Formula>,
              <Formula key="3b">{String.raw`\dfrac{1}{1+x^{2}}`}</Formula>,
              <Formula key="3c">{String.raw`x\in\mathbb{R}`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="4a">{String.raw`\cot^{-1}x`}</Formula>,
              <Formula key="4b">{String.raw`-\dfrac{1}{1+x^{2}}`}</Formula>,
              <Formula key="4c">{String.raw`x\in\mathbb{R}`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="5a">{String.raw`\sec^{-1}x`}</Formula>,
              <Formula key="5b">{String.raw`\dfrac{1}{|x|\sqrt{x^{2}-1}}`}</Formula>,
              <Formula key="5c">{String.raw`|x|>1`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="6a">{String.raw`\operatorname{cosec}^{-1}x`}</Formula>,
              <Formula key="6b">{String.raw`-\dfrac{1}{|x|\sqrt{x^{2}-1}}`}</Formula>,
              <Formula key="6c">{String.raw`|x|>1`}</Formula>,
            ],
          },
        ]}
        caption="With the chain rule these become d/dx f(u) = f′(u)·u′. For example d/dx sin⁻¹(2x) = 2/√(1 − 4x²)."
      />

      <Expandable title="Example 24 — NCERT">
        <KeyPoint title="Example 24">
          <p>
            Find the derivative of <Formula>{String.raw`f(x)=\sin^{-1}x`}</Formula>, assuming it
            exists.
          </p>
          <p>
            <strong>Step 1.</strong> Put <Formula>{String.raw`y=\sin^{-1}x`}</Formula>. Then{" "}
            <Formula>{String.raw`x=\sin y`}</Formula>, with{" "}
            <Formula>{String.raw`-\dfrac{\pi}{2}\le y\le \dfrac{\pi}{2}`}</Formula>.
          </p>
          <p>
            <strong>Step 2.</strong> Differentiate both sides with respect to{" "}
            <Formula>x</Formula>:
          </p>
          <FormulaBlock latex={String.raw`1=\cos y\cdot\frac{dy}{dx}`} />
          <p>
            <strong>Step 3.</strong> So{" "}
            <Formula>{String.raw`\dfrac{dy}{dx}=\dfrac{1}{\cos y}`}</Formula>, and on the chosen
            range <Formula>{String.raw`\cos y>0`}</Formula>, so{" "}
            <Formula>{String.raw`\cos y=\sqrt{1-\sin^{2}y}=\sqrt{1-x^{2}}`}</Formula>.
          </p>
          <p>
            <strong>Step 4.</strong> Hence
          </p>
          <FormulaBlock
            latex={String.raw`\frac{d}{dx}\left(\sin^{-1}x\right)=\frac{1}{\sqrt{1-x^{2}}},\qquad -1<x<1`}
            important
          />
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 5.3">
        <ExerciseQa
          questions={[
            <>
              <Formula>{String.raw`2x+3y=\sin x`}</Formula>
            </>,
            <>
              <Formula>{String.raw`2x+3y=\sin y`}</Formula>
            </>,
            <>
              <Formula>{String.raw`ax+by^{2}=\cos y`}</Formula>
            </>,
            <>
              <Formula>{String.raw`xy+y^{2}=\tan x+y`}</Formula>
            </>,
            <>
              <Formula>{String.raw`x^{2}+xy+y^{2}=100`}</Formula>
            </>,
            <>
              <Formula>{String.raw`x^{3}+x^{2}y+xy^{2}+y^{3}=81`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\sin^{2}y+\cos(xy)=\kappa`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\sin^{2}x+\cos^{2}y=1`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y=\sin^{-1}\left(\dfrac{2x}{1+x^{2}}\right)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y=\tan^{-1}\left(\dfrac{3x-x^{3}}{1-3x^{2}}\right)`}</Formula>,{" "}
              <Formula>{String.raw`-\dfrac{1}{\sqrt{3}}<x<\dfrac{1}{\sqrt{3}}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y=\cos^{-1}\left(\dfrac{1-x^{2}}{1+x^{2}}\right)`}</Formula>,{" "}
              <Formula>{String.raw`0<x<1`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y=\sin^{-1}\left(\dfrac{1-x^{2}}{1+x^{2}}\right)`}</Formula>,{" "}
              <Formula>{String.raw`0<x<1`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y=\cos^{-1}\left(\dfrac{2x}{1+x^{2}}\right)`}</Formula>,{" "}
              <Formula>{String.raw`-1<x<1`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y=\sin^{-1}\left(2x\sqrt{1-x^{2}}\right)`}</Formula>,{" "}
              <Formula>{String.raw`-\dfrac{1}{\sqrt{2}}<x<\dfrac{1}{\sqrt{2}}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y=\sec^{-1}\left(\dfrac{1}{2x^{2}-1}\right)`}</Formula>,{" "}
              <Formula>{String.raw`0<x<\dfrac{1}{\sqrt{2}}`}</Formula>
            </>,
          ]}
          answers={[
            <>
              <Formula>{String.raw`\frac{dy}{dx}=\frac{\cos x-2}{3}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{dy}{dx}=\frac{2}{\cos y-3}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{dy}{dx}=\frac{-a}{2by+\sin y}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{dy}{dx}=\frac{\sec^{2}x-y}{x+2y-1}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{dy}{dx}=-\frac{2x+y}{x+2y}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{dy}{dx}=-\frac{3x^{2}+2xy+y^{2}}{x^{2}+2xy+3y^{2}}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{dy}{dx}=\frac{y\sin(xy)}{\sin 2y-x\sin(xy)}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{dy}{dx}=\frac{\sin 2x}{\sin 2y}`}</Formula>
            </>,
            <>
              Put <Formula>{String.raw`x=\tan\theta`}</Formula>:{" "}
              <Formula>{String.raw`y=2\tan^{-1}x`}</Formula>, so{" "}
              <Formula>{String.raw`\frac{dy}{dx}=\frac{2}{1+x^{2}}`}</Formula>.
            </>,
            <>
              Put <Formula>{String.raw`x=\tan\theta`}</Formula>:{" "}
              <Formula>{String.raw`y=3\tan^{-1}x`}</Formula>, so{" "}
              <Formula>{String.raw`\frac{dy}{dx}=\frac{3}{1+x^{2}}`}</Formula>.
            </>,
            <>
              Put <Formula>{String.raw`x=\tan\theta`}</Formula>:{" "}
              <Formula>{String.raw`y=2\theta=2\tan^{-1}x`}</Formula>, so{" "}
              <Formula>{String.raw`\frac{dy}{dx}=\frac{2}{1+x^{2}}`}</Formula>.
            </>,
            <>
              Put <Formula>{String.raw`x=\tan\theta`}</Formula>:{" "}
              <Formula>{String.raw`y=2\tan^{-1}x`}</Formula>, so{" "}
              <Formula>{String.raw`\frac{dy}{dx}=\frac{2}{1+x^{2}}`}</Formula>.
            </>,
            <>
              Put <Formula>{String.raw`x=\tan\theta`}</Formula>:{" "}
              <Formula>{String.raw`y=\dfrac{\pi}{2}-2\tan^{-1}x`}</Formula>, so{" "}
              <Formula>{String.raw`\frac{dy}{dx}=-\frac{2}{1+x^{2}}`}</Formula>.
            </>,
            <>
              Put <Formula>{String.raw`x=\sin\theta`}</Formula>:{" "}
              <Formula>{String.raw`y=2\theta`}</Formula>, so{" "}
              <Formula>{String.raw`\frac{dy}{dx}=\frac{2}{\sqrt{1-x^{2}}}`}</Formula>.
            </>,
            <>
              Put <Formula>{String.raw`x=\cos\theta`}</Formula>:{" "}
              <Formula>{String.raw`y=2\cos^{-1}x`}</Formula>, so{" "}
              <Formula>{String.raw`\frac{dy}{dx}=-\frac{2}{\sqrt{1-x^{2}}}`}</Formula>.
            </>,
          ]}
        />
      </Expandable>

      {/* CONTENT-END */}
    </>
  );
}
