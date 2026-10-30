export interface Chapter {
  id: string;
  subjectSlug: string;
  /** Chapter number within its unit. */
  number: number;
  title: string;
  /** Native-script title (Arabic subject). Rendered as the chapter heading. */
  titleArabic?: string;
  slug: string;
  /** Unit number — set for subjects organised into units (Arabic). */
  unit?: number;
  /** Author / orator (Arabic subject). */
  author?: string;
  /** Author / orator in Arabic script. */
  authorArabic?: string;
  /** Genre / lesson type (Arabic subject). */
  genre?: string;
  /** Genre / lesson type in Arabic script. */
  genreArabic?: string;
  /** Extra facts about the author — shown inside the collapsed card dropdown. */
  authorDetails?: AuthorDetail[];
}

export interface AuthorDetail {
  /** Label in English, e.g. "Birthplace". */
  label: string;
  /** Label in Arabic script. */
  labelArabic?: string;
  /** Value in English, e.g. "Kadavathoor, Kannur District". */
  value: string;
  /** Value in Arabic script. */
  valueArabic?: string;
}

export interface SubjectUnit {
  unit: number;
  label: string;
  /** Native-script unit name (Arabic subject). */
  labelArabic?: string;
  /** English gloss of the unit name. */
  labelEnglish?: string;
}

/**
 * Units per subject. Only subjects whose syllabus is split into units
 * (Arabic) list them here; other subjects fall back to a flat chapter list.
 */
export const subjectUnits: Record<string, SubjectUnit[]> = {
  arabic: [
    { unit: 1, label: "Unit 1", labelArabic: "لغة الله في بلد الله", labelEnglish: "God's Language in God's Country" },
    { unit: 2, label: "Unit 2", labelArabic: "إلى السعادة", labelEnglish: "Towards Happiness" },
    { unit: 3, label: "Unit 3", labelArabic: "حلاوة العربية", labelEnglish: "The Sweetness of Arabic" },
    { unit: 4, label: "Unit 4", labelArabic: "إلى شاطئ الأماني", labelEnglish: "To the Shore of Hopes" },
    { unit: 5, label: "Unit 5", labelArabic: "نافذة إلى الفرص", labelEnglish: "Window to Opportunities" },
  ],
};

export const chapters: Record<string, Chapter[]> = {
  physics: [
    { id: "ph-01", subjectSlug: "physics", number: 1, title: "Electric Charges and Fields", slug: "electric-charges-and-fields", },
    { id: "ph-02", subjectSlug: "physics", number: 2, title: "Electrostatic Potential and Capacitance", slug: "electrostatic-potential-and-capacitance", },
    { id: "ph-03", subjectSlug: "physics", number: 3, title: "Current Electricity", slug: "current-electricity", },
    { id: "ph-04", subjectSlug: "physics", number: 4, title: "Moving Charges and Magnetism", slug: "moving-charges-and-magnetism", },
    { id: "ph-05", subjectSlug: "physics", number: 5, title: "Magnetism and Matter", slug: "magnetism-and-matter", },
    { id: "ph-06", subjectSlug: "physics", number: 6, title: "Electromagnetic Induction", slug: "electromagnetic-induction", },
    { id: "ph-07", subjectSlug: "physics", number: 7, title: "Alternating Current", slug: "alternating-current", },
    { id: "ph-08", subjectSlug: "physics", number: 8, title: "Electromagnetic Waves", slug: "electromagnetic-waves", },
    { id: "ph-09", subjectSlug: "physics", number: 9, title: "Ray Optics and Optical Instruments", slug: "ray-optics-and-optical-instruments", },
    { id: "ph-10", subjectSlug: "physics", number: 10, title: "Wave Optics", slug: "wave-optics", },
    { id: "ph-11", subjectSlug: "physics", number: 11, title: "Dual Nature of Radiation and Matter", slug: "dual-nature-of-radiation-and-matter", },
    { id: "ph-12", subjectSlug: "physics", number: 12, title: "Atoms", slug: "atoms", },
    { id: "ph-13", subjectSlug: "physics", number: 13, title: "Nuclei", slug: "nuclei", },
    { id: "ph-14", subjectSlug: "physics", number: 14, title: "Semiconductor Electronics: Materials, Devices and Simple Circuits", slug: "semiconductor-electronics", },
  ],
  chemistry: [
    { id: "ch-01", subjectSlug: "chemistry", number: 1, title: "Solutions", slug: "solutions", },
    { id: "ch-02", subjectSlug: "chemistry", number: 2, title: "Electrochemistry", slug: "electrochemistry", },
    { id: "ch-03", subjectSlug: "chemistry", number: 3, title: "Chemical Kinetics", slug: "chemical-kinetics", },
    { id: "ch-04", subjectSlug: "chemistry", number: 4, title: "The d- and f-Block Elements", slug: "d-and-f-block-elements", },
    { id: "ch-05", subjectSlug: "chemistry", number: 5, title: "Coordination Compounds", slug: "coordination-compounds", },
    { id: "ch-06", subjectSlug: "chemistry", number: 6, title: "Haloalkanes and Haloarenes", slug: "haloalkanes-and-haloarenes", },
    { id: "ch-07", subjectSlug: "chemistry", number: 7, title: "Alcohols, Phenols and Ethers", slug: "alcohols-phenols-and-ethers", },
    { id: "ch-08", subjectSlug: "chemistry", number: 8, title: "Aldehydes, Ketones and Carboxylic Acids", slug: "aldehydes-ketones-and-carboxylic-acids", },
    { id: "ch-09", subjectSlug: "chemistry", number: 9, title: "Amines", slug: "amines", },
    { id: "ch-10", subjectSlug: "chemistry", number: 10, title: "Biomolecules", slug: "biomolecules", },
  ],
  mathematics: [
    { id: "ma-01", subjectSlug: "mathematics", number: 1, title: "Relations and Functions", slug: "relations-and-functions", },
    { id: "ma-02", subjectSlug: "mathematics", number: 2, title: "Inverse Trigonometric Functions", slug: "inverse-trigonometric-functions", },
    { id: "ma-03", subjectSlug: "mathematics", number: 3, title: "Matrices", slug: "matrices", },
    { id: "ma-04", subjectSlug: "mathematics", number: 4, title: "Determinants", slug: "determinants", },
    { id: "ma-05", subjectSlug: "mathematics", number: 5, title: "Continuity and Differentiability", slug: "continuity-and-differentiability", },
    { id: "ma-06", subjectSlug: "mathematics", number: 6, title: "Application of Derivatives", slug: "application-of-derivatives", },
    { id: "ma-07", subjectSlug: "mathematics", number: 7, title: "Integrals", slug: "integrals", },
    { id: "ma-08", subjectSlug: "mathematics", number: 8, title: "Application of Integrals", slug: "application-of-integrals", },
    { id: "ma-09", subjectSlug: "mathematics", number: 9, title: "Differential Equations", slug: "differential-equations", },
    { id: "ma-10", subjectSlug: "mathematics", number: 10, title: "Vector Algebra", slug: "vector-algebra", },
    { id: "ma-11", subjectSlug: "mathematics", number: 11, title: "Three Dimensional Geometry", slug: "three-dimensional-geometry", },
    { id: "ma-12", subjectSlug: "mathematics", number: 12, title: "Linear Programming", slug: "linear-programming", },
    { id: "ma-13", subjectSlug: "mathematics", number: 13, title: "Probability", slug: "probability", },
  ],
  biology: [
    { id: "bi-01", subjectSlug: "biology", number: 1, title: "Sexual Reproduction in Flowering Plants", slug: "sexual-reproduction-in-flowering-plants", },
    { id: "bi-02", subjectSlug: "biology", number: 2, title: "Human Reproduction", slug: "human-reproduction", },
    { id: "bi-03", subjectSlug: "biology", number: 3, title: "Reproductive Health", slug: "reproductive-health", },
    { id: "bi-04", subjectSlug: "biology", number: 4, title: "Principles of Inheritance and Variation", slug: "principles-of-inheritance-and-variation", },
    { id: "bi-05", subjectSlug: "biology", number: 5, title: "Molecular Basis of Inheritance", slug: "molecular-basis-of-inheritance", },
    { id: "bi-06", subjectSlug: "biology", number: 6, title: "Evolution", slug: "evolution", },
    { id: "bi-07", subjectSlug: "biology", number: 7, title: "Human Health and Diseases", slug: "human-health-and-diseases", },
    { id: "bi-08", subjectSlug: "biology", number: 8, title: "Microbes in Human Welfare", slug: "microbes-in-human-welfare", },
    { id: "bi-09", subjectSlug: "biology", number: 9, title: "Biotechnology: Principles and Processes", slug: "biotechnology-principles-and-processes", },
    { id: "bi-10", subjectSlug: "biology", number: 10, title: "Biotechnology and its Applications", slug: "biotechnology-and-its-applications", },
    { id: "bi-11", subjectSlug: "biology", number: 11, title: "Organisms and Populations", slug: "organisms-and-populations", },
    { id: "bi-12", subjectSlug: "biology", number: 12, title: "Ecosystem", slug: "ecosystem", },
    { id: "bi-13", subjectSlug: "biology", number: 13, title: "Biodiversity and Conservation", slug: "biodiversity-and-conservation", },
  ],
  english: [
    { id: "en-01", subjectSlug: "english", number: 1, title: "The 3Ls of Empowerment", slug: "the-3ls-of-empowerment", },
    { id: "en-02", subjectSlug: "english", number: 2, title: "Any Woman", slug: "any-woman", },
    { id: "en-03", subjectSlug: "english", number: 3, title: "Matchbox", slug: "matchbox", },
    { id: "en-04", subjectSlug: "english", number: 4, title: "Horegallu", slug: "horegallu", },
    { id: "en-05", subjectSlug: "english", number: 5, title: "Mending Wall", slug: "mending-wall", },
    { id: "en-06", subjectSlug: "english", number: 6, title: "Amigo Brothers", slug: "amigo-brothers", },
    { id: "en-07", subjectSlug: "english", number: 7, title: "The Hour of Truth", slug: "the-hour-of-truth", },
    { id: "en-08", subjectSlug: "english", number: 8, title: "A Three Wheel Solution", slug: "a-three-wheel-solution", },
    { id: "en-09", subjectSlug: "english", number: 9, title: "Didi", slug: "dhyan-chand", },
    { id: "en-10", subjectSlug: "english", number: 10, title: "Stammer", slug: "stammer", },
    { id: "en-11", subjectSlug: "english", number: 11, title: "When a Sapling is Planted", slug: "when-a-sapling-is-planted", },
    { id: "en-12", subjectSlug: "english", number: 12, title: "Rice", slug: "rice", },
    { id: "en-13", subjectSlug: "english", number: 13, title: "Dangers of Drug Abuse", slug: "dangers-of-drug-abuse", },
    { id: "en-14", subjectSlug: "english", number: 14, title: "Post Early for Christmas", slug: "post-early-for-christmas", },
    { id: "en-15", subjectSlug: "english", number: 15, title: "This Is Going to Hurt Just a Little Bit", slug: "this-is-going-to-hurt", },
    { id: "en-16", subjectSlug: "english", number: 16, title: "Crime and Punishment", slug: "crime-and-punishment", },
  ],
  arabic: [
    { id: "ar-01", subjectSlug: "arabic", unit: 1, number: 1, title: "Khairullah", titleArabic: "خير الله", slug: "khairullah", 
      author: "N. K. Ahmed Moulavi", authorArabic: "ن. ك. أَحْمَدُ الْمَوْلَوِي", genre: "Descriptive Poem", genreArabic: "مَنْظُومٌ",
      authorDetails: [
        { label: "Birthplace", labelArabic: "مكان الميلاد", value: "Kadavathoor, Kannur District", valueArabic: "كَدَوَتُور بِمُقاطَعَةِ كَنُور" },
      ] },
    { id: "ar-02", subjectSlug: "arabic", unit: 1, number: 2, title: "Abqariyyun min Abna'i Kerala", titleArabic: "عبقريّ من أبناء كيرالا", slug: "abqariyyun-min-abna'i-kerala", 
      author: "Dr. Muhyiddin Al-Alwaye", authorArabic: "د. محي الدين الآلوائي", genre: "Biographical Essay", genreArabic: "سِيرة ذاتية" },
    { id: "ar-03", subjectSlug: "arabic", unit: 1, number: 3, title: "Kerala... Wa Ni'amullahi allatee la Tuhsa", titleArabic: "كيرالا ... ونعم الله التي لاتحصى", slug: "kerala-wa-ni'amullahi", 
      author: "Abu Al-Yazi", authorArabic: "أبو اليازي", genre: "Travelogue", genreArabic: "أدب الرحلة" },
    { id: "ar-04", subjectSlug: "arabic", unit: 2, number: 1, title: "Naamu wa la Tastaiqidhoo", titleArabic: "ناموا ولا تستيقظوا", slug: "naamu-wa-la-tastaiqidhoo", 
      author: "Ma'ruf Al-Rasafi", authorArabic: "معروف الرصافي", genre: "Satirical / Political Poem", genreArabic: "مَنْظُوم" },
    { id: "ar-05", subjectSlug: "arabic", unit: 2, number: 2, title: "Shurtiyyul Muroor", titleArabic: "شرطي المرور", slug: "shurtiyyul-muroor", 
      author: "Mahmud Taymur", authorArabic: "محمود تيمور", genre: "Short Story", genreArabic: "قِصَّة قَصِيرَة" },
    { id: "ar-06", subjectSlug: "arabic", unit: 2, number: 3, title: "Keemiya'us Sa'adah", titleArabic: "كيمياء السعادة", slug: "keemiya'us-sa'adah", 
      author: "Curriculum Text", genre: "Motivational / Self-Development Article", genreArabic: "مَقَالَة إِرْشَادِيَّة" },
    { id: "ar-07", subjectSlug: "arabic", unit: 3, number: 1, title: "Lughatud Dhaad", titleArabic: "لغة الضاد", slug: "lughatud-dhaad", 
      author: "Curriculum Text", genre: "Informative / Language Essay", genreArabic: "مَقَالَة" },
    { id: "ar-08", subjectSlug: "arabic", unit: 3, number: 2, title: "La Talumnee", titleArabic: "لا تلمني", slug: "la-talumnee", 
      author: "Halim Dammus", authorArabic: "حليم دمّوس", genre: "Lyrical Poem", genreArabic: "مَنْظُوم" },
    { id: "ar-09", subjectSlug: "arabic", unit: 3, number: 3, title: "La'ali'u Lughawiyyah", titleArabic: "لآلئ لغويّة", slug: "la'ali'u-lughawiyyah", 
      author: "Traditional Heritage Texts", genre: "Proverbs, Maxims & Parables", genreArabic: "حِكَمٌ وَأَمْثال" },
    { id: "ar-10", subjectSlug: "arabic", unit: 4, number: 1, title: "Hal Anti Waheedah", titleArabic: "هل أنتِ وحيدة...؟", slug: "hal-anti-waheedah", 
      author: "Umm Salamah", authorArabic: "أم سلمة", genre: "Historical / Islamic Narrative", genreArabic: "قِصَّة تَارِيخِيَّة" },
    { id: "ar-11", subjectSlug: "arabic", unit: 4, number: 2, title: "La Taqtuloo Anfusakum", titleArabic: "لا تقتلوا أنفسكم", slug: "la-taqtuloo-anfusakum", 
      author: "Curriculum Text & Prophetic Hadith", genre: "Awareness & Social Guidance Article", genreArabic: "مَقَالَة تَوْعَوِيَّة" },
    { id: "ar-12", subjectSlug: "arabic", unit: 4, number: 3, title: "Wasiyyatun minal Vadood", titleArabic: "وصيّة من الودود", slug: "wasiyyatun-minal-vadood", 
      author: "Divine Revelation (Surah Al-An'am)", genre: "Qur'anic Precepts & Preachment", genreArabic: "نَصٌّ قُرْآنِي" },
    { id: "ar-13", subjectSlug: "arabic", unit: 5, number: 1, title: "Ayna al-Mafarr...?", titleArabic: "أين المَفَرُّ ؟", slug: "ayna-al-mafarr", 
      author: "Tariq ibn Ziyad", authorArabic: "طارق بن زياد", genre: "Historical Oration", genreArabic: "خُطْبَة تَارِيخِيَّة" },
    { id: "ar-14", subjectSlug: "arabic", unit: 5, number: 2, title: "Akhbar al-Yawm", titleArabic: "أخبار اليوم", slug: "akhbar-al-yawm", 
      author: "Media / Journalistic Feature (Al-Watan)", genre: "News Report & Feature Article", genreArabic: "تقرير إخباري" },
  ],
};

export function getChaptersBySubject(subjectSlug: string): Chapter[] {
  return chapters[subjectSlug] ?? [];
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
