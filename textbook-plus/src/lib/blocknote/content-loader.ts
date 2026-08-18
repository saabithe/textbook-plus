import type { Block } from "@blocknote/core";
import type { ChapterSection } from "@/types/chapter";

const BLOCKS_MAP: Record<string, { subject: string; loader: () => Promise<unknown> }> = {
  "electric-charges-and-fields": {
    subject: "physics",
    loader: () => import("@/content/physics/electric-charges-and-fields/chapter.json"),
  },
  "electrostatic-potential-and-capacitance": {
    subject: "physics",
    loader: () => import("@/content/physics/electrostatic-potential-and-capacitance/chapter.json"),
  },
};

const SECTIONS_MAP: Record<string, ChapterSection[]> = {
  "electric-charges-and-fields": [
    { id: "electric-charge", title: "1.1 Electric Charge" },
    { id: "conductors-and-insulators", title: "1.2 Conductors and Insulators" },
    { id: "charging-by-induction", title: "1.3 Charging by Induction" },
    { id: "basic-properties-of-electric-charges", title: "1.4 Basic Properties of Electric Charges" },
    { id: "coulombs-law", title: "1.5 Coulomb's Law" },
    { id: "forces-between-multiple-charges", title: "1.6 Forces between Multiple Charges" },
    { id: "electric-field", title: "1.7 Electric Field" },
    { id: "electric-field-lines", title: "1.8 Electric Field Lines" },
    { id: "electric-flux", title: "1.9 Electric Flux" },
    { id: "electric-dipole", title: "1.10 Electric Dipole" },
    { id: "dipole-in-a-uniform-external-field", title: "1.11 Dipole in a Uniform External Field" },
    { id: "continuous-charge-distribution", title: "1.12 Continuous Charge Distribution" },
    { id: "gausss-law", title: "1.13 Gauss's Law" },
    { id: "applications-of-gausss-law", title: "1.14 Applications of Gauss's Law" },
    { id: "examples", title: "Examples" },
    { id: "common-mistakes", title: "Common Mistakes" },
    { id: "summary", title: "Summary" },
    { id: "points-to-ponder", title: "Points to Ponder" },
  ],
  "electrostatic-potential-and-capacitance": [
    { id: "introduction", title: "2.1 Introduction" },
    { id: "electrostatic-potential", title: "2.2 Electrostatic Potential" },
    { id: "potential-due-to-a-point-charge", title: "2.3 Potential Due to a Point Charge" },
    { id: "potential-due-to-an-electric-dipole", title: "2.4 Potential Due to an Electric Dipole" },
    { id: "potential-due-to-a-system-of-charges", title: "2.5 Potential Due to a System of Charges" },
    { id: "equipotential-surfaces", title: "2.6 Equipotential Surfaces" },
    { id: "relation-between-field-and-potential", title: "2.6.1 Relation between Field and Potential" },
    { id: "potential-energy-of-a-system-of-charges", title: "2.7 Potential Energy of a System of Charges" },
    { id: "potential-energy-in-an-external-field", title: "2.8 Potential Energy in an External Field" },
    { id: "electrostatics-of-conductors", title: "2.9 Electrostatics of Conductors" },
    { id: "dielectrics-and-polarisation", title: "2.10 Dielectrics and Polarisation" },
    { id: "capacitors-and-capacitance", title: "2.11 Capacitors and Capacitance" },
    { id: "the-parallel-plate-capacitor", title: "2.12 The Parallel Plate Capacitor" },
    { id: "effect-of-dielectric-on-capacitance", title: "2.13 Effect of Dielectric on Capacitance" },
    { id: "combination-of-capacitors", title: "2.14 Combination of Capacitors" },
    { id: "energy-stored-in-a-capacitor", title: "2.15 Energy Stored in a Capacitor" },
    { id: "worked-examples", title: "Worked Examples" },
    { id: "summary", title: "Summary" },
    { id: "points-to-ponder", title: "Points to Ponder" },
  ],
};

export async function loadChapterBlocks(slug: string): Promise<Block[] | null> {
  const entry = BLOCKS_MAP[slug];
  if (!entry) return null;
  try {
    const mod = await entry.loader();
    return (mod as { default: Block[] }).default;
  } catch {
    return null;
  }
}

export function getSectionsForBlockNoteChapter(slug: string): ChapterSection[] {
  return SECTIONS_MAP[slug] ?? [];
}

export function hasBlockNoteContent(slug: string): boolean {
  return slug in BLOCKS_MAP;
}
