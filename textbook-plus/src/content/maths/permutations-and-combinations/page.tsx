import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";

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
