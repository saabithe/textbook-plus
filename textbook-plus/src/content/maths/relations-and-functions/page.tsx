import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { Highlight } from "@/components/content/Highlight";
import { ArrowDiagram } from "@/components/content/maths/ArrowDiagram";
import { FunctionGraph } from "@/components/content/maths/FunctionGraph";

export default function RelationsAndFunctionsChapter() {
  return (
    <>
      <h2 id="h-intro">2.1 Introduction</h2>
      <Callout type="important" title="The Idea">
        A <strong>relation</strong> links objects from two sets as ordered pairs. A{" "}
        <strong>function</strong> is a special relation where every input gets exactly one output.
      </Callout>

      <h2 id="h-2-2">2.2 Cartesian Products of Sets</h2>
      <p>
        Take A = {"{red, blue}"} (colours) and B = {"{b, c, s}"} (bag, coat, shirt). Pairing every
        colour with every object:
      </p>
      <ul>
        <li>(red, b), (red, c), (red, s)</li>
        <li>(blue, b), (blue, c), (blue, s)</li>
      </ul>
      <p>Six distinct ordered pairs. This &ldquo;all combinations&rdquo; construction gets a name:</p>
      <Callout type="important" title="Definition 1: Cartesian Product">
        Given two non-empty sets P and Q, the cartesian product P × Q is the set of all ordered
        pairs (p, q) with p drawn from P and q drawn from Q:
      </Callout>
      <FormulaBlock latex="P \\times Q = \\{(p, q) : p \\in P,\\; q \\in Q\\}" important />
      <KeyPoint>
        If either P or Q is the empty set, then P × Q = φ. Order is crucial: (DL, 01) ≠ (01, DL) —
        licence codes, coordinates, everything depends on which element comes first.
      </KeyPoint>

      <h3 id="h-2-2-1">Properties of Cartesian Products</h3>
      <ul>
        <li>
          <strong>Equality:</strong> (a, b) = (c, d) if and only if a = c and b = d.
        </li>
        <li>
          <strong>Counting:</strong> n(A × B) = n(A) · n(B).
        </li>
        <li>
          <strong>Infinite spread:</strong> if A, B are non-empty and either one is infinite, then
          A × B is infinite.
        </li>
        <li>
          <strong>Triplets:</strong> A × A × A = {"{(a, b, c) : a, b, c ∈ A}"} — ordered triplets.
        </li>
      </ul>

      <SpeedTricks>
        <Callout type="tip" title="Count without listing">
          n(A × B) = n(A) · n(B) instantly — 3 states × 3 codes = 9 plates. Subsets of A × B: 2^(pq)
          — same rule as before, applied to the product set.
        </Callout>
        <Callout type="tip" title="Equal ordered pairs ⇒ two tiny equations">
          Given (2x – 5, y + 1) = (x, 2y): just equate coordinate-wise and solve the pair of linear
          equations. Nothing deeper ever happens.
        </Callout>
        <Callout type="tip" title="Recover A and B by projection">
          From A × B, collect all <em>first</em> coordinates → A; all <em>second</em> coordinates →
          B. Works even when the listing is scrambled.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-examples-2-2" title="Examples 1 to 6">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            <p>If (x + 1, y – 2) = (3, 1), find x and y.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Equal ordered pairs ⇒ corresponding coordinates equal:</p>
            <FormulaBlock latex="x + 1 = 3 \\;\\Rightarrow\\; x = 2, \\qquad y - 2 = 1 \\;\\Rightarrow\\; y = 3" />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            <p>P = {"{a, b, c}"}, Q = {"{r}"}. Form P × Q and Q × P. Are they equal?</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex="P \\times Q = \\{(a,r),(b,r),(c,r)\\}, \\qquad Q \\times P = \\{(r,a),(r,b),(r,c)\\}" />
            <p>
              Not equal — (a, r) ≠ (r, a). In general <strong><Highlight>A × B ≠ B × A</Highlight></strong>, though both
              have the same number of elements here.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            <p>A = {"{1,2,3}"}, B = {"{3,4}"}, C = {"{4,5,6}"}. Find A × (B ∩ C), (A × B) ∩ (A × C),
            A × (B ∪ C), (A × B) ∪ (A × C).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <ul>
              <li>B ∩ C = {"{4}"} ⇒ A × (B ∩ C) = {"{(1,4), (2,4), (3,4)}"}</li>
              <li>A × B = {"{(1,3),(1,4),(2,3),(2,4),(3,3),(3,4)}"}, A × C has 9 pairs</li>
              <li>(A × B) ∩ (A × C) = {"{(1,4), (2,4), (3,4)}"} — matches (i)</li>
              <li>B ∪ C = {"{3,4,5,6}"} ⇒ A × (B ∪ C) = 12 pairs</li>
              <li>(A × B) ∪ (A × C) = the same 12 pairs — matches (iii)</li>
            </ul>
            <p>Moral: × distributes over ∩ and ∪, exactly like multiplication over addition.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            <p>P = {"{1, 2}"}. Form P × P × P.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>All 2³ = 8 triplets:</p>
            <FormulaBlock latex="P^3 = \\{(1,1,1),(1,1,2),(1,2,1),(1,2,2),(2,1,1),(2,1,2),(2,2,1),(2,2,2)\\}" />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            <p>What do R × R and R × R × R represent?</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <ul>
              <li>R × R = {"{(x, y) : x, y ∈ R}"} — coordinates of every point of the plane (2-D).</li>
              <li>R × R × R = {"{(x, y, z) : x, y, z ∈ R}"} — every point of space (3-D).</li>
            </ul>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            <p>If A × B = {"{(p,q),(p,r),(m,q),(m,r)}"}, find A and B.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Project first and second coordinates:</p>
            <FormulaBlock latex="A = \\{p, m\\}, \\qquad B = \\{q, r\\}" />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-ex-2-1" title="EXERCISE 2.1">
        <ol>
          <li>If (x/3 + 1, y – 2/3) = (5/3, 1/3), find x and y.</li>
          <li>If A has 3 elements and B = {"{3, 4, 5}"}, find n(A × B).</li>
          <li>G = {"{7, 8}"}, H = {"{5, 4, 2}"}. Find G × H and H × G.</li>
          <li>
            True or false? If false, rewrite correctly.
            <br />(i) P = {"{m, n}"}, Q = {"{n, m}"} ⇒ P × Q = {"{(m,n),(n,m)}"}
            <br />(ii) Non-empty A, B ⇒ A × B is a non-empty set of ordered pairs (x, y), x ∈ A, y ∈ B
            <br />(iii) A = {"{1,2}"}, B = {"{3,4}"} ⇒ A × (B ∩ φ) = φ
          </li>
          <li>A = {"{–1, 1}"}. Find A × A × A.</li>
          <li>A × B = {"{(a,x),(a,y),(b,x),(b,y)}"}. Find A and B.</li>
          <li>
            A = {"{1,2}"}, B = {"{1,2,3,4}"}, C = {"{5,6}"}, D = {"{5,6,7,8}"}. Verify
            <br />(i) A × (B ∩ C) = (A × B) ∩ (A × C)&nbsp;&nbsp;(ii) A × C ⊂ B × D
          </li>
          <li>A = {"{1,2}"}, B = {"{3,4}"}. Write A × B. How many subsets will it have? List them.</li>
          <li>n(A) = 3, n(B) = 2 and (x,1), (y,2), (z,1) ∈ A × B. Find A and B (x, y, z distinct).</li>
          <li>A × A has 9 elements including (–1, 0) and (0, 1). Find A and the remaining elements.</li>
        </ol>

        <Expandable id="h-ex-2-1-key" title="Answer Key — Exercise 2.1">
          <ol>
            <li>x = 2, y = 1.</li>
            <li>n(A × B) = 3 × 3 = 9.</li>
            <li>
              G × H = {"{(7,5),(7,4),(7,2),(8,5),(8,4),(8,2)}"}
              <br />H × G = {"{(5,7),(5,8),(4,7),(4,8),(2,7),(2,8)}"}
            </li>
            <li>
              (i) False — P × Q = {"{(m,n),(m,m),(n,n),(n,m)}"}
              <br />(ii) True
              <br />(iii) True — B ∩ φ = φ so A × φ = φ
            </li>
            <li>
              A × A × A = {"{(–1,–1,–1),(–1,–1,1),(–1,1,–1),(–1,1,1),(1,–1,–1),(1,–1,1),(1,1,–1),(1,1,1)}"}
            </li>
            <li>A = {"{a, b}"}, B = {"{x, y}"}.</li>
            <li>
              (i) B ∩ C = φ ⇒ both sides are φ ✓
              <br />(ii) A × C = {"{(1,5),(1,6),(2,5),(2,6)}"} ⊂ B × D ✓ (first elements of A × C lie in B, seconds in D)
            </li>
            <li>
              A × B = {"{(1,3),(1,4),(2,3),(2,4)}"}; 2⁴ = 16 subsets — φ, the set itself, four singletons {"{(1,3)}"},{" "}
              {"{(1,4)}"}, {"{(2,3)}"}, {"{(2,4)}"} and ten two-element subsets.
            </li>
            <li>Seconds used are 1 and 2 ⇒ B = {"{1, 2}"}; three distinct firsts ⇒ A = {"{x, y, z}"}.</li>
            <li>n(A) = 3 and –1, 0 ∈ A ⇒ A = {"{–1, 0, 1}"}. Remaining seven: (–1,–1), (–1,1), (0,–1), (0,0), (1,–1), (1,0), (1,1).</li>
          </ol>
        </Expandable>
      </Expandable>
      <h2 id="h-2-3">2.3 Relations</h2>
      <p>
        Take P = {"{a, b, c}"} and Q = {"{Ali, Bhanu, Binoy, Chandra, Divya}"}. P × Q has all 15
        pairs — but we usually want only those satisfying a condition. Say R is &ldquo;x is the
        first letter of the name y&rdquo;:
      </p>
      <FormulaBlock latex="R = \\{(a,\\text{Ali}),\\; (b,\\text{Bhanu}),\\; (b,\\text{Binoy}),\\; (c,\\text{Chandra})\\}" />
      <ArrowDiagram
        leftLabel="P"
        rightLabel="Q"
        leftItems={["a", "b", "c"]}
        rightItems={["Ali", "Bhanu", "Binoy", "Chandra", "Divya"]}
        arrows={[
          [0, 0],
          [1, 1],
          [1, 2],
          [2, 3],
        ]}
        caption="Arrow diagram of R — a picture of the subset of P × Q"
      />

      <Callout type="important" title="Definition 2: Relation">
        A relation R from a non-empty set A to a non-empty set B is a <strong>subset of A × B</strong>.
        In each pair (x, y) ∈ R, y is called the image of x.
      </Callout>

      <Callout type="note" title="Think of It Like This">
        <strong>A × B = all possible connections</strong> between the two sets.
        <br />
        <strong>R = the connections we actually choose.</strong>
        <br />
        In our example, P × Q offers 15 pairs — the first-letter rule picks just 4. A relation is
        simply a selection from the full menu of A × B.
      </Callout>
      <ul>
        <li>
          <strong>Domain</strong> — set of all first elements of the pairs in R.
        </li>
        <li>
          <strong>Range</strong> — set of all second elements.
        </li>
        <li>
          <strong>Codomain</strong> — the whole set B. Note: <Highlight>range ⊂ codomain</Highlight>.
        </li>
      </ul>
      <Callout type="important" title="Three Ways to Represent a Relation">
        <p className="font-semibold mb-1">1. Roster form</p>
        <p>
          List the ordered pairs: R = {"{(a, Ali), (b, Bhanu), (b, Binoy), (c, Chandra)}"}.
        </p>
        <p className="font-semibold mb-1 mt-3">2. Set-builder form</p>
        <p>
          State the common property: R = {"{(x, y) : x is the first letter of the name y}"}. Every
          pair in the relation satisfies it; nothing outside does.
        </p>
        <p className="font-semibold mb-1 mt-3">3. Arrow diagram</p>
        <p>
          Draw A and B as ovals; one arrow per pair, from x to its image y — the picture above.
          Algebraic forms carry the same information; the diagram makes it visible.
        </p>
      </Callout>

      <KeyPoint>
        A relation from A to A is simply called a relation <em>on</em> A.
      </KeyPoint>

      <Stepper
        steps={[
          {
            label: "Identify what you were given",
            description:
              "Single elements (a Sets question) or ordered pairs (a Relations question)? The answer shape differs.",
          },
          {
            label: "Arrow diagram → write the pairs first",
            description:
              "Every arrow IS one ordered pair. Convert the picture to roster form on paper — now both sources look identical.",
          },
          {
            label: "Scan firsts and seconds separately",
            description:
              "Cover the second coordinates: what do all firsts have in common? Then ask how each x produces its y.",
          },
          {
            label: "Find ONE connecting rule",
            description:
              "Sets: one shared property of the elements. Relations: how x determines y — y = x + 1, y = x², 'x divides y', 'x is the square of y'.",
          },
          {
            label: "Declare the domains",
            description:
              "Relations must end with 'x ∈ A, y ∈ B'; sets with 'x ∈ S'. Missing domains cost marks even when the rule is right.",
          },
          {
            label: "Verify by re-listing",
            description:
              "Apply your rule to every allowed input — you must recover exactly the given pairs (or elements). Mismatch means wrong rule.",
          },
        ]}
      />

      <Callout type="important" title="How Many Relations Can Exist?">
        Every subset of A × B is a relation. With n(A) = p and n(B) = q, n(A × B) = pq, so:
      </Callout>
      <FormulaBlock latex="\\text{Total number of relations from } A \\text{ to } B = 2^{pq}" important />

      <Callout type="important" title="Counting Cheat Sheet — Don't Mix These Up">
        <p className="mb-2">
          Every counting formula so far, side by side. Take n(A) = p and n(B) = q; the example
          column uses p = 2, q = 3.
        </p>
        <table>
          <thead>
            <tr>
              <th>You are counting…</th>
              <th>Formula</th>
              <th>Example (p = 2, q = 3)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Elements of a set A</td><td>n(A)</td><td>2</td></tr>
            <tr><td>Ordered pairs in A × B</td><td>pq</td><td>6</td></tr>
            <tr><td>Subsets of A (size of P(A))</td><td>2<sup>p</sup></td><td>4</td></tr>
            <tr><td>Proper subsets of A</td><td>2<sup>p</sup> – 1</td><td>3 — excludes A itself</td></tr>
            <tr><td>Non-empty subsets of A</td><td>2<sup>p</sup> – 1</td><td>3 — excludes φ</td></tr>
            <tr><td>Subsets of A × B</td><td>2<sup>pq</sup></td><td>64</td></tr>
            <tr><td>Proper subsets of A × B</td><td>2<sup>pq</sup> – 1</td><td>63</td></tr>
            <tr><td>Relations from A to B</td><td>2<sup>pq</sup></td><td>64 — same as subsets!</td></tr>
            <tr><td>Functions from A to B (beyond syllabus)</td><td>q<sup>p</sup></td><td>9</td></tr>
          </tbody>
        </table>
        <ul className="mt-3">
          <li>
            <strong>Ordered pairs ≠ powers of 2.</strong> pq is a plain product — count pairs by
            multiplying, never by raising 2.
          </li>
          <li>
            <strong>Subsets and relations share one formula.</strong> Every relation IS a subset of
            A × B, so both are 2<sup>pq</sup>. The base is the number of pairs.
          </li>
          <li>
            <strong>&ldquo;Proper&rdquo; always means minus one.</strong> It only ever excludes the
            full set itself.
          </li>
          <li>
            <strong>Functions break the pattern.</strong> Each of the p inputs independently picks
            one of q images → q<sup>p</sup>, not 2<sup>pq</sup>.
          </li>
        </ul>
      </Callout>

      <SpeedTricks>
        <Callout type="tip" title="Read domain/range by stripping">
          Domain = throw away every second coordinate. Range = throw away every first. One glance,
          no working.
        </Callout>
        <Callout type="tip" title="Counting relations vs counting subsets">
          Same trick twice: relations from A to B are just subsets of A × B ⇒ 2^(n(A)·n(B)). For
          n(A)=2, n(B)=2 that&apos;s 2⁴ = 16 — don&apos;t answer 4!
        </Callout>
        <Callout type="tip" title="Build roster by testing each candidate">
          For R = {"{(x,y) : condition}"}, test each x ∈ A against each y ∈ B and keep survivors. Small
          sets make this fast — check divisibility/parity row by row like the A × B grid.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-examples-2-3" title="Examples 7 to 9">
        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            <p>A = {"{1, 2, 3, 4, 5, 6}"}. R from A to A defined by R = {"{(x, y) : y = x + 1}"}.
            Depict with an arrow diagram; write domain, codomain, range.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex="R = \\{(1,2), (2,3), (3,4), (4,5), (5,6)\\}" />
            <ArrowDiagram
              leftLabel="A"
              rightLabel="A"
              leftItems={["1", "2", "3", "4", "5", "6"]}
              rightItems={["1", "2", "3", "4", "5", "6"]}
              arrows={[
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 5],
              ]}
              caption="y = x + 1 — note 6 has no outgoing arrow"
            />
            <p>Domain = {"{1, 2, 3, 4, 5}"}; codomain = A; range = {"{2, 3, 4, 5, 6}"}.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>
            <p>The arrow diagram shows a relation between P and Q. Write it in set-builder and
            roster form. What is its domain and range?</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>The relation is &ldquo;x is the square of y&rdquo;:</p>
            <ArrowDiagram
              leftLabel="P"
              rightLabel="Q"
              leftItems={["4", "9", "25"]}
              rightItems={["–5", "–3", "–2", "–1", "1", "2", "3", "5"]}
              arrows={[
                [0, 5],
                [1, 6],
                [2, 7],
                [2, 0],
                [1, 1],
                [0, 2],
              ]}
              caption="Fig 2.6 — each square pairs with both ± roots; –1 and 1 receive no arrows"
            />
            <FormulaBlock latex="\\text{(i)}\\quad R = \\{(x,y) : x = y^2,\\; x \\in P,\\; y \\in Q\\}" />
            <FormulaBlock latex="\\text{(ii)}\\quad R = \\{(9,3),(9,-3),(4,2),(4,-2),(25,5),(25,-5)\\}" />
            <p>Domain = {"{4, 9, 25}"}; range = {"{–5, –3, –2, 2, 3, 5}"}; Q itself is the codomain.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 9">
          <ProblemSolution.Problem>
            <p>A = {"{1, 2}"}, B = {"{3, 4}"}. How many relations exist from A to B?</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex="A \\times B = \\{(1,3),(1,4),(2,3),(2,4)\\} \\;\\Rightarrow\\; n(A \\times B) = 4" />
            <p>Relations = subsets = 2⁴ = 16.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-ex-2-2" title="EXERCISE 2.2">
        <ol>
          <li>A = {"{1, 2, 3, ..., 14}"}. R from A to A by R = {"{(x, y) : 3x – y = 0, x, y ∈ A}"}. Write domain, codomain, range.</li>
          <li>R on N: {"{(x, y) : y = x + 5, x natural and x < 4}"}. Roster form; domain; range.</li>
          <li>A = {"{1, 2, 3, 5}"}, B = {"{4, 6, 9}"}; R = {"{(x, y) : difference between x and y is odd}"}. Roster form.</li>
          <li>
            The arrow diagram shows a relation from P to Q where P = {"{5, 6, 7}"} maps to Q = {"{3, 4, 5}"}. Write it in set-builder form and roster form. Find its domain and range.
            <ArrowDiagram
              leftLabel="P"
              rightLabel="Q"
              leftItems={["5", "6", "7"]}
              rightItems={["3", "4", "5"]}
              arrows={[
                [0, 0],
                [1, 1],
                [2, 2],
              ]}
              caption="Exercise 2.2 Q4"
            />
          </li>
          <li>
            A = {"{1, 2, 3, 4, 6}"}; R on A: {"{(a, b) : b is exactly divisible by a}"}. Find
            <br />(i) roster form&nbsp;&nbsp;(ii) domain&nbsp;&nbsp;(iii) range
          </li>
          <li>Determine the domain and range of R = {"{(x, x + 5) : x ∈ {0, 1, 2, 3, 4, 5}}"}.</li>
          <li>Write R = {"{(x, x³) : x is a prime number less than 10}"} in roster form.</li>
          <li>A = {"{x, y, z}"}, B = {"{1, 2}"}. Number of relations from A to B?</li>
          <li>R on Z: {"{(a, b) : a, b ∈ Z, a – b ∈ Z}"}. Domain and range?</li>
        </ol>

        <Expandable id="h-ex-2-2-key" title="Answer Key — Exercise 2.2">
          <ol>
            <li>R = {"{(1,3),(2,6),(3,9),(4,12)}"}; domain {"{1,2,3,4}"}, codomain A, range {"{3,6,9,12}"}.</li>
            <li>R = {"{(1,6),(2,7),(3,8)}"}; domain {"{1,2,3}"}, range {"{6,7,8}"}.</li>
            <li>R = {"{(1,4),(1,6),(2,9),(3,4),(3,6),(5,4),(5,6)}"} (x – y odd ⇔ one odd, one even).</li>
            <li>Set-builder: {"{(x, y) : y = x – 2, x ∈ P, y ∈ Q}"}; roster {"{(5,3),(6,4),(7,5)}"}; domain {"{5,6,7}"}, range {"{3,4,5}"}.</li>
            <li>
              (i) R = {"{(1,1),(1,2),(1,3),(1,4),(1,6),(2,2),(2,4),(2,6),(3,3),(3,6),(4,4),(6,6)}"}
              <br />(ii) domain = {"{1,2,3,4,6}"}&nbsp;&nbsp;(iii) range = {"{1,2,3,4,6}"}
            </li>
            <li>Domain {"{0,1,2,3,4,5}"}; range {"{5,6,7,8,9,10}"}.</li>
            <li>R = {"{(2,8),(3,27),(5,125),(7,343)}"}.</li>
            <li>n(A × B) = 6 ⇒ 2⁶ = 64 relations.</li>
            <li>Every integer difference is an integer, so domain = Z and range = Z.</li>
          </ol>
        </Expandable>
      </Expandable>
      <h2 id="h-2-4">2.4 Functions</h2>
      <Callout type="important" title="Definition 5: Function">
        A relation f from set A to set B is a <strong>function</strong> if every element of A has{" "}
        <strong><Highlight>one and only one image</Highlight></strong> in B. Equivalently: the domain of f is all of A,
        and no two distinct ordered pairs of f share the same first element.
      </Callout>
      <FormulaBlock latex="f: A \\rightarrow B, \\qquad f(a) = b \\;\\;\\text{means}\\;\\; (a, b) \\in f" important />
      <ul>
        <li>b is the <strong>image</strong> of a under f; a is the <strong>preimage</strong> of b.</li>
        <li>&ldquo;map&rdquo; / &ldquo;mapping&rdquo; are synonyms for function.</li>
      </ul>

      <p>
        Read <strong>f : A → B</strong> piece by piece — it contains three facts: A is the{" "}
        <strong>Domain</strong>, B is the <strong>Codomain</strong>, and the range equals{" "}
        <strong>f(A)</strong>, the set of images actually produced.
      </p>

      <KeyPoint title="One-Line Memory Rule">
        <strong><Highlight>ONE input → EXACTLY ONE output</Highlight>.</strong> But{" "}
        <strong>MANY inputs → SAME output is allowed</strong> — this case later gets its own name,
        the <em>many-one</em> function.
      </KeyPoint>

      <Callout type="warning" title="Is This Relation a Function? Run the Checklist">
        <ol>
          <li>
            <strong>Look at the domain.</strong>
          </li>
          <li>
            <strong>Check that every domain element appears as an input</strong> — no element of A
            may sit without an arrow (Example 7&apos;s 6 has none).
          </li>
          <li>
            <strong>Check that each input has exactly one output</strong> — no two arrows may leave
            the same element (Example 8&apos;s squares each reach ± roots).
          </li>
        </ol>
        <p className="mt-2">
          Both conditions pass → <strong>FUNCTION</strong>. Either fails →{" "}
          <strong>NOT A FUNCTION</strong>.
        </p>
        <p className="font-semibold mt-3">⚠️ The classic confusion</p>
        <p>
          Students often believe &ldquo;a function cannot have two arrows going to the same
          output&rdquo;. Wrong — this is perfectly valid:
        </p>
        <p className="font-semibold">1 → a&nbsp;&nbsp;&nbsp;2 → a ✓</p>
        <p>What is prohibited is two arrows <em>leaving the same input</em>:</p>
        <p className="font-semibold">1 → a&nbsp;&nbsp;&nbsp;1 → b ✗</p>
        <p>
          So remember: <strong>function restrictions are about inputs, not outputs.</strong>
        </p>
      </Callout>

      <Expandable id="h-examples-2-4" title="Examples 10 to 12">
        <ProblemSolution problemNumber="Example 10">
          <ProblemSolution.Problem>
            <p>R on N: {"{(x, y) : y = 2x, x, y ∈ N}"}. Domain, codomain, range? Is it a function?</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Domain = N; codomain = N; range = even naturals. Every natural number n has exactly
              one image 2n — <strong>this relation is a function</strong>.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 11">
          <ProblemSolution.Problem>
            <p>Function or not? Give reasons.</p>
            <ul>
              <li>(i) R = {"{(2,1),(3,1),(4,2)}"}</li>
              <li>(ii) R = {"{(2,2),(2,4),(3,3),(4,4)}"}</li>
              <li>(iii) R = {"{(1,2),(2,3),(3,4),(4,5),(5,6),(6,7)}"}</li>
            </ul>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <ul>
              <li>(i) Function — every first element 2, 3, 4 has a unique image.</li>
              <li>(ii) Not a function — first element 2 carries two different images, 2 and 4.</li>
              <li>(iii) Function — one unique image per element.</li>
            </ul>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 12">
          <ProblemSolution.Problem>
            <p>f : N → N by f(x) = 2x + 1. Complete the table for x = 1 … 7.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <table>
              <thead>
                <tr><th>x</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr>
              </thead>
              <tbody>
                <tr><td>f(x)</td><td>3</td><td>5</td><td>7</td><td>9</td><td>11</td><td>13</td><td>15</td></tr>
              </tbody>
            </table>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Callout type="important" title="Definition 6: Real Valued and Real Functions">
        A function whose range is R or a subset of R is called <strong>real valued</strong>. If its
        domain is also R or a subset of R, it is a <strong>real function</strong>.
      </Callout>

      <Callout type="important" title="Hard-Level Tips: Function Checks">
        <ul>
          <li>
            <strong>Codomain ≠ range.</strong> Codomain is declared up front (all of B); range is
            discovered afterwards (actual images). Range ⊆ codomain always.
          </li>
          <li>
            <strong>Same letter, two meanings:</strong> in &ldquo;R = {"{(x,y)}"}&rdquo;, x lives in
            the domain set and y in the codomain — check which set each variable belongs to before
            judging function-ness.
          </li>
          <li>
            <strong>Counting trap:</strong> number of functions from A to B is NOT 2^(pq) — that&apos;s
            relations. Functions require every element of A to be used exactly once as a first
            coordinate.
          </li>
        </ul>
      </Callout>
      <h3 id="h-2-4-1">2.4.1 Some Functions and Their Graphs</h3>

      <div className="grid items-center gap-4 sm:grid-cols-2">
        <div>
          <p className="font-semibold">(i) Identity function</p>
          <FormulaBlock latex="f(x) = x, \\quad x \\in \\mathbb{R}" />
          <p>
            Domain = range = R. Every input maps to itself — the graph is the straight line through
            the origin at 45°.
          </p>
        </div>
        <FunctionGraph curves={[{ fn: (x) => x, from: -5, to: 5 }]} caption="y = x" />
      </div>

      <div className="grid items-center gap-4 sm:grid-cols-2">
        <div>
          <p className="font-semibold">(ii) Constant function</p>
          <FormulaBlock latex="f(x) = c, \\quad x \\in \\mathbb{R}" />
          <p>
            Domain R; range is the single value {"{c}"}. Graph: a line parallel to the x-axis
            (shown for c = 3).
          </p>
        </div>
        <FunctionGraph curves={[{ fn: () => 3, from: -5, to: 5 }]} yMin={-5} yMax={5} caption="y = 3" />
      </div>

      <div className="grid items-center gap-4 sm:grid-cols-2">
        <div>
          <p className="font-semibold">(iii) Polynomial function</p>
          <FormulaBlock latex="f(x) = a_0 + a_1x + a_2x^2 + \\dots + a_nx^n" />
          <p>
            n a non-negative integer, all coefficients real. f(x) = x³ – x² + 2 ✓,{" "}
            g(x) = x⁴ + √2·x ✓ — but h(x) = x² + 2/x is not (a negative power of x appears).
          </p>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x) => x * x, from: -2.4, to: 2.4 },
            { fn: (x) => x * x * x / 8, from: -3.4, to: 3.4 },
            { fn: (x) => x, from: -5, to: 5, dashed: true },
          ]}
          caption="y = x² (U-curve), y = x³/8 (S-curve); dashed y = x"
        />
      </div>

      <Expandable id="h-examples-2-4-1" title="Examples 13 to 15">
        <ProblemSolution problemNumber="Example 13">
          <ProblemSolution.Problem>
            <p>f(x) = x². Complete the table for x = –4 … 4; give domain and range; draw the graph.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <table>
              <thead>
                <tr><th>x</th><th>–4</th><th>–3</th><th>–2</th><th>–1</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>
              </thead>
              <tbody>
                <tr><td>x²</td><td>16</td><td>9</td><td>4</td><td>1</td><td>0</td><td>1</td><td>4</td><td>9</td><td>16</td></tr>
              </tbody>
            </table>
            <p>Domain R; range = {"{x² : x ∈ R}"} = [0, ∞). Graph:</p>
            <FunctionGraph
              curves={[{ fn: (x) => x * x, from: -4.6, to: 4.6 }]}
              xMin={-6} xMax={6} yMin={-2} yMax={22}
              yStep={2}
              points={[
                { x: -4, y: 16 }, { x: -3, y: 9 }, { x: -2, y: 4 }, { x: -1, y: 1 },
                { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 4 }, { x: 3, y: 9 }, { x: 4, y: 16 },
              ]}
              caption="y = x² — a parabola symmetric about the y-axis"
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 14">
          <ProblemSolution.Problem>
            <p>Draw the graph of f(x) = x³, x ∈ R.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>f(0)=0, ±1 → ±1, ±2 → ±8, ±3 → ±27. The curve rises steeply through the origin:</p>
            <FunctionGraph curves={[{ fn: (x) => (x * x * x) / 8, from: -3.4, to: 3.4 }]} caption="y = x³ (scaled to fit) — flat at origin, steep at ends" />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 15">
          <ProblemSolution.Problem>
            <p>f : R – {"{0}"} → R by f(x) = 1/x. Complete the table; domain and range? Draw the graph.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <table>
              <thead>
                <tr><th>x</th><th>–2</th><th>–1.5</th><th>–1</th><th>–0.5</th><th>0.25</th><th>0.5</th><th>1</th><th>1.5</th><th>2</th></tr>
              </thead>
              <tbody>
                <tr><td>1/x</td><td>–0.5</td><td>–0.67</td><td>–1</td><td>–2</td><td>4</td><td>2</td><td>1</td><td>0.67</td><td>0.5</td></tr>
              </tbody>
            </table>
            <p>Domain = R – {"{0}"}; range = R – {"{0}"}. Graph:</p>
            <FunctionGraph
              curves={[
                { fn: (x) => 1 / x, from: -5, to: -0.18 },
                { fn: (x) => 1 / x, from: 0.18, to: 5 },
              ]}
              yMin={-6}
              yMax={6}
              caption="y = 1/x — rectangular hyperbola, two branches never touch the axes"
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <div>
        <p className="font-semibold">(iv) Rational function</p>
        <FormulaBlock latex="\\frac{f(x)}{g(x)}, \\quad g(x) \\neq 0" />
        <p>
          A ratio of two polynomials. The reciprocal 1/x above is the classic example — its
          domain simply excludes roots of g.
        </p>
      </div>

      <Callout type="important" title="Domain Rules: The Only Two Restrictions">
        <p className="font-semibold mb-1">12. Fractional / Rational type — f(x)/g(x)</p>
        <FormulaBlock latex="g(x) \\neq 0" important />
        <p>The denominator can never equal zero. Consider f(x) = 1/(x – 2):</p>
        <ul>
          <li>Can x = 2? No.</li>
          <li>Because x – 2 = 0 would make the denominator zero.</li>
          <li>Therefore x ≠ 2.</li>
          <li>
            Hence <strong>Domain(f) = ℝ – {"{2}"}</strong>, equivalently{" "}
            <strong>{"{x ∈ R : x ≠ 2}"}</strong>.
          </li>
        </ul>
        <p className="font-semibold mb-1 mt-4">13. Square-root type — √f(x)</p>
        <FormulaBlock latex="f(x) \\ge 0" important />
        <p>What sits under the root must never go negative. Consider f(x) = √(x – 3):</p>
        <ul>
          <li>For real-valued f, we need x – 3 ≥ 0.</li>
          <li>Therefore x ≥ 3.</li>
          <li>
            Hence <strong>Domain(f) = [3, ∞)</strong>.
          </li>
        </ul>
        <p className="mt-3">
          Both at once? Apply both: f(x) = √(x)/(x – 2) needs x ≥ 0 <em>and</em> x ≠ 2 ⇒
          domain [0, 2) ∪ (2, ∞).
        </p>
      </Callout>

      <div className="grid items-center gap-4 sm:grid-cols-2">
        <div>
          <p className="font-semibold">(v) Modulus function</p>
          <FormulaBlock latex="f(x) = |x| = \\begin{cases} x, & x \\ge 0 \\ -x, & x < 0 \\end{cases}" />
          <p>Negative inputs flip sign; output is never negative — the V-shape.</p>
        </div>
        <FunctionGraph curves={[{ fn: Math.abs, from: -5, to: 5 }]} caption="y = |x| — V-shaped" />
      </div>

      <Callout type="important" title="Shifting the Modulus V — Four Standard Graphs">
        <div className="grid gap-x-6 gap-y-0 sm:grid-cols-2">
          <FunctionGraph curves={[{ fn: (x) => Math.abs(x + 1), from: -4, to: 4 }]} caption="(a) y = |x + 1| — shifted left" />
          <FunctionGraph curves={[{ fn: (x) => Math.abs(x - 1), from: -4, to: 4 }]} caption="(b) y = |x − 1| — shifted right" />
          <FunctionGraph curves={[{ fn: (x) => Math.abs(x) + 1, from: -4, to: 4 }]} caption="(c) y = |x| + 1 — lifted up" />
          <FunctionGraph curves={[{ fn: (x) => Math.abs(x) - 1, from: -4, to: 4 }]} caption="(d) y = |x| − 1 — pushed down" />
        </div>
        <ul className="mt-3">
          <li>
            <strong>Inside</strong> the bars → <strong>horizontal</strong> shift, and it runs{" "}
            <em>backwards</em>: x + 1 moves the graph <em>left</em>, x – 1 moves it <em>right</em>.
          </li>
          <li>
            <strong>Outside</strong> the bars → <strong>vertical</strong> shift, direction as-is: + 1 lifts up, – 1 pushes down.
          </li>
        </ul>
      </Callout>

      <div className="grid items-center gap-4 sm:grid-cols-2">
        <div>
          <p className="font-semibold">(vi) Signum function</p>
          <p>
            Reports only the sign of x. Domain R; range {"{–1, 0, 1}"}. Hollow dots show the rays do
            not include x = 0; the origin carries the single filled point.
          </p>
        </div>
        <FunctionGraph
          curves={[
            { fn: () => -1, from: -0.001, to: -5, ray: true },
            { fn: () => 1, from: 0.001, to: 5, ray: true },
          ]}
          points={[
            { x: 0, y: -1, filled: false },
            { x: 0, y: 1, filled: false },
            { x: 0, y: 0, filled: true },
          ]}
          caption="(vi) Signum: y = –1 (x<0), 0 (x=0), 1 (x>0)"
        />
      </div>

      <div className="grid items-center gap-4 sm:grid-cols-2">
        <div>
          <p className="font-semibold">(vii) Greatest integer function</p>
          <FormulaBlock latex="f(x) = [x] = \\text{greatest integer} \\le x" />
          <p>
            [x] = –1 on [–1, 0), 0 on [0, 1), 1 on [1, 2), 2 on [2, 3)… Each step includes its left
            end (filled dot) but not its right end (hollow dot). Domain R; range ℤ — the output is
            always an integer, never anything in between.
          </p>
        </div>
        <FunctionGraph
          curves={[-3, -2, -1, 0, 1, 2].map((k) => ({ fn: () => k, from: k, to: k + 1 }))}
          points={[
            ...[-3, -2, -1, 0, 1, 2].map((k) => ({ x: k, y: k, filled: true })),
            ...[-2, -1, 0, 1, 2, 3].map((k) => ({ x: k, y: k - 1, filled: false })),
          ]}
          xMin={-3.6} xMax={3.6} yMin={-3.6} yMax={3}
          caption="y = [x] — staircase"
        />
      </div>

      <ProblemSolution problemNumber="Supplementary: Read a Graph">
        <ProblemSolution.Problem>
          <p>The figure shows the graph of a function f(x).</p>
          <FunctionGraph
            curves={[
              { fn: (x) => x, from: -5, to: -0.001 },
              { fn: () => 1, from: 0.001, to: 5 },
            ]}
            points={[
              { x: -1, y: -1, filled: true },
              { x: 0, y: 0, filled: false },
              { x: 0, y: 1, filled: true },
            ]}
            caption="Left of 0: the line y = x climbing towards a hollow circle at the origin; from 0 onward: the constant height y = 1"
          />
          <p>(a) Write the domain and range of f(x).</p>
          <p>(b) Find f(0) and f(&ndash;0.01).</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a)</strong> Every vertical line cuts the graph once, so every real x has an
            image — domain = ℝ.
            <br />
            Range: for x &lt; 0 the outputs run along y = x, covering{" "}
            <strong>(–∞, 0)</strong>; for x ≥ 0 the only output ever produced is{" "}
            <strong>1</strong>. So range = (–∞, 0) ∪ {"{1}"} — note 0 itself never appears (hollow
            dot).
          </p>
          <p>
            <strong>(b)</strong> f(0) = 1 (the solid dot sits at (0, 1)). Since –0.01 &lt; 0, it
            lies on the line y = x, so f(–0.01) = <strong>–0.01</strong>.
          </p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Supplementary: Semicircle Graph">
        <ProblemSolution.Problem>
          <p>The figure shows the graph of a function f(x) — a semi-circle centred at the origin.</p>
          <FunctionGraph
            curves={[{ fn: (x) => Math.sqrt(16 - x * x), from: -4, to: 4 }]}
            points={[
              { x: -4, y: 0, filled: true },
              { x: 4, y: 0, filled: true },
              { x: 0, y: 4, filled: true },
            ]}
            xMin={-5}
            xMax={5}
            yMin={-2}
            yMax={6}
            caption="Upper half of the circle x² + y² = 16 — from (−4, 0) up through (0, 4) down to (4, 0)"
          />
          <p>(a) Write the domain and range of f(x).</p>
          <p>(b) Define the function f(x).</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a)</strong> The arc runs between the solid dots (–4, 0) and (4, 0), both
            included ⇒ domain = <strong>[–4, 4]</strong>. Outputs climb from 0 up to the peak at
            (0, 4) ⇒ range = <strong>[0, 4]</strong>.
          </p>
          <p>
            <strong>(b)</strong> A full circle of radius 4 satisfies x² + y² = 16. The upper half
            means y ≥ 0, so take the positive square root:
          </p>
          <FormulaBlock latex="f(x) = \\sqrt{16 - x^2}, \\quad -4 \\le x \\le 4" important />
          <p>
            Check the endpoints: √(16 – 16) = 0 ✓ at both ends, and f(0) = √16 = 4 ✓ at the top.
            Note the domain restriction is exactly the square-root rule in action: 16 – x² ≥ 0 ⇔
            |x| ≤ 4.
          </p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Supplementary: Rational Identity">
        <ProblemSolution.Problem>
          <p>Consider the real function f(x) = (x + 2)/(x – 2).</p>
          <p>(a) Find the domain and range of the function.</p>
          <p>(b) Prove that f(x) · f(–x) + f(0) = 0.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            <strong>(a)</strong> Denominator rule first: x – 2 ≠ 0 ⇒{" "}
            <strong>domain = ℝ – {"{2}"}</strong>.
            <br />
            For the range, set y = (x + 2)/(x – 2) and solve back for x:
          </p>
          <FormulaBlock latex="y(x-2) = x+2 \\;\\Rightarrow\\; x(y-1) = 2(y+1) \\;\\Rightarrow\\; x = \\frac{2(y+1)}{y-1}" />
          <p>
            This fails only when y – 1 = 0, i.e., y = 1 — and indeed (x + 2) = (x – 2) would force
            2 = –2, impossible. Hence <strong>range = ℝ – {"{1}"}</strong>.
          </p>
          <p>
            <strong>(b)</strong> Replace x by –x and simplify:
          </p>
          <FormulaBlock latex="f(-x) = \\frac{-x+2}{-x-2} = \\frac{x-2}{x+2}" />
          <p>The two fractions are exact reciprocals:</p>
          <FormulaBlock latex="f(x)\\cdot f(-x) = \\frac{x+2}{x-2}\\cdot\\frac{x-2}{x+2} = 1" />
          <p>And f(0) = (0 + 2)/(0 – 2) = –1. Therefore:</p>
          <FormulaBlock latex="f(x)\\cdot f(-x) + f(0) = 1 + (-1) = 0" important />
          <p>
            The identity holds for every x in the domain (x ≠ ±2 keeps both fractions defined).
          </p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <SpeedTricks>
        <Callout type="tip" title="Recognise graphs by silhouette">
          Line through origin = identity · horizontal line = constant · U = x² · S-curve = x³ · V =
          modulus · staircase = greatest integer · two mirrored branches = 1/x.
        </Callout>
        <Callout type="tip" title="Vertical-line test (beyond syllabus)">
          A graph is a function iff no vertical line cuts it twice. Instantly kills{" "}
          {"{(2,2),(2,4)}"}-style impostors when you see their picture.
        </Callout>
        <Callout type="tip" title="Range shortcuts">
          |x| ≥ 0 always ⇒ range [0, ∞). x² + c ⇒ range [c, ∞). 1/x can never be 0 ⇒ range excludes
          0. Denominators: exclude every root of g from the domain before anything else.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-ex-2-3" title="EXERCISE 2.3">
        <ol>
          <li>
            Which relations are functions? Give reasons; if a function, find domain and range.
            <br />(i) {"{(2,1),(5,1),(8,1),(11,1),(14,1),(17,1)}"}
            <br />(ii) {"{(2,1),(4,2),(6,3),(8,4),(10,5),(12,6),(14,7)}"}
            <br />(iii) {"{(1,3),(1,5),(2,5)}"}
          </li>
          <li>Find domain and range: (i) f(x) = –|x|&nbsp;&nbsp;(ii) f(x) = √(9 – x²)</li>
          <li>f(x) = 2x – 5. Find f(0), f(7), f(–3).</li>
          <li>t(C) = 9C/5 + 32 maps Celsius to Fahrenheit. Find t(0), t(28), t(–10), and C when t(C) = 212.</li>
          <li>
            Find the range:
            <br />(i) f(x) = 2 – 3x, x ∈ R, x &gt; 0&nbsp;&nbsp;(ii) f(x) = x² + 2&nbsp;&nbsp;(iii) f(x) = x
          </li>
        </ol>

        <Expandable id="h-ex-2-3-key" title="Answer Key — Exercise 2.3">
          <ol>
            <li>
              (i) Function; domain {"{2,5,8,11,14,17}"}; range {"{1}"}.
              <br />(ii) Function; domain {"{2,4,...,14}"}; range {"{1,2,...,7}"}.
              <br />(iii) Not a function — 1 has two images, 3 and 5.
            </li>
            <li>
              (i) Domain R; range (–∞, 0].
              <br />(ii) Need 9 – x² ≥ 0 ⇒ domain [–3, 3]; outputs 0 ≤ √(9–x²) ≤ 3 ⇒ range [0, 3].
            </li>
            <li>f(0) = –5, f(7) = 9, f(–3) = –11.</li>
            <li>t(0) = 32, t(28) = 82.4, t(–10) = 14; 212 = 9C/5 + 32 ⇒ C = 100.</li>
            <li>(i) (–∞, 2)&nbsp;&nbsp;(ii) [2, ∞)&nbsp;&nbsp;(iii) R</li>
          </ol>
        </Expandable>
      </Expandable>
      <h3 id="h-2-4-2">2.4.2 Algebra of Real Functions</h3>
      <p>
        For f : X → R and g : X → R, X ⊆ R, build new functions pointwise:
      </p>
      <FormulaCard>
        <p className="font-semibold mb-2">The Five Operations</p>
        <FormulaBlock latex="(f + g)(x) = f(x) + g(x)" />
        <FormulaBlock latex="(f - g)(x) = f(x) - g(x)" />
        <FormulaBlock latex="(\\alpha f)(x) = \\alpha \\, f(x), \\qquad \\alpha \\in \\mathbb{R}" />
        <FormulaBlock latex="(fg)(x) = f(x)\\, g(x) \\quad \\text{(pointwise multiplication)}" />
        <FormulaBlock latex="\\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}, \\qquad g(x) \\neq 0" important />
      </FormulaCard>

      <Expandable id="h-examples-2-4-2" title="Examples 16 and 17">
        <ProblemSolution problemNumber="Example 16">
          <ProblemSolution.Problem>
            <p>f(x) = x² and g(x) = 2x + 1. Find (f+g)(x), (f–g)(x), (fg)(x), (f/g)(x).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex="(f+g)(x) = x^2 + 2x + 1, \\qquad (f-g)(x) = x^2 - 2x - 1" />
            <FormulaBlock latex="(fg)(x) = 2x^3 + x^2, \\qquad \\left(\\frac{f}{g}\\right)(x) = \\frac{x^2}{2x+1},\\; x \\neq -\\tfrac{1}{2}" />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 17">
          <ProblemSolution.Problem>
            <p>f(x) = √x and g(x) = x over the non-negative reals. Find all four combinations.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex="(f+g)(x) = \\sqrt{x} + x, \\qquad (f-g)(x) = \\sqrt{x} - x" />
            <FormulaBlock latex="(fg)(x) = x^{3/2}, \\qquad \\left(\\frac{f}{g}\\right)(x) = \\frac{1}{\\sqrt{x}},\\; x > 0" />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h2 id="h-misc">Miscellaneous Examples</h2>

      <Expandable id="h-examples-misc" title="Examples 18 to 22">
        <ProblemSolution problemNumber="Example 18">
          <ProblemSolution.Problem>
            <p>Sketch the graph of f : R → R defined by f(x) = x + 10.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>f(0) = 10, f(–10) = 0 — a straight line of slope 1 cutting the y-axis at 10:</p>
            <FunctionGraph curves={[{ fn: (x) => x + 10, from: -12, to: 8 }]} xMin={-15} xMax={10} yMin={-6} yMax={20} xStep={5} yStep={5} caption="y = x + 10 — a linear function mx + c with m = 1, c = 10" />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 19">
          <ProblemSolution.Problem>
            <p>R from Q to Q: {"{(a,b) : a – b ∈ Z}"}. Show (i) (a,a) ∈ R ∀a (ii) (a,b) ∈ R ⇒ (b,a) ∈ R (iii) (a,b),(b,c) ∈ R ⇒ (a,c) ∈ R.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <ol>
              <li>a – a = 0 ∈ Z ✓</li>
              <li>a – b ∈ Z ⇒ b – a = –(a–b) ∈ Z ✓</li>
              <li>a – c = (a – b) + (b – c) — sum of two integers is an integer ✓</li>
            </ol>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 20">
          <ProblemSolution.Problem>
            <p>f = {"{(1,1),(2,3),(0,–1),(–1,–3)}"} is a linear function from Z into Z. Find f(x).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Linear means f(x) = mx + c. From (0, –1): c = –1. From (1, 1): m – 1 = 1 ⇒ m = 2.</p>
            <FormulaBlock latex="f(x) = 2x - 1" important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 21">
          <ProblemSolution.Problem>
            <p>Find the domain of f(x) = (x² + 3x + 5)/(x² – 5x + 4).</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Denominator must not vanish:</p>
            <FormulaBlock latex="x^2 - 5x + 4 = (x-1)(x-4) \\neq 0 \\;\\Rightarrow\\; \\text{domain} = \\mathbb{R} - \\{1, 4\\}" important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 22">
          <ProblemSolution.Problem>
            <p>Draw the graph of f(x) = 1 – x for x &lt; 0; f(0) = 0; f(x) = x + 1 for x &gt; 0.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Left branch slides down to height 1 as x → 0⁻ (hollow dot); a lone filled dot sits at
              the origin; right branch starts just above (0, 1) (hollow dot) and climbs.
            </p>
            <FunctionGraph
              curves={[
                { fn: (x) => 1 - x, from: -5, to: -0.001 },
                { fn: (x) => x + 1, from: 0.001, to: 5 },
              ]}
              points={[{ x: 0, y: 0, filled: true }, { x: 0, y: 1, filled: false }]}
              yMax={6}
              caption="Piecewise graph — note the jump above the origin"
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-misc-exercise" title="Miscellaneous Exercise on Chapter 2">
        <ol>
          <li>
            f is defined by x² for 0 ≤ x ≤ 3, and 3x for 3 ≤ x ≤ 10. g is defined by x² for 0 ≤ x ≤ 2,
            and 3x for 2 ≤ x ≤ 10. Show that f is a function but g is not.
          </li>
          <li>If f(x) = x², find [f(1.1) – f(1)] / (1.1 – 1).</li>
          <li>Find the domain of f(x) = (x² + 2x + 1)/(x² – 8x + 12).</li>
          <li>Find the domain and range of f(x) = √(x – 1).</li>
          <li>Find the domain and range of f(x) = √(|x| – 1)? i.e. √(|x| – 1).</li>
          <li>f = {"{(x, x²/(1+x²)) : x ∈ R}"} from R into R. Determine the range of f.</li>
          <li>f(x) = x + 1, g(x) = 2x – 3. Find f + g, f – g and f/g.</li>
          <li>f = {"{(1,1),(2,3),(0,–1),(–1,–3)}"} is ax + b over Z. Determine a and b.</li>
          <li>R from N to N: {"{(a, b) : a = b²}"}. Are these true? Justify.
            <br />(i) (a,a) ∈ R ∀a&nbsp;&nbsp;(ii) (a,b) ∈ R ⇒ (b,a) ∈ R&nbsp;&nbsp;(iii) (a,b),(b,c) ∈ R ⇒ (a,c) ∈ R
          </li>
          <li>A = {"{1,2,3,4}"}, B = {"{1,5,9,11,15,16}"}, f = {"{(1,5),(2,9),(3,1),(4,5),(2,11)}"}. Is f (i) a relation from A to B? (ii) a function from A to B?</li>
          <li>f = {"{(ab, a+b) : a, b ∈ Z}"} ⊆ Z × Z. Is f a function from Z to Z?</li>
          <li>A = {"{9,10,11,12,13}"}, f(n) = highest prime factor of n. Find the range of f.</li>
        </ol>

        <Expandable id="h-misc-key" title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>
              At x = 3 both rules agree (3² = 9 = 3·3), so every input has one image ⇒ f is a
              function. At x = 2, g gives 2² = 4 by rule one and 3·2 = 6 by rule two — two images ⇒
              g is not a function.
            </li>
            <li>(1.21 – 1)/0.1 = 2.1.</li>
            <li>x² – 8x + 12 = (x – 6)(x – 2) ⇒ domain R – {"{2, 6}"}.</li>
            <li>Domain [1, ∞); range [0, ∞).</li>
            <li>Need |x| ≥ 1 ⇒ domain (–∞, –1] ∪ [1, ∞); range [0, ∞).</li>
            <li>For real x, x² ≥ 0 so 0 ≤ x²/(1+x²) &lt; 1 ⇒ range [0, 1).</li>
            <li>(f+g)(x) = 3x – 2; (f–g)(x) = –x + 4; (f/g)(x) = (x+1)/(2x–3), x ≠ 3/2.</li>
            <li>(0, –1) gives b = –1; (1, 1) gives a – 1 = 1 ⇒ a = 2, b = –1.</li>
            <li>All three false: (2,2) ∉ R since 2 ≠ 4; (4,2) ∈ R but (2,4) ∉ R; (16,4),(4,2) ∈ R but (16,2) ∉ R.</li>
            <li>(i) Yes — every pair has first in A and second in B. (ii) No — element 2 carries two images, 9 and 11.</li>
            <li>No. ab = 4 arises from (1,4), (2,2), (4,1) giving sums 5, 4, 5 — first element 4 has two different images (5 and 4).</li>
            <li>f(9)=3, f(10)=5, f(11)=11, f(12)=3, f(13)=13 ⇒ range {"{3, 5, 11, 13}"}.</li>
          </ol>
        </Expandable>
      </Expandable>
    </>
  );
}
