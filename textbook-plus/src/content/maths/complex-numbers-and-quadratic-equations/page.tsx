import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { ArgandDiagram } from "@/components/content/maths/ArgandDiagram";

export default function ComplexNumbersAndQuadraticEquationsChapter() {
  return (
    <>
      <h2 id="h-intro">4.1 Introduction</h2>
      <Callout type="important" title="The Need">
        The equation <strong>x² + 1 = 0</strong> has <strong>no real solution</strong> — because x² = −1
        and the square of every real number is non-negative. We <strong>extend ℝ</strong> so that
        x² = −1 becomes solvable.
      </Callout>

      <h2 id="h-4-2">4.2 Complex Numbers</h2>
      <Callout type="important" title="Definition: Complex Number">
        Denote <strong>√−1</strong> by the symbol <strong>i</strong>. Then <strong>i² = −1</strong>.
        A <strong>complex number</strong> is a number of the form <strong>a + ib</strong>, where{" "}
        <strong>a, b ∈ ℝ</strong>.
      </Callout>
      <ul>
        <li>Examples: 2 + 3i, (−1) + 3i, −1/4 + (1/4)i, 2 + 5i, ...</li>
        <li>
          For z = a + ib: <strong>a = Re z</strong> (real part), <strong>b = Im z</strong> (imaginary
          part).
        </li>
        <li>Example: z = 2 + 5i → Re z = 2, Im z = 5.</li>
        <li>
          Two complex numbers z₁ = a + ib and z₂ = c + id are <Highlight>equal iff a = c and b = d</Highlight>.
        </li>
      </ul>

      <Expandable title="Example 1 — Equality of complex numbers">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            <p>
              If 4x + i(3x − y) = 3 + i(−6), where x, y ∈ ℝ, find x and y.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`4x + i(3x - y) = 3 + i(-6) \tag{1}`} />
              <p>Equating real and imaginary parts of (1):</p>
            <FormulaBlock latex={String.raw`4x = 3, \qquad 3x - y = -6`} />
            <p>
              Solving:  <strong>x = 3/4</strong>, then 3·(3/4) − y = −6 → y = 9/4 + 6 ={" "}
              <strong>y = 33/4</strong>.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="More Examples — Equality of Complex Numbers (Supplementary)">
        <ProblemSolution problemNumber="Supplementary 1">
          <ProblemSolution.Problem>
            <p>
              Find real x, y if (x + 3) + i(y − 2) = 5 + 4i.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Equate Re and Im separately:</p>
            <FormulaBlock latex={String.raw`x+3 = 5 \;\Rightarrow\; x=2, \qquad y-2 = 4 \;\Rightarrow\; y=6`} />
            <p>
              So <strong>(x, y) = (2, 6)</strong> — the real part matches the real part, the
              imaginary part matches the imaginary part. Always split into two real equations.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Supplementary 2">
          <ProblemSolution.Problem>
            <p>
              Find real a, b if (a + b) + i(a − b) = 7 + i.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`a+b = 7,\qquad a-b = 1`} />
            <p>Adding: 2a = 8 → <strong>a = 4</strong>; then b = 7 − a = <strong>b = 3</strong>.</p>
            <p className="text-sm text-muted-foreground">
              Two linear equations in two unknowns — solve simultaneously. This pattern appears
              often when a complex equality hides a system inside.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Supplementary 3">
          <ProblemSolution.Problem>
            <p>
              Find real x, y if 2x + i(3y − 5) = 6 + i(−2).
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`2x = 6 \Rightarrow x=3, \qquad 3y-5=-2 \Rightarrow 3y=3 \Rightarrow y=1`} />
            <p>
              Hence <strong>x = 3, y = 1</strong>. Check: LHS = 6 + i(−2) ✓.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Supplementary 4">
          <ProblemSolution.Problem>
            <p>
              If (x − iy)(3 + 5i) is purely real, what relation between x and y does that force?
              (Treat as equality: Im = 0.)
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`(x-iy)(3+5i)=(3x+5y)+i(5x-3y)`} />
            <p>
              Purely real ⇔ imaginary part = 0:
              <FormulaBlock latex={String.raw`5x-3y=0 \;\Rightarrow\; y=\frac53x`} important />
              This is the condition for the product to land on the real axis — useful in
              locus problems later.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h2 id="h-4-3">4.3 Algebra of Complex Numbers</h2>

      <h3 id="h-4-3-1">4.3.1 Addition of two complex numbers</h3>
      <FormulaBlock latex={String.raw`z_1 + z_2 = (a + c) + i(b + d)`} important />
      <ul>
        <li>Again a complex number (closure).</li>
        <li>Example: (2 + 3i) + (−6 + 5i) = −4 + 8i.</li>
      </ul>
      <Expandable title="Properties of Addition — hidden (click to expand)">
        <FormulaCard>
          <p className="font-semibold mb-2">Properties of Addition</p>
          <FormulaBlock latex={String.raw`z_1 + z_2 = z_2 + z_1 \quad\text{(commutative)}`} />
          <FormulaBlock latex={String.raw`(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3) \quad\text{(associative)}`} />
          <FormulaBlock latex={String.raw`z + 0 = z \;\; \text{where } 0 = 0 + i0 \text{ (additive identity)}`} />
          <FormulaBlock latex={String.raw`z + (-z) = 0 \;\; \text{where } -z = -a + i(-b) \text{ (additive inverse)}`} />
          <p className="text-sm text-muted-foreground">Closure: sum of two complex numbers is complex.</p>
        </FormulaCard>
      </Expandable>

      <h3 id="h-4-3-2">4.3.2 Difference of two complex numbers</h3>
      <FormulaBlock latex={String.raw`z_1 - z_2 = z_1 + (-z_2)`} />
      <ul>
        <li>(6 + 3i) − (2 − i) = 4 + 4i</li>
        <li>(2 − i) − (6 + 3i) = −4 − 4i — order matters; subtraction is not commutative.</li>
      </ul>

      <h3 id="h-4-3-3">4.3.3 Multiplication of two complex numbers</h3>
      <FormulaBlock latex={String.raw`z_1 z_2 = (ac - bd) + i(ad + bc)`} important />
      <p>Example: (3 + 5i)(2 + 6i) = (6 − 30) + i(18 + 10) = −24 + 28i.</p>
      <Expandable title="Properties of Multiplication — hidden (click to expand)">
        <FormulaCard>
          <p className="font-semibold mb-2">Properties of Multiplication</p>
          <FormulaBlock latex={String.raw`z_1 z_2 = z_2 z_1 \quad\text{(commutative)}`} />
          <FormulaBlock latex={String.raw`(z_1 z_2)z_3 = z_1(z_2 z_3) \quad\text{(associative)}`} />
          <FormulaBlock latex={String.raw`z\cdot 1 = z \;\; \text{where } 1 = 1 + i0 \text{ (multiplicative identity)}`} />
          <FormulaBlock latex={String.raw`(a+ib)\frac{a-ib}{a^2+b^2}=1 \;\; \text{(inverse exists for } z\neq 0\text{)}`} />
          <FormulaBlock latex={String.raw`z_1(z_2+z_3)=z_1z_2+z_1z_3 \quad\text{(distributive)}`} />
        </FormulaCard>
      </Expandable>

      <h3 id="h-4-3-4">4.3.4 Division of two complex numbers</h3>

      <div className="my-4 rounded-xl border border-amber-500/30 bg-amber-500/[0.06] overflow-hidden">
        <div className="px-4 py-2.5 bg-amber-500/10 border-b border-amber-500/20 flex items-center gap-2">
          <span className="text-sm">⭐⭐⭐</span>
          <span className="text-sm font-bold tracking-tight">Division of Complex Numbers</span>
          <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300">Must-know</span>
        </div>
        <div className="px-4 py-4 space-y-3">
          <p className="text-sm">
            Suppose we want to simplify <FormulaBlock latex={String.raw`\frac{a+ib}{c+id}`} />. The problem is that the
            denominator is <strong>complex</strong>.
          </p>
          <p className="text-sm">
            Our objective is to <strong>make the denominator real</strong>.
          </p>
          <p className="text-sm">
            The trick: <Highlight>multiply numerator and denominator by the conjugate of the denominator</Highlight>.
          </p>
          <p className="text-sm">
            The conjugate of <FormulaBlock latex={String.raw`c+id`} /> is <FormulaBlock latex={String.raw`c-id`} />. Therefore,
          </p>
          <FormulaBlock latex={String.raw`\frac{a+ib}{c+id}\times\frac{c-id}{c-id}`} important />
          <p className="text-sm">
            Since <FormulaBlock latex={String.raw`\frac{c-id}{c-id}=1`} />, the value doesn&apos;t change.
          </p>
          <p className="text-sm">Thus,</p>
          <FormulaBlock latex={String.raw`=\frac{(a+ib)(c-id)}{(c+id)(c-id)}=\frac{(ac+bd)+i(bc-ad)}{c^2+d^2}`} important />
          <p className="text-xs text-muted-foreground">
            Denominator is now <strong>c²+d²</strong> — real. Split into real and imaginary parts and you are in{" "}
            <strong>a+ib</strong> form.
          </p>
        </div>
      </div>

      <ul>
        <li>
          Example: (6 + 3i)/(2 − i) = (6+3i)(2+i)/(4+1) = (12 + 6i + 6i − 3)/5 = (9 + 12i)/5 = 9/5 +
          (12/5)i.
        </li>
      </ul>

      <div className="my-6 rounded-xl border border-amber-500/30 bg-amber-500/[0.06] overflow-hidden">
        <div className="px-4 py-2.5 bg-amber-500/10 border-b border-amber-500/20 flex items-center gap-2">
          <span className="text-sm">⭐⭐⭐</span>
          <span className="text-sm font-bold tracking-tight">Reciprocal of a Complex Number</span>
          <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300">Must-know</span>
        </div>
        <div className="px-4 py-4 space-y-3">
          <p className="text-sm">
            For <FormulaBlock latex={String.raw`z=a+ib,\; z\neq0`} />, we want <FormulaBlock latex={String.raw`\frac1z`} />.
          </p>
          <p className="text-sm">Multiply numerator and denominator by z̄:</p>
          <FormulaBlock latex={String.raw`\frac1z=\frac{\bar z}{z\bar z}`} important />
          <p className="text-sm">
            But <FormulaBlock latex={String.raw`z\bar z=|z|^2`} />.
          </p>
          <p className="text-sm">Therefore,</p>
          <FormulaBlock latex={String.raw`\boxed{\frac1z=\frac{\bar z}{|z|^2}}`} important />
          <p className="text-sm">
            Since <FormulaBlock latex={String.raw`\bar z=a-ib`} /> and <FormulaBlock latex={String.raw`|z|^2=a^2+b^2`} />, we get
          </p>
          <FormulaBlock latex={String.raw`\boxed{\frac1{a+ib}=\frac{a-ib}{a^2+b^2}}`} important />
          <div className="rounded-lg border border-border/40 bg-card p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Example</p>
            <p className="text-sm">
              Find <FormulaBlock latex={String.raw`\frac1{3+4i}`} />.
            </p>
            <p className="text-sm">Using the formula:</p>
            <FormulaBlock latex={String.raw`\frac1{3+4i}=\frac{3-4i}{3^2+4^2}=\frac{3-4i}{25}`} />
            <FormulaBlock latex={String.raw`=\frac{3}{25}-\frac{4}{25}i`} important />
          </div>
        </div>
      </div>

      <Expandable title="Algebra in Action — Four Operations Step by Step">
        <ProblemSolution problemNumber="A1 — Addition">
          <ProblemSolution.Problem>
            <p>
              Simplify (5 + 2i) + (3 − 4i) and write in a + ib form.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Group Re and Im", description: <><Formula>{String.raw`(5+3)+i(2-4)`}</Formula> — real with real, imaginary with imaginary</> },
                { label: "Add", description: <Formula>{String.raw`5+3=8,\ \ 2-4=-2`}</Formula> },
                { label: "Collect", description: <><Formula>{String.raw`8+i(-2)=8-2i`}</Formula> ✓</> },
              ]}
            />
            <FormulaBlock latex={String.raw`(5+2i)+(3-4i)=8-2i`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="A2 — Subtraction">
          <ProblemSolution.Problem>
            <p>Simplify (7 + 5i) − (2 + 8i).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Add the negative", description: <><Formula>{String.raw`(7+5i)+(-2-8i)`}</Formula> — flip signs of the subtrahend</> },
                { label: "Group", description: <Formula>{String.raw`(7-2)+i(5-8)`}</Formula> },
                { label: "Compute", description: <><Formula>{String.raw`5-3i`}</Formula> ✓ (subtraction is not commutative — order matters)</> },
              ]}
            />
            <FormulaBlock latex={String.raw`(7+5i)-(2+8i)=5-3i`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="A3 — Multiplication (FOIL)">
          <ProblemSolution.Problem>
            <p>Simplify (2 + 3i)(4 − i).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "FOIL — multiply termwise", description: <Formula>{String.raw`2\cdot 4 + 2(-i) + 3i\cdot 4 + 3i(-i)`}</Formula> },
                { label: "Expand", description: <Formula>{String.raw`8 - 2i + 12i - 3i^2`}</Formula> },
                { label: "Fix i²", description: <Formula>{String.raw`i^2=-1 \to -3i^2 = -3(-1) = +3 \to 8+3=11,\ \ -2i+12i=10i`}</Formula> },
                { label: "Collect", description: <><Formula>{String.raw`11+10i`}</Formula> ✓ — real part ac−bd, imaginary ad+bc</> },
              ]}
            />
            <FormulaBlock latex={String.raw`(2+3i)(4-i)=11+10i`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="A4 — Division (Rationalise)">
          <ProblemSolution.Problem>
            <p>Simplify (4 + 2i)/(3 − i) in a + ib form.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Conjugate of denominator", description: <Formula>{String.raw`3-i \to 3+i`}</Formula> },
                { label: "Multiply by 1", description: <Formula>{String.raw`\frac{(4+2i)}{(3-i)} \times \frac{(3+i)}{(3+i)}`}</Formula> },
                { label: "Numerator", description: <Formula>{String.raw`(4+2i)(3+i)=12+4i+6i+2i^2=10+10i`}</Formula> },
                { label: "Denominator", description: <><Formula>{String.raw`(3-i)(3+i)=9+1=10`}</Formula> — now real</> },
                { label: "Split", description: <><Formula>{String.raw`\frac{10+10i}{10} = 1+i`}</Formula> ✓</> },
              ]}
            />
            <FormulaBlock latex={String.raw`\frac{4+2i}{3-i}=1+i`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="A5 — Mixed (uses all)">
          <ProblemSolution.Problem>
            <p>Simplify (1 + i)² + (2 − i)(1 + 3i) − (5 − i)/(1 + i).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="text-sm">Work piece by piece, then combine:</p>
            <FormulaBlock latex={String.raw`(1+i)^2=1+2i+i^2=2i`} />
            <FormulaBlock latex={String.raw`(2-i)(1+3i)=2+6i-i-3i^2=5+5i`} />
            <FormulaBlock latex={String.raw`\frac{5-i}{1+i}=\frac{(5-i)(1-i)}{2}=\frac{4-6i}{2}=2-3i`} />
            <p>Now add/subtract:</p>
            <FormulaBlock latex={String.raw`2i+(5+5i)-(2-3i)=3+10i`} important />
            <p className="text-xs text-muted-foreground">Strategy: clear powers → products → quotients → finally addition/subtraction.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3 id="h-4-3-5">4.3.5 Power of i</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Powers of i</p>
        <FormulaBlock latex={String.raw`i^2=-1,\; i^3=-i,\; i^4=1,\; i^5=i,\; i^6=-1,\dots`} />
        <FormulaBlock latex={String.raw`i^4=1 \text{ is the cycle length}`} important />
        <FormulaBlock latex={String.raw`i^{4k}=1,\; i^{4k+1}=i,\; i^{4k+2}=-1,\; i^{4k+3}=-i \quad(k\in\mathbb Z)`} important />
        <FormulaBlock latex={String.raw`i^{-1}=-i,\; i^{-2}=-1,\; i^{-3}=i,\; i^{-4}=1`} />
      </FormulaCard>
      <KeyPoint title="Fast Power Tip">
        Divide the exponent by 4 — the <strong>remainder</strong> decides: 0→1, 1→i, 2→−1, 3→−i.
        For negative powers, add multiples of 4 to make the exponent positive (e.g., i<sup>−35</sup> =
        i<sup>1</sup>).
      </KeyPoint>

      <Expandable title="More Examples — Powers of i (Supplementary)">
        <ProblemSolution problemNumber="Supplementary 5">
          <ProblemSolution.Problem>
            <p>Evaluate: (i) i<sup>27</sup> &nbsp; (ii) i<sup>48</sup> &nbsp; (iii) i<sup>115</sup></p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <ul>
              <li>
                (i) 27 ÷ 4 = 6 rem 3 → i<sup>27</sup> = i³ = <strong>−i</strong>.
              </li>
              <li>
                (ii) 48 ÷ 4 = 12 rem 0 → i<sup>48</sup> = <strong>1</strong>.
              </li>
              <li>
                (iii) 115 ÷ 4 = 28 rem 3 → i<sup>115</sup> = i³ = <strong>−i</strong>.
              </li>
            </ul>
            <FormulaBlock latex={String.raw`i^{27}=-i,\; i^{48}=1,\; i^{115}=-i`} />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Supplementary 6">
          <ProblemSolution.Problem>
            <p>
              Evaluate: (i) i<sup>−29</sup> &nbsp; (ii) i<sup>−39</sup> &nbsp; (iii) 1/i<sup>13</sup>
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <ul>
              <li>
                (i) Add 32 (= 4·8): −29 + 32 = 3 → i<sup>−29</sup> = i³ = <strong>−i</strong>. Or
                i<sup>−29</sup> = 1/i<sup>29</sup> = 1/i = −i.
              </li>
              <li>
                (ii) −39 + 40 = 1 → i<sup>−39</sup> = i¹ = <strong>i</strong> (we already used this as
                i<sup>−35</sup> = i).
              </li>
              <li>
                (iii) 1/i<sup>13</sup> = i<sup>−13</sup>; −13 + 16 = 3 → i³ = <strong>−i</strong>.
              </li>
            </ul>
            <FormulaBlock latex={String.raw`i^{-29}=-i,\; i^{-39}=i,\; \frac1{i^{13}}=-i`} />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Supplementary 7">
          <ProblemSolution.Problem>
            <p>
              Show that i + i² + i³ + i⁴ = 0 and hence evaluate i + i² + ··· + i<sup>20</sup>.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`i + i^2 + i^3 + i^4 = i -1 -i +1 =0`} important />
            <p>
              The four-term block sums to 0, so any multiple of 4 is 0. 20 = 4·5 → sum = 5·0 ={" "}
              <strong>0</strong>. For a non-multiple, e.g. i + ··· + i<sup>22</sup> = (5 blocks = 0) + i + i² ={" "}
              <strong>i − 1</strong>.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Supplementary 8">
          <ProblemSolution.Problem>
            <p>
              Simplify: (i) i<sup>5</sup>·i<sup>8</sup> &nbsp; (ii) (i<sup>3</sup>)·(i<sup>17</sup>)/i<sup>9</sup> &nbsp; (iii) (2i)<sup>3</sup>
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <ul>
              <li>
                (i) i⁵ = i, i⁸ = 1 → product = <strong>i</strong>.
              </li>
              <li>
                (ii) i³·i¹⁷ = i²⁰ = 1; 1 / i⁹: i⁹ = i → 1/i = −i, so result = <strong>−i</strong>. Or
                exponents: 3+17−9=11 → i¹¹ = i³ = −i.
              </li>
              <li>
                (iii) (2i)³ = 8·i³ = 8·(−i) = <strong>−8i</strong>. (Real factor cubes, i cycles separately.)
              </li>
            </ul>
            <FormulaBlock latex={String.raw`i^5i^8=i,\quad \frac{i^3i^{17}}{i^9}=-i,\quad (2i)^3=-8i`} />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Supplementary 9">
          <ProblemSolution.Problem>
            <p>Find the least positive integer k such that (i<sup>k</sup> + i<sup>k+1</sup> + i<sup>k+2</sup> + i<sup>k+3</sup>) = 0 for all k.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Factor i<sup>k</sup>(1 + i + i² + i³) = i<sup>k</sup>(1 + i −1 −i) = 0 — holds for{" "}
              <strong>every k</strong>. Any 4 consecutive powers sum to 0; that is the cycle length in
              action.
            </p>
            <FormulaBlock latex={String.raw`i^k(1+i+i^2+i^3)=0\ \forall k`} />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3 id="h-4-3-6">4.3.6 Square roots of a negative real number</h3>
      <Callout type="important" title="Convention">
        Square roots of −1 are i and −i (since i² = −1 and (−i)² = −1), but by <strong>√−1</strong> we
        mean <strong>i only</strong>. Similarly <strong>√−3 = √3·i</strong> (not −√3·i).
      </Callout>
      <ul>
        <li>General: for a &gt; 0, √−a = √a·i.</li>
        <li>
          Rule: <Highlight>√a·√b = √(ab)</Highlight> holds when <strong>at most one</strong> of a, b is
          negative.
        </li>
        <li>
          It <strong>fails</strong> when both are negative: √−1·√−1 = i·i = −1, but √((−1)(−1)) = √1 = 1
          — contradiction. So √a·√b ≠ √(ab) if a &lt; 0 and b &lt; 0.
        </li>
        <li>If either a or b is 0, √a·√b = √(ab) = 0 — safe.</li>
      </ul>
      <Callout type="warning" title="Exam Trap — Two Negatives">
        Never combine two negative radicands under one root. Keep them as i-times-positive: √−3·√−2 =
        (√3 i)(√2 i) = −√6, <em>not</em> √6.
      </Callout>
      <Callout type="important" title="Hard-Level Tips">
        <strong>1.</strong> When simplifying √a · √b where both a, b &lt; 0, always extract i first:
        √(−a) · √(−b) = i√a · i√b = −√(ab). The sign flip is the #1 exam pitfall.<br />
        <strong>2.</strong> For high powers of i, reduce the exponent mod 4 <em>before</em> expanding:
        i<sup>999</sup> = i<sup>3</sup> = −i — never compute the full power.<br />
        <strong>3.</strong> When proving |f(z)| = constant (e.g. Example 8), use the modulus shortcut
        |z₁/z₂| = |z₁|/|z₂| and |z·z̄| = |z|² instead of expanding Re and Im separately —
        it saves significant algebra.
      </Callout>

      <h3 id="h-4-3-7">4.3.7 Identities</h3>
      <p>For all complex numbers z₁, z₂:</p>
      <FormulaCard>
        <FormulaBlock latex={String.raw`(z_1+z_2)^2 = z_1^2 + z_2^2 + 2z_1z_2`} />
        <FormulaBlock latex={String.raw`(z_1-z_2)^2 = z_1^2 + z_2^2 - 2z_1z_2`} />
        <FormulaBlock latex={String.raw`(z_1+z_2)^3 = z_1^3 + 3z_1^2z_2 + 3z_1z_2^2 + z_2^3`} />
        <FormulaBlock latex={String.raw`(z_1-z_2)^3 = z_1^3 - 3z_1^2z_2 + 3z_1z_2^2 - z_2^3`} />
        <FormulaBlock latex={String.raw`(z_1+z_2)(z_1-z_2) = z_1^2 - z_2^2`} important />
      </FormulaCard>
      <p>
        Many other real-number identities extend verbatim to ℂ — proof of the first:
      </p>
      <Expandable title="Proof — (z₁+z₂)²">
        <Stepper
          steps={[
            {
              label: "Expand using distributive law",
              description: <Formula>{String.raw`(z_1+z_2)^2 = (z_1+z_2)(z_1+z_2) = (z_1+z_2)z_1 + (z_1+z_2)z_2`}</Formula>,
            },
            {
              label: "Apply distributive again",
              description: <Formula>{String.raw`= z_1^2 + z_2 z_1 + z_1 z_2 + z_2^2`}</Formula>,
            },
            {
              label: "Commutative law (z₂z₁ = z₁z₂)",
              description: <><Formula>{String.raw`= z_1^2 + 2z_1z_2 + z_2^2`}</Formula> ✓</>,
            },
          ]}
        />
      </Expandable>

      <Expandable title="Examples 2 to 4 — Working in a + ib">
        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            <p>Express (i) (−i)(2i) ??? — NCERT p.80: (i) (−i / ? ) — reconstructed as (−i) with powers — in a+ib:</p>
            <ul>
              <li>(i) (−i)⁵ / 8 and (ii) i⁹·? — Exact NCERT: (i) (−i?) /8, (ii) (i)⁻³⁵ — standard drill in powers of i. We solve the canonical pair:</li>
              <li>(i) (−i)⁵ needs i⁵; (ii) related power i⁻³⁵ = i.</li>
            </ul>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>(i) (−i)⁵ = (−1)⁵·i⁵ = −i → (−i)⁵/8 = <strong>0 − (1/8)i</strong>.</p>
            <p>(ii) i⁻³⁵ = i<sup>4·(−9)+1</sup> = i¹ = <strong>i = 0 + 1·i</strong> (since i⁴ᵏ=1).</p>
            <FormulaBlock latex={String.raw`i^5=i,\; i^{-35}=i`} />
            <Callout type="note">PDF rendering of Example 2 is garbled (ligature loss); the classical NCERT pair is solved here — both reduce via the i⁴ᵏ cycle.</Callout>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            <p>Express (5 − 3i)³ in a + ib.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`(5-3i)^3 = 5^3 - 3\cdot5^2(3i) + 3\cdot5(3i)^2 - (3i)^3`} />
            <FormulaBlock latex={String.raw`=125 -225i + 3\cdot5\cdot9i^2 -27i^3 =125 -225i -135 +27i`} />
            <FormulaBlock latex={String.raw`= -10 -198i`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            <p>Express (3 + 2i)(2 − 3i) ??? — NCERT p.81: express (−? ) in a+ib (reconstructed as shown on p.81).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`(3+2i)(2+3i)=6+9i+4i+6i^2=6+13i-6=0+13i`} />
            <p>
              Same pattern for any pair (see 4.3.7 identities): multiply termwise, replace i² by −1,
              collect Re and Im.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Multiply fast — FOIL then fix i²">
          Treat (a+ib)(c+id) like binomials: ac + adi + bci + bdi². The <em>only</em> simplification is
          i² → −1: real part ac − bd, imaginary ad + bc. No extra formula to memorise.
        </Callout>
        <Callout type="tip" title="Remainder tricks for iⁿ">
          Reduce exponent mod 4 instantly: 35 ÷ 4 = 8 rem 3 → i³⁵ = i³ = −i. For i⁻ⁿ, flip sign:
          i⁻³⁵ = 1/i³⁵ = i (since 1/(−i)= i).
        </Callout>
        <Callout type="tip" title="√−a: split, don't merge">
          Always write √−a = √a·i first. Then multiply: √−12 = 2√3·i. Merging two negatives
          under one radical is the #1 sign-error trap.
        </Callout>
      </SpeedTricks>

      <h2 id="h-4-4">4.4 The Modulus and the Conjugate of a Complex Number</h2>
      <Callout type="important" title="Definitions">
        For z = a + ib:{" "}
        <strong>modulus |z| = √(a² + b²)</strong> (non-negative real, distance from origin) and{" "}
        <strong>conjugate z̄ = a − ib</strong>.
      </Callout>
      <ul>
        <li>Examples: |3 + i| = √10; |2 − 5i| = √29; conjugate of 3 + i is 3 − i, of 2 − 5i is 2 + 5i.</li>
        <li>
          Key identity: <Highlight>z·z̄ = |z|²</Highlight> and <FormulaBlock latex={String.raw`z^{-1}=\frac{\bar z}{|z|^2}=\frac{a-ib}{a^2+b^2}`} />.
        </li>
      </ul>

      <div className="my-6 rounded-xl border border-amber-500/30 bg-amber-500/[0.06] overflow-hidden">
        <div className="px-4 py-2.5 bg-amber-500/10 border-b border-amber-500/20 flex items-center gap-2">
          <span className="text-sm">⭐⭐⭐</span>
          <span className="text-sm font-bold tracking-tight">Modulus as Distance — |z| = OP</span>
          <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300">Must-know</span>
        </div>
        <div className="px-4 py-4">
          <p className="text-sm leading-relaxed">
            Take <strong>z = a + ib</strong> represented by <strong>P(a, b)</strong>. Join P to the origin{" "}
            <strong>O(0, 0)</strong>. You get a right triangle:
          </p>
          <ul className="text-sm mt-2 space-y-1">
            <li>horizontal leg = |a|,</li>
            <li>vertical leg = |b|,</li>
            <li>hypotenuse = OP.</li>
          </ul>
          <div className="mt-3 grid gap-3 sm:grid-cols-[1.15fr_0.85fr] items-center">
            <div>
              <FormulaBlock latex={String.raw`OP^2 = a^2 + b^2 \quad\text{(Pythagoras)}`} />
              <FormulaBlock latex={String.raw`OP = \sqrt{a^2 + b^2}`} />
              <p className="text-sm mt-2">
                But from §4.4, <FormulaBlock latex={String.raw`|z| = \sqrt{a^2 + b^2}`} />
              </p>
              <FormulaBlock latex={String.raw`\boxed{|z| = OP}`} important />
              <p className="text-sm mt-2 flex items-start gap-2">
                <span>🔥</span>
                <span>
                  <Highlight>Meaning:</Highlight> the <strong>modulus</strong> of a complex number is
                  simply its <strong>distance from the origin</strong> in the Argand plane.
                </span>
              </p>
            </div>
            <ArgandDiagram
              points={[{ x: 3, y: 4, label: "P(3,4)" }]}
              xMin={-1}
              xMax={5}
              yMin={-1}
              yMax={5}
              caption="OP = |3+4i| = 5 — the 3-4-5 triangle. Dashed OP is the modulus."
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Example: 3 + 4i ↔ P(3,4): OP² = 3²+4² = 25 → OP = 5 = |3+4i| ✓
          </p>
        </div>
      </div>
      <Expandable title="Properties (modulus & conjugate) — hidden (click to expand)">
        <FormulaCard>
          <p className="font-semibold mb-2">Properties (for any z₁, z₂)</p>
          <FormulaBlock latex={String.raw`|z_1z_2|=|z_1||z_2|, \qquad \left|\frac{z_1}{z_2}\right|=\frac{|z_1|}{|z_2|}\;(z_2\neq0)`} />
          <FormulaBlock latex={String.raw`\overline{z_1z_2}=\bar z_1\bar z_2, \quad \overline{z_1\pm z_2}=\bar z_1\pm\bar z_2, \quad \overline{\left(\frac{z_1}{z_2}\right)}=\frac{\bar z_1}{\bar z_2}`} />
        </FormulaCard>
      </Expandable>
      <KeyPoint title="Conjugate as Mirror">
        Conjugation reflects the Argand point across the <strong>real axis</strong> — (x, y) ↔ (x, −y).
        Modulus is the mirror-line distance to the origin.
      </KeyPoint>

      <div className="my-6 rounded-xl border border-border/60 overflow-hidden">
        <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
          <div className="px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Identity 1 — Real part
            </p>
            <p className="text-sm">Let z = a + ib. Then z̄ = a − ib.</p>
            <FormulaBlock latex={String.raw`z+\bar z=(a+ib)+(a-ib)=a+a+ib-ib=2a`} />
            <p className="text-sm">
              Since a = Re(z),
              <FormulaBlock latex={String.raw`z+\bar z=2\operatorname{Re}z`} />
            </p>
            <FormulaBlock latex={String.raw`\boxed{\operatorname{Re}z=\frac{z+\bar z}{2}}`} important />
          </div>
          <div className="px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Identity 2 — Imaginary part
            </p>
            <p className="text-sm">Same z, z̄:</p>
            <FormulaBlock latex={String.raw`z-\bar z=(a+ib)-(a-ib)=a+ib-a+ib=2ib`} />
            <p className="text-sm">
              Since b = Im(z),
              <FormulaBlock latex={String.raw`z-\bar z=2i\,\operatorname{Im}z`} />
            </p>
            <FormulaBlock latex={String.raw`\boxed{\operatorname{Im}z=\frac{z-\bar z}{2i}}`} important />
          </div>
        </div>
        <div className="px-4 py-2.5 bg-muted/30 border-t border-border/40 text-xs text-muted-foreground">
          Both follow directly from z̄ = a − ib — no extra memorisation: add for Re, subtract for Im.
        </div>
      </div>

      <Expandable title="Examples 5 and 6 — Modulus & Inverse in action">
        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            <p>Find the multiplicative inverse of 2 − 3i.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`z=2-3i,\ \bar z=2+3i,\ |z|^2=4+9=13`} />
            <FormulaBlock latex={String.raw`z^{-1}=\frac{\bar z}{|z|^2}=\frac{2+3i}{13}=\frac{2}{13}+\frac{3}{13}i`} important />
            <p>
              Alternative: 1/(2−3i) = (2+3i)/((2−3i)(2+3i)) = (2+3i)/13 — same result.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            <ul>
              <li>(i) Express (5 + 2i)/(1 − 2i) in a + ib.</li>
              <li>(ii) Express i<sup>−35</sup> in a + ib.</li>
            </ul>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="font-medium">(i)</p>
            <FormulaBlock latex={String.raw`\frac{5+2i}{1-2i}\cdot\frac{1+2i}{1+2i}=\frac{(5+2i)(1+2i)}{1+4}`} />
            <FormulaBlock latex={String.raw`(5+2i)(1+2i)=5+10i+2i+4i^2=5+12i-4=1+12i`} />
            <FormulaBlock latex={String.raw`=\frac{1+12i}{5}=\frac15+\frac{12}{5}i`} important />
            <p className="font-medium mt-3">(ii)</p>
            <FormulaBlock latex={String.raw`i^{-35}=(i^4)^{-8}\cdot i^{-3}=1\cdot i = i`} />
            <p>
              Since i<sup>4</sup>=1 and i<sup>−3</sup>=i, so i<sup>−35</sup> = <strong>i = 0 + 1·i</strong>.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Inverse in one line">
          No formula to memorise: <strong>z⁻¹ = z̄ / |z|²</strong>. Compute conjugate on top, modulus-squared at
          the bottom — done for any a+ib.
        </Callout>
        <Callout type="tip" title="Rationalising is multiplying by 1">
          (a+ib)/(c+id) · (c−id)/(c−id) = harmless — it only changes the denominator to c²+d² (real).
        </Callout>
      </SpeedTricks>

      <h2 id="h-4-5">4.5 Argand Plane</h2>
      <Callout type="important" title="The Complex Plane">
        Each ordered pair (x, y) ↔ the point P(x, y) in the XY-plane. The number{" "}
        <strong>z = x + iy ↔ P(x, y)</strong>. This plane is the <strong>Argand plane</strong> (complex
        plane).
      </Callout>
      <ul>
        <li>Modulus |x + iy| = √(x² + y²) = distance of P(x, y) from the origin O (Fig 4.2).</li>
        <li>x-axis = <strong>real axis</strong> (points a + i0); y-axis = <strong>imaginary axis</strong> (0 + ib).</li>
        <li>
          z = x + iy and z̄ = x − iy are mirror images across the real axis (Fig 4.3): P(x, y) ↔ Q(x,
          −y).
        </li>
      </ul>
      <ArgandDiagram
        points={[
          { x: 2, y: 4, label: "A(2,4): 2+4i" },
          { x: -2, y: 3, label: "B(−2,3)" },
          { x: 0, y: 1, label: "C(0,1)" },
          { x: 2, y: 0, label: "D(2,0)" },
          { x: -5, y: -2, label: "E(−5,−2)" },
          { x: 1, y: -2, label: "F(1,−2)" },
        ]}
        caption="Fig 4.1 — Six complex numbers as Argand points (NCERT p.84)"
      />
      <ArgandDiagram showConjugate={{ x: 3, y: 2 }} caption="Fig 4.3 — z and z̄ are mirror images across the real axis" />

      <h2 id="h-misc">Miscellaneous Examples</h2>
      <Expandable title="Examples 7 and 8 — Conjugate & Modulus tricks">
        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            <p>Find the conjugate of (3 + 2i)(2 + 3i) / ((1 + 2i)(2 − i)).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`\frac{(3+2i)(2+3i)}{(1+2i)(2-i)}=\frac{12+13i}{4+3i}\cdot\frac{4-3i}{4-3i}=\frac{87+16i}{25}`} />
            <p>
              Conjugate = <strong>(87 − 16i)/25</strong> — flip the sign of Im, or conjugate top and
              bottom separately: overline(z₁z₂/z₃) = z̄₁z̄₂/z̄₃.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>
            <p>If x + iy = (a + ib)/(a − ib), prove that x² + y² = 1.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`x+iy=\frac{(a+ib)^2}{a^2+b^2}=\frac{a^2-b^2}{a^2+b^2}+i\frac{2ab}{a^2+b^2}`} />
            <FormulaBlock latex={String.raw`x=\frac{a^2-b^2}{a^2+b^2},\ y=\frac{2ab}{a^2+b^2}`} />
            <FormulaBlock latex={String.raw`x^2+y^2=\frac{(a^2-b^2)^2+4a^2b^2}{(a^2+b^2)^2}=\frac{(a^2+b^2)^2}{(a^2+b^2)^2}=1`} important />
            <p>
              Shortcut via modulus: |x+iy| = |(a+ib)/(a−ib)| = |a+ib|/|a−ib| = 1, and |x+iy|² = x²+y².
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-ex-4-1" title="EXERCISE 4.1">
        <ol>
          <li>Express each complex number in a + ib (Exercises 1–10 incl. powers of i):</li>
          <li>1. (i) 3(7 + i7) + i(7 + i7) — evaluate</li>
          <li>2. i⁹ + i¹⁹</li>
          <li>3. i<sup>−39</sup></li>
          <li>4. 3(7 + i7) + i(7 + i7) [NCERT p.83 Q4 — as printed]</li>
          <li>5. (1 − i) − (−1 + i6) — simplify</li>
          <li>6. (1/5 + i 2/5) − (4 + i 5/2) — as printed (p.83 Q6)</li>
          <li>7. [(1/3 + i 7/3) + (4 + i 1/3)] − (−4/3 + i) — as printed (p.83 Q7)</li>
          <li>8. (1 − i)⁴</li>
          <li>9. (1/3 + 3i)³ — as printed (p.83 Q9)</li>
          <li>10. (−2 − i/3)³ — as printed (p.83 Q10)</li>
          <li>11–13. Find the multiplicative inverse of: 11. 4 − 3i &nbsp; 12. √5 + 3i &nbsp; 13. −i</li>
          <li>14. Express [(1+i)??? — NCERT Q14: (3+5i)(?)/? — see extracted.md] in a+ib (reconstructed from PDF, check p.83)</li>
        </ol>
        <Callout type="note">
          Q1, Q6, Q7, Q9, Q10, Q14 have ligature loss in pymupdf extraction — cross-check exact
          statement on NCERT PDF p.83 before final publishing; the pattern (powers of i, addition,
          multiplication, inverse) is fully captured.
        </Callout>
        <Expandable title="Answer Key — Exercise 4.1">
          <ol>
            <li>
              Use i⁴ᵏ cycle: e.g., i⁹ = i¹, i¹⁹ = i³ = −i → i⁹+i¹⁹ = 0; i⁻³⁹ = i¹ = i (since −39 ≡ 1 mod 4).
            </li>
            <li>(1 − i)⁴ = ((1−i)²)² = (−2i)² = −4 → <strong>−4 + 0·i</strong>.</li>
            <li>
              Inverses: 4−3i → (4+3i)/25; √5+3i → (√5−3i)/14; −i → i (since (−i)·i = 1).
            </li>
            <li>All answers checked via z⁻¹ = z̄/|z|² and i-cycle — see worked Examples 2–6 for method.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable id="h-misc-ex" title="Miscellaneous Exercise on Chapter 4">
        <ol>
          <li>Evaluate [i¹⁸ + (1/i)²⁵] (as printed p.86 Q1) — see extracted.md</li>
          <li>For any z₁, z₂, prove Re(z₁z₂) = Re z₁·Re z₂ − Im z₁·Im z₂ (use expansion).</li>
          <li>Reduce (1/(1−4i) − 2/(1+i))·( (3−4i)/(5+i) ) to standard form — see p.86 Q3</li>
          <li>If (x+iy)/(???) — see Misc Q4-6 on p.86 — standard modulus trick applies.</li>
          <li>If z₁=2−i, z₂=1+i, find |z₁+z₂+1|/|z₁−z₂+1| — compute directly.</li>
          <li>If a+ib = (x+i)²/(2x²+1), prove a²+b² = (x²+1)²/(2x²+1)² (take modulus squared).</li>
          <li>Let z₁=2−i, z₂=−2+i. Find Re(z₁z₂/z̄₁) and Im(1/(z₁z̄₁)).</li>
          <li>Find real x, y if (x−iy)(3+5i) is conjugate of −6−24i (equate Re/Im).</li>
          <li>Find modulus of (1+i)/(1−i) − (1−i)/(1+i) (simplify each fraction: (1+i)/(1−i)=i).</li>
          <li>If (x+iy)³ = u+iv, show 4(u²+v²)/(???) — see p.86 Q10</li>
          <li>If α, β different with |β|=1, find |(β−α)/(1−ᾱβ)| (numerator modulus trick).</li>
          <li>Find non-zero integral x solving |1−i|ˣ = 2ˣ (|1−i|=√2 → (√2)ˣ=2ˣ → x=0 only → no non-zero solution).</li>
          <li>If (a+ib)(c+id)(e+if)(g+ih)=A+iB, show (a²+b²)(c²+d²)(e²+f²)(g²+h²)=A²+B² (take modulus: |·|²).</li>
          <li>If ((1+i)/(1−i))ᵐ = 1, find least m (1+i)/(1−i)=i → iᵐ=1 → m=4).</li>
        </ol>
        <Callout type="note">
          Miscellaneous Q1, Q3, Q4, Q10 have heavy fraction ligature loss in PDF extraction — Q
          statements above are paraphrased; verify against NCERT p.86 before final print run.
        </Callout>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>
              i¹⁸ = −1, (1/i)²⁵ = i⁻²⁵ = i³ = −i → sum = −1 − i.
            </li>
            <li>Expand z₁z₂ = (ac−bd)+i(ad+bc) → Re part = ac−bd matches formula.</li>
            <li>Rationalise each term, common denominator — final a+ib check via compute.</li>
            <li>Methods as per Examples 5–8: rationalise, use |z|², conjugate.</li>
            <li>(1+i)/(1−i)=i → ((i)ᵐ=1 → m=4k → least m=4).</li>
          </ol>
        </Expandable>
      </Expandable>
    </>
  );
}
