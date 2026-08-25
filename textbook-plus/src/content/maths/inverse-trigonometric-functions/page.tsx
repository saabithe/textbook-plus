import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { NumberLine } from "@/components/content/maths/NumberLine";

export default function InverseTrigonometricFunctionsChapter() {
  return (
    <>
      <h2 id="h-intro">6.1 Introduction</h2>
      <Callout type="important" title="Inverse Trigonometric Functions">
        If y = f(x) is a function, then the inverse function y = f⁻¹(x) swaps the roles of x and y.
        For trigonometric functions, the inverse functions give us the angle whose trig ratio is known.
        <strong>Principal values</strong> are the unique values in the defined range.
      </Callout>
      <ul>
        <li>sin⁻¹x gives the angle in [−π/2, π/2] whose sine is x.</li>
        <li>cos⁻¹x gives the angle in [0, π] whose cosine is x.</li>
        <li>tan⁻¹x gives the angle in (−π/2, π/2) whose tangent is x.</li>
        <li>Similarly: csc⁻¹, sec⁻¹, cot⁻¹ with their respective principal value ranges.</li>
      </ul>

      <h2 id="h-6-2">6.2 Basic Concepts</h2>
      <KeyPoint title="Notation">
        <strong>sin⁻¹x</strong> means the angle whose sine is x (not 1/sin x).
        Same for cos⁻¹, tan⁻¹, etc.
      </KeyPoint>
      <FormulaCard>
        <p className="font-semibold mb-2">Principal Value Ranges</p>
        <FormulaBlock latex="\sin^{-1}x \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]" />
        <FormulaBlock latex="\cos^{-1}x \in \left[0, \pi\right]" />
        <FormulaBlock latex="\tan^{-1}x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)" />
        <FormulaBlock latex="\cot^{-1}x \in \left(0, \pi\right)" />
        <FormulaBlock latex="\sec^{-1}x \in \left[0, \frac{\pi}{2}\right) \cup \left(\frac{\pi}{2}, \pi\right]" />
        <FormulaBlock latex="\csc^{-1}x \in \left[-\frac{\pi}{2}, 0\right) \cup \left(0, \frac{\pi}{2}\right]" />
      </FormulaCard>

      <Expandable title="Examples — Basic Evaluations">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            <p>Evaluate sin⁻¹(1/2).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex="\sin^{-1}\left(\frac{1}{2}\right) = \frac{\pi}{6}" />
            <p>Since sin(π/6) = 1/2 and π/6 ∈ [−π/2, π/2].</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            <p>Evaluate cos⁻¹(−1/2).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex="\cos^{-1}\left(-\frac{1}{2}\right) = \frac{2\pi}{3}" />
            <p>Since cos(2π/3) = −1/2 and 2π/3 ∈ [0, π].</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            <p>Evaluate tan⁻¹(√3).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex="\tan^{-1}(\sqrt{3}) = \frac{\pi}{3}" />
            <p>Since tan(π/3) = √3 and π/3 ∈ (−π/2, π/2).</p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Properties of Inverse Trigonometric Functions">
        <FormulaCard>
          <p className="font-semibold mb-2">Key Properties</p>
          <FormulaBlock latex="\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2},\quad x \in [-1,1]" />
          <FormulaBlock latex="\tan^{-1}x + \cot^{-1}x = \frac{\pi}{2},\quad x \in \mathbb{R}" />
          <FormulaBlock latex="\sin^{-1}(-x) = -\sin^{-1}x,\quad x \in [-1,1]" />
          <FormulaBlock latex="\tan^{-1}x + \tan^{-1}y = \tan^{-1}\left(\frac{x+y}{1-xy}\right),\quad xy < 1" />
        </FormulaCard>
        <KeyPoint title="Important">
          Always check the domain and principal value range when solving problems.
        </KeyPoint>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Remember the ranges">
          <strong>sin⁻¹</strong>: [−90°, 90°] or [−π/2, π/2]
          <strong>cos⁻¹</strong>: [0°, 180°] or [0, π]
          <strong>tan⁻¹</strong>: (−90°, 90°) or (−π/2, π/2)
        </Callout>
        <Callout type="tip" title="Use the properties">
          <strong>sin⁻¹x + cos⁻¹x = π/2</strong> is the most useful identity.
          <strong>tan⁻¹x + tan⁻¹y</strong> formula helps combine angles.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-ex-6-1" title="EXERCISE 6.1">
        <ol>
          <li>Find the principal values of sin⁻¹(1/2), cos⁻¹(−1/2), tan⁻¹(√3).</li>
          <li>Prove that sin⁻¹x + cos⁻¹x = π/2 for x ∈ [−1,1].</li>
          <li>Evaluate tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3).</li>
          <li>Solve sin⁻¹x = π/6.</li>
          <li>Find the domain of sin⁻¹(2x−1).</li>
          <li>Prove that tan⁻¹(1/2) + tan⁻¹(1/3) = π/4.</li>
          <li>Evaluate cos⁻¹(cos 2π/3).</li>
          <li>Find the value of sin⁻¹(cos π/3).</li>
          <li>Solve the equation arctan x + arctan (1 over x) = pi by 2 for x greater than 0.</li>
        </ol>
        <Expandable title="Answer Key — Exercise 6.1">
          <ol>
            <li>sin⁻¹(1/2) = π/6, cos⁻¹(−1/2) = 2π/3, tan⁻¹(√3) = π/3</li>
            <li>Let θ = sin⁻¹x, then sinθ = x, θ ∈ [−π/2, π/2]. cos(π/2−θ) = sinθ = x, and π/2−θ ∈ [0, π] so cos⁻¹x = π/2−θ = π/2−sin⁻¹x.</li>
            <li>tan⁻¹1 + tan⁻¹2 + tan⁻¹3 = π/4 + tan⁻¹2 + tan⁻¹3. Using tan⁻¹a+tan⁻¹b formula: tan⁻¹((1+2)/(1−2)) = tan⁻¹(−1) = −π/4, but principal values require adjustment → result is 3π/4? Actually standard result: tan⁻¹1+tan⁻¹2+tan⁻¹3 = π.</li>
            <li>x = sin(π/6) = 1/2.</li>
            <li>−1 ≤ 2x−1 ≤ 1 → 0 ≤ 2x ≤ 2 → 0 ≤ x ≤ 1, so domain [0,1].</li>
            <li>tan⁻¹(1/2)+tan⁻¹(1/3) = tan⁻¹((1/2+1/3)/(1−1/6)) = tan⁻¹((5/6)/(5/6)) = tan⁻¹(1) = π/4.</li>
            <li>cos⁻¹(cos 2π/3) = 2π/3 (since 2π/3 ∈ [0,π]).</li>
            <li>sin⁻¹(cos π/3) = sin⁻¹(1/2) = π/6.</li>
            <li>For x greater than 0, arctan x + arctan (1 over x) = pi by 2 (standard identity).</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-summary">Summary (Revision Points)</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">Keys to Remember</p>
        <FormulaBlock latex="\sin^{-1}x,\ \cos^{-1}x,\ \tan^{-1}x\ \text{are inverse trigonometric functions}" />
        <FormulaBlock latex="\text{Principal values are unique in their respective ranges}" />
        <FormulaBlock latex="\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2},\ x \in [-1,1]" important />
        <FormulaBlock latex="\tan^{-1}x + \tan^{-1}y = \tan^{-1}\left(\frac{x+y}{1-xy}\right),\ xy < 1" />
      </FormulaCard>
      <p className="text-sm text-muted-foreground">
        This chapter covers the definition, domains, ranges, and properties of inverse trigonometric functions.
        Master the principal value ranges — this is the most common source of errors.
      </p>
    </>
  );
}