export interface Chapter {
  id: string;
  subjectSlug: string;
  number: number;
  title: string;
  slug: string;
  topicCount: number;
}

export const chapters: Record<string, Chapter[]> = {
  physics: [
    { id: "ph-01", subjectSlug: "physics", number: 1, title: "Electric Charges and Fields", slug: "electric-charges-and-fields", topicCount: 18 },
    { id: "ph-02", subjectSlug: "physics", number: 2, title: "Electrostatic Potential and Capacitance", slug: "electrostatic-potential-and-capacitance", topicCount: 21 },
    { id: "ph-03", subjectSlug: "physics", number: 3, title: "Current Electricity", slug: "current-electricity", topicCount: 6 },
    { id: "ph-04", subjectSlug: "physics", number: 4, title: "Moving Charges and Magnetism", slug: "moving-charges-and-magnetism", topicCount: 5 },
    { id: "ph-05", subjectSlug: "physics", number: 5, title: "Magnetism and Matter", slug: "magnetism-and-matter", topicCount: 5 },
    { id: "ph-06", subjectSlug: "physics", number: 6, title: "Electromagnetic Induction", slug: "electromagnetic-induction", topicCount: 5 },
    { id: "ph-07", subjectSlug: "physics", number: 7, title: "Alternating Current", slug: "alternating-current", topicCount: 5 },
    { id: "ph-08", subjectSlug: "physics", number: 8, title: "Electromagnetic Waves", slug: "electromagnetic-waves", topicCount: 4 },
    { id: "ph-09", subjectSlug: "physics", number: 9, title: "Ray Optics and Optical Instruments", slug: "ray-optics-and-optical-instruments", topicCount: 6 },
    { id: "ph-10", subjectSlug: "physics", number: 10, title: "Wave Optics", slug: "wave-optics", topicCount: 5 },
    { id: "ph-11", subjectSlug: "physics", number: 11, title: "Dual Nature of Radiation and Matter", slug: "dual-nature-of-radiation-and-matter", topicCount: 5 },
    { id: "ph-12", subjectSlug: "physics", number: 12, title: "Atoms", slug: "atoms", topicCount: 5 },
    { id: "ph-13", subjectSlug: "physics", number: 13, title: "Nuclei", slug: "nuclei", topicCount: 5 },
    { id: "ph-14", subjectSlug: "physics", number: 14, title: "Semiconductor Electronics: Materials, Devices and Simple Circuits", slug: "semiconductor-electronics", topicCount: 5 },
  ],
  chemistry: [
    { id: "ch-01", subjectSlug: "chemistry", number: 1, title: "Solutions", slug: "solutions", topicCount: 6 },
    { id: "ch-02", subjectSlug: "chemistry", number: 2, title: "Electrochemistry", slug: "electrochemistry", topicCount: 5 },
    { id: "ch-03", subjectSlug: "chemistry", number: 3, title: "Chemical Kinetics", slug: "chemical-kinetics", topicCount: 5 },
    { id: "ch-04", subjectSlug: "chemistry", number: 4, title: "The d- and f-Block Elements", slug: "d-and-f-block-elements", topicCount: 6 },
    { id: "ch-05", subjectSlug: "chemistry", number: 5, title: "Coordination Compounds", slug: "coordination-compounds", topicCount: 5 },
    { id: "ch-06", subjectSlug: "chemistry", number: 6, title: "Haloalkanes and Haloarenes", slug: "haloalkanes-and-haloarenes", topicCount: 5 },
    { id: "ch-07", subjectSlug: "chemistry", number: 7, title: "Alcohols, Phenols and Ethers", slug: "alcohols-phenols-and-ethers", topicCount: 5 },
    { id: "ch-08", subjectSlug: "chemistry", number: 8, title: "Aldehydes, Ketones and Carboxylic Acids", slug: "aldehydes-ketones-and-carboxylic-acids", topicCount: 6 },
    { id: "ch-09", subjectSlug: "chemistry", number: 9, title: "Amines", slug: "amines", topicCount: 4 },
    { id: "ch-10", subjectSlug: "chemistry", number: 10, title: "Biomolecules", slug: "biomolecules", topicCount: 5 },
  ],
  mathematics: [
    { id: "ma-01", subjectSlug: "mathematics", number: 1, title: "Relations and Functions", slug: "relations-and-functions", topicCount: 5 },
    { id: "ma-02", subjectSlug: "mathematics", number: 2, title: "Inverse Trigonometric Functions", slug: "inverse-trigonometric-functions", topicCount: 4 },
    { id: "ma-03", subjectSlug: "mathematics", number: 3, title: "Matrices", slug: "matrices", topicCount: 6 },
    { id: "ma-04", subjectSlug: "mathematics", number: 4, title: "Determinants", slug: "determinants", topicCount: 6 },
    { id: "ma-05", subjectSlug: "mathematics", number: 5, title: "Continuity and Differentiability", slug: "continuity-and-differentiability", topicCount: 7 },
    { id: "ma-06", subjectSlug: "mathematics", number: 6, title: "Application of Derivatives", slug: "application-of-derivatives", topicCount: 6 },
    { id: "ma-07", subjectSlug: "mathematics", number: 7, title: "Integrals", slug: "integrals", topicCount: 7 },
    { id: "ma-08", subjectSlug: "mathematics", number: 8, title: "Application of Integrals", slug: "application-of-integrals", topicCount: 4 },
    { id: "ma-09", subjectSlug: "mathematics", number: 9, title: "Differential Equations", slug: "differential-equations", topicCount: 5 },
    { id: "ma-10", subjectSlug: "mathematics", number: 10, title: "Vector Algebra", slug: "vector-algebra", topicCount: 5 },
    { id: "ma-11", subjectSlug: "mathematics", number: 11, title: "Three Dimensional Geometry", slug: "three-dimensional-geometry", topicCount: 5 },
    { id: "ma-12", subjectSlug: "mathematics", number: 12, title: "Linear Programming", slug: "linear-programming", topicCount: 3 },
    { id: "ma-13", subjectSlug: "mathematics", number: 13, title: "Probability", slug: "probability", topicCount: 5 },
  ],
  biology: [
    { id: "bi-01", subjectSlug: "biology", number: 1, title: "Sexual Reproduction in Flowering Plants", slug: "sexual-reproduction-in-flowering-plants", topicCount: 6 },
    { id: "bi-02", subjectSlug: "biology", number: 2, title: "Human Reproduction", slug: "human-reproduction", topicCount: 6 },
    { id: "bi-03", subjectSlug: "biology", number: 3, title: "Reproductive Health", slug: "reproductive-health", topicCount: 5 },
    { id: "bi-04", subjectSlug: "biology", number: 4, title: "Principles of Inheritance and Variation", slug: "principles-of-inheritance-and-variation", topicCount: 6 },
    { id: "bi-05", subjectSlug: "biology", number: 5, title: "Molecular Basis of Inheritance", slug: "molecular-basis-of-inheritance", topicCount: 7 },
    { id: "bi-06", subjectSlug: "biology", number: 6, title: "Evolution", slug: "evolution", topicCount: 5 },
    { id: "bi-07", subjectSlug: "biology", number: 7, title: "Human Health and Diseases", slug: "human-health-and-diseases", topicCount: 6 },
    { id: "bi-08", subjectSlug: "biology", number: 8, title: "Microbes in Human Welfare", slug: "microbes-in-human-welfare", topicCount: 5 },
    { id: "bi-09", subjectSlug: "biology", number: 9, title: "Biotechnology: Principles and Processes", slug: "biotechnology-principles-and-processes", topicCount: 5 },
    { id: "bi-10", subjectSlug: "biology", number: 10, title: "Biotechnology and its Applications", slug: "biotechnology-and-its-applications", topicCount: 5 },
    { id: "bi-11", subjectSlug: "biology", number: 11, title: "Organisms and Populations", slug: "organisms-and-populations", topicCount: 5 },
    { id: "bi-12", subjectSlug: "biology", number: 12, title: "Ecosystem", slug: "ecosystem", topicCount: 6 },
    { id: "bi-13", subjectSlug: "biology", number: 13, title: "Biodiversity and Conservation", slug: "biodiversity-and-conservation", topicCount: 5 },
  ],
  english: [
    { id: "en-01", subjectSlug: "english", number: 1, title: "The 3Ls of Empowerment", slug: "the-3ls-of-empowerment", topicCount: 4 },
    { id: "en-02", subjectSlug: "english", number: 2, title: "Any Woman", slug: "any-woman", topicCount: 3 },
    { id: "en-03", subjectSlug: "english", number: 3, title: "Matchbox", slug: "matchbox", topicCount: 4 },
    { id: "en-04", subjectSlug: "english", number: 4, title: "Horegallu", slug: "horegallu", topicCount: 4 },
    { id: "en-05", subjectSlug: "english", number: 5, title: "Mending Wall", slug: "mending-wall", topicCount: 3 },
    { id: "en-06", subjectSlug: "english", number: 6, title: "Amigo Brothers", slug: "amigo-brothers", topicCount: 4 },
    { id: "en-07", subjectSlug: "english", number: 7, title: "The Hour of Truth", slug: "the-hour-of-truth", topicCount: 4 },
    { id: "en-08", subjectSlug: "english", number: 8, title: "A Three Wheel Solution", slug: "a-three-wheel-solution", topicCount: 4 },
    { id: "en-09", subjectSlug: "english", number: 9, title: "Dhyan Chand", slug: "dhyan-chand", topicCount: 4 },
    { id: "en-10", subjectSlug: "english", number: 10, title: "Stammer", slug: "stammer", topicCount: 3 },
    { id: "en-11", subjectSlug: "english", number: 11, title: "When a Sapling is Planted", slug: "when-a-sapling-is-planted", topicCount: 4 },
    { id: "en-12", subjectSlug: "english", number: 12, title: "Rice", slug: "rice", topicCount: 3 },
    { id: "en-13", subjectSlug: "english", number: 13, title: "Dangers of Drug Abuse", slug: "dangers-of-drug-abuse", topicCount: 4 },
    { id: "en-14", subjectSlug: "english", number: 14, title: "Post Early for Christmas", slug: "post-early-for-christmas", topicCount: 4 },
  ],
  arabic: [
    { id: "ar-01", subjectSlug: "arabic", number: 1, title: "Khairullah", slug: "khairullah", topicCount: 4 },
    { id: "ar-02", subjectSlug: "arabic", number: 2, title: "Abqariyyun min Abna'i Kerala", slug: "abqariyyun-min-abna'i-kerala", topicCount: 4 },
    { id: "ar-03", subjectSlug: "arabic", number: 3, title: "Kerala... Wa Ni'amullahi allatee la Tuhsa", slug: "kerala-wa-ni'amullahi", topicCount: 4 },
    { id: "ar-04", subjectSlug: "arabic", number: 4, title: "Naamu wa la Tastaiqidhoo", slug: "naamu-wa-la-tastaiqidhoo", topicCount: 4 },
    { id: "ar-05", subjectSlug: "arabic", number: 5, title: "Shurtiyyul Muroor", slug: "shurtiyyul-muroor", topicCount: 4 },
    { id: "ar-06", subjectSlug: "arabic", number: 6, title: "Keemiya'us Sa'adah", slug: "keemiya'us-sa'adah", topicCount: 4 },
    { id: "ar-07", subjectSlug: "arabic", number: 7, title: "Lughatud Dhaad", slug: "lughatud-dhaad", topicCount: 4 },
    { id: "ar-08", subjectSlug: "arabic", number: 8, title: "La Talumnee", slug: "la-talumnee", topicCount: 4 },
    { id: "ar-09", subjectSlug: "arabic", number: 9, title: "La'ali'u Lughawiyyah", slug: "la'ali'u-lughawiyyah", topicCount: 4 },
    { id: "ar-10", subjectSlug: "arabic", number: 10, title: "Hal Anti Waheedah", slug: "hal-anti-waheedah", topicCount: 4 },
    { id: "ar-11", subjectSlug: "arabic", number: 11, title: "La Taqtuloo Anfusakum", slug: "la-taqtuloo-anfusakum", topicCount: 4 },
    { id: "ar-12", subjectSlug: "arabic", number: 12, title: "Wasiyyatun minal Vadood", slug: "wasiyyatun-minal-vadood", topicCount: 4 },
  ],
};

export function getChaptersBySubject(subjectSlug: string): Chapter[] {
  return chapters[subjectSlug] ?? [];
}

export function getChapterBySlug(
  subjectSlug: string,
  chapterSlug: string
): Chapter | undefined {
  return chapters[subjectSlug]?.find((c) => c.slug === chapterSlug);
}

export function getAllChapters(): Chapter[] {
  return Object.values(chapters).flat();
}

export function getChapterBySlugFromAll(slug: string): Chapter | undefined {
  return getAllChapters().find((c) => c.slug === slug);
}

export function getAdjacentChapters(chapter: Chapter): {
  prev: Chapter | null;
  next: Chapter | null;
} {
  const subjectChapters = getChaptersBySubject(chapter.subjectSlug);
  const index = subjectChapters.findIndex((c) => c.id === chapter.id);
  return {
    prev: index > 0 ? subjectChapters[index - 1] : null,
    next: index < subjectChapters.length - 1 ? subjectChapters[index + 1] : null,
  };
}
