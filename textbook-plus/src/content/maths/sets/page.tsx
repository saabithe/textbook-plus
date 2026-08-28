import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { NumberLine } from "@/components/content/maths/NumberLine";
import { VennDiagram, ThreeSetVenn } from "@/components/content/maths/VennDiagram";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function SetsChapter() {
  return (
    <>
      <h2 id="h-intro">1.1 Introduction</h2>
      <Callout type="important" title="Definition: Set">
        A <strong>set</strong> is a well-defined collection of objects. The <strong>order</strong> in which
        its elements are listed does <em>not</em> matter — {"{1, 2, 3}"} and {"{3, 2, 1}"} are the same set.
      </Callout>

      <h2 id="h-1-2">1.2 Sets and their Representations</h2>
      <p>We use the following standard symbols throughout mathematics:</p>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>ℕ</td><td>the set of all natural numbers</td></tr>
          <tr><td>ℤ</td><td>the set of all integers</td></tr>
          <tr><td>ℚ</td><td>the set of all rational numbers</td></tr>
          <tr><td>ℝ</td><td>the set of real numbers</td></tr>
          <tr><td>ℤ⁺</td><td>the set of positive integers</td></tr>
          <tr><td>ℚ⁺</td><td>the set of positive rational numbers</td></tr>
          <tr><td>ℝ⁺</td><td>the set of positive real numbers</td></tr>
        </tbody>
      </table>
      <KeyPoint title="Notation">
        Objects, elements and members of a set are synonymous terms. Sets are denoted by capital
        letters A, B, C, X, Y, Z; elements by small letters a, b, c, x, y, z. If <em>a</em> is an
        element of set A we write <strong>a ∈ A</strong> (&ldquo;a belongs to A&rdquo;, using the
        Greek symbol epsilon); otherwise <strong>b ∉ A</strong>. E.g., in the set V of vowels,
        a ∈ V but b ∉ V; in the set P of prime factors of 30, 3 ∈ P but 15 ∉ P.
      </KeyPoint>

      <h3 id="h-1-2-1">Methods of representing a set</h3>
      <Comparison
        columns={[
          {
            title: "Roster (tabular) form",
            children: (
              <>
                <p>All elements are listed, separated by commas, enclosed in braces {"{ }"}.</p>
                <ul>
                  <li>Even positive integers less than 7: {"{2, 4, 6}"}</li>
                  <li>Natural numbers dividing 42: {"{1, 2, 3, 6, 7, 14, 21, 42}"}</li>
                  <li>Vowels: {"{a, e, i, o, u}"}</li>
                  <li>Odd natural numbers: {"{1, 3, 5, ...}"}</li>
                </ul>
              </>
            ),
          },
          {
            title: "Set-builder form",
            children: (
              <>
                <p>All elements possess a single common property not possessed by anything outside the set.</p>
                <ul>
                  <li>V = {"{x : x is a vowel in English alphabet}"}</li>
                  <li>A = {"{x : x is a natural number and 3 < x < 10}"}</li>
                  <li>A = {"{x : x is a natural number which divides 42}"}</li>
                  <li>C = {"{z : z is an odd natural number}"}</li>
                </ul>
              </>
            ),
          },
        ]}
      />
      <Callout type="note">
        <p className="font-semibold mb-1">Roster form</p>
        <ul>
          <li>The order of listing is immaterial — {"{1, 3, 7, 21, 2, 6, 14, 42}"} is the same set as above.</li>
          <li>An element is not generally repeated: the letters of &ldquo;SCHOOL&rdquo; form {"{S, C, H, O, L}"}.</li>
        </ul>
        <p className="font-semibold mb-1 mt-3">Set-builder form</p>
        <ul>
          <li>Read {"{x : P(x)}"} as &ldquo;the set of all x such that x has property P&rdquo;.</li>
          <li>Braces stand for &ldquo;the set of all&rdquo;, the colon for &ldquo;such that&rdquo;.</li>
        </ul>
      </Callout>

      <Callout type="important" title="Recipe 1: Set-builder → Roster">
        <ol>
          <li>
            <strong>Check what x belongs to</strong> — ℕ, ℤ or ℝ?
          </li>
          <li>
            <strong>Solve the condition</strong> like an equation or inequality.
          </li>
          <li>
            <strong>List every solution once</strong>, inside braces.
          </li>
        </ol>
        <p className="mt-3">
          Worked example: {"{x : x ∈ Z and –3 < x ≤ 2}"}
          <br />
          Step 1: x is an integer. Step 2: integers satisfying it are –2, –1, 0, 1, 2.
          <br />
          Answer: <strong>{"{–2, –1, 0, 1, 2}"}</strong>.
        </p>
      </Callout>

      <Callout type="important" title="Recipe 2: Roster → Set-builder">
        <ol>
          <li>
            <strong>Spot the one common pattern</strong> — multiples, squares, powers, divisors,
            letters…
          </li>
          <li>
            <strong>Add bounds</strong> so nothing extra slips in.
          </li>
          <li>
            <strong>Convert back to check</strong> — you must land on the original roster.
          </li>
        </ol>
        <p className="mt-3">
          Worked example: {"{1, 4, 9, 16, 25, 36}"}
          <br />
          Step 1: all perfect squares → x = n². Step 2: bound it — n ∈ N and 1 ≤ n ≤ 6.
          <br />
          Answer: <strong>{"{x : x = n², n ∈ N and 1 ≤ n ≤ 6}"}</strong>. Step 3 check: listing
          gives back exactly the original set ✓.
        </p>
        <p className="mt-2">
          Many correct answers can exist — any description capturing exactly these elements is
          valid.
        </p>
      </Callout>

      <SpeedTricks>
        <Callout type="tip" title="Pattern spotting → set-builder">
          In a roster like {"{2, 4, 6, 8, ...}"}, find the constant jump d and the start a — here
          a = 2, d = 2, so elements are 2n. Write {"{x : x = 2n, n ∈ N}"} instantly.
        </Callout>
        <Callout type="tip" title="Domain changes everything">
          For {"{x : x² = 4}"}: over ℝ or ℤ the answer is {"{–2, 2}"}, but over ℕ it is just{" "}
          <strong>{"{2}"}</strong>. Always check which set x belongs to before listing.
        </Callout>
        <Callout type="tip" title="Solve before you list">
          Convert set-builder to roster by actually solving the condition. A condition with no
          solution (like x &gt; 5 and x &lt; 3) is φ — don&apos;t hunt for elements that cannot exist.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-examples-1-2" title="Examples 1 to 5">
        <ProblemSolution problemNumber="Example 1">
        <ProblemSolution.Problem>
          <p>Write the solution set of the equation x² + x – 2 = 0 in roster form.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The given equation can be written as:</p>
          <FormulaBlock latex={String.raw`(x - 1)(x + 2) = 0, \quad \text{i.e.,} \quad x = 1, -2`} />
          <p>Therefore, the solution set in roster form is <strong>{"{1, –2}"}</strong>.</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 2">
        <ProblemSolution.Problem>
          <p>Write the set {"{x : x is a positive integer and x² < 40}"} in roster form.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The required numbers are 1, 2, 3, 4, 5, 6. So the given set is <strong>{"{1, 2, 3, 4, 5, 6}"}</strong>.</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 3">
        <ProblemSolution.Problem>
          <p>Write the set A = {"{1, 4, 9, 16, 25, ...}"} in set-builder form.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-8 [&>div]:my-3">
            <FormulaBlock latex={String.raw`A = \{x : x \text{ is the square of a natural number}\}`} />
            <FormulaBlock latex={String.raw`A = \{x : x = n^2, \text{ where } n \in \mathbb{N}\}`} important />
          </div>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 4">
        <ProblemSolution.Problem>
          <p>Write the set {"{1/2, 2/3, 3/4, 4/5, 5/6, 6/7}"} in set-builder form.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Each member has numerator one less than the denominator; numerators begin at 1 and do not exceed 6. Hence:</p>
          <FormulaBlock latex={String.raw`A = \left\{x : x = \frac{n}{n+1}, \text{ where } n \in \mathbb{N} \text{ and } 1 \le n \le 6\right\}`} important />
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 5">
        <ProblemSolution.Problem>
          <p>Match each roster-form set with the same set in set-builder form:</p>
          <table>
            <thead>
              <tr>
                <th>Column A — Roster form</th>
                <th>Column B — Set-builder form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>(i) {"{P, R, I, N, C, A, L}"}</td>
                <td>(a) {"{x : x is a positive integer and is a divisor of 18}"}</td>
              </tr>
              <tr>
                <td>(ii) {"{0}"}</td>
                <td>(b) {"{x : x is an integer and x² – 9 = 0}"}</td>
              </tr>
              <tr>
                <td>(iii) {"{1, 2, 3, 6, 9, 18}"}</td>
                <td>(c) {"{x : x is an integer and x + 1 = 1}"}</td>
              </tr>
              <tr>
                <td>(iv) {"{3, –3}"}</td>
                <td>(d) {"{x : x is a letter of the word PRINCIPAL}"}</td>
              </tr>
            </tbody>
          </table>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Checking each option of Column B against Column A:</p>
          <ul>
            <li>
              <strong>(i) → (d):</strong> PRINCIPAL has 9 letters, with P and I repeated. So{" "}
              {"{P, R, I, N, C, A, L}"} is exactly the set of letters of the word PRINCIPAL.
            </li>
            <li>
              <strong>(ii) → (c):</strong> The equation x + 1 = 1 gives x = 0, whose solution set is
              the singleton {"{0}"}.
            </li>
            <li>
              <strong>(iii) → (a):</strong> Each of 1, 2, 3, 6, 9, 18 divides 18 exactly, so this is
              the set of all positive divisors of 18.
            </li>
            <li>
              <strong>(iv) → (b):</strong> x² – 9 = 0 gives (x – 3)(x + 3) = 0, i.e., x = 3 or x = –3,
              whose solution set is {"{3, –3}"}.
            </li>
          </ul>
        </ProblemSolution.Solution>
      </ProblemSolution>
      </Expandable>

      <Expandable id="h-ex-1-1" title="EXERCISE 1.1">
        <ol>
          <li>
            Which of the following are sets? Justify your answer.
            <br />(i) The collection of all the months of a year beginning with the letter J.
            <br />(ii) The collection of ten most talented writers of India.
            <br />(iii) A team of eleven best-cricket batsmen of the world.
            <br />(iv) The collection of all boys in your class.
            <br />(v) The collection of all natural numbers less than 100.
            <br />(vi) A collection of novels written by the writer Munshi Prem Chand.
            <br />(vii) The collection of all even integers.
            <br />(viii) The collection of questions in this Chapter.
            <br />(ix) A collection of most dangerous animals of the world.
          </li>
          <li>
            Let A = {"{1, 2, 3, 4, 5, 6}"}. Insert the appropriate symbol ∈ or ∉ in the blank spaces:
            <br />(i) 5 . . . A&nbsp;&nbsp;(ii) 8 . . . A&nbsp;&nbsp;(iii) 0 . . . A&nbsp;&nbsp;(iv) 4 . . . A&nbsp;&nbsp;(v) 2 . . . A&nbsp;&nbsp;(vi) 10 . . . A
          </li>
          <li>
            Write the following sets in roster form:
            <br />(i) A = {"{x : x is an integer and –3 ≤ x < 7}"}
            <br />(ii) B = {"{x : x is a natural number less than 6}"}
            <br />(iii) C = {"{x : x is a two-digit natural number such that the sum of its digits is 8}"}
            <br />(iv) D = {"{x : x is a prime number which is divisor of 60}"}
            <br />(v) E = The set of all letters in the word TRIGONOMETRY
            <br />(vi) F = The set of all letters in the word BETTER
          </li>
          <li>
            Write the following sets in the set-builder form:
            <br />(i) {"{3, 6, 9, 12}"}
            <br />(ii) {"{2, 4, 8, 16, 32}"}
            <br />(iii) {"{5, 25, 125, 625}"}
            <br />(iv) {"{2, 4, 6, ...}"}
            <br />(v) {"{1, 4, 9, ..., 100}"}
          </li>
          <li>
            List all the elements of the following sets:
            <br />(i) A = {"{x : x is an odd natural number}"}
            <br />(ii) B = {"{x : x is an integer, −1/2 < x < 9/2}"}
            <br />(iii) C = {"{x : x is an integer, x² ≤ 4}"}
            <br />(iv) D = {"{x : x is a letter in the word “LOYAL”}"}
            <br />(v) E = {"{x : x is a month of a year not having 31 days}"}
            <br />(vi) F = {"{x : x is a consonant in the English alphabet which precedes k}"}
          </li>
          <li>
            Match each of the set on the left in roster form with the same set on the right in set-builder form:
            <br />(i) {"{1, 2, 3, 6}"} — (a) {"{x : x is a prime number and a divisor of 6}"}
            <br />(ii) {"{2, 3}"} — (b) {"{x : x is an odd natural number less than 10}"}
            <br />(iii) {"{M, A, T, H, E, I, C, S}"} — (c) {"{x : x is natural number and divisor of 6}"}
            <br />(iv) {"{1, 3, 5, 7, 9}"} — (d) {"{x : x is a letter of the word MATHEMATICS}"}
          </li>
        </ol>

        <Expandable id="h-ex-1-1-key" title="Answer Key — Exercise 1.1">
          <ol>
          <li>
            Sets: (i), (iv), (v), (vi), (vii), (viii). Not sets: (ii), (iii), (ix) —
            &ldquo;most talented&rdquo;, &ldquo;best&rdquo; and &ldquo;most dangerous&rdquo; vary from person to person, so the collections are not well-defined.
          </li>
          <li>(i) 5 ∈ A&nbsp;&nbsp;(ii) 8 ∉ A&nbsp;&nbsp;(iii) 0 ∉ A&nbsp;&nbsp;(iv) 4 ∈ A&nbsp;&nbsp;(v) 2 ∈ A&nbsp;&nbsp;(vi) 10 ∉ A</li>
          <li>
            (i) A = {"{–3, –2, –1, 0, 1, 2, 3, 4, 5, 6}"}
            <br />(ii) B = {"{1, 2, 3, 4, 5}"}
            <br />(iii) C = {"{17, 26, 35, 44, 53, 62, 71, 80}"}
            <br />(iv) D = {"{2, 3, 5}"}
            <br />(v) E = {"{T, R, I, G, O, N, M, E, Y}"}
            <br />(vi) F = {"{B, E, T, R}"}
          </li>
          <li>
            (i) {"{x : x is a natural number and a multiple of 3, x < 15}"}
            <br />(ii) {"{x : x = 2ⁿ, n ∈ N and 1 ≤ n ≤ 5}"}
            <br />(iii) {"{x : x = 5ⁿ, n ∈ N and 1 ≤ n ≤ 4}"}
            <br />(iv) {"{x : x is an even natural number}"}
            <br />(v) {"{x : x = n², n ∈ N and 1 ≤ n ≤ 10}"}
          </li>
          <li>
            (i) Infinite — cannot be listed: A = {"{1, 3, 5, ...}"}
            <br />(ii) B = {"{0, 1, 2, 3, 4}"}
            <br />(iii) C = {"{–2, –1, 0, 1, 2}"}
            <br />(iv) D = {"{L, O, Y, A}"}
            <br />(v) E = {"{February, April, June, September, November}"}
            <br />(vi) F = {"{b, c, d, f, g, h, j}"}
          </li>
          <li>(i) ↔ (c)&nbsp;&nbsp;(ii) ↔ (a)&nbsp;&nbsp;(iii) ↔ (d)&nbsp;&nbsp;(iv) ↔ (b)</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-types">Types of Sets</h2>
      <p>
        Depending on the number and nature of their elements, sets are classified into the following
        types — the empty set, finite and infinite sets, and equal sets.
      </p>

      <h3 id="h-1-3">1.3 The Empty Set</h3>
      <p>
        Consider the set A = {"{x : x is a student of Class XI presently studying in a school}"}. We
        can go to the school and count such students — so A contains a finite number of elements.
      </p>
      <p>
        Now consider B = {"{x : x is a student presently studying in both Classes X and XI}"}. A
        student cannot study simultaneously in both classes, so B contains no element at all.
      </p>
      <Callout type="important" title="Definition 1: Empty Set">
        A set which does not contain any element is called the <strong>empty set</strong>, the{" "}
        <strong>null set</strong> or the <strong>void set</strong>. It is denoted by the symbol φ
        or {"{ }"}.
      </Callout>
      <ul>
        <li>A = {"{x : 1 < x < 2, x is a natural number}"} is empty — no natural number lies between 1 and 2.</li>
        <li>B = {"{x : x² – 2 = 0 and x is rational number}"} is empty — no rational value satisfies x² = 2.</li>
        <li>C = {"{x : x is an even prime number greater than 2}"} is empty — 2 is the only even prime.</li>
        <li>D = {"{x : x² = 4, x is odd}"} is empty — no odd value satisfies x² = 4.</li>
      </ul>

      <h3 id="h-1-4">1.4 Finite and Infinite Sets</h3>
      <Callout type="important" title="Definition 2: Finite and Infinite Sets">
        A set which is empty or consists of a definite number of elements is called{" "}
        <strong>finite</strong>; otherwise the set is called <strong>infinite</strong>. By the{" "}
        <strong>number of elements</strong> of a set S we mean the number of distinct elements,
        denoted n(S).
      </Callout>
      <Comparison
        columns={[
          {
            title: "Finite sets",
            children: (
              <ul>
                <li>W = the days of the week</li>
                <li>S = solutions of x² – 16 = 0</li>
                <li>A = {"{1, 2, 3, 4, 5}"}, so n(A) = 5</li>
              </ul>
            ),
          },
          {
            title: "Infinite sets",
            children: (
              <ul>
                <li>G = points on a line</li>
                <li>{"{1, 2, 3, ...}"} natural numbers</li>
                <li>{"{..., –3, –2, –1, 0, 1, 2, 3, ...}"} integers</li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        An infinite set cannot be fully listed within braces; we write a few elements indicating
        the structure, followed (or preceded) by three dots.
      </p>
      <Callout type="note">
        All infinite sets cannot be described in roster form — e.g., the set of real numbers,
        whose elements follow no particular pattern.
      </Callout>

      <Callout type="important" title="Hard-Level Tips: Finite or Infinite?">
        <ul>
          <li>
            <strong>Huge ≠ infinite.</strong> The set of all animals living on Earth, or every grain
            of sand on a beach, is still <em>finite</em> — counting would end eventually.
          </li>
          <li>
            <strong>Beware geometric freedom.</strong> Circles passing through the origin: one for
            every choice of centre/radius → <em>infinite</em>. Lines parallel to the x-axis: one for
            every y-intercept → <em>infinite</em>. &ldquo;Bounded picture&rdquo; does not mean finite set.
          </li>
          <li>
            <strong>Bounded number sets can be infinite.</strong> Every fraction between 0 and 1 is
            squeezed inside [0, 1], yet there are infinitely many of them. A bound limits size, not
            count.
          </li>
          <li>
            <strong>Equations vs inequalities.</strong> An equation like x⁵ – 3x + 1 = 0 has at most 5
            real roots → <em>finite</em>. An inequality like x² &lt; 4 over ℝ gives a whole stretch of
            reals → <em>infinite</em>.
          </li>
          <li>
            <strong>Word/letter sets are always finite.</strong> Letters of any word, months of a
            year, digits of π&rsquo;s decimal expansion written down in a book — finite.
          </li>
          <li>
            <strong>Unbounded patterns are infinite.</strong> Primes, odd numbers, multiples of 7:
            no largest element can ever exist.
          </li>
          <li>
            <strong>Special cases:</strong> φ counts as finite (zero elements), and every singleton
            {"{a}"} is finite. If n(S) exists as a natural number, S is finite — if no such number
            can exist, S is infinite.
          </li>
        </ul>
      </Callout>

      <Expandable id="h-examples-1-4" title="Example 6">
        <ProblemSolution problemNumber="Example 6">
        <ProblemSolution.Problem>
          <p>State which of the following sets are finite or infinite:</p>
          <ul>
            <li>(i) {"{x : x ∈ N and (x – 1)(x – 2) = 0}"}</li>
            <li>(ii) {"{x : x ∈ N and x² = 4}"}</li>
            <li>(iii) {"{x : x ∈ N and 2x – 1 = 0}"}</li>
            <li>(iv) {"{x : x ∈ N and x is prime}"}</li>
            <li>(v) {"{x : x ∈ N and x is odd}"}</li>
          </ul>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <ul>
            <li>(i) Given set = {"{1, 2}"} — finite.</li>
            <li>(ii) Given set = {"{2}"} — finite.</li>
            <li>(iii) Given set = φ — finite.</li>
            <li>(iv) The primes form an infinite set — infinite.</li>
            <li>(v) There are infinitely many odd numbers — infinite.</li>
          </ul>
        </ProblemSolution.Solution>
      </ProblemSolution>
      </Expandable>

      <h3 id="h-1-5">1.5 Equal Sets</h3>
      <Callout type="important" title="Definition 3: Equal Sets">
        Two sets A and B are said to be <strong>equal</strong> if they have exactly the same
        elements, and we write A = B. Otherwise they are unequal, written A ≠ B.
      </Callout>
      <ul>
        <li>A = {"{1, 2, 3, 4}"}, B = {"{3, 1, 4, 2}"} → A = B (order does not matter).</li>
        <li>A = primes less than 6, P = prime factors of 30 → A = P, since both are {"{2, 3, 5}"}.</li>
      </ul>
      <Callout type="note">
        A set does not change if one or more elements are repeated: A = {"{1, 2, 3}"} and B = {"{2, 2, 1, 3, 3}"} are equal. That is why we never repeat elements while describing a set.
      </Callout>

      <SpeedTricks>
        <Callout type="tip" title="No largest element ⇒ infinite">
          Scan the set for a <em>biggest</em> element. Primes, multiples of 7, odd numbers — none
          ever stop, so they are infinite. If a largest element exists and the list ends, it is
          finite.
        </Callout>
        <Callout type="tip" title="n(S) counts distinct elements only">
          Repeats collapse: B = {"{2, 2, 1, 3, 3}"} is really {"{1, 2, 3}"}, so n(B) = 3. Count
          unique values, never repetitions.
        </Callout>
        <Callout type="tip" title="Equal sets? Convert to roster first">
          Never compare two set-builder forms raw — turn each into a roster basket, then compare
          contents. Recipes differ; baskets decide.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-examples-1-5" title="Examples 7 and 8">
        <ProblemSolution problemNumber="Example 7">
        <ProblemSolution.Problem>
          <p>Find the pairs of equal sets, if any, give reasons:</p>
          <ul>
            <li>A = {"{0}"}</li>
            <li>B = {"{x : x > 15 and x < 5}"}</li>
            <li>C = {"{x : x – 5 = 0}"}</li>
            <li>D = {"{x : x² = 25}"}</li>
            <li>E = integral positive roots of x² – 2x – 15 = 0</li>
          </ul>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Comparing each set with the others:</p>
          <ul>
            <li>
              <strong>A vs B, C, D, E:</strong> 0 ∈ A, but 0 belongs to none of B, C, D, E. So A
              differs from all of them.
            </li>
            <li>
              <strong>B vs C, D, E:</strong> B = φ (no element is both &gt; 15 and &lt; 5), while none of
              C, D, E is empty. So B differs from each.
            </li>
            <li>
              <strong>C vs D:</strong> C = {"{5}"}, but D = {"{–5, 5}"} (x² = 25 gives x = ±5). Since –5 ∈ D but –5 ∉ C, C ≠ D.
            </li>
          </ul>
          <p>
            Finally E = {"{5}"} — the positive integral root of x² – 2x – 15 = 0. Hence{" "}
            <strong>C = E</strong>, and this is the only pair of equal sets.
          </p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 8">
        <ProblemSolution.Problem>
          <p>Which of the following pairs of sets are equal? Justify your answer.</p>
          <ul>
            <li>(i) X = letters of &ldquo;ALLOY&rdquo;, B = letters of &ldquo;LOYAL&rdquo;</li>
            <li>(ii) A = {"{n : n ∈ Z and n² ≤ 4}"}, B = {"{x : x ∈ R and x² – 3x + 2 = 0}"}</li>
          </ul>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <ul>
            <li>(i) X = {"{A, L, L, O, Y}"}, B = {"{L, O, Y, A, L}"} — repetition does not change a set, so X = {"{A, L, O, Y}"} = B. Equal.</li>
            <li>(ii) A = {"{–2, –1, 0, 1, 2}"}, B = {"{1, 2}"}. Since 0 ∈ A but 0 ∉ B, they are not equal.</li>
          </ul>
        </ProblemSolution.Solution>
      </ProblemSolution>
      </Expandable>

      <Expandable id="h-ex-1-2" title="EXERCISE 1.2">
        <ol>
          <li>
            Which of the following are examples of the null set?
            <br />(i) Set of odd natural numbers divisible by 2
            <br />(ii) Set of even prime numbers
            <br />(iii) {"{x : x is a natural numbers, x < 5 and x > 7}"}
            <br />(iv) {"{y : y is a point common to any two parallel lines}"}
          </li>
          <li>
            Which of the following sets are finite or infinite?
            <br />(i) The set of months of a year
            <br />(ii) {"{1, 2, 3, ...}"}
            <br />(iii) {"{1, 2, 3, ..., 99, 100}"}
            <br />(iv) The set of positive integers greater than 100
            <br />(v) The set of prime numbers less than 99
          </li>
          <li>
            State whether each of the following set is finite or infinite:
            <br />(i) The set of lines which are parallel to the x-axis
            <br />(ii) The set of letters in the English alphabet
            <br />(iii) The set of numbers which are multiple of 5
            <br />(iv) The set of animals living on the earth
            <br />(v) The set of circles passing through the origin (0, 0)
          </li>
          <li>
            In the following, state whether A = B or not:
            <br />(i) A = {"{a, b, c, d}"}, B = {"{d, c, b, a}"}
            <br />(ii) A = {"{4, 8, 12, 16}"}, B = {"{8, 4, 16, 18}"}
            <br />(iii) A = {"{2, 4, 6, 8, 10}"}, B = {"{x : x is positive even integer and x ≤ 10}"}
            <br />(iv) A = {"{x : x is a multiple of 10}"}, B = {"{10, 15, 20, 25, 30, ...}"}
          </li>
          <li>
            Are the following pair of sets equal? Give reasons.
            <br />(i) A = {"{2, 3}"}, B = solution set of x² + 5x + 6 = 0
            <br />(ii) A = letters of the word FOLLOW, B = letters of the word WOLF
          </li>
          <li>
            From the sets given below, select equal sets:
            <br />A = {"{2, 4, 8, 12}"}, B = {"{1, 2, 3, 4}"}, C = {"{4, 8, 12, 14}"}, D = {"{3, 1, 4, 2}"},<br />
            E = {"{–1, 1}"}, F = {"{0, a}"}, G = {"{1, –1}"}, H = {"{0, 1}"}
          </li>
        </ol>

        <Expandable id="h-ex-1-2-key" title="Answer Key — Exercise 1.2">
          <ol>
          <li>Null sets: (i), (iii) and (iv). (ii) is <em>not</em> null — 2 is an even prime, so that set is {"{2}"}.</li>
          <li>(i) Finite&nbsp;&nbsp;(ii) Infinite&nbsp;&nbsp;(iii) Finite&nbsp;&nbsp;(iv) Infinite&nbsp;&nbsp;(v) Finite</li>
          <li>(i) Infinite&nbsp;&nbsp;(ii) Finite — 26 letters&nbsp;&nbsp;(iii) Infinite&nbsp;&nbsp;(iv) Finite&nbsp;&nbsp;(v) Infinite</li>
          <li>
            (i) A = B (order does not matter)
            <br />(ii) A ≠ B (12 ∈ A but 18 ∈ B and 12 ∉ B)
            <br />(iii) A = B = {"{2, 4, 6, 8, 10}"}
            <br />(iv) A ≠ B:
            <br />15 ∈ B but 15 is not a multiple of 10.
            <br />Also A consists of multiples of 10 while B lists multiples of 5.
          </li>
          <li>
            (i) Not equal: x² + 5x + 6 = 0 gives x = –2, –3 so B = {"{–2, –3}"} ≠ {"{2, 3}"}
            <br />(ii) Equal: both are {"{F, O, L, W}"}
          </li>
          <li>Equal pairs: <strong>B = D</strong> (= {"{1, 2, 3, 4}"}) and <strong>E = G</strong> (= {"{–1, 1}"}).</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-1-6">1.6 Subsets</h2>
      <p>
        Consider X = set of all students in your school and Y = set of all students in your class.
        Every element of Y is also an element of X — we say Y is a <strong>subset</strong> of X,
        written Y ⊂ X. The symbol ⊂ stands for &lsquo;is a subset of&rsquo; or &lsquo;is contained
        in&rsquo;.
      </p>
      <Callout type="important" title="Definition 4: Subset">
        A set A is said to be a subset of a set B if every element of A is also an element of B.
        Using the implication symbol ⇒:
      </Callout>
      <FormulaBlock latex={String.raw`A \subset B \quad \text{if} \quad a \in A \Rightarrow a \in B`} important />
      <VennDiagram layout="subset" caption="B ⊂ A — every element of B lies inside A" />
      <p>
        If every element of B is also in A then B ⊂ A as well; in that case the two sets are the
        same, giving the important criterion:
      </p>
      <FormulaBlock latex={String.raw`A \subset B \;\text{and}\; B \subset A \Leftrightarrow A = B`} important />
      <KeyPoint>
        Every set A is a subset of itself (A ⊂ A). The empty set φ has no elements, so by
        agreement <Highlight>φ is a subset of every set</Highlight>. If A is not a subset of B we write A ⊄ B.
        &ldquo;⇔&rdquo; means a two-way implication — &ldquo;if and only if&rdquo; (iff).
      </KeyPoint>
      <ul>
        <li>The set ℚ of rationals is a subset of ℝ: Q ⊂ R.</li>
        <li>If A = divisors of 56 and B = prime divisors of 56, then B ⊂ A.</li>
        <li>A = {"{1, 3, 5}"}, B = odd naturals less than 6 → A ⊂ B and B ⊂ A, hence A = B.</li>
        <li>A = {"{a, e, i, o, u}"}, B = {"{a, b, c, d}"} → A ⊄ B and B ⊄ A.</li>
      </ul>
      <p>
        If A ⊂ B and A ≠ B, then A is a <strong>proper subset</strong> of B and B is a{" "}
        <strong>superset</strong> of A — e.g., {"{1, 2, 3}"} is a proper subset of {"{1, 2, 3, 4}"}. A set with exactly one element is a <strong>singleton set</strong>, e.g., {"{a}"}.
      </p>

      <Callout type="important" title="How Many Subsets Does a Set Have?">
        <p>
          While forming a subset, every element gives you exactly two choices — include it or leave
          it out. With n elements making independent choices, the counts are:
        </p>
        <FormulaBlock latex={String.raw`\text{Number of subsets of an } n\text{-element set} = 2^n`} important />
        <FormulaBlock latex={String.raw`\text{Number of proper subsets} = 2^n - 1`} />
        <p className="mb-1">(Proper subsets exclude the complete set itself; the count including φ.)</p>
        <table>
          <thead>
            <tr>
              <th>Set</th>
              <th>n</th>
              <th>Subsets (2ⁿ)</th>
              <th>Proper subsets (2ⁿ – 1)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>φ</td><td>0</td><td>1 (just φ itself)</td><td>0</td></tr>
            <tr><td>{"{a}"}</td><td>1</td><td>2 — φ, {"{a}"}</td><td>1</td></tr>
            <tr><td>{"{a, b}"}</td><td>2</td><td>4 — φ, {"{a}"}, {"{b}"}, {"{a, b}"}</td><td>3</td></tr>
            <tr><td>{"{a, b, c}"}</td><td>3</td><td>8</td><td>7</td></tr>
            <tr><td>{"{–1, 0, 1}"}</td><td>3</td><td>8 ✓ (matches Example 24)</td><td>7</td></tr>
          </tbody>
        </table>
      </Callout>

      <SpeedTricks>
        <Callout type="tip" title="The subset proof template">
          To prove A ⊂ B: start &ldquo;Let x ∈ A&rdquo;, use what defines A, end at
          &ldquo;∴ x ∈ B&rdquo;. Two lines. To <em>disprove</em>: one counterexample element in A
          missing from B is enough — no full check.
        </Callout>
        <Callout type="tip" title="The 2ⁿ family">
          Subsets: 2ⁿ. Proper subsets: 2ⁿ − 1. Non-empty subsets: 2ⁿ − 1. Power set of the power
          set: |P(P(A))| = 2<sup>2ⁿ</sup> (beyond syllabus, but examiners love it).
        </Callout>
        <Callout type="tip" title="φ and A itself are always counted">
          In any &ldquo;how many subsets&rdquo; MCQ, the two most-forgotten members are φ and the
          set itself — both always present in P(A).
        </Callout>
      </SpeedTricks>

      <Expandable id="h-examples-1-6" title="Examples 9 to 11">
        <ProblemSolution problemNumber="Example 9">
        <ProblemSolution.Problem>
          <p>
            Consider the sets φ, A = {"{1, 3}"}, B = {"{1, 5, 9}"}, C = {"{1, 3, 5, 7, 9}"}. Insert
            ⊂ or ⊄ between each pair:
          </p>
          <p>(i) φ . . . B&nbsp;&nbsp;(ii) A . . . B&nbsp;&nbsp;(iii) A . . . C&nbsp;&nbsp;(iv) B . . . C</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <ul>
            <li>(i) φ ⊂ B, as φ is a subset of every set.</li>
            <li>(ii) A ⊄ B, as 3 ∈ A but 3 ∉ B.</li>
            <li>(iii) A ⊂ C, as 1, 3 ∈ A also belong to C.</li>
            <li>(iv) B ⊂ C, as each element of B is also an element of C.</li>
          </ul>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 10">
        <ProblemSolution.Problem>
          <p>
            Let A = {"{a, e, i, o, u}"} and B = {"{a, b, c, d}"}. Is A a subset of B? Is B a subset
            of A?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            No to both. For A ⊂ B we would need e, i, o, u ∈ B — false. For B ⊂ A we would need
            b, c, d ∈ A — false.
          </p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 11">
        <ProblemSolution.Problem>
          <p>
            Let A, B, C be three sets. If A ∈ B and B ⊂ C, is it true that A ⊂ C? If not, give an
            example.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            No. Take A = {"{1}"}, B = {"{ {1}, 2 }"}, C = {"{ {1}, 2, 3 }"}. Here A ∈ B (as
            A = {"{1}"}) and B ⊂ C, but A ⊄ C since 1 ∈ A and 1 ∉ C.
          </p>
          <Callout type="warning">
            Note that an element of a set can never be a subset of itself — membership (∈) and
            containment (⊂) are different relations.
          </Callout>
        </ProblemSolution.Solution>
      </ProblemSolution>
      </Expandable>

      <h3 id="h-1-6-1">1.6.1 Subsets of set of real numbers</h3>
      <table>
        <thead>
          <tr>
            <th>Set</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Naturals ℕ</td><td>{"{1, 2, 3, 4, 5, ...}"}</td></tr>
          <tr><td>Integers ℤ</td><td>{"{..., –3, –2, –1, 0, 1, 2, 3, ...}"}</td></tr>
          <tr><td>Rationals ℚ</td><td>{"{x : x = p/q, p, q ∈ Z and q ≠ 0}"}</td></tr>
          <tr><td>Irrationals T</td><td>{"{x : x ∈ R and x ∉ Q}"} — all real numbers that are not rational</td></tr>
        </tbody>
      </table>
      <p>
        Members of ℚ include –5 (which can be expressed as −5/1), 5/7, 3½ (which can be expressed
        as 7/2) and −11/3. Members of T include √2, √5 and π.
      </p>
      <Callout type="important" title="Relations among the subsets of ℝ">
        <FormulaBlock latex={String.raw`\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}, \qquad \mathbb{Q} \subset \mathbb{R}, \qquad T \subset \mathbb{R}, \qquad \mathbb{N} \not\subset T`} important />
      </Callout>

      <h3 id="h-1-6-2">1.6.2 Intervals as subsets of R</h3>
      <p>Let a, b ∈ R and a &lt; b.</p>
      <Comparison
        columns={[
          {
            title: "Open interval (a, b)",
            children: (
              <>
                <FormulaBlock latex={String.raw`(a, b) = \{y : a < y < b\}`} />
                <p>All points between a and b belong to it, but the end points a, b do not.</p>
              </>
            ),
          },
          {
            title: "Closed interval [a, b]",
            children: (
              <>
                <FormulaBlock latex={String.raw`[a, b] = \{x : a \le x \le b\}`} />
                <p>The end points are included.</p>
              </>
            ),
          },
        ]}
      />
      <p>Semi-open intervals are closed at one end and open at the other:</p>
      <FormulaBlock latex={String.raw`[a, b) = \{x : a \le x < b\} \quad\text{(includes } a \text{, excludes } b\text{)}`} />
      <FormulaBlock latex={String.raw`(a, b] = \{x : a < x \le b\} \quad\text{(includes } b \text{, excludes } a\text{)}`} />
      <p>
        These notations designate subsets of the real numbers compactly: if A = (–3, 5) and
        B = [–7, 9], then A ⊂ B. The set [0, ∞) defines the non-negative reals, (–∞, 0) the
        negative reals, and (–∞, ∞) all reals.
      </p>
      <p>On the real number line, taking a = –2 and b = 3:</p>
      <div className="grid gap-x-8 sm:grid-cols-2">
        <NumberLine min={-4} max={5} segments={[{ from: -2, to: 3, fromOpen: true, toOpen: true, label: "(a, b)" }]} />
        <NumberLine min={-4} max={5} segments={[{ from: -2, to: 3, label: "[a, b]" }]} />
        <NumberLine min={-4} max={5} segments={[{ from: -2, to: 3, toOpen: true, label: "[a, b)" }]} />
        <NumberLine min={-4} max={5} segments={[{ from: -2, to: 3, fromOpen: true, label: "(a, b]" }]} />
        <NumberLine min={-4} max={5} segments={[{ from: -2, label: "[a, ∞)" }]} />
        <NumberLine min={-4} max={5} segments={[{ to: 3, label: "(–∞, b)" }]} />
        <NumberLine min={-4} max={5} segments={[{ label: "ℝ = (–∞, ∞)" }]} />
      </div>
      <p>
        Hollow dots mark excluded end points; filled dots mark included ones. These notations
        designate subsets of the real numbers compactly: if A = (–3, 5) and B = [–7, 9], then
        A ⊂ B. The set [0, ∞) defines the non-negative reals, (–∞, 0) the negative reals, and
        (–∞, ∞) all reals.
      </p>
      <KeyPoint>
        Every interval contains infinitely many points. Example: {"{x : x ∈ R, –5 < x ≤ 7}"} in
        interval form is (–5, 7]; conversely [–3, 5) means {"{x : –3 ≤ x < 5}"}.
      </KeyPoint>

      <SpeedTricks>
        <Callout type="tip" title="Read the dots, not the words">
          Filled dot = bracket <strong>[ ]</strong> (included). Hollow dot = parenthesis{" "}
          <strong>( )</strong> (excluded). One glance at a number line tells you the interval
          notation — no memorising.
        </Callout>
        <Callout type="tip" title="Merging overlapping intervals">
          A ∪ B of overlapping intervals: keep the leftmost start and rightmost end. An endpoint
          is included in the union if <em>any</em> piece includes it.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-ex-1-3" title="EXERCISE 1.3">
        <ol>
          <li>
            Make correct statements by filling in the symbols ⊂ or ⊄ in the blank spaces:
            <br />(i) {"{2, 3, 4}"} . . . {"{1, 2, 3, 4, 5}"}
            <br />(ii) {"{a, b, c}"} . . . {"{b, c, d}"}
            <br />(iii) {"{x : x is a student of Class XI of your school}"} . . . {"{x : x student of your school}"}
            <br />(iv) {"{x : x is a circle in the plane}"} . . . {"{x : x is a circle in the same plane with radius 1 unit}"}
            <br />(v) {"{x : x is a triangle in a plane}"} . . . {"{x : x is a rectangle in the plane}"}
            <br />(vi) {"{x : x is an equilateral triangle in a plane}"} . . . {"{x : x is a triangle in the same plane}"}
            <br />(vii) {"{x : x is an even natural number}"} . . . {"{x : x is an integer}"}
          </li>
          <li>
            Examine whether the following statements are true or false:
            <br />(i) {"{a, b}"} ⊄ {"{b, c, a}"}
            <br />(ii) {"{a, e}"} ⊂ {"{x : x is a vowel in the English alphabet}"}
            <br />(iii) {"{1, 2, 3}"} ⊂ {"{1, 3, 5}"}
            <br />(iv) {"{a}"} ⊂ {"{a, b, c}"}
            <br />(v) {"{a}"} ∈ {"{a, b, c}"}
            <br />(vi) even naturals less than 6 ⊂ naturals which divide 36
          </li>
          <li>
            Let A = {"{1, 2, {3, 4}, 5}"}. Which of the following statements are incorrect and why?
            <br />(i) {"{3, 4}"} ⊂ A&nbsp;&nbsp;(ii) {"{3, 4}"} ∈ A&nbsp;&nbsp;(iii) {"{{3, 4}}"} ⊂ A&nbsp;&nbsp;(iv) 1 ∈ A<br />
            (v) 1 ⊂ A&nbsp;&nbsp;(vi) {"{1, 2, 5}"} ⊂ A&nbsp;&nbsp;(vii) {"{1, 2, 5}"} ∈ A&nbsp;&nbsp;(viii) {"{1, 2, 3}"} ⊂ A<br />
            (ix) φ ∈ A&nbsp;&nbsp;(x) φ ⊂ A&nbsp;&nbsp;(xi) {"{φ}"} ⊂ A
          </li>
          <li>
            Write down all the subsets of the following sets:
            <br />(i) {"{a}"}&nbsp;&nbsp;(ii) {"{a, b}"}&nbsp;&nbsp;(iii) {"{1, 2, 3}"}&nbsp;&nbsp;(iv) φ
          </li>
          <li>
            Write the following as intervals:
            <br />(i) {"{x : x ∈ R, –4 < x ≤ 6}"}
            <br />(ii) {"{x : x ∈ R, –12 < x < –10}"}
            <br />(iii) {"{x : x ∈ R, 0 ≤ x < 7}"}
            <br />(iv) {"{x : x ∈ R, 3 ≤ x ≤ 4}"}
          </li>
          <li>
            Write the following intervals in set-builder form:
            <br />(i) (–3, 0)&nbsp;&nbsp;(ii) [6, 12]&nbsp;&nbsp;(iii) (6, 12]&nbsp;&nbsp;(iv) [–23, 5)
          </li>
          <li>
            What universal set(s) would you propose for each of the following?
            <br />(i) The set of right triangles.&nbsp;&nbsp;(ii) The set of isosceles triangles.
          </li>
          <li>
            Given A = {"{1, 3, 5}"}, B = {"{2, 4, 6}"} and C = {"{0, 2, 4, 6, 8}"}, which of the
            following may be considered as universal set(s) for all three sets A, B and C?
            <br />(i) {"{0, 1, 2, 3, 4, 5, 6}"}&nbsp;&nbsp;(ii) φ
            <br />(iii) {"{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}"}&nbsp;&nbsp;(iv) {"{1, 2, 3, 4, 5, 6, 7, 8}"}
          </li>
        </ol>

        <Expandable id="h-ex-1-3-key" title="Answer Key — Exercise 1.3">
          <ol>
          <li>(i) ⊂&nbsp;&nbsp;(ii) ⊄&nbsp;&nbsp;(iii) ⊂&nbsp;&nbsp;(iv) ⊄&nbsp;&nbsp;(v) ⊄&nbsp;&nbsp;(vi) ⊂&nbsp;&nbsp;(vii) ⊂</li>
          <li>
            (i) False — {"{a, b}"} ⊂ {"{b, c, a}"}
            <br />(ii) True
            <br />(iii) False — 2 ∉ {"{1, 3, 5}"}
            <br />(iv) True
            <br />(v) False — {"{a}"} is a set, not an element; the correct statement is {"{a}"} ⊂ {"{a, b, c}"}
            <br />(vi) True — {"{2, 4}"} ⊂ {"{1, 2, 3, 4, 6, 9, 12, 18, 36}"}
          </li>
          <li>
            Incorrect: (i), (v), (vii), (viii), (ix), (xi).
            <br />(i): 3 ∉ A.
            <br />(v): 1 is not a set.
            <br />(vii): a set of three elements cannot be one element of A.
            <br />(viii): 3 ∉ A.
            <br />(ix): φ is not an element of A.
            <br />(xi): φ ∉ A, so {"{φ}"} ⊄ A.
          </li>
          <li>
            (i) φ, {"{a}"}
            <br />(ii) φ, {"{a}"}, {"{b}"}, {"{a, b}"}
            <br />(iii) φ, {"{1}"}, {"{2}"}, {"{3}"}, {"{1, 2}"}, {"{1, 3}"}, {"{2, 3}"}, {"{1, 2, 3}"}
            <br />(iv) φ only
          </li>
          <li>(i) (–4, 6]&nbsp;&nbsp;(ii) (–12, –10)&nbsp;&nbsp;(iii) [0, 7)&nbsp;&nbsp;(iv) [3, 4]</li>
          <li>
            (i) {"{x : x ∈ R and –3 < x < 0}"}
            <br />(ii) {"{x : x ∈ R and 6 ≤ x ≤ 12}"}
            <br />(iii) {"{x : x ∈ R and 6 < x ≤ 12}"}
            <br />(iv) {"{x : x ∈ R and –23 ≤ x < 5}"}
          </li>
          <li>(i) The set of all triangles in the plane.&nbsp;&nbsp;(ii) The same — the set of all triangles in the plane.</li>
          <li>Only (iii) {"{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}"} — it contains every element of A, B and C.</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-1-7">1.7 Venn Diagrams</h2>
      <p>
        Most relationships between sets can be represented by diagrams known as{" "}
        <strong>Venn diagrams</strong>. They consist of rectangles and closed curves — usually circles. The universal set is
        represented by the rectangle and its subsets by circles, with elements written inside their
        respective circles.
      </p>
      <VennDiagram
        layout="subset"
        elementsA={["2", "8", "10"]}
        elementsB={["4", "6"]}
        elementsU={["1", "3", "5", "7", "9"]}
        caption="U = {1, 2, ..., 10}; B = {4, 6} ⊂ A = {2, 4, 6, 8, 10}"
      />
      <p>We will make extensive use of Venn diagrams for union, intersection and difference of sets.</p>

      <h2 id="h-1-8">1.8 Operations on Sets</h2>

      <h3 id="h-1-8-1">1.8.1 Union of sets</h3>
      <p>
        The union of A and B consists of all elements of A and all elements of B, common elements
        taken only once. We write A ∪ B, read &lsquo;A union B&rsquo;.
      </p>

      <Expandable id="h-examples-1-9-1" title="Examples 12 to 14">
        <ProblemSolution problemNumber="Example 12">
        <ProblemSolution.Problem>
          <p>Let A = {"{2, 4, 6, 8}"} and B = {"{6, 8, 10, 12}"}. Find A ∪ B.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`A \cup B = \{2, 4, 6, 8, 10, 12\}`} important />
          <p>The common elements 6 and 8 have been taken only once.</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 13">
        <ProblemSolution.Problem>
          <p>Let A = {"{a, e, i, o, u}"} and B = {"{a, i, u}"}. Show that A ∪ B = A.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            A ∪ B = {"{a, e, i, o, u}"} = A. This illustrates that the union of a set A with its
            subset B is A itself: if B ⊂ A, then A ∪ B = A.
          </p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 14">
        <ProblemSolution.Problem>
          <p>
            X = {"{Ram, Geeta, Akbar}"} — Class XI students in the school hockey team;
            Y = {"{Geeta, David, Ashok}"} — Class XI students in the football team. Find X ∪ Y and
            interpret it.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            X ∪ Y = {"{Ram, Geeta, Akbar, David, Ashok}"} — students of Class XI who are in the
            hockey team or the football team or both.
          </p>
        </ProblemSolution.Solution>
      </ProblemSolution>
      </Expandable>

      <Callout type="important" title="Definition 5: Union">
        The union of two sets A and B is the set C of all those elements which are in A or in B
        (including those in both):
      </Callout>
      <FormulaBlock latex={String.raw`A \cup B = \{x : x \in A \;\text{or}\; x \in B\}`} important />
      <VennDiagram shade="union" caption="A ∪ B — the whole of both circles shaded" />

      <FormulaCard>
        <p className="font-semibold mb-2">Properties of Union</p>
        <FormulaBlock latex={String.raw`A \cup B = B \cup A \quad \text{(Commutative law)}`} />
        <FormulaBlock latex={String.raw`(A \cup B) \cup C = A \cup (B \cup C) \quad \text{(Associative law)}`} />
        <FormulaBlock latex={String.raw`A \cup \phi = A \quad \text{($\phi$ is the identity of $\cup$)}`} />
        <FormulaBlock latex={String.raw`A \cup A = A \quad \text{(Idempotent law)}`} />
        <FormulaBlock latex={String.raw`U \cup A = U \quad \text{(Law of U)}`} />
      </FormulaCard>

      <h3 id="h-1-8-2">1.8.2 Intersection of sets</h3>
      <p>
        The intersection of A and B is the set of all elements common to both, written A ∩ B
        (&lsquo;A intersection B&rsquo;).
      </p>

      <Expandable id="h-examples-1-9-2" title="Examples 15 to 17">
        <ProblemSolution problemNumber="Example 15">
        <ProblemSolution.Problem>
          <p>Consider the sets A and B of Example 12. Find A ∩ B.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The only common elements are 6, 8. Hence A ∩ B = <strong>{"{6, 8}"}</strong>.</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 16">
        <ProblemSolution.Problem>
          <p>Consider the sets X and Y of Example 14. Find X ∩ Y.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>&lsquo;Geeta&rsquo; is the only common element. Hence X ∩ Y = <strong>{"{Geeta}"}</strong>.</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 17">
        <ProblemSolution.Problem>
          <p>
            Let A = {"{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}"} and B = {"{2, 3, 5, 7}"}. Find A ∩ B and
            show that A ∩ B = B.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            A ∩ B = {"{2, 3, 5, 7}"} = B. Note B ⊂ A and A ∩ B = B — intersecting a set with a
            subset returns the subset.
          </p>
        </ProblemSolution.Solution>
      </ProblemSolution>
      </Expandable>

      <Callout type="important" title="Definition 6: Intersection">
        The intersection of two sets A and B is the set of all those elements which belong to both
        A and B:
      </Callout>
      <FormulaBlock latex={String.raw`A \cap B = \{x : x \in A \;\text{and}\; x \in B\}`} important />
      <div className="grid gap-4 sm:grid-cols-2">
        <VennDiagram shade="intersection" caption="A ∩ B — only the common region" />
        <VennDiagram layout="disjoint" shade="union" caption="Disjoint sets — no overlap, A ∩ B = φ" />
      </div>
      <Callout type="important" title="Disjoint Sets">
        If <Highlight color="orange">A ∩ B = φ</Highlight> then A and B are called disjoint sets. Example:{" "}
        A = {"{2, 4, 6, 8}"} and B = {"{1, 3, 5, 7}"} share no elements.
      </Callout>

      <FormulaCard>
        <p className="font-semibold mb-2">Properties of Intersection</p>
        <FormulaBlock latex={String.raw`A \cap B = B \cap A \quad \text{(Commutative law)}`} />
        <FormulaBlock latex={String.raw`(A \cap B) \cap C = A \cap (B \cap C) \quad \text{(Associative law)}`} />
        <FormulaBlock latex={String.raw`\phi \cap A = \phi, \qquad U \cap A = A \quad \text{(Law of $\phi$ and $U$)}`} />
        <FormulaBlock latex={String.raw`A \cap A = A \quad \text{(Idempotent law)}`} />
        <FormulaBlock latex={String.raw`A \cap (B \cup C) = (A \cap B) \cup (A \cap C) \quad \text{(Distributive law — $\cap$ distributes over $\cup$)}`} important />
      </FormulaCard>
      <div className="grid gap-4 sm:grid-cols-2">
        <ThreeSetVenn shade="a-cap-buc" caption="A ∩ (B ∪ C)" />
        <ThreeSetVenn shade="acb-u-acc" caption="(A ∩ B) ∪ (A ∩ C)" />
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Both diagrams shade exactly the same region — the distributive law, verified visually.
      </p>

      <h3 id="h-1-8-3">1.8.3 Difference of sets</h3>
      <p>
        The difference A – B (read &lsquo;A minus B&rsquo;) is the set of elements which belong to
        A but not to B.
      </p>

      <Expandable id="h-examples-1-9-3" title="Examples 18 and 19">
        <ProblemSolution problemNumber="Example 18">
        <ProblemSolution.Problem>
          <p>Let A = {"{1, 2, 3, 4, 5, 6}"}, B = {"{2, 4, 6, 8}"}. Find A – B and B – A.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`A - B = \{1, 3, 5\}, \qquad B - A = \{8\}`} important />
          <p>Note that A – B ≠ B – A.</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 19">
        <ProblemSolution.Problem>
          <p>Let V = {"{a, e, i, o, u}"} and B = {"{a, i, k, u}"}. Find V – B and B – V.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`V - B = \{e, o\}, \qquad B - V = \{k\}`} />
          <p>Again V – B ≠ B – V. In set-builder notation:</p>
          <FormulaBlock latex={String.raw`A - B = \{x : x \in A \;\text{and}\; x \notin B\}`} important />
        </ProblemSolution.Solution>
      </ProblemSolution>
      </Expandable>

      <VennDiagram shade="a-b" caption="A – B — the part of A outside B" />
      <Callout type="important" title="Remark">
        The sets A – B, A ∩ B and B – A are <strong>mutually disjoint</strong>: the intersection of
        any two of them is the null set.
      </Callout>
      <div className="grid gap-4 sm:grid-cols-3">
        <VennDiagram shade="a-b" caption="A – B" />
        <VennDiagram shade="intersection" caption="A ∩ B" />
        <VennDiagram shade="b-a" caption="B – A" />
      </div>

      <SpeedTricks>
        <Callout type="tip" title="Subset shortcut">
          If B ⊂ A, then instantly A ∪ B = A and A ∩ B = B — no computation needed. Check for a
          subset relationship before doing any element work.
        </Callout>
        <Callout type="tip" title="Inclusion–exclusion: the word-problem weapon">
          <FormulaBlock latex={String.raw`n(A \cup B) = n(A) + n(B) - n(A \cap B)`} />
          Three sets:
          <FormulaBlock latex={String.raw`n(A \cup B \cup C) = n(A)+n(B)+n(C) - n(A\cap B)-n(B\cap C)-n(A\cap C) + n(A\cap B\cap C)`} />
        </Callout>
        <Callout type="tip" title="Fill the Venn center-out">
          In word problems, start with the triple intersection, then pairwise regions, then
          singles — you can never double-count this way.
        </Callout>
        <Callout type="tip" title="Symmetric difference (beyond syllabus)">
          A △ B = (A – B) ∪ (B – A) = elements in exactly one of the two sets. Handy identity:
          A △ B = (A ∪ B) – (A ∩ B).
        </Callout>
      </SpeedTricks>

      <Expandable id="h-ex-1-4" title="EXERCISE 1.4">
        <ol>
          <li>
            Find the union of each of the following pairs of sets:
            <br />(i) X = {"{1, 3, 5}"}, Y = {"{1, 2, 3}"}
            <br />(ii) A = {"{a, e, i, o, u}"}, B = {"{a, b, c}"}
            <br />(iii) A = naturals that are multiples of 3, B = naturals less than 6
            <br />(iv) A = {"{x : x is a natural number and 1 < x ≤ 6}"}, B = {"{x : x is a natural number and 6 < x < 10}"}
            <br />(v) A = {"{1, 2, 3}"}, B = φ
          </li>
          <li>Let A = {"{a, b}"}, B = {"{a, b, c}"}. Is A ⊂ B? What is A ∪ B?</li>
          <li>If A and B are two sets such that A ⊂ B, then what is A ∪ B?</li>
          <li>
            If A = {"{1, 2, 3, 4}"}, B = {"{3, 4, 5, 6}"}, C = {"{5, 6, 7, 8}"} and
            D = {"{7, 8, 9, 10}"}; find
            <br />(i) A ∪ B&nbsp;&nbsp;(ii) A ∪ C&nbsp;&nbsp;(iii) B ∪ C&nbsp;&nbsp;(iv) B ∪ D
            <br />(v) A ∪ B ∪ C&nbsp;&nbsp;(vi) A ∪ B ∪ D&nbsp;&nbsp;(vii) B ∪ C ∪ D
          </li>
          <li>Find the intersection of each pair of sets of question 1 above.</li>
          <li>
            If A = {"{3, 5, 7, 9, 11}"}, B = {"{7, 9, 11, 13}"}, C = {"{11, 13, 15}"} and
            D = {"{15, 17}"}; find
            <br />(i) A ∩ B&nbsp;&nbsp;(ii) B ∩ C&nbsp;&nbsp;(iii) A ∩ C ∩ D&nbsp;&nbsp;(iv) A ∩ C
            <br />(v) B ∩ D&nbsp;&nbsp;(vi) A ∩ (B ∪ C)&nbsp;&nbsp;(vii) A ∩ D&nbsp;&nbsp;(viii) A ∩ (B ∪ D)
            <br />(ix) (A ∩ B) ∩ (B ∪ C)&nbsp;&nbsp;(x) (A ∪ D) ∩ (B ∪ C)
          </li>
          <li>
            If A = naturals, B = even naturals, C = odd naturals and D = primes, find
            <br />(i) A ∩ B&nbsp;&nbsp;(ii) A ∩ C&nbsp;&nbsp;(iii) A ∩ D&nbsp;&nbsp;(iv) B ∩ C
            <br />(v) B ∩ D&nbsp;&nbsp;(vi) C ∩ D
          </li>
          <li>
            Which of the following pairs of sets are disjoint?
            <br />(i) {"{1, 2, 3, 4}"} and naturals between 4 and 6 (inclusive)
            <br />(ii) {"{a, e, i, o, u}"} and {"{c, d, e, f}"}
            <br />(iii) even integers and odd integers
          </li>
          <li>
            If A = {"{3, 6, 9, 12, 15, 18, 21}"}, B = {"{4, 8, 12, 16, 20}"},<br />
            C = {"{2, 4, 6, 8, 10, 12, 14, 16}"}, D = {"{5, 10, 15, 20}"}; find
            <br />(i) A – B&nbsp;&nbsp;(ii) A – C&nbsp;&nbsp;(iii) A – D&nbsp;&nbsp;(iv) B – A
            <br />(v) C – A&nbsp;&nbsp;(vi) D – A&nbsp;&nbsp;(vii) B – C&nbsp;&nbsp;(viii) B – D
            <br />(ix) C – B&nbsp;&nbsp;(x) D – B&nbsp;&nbsp;(xi) C – D&nbsp;&nbsp;(xii) D – C
          </li>
          <li>
            If X = {"{a, b, c, d}"} and Y = {"{f, b, d, g}"}, find
            <br />(i) X – Y&nbsp;&nbsp;(ii) Y – X&nbsp;&nbsp;(iii) X ∩ Y
          </li>
          <li>If R is the set of real numbers and Q the rationals, what is R – Q?</li>
          <li>
            State whether each of the following statement is true or false. Justify your answer.
            <br />(i) {"{2, 3, 4, 5}"} and {"{3, 6}"} are disjoint sets.
            <br />(ii) {"{a, e, i, o, u}"} and {"{a, b, c, d}"} are disjoint sets.
            <br />(iii) {"{2, 6, 10, 14}"} and {"{3, 7, 11, 15}"} are disjoint sets.
            <br />(iv) {"{2, 6, 10}"} and {"{3, 7, 11}"} are disjoint sets.
          </li>
        </ol>

        <Expandable id="h-ex-1-4-key" title="Answer Key — Exercise 1.4">
          <ol>
          <li>
            (i) X ∪ Y = {"{1, 2, 3, 5}"}
            <br />(ii) A ∪ B = {"{a, b, c, e, i, o, u}"}
            <br />(iii) A ∪ B = {"{1, 2, 3, 4, 5, 6, 9, 12, 15, ...}"}
            <br />(iv) A = {"{2, 3, 4, 5, 6}"}, B = {"{7, 8, 9}"} so A ∪ B = {"{2, 3, 4, 5, 6, 7, 8, 9}"}
            <br />(v) A ∪ B = {"{1, 2, 3}"}
          </li>
          <li>Yes, A ⊂ B; and A ∪ B = B = {"{a, b, c}"}.</li>
          <li>A ∪ B = B.</li>
          <li>
            (i) {"{1, 2, 3, 4, 5, 6}"}&nbsp;&nbsp;(ii) {"{1, 2, 3, 4, 5, 6, 7, 8}"}&nbsp;&nbsp;(iii) {"{3, 4, 5, 6, 7, 8}"}
            <br />(iv) {"{3, 4, 5, 6, 7, 8, 9, 10}"}&nbsp;&nbsp;(v) {"{1, 2, 3, 4, 5, 6, 7, 8}"}&nbsp;&nbsp;(vi) {"{1, 2, ..., 10}"}&nbsp;&nbsp;(vii) {"{3, 4, ..., 10}"}
          </li>
          <li>(i) X ∩ Y (of Q1 pairs): (i) {"{1, 3}"}&nbsp;&nbsp;(ii) {"{a}"}&nbsp;&nbsp;(iii) {"{3}"}&nbsp;&nbsp;(iv) {"{6}"}&nbsp;&nbsp;(v) φ</li>
          <li>
            (i) {"{7, 9, 11}"}&nbsp;&nbsp;(ii) {"{11, 13}"}&nbsp;&nbsp;(iii) φ&nbsp;&nbsp;(iv) {"{11}"}&nbsp;&nbsp;(v) φ
            <br />(vi) {"{7, 9, 11}"}&nbsp;&nbsp;(vii) φ&nbsp;&nbsp;(viii) {"{7, 9, 11}"}&nbsp;&nbsp;(ix) {"{7, 9, 11}"}&nbsp;&nbsp;(x) {"{7, 9, 11, 15}"}
          </li>
          <li>
            (i) B&nbsp;&nbsp;(ii) A&nbsp;&nbsp;(iii) D&nbsp;&nbsp;(iv) φ
            <br />(v) B ∩ D = {"{2}"}&nbsp;&nbsp;(vi) C ∩ D = the odd primes {"{3, 5, 7, 11, 13, ...}"}
          </li>
          <li>Only (iii): even integers and odd integers are disjoint. (i) share 4; (ii) share e.</li>
          <li>
            (i) {"{3, 6, 9, 15, 18, 21}"}&nbsp;&nbsp;(ii) {"{3, 9, 15, 18, 21}"}&nbsp;&nbsp;(iii) {"{3, 6, 9, 12, 18, 21}"}&nbsp;&nbsp;(iv) {"{4, 8, 16, 20}"}
            <br />(v) {"{2, 4, 8, 10, 14, 16}"}&nbsp;&nbsp;(vi) {"{5, 10, 20}"}&nbsp;&nbsp;(vii) {"{20}"}&nbsp;&nbsp;(viii) {"{4, 8, 12, 16}"}
            <br />(ix) {"{2, 6, 10, 14}"}&nbsp;&nbsp;(x) {"{5, 10, 15}"}&nbsp;&nbsp;(xi) {"{2, 4, 6, 8, 12, 14, 16}"}&nbsp;&nbsp;(xii) {"{5, 15}"}
          </li>
          <li>(i) X – Y = {"{a, c}"}&nbsp;&nbsp;(ii) Y – X = {"{f, g}"}&nbsp;&nbsp;(iii) X ∩ Y = {"{b, d}"}</li>
          <li>R – Q is the set of irrational numbers.</li>
          <li>
            (i) False — 3 belongs to both sets.
            <br />(ii) False — a belongs to both sets.
            <br />(iii) True — no common element.
            <br />(iv) True — no common element.
          </li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-1-9">1.9 Complement of a Set</h2>
      <Callout type="important" title="Definition 7: Complement">
        Let U be the universal set and A a subset of U. The complement of A is the set of all
        elements of U which are not elements of A, written A′. Thus:
      </Callout>
      <FormulaBlock latex={String.raw`A' = \{x : x \in U \;\text{and}\; x \notin A\}, \qquad A' = U - A`} important />
      <VennDiagram shade="outside-a" caption="A′ = U – A — everything outside A, inside U" />

      <Expandable id="h-examples-1-10" title="Examples 20 and 21">
        <ProblemSolution problemNumber="Example 20">
        <ProblemSolution.Problem>
          <p>Let U = {"{1, 2, ..., 10}"} and A = {"{1, 3, 5, 7, 9}"}. Find A′.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The elements of U not in A are 2, 4, 6, 8, 10. Hence A′ = <strong>{"{2, 4, 6, 8, 10}"}</strong>.</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 21">
        <ProblemSolution.Problem>
          <p>
            U is the set of all Class XI students of a coeducational school and A the set of all
            girls in Class XI. Find A′.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Since A is the set of all girls, A′ is clearly the set of all boys in the class.</p>
        </ProblemSolution.Solution>
      </ProblemSolution>
      </Expandable>

      <Callout type="note">
        If A ⊆ U, then A′ is also a subset of U. Moreover, taking the complement twice returns the
        original set — in Example 20, (A′)′ = {"{1, 3, 5, 7, 9}"} = A. In general{" "}
        <strong>(A′)′ = A</strong>.
      </Callout>

      <Expandable id="h-examples-1-10-b" title="Example 22">
        <ProblemSolution problemNumber="Example 22">
        <ProblemSolution.Problem>
          <p>
            Let U = {"{1, 2, 3, 4, 5, 6}"}, A = {"{2, 3}"} and B = {"{3, 4, 5}"}. Find A′, B′,
            A′ ∩ B′, A ∪ B and hence show that (A ∪ B)′ = A′ ∩ B′.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`A' = \{1, 4, 5, 6\}, \qquad B' = \{1, 2, 6\}, \qquad A' \cap B' = \{1, 6\}`} />
          <FormulaBlock latex={String.raw`A \cup B = \{2, 3, 4, 5\} \;\Rightarrow\; (A \cup B)' = \{1, 6\}`} />
          <FormulaBlock latex={String.raw`(A \cup B)' = \{1, 6\} = A' \cap B'`} important />
          <p>This result holds in general, giving De Morgan&apos;s laws:</p>
          <FormulaBlock latex={String.raw`(A \cup B)' = A' \cap B', \qquad (A \cap B)' = A' \cup B'`} important />
        </ProblemSolution.Solution>
      </ProblemSolution>
      </Expandable>

      <div className="grid gap-4 sm:grid-cols-2">
        <VennDiagram shade="outside-both" caption="(A ∪ B)′" />
        <VennDiagram shade="outside-both" caption="A′ ∩ B′" />
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Identical shading — De Morgan&apos;s law, seen at a glance.
      </p>

      <FormulaCard>
        <p className="font-semibold mb-2">Properties of Complement Sets</p>
        <FormulaBlock latex={String.raw`\textbf{Complement laws:} \quad A \cup A' = U, \qquad A \cap A' = \phi`} />
        <FormulaBlock latex={String.raw`\textbf{De Morgan's laws:} \quad (A \cup B)' = A' \cap B', \qquad (A \cap B)' = A' \cup B'`} />
        <FormulaBlock latex={String.raw`\textbf{Double complementation:} \quad (A')' = A`} />
        <FormulaBlock latex={String.raw`\phi' = U \quad \text{and} \quad U' = \phi`} />
      </FormulaCard>
      <KeyPoint>
        All these laws can be verified using Venn diagrams — shade each side separately and check
        the shaded regions match.
      </KeyPoint>

      <SpeedTricks>
        <Callout type="tip" title="Complement arithmetic">
          &ldquo;Not A&rdquo; counts = total − A:{" "}
          <FormulaBlock latex={String.raw`n(A') = n(U) - n(A)`} />
          Also instantly: n(A ∪ B) = n(U) − n(A′ ∩ B′) — complement first, then flip back.
        </Callout>
        <Callout type="tip" title="Difference via complement (beyond syllabus)">
          A – B = A ∩ B′. Turning subtraction into intersection lets you reuse all intersection
          laws — this one identity solves half the difference problems.
        </Callout>
        <Callout type="tip" title="De Morgan memory hook">
          Complement <em>flips the symbol</em>: ∪ becomes ∩ and vice versa, while each set gets a
          prime: (A ∪ B)′ = A′ ∩ B′. Break the bar, change the sign.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-ex-1-5" title="EXERCISE 1.5">
        <ol>
          <li>
            Let U = {"{1, 2, 3, 4, 5, 6, 7, 8, 9}"}, A = {"{1, 2, 3, 4}"}, B = {"{2, 4, 6, 8}"} and
            C = {"{3, 4, 5, 6}"}. Find
            <br />(i) A′&nbsp;&nbsp;(ii) B′&nbsp;&nbsp;(iii) (A ∪ C)′&nbsp;&nbsp;(iv) (A ∪ B)′
            <br />(v) (A′)′&nbsp;&nbsp;(vi) (B – C)′
          </li>
          <li>
            If U = {"{a, b, c, d, e, f, g, h}"}, find the complements of the following sets:
            <br />(i) A = {"{a, b, c}"}&nbsp;&nbsp;(ii) B = {"{d, e, f, g}"}
            <br />(iii) C = {"{a, c, e, g}"}&nbsp;&nbsp;(iv) D = {"{f, g, h, a}"}
          </li>
          <li>
            Taking the set of natural numbers as the universal set, write down the complements of:
            <br />(i) even naturals&nbsp;&nbsp;(ii) odd naturals&nbsp;&nbsp;(iii) positive multiples of 3
            <br />(iv) primes&nbsp;&nbsp;(v) naturals divisible by 3 and 5&nbsp;&nbsp;(vi) perfect squares
            <br />(vii) perfect cubes&nbsp;&nbsp;(viii) solutions of x + 5 = 8&nbsp;&nbsp;(ix) solutions of 2x + 5 = 9
            <br />(x) {"{x : x ≥ 7}"}&nbsp;&nbsp;(xi) {"{x : x ∈ N and 2x + 1 > 10}"}
          </li>
          <li>
            If U = {"{1, 2, 3, 4, 5, 6, 7, 8, 9}"}, A = {"{2, 4, 6, 8}"} and B = {"{2, 3, 5, 7}"}, verify that
            <br />(i) (A ∪ B)′ = A′ ∩ B′&nbsp;&nbsp;(ii) (A ∩ B)′ = A′ ∪ B′
          </li>
          <li>
            Draw appropriate Venn diagram for each of the following:
            <br />(i) (A ∪ B)′&nbsp;&nbsp;(ii) A′ ∩ B′&nbsp;&nbsp;(iii) (A ∩ B)′&nbsp;&nbsp;(iv) A′ ∪ B′
          </li>
          <li>
            Let U be the set of all triangles in a plane. If A is the set of all triangles with at
            least one angle different from 60°, what is A′?
          </li>
          <li>
            Fill in the blanks to make each of the following a true statement:
            <br />(i) A ∪ A′ = . . .&nbsp;&nbsp;(ii) φ′ ∩ A = . . .
            <br />(iii) A ∩ A′ = . . .&nbsp;&nbsp;(iv) U′ ∩ A = . . .
          </li>
        </ol>

        <Expandable id="h-ex-1-5-key" title="Answer Key — Exercise 1.5">
          <ol>
          <li>
            (i) A′ = {"{5, 6, 7, 8, 9}"}
            <br />(ii) B′ = {"{1, 3, 5, 7, 9}"}
            <br />(iii) (A ∪ C)′ = {"{7, 8, 9}"}
            <br />(iv) (A ∪ B)′ = {"{5, 7, 9}"}
            <br />(v) (A′)′ = {"{1, 2, 3, 4}"}
            <br />(vi) (B – C)′ = {"{1, 3, 4, 5, 6, 7, 9}"}
          </li>
          <li>
            (i) A′ = {"{d, e, f, g, h}"}
            <br />(ii) B′ = {"{a, b, c, h}"}
            <br />(iii) C′ = {"{b, d, f, h}"}
            <br />(iv) D′ = {"{b, c, d, e}"}
          </li>
          <li>
            (i) Odd naturals&nbsp;&nbsp;(ii) Even naturals&nbsp;&nbsp;(iii) Naturals that are not positive multiples of 3&nbsp;&nbsp;(iv) Naturals that are not prime
            <br />(v) Naturals not divisible by both 3 and 5 (not divisible by 15)&nbsp;&nbsp;(vi) Naturals that are not perfect squares
            <br />(vii) Naturals that are not perfect cubes&nbsp;&nbsp;(viii) Naturals other than 3&nbsp;&nbsp;(ix) Naturals other than 2
            <br />(x) {"{x : x ∈ N and x < 7}"}&nbsp;&nbsp;(xi) {"{x : x ∈ N and 2x + 1 ≤ 10}"} = {"{1, 2, 3, 4}"}
          </li>
          <li>
            <strong>(i)</strong> A ∪ B = {"{2, 3, 4, 5, 6, 7, 8}"}, so (A ∪ B)′ = {"{1, 9}"}.
            <br />A′ = {"{1, 3, 5, 7, 9}"} and B′ = {"{1, 4, 6, 8, 9}"}, so A′ ∩ B′ = {"{1, 9}"}.
            <br />Both sides are equal — verified ✓
            <br />
            <strong>(ii)</strong> A ∩ B = {"{2}"}, so (A ∩ B)′ = {"{1, 3, 4, 5, 6, 7, 8, 9}"}.
            <br />A′ ∪ B′ = {"{1, 3, 5, 7, 9}"} ∪ {"{1, 4, 6, 8, 9}"} = {"{1, 3, 4, 5, 6, 7, 8, 9}"}.
            <br />Both sides are equal — verified ✓
          </li>
          <li>(i) and (ii) show the same picture: shade U excluding both circles. (iii) and (iv) show the same picture: shade everything except the overlap A ∩ B.</li>
          <li>A′ is the set of all equilateral triangles (every angle 60°).</li>
          <li>(i) U&nbsp;&nbsp;(ii) A&nbsp;&nbsp;(iii) φ&nbsp;&nbsp;(iv) A</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-misc">Miscellaneous Examples</h2>

      <Expandable id="h-examples-misc" title="Examples 23 to 25">
        <ProblemSolution problemNumber="Example 23">
        <ProblemSolution.Problem>
          <p>Show that the set of letters needed to spell &ldquo;CATARACT&rdquo; and the set of letters needed to spell &ldquo;TRACT&rdquo; are equal.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`X = \{\text{letters of CATARACT}\} = \{C, A, T, R\}`} />
          <FormulaBlock latex={String.raw`Y = \{\text{letters of TRACT}\} = \{T, R, A, C, T\} = \{T, R, A, C\}`} />
          <p>Every element of X is in Y and vice-versa, hence X = Y.</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 24">
        <ProblemSolution.Problem>
          <p>List all the subsets of the set {"{–1, 0, 1}"}.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Let A = {"{–1, 0, 1}"}:</p>
          <Stepper
            steps={[
              { label: "Subsets with 0 elements", description: "φ (the empty set)" },
              { label: "Subsets with 1 element", description: "{–1}, {0}, {1}" },
              { label: "Subsets with 2 elements", description: "{–1, 0}, {–1, 1}, {0, 1}" },
              { label: "Subset with 3 elements", description: "{–1, 0, 1} — A itself" },
            ]}
          />
          <p>
            So all the subsets of A are φ, {"{–1}"}, {"{0}"}, {"{1}"}, {"{–1, 0}"}, {"{–1, 1}"},{" "}
            {"{0, 1}"} and {"{–1, 0, 1}"}.
          </p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 25">
        <ProblemSolution.Problem>
          <p>Show that A ∪ B = A ∩ B implies A = B.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>First show A ⊂ B:</p>
          <ol>
            <li>Let a ∈ A (any arbitrary element).</li>
            <li>Then a ∈ A ∪ B.</li>
            <li>Since A ∪ B = A ∩ B, we get a ∈ A ∩ B.</li>
            <li>So a ∈ B. Therefore every a ∈ A is also in B, i.e., A ⊂ B.</li>
          </ol>
          <p>Now show B ⊂ A the same way:</p>
          <ol>
            <li>Let b ∈ B.</li>
            <li>Then b ∈ A ∪ B = A ∩ B.</li>
            <li>So b ∈ A, giving B ⊂ A.</li>
          </ol>
          <p>
            Since A ⊂ B and B ⊂ A, we conclude <strong>A = B</strong>.
          </p>
        </ProblemSolution.Solution>
      </ProblemSolution>
      </Expandable>

      <Expandable id="h-misc-exercise" title="Miscellaneous Exercise on Chapter 1">
        <ol>
          <li>
            Decide, among the following sets, which sets are subsets of one and another:
            <br />A = real roots of x² – 8x + 12 = 0, B = {"{2, 4, 6}"}, C = {"{2, 4, 6, 8, ...}"}, D = {"{6}"}
          </li>
          <li>
            In each of the following, determine whether the statement is true or false. If true,
            prove it; if false, give an example.
            <br />(i) If x ∈ A and A ∈ B, then x ∈ B
            <br />(ii) If A ⊂ B and B ∈ C, then A ∈ C
            <br />(iii) If A ⊂ B and B ⊂ C, then A ⊂ C
            <br />(iv) If A ⊄ B and B ⊄ C, then A ⊄ C
            <br />(v) If x ∈ A and A ⊄ B, then x ∈ B
            <br />(vi) If A ⊂ B and x ∉ B, then x ∉ A
          </li>
          <li>
            Let A, B, C be sets such that A ∪ B = A ∪ C and A ∩ B = A ∩ C. Show that B = C.
          </li>
          <li>
            Show that the following four conditions are equivalent:
            <br />(i) A ⊂ B&nbsp;&nbsp;(ii) A – B = φ&nbsp;&nbsp;(iii) A ∪ B = B&nbsp;&nbsp;(iv) A ∩ B = A
          </li>
          <li>Show that if A ⊂ B, then C – B ⊂ C – A.</li>
          <li>
            Show that for any sets A and B,
            <br />A = (A ∩ B) ∪ (A – B) and A ∪ (B – A) = (A ∪ B)
          </li>
          <li>
            Using properties of sets, show that
            <br />(i) A ∪ (A ∩ B) = A&nbsp;&nbsp;(ii) A ∩ (A ∪ B) = A
          </li>
          <li>Show that A ∩ B = A ∩ C need not imply B = C.</li>
          <li>
            Let A and B be sets. If A ∩ X = B ∩ X = φ and A ∪ X = B ∪ X for some set X, show that
            A = B.
            <br />
            <em>(Hints: A = A ∩ (A ∪ X), B = B ∩ (B ∪ X), and use the Distributive law.)</em>
          </li>
          <li>
            Find sets A, B and C such that A ∩ B, B ∩ C and A ∩ C are non-empty sets and
            A ∩ B ∩ C = φ.
          </li>
        </ol>

        <Expandable id="h-misc-exercise-key" title="Answer Key — Miscellaneous Exercise">
          <ol>
          <li>A = {"{2, 6}"}, so D = {"{6}"} ⊂ A ⊂ B ⊂ C.</li>
          <li>
            (i) False — take A = {"{1}"}, B = {"{{1}}"}: then x = 1 ∈ A and A ∈ B, but x ∉ B.
            <br />(ii) False — take A = {"{1}"}, B = {"{1, 2}"}, C = {"{{1, 2}}, 3"}: A ⊂ B and B ∈ C but A ∉ C.
            <br />(iii) True — every element of A is in B, and every element of B is in C.
            <br />(iv) False — take A = {"{1}"}, B = {"{2, 3}"}, C = {"{1, 2}"}: A ⊄ B and B ⊄ C, yet A ⊂ C.
            <br />(v) False — take A = {"{1, 2}"}, B = {"{2, 3}"}, x = 1: x ∈ A, A ⊄ B but x ∉ B.
            <br />(vi) True — if x were in A then x would be in B (A ⊂ B), a contradiction; so x ∉ A.
          </li>
          <li>
            Starting from B and applying the given conditions step by step:
            <br />B = B ∩ (A ∪ B) &nbsp;<em>(absorption law)</em>
            <br />&nbsp;&nbsp;= B ∩ (A ∪ C) &nbsp;<em>(given A ∪ B = A ∪ C)</em>
            <br />&nbsp;&nbsp;= (B ∩ A) ∪ (B ∩ C) &nbsp;<em>(distributive law)</em>
            <br />&nbsp;&nbsp;= (A ∩ C) ∪ (B ∩ C) &nbsp;<em>(given A ∩ B = A ∩ C)</em>
            <br />&nbsp;&nbsp;= (A ∪ B) ∩ C &nbsp;<em>(distributive law, reversed)</em>
            <br />&nbsp;&nbsp;= (A ∪ C) ∩ C &nbsp;<em>(given A ∪ B = A ∪ C)</em>
            <br />&nbsp;&nbsp;= C.
            <br />Hence <strong>B = C</strong>.
          </li>
          <li>
            Prove the chain A ⊂ B ⇒ A – B = φ ⇒ A ∪ B = B ⇒ A ∩ B = A ⇒ A ⊂ B:
            <br /><strong>A ⊂ B ⇒ A – B = φ:</strong> every element of A lies in B, so no element of A lies outside B.
            <br /><strong>A – B = φ ⇒ A ∪ B = B:</strong> every element of A is already in B, so adjoining A adds nothing.
            <br /><strong>A ∪ B = B ⇒ A ∩ B = A:</strong> every element of the intersection is in A, and it is certainly in B.
            <br /><strong>A ∩ B = A ⇒ A ⊂ B:</strong> every element of A is then an element of A ∩ B, hence of B.
            <br />All four conditions are equivalent.
          </li>
          <li>Let c ∈ C – B, so c ∈ C and c ∉ B. If c belonged to A, then A ⊂ B would force c ∈ B — contradiction. Hence c ∉ A, i.e., c ∈ C – A. Therefore C – B ⊂ C – A.</li>
          <li>
            <strong>A = (A ∩ B) ∪ (A – B):</strong>
            <br />Every element of the union is in A (either from A ∩ B or from A – B).
            <br />Conversely, each a ∈ A either lies in B (then a ∈ A ∩ B) or does not (then a ∈ A – B).
            <br />So the two sides are equal.
            <br />
            <strong>A ∪ (B – A) = A ∪ B:</strong>
            <br />a ∈ A ∪ (B – A) means a ∈ A, or (a ∈ B and a ∉ A); in both cases a ∈ A ∪ B.
            <br />Conversely any element of A ∪ B clearly belongs to A ∪ (B – A).
          </li>
          <li>(i) A ∪ (A ∩ B) = (A ∪ A) ∩ (A ∪ B) [distributive] = A ∩ (A ∪ B) = A [absorption]. (ii) A ∩ (A ∪ B) = (A ∩ A) ∪ (A ∩ B) = A ∪ (A ∩ B) = A by part (i).</li>
          <li>No. Example: A = {"{1}"}, B = {"{1, 2}"}, C = {"{1, 3}"} — then A ∩ B = {"{1}"} = A ∩ C but B ≠ C.</li>
          <li>
            <strong>Show A ⊂ B:</strong>
            <br />A = A ∩ (A ∪ X) &nbsp;<em>(absorption)</em>
            <br />&nbsp;&nbsp;= A ∩ (B ∪ X) &nbsp;<em>(given A ∪ X = B ∪ X)</em>
            <br />&nbsp;&nbsp;= (A ∩ B) ∪ (A ∩ X) &nbsp;<em>(distributive)</em>
            <br />&nbsp;&nbsp;= (A ∩ B) ∪ φ &nbsp;<em>(given A ∩ X = φ)</em>
            <br />&nbsp;&nbsp;= A ∩ B, hence A ⊂ B.
            <br />
            <strong>Show B ⊂ A (identically):</strong>
            <br />B = B ∩ (B ∪ X) = B ∩ (A ∪ X) = (B ∩ A) ∪ φ = A ∩ B, hence B ⊂ A.
            <br />Therefore <strong>A = B</strong>.
          </li>
          <li>Take A = {"{1, 2}"}, B = {"{2, 3}"}, C = {"{3, 1}"}: the pairwise intersections are {"{2}"}, {"{3}"}, {"{1}"} — all non-empty — while A ∩ B ∩ C = φ.</li>
          </ol>
        </Expandable>
      </Expandable>
    </>
  );
}
