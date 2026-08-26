import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function PermutationsAndCombinationsChapter() {
  return (
    <>
      <h2 id="h-intro">6.1 Introduction</h2>
      <Callout type="note" title="Number Lock Problem">
        A suitcase has a 4-wheel lock with digits 0–9. You remember only the first digit is 7.
        How many 3-digit sequences must you check?
        Listing them all is tedious — we need <strong>counting techniques</strong> that work without listing.
      </Callout>
      <p>
        This chapter introduces the <Highlight>fundamental principle of counting</Highlight>,
        then builds up <strong>permutations</strong> (arrangements where order matters)
        and <strong>combinations</strong> (selections where order does not matter).
      </p>

      <h2 id="h-fpc">6.2 Fundamental Principle of Counting</h2>
      <Callout type="important" title="Multiplication Principle">
        If an event can occur in <strong>m</strong> different ways, and after it a second event can occur in <strong>n</strong> different ways,
        then the total number of ways both events occur in order is <strong>m × n</strong>.
      </Callout>
      <ul>
        <li><strong>Pant + Shirt:</strong> 3 pants × 2 shirts = 6 outfit combinations.</li>
        <li><strong>Bag + Tiffin + Bottle:</strong> 2 × 3 × 2 = 12 ways (generalised to any finite number of events).</li>
      </ul>

      <Expandable title="Examples 1 to 3 — Fundamental Principle">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            Find the number of 4-letter words (with or without meaning) formed from ROSE, with no repetition.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            4 choices for position 1, then 3, then 2, then 1.
            By multiplication principle: 4 × 3 × 2 × 1 = 24.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            Given 4 flags of different colours, how many signals can be generated using 2 flags one below the other?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            Upper place: 4 ways; lower place: 3 ways. Total = 4 × 3 = 12.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            How many 2-digit even numbers can be formed from &#123;1, 2, 3, 4, 5&#125; with repetition allowed?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            Units place: only &#123;2, 4&#125; → 2 ways.
            Tens place: any of 5 digits → 5 ways.
            Total = 2 × 5 = 10.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Counting: choose your event order">
          The multiplication principle works for any ordering of events. Pick the most constrained event first (fewest choices) — it simplifies the count.
        </Callout>
        <Callout type="tip" title="Repetition = power">
          If repetition is allowed, each of r places has n choices → nʳ. If not, it drops to nPr = n!/(n−r)!. Check the problem statement carefully.
        </Callout>
      </SpeedTricks>

      <h2 id="h-permutations">6.3 Permutations</h2>
      <Callout type="important" title="Definition">
        A <strong>permutation</strong> is an arrangement of objects in a definite order.
        The order of writing matters — ROSE and REOS are different permutations.
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

      <Expandable title="Examples 4 and 5 — nPr">
        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            Find the number of 3-letter words from NUMBER (no repetition).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            6P3 = 6!/(6−3)! = 6×5×4 = 120.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            How many ways can a Chairman and Vice-Chairman be chosen from 12 people (one person cannot hold both)?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            12P2 = 12!/(12−2)! = 12×11 = 132.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3 id="h-repeated">6.3.4 Permutations When Objects Are Not All Distinct</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Division Principle</p>
        <FormulaBlock latex="\text{Permutations} = \frac{n!}{p_1!\, p_2!\, \cdots\, p_k!}" />
        <p className="text-sm text-muted-foreground mt-2">Where p₁ objects are of one kind, p₂ of another, etc., and the rest are all different.</p>
      </FormulaCard>

      <Expandable title="Examples 6 and 7 — Repeated Objects">
        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            How many arrangements of the letters of ALLAHABAD?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            9 letters: 4 A&apos;s, 2 L&apos;s, rest different.
            Arrangements = 9!/(4!×2!) = 362880/48 = 7560.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            How many numbers between 100 and 1000 can be formed from &#123;0,1,2,3,4,5&#125; with no repetition?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            6P3 − 5P2 (subtract those starting with 0) = 120 − 20 = 100.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Example — Vowels Together (DAUGHTER)">
        <p>8 distinct letters; 3 vowels (A, U, E) must be together.</p>
        <Stepper
          steps={[
            { label: "Bundle vowels as one object", description: "6 objects total → 6! arrangements" },
            { label: "Arrange within bundle", description: "3! ways for the vowels inside" },
            { label: "Multiply", description: "6! × 3! = 720 × 6 = 4320" },
          ]}
        />
        <p>If vowels must <em>not</em> be together: 8! − 4320 = 40320 − 4320 = <strong>36000</strong>.</p>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Together = bundle">
          When k objects must be together, treat them as a single block. Arrange the block + remaining objects, then multiply by k! for internal arrangements.
        </Callout>
        <Callout type="tip" title="Leading zero trap">
          Numbers from a digit set: always subtract those starting with 0. Count total arrangements, then subtract those with 0 in the first position.
        </Callout>
        <Callout type="tip" title="7! − 5! ≠ 2!">
          Factorials don&apos;t subtract like algebra. 7! − 5! = 5040 − 120 = 4920, not 2!. Never factor out and cancel naively.
        </Callout>
      </SpeedTricks>

      <Callout type="warning" title="Hard-Level Tips: Permutations Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Order matters vs not:</strong> If swapping two objects gives a &ldquo;different&rdquo; result, it&apos;s a permutation. If not, it&apos;s a combination.</li>
          <li><strong>Repetition check:</strong> Read carefully — &ldquo;with repetition allowed&rdquo; changes the formula from nPr to nʳ.</li>
          <li><strong>Duplicate objects:</strong> When objects repeat, divide by factorials of repeat counts. Missing this overcounts.</li>
          <li><strong>Division principle:</strong> n!/(p₁! p₂! ⋯ pₖ!) — the denominator accounts for identical objects being indistinguishable.</li>
        </ul>
      </Callout>

      <h2 id="h-combinations">6.4 Combinations</h2>
      <Callout type="important" title="Definition">
        A <strong>combination</strong> is a selection of objects where <strong>order does not matter</strong>.
        The team &#123;X, Y&#125; is the same as &#123;Y, X&#125;.
      </Callout>
      <FormulaCard>
        <p className="font-semibold mb-2">Combinations</p>
        <FormulaBlock latex="^{n}C_{r} = \frac{n!}{r!\,(n-r)!}, \quad 0 \le r \le n" />
        <p className="text-sm text-muted-foreground mt-2">Relationship: nPr = nCr × r!</p>
      </FormulaCard>
      <KeyPoint>
        <strong>nCr = nC(n−r)</strong> — selecting r objects is the same as rejecting n−r objects.
        Also, nC0 = nCn = 1.
      </KeyPoint>
      <KeyPoint>
        <strong>Pascal&apos;s identity:</strong> nCr + nCr+1 = n+1Cr+1
      </KeyPoint>

      <Expandable title="Examples 8 and 9 — Combinations">
        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>
            A committee of 3 from 2 men and 3 women.
            How many committees? How many with exactly 1 man and 2 women?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            Total = 5C3 = 10.
            With 1 man and 2 women = 2C1 × 3C2 = 2 × 3 = 6.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 9">
          <ProblemSolution.Problem>
            A team of 5 from 4 girls and 7 boys: (i) no girl, (ii) at least 1 boy and 1 girl, (iii) at least 3 girls?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "(i) No girl", description: "7C5 = 21" },
                { label: "(ii) At least 1 boy + 1 girl", description: "7C1×4C4 + 7C2×4C3 + 7C3×4C2 + 7C4×4C1 = 7+84+210+140 = 441" },
                { label: "(iii) At least 3 girls", description: "4C3×7C2 + 4C4×7C1 = 84+7 = 91" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

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

      <SpeedTricks>
        <Callout type="tip" title="Combination = divide by r!">
          nPr counts ordered arrangements. If order doesn&apos;t matter, divide by r! to get nCr. Think: &ldquo;I counted each group r! times.&rdquo;
        </Callout>
        <Callout type="tip" title="nCr = nC(n−r) shortcut">
          Use the smaller r for quicker calculation. 10C8 = 10C2 = 45, not 10!/(8!2!) computed longhand.
        </Callout>
        <Callout type="tip" title="At least = complementary counting">
          &ldquo;At least 1&rdquo; problems: compute 1 − P(none) or total − (cases with none). Often simpler than summing all positive cases.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-ex-6-1" title="Miscellaneous Exercise on Chapter 6">
        <ol>
          <li>How many 3-digit numbers can be formed from 1, 2, 3, 4, 5 (a) with repetition, (b) without repetition?</li>
          <li>How many 4-letter words can be formed from COMMITTEE (with repetition of letters)?</li>
          <li>In how many ways can 5 boys and 3 girls sit in a row so that no two girls are together?</li>
          <li>In how many ways can 7 people sit around a table? (Circular permutations)</li>
        </ol>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>(a) 5³ = 125. (b) 5P3 = 60.</li>
            <li>9!/(2!×2!×2!) = 45360.</li>
            <li>5! × 6P3 = 120 × 120 = 14400.</li>
            <li>(7−1)! = 6! = 720.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Callout type="warning" title="Hard-Level Tips: Combinations Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Committee vs selection:</strong> If the problem says &ldquo;committee,&rdquo; order doesn&apos;t matter → combination. If it says &ldquo;president + secretary,&rdquo; order matters → permutation.</li>
          <li><strong>At least 1:</strong> Use complementary counting — total minus (none of that type). Much faster than summing all positive cases.</li>
          <li><strong>Pascal&apos;s identity:</strong> nCr + nCr+1 = n+1Cr+1 — useful for proving identities and simplifying sums.</li>
          <li><strong>nC0 = nCn = 1:</strong> Choosing nothing or choosing everything — both have exactly one way.</li>
        </ul>
      </Callout>
    </>
  );
}
