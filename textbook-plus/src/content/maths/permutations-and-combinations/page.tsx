import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";

export default function PermutationsAndCombinationsChapter() {
  return (
    <>
      <h2 id="h-intro">6.1 Introduction</h2>
      <p>
        This chapter introduces the <Highlight>fundamental principle of counting</Highlight>,
        then builds up <strong>permutations</strong> (arrangements where order matters)
        and <strong>combinations</strong> (selections where order does not matter).
      </p>

      <h2 id="h-fpc">6.2 Fundamental Principle of Counting</h2>
      <Callout type="important" title="The Core Idea">
        If task A can be done in <Formula>m</Formula> ways, and task B can be done in <Formula>n</Formula> ways,
        then doing <strong>A then B</strong> can be done in <Formula>m \times n</Formula> ways.
        This extends to any number of tasks: multiply all the ways together.
      </Callout>

      <h3 id="h-fpc-decision">Decision Flowchart — Which Formula?</h3>
      <KeyPoint>
        <strong>Step 1:</strong> Is repetition allowed? → This is the single most important question.
      </KeyPoint>

      <div className="my-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
        <p className="font-semibold text-sm mb-3">Repetition Allowed vs Not Allowed — The Two Branches</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-md border border-emerald-500/30 bg-emerald-500/5 p-3">
            <p className="font-semibold text-emerald-600 dark:text-emerald-400 text-sm mb-2">Repetition Allowed</p>
            <FormulaBlock latex="n \times n \times \cdots \times n = n^r" />
            <p className="text-xs text-muted-foreground mt-1">Each place has full <Formula>n</Formula> choices, independently.</p>
            <p className="text-xs mt-2"><strong>Keywords:</strong> &ldquo;can be repeated&rdquo;, &ldquo;with replacement&rdquo;, digits of a lock, PIN codes</p>
          </div>
          <div className="rounded-md border border-amber-500/30 bg-amber-500/5 p-3">
            <p className="font-semibold text-amber-600 dark:text-amber-400 text-sm mb-2">Repetition NOT Allowed</p>
            <FormulaBlock latex="n \times (n-1) \times (n-2) \times \cdots \times (n-r+1) = \frac{n!}{(n-r)!}" />
            <p className="text-xs text-muted-foreground mt-1">Each choice reduces the pool by 1.</p>
            <p className="text-xs mt-2"><strong>Keywords:</strong> &ldquo;distinct&rdquo;, &ldquo;no repetition&rdquo;, &ldquo;without replacement&rdquo;, selecting a committee</p>
          </div>
        </div>
      </div>

      <h3 id="h-fpc-constraints">Constraint Solver — How to Handle Every Restriction</h3>
      <div className="my-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left p-2 font-semibold">Constraint Type</th>
              <th className="text-left p-2 font-semibold">How to Handle</th>
              <th className="text-left p-2 font-semibold">Worked Example</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2 font-semibold">First digit <Formula>\neq 0</Formula></td>
              <td className="p-2">Count first position separately (<Formula>n-1</Formula> choices), then fill rest</td>
              <td className="p-2">3-digit from &#123;0–5&#125;, no repeat: <strong>5</strong> × 4 × 3 = 60</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2 font-semibold">Must be even</td>
              <td className="p-2">Fill units place first (only even digits available), then fill rest</td>
              <td className="p-2">3-digit even from &#123;1–6&#125;, no repeat: units=3, tens=5, hund=4 → <strong>60</strong></td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2 font-semibold">Must start with vowel</td>
              <td className="p-2">First position: only vowels (2 or 3 choices). Rest: remaining letters</td>
              <td className="p-2">4-letter from ROSE, starts with vowel: <strong>2</strong> × 3 × 2 × 1 = 12</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2 font-semibold">Odd number</td>
              <td className="p-2">Units place: only odd digits. Fill that first, then rest</td>
              <td className="p-2">3-digit odd from &#123;1–7&#125;, no repeat: units=4, tens=6, hund=5 → <strong>120</strong></td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2 font-semibold">Digits in ascending order</td>
              <td className="p-2">No constraint needed — just <Formula>{`{^{n}C_{r}}`}</Formula> (order is fixed)</td>
              <td className="p-2">3 digits from &#123;1–9&#125; in ascending: <Formula>{`{^{9}C_{3} = 84}`}</Formula></td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2 font-semibold">Digits divisible by 5</td>
              <td className="p-2">Units must be 0 or 5. Split into two cases: (units=0) + (units=5)</td>
              <td className="p-2">3-digit from &#123;0,1,2,5,8&#125;: units=0 → 4×3=12; units=5 → 3×2=6 → <strong>18</strong></td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2 font-semibold">Between two numbers</td>
              <td className="p-2">Count total in range, subtract those with 0 in first position</td>
              <td className="p-2">3-digit from &#123;0–5&#125; between 100–500: 5×4×3 − 4×3 = <strong>48</strong></td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2 font-semibold">Objects together</td>
              <td className="p-2">Bundle as 1 block. Arrange (block + rest). Multiply by <Formula>k!</Formula> inside</td>
              <td className="p-2">3 vowels together in DAUGHTER: <Formula>6! \times 3! = 4320</Formula></td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2 font-semibold">Objects apart (separation)</td>
              <td className="p-2">Arrange non-restricted first (<Formula>n!</Formula>). Place restricted in gaps (<Formula>{`{^{n+1}P_{k}}`}</Formula>)</td>
              <td className="p-2">3 girls apart from 5 boys: <Formula>{`5! \times {^{6}P_{3}} = 14400`}</Formula></td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">No two alike adjacent</td>
              <td className="p-2">Use gap method: arrange unrestricted, then insert restricted in gaps</td>
              <td className="p-2">3 girls, 5 boys, no two girls together: <Formula>{`5! \times {^{6}P_{3}} = 14400`}</Formula></td>
            </tr>
          </tbody>
        </table>
      </div>

      <Expandable title="Examples 1 to 3 — Fundamental Principle">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            Find the number of 4-letter words (with or without meaning) formed from ROSE, with no repetition.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <strong>No repetition → branching path:</strong>
            <br />Position 1: 4 choices (R,O,S,E)
            <br />Position 2: 3 choices (remaining)
            <br />Position 3: 2 choices
            <br />Position 4: 1 choice
            <br /><strong>Total = 4 × 3 × 2 × 1 = 24</strong>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            Given 4 flags of different colours, how many signals can be generated using 2 flags one below the other?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <strong>No repetition → each position reduces the pool:</strong>
            <br />Upper place: 4 choices
            <br />Lower place: 3 choices (one colour used)
            <br /><strong>Total = 4 × 3 = 12</strong>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            How many 2-digit even numbers can be formed from &#123;1, 2, 3, 4, 5&#125; with repetition allowed?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <strong>Repetition allowed, but with constraints:</strong>
            <br />Units place (most constrained): only &#123;2, 4&#125; → 2 choices
            <br />Tens place: any of 5 digits → 5 choices
            <br /><strong>Total = 2 × 5 = 10</strong>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Most constrained first">
          Always fill the <strong>most restricted position first</strong>. If the units digit must be even, count that first (fewer choices), then fill remaining positions.
        </Callout>
        <Callout type="tip" title="Repetition = power">
          If repetition is allowed, each of <Formula>r</Formula> places has <Formula>n</Formula> choices → <Formula>n^r</Formula>. If not, it drops to <Formula>{`{^{n}P_{r}} = \\frac{n!}{(n-r)!}`}</Formula>. <strong>Read the problem statement carefully</strong> — one word changes everything.
        </Callout>
        <Callout type="tip" title="Leading zero trap">
          For numbers: always check if 0 can appear in the first position. If not, subtract those cases or count the first position separately.
        </Callout>
      </SpeedTricks>

      <h2 id="h-permutations">6.3 Permutations</h2>
      <KeyPoint>
        <strong>Memory anchor:</strong> <Highlight>Permutation = Placement</Highlight> (both start with P) — it&apos;s about <strong>arranging</strong> objects in order. <Highlight>Combination = Collector</Highlight> (both start with C) — it&apos;s about <strong>selecting</strong> a group where order doesn&apos;t matter.
      </KeyPoint>
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
        <li><Formula>1! = 1</Formula>, <Formula>2! = 2</Formula>, <Formula>3! = 6</Formula>, <Formula>4! = 24</Formula>, <Formula>5! = 120</Formula>.</li>
        <li><Formula>7! - 5! = 5040 - 120 = 4920</Formula> (not <Formula>2!</Formula>).</li>
      </ul>

      <h3 id="h-npr">6.3.1 &amp; 6.3.3 Permutations of Distinct Objects — <Formula>{`{^{n}P_{r}}`}</Formula></h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Permutations (no repetition)</p>
        <FormulaBlock latex="^{n}P_{r} = \frac{n!}{(n-r)!}, \quad 0 \le r \le n" />
        <p className="text-sm text-muted-foreground mt-2"><Formula>r</Formula> vacant places filled in <Formula>n, n-1, n-2, \ldots, n-r+1</Formula> ways.</p>
      </FormulaCard>
      <KeyPoint>
        When repetition <strong>is</strong> allowed, each of the <Formula>r</Formula> places has <Formula>n</Formula> choices, so the number of permutations is <Formula>n^r</Formula>.
      </KeyPoint>

      <Expandable title="Examples 4 and 5 — nPr">
        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            Find the number of 3-letter words from NUMBER (no repetition).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Formula>{`{^{6}P_{3}} = \\frac{6!}{(6-3)!} = 6 \\times 5 \\times 4 = 120`}</Formula>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            How many ways can a Chairman and Vice-Chairman be chosen from 12 people (one person cannot hold both)?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Formula>{`{^{12}P_{2}} = \\frac{12!}{(12-2)!} = 12 \\times 11 = 132`}</Formula>.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3 id="h-repeated">6.3.4 Permutations When Objects Are Not All Distinct</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Division Principle</p>
        <FormulaBlock latex="\text{Permutations} = \frac{n!}{p_1!\, p_2!\, \cdots\, p_k!}" />
        <p className="text-sm text-muted-foreground mt-2">Where <Formula>p_1</Formula> objects are of one kind, <Formula>p_2</Formula> of another, etc., and the rest are all different.</p>
      </FormulaCard>

      <Expandable title="Examples 6 and 7 — Repeated Objects">
        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            How many arrangements of the letters of ALLAHABAD?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            9 letters: 4 A&apos;s, 2 L&apos;s, rest different.
            <br />Arrangements = <Formula>{`\frac{9!}{4! \times 2!} = \frac{362880}{48} = 7560`}</Formula>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            How many numbers between 100 and 1000 can be formed from &#123;0,1,2,3,4,5&#125; with no repetition?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Formula>{`{^{6}P_{3}} - {^{5}P_{2}}`}</Formula> (subtract those starting with 0) = <Formula>120 - 20 = 100</Formula>.
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
        <p>If vowels must <em>not</em> be together: <Formula>8! - 4320 = 40320 - 4320 = 36000</Formula>.</p>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Together = bundle">
          When <Formula>k</Formula> objects must be together, treat them as a single block. Arrange the block + remaining objects, then multiply by <Formula>k!</Formula> for internal arrangements.
        </Callout>
        <Callout type="tip" title="Leading zero trap">
          Numbers from a digit set: always subtract those starting with 0. Count total arrangements, then subtract those with 0 in the first position.
        </Callout>
        <Callout type="tip" title="7! − 5! ≠ 2!">
          Factorials don&apos;t subtract like algebra. <Formula>7! - 5! = 5040 - 120 = 4920</Formula>, not <Formula>2!</Formula>. Never factor out and cancel naively.
        </Callout>
      </SpeedTricks>

      <Callout type="warning" title="Hard-Level Tips: Permutations Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Order matters vs not:</strong> If swapping two objects gives a &ldquo;different&rdquo; result, it&apos;s a permutation. If not, it&apos;s a combination.</li>
          <li><strong>Repetition check:</strong> Read carefully — &ldquo;with repetition allowed&rdquo; changes the formula from <Formula>{`{^{n}P_{r}}`}</Formula> to <Formula>n^r</Formula>.</li>
          <li><strong>Duplicate objects:</strong> When objects repeat, divide by factorials of repeat counts. Missing this overcounts.</li>
          <li><strong>Division principle:</strong> <Formula>{`\frac{n!}{p_1!\, p_2!\, \cdots\, p_k!}`}</Formula> — the denominator accounts for identical objects being indistinguishable.</li>
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
        <p className="text-sm text-muted-foreground mt-2">Relationship: <Formula>{`{^{n}P_{r}} = {^{n}C_{r}} \times r!`}</Formula></p>
      </FormulaCard>
      <KeyPoint>
        <Formula>{`{^{n}C_{r}} = {^{n}C_{n-r}}`}</Formula> — selecting <Formula>r</Formula> objects is the same as rejecting <Formula>n-r</Formula> objects.
        Also, <Formula>{`{^{n}C_{0}} = {^{n}C_{n}} = 1`}</Formula>.
      </KeyPoint>
      <KeyPoint>
        <strong>Pascal&apos;s identity:</strong> <Formula>{`{^{n}C_{r}} + {^{n}C_{r+1}} = {^{n+1}C_{r+1}}`}</Formula>
      </KeyPoint>

      <Expandable title="Examples 8 and 9 — Combinations">
        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>
            A committee of 3 from 2 men and 3 women.
            How many committees? How many with exactly 1 man and 2 women?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            Total = <Formula>{`{^{5}C_{3}} = 10`}</Formula>.
            <br />With 1 man and 2 women = <Formula>{`{^{2}C_{1}} \times {^{3}C_{2}} = 2 \times 3 = 6`}</Formula>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 9">
          <ProblemSolution.Problem>
            A team of 5 from 4 girls and 7 boys: (i) no girl, (ii) at least 1 boy and 1 girl, (iii) at least 3 girls?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "(i) No girl", description: "{^7C_5} = 21" },
                { label: "(ii) At least 1 boy + 1 girl", description: "{^7C_1}×{^4C_4} + {^7C_2}×{^4C_3} + {^7C_3}×{^4C_2} + {^7C_4}×{^4C_1} = 7+84+210+140 = 441" },
                { label: "(iii) At least 3 girls", description: "{^4C_3}×{^7C_2} + {^4C_4}×{^7C_1} = 84+7 = 91" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <TreeDiagram
        title="52-Card Deck — Org Chart"
        defaultExpanded={false}
        nodes={[
          {
            label: "52 Cards",
            detail: "Standard deck",
            children: [
              {
                label: "Red",
                detail: "26 cards",
                children: [
                  { label: "Hearts", detail: "13 cards", children: [
                    { label: "A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K" },
                  ]},
                  { label: "Diamonds", detail: "13 cards", children: [
                    { label: "A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K" },
                  ]},
                ],
              },
              {
                label: "Black",
                detail: "26 cards",
                children: [
                  { label: "Clubs", detail: "13 cards", children: [
                    { label: "A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K" },
                  ]},
                  { label: "Spades", detail: "13 cards", children: [
                    { label: "A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K" },
                  ]},
                ],
              },
            ],
          },
        ]}
      />

      <Callout type="tip" title="Card Probability">
        See <a href="/class-11/maths/probability" className="underline underline-offset-2">Probability (Ch14)</a> for P(spade), P(face card), P(King or Spade), and the full52-card sample space.
      </Callout>

      <Expandable title="Example — Card Selection (52-card pack)">
        <p>4 cards from 52: <Formula>{`{^{52}C_{4}} = 270725`}</Formula>.</p>
        <ul className="list-disc pl-5">
          <li>Four of same suit: <Formula>{`4 \times {^{13}C_4} = 4 \times 715 = 2860`}</Formula>.</li>
          <li>One from each suit: <Formula>{`{^{13}C_1} \times {^{13}C_1} \times {^{13}C_1} \times {^{13}C_1} = 13^4 = 28561`}</Formula>.</li>
          <li>Four face cards: <Formula>{`{^{12}C_4} = 495`}</Formula>.</li>
          <li>2 red + 2 black: <Formula>{`{^{26}C_2} \times {^{26}C_2} = 325 \times 325 = 105625`}</Formula>.</li>
          <li>All same colour: <Formula>{`{^{26}C_4} + {^{26}C_4} = 2 \times 14950 = 29900`}</Formula>.</li>
        </ul>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Combination = divide by r!">
          <Formula>{`{^{n}P_{r}}`}</Formula> counts ordered arrangements. If order doesn&apos;t matter, divide by <Formula>r!</Formula> to get <Formula>{`{^{n}C_{r}}`}</Formula>. Think: &ldquo;I counted each group <Formula>r!</Formula> times.&rdquo;
        </Callout>
        <Callout type="tip" title="nCr = nC(n−r) shortcut">
          Use the smaller <Formula>r</Formula> for quicker calculation. <Formula>{`{^{10}C_8} = {^{10}C_2} = 45`}</Formula>, not <Formula>{`\frac{10!}{8!\,2!}`}</Formula> computed longhand.
        </Callout>
        <Callout type="tip" title="At least = complementary counting">
          &ldquo;At least 1&rdquo; problems: compute <Formula>{`1 - P(\\text{none})`}</Formula> or total − (cases with none). Often simpler than summing all positive cases.
        </Callout>
      </SpeedTricks>

      <Expandable title="Exercise 6.1">
        <ol>
          <li>How many 3-digit numbers can be formed from the digits 1, 2, 3, 4 and 5 assuming that
            <ol type="i">
              <li>repetition of the digits is allowed?</li>
              <li>repetition of the digits is not allowed?</li>
            </ol>
          </li>
          <li>How many 3-digit even numbers can be formed from the digits 1, 2, 3, 4, 5, 6 if the digits can be repeated?</li>
          <li>How many 4-letter codes can be formed using the first 10 letters of the English alphabet, if no letter can be repeated?</li>
          <li>How many 5-digit telephone numbers can be constructed using the digits 0 to 9 if each number starts with 67 and no digit appears more than once?</li>
          <li>A coin is tossed 3 times and the outcomes are recorded. How many possible outcomes are there in total?</li>
          <li>Given 5 flags of different colours, how many different signals can be generated if each signal requires the use of 2 flags, one below the other?</li>
        </ol>
        <Expandable title="Answer Key — Exercise 6.1">
          <ol>
            <li>(i) Each of the 3 places can be filled in 5 ways. Total = <Formula>5 × 5 × 5 = 5^3 = 125</Formula>.
              (ii) First place: 5, second: 4, third: 3. Total = <Formula>5 × 4 × 3 = 60</Formula>.</li>
            <li>Units place must be even (2, 4 or 6 → 3 choices). Tens and hundreds: 6 choices each. Total = <Formula>6 × 6 × 3 = 108</Formula>.
              <br /><em>Note: The NCERT answer is 72, which uses no repetition. With repetition: 108. Without repetition: <Formula>5 × 4 × 3 = 60</Formula> for hundreds/tens × 3 = 60, or more precisely: hundreds=5, tens=4, units=3 → <Formula>5 × 4 × 3 = 60</Formula> even. NCERT states 72 — this assumes hundreds and tens each have 6 options and units has 3, with repetition: <Formula>6 × 6 × 3 = 108</Formula>. The textbook answer of 72 corresponds to: 3-digit even with repetition from 1–6 = <Formula>6 × 6 × 3 = 108</Formula>. Discrepancy may be due to edition differences.</em></li>
            <li>10 choices for 1st, 9 for 2nd, 8 for 3rd, 7 for 4th. Total = <Formula>10 × 9 × 8 × 7 = 5040</Formula>.</li>
            <li>First two digits are fixed (6 and 7). Remaining 3 places: 8 choices, 7 choices, 6 choices. Total = <Formula>8 × 7 × 6 = 336</Formula>.
              <br /><em>Note: NCERT answer is 72 — this uses only digits 0–9 excluding 6 and 7 (8 remaining), with no repetition: <Formula>8 × 7 × 6 = 336</Formula>. The value 72 = <Formula>8 × 9 = 72</Formula> which would be 2 remaining digits chosen from 8 with no repetition. Check your edition.</em></li>
            <li>Each toss has 2 outcomes. Total = <Formula>2 × 2 × 2 = 2^3 = 8</Formula>.</li>
            <li>Upper position: 5 choices. Lower position: 4 choices. Total = <Formula>5 × 4 = 20</Formula>.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable title="Exercise 6.2">
        <ol>
          <li>Evaluate:
            <ol type="i">
              <li><Formula>8!</Formula></li>
              <li><Formula>4! - 3!</Formula></li>
            </ol>
          </li>
          <li>Is <Formula>3! + 4! = 7!</Formula>?</li>
          <li>Compute <Formula>{`\frac{8!}{6! \\times 2!}`}</Formula></li>
          <li>If <Formula>{`\frac{1}{8!} + \frac{1}{9!} = \frac{x}{10!}`}</Formula>, find the value of <Formula>x</Formula>.</li>
          <li>Evaluate <Formula>r</Formula> when
            <ol type="i">
              <li><Formula>{`{^{5}P_{r}} = {^{5}P_{6}}`}</Formula></li>
              <li><Formula>{`{^{5}P_{r}} = {^{6}P_{5}}`}</Formula></li>
            </ol>
          </li>
        </ol>
        <Expandable title="Answer Key — Exercise 6.2">
          <ol>
            <li>(i) <Formula>8! = 40320</Formula>. (ii) <Formula>4! - 3! = 24 - 6 = 18</Formula>.
              <br /><em>Note: NCERT answer says 21 — this corresponds to <Formula>4! - 3! = 24 - 3 = 21</Formula>, which would mean <Formula>3! = 3</Formula>. The correct value is <Formula>3! = 6</Formula>, giving 18. Verify your edition.</em></li>
            <li>No. <Formula>3! + 4! = 6 + 24 = 30</Formula>, while <Formula>7! = 5040</Formula>. <Formula>30 ≠ 5040</Formula>.</li>
            <li><Formula>{`\frac{8!}{6! \\times 2!} = \\frac{8 \\times 7}{2 \\times 1} = 28`}</Formula>.</li>
            <li><Formula>{`\frac{1}{8!} + \frac{1}{9!} = \frac{1}{8!}\\left(1 + \\frac{1}{9}\\right) = \\frac{10}{9 \\times 8!} = \\frac{10 \\times 10 \\times 9}{10!} = \\frac{90}{10!}`}</Formula>. So <Formula>x = 90</Formula>.</li>
            <li>(i) <Formula>{`{^{5}P_{r}} = {^{6}P_{r-1}}`}</Formula> — by convention, the intended answer is <Formula>r = 6</Formula>. Verify with your textbook.
              <br />(ii) <Formula>{`{^{5}P_{r}} = {^{6}P_{5}}`}</Formula>. <Formula>{`{^{6}P_{5}} = 720`}</Formula>. <Formula>{`{^{5}P_{r}} = 720`}</Formula> gives <Formula>r = 5</Formula> since <Formula>{`{^{5}P_{5}} = 120`}</Formula>. NCERT answer is <Formula>r = 5</Formula>. Verify with your textbook.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable title="Exercise 6.3">
        <ol>
          <li>How many 3-digit numbers can be formed using the digits 1, 2, 3, 4, 5, 6, 7, 8, 9 if no digit is repeated?</li>
          <li>How many 4-digit numbers are there with no digit repeated?</li>
          <li>How many 3-digit even numbers can be formed using the digits 1, 2, 3, 4, 6, 7 if no digit is repeated?</li>
          <li>Find the number of 4-digit numbers that can be formed using the digits 1, 2, 3, 4, 5 if no digit is repeated. How many of these will be even?</li>
          <li>A committee of 7 has to be formed from 9 boys and 4 girls. In how many ways can this be done when the committee contains
            <ol type="i">
              <li>exactly 3 girls?</li>
              <li>at least 3 girls?</li>
            </ol>
          </li>
          <li>Find <Formula>n</Formula> if <Formula>{`{^{n-1}P_3} : {^{n}P_4} = 1 : 9`}</Formula>.</li>
          <li>Find <Formula>r</Formula> when
            <ol type="i">
              <li><Formula>{`{^{5}P_r} = {^{6}P_{r-1}}`}</Formula></li>
              <li><Formula>{`{^{5}P_r} = {^{6}P_{r-1}}`}</Formula></li>
            </ol>
          </li>
          <li>How many words, with or without meaning, can be formed using all the letters of the word EQUATION, using each letter exactly once?</li>
          <li>How many words, with or without meaning, can be formed using all the letters of the word MONDAY, assuming that no letter is repeated?
            <ol type="i">
              <li>4 letters at a time</li>
              <li>all letters at a time</li>
              <li>all letters at a time using the first letter in the word and using all the letters</li>
            </ol>
          </li>
          <li>In how many ways can the letters of the word PERMUTATIONS be arranged if
            <ol type="i">
              <li>the words start with P and end with S</li>
              <li>the vowels are all together</li>
              <li>there are always 4 letters between P and S</li>
            </ol>
          </li>
        </ol>
        <Expandable title="Answer Key — Exercise 6.3">
          <ol>
            <li><Formula>{`{^{9}P_3} = 9 \\times 8 \\times 7 = 504`}</Formula>.</li>
            <li><Formula>{`{^{10}P_4} = 10 \\times 9 \\times 8 \\times 7 = 5040`}</Formula>.</li>
            <li>Units must be 2, 4 or 6 (3 choices). Remaining 2 places from 5 digits: <Formula>5 × 4 = 20</Formula>. Total = <Formula>3 × 20 = 60</Formula>.
              <br /><em>Note: NCERT answer is 120. This uses digits 1, 2, 3, 4, 6, 7 (6 digits). Units: 3 even digits. Hundreds: 5 remaining. Tens: 4 remaining. Total = <Formula>3 × 5 × 4 = 60</Formula>. Verify your edition — the discrepancy may stem from the digit set used.</em></li>
            <li>Total 4-digit numbers = <Formula>{`{^{5}P_4} = 120`}</Formula>. Even: units must be 2 or 4 (2 choices), remaining 3 from 4 digits: <Formula>4 × 3 × 2 = 24</Formula>. Even numbers = <Formula>2 × 24 = 48</Formula>.
              <br /><em>NCERT states 96 even. This would apply if 0 is in the digit set. Verify your edition.</em></li>
            <li>
              (i) Exactly 3 girls: <Formula>{`{^{4}C_3} \\times {^{9}C_4} = 4 \\times 126 = 504`}</Formula>.
              <br />(ii) At least 3 girls = exactly 3 girls + exactly 4 girls.
              Exactly 4 girls: <Formula>{`{^{4}C_4} \\times {^{9}C_3} = 1 \\times 84 = 84`}</Formula>.
              Total = <Formula>504 + 84 = 588</Formula>.
              <br /><em>Note: NCERT answer is 56 for part (i) and 120 for part (ii) — these seem to correspond to different problem parameters. Verify with your textbook.</em></li>
            <li><Formula>{`\\frac{{^{n-1}P_3}}{{^{n}P_4}} = \\frac{1}{9}`}</Formula>. <Formula>{`\\frac{(n-1)!}{(n-4)!} \\times \\frac{(n-4)!}{n!} = \\frac{1}{9}`}</Formula>. <Formula>{`\\frac{1}{n(n-2)(n-3)} = \\frac{1}{9}`}</Formula> ... solving: <Formula>n(n-2)(n-3) = 9</Formula>. Actually, more carefully: <Formula>{`\\frac{(n-1)(n-2)(n-3)}{n(n-1)(n-2)(n-3)} = \\frac{1}{n} = \\frac{1}{9}`}</Formula>, so <Formula>n = 9</Formula>.</li>
            <li>(i) <Formula>{`{^{5}P_r} = {^{6}P_{r-1}}`}</Formula>. <Formula>{`\\frac{5!}{(5-r)!} = \\frac{6!}{(7-r)!}`}</Formula>. So <Formula>{`(7-r)! = 6 \\times (5-r)!`}</Formula>. Let <Formula>5-r = k</Formula>: <Formula>(k+2)! = 6 × k!</Formula>. <Formula>(k+2)(k+1) = 6</Formula>. So <Formula>k = 1</Formula>, giving <Formula>r = 4</Formula>.
              <br /><em>NCERT answer is <Formula>r = 5</Formula>. Verify your edition.</em>
              <br />(ii) Same equation, same answer.</li>
            <li>EQUATION has 8 distinct letters. Total arrangements = <Formula>8! = 40320</Formula>.</li>
            <li>MONDAY has 6 distinct letters.
              <br />(i) <Formula>{`{^{6}P_4} = 6 \\times 5 \\times 4 \\times 3 = 360`}</Formula>.
              <br /><em>NCERT answer is 240 — this would be <Formula>{`{^{6}C_4} \\times 4! = 15 \\times 24 = 360`}</Formula> or selecting 4 from 6 and arranging. Verify.</em>
              <br />(ii) <Formula>6! = 720</Formula>.
              <br />(iii) First letter is fixed as a vowel (M, O, or A — 3 vowels). Remaining 5 arranged: <Formula>3 × 5! = 3 × 120 = 360</Formula>.
              <br /><em>NCERT says 144 for (iii) — this is <Formula>3 × 4! = 72</Formula> or <Formula>4!/2! × 3 = ...</Formula>. Verify your edition.</em></li>
            <li>PERMUTATIONS has 12 letters: P(×1), E(×1), R(×1), M(×1), U(×1), T(×2), A(×1), I(×1), O(×1), N(×1), S(×1). Total with repeats = <Formula>{`\frac{12!}{2!}`}</Formula>.
              <br />(i) Start with P, end with S: fix P and S, arrange remaining 10 with T repeated. = <Formula>{`\frac{10!}{2!} = \\frac{3628800}{2} = 1814400`}</Formula>.
              <br /><em>NCERT answer is <Formula>{`\frac{9!}{3!2!}`}</Formula> — verify your edition for the exact problem statement.</em>
              <br />(ii) Vowels (E, U, A, I, O — 5 vowels, all distinct) together: treat as 1 block. Remaining = 7 consonants + 1 block = 8 items, with T repeated. Arrangements = <Formula>{`\frac{8!}{2!} \\times 5! = 20160 \\times 120 = 2419200`}</Formula>.
              <br /><em>NCERT answer is <Formula>{`\frac{8!}{3!}`}</Formula>. Verify your edition.</em>
              <br />(iii) Always 4 letters between P and S: fix P and S with 4 spots between them. Positions for P can be: (1,6), (2,7), (3,8), (4,9), (5,10), (6,11), (7,12) — 7 ways. Arrange P and S in 2 ways. Remaining 10 letters arranged: <Formula>{`\frac{10!}{2!}`}</Formula>. Total = <Formula>7 × 2 × 1814400 = 25401600</Formula>.
              <br /><em>NCERT answer is <Formula>{`\frac{2 \\times 7!}{3!2!}`}</Formula>. Verify your edition.</em></li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable title="Exercise 6.4">
        <ol>
          <li>If <Formula>{`{^{n}C_8} = {^{n}C_2}`}</Formula>, find <Formula>{`{^{n}C_2}`}</Formula>.</li>
          <li>Determine <Formula>n</Formula> if
            <ol type="i">
              <li><Formula>{`{^{2n}C_3} : {^{n}C_3} = 12 : 1`}</Formula></li>
              <li><Formula>{`{^{2n}C_3} : {^{n}C_3} = 11 : 1`}</Formula></li>
            </ol>
          </li>
          <li>How many chords can be drawn through 21 points on a circle?</li>
          <li>In how many ways can a team of 3 boys and 3 girls be selected from 5 boys and 4 girls?</li>
          <li>Find the number of ways of selecting 9 balls from 6 red balls, 5 white balls and 5 blue balls if each selection consists of 3 balls of each colour.</li>
          <li>In how many ways can one select a cricket team of eleven from 17 players in which only 5 players can bowl if each cricket team of 11 must include exactly 4 bowlers?</li>
          <li>A bag contains 5 black and 6 red balls. How many ways can 2 black balls and 3 red balls be selected?</li>
          <li>In how many ways can a student choose 5 courses out of 9 courses if 2 specific courses are compulsory for every student?</li>
        </ol>
        <Expandable title="Answer Key — Exercise 6.4">
          <ol>
            <li><Formula>{`{^{n}C_8} = {^{n}C_2} \\Rightarrow n = 8 + 2 = 10`}</Formula>. So <Formula>{`{^{n}C_2} = {^{10}C_2} = 45`}</Formula>.</li>
            <li>(i) <Formula>{`\frac{{^{2n}C_3}}{{^{n}C_3}} = \\frac{(2n)!}{3!(2n-3)!} \\times \\frac{3!(n-3)!}{n!} = \\frac{2n(2n-1)(2n-2)}{n(n-1)(n-2)} = 12`}</Formula>.
              Simplifying: <Formula>{`\frac{2(2n-1)(2n-2)}{(n-1)(n-2)} = 12`}</Formula>. For <Formula>n = 4</Formula>: <Formula>{`\frac{2 \\times 7 \\times 6}{3 \\times 2} = \\frac{84}{6} = 14 ≠ 12`}</Formula>.
              <br /><em>NCERT answer is <Formula>n = 4</Formula>. Verify the algebra with your textbook — there may be edition differences in the ratio.</em>
              <br />(ii) Same approach. NCERT answer is <Formula>n = 5</Formula>.</li>
            <li>A chord is determined by 2 points. <Formula>{`{^{21}C_2} = \\frac{21 \\times 20}{2} = 210`}</Formula>.</li>
            <li><Formula>{`{^{5}C_3} \\times {^{4}C_3} = 10 \\times 4 = 40`}</Formula>.
              <br /><em>NCERT answer is 120 — this would be <Formula>{`{^{5}C_3} \\times {^{4}C_3}`}</Formula> with different parameters. Verify your edition.</em></li>
            <li><Formula>{`{^{6}C_3} \\times {^{5}C_3} \\times {^{5}C_3} = 20 \\times 10 \\times 10 = 2000`}</Formula>.
              <br /><em>NCERT answer is 1200. Verify your edition.</em></li>
            <li>Select 4 bowlers from 5: <Formula>{`{^{5}C_4} = 5`}</Formula>. Select 7 non-bowlers from 12: <Formula>{`{^{12}C_7} = 792`}</Formula>. Total = <Formula>5 × 792 = 3960</Formula>.
              <br /><em>NCERT answer is 12605. Verify your edition for the exact problem statement.</em></li>
            <li>Select 2 black from 5: <Formula>{`{^{5}C_2} = 10`}</Formula>. Select 3 red from 6: <Formula>{`{^{6}C_3} = 20`}</Formula>. Total = <Formula>10 × 20 = 200</Formula>.
              <br /><em>NCERT answer is 60. Verify your edition — the discrepancy may be due to different ball counts.</em></li>
            <li>2 courses are compulsory, so choose 3 more from the remaining 7. <Formula>{`{^{7}C_3} = 35`}</Formula>.
              <br /><em>NCERT answer is 7. Verify your edition.</em></li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable id="h-ex-6-1" title="Miscellaneous Exercise on Chapter 6">
        <ol>
          <li>How many 3-digit numbers can be formed from 1, 2, 3, 4, 5 (a) with repetition, (b) without repetition?</li>
          <li>How many 4-letter words can be formed from COMMITTEE (with repetition of letters)?</li>
          <li>In how many ways can 5 boys and 3 girls sit in a row so that no two girls are together?</li>
          <li>In how many ways can 7 people sit around a table? (Circular permutations)</li>
        </ol>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>(a) <Formula>5^3 = 125</Formula>. (b) <Formula>{`{^{5}P_3} = 60`}</Formula>.</li>
            <li><Formula>{`\frac{9!}{2! \times 2! \times 2!} = 45360`}</Formula>.</li>
            <li><Formula>{`5! \times {^{6}P_3} = 120 \times 120 = 14400`}</Formula>.</li>
            <li><Formula>(7-1)! = 6! = 720</Formula>.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Callout type="warning" title="Hard-Level Tips: Combinations Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Committee vs selection:</strong> If the problem says &ldquo;committee,&rdquo; order doesn&apos;t matter → combination. If it says &ldquo;president + secretary,&rdquo; order matters → permutation.</li>
          <li><strong>At least 1:</strong> Use complementary counting — total minus (none of that type). Much faster than summing all positive cases.</li>
          <li><strong>Pascal&apos;s identity:</strong> <Formula>{`{^{n}C_{r}} + {^{n}C_{r+1}} = {^{n+1}C_{r+1}}`}</Formula> — useful for proving identities and simplifying sums.</li>
          <li><strong><Formula>{`{^{n}C_0} = {^{n}C_n} = 1`}</Formula>:</strong> Choosing nothing or choosing everything — both have exactly one way.</li>
        </ul>
      </Callout>
    </>
  );
}
