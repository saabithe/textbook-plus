import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";

export default function PermutationsAndCombinationsChapter() {
  return (
    <>
      <h2 id="h-intro">6.1 Introduction</h2>
      <Callout type="note" title="Number Lock Problem">
        A suitcase has a 4-wheel lock with digits 0–9. You remember only the first digit is 7. How many 3-digit sequences must you check? Listing them all is tedious — we need <strong>counting techniques</strong> that work without listing.
      </Callout>
      <p>
        This chapter introduces the <Highlight>fundamental principle of counting</Highlight>, then builds up <strong>permutations</strong> (arrangements where order matters) and <strong>combinations</strong> (selections where order does not matter).
      </p>

      <h2 id="h-fpc">6.2 Fundamental Principle of Counting</h2>
      <Callout type="important" title="Multiplication Principle">
        If an event can occur in <strong>m</strong> different ways, and after it a second event can occur in <strong>n</strong> different ways, then the total number of ways both events occur in order is <strong>m × n</strong>.
      </Callout>
      <ul>
        <li><strong>Pant + Shirt:</strong> 3 pants × 2 shirts = 6 outfit combinations.</li>
        <li><strong>Bag + Tiffin + Bottle:</strong> 2 × 3 × 2 = 12 ways (generalised to any finite number of events: m × n × p × ...).</li>
      </ul>
      <Expandable title="Key Insight — Ordered Events">
        The principle applies when events happen <strong>in a specific order</strong>. In each problem, you choose one particular ordering of the events and count the total ways for that order. The total is the same regardless of which order you pick.
      </Expandable>

      <ProblemSolution problemNumber="1">
        <ProblemSolution.Problem>Find the number of 4-letter words (with or without meaning) formed from ROSE, with no repetition.</ProblemSolution.Problem>
        <ProblemSolution.Solution>4 choices for position 1, then 3, then 2, then 1. By multiplication principle: 4 × 3 × 2 × 1 = 24.</ProblemSolution.Solution>
      </ProblemSolution>
      <ProblemSolution problemNumber="2">
        <ProblemSolution.Problem>Given 4 flags of different colours, how many signals can be generated using 2 flags one below the other?</ProblemSolution.Problem>
        <ProblemSolution.Solution>Upper place: 4 ways; lower place: 3 ways. Total = 4 × 3 = 12.</ProblemSolution.Solution>
      </ProblemSolution>
      <ProblemSolution problemNumber="3">
        <ProblemSolution.Problem>How many 2-digit even numbers can be formed from &#123;1, 2, 3, 4, 5&#125; with repetition allowed?</ProblemSolution.Problem>
        <ProblemSolution.Solution>Units place: only &#123;2, 4&#125; → 2 ways. Tens place: any of 5 digits → 5 ways. Total = 2 × 5 = 10.</ProblemSolution.Solution>
      </ProblemSolution>

      <h2 id="h-permutations">6.3 Permutations</h2>
      <Callout type="important" title="Definition">
        A <strong>permutation</strong> is an arrangement of objects in a definite order. The order of writing matters — ROSE and REOS are different permutations.
      </Callout>

      <h3 id="h-factorial">6.3.2 Factorial Notation</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Factorial</p>
        <FormulaBlock latex="n! = 1 \times 2 \times 3 \times \cdots \times (n-1) \times n" />
        <FormulaBlock latex="0! = 1,\quad n! = n \times (n-1)!" />
      </FormulaCard>
      <ul>
        <li>1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120.</li>
        <li>7! − 5! = 5040 − 120 = 4920 (not 2!).</li>
      </ul>

      <h3 id="h-npr">6.3.1 &amp; 6.3.3 Permutations of Distinct Objects — nPr</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Permutations (no repetition)</p>
        <FormulaBlock latex="^{n}P_{r} = \frac{n!}{(n-r)!}, \quad 0 \le r \le n" />
        <p className="text-sm text-muted-foreground mt-2">r vacant places filled in n, n−1, n−2, …, n−r+1 ways.</p>
      </FormulaCard>
      <KeyPoint>
        When repetition <strong>is</strong> allowed, each of the r places has n choices, so the number of permutations is <strong>n<sup>r</sup></strong>.
      </KeyPoint>
      <ProblemSolution problemNumber="4">
        <ProblemSolution.Problem>Find the number of 3-letter words from NUMBER (no repetition).</ProblemSolution.Problem>
        <ProblemSolution.Solution>6P3 = 6!/(6−3)! = 6×5×4 = 120.</ProblemSolution.Solution>
      </ProblemSolution>
      <ProblemSolution problemNumber="5">
        <ProblemSolution.Problem>How many ways can a Chairman and Vice-Chairman be chosen from 12 people (one person cannot hold both)?</ProblemSolution.Problem>
        <ProblemSolution.Solution>12P2 = 12!/(12−2)! = 12×11 = 132.</ProblemSolution.Solution>
      </ProblemSolution>

      <h3 id="h-repeated">6.3.4 Permutations When Objects Are Not All Distinct</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Division Principle</p>
        <FormulaBlock latex="\text{Permutations} = \frac{n!}{p_1!\, p_2!\, \cdots\, p_k!}" />
        <p className="text-sm text-muted-foreground mt-2">Where p₁ objects are of one kind, p₂ of another, etc., and the rest are all different.</p>
      </FormulaCard>
      <ProblemSolution problemNumber="6">
        <ProblemSolution.Problem>How many arrangements of the letters of ALLAHABAD?</ProblemSolution.Problem>
        <ProblemSolution.Solution>9 letters: 4 A's, 2 L's, rest different. Arrangements = 9!/(4!×2!) = 362880/48 = 7560.</ProblemSolution.Solution>
      </ProblemSolution>
      <ProblemSolution problemNumber="7">
        <ProblemSolution.Problem>How many numbers between 100 and 1000 can be formed from &#123;0,1,2,3,4,5&#125; with no repetition?</ProblemSolution.Problem>
        <ProblemSolution.Solution>6P3 − 5P2 (subtract those starting with 0) = 120 − 20 = 100.</ProblemSolution.Solution>
      </ProblemSolution>

      <Expandable title="Example — Vowels Together (DAUGHTER)">
        <p>8 distinct letters; 3 vowels (A, U, E) must be together.</p>
        <p>Bundle vowels as one object → 6 objects total → 6! arrangements. Within the bundle: 3! arrangements.</p>
        <p><strong>Total = 6! × 3! = 720 × 6 = 4320.</strong></p>
        <p>If vowels must <em>not</em> be together: 8! − 4320 = 40320 − 4320 = <strong>36000</strong>.</p>
      </Expandable>

      <h2 id="h-combinations">6.4 Combinations</h2>
      <Callout type="important" title="Definition">
        A <strong>combination</strong> is a selection of objects where <strong>order does not matter</strong>. The team &#123;X, Y&#125; is the same as &#123;Y, X&#125;.
      </Callout>
      <FormulaCard>
        <p className="font-semibold mb-2">Combinations</p>
        <FormulaBlock latex="^{n}C_{r} = \frac{n!}{r!\,(n-r)!}, \quad 0 \le r \le n" />
        <p className="text-sm text-muted-foreground mt-2">Relationship: nPr = nCr × r!</p>
      </FormulaCard>
      <KeyPoint>
        <strong>nCr = nC(n−r)</strong> — selecting r objects is the same as rejecting n−r objects. Also, nC0 = nCn = 1.
      </KeyPoint>
      <KeyPoint>
        <strong>Pascal&apos;s identity:</strong> nCr + nCr+1 = n+1Cr+1
      </KeyPoint>

      <ProblemSolution problemNumber="8">
        <ProblemSolution.Problem>A committee of 3 from 2 men and 3 women. How many committees? How many with exactly 1 man and 2 women?</ProblemSolution.Problem>
        <ProblemSolution.Solution>Total = 5C3 = 10. With 1 man and 2 women = 2C1 × 3C2 = 2 × 3 = 6.</ProblemSolution.Solution>
      </ProblemSolution>

      <Expandable title="Example — Card Selection (52-card pack)">
        <p>4 cards from 52: <strong>52C4 = 270725</strong>.</p>
        <ul className="list-disc pl-5">
          <li>Four of same suit: 4 × 13C4 = 4 × 715 = 2860.</li>
          <li>One from each suit: 13C1 × 13C1 × 13C1 × 13C1 = 13⁴ = 28561.</li>
          <li>Four face cards: 12C4 = 495.</li>
          <li>2 red + 2 black: 26C2 × 26C2 = 325 × 325 = 105625.</li>
          <li>All same colour: 26C4 + 26C4 = 2 × 14950 = 29900.</li>
        </ul>
      </Expandable>

      <ProblemSolution problemNumber="9">
        <ProblemSolution.Problem>A team of 5 from 4 girls and 7 boys: (i) no girl, (ii) at least 1 boy and 1 girl, (iii) at least 3 girls?</ProblemSolution.Problem>
        <ProblemSolution.Solution>(i) 7C5 = 21. (ii) 7C1×4C4 + 7C2×4C3 + 7C3×4C2 + 7C4×4C1 = 7+84+210+140 = 441. (iii) 4C3×7C2 + 4C4×7C1 = 84+7 = 91.</ProblemSolution.Solution>
      </ProblemSolution>

      <h2 id="h-summary">Summary (Revision Points)</h2>
      <Stepper
        steps={[
          { label: "Fundamental principle: m ways then n ways → m × n total." },
          { label: "nPr = n!/(n−r)! — permutations of n distinct objects taken r at a time." },
          { label: "n! = n × (n−1)!, and 0! = 1." },
          { label: "With repetition allowed: nʳ permutations." },
          { label: "Repeated objects: n!/(p₁! p₂! ⋯ pₖ!)." },
          { label: "nCr = n!/[r!(n−r)!] — combinations (order irrelevant)." },
          { label: "nPr = nCr × r!." },
          { label: "nCr = nC(n−r); Pascal: nCr + nCr+1 = n+1Cr+1." },
        ]}
      />
    </>
  );
}
