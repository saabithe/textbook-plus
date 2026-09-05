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

      <Callout type="important" title="Condition for the Existence of a Limit">
        A limit <Formula>{String.raw`\lim_{x \to a} f(x)`}</Formula> exists iff LHL = RHL:
        <FormulaBlock latex={String.raw`\text{L.H.L.} = \text{R.H.L.}`} />
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>General:</strong> <Formula>{String.raw`\lim_{x \to a} f(x)`}</Formula></li>
          <li><strong>L.H.L.:</strong> <Formula>{String.raw`\lim_{x \to a^{-}} f(x)`}</Formula></li>
          <li><strong>R.H.L.:</strong> <Formula>{String.raw`\lim_{x \to a^{+}} f(x)`}</Formula></li>
        </ul>
      </Callout>

      <Expandable title="Example 1 — Piecewise at x = 0 (2x+3 / 3(x+1))">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            Find <Formula>{String.raw`\lim_{x \to 0} f(x)`}</Formula> where <Formula>{String.raw`f(x)=\begin{cases}2x+3,&x\le0\\3(x+1),&x>0\end{cases}`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "L.H.L. (x ≤ 0)", description: <Formula>{String.raw`\lim_{x \to 0^{-}}(2x+3)=2(0)+3=3`}</Formula> },
                { label: "R.H.L. (x > 0)", description: <Formula>{String.raw`\lim_{x \to 0^{+}}3(x+1)=3(0+1)=3`}</Formula> },
                { label: "Conclusion", description: <><Formula>{String.raw`3=3`}</Formula> — LHL = RHL, so <Formula>{String.raw`\lim_{x \to 0}f(x)=3`}</Formula></> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Example 2 — Signum at x = 0 (|x|/x)">
        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            Find <Formula>{String.raw`\lim_{x \to 0} f(x)`}</Formula> if it exists, where <Formula>{String.raw`f(x)=\begin{cases}\frac{|x|}{x},&x\ne0\\0,&x=0\end{cases}`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="text-sm text-muted-foreground mb-3"><Formula>{String.raw`|x|=\begin{cases}x,&x\ge0\\-x,&x<0\end{cases}`}</Formula> so <Formula>{String.raw`f(x)=-1\;(x<0),\;1\;(x>0)`}</Formula>.</p>
            <Stepper
              steps={[
                { label: "L.H.L.", description: <Formula>{String.raw`\lim_{x \to 0^{-}}f(x)=-1`}</Formula> },
                { label: "R.H.L.", description: <Formula>{String.raw`\lim_{x \to 0^{+}}f(x)=1`}</Formula> },
                { label: "Conclusion", description: <><Formula>{String.raw`-1\ne1`}</Formula> — LHL ≠ RHL, so <Formula>{String.raw`\lim_{x \to 0}f(x)`}</Formula> does not exist (<Formula>{String.raw`\text{DNE}`}</Formula>)</> },
              ]}
            />
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

      <Expandable title="Practice — Fully Solved Limits (15 Problems)">
        <ProblemSolution problemNumber="1 — Direct Substitution">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to -1} \frac{x^{2}-5x+6}{x-1}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Substitute x = −1", description: <Formula>{String.raw`\frac{(-1)^{2}-5(-1)+6}{-1-1} = \frac{1+5+6}{-2}`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`\frac{12}{-2} = -6`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{-6}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="2 — Factorisation at x = −4">
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

        <ProblemSolution problemNumber="3 — Greatest Integer at x = 2">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to 2} [x]`}</Formula> where <Formula>{String.raw`[x]`}</Formula> is the greatest integer (floor) function.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Left of 2", description: <><Formula>{String.raw`x=1.9,1.99 \Rightarrow [x]=1`}</Formula> so <Formula>{String.raw`\lim_{x \to 2^{-}}[x]=1`}</Formula></> },
                { label: "Right of 2", description: <><Formula>{String.raw`x=2.1,2.01 \Rightarrow [x]=2`}</Formula> so <Formula>{String.raw`\lim_{x \to 2^{+}}[x]=2`}</Formula></> },
                { label: "Compare", description: <><Formula>{String.raw`1 \ne 2`}</Formula> — LHL ≠ RHL, so <Formula>{String.raw`\text{DNE}`}</Formula></> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{\text{DNE}}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="4 — cos9x−cos5x over sin17x−sin3x at 0">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to 0} \frac{\cos 9x - \cos 5x}{\sin 17x - \sin 3x}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Numerator", description: <Formula>{String.raw`\cos A-\cos B=-2\sin\frac{A+B}{2}\sin\frac{A-B}{2} \Rightarrow -2\sin 7x\sin 2x`}</Formula> },
                { label: "Denominator", description: <Formula>{String.raw`\sin A-\sin B=2\cos\frac{A+B}{2}\sin\frac{A-B}{2} \Rightarrow 2\cos 10x\sin 7x`}</Formula> },
                { label: "Cancel", description: <Formula>{String.raw`\frac{-2\sin 7x\sin 2x}{2\cos 10x\sin 7x} = -\frac{\sin 2x}{\cos 10x}`}</Formula> },
                { label: "Put x = 0", description: <Formula>{String.raw`-\frac{0}{1}=0`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{0}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="5 — (1−cos4x)/x² at 0">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to 0} \frac{1-\cos 4x}{x^{2}}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Identity", description: <Formula>{String.raw`1-\cos 4x = 2\sin^{2}2x`}</Formula> },
                { label: "Rewrite", description: <Formula>{String.raw`\frac{2\sin^{2}2x}{x^{2}} = 2\left(\frac{\sin 2x}{x}\right)^{2}`}</Formula> },
                { label: "Adjust", description: <Formula>{String.raw`2\left(2\cdot\frac{\sin 2x}{2x}\right)^{2}=8\left(\frac{\sin 2x}{2x}\right)^{2}`}</Formula> },
                { label: "Apply", description: <Formula>{String.raw`8\cdot 1^{2}=8`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{8}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="6 — (√x+√a)/(x+a) at x→a">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to a} \frac{\sqrt{x}+\sqrt{a}}{x+a}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Direct", description: <Formula>{String.raw`\frac{\sqrt{a}+\sqrt{a}}{a+a}=\frac{2\sqrt{a}}{2a}`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`\frac{\sqrt{a}}{a}=\frac{1}{\sqrt{a}}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{\tfrac{1}{\sqrt{a}}\;(a>0)}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="7 — (x³−8)/(x²−4) at 2">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to 2} \frac{x^{3}-8}{x^{2}-4}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Factor", description: <Formula>{String.raw`x^{3}-8=(x-2)(x^{2}+2x+4),\;x^{2}-4=(x-2)(x+2)`}</Formula> },
                { label: "Cancel", description: <Formula>{String.raw`\frac{x^{2}+2x+4}{x+2}`}</Formula> },
                { label: "Put x=2", description: <Formula>{String.raw`\frac{4+4+4}{4}=3`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{3}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="8 — (x⁷−1)/(x⁴−1) at 1">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to 1} \frac{x^{7}-1}{x^{4}-1}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Standard form", description: <Formula>{String.raw`\frac{(x^{7}-1)/(x-1)}{(x^{4}-1)/(x-1)}`}</Formula> },
                { label: "Apply", description: <Formula>{String.raw`\frac{7\cdot1^{6}}{4\cdot1^{3}}=\frac{7}{4}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{\tfrac{7}{4}}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="9 — (cos2x−1)/(cos x−1) at 0 (Method A)">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to 0} \frac{\cos 2x-1}{\cos x-1}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Numerator", description: <Formula>{String.raw`\cos 2x-1=-2\sin^{2}x`}</Formula> },
                { label: "Rewrite", description: <Formula>{String.raw`\frac{-2\sin^{2}x}{-(1-\cos x)}=\frac{2\sin^{2}x}{1-\cos x}`}</Formula> },
                { label: "Divide by x²", description: <Formula>{String.raw`\frac{2(\sin x/x)^{2}}{(1-\cos x)/x^{2}}`}</Formula> },
                { label: "Apply", description: <Formula>{String.raw`\frac{2\cdot1}{1/2}=4`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{4}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="10 — sin ax / (x cos bx) at 0">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to 0} \frac{\sin ax}{x\cos bx}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Rewrite", description: <Formula>{String.raw`\frac{\sin ax}{ax}\cdot\frac{a}{\cos bx}`}</Formula> },
                { label: "Apply", description: <Formula>{String.raw`1\cdot a \cdot 1 = a`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{a}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="11 — (√z−1)/(1−z) at 1">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{z \to 1} \frac{\sqrt{z}-1}{1-z}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Factor denom", description: <Formula>{String.raw`1-z=(1-\sqrt{z})(1+\sqrt{z})`}</Formula> },
                { label: "Cancel", description: <Formula>{String.raw`\frac{\sqrt{z}-1}{-(\sqrt{z}-1)(\sqrt{z}+1)}=-\frac1{\sqrt{z}+1}`}</Formula> },
                { label: "Put z=1", description: <Formula>{String.raw`-\frac1{2}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{-\tfrac12}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="12 — tan(π/4−x)/(π/4−x) at π/4">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to \pi/4} \frac{\tan(\pi/4 - x)}{\pi/4 - x}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Let θ = π/4−x →0", description: <Formula>{String.raw`\lim_{\theta\to0}\frac{\tan\theta}{\theta}=1`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{1}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="13 — sin(π−x)/(π(π−x)) at π">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to \pi} \frac{\sin(\pi-x)}{\pi(\pi-x)}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Let θ=π−x →0", description: <Formula>{String.raw`\frac1\pi\cdot\frac{\sin\theta}{\theta}`}</Formula> },
                { label: "Apply", description: <Formula>{String.raw`\frac1\pi\cdot1=\frac1\pi`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{\tfrac1\pi}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="14 — (x+5)²−25 over x at 0">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to 0} \frac{(x+5)^{2}-25}{x}`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Expand", description: <Formula>{String.raw`x^{2}+10x`}</Formula> },
                { label: "Factor", description: <Formula>{String.raw`x(x+10)/x = x+10`}</Formula> },
                { label: "Put x=0", description: <Formula>{String.raw`10`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{10}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="15 — (xⁿ−2ⁿ)/(x−2)=32 find n">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\lim_{x \to 2} \frac{x^{n}-2^{n}}{x-2}=32`}</Formula> — find <Formula>{String.raw`n`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Standard", description: <Formula>{String.raw`n\cdot2^{\,n-1}=32`}</Formula> },
                { label: "Test n=4", description: <Formula>{String.raw`4\cdot2^{3}=32`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{n=4}`} important />
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
      <Callout type="important" title="Three Fundamental Trigonometric Limits">
        <FormulaCard>
          <FormulaBlock latex={String.raw`\lim_{x \to 0} \frac{\sin x}{x} = 1`} />
          <FormulaBlock latex={String.raw`\lim_{x \to 0} \frac{\tan x}{x} = 1`} />
          <FormulaBlock latex={String.raw`\lim_{x \to 0} \frac{1 - \cos x}{x} = 0`} />
          <p className="text-sm text-muted-foreground mt-2">
            Here x is in <strong>radians</strong>. These three limits are the backbone of all trigonometric derivatives.
          </p>
        </FormulaCard>
      </Callout>

      <Expandable title="Example 3 — Algebraic Limit via Standard Form">
        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            Evaluate <Formula>{String.raw`\lim_{x \to 0} \frac{\sqrt{1+x}-1}{x}`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Rewrite in standard form", description: <Formula>{String.raw`\frac{(1+x)^{1/2}-1^{1/2}}{(1+x)-1}`}</Formula> },
                { label: "Apply", description: <Formula>{String.raw`\lim_{(1+x)\to 1}\frac{(1+x)^{1/2}-1^{1/2}}{(1+x)-1} = \frac12(1)^{-1/2} = \frac12`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <KeyPoint>
        The angle x in sin x, cos x must be in <Highlight>radians</Highlight> for these limits to hold.
        In degrees, lim(x→0) sin x°/x ≠ 1.
      </KeyPoint>

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

      <Expandable title="More Trigonometric Limits — sin ax / sin bx, sin ax / bx, tan x / x, cos shift">
        <ProblemSolution problemNumber="Example 2 — sin 4x / sin 2x">
          <ProblemSolution.Problem>
            Evaluate <Formula>{String.raw`\lim_{x \to 0} \frac{\sin 4x}{\sin 2x}`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Separate", description: <Formula>{String.raw`\frac{\sin 4x}{4x}\cdot 4x \Big/ \left(\frac{\sin 2x}{2x}\cdot 2x\right)`}</Formula> },
                { label: "Apply", description: <Formula>{String.raw`\frac{1\cdot 4}{1\cdot 2}=2`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">In general <Formula>{String.raw`\lim_{x\to0}\frac{\sin ax}{\sin bx}=\frac{a}{b}`}</Formula>.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3 — sin ax / bx">
          <ProblemSolution.Problem>
            Evaluate <Formula>{String.raw`\lim_{x \to 0} \frac{\sin ax}{bx}`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Factor", description: <Formula>{String.raw`\frac{\sin ax}{ax}\cdot\frac{a}{b}`}</Formula> },
                { label: "Limit", description: <Formula>{String.raw`\frac{a}{b}\cdot 1 = \frac{a}{b}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 4 — tan x / x">
          <ProblemSolution.Problem>
            Evaluate <Formula>{String.raw`\lim_{x \to 0} \frac{\tan x}{x}`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Rewrite", description: <Formula>{String.raw`\frac{\sin x}{\cos x}\cdot\frac1x`}</Formula> },
                { label: "Split", description: <Formula>{String.raw`\left(\lim_{x\to0}\frac{\sin x}{x}\right)\!\left(\lim_{x\to0}\frac1{\cos x}\right)=1\cdot\frac1{1}=1`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 6 — cos shift at π/2">
          <ProblemSolution.Problem>
            Evaluate <Formula>{String.raw`\lim_{x \to \pi/2}\frac{\cos x}{\pi/2 - x}`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Use identity", description: <Formula>{String.raw`\cos x = \sin(\pi/2 - x)`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`\lim_{\pi/2 - x \to 0}\frac{\sin(\pi/2 - x)}{\pi/2 - x}=1`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

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

      <Callout type="note" title="Fundamentals of Derivatives">
        For <Formula>{String.raw`y=f(x)`}</Formula>, the derivative is the rate of change. Notations: <Formula>{String.raw`f'(x)`}</Formula>, <Formula>{String.raw`y'`}</Formula>, or <Formula>{String.raw`\frac{dy}{dx}`}</Formula>.
        <FormulaBlock latex={String.raw`\frac{dy}{dx}=\lim_{\Delta x\to0}\frac{\Delta y}{\Delta x}`} />
        With <Formula>{String.raw`\Delta x = h \to 0`}</Formula>, this is the <strong>first principle</strong> below.
      </Callout>

      <FormulaCard>
        <p className="font-semibold mb-1">First Principle (ab initio)</p>
        <FormulaBlock latex={String.raw`\frac{dy}{dx}=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}`} />
      </FormulaCard>

      <h3>First Principle — 5 Fully Worked Derivations</h3>
      <Expandable title="First Principle — x², 1/x, sin x, cos x, tan x">
        <ProblemSolution problemNumber="A — x² → 2x">
          <ProblemSolution.Problem>
            Derive <Formula>{String.raw`f(x)=x^{2}`}</Formula> from first principles.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Setup", description: <Formula>{String.raw`\frac{dy}{dx}=\lim_{h\to0}\frac{(x+h)^{2}-x^{2}}{h}`}</Formula> },
                { label: "Expand", description: <Formula>{String.raw`\frac{x^{2}+2xh+h^{2}-x^{2}}{h}`}</Formula> },
                { label: "Factor", description: <Formula>{String.raw`\frac{h(2x+h)}{h}=2x+h`}</Formula> },
                { label: "Limit", description: <Formula>{String.raw`\lim_{h\to0}(2x+h)=2x`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="B — 1/x → −1/x²">
          <ProblemSolution.Problem>
            Derive <Formula>{String.raw`f(x)=\frac1x`}</Formula> from first principles.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Setup", description: <Formula>{String.raw`\frac{dy}{dx}=\lim_{h\to0}\frac{\frac1{x+h}-\frac1x}{h}`}</Formula> },
                { label: "Common denominator", description: <Formula>{String.raw`\frac{x-(x+h)}{x(x+h)}\cdot\frac1h`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`\frac{-h}{hx(x+h)}=\frac{-1}{x(x+h)}`}</Formula> },
                { label: "Limit", description: <Formula>{String.raw`\lim_{h\to0}\frac{-1}{x(x+h)}=-\frac1{x^{2}}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="C — sin x → cos x">
          <ProblemSolution.Problem>
            Derive <Formula>{String.raw`f(x)=\sin x`}</Formula> from first principles.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Setup", description: <Formula>{String.raw`\frac{dy}{dx}=\lim_{h\to0}\frac{\sin(x+h)-\sin x}{h}`}</Formula> },
                { label: "Identity", description: <Formula>{String.raw`\sin(x+h)-\sin x=2\cos\frac{2x+h}{2}\sin\frac{h}{2}`}</Formula> },
                { label: "Rewrite", description: <Formula>{String.raw`\frac{2\cos\frac{2x+h}{2}\sin\frac{h}{2}}{h}=\cos\frac{2x+h}{2}\cdot\frac{\sin(h/2)}{h/2}`}</Formula> },
                { label: "Standard limit", description: <Formula>{String.raw`\lim_{h\to0}\frac{\sin(h/2)}{h/2}=1 \Rightarrow \cos x`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="D — cos x → −sin x">
          <ProblemSolution.Problem>
            Derive <Formula>{String.raw`f(x)=\cos x`}</Formula> from first principles.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Setup", description: <Formula>{String.raw`\frac{dy}{dx}=\lim_{h\to0}\frac{\cos(x+h)-\cos x}{h}`}</Formula> },
                { label: "Identity", description: <Formula>{String.raw`\cos(x+h)-\cos x=-2\sin\frac{2x+h}{2}\sin\frac{h}{2}`}</Formula> },
                { label: "Rewrite", description: <Formula>{String.raw`-\sin\frac{2x+h}{2}\cdot\frac{\sin(h/2)}{h/2}`}</Formula> },
                { label: "Limit", description: <Formula>{String.raw`-\sin x`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="E — tan x → sec²x">
          <ProblemSolution.Problem>
            Derive <Formula>{String.raw`f(x)=\tan x=\frac{\sin x}{\cos x}`}</Formula> from first principles.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Setup", description: <Formula>{String.raw`\frac{\sin(x+h)}{\cos(x+h)}-\frac{\sin x}{\cos x}\over h`}</Formula> },
                { label: "Cross-multiply", description: <Formula>{String.raw`\frac{\sin(x+h)\cos x-\cos(x+h)\sin x}{h\cos x\cos(x+h)}`}</Formula> },
                { label: "Numerator", description: <Formula>{String.raw`\sin h`}</Formula> },
                { label: "Limit", description: <Formula>{String.raw`\lim_{h\to0}\frac{\sin h}{h}\cdot\frac1{\cos x\cos(x+h)}=\sec^{2}x`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="F — x²+x+1 → 2x+1">
          <ProblemSolution.Problem>
            Find the derivative of <Formula>{String.raw`f(x)=x^{2}+x+1`}</Formula> from first principles.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="text-sm text-muted-foreground mb-2">First Principle: <Formula>{String.raw`\frac{dy}{dx}=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}`}</Formula></p>
            <Stepper
              steps={[
                { label: "Find f(x+h)", description: <Formula>{String.raw`f(x+h)=(x+h)^{2}+(x+h)+1`}</Formula> },
                { label: "Expand", description: <Formula>{String.raw`(x+h)^{2}=x^{2}+2xh+h^{2}`}</Formula> },
                { label: "Combine", description: <Formula>{String.raw`f(x+h)=x^{2}+2xh+h^{2}+x+h+1`}</Formula> },
                { label: "Subtract & divide", description: <Formula>{String.raw`\frac{(x^{2}+2xh+h^{2}+x+h+1)-(x^{2}+x+1)}{h}`}</Formula> },
                { label: "Cancel", description: <Formula>{String.raw`\frac{2xh+h^{2}+h}{h}`}</Formula> },
                { label: "Factor h", description: <Formula>{String.raw`\frac{h(2x+h+1)}{h}=2x+h+1`}</Formula> },
                { label: "Limit h→0", description: <Formula>{String.raw`\lim_{h\to0}(2x+h+1)=2x+1`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Algebra of Derivatives</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Where <Formula>{String.raw`u,v`}</Formula> are functions, <Formula>{String.raw`u',v'`}</Formula> their derivatives:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
          <FormulaBlock latex={String.raw`(u+v)'=u'+v'`} />
          <FormulaBlock latex={String.raw`(u-v)'=u'-v'`} />
          <FormulaBlock latex={String.raw`(u\cdot v)'=uv'+vu'`} />
          <FormulaBlock latex={String.raw`\left(\frac{u}{v}\right)'=\frac{vu'-uv'}{v^{2}}`} />
        </div>
        <p className="text-sm font-medium mt-3">Differential notation</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
          <FormulaBlock latex={String.raw`\frac{d}{dx}[f+g]=\frac{d}{dx}f+\frac{d}{dx}g`} />
          <FormulaBlock latex={String.raw`\frac{d}{dx}[f-g]=\frac{d}{dx}f-\frac{d}{dx}g`} />
          <FormulaBlock latex={String.raw`\frac{d}{dx}[f\cdot g]=f'g+fg'`} />
          <FormulaBlock latex={String.raw`\frac{d}{dx}\left(\frac{f}{g}\right)=\frac{g f'-f g'}{g^{2}}`} />
        </div>
        <FormulaBlock latex={String.raw`\frac{d}{dx}[k\cdot f]=k\,f'`} />
      </FormulaCard>



      <h3>Product &amp; Quotient Rules — Quick Reference</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Leibniz Rules</p>
        <FormulaBlock latex={String.raw`(uv)'=uv'+vu'`} />
        <FormulaBlock latex={String.raw`\left(\frac{u}{v}\right)'=\frac{vu'-uv'}{v^{2}}`} />
        <p className="text-sm text-muted-foreground mt-2">Product: “first×derivative of second + second×derivative of first.” Quotient: “low d-high minus high d-low, over low squared.”</p>
      </FormulaCard>

      <Expandable title="Worked Examples 1–10 — Standard Results">
        <ProblemSolution problemNumber="1 — x⁹">
          <ProblemSolution.Problem>Find <Formula>{String.raw`\frac{d}{dx}(x^{9})`}</Formula>.</ProblemSolution.Problem>
          <ProblemSolution.Solution><Formula>{String.raw`\frac{d}{dx}(x^{9})=9x^{8}`}</Formula></ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="2 — 8√x">
          <ProblemSolution.Problem>Find <Formula>{String.raw`\frac{d}{dx}(8\sqrt{x})`}</Formula>.</ProblemSolution.Problem>
          <ProblemSolution.Solution><Stepper steps={[{ label: "Use", description: <Formula>{String.raw`\frac{d}{dx}(\sqrt{x})=1/(2\sqrt{x})`}</Formula> },{ label: "Multiply", description: <Formula>{String.raw`8\cdot 1/(2\sqrt{x})=4/\sqrt{x}`}</Formula> }]} /></ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="3 — (x+1)/x">
          <ProblemSolution.Problem>Find <Formula>{String.raw`f(x)=\frac{x+1}{x}`}</Formula>.</ProblemSolution.Problem>
          <ProblemSolution.Solution><Stepper steps={[{ label: "Rewrite", description: <Formula>{String.raw`1+1/x`}</Formula> },{ label: "Derive", description: <Formula>{String.raw`0-1/x^{2}=-1/x^{2}`}</Formula> }]} /></ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="4 — sin x cos x">
          <ProblemSolution.Problem>Find <Formula>{String.raw`\frac{d}{dx}(\sin x\cos x)`}</Formula>.</ProblemSolution.Problem>
          <ProblemSolution.Solution><Stepper steps={[{ label: "Product", description: <Formula>{String.raw`\sin x(-\sin x)+\cos x\cos x`}</Formula> },{ label: "Simplify", description: <Formula>{String.raw`\cos^{2}x-\sin^{2}x=\cos 2x`}</Formula> }]} /></ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="5 — 5 sin x −6 cos x +7">
          <ProblemSolution.Problem>Find <Formula>{String.raw`\frac{d}{dx}(5\sin x-6\cos x+7)`}</Formula>.</ProblemSolution.Problem>
          <ProblemSolution.Solution><Formula>{String.raw`5\cos x+6\sin x`}</Formula></ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="6 — sin²x">
          <ProblemSolution.Problem>Find <Formula>{String.raw`\frac{d}{dx}(\sin^{2}x)`}</Formula>.</ProblemSolution.Problem>
          <ProblemSolution.Solution><Stepper steps={[{ label: "Rewrite", description: <Formula>{String.raw`\sin x\cdot\sin x`}</Formula> },{ label: "Product", description: <Formula>{String.raw`\sin x\cos x+\sin x\cos x=2\sin x\cos x=\sin 2x`}</Formula> }]} /></ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="7 — sin²+cos²">
          <ProblemSolution.Problem>Evaluate <Formula>{String.raw`\frac{d}{dx}(\sin^{2}x+\cos^{2}x)`}</Formula>.</ProblemSolution.Problem>
          <ProblemSolution.Solution><Formula>{String.raw`\sin^{2}x+\cos^{2}x=1\Rightarrow 0`}</Formula></ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="8 — x⁵(3−6x⁻⁹)">
          <ProblemSolution.Problem>Find <Formula>{String.raw`\frac{d}{dx}[x^{5}(3-6x^{-9})]`}</Formula>.</ProblemSolution.Problem>
          <ProblemSolution.Solution><Stepper steps={[{ label: "Expand", description: <Formula>{String.raw`3x^{5}-6x^{-4}`}</Formula> },{ label: "Derive", description: <Formula>{String.raw`15x^{4}+24x^{-5}`}</Formula> }]} /></ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="9 — (x²+1)/(x²−1)">
          <ProblemSolution.Problem>Find <Formula>{String.raw`\frac{d}{dx}\frac{x^{2}+1}{x^{2}-1}`}</Formula>.</ProblemSolution.Problem>
          <ProblemSolution.Solution><Stepper steps={[{ label: "Quotient", description: <Formula>{String.raw`\frac{(x^{2}-1)2x-(x^{2}+1)2x}{(x^{2}-1)^{2}}`}</Formula> },{ label: "Simplify", description: <Formula>{String.raw`-4x/(x^{2}-1)^{2}`}</Formula> }]} /></ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="10 — (1−sin x)/(1+sin x)">
          <ProblemSolution.Problem>Find <Formula>{String.raw`\frac{d}{dx}\frac{1-\sin x}{1+\sin x}`}</Formula>.</ProblemSolution.Problem>
          <ProblemSolution.Solution><Stepper steps={[{ label: "Quotient", description: <Formula>{String.raw`\frac{(1+\sin x)(-\cos x)-(1-\sin x)\cos x}{(1+\sin x)^{2}}`}</Formula> },{ label: "Simplify", description: <Formula>{String.raw`-2\cos x/(1+\sin x)^{2}`}</Formula> }]} /></ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

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

      <Expandable title="Quotient of Product — x² tan x / (1+x)">
        <ProblemSolution problemNumber="Example — x² tan x / (1+x)">
          <ProblemSolution.Problem>
            Differentiate <Formula>{String.raw`y=\frac{x^{2}\tan x}{1+x}`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="text-sm text-muted-foreground mb-3">Quotient: <Formula>{String.raw`\left(\frac{u}{v}\right)'=\frac{v u'-u v'}{v^{2}}`}</Formula></p>
            <Stepper
              steps={[
                { label: "Identify u,v", description: <Formula>{String.raw`u=x^{2}\tan x,\;v=1+x`}</Formula> },
                { label: "u' via product", description: <Formula>{String.raw`f=x^{2},g=\tan x\Rightarrow f'=2x,\;g'=\sec^{2}x`}</Formula> },
                { label: "Compute u'", description: <Formula>{String.raw`u'=(2x)\tan x+x^{2}\sec^{2}x`}</Formula> },
                { label: "v'", description: <Formula>{String.raw`v'=1`}</Formula> },
                { label: "Quotient", description: <Formula>{String.raw`\frac{dy}{dx}=\frac{(1+x)(2x\tan x+x^{2}\sec^{2}x)-x^{2}\tan x}{(1+x)^{2}}`}</Formula> },
                { label: "Expand", description: <Formula>{String.raw`\frac{2x\tan x+2x^{2}\tan x+x^{2}\sec^{2}x+x^{3}\sec^{2}x-x^{2}\tan x}{(1+x)^{2}}`}</Formula> },
                { label: "Combine", description: <Formula>{String.raw`\frac{2x\tan x+x^{2}\tan x+x^{2}\sec^{2}x+x^{3}\sec^{2}x}{(1+x)^{2}}=\frac{x(2+x)\tan x+x^{2}(1+x)\sec^{2}x}{(1+x)^{2}}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Quotient Example — cos x / (1+ sin x) = −1/(1+ sin x)">
        <ProblemSolution problemNumber="Example — cos x / (1+ sin x)">
          <ProblemSolution.Problem>
            Prove that <Formula>{String.raw`\frac{d}{dx}\left(\frac{\cos x}{1+\sin x}\right)=\frac{-1}{1+\sin x}`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p className="text-sm text-muted-foreground mb-3">Quotient: <Formula>{String.raw`\left(\frac{u}{v}\right)'=\frac{vu'-uv'}{v^{2}}`}</Formula></p>
            <Stepper
              steps={[
                { label: "Identify u,v", description: <Formula>{String.raw`u=\cos x,\;v=1+\sin x`}</Formula> },
                { label: "u'", description: <Formula>{String.raw`u'=-\sin x`}</Formula> },
                { label: "v'", description: <Formula>{String.raw`v'=\cos x`}</Formula> },
                { label: "Apply", description: <Formula>{String.raw`\frac{(1+\sin x)(-\sin x)-\cos x\cdot\cos x}{(1+\sin x)^{2}}`}</Formula> },
                { label: "Expand", description: <Formula>{String.raw`\frac{-\sin x-\sin^{2}x-\cos^{2}x}{(1+\sin x)^{2}}`}</Formula> },
                { label: "Use identity", description: <Formula>{String.raw`\sin^{2}x+\cos^{2}x=1\Rightarrow -\sin^{2}x-\cos^{2}x=-1`}</Formula> },
                { label: "Numerator", description: <Formula>{String.raw`-\sin x-1=-(1+\sin x)`}</Formula> },
                { label: "Cancel", description: <Formula>{String.raw`\frac{-(1+\sin x)}{(1+\sin x)^{2}}=\frac{-1}{1+\sin x}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Additional Derivatives — cot x, −sin x, x sin x">
        <ProblemSolution problemNumber="G — cot x (First Principle)">
          <ProblemSolution.Problem>
            Find the derivative of <Formula>{String.raw`y=\cot x`}</Formula> from first principles.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Setup", description: <Formula>{String.raw`\frac{dy}{dx}=\lim_{h\to0}\frac{\cot(x+h)-\cot x}{h}=\lim_{h\to0}\frac{\frac{\cos(x+h)}{\sin(x+h)}-\frac{\cos x}{\sin x}}{h}`}</Formula> },
                { label: "Combine", description: <Formula>{String.raw`\frac{\sin x\cos(x+h)-\cos x\sin(x+h)}{h\sin x\sin(x+h)}`}</Formula> },
                { label: "Numerator", description: <Formula>{String.raw`\sin(x-(x+h))=-\sin h`}</Formula> },
                { label: "Limit", description: <Formula>{String.raw`\lim_{h\to0}\frac{-\sin h}{h}\cdot\frac1{\sin x\sin(x+h)}=-\csc^{2}x`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="H — −sin x (Constant Multiple)">
          <ProblemSolution.Problem>
            <Formula>{String.raw`\frac{d}{dx}(-\sin x)=\,?`}</Formula>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Recall", description: <Formula>{String.raw`\frac{d}{dx}(\sin x)=\cos x`}</Formula> },
                { label: "Constant multiple", description: <Formula>{String.raw`\frac{d}{dx}(-\sin x)=-1\cdot\frac{d}{dx}(\sin x)`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`-1\cdot\cos x=-\cos x`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{\frac{d}{dx}(-\sin x)=-\cos x}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="I — x sin x (Product Rule)">
          <ProblemSolution.Problem>
            Find the derivative of <Formula>{String.raw`y=x\sin x`}</Formula>.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Identify", description: <Formula>{String.raw`u=x,\;v=\sin x`}</Formula> },
                { label: "Product rule", description: <Formula>{String.raw`(uv)'=u'v+uv'`}</Formula> },
                { label: "Apply", description: <Formula>{String.raw`1\cdot\sin x + x\cdot\cos x = \sin x + x\cos x`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\boxed{\frac{d}{dx}(x\sin x)=\sin x + x\cos x}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Standard Derivatives — 14 in 2 Columns</h3>
      <FormulaCard>
        <p className="font-semibold mb-3">All Standard Results — 2 columns (merged, compact)</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
          <FormulaBlock latex={String.raw`(k)' = 0`} />
          <FormulaBlock latex={String.raw`(x)' = 1`} />
          <FormulaBlock latex={String.raw`(x^{n})' = n x^{n-1}`} />
          <FormulaBlock latex={String.raw`(1/x)' = -1/x^{2}`} />
          <FormulaBlock latex={String.raw`(\sqrt{x})' = 1/(2\sqrt{x})`} />
          <FormulaBlock latex={String.raw`(\log x)' = 1/x`} />
          <FormulaBlock latex={String.raw`(e^{x})' = e^{x}`} />
          <FormulaBlock latex={String.raw`(a^{x})' = a^{x}\log a`} />
          <FormulaBlock latex={String.raw`(\sin x)' = \cos x`} />
          <FormulaBlock latex={String.raw`(\cos x)' = -\sin x`} />
          <FormulaBlock latex={String.raw`(\tan x)' = \sec^{2}x`} />
          <FormulaBlock latex={String.raw`(\cot x)' = -\csc^{2}x`} />
          <FormulaBlock latex={String.raw`(\sec x)' = \sec x \tan x`} />
          <FormulaBlock latex={String.raw`(\csc x)' = -\csc x \cot x`} />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">Left: algebraic &amp; exponential — Right: trigonometric. Single source, 2-column compact.</p>
      </FormulaCard>

      <SpeedTricks>
        <Callout type="tip" title="Product vs Quotient: memorize one">
          Product rule is easier. If you forget the quotient rule, rewrite f/g as f · g⁻¹ and use the product rule + chain rule.
        </Callout>
        <Callout type="tip" title="Check sign: (cos x)′ = −sin x">
          The negative sign on (cos x)′ is the most common error. cos decreases near 0, so its derivative must be negative there.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-ex-12-1" title="Exercise 12.1">
        <p>Evaluate the following limits (Exercises 1–15, deduped — 7 duplicates already solved in Methods/Practice removed):</p>
        <ol>
          <li><Formula>{String.raw`\lim_{x \to \pi} \left(x - \frac{22}{7}\right)`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to -1} \frac{x^{10} + x^5 + 1}{x - 1}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{(x + 1)^5 - 1}{x}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 2} \frac{3x^2 - x - 10}{x^2 - 4}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 3} \frac{x^4 - 81}{2x^2 - 5x - 3}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{z \to 1} \frac{z^{1/3} - 1}{z^{1/6} - 1}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{ax^2 + bx + c}{bx^2 + cx + a}`}</Formula>, where a, b, c are constants and a + b + c ≠ 0</li>
          <li><Formula>{String.raw`\lim_{x \to -1} \frac{x^2 + 1}{x + 1}`}</Formula></li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{\sin ax}{\sin bx}`}</Formula>, a, b ≠ 0</li>
          <li><Formula>{String.raw`\lim_{x \to 0} \frac{\cos x}{\pi - x}`}</Formula></li>
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
          <p><strong>Exercises 1–15 (deduped):</strong></p>
          <ol>
            <li><Formula>{String.raw`\lim_{x \to \pi}\left(x - \frac{22}{7}\right) = \pi - \frac{22}{7}`}</Formula></li>
            <li><Formula>{String.raw`\lim_{x \to -1}\frac{x^{10} + x^5 + 1}{x - 1} = \frac{1}{2}`}</Formula></li>
            <li>Put x + 1 = y so y → 1 as x → 0. Then <Formula>{String.raw`\frac{y^5 - 1}{y - 1} \to 5`}</Formula>. Answer: <strong>5</strong>.</li>
            <li>Factor: <Formula>{String.raw`\frac{(x - 2)(3x + 5)}{(x - 2)(x + 2)} = \frac{3x + 5}{x + 2} \to \frac{11}{4}`}</Formula>.</li>
            <li>Factor: <Formula>{String.raw`\frac{(x - 3)(x + 3)(x^2 + 9)}{(x - 3)(2x + 1)} = \frac{(x + 3)(x^2 + 9)}{2x + 1} \to \frac{108}{7}`}</Formula>.</li>
            <li>Put z = t⁶ so z → 1 means t → 1. Then <Formula>{String.raw`\frac{t^2 - 1}{t - 1} = t + 1 \to 2`}</Formula>.</li>
            <li><Formula>{String.raw`\lim_{x \to 0}\frac{ax^2 + bx + c}{bx^2 + cx + a} = \frac{c}{a}`}</Formula>.</li>
            <li>Direct substitution: <Formula>{String.raw`\frac{(-1)^2 + 1}{-1 + 1} = \frac{2}{0}`}</Formula>. Limit does not exist (approaches ∞).</li>
            <li><Formula>{String.raw`\frac{a}{b} \cdot \frac{\lim \sin ax / ax}{\lim \sin bx / bx} = \frac{a}{b}`}</Formula>.</li>
            <li>Direct substitution: <Formula>{String.raw`\frac{\cos 0}{\pi - 0} = \frac{1}{\pi}`}</Formula>.</li>
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

      <h2 id="h-pyq">Previous Year Questions</h2>

      <Expandable id="h-pyq-mar25" title="PYQ — March 2025">
        <ProblemSolution problemNumber="PYQ-M1">
          <ProblemSolution.Problem>
            <p>Evaluate <Formula>{String.raw`\lim_{x \to 0} \frac{\tan 2x}{x}`}</Formula>. <span className="text-sm text-muted-foreground">[1 Mark]</span></p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Rewrite", description: <Formula>{String.raw`\frac{\tan 2x}{2x} \times 2`}</Formula> },
                { label: "Split limits", description: <Formula>{String.raw`\lim_{x\to 0}\frac{\tan 2x}{2x} \times \lim_{x\to 0} 2`}</Formula> },
                { label: "Apply standard limit", description: <Formula>{String.raw`1 \times 2 = 2`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\lim_{x \to 0} \frac{\tan 2x}{x} = 2`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-M2">
          <ProblemSolution.Problem>
            <p>Prove that <Formula>{String.raw`\lim_{x \to 0} \frac{1 - \cos x}{x} = 0`}</Formula>. <span className="text-sm text-muted-foreground">[2 Marks]</span></p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Use identity", description: <Formula>{String.raw`1 - \cos x = 2\sin^2\left(\frac{x}{2}\right)`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`\lim_{x\to 0}\frac{2\sin^2\left(\frac{x}{2}\right)}{x}`}</Formula> },
                { label: "Split", description: <Formula>{String.raw`\lim_{x\to 0}\left(\frac{\sin(x/2)}{x/2} \times \sin\left(\frac{x}{2}\right)\right)`}</Formula> },
                { label: "Apply limits", description: <Formula>{String.raw`\lim_{x\to 0}\frac{\sin(x/2)}{x/2} \times \lim_{x\to 0}\sin\left(\frac{x}{2}\right) = 1 \times 0`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\lim_{x \to 0} \frac{1 - \cos x}{x} = 0`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-pyq-model25" title="PYQ — Model 2025">
        <ProblemSolution problemNumber="PYQ-MO1">
          <ProblemSolution.Problem>
            <p>Find the derivative of <Formula>{String.raw`\frac{\sin x + \cos x}{\sin x - \cos x}`}</Formula>. <span className="text-sm text-muted-foreground">[3 Marks]</span></p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Quotient rule", description: <Formula>{String.raw`\left(\frac{u}{v}\right)' = \frac{vu' - uv'}{v^2}`}</Formula> },
                { label: "Apply", description: <Formula>{String.raw`\frac{(\sin x - \cos x)(\cos x + \sin x) - (\sin x + \cos x)(\cos x - \sin x)}{(\sin x - \cos x)^2}`}</Formula> },
                { label: "Expand numerator", description: <Formula>{String.raw`(\sin^2 x - \cos^2 x) - (\sin^2 x - \cos^2 x) \cdot (-1)`}</Formula> },
                { label: "Simplify", description: <Formula>{String.raw`\frac{-2(\sin^2 x + \cos^2 x)}{(\sin x - \cos x)^2} = \frac{-2}{(\sin x - \cos x)^2}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`f'(x) = \frac{-2}{(\sin x - \cos x)^2}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-pyq-feb25" title="PYQ — Feb 2025">
        <ProblemSolution problemNumber="PYQ-F1">
          <ProblemSolution.Problem>
            <p>Evaluate <Formula>{String.raw`\lim_{x \to 0}\left[\frac{\sin \pi x}{x \cos 2x}\right]`}</Formula>. <span className="text-sm text-muted-foreground">[2 Marks]</span></p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Split limits", description: <Formula>{String.raw`\lim_{x\to 0}\frac{\sin \pi x}{x} \times \lim_{x\to 0}\frac{1}{\cos 2x}`}</Formula> },
                { label: "Refactor first limit", description: <Formula>{String.raw`\lim_{x\to 0}\left(\frac{\sin \pi x}{\pi x} \times \pi\right) \times \frac{1}{\cos 0}`}</Formula> },
                { label: "Apply standard limit", description: <Formula>{String.raw`\pi \times 1 \times \frac{1}{1} = \pi`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\pi`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>
    </>
  );
}
