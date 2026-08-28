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
      <h2 id="h-limits">12.2–12.3 Intuitive Idea of Derivatives &amp; Limits</h2>
      <Callout type="important" title="Definition of a Limit">
        A limit describes the value that a function <Formula>{String.raw`f(x)`}</Formula> approaches as <Formula>{String.raw`x`}</Formula> approaches a specific value <Formula>{String.raw`a`}</Formula> (written as <FormulaBlock latex={String.raw`\lim_{x \to a} f(x) = L`} />), where <Formula>{String.raw`x`}</Formula> gets closer to <Formula>{String.raw`a`}</Formula> but never has to equal it (<Formula>{String.raw`x \ne a`}</Formula>). In simple words: you can make <Formula>{String.raw`f(x)`}</Formula> as close to <Formula>{String.raw`L`}</Formula> as you want, just by taking <Formula>{String.raw`x`}</Formula> close enough to <Formula>{String.raw`a`}</Formula>. What <Formula>{String.raw`f(a)`}</Formula> actually equals does not matter — only nearby values do.
        <p className="mt-3">Values can approach <Formula>{String.raw`a`}</Formula> from the left (e.g. <Formula>{String.raw`1.9, 1.99, 1.999`}</Formula> when <Formula>{String.raw`a=2`}</Formula>) or from the right (e.g. <Formula>{String.raw`2.1, 2.01, 2.001`}</Formula>).</p>
        <p className="font-semibold mt-3">Two Types of Limits:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Left-Hand Limit (LHL):</strong> <Formula>{String.raw`\lim_{x \to a^{-}} f(x)`}</Formula> — approached from values less than <Formula>{String.raw`a`}</Formula>.</li>
          <li><strong>Right-Hand Limit (RHL):</strong> <Formula>{String.raw`\lim_{x \to a^{+}} f(x)`}</Formula> — approached from values greater than <Formula>{String.raw`a`}</Formula>.</li>
        </ul>
        <p className="font-semibold mt-3">Existence of a Limit:</p>
        <p>A limit <Formula>{String.raw`\lim_{x \to a} f(x)`}</Formula> exists iff LHL and RHL both exist and are equal: <Formula>{String.raw`\text{LHL}=\text{RHL}`}</Formula>. If <Formula>{String.raw`\text{LHL}\ne\text{RHL}`}</Formula>, the limit does not exist.</p>
      </Callout>

      <KeyPoint>Key idea: <Highlight>the limit describes behaviour near a point, not at the point</Highlight>. f(a) may be undefined or different from L.</KeyPoint>

      <Expandable title="Example — LHL vs RHL at a Jump (Graph)">
        <ProblemSolution problemNumber="Example — Graph at x = 1">
          <ProblemSolution.Problem>
            Graph of a function <Formula>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Formula> is given below:
            <br />(i) Find <Formula>{String.raw`\lim_{x \to 1^{-}} f(x)`}</Formula> and <Formula>{String.raw`\lim_{x \to 1^{+}} f(x)`}</Formula>.
            <br />(ii) Does the limit <Formula>{String.raw`\lim_{x \to 1} f(x)`}</Formula> exist? Give reason.
            <div className="my-4 flex justify-center">
              <figure className="rounded-xl border border-border/60 bg-white dark:bg-zinc-900 p-3">
                <svg viewBox="0 0 420 320" className="w-[380px] max-w-full h-auto" role="img" aria-labelledby="jumpGraphTitle jumpGraphDesc">
                  <title id="jumpGraphTitle">Piecewise graph with jump at x = 1</title>
                  <desc id="jumpGraphDesc">Cartesian system x -3 to 4, y -1 to 6. Approaching x=1 from left the curve goes to y=1, from right it starts at y=2. Purple dashed indicators highlight LHL=1 and RHL=2 showing LHL != RHL.</desc>
                  {/* grid */}
                  <rect x="40" y="20" width="360" height="260" fill="none" stroke="#e5e7eb" strokeWidth="1" rx="6" />
                  {/* axes */}
                  <line x1="40" y1="240" x2="400" y2="240" stroke="#6b7280" strokeWidth="1.5" />
                  <line x1="140" y1="20" x2="140" y2="280" stroke="#6b7280" strokeWidth="1.5" />
                  {/* x ticks -3 to 4 */}
                  <text x="48" y="255" fontSize="11" fill="#6b7280">-3</text>
                  <text x="98" y="255" fontSize="11" fill="#6b7280">-2</text>
                  <text x="118" y="255" fontSize="11" fill="#6b7280">-1</text>
                  <text x="158" y="255" fontSize="11" fill="#6b7280">0</text>
                  <text x="208" y="255" fontSize="11" fill="#6b7280">1</text>
                  <text x="258" y="255" fontSize="11" fill="#6b7280">2</text>
                  <text x="308" y="255" fontSize="11" fill="#6b7280">3</text>
                  <text x="358" y="255" fontSize="11" fill="#6b7280">4</text>
                  {/* y ticks -1 to 6 */}
                  <text x="15" y="285" fontSize="11" fill="#6b7280">-1</text>
                  <text x="20" y="245" fontSize="11" fill="#6b7280">0</text>
                  <text x="20" y="205" fontSize="11" fill="#6b7280">1</text>
                  <text x="20" y="165" fontSize="11" fill="#6b7280">2</text>
                  <text x="20" y="125" fontSize="11" fill="#6b7280">3</text>
                  <text x="20" y="85" fontSize="11" fill="#6b7280">4</text>
                  <text x="20" y="45" fontSize="11" fill="#6b7280">5</text>
                  {/* left branch up to (1,1) */}
                  <path d="M 50 180 Q 110 150 190 205" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                  <circle cx="190" cy="205" r="5" fill="white" stroke="#9333ea" strokeWidth="2.5" />
                  <circle cx="190" cy="205" r="2" fill="#9333ea" />
                  {/* right branch from (1,2) */}
                  <path d="M 190 165 Q 250 140 380 60" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                  <circle cx="190" cy="165" r="5" fill="#9333ea" stroke="#9333ea" strokeWidth="2" />
                  {/* purple dashed indicators */}
                  <line x1="190" y1="205" x2="190" y2="240" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="40" y1="205" x2="190" y2="205" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="190" y1="165" x2="190" y2="240" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="40" y1="165" x2="190" y2="165" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="6 4" />
                  {/* labels */}
                  <text x="195" y="200" fontSize="12" fill="#9333ea" fontWeight="600">LHL = 1</text>
                  <text x="195" y="160" fontSize="12" fill="#9333ea" fontWeight="600">RHL = 2</text>
                  <text x="190" y="292" fontSize="11" fill="#6b7280">x = 1</text>
                  <text x="405" y="245" fontSize="12" fill="#6b7280">x</text>
                  <text x="135" y="15" fontSize="12" fill="#6b7280">y</text>
                </svg>
                <figcaption className="mt-2 text-xs text-muted-foreground text-center max-w-[380px]">Jump discontinuity at <Formula>{String.raw`x=1`}</Formula>: left approach → <Formula>{String.raw`y=1`}</Formula>, right approach → <Formula>{String.raw`y=2`}</Formula> (purple dashes). Since <Formula>{String.raw`\text{LHL}\ne\text{RHL}`}</Formula>, the two-sided limit does not exist.</figcaption>
              </figure>
            </div>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "LHL", description: <Formula>{String.raw`\lim_{x \to 1^{-}} f(x) = 1`}</Formula> },
                { label: "RHL", description: <Formula>{String.raw`\lim_{x \to 1^{+}} f(x) = 2`}</Formula> },
                { label: "Existence", description: <><Formula>{String.raw`\text{LHL}=1 \ne 2=\text{RHL}`}</Formula> — so <Formula>{String.raw`\lim_{x \to 1} f(x)`}</Formula> does not exist</> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">Visually, the purple dashed lines at <Formula>{String.raw`y=1`}</Formula> and <Formula>{String.raw`y=2`}</Formula> never meet at <Formula>{String.raw`x=1`}</Formula> — the graph jumps.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Algebra of Limits</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Limit Laws</p>
        <FormulaBlock latex={String.raw`\lim_{x \to a}[f(x) + g(x)] = \lim_{x \to a}f(x) + \lim_{x \to a}g(x)`} />
        <FormulaBlock latex={String.raw`\lim_{x \to a}[f(x) \cdot g(x)] = \lim_{x \to a}f(x) \cdot \lim_{x \to a}g(x)`} />
        <FormulaBlock latex={String.raw`\lim_{x \to a}\frac{f(x)}{g(x)} = \frac{\lim_{x \to a}f(x)}{\lim_{x \to a}g(x)}, \quad \lim_{x \to a}g(x) \ne 0`} />
        <FormulaBlock latex={String.raw`\lim_{x \to a}[k \cdot f(x)] = k \cdot \lim_{x \to a}f(x)`} />
        <p className="text-sm text-muted-foreground mt-2">These hold provided the individual limits on the right exist (and denominator ≠ 0).</p>
      </FormulaCard>

      <h2 id="h-methods">Methods to Find Limits</h2>

      <h3>Direct Method</h3>
      <Callout type="note" title="Direct Substitution">
        For finding <Formula>{String.raw`\lim_{x \to a} f(x)`}</Formula>, substitute <Formula>{String.raw`x=a`}</Formula> in <Formula>{String.raw`f(x)`}</Formula>. If <Formula>{String.raw`f(a)`}</Formula> is a finite number, then <Formula>{String.raw`f(a)`}</Formula> is the required limit.
      </Callout>
      <ul>
        <li><Formula>{String.raw`\lim_{x \to 5} (x+2) = 5+2 = 7`}</Formula></li>
        <li>Evaluate <Formula>{String.raw`\lim_{x \to 3} (x+3)`}</Formula>: <Formula>{String.raw`3+3 = 6`}</Formula></li>
        <li>Evaluate <Formula>{String.raw`\lim_{r \to 1} \pi r^{2}`}</Formula>: <Formula>{String.raw`\pi \times 1^{2} = \pi`}</Formula></li>
        <li>Evaluate <Formula>{String.raw`\lim_{x \to 4} \frac{4x+3}{x-2}`}</Formula>: <Formula>{String.raw`\frac{4(4)+3}{4-2} = \frac{19}{2}`}</Formula></li>
        <li>Evaluate <Formula>{String.raw`\lim_{x \to 0} \frac{ax+b}{cx+1}`}</Formula>: <Formula>{String.raw`\frac{a(0)+b}{c(0)+1} = b`}</Formula></li>
      </ul>

      <h3>By Factorisation</h3>
      <Callout type="tip" title="When to Factorise">
        If direct substitution gives <Formula>{String.raw`\frac{0}{0}`}</Formula> (indeterminate), factorise numerator and denominator, cancel the common factor <Formula>{String.raw`(x-a)`}</Formula>, then substitute again.
      </Callout>

      <Expandable title="Factorisation — Worked Examples">
        <ProblemSolution problemNumber="Ex A">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to 2} \frac{x-2}{x^{2}-4}`}</Formula> — direct gives <Formula>{String.raw`\frac{0}{0}`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Factor denominator", description: <Formula>{String.raw`x^{2}-4 = (x-2)(x+2)`}</Formula> },
                { label: "Cancel", description: <Formula>{String.raw`\frac{x-2}{(x-2)(x+2)} = \frac{1}{x+2}`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`\frac{1}{2+2} = \frac{1}{4}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Ex B">
          <ProblemSolution.Problem>
            Find <Formula>{String.raw`\lim_{x \to 3} \frac{x-3}{x^{2}-9}`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Factor", description: <Formula>{String.raw`x^{2}-9 = (x-3)(x+3)`}</Formula> },
                { label: "Cancel", description: <Formula>{String.raw`\frac{x-3}{(x-3)(x+3)} = \frac{1}{x+3}`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`\frac{1}{3+3} = \frac{1}{6}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Ex C">
          <ProblemSolution.Problem>
            Find <Formula>{String.raw`\lim_{x \to 3} \frac{x^{2}-4x+3}{x-3}`}</Formula> — note <Formula>{String.raw`x^{2}-4x+3 = (x-1)(x-3)`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Factor numerator", description: <Formula>{String.raw`x^{2}-4x+3 = (x-1)(x-3)`}</Formula> },
                { label: "Cancel", description: <Formula>{String.raw`\frac{(x-1)(x-3)}{x-3} = x-1`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`3-1 = 2`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Ex D">
          <ProblemSolution.Problem>
            Find <Formula>{String.raw`\lim_{x \to 2} \frac{x^{3}-2x^{2}}{x^{2}-5x+6}`}</Formula> — note <Formula>{String.raw`x^{2}-5x+6 = (x-2)(x-3)`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Factor numerator", description: <Formula>{String.raw`x^{3}-2x^{2} = x^{2}(x-2)`}</Formula> },
                { label: "Cancel", description: <Formula>{String.raw`\frac{x^{2}(x-2)}{(x-2)(x-3)} = \frac{x^{2}}{x-3}`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`\frac{2^{2}}{2-3} = \frac{4}{-1} = -4`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Ex E">
          <ProblemSolution.Problem>
            Find <Formula>{String.raw`\lim_{x \to -2} \frac{\frac{1}{x}+\frac{1}{2}}{x+2}`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Combine numerator", description: <Formula>{String.raw`\frac{1}{x}+\frac{1}{2} = \frac{2+x}{2x}`}</Formula> },
                { label: "Divide by (x+2)", description: <Formula>{String.raw`\frac{(2+x)/2x}{x+2} = \frac{1}{2x}`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`\frac{1}{2(-2)} = -\frac{1}{4}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Practice — 4 Limits (Fully Solved)">
        <ProblemSolution problemNumber="Q1">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to -1} \frac{x^{2}-5x+6}{x-1}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Substitute x = −1", description: <Formula>{String.raw`\frac{(-1)^{2}-5(-1)+6}{-1-1}`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`\frac{1+5+6}{-2} = \frac{12}{-2} = -6`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{-6}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Q2">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to -4} \frac{2x+8}{x^{2}+x-12}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Factor numerator", description: <Formula>{String.raw`2x+8 = 2(x+4)`}</Formula> },
                { label: "Factor denominator", description: <Formula>{String.raw`x^{2}+x-12 = (x+4)(x-3)`}</Formula> },
                { label: "Cancel", description: <Formula>{String.raw`\frac{2(x+4)}{(x+4)(x-3)} = \frac{2}{x-3}`}</Formula> },
                { label: "Put x = −4", description: <Formula>{String.raw`\frac{2}{-4-3} = -\frac{2}{7}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{-\tfrac{2}{7}}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Q3">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to 2} [x]`}</Formula> where <Formula>{String.raw`[x]`}</Formula> is the greatest integer (floor) function.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Left of 2", description: <><Formula>{String.raw`x=1.9,1.99,1.999 \Rightarrow [x]=1`}</Formula> so <Formula>{String.raw`\lim_{x \to 2^{-}}[x]=1`}</Formula></> },
                { label: "Right of 2", description: <><Formula>{String.raw`x=2.1,2.01 \Rightarrow [x]=2`}</Formula> so <Formula>{String.raw`\lim_{x \to 2^{+}}[x]=2`}</Formula></> },
                { label: "Compare", description: <><Formula>{String.raw`1 \ne 2`}</Formula> — LHL ≠ RHL, so limit <Formula>{String.raw`\text{DNE}`}</Formula></> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{\text{DNE}}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Q4">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to 0} \frac{\cos 9x - \cos 5x}{\sin 17x - \sin 3x}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Numerator identity", description: <Formula>{String.raw`\cos A-\cos B=-2\sin\frac{A+B}{2}\sin\frac{A-B}{2} \Rightarrow -2\sin 7x\sin 2x`}</Formula> },
                { label: "Denominator identity", description: <Formula>{String.raw`\sin A-\sin B=2\cos\frac{A+B}{2}\sin\frac{A-B}{2} \Rightarrow 2\cos 10x\sin 7x`}</Formula> },
                { label: "Substitute & cancel", description: <Formula>{String.raw`\frac{-2\sin 7x\sin 2x}{2\cos 10x\sin 7x} = -\frac{\sin 2x}{\cos 10x}`}</Formula> },
                { label: "Put x = 0", description: <Formula>{String.raw`-\frac{\sin 0}{\cos 0} = -\frac{0}{1}=0`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{0}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <KeyPoint title="Special Limit (Crucial)">
        <FormulaCard>
          <FormulaBlock latex={String.raw`\lim_{x \to a} \frac{x^n - a^n}{x - a} = n \cdot a^{n-1}`} />
          <p className="text-sm text-muted-foreground mt-2">
            Valid for any positive integer n and any real number a.
            This is the &ldquo;standard limit&rdquo; used throughout calculus.
          </p>
        </FormulaCard>
      </KeyPoint>

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
