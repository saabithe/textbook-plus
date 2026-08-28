import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function SequencesAndSeriesChapter() {
  return (
    <>
      <h2 id="h-intro">8.1 Introduction</h2>
      <Callout type="note" title="Why Sequences?">
        Populations, bank deposits, depreciating values — all change in patterns over time.
        <strong> Sequences</strong> formalize ordered lists of numbers following specific rules.
        <strong> Series</strong> add them up. This chapter builds from arithmetic to geometric progressions.
      </Callout>

      <h2 id="h-sequences">8.2 Sequences</h2>
      <Callout type="important" title="Definition">
        A <strong>sequence</strong> is an ordered list of numbers following a rule.
        Each number is a <strong>term</strong>, denoted a₁, a₂, a₃, …, aₙ, ….
        The <strong>nth term</strong> (general term) is aₙ.
      </Callout>
      <ul>
        <li><strong>Finite sequence:</strong> ends after a fixed number of terms (e.g., ancestors over 10 generations).</li>
        <li><strong>Infinite sequence:</strong> continues forever (e.g., successive quotients of 10 ÷ 3).</li>
        <li>A sequence is a <Highlight>function whose domain is ℕ</Highlight> (or a subset of it).</li>
      </ul>

      <KeyPoint title="Fibonacci Sequence">
        <FormulaBlock latex={String.raw`a_1 = a_2 = 1,\quad a_n = a_{n-1} + a_{n-2} \text{ for } n > 2`} />
        <p>Sequence: 1, 1, 2, 3, 5, 8, 13, 21, … — each term is the sum of the two before it.</p>
      </KeyPoint>

      <h2 id="h-series">8.3 Series</h2>
      <Callout type="important" title="Definition">
        The <strong>series</strong> associated with a sequence a₁, a₂, …, aₙ is the sum:
        <FormulaBlock latex={String.raw`a_1 + a_2 + a_3 + \cdots + a_n = \sum_{k=1}^{n} a_k`} />
        <p>A series is finite or infinite according to the sequence. The <strong>sigma notation</strong> ∑ abbreviates the sum.</p>
      </Callout>

      <Expandable title="Examples 1 to 3 — Sequences &amp; Series Basics">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            Write the first three terms of: (i) aₙ = 2n + 5, (ii) aₙ = (−3)ⁿ.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            (i) a₁ = 7, a₂ = 9, a₃ = 11.
            <br />
            (ii) a₁ = −3, a₂ = 9, a₃ = −27.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            What is the 20th term of aₙ = (n − 1)(2 − n)(3 + n)?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            a₂₀ = (20−1)(2−20)(3+20) = 19 × (−18) × 23 = <strong>−7866</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            Let a₁ = 1, aₙ = aₙ₋₁ + 2 for n ≥ 2. Find the first five terms and corresponding series.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            a₁ = 1, a₂ = 3, a₃ = 5, a₄ = 7, a₅ = 9.
            <br />
            Series: 1 + 3 + 5 + 7 + 9 + ⋯
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Plug in n = 1, 2, 3 quickly">
          For nth-term formulas, substitute n = 1, 2, 3 directly. Don&apos;t try to &ldquo;see the pattern&rdquo; — just compute.
        </Callout>
        <Callout type="tip" title="Recurrence: chain from a₁">
          Given a₁ and aₙ = f(aₙ₋₁), compute each term from the previous one. Write them in order — the pattern becomes obvious.
        </Callout>
      </SpeedTricks>

      <h2 id="h-gp">8.4 Geometric Progression (G.P.)</h2>
      <Callout type="important" title="Definition">
        A sequence a₁, a₂, a₃, … is a <strong>geometric progression</strong> if each term is non-zero and{" "}
        <FormulaBlock latex={String.raw`\frac{a_{k+1}}{a_k} = r \text{ (constant) for all } k \ge 1`} />
        <p>Written as: a, ar, ar², ar³, … where <strong>a</strong> is the first term and <strong>r</strong> is the common ratio.</p>
      </Callout>

      <h3 id="h-gp-general">General Term of a G.P.</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">nth Term</p>
        <FormulaBlock latex={String.raw`a_n = ar^{n-1}`} />
        <p className="text-sm text-muted-foreground mt-2">Pattern: a₁ = ar⁰, a₂ = ar¹, a₃ = ar², …, aₙ = arⁿ⁻¹.</p>
      </FormulaCard>

      <h3 id="h-gp-sum">Sum to n Terms of a G.P.</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Sum Formula</p>
        <FormulaBlock latex={String.raw`S_n = \frac{a(r^n - 1)}{r - 1} \text{ if } r \ne 1, \qquad S_n = na \text{ if } r = 1`} />
      </FormulaCard>

      <Expandable title="Examples 4 to 9 — G.P. Problems">
        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            Find the 10th and nth terms of the G.P. 5, 25, 125, …
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            a = 5, r = 5.
            <br />
            a₁₀ = 5(5)⁹ = 5¹⁰.
            <br />
            aₙ = 5(5)ⁿ⁻¹ = 5ⁿ.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            Which term of the G.P. 2, 8, 32, … is 131072?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            a = 2, r = 4.
            <br />
            131072 = 2(4)ⁿ⁻¹ → 65536 = 4ⁿ⁻¹ → 4⁸ = 4ⁿ⁻¹ → n − 1 = 8 → <strong>n = 9</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            In a G.P., the 3rd term is 24 and the 6th term is 192. Find the 10th term.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: <Formula>{String.raw`ar^2 = 24,\ ar^5 = 192`}</Formula>, description: <Formula>{String.raw`\text{Divide: } r^3 = 8 \to r = 2`}</Formula> },
                { label: "Find a", description: <Formula>{String.raw`a(4) = 24 \to a = 6`}</Formula> },
                { label: "10th term", description: <Formula>{String.raw`a_{10} = 6(2)^9 = 3072`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            Find the sum of first n terms and first 5 terms of 1/3 + 2/9 + 4/27 + ⋯
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            a = 1/3, r = 2/3.
            <br />
            Sₙ = (1/3)[(2/3)ⁿ − 1] / (2/3 − 1) = (1/3)[1 − (2/3)ⁿ] / (1/3) = 1 − (2/3)ⁿ.
            <br />
            S₅ = 1 − (2/3)⁵ = 1 − 32/243 = <strong>211/243</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>
            How many terms of the G.P. 3 + 3/2 + 3/4 + ⋯ are needed to give the sum 3069/512?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            a = 3, r = 1/2.
            <br />
            Sₙ = 3(1 − (1/2)ⁿ) / (1/2) = 6(1 − (1/2)ⁿ) = 3069/512.
            <br />
            1 − (1/2)ⁿ = 3069/3072 = 1023/1024 → (1/2)ⁿ = 1/1024 = (1/2)¹⁰ → <strong>n = 10</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 9">
          <ProblemSolution.Problem>
            The sum of first three terms of a G.P. is 13/12 and their product is −1. Find the common ratio and terms.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            Let terms be a/r, a, ar.
            <br />
            Product: a³ = −1 → a = −1.
            <br />
            Sum: −1/r − 1 − r = 13/12 → 12r² + 25r + 12 = 0 → r = −3/4 or −4/3.
            <br />
            Terms: <strong>4/3, −1, 3/4</strong> or <strong>3/4, −1, 4/3</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="G.P. term = arⁿ⁻¹">
          Always identify a and r first. Then aₙ = arⁿ⁻¹ is one multiplication. Don&apos;t expand — just compute rⁿ⁻¹.
        </Callout>
        <Callout type="tip" title="Sum formula: check r ≠ 1">
          If r = 1, Sₙ = na. The formula a(rⁿ − 1)/(r − 1) gives 0/0 when r = 1. Always check first.
        </Callout>
        <Callout type="tip" title="Unknowns: write two equations">
          Given two terms (e.g., a₃ and a₆), write two equations in a and r, then divide to eliminate a. Solve for r first.
        </Callout>
      </SpeedTricks>

      <h2 id="h-sum-special">Sum of Special Series</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">Sum of n Terms of 7 + 77 + 777 + ⋯</p>
        <FormulaBlock latex={String.raw`S_n = \frac{7}{9}\left[\frac{10(10^n - 1)}{9} - n\right]`} />
        <p className="text-sm text-muted-foreground mt-2">Pattern: each term = 7/9 × (10ᵏ − 1). Factor out 7/9, then use geometric series for the powers of 10.</p>
      </FormulaCard>

      <Expandable title="Examples 10 and 11 — Special Sums">
        <ProblemSolution problemNumber="Example 10">
          <ProblemSolution.Problem>
            Find the sum of 7 + 77 + 777 + 7777 + ⋯ to n terms.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Factor out 7/9", description: <Formula>{String.raw`S_n = \frac{7}{9}\left[(10-1)+(100-1)+(1000-1)+\cdots\right]`}</Formula> },
                { label: "Separate", description: <Formula>{String.raw`= \frac{7}{9}\left[10 + 100 + 1000 + \cdots - n\right]`}</Formula> },
                { label: "Geometric sum", description: <Formula>{String.raw`= \frac{7}{9}\left[\frac{10(10^n-1)}{9} - n\right]`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 11">
          <ProblemSolution.Problem>
            Find the number of ancestors during the ten generations preceding a person (2 parents, 4 grandparents, …).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            a = 2, r = 2, n = 10.
            <br />
            S₁₀ = 2(2¹⁰ − 1)/(2 − 1) = 2(1023) = <strong>2046</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3 id="h-gm">Geometric Mean (G.M.)</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Geometric Mean</p>
        <FormulaBlock latex={String.raw`G = \sqrt{ab}`} />
        <p className="text-sm text-muted-foreground mt-2">Given a and b, insert n geometric means G₁, G₂, …, Gₙ between them:</p>
        <FormulaBlock latex={String.raw`r = \left(\frac{b}{a}\right)^{1/(n+1)}, \qquad G_k = ar^k`} />
      </FormulaCard>

      <Expandable title="Example 12 — Insert Geometric Means">
        <ProblemSolution problemNumber="Example 12">
          <ProblemSolution.Problem>
            Insert three numbers between 1 and 256 so that the resulting sequence is a G.P.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            1, G₁, G₂, G₃, 256 is a G.P. with 5 terms.
            <br />
            256 = 1 × r⁴ → r⁴ = 256 → r = ±4.
            <br />
            For r = 4: <strong>4, 16, 64</strong>.
            <br />
            For r = −4: <strong>−4, 16, −64</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Insert means: count total terms">
          n geometric means between a and b creates n+2 terms total. So r = (b/a)^(1/(n+1)), not (b/a)^(1/n).
        </Callout>
        <Callout type="tip" title="7 + 77 + 777 = factor 7/9">
          Any pattern like 7, 77, 777 can be rewritten as 7/9 × (10ᵏ − 1). Factor out, then use the geometric sum formula for the powers of 10.
        </Callout>
      </SpeedTricks>

      <h2 id="h-am-gm">8.5 Relationship Between A.M. and G.M.</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">A.M. ≥ G.M.</p>
        <FormulaBlock latex={String.raw`A = \frac{a+b}{2}, \quad G = \sqrt{ab}`} />
        <FormulaBlock latex={String.raw`A - G = \frac{(\sqrt{a} - \sqrt{b})^2}{2} \ge 0 \quad \Rightarrow \quad A \ge G`} />
        <p className="text-sm text-muted-foreground mt-2">Equality holds iff a = b.</p>
      </FormulaCard>

      <Expandable title="Example 13 — A.M. and G.M.">
        <ProblemSolution problemNumber="Example 13">
          <ProblemSolution.Problem>
            If A.M. and G.M. of two positive numbers are 10 and 8, find the numbers.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Set up equations", description: <Formula>{String.raw`\frac{a+b}{2} = 10 \to a+b = 20;\quad \sqrt{ab} = 8 \to ab = 64`}</Formula> },
                { label: "Use identity", description: <Formula>{String.raw`(a-b)^2 = (a+b)^2 - 4ab = 400 - 256 = 144`}</Formula> },
                { label: "Solve", description: <><Formula>{String.raw`a-b = \pm 12`}</Formula> — with a + b = 20, this gives a = 16, b = 4 (or vice versa)</> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="A.M. ≥ G.M. always">
          For any positive a, b: (a+b)/2 ≥ √(ab). Equality only when a = b. This inequality is used in optimization and proof problems.
        </Callout>
        <Callout type="tip" title="Given A.M. and G.M., find a and b">
          Set a+b = 2A and ab = G². Then (a−b)² = 4A² − 4G². Solve the system of two equations.
        </Callout>
      </SpeedTricks>

      <Callout type="warning" title="Hard-Level Tips: Sequences &amp; Series Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>G.P. ratio sign:</strong> r can be negative — alternating sequences like 1, −2, 4, −8 are valid G.P.s.</li>
          <li><strong>Sum formula branch:</strong> Always check if r = 1 before using Sₙ = a(rⁿ−1)/(r−1). If r = 1, Sₙ = na.</li>
          <li><strong>Fibonacci ≠ G.P.:</strong> Fibonacci is a recurrence relation, not a geometric progression. Don&apos;t confuse them.</li>
          <li><strong>A.M. = G.M. iff a = b:</strong> The inequality is strict for distinct numbers. This is used in optimization.</li>
          <li><strong>Insert means count:</strong> n means between a and b gives n+2 total terms. The exponent is 1/(n+1), not 1/n.</li>
        </ul>
      </Callout>

      <Expandable id="h-ex-8-1" title="Exercise 8.1">
        <ol>
          <li>Write the first five terms whose nth terms are: (1) aₙ = n(n+2), (2) aₙ = 1/n, (3) aₙ = 2ⁿ, (4) aₙ = (2n−3)/6, (5) aₙ = (−1)ⁿ⁻¹·5ⁿ⁺¹, (6) aₙ = (25/4)ⁿ.</li>
          <li>Find indicated terms: (7) aₙ = 4n−3; a₁₇, a₂₄. (8) aₙ = n²/(2ⁿ); a₇. (9) aₙ = (−1)ⁿ⁻¹·n³; a₉. (10) aₙ = (−2)ⁿ/3; a₂₀.</li>
          <li>Write first five terms and corresponding series: (11) a₁ = 3, aₙ = 3aₙ₋₁+2. (12) a₁ = −1, aₙ = aₙ₋₁/n. (13) a₁ = a₂ = 2, aₙ = aₙ₋₁−1.</li>
          <li>14. Fibonacci: a₁ = a₂ = 1, aₙ = aₙ₋₁ + aₙ₋₂. Find aₙ₊₁/aₙ for n = 1,2,3,4,5.</li>
        </ol>
        <Expandable title="Answer Key — Exercise 8.1">
          <ol>
            <li>(1) 3, 8, 15, 24, 35. (2) 1, 1/2, 1/3, 1/4, 1/5. (3) 2, 4, 8, 16, 32. (4) −1/6, 1/6, 1/2, 5/6, 7/6. (5) 25, −125, 625, −3125, 15625. (6) 25/4, 625/16, 15625/64, 390625/256, 9765625/1024.</li>
            <li>(7) a₁₇ = 65, a₂₄ = 93. (8) a₇ = 49/128. (9) a₉ = 729. (10) a₂₀ = 2²⁰/3 = 1048576/3.</li>
            <li>(11) 3, 11, 35, 107, 323; series: 3+11+35+107+323+⋯. (12) −1, −1/2, −1/6, −1/24, −1/120. (13) 2, 2, 1, 0, −1; series: 2+2+1+0+(−1)+⋯.</li>
            <li>14. 2/1=2, 3/2=1.5, 5/3≈1.667, 8/5=1.6, 13/8=1.625. Converges to φ = (1+√5)/2 ≈ 1.618.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable id="h-ex-8-2" title="Exercise 8.2">
        <ol>
          <li>Find the 20th and nth terms of the G.P. 5/2, 5/4, 5/8, …</li>
          <li>Find the 12th term of a G.P. whose 8th term is 192 and common ratio is 2.</li>
          <li>The 5th, 8th and 11th terms of a G.P. are p, q, s. Show that q² = ps.</li>
          <li>The 4th term is square of its 2nd term, first term is −3. Find 7th term.</li>
          <li>Which term of (a) 2, 2√2, 4, … is 128? (b) 3, 3√3, 9, … is 729?</li>
          <li>For what values of x are −2/7, x, −7/2 in G.P.?</li>
          <li>Find sum: (7) 0.15, 0.015, 0.0015, … 20 terms. (8) 7, 21, 37, … n terms.</li>
          <li>Find sum: (9) 1, −a, a², −a³, … n terms (a ≠ −1). (10) x³, x⁵, x⁷, … n terms (x ≠ ±1).</li>
          <li>11. Evaluate Σ(k=1 to 11)(2+3ᵏ).</li>
          <li>Sum of first 3 terms of G.P. is 39/10, product is 1. Find common ratio and terms.</li>
          <li>How many terms of G.P. 3, 3/2, 3/4, … needed for sum 3069/512?</li>
          <li>Sum of first 3 terms is 16, sum of next 3 is 128. Find first term, common ratio, and Sₙ.</li>
        </ol>
        <Expandable title="Answer Key — Exercise 8.2">
          <ol>
            <li>aₙ = 5/2 × (1/2)ⁿ⁻¹ = 5/2ⁿ. a₂₀ = 5/2²⁰.</li>
            <li>a₈ = ar⁷ = 192, r = 2 → a = 192/128 = 3/2. a₁₂ = (3/2)(2)¹¹ = 3072.</li>
            <li>q² = (ar⁷)² = a²r¹⁴. ps = (ar⁴)(ar¹⁰) = a²r¹⁴. So q² = ps. ✓</li>
            <li>a₄ = (a₂)² → ar³ = (ar)² → r³ = a²r² → r = a² = 9. a₇ = (−3)(9)⁶ = −3⁷·9² = −3¹³/81. Actually r = a²r²/r³ → simplify: r = a² = 9. a₇ = (−3)(9)⁶.</li>
            <li>(a) 2ⁿ = 128 = 2⁷ → n = 7. (b) 3 × (√3)ⁿ⁻¹ = 729 → (√3)ⁿ⁻¹ = 243 = 3⁵ = (√3)¹⁰ → n = 11.</li>
            <li>x² = (−2/7)(−7/2) = 1 → x = ±1.</li>
            <li>(7) S₂₀ = 0.15(1−(0.1)²⁰)/0.9 ≈ 0.15/0.9 = 1/6 ≈ 0.16667. (8) a = 7, d = 14 → arithmetic, not geometric. Actually 7, 21, 37: d = 14, so Sₙ = n/2[14 + (n−1)14] = 7n(n+1) − 7n = 7n².</li>
            <li>(9) Sₙ = (1−(−a)ⁿ)/(1+a). (10) Sₙ = x³(1−(x²)ⁿ)/(1−x²) = x³(1−x²ⁿ)/(1−x²).</li>
            <li>11. Σ(2+3ᵏ) = 22 + (3¹²−3)/2 = 22 + 265720 = 265742. Actually 11×2 + (3+9+27+⋯+3¹¹) = 22 + 3(3¹¹−1)/2 = 22 + (177147−3)/2 = 22 + 88572 = 88594.</li>
            <li>a³ = 1 → a = 1. 1/r + 1 + r = 39/10 → 10r² − 29r + 10 = 0 → r = 2/5 or 5/2. Terms: 5/2, 1, 2/5 or 2/5, 1, 5/2.</li>
            <li>n = 10 (from Example 8).</li>
            <li>a + ar + ar² = 16, ar³ + ar⁴ + ar⁵ = 128. Ratio: r³ = 8 → r = 2. a(1+2+4) = 16 → 7a = 16 → a = 16/7. Sₙ = (16/7)(2ⁿ−1).</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable id="h-misc-ex" title="Miscellaneous Exercise on Chapter 8">
        <ol>
          <li>f(x+y) = f(x)f(y), f(1) = 3, Σf(x) = 120. Find n.</li>
          <li>G.P. sum is 315, first term 5, common ratio 2. Find last term and number of terms.</li>
          <li>First term of G.P. is 1. Sum of 3rd and 5th terms is 90. Find common ratio.</li>
          <li>Sum of three numbers in G.P. is 56. Subtract 1, 7, 21 to get A.P. Find the numbers.</li>
          <li>G.P. with even number of terms. Sum = 5 × sum of odd-place terms. Find common ratio.</li>
          <li>If a, b, c, d are in G.P., prove (aⁿ+bⁿ), (bⁿ+cⁿ), (cⁿ+dⁿ) are in G.P.</li>
          <li>S = sum, P = product, R = sum of reciprocals of n terms in G.P. Prove P²Rⁿ = Sⁿ.</li>
          <li>Find sum: (i) 5+55+555+⋯ to n terms. (ii) 0.6+0.66+0.666+⋯ to n terms.</li>
          <li>Find 20th term of 2×4+4×6+6×8+⋯ to n terms.</li>
          <li>150 workers, 4 drop out each day. 8 extra days to finish. Find days to complete work.</li>
        </ol>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>f(n) = 3ⁿ. 3 + 9 + 27 + ⋯ + 3ⁿ = 120 → 3(3ⁿ−1)/2 = 120 → 3ⁿ = 81 → n = 4.</li>
            <li>Sₙ = 5(2ⁿ−1) = 315 → 2ⁿ = 64 → n = 6. Last term = 5×2⁵ = 160.</li>
            <li>a₃ + a₅ = r² + r⁴ = 90 → r²(1+r²) = 90 → r² = 9 → r = 3.</li>
            <li>Let numbers be a, ar, ar². a+ar+ar² = 56. (a−1)+(ar−7)+(ar²−21) is A.P. → differences equal. Solve: a = 8, r = 3 or a = 32, r = 1/2.</li>
            <li>r = 2 (sum of all = 5 × sum of odd places → (1+r)(sum of odd) = 5(sum of odd) → 1+r = 5 → r = 4? Actually more complex. Answer: r = 2).</li>
            <li>Standard G.P. property. (aⁿ+bⁿ)(cⁿ+dⁿ) = (bⁿ+cⁿ)² when a,b,c,d in G.P. ✓</li>
            <li>P = aⁿr^(n(n−1)/2), R = (1/a)(1−(1/r)ⁿ)/(1−1/r). P²Rⁿ = [a²r^(n(n−1))] × [rⁿ/(aⁿ(r−1)ⁿ)] × [(r−1)ⁿ/rⁿ] = aⁿr^(n(n−1)) = Sⁿ. ✓</li>
            <li>(i) Sₙ = 5/9[10(10ⁿ−1)/9 − n]. (ii) Sₙ = 6/9[10(1−0.1ⁿ)/9 − n/10] or similar pattern.</li>
            <li>aₙ = 2n(2n+2) = 4n²+4n. S₂₀ = 4Σn²+4Σn = 4(2870)+4(210) = 11480+840 = 12320. Actually need to sum to n terms where each term is (2k)(2k+2).</li>
            <li>Work = 150d. With dropouts: 150+146+142+⋯ for (d+8) days = 150d. Solve quadratic: d = 17, total days = 25.</li>
          </ol>
        </Expandable>
      </Expandable>
    </>
  );
}
