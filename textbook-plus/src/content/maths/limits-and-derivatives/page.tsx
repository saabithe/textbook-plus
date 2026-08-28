import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
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
                { label: "Average velocity", description: <Formula>{String.raw`\frac{h(1+h) - h(1)}{h} = \frac{20(1+h) - 5(1+h)^2 - 15}{h} = \frac{20 + 20h - 5 - 10h - 5h^2 - 15}{h} = \frac{10h - 5h^2}{h} = 10 - 5h`}</Formula> },
                { label: "Take limit h → 0", description: <>Instantaneous velocity at t = 1 is <Formula>{String.raw`\lim_{h \to 0}(10 - 5h) = 10`}</Formula> m/s</> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h2 id="h-limits">12.2–12.3 Intuitive Idea of Derivatives &amp; Limits</h2>
      <Callout type="important" title="Definition of a Limit">
        We write{" "}
        <FormulaBlock latex={String.raw`\lim_{x \to a} f(x) = L`} />
        if f(x) can be made arbitrarily close to L by taking x sufficiently close to (but not equal to) a.
        The value of f at x = a is irrelevant — only nearby values matter.
      </Callout>

      <KeyPoint>Key idea: <Highlight>the limit describes behaviour near a point, not at the point</Highlight>. f(a) may be undefined or different from L.</KeyPoint>

      <h3>Algebra of Limits</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Limit Laws</p>
        <FormulaBlock latex={String.raw`\lim_{x \to a}[f(x) + g(x)] = \lim_{x \to a}f(x) + \lim_{x \to a}g(x)`} />
        <FormulaBlock latex={String.raw`\lim_{x \to a}[f(x) \cdot g(x)] = \lim_{x \to a}f(x) \cdot \lim_{x \to a}g(x)`} />
        <FormulaBlock latex={String.raw`\lim_{x \to a}\frac{f(x)}{g(x)} = \frac{\lim_{x \to a}f(x)}{\lim_{x \to a}g(x)}, \quad \lim_{x \to a}g(x) \ne 0`} />
        <FormulaBlock latex={String.raw`\lim_{x \to a}[k \cdot f(x)] = k \cdot \lim_{x \to a}f(x)`} />
        <p className="text-sm text-muted-foreground mt-2">These hold provided the individual limits on the right exist (and denominator ≠ 0).</p>
      </FormulaCard>

      <h3>Limits of Polynomials and Rational Functions</h3>
      <ul>
        <li><strong>Polynomial:</strong>{" "}
          <FormulaBlock latex={String.raw`\lim_{x \to a}\, p(x) = p(a)`} />{" "}
          — just substitute x = a.
        </li>
        <li><strong>Rational function</strong> f(x) = p(x)/q(x): substitute; if q(a) ≠ 0, the limit is p(a)/q(a). If q(a) = 0 and p(a) ≠ 0, the limit does not exist.</li>
      </ul>

      <KeyPoint title="Special Limit (Crucial)">
        <FormulaCard>
          <FormulaBlock latex={String.raw`\lim_{x \to a} \frac{x^n - a^n}{x - a} = n \cdot a^{n-1}`} />
          <p className="text-sm text-muted-foreground mt-2">
            Valid for any positive integer n and any real number a.
            This is the &ldquo;standard limit&rdquo; used throughout calculus.
          </p>
        </FormulaCard>
      </KeyPoint>

      <Stepper
        steps={[
          { label: "Factor numerator", description: <Formula>{String.raw`x^n - a^n = (x-a)\left(x^{n-1} + x^{n-2}a + x^{n-3}a^2 + \cdots + a^{n-1}\right)`}</Formula> },
          { label: "Cancel (x − a)", description: <Formula>{String.raw`\frac{x^n-a^n}{x-a} = x^{n-1} + x^{n-2}a + \cdots + a^{n-1}`}</Formula> },
          { label: "Substitute x = a", description: <Formula>{String.raw`\text{Each of the } n \text{ terms becomes } a^{n-1},\ \text{giving } n\cdot a^{n-1}`}</Formula> },
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
          <FormulaBlock latex={String.raw`\lim_{x \to 0} \frac{\sin x}{x} = 1`} />
          <FormulaBlock latex={String.raw`\lim_{x \to 0} \frac{1 - \cos x}{x} = 0`} />
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
        <FormulaBlock latex={String.raw`\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L`} />
        then <FormulaBlock latex={String.raw`\lim_{x \to a} f(x) = L`} />.
      </Callout>

      <Expandable title="Example 4 — Proving lim sin x / x = 1 (Sketch)">
        <Stepper
          steps={[
            { label: "Geometric argument", description: "For 0 &lt; x &lt; π/2: Area of triangle OAB &lt; Area of sector OAB &lt; Area of triangle OAC" },
            { label: "Inequality", description: <Formula>{String.raw`\frac{1}{2}\sin x < \frac{1}{2}x < \frac{1}{2}\tan x \ \Rightarrow\ \cos x < \frac{\sin x}{x} < 1`}</Formula> },
            { label: "Apply Sandwich", description: <Formula>{String.raw`\text{Since }\lim_{x\to 0}\cos x = 1 \text{ and } \lim_{x\to 0}1 = 1,\ \lim_{x \to 0}\frac{\sin x}{x} = 1`}</Formula> },
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
                { label: "Rewrite", description: <Formula>{String.raw`\frac{\sin 4x}{x} = 4\cdot \frac{\sin 4x}{4x}`}</Formula> },
                { label: "Substitute u = 4x", description: <><Formula>{String.raw`\lim_{x \to 0}\frac{\sin 4x}{x} = 4\lim_{u \to 0}\frac{\sin u}{u} = 4`}</Formula> — as x → 0, u → 0</> },
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
                { label: "Multiply by conjugate", description: <Formula>{String.raw`\frac{(1-\cos x)(1+\cos x)}{x^2(1+\cos x)} = \frac{1-\cos^2 x}{x^2(1+\cos x)} = \frac{\sin^2 x}{x^2(1+\cos x)}`}</Formula> },
                { label: "Split", description: <Formula>{String.raw`\left(\frac{\sin x}{x}\right)^2 \cdot \frac{1}{1+\cos x} \to 1 \cdot \frac{1}{2} = \frac{1}{2}`}</Formula> },
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
          <FormulaBlock latex={String.raw`f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}`} />
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
                { label: "Write difference quotient", description: <Formula>{String.raw`\frac{f(x+h)-f(x)}{h} = \frac{(x+h)^2-x^2}{h} = \frac{x^2+2xh+h^2-x^2}{h} = \frac{2xh+h^2}{h}`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`= 2x + h`}</Formula> },
                { label: "Take limit h → 0", description: <Formula>{String.raw`f'(x) = \lim_{h \to 0}(2x + h) = 2x`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Algebra of Derivatives</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Sum, Difference, Constant Multiple</p>
        <FormulaBlock latex={String.raw`[f(x) \pm g(x)]' = f'(x) \pm g'(x)`} />
        <FormulaBlock latex={String.raw`[k \cdot f(x)]' = k \cdot f'(x)`} />
      </FormulaCard>

      <h3>Product Rule</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Product Rule (Leibniz Rule)</p>
        <FormulaBlock latex={String.raw`[f(x) \cdot g(x)]' = f'(x) \cdot g(x) + f(x) \cdot g'(x)`} />
        <p className="text-sm text-muted-foreground mt-2">&ldquo;Derivative of first × second + first × derivative of second.&rdquo;</p>
      </FormulaCard>

      <h3>Quotient Rule</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Quotient Rule</p>
        <FormulaBlock latex={String.raw`\left[\frac{f(x)}{g(x)}\right]' = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{[g(x)]^2}`} />
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
                { label: "Apply rule", description: <Formula>{String.raw`f' = \frac{\cos x \cdot x - \sin x \cdot 1}{x^2} = \frac{x\cos x - \sin x}{x^2}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Standard Derivatives</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Common Derivatives</p>
        <FormulaBlock latex={String.raw`(x^n)' = n \cdot x^{n-1}`} />
        <FormulaBlock latex={String.raw`(\sin x)' = \cos x`} />
        <FormulaBlock latex={String.raw`(\cos x)' = -\sin x`} />
        <FormulaBlock latex={String.raw`(\tan x)' = \sec^2 x`} />
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

      <Expandable id="h-ex-12-1" title="Exercise 12.1">
        <p>Evaluate the following limits (Exercises 1–22):</p>
        <ol>
          <li><Formula>{String.raw`\lim_{x \to 3} (x + 3)`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to \pi} \left(x - \frac{22}{7}\right)`}</Formula></li>
          <li><Formula>{String.raw`\lim_{r \to 1} \pi r^2`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 4} \frac{4x + 3}{x - 2}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to -1} \frac{x^{10} + x^5 + 1}{x - 1}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{(x + 1)^5 - 1}{x}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 2} \frac{3x^2 - x - 10}{x^2 - 4}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 3} \frac{x^4 - 81}{2x^2 - 5x - 3}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{ax + b}{cx + 1}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{z \to 1} \frac{z^{1/3} - 1}{z^{1/6} - 1}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{ax^2 + bx + c}{bx^2 + cx + a}`}</Formula>, where a, b, c are constants and a + b + c ≠ 0</li>
          <li><Formula>{String.raw`\lim_{x \to -1} \frac{x^2 + 1}{x + 1}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{\sin ax}{bx}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{\sin ax}{\sin bx}`}</Formula>, a, b ≠ 0</li>
          <li><Formula>{String.raw`\lim_{x \to \pi} \frac{\sin(\pi - x)}{\pi(\pi - x)}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{\cos x}{\pi - x}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{\cos 2x - 1}{\cos x - 1}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{\cos ax - \cos bx}{x^2}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{\sec x - 1}{x^2}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{\sin ax + bx}{ax + \sin bx}`}</Formula>, a, b, a + b ≠ 0</li>
          <li><Formula>{String.raw`\lim_{x \to 0} (\csc x - \cot x)`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to \frac{\pi}{2}} \frac{\tan 2x}{\pi - 2x}`}</Formula></li>
        </ol>
        <p>Find limits of the following functions (Exercises 23–32):</p>
        <ol start={23}>
          <li>Find <Formula>{String.raw`\lim_{x \to 0} f(x)`}</Formula> and <Formula>{String.raw`\lim_{x \to 1} f(x)`}</Formula>, where{" "}
            <Formula>{String.raw`f(x) = \begin{cases} x + 3, & x \le 0 \\ x + 1, & x > 0 \end{cases}`}</Formula></li>
          <li>Find <Formula>{String.raw`\lim_{x \to 1} f(x)`}</Formula>, where{" "}
            <Formula>{String.raw`f(x) = \begin{cases} x^2 - 1, & x \le 1 \\ -x^2 - 1, & x > 1 \end{cases}`}</Formula></li>
          <li>Evaluate <Formula>{String.raw`\lim_{x \to 0} f(x)`}</Formula>, where{" "}
            <Formula>{String.raw`f(x) = \begin{cases} \frac{|x|}{x}, & x \ne 0 \\ 0, & x = 0 \end{cases}`}</Formula></li>
          <li>Find <Formula>{String.raw`\lim_{x \to 0} f(x)`}</Formula>, where{" "}
            <Formula>{String.raw`f(x) = \begin{cases} \frac{x}{|x|}, & x \ne 0 \\ 0, & x = 0 \end{cases}`}</Formula></li>
          <li>Find <Formula>{String.raw`\lim_{x \to 5} f(x)`}</Formula>, where <Formula>{String.raw`f(x) = |x - 5|`}</Formula></li>
          <li>Suppose <Formula>{String.raw`f(x) = \begin{cases} ax + b, & x < 1 \\ 4, & x = 1 \\ bx + a, & x > 1 \end{cases}`}</Formula> and <Formula>{String.raw`\lim_{x \to 1} f(x) = f(1)`}</Formula>. What are the possible values of a and b?</li>
          <li>Let a₁, a₂, …, aₙ be fixed real numbers and define <Formula>{String.raw`f(x) = (x - a_1)(x - a_2) \cdots (x - a_n)`}</Formula>. What is <Formula>{String.raw`\lim_{x \to a_1} f(x)`}</Formula>? For some a ≠ a₁, a₂, …, aₙ, compute <Formula>{String.raw`\lim_{x \to a} f(x)`}</Formula>.</li>
          <li>If <Formula>{String.raw`f(x) = \begin{cases} 1 + x, & x < 0 \\ 0, & x = 0 \\ 1 - x, & x > 0 \end{cases}`}</Formula>, for what value(s) of a does <Formula>{String.raw`\lim_{x \to a} f(x)`}</Formula> exist?</li>
          <li>If the function f(x) satisfies <Formula>{String.raw`\lim_{x \to 1} \frac{f(x) - 2}{x^2 - 1} = \pi`}</Formula>, evaluate <Formula>{String.raw`\lim_{x \to 1} f(x)`}</Formula>.</li>
          <li>If <Formula>{String.raw`f(x) = \begin{cases} mx^2 + n, & x < 0 \\ nx + m, & 0 \le x \le 1 \\ nx^3 + m, & x > 1 \end{cases}`}</Formula>, for what integers m and n do both <Formula>{String.raw`\lim_{x \to 0} f(x)`}</Formula> and <Formula>{String.raw`\lim_{x \to 1} f(x)`}</Formula> exist?</li>
        </ol>
        <Expandable title="Answer Key — Exercise 12.1">
          <p><strong>Exercises 1–22:</strong></p>
          <ol>
            <li><Formula>{String.raw`\lim_{x \to 3}(x + 3) = 6`}</Formula></li>
            <li><Formula>{String.raw`\lim_{x \to \pi}\left(x - \frac{22}{7}\right) = \pi - \frac{22}{7}`}</Formula></li>
            <li><Formula>{String.raw`\lim_{r \to 1} \pi r^2 = \pi`}</Formula></li>
            <li><Formula>{String.raw`\lim_{x \to 4}\frac{4x + 3}{x - 2} = \frac{19}{2}`}</Formula></li>
            <li><Formula>{String.raw`\lim_{x \to -1}\frac{x^{10} + x^5 + 1}{x - 1} = \frac{1}{2}`}</Formula></li>
            <li>Put x + 1 = y so y → 1 as x → 0. Then <Formula>{String.raw`\frac{y^5 - 1}{y - 1} \to 5`}</Formula>. Answer: <strong>5</strong>.</li>
            <li>Factor: <Formula>{String.raw`\frac{(x - 2)(3x + 5)}{(x - 2)(x + 2)} = \frac{3x + 5}{x + 2} \to \frac{11}{4}`}</Formula>.</li>
            <li>Factor: <Formula>{String.raw`\frac{(x - 3)(x + 3)(x^2 + 9)}{(x - 3)(2x + 1)} = \frac{(x + 3)(x^2 + 9)}{2x + 1} \to \frac{108}{7}`}</Formula>.</li>
            <li><Formula>{String.raw`\lim_{x \to 0}\frac{ax + b}{cx + 1} = b`}</Formula>.</li>
            <li>Put z = t⁶ so z → 1 means t → 1. Then <Formula>{String.raw`\frac{t^2 - 1}{t - 1} = t + 1 \to 2`}</Formula>.</li>
            <li><Formula>{String.raw`\lim_{x \to 0}\frac{ax^2 + bx + c}{bx^2 + cx + a} = \frac{c}{a}`}</Formula>.</li>
            <li>Direct substitution: <Formula>{String.raw`\frac{(-1)^2 + 1}{-1 + 1} = \frac{2}{0}`}</Formula>. Limit does not exist (approaches ∞).</li>
            <li><Formula>{String.raw`\frac{a}{b} \cdot \lim_{x \to 0}\frac{\sin ax}{ax} = \frac{a}{b}`}</Formula>.</li>
            <li><Formula>{String.raw`\frac{a}{b} \cdot \frac{\lim \sin ax / ax}{\lim \sin bx / bx} = \frac{a}{b}`}</Formula>.</li>
            <li>Put π − x = t. Then <Formula>{String.raw`\frac{\sin t}{\pi t} \to \frac{1}{\pi}`}</Formula>.</li>
            <li>Direct substitution: <Formula>{String.raw`\frac{\cos 0}{\pi - 0} = \frac{1}{\pi}`}</Formula>.</li>
            <li><Formula>{String.raw`\frac{1 - \cos 2x}{1 - \cos x} = \frac{2\sin^2 x}{2\sin^2(x/2)} = \frac{\sin^2 x}{\sin^2(x/2)}`}</Formula>. Using <Formula>{String.raw`\frac{\sin x}{x} \to 1`}</Formula>, answer: <strong>4</strong>.</li>
            <li><Formula>{String.raw`\frac{-2\sin\frac{(a+b)x}{2}\sin\frac{(a-b)x}{2}}{x^2} = -\frac{(a+b)}{2}\cdot\frac{\sin\frac{(a+b)x}{2}}{\frac{(a+b)x}{2}} \cdot \frac{(a-b)}{2}\cdot\frac{\sin\frac{(a-b)x}{2}}{\frac{(a-b)x}{2}} \to \frac{b^2 - a^2}{2}`}</Formula>.</li>
            <li><Formula>{String.raw`\frac{\sec x - 1}{x^2} = \frac{1 - \cos x}{x^2 \cos x} \to \frac{1}{2} \cdot 1 = \frac{1}{2}`}</Formula>.</li>
            <li><Formula>{String.raw`\frac{a + b}{a + b} = 1`}</Formula>. Here numerator <Formula>{String.raw`\sin ax + bx \sim (a + b)x`}</Formula> and denominator <Formula>{String.raw`ax + \sin bx \sim (a + b)x`}</Formula>, so the ratio → 1.</li>
            <li><Formula>{String.raw`\frac{1 - \cos x}{\sin x} = \frac{2\sin^2(x/2)}{2\sin(x/2)\cos(x/2)} = \tan(x/2) \to 0`}</Formula>.</li>
            <li>Put 2x = t so x → π/2 means t → π. Then <Formula>{String.raw`\frac{\tan t}{\pi - t} \cdot 2`}</Formula>. Using <Formula>{String.raw`\lim_{t \to \pi}\frac{\tan t}{\pi - t} = 1`}</Formula>, answer: <strong>2</strong>.</li>
          </ol>
          <p><strong>Exercises 23–32:</strong></p>
          <ol start={23}>
            <li>At x = 0: LHL = 3, RHL = 1, so <Formula>{String.raw`\lim_{x \to 0} f(x)`}</Formula> does not exist. At x = 1: LHL = 2, RHL = 2, so <Formula>{String.raw`\lim_{x \to 1} f(x) = 2`}</Formula>.</li>
            <li>LHL at x = 1: <Formula>{String.raw`1^2 - 1 = 0`}</Formula>. RHL: <Formula>{String.raw`-1^2 - 1 = -2`}</Formula>. Limit does not exist.</li>
            <li>RHL: |x|/x = 1. LHL: |x|/x = −1. Limit does not exist.</li>
            <li>RHL: x/|x| = 1. LHL: x/|x| = −1. Limit does not exist.</li>
            <li><Formula>{String.raw`\lim_{x \to 5}|x - 5| = 0`}</Formula> (direct substitution).</li>
            <li>LHL: a + b. RHL: b + a. For limit = f(1) = 4, need a + b = 4. Infinitely many solutions.</li>
            <li><Formula>{String.raw`\lim_{x \to a_1} f(x) = 0`}</Formula> (one factor vanishes). For a ≠ any aᵢ, <Formula>{String.raw`\lim_{x \to a} f(x) = (a - a_1)(a - a_2)\cdots(a - a_n)`}</Formula>.</li>
            <li>The limit exists for all a ≠ 0 (i.e. everywhere except possibly x = 0). At x = 0: LHL = 1, RHL = 1, so limit exists there too. Answer: limit exists for all real a.</li>
            <li>Since x² − 1 → 0, we need f(x) − 2 → 0, so <Formula>{String.raw`\lim_{x \to 1} f(x) = 2`}</Formula>. But more precisely, <Formula>{String.raw`\lim_{x \to 1}\frac{f(x) - 2}{x^2 - 1} = \pi`}</Formula> means f(x) − 2 ~ π(x² − 1), so <Formula>{String.raw`\lim_{x \to 1} f(x) = 2`}</Formula>.</li>
            <li>At x = 0: need n = m. At x = 1: need n + m = 1. So m = n = 1/2. But these are not integers, so no integer values of m and n satisfy both conditions.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable id="h-ex-12-2" title="Exercise 12.2">
        <ol>
          <li>Find the derivative of x² − 2 at x = 10.</li>
          <li>Find the derivative of x at x = 1.</li>
          <li>Find the derivative of 99x at x = 100.</li>
          <li>Find the derivative of the following functions from first principle:
            <ol type="i">
              <li>x³ − 27</li>
              <li>(x − 1)(x − 2)</li>
              <li><Formula>{String.raw`\frac{1}{x^2}`}</Formula></li>
              <li><Formula>{String.raw`\frac{x + 1}{x - 1}`}</Formula></li>
            </ol>
          </li>
          <li>For <Formula>{String.raw`f(x) = \frac{x^{100}}{100} + \frac{x^{99}}{99} + \cdots + \frac{x^2}{2} + x + 1`}</Formula>, prove that f&apos;(1) = 100 f&apos;(0).</li>
          <li>Find the derivative of <Formula>{String.raw`x^n + ax^{n-1} + a^2x^{n-2} + \cdots + a^{n-1}x + a^n`}</Formula> for some fixed real number a.</li>
          <li>For some constants a and b, find the derivative of:
            <ol type="i">
              <li>(x − a)(x − b)</li>
              <li><Formula>{String.raw`(ax^2 + b)^2`}</Formula></li>
              <li><Formula>{String.raw`\frac{x - a}{x - b}`}</Formula></li>
            </ol>
          </li>
          <li>Find the derivative of <Formula>{String.raw`\frac{x^n - a^n}{x - a}`}</Formula> for some constant a.</li>
          <li>Find the derivative of:
            <ol type="i">
              <li><Formula>{String.raw`x^3 - 4x^2 + 3x + 1`}</Formula></li>
              <li><Formula>{String.raw`x^3 + 5`}</Formula></li>
              <li><Formula>{String.raw`x^3 - 5`}</Formula></li>
              <li><Formula>{String.raw`\frac{x^5}{5} - \frac{x^4}{4} + \frac{x^3}{3} - \frac{x^2}{2} + x - 1`}</Formula></li>
            </ol>
          </li>
          <li>Find the derivative of cos x from first principle.</li>
          <li>Find the derivative of the following functions:
            <ol type="i">
              <li>sin x cos x</li>
              <li>sec x</li>
              <li>5 sec x + 4 cos x</li>
              <li>cosec x</li>
              <li>3 cot x + 5 cosec x</li>
              <li>5 sin x − 6 cos x + 7</li>
              <li>2 tan x − 7 sec x</li>
            </ol>
          </li>
        </ol>
        <Expandable title="Answer Key — Exercise 12.2">
          <ol>
            <li>f&apos;(10) = 2(10) = <strong>20</strong>. (Using f&apos;(x) = 2x.)</li>
            <li>f&apos;(1) = <strong>1</strong>.</li>
            <li>f&apos;(100) = <strong>99</strong>.</li>
            <li>
              <ol type="i">
                <li>f&apos;(x) = <strong>3x²</strong>.</li>
                <li>f(x) = x² − 3x + 2, so f&apos;(x) = <strong>2x − 3</strong>.</li>
                <li>f&apos;(x) = <strong>−2/x³</strong>.</li>
                <li>Using quotient rule: f&apos;(x) = <Formula>{String.raw`\frac{(x - 1) - (x + 1)}{(x - 1)^2} = \frac{-2}{(x - 1)^2}`}</Formula>.</li>
              </ol>
            </li>
            <li>f&apos;(x) = x⁹⁹ + x⁹⁸ + ⋯ + x + 1. So f&apos;(1) = 1 + 1 + ⋯ + 1 (100 terms) = <strong>100</strong>. And f&apos;(0) = 1. So f&apos;(1) = 100 = 100 · 1 = <strong>100 f&apos;(0)</strong>.</li>
            <li>f&apos;(x) = <strong>n·xⁿ⁻¹ + (n−1)a·xⁿ⁻² + (n−2)a²·xⁿ⁻³ + ⋯ + aⁿ⁻¹</strong>.</li>
            <li>
              <ol type="i">
                <li>f&apos;(x) = (x − b) + (x − a) = <strong>2x − a − b</strong>.</li>
                <li>f&apos;(x) = 2(ax² + b) · 2ax = <strong>4ax(ax² + b)</strong>.</li>
                <li>f&apos;(x) = <Formula>{String.raw`\frac{(x - b) - (x - a)}{(x - b)^2} = \frac{a - b}{(x - b)^2}`}</Formula>.</li>
              </ol>
            </li>
            <li>Using the standard limit result: f&apos;(x) = <strong>n·aⁿ⁻¹</strong>.</li>
            <li>
              <ol type="i">
                <li>f&apos;(x) = <strong>3x² − 8x + 3</strong>.</li>
                <li>f&apos;(x) = <strong>3x²</strong>.</li>
                <li>f&apos;(x) = <strong>3x²</strong>.</li>
                <li>f&apos;(x) = <strong>x⁴ − x³ + x² − x + 1</strong>.</li>
              </ol>
            </li>
            <li>f&apos;(x) = <Formula>{String.raw`\lim_{h \to 0}\frac{\cos(x+h) - \cos x}{h} = -\sin x`}</Formula>.</li>
            <li>
              <ol type="i">
                <li>f&apos;(x) = cos²x − sin²x = <strong>cos 2x</strong>.</li>
                <li>f&apos;(x) = <strong>sec x tan x</strong>.</li>
                <li>f&apos;(x) = <strong>5 sec x tan x − 4 sin x</strong>.</li>
                <li>f&apos;(x) = <strong>−cosec x cot x</strong>.</li>
                <li>f&apos;(x) = <strong>−3 cosec²x − 5 cosec x cot x</strong>.</li>
                <li>f&apos;(x) = <strong>5 cos x + 6 sin x</strong>.</li>
                <li>f&apos;(x) = <strong>2 sec²x − 7 sec x tan x</strong>.</li>
              </ol>
            </li>
          </ol>
        </Expandable>
      </Expandable>

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
