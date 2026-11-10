"use client";

import type { ReactNode } from "react";
import { AlcoholTypeCards } from "@/components/content/chemistry/AlcoholTypeCards";
import { BoardMcq } from "@/components/content/chemistry/BoardMcq";
import { CarbonylClassTable } from "@/components/content/chemistry/CarbonylClassTable";
import { CfseCalculationCard } from "@/components/content/chemistry/CfseCalculationCard";
import { CftFactorCards } from "@/components/content/chemistry/CftFactorCards";
import { CftLimitationCards } from "@/components/content/chemistry/CftLimitationCards";
import { DdTransitionFlow } from "@/components/content/chemistry/DdTransitionFlow";
import { EtherClassification } from "@/components/content/chemistry/EtherClassification";
import { GroupedNameTable } from "@/components/content/chemistry/GroupedNameTable";
import { HydroxylFormationCards } from "@/components/content/chemistry/HydroxylFormationCards";
import { HydroxylGroupClassification } from "@/components/content/chemistry/HydroxylGroupClassification";
import { LigandStrengthComparison } from "@/components/content/chemistry/LigandStrengthComparison";
import { NamingSystemCards } from "@/components/content/chemistry/NamingSystemCards";
import { NumberedRuleRows } from "@/components/content/chemistry/NumberedRuleRows";
import { PhenolParentCard } from "@/components/content/chemistry/PhenolParentCard";
import { PhenolPositionComparison } from "@/components/content/chemistry/PhenolPositionComparison";
import { PolyhydricAlcoholCards } from "@/components/content/chemistry/PolyhydricAlcoholCards";
import { PolynuclearCarbonylCards } from "@/components/content/chemistry/PolynuclearCarbonylCards";
import { ReactionPairCards } from "@/components/content/chemistry/ReactionPairCards";
import { ReactionPathway } from "@/components/content/chemistry/ReactionPathway";
import { Sp2HydroxylComparison } from "@/components/content/chemistry/Sp2HydroxylComparison";
import { SpectrochemicalSeries } from "@/components/content/chemistry/SpectrochemicalSeries";
import { StabilityFactorCards } from "@/components/content/chemistry/StabilityFactorCards";
import { StructureFeatureCard } from "@/components/content/chemistry/StructureFeatureCard";
import { VbtComplexCard } from "@/components/content/chemistry/VbtComplexCard";

const wrap = (node: ReactNode) => <div className="max-w-2xl">{node}</div>;

export const CHEMISTRY_DEMOS: Record<string, ReactNode> = {
  "content/chemistry/AlcoholTypeCards.tsx#AlcoholTypeCards": wrap(
    <AlcoholTypeCards
      types={[
        {
          type: "Primary",
          degree: "1°",
          classification: "–OH on a carbon bonded to one other carbon",
          formula: { before: "CH₃–", focus: "CH₂", after: "–OH" },
        },
        {
          type: "Secondary",
          degree: "2°",
          classification: "–OH on a carbon bonded to two other carbons",
          formula: { before: "CH₃–", focus: "CH", after: "–CH₃" },
        },
        {
          type: "Tertiary",
          degree: "3°",
          classification: "–OH on a carbon bonded to three other carbons",
          formula: { before: "CH₃–", focus: "C", after: "–CH₃" },
        },
      ]}
    />
  ),

  "content/chemistry/BoardMcq.tsx#BoardMcq": wrap(
    <BoardMcq
      question={<>Which alcohol gives a positive iodoform test?</>}
      options={[
        { label: "A", content: <>Ethanol</>, correct: true },
        { label: "B", content: <>Methanol</> },
        { label: "C", content: <>Propan-2-ol</> },
      ]}
    />
  ),

  "content/chemistry/CarbonylClassTable.tsx#CarbonylClassTable": wrap(
    <CarbonylClassTable
      title="Carbonyl compounds and their alcohols"
      rows={[
        { carbonyl: "Aldehyde", formula: <>R–CHO</>, alcoholClass: "Primary" },
        { carbonyl: "Ketone", formula: <>R–CO–R′</>, alcoholClass: "Secondary" },
      ]}
    />
  ),

  "content/chemistry/CfseCalculationCard.tsx#CfseCalculationCard": wrap(
    <CfseCalculationCard
      complex={<>{String.raw`[Fe(CN)_6]^{3-}`}</>}
      info={[
        { label: "Configuration", value: "t₂g⁵ eg⁰" },
        { label: "Δ₀", value: "35 000 cm⁻¹" },
      ]}
      steps={[
        { label: "Count d electrons", detail: "Fe³⁺ is d⁵." },
        { label: "Fill orbitals", detail: "Strong field: all five in t₂g." },
        { label: "Apply CFSE", detail: "CFSE = (−0.4 × 5)Δ₀ = −2.0Δ₀." },
      ]}
      resultLabel="CFSE"
      result={<>−2.0 Δ₀</>}
    />
  ),

  "content/chemistry/CftFactorCards.tsx#CftFactorCards": wrap(
    <CftFactorCards
      factors={[
        { factor: "Oxidation state", from: "Fe²⁺", to: "Fe³⁺" },
        { factor: "Ligand field", from: "H₂O", to: "CN⁻" },
        { factor: "Geometry", from: "Octahedral", to: "Tetrahedral" },
      ]}
    />
  ),

  "content/chemistry/CftLimitationCards.tsx#CftLimitationCards": wrap(
    <CftLimitationCards
      limitations={[
        { title: "No covalent character", points: ["Treats metal–ligand bonds as purely electrostatic."] },
        { title: "Cannot explain all colours", points: ["Some spectra need ligand-field mixing."] },
      ]}
    />
  ),

  "content/chemistry/DdTransitionFlow.tsx#DdTransitionFlow": wrap(
    <DdTransitionFlow steps={["Absorption of light", "d–d transition", "Excited state", "Emission"]} />
  ),

  "content/chemistry/EtherClassification.tsx#EtherClassification": wrap(
    <EtherClassification
      kinds={[
        {
          title: "Simple (symmetrical)",
          description: "Both alkyl groups are identical.",
          examples: [{ left: "CH₃", right: "CH₃", name: "Dimethyl ether" }],
        },
        {
          title: "Mixed (unsymmetrical)",
          description: "The two alkyl groups differ.",
          examples: [{ left: "CH₃", right: "C₂H₅", name: "Methyl ethyl ether" }],
        },
      ]}
    />
  ),

  "content/chemistry/GroupedNameTable.tsx#GroupedNameTable": wrap(
    <GroupedNameTable
      groups={[
        {
          label: "Alcohols",
          rows: [
            { structure: <>CH₃CH₂OH</>, common: "Ethyl alcohol", iupac: "Ethanol" },
            { structure: <>CH₃CHOHCH₃</>, common: "Isopropyl alcohol", iupac: "Propan-2-ol" },
          ],
        },
      ]}
    />
  ),

  "content/chemistry/HydroxylFormationCards.tsx#HydroxylFormationCards": wrap(
    <HydroxylFormationCards
      transformations={[
        { label: "Hydration", reactant: "Alkene + H₂O", product: "Alcohol" },
        { label: "Reduction", reactant: "Aldehyde + H₂", product: "Primary alcohol" },
      ]}
    />
  ),

  "content/chemistry/HydroxylGroupClassification.tsx#HydroxylGroupClassification": wrap(
    <HydroxylGroupClassification
      alcoholRows={[
        { classification: "Primary", groups: "1 alkyl group", example: "Ethanol" },
        { classification: "Secondary", groups: "2 alkyl groups", example: "Propan-2-ol" },
        { classification: "Tertiary", groups: "3 alkyl groups", example: "2-Methylpropan-2-ol" },
      ]}
      phenolClasses={[
        { classification: "Monohydric", groups: "One –OH" },
        { classification: "Dihydric", groups: "Two –OH" },
      ]}
    />
  ),

  "content/chemistry/LigandStrengthComparison.tsx#LigandStrengthComparison": wrap(
    <LigandStrengthComparison
      weak={["I⁻", "Br⁻", "Cl⁻", "F⁻", "H₂O"]}
      strong={["NH₃", "en", "NO₂⁻", "CN⁻", "CO"]}
      weakForms={["Weak field", "Small Δ₀"]}
      strongForms={["Strong field", "Large Δ₀"]}
    />
  ),

  "content/chemistry/NamingSystemCards.tsx#NamingSystemCards": wrap(
    <NamingSystemCards
      systems={[
        { label: "Common name", rule: "Name the alkyl groups, then add ether.", example: "Methyl ethyl ether" },
        { label: "IUPAC name", rule: "Alkoxy prefix + parent alkane.", example: "1-Methoxyethane" },
      ]}
    />
  ),

  "content/chemistry/NumberedRuleRows.tsx#NumberedRuleRows": wrap(
    <NumberedRuleRows
      rules={[
        { title: "Longest chain", detail: "Find the longest carbon chain containing –OH." },
        { title: "Numbering", detail: "Number from the end nearer the –OH group." },
        { title: "Suffix", detail: "Replace -e with -ol." },
      ]}
    />
  ),

  "content/chemistry/PhenolParentCard.tsx#PhenolParentCard": wrap(
    <PhenolParentCard name="Phenol" statements={["–OH is attached directly to a benzene ring."]} formula="C₆H₅OH" />
  ),

  "content/chemistry/PhenolPositionComparison.tsx#PhenolPositionComparison": wrap(
    <PhenolPositionComparison
      positions={[
        { prefix: "ortho", name: "2-Methylphenol", locants: "1,2", position: 2 },
        { prefix: "meta", name: "3-Methylphenol", locants: "1,3", position: 3 },
        { prefix: "para", name: "4-Methylphenol", locants: "1,4", position: 4 },
      ]}
    />
  ),

  "content/chemistry/PolyhydricAlcoholCards.tsx#PolyhydricAlcoholCards": wrap(
    <PolyhydricAlcoholCards
      alcohols={[
        { common: "Ethylene glycol", iupac: "Ethane-1,2-diol", hydroxyls: 2, structure: "HO–CH₂–CH₂–OH" },
        { common: "Glycerol", iupac: "Propane-1,2,3-triol", hydroxyls: 3, structure: "HO–CH₂–CHOH–CH₂–OH" },
      ]}
    />
  ),

  "content/chemistry/PolynuclearCarbonylCards.tsx#PolynuclearCarbonylCards": wrap(
    <PolynuclearCarbonylCards
      carbonyls={[
        { formula: "Fe₂(CO)₉", description: "Two iron centres bridged by three CO ligands." },
        { formula: "Co₂(CO)₈", description: "Two cobalt centres with bridging carbonyls." },
      ]}
    />
  ),

  "content/chemistry/ReactionPairCards.tsx#ReactionPairCards": wrap(
    <ReactionPairCards
      title="Alcohols and phenols"
      cards={[
        {
          label: "Acid–base",
          reagent: "NaOH",
          substrate: "Phenol",
          product: "Sodium phenoxide",
          productName: "Sodium phenoxide",
          productMeta: "Water is released",
        },
      ]}
    />
  ),

  "content/chemistry/ReactionPathway.tsx#ReactionPathway": wrap(
    <ReactionPathway
      title="Ethanol to ethanoic acid"
      orientation="vertical"
      nodes={[
        { step: "1", title: "Oxidation", equation: "CH₃CH₂OH → CH₃CHO", outcome: "Aldehyde" },
        { step: "2", title: "Further oxidation", equation: "CH₃CHO → CH₃COOH", outcome: "Acid" },
      ]}
    />
  ),

  "content/chemistry/Sp2HydroxylComparison.tsx#Sp2HydroxylComparison": wrap(
    <Sp2HydroxylComparison
      cases={[
        {
          title: "Phenol",
          structure: "C₆H₅OH",
          caption: "–OH on an sp² carbon",
          definition: "The lone pair participates in the ring, making phenol acidic.",
        },
        {
          title: "Alcohol",
          structure: "R–OH",
          definition: "The –OH is on an sp³ carbon; the alcohol is neutral.",
        },
      ]}
    />
  ),

  "content/chemistry/SpectrochemicalSeries.tsx#SpectrochemicalSeries": wrap(
    <SpectrochemicalSeries ligands={["I⁻", "Br⁻", "Cl⁻", "F⁻", "H₂O", "NH₃", "en", "CN⁻", "CO"]} />
  ),

  "content/chemistry/StabilityFactorCards.tsx#StabilityFactorCards": wrap(
    <StabilityFactorCards
      factors={[
        { factor: "Higher charge", detail: "M³⁺ complexes are more stable than M²⁺." },
        { factor: "Chelation", detail: "Polydentate ligands form more stable complexes." },
      ]}
    />
  ),

  "content/chemistry/StructureFeatureCard.tsx#StructureFeatureCard": wrap(
    <StructureFeatureCard
      title="Functional group"
      definition="The –OH group that defines alcohols and phenols."
      structure="R–OH"
      structureCaption="R = alkyl or aryl"
      legend={[
        { label: "Hydroxyl oxygen", tone: "chemistry" },
        { label: "Hydrogen", tone: "warning" },
      ]}
      note={{ label: "Remember", text: "Phenol has the –OH on a benzene ring." }}
    />
  ),

  "content/chemistry/VbtComplexCard.tsx#VbtComplexCard": wrap(
    <VbtComplexCard
      formula="[Fe(CN)₆]³⁻"
      geometry="Octahedral"
      hybridisation="d²sp³"
      magnetic="Paramagnetic"
      config="t₂g⁵ eg⁰"
      unpaired="1"
      orbitalType="inner orbital"
      notes={["Strong-field cyanide forces pairing.", "One unpaired electron remains."]}
    />
  ),
};
