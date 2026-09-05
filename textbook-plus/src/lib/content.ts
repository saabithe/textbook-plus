import type { ChapterSection, Question, Flashcard } from "@/types/chapter";

const SECTIONS_MAP: Record<string, ChapterSection[]> = {
  "horegallu": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "character-sketch-ratna", title: "Character Sketch: Ratna", tab: "discourses" },
    { id: "character-sketch-grandfather", title: "Character Sketch: Grandfather", tab: "discourses" },
    { id: "character-comparison", title: "Character Comparison", tab: "discourses" },
    {
      id: "symbolism-themes", title: "Symbolism & Themes", tab: "read", children: [
        { id: "the-burden", title: "The Symbolism of Burden" },
        { id: "power-of-listening", title: "The Power of Listening" },
        { id: "human-horegallus", title: "Human Horegallus" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "mending-wall": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "the-poem", title: "The Poem", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "wall-debate", title: "The Wall Debate", tab: "discourses" },
    {
      id: "poetic-devices", title: "Poetic Devices", tab: "discourses", children: [
        { id: "device-personification", title: "Personification" },
        { id: "device-simile", title: "Simile" },
        { id: "device-metaphor", title: "Metaphor" },
        { id: "device-irony", title: "Irony" },
        { id: "device-apostrophe", title: "Apostrophe" },
        { id: "device-epigram", title: "Epigram" },
        { id: "device-enjambment", title: "Enjambment" },
        { id: "device-assonance", title: "Assonance" },
        { id: "device-symbolism", title: "Symbolism" },
        { id: "device-blank-verse", title: "Blank Verse" },
      ],
    },
    { id: "theme", title: "Theme", tab: "read" },
    { id: "appreciation", title: "Poem Appreciation", tab: "discourses" },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
  ],
  "amigo-brothers": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "character-sketch-antonio", title: "Character Sketch: Antonio Cruz", tab: "discourses" },
    { id: "character-sketch-felix", title: "Character Sketch: Felix Vargas", tab: "discourses" },
    { id: "character-comparison", title: "Character Comparison", tab: "discourses" },
    {
      id: "themes", title: "Themes", tab: "read", children: [
        { id: "friendship-vs-ambition", title: "Friendship vs. Ambition" },
        { id: "the-rising-wall", title: "The Rising Wall" },
        { id: "brotherhood-above-victory", title: "Brotherhood Above Victory" },
        { id: "courage-and-sportsmanship", title: "Courage and Sportsmanship" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "the-3ls-of-empowerment": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    {
      id: "the-three-ls", title: "The 3 Ls", tab: "discourses", children: [
        { id: "learning", title: "Learning" },
        { id: "labour", title: "Labour" },
        { id: "leadership", title: "Leadership" },
      ],
    },
    {
      id: "themes", title: "Themes", tab: "read", children: [
        { id: "economic-inequality", title: "Economic Inequality" },
        { id: "confidence-gap", title: "The Confidence Gap" },
        { id: "dare-the-difference", title: "Dare the Difference" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "any-woman": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "the-poem", title: "The Poem", tab: "read" },
    {
      id: "poetic-devices", title: "Poetic Devices", tab: "discourses", children: [
        { id: "device-metaphor", title: "Metaphor" },
        { id: "device-anaphora", title: "Anaphora" },
        { id: "device-rhyme", title: "Rhyme Scheme" },
        { id: "device-allusion", title: "Biblical Allusion" },
      ],
    },
    {
      id: "appreciation", title: "Poem Appreciation", tab: "discourses", children: [
        { id: "app-introduction", title: "Introduction" },
        { id: "app-summary-theme", title: "Summary and Theme" },
        { id: "app-devices", title: "Poetic Devices and Style" },
        { id: "app-critical", title: "Critical Comment" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "matchbox": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "character-sketch-nomita", title: "Character Sketch: Nomita", tab: "discourses" },
    { id: "character-sketch-ajit", title: "Character Sketch: Ajit", tab: "discourses" },
    { id: "character-sketch-mother", title: "Character Sketch: Nomita's Mother", tab: "discourses" },
    {
      id: "symbolism-themes", title: "Symbolism & Themes", tab: "read", children: [
        { id: "matchbox-symbol", title: "The Matchbox" },
        { id: "the-letter", title: "The Letter" },
        { id: "forest-of-people", title: "Forest of People" },
        { id: "burning-sari", title: "The Burning Sari" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "the-hour-of-truth": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "character-sketch-robert", title: "Character Sketch: Robert Baldwin", tab: "discourses" },
    { id: "character-sketch-john", title: "Character Sketch: John Baldwin", tab: "discourses" },
    { id: "character-sketch-martha", title: "Character Sketch: Martha Baldwin", tab: "discourses" },
    { id: "character-sketch-evie", title: "Character Sketch: Evie Baldwin", tab: "discourses" },
    { id: "character-comparison", title: "Character Comparison", tab: "discourses" },
    {
      id: "themes", title: "Themes", tab: "read", children: [
        { id: "truth-vs-loyalty", title: "Truth vs. Loyalty" },
        { id: "price-of-integrity", title: "The Price of Integrity" },
        { id: "family-pressure", title: "Family Pressure and Moral Weakness" },
        { id: "nature-of-justice", title: "The Nature of Justice" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "a-three-wheel-solution": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "early-entrepreneurship", title: "Early Entrepreneurship", tab: "discourses" },
    {
      id: "sammaan-model", title: "The SammaaN Model", tab: "discourses", children: [
        { id: "operation-model", title: "Operation Model" },
        { id: "revenue-model", title: "Revenue Model" },
      ],
    },
    { id: "social-entrepreneurship", title: "Social Entrepreneurship", tab: "discourses" },
    {
      id: "themes", title: "Themes", tab: "read", children: [
        { id: "youth-empowerment", title: "Youth as Change-Makers" },
        { id: "dignity-of-labour", title: "Dignity of Labour" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
  ],
  "dhyan-chand": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "awakening", title: "Awakening to Inequity", tab: "discourses" },
    { id: "the-beginning", title: "From Xavier's to the Slums", tab: "discourses" },
    { id: "building-akanksha", title: "Building Akanksha", tab: "discourses" },
    {
      id: "themes", title: "Themes", tab: "read", children: [
        { id: "purpose-and-identity", title: "Purpose and Identity" },
        { id: "seeing-inequity", title: "Seeing Inequity" },
        { id: "small-beginnings", title: "Small Beginnings, Big Impact" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
  ],
  "stammer": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "the-poem", title: "The Poem", tab: "read" },
    {
      id: "poetic-devices", title: "Poetic Devices", tab: "discourses", children: [
        { id: "device-metaphor", title: "Metaphor" },
        { id: "device-repetition", title: "Repetition" },
        { id: "device-parallelism", title: "Parallelism" },
      ],
    },
    { id: "appreciation", title: "Poem Appreciation", tab: "discourses" },
    {
      id: "themes", title: "Themes", tab: "read", children: [
        { id: "language-and-meaning", title: "Language and Meaning" },
        { id: "imperfection-as-universal", title: "Imperfection as Universal" },
        { id: "poetry-itself", title: "Poetry as Stammer" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "when-a-sapling-is-planted": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "green-belt-movement", title: "The Green Belt Movement", tab: "discourses" },
    {
      id: "environment-democracy-peace", title: "Environment, Democracy, and Peace", tab: "discourses", children: [
        { id: "environment-democracy", title: "Environment and Democracy" },
        { id: "trees-as-peace", title: "Trees as Peace Symbols" },
      ],
    },
    {
      id: "themes", title: "Themes", tab: "read", children: [
        { id: "environmental-justice", title: "Environmental Justice" },
        { id: "collective-action", title: "Collective Action" },
        { id: "interconnectedness", title: "Interconnectedness" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "rice": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "the-poem", title: "The Poem", tab: "read" },
    {
      id: "poetic-devices", title: "Poetic Devices", tab: "discourses", children: [
        { id: "device-imagery", title: "Imagery" },
        { id: "device-satire", title: "Satire" },
        { id: "device-contrast", title: "Contrast" },
      ],
    },
    { id: "appreciation", title: "Poem Appreciation", tab: "discourses" },
    {
      id: "themes", title: "Themes", tab: "read", children: [
        { id: "loss-of-identity", title: "Loss of Agricultural Identity" },
        { id: "satire-on-governance", title: "Satire on Governance" },
        { id: "education-irrelevance", title: "Education and Irrelevance" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "dangers-of-drug-abuse": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "medicines-vs-sensual-drugs", title: "Medicines vs. Sensual Drugs", tab: "discourses" },
    { id: "effects-on-the-brain", title: "Effects on the Brain", tab: "discourses" },
    { id: "health-consequences", title: "Health Consequences", tab: "discourses" },
    {
      id: "themes", title: "Themes", tab: "read", children: [
        { id: "artificial-vs-natural", title: "Artificial vs. Natural Pleasure" },
        { id: "loss-of-agency", title: "Loss of Agency" },
        { id: "invisible-damage", title: "Invisible Damage" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "post-early-for-christmas": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "character-sketch-assistant", title: "Character Sketch: The Assistant", tab: "discourses" },
    {
      id: "the-comedy-of-errors", title: "The Comedy of Errors", tab: "discourses", children: [
        { id: "deaf-gentleman", title: "The Deaf Old Gentleman" },
        { id: "fussy-old-lady", title: "The Fussy Old Lady" },
        { id: "bertie", title: "Bertie and His Mother" },
      ],
    },
    {
      id: "themes", title: "Themes", tab: "read", children: [
        { id: "miscommunication", title: "Miscommunication" },
        { id: "panic-and-crowd", title: "Panic and Crowd Psychology" },
        { id: "everyday-absurdity", title: "Everyday Absurdity" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "this-is-going-to-hurt": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "the-poem", title: "The Poem", tab: "read" },
    {
      id: "poetic-devices", title: "Poetic Devices", tab: "discourses", children: [
        { id: "device-hyperbole", title: "Hyperbole" },
        { id: "device-humor", title: "Humor and Wordplay" },
        { id: "device-vicious-circle", title: "The Vicious Circle" },
      ],
    },
    { id: "appreciation", title: "Poem Appreciation", tab: "discourses" },
    {
      id: "themes", title: "Themes", tab: "read", children: [
        { id: "universal-anxiety", title: "Universal Anxiety" },
        { id: "loss-of-control", title: "Loss of Control" },
        { id: "vicious-cycles", title: "Vicious Cycles" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "crime-and-punishment": [
    { id: "author", title: "Author", tab: "read" },
    { id: "introduction", title: "Introduction", tab: "read" },
    { id: "summary", title: "Summary", tab: "read" },
    { id: "character-sketch-teacher", title: "Character Sketch: The Teacher", tab: "discourses" },
    { id: "character-sketch-boy", title: "Character Sketch: The Boy", tab: "discourses" },
    { id: "character-comparison", title: "Character Comparison", tab: "discourses" },
    {
      id: "themes", title: "Themes", tab: "read", children: [
        { id: "power-reversal", title: "Power Reversal" },
        { id: "modern-parenting", title: "Modern Parenting" },
        { id: "education-system", title: "The Education System" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway", tab: "read" },
    { id: "read-and-respond", title: "Read & Respond", tab: "read" },
  ],
  "magnetism-and-matter": [
    { id: "h-5-1", title: "5.1 Introduction" },
    {
      id: "h-5-2", title: "5.2 The Bar Magnet", children: [
        { id: "h-5-2-1", title: "5.2.1 The Magnetic Field Lines" },
        { id: "h-5-2-2", title: "5.2.2 Bar Magnet as Equivalent Solenoid" },
        { id: "h-5-2-3", title: "5.2.3 The Dipole in a Uniform Magnetic Field" },
        { id: "h-5-2-4", title: "5.2.4 The Electrostatic Analog" },
      ],
    },
    { id: "h-5-3", title: "5.3 Magnetism and Gauss's Law" },
    { id: "h-5-4", title: "5.4 Magnetisation and Magnetic Intensity" },
    { id: "h-5-5", title: "5.5 Magnetic Properties of Materials" },
    {
      id: "h-5-board", title: "Board PYQs — Magnetism and Matter", children: [
        { id: "h-5-board-identification", title: "Relative Permeability & Identification" },
        { id: "h-5-board-numerical", title: "Numerical: χ → µr" },
        { id: "h-5-board-gauss", title: "Gauss's Law in Magnetism" },
        { id: "h-5-board-energy", title: "Susceptibility Sign & Potential Energy" },
        { id: "h-5-board-curie", title: "Curie Temperature" },
        { id: "h-5-board-misc", title: "Units & Behaviour in Non-uniform Field" },
        { id: "h-5-board-mcqs", title: "Practice MCQs — Dia / Para / Ferro" },
      ],
    },
    { id: "h-5-examples", title: "Worked Examples" },
  ],
  "molecular-basis-of-inheritance": [
    { id: "h-5-1", title: "5.1 The DNA", children: [
      { id: "h-5-1-1", title: "5.1.1 Structure of Polynucleotide Chain" },
      { id: "h-5-1-2", title: "5.1.2 Packaging of DNA Helix" },
    ]},
    { id: "h-5-2", title: "5.2 The Search for Genetic Material", children: [
      { id: "h-5-2-transforming", title: "Transforming Principle — Griffith" },
      { id: "h-5-2-avery", title: "Biochemical Characterisation — Avery et al." },
      { id: "h-5-2-1", title: "5.2.1 The Genetic Material is DNA" },
      { id: "h-5-2-2", title: "5.2.2 Properties of Genetic Material" },
    ]},
    { id: "h-5-3", title: "5.3 RNA World" },
    { id: "h-5-4", title: "5.4 Replication", children: [
      { id: "h-5-4-1", title: "5.4.1 The Experimental Proof" },
      { id: "h-5-4-2", title: "5.4.2 The Machinery and the Enzymes" },
    ]},
    { id: "h-5-5", title: "5.5 Transcription", children: [
      { id: "h-5-5-1", title: "5.5.1 Transcription Unit" },
      { id: "h-5-5-2", title: "5.5.2 Transcription Unit and the Gene" },
      { id: "h-5-5-3", title: "5.5.3 Types of RNA and Transcription" },
    ]},
    { id: "h-5-6", title: "5.6 Genetic Code", children: [
      { id: "h-5-6-1", title: "5.6.1 Mutations and Genetic Code" },
      { id: "h-5-6-2", title: "5.6.2 tRNA– the Adapter Molecule" },
    ]},
    { id: "h-5-7", title: "5.7 Translation" },
    { id: "h-5-8", title: "5.8 Regulation of Gene Expression", children: [
      { id: "h-5-8-1", title: "5.8.1 The Lac operon" },
    ]},
    { id: "h-5-9", title: "5.9 Human Genome Project", children: [
      { id: "h-5-9-goals", title: "Goals of HGP" },
      { id: "h-5-9-method", title: "Methodologies" },
      { id: "h-5-9-1", title: "5.9.1 Salient Features" },
      { id: "h-5-9-2", title: "5.9.2 Applications and Challenges" },
    ]},
    { id: "h-5-10", title: "5.10 DNA Fingerprinting" },
    { id: "h-5-11", title: "5.11 Key Scientists of This Chapter" },
  ],
  "electric-charges-and-fields": [
    { id: "h-1-1", title: "1.1 Introduction" },
    { id: "h-1-2", title: "1.2 Electric Charge" },
    { id: "h-1-3", title: "1.3 Conductors and Insulators" },
    {
      id: "h-1-4", title: "1.4 Basic Properties of Electric Charges", children: [
        { id: "h-1-4-1", title: "1.4.1 Additivity of Charges" },
        { id: "h-1-4-2", title: "1.4.2 Charge is Conserved" },
        { id: "h-1-4-3", title: "1.4.3 Quantisation of Charge" },
      ],
    },
    {
      id: "h-1-5", title: "1.5 Coulomb's Law", children: [
        { id: "h-1-5-1", title: "1.5.1 Scalar Form" },
        { id: "h-1-5-2", title: "1.5.2 Force in a Medium" },
      ],
    },
    { id: "h-1-6", title: "1.6 Forces between Multiple Charges" },
    {
      id: "h-1-7", title: "1.7 Electric Field", children: [
        { id: "h-1-7-1", title: "1.7.1 Electric Field due to a System of Charges" },
        { id: "h-1-7-2", title: "1.7.2 Physical Significance of Electric Field" },
      ],
    },
    { id: "h-1-8", title: "1.8 Electric Field Lines" },
    { id: "h-1-9", title: "1.9 Electric Flux" },
    {
      id: "h-1-10", title: "1.10 Electric Dipole", children: [
        { id: "h-1-10-1", title: "1.10.1 The Field of an Electric Dipole" },
        { id: "h-1-10-2", title: "1.10.2 Physical Significance of Dipoles" },
      ],
    },
    { id: "h-1-11", title: "1.11 Dipole in a Uniform External Field" },
    { id: "h-1-12", title: "1.12 Continuous Charge Distribution" },
    { id: "h-1-13", title: "1.13 Gauss's Law" },
    {
      id: "h-1-14", title: "1.14 Applications of Gauss's Law", children: [
        { id: "h-1-14-1", title: "1.14.1 Infinitely Long Straight Uniformly Charged Wire" },
        { id: "h-1-14-2", title: "1.14.2 Uniformly Charged Infinite Plane Sheet" },
        { id: "h-1-14-3", title: "1.14.3 Uniformly Charged Thin Spherical Shell" },
      ],
    },
    { id: "h-1-examples", title: "Worked Examples" },
    { id: "h-1-summary", title: "Summary" },
    { id: "h-1-ponder", title: "Points to Ponder" },
  ],
  "c11/maths/sets": [
    { id: "h-intro", title: "1.1 Introduction" },
    {
      id: "h-1-2", title: "1.2 Sets and their Representations", children: [
        { id: "h-1-2-1", title: "Methods of Representing a Set" },
      ],
    },
    {
      id: "h-types", title: "Types of Sets", children: [
        { id: "h-1-3", title: "1.3 The Empty Set" },
        { id: "h-1-4", title: "1.4 Finite and Infinite Sets" },
        { id: "h-1-5", title: "1.5 Equal Sets" },
      ],
    },
    {
      id: "h-1-6", title: "1.6 Subsets", children: [
        { id: "h-1-6-1", title: "1.6.1 Subsets of Set of Real Numbers" },
        { id: "h-1-6-2", title: "1.6.2 Intervals as Subsets of R" },
      ],
    },
    { id: "h-1-7", title: "1.7 Venn Diagrams" },
    {
      id: "h-1-8", title: "1.8 Operations on Sets", children: [
        { id: "h-1-8-1", title: "1.8.1 Union of Sets" },
        { id: "h-1-8-2", title: "1.8.2 Intersection of Sets" },
        { id: "h-1-8-3", title: "1.8.3 Difference of Sets" },
      ],
    },
    { id: "h-1-9", title: "1.9 Complement of a Set" },
    { id: "h-misc", title: "Miscellaneous Examples" },
  ],
  "c11/maths/relations-and-functions": [
    { id: "h-intro", title: "2.1 Introduction" },
    {
      id: "h-2-2", title: "2.2 Cartesian Products of Sets", children: [
        { id: "h-2-2-1", title: "Properties of Cartesian Products" },
      ],
    },
    { id: "h-2-3", title: "2.3 Relations" },
    {
      id: "h-2-4", title: "2.4 Functions", children: [
        { id: "h-2-4-1", title: "2.4.1 Some Functions and Their Graphs" },
        { id: "h-2-4-2", title: "2.4.2 Algebra of Real Functions" },
      ],
    },
    { id: "h-misc", title: "Miscellaneous Examples" },
  ],
  "c11/maths/trigonometric-functions": [
    { id: "h-intro", title: "3.1 Introduction" },
    { id: "h-3-2", title: "3.2 Angles" },
    {
      id: "h-3-3", title: "3.3 Trigonometric Functions", children: [
        { id: "h-3-3-1", title: "3.3.1 Sign of Trigonometric Functions" },
        { id: "h-3-3-2", title: "3.3.2 Domain and Range of Trigonometric Functions" },
      ],
    },
    { id: "h-3-4", title: "3.4 Trigonometric Functions of Sum and Difference of Two Angles" },
    { id: "h-misc", title: "Miscellaneous Exercise on Chapter 3" },
  ],
  "c11/maths/complex-numbers-and-quadratic-equations": [
    { id: "h-intro", title: "4.1 Introduction" },
    { id: "h-4-2", title: "4.2 Complex Numbers" },
    {
      id: "h-4-3", title: "4.3 Algebra of Complex Numbers", children: [
        { id: "h-4-3-1", title: "4.3.1 Addition of two complex numbers" },
        { id: "h-4-3-2", title: "4.3.2 Difference of two complex numbers" },
        { id: "h-4-3-3", title: "4.3.3 Multiplication of two complex numbers" },
        { id: "h-4-3-4", title: "4.3.4 Division of two complex numbers" },
        { id: "h-4-3-5", title: "4.3.5 Power of i" },
        { id: "h-4-3-6", title: "4.3.6 Square roots of a negative real number" },
        { id: "h-4-3-7", title: "4.3.7 Identities" },
      ],
    },
    { id: "h-4-4", title: "4.4 Modulus and Conjugate" },
    { id: "h-4-5", title: "4.5 Argand Plane" },
    { id: "h-misc", title: "Miscellaneous Examples" },
  ],
  "c11/maths/linear-inequalities": [
    { id: "h-intro", title: "5.1 Introduction" },
    { id: "h-5-2", title: "5.2 Inequalities" },
    { id: "h-5-3", title: "5.3 Algebraic Solutions in One Variable" },
    { id: "h-misc", title: "Miscellaneous Examples & System of Inequalities" },
  ],
  "c11/maths/permutations-and-combinations": [
    { id: "h-intro", title: "6.1 Introduction" },
    { id: "h-fpc", title: "6.2 Fundamental Principle of Counting" },
    { id: "h-permutations", title: "6.3 Permutations" },
    { id: "h-factorial", title: "6.3.2 Factorial Notation" },
    { id: "h-npr", title: "6.3.3 Permutations of Distinct Objects (nPr)" },
    { id: "h-repeated", title: "6.3.4 Permutations with Repeated Objects" },
    { id: "h-combinations", title: "6.4 Combinations" },
  ],
  "c11/maths/binomial-theorem": [
    { id: "h-intro", title: "7.1 Introduction" },
    { id: "h-pascal", title: "Pascal's Triangle" },
    { id: "h-theorem", title: "7.2 Binomial Theorem" },
    { id: "h-special", title: "Special Cases" },
    { id: "h-coeff-sums", title: "Sum of Binomial Coefficients" },
  ],
  "c11/maths/sequences-and-series": [
    { id: "h-intro", title: "8.1 Introduction" },
    { id: "h-sequences", title: "8.2 Sequences" },
    { id: "h-series", title: "8.3 Series" },
    { id: "h-gp", title: "8.4 Geometric Progression (G.P.)" },
    { id: "h-gp-general", title: "General Term of a G.P." },
    { id: "h-gp-sum", title: "Sum to n Terms of a G.P." },
    { id: "h-sum-special", title: "Sum of Special Series" },
    { id: "h-gm", title: "Geometric Mean (G.M.)" },
    { id: "h-am-gm", title: "8.5 Relationship Between A.M. and G.M." },
  ],
  "c11/maths/straight-lines": [
    { id: "h-intro", title: "9.1 Introduction" },
    { id: "h-slope", title: "9.2 Slope of a Line" },
    { id: "h-forms", title: "9.3 Various Forms of Equation of a Line" },
    { id: "h-distance", title: "9.4 Distance of a Point from a Line" },
  ],
  "c11/maths/limits-and-derivatives": [
    { id: "h-intro", title: "12.1 Introduction" },
    { id: "h-limits", title: "Limits" },
    { id: "h-trig-limits", title: "Limits of Trigonometric Functions" },
    { id: "h-derivatives", title: "12.5 Derivatives" },
  ],
  "c11/maths/probability": [
    { id: "h-intro", title: "14.1 Introduction" },
    { id: "h-events", title: "14.1 Events" },
    { id: "h-algebra", title: "14.1.3 Algebra of Events" },
    { id: "h-axioms", title: "14.2 Axiomatic Approach" },
    { id: "h-addition", title: "14.2.3 Addition Rule" },
  ],
  "c11/maths/introduction-to-three-dimensional-geometry": [
    { id: "h-intro", title: "11.1 Introduction" },
    { id: "h-axes", title: "11.2 Coordinate Axes and Coordinate Planes" },
    { id: "h-coordinates", title: "11.3 Coordinates of a Point in Space" },
    { id: "h-distance", title: "11.4 Distance between Two Points" },
    { id: "h-misc", title: "Miscellaneous Examples" },
  ],
  "c11/maths/statistics": [
    { id: "h-intro", title: "13.1 Introduction" },
    { id: "h-mean-deviation", title: "13.2 Mean Deviation" },
    { id: "h-variance", title: "13.3 Variance and Standard Deviation" },
    { id: "h-formula-map", title: "13.4 Formula Map — Which Formula to Use When?" },
  ],
  "c11/physics/units-and-measurements": [
    { id: "h-intro", title: "1.1 Introduction" },
    { id: "h-1-2", title: "1.2 The International System of Units" },
    {
      id: "h-sig-figs", title: "1.3 Significant Figures", children: [
        { id: "h-sig-count", title: "Rules for Counting" },
        { id: "h-sig-arithmetic", title: "1.3.1 Arithmetic Operations" },
        { id: "h-sig-rounding", title: "1.3.2 Rounding off Uncertain Digits" },
        { id: "h-sig-uncertainty", title: "1.3.3 Uncertainties in Arithmetic" },
      ],
    },
    { id: "h-1-4", title: "1.4 Dimensions of Physical Quantities" },
    { id: "h-1-5", title: "1.5 Dimensional Formulae and Equations" },
    {
      id: "h-1-6", title: "1.6 Dimensional Analysis and its Applications", children: [
        { id: "h-1-6-1", title: "1.6.1 Checking Dimensional Consistency" },
        { id: "h-1-6-2", title: "1.6.2 Deducing Relations" },
      ],
    },
    { id: "h-exercises", title: "Exercises 1.1 – 1.17" },
    { id: "h-revision", title: "Quick Revision" },
  ],
  "c11/physics/motion-in-a-straight-line": [
    { id: "h-intro", title: "2.1 Introduction" },
    { id: "h-2-2", title: "2.2 Instantaneous Velocity and Speed" },
    { id: "h-2-3", title: "2.3 Acceleration" },
    { id: "h-2-4", title: "2.4 Kinematic Equations for Uniformly Accelerated Motion" },
    { id: "h-exercises", title: "Exercises 2.1 – 2.18" },
    { id: "h-revision", title: "Quick Revision" },
  ],
  "c11/physics/motion-in-a-plane": [
    { id: "h-intro", title: "3.1 Introduction" },
    { id: "h-scalars-vectors", title: "3.2 Scalars and Vectors" },
    { id: "h-multiplication", title: "3.3 Multiplication of Vectors by Real Numbers" },
    { id: "h-addition", title: "3.4 Addition and Subtraction of Vectors — Graphical Method" },
    { id: "h-resolution", title: "3.5 Resolution of Vectors" },
    { id: "h-analytical", title: "3.6 Vector Addition — Analytical Method" },
    { id: "h-motion-plane", title: "3.7 Motion in a Plane" },
    { id: "h-constant-accel", title: "3.8 Motion in a Plane with Constant Acceleration" },
    { id: "h-projectile", title: "3.9 Projectile Motion" },
    { id: "h-circular", title: "3.10 Uniform Circular Motion" },
    { id: "h-exercises", title: "Exercises 3.1 – 3.22" },
    { id: "h-revision", title: "Quick Revision" },
  ],
  "c11/physics/laws-of-motion": [
    { id: "h-intro", title: "4.1 Introduction" },
    { id: "h-aristotle", title: "4.2 Aristotle's Fallacy" },
    { id: "h-inertia", title: "4.3 The Law of Inertia" },
    { id: "h-first", title: "4.4 Newton's First Law of Motion" },
    { id: "h-second", title: "4.5 Newton's Second Law of Motion" },
    { id: "h-third", title: "4.6 Newton's Third Law of Motion" },
    { id: "h-momentum", title: "4.7 Conservation of Momentum" },
    { id: "h-equilibrium", title: "4.8 Equilibrium of a Particle" },
    { id: "h-forces", title: "4.9 Common Forces in Mechanics" },
    { id: "h-friction", title: "4.9.1 Friction" },
    { id: "h-circular", title: "4.10 Circular Motion" },
    { id: "h-solving", title: "4.11 Solving Problems in Mechanics" },
    { id: "h-exercises", title: "Exercises 4.1 – 4.23" },
    { id: "h-revision", title: "Quick Revision" },
  ],
  "c11/physics/work-energy-and-power": [
    { id: "h-intro", title: "5.1 Introduction" },
    { id: "h-scalar", title: "5.1.1 The Scalar Product" },
    { id: "h-we", title: "5.2 Notions of Work and Kinetic Energy" },
    { id: "h-work", title: "5.3 Work" },
    { id: "h-kinetic", title: "5.4 Kinetic Energy" },
    { id: "h-variable", title: "5.5 Work Done by a Variable Force" },
    { id: "h-we-variable", title: "5.6 The Work-Energy Theorem for a Variable Force" },
    { id: "h-potential", title: "5.7 The Concept of Potential Energy" },
    { id: "h-conservation", title: "5.8 The Conservation of Mechanical Energy" },
    { id: "h-spring", title: "5.9 The Potential Energy of a Spring" },
    { id: "h-power", title: "5.10 Power" },
    { id: "h-collisions", title: "5.11 Collisions" },
    { id: "h-exercises", title: "Exercises 5.1 – 5.23" },
    { id: "h-revision", title: "Quick Revision" },
  ],
  "c11/physics/system-of-particles-and-rotational-motion": [
    { id: "h-intro", title: "6.1 Introduction" },
    { id: "h-com", title: "6.2 Centre of Mass" },
    { id: "h-com-motion", title: "6.3 Motion of the Centre of Mass" },
    { id: "h-p-system", title: "6.4 Linear Momentum of a System of Particles" },
    { id: "h-vector-product", title: "6.5 Vector Product of Two Vectors" },
    { id: "h-angular-velocity", title: "6.6 Angular Velocity and Its Relation with Linear Velocity" },
    { id: "h-torque", title: "6.7 Torque and Angular Momentum" },
    { id: "h-equilibrium", title: "6.8 Equilibrium of a Rigid Body" },
    { id: "h-moment-inertia", title: "6.9 Moment of Inertia" },
    { id: "h-angular-kinematics", title: "6.10 Kinematics of Rotational Motion about a Fixed Axis" },
    { id: "h-dynamics", title: "6.11 Dynamics of Rotational Motion about a Fixed Axis" },
    { id: "h-fixed-axis-angular", title: "6.12 Angular Momentum in Case of Rotation about a Fixed Axis" },
    { id: "h-exercises", title: "Exercises 6.1 – 6.17" },
    { id: "h-revision", title: "Quick Revision" },
  ],
  "c11/physics/gravitation": [
    { id: "h-intro", title: "7.1 Introduction" },
    { id: "h-kepler", title: "7.2 Kepler's Laws" },
    { id: "h-universal-law", title: "7.3 Universal Law of Gravitation" },
    { id: "h-g-constant", title: "7.4 The Gravitational Constant" },
    { id: "h-g-earth", title: "7.5 Acceleration due to Gravity of the Earth" },
    { id: "h-g-below-above", title: "7.6 g below and above the Surface of the Earth" },
    { id: "h-potential-energy", title: "7.7 Gravitational Potential Energy" },
    { id: "h-escape", title: "7.8 Escape Speed" },
    { id: "h-satellites", title: "7.9 Earth Satellites" },
    { id: "h-satellite-energy", title: "7.10 Energy of an Orbiting Satellite" },
    { id: "h-exercises", title: "Exercises 7.1 – 7.21" },
    { id: "h-revision", title: "Quick Revision" },
  ],
  "c11/physics/mechanical-properties-of-solids": [
    { id: "h-intro", title: "8.1 Introduction" },
    { id: "h-stress-strain", title: "8.2 Stress and Strain" },
    { id: "h-hookes-law", title: "8.3 Hooke's Law" },
    { id: "h-ss-curve", title: "8.4 Stress-Strain Curve" },
    {
      id: "h-elastic-moduli", title: "8.5 Elastic Moduli", children: [
        { id: "h-young", title: "8.5.1 Young's Modulus" },
        { id: "h-shear", title: "8.5.2 Shear Modulus" },
        { id: "h-bulk", title: "8.5.3 Bulk Modulus" },
        { id: "h-poisson", title: "8.5.4 Poisson's Ratio" },
        { id: "h-penergy", title: "8.5.5 Elastic Potential Energy" },
      ],
    },
    { id: "h-applications", title: "8.6 Applications of Elastic Behaviour" },
    { id: "h-exercises", title: "Exercises 8.1 – 8.16" },
    { id: "h-revision", title: "Quick Revision" },
  ],
  "c11/physics/mechanical-properties-of-fluids": [
    { id: "h-intro", title: "9.1 Introduction" },
    {
      id: "h-pressure", title: "9.2 Pressure", children: [
        { id: "h-pascals-law", title: "9.2.1 Pascal's Law" },
        { id: "h-depth", title: "9.2.2 Variation of Pressure with Depth" },
        { id: "h-atmosphere", title: "9.2.3 Atmospheric Pressure and Gauge Pressure" },
        { id: "h-hydraulic", title: "9.2.4 Hydraulic Machines" },
      ],
    },
    { id: "h-streamline", title: "9.3 Streamline Flow" },
    {
      id: "h-bernoulli", title: "9.4 Bernoulli's Principle", children: [
        { id: "h-efflux", title: "9.4.1 Speed of Efflux: Torricelli's Law" },
        { id: "h-lift", title: "9.4.2 Dynamic Lift" },
      ],
    },
    {
      id: "h-viscosity", title: "9.5 Viscosity", children: [
        { id: "h-stokes", title: "9.5.1 Stokes' Law" },
      ],
    },
    {
      id: "h-surface-tension", title: "9.6 Surface Tension", children: [
        { id: "h-surface-energy", title: "9.6.1 Surface Energy" },
        { id: "h-st-surface-energy", title: "9.6.2 Surface Energy and Surface Tension" },
        { id: "h-contact-angle", title: "9.6.3 Angle of Contact" },
        { id: "h-drops-bubbles", title: "9.6.4 Drops and Bubbles" },
        { id: "h-capillary", title: "9.6.5 Capillary Rise" },
      ],
    },
    { id: "h-exercises", title: "Exercises 9.1 – 9.20" },
    { id: "h-revision", title: "Quick Revision" },
  ],
  "c11/physics/thermal-properties-of-matter": [
    { id: "h-intro", title: "10.1 Introduction" },
    { id: "h-temp-heat", title: "10.2 Temperature and Heat" },
    { id: "h-measurement", title: "10.3 Measurement of Temperature" },
    { id: "h-ideal-gas", title: "10.4 Ideal-Gas Equation and Absolute Temperature" },
    {
      id: "h-expansion", title: "10.5 Thermal Expansion", children: [
        { id: "h-linear-expansion", title: "10.5.1 Linear Expansion" },
        { id: "h-volume-expansion", title: "10.5.2 Volume Expansion" },
        { id: "h-alpha-relation", title: "10.5.3 Relation between α_V and α_l" },
        { id: "h-thermal-stress", title: "10.5.4 Thermal Stress" },
      ],
    },
    { id: "h-specific-heat", title: "10.6 Specific Heat Capacity" },
    { id: "h-calorimetry", title: "10.7 Calorimetry" },
    {
      id: "h-change-of-state", title: "10.8 Change of State", children: [
        { id: "h-melting", title: "10.8.1 Melting and Freezing" },
        { id: "h-boiling", title: "10.8.2 Boiling Point" },
        { id: "h-sublimation", title: "10.8.3 Sublimation" },
        { id: "h-triple-point", title: "10.8.4 Triple Point" },
        { id: "h-latent-heat", title: "10.8.5 Latent Heat" },
      ],
    },
    {
      id: "h-heat-transfer", title: "10.9 Heat Transfer", children: [
        { id: "h-conduction", title: "10.9.1 Conduction" },
        { id: "h-convection", title: "10.9.2 Convection" },
        { id: "h-radiation", title: "10.9.3 Radiation" },
        { id: "h-blackbody", title: "10.9.4 Blackbody Radiation" },
      ],
    },
    { id: "h-newton-cooling", title: "10.10 Newton's Law of Cooling" },
    { id: "h-exercises", title: "Exercises 10.1 – 10.20" },
    { id: "h-revision", title: "Quick Revision" },
  ],
  "c11/physics/thermodynamics": [
    { id: "h-intro", title: "11.1 Introduction" },
    { id: "h-thermal-equilibrium", title: "11.2 Thermal Equilibrium" },
    { id: "h-zeroth-law", title: "11.3 Zeroth Law of Thermodynamics" },
    { id: "h-heat-internal-work", title: "11.4 Heat, Internal Energy and Work" },
    { id: "h-first-law", title: "11.5 First Law of Thermodynamics" },
    { id: "h-specific-heat", title: "11.6 Specific Heat Capacity" },
    { id: "h-state-vars", title: "11.7 Thermodynamic State Variables and Equation of State" },
    {
      id: "h-processes", title: "11.8 Thermodynamic Processes", children: [
        { id: "h-quasi-static", title: "11.8.1 Quasi-static Process" },
        { id: "h-isothermal", title: "11.8.2 Isothermal Process" },
        { id: "h-adiabatic", title: "11.8.3 Adiabatic Process" },
        { id: "h-isochoric", title: "11.8.4 Isochoric Process" },
        { id: "h-isobaric", title: "11.8.5 Isobaric Process" },
        { id: "h-cyclic", title: "11.8.6 Cyclic Process" },
      ],
    },
    { id: "h-second-law", title: "11.9 Second Law of Thermodynamics" },
    { id: "h-reversible", title: "11.10 Reversible and Irreversible Processes" },
    { id: "h-carnot", title: "11.11 Carnot Engine" },
    { id: "h-exercises", title: "Exercises 11.1 – 11.8" },
    { id: "h-revision", title: "Quick Revision" },
  ],
  "c11/physics/kinetic-theory": [
    { id: "k-intro", title: "12.1 Introduction" },
    { id: "k-mols", title: "12.2 Molecular Nature of Matter" },
    { id: "k-gas", title: "12.3 Behaviour of Gases" },
    {
      id: "k-models", title: "12.4 Kinetic Theory of an Ideal Gas", children: [
        { id: "k-pressure", title: "12.4.1 Pressure of an Ideal Gas" },
        { id: "k-temp", title: "12.4.2 Kinetic Interpretation of Temperature" },
      ],
    },
    { id: "k-equip", title: "12.5 Law of Equipartition of Energy" },
    {
      id: "k-spec", title: "12.6 Specific Heat Capacity", children: [
        { id: "k-spec-mono", title: "12.6.1 Monatomic Gases" },
        { id: "k-spec-di", title: "12.6.2 Diatomic Gases" },
        { id: "k-spec-poly", title: "12.6.3 Polyatomic Gases" },
        { id: "k-spec-solid", title: "12.6.4 Specific Heat Capacity of Solids" },
      ],
    },
    { id: "k-mfp", title: "12.7 Mean Free Path" },
    { id: "k-examples", title: "Worked Examples" },
    { id: "k-exercises", title: "Exercises 12.1 – 12.10" },
    { id: "k-revision", title: "Quick Revision" },
  ],
  "c11/physics/oscillations": [
    { id: "o-intro", title: "13.1 Introduction" },
    { id: "o-periodic", title: "13.2 Periodic and Oscillatory Motions" },
    { id: "o-freq", title: "13.2.1 Period and Frequency" },
    { id: "o-displacement", title: "13.2.2 Displacement" },
    { id: "o-shm", title: "13.3 Simple Harmonic Motion" },
    { id: "o-circular", title: "13.4 SHM and Uniform Circular Motion" },
    { id: "o-velocity", title: "13.5 Velocity and Acceleration in SHM" },
    { id: "o-force", title: "13.6 Force Law for SHM" },
    { id: "o-energy", title: "13.7 Energy in SHM" },
    { id: "o-pendulum", title: "13.8 The Simple Pendulum" },
    { id: "o-examples", title: "Worked Examples" },
    { id: "o-exercises", title: "Exercises 13.1 – 13.18" },
    { id: "o-revision", title: "Quick Revision" },
  ],
  "c11/physics/waves": [
    { id: "w-intro", title: "14.1 Introduction" },
    { id: "w-types", title: "14.2 Transverse and Longitudinal Waves" },
    {
      id: "w-displacement", title: "14.3 Displacement Relation in a Progressive Wave", children: [
        { id: "w-amp", title: "14.3.1 Amplitude and Phase" },
        { id: "w-wavelength", title: "14.3.2 Wavelength and Angular Wave Number" },
        { id: "w-period", title: "14.3.3 Period, Angular Frequency and Frequency" },
      ],
    },
    {
      id: "w-speed", title: "14.4 The Speed of a Travelling Wave", children: [
        { id: "w-speed-string", title: "14.4.1 Speed of a Transverse Wave on a Stretched String" },
        { id: "w-speed-sound", title: "14.4.2 Speed of a Longitudinal Wave (Speed of Sound)" },
      ],
    },
    { id: "w-superposition", title: "14.5 The Principle of Superposition of Waves" },
    {
      id: "w-reflection", title: "14.6 Reflection of Waves", children: [
        { id: "w-standing", title: "14.6.1 Standing Waves and Normal Modes" },
      ],
    },
    { id: "w-beats", title: "14.7 Beats" },
    { id: "w-examples", title: "Worked Examples" },
    { id: "w-exercises", title: "Exercises 14.1 – 14.19" },
    { id: "w-revision", title: "Quick Revision" },
  ],
};

// Practice data is lazy-loaded per chapter so visiting one chapter doesn't
// download every chapter's questions/flashcards. Keys are static (sync
// hasQuestions/hasFlashcards); data arrives via dynamic import.
const QUESTION_KEYS = new Set([
  "magnetism-and-matter",
  "electric-charges-and-fields",
  "c11/maths/sets",
  "c11/maths/relations-and-functions",
  "c11/maths/trigonometric-functions",
  "c11/maths/complex-numbers-and-quadratic-equations",
  "c11/maths/linear-inequalities",
  "c11/maths/permutations-and-combinations",
  "c11/maths/binomial-theorem",
  "c11/maths/sequences-and-series",
  "c11/maths/straight-lines",
  "c11/maths/limits-and-derivatives",
  "c11/maths/probability",
  "c11/maths/introduction-to-three-dimensional-geometry",
  "c11/maths/statistics",
  "c11/physics/units-and-measurements",
  "c11/physics/motion-in-a-straight-line",
  "c11/physics/motion-in-a-plane",
  "c11/physics/laws-of-motion",
  "c11/physics/work-energy-and-power",
  "c11/physics/system-of-particles-and-rotational-motion",
  "c11/physics/gravitation",
  "c11/physics/mechanical-properties-of-solids",
  "c11/physics/mechanical-properties-of-fluids",
  "c11/physics/thermal-properties-of-matter",
  "c11/physics/thermodynamics",
  "c11/physics/kinetic-theory",
  "c11/physics/oscillations",
  "c11/physics/waves",
]);

const FLASHCARD_KEYS = new Set(QUESTION_KEYS);

const questionLoaders: Record<string, () => Promise<Question[]>> = {
  "magnetism-and-matter": () =>
    import("@/content/physics/magnetism-and-matter/questions.json").then((m) => m.default as Question[]),
  "electric-charges-and-fields": () =>
    import("@/content/physics/electric-charges-and-fields/questions.json").then((m) => m.default as Question[]),
  "c11/maths/sets": () =>
    import("@/content/maths/sets/questions.json").then((m) => m.default as Question[]),
  "c11/maths/relations-and-functions": () =>
    import("@/content/maths/relations-and-functions/questions.json").then((m) => m.default as Question[]),
  "c11/maths/trigonometric-functions": () =>
    import("@/content/maths/trigonometric-functions/questions.json").then((m) => m.default as Question[]),
  "c11/maths/complex-numbers-and-quadratic-equations": () =>
    import("@/content/maths/complex-numbers-and-quadratic-equations/questions.json").then((m) => m.default as Question[]),
  "c11/maths/linear-inequalities": () =>
    import("@/content/maths/linear-inequalities/questions.json").then((m) => m.default as Question[]),
  "c11/maths/permutations-and-combinations": () =>
    import("@/content/maths/permutations-and-combinations/questions.json").then((m) => m.default as Question[]),
  "c11/maths/binomial-theorem": () =>
    import("@/content/maths/binomial-theorem/questions.json").then((m) => m.default as Question[]),
  "c11/maths/sequences-and-series": () =>
    import("@/content/maths/sequences-and-series/questions.json").then((m) => m.default as Question[]),
  "c11/maths/straight-lines": () =>
    import("@/content/maths/straight-lines/questions.json").then((m) => m.default as Question[]),
  "c11/maths/probability": () =>
    import("@/content/maths/probability/questions.json").then((m) => m.default as Question[]),
  "c11/maths/limits-and-derivatives": () =>
    import("@/content/maths/limits-and-derivatives/questions.json").then((m) => m.default as Question[]),
  "c11/maths/statistics": () =>
    import("@/content/maths/statistics/questions.json").then((m) => m.default as Question[]),
  "c11/physics/units-and-measurements": () =>
    import("@/content/physics/units-and-measurements/questions.json").then((m) => m.default as Question[]),
  "c11/physics/motion-in-a-straight-line": () =>
    import("@/content/physics/motion-in-a-straight-line/questions.json").then((m) => m.default as Question[]),
  "c11/physics/motion-in-a-plane": () =>
    import("@/content/physics/motion-in-a-plane/questions.json").then((m) => m.default as Question[]),
  "c11/physics/laws-of-motion": () =>
    import("@/content/physics/laws-of-motion/questions.json").then((m) => m.default as Question[]),
  "c11/physics/work-energy-and-power": () =>
    import("@/content/physics/work-energy-and-power/questions.json").then((m) => m.default as Question[]),
  "c11/physics/system-of-particles-and-rotational-motion": () =>
    import("@/content/physics/system-of-particles-and-rotational-motion/questions.json").then((m) => m.default as Question[]),
  "c11/physics/gravitation": () =>
    import("@/content/physics/gravitation/questions.json").then((m) => m.default as Question[]),
  "c11/physics/mechanical-properties-of-solids": () =>
    import("@/content/physics/mechanical-properties-of-solids/questions.json").then((m) => m.default as Question[]),
  "c11/physics/mechanical-properties-of-fluids": () =>
    import("@/content/physics/mechanical-properties-of-fluids/questions.json").then((m) => m.default as Question[]),
  "c11/physics/thermal-properties-of-matter": () =>
    import("@/content/physics/thermal-properties-of-matter/questions.json").then((m) => m.default as Question[]),
  "c11/physics/thermodynamics": () =>
    import("@/content/physics/thermodynamics/questions.json").then((m) => m.default as Question[]),
  "c11/physics/kinetic-theory": () =>
    import("@/content/physics/kinetic-theory/questions.json").then((m) => m.default as Question[]),
  "c11/physics/oscillations": () =>
    import("@/content/physics/oscillations/questions.json").then((m) => m.default as Question[]),
  "c11/physics/waves": () =>
    import("@/content/physics/waves/questions.json").then((m) => m.default as Question[]),
};

const flashcardLoaders: Record<string, () => Promise<Flashcard[]>> = {
  "magnetism-and-matter": () =>
    import("@/content/physics/magnetism-and-matter/flashcards.json").then((m) => m.default as Flashcard[]),
  "electric-charges-and-fields": () =>
    import("@/content/physics/electric-charges-and-fields/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/sets": () =>
    import("@/content/maths/sets/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/relations-and-functions": () =>
    import("@/content/maths/relations-and-functions/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/trigonometric-functions": () =>
    import("@/content/maths/trigonometric-functions/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/complex-numbers-and-quadratic-equations": () =>
    import("@/content/maths/complex-numbers-and-quadratic-equations/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/linear-inequalities": () =>
    import("@/content/maths/linear-inequalities/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/permutations-and-combinations": () =>
    import("@/content/maths/permutations-and-combinations/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/binomial-theorem": () =>
    import("@/content/maths/binomial-theorem/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/sequences-and-series": () =>
    import("@/content/maths/sequences-and-series/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/straight-lines": () =>
    import("@/content/maths/straight-lines/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/introduction-to-three-dimensional-geometry": () =>
    import("@/content/maths/introduction-to-three-dimensional-geometry/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/limits-and-derivatives": () =>
    import("@/content/maths/limits-and-derivatives/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/statistics": () =>
    import("@/content/maths/statistics/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/units-and-measurements": () =>
    import("@/content/physics/units-and-measurements/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/motion-in-a-straight-line": () =>
    import("@/content/physics/motion-in-a-straight-line/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/motion-in-a-plane": () =>
    import("@/content/physics/motion-in-a-plane/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/laws-of-motion": () =>
    import("@/content/physics/laws-of-motion/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/work-energy-and-power": () =>
    import("@/content/physics/work-energy-and-power/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/system-of-particles-and-rotational-motion": () =>
    import("@/content/physics/system-of-particles-and-rotational-motion/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/gravitation": () =>
    import("@/content/physics/gravitation/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/mechanical-properties-of-solids": () =>
    import("@/content/physics/mechanical-properties-of-solids/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/mechanical-properties-of-fluids": () =>
    import("@/content/physics/mechanical-properties-of-fluids/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/thermal-properties-of-matter": () =>
    import("@/content/physics/thermal-properties-of-matter/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/thermodynamics": () =>
    import("@/content/physics/thermodynamics/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/kinetic-theory": () =>
    import("@/content/physics/kinetic-theory/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/oscillations": () =>
    import("@/content/physics/oscillations/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/waves": () =>
    import("@/content/physics/waves/flashcards.json").then((m) => m.default as Flashcard[]),
};

export function getSectionsForChapter(slug: string): ChapterSection[] {
  return SECTIONS_MAP[slug] ?? [];
}

export async function getQuestionsForChapter(slug: string): Promise<Question[]> {
  return questionLoaders[slug]?.() ?? [];
}

export async function getFlashcardsForChapter(slug: string): Promise<Flashcard[]> {
  return flashcardLoaders[slug]?.() ?? [];
}

export function hasQuestions(slug: string): boolean {
  return QUESTION_KEYS.has(slug);
}

export function hasFlashcards(slug: string): boolean {
  return FLASHCARD_KEYS.has(slug);
}

const CONTENT_SLUGS = new Set(QUESTION_KEYS);

export function hasChapterContent(slug: string): boolean {
  return CONTENT_SLUGS.has(slug) || slug in SECTIONS_MAP;
}
