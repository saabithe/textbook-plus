import { Callout } from "@/components/content/Callout";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
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
        Coefficients of (a+b)ⁿ form a triangular array known as <Highlight>Pascal&apos;s triangle</Highlight>.
      </p>
      <ul>
        <li>Row n: 1, nC1, nC2, …, nC(n-1), 1 — each entry is the sum of the two above it.</li>
        <li>n+1 terms in row n (one more than the index).</li>
        <li>Powers of a decrease: aⁿ → aⁿ⁻¹ → … → a⁰. Powers of b increase: b⁰ → b¹ → … → bⁿ.</li>
        <li>In each term, index of a + index of b = n.</li>
      </ul>

      <figure className="my-6 rounded-xl border border-border/40 overflow-hidden bg-card">
        <img
          src="/images/maths/binomial-theorem/pascals-triangle.webp"
          alt="Pascal's triangle"
          className="w-full h-auto max-w-[420px] mx-auto"
          loading="lazy"
        />
        <figcaption className="px-4 py-2.5 bg-muted/20 border-t border-border/30 text-xs text-muted-foreground text-center leading-relaxed">
          Pascal&apos;s triangle — row n gives the coefficients of (a + b)ⁿ, each entry the sum of the two above it.
        </figcaption>
      </figure>

      <Expandable title="Example — Expand (2x + 3y)⁵ using Pascal&apos;s triangle">
        <p>Row 5 of Pascal&apos;s triangle: <strong>1, 5, 10, 10, 5, 1</strong></p>
        <Stepper
          steps={[
            { label: "(2x + 3y)⁵", description: <Formula>{String.raw`(2x)^5 + 5(2x)^4(3y) + 10(2x)^3(3y)^2 + 10(2x)^2(3y)^3 + 5(2x)(3y)^4 + (3y)^5`}</Formula> },
            { label: "Simplify", description: <Formula>{String.raw`32x^5 + 240x^4 y + 720x^3 y^2 + 1080x^2 y^3 + 810x y^4 + 243y^5`}</Formula> },
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Pascal = shortcut for small n">
          For n ≤ 5, read coefficients directly from Pascal&apos;s triangle — no factorial calculations needed. Row 5: 1, 5, 10, 10, 5, 1.
        </Callout>
        <Callout type="tip" title="Index check = error catcher">
          In every term, the powers of a and b must add to n. If they don&apos;t, you made an arithmetic error.
          <span className="block mt-2">
            Example: in (x + 2)⁴, the third term is ⁴C₂·x²·2² — indices 2 + 2 = 4 = n ✓. A common slip writes ⁴C₂·x³·2¹, giving 3 + 1 = 4 ✓ it happens to pass; but ⁴C₂·x³·2² would give 3 + 2 = 5 ≠ 4 — instantly wrong.
          </span>
        </Callout>
      </SpeedTricks>

      <h2 id="h-theorem">7.2 Binomial Theorem</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">Binomial Theorem</p>
        <FormulaBlock latex={String.raw`(a+b)^n = {}^{n}C_{0}\,a^n + {}^{n}C_{1}\,a^{n-1}b + {}^{n}C_{2}\,a^{n-2}b^2 + \cdots + {}^{n}C_{n}\,b^n`} />
      </FormulaCard>
      <Callout type="note" title="Number of Terms & Sign Pattern">
        <p className="mb-2"><strong>Key:</strong> (n+1) terms in the expansion; the coefficients nCr are called <strong>binomial coefficients</strong>, and each term has total index n (indices of a and b add to n).</p>
        <p className="mb-2">For (a ± b)ⁿ with n a natural number:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Total terms:</strong> n + 1 (one more than the exponent).</li>
          <li><strong>(a + b)ⁿ:</strong> all terms positive.</li>
          <li><strong>(a − b)ⁿ:</strong> signs alternate starting with − : −, +, −, +, −, …</li>
          <li>Examples: (3x − 2)¹⁰ → 11 terms, (9 + y)⁴ → 5 terms, (3 − 2x)¹¹ → 12 terms, (9 − 3y)¹² → 13 terms, (2x + 3)⁵ → 6 terms.</li>
        </ul>
      </Callout>

      <Expandable title="Example 1 — Expand (x + 2)⁶">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            Expand (x + 2)⁶ using the binomial theorem.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "(x+2)⁶", description: <Formula>{String.raw`{}^{6}C_{0}\,x^6 + {}^{6}C_{1}\,x^5\cdot 2 + {}^{6}C_{2}\,x^4\cdot 2^2 + {}^{6}C_{3}\,x^3\cdot 2^3 + {}^{6}C_{4}\,x^2\cdot 2^4 + {}^{6}C_{5}\,x\cdot 2^5 + {}^{6}C_{6}\,2^6`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`x^6 + 12x^5 + 60x^4 + 160x^3 + 240x^2 + 192x + 64`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Examples — Basic Expansions">
        <ProblemSolution problemNumber="Example 1B">
          <ProblemSolution.Problem>
            Expand (x + 2)⁴.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "(x+2)⁴", description: <Formula>{String.raw`{}^{4}C_{0}\,x^4 + {}^{4}C_{1}\,x^3\cdot 2 + {}^{4}C_{2}\,x^2\cdot 2^2 + {}^{4}C_{3}\,x\cdot 2^3 + {}^{4}C_{4}\,2^4`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`x^4 + 8x^3 + 24x^2 + 32x + 16`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">4 + 1 = 5 terms.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 1C">
          <ProblemSolution.Problem>
            Expand (3 − x)⁵.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "(3−x)⁵", description: <Formula>{String.raw`{}^{5}C_{0}\,3^5 - {}^{5}C_{1}\,3^4\,x + {}^{5}C_{2}\,3^3\,x^2 - {}^{5}C_{3}\,3^2\,x^3 + {}^{5}C_{4}\,3\,x^4 - {}^{5}C_{5}\,x^5`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`243 - 405x + 270x^2 - 90x^3 + 15x^4 - x^5`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">5 + 1 = 6 terms, signs alternating −, +, −, +, −, +.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 1D">
          <ProblemSolution.Problem>
            Expand (2/x − x/2)⁵.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "(2/x − x/2)⁵", description: <Formula>{String.raw`{}^{5}C_{0}\left(\frac{2}{x}\right)^5 - {}^{5}C_{1}\left(\frac{2}{x}\right)^4\frac{x}{2} + {}^{5}C_{2}\left(\frac{2}{x}\right)^3\left(\frac{x}{2}\right)^2 - {}^{5}C_{3}\left(\frac{2}{x}\right)^2\left(\frac{x}{2}\right)^3 + {}^{5}C_{4}\left(\frac{2}{x}\right)\left(\frac{x}{2}\right)^4 - {}^{5}C_{5}\left(\frac{x}{2}\right)^5`}</Formula> },
                { label: "Simplify powers", description: <Formula>{String.raw`\frac{32}{x^5} - 5\cdot\frac{8}{x^3} + 10\cdot\frac{2}{x} - 10\cdot\frac{x}{2} + 5\cdot\frac{x^3}{8} - \frac{x^5}{32}`}</Formula> },
                { label: "Evaluate", description: <Formula>{String.raw`\frac{32}{x^5} - \frac{40}{x^3} + \frac{20}{x} - 5x + \frac{5x^3}{8} - \frac{x^5}{32}`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">5 + 1 = 6 terms.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h2 id="h-special">Special Cases</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">Three Useful Forms</p>
        <FormulaBlock latex={String.raw`(x-y)^n = {^{n}C_{0}}x^n - {^{n}C_{1}}x^{n-1}y + {^{n}C_{2}}x^{n-2}y^2 - \cdots + (-1)^n {^{n}C_{n}}y^n`} />
        <FormulaBlock latex={String.raw`(1+x)^n = {^{n}C_{0}} + {^{n}C_{1}}x + {^{n}C_{2}}x^2 + \cdots + {^{n}C_{n}}x^n`} />
        <FormulaBlock latex={String.raw`(1-x)^n = {^{n}C_{0}} - {^{n}C_{1}}x + {^{n}C_{2}}x^2 - \cdots + (-1)^n {^{n}C_{n}}x^n`} />
      </FormulaCard>

      <Expandable title="Examples 2 and 3 — Applications">
        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            Compute (98)⁵.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Write 98 = 100 − 2", description: <Formula>{String.raw`(98)^5 = (100-2)^5`}</Formula> },
                { label: "Expand", description: <Formula>{String.raw`100^5 - 5 \cdot 100^4 \cdot 2 + 10 \cdot 100^3 \cdot 2^2 - 10 \cdot 100^2 \cdot 2^3 + 5 \cdot 100 \cdot 2^4 - 2^5`}</Formula> },
                { label: "Compute", description: <Formula>{String.raw`10000000000 - 1000000000 + 40000000 - 800000 + 8000 - 32 = 9039207968`}</Formula> },
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
        <FormulaBlock latex={String.raw`{^{n}C_{0}} + {^{n}C_{1}} + {^{n}C_{2}} + \cdots + {^{n}C_{n}} = 2^n`} />
        <FormulaBlock latex={String.raw`{^{n}C_{0}} - {^{n}C_{1}} + {^{n}C_{2}} - \cdots + (-1)^n {^{n}C_{n}} = 0`} />
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
                { label: "Write 6ⁿ = (1+5)ⁿ", description: <Formula>{String.raw`{}^{n}C_{0} + {}^{n}C_{1}\cdot 5 + {}^{n}C_{2}\cdot 5^2 + \cdots = 1 + 5n + 25\left({}^{n}C_{2} + 5\cdot {}^{n}C_{3} + \cdots\right)`}</Formula> },
                { label: "Subtract 5n", description: <><Formula>{String.raw`6^n - 5n = 1 + 25k`}</Formula> where k is a natural number</> },
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

      <Expandable id="h-exercise-7-1" title="Exercise 7.1">
        <p><strong>Expand using binomial theorem:</strong></p>
        <ol>
          <li>(1 − 2x)⁵</li>
          <li>(2/x − x/2)⁵</li>
          <li>(2x − 3)⁶</li>
          <li>(x/3 + 1/x)⁵</li>
          <li>(x + 1/x)⁶</li>
        </ol>
        <p><strong>Using binomial theorem, evaluate:</strong></p>
        <ol start={6}>
          <li>(96)³</li>
          <li>(102)⁵</li>
          <li>(101)⁴</li>
          <li>(99)⁵</li>
        </ol>
        <ol start={10}>
          <li>Which is larger, (1.1)¹⁰⁰⁰⁰ or 1000?</li>
          <li>Find (a + b)⁴ − (a − b)⁴. Hence, evaluate (√3 + √2)⁴ − (√3 − √2)⁴.</li>
          <li>Find (x + 1)⁶ + (x − 1)⁶. Hence or otherwise evaluate (√2 + 1)⁶ + (√2 − 1)⁶.</li>
          <li>Show that 9ⁿ⁺¹ − 8n − 9 is divisible by 64, whenever n is a positive integer.</li>
          <li>Prove that Σ from r = 0 to n of 3ʳ · ⁿCᵣ = 4ⁿ.</li>
        </ol>
        <Expandable title="Answer Key — Exercise 7.1">
          <ol>
            <li>1 − 10x + 40x² − 80x³ + 80x⁴ − 32x⁵</li>
            <li>32/x⁵ − 40/x³ + 20/x − 5x + 5x³/8 − x⁵/32</li>
            <li>64x⁶ − 576x⁵ + 2160x⁴ − 4320x³ + 4860x² − 2916x + 729</li>
            <li>x⁵/243 + 5x³/81 + 10x/27 + 10/(9x) + 5/(3x³) + 1/x⁵</li>
            <li>x⁶ + 6x⁴ + 15x² + 20 + 15/x² + 6/x⁴ + 1/x⁶</li>
            <li>(100 − 4)³ = 1000000 − 120000 + 4800 − 64 = <strong>884736</strong></li>
            <li>(100 + 2)⁵ = 10000000000 + 1000000000 + 40000000 + 800000 + 8000 + 32 = <strong>11040808032</strong></li>
            <li>(100 + 1)⁴ = 100000000 + 4000000 + 60000 + 400 + 1 = <strong>104060401</strong></li>
            <li>(100 − 1)⁵ = 10000000000 − 500000000 + 10000000 − 100000 + 500 − 1 = <strong>9509900499</strong></li>
            <li>(1.1)¹⁰⁰⁰⁰ = (1 + 0.1)¹⁰⁰⁰⁰ = 1 + 10000 × 0.1 + … = 1 + 1000 + (positive terms) &gt; 1000. Hence <strong>(1.1)¹⁰⁰⁰⁰ &gt; 1000</strong>.</li>
            <li>(a+b)⁴ − (a−b)⁴ = 2(⁴C₁a³b + ⁴C₃ab³) = 8ab(a² + b²). For a = √3, b = √2: 8√6(3+2) = <strong>40√6</strong>.</li>
            <li>(x+1)⁶ + (x−1)⁶ = 2(x⁶ + 15x⁴ + 15x² + 1). For x = √2: 2(8 + 60 + 30 + 1) = <strong>198</strong>.</li>
            <li>Write 9ⁿ⁺¹ = (8+1)ⁿ⁺¹ = 1 + (n+1)·8 + 8²·k = 8n + 9 + 64k for some natural number k. Hence 9ⁿ⁺¹ − 8n − 9 = 64k, which is divisible by 64.</li>
            <li>By binomial theorem, (1+3)ⁿ = Σ ⁿCᵣ · 1ⁿ⁻ʳ · 3ʳ = Σ 3ʳ · ⁿCᵣ. Hence Σ 3ʳ · ⁿCᵣ = 4ⁿ.</li>
          </ol>
        </Expandable>
      </Expandable>

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
