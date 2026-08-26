import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function ProbabilityChapter() {
  return (
    <>
      <h2 id="h-intro">14.1 Introduction</h2>
      <Callout type="note" title="Why Probability?">
        Weather forecasts, card games, insurance — all involve <strong>uncertainty</strong>.
        Probability quantifies how likely an event is to occur.
        This chapter builds from <Highlight>random experiments and sample spaces</Highlight> to the axiomatic definition of probability.
      </Callout>

      <h2 id="h-events">14.1 Events</h2>
      <Callout type="important" title="Key Definitions">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Random experiment:</strong> an experiment whose outcome cannot be predicted with certainty (e.g., tossing a coin, rolling a die).</li>
          <li><strong>Sample space (S):</strong> the set of all possible outcomes of a random experiment.</li>
          <li><strong>Event:</strong> a subset of the sample space. An event is said to <Highlight>occur</Highlight> if the actual outcome is an element of that subset.</li>
        </ul>
      </Callout>

      <h3>Types of Events</h3>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Definition</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Impossible event</strong></td>
            <td>An event that can never happen — the empty set ∅</td>
            <td>Getting a 7 on a standard die</td>
          </tr>
          <tr>
            <td><strong>Sure event</strong></td>
            <td>An event that must happen — the sample space S itself</td>
            <td>Getting a number &le; 6 on a die</td>
          </tr>
          <tr>
            <td><strong>Simple event</strong></td>
            <td>An event with exactly one outcome (a singleton set)</td>
            <td>{"{"}Heads{"}"} when tossing a coin</td>
          </tr>
          <tr>
            <td><strong>Compound event</strong></td>
            <td>An event with more than one outcome</td>
            <td>{"{"}H, T{"}"} — the event &quot;a head or a tail&quot;</td>
          </tr>
        </tbody>
      </table>

      <KeyPoint title="Sample Space as Universal Set">
        The sample space S plays the role of the <strong>universal set</strong> in set theory.
        Every event is a subset of S. The empty event ∅ and S itself are always events.
      </KeyPoint>

      <Expandable title="Examples 14.1 — Identifying Sample Spaces and Events">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            Write the sample space for tossing two coins simultaneously.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            S = {"{"}HH, HT, TH, TT{"}"}. Each outcome lists the result of the first coin, then the second.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            A die is rolled once. State the events: (i) getting an even number, (ii) getting a number &ge; 5.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            S = {"{"}1, 2, 3, 4, 5, 6{"}"}.
            <br />
            (i) Even number: A = {"{"}2, 4, 6{"}"}.
            <br />
            (ii) Number &ge; 5: B = {"{"}5, 6{"}"}.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            A coin is tossed three times. Find the number of outcomes and list the event &quot;exactly two heads.&quot;
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            |S| = 2&#179; = 8 outcomes: {"{"}HHH, HHT, HTH, HTT, THH, THT, TTH, TTT{"}"}.
            <br />
            Exactly two heads: E = {"{"}HHT, HTH, THH{"}"}.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Counting sample space size">
          For n independent trials with k outcomes each, |S| = k&#779757;. Coin tossed 3 times: 2&#179; = 8. Die rolled twice: 6&#178; = 36.
        </Callout>
        <Callout type="tip" title="Read carefully: &quot;at least&quot; vs &quot;exactly&quot;">
          &quot;At least 2 heads&quot; = {"{"}HHT, HTH, THH, HHH{"}"} (4 outcomes). &quot;Exactly 2 heads&quot; = {"{"}HHT, HTH, THH{"}"} (3 outcomes). &quot;At most 2 heads&quot; = everything except HHH (7 outcomes).
        </Callout>
      </SpeedTricks>

      <h2 id="h-algebra">14.1.3 Algebra of Events</h2>
      <Callout type="important" title="Set Operations on Events">
        If A and B are events (subsets of S), then:
      </Callout>

      <FormulaCard>
        <p className="font-semibold mb-2">Complement of A</p>
        <FormulaBlock latex="A' = \{x \in S : x \notin A\}" />
        <p className="text-sm text-muted-foreground mt-2">The event &quot;not A&quot; — occurs when A does not occur.</p>
      </FormulaCard>

      <FormulaCard>
        <p className="font-semibold mb-2">A or B (Union)</p>
        <FormulaBlock latex="A \cup B = \{x : x \in A \text{ or } x \in B\}" />
        <p className="text-sm text-muted-foreground mt-2">Occurs when at least one of A, B occurs.</p>
      </FormulaCard>

      <FormulaCard>
        <p className="font-semibold mb-2">A and B (Intersection)</p>
        <FormulaBlock latex="A \cap B = \{x : x \in A \text{ and } x \in B\}" />
        <p className="text-sm text-muted-foreground mt-2">Occurs when both A and B occur simultaneously.</p>
      </FormulaCard>

      <FormulaCard>
        <p className="font-semibold mb-2">A but not B (Difference)</p>
        <FormulaBlock latex="A - B = A \cap B' = \{x : x \in A \text{ and } x \notin B\}" />
        <p className="text-sm text-muted-foreground mt-2">Occurs when A happens but B does not.</p>
      </FormulaCard>

      <KeyPoint title="Important Properties">
        <ul className="list-disc pl-5 space-y-1">
          <li>A &cup; A&apos; = S (sure event) and A &cap; A&apos; = ∅ (impossible event).</li>
          <li>De Morgan&apos;s Laws: (A &cup; B)&apos; = A&apos; &cap; B&apos; and (A &cap; B)&apos; = A&apos; &cup; B&apos;.</li>
          <li>∅&apos; = S and S&apos; = ∅.</li>
        </ul>
      </KeyPoint>

      <Expandable title="Examples 14.2 — Algebra of Events">
        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            A die is rolled. Let A = {"{"}2, 4, 6{"}"} (even numbers), B = {"{"}1, 2, 3{"}"} (numbers &le; 3). Find A &cup; B, A &cap; B, A − B, and A&apos;.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            A &cup; B = {"{"}1, 2, 3, 4, 6{"}"}.
            <br />
            A &cap; B = {"{"}2{"}"}.
            <br />
            A − B = {"{"}4, 6{"}"}.
            <br />
            A&apos; = {"{"}1, 3, 5{"}"}.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            Two coins are tossed. Let A = &quot;at least one head&quot; and B = &quot;both coins show the same face.&quot; Express A &cap; B, A &cup; B, and A&apos; &cap; B&apos; as sets.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            S = {"{"}HH, HT, TH, TT{"}"}.
            A = {"{"}HH, HT, TH{"}"}.
            B = {"{"}HH, TT{"}"}.
            <br />
            A &cap; B = {"{"}HH{"}"}. A &cup; B = {"{"}HH, HT, TH, TT{"}"} = S.
            <br />
            A&apos; = {"{"}TT{"}"}, B&apos; = {"{"}HT, TH{"}"}. A&apos; &cap; B&apos; = ∅.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Draw a Venn diagram mentally">
          For two events on a die or coin, visualize overlapping circles. A &cap; B is the overlap, A − B is A without the overlap, A&apos; is everything outside A.
        </Callout>
      </SpeedTricks>

      <h3 id="h-mutually-exclusive">14.1.4 Mutually Exclusive Events</h3>
      <Callout type="important" title="Definition">
        Two events A and B are <Highlight>mutually exclusive</Highlight> if they cannot occur simultaneously:
        <FormulaBlock latex="A \cap B = \emptyset" />
        <p>When A and B are mutually exclusive, A &cup; B is their combined event with no overlap.</p>
      </Callout>

      <h3 id="h-exhaustive">14.1.5 Exhaustive Events</h3>
      <Callout type="important" title="Definition">
        Events A&#8321;, A&#8322;, &hellip;, A&#8345; are <Highlight>exhaustive</Highlight> if their union covers the entire sample space:
        <FormulaBlock latex="A_1 \cup A_2 \cup \cdots \cup A_n = S" />
        <p>At least one of them must occur.</p>
      </Callout>

      <KeyPoint title="Mutually Exclusive + Exhaustive">
        If events are <strong>both</strong> mutually exclusive and exhaustive, they partition the sample space into non-overlapping parts that cover everything. For example, when rolling a die: {"{"}1{"}"}, {"{"}2{"}"}, {"{"}3{"}"}, {"{"}4{"}"}, {"{"}5{"}"}, {"{"}6{"}"} are mutually exclusive and exhaustive.
      </KeyPoint>

      <Expandable title="Examples 14.3 — Mutually Exclusive and Exhaustive Events">
        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            A die is rolled once. Are the events A = &quot;even number&quot; and B = &quot;odd number&quot; mutually exclusive and exhaustive?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            A = {"{"}2, 4, 6{"}"}, B = {"{"}1, 3, 5{"}"}.
            <br />
            A &cap; B = ∅ &rarr; <strong>mutually exclusive</strong>.
            <br />
            A &cup; B = {"{"}1, 2, 3, 4, 5, 6{"}"} = S &rarr; <strong>exhaustive</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            A coin is tossed. Events: A = {"{"}H{"}"}, B = {"{"}T{"}"}, C = {"{"}H, T{"}"}. Which are mutually exclusive and exhaustive?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            A and B: A &cap; B = ∅, so <strong>mutually exclusive</strong>.
            <br />
            A and C: A &cap; C = {"{"}H{"}"} ≠ ∅, so <strong>not mutually exclusive</strong>.
            <br />
            A, B, C together: A &cup; B &cup; C = S, so <strong>exhaustive</strong>. But A &cap; C ≠ ∅, so they are <strong>not mutually exclusive</strong> as a group.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h2 id="h-axioms">14.2 Axiomatic Approach to Probability</h2>
      <Callout type="important" title="Kolmogorov Axioms">
        For any event A of sample space S, P(A) is a real number satisfying:
      </Callout>

      <FormulaCard>
        <p className="font-semibold mb-2">Three Axioms</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><Highlight>Non-negativity:</Highlight> <FormulaBlock latex="P(A) \ge 0" /></li>
          <li><Highlight>Normalization:</Highlight> <FormulaBlock latex="P(S) = 1" /></li>
          <li><Highlight>Countable additivity:</Highlight> For mutually exclusive events A&#8321;, A&#8322;, &hellip;: <FormulaBlock latex="P(A_1 \cup A_2 \cup \cdots) = P(A_1) + P(A_2) + \cdots" /></li>
        </ol>
      </FormulaCard>

      <h3>Probability of Equally Likely Outcomes</h3>
      <Callout type="important" title="Uniform Sample Space">
        When all n outcomes in S are <Highlight>equally likely</Highlight> (fair die, fair coin, etc.):
        <FormulaBlock latex="P(A) = \frac{\text{number of outcomes in } A}{\text{number of outcomes in } S} = \frac{n(A)}{n(S)}" />
      </Callout>

      <Expandable title="Examples 14.4 — Equally Likely Probability">
        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>
            A fair die is rolled. Find P(getting a prime number).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            S = {"{"}1, 2, 3, 4, 5, 6{"}"}, n(S) = 6.
            <br />
            Prime numbers on a die: {"{"}2, 3, 5{"}"}, n(A) = 3.
            <br />
            P(A) = 3/6 = <strong>1/2</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 9">
          <ProblemSolution.Problem>
            Find P(not getting a prime number) when a die is rolled.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            From Example 8, P(prime) = 1/2.
            <br />
            P(not prime) = 1 − 1/2 = <strong>1/2</strong>.
            <br />
            Alternatively: not-prime outcomes = {"{"}1, 4, 6{"}"}, so P = 3/6 = 1/2.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 10">
          <ProblemSolution.Problem>
            A card is drawn from a well-shuffled deck of 52 cards. Find P(spade).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            4 suits &times; 13 cards = 52 cards total.
            <br />
            Spade cards = 13.
            <br />
            P(spade) = 13/52 = <strong>1/4</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Use the complement: P(A) = 1 − P(A&apos;)">
          When counting the outcomes of A is hard but counting A&apos; is easy, use P(A) = 1 − P(A&apos;). E.g., &quot;at least one head&quot; in 3 tosses: P(A&apos;) = P(TTT) = 1/8, so P(A) = 7/8.
        </Callout>
        <Callout type="tip" title="Cards: remember the 4 × 13 structure">
          52 cards = 4 suits (&#9824;&#9829;&#9830;&#9827;) &times; 13 ranks. Any single suit: 13 cards. Any single rank: 4 cards. Red cards: 26. Face cards: 12.
        </Callout>
      </SpeedTricks>

      <h2 id="h-addition">14.2.3 Probability of &apos;A or B&apos; — Addition Rule</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">General Addition Rule</p>
        <FormulaBlock latex="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />
        <p className="text-sm text-muted-foreground mt-2">For any two events A and B. The intersection is subtracted to avoid double-counting.</p>
      </FormulaCard>

      <KeyPoint title="When A and B are Mutually Exclusive">
        If A &cap; B = ∅, then P(A &cap; B) = 0, so:
        <FormulaBlock latex="P(A \cup B) = P(A) + P(B)" />
        <p>This is the simpler form — no subtraction needed.</p>
      </KeyPoint>

      <h3>14.2.4 Probability of &apos;not A&apos;</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Complement Rule</p>
        <FormulaBlock latex="P(A') = 1 - P(A)" />
        <p className="text-sm text-muted-foreground mt-2">Equivalently: <FormulaBlock latex="P(A) + P(A') = 1" /></p>
      </FormulaCard>

      <Expandable title="Examples 14.5 — Addition Rule and Complement">
        <ProblemSolution problemNumber="Example 11">
          <ProblemSolution.Problem>
            A die is rolled. Find P(3 or 5).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            A = {"{"}3{"}"}, B = {"{"}5{"}"} are mutually exclusive.
            <br />
            P(A) = 1/6, P(B) = 1/6.
            <br />
            P(A &cup; B) = 1/6 + 1/6 = <strong>1/3</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 12">
          <ProblemSolution.Problem>
            A card is drawn from a deck. Find P(King or Spade).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Identify events", description: "A = King (4 cards), B = Spade (13 cards), A ∩ B = King of Spades (1 card)" },
                { label: "Apply addition rule", description: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 4/52 + 13/52 − 1/52 = 16/52" },
                { label: "Simplify", description: "16/52 = 4/13" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 13">
          <ProblemSolution.Problem>
            Two dice are rolled. Find P(sum = 7).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            |S| = 36. Favorable outcomes: {"{"}(1,6), (2,5), (3,4), (4,3), (5,2), (6,1){"}"} — 6 outcomes.
            <br />
            P(sum = 7) = 6/36 = <strong>1/6</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 14">
          <ProblemSolution.Problem>
            In a class of 40 students, 25 play cricket and 15 play football. 8 play both. Find P(a student plays at least one sport).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            P(C) = 25/40, P(F) = 15/40, P(C &cap; F) = 8/40.
            <br />
            P(C &cup; F) = 25/40 + 15/40 − 8/40 = 32/40 = <strong>4/5</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 15">
          <ProblemSolution.Problem>
            The probability that a student passes Math is 0.7, passes Physics is 0.6, and passes both is 0.4. Find P(passing at least one).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            P(Math &cup; Physics) = 0.7 + 0.6 − 0.4 = <strong>0.9</strong>.
            <br />
            Also: P(passing none) = 1 − 0.9 = 0.1.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Memorize the addition rule pattern">
          P(A or B) = P(A) + P(B) − P(A and B). Always subtract the overlap — it was counted twice (once in P(A), once in P(B)).
        </Callout>
        <Callout type="tip" title="For &quot;at least one&quot; problems, use complement">
          P(at least one) = 1 − P(none). For two dice, &quot;at least one 6&quot; = 1 − P(no 6 on either) = 1 − (5/6)&#178; = 11/36.
        </Callout>
      </SpeedTricks>

      <Callout type="warning" title="Hard-Level Tips: Probability Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Mutually exclusive ≠ independent:</strong> Mutually exclusive means A &cap; B = ∅. Independent means P(A &cap; B) = P(A)&middot;P(B). If both are non-zero probability events, mutually exclusive implies <em>dependent</em> (not independent).</li>
          <li><strong>Don&apos;t double-count:</strong> When adding P(A) + P(B), always check for overlap. The addition rule subtracts P(A &cap; B) precisely for this reason.</li>
          <li><strong>Conditional ≠ joint:</strong> P(A|B) = P(A &cap; B)/P(B) ≠ P(A &cap; B). Conditional probability divides by P(B), the joint probability doesn&apos;t.</li>
          <li><strong>Complement saves time:</strong> &quot;At least one&quot; problems are almost always easier with 1 − P(none). Don&apos;t enumerate all the &quot;at least&quot; cases.</li>
          <li><strong>Equally likely assumption:</strong> The formula P(A) = n(A)/n(S) only works when every outcome in S has the same probability. A biased coin breaks this assumption.</li>
        </ul>
      </Callout>

      <Expandable id="h-ex-14-1" title="Exercise 14.1">
        <ol>
          <li>List all outcomes of rolling two dice and identify the event A = &quot;sum is 8.&quot;</li>
          <li>A die is thrown once. State whether each event is impossible, sure, simple, or compound: (i) A = {"{"}2{"}"}, (ii) B = {"{"}1, 2, 3, 4, 5, 6{"}"}, (iii) C = {"{"}7{"}"}.</li>
          <li>Two coins are tossed. Find the probability of getting exactly one head.</li>
          <li>From a deck of 52 cards, find P(face card).</li>
          <li>A die is rolled. Events: A = &quot;even number,&quot; B = &quot;number &ge; 4.&quot; Find P(A &cup; B).</li>
          <li>If P(A) = 0.3, P(B) = 0.5, and P(A &cap; B) = 0.2, find: (i) P(A &cup; B), (ii) P(A&apos;), (iii) P(A&apos; &cap; B).</li>
          <li>A bag contains 5 red and 3 blue balls. Two balls are drawn at random. Find P(both red).</li>
        </ol>
        <Expandable title="Answer Key — Exercise 14.1">
          <ol>
            <li>|S| = 36. A = {"{"}(2,6), (3,5), (4,4), (5,3), (6,2){"}"}, |A| = 5. P(A) = 5/36.</li>
            <li>(i) Simple event, (ii) Sure event, (iii) Impossible event.</li>
            <li>S = {"{"}HH, HT, TH, TT{"}"}, exactly one head = {"{"}HT, TH{"}"}. P = 2/4 = 1/2.</li>
            <li>Face cards: J, Q, K &times; 4 suits = 12 cards. P = 12/52 = 3/13.</li>
            <li>A = {"{"}2, 4, 6{"}"}, B = {"{"}4, 5, 6{"}"}. A &cup; B = {"{"}2, 4, 5, 6{"}"}. P = 4/6 = 2/3.</li>
            <li>(i) 0.3 + 0.5 − 0.2 = 0.6. (ii) 1 − 0.3 = 0.7. (iii) P(A&apos; &cap; B) = P(B) − P(A &cap; B) = 0.5 − 0.2 = 0.3.</li>
            <li>Total balls = 8. P(both red) = C(5,2)/C(8,2) = 10/28 = 5/14.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable id="h-ex-14-2" title="Exercise 14.2">
        <ol>
          <li>A die is thrown once. Find P: (i) a number less than 7, (ii) a number greater than 7, (iii) a multiple of 3, (iv) a number less than 4.</li>
          <li>A card is drawn from a pack of 52 cards. Find P: (i) a king, (ii) a spade, (iii) a king of spades, (iv) not a heart.</li>
          <li>A coin is tossed three times. Find P(at least two heads).</li>
          <li>Two dice are thrown. Find P: (i) sum = 9, (ii) sum &gt; 8, (iii) sum &le; 2.</li>
          <li>If P(A) = 0.4, P(B) = 0.35, and A, B are mutually exclusive, find P(A &cup; B).</li>
          <li>A number is selected at random from {"{"}1, 2, 3, &hellip;, 30{"}"}. Find P: (i) divisible by 3, (ii) divisible by 5, (iii) divisible by both 3 and 5.</li>
          <li>Find P(at least one head) in 4 tosses of a fair coin.</li>
        </ol>
        <Expandable title="Answer Key — Exercise 14.2">
          <ol>
            <li>(i) 1 (sure event). (ii) 0 (impossible event). (iii) P({"{"}3, 6{"}"}) = 2/6 = 1/3. (iv) P({"{"}1, 2, 3{"}"}) = 3/6 = 1/2.</li>
            <li>(i) 4/52 = 1/13. (ii) 13/52 = 1/4. (iii) 1/52. (iv) 39/52 = 3/4.</li>
            <li>P(2 heads) + P(3 heads) = 3/8 + 1/8 = 4/8 = 1/2.</li>
            <li>(i) Sum 9: {"{"}(3,6),(4,5),(5,4),(6,3){"}"} &rarr; 4/36 = 1/9. (ii) Sum &gt; 8: {"{"}9,10,11,12{"}"} = 10/36 = 5/18. (iii) Sum &le; 2: {"{"}(1,1){"}"} &rarr; 1/36.</li>
            <li>P(A &cup; B) = 0.4 + 0.35 = 0.75 (mutually exclusive).</li>
            <li>(i) Div by 3: {"{"}3,6,9,&hellip;,30{"}"} = 10/30 = 1/3. (ii) Div by 5: {"{"}5,10,&hellip;,30{"}"} = 6/30 = 1/5. (iii) Div by both: {"{"}15,30{"}"} = 2/30 = 1/15.</li>
            <li>P(none) = (1/2)&#8308; = 1/16. P(at least one) = 1 − 1/16 = 15/16.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable id="h-ex-14-3" title="Exercise 14.3">
        <ol>
          <li>Given P(A) = 0.5, P(B) = 0.6, P(A &cap; B) = 0.3. Find: (i) P(A &cup; B), (ii) P(A&apos;), (iii) P(B&apos;), (iv) P(A &cup; B)&apos;.</li>
          <li>In a group of 100 people, 60 like tea, 50 like coffee, and 20 like both. Find the probability that a randomly selected person likes tea or coffee.</li>
          <li>A die is rolled twice. Find P(product of numbers = 6).</li>
          <li>Two cards are drawn without replacement from a deck. Find P(both are aces).</li>
          <li>If P(A) = 3/5 and P(B) = 1/5, and A and B are independent, find P(A &cap; B).</li>
        </ol>
        <Expandable title="Answer Key — Exercise 14.3">
          <ol>
            <li>(i) 0.5 + 0.6 − 0.3 = 0.8. (ii) 1 − 0.5 = 0.5. (iii) 1 − 0.6 = 0.4. (iv) 1 − 0.8 = 0.2.</li>
            <li>P(tea &cup; coffee) = 60/100 + 50/100 − 20/100 = 90/100 = 9/10.</li>
            <li>|S| = 36. Product = 6: {"{"}(1,6),(2,3),(3,2),(6,1){"}"} = 4 outcomes. P = 4/36 = 1/9.</li>
            <li>P(both aces) = P(1st ace) &times; P(2nd ace | 1st ace) = (4/52) &times; (3/51) = 12/2652 = 1/221.</li>
            <li>P(A &cap; B) = P(A) &times; P(B) = (3/5)(1/5) = 3/25.</li>
          </ol>
        </Expandable>
      </Expandable>
    </>
  );
}
