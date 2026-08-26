import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";

export default function BinomialTheoremChapter() {
  return (
    <>
      <h2 id="h-intro">7.1 Introduction</h2>
      <Callout type="note" title="Why Binomial Theorem?">
        Computing (98)⁵ or (101)⁶ by repeated multiplication is tedious. The <strong>binomial theorem</strong> gives a quick expansion of (a + b)ⁿ for any positive integer n, using pre-computed coefficients.
      </Callout>
      <ul>
        <li>We already know: (a+b)² = a² + 2ab + b², (a+b)³ = a³ + 3a²b + 3ab² + b³.</li>
        <li>For higher powers, we need a systematic formula.</li>
      </ul>

      <h2 id="h-pascal">Pascal's Triangle</h2>
      <p>
        Coefficients of (a+b)ⁿ form a triangular array known as <Highlight>Pascal&apos;s triangle</Highlight> (also called <strong>Meru Prastara</strong> by Pingla):
      </p>
      <ul>
        <li>Row n: 1, nC1, nC2, …, nC(n-1), 1 — each entry is the sum of the two above it.</li>
        <li>n+1 terms in row n (one more than the index).</li>
        <li>Powers of a decrease: aⁿ → aⁿ⁻¹ → … → a⁰. Powers of b increase: b⁰ → b¹ → … → bⁿ.</li>
        <li>In each term, index of a + index of b = n.</li>
      </ul>
      <Expandable title="Example — Expand (2x + 3y)⁵ using Pascal's triangle">
        <p>Row 5 of Pascal's triangle: <strong>1, 5, 10, 10, 5, 1</strong></p>
        <p>(2x + 3y)⁵ = (2x)⁵ + 5(2x)⁴(3y) + 10(2x)³(3y)² + 10(2x)²(3y)³ + 5(2x)(3y)⁴ + (3y)⁵</p>
        <p>= 32x⁵ + 240x⁴y + 720x³y² + 1080x²y³ + 810xy⁴ + 243y⁵</p>
      </Expandable>

      <h2 id="h-theorem">7.2 Binomial Theorem</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">Binomial Theorem</p>
        <FormulaBlock latex="(a+b)^n = \sum_{k=0}^{n} {^{n}C_{k}}\, a^{n-k}\, b^{k}" />
        <p className="text-sm text-muted-foreground mt-2">Expanded: nC0·aⁿ + nC1·aⁿ⁻¹b + nC2·aⁿ⁻²b² + ⋯ + nCn·bⁿ</p>
      </FormulaCard>
      <KeyPoint>
        <strong>(n+1) terms</strong> in the expansion. The coefficients nCr are called <strong>binomial coefficients</strong>. Each term has total index n (indices of a and b add to n).
      </KeyPoint>

      <ProblemSolution problemNumber="1">
        <ProblemSolution.Problem>Expand (x + 2)⁶ using the binomial theorem.</ProblemSolution.Problem>
        <ProblemSolution.Solution>
          (x+2)⁶ = 6C0·x⁶ + 6C1·x⁵·2 + 6C2·x⁴·2² + 6C3·x³·2³ + 6C4·x²·2⁴ + 6C5·x·2⁵ + 6C6·2⁶<br />
          = x⁶ + 12x⁵ + 60x⁴ + 160x³ + 240x² + 192x + 64
        </ProblemSolution.Solution>
      </ProblemSolution>

      <h2 id="h-special">Special Cases</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">Three Useful Forms</p>
        <FormulaBlock latex="(x-y)^n = {^{n}C_{0}}x^n - {^{n}C_{1}}x^{n-1}y + {^{n}C_{2}}x^{n-2}y^2 - \cdots + (-1)^n {^{n}C_{n}}y^n" />
        <FormulaBlock latex="(1+x)^n = {^{n}C_{0}} + {^{n}C_{1}}x + {^{n}C_{2}}x^2 + \cdots + {^{n}C_{n}}x^n" />
        <FormulaBlock latex="(1-x)^n = {^{n}C_{0}} - {^{n}C_{1}}x + {^{n}C_{2}}x^2 - \cdots + (-1)^n {^{n}C_{n}}x^n" />
      </FormulaCard>

      <h2 id="h-coeff-sums">Sum of Binomial Coefficients</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">Key Identities</p>
        <FormulaBlock latex="{^{n}C_{0}} + {^{n}C_{1}} + {^{n}C_{2}} + \cdots + {^{n}C_{n}} = 2^n" />
        <FormulaBlock latex="{^{n}C_{0}} - {^{n}C_{1}} + {^{n}C_{2}} - \cdots + (-1)^n {^{n}C_{n}} = 0" />
        <p className="text-sm text-muted-foreground mt-2">Odd-indexed sum = Even-indexed sum = 2ⁿ⁻¹.</p>
      </FormulaCard>

      <ProblemSolution problemNumber="2">
        <ProblemSolution.Problem>Compute (98)⁵.</ProblemSolution.Problem>
        <ProblemSolution.Solution>
          Write 98 = 100 − 2.<br />
          (98)⁵ = (100−2)⁵ = 100⁵ − 5·100⁴·2 + 10·100³·2² − 10·100²·2³ + 5·100·2⁴ − 2⁵<br />
          = 10000000000 − 1000000000 + 40000000 − 800000 + 8000 − 32 = 9039207968.
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="3">
        <ProblemSolution.Problem>Which is larger: (1.01)¹⁰⁰⁰⁰⁰⁰ or 10,000?</ProblemSolution.Problem>
        <ProblemSolution.Solution>
          (1.01)¹⁰⁰⁰⁰⁰⁰ = (1 + 0.01)¹⁰⁰⁰⁰⁰⁰ = 1 + 1000000 × 0.01 + … = 1 + 10000 + (positive terms) &gt; 10000.
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="4">
        <ProblemSolution.Problem>Prove that 6ⁿ − 5n always leaves remainder 1 when divided by 25.</ProblemSolution.Problem>
        <ProblemSolution.Solution>
          (1+5)ⁿ = nC0 + nC1·5 + nC2·5² + … = 1 + 5n + 25·(nC2 + 5·nC3 + …).<br />
          So 6ⁿ − 5n = 1 + 25k where k is a natural number. Remainder when divided by 25 is 1.
        </ProblemSolution.Solution>
      </ProblemSolution>

      <h2 id="h-summary">Summary (Revision Points)</h2>
      <Stepper
        steps={[
          { label: "Binomial Theorem: (a+b)ⁿ = Σ nCr · aⁿ⁻ʳ · bʳ for positive integer n." },
          { label: "(n+1) terms; sum of indices of a and b equals n in every term." },
          { label: "nCr are binomial coefficients; arranged in Pascal's triangle (Meru Prastara)." },
          { label: "(x−y)ⁿ: alternating signs. (1+x)ⁿ and (1−x)ⁿ: special cases." },
          { label: "Sum of all coefficients: 2ⁿ. Alternating sum: 0." },
          { label: "Odd-indexed sum = Even-indexed sum = 2ⁿ⁻¹." },
        ]}
      />
    </>
  );
}
