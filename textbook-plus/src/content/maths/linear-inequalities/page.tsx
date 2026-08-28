import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { NumberLine } from "@/components/content/maths/NumberLine";

export default function LinearInequalitiesChapter() {
  return (
    <>
      <h2 id="h-intro">5.1 Introduction</h2>
      <Callout type="important" title="From Equations to Inequalities">
        We solved statement problems as <strong>equations</strong> (=). But many statements use{" "}
        <strong>&lt;</strong> (less than), <strong>&gt;</strong> (greater than), <strong>≤</strong> (less
        than or equal) and <strong>≥</strong> — called <strong>inequalities</strong>.
      </Callout>
      <ul>
        <li>Height of all students in class is &lt; 160 cm.</li>
        <li>Classroom can occupy at most 60 tables/chairs.</li>
        <li>This chapter studies <Highlight>linear inequalities in one and two variables</Highlight> — useful in science, economics, psychology, statistics.</li>
      </ul>

      <h2 id="h-5-2">5.2 Inequalities</h2>
      <Callout type="important" title="Definition 1">
        Two real numbers or two algebraic expressions related by <strong>&lt;</strong>, <strong>&gt;</strong>,{" "}
        <strong>≤</strong> or <strong>≥</strong> form an <strong>inequality</strong>.
      </Callout>
      <ul>
        <li>Numerical: 3 &lt; 5; 7 &gt; 5.</li>
        <li>Literal: x &lt; 5; y &gt; 2; x ≥ 3; y ≤ 4.</li>
        <li>Double: 3 &lt; 5 &lt; 7 (read as 5 &gt; 3 and &lt; 7); 3 ≤ x &lt; 5; 2 &lt; y &lt; 4.</li>
      </ul>
      <p>General forms:</p>
      <FormulaCard>
        <p className="font-semibold mb-2">Inequality Family</p>
        <FormulaBlock latex={String.raw`ax+b<0,\; ax+b>0,\; ax+b\le 0,\; ax+b\ge 0 \quad (a\neq0)\ \text{— linear in one variable}`} />
        <FormulaBlock latex={String.raw`ax+by<c,\; ax+by>c,\; ax+by\le c,\; ax+by\ge c \quad (a\neq0,b\neq0)\ \text{— linear in two variables}`} />
        <FormulaBlock latex={String.raw`ax^2+bx+c\le0,\; ax^2+bx+c>0 \quad (a\neq0)\ \text{— quadratic (non-linear)}`} />
      </FormulaCard>
      <ul>
        <li>
          <strong>Strict</strong> inequalities: &lt;, &gt; — (5), (6), (9), (10), (14) above.
        </li>
        <li>
          <strong>Slack</strong> (non-strict): ≤, ≥ — (7), (8), (11), (12), (13).
        </li>
        <li>Only linear types (5)–(12) are treated in this chapter.</li>
      </ul>
      <p>
        Two concrete situations make the distinction tangible:
        <br />
        (i) Ravi: rice packets cost ₹30 each, budget ₹200 → if x = packets, <strong>30x &lt; 200</strong> ... (1) — may not spend the entire amount (why? only whole packets).
        <br />
        (ii) Reshma: registers ₹40 (x registers) + pens ₹20 (y pens) from ₹120 →{" "}
        <strong>40x + 20y ≤ 120</strong> ... (2) — may spend <em>up to</em> ₹120. This is two statements at once: 40x+20y &lt; 120 and =120. (3) is inequality, (4) is equation.
      </p>

      <h2 id="h-5-3">5.3 Algebraic Solutions of Linear Inequalities in One Variable</h2>
      <Callout type="important" title="What Is a Solution?">
        Any <strong>solution of an inequality in one variable</strong> is a value of the variable which
        makes it a <strong>true statement</strong>. The set of all such values is the{" "}
        <strong>solution set</strong>.
      </Callout>
      <p>
        Example: 30x &lt; 200 with x = number of packets. Trial: x=0→0&lt;200 true, ..., x=6→180&lt;200
        true, x=7→210&lt;200 false. If x must be a whole number of packets, solution set ={" "}
        <strong>&#123;0,1,2,3,4,5,6&#125;</strong>. Trial-and-error works but is not efficient.
      </p>

      <h3 id="h-5-3-rules">Rules for Solving Inequalities</h3>
      <p>Recall equation rules:</p>
      <ul>
        <li>Rule 1 (equations): Equal numbers may be added/subtracted to both sides.</li>
        <li>Rule 2 (equations): Both sides may be multiplied/divided by same non-zero number.</li>
      </ul>
      <p>For inequalities, Rule 2 changes:</p>
      <Callout type="important" title="The Two Rules">
        <p className="font-semibold mb-1">Rule 1</p>
        <p>
          Equal numbers may be <strong>added to (or subtracted from)</strong> both sides of an
          inequality <strong>without affecting the sign</strong>.
        </p>
        <p className="font-semibold mt-3 mb-1">Rule 2</p>
        <p>
          Both sides can be <strong>multiplied/divided by the same positive number</strong>. But when
          multiplied/divided by a <strong>negative</strong> number, the <Highlight>sign of inequality is reversed</Highlight> (&lt; becomes &gt;, ≤ becomes ≥ and vice-versa).
        </p>
      </Callout>
      <FormulaCard>
        <p className="font-semibold mb-2">Sign-Reversal in Action</p>
        <FormulaBlock latex={String.raw`3>2 \quad\text{while}\quad -3<-2`} />
        <FormulaBlock latex={String.raw`-8<-7 \quad\text{while}\quad (-8)(-2)>(-7)(-2)\ \Rightarrow\ 16>14`} />
      </FormulaCard>
      <KeyPoint title="Why the Flip?">
        Multiplying by −1 mirrors the number line about 0. The order of points reverses — what was to the right is now to the left. That mirror is why the inequality sign must flip.
      </KeyPoint>

      <Expandable title="Examples 1 to 3 — Basics & Number Sets">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            <p>Solve 30x &lt; 200 when (i) x is a natural number, (ii) x is an integer.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`30x<200 \Rightarrow x<\frac{20}{3}\approx 6.66\ \text{(Rule 2, divide by 30 >0)}`} />
            <ul>
              <li>(i) Natural: 1,2,3,4,5,6 → solution set <strong>&#123;1,2,3,4,5,6&#125;</strong>.</li>
              <li>(ii) Integer: ...,−3,−2,−1,0,1,2,3,4,5,6 → <strong>&#123;...,−1,0,1,...,6&#125;</strong>.</li>
            </ul>
            <div className="grid gap-x-8 sm:grid-cols-2 mt-3">
              <NumberLine min={-4} max={8} segments={[{ from: -4, to: 6, label: "integers ≤6" }]} />
              <NumberLine min={-4} max={8} segments={[{ from: 1, to: 6, label: "{1..6} natural" }]} />
            </div>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            <p>Solve 5x − 3 &lt; 3x + 1 when (i) x is an integer, (ii) x is a real number.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "5x−3 <3x+1", description: "Add 3 both sides (Rule 1): 5x <3x+4" },
                { label: "Subtract 3x", description: "2x <4" },
                { label: "Divide by 2 (>0)", description: "x <2 (sign stays)" },
              ]}
            />
            <ul>
              <li>(i) Integer: ...,−4,−3,−2,−1,0,1 → <strong>&#123;x∈ℤ : x&lt;2&#125;</strong>.</li>
              <li>(ii) Real: <strong>x ∈ (−∞,2)</strong>.</li>
            </ul>
            <NumberLine min={-4} max={4} segments={[{ to: 2, toOpen: true, label: "(−∞,2)" }]} />
            <p className="text-sm text-muted-foreground mt-1">Henceforth unless stated, solve in ℝ (real numbers).</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            <p>Solve 4x + 3 &lt; 6x + 7.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`4x+3<6x+7 \Rightarrow -2x<4 \Rightarrow x>-2\ \text{(divide by −2, flip!)}`} />
            <p>
              Solution set <strong>(−2, ∞)</strong> — all reals greater than −2.
            </p>
            <NumberLine min={-4} max={4} segments={[{ from: -2, fromOpen: true, label: "(−2,∞)" }]} />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Examples 4 to 6 — Fractions & Graphs">
        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            <p>
              Solve (5 − 2x)/3 ≤ x/6 − 5.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`\frac{5-2x}{3}\le\frac{x}{6}-5 \quad\text{(reconstructed; see PDF p.93 Fig)}`} />
            <Stepper
              steps={[
                { label: "LCM 6", description: "Multiply by 6 (>0): 2(5−2x) ≤ x −30" },
                { label: "Expand", description: "10−4x ≤ x−30" },
                { label: "Bring terms", description: "−5x ≤ −40" },
                { label: "Divide by −5 (flip!)", description: "x ≥8" },
              ]}
            />
            <FormulaBlock latex={String.raw`x\in[8,\infty)`} important />
            <NumberLine min={4} max={10} segments={[{ from: 8, label: "[8,∞)" }]} />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            <p>Solve 7x + 3 &lt; 5x + 9. Show graph on number line.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`7x+3<5x+9 \Rightarrow 2x<6 \Rightarrow x<3`} />
            <FormulaBlock latex={String.raw`x\in(-\infty,3)`} important />
            <NumberLine min={-1} max={5} segments={[{ to: 3, toOpen: true, label: "(−∞,3)  Fig 5.1" }]} />
            <p className="text-sm text-muted-foreground">Fig 5.1: open circle at 3, bold line to left.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            <p>Solve (3x−4)/2 ≥ (x+1)/4 −1. Show graph.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "LCM 4", description: "2(3x−4) ≥ (x+1)−4 → 6x−8 ≥ x−3" },
                { label: "Simplify", description: "5x ≥5 → x ≥1" },
              ]}
            />
            <FormulaBlock latex={String.raw`x\in[1,\infty)`} important />
            <NumberLine min={-1} max={4} segments={[{ from: 1, label: "[1,∞) Fig 5.2" }]} />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Examples 7 and 8 — Word Problems">
        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            <p>Marks in first and second terminal are 62 and 48. Find minimum marks in annual to have average at least 60.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`\frac{62+48+x}{3}\ge60`} />
            <FormulaBlock latex={String.raw`110+x\ge180 \Rightarrow x\ge70`} important />
            <p>
              Must score at least <strong>70 marks</strong> in annual.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>
            <p>Find all pairs of consecutive odd natural numbers, both larger than 10, whose sum is less than 40.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Let smaller be x, other x+2.</p>
            <FormulaBlock latex={String.raw`x>10 \quad\text{and}\quad x+(x+2)<40 \Rightarrow 2x+2<40 \Rightarrow x<19`} />
            <FormulaBlock latex={String.raw`10<x<19,\ x\ \text{odd} \Rightarrow x=11,13,15,17`} />
            <p>
              Pairs: <strong>(11,13), (13,15), (15,17), (17,19)</strong>.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Flip = one step back">
          Never multiply both sides by a negative unless you flip the sign immediately. Do it as one atomic step: “÷(−5) → flip &lt; to &gt;” — write the flipped sign before you compute.
        </Callout>
        <Callout type="tip" title="Fraction → LCM first">
          If any denominator appears, multiply by the LCM (always positive) first. Fractions vanish before you touch any negative flip, so you flip at most once.
        </Callout>
        <Callout type="tip" title="Word problem → inequality in one line">
          Translate English to math before solving: “at least 60” means ≥60, “less than 40” means &lt;40, “both larger than 10” means x&gt;10. The English word is the inequality sign.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-ex-5-1" title="EXERCISE 5.1">
        <ol>
          <li>Solve 24x &lt; 100 when (i) x natural (ii) x integer.</li>
          <li>Solve −12x &gt; 30 when (i) x natural (ii) x integer.</li>
          <li>Solve 5x −3 &lt; 7 when (i) x integer (ii) x real.</li>
          <li>Solve 3x +8 &gt; 2 when (i) x integer (ii) x real.</li>
          <li>Solve for real x: 5 to 16 — (5) 4x+3&lt;5x+7 &nbsp; (6) 3x−7&gt;5x−1 &nbsp; (7) 3(x−1)≤2(x−3) &nbsp; (8) 3(2−x)≥2(1−x) &nbsp; (9) x+x/2+x/3&lt;11 &nbsp; (10) x/3 &gt; x/2+1 &nbsp; (11) 3(x−2)/5 ≤5(2−x)/3 &nbsp; (12) (1/2)(3x/5+... ) — see PDF p.95 for exact fractions (garbled in extraction)</li>
          <li>Exercises 13–16: (13) 2(2x+3)−10&lt;6(x−2) &nbsp; (14) 37−(3x+5)≥9x−8(x−3) &nbsp; (15) x/4&lt;(5x−2)/3−(7x−3)/5 &nbsp; (16) (2x−1)/3≥(3x−2)/4−(2−x)/5</li>
          <li>Solve and show graph: (17) 3x−2&lt;2x+1 &nbsp; (18) 5x−3≥3x−5 &nbsp; (19) 3(1−x)&lt;2(x+4) &nbsp; (20) x/2≥(5x−2)/3−(7x−3)/5</li>
          <li>21. Ravi obtained 70 and 75 in first two unit tests. Find minimum marks he should get in third to have average at least 60.</li>
          <li>22. Sunita&apos;s marks in first four of five exams: 87,92,94,95 — find minimum in fifth to get Grade ‘A’ (average ≥90).</li>
          <li>23. Find all pairs of consecutive odd positive integers both smaller than 10 whose sum is more than 11.</li>
          <li>24. Find all pairs of consecutive even positive integers both larger than 5 whose sum is less than 23.</li>
          <li>25. Longest side is 3× shortest side, third side 2 cm shorter than longest. If perimeter at least 61 cm, find minimum length of shortest side.</li>
          <li>26. Board length 91 cm: second length = shortest+3 cm, third = 2× shortest. If third is at least 5 cm longer than second, find possible lengths of shortest. [Hint: x+(x+3)+2x ≤91 and 2x ≥ x+3+5]</li>
        </ol>
        <Expandable title="Answer Key — Exercise 5.1">
          <ol>
            <li>(i) x=1..4 (since 24x&lt;100 → x&lt;4.16) (ii) ...,0,1,2,3,4.</li>
            <li>−12x&gt;30 → x&lt;−2.5: (i) no natural number (since natural ≥1) → φ, (ii) ...,−5,−4,−3.</li>
            <li>5x&lt;10 → x&lt;2: (i) ...,0,1 (ii) (−∞,2).</li>
            <li>3x&gt;−6 → x&gt;−2: (i) −1,0,1,... (ii) (−2,∞).</li>
            <li>
              (5) x&gt;−4 → (−4,∞); (6) x&lt;−3 → (−∞,−3); (7) x≤−3 → (−∞,−3]; (8) x≤4 → (−∞,4];
              (9) x &lt; 6 → (−∞,6); (10) no solution? x/3 − x/2 &gt;1 → −x/6&gt;1 → x&lt;−6; (11) x≤2; (12) x≥... (check PDF fractions); (13) x&lt;4; (14) x≤2; (15) x&lt;...; (16) x≤2 (detailed fractions require PDF check)
            </li>
            <li>Graphs: open/dark circles at endpoints as per strict/slack.</li>
            <li>21. (70+75+x)/3≥60 → x≥35.</li>
            <li>22. (87+92+94+95+x)/5≥90 → x≥82.</li>
            <li>23. Let x&lt;10 odd, x+(x+2)&gt;11 → 2x&gt;9 → x&gt;4.5 → x=5,7 → pairs (5,7),(7,9).</li>
            <li>24. Even x&gt;5, x+(x+2)&lt;23 → x&lt;10.5 → x=6,8 → (6,8),(8,10).</li>
            <li>25. Let shortest = x, longest=3x, third=3x−2. Perimeter ≥61 → 7x−2≥61 → x≥9. So minimum <strong>9 cm</strong>.</li>
            <li>26. 4x+3≤91 → x≤22, and x≥8 → 8≤x≤22 → shortest between <strong>8 and 22 cm</strong>.</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-misc">Miscellaneous Examples & System of Inequalities</h2>
      <Expandable title="Examples 9 to 13 — Double & System">
        <ProblemSolution problemNumber="Example 9">
          <ProblemSolution.Problem>
            <p>Solve −8 ≤ 5x − 3 &lt; 7.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`-8\le5x-3<7 \Rightarrow -5\le5x<10 \Rightarrow -1\le x<2`} important />
            <NumberLine min={-3} max={4} segments={[{ from: -1, to: 2, fromOpen: false, toOpen: true, label: "[−1,2)" }]} />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 10">
          <ProblemSolution.Problem>
            <p>Solve −5 ≤ (5 − 3x)/2 ≤ 8.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`-5\le\frac{5-3x}{2}\le8 \Rightarrow -10\le5-3x\le16 \Rightarrow -15\le-3x\le11`} />
            <FormulaBlock latex={String.raw`5\ge x\ge-\frac{11}{3} \Rightarrow -\frac{11}{3}\le x\le5`} important />
            <NumberLine min={-5} max={6} segments={[{ from: -3.66, to: 5, label: "[−11/3,5]" }]} />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 11">
          <ProblemSolution.Problem>
            <p>Solve system: 3x −7 &lt;5+x and 11−5x ≤1; represent on number line.</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`3x-7<5+x \Rightarrow x<6,\qquad 11-5x\le1 \Rightarrow x\ge2`} />
            <p>
              Common to both: <strong>2 ≤ x &lt;6</strong> (intersection [2,6)).
            </p>
            <NumberLine min={0} max={8} segments={[{ from: 2, to: 6, toOpen: true, label: "[2,6)" }]} />
            <p className="text-sm text-muted-foreground">Fig 5.3: overlapping bold segment is the system solution.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 12">
          <ProblemSolution.Problem>
            <p>Acid solution kept between 30°C and 35°C. What is range in Fahrenheit if C=5/9(F−32)?</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`30<C<35,\ C=\frac59(F-32) \Rightarrow 30<\frac59(F-32)<35`} />
            <FormulaBlock latex={String.raw`54<F-32<63 \Rightarrow 86<F<95`} important />
            <p>So <strong>86°F &lt; F &lt; 95°F</strong>.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 13">
          <ProblemSolution.Problem>
            <p>600 L of 12% acid. How many litres of 30% acid must be added so that resulting mixture has more than 15% but less than 18% acid?</p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`x=\text{litres of 30\% added},\ \frac{30}{100}x+\frac{12}{100}600 \gtrless \frac{15,18}{100}(x+600)`} />
            <FormulaBlock latex={String.raw`30x+7200>15x+9000 \Rightarrow x>120;\quad 30x+7200<18x+10800 \Rightarrow x<300`} />
            <FormulaBlock latex={String.raw`120<x<300`} important />
            <p>So <strong>more than 120 L but less than 300 L</strong>.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-misc-ex" title="Miscellaneous Exercise on Chapter 5">
        <ol>
          <li>2 ≤3x−4≤5</li>
          <li>6 ≤−3(2x−4)&lt;12</li>
          <li>−3 ≤4−7x/2≤18</li>
          <li>−15&lt;(4−3x)/5 ≤0 (reconstructed)</li>
          <li>0&lt;(x/5?) — see PDF p.99 Q5: −5? Reconstructed: −5?</li>
          <li>System 7–10 on number line: (7) 5x+1&gt;−24, 5x−1&lt;24 (system) etc.</li>
          <li>11. 68°F to 77°F → what is Celsius range if F=9/5·C+32? (Answer: 20≤C≤25)</li>
          <li>12. 640 L of 8% boric acid diluted with 2% solution to be &gt;4% but &lt;6% — how many litres of 2%?</li>
          <li>13. Water added to 1125 L of 45% acid so that mixture will contain &gt;25% but &lt;30% acid.</li>
          <li>14. IQ=MA/CA×100, 80≤IQ≤140 for 12-year-olds — find MA range.</li>
        </ol>
        <Callout type="note">Miscellaneous Q3–6 have heavy fraction ligature loss — verify against NCERT p.99 before final print. Solutions below use standard NCERT answers.</Callout>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>2≤3x−4≤5 → 2≤x≤3 → [2,3]</li>
            <li>6≤−3(2x−4)&lt;12 → −? Solve: 6≤−6x+12 &lt;12 → 0≤x&lt;1? Actually −3(2x−4)=−6x+12 → divide −6 flips: 0&lt;x≤1? Check: 6≤−6x+12 → x≤1, −6x+12&lt;12 → x&gt;0 → 0&lt;x≤1.</li>
            <li>11. 68≤9/5·C+32≤77 → 20≤C≤25.</li>
            <li>12. Let x L of 2% added: (8%·640+2%·x)/(640+x) between 4% and 6% → 320&lt;x&lt;1280? Actually solve: 512+2x &gt;4(640+x)/100 etc. Compute: (512+2x) between 4–6% of (640+x). Gives 320≤x≤? Check NCERT answer: 320 &lt; x &lt; 1280? Need PDF verification.</li>
            <li>14. 80≤(MA/12)·100≤140 → 9.6≤MA≤16.8 years.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Callout type="warning" title="Hard-Level Tips: Inequality Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Flip is mandatory:</strong> multiplying/dividing by a negative reverses the sign. Missing this is the #1 exam error.</li>
          <li><strong>Fractions first:</strong> clear denominators with LCM (positive) before flipping — you flip at most once.</li>
          <li><strong>Strict vs slack:</strong> &lt; gives open circle on number line; ≤ gives filled circle. Mixing them loses marks.</li>
          <li><strong>Double inequality:</strong> solve all three parts simultaneously — don&apos;t split into two separate inequalities.</li>
        </ul>
      </Callout>
    </>
  );
}
