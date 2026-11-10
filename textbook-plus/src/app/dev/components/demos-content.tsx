"use client";

import { useState, type ReactNode } from "react";
import { ArabicChapterCard } from "@/components/content/ArabicChapterCard";
import { BilingualParagraph } from "@/components/content/BilingualParagraph";
import { Callout } from "@/components/content/Callout";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { CharacterComparison } from "@/components/content/CharacterComparison";
import { CharacterSketch } from "@/components/content/CharacterSketch";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";
import { Comparison } from "@/components/content/Comparison";
import { ContentTabs } from "@/components/content/ContentTabs";
import { Example } from "@/components/content/Example";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { KeyPoint } from "@/components/content/KeyPoint";
import { OrgChart } from "@/components/content/OrgChart";
import { PocketGrid } from "@/components/content/PocketGrid";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { ReadRespond } from "@/components/content/ReadRespond";
import { SolvedProblem } from "@/components/content/SolvedProblem";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { Stepper } from "@/components/content/Stepper";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { TopicIndex } from "@/components/content/TopicIndex";
import { TopicSwitch } from "@/components/content/TopicSwitch";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";
import { Timeline } from "@/components/content/process/Timeline";
import { CycleDiagram } from "@/components/content/process/CycleDiagram";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { ProblemInsightSolutionCard } from "@/components/content/process/ProblemInsightSolutionCard";
import { RevealAnswer } from "@/components/content/process/RevealAnswer";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";
import { ARABIC_CHAPTER } from "./fixtures";

function ContentTabsDemo() {
  const [tab, setTab] = useState("read");
  return (
    <div className="max-w-lg">
      <ContentTabs activeTab={tab} onTabChange={setTab} />
      <p className="pt-3 text-sm text-muted-foreground">Pane: {tab}</p>
    </div>
  );
}

export const CONTENT_DEMOS: Record<string, ReactNode> = {
  "content/ArabicChapterCard.tsx#ArabicChapterCard": (
    <div className="max-w-2xl">
      <ArabicChapterCard chapter={ARABIC_CHAPTER} />
    </div>
  ),

  "content/BilingualParagraph.tsx#BilingualParagraph": (
    <div className="max-w-2xl space-y-4">
      <BilingualParagraph
        number={1}
        arabic="الرحلةُ إلى الجبلِ تجربةٌ لا تُنسى."
        english="The journey to the mountain is an unforgettable experience."
      />
      <BilingualParagraph
        arabic="كانَ الطريقُ طويلاً لكنَّ القلبَ كانَ مليئاً بالأملِ."
        english="The road was long, but the heart was full of hope."
      />
    </div>
  ),

  "content/Callout.tsx#Callout": (
    <div className="max-w-2xl space-y-3">
      <Callout type="note">A note: one idea, one box.</Callout>
      <Callout type="didyouknow">A did-you-know box shares the note tone.</Callout>
      <Callout type="important" subjectColor="var(--subject-physics)">
        An important box borrows the subject rule.
      </Callout>
      <Callout type="tip">A speed trick is an important box in disguise.</Callout>
      <Callout type="warning">A warning uses the amber rule — never a red panel.</Callout>
    </div>
  ),

  "content/ChapterIntro.tsx#ChapterIntro": (
    <div className="max-w-2xl">
      <ChapterIntro
        author="Humpy Dumpty"
        subname="Egg pants"
        genre="Insect fiction"
        genreArabic="قصة خيالية"
        characters={["Humpy", "Dumpty"]}
      />
    </div>
  ),

  "content/CharacterComparison.tsx#CharacterComparison": (
    <CharacterComparison
      characters={["Narayan", "The man"]}
      rows={[
        { label: "Age", values: ["12", "middle-aged"] },
        { label: "Attitude", values: ["curious", "cautious"] },
        { label: "Role", values: ["learner", "guide"] },
      ]}
    />
  ),

  "content/CharacterSketch.tsx#CharacterSketch": (
    <div className="max-w-xl">
      <CharacterSketch name="The narrator">
        A twelve-year-old boy who watches the village fair from the edge.
      </CharacterSketch>
    </div>
  ),

  "content/CollapsibleSection.tsx#CollapsibleSection": (
    <div className="max-w-2xl">
      <CollapsibleSection title="Themes" defaultOpen>
        <p className="text-sm text-muted-foreground">
          Memory, loss, and the distance between the village and the city.
        </p>
      </CollapsibleSection>
    </div>
  ),

  "content/Comparison.tsx#Comparison": (
    <Comparison
      columns={[
        { title: "Scalar", children: <p>Magnitude only — distance, speed.</p> },
        { title: "Vector", children: <p>Magnitude and direction — displacement, velocity.</p> },
      ]}
    />
  ),

  "content/ContentTabs.tsx#ContentTabs": <ContentTabsDemo />,

  "content/Example.tsx#Example": (
    <div className="max-w-2xl">
      <Example title="Worked example">
        <p className="text-sm">Use an example only inside an already-collapsed Expandable.</p>
      </Example>
    </div>
  ),

  "content/ExerciseQa.tsx#ExerciseQa": (
    <ExerciseQa
      questions={[<>State Gauss&apos;s law.</>, <>Define electric flux.</>]}
      answers={[
        <>The total flux through a closed surface is q/ε₀.</>,
        <>Φ = E·A cos θ.</>,
      ]}
    />
  ),

  "content/Expandable.tsx#Expandable": (
    <div className="max-w-2xl space-y-3">
      <Expandable title="Worked example" variant="example" subjectColor="var(--subject-physics)">
        <p className="text-sm">Solution steps live here.</p>
      </Expandable>
      <Expandable title="Exercise 1.2" variant="exercise">
        <p className="text-sm">Exercise content, amber accent.</p>
      </Expandable>
      <Expandable title="Recall" variant="recall">
        <p className="text-sm">A recall prompt.</p>
      </Expandable>
      <Expandable title="Misc note" variant="misc">
        <p className="text-sm">Everything else.</p>
      </Expandable>
      <Expandable title="Default">
        <p className="text-sm">No variant passed.</p>
      </Expandable>
    </div>
  ),

  "content/Formula.tsx#Formula": (
    <div className="space-y-4">
      <Formula>{String.raw`\Phi = \vec{E}\cdot\vec{A}`}</Formula>
      <Formula block>{String.raw`\oint \vec{E}\cdot d\vec{A} = \frac{q}{\varepsilon_0}`}</Formula>
    </div>
  ),

  "content/Formula.tsx#FormulaBlock": (
    <div className="max-w-xl space-y-4">
      <FormulaBlock label="GAUSS'S LAW" latex={String.raw`\oint \vec{E}\cdot d\vec{A} = \frac{q}{\varepsilon_0}`} />
      <FormulaBlock important label="RESULT" latex={String.raw`E = \frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}`} />
    </div>
  ),

  "content/FormulaCard.tsx#FormulaCard": (
    <div className="max-w-md">
      <FormulaCard label="OHM'S LAW" subjectColor="var(--subject-physics)">
        <Formula>{String.raw`V = IR`}</Formula>
      </FormulaCard>
    </div>
  ),

  "content/Highlight.tsx#Highlight": (
    <p className="max-w-2xl text-[17px] leading-relaxed">
      A <Highlight color="yellow">definition</Highlight>, a <Highlight color="blue">key term</Highlight>, a{" "}
      <Highlight color="green">result</Highlight>, a <Highlight color="pink">caution</Highlight>, and an{" "}
      <Highlight color="orange">formula</Highlight>.
    </p>
  ),

  "content/KeyPoint.tsx#KeyPoint": (
    <div className="max-w-2xl">
      <KeyPoint title="Electric flux">
        The scalar product of the electric field and the area vector.
      </KeyPoint>
    </div>
  ),

  "content/OrgChart.tsx#OrgChart": (
    <div className="max-w-2xl">
      <OrgChart
        title="Classification of matter"
        nodes={[
          {
            label: "Matter",
            children: [
              { label: "Pure substances", children: [{ label: "Elements" }, { label: "Compounds" }] },
              { label: "Mixtures", children: [{ label: "Homogeneous" }, { label: "Heterogeneous" }] },
            ],
          },
        ]}
      />
    </div>
  ),

  "content/PocketGrid.tsx#PocketGrid": (
    <PocketGrid
      title="Parallel notes"
      columns={3}
      items={[
        { id: "p1", icon: "🌱", label: "Evidences", note: "Palaeontology", content: <p className="text-sm">Fossil records.</p> },
        { id: "p2", icon: "🧬", label: "Homology", note: "Anatomy", content: <p className="text-sm">Same structure, different function.</p> },
        { id: "p3", icon: "🧪", label: "Biochemistry", note: "Molecules", content: <p className="text-sm">Shared proteins.</p> },
      ]}
    />
  ),

  "content/ProblemSolution.tsx#ProblemSolution": (
    <div className="max-w-2xl">
      <ProblemSolution problemNumber="1">
        <p className="text-sm">Find the flux through a cube of side a with charge q at its centre.</p>
      </ProblemSolution>
    </div>
  ),

  "content/ReadRespond.tsx#ReadRespond": (
    <div className="max-w-2xl">
      <ReadRespond
        title="Read and respond"
        items={[
          { question: "Why does the narrator return to the village?", answer: "To attend the fair and revisit his childhood." },
          { question: "What does the fair symbolize?", answer: "The pull of memory and the passage of time." },
        ]}
      />
    </div>
  ),

  "content/SolvedProblem.tsx#SolvedProblem": (
    <div className="max-w-2xl">
      <SolvedProblem
        number={1}
        title="Flux through a cube"
        question="A charge q sits at the centre of a cube. Find the flux through one face."
        options={[
          { label: "A", text: <>q/ε₀</> },
          { label: "B", text: <>q/6ε₀</> },
        ]}
        given={<>Charge q at the centre, six faces.</>}
        solution={<>By symmetry the total flux q/ε₀ splits equally across six faces.</>}
        answer={<>q/6ε₀</>}
      />
    </div>
  ),

  "content/SpeedTricks.tsx#SpeedTricks": (
    <div className="max-w-2xl">
      <SpeedTricks>
        <p className="text-sm">Use symmetry first; integrate only when symmetry fails.</p>
      </SpeedTricks>
    </div>
  ),

  "content/Stepper.tsx#Stepper": (
    <div className="max-w-2xl">
      <Stepper
        steps={[
          { label: "State the given", description: "List variables with units." },
          { label: "Write the law", description: "Pick the equation that links them." },
          { label: "Substitute", description: "Plug in numbers and compute." },
        ]}
      />
    </div>
  ),

  "content/SummaryLevels.tsx#SummaryLevels": (
    <div className="max-w-2xl">
      <SummaryLevels
        quick={<p className="text-sm">Flux counts field lines through a surface.</p>}
        standard={<p className="text-sm">Φ = E·A cos θ; the unit is N m² C⁻¹.</p>}
        detailed={<p className="text-sm">For a closed surface, Φ = q/ε₀, independent of shape.</p>}
      />
    </div>
  ),

  "content/TopicIndex.tsx#TopicIndex": (
    <TopicIndex
      title="On this page"
      items={[
        { id: "h-1", icon: "·", label: "Introduction", note: "Frames the argument" },
        { id: "h-2", icon: "·", label: "Gauss's law", note: "Statement and proof" },
        { id: "h-3", icon: "·", label: "Applications", note: "Three worked cases" },
      ]}
    />
  ),

  "content/TopicSwitch.tsx#TopicSwitch": (
    <div className="max-w-2xl">
      <TopicSwitch
        label="Report formats"
        panes={[
          { id: "news", label: "News report", content: <p className="text-sm">A news report leads with the newest fact.</p> },
          { id: "feature", label: "Feature", content: <p className="text-sm">A feature lingers on colour and context.</p> },
        ]}
      />
    </div>
  ),

  "content/data/TableCard.tsx#TableCard": (
    <div className="max-w-xl">
      <TableCard
        title="Formulas of halides of 3d metals"
        headers={["Oxidation number", "Halides"]}
        rows={[
          { cells: ["+6", "CrF₆"] },
          { cells: ["+5", "VF₅, CrF₅"] },
          { cells: ["+2", "TiX₂ … ZnX₂"] },
        ]}
        caption="X = F → I."
      />
    </div>
  ),

  "content/data/Checklist.tsx#Checklist": (
    <div className="max-w-xl">
      <Checklist
        title="Revision checklist"
        items={[
          { label: "State Gauss's law", defaultChecked: true },
          { label: "Derive the field of a shell" },
          { label: "Solve three flux problems" },
        ]}
      />
    </div>
  ),

  "content/process/Timeline.tsx#Timeline": (
    <div className="max-w-2xl">
      <Timeline
        title="Discovery of the electron"
        events={[
          { date: "1838", label: "Faraday's electrolysis", detail: "Charge appears in discrete amounts." },
          { date: "1897", label: "Thomson measures e/m", detail: "Cathode rays are particles." },
          { date: "1909", label: "Millikan", detail: "The elementary charge is measured." },
        ]}
      />
    </div>
  ),

  "content/process/CycleDiagram.tsx#CycleDiagram": (
    <div className="max-w-2xl">
      <CycleDiagram
        title="Nitrogen cycle"
        steps={[
          { label: "Fixation", detail: "N₂ → NH₃" },
          { label: "Nitrification", detail: "NH₃ → NO₃⁻" },
          { label: "Assimilation", detail: "Plants take up nitrate" },
          { label: "Denitrification", detail: "NO₃⁻ → N₂" },
        ]}
      />
    </div>
  ),

  "content/process/EquationLadder.tsx#EquationLadder": (
    <div className="max-w-2xl">
      <EquationLadder
        title="Deriving the lens formula"
        steps={[
          { label: "Thin lens", equation: String.raw`\frac{1}{f} = \frac{1}{v} - \frac{1}{u}`, note: "Sign convention applies." },
          { label: "Magnification", equation: String.raw`m = \frac{v}{u}` },
          { label: "Final", equation: String.raw`m = \frac{f}{f+u}`, final: true },
        ]}
      />
    </div>
  ),

  "content/process/ProcessCard.tsx#ProcessCard": (
    <div className="max-w-2xl">
      <ProcessCard
        title="How a bill becomes law"
        steps={[
          { label: "First reading", description: "The bill is introduced." },
          { label: "Committee", description: "Members examine it clause by clause." },
          { label: "Third reading", description: "The house votes." },
        ]}
      />
    </div>
  ),

  "content/process/ProblemInsightSolutionCard.tsx#ProblemInsightSolutionCard": (
    <div className="max-w-2xl">
      <ProblemInsightSolutionCard
        title="Flux through a tilted surface"
        question={<>A surface of area A is tilted by θ. Find the flux.</>}
        insight={<>Only the component of E normal to the surface counts.</>}
        solution={<>Φ = E A cos θ.</>}
      />
    </div>
  ),

  "content/process/RevealAnswer.tsx#RevealAnswer": (
    <div className="max-w-2xl">
      <RevealAnswer
        title="Quick check"
        question={<>What is the flux through a closed surface with no charge inside?</>}
        answer={<>Zero.</>}
      />
    </div>
  ),

  "content/study/MetricCard.tsx#MetricCard": (
    <div className="flex max-w-2xl flex-wrap gap-3">
      <MetricCard label="Magnetic flux" value="2.5" unit="Wb" trend="up" description="Six lines under dot." />
      <MetricCard label="Current" value="0.4" unit="A" trend="neutral" />
    </div>
  ),

  "content/study/MistakeCard.tsx#MistakeCard": (
    <div className="max-w-2xl">
      <MistakeCard
        mistake="Using χ instead of χ_e"
        correction="Use the electric susceptibility in SI; mixing symbols changes the denominator."
        example="E = χ_e ε₀ E"
      />
    </div>
  ),

  "content/concept/ConceptCard.tsx#ConceptCard": (
    <div className="max-w-2xl">
      <ConceptCard title="Electric flux" icon="Φ">
        <p className="text-sm">The number of field lines crossing a surface.</p>
      </ConceptCard>
    </div>
  ),

  "content/concept/FactCard.tsx#FactCard": (
    <div className="max-w-2xl">
      <FactCard title="Unit of flux" definition="N m² C⁻¹" icon="Φ" />
    </div>
  ),

  "content/concept/TreeDiagram.tsx#TreeDiagram": (
    <div className="max-w-2xl">
      <TreeDiagram
        title="Classification of resources"
        nodes={[
          {
            label: "Resources",
            children: [
              { label: "Renewable", children: [{ label: "Solar" }, { label: "Wind" }] },
              { label: "Non-renewable", children: [{ label: "Coal" }, { label: "Petroleum" }] },
            ],
          },
        ]}
      />
    </div>
  ),
};
