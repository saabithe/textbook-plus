export type ContentBlockType = "paragraph" | "callout" | "keypoint" | "formula" | "example";

export interface ContentBlock {
  type: ContentBlockType;
  title?: string;
  variant?: "note" | "important" | "warning" | "didyouknow";
  content: string;
}

export interface ChapterSection {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

export interface ChapterContent {
  chapterSlug: string;
  sections: ChapterSection[];
}

export const sampleChapters: Record<string, ChapterContent> = {
  "electric-charges-and-fields": {
    chapterSlug: "electric-charges-and-fields",
    sections: [
      {
        id: "electric-charge",
        title: "1.1 Electric Charge",
        blocks: [
          {
            type: "paragraph",
            content:
              "Electric charge is a fundamental property of matter. Just as mass is a property that determines the gravitational force between objects, electric charge determines the electromagnetic force between particles. Every object contains an enormous number of atoms, each consisting of a nucleus (containing protons and neutrons) surrounded by electrons.",
          },
          {
            type: "paragraph",
            content:
              "There are two types of electric charges: positive (+) and negative (−). Protons carry positive charge, while electrons carry negative charge. Neutrons, as their name suggests, are electrically neutral. The charge of a single proton is +1.6 × 10⁻¹⁹ C, and the charge of a single electron is −1.6 × 10⁻¹⁹ C.",
          },
          {
            type: "keypoint",
            title: "Key Takeaway",
            content:
              "Like charges repel, unlike charges attract. The force between charges is governed by Coulomb's Law.",
          },
        ],
      },
      {
        id: "conduction-and-induction",
        title: "1.2 Conduction and Induction",
        blocks: [
          {
            type: "paragraph",
            content:
              "Charges can be transferred from one body to another through direct contact (conduction) or through the influence of a nearby charged body (induction). In conduction, a charged body touches a neutral body and shares some of its charge. In induction, a charged body is brought near a neutral body, causing redistribution of charges without direct contact.",
          },
          {
            type: "callout",
            title: "Important",
            variant: "important",
            content:
              "A glass rod rubbed with silk becomes positively charged, while an ebonite rod rubbed with fur becomes negatively charged. This was one of the earliest observations of electric charge by Benjamin Franklin.",
          },
          {
            type: "paragraph",
            content:
              "When a charged body is brought near an uncharged conductor, the free electrons in the conductor move towards or away from the charged body, depending on whether the body is positive or negative. This redistribution of charge is called electrostatic induction.",
          },
        ],
      },
      {
        id: "coulombs-law",
        title: "1.3 Coulomb's Law",
        blocks: [
          {
            type: "paragraph",
            content:
              "Coulomb's Law describes the force between two point charges. The magnitude of the electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them.",
          },
          {
            type: "formula",
            title: "Coulomb's Law",
            content: "F = k × |q₁ × q₂| / r²",
          },
          {
            type: "paragraph",
            content:
              "where k is Coulomb's constant (k ≈ 8.99 × 10⁹ N·m²/C²), q₁ and q₂ are the magnitudes of the two charges, and r is the distance between them. The force acts along the line joining the two charges.",
          },
          {
            type: "example",
            title: "Example 1",
            content:
              "Two point charges of +2 μC and −3 μC are placed 0.5 m apart. Calculate the force between them.\n\nF = (8.99 × 10⁹) × (2 × 10⁻⁶ × 3 × 10⁻⁶) / (0.5)²\nF = (8.99 × 10⁹ × 6 × 10⁻¹²) / 0.25\nF = 0.216 N (attractive force)",
          },
        ],
      },
      {
        id: "electric-field",
        title: "1.4 Electric Field",
        blocks: [
          {
            type: "paragraph",
            content:
              "The electric field is a vector field that describes the force that would be exerted on a positive test charge at any point in space. The electric field E at a point is defined as the force per unit charge experienced by a small positive test charge placed at that point.",
          },
          {
            type: "formula",
            title: "Electric Field",
            content: "E = F / q = k × Q / r²",
          },
          {
            type: "paragraph",
            content:
              "The electric field due to a point charge Q at a distance r is directed radially outward from Q if Q is positive, and radially inward if Q is negative. The SI unit of electric field is N/C or V/m.",
          },
          {
            type: "callout",
            title: "Note",
            variant: "note",
            content:
              "Electric field lines never cross each other. They start from positive charges and end at negative charges. The density of field lines represents the strength of the field.",
          },
        ],
      },
      {
        id: "electric-flux",
        title: "1.5 Electric Flux",
        blocks: [
          {
            type: "paragraph",
            content:
              "Electric flux is a measure of the number of electric field lines passing through a given surface. For a uniform electric field E and a flat surface of area A, the electric flux is defined as the dot product of the electric field vector and the area vector.",
          },
          {
            type: "formula",
            title: "Electric Flux",
            content: "Φ = E × A × cos(θ)",
          },
          {
            type: "paragraph",
            content:
              "where θ is the angle between the electric field and the normal to the surface. The SI unit of electric flux is N·m²/C or V·m. When the surface is perpendicular to the field (θ = 0°), the flux is maximum. When the surface is parallel to the field (θ = 90°), the flux is zero.",
          },
        ],
      },
      {
        id: "gauss-law",
        title: "1.6 Gauss's Law",
        blocks: [
          {
            type: "paragraph",
            content:
              "Gauss's Law relates the total electric flux through a closed surface to the total charge enclosed by that surface. It states that the net electric flux through any closed surface is equal to the enclosed charge divided by the permittivity of free space.",
          },
          {
            type: "formula",
            title: "Gauss's Law",
            content: "Φ = Q_enclosed / ε₀",
          },
          {
            type: "paragraph",
            content:
              "where ε₀ (permittivity of free space) ≈ 8.854 × 10⁻¹² C²/(N·m²). Gauss's Law is particularly useful for calculating electric fields of symmetric charge distributions such as spheres, cylinders, and infinite planes.",
          },
          {
            type: "keypoint",
            title: "Key Takeaway",
            content:
              "Gauss's Law is equivalent to Coulomb's Law but is often simpler to apply for symmetric charge distributions. The choice of Gaussian surface is critical to simplifying the calculation.",
          },
        ],
      },
    ],
  },
};

export function getChapterContent(slug: string): ChapterContent | undefined {
  return sampleChapters[slug];
}
