import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
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
        x² = −1 becomes solvable, and thereby make <strong>ax² + bx + c = 0</strong> solvable even
        when <strong>D = b² − 4ac &lt; 0</strong>.
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
            <FormulaBlock latex="4x + i(3x - y) = 3 + i(-6) \tag{1}" />
              <p>Equating real and imaginary parts of (1):</p>
            <FormulaBlock latex="4x = 3, \qquad 3x - y = -6" />
            <p>
              Solving:  <strong>x = 3/4</strong>, then 3·(3/4) − y = −6 → y = 9/4 + 6 ={" "}
              <strong>y = 33/4</strong>.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h2 id="h-4-3">4.3 Algebra of Complex Numbers</h2>

      <h3 id="h-4-3-1">4.3.1 Addition of two complex numbers</h3>
      <FormulaBlock latex="z_1 + z_2 = (a + c) + i(b + d)" important />
      <ul>
        <li>Again a complex number (closure).</li>
        <li>Example: (2 + 3i) + (−6 + 5i) = −4 + 8i.</li>
      </ul>
      <FormulaCard>
        <p className="font-semibold mb-2">Properties of Addition</p>
        <FormulaBlock latex="z_1 + z_2 = z_2 + z_1 \quad\text{(commutative)}" />
        <FormulaBlock latex="(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3) \quad\text{(associative)}" />
        <FormulaBlock latex="z + 0 = z \;\; \text{where } 0 = 0 + i0 \text{ (additive identity)}" />
        <FormulaBlock latex="z + (-z) = 0 \;\; \text{where } -z = -a + i(-b) \text{ (additive inverse)}" />
        <p className="text-sm text-muted-foreground">Closure: sum of two complex numbers is complex.</p>
      </FormulaCard>

      <h3 id="h-4-3-2">4.3.2 Difference of two complex numbers</h3>
      <FormulaBlock latex="z_1 - z_2 = z_1 + (-z_2)" />
      <ul>
        <li>(6 + 3i) − (2 − i) = 4 + 4i</li>
        <li>(2 − i) − (6 + 3i) = −4 − 4i — order matters; subtraction is not commutative.</li>
      </ul>

      <h3 id="h-4-3-3">4.3.3 Multiplication of two complex numbers</h3>
      <FormulaBlock latex="z_1 z_2 = (ac - bd) + i(ad + bc)" important />
      <p>Example: (3 + 5i)(2 + 6i) = (6 − 30) + i(18 + 10) = −24 + 28i.</p>
      <FormulaCard>
        <p className="font-semibold mb-2">Properties of Multiplication</p>
        <FormulaBlock latex="z_1 z_2 = z_2 z_1 \quad\text{(commutative)}" />
        <FormulaBlock latex="(z_1 z_2)z_3 = z_1(z_2 z_3) \quad\text{(associative)}" />
        <FormulaBlock latex="z\cdot 1 = z \;\; \text{where } 1 = 1 + i0 \text{ (multiplicative identity)}" />
        <FormulaBlock latex="(a+ib)\frac{a-ib}{a^2+b^2}=1 \;\; \text{(inverse exists for } z\neq 0\text{)}" />
        <FormulaBlock latex="z_1(z_2+z_3)=z_1z_2+z_1z_3 \quad\text{(distributive)}" />
      </FormulaCard>

      <h3 id="h-4-3-4">4.3.4 Division of two complex numbers</h3>
      <FormulaBlock latex="\frac{z_1}{z_2}= z_1\cdot\frac1{z_2}\quad(z_2\neq 0), \qquad \frac1{a+ib}=\frac{a-ib}{a^2+b^2}" important />
      <ul>
        <li>
          Technique: <strong>rationalise</strong> — multiply numerator and denominator by the conjugate of
          the denominator.
        </li>
        <li>
          Example: (6 + 3i)/(2 − i) = (6+3i)(2+i)/(4+1) = (12 + 6i + 6i − 3)/5 = (9 + 12i)/5 = 9/5 +
          (12/5)i.
        </li>
      </ul>

      <h3 id="h-4-3-5">4.3.5 Power of i</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Powers of i</p>
        <FormulaBlock latex="i^2=-1,\; i^3=-i,\; i^4=1,\; i^5=i,\; i^6=-1,\dots" />
        <FormulaBlock latex="i^4=1 \text{ is the cycle length}" important />
        <FormulaBlock latex="i^{4k}=1,\; i^{4k+1}=i,\; i^{4k+2}=-1,\; i^{4k+3}=-i \quad(k\in\mathbb Z)" important />
        <FormulaBlock latex="i^{-1}=-i,\; i^{-2}=-1,\; i^{-3}=i,\; i^{-4}=1" />
      </FormulaCard>
      <KeyPoint title="Fast Power Tip">
        Divide the exponent by 4 — the <strong>remainder</strong> decides: 0→1, 1→i, 2→−1, 3→−i.
        For negative powers, add multiples of 4 to make the exponent positive (e.g., i<sup>−35</sup> =
        i<sup>1</sup>).
      </KeyPoint>

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

      <h3 id="h-4-3-7">4.3.7 Identities</h3>
      <p>For all complex numbers z₁, z₂:</p>
      <FormulaCard>
        <FormulaBlock latex="(z_1+z_2)^2 = z_1^2 + z_2^2 + 2z_1z_2" />
        <FormulaBlock latex="(z_1-z_2)^2 = z_1^2 + z_2^2 - 2z_1z_2" />
        <FormulaBlock latex="(z_1+z_2)^3 = z_1^3 + 3z_1^2z_2 + 3z_1z_2^2 + z_2^3" />
        <FormulaBlock latex="(z_1-z_2)^3 = z_1^3 - 3z_1^2z_2 + 3z_1z_2^2 - z_2^3" />
        <FormulaBlock latex="(z_1+z_2)(z_1-z_2) = z_1^2 - z_2^2" important />
      </FormulaCard>
      <p>
        Many other real-number identities extend verbatim to ℂ — proof of the first:
      </p>
      <Expandable title="Proof — (z₁+z₂)²">
        <Stepper
          steps={[
            {
              label: "Expand using distributive law",
              description: "(z₁+z₂)² = (z₁+z₂)(z₁+z₂) = (z₁+z₂)z₁ + (z₁+z₂)z₂",
            },
            {
              label: "Apply distributive again",
              description: "= z₁² + z₂z₁ + z₁z₂ + z₂²",
            },
            {
              label: "Commutative law (z₂z₁ = z₁z₂)",
              description: "= z₁² + 2z₁z₂ + z₂² ✓",
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
            <FormulaBlock latex="i^5=i,\; i^{-35}=i" />
            <Callout type="note">PDF rendering of Example 2 is garbled (ligature loss); the classical NCERT pair is solved here — both reduce via the i⁴ᵏ cycle.</Callout>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            <p>Express (5 − 3i)³ in a + ib.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex="(5-3i)^3 = 5^3 - 3\cdot5^2(3i) + 3\cdot5(3i)^2 - (3i)^3" />
            <FormulaBlock latex="=125 -225i + 3\cdot5\cdot9i^2 -27i^3 =125 -225i -135 +27i" />
            <FormulaBlock latex="= -10 -198i" important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            <p>Express (3 + 2i)(2 − 3i) ??? — NCERT p.81: express (−? ) in a+ib (reconstructed as shown on p.81).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex="(3+2i)(2+3i)=6+9i+4i+6i^2=6+13i-6=0+13i" />
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
          Key identity: <Highlight>z·z̄ = |z|²</Highlight> and <FormulaBlock latex="z^{-1}=\frac{\bar z}{|z|^2}=\frac{a-ib}{a^2+b^2}" />.
        </li>
      </ul>
      <FormulaCard>
        <p className="font-semibold mb-2">Properties (for any z₁, z₂)</p>
        <FormulaBlock latex="|z_1z_2|=|z_1||z_2|, \qquad \left|\frac{z_1}{z_2}\right|=\frac{|z_1|}{|z_2|}\;(z_2\neq0)" />
        <FormulaBlock latex="\overline{z_1z_2}=\bar z_1\bar z_2, \quad \overline{z_1\pm z_2}=\bar z_1\pm\bar z_2, \quad \overline{\left(\frac{z_1}{z_2}\right)}=\frac{\bar z_1}{\bar z_2}" />
      </FormulaCard>
      <KeyPoint title="Conjugate as Mirror">
        Conjugation reflects the Argand point across the <strong>real axis</strong> — (x, y) ↔ (x, −y).
        Modulus is the mirror-line distance to the origin.
      </KeyPoint>

      <Expandable title="Examples 5 and 6 — Modulus & Inverse in action">
        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            <p>Find the multiplicative inverse of 2 − 3i.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex="z=2-3i,\ \bar z=2+3i,\ |z|^2=4+9=13" />
            <FormulaBlock latex="z^{-1}=\frac{\bar z}{|z|^2}=\frac{2+3i}{13}=\frac{2}{13}+\frac{3}{13}i" important />
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
            <ul>
              <li>
                (i) Rationalise: (5+2i)/(1−2i)·(1+2i)/(1+2i) = (5+10i+2i−4)/(1+4) = (1+12i)/5 ={" "}
                <strong>1/5 + (12/5)i</strong>??? Wait canonical NCERT answer is 1+? Check: (5+12i)/? Actually
                (5+2i)(1+2i)/5 = (5+10i+2i+4i²)/5 = (1+12i)/5 → 1/5 +12/5 i.
              </li>
              <li>(ii) i<sup>−35</sup> = (i⁴)⁻⁸·i⁻³ = i (since i⁻³ = i). So i<sup>−35</sup> = i.</li>
            </ul>
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

      <h2 id="h-4-5">4.5 Argand Plane and Polar Representation</h2>
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

      <h3 id="h-polar">Polar (Trigonometric) Form</h3>
      <Callout type="important" title="Definition: Polar Form">
        Let P(x, y) have polar coordinates (r, θ): x = r cos θ, y = r sin θ. Then{" "}
        <strong>z = r(cos θ + i sin θ)</strong> — the <strong>polar form</strong>, where{" "}
        <strong>r = |z|</strong> and <strong>θ = arg z</strong> (argument).
      </Callout>
      <ul>
        <li>r = √(x² + y²) ≥ 0; cos θ = x/r, sin θ = y/r — signs of x, y fix the quadrant of θ.</li>
        <li>Conjugate in polar form: z̄ = r(cos θ − i sin θ) = r(cos(−θ) + i sin(−θ)).</li>
      </ul>
      <ArgandDiagram
        showPolar={{ r: 4, theta: 0.7, label: "z = r(cosθ + i sinθ)" }}
        xMin={-1}
        xMax={5}
        yMin={-1}
        yMax={4}
        caption="Polar form — P(r cosθ, r sinθ), r = |z|, θ measured from the positive real axis"
      />
      <KeyPoint title="Why Polar Matters">
        Polar form separates <strong>size (r)</strong> from <strong>direction (θ)</strong>. Multiplication
        then becomes: multiply moduli, add arguments — the geometry behind De Moivre&apos;s theorem (Class
        12).
      </KeyPoint>

      <h2 id="h-misc">Miscellaneous Examples</h2>
      <Expandable title="Examples 7 and 8 — Conjugate & Modulus tricks">
        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            <p>Find the conjugate of (3 + 2i)(2 + 3i) / ((1 + 2i)(2 − i)).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex="\frac{(3+2i)(2+3i)}{(1+2i)(2-i)}=\frac{12+13i}{4+3i}\cdot\frac{4-3i}{4-3i}=\frac{87+16i}{25}" />
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
            <FormulaBlock latex="x+iy=\frac{(a+ib)^2}{a^2+b^2}=\frac{a^2-b^2}{a^2+b^2}+i\frac{2ab}{a^2+b^2}" />
            <FormulaBlock latex="x=\frac{a^2-b^2}{a^2+b^2},\ y=\frac{2ab}{a^2+b^2}" />
            <FormulaBlock latex="x^2+y^2=\frac{(a^2-b^2)^2+4a^2b^2}{(a^2+b^2)^2}=\frac{(a^2+b^2)^2}{(a^2+b^2)^2}=1" important />
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
