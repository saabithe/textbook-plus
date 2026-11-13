"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Kbd } from "@/components/ui/kbd";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Expandable } from "@/components/content/Expandable";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Comparison } from "@/components/content/Comparison";
import { TableCard } from "@/components/content/data/TableCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Stepper } from "@/components/content/Stepper";
import { Timeline } from "@/components/content/process/Timeline";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { TopicIndex } from "@/components/content/TopicIndex";
import { VbtComplexCard } from "@/components/content/chemistry/VbtComplexCard";
import { LigandStrengthComparison } from "@/components/content/chemistry/LigandStrengthComparison";
import { CrystalFieldSplittingDiagram } from "@/components/content/chemistry/CrystalFieldSplittingDiagram";
import { SpectrochemicalSeries } from "@/components/content/chemistry/SpectrochemicalSeries";
import { CftFactorCards } from "@/components/content/chemistry/CftFactorCards";
import { CftLimitationCards } from "@/components/content/chemistry/CftLimitationCards";
import { DdTransitionFlow } from "@/components/content/chemistry/DdTransitionFlow";
import { CfseCalculationCard } from "@/components/content/chemistry/CfseCalculationCard";
import { BoardMcq } from "@/components/content/chemistry/BoardMcq";
import { StabilityConstantCard } from "@/components/content/chemistry/StabilityConstantCard";
import { StabilityFactorCards } from "@/components/content/chemistry/StabilityFactorCards";
import { PolynuclearCarbonylCards } from "@/components/content/chemistry/PolynuclearCarbonylCards";
import { DonationDiagram } from "@/components/content/chemistry/DonationDiagram";
import { SynergicSummary } from "@/components/content/chemistry/SynergicSummary";
import { GeometryLabel } from "@/components/content/chemistry/GeometryLabel";
import { HydroxylFormationCards } from "@/components/content/chemistry/HydroxylFormationCards";
import { HydroxylGroupClassification } from "@/components/content/chemistry/HydroxylGroupClassification";
import { AlcoholTypeCards } from "@/components/content/chemistry/AlcoholTypeCards";
import { StructureFeatureCard } from "@/components/content/chemistry/StructureFeatureCard";
import { Sp2HydroxylComparison } from "@/components/content/chemistry/Sp2HydroxylComparison";
import { EtherClassification } from "@/components/content/chemistry/EtherClassification";
import { BenzeneRing, StructureMark } from "@/components/content/chemistry/StructureGlyphs";
import { NamingSystemCards } from "@/components/content/chemistry/NamingSystemCards";
import { NumberedRuleRows } from "@/components/content/chemistry/NumberedRuleRows";
import { PolyhydricAlcoholCards } from "@/components/content/chemistry/PolyhydricAlcoholCards";
import { PhenolParentCard } from "@/components/content/chemistry/PhenolParentCard";
import { PhenolPositionComparison } from "@/components/content/chemistry/PhenolPositionComparison";
import { GroupedNameTable } from "@/components/content/chemistry/GroupedNameTable";
import { ReactionPathway } from "@/components/content/chemistry/ReactionPathway";
import { ReactionPairCards } from "@/components/content/chemistry/ReactionPairCards";
import { CarbonylClassTable } from "@/components/content/chemistry/CarbonylClassTable";
import { TrendCards } from "@/components/content/chemistry/TrendCards";
import { HydrogenBondCard } from "@/components/content/chemistry/HydrogenBondCard";
import { SolubilityPanel } from "@/components/content/chemistry/SolubilityPanel";
import { CompoundOrderStrip } from "@/components/content/chemistry/CompoundOrderStrip";
import { BoardQuestionCard } from "@/components/content/chemistry/BoardQuestionCard";
import { ReactivityModeCards } from "@/components/content/chemistry/ReactivityModeCards";
import { ReagentReactionTable } from "@/components/content/chemistry/ReagentReactionTable";
import { RankProgression } from "@/components/content/chemistry/RankProgression";
import { PhenolAcidityCards } from "@/components/content/chemistry/PhenolAcidityCards";
import { SubstituentEffectCards } from "@/components/content/chemistry/SubstituentEffectCards";
import { NamedReactionCard } from "@/components/content/chemistry/NamedReactionCard";
import { LucasTestCards } from "@/components/content/chemistry/LucasTestCards";
import { ReactionTable } from "@/components/content/chemistry/ReactionTable";
import { MechanismFlow } from "@/components/content/chemistry/MechanismFlow";
import { ConditionColumns } from "@/components/content/chemistry/ConditionColumns";
import { CompoundHeader } from "@/components/content/chemistry/CompoundHeader";
import { IndustrialPrepCard } from "@/components/content/chemistry/IndustrialPrepCard";
import { UsesBoard } from "@/components/content/chemistry/UsesBoard";
import { FermentationRoute } from "@/components/content/chemistry/FermentationRoute";
import { ConcentrationLadder } from "@/components/content/chemistry/ConcentrationLadder";
import { DenaturationCard } from "@/components/content/chemistry/DenaturationCard";
import { TemperatureBranch } from "@/components/content/chemistry/TemperatureBranch";
import { BoilingPointCompare } from "@/components/content/chemistry/BoilingPointCompare";
import { EtherWaterBonding } from "@/components/content/chemistry/EtherWaterBonding";
import { CleavageCards } from "@/components/content/chemistry/CleavageCards";
import { AnisoleSubstitutionGrid } from "@/components/content/chemistry/AnisoleSubstitutionGrid";
import { RevisionDashboard } from "@/components/content/chemistry/RevisionDashboard";
import { CarbonylFamilyGrid } from "@/components/content/chemistry/CarbonylFamilyGrid";
import { GreekPositionLadder } from "@/components/content/chemistry/GreekPositionLadder";
import { NamingRuleCards } from "@/components/content/chemistry/NamingRuleCards";
import { PracticeProblemCards } from "@/components/content/chemistry/PracticeProblemCards";
import { PhysicalStateTable } from "@/components/content/chemistry/PhysicalStateTable";
import { ForceComparisonCards } from "@/components/content/chemistry/ForceComparisonCards";
import { BoilingPointRamp } from "@/components/content/chemistry/BoilingPointRamp";
import { OrderingQuestionCards } from "@/components/content/chemistry/OrderingQuestionCards";
import { SolubilityPairCards } from "@/components/content/chemistry/SolubilityPairCards";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6 border-t border-border pt-8">
      <h2 className="text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

export default function DesignPage() {
  return (
    <div className="mx-auto w-full max-w-[1100px] space-y-10 px-6 py-12">
      <header className="space-y-2 border-b border-border pb-6">
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground">Blueprint — living contract</h1>
        <p className="text-sm text-muted-foreground">
          Every primitive, both themes, real content. If a change drifts, this is where it shows.
        </p>
      </header>

      <Section title="Type scale">
        <p className="t-title">Title 44</p>
        <p className="t-h1">H1 — Alternating Current</p>
        <p className="t-h2">H2 — Faraday's law of induction</p>
        <p className="t-h3">H3 — Solenoids and toroids</p>
        <p className="t-h4">H4 — Lab step 3</p>
        <p className="t-lead">Lead — the opening sentence of a chapter, muted.</p>
        <p className="t-body">Body — the reading voice, 18px at 1.75.</p>
        <p className="t-caption">Caption — figure sources, secondary notes.</p>
        <p className="t-micro">Micro — every label, every chip, every eyebrow</p>
      </Section>

      <Section title="Surfaces & tokens">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { n: "background", c: "bg-background" },
            { n: "card", c: "bg-card" },
            { n: "muted", c: "bg-muted" },
            { n: "foreground", c: "bg-foreground" },
            { n: "muted-foreground", c: "bg-muted-foreground" },
            { n: "border", c: "bg-border" },
            { n: "rule-strong", c: "bg-rule-strong" },
            { n: "primary (ink)", c: "bg-primary" },
          ].map((s) => (
            <div key={s.n} className="space-y-2">
              <div className={`h-12 rounded-lg border border-border ${s.c}`} />
              <p className="t-micro">{s.n}</p>
            </div>
          ))}
        </div>
        <div className="dark max-h-72 overflow-hidden rounded-lg border border-border bg-background p-4 text-foreground">
          <p className="t-micro mb-2">Dark column preview</p>
          <p className="t-h3">Chapter title in dark mode</p>
          <p className="t-body text-foreground/90">Body voice with primary-as-ink focus ring and border tokens.</p>
        </div>
      </Section>

      <Section title="Core primitives">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
        <div className="flex flex-wrap items-end gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="dg-in">Input</Label>
            <Input id="dg-in" placeholder="Type here …" />
          </div>
          <Kbd>Ctrl K</Kbd>
          <Progress value={62} className="w-40" />
          <Skeleton className="h-8 w-44" />
        </div>
        <Separator />
        <Tabs defaultValue="a">
          <TabsList variant="line" className="w-full gap-6 justify-start">
            <TabsTrigger value="a" className="px-0">Read</TabsTrigger>
            <TabsTrigger value="b" className="px-0">Discourses</TabsTrigger>
          </TabsList>
          <TabsContent value="a" className="mt-3 t-body">Learning pane.</TabsContent>
          <TabsContent value="b" className="mt-3 t-body">Discourse pane.</TabsContent>
        </Tabs>
        <ToggleGroup variant="outline" spacing={2} aria-label="Format">
          <ToggleGroupItem value="b" aria-label="Bold">B</ToggleGroupItem>
          <ToggleGroupItem value="i" aria-label="Italic">I</ToggleGroupItem>
          <ToggleGroupItem value="u" aria-label="Underline">U</ToggleGroupItem>
        </ToggleGroup>
        <Table label="Gallery sample">
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead className="text-right">Chapters</TableHead>
              <TableHead>Colour</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Physics</TableCell>
              <TableCell className="text-right">14</TableCell>
              <TableCell>Blue</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Chemistry</TableCell>
              <TableCell className="text-right">10</TableCell>
              <TableCell>Green</TableCell>
            </TableRow>
          </TableBody>
          <TableCaption>Two sample rows.</TableCaption>
        </Table>
      </Section>

      <Section title="Text & emphasis">
        <Callout type="note">A note tone — ink rule, short prose, one fact per box.</Callout>
        <Callout type="important" subjectColor="var(--subject-physics)">
          An important tone — the subject rule marks the law.
        </Callout>
        <Callout type="warning">A warning tone — amber rule, never a red panel.</Callout>
        <KeyPoint title="Electric flux">The scalar product of E and the area vector.</KeyPoint>
        <p className="t-body">
          A <Highlight color="yellow">definition</Highlight>, a <Highlight color="blue">key term</Highlight>, a{" "}
          <Highlight color="green">result</Highlight>, a <Highlight color="pink">caution</Highlight>, and a{" "}
          <Highlight color="orange">formula</Highlight>.
        </p>
        <Expandable title="Worked example" variant="example">
          <p className="text-sm">Solution steps collapse, the way every worked example in the app does.</p>
        </Expandable>
        <Expandable title="Practice question" variant="exercise">
          <p className="text-sm">Exercise content, amber accent.</p>
        </Expandable>
        <Formula>{"E = mc^2"}</Formula>
        <FormulaBlock label="OHM'S LAW" latex="V = IR" />
      </Section>

      <Section title="Data & structure">
        <TableCard
          title="Formulas of halides of 3d metals"
          headers={["Oxidation number", "Halides"]}
          rows={[
            { cells: ["+6", "CrF₆"] },
            { cells: ["+5", "VF₅, CrF₅"] },
            { cells: ["+2", "TiX₂ … ZnX₂"] },
          ]}
          caption="X = F→I."
        />
        <Comparison
          columns={[
            { title: "Scalar", children: <p>Magnitude only — Distance, speed</p> },
            { title: "Vector", children: <p>Magnitude + direction — Displacement, velocity</p> },
          ]}
        />
        <Stepper
          steps={[
            { label: "State the given", description: "List variables with units." },
            { label: "Write the law", description: "Pick the equation that links them." },
            { label: "Substitute", description: "Plug in numbers and compute." },
          ]}
        />
      </Section>

      <Section title="Chemistry — VBT evidence">
        <LigandStrengthComparison
          weak={["I⁻", "Cl⁻", "Br⁻", "SCN⁻", "OH⁻", "H₂O"]}
          strong={["CO", "NH₃", "CN⁻", "en", "EDTA⁴⁻"]}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <VbtComplexCard
            formula="[Co(NH₃)₆]³⁺"
            geometry="Octahedral"
            hybridisation="d²sp³"
            magnetic="Diamagnetic"
            orbitalType="Inner orbital"
            config="Co³⁺ · 3d⁶"
            unpaired="0"
            notes={["Uses inner 3d orbitals.", "All electrons are paired.", "Low spin complex."]}
          />
          <VbtComplexCard
            formula="[CoF₆]³⁻"
            geometry="Octahedral"
            hybridisation="sp³d²"
            magnetic="Paramagnetic"
            orbitalType="Outer orbital"
            config="Co³⁺ · 3d⁶"
            unpaired="4"
            notes={["Uses outer 4d orbitals.", "Four unpaired electrons remain.", "High spin complex."]}
          />
        </div>
      </Section>

      <Section title="Chemistry — crystal field">
        <CrystalFieldSplittingDiagram field="octahedral" />
        <CrystalFieldSplittingDiagram field="tetrahedral" />
        <SpectrochemicalSeries
          ligands={["I⁻", "Br⁻", "SCN⁻", "Cl⁻", "S²⁻", "F⁻", "OH⁻", "C₂O₄²⁻", "H₂O", "NCS⁻", "edta⁴⁻", "NH₃", "en", "CN⁻", "CO"]}
        />
        <CftFactorCards
          factors={[
            { factor: "Charge on metal ion", from: "Higher charge", to: "Greater splitting (Δ)" },
            { factor: "Structure of complex", from: "Octahedral", to: "Greater than tetrahedral (Δₒ > Δₜ)" },
            { factor: "Nature of ligand", from: "Strong field ligand", to: "Greater splitting than weak field" },
          ]}
        />
        <CftLimitationCards
          limitations={[
            {
              title: "Anion charge assumption",
              points: ["Treats ligands as point charges.", "Anionic ligands lie at the lower end of the series."],
            },
            {
              title: "Covalent character",
              points: ["Ignores the covalent character of the metal–ligand bond."],
            },
          ]}
        />
        <DdTransitionFlow
          steps={[
            "Ligands split the d orbitals.",
            "The lower level absorbs visible light.",
            "The electron jumps to the higher level.",
            "The observed colour is the complementary colour.",
          ]}
        />
        <CfseCalculationCard
          complex="[Co(NH₃)₆]³⁺"
          info={[
            { label: "Oxidation state", value: "Co³⁺ → [Ar]3d⁶" },
            { label: "Ligand field", value: "Strong field (NH₃)" },
            { label: "Electron configuration", value: "t₂g⁶ e_g⁰" },
          ]}
          steps={[
            { label: "Write the formula", detail: "CFSE = (0.6n_eg − 0.4n_t2g)Δₒ" },
            { label: "Substitute", detail: "CFSE = (0.6 × 0 − 0.4 × 6)Δₒ" },
            { label: "Evaluate", detail: "CFSE = −2.4Δₒ" },
          ]}
          result="−2.4Δₒ"
        />
        <BoardMcq
          question="The crystal field splitting energy for octahedral (Δₒ) and tetrahedral (Δₜ) complexes are related as:"
          options={[
            { label: "a", content: "3/5 Δₒ" },
            { label: "b", content: "5/3 Δₒ" },
            { label: "c", content: "4/9 Δₒ", correct: true },
            { label: "d", content: "9/4 Δₒ" },
          ]}
        />
      </Section>

      <Section title="Chemistry — stability & carbonyls">
        <StabilityConstantCard />
        <StabilityFactorCards
          factors={[
            { factor: "Nature of the metal ion", detail: "Greater charge-to-radius ratio increases stability." },
            { factor: "Nature of the ligand", detail: "Greater basic strength increases stability." },
            { factor: "Presence of chelating ligands", detail: "Increases stability (chelate effect)." },
          ]}
        />
        <TableCard
          headers={["Metal carbonyl", "Geometry"]}
          rows={[
            { cells: ["[Ni(CO)₄]", <GeometryLabel kind="tetrahedral" label="Tetrahedral" />] },
            {
              cells: [
                "[Fe(CO)₅]",
                <GeometryLabel kind="trigonal-bipyramidal" label="Trigonal bipyramidal" />,
              ],
            },
            { cells: ["[Cr(CO)₆]", <GeometryLabel kind="octahedral" label="Octahedral" />] },
          ]}
        />
        <PolynuclearCarbonylCards
          carbonyls={[
            {
              formula: "[Mn₂(CO)₁₀]",
              description: "Two square pyramidal Mn(CO)₅ units joined by a Mn—Mn bond.",
            },
            {
              formula: "[Co₂(CO)₈]",
              description: "Contains a Co—Co bond bridged by two carbonyl (CO) groups.",
            },
          ]}
        />
        <DonationDiagram variant="sigma" />
        <DonationDiagram variant="pi" />
        <SynergicSummary />
      </Section>

      <Section title="Chemistry — alcohols, phenols & ethers">
        <HydroxylFormationCards
          transformations={[
            {
              label: "Methane → Methanol",
              reactant: <>CH<sub>4</sub></>,
              product: (
                <>
                  CH<sub>3</sub>
                  <StructureMark>OH</StructureMark>
                </>
              ),
            },
            {
              label: "Benzene → Phenol",
              reactant: <BenzeneRing />,
              product: (
                <>
                  <BenzeneRing bond />
                  <StructureMark>OH</StructureMark>
                </>
              ),
            },
          ]}
        />
        <HydroxylGroupClassification
          alcoholRows={[
            { classification: "Monohydric", groups: "1", example: <>Ethanol: C<sub>2</sub>H<sub>5</sub>OH</> },
            {
              classification: "Dihydric",
              groups: "2",
              example: <>Ethylene glycol: CH<sub>2</sub>OH–CH<sub>2</sub>OH</>,
            },
            {
              classification: "Trihydric",
              groups: "3",
              example: <>Glycerol: CH<sub>2</sub>OH–CHOH–CH<sub>2</sub>OH</>,
            },
            { classification: "Polyhydric", groups: "Many", example: "Glucose, fructose" },
          ]}
          phenolClasses={[
            { classification: "Monohydric phenols", groups: "One –OH group" },
            { classification: "Dihydric phenols", groups: "Two –OH groups" },
            { classification: "Trihydric phenols", groups: "Three –OH groups" },
          ]}
        />
        <AlcoholTypeCards
          types={[
            {
              type: "Primary",
              degree: "1°",
              classification: "–OH attached to a primary carbon.",
              formula: { before: <>CH<sub>3</sub>–</>, focus: <>CH<sub>2</sub>–OH</>, after: "" },
            },
            {
              type: "Secondary",
              degree: "2°",
              classification: "–OH attached to a secondary carbon.",
              formula: {
                before: <>CH<sub>3</sub>–</>,
                focus: "CH(OH)",
                after: <>–CH<sub>3</sub></>,
              },
            },
            {
              type: "Tertiary",
              degree: "3°",
              classification: "–OH attached to a tertiary carbon.",
              formula: {
                before: <>CH<sub>3</sub>–</>,
                focus: <>C(OH)(CH<sub>3</sub>)</>,
                after: <>–CH<sub>3</sub></>,
              },
            },
          ]}
        />
        <StructureFeatureCard
          title="Allylic alcohols"
          definition="The –OH group is attached to an sp³ hybridised carbon adjacent to a carbon–carbon double bond (C=C)."
          structure={
            <>
              <StructureMark tone="warning">CH<sub>2</sub>=CH</StructureMark>
              <span className="mx-0.5">–</span>
              <StructureMark>CH<sub>2</sub>–OH</StructureMark>
            </>
          }
          legend={[
            { label: "C=C double bond", tone: "warning" },
            { label: "sp³ carbon carrying –OH", tone: "chemistry" },
          ]}
          note={{ label: "Substitution degree", text: "can be primary, secondary or tertiary." }}
        />
        <Sp2HydroxylComparison
          cases={[
            {
              title: "Vinylic alcohols",
              structure: <>CH<sub>2</sub>=<StructureMark>CH</StructureMark>–OH</>,
              caption: "Vinyl alcohol",
              definition: "The –OH group is bonded directly to a carbon–carbon double bond.",
            },
            {
              title: "Phenols",
              structure: (
                <span className="inline-flex items-center gap-0.5">
                  <BenzeneRing bond vertexDot />
                  <span>OH</span>
                </span>
              ),
              caption: "Phenol",
              definition: "The –OH group is bonded directly to an aryl carbon of an aromatic ring.",
            },
          ]}
        />
        <EtherClassification
          kinds={[
            {
              title: "Simple / Symmetrical ethers",
              description: "Identical alkyl or aryl groups attached to oxygen.",
              examples: [
                { left: <>CH<sub>3</sub></>, right: <>CH<sub>3</sub></> },
                { left: <>C<sub>2</sub>H<sub>5</sub></>, right: <>C<sub>2</sub>H<sub>5</sub></> },
              ],
            },
            {
              title: "Mixed / Unsymmetrical ethers",
              description: "Different alkyl or aryl groups attached to oxygen.",
              examples: [
                { left: <>CH<sub>3</sub></>, right: <>C<sub>2</sub>H<sub>5</sub></>, name: "Ethyl methyl ether" },
                {
                  left: <>C<sub>2</sub>H<sub>5</sub></>,
                  right: <>C<sub>6</sub>H<sub>5</sub></>,
                  name: "Ethyl phenyl ether",
                },
              ],
            },
          ]}
        />
      </Section>

      <Section title="Chemistry — nomenclature">
        <NamingSystemCards
          systems={[
            {
              label: "Common name system",
              rule: "Alkyl group name + alcohol.",
              example: <>CH<sub>3</sub>OH → Methyl alcohol</>,
            },
            {
              label: "IUPAC system",
              rule: "Replace the terminal -e of the parent alkane with -ol.",
              example: "Alkane − e + ol = Alkanol",
            },
          ]}
        />
        <NumberedRuleRows
          rules={[
            { title: "Numbering", detail: "number from the end nearest to the –OH group." },
            {
              title: "Polyhydric alcohols",
              detail: "retain the terminal -e and add -diol or -triol with position locants.",
            },
            {
              title: "Cyclic alcohols",
              detail: "use the prefix cyclo-; the carbon bearing –OH is C-1.",
            },
          ]}
        />
        <PolyhydricAlcoholCards
          alcohols={[
            {
              common: "Ethylene glycol",
              iupac: "Ethane-1,2-diol",
              hydroxyls: 2,
              structure: (
                <>
                  <StructureMark>HO</StructureMark>–CH<sub>2</sub>–CH<sub>2</sub>–
                  <StructureMark>OH</StructureMark>
                </>
              ),
            },
            {
              common: "Glycerol",
              iupac: "Propane-1,2,3-triol",
              hydroxyls: 3,
              structure: (
                <>
                  <StructureMark>HO</StructureMark>–CH<sub>2</sub>–CH(
                  <StructureMark>OH</StructureMark>)–CH<sub>2</sub>–
                  <StructureMark>OH</StructureMark>
                </>
              ),
            },
          ]}
        />
        <PhenolParentCard
          name="Phenol"
          formula="C₆H₅OH"
          statements={[
            "The simplest hydroxy derivative of benzene.",
            "Both the common name and the accepted IUPAC name.",
          ]}
        />
        <PhenolPositionComparison
          positions={[
            { prefix: "o-", name: "Ortho", locants: "1,2", position: 2 },
            { prefix: "m-", name: "Meta", locants: "1,3", position: 3 },
            { prefix: "p-", name: "Para", locants: "1,4", position: 4 },
          ]}
        />
        <GroupedNameTable
          groups={[
            {
              label: "Monohydric phenols (phenol and cresols)",
              rows: [
                { structure: "C₆H₅OH", common: "Phenol", iupac: "Phenol" },
                { structure: "o-C₆H₄(CH₃)(OH)", common: "o-Cresol", iupac: "2-Methylphenol" },
              ],
            },
            {
              label: "Polyhydric phenols (benzenediols)",
              rows: [
                {
                  structure: "C₆H₄(OH)₂ (1,2-dihydroxy)",
                  common: "Catechol",
                  iupac: "Benzene-1,2-diol",
                },
                {
                  structure: "C₆H₄(OH)₂ (1,4-dihydroxy)",
                  common: "Quinol / Hydroquinone",
                  iupac: "Benzene-1,4-diol",
                },
              ],
            },
          ]}
        />
      </Section>

      <Section title="Chemistry — preparation routes">
        <ReactionPathway
          orientation="horizontal"
          title="Dow's process"
          nodes={[
            { title: "Chlorobenzene + NaOH" },
            { step: "Step 1", title: "Sodium phenoxide", tone: "intermediate" },
            { step: "Step 2", title: "Phenol + NaCl", tone: "product" },
          ]}
          links={[
            { label: "Fusion", condition: "623 K · 300 atm" },
            { label: "Acidification", condition: "HCl" },
          ]}
        />
        <ReactionPathway
          title="Reaction sequence — propene"
          nodes={[
            {
              step: "Step 1",
              title: "First addition",
              equation: String.raw`\text{CH}_3\text{CH=CH}_2 + \text{BH}_3 \rightarrow \text{CH}_3\text{CH}_2\text{CH}_2\text{BH}_2`,
            },
            {
              step: "Step 2",
              title: "Third addition",
              equation: String.raw`\rightarrow (\text{CH}_3\text{CH}_2\text{CH}_2)_3\text{B}`,
              tone: "intermediate",
              outcome: "Trialkylborane",
            },
          ]}
        />
        <ReactionPairCards
          title="Markovnikov hydration vs anti-Markovnikov hydroboration"
          cards={[
            {
              label: "Markovnikov hydration",
              reagent: "H₂O / H⁺",
              description: "–OH attaches to the carbon having fewer hydrogen atoms.",
              substrate: <>CH<sub>3</sub>–CH=CH<sub>2</sub></>,
              product: (
                <>
                  CH<sub>3</sub>–CH(<StructureMark>OH</StructureMark>)–CH<sub>3</sub>
                </>
              ),
              productName: "Propan-2-ol",
              productMeta: "Secondary (2°)",
              badge: "–OH at C-2",
            },
            {
              label: "Anti-Markovnikov hydroboration",
              reagent: "BH₃, then H₂O₂ / NaOH",
              description: "Boron adds to the sp² carbon having the greater number of hydrogen atoms.",
              substrate: <>CH<sub>3</sub>–CH=CH<sub>2</sub></>,
              product: (
                <>
                  CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–<StructureMark>OH</StructureMark>
                </>
              ),
              productName: "Propan-1-ol",
              productMeta: "Primary (1°)",
              badge: "–OH at C-1",
            },
          ]}
        />
        <CarbonylClassTable
          rows={[
            { carbonyl: "Methanal", formula: "HCHO", alcoholClass: "Primary (1°) alcohol" },
            { carbonyl: "Other aldehydes", formula: "RCHO", alcoholClass: "Secondary (2°) alcohol" },
            { carbonyl: "Ketones", formula: "RCOR′", alcoholClass: "Tertiary (3°) alcohol" },
          ]}
        />
      </Section>

      <Section title="Chemistry — physical properties">
        <TrendCards
          title="General trends"
          cards={[
            {
              title: "A. Carbon chain length",
              from: "Carbon atoms",
              fromDirection: "up",
              to: "Boiling point",
              toDirection: "up",
              points: [
                "Longer carbon chains give stronger van der Waals forces.",
                "Stronger van der Waals forces give higher boiling points.",
              ],
            },
            {
              title: "B. Branching",
              from: "Branching",
              fromDirection: "up",
              to: "Boiling point",
              toDirection: "down",
              points: [
                "Branching reduces the overall surface area.",
                "Weaker van der Waals forces give lower boiling points.",
              ],
            },
          ]}
        />

        <HydrogenBondCard
          label="Intermolecular hydrogen bonding"
          statement="Alcohols and phenols carry hydroxyl groups (–OH), which take part in extensive intermolecular hydrogen bonding."
          comparisonLabel="Boiling points are higher than those of"
          comparisons={["hydrocarbons", "haloalkanes", "haloarenes", "ethers"]}
          comparisonNote="of comparable molar mass."
        />

        <SolubilityPanel
          sections={[
            {
              label: "Hydrogen bonding with water",
              body: "Alcohols and phenols are soluble in water because they form intermolecular hydrogen bonds with water molecules.",
            },
            {
              label: "Alkyl/aryl group size",
              trend: {
                from: "Alkyl/aryl group size",
                fromDirection: "up",
                to: "Solubility",
                toDirection: "down",
              },
              body: "Increasing the size of the hydrophobic group decreases solubility.",
              emphasis: true,
            },
            {
              label: "Miscibility",
              body: "Lower molecular mass alcohols are miscible with water in all proportions.",
              items: ["Methanol", "Ethanol", "Propanol"],
              itemsLabel: "such as",
            },
          ]}
        />

        <BoardQuestionCard number="Q1" tag="Boiling point ordering">
          <p className="text-sm font-semibold leading-relaxed text-foreground">
            Arrange the following compounds in increasing order of boiling points:
          </p>

          <CompoundOrderStrip
            title="Solution"
            compounds={[
              { name: "Ethanol", carbons: "2C" },
              { name: "Propan-1-ol", carbons: "3C" },
              { name: "Butan-2-ol", carbons: "4C" },
              { name: "Butan-1-ol", carbons: "4C" },
            ]}
          />
        </BoardQuestionCard>

        <BoardQuestionCard number="Q2" tag="Highest boiling point">
          <BoardMcq
            question="Which of the following alcohols has the highest boiling point?"
            options={[
              {
                label: "A",
                content: (
                  <>
                    CH<sub>3</sub>OH — Methanol
                  </>
                ),
              },
              {
                label: "B",
                content: (
                  <>
                    CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH — Butan-1-ol
                  </>
                ),
                correct: true,
              },
              {
                label: "C",
                content: (
                  <>
                    CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub> — Butan-2-ol
                  </>
                ),
              },
            ]}
            explanation={{
              heading: "Answer (B) — reasons",
              reasons: [
                "Longest continuous carbon chain.",
                "Maximum surface area.",
                "Stronger van der Waals forces.",
              ],
            }}
          />
        </BoardQuestionCard>
      </Section>

      <Section title="Chemistry — reactions of alcohols and phenols">
        <ReactivityModeCards
          title="Reacting as a nucleophile or an electrophile"
          cards={[
            {
              role: "Alcohol as nucleophile",
              bond: "O—H",
              tone: "chemistry",
              statement: "The alcohol oxygen attacks an electrophile, so the O—H bond breaks.",
              points: ["Alcohol oxygen participates in nucleophilic reactions."],
              equations: [
                {
                  label: "General scheme",
                  latex: String.raw`\text{R–}\ddot{\mathrm{O}}\text{–H} + \text{C}^+ \longrightarrow \text{R–}\ddot{\mathrm{O}}\text{–C} + \text{H}^+`,
                },
              ],
            },
            {
              role: "Protonated alcohol as electrophile",
              bond: "C—O",
              tone: "ink",
              statement: "A nucleophile replaces the –OH₂⁺ group, so the C—O bond breaks.",
              points: ["Alcohol reacts with H⁺ to form a protonated alcohol."],
              equations: [
                {
                  label: "Step 1 — Protonation",
                  latex: String.raw`\text{R–CH}_2\text{–OH} + \text{H}^+ \rightleftharpoons \text{R–CH}_2\text{–OH}_2^+`,
                },
              ],
            },
          ]}
        />

        <ReagentReactionTable
          title="Active metals and aqueous alkali"
          rows={[
            {
              reagent: "Active metals",
              reagentNote: "Na · K · Al",
              alcohol: {
                equation: String.raw`2\text{ROH} + 2\text{Na} \longrightarrow 2\text{RONa} + \text{H}_2`,
                product: "Sodium alkoxide",
                note: "Hydrogen gas is liberated.",
              },
              phenol: {
                equation: String.raw`2\text{C}_6\text{H}_5\text{OH} + 2\text{Na} \longrightarrow 2\text{C}_6\text{H}_5\text{ONa} + \text{H}_2`,
                product: "Sodium phenoxide",
                note: "Hydrogen gas is liberated.",
              },
            },
            {
              reagent: "Aqueous NaOH",
              reagentNote: "Phenols only",
              alcohol: { state: "none" },
              phenol: {
                product: "Sodium phenoxide + water",
              },
            },
          ]}
        />

        <RankProgression
          title="Relative acidity"
          badge="10⁶×"
          items={[
            { label: "Phenols", note: "strongest" },
            { label: "Water" },
            { label: "Alcohols", note: "weakest" },
          ]}
          note="Phenol is approximately one million times more acidic than ethanol."
        />

        <RankProgression
          orientation="inline"
          spacing="tight"
          title="Hydrogen halide reactivity"
          items={[{ label: "HI" }, { label: "HBr" }, { label: "HCl" }, { label: "HF" }]}
        />

        <PhenolAcidityCards
          title="Why phenol is the stronger acid"
          hybridisation={{
            label: "Factor 1",
            title: "Carbon hybridisation",
            points: [
              "The –OH group is attached to an sp²-hybridised carbon of the benzene ring.",
              "That carbon acts as an electron-withdrawing group.",
            ],
          }}
          resonance={{
            label: "Factor 2",
            title: "Resonance stabilisation of the phenoxide ion",
            points: [
              "In alkoxide ions the negative charge is localised on oxygen.",
              "In phenoxide ions the negative charge is delocalised over the aromatic ring.",
            ],
          }}
        />

        <SubstituentEffectCards
          title="Effect of substituents on acidity"
          sides={[
            {
              kind: "EWG",
              heading: "Electron-withdrawing groups",
              groups: "e.g. —NO₂",
              effect: "increase",
              note: "Nitro groups at the ortho and para positions enhance acidity.",
              highlight: {
                name: "2,4,6-Trinitrophenol (picric acid)",
                detail: "A very strong acid — three electron-withdrawing –NO₂ groups.",
              },
            },
            {
              kind: "EDG",
              heading: "Electron-releasing groups",
              groups: "e.g. alkyl groups",
              effect: "decrease",
              note: "Electron-releasing alkyl groups decrease acidity.",
              highlight: { name: "Cresols", detail: "Less acidic than phenol." },
            },
          ]}
        />

        <NamedReactionCard
          title="Esterification"
          tag="Alcohol or phenol + acid"
          subtitle="Alcohols and phenols react with acids, acid chlorides and anhydrides to form esters."
          conditions={[
            {
              reactants: "Carboxylic acids and acid anhydrides",
              condition: "Concentrated H₂SO₄; reversible reaction",
            },
            {
              reactants: "Acid chlorides",
              condition: "Pyridine to neutralise the HCl formed",
            },
          ]}
          equation={String.raw`\text{Ethanol} + \text{Ethanoic acid} \rightleftharpoons \text{Ethyl acetate} + \text{H}_2\text{O}`}
          equationLabel="Example"
          product={{ name: "Ethyl acetate", detail: "An ester." }}
        />

        <LucasTestCards
          title="Lucas test — time to turbidity"
          reagent="Conc. HCl + anhydrous ZnCl₂"
          observations={[
            { time: "Immediate", alcoholClass: "Tertiary (3°)" },
            { time: "Within 5 minutes", alcoholClass: "Secondary (2°)" },
            { time: "No turbidity", alcoholClass: "Primary (1°)", detail: "at room temperature" },
          ]}
        />

        <ReactionTable
          title="Reagents that replace –OH by halogen"
          headers={["Reagent", "Reaction product", "By-products"]}
          rows={[
            {
              cells: ["Phosphorus trihalides (PX₃)", "Alkyl halide", "Phosphorous acid (H₃PO₃)"],
              equation: String.raw`3\text{ROH} + \text{PX}_3 \longrightarrow 3\text{RX} + \text{H}_3\text{PO}_3`,
              badge: "X = Cl, Br, I",
            },
            {
              cells: ["Thionyl chloride (SOCl₂)", "Chloroethane", "HCl(g) + SO₂(g)"],
              equation: String.raw`\text{CH}_3\text{CH}_2\text{OH} + \text{SOCl}_2 \longrightarrow \text{CH}_3\text{CH}_2\text{Cl} + \text{HCl}_{(g)} + \text{SO}_{2(g)}`,
              tone: "mild",
              badge: "Preferred",
            },
          ]}
          caption="SOCl₂ is preferred because its gaseous by-products escape cleanly."
        />

        <MechanismFlow
          title="Three-step mechanism"
          steps={[
            {
              step: "Step 1",
              title: "Protonation of the alcohol",
              points: ["Fast proton transfer.", "Forms a protonated alcohol (oxonium ion)."],
            },
            {
              step: "Step 2",
              title: "Formation of the carbocation",
              points: ["Slow cleavage of the C—O bond.", "The slowest step — rate-determining."],
              tone: "warning",
              tag: "Rate-determining",
            },
            {
              step: "Step 3",
              title: "Elimination of a proton",
              points: ["A proton is removed from the β-carbon.", "Ethene is formed."],
            },
          ]}
        />

        <ConditionColumns
          title="Alcohol vapours over heated copper"
          temperature="573 K"
          condition="Alcohol vapours are passed over heated copper."
          columns={[
            { alcoholClass: "Primary (1°)", product: "Aldehyde" },
            { alcoholClass: "Secondary (2°)", product: "Ketone" },
            {
              alcoholClass: "Tertiary (3°)",
              product: "Alkene",
              note: "dehydration",
              different: true,
            },
          ]}
        />
      </Section>

      <Section title="Chemistry — commercially important alcohols">
        <CompoundHeader
          index="01"
          name="Methanol"
          formula={
            <>
              CH<sub>3</sub>OH
            </>
          }
          alias={{ label: "Common name", value: "Wood spirit" }}
        />

        <CompoundHeader
          index="02"
          name="Ethanol"
          formula={
            <>
              C<sub>2</sub>H<sub>5</sub>OH
            </>
          }
        />

        <IndustrialPrepCard
          tag="Catalytic hydrogenation"
          method="Manufactured by catalytic hydrogenation of carbon monoxide (CO) at high temperature and pressure."
          equation={String.raw`\text{CO} + 2\text{H}_2 \xrightarrow[\text{200--300 atm, 573--673 K}]{\text{ZnO–Cr}_2\text{O}_3} \text{CH}_3\text{OH}`}
          reagents={{
            label: "Reagents",
            value: (
              <>
                Water gas / synthesis gas (CO + 2H<sub>2</sub>)
              </>
            ),
          }}
          catalyst={{
            label: "Catalyst",
            value: (
              <>
                ZnO–Cr<sub>2</sub>O<sub>3</sub>
              </>
            ),
          }}
          conditions={[
            { label: "Pressure", value: "200–300 atm" },
            { label: "Temperature", value: "573–673 K" },
          ]}
        />

        <UsesBoard
          uses={[<>Preparation of formaldehyde</>, <>Solvent in paints and varnishes</>]}
        />

        <FermentationRoute
          tag="Fermentation"
          source={{
            materials: ["Molasses", "Cane sugar", "Starch"],
            raw: "~40% sugar",
            diluted: "~10% sugar solution",
          }}
          steps={[
            {
              name: "Inversion",
              enzyme: "Invertase",
              equation: String.raw`\text{C}_{12}\text{H}_{22}\text{O}_{11} + \text{H}_2\text{O} \xrightarrow{\text{Invertase}} \text{C}_6\text{H}_{12}\text{O}_6 \text{ (glucose)} + \text{C}_6\text{H}_{12}\text{O}_6 \text{ (fructose)}`,
            },
            {
              name: "Conversion",
              enzyme: "Zymase",
              equation: String.raw`\text{C}_6\text{H}_{12}\text{O}_6 \xrightarrow{\text{Zymase}} 2\text{C}_2\text{H}_5\text{OH} + 2\text{CO}_2`,
            },
          ]}
          footnote="Invertase and zymase are the enzymes present in yeast."
        />

        <ConcentrationLadder
          rungs={[
            {
              name: "Wash",
              value: "8–10%",
              detail: "Ethanol solution produced by fermentation.",
              percent: 9,
            },
            {
              name: "Rectified spirit",
              value: "95.6% by mass",
              badge: "Industrial alcohol",
              percent: 95.6,
            },
            {
              name: "Absolute alcohol",
              value: "100%",
              detail: "Pure ethanol.",
              percent: 100,
            },
          ]}
        />

        <DenaturationCard
          tag="Unfit for drinking"
          definition="Process of making commercial alcohol unfit for drinking by adding toxic or foul-smelling substances."
          additives={[
            {
              name: "Copper sulfate",
              formula: (
                <>
                  CuSO<sub>4</sub>
                </>
              ),
              effect: "Blue colour",
              tone: "colour",
            },
            { name: "Pyridine", effect: "Foul smell", tone: "odour" },
          ]}
        />
      </Section>

      <Section title="Chemistry — ethers">
        <TemperatureBranch
          mixture="Ethanol"
          reagent="conc. H₂SO₄"
          branches={[
            {
              temperature: "413 K",
              title: "Ether formation",
              equation: String.raw`2\text{C}_2\text{H}_5\text{OH} \xrightarrow[\text{413 K}]{\text{H}_2\text{SO}_4} \text{C}_2\text{H}_5\text{OC}_2\text{H}_5 + \text{H}_2\text{O}`,
              product: "Diethyl ether (ethoxyethane)",
              note: "Proceeds through an Sₙ2 nucleophilic substitution mechanism.",
            },
            {
              temperature: "443 K",
              title: "Alkene formation",
              equation: String.raw`\text{C}_2\text{H}_5\text{OH} \xrightarrow[\text{443 K}]{\text{H}_2\text{SO}_4} \text{CH}_2\text{=CH}_2 + \text{H}_2\text{O}`,
              product: "Ethene",
            },
          ]}
        />

        <BoilingPointCompare
          rows={[
            {
              formula: (
                <>
                  CH<sub>3</sub>(CH<sub>2</sub>)<sub>3</sub>CH<sub>3</sub>
                </>
              ),
              name: "n-Pentane",
              boiling: "309.1 K",
              kelvin: 309.1,
            },
            {
              formula: (
                <>
                  C<sub>2</sub>H<sub>5</sub>OC<sub>2</sub>H<sub>5</sub>
                </>
              ),
              name: "Ethoxyethane",
              boiling: "307.6 K",
              kelvin: 307.6,
            },
            {
              formula: (
                <>
                  CH<sub>3</sub>(CH<sub>2</sub>)<sub>3</sub>OH
                </>
              ),
              name: "Butan-1-ol",
              boiling: "390 K",
              kelvin: 390,
              highlight: true,
              tag: "hydrogen-bonded",
            },
          ]}
          explanationTitle="Key observation"
          explanation="Alcohols have significantly higher boiling points than hydrocarbons and ethers of comparable molecular mass, because alcohols form intermolecular hydrogen bonds."
          note="Ethanol and methoxymethane are functional isomers (C₂H₆O)."
        />

        <EtherWaterBonding note="The ether oxygen accepts a hydrogen bond from water." />

        <CleavageCards
          cases={[
            {
              title: "Dimethyl ether",
              formula: (
                <>
                  CH<sub>3</sub>—O—CH<sub>3</sub>
                </>
              ),
              reagent: "HI",
              mechanism: "Sₙ2",
              equation: String.raw`\text{CH}_3\text{–O–CH}_3 + \text{HI} \longrightarrow \text{CH}_3\text{I} + \text{CH}_3\text{OH}`,
              second: {
                label: "Excess HI",
                equation: String.raw`\text{CH}_3\text{OH} + \text{HI} \longrightarrow \text{CH}_3\text{I} + \text{H}_2\text{O}`,
              },
            },
            {
              title: "Tertiary group present",
              formula: (
                <>
                  (CH<sub>3</sub>)<sub>3</sub>C—O—CH<sub>3</sub>
                </>
              ),
              reagent: "HI",
              mechanism: "Sₙ1",
              tone: "warning",
              equation: String.raw`(\text{CH}_3)_3\text{C–O–CH}_3 + \text{HI} \longrightarrow (\text{CH}_3)_3\text{C–I} + \text{CH}_3\text{OH}`,
              points: ["A stable tertiary carbocation forms."],
            },
            {
              title: "Anisole",
              formula: (
                <>
                  C<sub>6</sub>H<sub>5</sub>—O—CH<sub>3</sub>
                </>
              ),
              reagent: "HI",
              mechanism: "Aryl C—O",
              equation: String.raw`\text{C}_6\text{H}_5\text{OCH}_3 + \text{HI} \longrightarrow \text{C}_6\text{H}_5\text{OH} + \text{CH}_3\text{I}`,
              highlight:
                "Resonance gives the aryl C(sp²)—O bond partial double bond character.",
            },
          ]}
        />

        <AnisoleSubstitutionGrid
          cases={[
            {
              name: "Halogenation — bromination",
              reagents: ["Br₂ in ethanoic acid"],
              note: "No FeBr₃ catalyst is required.",
              para: { name: "p-Bromoanisole", share: "≈90%" },
              ortho: { name: "o-Bromoanisole" },
            },
            {
              name: "Nitration",
              reagents: ["conc. HNO₃", "conc. H₂SO₄"],
              para: { name: "4-Nitroanisole" },
              ortho: { name: "2-Nitroanisole" },
            },
          ]}
        />

        <RevisionDashboard
          groups={[
            {
              title: "Classification & preparation",
              items: [
                { label: "Symmetrical", value: "Identical groups" },
                { label: "Williamson", value: "Halide + alkoxide" },
              ],
            },
            {
              title: "Conditions",
              items: [
                { label: "413 K", value: "Ether" },
                { label: "443 K", value: "Alkene" },
              ],
            },
            {
              title: "Physical properties",
              items: [
                { label: "Boiling point", value: "Alcohols > ethers" },
                { label: "Solubility", value: "H-bonding" },
              ],
            },
            {
              title: "Reactions",
              items: [
                { label: "Cleavage", value: "HI or HBr" },
                { label: "Anisole", value: "para major" },
              ],
            },
          ]}
        />
      </Section>

      <Section title="Chemistry — carbonyl group & naming">
        <CarbonylFamilyGrid
          families={["Aldehydes", "Ketones", "Carboxylic acids", "Esters", "Amides"]}
          cards={[
            { name: "Aldehyde", structure: "R–CHO" },
            { name: "Ketone", structure: "R–CO–R′" },
            { name: "Ester", structure: "R–COOR′" },
          ]}
        />

        <GreekPositionLadder
          anchor="CHO"
          anchorNote="carbonyl"
          right={[
            { symbol: "α", note: "next to C=O", highlight: true },
            { symbol: "β" },
            { symbol: "γ" },
          ]}
          note="The α-carbon is the carbon directly linked to the carbonyl carbon."
        />

        <GreekPositionLadder
          title="Ketone positions"
          anchor=">C=O"
          left={[{ symbol: "β" }, { symbol: "α", highlight: true }]}
          right={[{ symbol: "α′", highlight: true }, { symbol: "β′" }]}
        />

        <NamingRuleCards
          rules={[
            {
              label: "A",
              title: "Open-chain aliphatic aldehydes",
              suffix: "–al",
              rule: "Replace the terminal -e of the parent alkane with -al.",
              numbering: "Numbering always begins from the aldehyde carbon.",
              equation: String.raw`\text{Alkane} - \text{e} + \text{al} = \text{Alkanal}`,
            },
            {
              label: "B",
              title: "Open-chain aliphatic ketones",
              suffix: "–one",
              rule: "Replace the terminal -e of the parent alkane with -one.",
              numbering: "Number from the end nearer to the carbonyl group.",
            },
            {
              label: "C",
              title: "Polycarbaldehydes",
              suffix: "carbaldehyde",
              rule: "Three or more –CHO groups on an unbranched chain use the prefix carbaldehyde.",
              example: "Propane-1,2,3-tricarbaldehyde.",
              wide: true,
            },
          ]}
        />

        <PracticeProblemCards
          problems={[
            {
              structure: String.raw`\text{CH}_3\text{–CH}_2\text{–CO–CH}_2\text{–CHO}`,
              answer: "3-Oxopentanal",
            },
            {
              structureNode: (
                <p className="text-sm leading-relaxed text-foreground/85">
                  A nitro group at the 4-position of a benzene ring that carries –CHO.
                </p>
              ),
              answer: "4-Nitrobenzaldehyde",
            },
          ]}
        />
      </Section>

      <Section title="Chemistry — physical properties of carbonyls">
        <PhysicalStateTable
          rows={[
            { compound: "Methanal", formula: "HCHO", state: "Gas", highlight: true },
            { compound: "Ethanal", formula: "CH₃CHO", state: "Volatile liquid", highlight: true },
            { compound: "Higher aldehydes and ketones", state: "Liquids or solids" },
          ]}
        />

        <RankProgression
          orientation="inline"
          direction="ascending"
          title="Boiling point order"
          items={[
            { label: "Hydrocarbon" },
            { label: "Ether" },
            { label: "Aldehyde" },
            { label: "Ketone" },
            { label: "Alcohol" },
          ]}
        />

        <ForceComparisonCards
          cards={[
            {
              title: "Dipole–dipole interactions",
              direction: "higher",
              against: ["Hydrocarbons", "Ethers"],
              statement: "Higher boiling points than hydrocarbons and ethers of comparable mass.",
              reason: "The molecules are held by dipole–dipole interactions.",
              tone: "higher",
            },
            {
              title: "Hydrogen bonding",
              direction: "lower",
              against: ["Alcohols"],
              statement: "Lower boiling points than alcohols of similar mass.",
              reason: "No intermolecular hydrogen bonds among themselves.",
              tone: "lower",
            },
          ]}
        />

        <BoilingPointRamp
          massRange="Molar mass ≈ 58–60"
          rows={[
            { compound: "n-Butane", family: "Alkane", mass: "58", boiling: "273 K", kelvin: 273 },
            { compound: "Propanal", family: "Aldehyde", mass: "58", boiling: "322 K", kelvin: 322 },
            {
              compound: "Propan-1-ol",
              family: "Alcohol",
              mass: "60",
              boiling: "370 K",
              kelvin: 370,
              highlight: true,
            },
          ]}
          axisLabel="Increasing boiling point"
        />

        <OrderingQuestionCards
          questions={[
            {
              label: "Ordering 1",
              prompt: "Arrange in increasing order of boiling point",
              given: [
                { label: "(a)", compound: "CH₃CH₂CH₂CH₃", family: "Alkane" },
                { label: "(c)", compound: "CH₃CH₂CH₂CHO", family: "Aldehyde" },
              ],
              answer: "(a) < (c) < (d) < (b)",
              answerNote: "Alkane < aldehyde < ketone < alcohol",
            },
          ]}
        />

        <SolubilityPairCards
          cards={[
            {
              title: "Hydrogen bonding with water",
              statement: "Methanal, ethanal and propanone are miscible with water in all proportions.",
              structure: ">C=O ⋯ H–O–H",
              note: "The carbonyl oxygen forms hydrogen bonds with water molecules.",
              tone: "chemistry",
            },
            {
              title: "Effect of alkyl chain length",
              relation: "Alkyl chain length ↑ ⇒ water solubility ↓",
              note: "Increasing the hydrophobic alkyl chain decreases water solubility rapidly.",
              tone: "muted",
            },
          ]}
        />
      </Section>

      <Section title="Study & answers">
        <ExerciseQa
          questions={[
            <>State Ohm's law.</>,
            <>A 10 Ω resistor carries 2 A. Voltage?</>,
          ]}
          answers={[<>V = IR</>, <>V = 20 V</>]}
        />
        <MetricCard label="Magnetic flux" value="2.5" unit="Wb" trend="up" description="Six lines under dot." />
        <MistakeCard mistake="Using χ instead of χ" correction="Use χ_e in SI; mixing them changes the denominator." example="E = χ_e ε₀ E" />
      </Section>

      <Section title="Chapter furniture">
        <ChapterIntro author="Humpy Dumpty" subname="Egg pants" genre="Insect fiction" genreArabic="قصة خيالية" characters={["Humpy", "Dumpty"]} />
        <TopicIndex items={[{ id: "h-1", icon: "·", label: "Introduction", note: "Frames the argument" }]} />
      </Section>

      <Section title="Highlight tones">
        <p className="t-body">
          Each tone names a meaning so the page's colour story stays consistent
          with the 953 <Highlight color="yellow">definitions</Highlight>,{" "}
          <Highlight color="blue">key terms</Highlight>, <Highlight color="green">results</Highlight>,{" "}
          <Highlight color="pink">cautions</Highlight>, and <Highlight color="orange">formulas</Highlight>.
        </p>
      </Section>

      <Section title="Chart (recharts proof)">
        <div className="rounded-lg border border-border bg-card p-4">
          <ChartContainer
            config={{
              value: { label: "Chapters", color: "var(--foreground)" },
            }}
            className="h-44 w-full"
          >
            <BarChart data={[{ s: "Phys", value: 14 }, { s: "Chem", value: 10 }, { s: "Math", value: 13 }]}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="s" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} width={24} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="var(--color-value)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </div>
      </Section>

      <Section title="Motion">
        <div className="h-16 w-44 border-l-[3px] border-ok bg-card px-4 py-3 transition-all duration-[180ms] ease-[var(--ease-blueprint)] hover:translate-x-0.5">
          <p className="t-micro">hover me — 180ms ink wash only</p>
        </div>
      </Section>
    </div>
  );
}