import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";

export default function SetsChapter() {
  return (
    <>
      <h2 id="h-intro">1.1 Introduction</h2>
      <blockquote>
        &ldquo;In these days of conflict between ancient and modern studies; there must surely be
        something to be said for a study which did not begin with Pythagoras and will not end with
        Einstein; but is the oldest and the youngest.&rdquo; — G.H. Hardy
      </blockquote>
      <Callout type="didyouknow">
        The theory of sets was developed by German mathematician <strong>Georg Cantor</strong>{" "}
        (1845–1918). He first encountered sets while working on &ldquo;problems on trigonometric
        series&rdquo;. Today, the concept of set is a fundamental part of almost every branch of
        mathematics — sets are used to define relations and functions, and the study of geometry,
        sequences and probability requires the knowledge of sets.
      </Callout>

      <h2 id="h-1-2">1.2 Sets and their Representations</h2>
      <p>
        In everyday life we often speak of collections of objects of a particular kind — a pack of
        cards, a crowd of people, a cricket team. In mathematics too we meet collections of natural
        numbers, points, prime numbers, and so on. Examine these collections:
      </p>
      <ul>
        <li>Odd natural numbers less than 10, i.e., 1, 3, 5, 7, 9</li>
        <li>The rivers of India</li>
        <li>The vowels in the English alphabet, namely, a, e, i, o, u</li>
        <li>Various kinds of triangles</li>
        <li>Prime factors of 210, namely, 2, 3, 5 and 7</li>
        <li>The solution of the equation x² – 5x + 6 = 0, viz, 2 and 3</li>
      </ul>
      <Callout type="important" title="Definition: Set">
        A <strong>set</strong> is a well-defined collection of objects — we can definitely decide
        whether a given particular object belongs to the collection or not. For example, the river
        Nile does <em>not</em> belong to the collection of rivers of India, while the Ganga does.
        The collection of &ldquo;five most renowned mathematicians of the world&rdquo; is{" "}
        <em>not</em> a set, because the criterion may vary from person to person.
      </Callout>
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
        <strong>Roster form:</strong> the order of listing is immaterial — {"{1, 3, 7, 21, 2, 6, 14, 42}"} is the same set as above. An element is not generally repeated: the letters of &ldquo;SCHOOL&rdquo; form {"{S, C, H, O, L}"}. <strong>Set-builder form:</strong> read {"{x : P(x)}"} as &ldquo;the set of all x such that x has property P&rdquo; — braces stand for &ldquo;the set of all&rdquo;, the colon for &ldquo;such that&rdquo;.
      </Callout>

      <ProblemSolution problemNumber="Example 1">
        <ProblemSolution.Problem>
          <p>Write the solution set of the equation x² + x – 2 = 0 in roster form.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The given equation can be written as:</p>
          <FormulaBlock latex="(x - 1)(x + 2) = 0, \quad \text{i.e.,} \quad x = 1, -2" />
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
          <FormulaBlock latex="A = \{x : x \text{ is the square of a natural number}\}" />
          <p>Alternatively:</p>
          <FormulaBlock latex="A = \{x : x = n^2, \text{ where } n \in \mathbb{N}\}" important />
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 4">
        <ProblemSolution.Problem>
          <p>Write the set {"{1/2, 2/3, 3/4, 4/5, 5/6, 6/7}"} in set-builder form.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Each member has numerator one less than the denominator; numerators begin at 1 and do not exceed 6. Hence:</p>
          <FormulaBlock latex="A = \left\{x : x = \frac{n}{n+1}, \text{ where } n \in \mathbb{N} \text{ and } 1 \le n \le 6\right\}" important />
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 5">
        <ProblemSolution.Problem>
          <p>Match each roster-form set with the same set in set-builder form:</p>
          <ul>
            <li>(i) {"{P, R, I, N, C, A, L}"} — (a) {"{x : x is a positive integer and is a divisor of 18}"}</li>
            <li>(ii) {"{0}"} — (b) {"{x : x is an integer and x² – 9 = 0}"}</li>
            <li>(iii) {"{1, 2, 3, 6, 9, 18}"} — (c) {"{x : x is an integer and x + 1 = 1}"}</li>
            <li>(iv) {"{3, –3}"} — (d) {"{x : x is a letter of the word PRINCIPAL}"}</li>
          </ul>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            PRINCIPAL has 9 letters with P and I repeated, so (i) matches (d). Also (ii) matches
            (c), since x + 1 = 1 implies x = 0. Since 1, 2, 3, 6, 9, 18 are all divisors of 18,
            (iii) matches (a). Finally x² – 9 = 0 implies x = 3, –3, so (iv) matches (b).
          </p>
        </ProblemSolution.Solution>
      </ProblemSolution>

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
      </Expandable>

      <h2 id="h-1-3">1.3 The Empty Set</h2>
      <p>Consider the set A = {"{x : x is a student of Class XI presently studying in a school}"}. We can go to the school and count such students — so A contains a finite number of elements. Now consider B = {"{x : x is a student presently studying in both Classes X and XI}"}. A student cannot study simultaneously in both classes, so B contains no element at all.</p>
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

      <h2 id="h-1-4">1.4 Finite and Infinite Sets</h2>
      <p>
        Let A = {"{1, 2, 3, 4, 5}"}, B = {"{a, b, c, d, e, g}"} and C = the set of men living
        presently in different parts of the world. A contains 5 elements and B contains 6; C also
        contains some (big) natural number of elements. By the <strong>number of elements</strong>{" "}
        of a set S we mean the number of distinct elements, denoted n(S).
      </p>
      <Callout type="important" title="Definition 2: Finite and Infinite Sets">
        A set which is empty or consists of a definite number of elements is called{" "}
        <strong>finite</strong>; otherwise the set is called <strong>infinite</strong>.
      </Callout>
      <Comparison
        columns={[
          {
            title: "Finite sets",
            children: (
              <ul>
                <li>W = the days of the week</li>
                <li>S = solutions of x² – 16 = 0</li>
                <li>n(A) = 5, n(B) = 6 above</li>
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

      <h2 id="h-1-5">1.5 Equal Sets</h2>
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
          <p>
            Since 0 ∈ A but 0 belongs to none of B, C, D, E: A differs from each. B = φ while none
            of the others are empty, so B differs from C, D, E. Also C = {"{5}"} but –5 ∈ D, hence
            C ≠ D. Since E = {"{5}"}, we get <strong>C = E</strong>; and D = {"{–5, 5}"} ≠ E. The
            only pair of equal sets is <strong>C and E</strong>.
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
      <FormulaBlock latex="A \subset B \quad \text{if} \quad a \in A \Rightarrow a \in B" important />
      <p>
        If every element of B is also in A then B ⊂ A as well; in that case the two sets are the
        same, giving the important criterion:
      </p>
      <FormulaBlock latex="A \subset B \;\text{and}\; B \subset A \Leftrightarrow A = B" important />
      <KeyPoint>
        Every set A is a subset of itself (A ⊂ A). The empty set φ has no elements, so by
        agreement φ is a subset of <em>every</em> set. If A is not a subset of B we write A ⊄ B.
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
        <FormulaBlock latex="\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}, \qquad \mathbb{Q} \subset \mathbb{R}, \qquad T \subset \mathbb{R}, \qquad \mathbb{N} \not\subset T" important />
      </Callout>

      <h3 id="h-1-6-2">1.6.2 Intervals as subsets of R</h3>
      <p>Let a, b ∈ R and a &lt; b.</p>
      <Comparison
        columns={[
          {
            title: "Open interval (a, b)",
            children: (
              <>
                <FormulaBlock latex="(a, b) = \{y : a < y < b\}" />
                <p>All points between a and b belong to it, but the end points a, b do not.</p>
              </>
            ),
          },
          {
            title: "Closed interval [a, b]",
            children: (
              <>
                <FormulaBlock latex="[a, b] = \{x : a \le x \le b\}" />
                <p>The end points are included.</p>
              </>
            ),
          },
        ]}
      />
      <p>Semi-open intervals are closed at one end and open at the other:</p>
      <FormulaBlock latex="[a, b) = \{x : a \le x < b\} \quad\text{(includes } a \text{, excludes } b\text{)}" />
      <FormulaBlock latex="(a, b] = \{x : a < x \le b\} \quad\text{(includes } b \text{, excludes } a\text{)}" />
      <p>
        These notations designate subsets of the real numbers compactly: if A = (–3, 5) and
        B = [–7, 9], then A ⊂ B. The set [0, ∞) defines the non-negative reals, (–∞, 0) the
        negative reals, and (–∞, ∞) all reals.
      </p>
      <Callout type="note" title="Fig 1.1">
        On the real number line, the various interval types — open, closed and semi-open, plus
        rays like [0, ∞) and (–∞, 0) — appear as segments with hollow (excluded) or filled
        (included) end points.
      </Callout>
      <KeyPoint>
        Every interval contains infinitely many points. Example: {"{x : x ∈ R, –5 < x ≤ 7}"} in
        interval form is (–5, 7]; conversely [–3, 5) means {"{x : –3 ≤ x < 5}"}. The number{" "}
        <strong>(b – a)</strong> is called the <strong>length</strong> of any of the intervals
        (a, b), [a, b], [a, b) or (a, b].
      </KeyPoint>

      <h2 id="h-1-7">1.7 Universal Set</h2>
      <p>
        In a particular context we deal with the elements and subsets of one basic set relevant to
        that context. While studying the system of numbers we may take the naturals as basic, with
        subsets like the primes or the evens. For the integers, the universal set could be ℚ or
        even ℝ; in human population studies it is all the people in the world.
      </p>
      <Callout type="important" title="Universal Set U">
        The basic set relevant to a particular context is called the <strong>universal set</strong>
        , usually denoted U; its subsets are denoted A, B, C, etc.
      </Callout>

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
      </Expandable>

      <h2 id="h-1-8">1.8 Venn Diagrams</h2>
      <p>
        Most relationships between sets can be represented by diagrams known as{" "}
        <strong>Venn diagrams</strong>, named after the English logician John Venn (1834–1883).
        They consist of rectangles and closed curves — usually circles. The universal set is
        represented by the rectangle and its subsets by circles, with elements written inside their
        respective circles.
      </p>
      <Callout type="note" title="Figs 1.2 and 1.3">
        <strong>Illustration 1:</strong> U = {"{1, 2, 3, ..., 10}"} shown as a rectangle, with
        circle A = {"{2, 4, 6, 8, 10}"} inside it. <strong>Illustration 2:</strong> the same U with
        A = {"{2, 4, 6, 8, 10}"} and B = {"{4, 6}"} drawn inside A — showing B ⊂ A.
      </Callout>
      <p>We will make extensive use of Venn diagrams for union, intersection and difference of sets.</p>

      <h2 id="h-1-9">1.9 Operations on Sets</h2>
      <p>
        Just as addition performed on the pair 5 and 13 gives 18, there are operations which,
        performed on two sets, give rise to another set. Henceforth all our sets are subsets of
        some universal set.
      </p>

      <h3 id="h-1-9-1">1.9.1 Union of sets</h3>
      <p>
        The union of A and B consists of all elements of A and all elements of B, common elements
        taken only once. We write A ∪ B, read &lsquo;A union B&rsquo;.
      </p>

      <ProblemSolution problemNumber="Example 12">
        <ProblemSolution.Problem>
          <p>Let A = {"{2, 4, 6, 8}"} and B = {"{6, 8, 10, 12}"}. Find A ∪ B.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex="A \cup B = \{2, 4, 6, 8, 10, 12\}" important />
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

      <Callout type="important" title="Definition 5: Union">
        The union of two sets A and B is the set C of all those elements which are in A or in B
        (including those in both):
      </Callout>
      <FormulaBlock latex="A \cup B = \{x : x \in A \;\text{or}\; x \in B\}" important />
      <Callout type="note" title="Fig 1.4">
        Two overlapping circles A and B inside rectangle U, with the whole of both circles shaded —
        the shaded portion represents A ∪ B.
      </Callout>

      <FormulaCard>
        <p className="font-semibold mb-2">Properties of Union</p>
        <FormulaBlock latex="A \cup B = B \cup A \quad \text{(Commutative law)}" />
        <FormulaBlock latex="(A \cup B) \cup C = A \cup (B \cup C) \quad \text{(Associative law)}" />
        <FormulaBlock latex="A \cup \phi = A \quad \text{($\phi$ is the identity of $\cup$)}" />
        <FormulaBlock latex="A \cup A = A \quad \text{(Idempotent law)}" />
        <FormulaBlock latex="U \cup A = U \quad \text{(Law of U)}" />
      </FormulaCard>

      <h3 id="h-1-9-2">1.9.2 Intersection of sets</h3>
      <p>
        The intersection of A and B is the set of all elements common to both, written A ∩ B
        (&lsquo;A intersection B&rsquo;).
      </p>

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

      <Callout type="important" title="Definition 6: Intersection">
        The intersection of two sets A and B is the set of all those elements which belong to both
        A and B:
      </Callout>
      <FormulaBlock latex="A \cap B = \{x : x \in A \;\text{and}\; x \in B\}" important />
      <Callout type="note" title="Figs 1.5 and 1.6">
        Fig 1.5: two overlapping circles with only the lens-shaped overlap shaded (= A ∩ B). Fig
        1.6: two separate non-overlapping circles — <strong>disjoint sets</strong>.
      </Callout>
      <Callout type="important" title="Disjoint Sets">
        If A ∩ B = φ then A and B are called disjoint sets. Example: A = {"{2, 4, 6, 8}"} and
        B = {"{1, 3, 5, 7}"} share no elements.
      </Callout>

      <FormulaCard>
        <p className="font-semibold mb-2">Properties of Intersection</p>
        <FormulaBlock latex="A \cap B = B \cap A \quad \text{(Commutative law)}" />
        <FormulaBlock latex="(A \cap B) \cap C = A \cap (B \cap C) \quad \text{(Associative law)}" />
        <FormulaBlock latex="\phi \cap A = \phi, \qquad U \cap A = A \quad \text{(Law of $\phi$ and $U$)}" />
        <FormulaBlock latex="A \cap A = A \quad \text{(Idempotent law)}" />
        <FormulaBlock latex="A \cap (B \cup C) = (A \cap B) \cup (A \cap C) \quad \text{(Distributive law — $\cap$ distributes over $\cup$)}" important />
      </FormulaCard>
      <Callout type="note" title="Figs 1.7 (i) to (v)">
        Five Venn diagrams verify the distributive law step by step: shading B ∪ C, then
        A ∩ (B ∪ C); then A ∩ B and A ∩ C separately; finally their union — which matches the
        second diagram exactly.
      </Callout>

      <h3 id="h-1-9-3">1.9.3 Difference of sets</h3>
      <p>
        The difference A – B (read &lsquo;A minus B&rsquo;) is the set of elements which belong to
        A but not to B.
      </p>

      <ProblemSolution problemNumber="Example 18">
        <ProblemSolution.Problem>
          <p>Let A = {"{1, 2, 3, 4, 5, 6}"}, B = {"{2, 4, 6, 8}"}. Find A – B and B – A.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex="A - B = \{1, 3, 5\}, \qquad B - A = \{8\}" important />
          <p>Note that A – B ≠ B – A.</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="Example 19">
        <ProblemSolution.Problem>
          <p>Let V = {"{a, e, i, o, u}"} and B = {"{a, i, k, u}"}. Find V – B and B – V.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex="V - B = \{e, o\}, \qquad B - V = \{k\}" />
          <p>Again V – B ≠ B – V. In set-builder notation:</p>
          <FormulaBlock latex="A - B = \{x : x \in A \;\text{and}\; x \notin B\}" important />
        </ProblemSolution.Solution>
      </ProblemSolution>

      <Callout type="note" title="Fig 1.8">
        Two overlapping circles A and B inside U with the part of A outside B shaded — the
        difference A – B.
      </Callout>
      <Callout type="important" title="Remark">
        The sets A – B, A ∩ B and B – A are <strong>mutually disjoint</strong>: the intersection of
        any two of them is the null set (see Fig 1.9, which shows the three separate regions).
      </Callout>

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
      </Expandable>

      <h2 id="h-1-10">1.10 Complement of a Set</h2>
      <p>
        Let U be the universal set of all prime numbers and A the subset of primes that are{" "}
        <em>not</em> divisors of 42. Then 2, 3, 7 ∈ U but 2, 3, 7 ∉ A (each divides 42), and these
        are the only elements of U missing from A. The set {"{2, 3, 7}"} is called the{" "}
        <strong>complement</strong> of A with respect to U, denoted A′.
      </p>
      <Callout type="important" title="Definition 7: Complement">
        Let U be the universal set and A a subset of U. The complement of A is the set of all
        elements of U which are not elements of A, written A′. Thus:
      </Callout>
      <FormulaBlock latex="A' = \{x : x \in U \;\text{and}\; x \notin A\}, \qquad A' = U - A" important />

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

      <Callout type="note">
        If A ⊆ U, then A′ is also a subset of U. Moreover, taking the complement twice returns the
        original set — in Example 20, (A′)′ = {"{1, 3, 5, 7, 9}"} = A. In general{" "}
        <strong>(A′)′ = A</strong>.
      </Callout>

      <ProblemSolution problemNumber="Example 22">
        <ProblemSolution.Problem>
          <p>
            Let U = {"{1, 2, 3, 4, 5, 6}"}, A = {"{2, 3}"} and B = {"{3, 4, 5}"}. Find A′, B′,
            A′ ∩ B′, A ∪ B and hence show that (A ∪ B)′ = A′ ∩ B′.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex="A' = \{1, 4, 5, 6\}, \qquad B' = \{1, 2, 6\}, \qquad A' \cap B' = \{1, 6\}" />
          <FormulaBlock latex="A \cup B = \{2, 3, 4, 5\} \;\Rightarrow\; (A \cup B)' = \{1, 6\}" />
          <FormulaBlock latex="(A \cup B)' = \{1, 6\} = A' \cap B'" important />
          <p>This result holds in general, giving De Morgan&apos;s laws:</p>
          <FormulaBlock latex="(A \cup B)' = A' \cap B', \qquad (A \cap B)' = A' \cup B'" important />
        </ProblemSolution.Solution>
      </ProblemSolution>

      <Callout type="didyouknow" title="De Morgan's Laws">
        Named after the mathematician De Morgan: <em>the complement of the union of two sets is
        the intersection of their complements, and the complement of the intersection of two sets
        is the union of their complements.</em>
      </Callout>
      <Callout type="note" title="Fig 1.10">
        Rectangle U with circle A inside; everything outside A but inside U is shaded — the
        complement A′.
      </Callout>

      <FormulaCard>
        <p className="font-semibold mb-2">Properties of Complement Sets</p>
        <FormulaBlock latex="\textbf{Complement laws:} \quad A \cup A' = U, \qquad A \cap A' = \phi" />
        <FormulaBlock latex="\textbf{De Morgan's laws:} \quad (A \cup B)' = A' \cap B', \qquad (A \cap B)' = A' \cup B'" />
        <FormulaBlock latex="\textbf{Double complementation:} \quad (A')' = A" />
        <FormulaBlock latex="\phi' = U \quad \text{and} \quad U' = \phi" />
      </FormulaCard>
      <KeyPoint>
        All these laws can be verified using Venn diagrams — shade each side separately and check
        the shaded regions match.
      </KeyPoint>

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
      </Expandable>

      <h2 id="h-misc">Miscellaneous Examples</h2>

      <ProblemSolution problemNumber="Example 23">
        <ProblemSolution.Problem>
          <p>Show that the set of letters needed to spell &ldquo;CATARACT&rdquo; and the set of letters needed to spell &ldquo;TRACT&rdquo; are equal.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex="X = \{\text{letters of CATARACT}\} = \{C, A, T, R\}" />
          <FormulaBlock latex="Y = \{\text{letters of TRACT}\} = \{T, R, A, C, T\} = \{T, R, A, C\}" />
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
          <p>
            Let a ∈ A. Then a ∈ A ∪ B. Since A ∪ B = A ∩ B, we get a ∈ A ∩ B, so a ∈ B. Therefore
            A ⊂ B. Similarly, if b ∈ B then b ∈ A ∪ B = A ∩ B, so b ∈ A, giving B ⊂ A. Hence
            A = B.
          </p>
        </ProblemSolution.Solution>
      </ProblemSolution>

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
      </Expandable>

      <h2 id="h-summary">Summary</h2>
      <ul>
        <li>A set is a well-defined collection of objects.</li>
        <li>A set which does not contain any element is called the empty set.</li>
        <li>A set with a definite number of elements is finite; otherwise infinite.</li>
        <li>Two sets are equal if they have exactly the same elements.</li>
        <li>A is a subset of B if every element of A is also an element of B. Intervals are subsets of R.</li>
        <li>The union of two sets is the set of elements in either set.</li>
        <li>The intersection is the set of common elements; the difference A – B is the set of elements of A not in B.</li>
        <li>The complement of A ⊆ U is the set of elements of U not in A.</li>
        <li>For any two sets, (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′.</li>
      </ul>

      <Expandable id="h-history" title="Historical Note">
        <p>
          The modern theory of sets originated largely with Georg Cantor (1845–1918). His papers on
          set theory appeared between 1874 and 1897, arising from his study of trigonometric series
          of the form a₁ sin x + a₂ sin 2x + a₃ sin 3x + ... In an 1874 paper he showed that the
          real numbers cannot be put into one-to-one correspondence with the integers, and from
          1879 onwards he published several papers on properties of abstract sets.
        </p>
        <p>
          Cantor&apos;s work was well received by Richard Dedekind (1831–1916), but Kronecker
          (1810–1893) castigated him for treating infinite sets like finite ones. Gottlob Frege
          later presented set theory as principles of logic. Until then set theory rested on the
          assumed existence of a set of all sets — until Bertrand Russell (1872–1970) showed in
          1902 that this assumption leads to a contradiction, the famous{" "}
          <strong>Russell&apos;s Paradox</strong>. Paul R. Halmos writes in{" "}
          <em>Naïve Set Theory</em> that &ldquo;nothing contains everything&rdquo;.
        </p>
        <p>
          Many paradoxes followed, prompting axiomatisations: Ernst Zermelo published the first in
          1908; Abraham Fraenkel proposed another in 1922; John von Neumann introduced the axiom of
          regularity in 1925; Paul Bernays gave a more satisfactory axiomatisation in 1937; and
          Kurt Gödel modified these axioms in his 1940 monograph — known as Von Neumann–Bernays
          (VNB) or Gödel–Bernays (GB) set theory.
        </p>
        <p>
          Despite these difficulties, Cantor&apos;s set theory is used throughout present-day
          mathematics — most concepts and results are expressed in set-theoretic language.
        </p>
      </Expandable>
    </>
  );
}
