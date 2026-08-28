import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { OrgChart } from "@/components/content/OrgChart";

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

        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            A coin is tossed and then a die is rolled only in case a head is shown on the coin. Find the sample space.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            If tail appears (T), the experiment stops — no die roll. If head appears (H), the die is rolled giving H1, H2, &hellip;, H6.
            <br />
            Sample space = {"{"}T, H1, H2, H3, H4, H5, H6{"}"}.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            An experiment consists of rolling a die and then tossing a coin once if the number on the die is even. If the number on the die is odd, the coin is tossed twice. Write the sample space for this experiment.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            Even die outcomes (2, 4, 6) &rarr; one coin toss: {"{"}2H, 2T, 4H, 4T, 6H, 6T{"}"}.
            <br />
            Odd die outcomes (1, 3, 5) &rarr; two coin tosses: {"{"}1HH, 1HT, 1TH, 1TT, 3HH, 3HT, 3TH, 3TT, 5HH, 5HT, 5TH, 5TT{"}"}.
            <br />
            Total |S| = 6 + 12 = 18 outcomes.
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="font-semibold mb-1">Complement of A</p>
          <FormulaBlock latex="A' = \\{x \\in S : x \\notin A\\}" />
          <p className="text-sm text-muted-foreground mt-1">&ldquo;Not A&rdquo; — occurs when A does not occur.</p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="font-semibold mb-1">A or B (Union)</p>
          <FormulaBlock latex="A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}" />
          <p className="text-sm text-muted-foreground mt-1">At least one of A, B occurs.</p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="font-semibold mb-1">A and B (Intersection)</p>
          <FormulaBlock latex="A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}" />
          <p className="text-sm text-muted-foreground mt-1">Both A and B occur simultaneously.</p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="font-semibold mb-1">A but not B (Difference)</p>
          <FormulaBlock latex="A - B = A \\cap B' = \\{x : x \\in A \\text{ and } x \\notin B\\}" />
          <p className="text-sm text-muted-foreground mt-1">A happens but B does not.</p>
        </div>
      </div>

      <KeyPoint title="Word Indicators — Translate English to Symbols">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-1 pr-3">English Word/Phrase</th>
              <th className="text-left py-1">Means</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="py-1 pr-3"><strong>or</strong>, at least one, either</td><td className="py-1">Union (&cup;)</td></tr>
            <tr className="border-b"><td className="py-1 pr-3"><strong>and</strong>, both, simultaneously</td><td className="py-1">Intersection (&cap;)</td></tr>
            <tr className="border-b"><td className="py-1 pr-3"><strong>not</strong>, fails to, other than</td><td className="py-1">Complement (&apos;)</td></tr>
            <tr className="border-b"><td className="py-1 pr-3"><strong>but</strong> (as in &quot;A but not B&quot;)</td><td className="py-1">Difference (A &minus; B)</td></tr>
            <tr className="border-b"><td className="py-1 pr-3"><strong>neither</strong> A <strong>nor</strong> B</td><td className="py-1">(A &cup; B)&apos; = A&apos; &cap; B&apos;</td></tr>
            <tr className="border-b"><td className="py-1 pr-3"><strong>exactly one</strong> of A, B</td><td className="py-1">(A &cap; B&apos;) &cup; (A&apos; &cap; B)</td></tr>
            <tr><td className="py-1 pr-3"><strong>at most</strong> k</td><td className="py-1">Complement of &ldquo;more than k&rdquo;</td></tr>
          </tbody>
        </table>
      </KeyPoint>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="font-semibold mb-1">14.1.4 Mutually Exclusive Events</p>
          <p className="text-sm mb-1">Two events A and B are <Highlight>mutually exclusive</Highlight> if they cannot occur simultaneously:</p>
          <FormulaBlock latex="A \\cap B = \\emptyset" />
          <p className="text-sm text-muted-foreground mt-1">A &cup; B is their combined event with no overlap.</p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="font-semibold mb-1">14.1.5 Exhaustive Events</p>
          <p className="text-sm mb-1">Events A&#8321;, A&#8322;, &hellip;, A&#8345; are <Highlight>exhaustive</Highlight> if their union covers the entire sample space:</p>
          <FormulaBlock latex="A_1 \\cup A_2 \\cup \\cdots \\cup A_n = S" />
          <p className="text-sm text-muted-foreground mt-1">At least one of them must occur.</p>
        </div>
      </div>

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
          <li><Highlight>Non-negativity:</Highlight> <FormulaBlock latex="P(A) \\ge 0" /></li>
          <li><Highlight>Normalization:</Highlight> <FormulaBlock latex="P(S) = 1" /></li>
          <li><Highlight>Countable additivity:</Highlight> For mutually exclusive events A&#8321;, A&#8322;, &hellip;: <FormulaBlock latex="P(A_1 \\cup A_2 \\cup \\cdots) = P(A_1) + P(A_2) + \\cdots" /></li>
        </ol>
      </FormulaCard>

      <KeyPoint title="Theorem: P(∅) = 0 and P(S) = 1">
        <FormulaBlock latex="P(\\emptyset) = 0 \\quad \\text{(impossible event)}" />
        <FormulaBlock latex="P(S) = 1 \\quad \\text{(sure event)}" />
        <p className="mt-1"><strong>Proof sketch:</strong> Since S and ∅ are mutually exclusive and S ∪ ∅ = S, by additivity: P(S) = P(S) + P(∅), so P(∅) = 0. The value P(S) = 1 is given by the normalization axiom.</p>
        <p className="mt-1"><strong>Example:</strong> Rolling a die, the event &quot;getting a 7&quot; is impossible &rarr; P = 0. The event &quot;getting a number &le; 6&quot; is certain &rarr; P = 1.</p>
      </KeyPoint>

      <h3>Probability of Equally Likely Outcomes</h3>
      <Callout type="important" title="Uniform Sample Space">
        When all n outcomes in S are <Highlight>equally likely</Highlight> (fair die, fair coin, etc.):
        <FormulaBlock latex="P(A) = \\frac{\\text{number of outcomes in } A}{\\text{number of outcomes in } S} = \\frac{n(A)}{n(S)}" />
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

      <h3 id="h-deck">52-Card Deck Structure</h3>
      <OrgChart
        title="52-Card Deck — Org Chart"
        nodes={[
          {
            label: "52 Cards",
            detail: "Standard deck",
            children: [
              {
                label: "Red",
                detail: "26 cards",
                children: [
                  { label: "♥ Hearts", detail: "13 cards", children: [
                    { label: "A, 2–10, J, Q, K" },
                  ]},
                  { label: "♦ Diamonds", detail: "13 cards", children: [
                    { label: "A, 2–10, J, Q, K" },
                  ]},
                ],
              },
              {
                label: "Black",
                detail: "26 cards",
                children: [
                  { label: "♣ Clubs", detail: "13 cards", children: [
                    { label: "A, 2–10, J, Q, K" },
                  ]},
                  { label: "♠ Spades", detail: "13 cards", children: [
                    { label: "A, 2–10, J, Q, K" },
                  ]},
                ],
              },
            ],
          },
        ]}
      />

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
        <FormulaBlock latex="P(A \\cup B) = P(A) + P(B) - P(A \\cap B)" />
        <p className="text-sm text-muted-foreground mt-2">For any two events A and B. The intersection is subtracted to avoid double-counting.</p>
      </FormulaCard>

      <KeyPoint title="When A and B are Mutually Exclusive">
        If A &cap; B = ∅, then P(A &cap; B) = 0, so:
        <FormulaBlock latex="P(A \\cup B) = P(A) + P(B)" />
        <p>This is the simpler form — no subtraction needed.</p>
      </KeyPoint>

      <h3>14.2.4 Probability of &apos;not A&apos;</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Complement Rule</p>
        <FormulaBlock latex="P(A') = 1 - P(A)" />
        <p className="text-sm text-muted-foreground mt-2">Equivalently: <FormulaBlock latex="P(A) + P(A') = 1" /></p>
      </FormulaCard>

      <KeyPoint title="Useful Derived Formulas">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-lg border bg-card p-3 shadow-sm text-center">
            <FormulaBlock latex="P(A \\cap B') = P(A) - P(A \\cap B)" />
            <p className="text-xs text-muted-foreground mt-1">A happens but B does not</p>
          </div>
          <div className="rounded-lg border bg-card p-3 shadow-sm text-center">
            <FormulaBlock latex="P(B \\cap A') = P(B) - P(A \\cap B)" />
            <p className="text-xs text-muted-foreground mt-1">B happens but A does not</p>
          </div>
        </div>
        <p className="text-sm mt-2">These give <strong>&ldquo;only one&rdquo;</strong> probability: P(only one of A, B) = P(A &cap; B&apos;) + P(A&apos; &cap; B).</p>
      </KeyPoint>

      <h3>14.2.5 Independent Events</h3>
      <Callout type="important" title="Definition">
        Events A and B are <Highlight>independent</Highlight> if the occurrence of one event does <strong>not affect</strong> the probability of the other. For example, tossing a coin and rolling a die: the coin&apos;s outcome has no influence on the die. The main formula to remember:
      </Callout>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="font-semibold mb-1">Main Formula</p>
          <FormulaBlock latex="P(A \\cap B) = P(A) \\times P(B)" />
          <p className="text-sm text-muted-foreground mt-1">Both A and B happen — multiply their probabilities.</p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="font-semibold mb-1">Equivalent Forms</p>
          <FormulaBlock latex="P(A \\mid B) = P(A)" />
          <FormulaBlock latex="P(B \\mid A) = P(B)" />
          <p className="text-sm text-muted-foreground mt-1">Knowing B occurred tells you nothing new about A.</p>
        </div>
      </div>

      <Callout type="tip" title="Exam Shortcut: &ldquo;Independent&rdquo; ⟹ multiply">
        If a question says <strong>&ldquo;A and B are independent&rdquo;</strong>, immediately write <FormulaBlock latex="P(A \\cap B) = P(A) \\times P(B)" />. That is the whole key to the problem.
      </Callout>

      <KeyPoint title="Dependency (the opposite)">
        Two events are <strong>dependent</strong> when knowing one event changes the probability of the other.
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li><strong>Dependent ≠ impossible.</strong> It just means the outcome of one affects the other&apos;s odds.</li>
          <li><strong>Example:</strong> Drawing two cards <em>without replacement</em>. P(2nd card is Ace | 1st was Ace) = 3/51 — not 4/52, because removing the first Ace changes the deck.</li>
          <li><strong>Test for independence:</strong> Check whether P(A &cap; B) = P(A) &middot; P(B). If equality holds &rarr; independent. If not &rarr; dependent.</li>
          <li><strong>Danger:</strong> Replacing the card before the second draw makes the events independent again (4/52 stays).</li>
        </ul>
      </KeyPoint>

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
          <li>Let A = {"{x : x is a prime number less than 11}"} and B = {"{x : x is an integer such that 2 &le; x &le; 8}"}. Write A and B in roster form. Find A &cup; B and A &cap; B.</li>
          <li>Two unbiased dice are thrown. Let A = &quot;getting a prime number on both dice.&quot; Describe A in roster form and find P(A).</li>
          <li>What is the probability of getting a subset of 3 elements from the power set of a set with 4 elements?</li>
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
            <li>A = {"{"}2, 3, 5, 7{"}"} (primes &lt; 11). B = {"{"}2, 3, 4, 5, 6, 7, 8{"}"}. A &cup; B = {"{"}2, 3, 4, 5, 6, 7, 8{"}"}. A &cap; B = {"{"}2, 3, 5, 7{"}"}.</li>
            <li>Prime numbers on a die: {"{"}2, 3, 5{"}"}. A = {"{"}(2,2), (2,3), (2,5), (3,2), (3,3), (3,5), (5,2), (5,3), (5,5){"}"}. |A| = 9. P(A) = 9/36 = 1/4.</li>
            <li>A set with 4 elements has 2&#8308; = 16 subsets in its power set. Subsets of size 3: C(4,3) = 4. P = 4/16 = 1/4.</li>
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
          <li>One card is drawn from a well-shuffled pack of 52 cards. If each outcome is equally likely, calculate the probability that the card is a diamond.</li>
          <li>Find the probability of getting 53 Fridays in a leap year.</li>
          <li>A bag contains 9 discs of which 4 are red, 3 are blue and 2 are yellow. A disc is drawn at random. Find P: (i) red, (ii) not blue, (iii) either red or blue.</li>
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
            <li>Diamond cards = 13. P = 13/52 = 1/4.</li>
            <li>A leap year has 366 days = 52 weeks + 2 days. The 2 extra days form one of 7 equally likely pairs: (Mon,Tue), (Tue,Wed), (Wed,Thu), (Thu,Fri), (Fri,Sat), (Sat,Sun), (Sun,Mon). Friday appears in (Thu,Fri) and (Fri,Sat). P = 2/7.</li>
            <li>Total = 9 discs.
              <br />(i) P(red) = 4/9.
              <br />(ii) P(not blue) = 1 − 3/9 = 6/9 = 2/3.
              <br />(iii) P(red or blue) = (4+3)/9 = 7/9.</li>
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
          <li>Two students Anil and Ashima appeared in an examination. P(Anil qualifies) = 0.05, P(Ashima qualifies) = 0.10, and P(both qualify) = 0.02. Find the probability that (a) both will not qualify, (b) at least one will not qualify, (c) only one will qualify.</li>
          <li>Two students A and B appeared in an examination. P(A passes) = 0.25, P(B passes) = 0.45, and P(both pass) = 0.1. Find the probability that (i) both will not pass, (ii) only one of them will pass.</li>
        </ol>
        <Expandable title="Answer Key — Exercise 14.3">
          <ol>
            <li>(i) 0.5 + 0.6 − 0.3 = 0.8. (ii) 1 − 0.5 = 0.5. (iii) 1 − 0.6 = 0.4. (iv) 1 − 0.8 = 0.2.</li>
            <li>P(tea &cup; coffee) = 60/100 + 50/100 − 20/100 = 90/100 = 9/10.</li>
            <li>|S| = 36. Product = 6: {"{"}(1,6),(2,3),(3,2),(6,1){"}"} = 4 outcomes. P = 4/36 = 1/9.</li>
            <li>P(both aces) = P(1st ace) &times; P(2nd ace | 1st ace) = (4/52) &times; (3/51) = 12/2652 = 1/221.</li>
            <li>P(A &cap; B) = P(A) &times; P(B) = (3/5)(1/5) = 3/25.</li>
            <li>Let A = Anil qualifies, B = Ashima qualifies. P(A) = 0.05, P(B) = 0.10, P(A &cap; B) = 0.02.
              <br />(a) P(both not qualify) = P(A&apos; &cap; B&apos;) = 1 − P(A &cup; B) = 1 − (0.05 + 0.10 − 0.02) = 1 − 0.13 = 0.87.
              <br />(b) P(at least one not qualify) = 1 − P(both qualify) = 1 − 0.02 = 0.98.
              <br />(c) P(only one qualifies) = P(A &cap; B&apos;) + P(A&apos; &cap; B) = (0.05 − 0.02) + (0.10 − 0.02) = 0.03 + 0.08 = 0.11.</li>
            <li>P(A) = 0.25, P(B) = 0.45, P(A &cap; B) = 0.1.
              <br />(i) P(both not pass) = 1 − P(A &cup; B) = 1 − (0.25 + 0.45 − 0.1) = 1 − 0.6 = 0.4.
              <br />(ii) P(only one passes) = P(A &cap; B&apos;) + P(A&apos; &cap; B) = (0.25 − 0.1) + (0.45 − 0.1) = 0.15 + 0.35 = 0.5.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable id="h-ex-14-misc" title="Miscellaneous Exercise on Chapter 14">
        <ol>
          <li>A box contains 10 red marbles, 20 blue marbles and 30 green marbles. 5 marbles are drawn from the box. What is the probability that (i) all will be blue? (ii) at least one will be green?</li>
          <li>4 cards are drawn from a well-shuffled deck of 52 cards. What is the probability of obtaining 3 diamonds and one spade?</li>
          <li>A die has two faces each with number &lsquo;1&rsquo;, three faces each with number &lsquo;2&rsquo; and one face with number &lsquo;3&rsquo;. If the die is rolled once, determine (i) P(2), (ii) P(1 or 3), (iii) P(not 3).</li>
          <li>In a certain lottery 10,000 tickets are sold and ten equal prizes are awarded. What is the probability of not getting a prize if you buy (a) one ticket, (b) two tickets, (c) 10 tickets?</li>
          <li>Out of 100 students, two sections of 40 and 60 are formed. If you and your friend are among the 100 students, what is the probability that (a) you both enter the same section? (b) you both enter different sections?</li>
          <li>Three letters are dictated to three persons and an envelope is addressed to each of them. The letters are inserted into the envelopes at random so that each envelope contains exactly one letter. Find the probability that at least one letter is in its proper envelope.</li>
          <li>A and B are two events such that P(A) = 0.54, P(B) = 0.69 and P(A &cap; B) = 0.35. Find (i) P(A &cup; B), (ii) P(A&apos; &cap; B&apos;), (iii) P(A &cap; B&apos;), (iv) P(B &cap; A&apos;).</li>
          <li>From the employees of a company, 5 persons are selected to represent them in the managing committee. Particulars of five persons are as follows:
            <table className="my-2">
              <thead><tr><th>S. No.</th><th>Name</th><th>Sex</th><th>Age</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Harish</td><td>M</td><td>30</td></tr>
                <tr><td>2</td><td>Rohan</td><td>M</td><td>33</td></tr>
                <tr><td>3</td><td>Sheetal</td><td>F</td><td>46</td></tr>
                <tr><td>4</td><td>Alis</td><td>F</td><td>28</td></tr>
                <tr><td>5</td><td>Salim</td><td>M</td><td>41</td></tr>
              </tbody>
            </table>
            A person is selected at random to act as a spokesperson. What is the probability that the spokesperson will be either male or over 35 years?</li>
          <li>If 4-digit numbers greater than 5,000 are randomly formed from the digits 0, 1, 3, 5, and 7, what is the probability of forming a number divisible by 5 when (i) the digits are repeated? (ii) the repetition of digits is not allowed?</li>
          <li>The number lock of a suitcase has 4 wheels, each labelled with ten digits (0 to 9). The lock opens with a sequence of four digits with no repeats. What is the probability of a person getting the right sequence to open the suitcase?</li>
        </ol>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>Total = C(60,5) = 5461512.
              <br />(i) P(all blue) = C(20,5)/C(60,5) = 15504/5461512 &asymp; 0.00284.
              <br />(ii) P(at least one green) = 1 &minus; P(no green) = 1 &minus; C(30,5)/C(60,5) = 1 &minus; 142506/5461512 &asymp; 0.9739.</li>
            <li>Ways = C(13,3) &times; C(13,1) = 286 &times; 13 = 3718. Total = C(52,4) = 270725. P = 3718/270725 &asymp; 0.0137.</li>
            <li>Die has 6 faces: two 1s, three 2s, one 3.
              <br />(i) P(2) = 3/6 = 1/2.
              <br />(ii) P(1 or 3) = (2+1)/6 = 3/6 = 1/2.
              <br />(iii) P(not 3) = 1 &minus; 1/6 = 5/6.</li>
            <li>(a) P(not with 1 ticket) = 9990/10000 = 999/1000.
              <br />(b) P(not with 2) = (9990/10000) &times; (9989/9999) &asymp; 0.998.
              <br />(c) P(not with 10) &asymp; 0.99 (product of 10 terms).</li>
            <li>Total ways = C(100,2) = 4950.
              <br />(a) Same section: [C(40,2) + C(60,2)]/4950 = (780+1770)/4950 = 2550/4950 = 17/33.
              <br />(b) Different: 1 &minus; 17/33 = 16/33.</li>
            <li>3 letters, 3 envelopes. D(3) = 2 derangements. P(all wrong) = 2/6 = 1/3. P(at least one correct) = 1 &minus; 1/3 = 2/3.</li>
            <li>(i) 0.54 + 0.69 &minus; 0.35 = 0.88.
              <br />(ii) 1 &minus; 0.88 = 0.12.
              <br />(iii) 0.54 &minus; 0.35 = 0.19.
              <br />(iv) 0.69 &minus; 0.35 = 0.34.</li>
            <li>Males: Harish, Rohan, Salim (3). Over 35: Sheetal (46), Salim (41) (2). Male or over 35: Harish, Rohan, Sheetal, Salim = 4 persons. P = 4/5.</li>
            <li>First digit must be 5 or 7.
              <br />(i) Repeated: total = 2 &times; 5&#179; = 250. Divisible by 5 (last = 0 or 5): last=0 &rarr; 2&times;25=50; last=5 &rarr; 2&times;25=50. P = 100/250 = 2/5.
              <br />(ii) No repeat: total = 2 &times; 4&times;3&times;2 = 48. Divisible by 5: last=0 &rarr; 2&times;6=12; last=5 &rarr; only when first=7 &rarr; 6. P = 18/48 = 3/8.</li>
            <li>Total sequences = 10 &times; 9 &times; 8 &times; 7 = 5040. P = 1/5040.</li>
          </ol>
        </Expandable>
      </Expandable>
    </>
  );
}
