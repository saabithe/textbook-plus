import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function LimitsAndDerivativesChapter() {
  return (
    <>
      <h2 id="h-intro">12.1 Introduction</h2>
      <Callout type="note" title="Why Limits and Derivatives?">
        Suppose a ball is dropped from a height of 100 m. Its distance after t seconds is
        s = 4.9t². How fast is it moving at t = 3? We need <strong>instantaneous velocity</strong> —
        the rate of change of position at an exact moment, not over an interval. This is
        where <Highlight>derivatives</Highlight> come in, built on the foundation of <strong>limits</strong>.
      </Callout>

      <ul>
        <li><strong>Average velocity</strong> over [t₁, t₂]: Δs/Δt = [s(t₂) − s(t₁)]/(t₂ − t₁).</li>
        <li><strong>Instantaneous velocity</strong> at t = a: the limit of average velocity as Δt → 0.</li>
        <li>Limits answer: &ldquo;What does f(x) approach as x gets arbitrarily close to a?&rdquo;</li>
      </ul>

      <Expandable title="Example 1 — Instantaneous Velocity">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            A ball thrown upward has height h(t) = 20t − 5t². Find the average velocity
            over [1, 1+h] and the instantaneous velocity at t = 1.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Average velocity", description: "[h(1+h) − h(1)]/h = [20(1+h) − 5(1+h)² − 15]/h = [20 + 20h − 5 − 10h − 5h² − 15]/h = [10h − 5h²]/h = 10 − 5h" },
                { label: "Take limit h → 0", description: "Instantaneous velocity at t = 1 is lim(h→0)(10 − 5h) = 10 m/s" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h2 id="h-limits">12.2–12.3 Intuitive Idea of Derivatives &amp; Limits</h2>
      <Callout type="important" title="Definition of a Limit">
        We write{" "}
        <FormulaBlock latex="\lim_{x \to a} f(x) = L" />
        if f(x) can be made arbitrarily close to L by taking x sufficiently close to (but not equal to) a.
        The value of f at x = a is irrelevant — only nearby values matter.
      </Callout>

      <KeyPoint>Key idea: <Highlight>the limit describes behaviour near a point, not at the point</Highlight>. f(a) may be undefined or different from L.</KeyPoint>

      <h3>Algebra of Limits</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Limit Laws</p>
        <FormulaBlock latex="\lim_{x \to a}[f(x) + g(x)] = \lim_{x \to a}f(x) + \lim_{x \to a}g(x)" />
        <FormulaBlock latex="\lim_{x \to a}[f(x) \cdot g(x)] = \lim_{x \to a}f(x) \cdot \lim_{x \to a}g(x)" />
        <FormulaBlock latex="\lim_{x \to a}\frac{f(x)}{g(x)} = \frac{\lim_{x \to a}f(x)}{\lim_{x \to a}g(x)}, \quad \lim_{x \to a}g(x) \ne 0" />
        <FormulaBlock latex="\lim_{x \to a}[k \cdot f(x)] = k \cdot \lim_{x \to a}f(x)" />
        <p className="text-sm text-muted-foreground mt-2">These hold provided the individual limits on the right exist (and denominator ≠ 0).</p>
      </FormulaCard>

      <h3>Limits of Polynomials and Rational Functions</h3>
      <ul>
        <li><strong>Polynomial:</strong>{" "}
          <FormulaBlock latex="\lim_{x \to a}\, p(x) = p(a)" />{" "}
          — just substitute x = a.
        </li>
        <li><strong>Rational function</strong> f(x) = p(x)/q(x): substitute; if q(a) ≠ 0, the limit is p(a)/q(a). If q(a) = 0 and p(a) ≠ 0, the limit does not exist.</li>
      </ul>

      <KeyPoint title="Special Limit (Crucial)">
        <FormulaCard>
          <FormulaBlock latex="\lim_{x \to a} \frac{x^n - a^n}{x - a} = n \cdot a^{n-1}" />
          <p className="text-sm text-muted-foreground mt-2">
            Valid for any positive integer n and any real number a.
            This is the &ldquo;standard limit&rdquo; used throughout calculus.
          </p>
        </FormulaCard>
      </KeyPoint>

      <Stepper
        steps={[
          { label: "Factor numerator", description: "xⁿ − aⁿ = (x − a)(xⁿ⁻¹ + xⁿ⁻²a + xⁿ⁻³a² + ⋯ + aⁿ⁻¹)" },
          { label: "Cancel (x − a)", description: "Numerator/denominator = xⁿ⁻¹ + xⁿ⁻²a + ⋯ + aⁿ⁻¹" },
          { label: "Substitute x = a", description: "Each of the n terms becomes aⁿ⁻¹, giving n · aⁿ⁻¹" },
        ]}
      />

      <Expandable title="Examples 2 and 3 — Polynomial &amp; Standard Limits">
        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            Find lim(x→2) (x³ − 8)/(x − 2).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            Using the special limit with a = 2, n = 3: lim = 3 · 2² = <strong>12</strong>.
            <br />
            Or factor: (x−2)(x² + 2x + 4)/(x−2) = x² + 2x + 4 → 4 + 4 + 4 = 12.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            Evaluate lim(x→1) (x⁷ − 1)/(x − 1).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            Special limit with n = 7, a = 1: lim = 7 · 1⁶ = <strong>7</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Recognize the standard limit instantly">
          If the limit is of the form (xⁿ − aⁿ)/(x − a), the answer is n · aⁿ⁻¹. Don&apos;t factor — just apply the formula.
        </Callout>
        <Callout type="tip" title="Polynomial limits = direct substitution">
          For any polynomial p(x), lim(x→a) p(x) = p(a). No algebra needed.
        </Callout>
      </SpeedTricks>

      <h2 id="h-trig-limits">12.4 Limits of Trigonometric Functions</h2>
      <Callout type="important" title="Two Fundamental Trigonometric Limits">
        <FormulaCard>
          <FormulaBlock latex="\lim_{x \to 0} \frac{\sin x}{x} = 1" />
          <FormulaBlock latex="\lim_{x \to 0} \frac{1 - \cos x}{x} = 0" />
          <p className="text-sm text-muted-foreground mt-2">
            Here x is in <strong>radians</strong>. These two limits are the backbone of all trigonometric derivatives.
          </p>
        </FormulaCard>
      </Callout>

      <KeyPoint>
        The angle x in sin x, cos x must be in <Highlight>radians</Highlight> for these limits to hold.
        In degrees, lim(x→0) sin x°/x ≠ 1.
      </KeyPoint>

      <h3>The Sandwich (Squeeze) Theorem</h3>
      <Callout type="note" title="Sandwich Theorem">
        If g(x) ≤ f(x) ≤ h(x) for all x near a (except possibly at a), and{" "}
        <FormulaBlock latex="\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L" />
        then <FormulaBlock latex="\lim_{x \to a} f(x) = L" />.
      </Callout>

      <Expandable title="Example 4 — Proving lim sin x / x = 1 (Sketch)">
        <Stepper
          steps={[
            { label: "Geometric argument", description: "For 0 &lt; x &lt; π/2: Area of triangle OAB &lt; Area of sector OAB &lt; Area of triangle OAC" },
            { label: "Inequality", description: "(1/2)sin x &lt; (1/2)x &lt; (1/2)tan x → cos x &lt; sin x / x &lt; 1" },
            { label: "Apply Sandwich", description: "Since lim cos x = 1 and lim 1 = 1, the squeeze theorem gives lim sin x / x = 1" },
          ]}
        />
      </Expandable>

      <Expandable title="Examples 5 and 6 — Trigonometric Limits">
        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            Find lim(x→0) sin 4x / x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Rewrite", description: "sin 4x / x = 4 · (sin 4x)/(4x)" },
                { label: "Substitute u = 4x", description: "As x → 0, u → 0. So lim = 4 · lim(u→0) sin u / u = 4 × 1 = 4" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            Evaluate lim(x→0) (1 − cos x) / x².
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Multiply by conjugate", description: "(1 − cos x)(1 + cos x) / [x²(1 + cos x)] = (1 − cos²x) / [x²(1 + cos x)] = sin²x / [x²(1 + cos x)]" },
                { label: "Split", description: "(sin x / x)² · 1/(1 + cos x) → 1² · 1/2 = 1/2" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Pattern-match sin(something)/something">
          lim sin(f(x))/f(x) = 1 whenever f(x) → 0. Multiply and divide by the argument to get this form.
        </Callout>
        <Callout type="tip" title="(1 − cos x)/x → 0; (1 − cos x)/x² → 1/2">
          The first goes to 0 (higher-order zero). The second goes to 1/2. Remember both.
        </Callout>
      </SpeedTricks>

      <h2 id="h-derivatives">12.5 Derivatives</h2>
      <Callout type="important" title="Definition of the Derivative">
        The <strong>derivative</strong> of f at x = a is the instantaneous rate of change:
        <FormulaCard>
          <FormulaBlock latex="f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}" />
          <p className="text-sm text-muted-foreground mt-2">
            Also written as lim(x→a) [f(x) − f(a)]/(x − a).
          </p>
        </FormulaCard>
      </Callout>

      <KeyPoint>
        f&apos;(a) is the <Highlight>slope of the tangent</Highlight> to y = f(x) at x = a.
        If f&apos;(a) exists, f is <strong>differentiable</strong> at a.
      </KeyPoint>

      <h3>First Principle — Example</h3>
      <Expandable title="Example 7 — Derivative from First Principle">
        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            Find the derivative of f(x) = x² from first principles.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Write difference quotient", description: "[f(x+h) − f(x)]/h = [(x+h)² − x²]/h = [x² + 2xh + h² − x²]/h = [2xh + h²]/h" },
                { label: "Simplify", description: "= 2x + h" },
                { label: "Take limit h → 0", description: "f&apos;(x) = lim(2x + h) = 2x" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Algebra of Derivatives</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Sum, Difference, Constant Multiple</p>
        <FormulaBlock latex="[f(x) \pm g(x)]' = f'(x) \pm g'(x)" />
        <FormulaBlock latex="[k \cdot f(x)]' = k \cdot f'(x)" />
      </FormulaCard>

      <h3>Product Rule</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Product Rule (Leibniz Rule)</p>
        <FormulaBlock latex="[f(x) \cdot g(x)]' = f'(x) \cdot g(x) + f(x) \cdot g'(x)" />
        <p className="text-sm text-muted-foreground mt-2">&ldquo;Derivative of first × second + first × derivative of second.&rdquo;</p>
      </FormulaCard>

      <h3>Quotient Rule</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Quotient Rule</p>
        <FormulaBlock latex="\left[\frac{f(x)}{g(x)}\right]' = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{[g(x)]^2}" />
        <p className="text-sm text-muted-foreground mt-2">Remember: &ldquo;Low d-high minus high d-low, over low squared.&rdquo;</p>
      </FormulaCard>

      <Expandable title="Examples 8 and 9 — Product &amp; Quotient Rules">
        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>
            Differentiate f(x) = x² · sin x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            Product rule: f&apos;(x) = (2x)(sin x) + (x²)(cos x) = <strong>2x sin x + x² cos x</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 9">
          <ProblemSolution.Problem>
            Differentiate f(x) = sin x / x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            Quotient rule:
            <Stepper
              steps={[
                { label: "Identify", description: "f = sin x (numerator), g = x (denominator)" },
                { label: "Apply rule", description: "f' = (cos x · x − sin x · 1) / x² = (x cos x − sin x) / x²" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Standard Derivatives</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Common Derivatives</p>
        <FormulaBlock latex="(x^n)' = n \cdot x^{n-1}" />
        <FormulaBlock latex="(\sin x)' = \cos x" />
        <FormulaBlock latex="(\cos x)' = -\sin x" />
        <FormulaBlock latex="(\tan x)' = \sec^2 x" />
      </FormulaCard>

      <SpeedTricks>
        <Callout type="tip" title="Product vs Quotient: memorize one">
          Product rule is easier. If you forget the quotient rule, rewrite f/g as f · g⁻¹ and use the product rule + chain rule.
        </Callout>
        <Callout type="tip" title="Check sign: (cos x)′ = −sin x">
          The negative sign on (cos x)′ is the most common error. cos decreases near 0, so its derivative must be negative there.
        </Callout>
      </SpeedTricks>

      <Callout type="warning" title="Hard-Level Tips: Limits &amp; Derivatives Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>sin x / x → 1 only when x → 0</strong> and x is in radians. Writing lim(x→π) sin x / x = 1 is wrong.</li>
          <li><strong>The standard limit uses aⁿ − bⁿ form:</strong> If the numerator is xⁿ + aⁿ (plus instead of minus), you cannot use it directly.</li>
          <li><strong>Differentiable ⟹ continuous, but not the reverse:</strong> f(x) = |x| is continuous at 0 but not differentiable there.</li>
          <li><strong>Quotient rule sign:</strong> numerator is (f′g − fg′), NOT (f′g + fg′). The minus sign is crucial.</li>
          <li><strong>Chain rule next chapter:</strong> (sin 2x)′ is NOT cos 2x. It is 2 cos 2x. The chain rule is needed — this is a preview.</li>
        </ul>
      </Callout>

      <Expandable id="h-ex-12" title="Miscellaneous Exercise on Chapter 12">
        <ol>
          <li>Evaluate lim(x→3) (x² − 9)/(x − 3).</li>
          <li>Evaluate lim(x→0) sin 7x / 3x.</li>
          <li>Evaluate lim(x→0) (1 − cos 3x) / x².</li>
          <li>Find f&apos;(x) from first principles if f(x) = 3x + 2.</li>
          <li>Differentiate x³ · cos x using the product rule.</li>
          <li>Differentiate tan x using the quotient rule (tan x = sin x / cos x).</li>
          <li>Evaluate lim(x→a) (xⁿ − aⁿ)/(x − a) for n = 5, a = 2.</li>
          <li>Find lim(x→0) (sin 5x) / (sin 3x).</li>
          <li>If f(x) = x² − 3x + 1, find f&apos;(2) using the definition.</li>
          <li>Evaluate lim(x→0) x / sin x.</li>
        </ol>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>lim = 3 · 3 = 6 (special limit n=2, a=3). Or factor: (x+3) → 6.</li>
            <li>7/3 · lim sin 7x / 7x = 7/3.</li>
            <li>Using (1 − cos θ)/θ² → 1/2: 9 · (1/2) / 9 = 1/2. Wait: (1−cos 3x)/x² = 9 · (1−cos 3x)/(3x)² → 9 · 1/2 = <strong>9/2</strong>.</li>
            <li>f&apos;(x) = lim(h→0) [3(x+h)+2 − 3x−2]/h = 3h/h = 3.</li>
            <li>3x² cos x − x³ sin x.</li>
            <li>sec²x = (cos x · cos x − sin x · (−sin x))/cos²x = (cos²x + sin²x)/cos²x = 1/cos²x = sec²x.</li>
            <li>5 · 2⁴ = 5 · 16 = 80.</li>
            <li>5/3 (divide numerator and denominator by x: (sin 5x/5x)·5 / (sin 3x/3x)·3 → 5/3).</li>
            <li>f&apos;(2) = lim(h→0) [(4+4h+h²−6−3h+1) − (4−6+1)]/h = lim(h→0) (h+h²)/h = 1.</li>
            <li>1 (reciprocal of sin x / x → 1).</li>
          </ol>
        </Expandable>
      </Expandable>
    </>
  );
}
