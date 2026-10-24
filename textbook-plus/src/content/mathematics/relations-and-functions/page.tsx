"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { Comparison } from "@/components/content/Comparison";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function RelationsAndFunctionsChapter() {
  return (
    <>
      <h2 id="h-1-1">1.1 Introduction</h2>
      <Callout type="important">
        <Highlight color="yellow">Relations and functions</Highlight> form the foundation of modern mathematics. The concept of a relation is drawn from everyday language, while functions are special types of relations. In this chapter, we study types of relations, types of functions, composition of functions, invertible functions and binary operations.
      </Callout>
      <p>
        A relation <Formula>{String.raw`R`}</Formula> from set <Formula>{String.raw`A`}</Formula> to set <Formula>{String.raw`B`}</Formula> is a subset of the Cartesian product <Formula>{String.raw`A\times B`}</Formula>. If <Formula>{String.raw`(a,b)\in R`}</Formula>, we write <Formula>{String.raw`a\ R\ b`}</Formula>.
      </p>

      <h2 id="h-1-2">1.2 Types of Relations</h2>
      <p>We study relations in a set <Formula>{String.raw`A`}</Formula> (i.e. subsets of <Formula>{String.raw`A\times A`}</Formula>).</p>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard title="Empty relation" definition="A relation R in A is empty if R = φ ⊂ A×A." icon="∅" />
        <FactCard title="Universal relation" definition="A relation R in A is universal if R = A×A." icon="×" />
        <FactCard title="Reflexive" definition="R is reflexive if (a,a)∈R for all a∈A." icon="↺" />
        <FactCard title="Symmetric" definition="(a1,a2)∈R ⇒ (a2,a1)∈R for all a1,a2∈A." icon="↔" />
        <FactCard title="Transitive" definition="(a1,a2)∈R, (a2,a3)∈R ⇒ (a1,a3)∈R for all a1,a2,a3∈A." icon="→" />
        <FactCard title="Equivalence relation" definition="A relation is an equivalence relation if it is reflexive, symmetric and transitive." icon="≡" />
      </div>

      <Expandable title="Examples 1 to 6 — NCERT">
        <div className="space-y-4">
          <div>
            <p><strong>Example 1:</strong> Let <Formula>{String.raw`A`}</Formula> be the set of all students of a boys school. Show that <Formula>{String.raw`R=\{(a,b):a\ \text{is sister of}\ b\}`}</Formula> is the empty relation and <Formula>{String.raw`R'=\{(a,b):|height\ of\ a - height\ of\ b|<3m\}`}</Formula> is the universal relation.</p>
            <p><strong>Solution:</strong> No student is a sister of any student in a boys school, so <Formula>{String.raw`R=\phi`}</Formula>. The difference of heights of any two students is &lt; 3 m, so <Formula>{String.raw`R'=A\times A`}</Formula>.</p>
          </div>
          <div>
            <p><strong>Example 2:</strong> Let <Formula>{String.raw`T`}</Formula> be the set of all triangles in a plane, <Formula>{String.raw`R=\{(T_1,T_2):T_1\cong T_2\}`}</Formula>. Show <Formula>{String.raw`R`}</Formula> is an equivalence relation.</p>
            <p><strong>Solution:</strong> Reflexive (every triangle congruent to itself), symmetric and transitive by properties of congruence. Hence equivalence.</p>
          </div>
          <div>
            <p><strong>Example 3:</strong> Let <Formula>{String.raw`L`}</Formula> be lines in a plane, <Formula>{String.raw`R=\{(L_1,L_2):L_1\perp L_2\}`}</Formula>. Show symmetric but neither reflexive nor transitive.</p>
            <p><strong>Solution:</strong> <Formula>{String.raw`L_1\not\perp L_1`}</Formula> so not reflexive; symmetry follows; perpendicular to perpendicular gives parallel in general so not transitive.</p>
          </div>
          <div>
            <p><strong>Example 4:</strong> <Formula>{String.raw`R=\{(1,1),(2,2),(3,3),(1,2),(2,3)\}`}</Formula> in <Formula>{String.raw`\{1,2,3\}`}</Formula> is reflexive but neither symmetric nor transitive.</p>
            <p><strong>Solution:</strong> Diagonal present (reflexive). <Formula>{String.raw`(1,2)\in R`}</Formula> but <Formula>{String.raw`(2,1)\notin R`}</Formula> (not symmetric). <Formula>{String.raw`(1,2)\in R,(2,3)\in R`}</Formula> but <Formula>{String.raw`(1,3)\notin R`}</Formula> (not transitive).</p>
          </div>
          <div>
            <p><strong>Example 5:</strong> <Formula>{String.raw`R=\{(a,b)\in \mathbb{Z}\times\mathbb{Z}: 2\mid (a-b)\}`}</Formula> is an equivalence relation.</p>
            <p><strong>Solution:</strong> Reflexive, symmetric, transitive (sum/difference of even numbers even). Equivalence classes: even <Formula>{String.raw`[0]`}</Formula>, odd <Formula>{String.raw`[1]`}</Formula>.</p>
          </div>
          <div>
            <p><strong>Example 6:</strong> <Formula>{String.raw`R=\{(a,b)\in A\times A:\ a,b\ \text{both odd or both even}\}`}</Formula>, <Formula>{String.raw`A=\{1,\ldots,7\}`}</Formula> is an equivalence relation partitioning into odd/even subsets.</p>
            <p><strong>Solution:</strong> Check reflexive/symmetric/transitive as in Example 5. Classes <Formula>{String.raw`\{1,3,5,7\},\{2,4,6\}`}</Formula>.</p>
          </div>
        </div>
      </Expandable>

      <h2 id="h-1-3">1.3 Types of Functions</h2>
      <p>A function <Formula>{String.raw`f:X\to Y`}</Formula> is a rule that associates to each element of <Formula>{String.raw`X`}</Formula> exactly one element of <Formula>{String.raw`Y`}</Formula>.</p>
      <Comparison
        columns={[
          { title: "One-one (injective)", children: <p><Formula>{String.raw`f(x_1)=f(x_2)\implies x_1=x_2`}</Formula></p> },
          { title: "Onto (surjective)", children: <p><Formula>{String.raw`\forall y\in Y,\ \exists x\in X:\ f(x)=y`}</Formula> i.e. range = co-domain</p> },
          { title: "Bijective", children: <p>Both one-one and onto.</p> },
        ]}
      />

      <Expandable title="Examples 7 to 14 — NCERT">
        <div className="space-y-4">
          <div><p><strong>Example 7:</strong> <Formula>{String.raw`f:\{1,\ldots,50\}\to\mathbb{N}, f(x)=\text{roll no.}`}</Formula> is one-one but not onto.</p></div>
          <div><p><strong>Example 8:</strong> <Formula>{String.raw`f:\mathbb{N}\to\mathbb{N}, f(x)=2x`}</Formula> is one-one but not onto.</p></div>
          <div><p><strong>Example 9:</strong> <Formula>{String.raw`f:\mathbb{R}\to\mathbb{R}, f(x)=2x`}</Formula> is one-one and onto.</p></div>
          <div><p><strong>Example 10:</strong> <Formula>{String.raw`f(1)=f(2)=1,f(x)=x-1,x&gt;2`}</Formula> is onto but not one-one.</p></div>
          <div><p><strong>Example 11:</strong> <Formula>{String.raw`f:\mathbb{R}\to\mathbb{R}, f(x)=x^2`}</Formula> is neither one-one nor onto.</p></div>
          <div><p><strong>Example 12:</strong> <Formula>{String.raw`f(x)=x+1\ if\ x\ odd,\ f(x)=x-1\ if\ x\ even,\ f:\mathbb{N}\to\mathbb{N}`}</Formula> is bijective.</p></div>
          <div><p><strong>Example 13:</strong> For finite <Formula>{String.raw`X`}</Formula>, onto <Formula>{String.raw`f:X\to X \implies`}</Formula> one-one.</p></div>
          <div><p><strong>Example 14:</strong> For finite <Formula>{String.raw`X`}</Formula>, one-one <Formula>{String.raw`f:X\to X \implies`}</Formula> onto.</p></div>
        </div>
      </Expandable>

      <h2 id="h-1-4">1.4 Composition of Functions and Invertible Functions</h2>
      <FormulaCard>
        <div className="space-y-2">
          <div><strong>Composition:</strong> <Formula>{String.raw`(g\circ f)(x)=g\bigl(f(x)\bigr),\ f:A\to B,\ g:B\to C`}</Formula></div>
          <div><strong>Inverse:</strong> <Formula>{String.raw`g\circ f=I_X,\ f\circ g=I_Y \implies g=f^{-1}`}</Formula></div>
          <div><strong>Condition:</strong> <Formula>{String.raw`f\ \text{invertible} \iff f\ \text{is bijective}`}</Formula></div>
        </div>
      </FormulaCard>
      <Expandable title="Examples 15 to 17 — NCERT">
        <div className="space-y-4">
          <div><p><strong>Example 15:</strong> Composition of given functions <Formula>{String.raw`g\circ f`}</Formula>.</p></div>
          <div><p><strong>Example 16:</strong> <Formula>{String.raw`f(x)=\cos x,\ g(x)=3x^2,\ g\circ f \neq f\circ g`}</Formula>.</p></div>
          <div><p><strong>Example 17:</strong> <Formula>{String.raw`f(x)=4x+3,\ Y=\{y\in\mathbb{N}:y=4x+3,x\in\mathbb{N}\}`}</Formula> is invertible, <Formula>{String.raw`f^{-1}(y)=\frac{y-3}{4}`}</Formula>.</p></div>
        </div>
      </Expandable>

      <h2 id="h-1-5">Miscellaneous Examples</h2>
      <Expandable title="Examples 18 to 26 — NCERT">
        <div className="space-y-4">
          <div><p><strong>Example 18:</strong> Intersection of two equivalence relations is an equivalence relation.</p></div>
          <div><p><strong>Example 19:</strong> <Formula>{String.raw`(x,y)R(u,v)\iff xv=yu`}</Formula> on positive integer pairs is an equivalence relation.</p></div>
          <div><p><strong>Example 20:</strong> Two relations defined on <Formula>{String.raw`\{1,\ldots,9\}`}</Formula> are equal.</p></div>
          <div><p><strong>Example 21:</strong> <Formula>{String.raw`R=\{(a,b):f(a)=f(b)\}`}</Formula> is an equivalence relation.</p></div>
          <div><p><strong>Example 22:</strong> Number of one-one functions <Formula>{String.raw`\{1,2,3\}\to\{1,2,3\}`}</Formula> is <Formula>{String.raw`6`}</Formula>.</p></div>
          <div><p><strong>Example 23:</strong> Relations containing <Formula>{String.raw`(1,2),(2,3)`}</Formula> reflexive and transitive but not symmetric: 3.</p></div>
          <div><p><strong>Example 24:</strong> Equivalence relations containing <Formula>{String.raw`(1,2),(2,1)`}</Formula>: 2.</p></div>
          <div><p><strong>Example 25:</strong> <Formula>{String.raw`I_N + I_N`}</Formula> not onto on <Formula>{String.raw`\mathbb{N}`}</Formula>.</p></div>
          <div><p><strong>Example 26:</strong> <Formula>{String.raw`f+g`}</Formula> need not be one-one even if <Formula>{String.raw`f,g`}</Formula> are.</p></div>
        </div>
      </Expandable>

      <Expandable title="Exercise 1.1">
        <ExerciseQa
          questions={[
            <span key="q1">Which of the following is an empty relation? <br/><span className="text-muted-foreground">(a) {"{(1,2)}"} (b) ∅ (c) {"{(x,x)}"} (d) {"{(a,b):a<b}"}</span></span>,
            <span key="q2">A relation is reflexive if <br/><span className="text-muted-foreground">(a) {"(a,b)∈R"} (b) {"(a,a)∈R for all a"} (c) {"(a,b)⇒(b,a)"} (d) {"(a,b),(b,c)⇒(a,c)"}</span></span>,
            <span key="q3">Equivalence relation means <br/><span className="text-muted-foreground">(a) reflexive only (b) symmetric only (c) reflexive, symmetric and transitive (d) transitive only</span></span>,
          ]}
          answers={[
            <span key="a1">(b) ∅</span>,
            <span key="a2">(b) (a,a)∈R ∀a</span>,
            <span key="a3">(c) Reflexive, symmetric and transitive</span>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 1.2">
        <ExerciseQa
          questions={[
            <span key="q1"><Formula>{String.raw`f:\mathbb{N}\to\mathbb{N}, f(x)=2x`}</Formula> is <br/><span className="text-muted-foreground">(a) one-one onto (b) one-one not onto (c) onto not one-one (d) neither</span></span>,
            <span key="q2"><Formula>{String.raw`f:\mathbb{R}\to\mathbb{R}, f(x)=x^2`}</Formula> is <br/><span className="text-muted-foreground">(a) bijective (b) one-one onto (c) neither (d) onto only</span></span>,
          ]}
          answers={[
            <span key="a1">(b) one-one but not onto</span>,
            <span key="a2">(c) neither one-one nor onto</span>,
          ]}
        />
      </Expandable>

      <Expandable title="Miscellaneous Exercise on Chapter 1">
        <ExerciseQa
          questions={[
            <span key="q1">Number of one-one functions <Formula>{String.raw`\{1,2,3\}\to\{1,2,3\}`}</Formula> <br/><span className="text-muted-foreground">(a) 3 (b) 6 (c) 9 (d) 1</span></span>,
            <span key="q2">Equivalence relations containing <Formula>{String.raw`(1,2),(2,1)`}</Formula> on <Formula>{String.raw`\{1,2,3\}`}</Formula> <br/><span className="text-muted-foreground">(a) 1 (b) 2 (c) 3 (d) 4</span></span>,
          ]}
          answers={[
            <span key="a1">(b) 6</span>,
            <span key="a2">(b) 2</span>,
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Equivalence test:</strong> Check reflexive, symmetric, transitive separately. A single counterexample fails the whole relation.</li>
          <li><strong>Bijective shortcut:</strong> For finite sets, one-one ⇔ onto. For infinite sets, check separately.</li>
          <li><strong>Inverse:</strong> <Formula>{String.raw`f`}</Formula> invertible ⇔ bijective. Find <Formula>{String.raw`f^{-1}`}</Formula> by solving <Formula>{String.raw`y=f(x)`}</Formula> for <Formula>{String.raw`x`}</Formula> in terms of <Formula>{String.raw`y`}</Formula>.</li>
          <li><strong>Composition order:</strong> <Formula>{String.raw`(g\circ f)(x)=g(f(x))`}</Formula> (apply <Formula>{String.raw`f`}</Formula> first).</li>
        </ul>
      </SpeedTricks>
    </>
  );
}
