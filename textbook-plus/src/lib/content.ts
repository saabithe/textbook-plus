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
  "electrostatic-potential-and-capacitance": [
    { id: "h-2-1", title: "2.1 Introduction" },
    { id: "h-2-2", title: "2.2 Electrostatic Potential" },
    { id: "h-2-3", title: "2.3 Potential Due to a Point Charge" },
    { id: "h-2-4", title: "2.4 Potential Due to an Electric Dipole" },
    { id: "h-2-5", title: "2.5 Potential Due to a System of Charges" },
    { id: "h-2-6", title: "2.6 Equipotential Surfaces" },
    { id: "h-2-7", title: "2.7 Potential Energy of a System of Charges" },
    { id: "h-2-8", title: "2.8 Potential Energy in an External Field" },
    { id: "h-2-9", title: "2.9 Electrostatics of Conductors" },
    { id: "h-2-10", title: "2.10 Dielectrics and Polarisation" },
    { id: "h-2-11", title: "2.11 Capacitors and Capacitance" },
    { id: "h-2-12", title: "2.12 The Parallel Plate Capacitor" },
    { id: "h-2-13", title: "2.13 Effect of Dielectric on Capacitance" },
    { id: "h-2-14", title: "2.14 Combination of Capacitors" },
    { id: "h-2-15", title: "2.15 Energy Stored in a Capacitor" },
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
    { id: "h-summary", title: "Summary (Revision Points)" },
  ],
  "c11/maths/permutations-and-combinations": [
    { id: "h-intro", title: "6.1 Introduction" },
    { id: "h-fpc", title: "6.2 Fundamental Principle of Counting" },
    { id: "h-permutations", title: "6.3 Permutations" },
    { id: "h-factorial", title: "6.3.2 Factorial Notation" },
    { id: "h-npr", title: "6.3.3 Permutations of Distinct Objects (nPr)" },
    { id: "h-repeated", title: "6.3.4 Permutations with Repeated Objects" },
    { id: "h-combinations", title: "6.4 Combinations" },
    { id: "h-summary", title: "Summary (Revision Points)" },
  ],
  "c11/maths/binomial-theorem": [
    { id: "h-intro", title: "7.1 Introduction" },
    { id: "h-pascal", title: "Pascal's Triangle" },
    { id: "h-theorem", title: "7.2 Binomial Theorem" },
    { id: "h-special", title: "Special Cases" },
    { id: "h-coeff-sums", title: "Sum of Binomial Coefficients" },
    { id: "h-summary", title: "Summary (Revision Points)" },
  ],
};

// Practice data is lazy-loaded per chapter so visiting one chapter doesn't
// download every chapter's questions/flashcards. Keys are static (sync
// hasQuestions/hasFlashcards); data arrives via dynamic import.
const QUESTION_KEYS = new Set([
  "electric-charges-and-fields",
  "electrostatic-potential-and-capacitance",
  "c11/maths/sets",
  "c11/maths/relations-and-functions",
  "c11/maths/trigonometric-functions",
  "c11/maths/complex-numbers-and-quadratic-equations",
  "c11/maths/linear-inequalities",
  "c11/maths/permutations-and-combinations",
  "c11/maths/binomial-theorem",
]);

const FLASHCARD_KEYS = new Set(QUESTION_KEYS);

const questionLoaders: Record<string, () => Promise<Question[]>> = {
  "electric-charges-and-fields": () =>
    import("@/content/physics/electric-charges-and-fields/questions.json").then((m) => m.default as Question[]),
  "electrostatic-potential-and-capacitance": () =>
    import("@/content/physics/electrostatic-potential-and-capacitance/questions.json").then((m) => m.default as Question[]),
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
};

const flashcardLoaders: Record<string, () => Promise<Flashcard[]>> = {
  "electric-charges-and-fields": () =>
    import("@/content/physics/electric-charges-and-fields/flashcards.json").then((m) => m.default as Flashcard[]),
  "electrostatic-potential-and-capacitance": () =>
    import("@/content/physics/electrostatic-potential-and-capacitance/flashcards.json").then((m) => m.default as Flashcard[]),
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
