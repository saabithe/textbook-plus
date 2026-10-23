"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function RelationsAndFunctionsChapter() {
  return (
    <>
      <h2 id="h-1-1">1.1 Introduction</h2>
      <Callout type="important">
        <Highlight color="yellow">Relations and functions are the language of mathematics.</Highlight>
      </Callout>

      <h2 id="h-1-2">1.2 Types of Relations</h2>
      <FactCard title="Empty relation" definition="A relation R on a set A is called **empty** if R = ∅." icon="∅" />
      <FactCard title="Universal relation" definition="R is universal ⇔ R = A × A." icon="∪" />
      <FactCard title="Reflexive relation" definition="R is reflexive ⇔ ∀a∈A , (a,a)∈R." icon="↺" />
      <FactCard title="Symmetric relation" definition="R is symmetric ⇔ (a,b)∈R ⇒ (b,a)∈R." icon="↔" />
      <FactCard title="Transitive relation" definition="R is transitive ⇔ (a,b)∈R ∧ (b,c)∈R ⇒ (a,c)∈R." icon="→" />
      <FactCard title="Equivalence relation" definition="R is an equivalence relation ⇔ it is reflexive, symmetric and transitive." icon="≡" />

      <Expandable title="Examples 1 to 6 — NCERT"><p>Examples will be added here.</p></Expandable>

      <h2 id="h-1-3">1.3 Types of Functions</h2>
      <FactCard title="One‑one (injective)" definition="f is one‑one ⇔ f(a)=f(b) ⇒ a=b." icon="↔" />
      <FactCard title="Onto (surjective)" definition="f is onto ⇔ ∀y∈B ∃x∈A : f(x)=y." icon="↠" />
      <FactCard title="Bijective" definition="f is bijective ⇔ it is both one‑one and onto." icon="⇔" />

      <Expandable title="Examples 7 to 14 — NCERT"><p>Examples will be added here.</p></Expandable>

      <h2 id="h-1-4">1.4 Composition & Inverse Functions</h2>
      <p>Composition and inverse formulas will be added here.</p>
      <Expandable title="Examples 15 to 17 — NCERT"><p>Examples will be added here.</p></Expandable>

      <Expandable title="Exercise 1.1 — 16 MCQs">
        <p>Exercise questions will be added here.</p>
      </Expandable>

      <SpeedTricks><p>Check the three properties separately when testing for an equivalence relation.</p><p>Construct the inverse explicitly to prove bijectivity.</p></SpeedTricks>
    </>
  );
}
