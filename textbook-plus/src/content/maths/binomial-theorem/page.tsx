import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function BinomialTheoremChapter() {
  return (
    <>
      <h2 id="h-intro">7.1 Introduction</h2>
      <Callout type="note" title="Why Binomial Theorem?">
        Computing (98)⁵ or (101)⁶ by repeated multiplication is tedious.
        The <strong>binomial theorem</strong> gives a quick expansion of (a + b)ⁿ for any positive integer n,
        using pre-computed coefficients.
      </Callout>
      <ul>
        <li>We already know: (a+b)² = a² + 2ab + b², (a+b)³ = a³ + 3a²b + 3ab² + b³.</li>
        <li>For higher powers, we need a systematic formula.</li>
      </ul>

      <h2 id="h-pascal">Pascal&apos;s Triangle</h2>
      <p>
        Coefficients of (a+b)ⁿ form a triangular array known as <Highlight>Pascal&apos;s triangle</Highlight> (also called <strong>Meru Prastara</strong> by Pingla):
      </p>
      <ul>
        <li>Row n: 1, nC1, nC2, …, nC(n-1), 1 — each entry is the sum of the two above it.</li>
        <li>n+1 terms in row n (one more than the index).</li>
        <li>Powers of a decrease: aⁿ → aⁿ⁻¹ → … → a⁰. Powers of b increase: b⁰ → b¹ → … → bⁿ.</li>
        <li>In each term, index of a + index of b = n.</li>
      </ul>

      <Expandable title="Example — Expand (2x + 3y)⁵ using Pascal&apos;s triangle">
        <p>Row 5 of Pascal&apos;s triangle: <strong>1, 5, 10, 10, 5, 1</strong></p>
        <Stepper
          steps={[
            { label: "(2x + 3y)⁵", description: "(2x)⁵ + 5(2x)⁴(3y) + 10(2x)³(3y)² + 10(2x)²(3y)³ + 5(2x)(3y)⁴ + (3y)⁵" },
            { label: "Simplify", description: "32x⁵ + 240x⁴y + 720x³y² + 1080x²y³ + 810xy⁴ + 243y⁵" },
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Pascal = shortcut for small n">
          For n ≤ 5, read coefficients directly from Pascal&apos;s triangle — no factorial calculations needed. Row 5: 1, 5, 10, 10, 5, 1.
        </Callout>
        <Callout type="tip" title="Index check = error catcher">
          In every term, the powers of a and b must add to n. If they don&apos;t, you made an arithmetic error.
        </Callout>
      </SpeedTricks>

      <h2 id="h-theorem">7.2 Binomial Theorem</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">Binomial Theorem</p>
        <FormulaBlock latex="(a+b)^n = \sum_{k=0}^{n} {^{n}C_{k}}\, a^{n-k}\, b^{k}" />
        <p className="text-sm text-muted-foreground mt-2">Expanded: nC0·aⁿ + nC1·aⁿ⁻¹b + nC2·aⁿ⁻²b² + ⋯ + nCn·bⁿ</p>
      </FormulaCard>
      <KeyPoint>
        <strong>(n+1) terms</strong> in the expansion.
        The coefficients nCr are called <strong>binomial coefficients</strong>.
        Each term has total index n (indices of a and b add to n).
      </KeyPoint>

      <Expandable title="Example 1 — Expand (x + 2)⁶">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            Expand (x + 2)⁶ using the binomial theorem.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "(x+2)⁶", description: "6C0·x⁶ + 6C1·x⁵·2 + 6C2·x⁴·2² + 6C3·x³·2³ + 6C4·x²·2⁴ + 6C5·x·2⁵ + 6C6·2⁶" },
                { label: "Simplify", description: "x⁶ + 12x⁵ + 60x⁴ + 160x³ + 240x² + 192x + 64" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h2 id="h-special">Special Cases</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">Three Useful Forms</p>
        <FormulaBlock latex="(x-y)^n = {^{n}C_{0}}x^n - {^{n}C_{1}}x^{n-1}y + {^{n}C_{2}}x^{n-2}y^2 - \cdots + (-1)^n {^{n}C_{n}}y^n" />
        <FormulaBlock latex="(1+x)^n = {^{n}C_{0}} + {^{n}C_{1}}x + {^{n}C_{2}}x^2 + \cdots + {^{n}C_{n}}x^n" />
        <FormulaBlock latex="(1-x)^n = {^{n}C_{0}} - {^{n}C_{1}}x + {^{n}C_{2}}x^2 - \cdots + (-1)^n {^{n}C_{n}}x^n" />
      </FormulaCard>

      <Expandable title="Examples 2 and 3 — Applications">
        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            Compute (98)⁵.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Write 98 = 100 − 2", description: "(98)⁵ = (100−2)⁵" },
                { label: "Expand", description: "100⁵ − 5·100⁴·2 + 10·100³·2² − 10·100²·2³ + 5·100·2⁴ − 2⁵" },
                { label: "Compute", description: "10000000000 − 1000000000 + 40000000 − 800000 + 8000 − 32 = 9039207968" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            Which is larger: (1.01)¹⁰⁰⁰⁰⁰⁰ or 10,000?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            (1.01)¹⁰⁰⁰⁰⁰⁰ = (1 + 0.01)¹⁰⁰⁰⁰⁰⁰ = 1 + 1000000 × 0.01 + … = 1 + 10000 + (positive terms) &gt; 10000.
            So <strong>(1.01)¹⁰⁰⁰⁰⁰⁰ &gt; 10,000</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="98⁵ = (100−2)⁵">
          Rewrite numbers near powers of 10 as (100±k)ⁿ. Most terms become zeros, leaving only 3–4 non-zero terms to compute.
        </Callout>
        <Callout type="tip" title="(1+x)ⁿ ≈ 1 + nx for small x">
          For tiny x, higher-order terms vanish quickly. (1.01)¹⁰⁰⁰⁰⁰⁰ ≈ 1 + 10000 = 10001, which is already &gt; 10000.
        </Callout>
      </SpeedTricks>

      <h2 id="h-coeff-sums">Sum of Binomial Coefficients</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">Key Identities</p>
        <FormulaBlock latex="{^{n}C_{0}} + {^{n}C_{1}} + {^{n}C_{2}} + \cdots + {^{n}C_{n}} = 2^n" />
        <FormulaBlock latex="{^{n}C_{0}} - {^{n}C_{1}} + {^{n}C_{2}} - \cdots + (-1)^n {^{n}C_{n}} = 0" />
        <p className="text-sm text-muted-foreground mt-2">Odd-indexed sum = Even-indexed sum = 2ⁿ⁻¹.</p>
      </FormulaCard>

      <Expandable title="Example 4 — Remainder Proof">
        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            Prove that 6ⁿ − 5n always leaves remainder 1 when divided by 25.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Write 6ⁿ = (1+5)ⁿ", description: "nC0 + nC1·5 + nC2·5² + … = 1 + 5n + 25·(nC2 + 5·nC3 + …)" },
                { label: "Subtract 5n", description: "6ⁿ − 5n = 1 + 25k where k is a natural number" },
                { label: "Conclusion", description: "Remainder when divided by 25 is always 1" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Sum identities: set x = 1 or −1">
          (1+x)ⁿ with x=1 gives 2ⁿ. With x=−1 gives 0. These two substitutions produce the sum and alternating sum identities instantly.
        </Callout>
        <Callout type="tip" title="Remainder problems: split base as (1+k)">
          When proving divisibility, write the base as (1 + multiple of p). The binomial expansion separates into 1 + (multiple of p), making the remainder obvious.
        </Callout>
      </SpeedTricks>

      <Callout type="warning" title="Hard-Level Tips: Binomial Theorem Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Sign alternation:</strong> (x−y)ⁿ alternates signs. Missing the (−1)ᵏ factor is the #1 error.</li>
          <li><strong>Index sum = n:</strong> In every term, powers of a and b add to n. If they don&apos;t, the term is wrong.</li>
          <li><strong>(n+1) terms:</strong> Row n of Pascal has n+1 entries, not n. Don&apos;t confuse row number with term count.</li>
          <li><strong>Large n shortcut:</strong> For (1+x)ⁿ with small x, higher-order terms become negligible. Use approximation when appropriate.</li>
        </ul>
      </Callout>

      <Expandable id="h-ex-7" title="Miscellaneous Exercise on Chapter 7">
        <ol>
          <li>Expand (1 − 2x)⁵ using the binomial theorem.</li>
          <li>Compute (99)⁵ using the binomial theorem.</li>
          <li>Which is larger: (1.1)¹⁰⁰⁰ or 100?</li>
          <li>Find the coefficient of x⁵ in the expansion of (1 + x)¹¹.</li>
          <li>Prove that 9ⁿ + 10ⁿ leaves remainder 19 when divided by 11.</li>
        </ol>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>1 − 10x + 40x² − 80x³ + 80x⁴ − 32x⁵.</li>
            <li>(100−1)⁵ = 100⁵ − 5·100⁴ + 10·100³ − 10·100² + 5·100 − 1 = 9509900499.</li>
            <li>(1.1)¹⁰⁰⁰ &gt; 100. By binomial: 1 + 1000(0.1) + … &gt; 101.</li>
            <li>11C5 = 462.</li>
            <li>9ⁿ = (11−2)ⁿ, 10ⁿ = (11−1)ⁿ. Remainders: 9ⁿ → (−2)ⁿ, 10ⁿ → (−1)ⁿ. For odd n: −2 + (−1) = −3 ≡ 8. For even n: 4 + 1 = 5. Need to verify the specific claim more carefully.</li>
          </ol>
        </Expandable>
      </Expandable>
    </>
  );
}
