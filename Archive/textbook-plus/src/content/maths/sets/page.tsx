import { CollapsibleSection } from "@/components/content/CollapsibleSection";
import { Callout } from "@/components/content/Callout";
import { Comparison } from "@/components/content/Comparison";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Stepper } from "@/components/content/Stepper";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";
import { FactCard } from "@/components/content/concept/FactCard";
import { TableCard } from "@/components/content/data/TableCard";

export default function SetsChapter() {
  return (
    <CollapsibleSection title="Prerequisites" id="prerequisites">
      <p className="text-sm text-muted-foreground">
        Foundation concepts used throughout this chapter. Read each chunk once
        before starting Sets.
      </p>

      {/* ─── Chunk 1: Variables & Expressions ─── */}
      <h3 id="prereq-variables-expressions">Variables &amp; Expressions</h3>

      <Callout type="important" title="Constant">
        A quantity whose value does not change.
      </Callout>
      <FormulaBlock latex={"2,\\quad -5,\\quad \\pi,\\quad 10"} />

      <Callout type="important" title="Variable">
        A symbol whose value can vary.
      </Callout>
      <FormulaBlock latex={"x,\\quad y,\\quad a,\\quad b,\\quad n"} />

      <p>For example, in:</p>
      <FormulaBlock latex={"2x+5"} />
      <ul>
        <li><Formula>x</Formula> → variable</li>
        <li>2 → coefficient of <Formula>x</Formula></li>
        <li>5 → constant</li>
        <li><Formula>{"2x+5"}</Formula> → algebraic expression</li>
      </ul>

      <Callout type="important" title="Algebraic Expression">
        An algebraic expression is formed using numbers, variables and
        mathematical operations.
      </Callout>
      <FormulaBlock latex={"3x+2"} />
      <FormulaBlock latex={"x^2-4x+7"} />
      <FormulaBlock latex={"\\frac{x+1}{x-2}"} />

      <p>
        <strong>Important vocabulary.</strong> In:
      </p>
      <FormulaBlock latex={"5x^2-3x+7"} />
      <ul>
        <li>Terms: <Formula>{"5x^2"}</Formula>, <Formula>{"-3x"}</Formula>, 7</li>
        <li>Coefficient of <Formula>{"x^2"}</Formula>: 5</li>
        <li>Coefficient of <Formula>x</Formula>: −3</li>
        <li>Constant term: 7</li>
      </ul>

      <Comparison
        columns={[
          {
            title: "Expression",
            children: (
              <>
                <p>
                  Represents a mathematical quantity. It cannot normally be
                  classified as true or false.
                </p>
                <FormulaBlock latex={"x+5"} />
              </>
            ),
          },
          {
            title: "Statement",
            children: (
              <>
                <p>
                  Makes a claim that can be judged true or false.
                </p>
                <ul>
                  <li><Formula>{"2+3=5"}</Formula> — true</li>
                  <li><Formula>{"7<4"}</Formula> — false</li>
                </ul>
              </>
            ),
          },
        ]}
      />
      <p>
        This distinction becomes important when interpreting mathematical
        conditions.
      </p>

      <TableCard
        headers={["Words", "Mathematical Form"]}
        rows={[
          { cells: ["x is greater than 5", "x > 5"] },
          { cells: ["x is less than 5", "x < 5"] },
          { cells: ["x is at least 5", "x ≥ 5"] },
          { cells: ["x is at most 5", "x ≤ 5"] },
          { cells: ["x is not equal to 5", "x ≠ 5"] },
          { cells: ["x is positive", "x > 0"] },
          { cells: ["x is negative", "x < 0"] },
          { cells: ["x is non-negative", "x ≥ 0"] },
          { cells: ["x is non-positive", "x ≤ 0"] },
        ]}
        caption="Words can be converted into mathematical notation."
      />

      <hr />

      {/* ─── Chunk 2: Number System ─── */}
      <h3 id="prereq-number-system">Number System</h3>

      <Callout type="important" title="Natural Numbers (ℕ)">
        The positive counting numbers.
      </Callout>
      <FormulaBlock latex={"\\mathbb{N}=\\{1,2,3,4,\\ldots\\}"} />

      <Callout type="note" title="Convention Note">
        Some textbooks include 0 in ℕ. Always follow the convention specified
        by your textbook.
      </Callout>

      <Callout type="important" title="Whole Numbers (𝕎)">
        The non-negative integers.
      </Callout>
      <FormulaBlock latex={"\\mathbb{W}=\\{0,1,2,3,\\ldots\\}"} />

      <Callout type="important" title="Integers (ℤ)">
        Include negative integers, zero and positive integers.
      </Callout>
      <FormulaBlock latex={"\\mathbb{Z}=\\{\\ldots,-3,-2,-1,0,1,2,3,\\ldots\\}"} />

      <Callout type="important" title="Rational Numbers (ℚ)">
        A rational number can be expressed in the form p/q, where p, q ∈ ℤ and
        q ≠ 0.
      </Callout>
      <FormulaBlock latex={"\\boxed{\\dfrac{p}{q}} \\qquad p,q\\in\\mathbb{Z},\\quad q\\neq0"} />
      <p>
        Examples: <Formula>{"\\frac{1}{2}"}</Formula>,{" "}
        <Formula>{"-\\frac{7}{3}"}</Formula>, 5, 0 — because{" "}
        <Formula>{"5=\\frac{5}{1}"}</Formula> and{" "}
        <Formula>{"0=\\frac{0}{1}"}</Formula>.
      </p>
      <p>
        <strong>Decimal form.</strong> Rational numbers have decimal expansions
        that are either:
      </p>
      <ul>
        <li>terminating, e.g. 0.5</li>
        <li>recurring/repeating, e.g. 0.333…</li>
      </ul>

      <Callout type="important" title="Irrational Numbers">
        Irrational numbers cannot be written in the form p/q where p, q are
        integers and q ≠ 0.
      </Callout>
      <FormulaBlock latex={"\\sqrt{2},\\quad \\sqrt{3},\\quad \\pi"} />
      <p>Their decimal expansions are non-terminating and non-repeating:</p>
      <FormulaBlock latex={"\\sqrt{2}=1.4142135\\ldots"} />

      <Callout type="important" title="Real Numbers (ℝ)">
        The real numbers consist of rational numbers + irrational numbers.
        Every point on the ordinary number line represents a real number.
      </Callout>
      <FormulaBlock latex={"\\mathbb{R}=\\text{Rational numbers}+\\text{Irrational numbers}"} important />

      <p>
        <strong>Number-system hierarchy.</strong> The fundamental hierarchy is:
      </p>
      <FormulaBlock
        latex={"\\mathbb{N}\\subseteq\\mathbb{W}\\subseteq\\mathbb{Z}\\subseteq\\mathbb{Q}\\subseteq\\mathbb{R}"}
        important
      />
      <p>
        Irrational numbers ⊆ ℝ, but irrational numbers are not rational.
        Therefore:
      </p>
      <FormulaBlock latex={"\\mathbb{Q}\\cap\\text{irrational numbers}=\\varnothing"} />

      <TreeDiagram
        title="The Real Number System"
        defaultExpanded
        nodes={[
          {
            label: "Real Numbers (ℝ)",
            children: [
              {
                label: "Rational Numbers (ℚ)",
                children: [
                  {
                    label: "Integers (ℤ)",
                    children: [
                      {
                        label: "Whole Numbers (𝕎)",
                        children: [{ label: "Natural Numbers (ℕ)" }],
                      },
                      { label: "Negative Integers" },
                    ],
                  },
                  { label: "Non-integer Rational Numbers" },
                ],
              },
              { label: "Irrational Numbers" },
            ],
          },
        ]}
      />

      <hr />

      {/* ─── Chunk 3: Inequalities ─── */}
      <h3 id="prereq-inequalities">Inequalities</h3>

      <ul>
        <li>
          <Formula>{"x > 5"}</Formula> — x is greater than 5
        </li>
        <li>
          <Formula>{"x < 5"}</Formula> — x is less than 5
        </li>
      </ul>
      <p>
        Greater than or equal to, <Formula>{"x \\ge 5"}</Formula>, means:
      </p>
      <FormulaBlock latex={"x>5\\quad\\text{or}\\quad x=5"} />
      <p>
        Less than or equal to, <Formula>{"x \\le 5"}</Formula>, means:
      </p>
      <FormulaBlock latex={"x<5\\quad\\text{or}\\quad x=5"} />

      <p>
        <strong>Number-line interpretation.</strong> For boundaries at 3:
      </p>
      <ul>
        <li><Formula>{"x > 3"}</Formula> — values to the right of 3, excluding 3</li>
        <li><Formula>{"x \\ge 3"}</Formula> — values to the right of 3, including 3</li>
        <li><Formula>{"x < 3"}</Formula> — values to the left of 3, excluding 3</li>
        <li><Formula>{"x \\le 3"}</Formula> — values to the left of 3, including 3</li>
      </ul>

      <KeyPoint title="Memory Rule">
        Strict inequalities (&lt;, &gt;) → boundary excluded. Inclusive
        inequalities (≥, ≤) → boundary included.
      </KeyPoint>

      <p>
        <strong>Compound inequalities.</strong> Consider:
      </p>
      <FormulaBlock latex={"2<x<7"} />
      <p>
        This means <Formula>{"x > 2"}</Formula> AND{" "}
        <Formula>{"x < 7"}</Formula> — so x lies between 2 and 7. Similarly:
      </p>
      <FormulaBlock latex={"-3\\le x<4"} />
      <p>
        Here −3 is included, while 4 is excluded.
      </p>

      <p>
        <strong>Solving linear inequalities</strong> — the basic rules are
        similar to equations:
      </p>
      <Stepper
        steps={[
          { label: "Start: 2x + 3 > 9" },
          { label: "Subtract 3 from both sides", description: "2x > 6" },
          { label: "Divide by 2", description: "x > 3" },
        ]}
      />

      <Callout type="warning" title="Critical Rule — Negative Multiplication/Division">
        When multiplying or dividing an inequality by a negative number,
        reverse the inequality sign.
      </Callout>
      <MistakeCard
        mistake="Solving −2x > 6 by dividing both sides by −2 and keeping the > sign, giving x > −3."
        correction="Dividing by a negative number flips the inequality: divide −2x > 6 by −2 to get x < −3."
        example="−2x > 6 ⟶ ÷(−2) ⟶ x < −3"
      />

      <p>
        <strong>Polynomial inequality awareness.</strong> Example:
      </p>
      <FormulaBlock latex={"x^2<4"} />
      <p>
        Since <Formula>{"x^2 < 2^2"}</Formula>, we obtain:
      </p>
      <FormulaBlock latex={"-2<x<2"} important />
      <p>
        This kind of reasoning will later help when mathematical conditions
        describe numerical regions.
      </p>

      <hr />

      {/* ─── Chunk 4: Interval Notation ─── */}
      <h3 id="prereq-interval-notation">Interval Notation</h3>

      <p>
        A number line represents numbers in increasing order from left to
        right:
      </p>
      <FormulaBlock latex={"\\cdots<-3<-2<-1<0<1<2<3<\\cdots"} />
      <ul>
        <li>Moving right → numbers increase.</li>
        <li>Moving left → numbers decrease.</li>
      </ul>

      <Comparison
        columns={[
          {
            title: "Open Boundary",
            children: (
              <>
                <p>The boundary is not included.</p>
                <ul>
                  <li><Formula>{"x > 2"}</Formula> does not include 2</li>
                  <li><Formula>{"2 < x < 5"}</Formula> includes neither 2 nor 5</li>
                </ul>
              </>
            ),
          },
          {
            title: "Closed Boundary",
            children: (
              <>
                <p>The boundary is included.</p>
                <ul>
                  <li><Formula>{"x \\ge 2"}</Formula> includes 2</li>
                  <li><Formula>{"2 \\le x \\le 5"}</Formula> includes both endpoints</li>
                </ul>
              </>
            ),
          },
        ]}
      />

      <p>
        Interval notation gives a compact way to describe ranges of real
        numbers:
      </p>
      <TableCard
        headers={["Notation", "Meaning", "Endpoints"]}
        rows={[
          { cells: ["(a, b)", "a < x < b", "Neither endpoint included"] },
          { cells: ["[a, b]", "a ≤ x ≤ b", "Both endpoints included"] },
          { cells: ["[a, b)", "a ≤ x < b", "Left closed, right open"] },
          { cells: ["(a, b]", "a < x ≤ b", "Left open, right closed"] },
        ]}
      />

      <p>
        <strong>Infinite intervals.</strong> For <Formula>{"x > 3"}</Formula>{" "}
        we can write:
      </p>
      <FormulaBlock latex={"(3,\\infty)"} />
      <p>
        For <Formula>{"x \\ge 3"}</Formula> we write:
      </p>
      <FormulaBlock latex={"[3,\\infty)"} />

      <Callout type="warning" title="Infinity Rule">
        ∞ is never an endpoint that can be included. Therefore [3, ∞) is
        meaningful, while [3, ∞] is not standard interval notation.
      </Callout>

      <hr />

      {/* ─── Chunk 5: Mathematical Logic ─── */}
      <h3 id="prereq-mathematical-logic">Mathematical Logic</h3>

      <Callout type="important" title="Truth Value">
        A proposition/statement has a truth value: True or False.
      </Callout>
      <ul>
        <li><Formula>{"5 > 2"}</Formula> — true</li>
        <li><Formula>{"2 > 7"}</Formula> — false</li>
      </ul>

      <p>
        <strong>AND (∧)</strong> means both conditions must be satisfied:
      </p>
      <FormulaBlock latex={"x>2\\land x<5 \\quad\\Longrightarrow\\quad 2<x<5"} />
      <TableCard
        headers={["P", "Q", "P ∧ Q"]}
        rows={[
          { cells: ["T", "T", "T"] },
          { cells: ["T", "F", "F"] },
          { cells: ["F", "T", "F"] },
          { cells: ["F", "F", "F"] },
        ]}
        caption="Memory: AND = both."
      />

      <p>
        <strong>OR (∨)</strong> means at least one condition is satisfied:
      </p>
      <FormulaBlock latex={"x<0\\lor x>5"} />
      <p>x satisfies either condition.</p>
      <TableCard
        headers={["P", "Q", "P ∨ Q"]}
        rows={[
          { cells: ["T", "T", "T"] },
          { cells: ["T", "F", "T"] },
          { cells: ["F", "T", "T"] },
          { cells: ["F", "F", "F"] },
        ]}
        caption="Memory: OR = at least one."
      />

      <p>
        <strong>NOT (¬)</strong> reverses the truth value. If{" "}
        <Formula>{"P:\\ x > 5"}</Formula>, then{" "}
        <Formula>{"\\neg P:\\ x \\le 5"}</Formula>.
      </p>
      <TableCard
        headers={["P", "¬P"]}
        rows={[
          { cells: ["T", "F"] },
          { cells: ["F", "T"] },
        ]}
      />

      <p>
        <strong>Important negations</strong> — memorise these carefully:
      </p>
      <FormulaBlock latex={"\\neg(x>a)\\iff x\\le a"} important />
      <FormulaBlock latex={"\\neg(x\\ge a)\\iff x<a"} important />
      <FormulaBlock latex={"\\neg(x<a)\\iff x\\ge a"} important />
      <FormulaBlock latex={"\\neg(x\\le a)\\iff x>a"} important />
      <FormulaBlock latex={"\\neg(x=a)\\iff x\\neq a"} important />
      <FormulaBlock latex={"\\neg(x\\neq a)\\iff x=a"} important />

      <Comparison
        columns={[
          {
            title: "AND",
            children: (
              <>
                <FormulaBlock latex={"x>2\\land x<7"} />
                <p>
                  Means <Formula>{"2 < x < 7"}</Formula>. Only the overlapping
                  region satisfies both conditions.
                </p>
              </>
            ),
          },
          {
            title: "OR",
            children: (
              <>
                <FormulaBlock latex={"x<2\\lor x>7"} />
                <p>
                  Values satisfying either condition. The two conditions do not
                  need to hold simultaneously.
                </p>
              </>
            ),
          },
        ]}
      />

      <hr />

      {/* ─── Chunk 6: Conditions & Quantifiers ─── */}
      <h3 id="prereq-conditions-quantifiers">Conditions &amp; Quantifiers</h3>

      <Callout type="important" title="Condition">
        A condition is a requirement that a value must satisfy.
      </Callout>
      <ul>
        <li><Formula>{"x > 3"}</Formula> is a condition on x</li>
        <li>
          <Formula>{"x^2 = 9"}</Formula> is a condition that determines which
          values of x work
        </li>
      </ul>

      <p>
        <strong>&quot;Such that&quot;</strong> means: subject to the following
        condition. For example, “x is a real number such that{" "}
        <Formula>{"x > 2"}</Formula>” reads as: x is real AND{" "}
        <Formula>{"x > 2"}</Formula>. This phrase becomes extremely common in
        mathematical definitions.
      </p>

      <FactCard
        icon="∀"
        title="For All (∀)"
        definition="Means 'for all / for every'. ∀x means 'for every x'."
      />
      <FactCard
        icon="∃"
        title="There Exists (∃)"
        definition="Means 'there exists at least one'. ∃x means 'there exists an x'."
      />

      <p>
        <strong>Condition vs conclusion.</strong> Consider: If{" "}
        <Formula>{"x > 2"}</Formula>, then <Formula>{"x+1 > 3"}</Formula>. The
        condition is <Formula>{"x > 2"}</Formula>; the conclusion is{" "}
        <Formula>{"x+1 > 3"}</Formula>:
      </p>
      <FormulaBlock latex={"\\text{If condition, then conclusion}"} important />

      <p>
        <strong>Translating words into mathematics:</strong>
      </p>
      <TableCard
        headers={["Words", "Mathematics"]}
        rows={[
          { cells: ["A number is positive", "x > 0"] },
          { cells: ["A number is non-negative", "x ≥ 0"] },
          { cells: ["Between 3 and 8, excluding both", "3 < x < 8"] },
          { cells: ["Between 3 and 8, including both", "3 ≤ x ≤ 8"] },
          { cells: ["Greater than 3 but at most 8", "3 < x ≤ 8"] },
        ]}
      />
    </CollapsibleSection>
  );
}
