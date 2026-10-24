import { BilingualParagraph } from "@/components/content/BilingualParagraph";
import { Callout } from "@/components/content/Callout";
import { Stepper } from "@/components/content/Stepper";
import { TableCard } from "@/components/content/data/TableCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Expandable } from "@/components/content/Expandable";

/**
 * Chapter 2 — عَبْقَرِيٌّ مِنْ أَبْنَاءِ كَيْرَالَ / A Genius from Kerala
 * Unit 1: لغة الله في بلد الله (God's Language in God's Country)
 *
 * All text supplied by the user (Arabic + English translation).
 */

const WHO_HE_IS = [
  {
    arabic:
      "الدُّكْتُورُ مُحْيِي الدِّينِ الآلُوائِيُّ كَاتِبٌ وَمُدَرِّسٌ مَشْهُورٌ فِي وِلاَيَةِ كِيرَالَا.",
    english:
      "Dr. Muhyiddin Al-Alwaye is a famous writer and teacher in the state of Kerala.",
  },
  {
    arabic:
      "وَهُوَ كَاتِبٌ وَمُدَرِّسٌ مَشْهُورٌ، وَمُتَرْجِمٌ مَاهِرٌ، وَخَطِيبٌ مِصْقَعٌ، وَدَاعِيَةٌ مُخْلِصٌ.",
    english:
      "He was a famous writer and teacher, a skilled translator, an eloquent orator, and a sincere preacher.",
  },
];

const BIRTH = [
  {
    arabic: `هُوَ وُلِدَ فِي أَوَّلِ يُونِيُو سَنَةَ 1925م، فِي قَرْيَةِ "وِيلِيتُونَاد" قَرِيبَةٍ مِنْ مَدِينَةِ "آلُوا".`,
    english:
      "He was born on June 1, 1925, in the village of Veliyathunadu near the city of Aluva.",
  },
];

/** The educational journey — one step per textbook sentence. */
const EDUCATION = [
  {
    arabic:
      "دَرَسَ الشَّيْخُ مُحْيِي الدِّينِ الآلُوائِيُّ اللُّغَةَ العَرَبِيَّةَ وَالعُلُومَ الدِّينِيَّةَ أَوَّلًا عَلَى وَالِدِهِ، وَكَانَ وَالِدُهُ الشَّيْخَ مَقَّارْ المَوْلَوِي.",
    english:
      "Sheikh Muhyiddin Al-Alwaye first studied the Arabic language and the religious sciences under his father, who was Sheikh Maqkar Al-Moulavi.",
  },
  {
    arabic: `ثُمَّ انْتَقَلَ إِلَى مَلِيبَار لِيَلْتَحِقَ بِكُلِّيَّةِ "دَارِ العُلُومِ العَرَبِيَّةِ" بِوَازَاكَاد.`,
    english:
      "Then he moved to Malabar to join the Darul Uloom Arabic College in Vazhakkad.",
  },
  {
    arabic: `ثُمَّ الْتَحَقَ بِكُلِّيَّةِ "البَاقِيَات الصَّالِحَات" بِوَيْلُورْ وَتَخَرَّجَ فِيهَا بِشَهَادَةِ "المَوْلَوِي الفَاضِل".`,
    english:
      'Then he joined the "Baqiyat Salihat" College in Vellore and graduated from it with the "Al-Moulavi Al-Fadil" degree.',
  },
  {
    arabic: `ثُمَّ حَصَلَ عَلَى شَهَادَةِ "أَفْضَلِ العُلَمَاءِ" عَامَ 1949م مِنْ جَامِعَةِ مَدْرَاس.`,
    english:
      'Then he obtained the "Afzal Al-Ulama" degree in 1949 from Madras University.',
  },
  {
    arabic:
      "وَرَحَلَ إِلَى مِصْرَ سَنَةَ 1950م لِيَلْتَحِقَ بِجَامِعِ الأَزْهَرِ الشَّرِيفِ لِلدِّرَاسَةِ وَالبَحْثِ، وَحَصَلَ عَلَى الدُّكْتُورَاه مِنْ جَامِعِ الأَزْهَرِ.",
    english:
      "He travelled to Egypt in 1950 to join Al-Azhar University for study and research, and obtained his Doctorate from Al-Azhar University.",
  },
  {
    arabic: `حَوْلَ مَوْضُوعِ "الدَّعْوَةُ الإِسْلاَمِيَّةُ وَتَطَوُّرُهَا فِي شِبْهِ القَارَّةِ الهِنْدِيَّةِ" سَنَةَ 1971م.`,
    english:
      'On the dissertation topic "Islamic Dawah and its Development in the Indian Subcontinent", in 1971.',
  },
];

const POSITIONS = [
  {
    arabic:
      "تَوَلَّى مَنَاصِبَ عَالِيَةً؛ كَانَ أُسْتَاذًا فِي كُلِّيَّةِ رَوْضَةِ العُلُومِ، ثُمَّ أُسْتَاذًا فِي جَامِعِ الأَزْهَرِ بِمِصْرَ.",
    english:
      "He held high positions; he was a professor at Rawdatul Uloom College, then a professor at Al-Azhar University in Egypt.",
  },
  {
    arabic: `وَكَانَ مُذِيعًا فِي إِذَاعَةِ عُمُومِ الهِنْدِ (AIR)، وَرَئِيسَ التَّحْرِيرِ لِمَجَلَّةِ "صَوْتِ الهِنْدِ" الَّتِي تُصْدِرُ مِنْ سِفَارَةِ الهِنْدِ بِمِصْرَ.`,
    english:
      'He was a broadcaster on All India Radio (AIR), and editor-in-chief of the magazine "Voice of India", which is published from the Indian Embassy in Egypt.',
  },
];

const WORKS = [
  {
    arabic: `وَتَرْجَمَ رِوَايَةَ "تَشْمِين" (Chemmeen) مِنَ اللُّغَةِ المَلِيَالَمِيَّةِ إِلَى العَرَبِيَّةِ.`,
    english:
      'He translated the novel "Chemmeen" from the Malayalam language into Arabic.',
  },
  {
    arabic:
      "وَتَرَكَ خَزَانَةً مِنَ الكُتُبِ وَالمَقَالَاتِ فِي اللُّغَاتِ المَلِيَالَمِيَّةِ وَالعَرَبِيَّةِ وَالإِنْجِلِيزِيَّةِ وَالأُرْدُوِيَّةِ.",
    english:
      "And he left behind a treasury of books and articles in the Malayalam, Arabic, English and Urdu languages.",
  },
  {
    arabic: `وَنُشِرَتْ مَقَالَاتُهُ وَبُحُوثُهُ فِي المَجَلَّاتِ وَالجَرَائِدِ العَرَبِيَّةِ مِثْلِ جَرِيدَةِ "المَدِينَة" وَمَجَلَّةِ "الجَامِعَة الإِسْلاَمِيَّة".`,
    english:
      'And his articles and his researches were published in Arabic magazines and newspapers such as the newspaper "Al-Madinah" and the magazine "Al-Jami\'ah Al-Islamiyyah".',
  },
  {
    arabic:
      "وَكَانَ لَهُ دَوْرٌ كَبِيرٌ فِي تَوْثِيقِ العَلاَقَاتِ بَيْنَ الهِنْدِ وَبِلاَدِ العَرَبِ.",
    english:
      "And he had a great role in strengthening the relations between India and the Arab countries.",
  },
];

const DEATH = {
  arabic:
    "وَقَدْ انْتَقَلَ الدُّكْتُورُ الآلُوائِيُّ إِلَى ذِمَّةِ اللهِ فِي 23 يُولِيُو 1996م بَعْدَ خِدْمَاتٍ جَلِيلَةٍ لِلُّغَةِ العَرَبِيَّةِ.",
  english:
    "Dr. Al-Alwaye passed away on 23 July 1996, after rendering great services to the Arabic language.",
};

/** Years of his life, written out in words. */
const LIFE_YEARS = [
  {
    event: "وِلَادَتُهُ",
    eventEn: "His birth",
    year: "١٩٢٥م",
    words: "أَلْفٌ وَتِسْعُمِائَةٍ وَخَمْسٌ وَعِشْرُونَ",
    english: "Nineteen twenty-five (one thousand nine hundred and twenty-five)",
  },
  {
    event: "ارْتَحَلَ إِلَى مِصْرَ",
    eventEn: "He travelled to Egypt",
    year: "١٩٥٠م",
    words: "أَلْفٌ وَتِسْعُمِائَةٍ وَخَمْسُونَ",
    english: "Nineteen fifty (one thousand nine hundred and fifty)",
  },
  {
    event: "تَوَجَّهَ إِلَى الْبِلَادِ الْعَرَبِيَّةِ",
    eventEn: "He headed to the Arab lands",
    year: "١٩٧٧م",
    words: "أَلْفٌ وَتِسْعُمِائَةٍ وَسَبْعَةٌ وَسَبْعُونَ",
    english: "Nineteen seventy-seven (one thousand nine hundred and seventy-seven)",
  },
  {
    event: "انْتَقَلَ إِلَى ذِمَّةِ اللهِ تَعَالَى",
    eventEn: "He passed away",
    year: "١٩٩٦م",
    words: "أَلْفٌ وَتِسْعُمِائَةٍ وَسِتَّةٌ وَتِسْعُونَ",
    english: "Nineteen ninety-six (one thousand nine hundred and ninety-six)",
  },
];

/** Extra practice: figures ↔ words. */
const MORE_NUMBERS = [
  { words: "أَلْفٌ وَتِسْعُمِائَةٍ وَسِتٌّ وَأَرْبَعُونَ", figures: "١٩٤٦", english: "1946" },
  { words: "أَلْفٌ وَسَبْعُمِائَةٍ وَسَبْعٌ وَسَبْعُونَ", figures: "١٧٧٧", english: "1777" },
  {
    words: "أَلْفٌ وَأَرْبَعُمِائَةٍ وَثَمَانٍ وَثَلَاثُونَ هِجْرِيَّةً",
    figures: "١٤٣٨هـ",
    english: "1438 AH",
  },
  { words: "أَرْبَعُمِائَةٍ وَسِتٌّ وَثَلَاثُونَ", figures: "٤٣٦", english: "436" },
  { words: "أَلْفَانِ وَتِسْعَةٌ", figures: "٢٠٠٩", english: "2009" },
  { words: "أَلْفَانِ وَسِتَّةٌ وَعِشْرُونَ", figures: "٢٠٢٦", english: "2026" },
  { words: "أَلْفَانِ وَسَبْعَةٌ وَعِشْرُونَ", figures: "٢٠٢٧", english: "2027" },
];

/** إنّ and its sisters. */
const INNA_SISTERS = [
  { sister: "إِنَّ", translit: "Inna", meaning: "Indeed / Truly", fn: "التَّأْكِيدُ — Emphasis" },
  { sister: "أَنَّ", translit: "Anna", meaning: "That", fn: "التَّأْكِيدُ — Emphasis" },
  { sister: "كَأَنَّ", translit: "Ka'anna", meaning: "As if / Like", fn: "التَّشْبِيهُ — Comparison / simile" },
  { sister: "لَكِنَّ", translit: "Lakinna", meaning: "But / However", fn: "الِاسْتِدْرَاكُ — Correction" },
  { sister: "لَيْتَ", translit: "Layta", meaning: "If only / Would that", fn: "التَّمَنِّي — Wish / regret" },
  { sister: "لَعَلَّ", translit: "La'alla", meaning: "Perhaps / Hopefully", fn: "التَّرَجِّي — Hope / expectation" },
];

const INNA_EXAMPLES = [
  {
    plain: "الصَّحَافَةُ لِسَانُ الشَّعْبِ",
    plainEn: "Press is the voice of the people.",
    withSister: "إِنَّ الصَّحَافَةَ لِسَانُ الشَّعْبِ",
    withSisterEn: "Indeed, the press is the voice of the people.",
    sister: "إِنَّ",
  },
  {
    plain: "الشَّدَائِدُ صَانِعَةُ الرِّجَالِ",
    plainEn: "Hardships make men.",
    withSister: "أَيْقَنْتُ أَنَّ الشَّدَائِدَ صَانِعَةُ الرِّجَالِ",
    withSisterEn: "I became certain that hardships make men.",
    sister: "أَنَّ",
  },
  {
    plain: "الْمُمَرِّضَةُ مَلَكٌ رَحِيمٌ",
    plainEn: "The nurse is a merciful angel.",
    withSister: "كَأَنَّ الْمُمَرِّضَةَ مَلَكٌ رَحِيمٌ",
    withSisterEn: "It is as if the nurse is a merciful angel.",
    sister: "كَأَنَّ",
  },
  {
    plain: "الْأَثَاثُ جَدِيدٌ",
    plainEn: "The furniture is new.",
    withSister: "الْبَيْتُ قَدِيمٌ لَكِنَّ الْأَثَاثَ جَدِيدٌ",
    withSisterEn: "The house is old, but the furniture is new.",
    sister: "لَكِنَّ",
  },
  {
    plain: "النَّصْرُ قَرِيبٌ",
    plainEn: "Victory is near.",
    withSister: "لَعَلَّ النَّصْرَ قَرِيبٌ",
    withSisterEn: "Hopefully, victory is near.",
    sister: "لَعَلَّ",
  },
  {
    plain: "الشَّبَابُ رَاجِعٌ",
    plainEn: "Youth will return.",
    withSister: "لَيْتَ الشَّبَابَ رَاجِعٌ",
    withSisterEn: "If only youth would return.",
    sister: "لَيْتَ",
  },
];

const REVIEW_QA = [
  {
    q: "مَنْ أَلَّفَ الرِّوَايَةَ «تِشْمِينْ»؟",
    qEn: "Who wrote the novel Chemmeen?",
    a: "— (لَمْ يُذْكَرْ فِي النَّصِّ)",
  },
  {
    q: "مَنْ تَرْجَمَ الرِّوَايَةَ «تِشْمِينْ» إِلَى اللُّغَةِ الْعَرَبِيَّةِ؟",
    qEn: "Who translated the novel Chemmeen into Arabic?",
    a: "الدُّكْتُورُ مُحْيِي الدِّينِ الْأَلْوَائِيُّ.",
  },
  {
    q: "أَيْنَ وُلِدَ الدُّكْتُورُ مُحْيِي الدِّينِ الْأَلْوَائِيُّ؟",
    qEn: "Where was Dr. Muhyiddin Al-Alwaye born?",
    a: "وُلِدَ فِي قَرْيَةِ «وِيلِيتُونَاد» الْقَرِيبَةِ مِنْ مَدِينَةِ «آلُوا» فِي كِيرَالَا.",
  },
  {
    q: "مَنْ أَبُوهُ؟",
    qEn: "Who is his father?",
    a: "الشَّيْخُ مَقَّارُ الْمَوْلَوِيُّ.",
  },
  {
    q: "عَلَى مَنْ دَرَسَ مُحْيِي الدِّينِ الْأَلْوَائِيُّ أَوَّلًا؟",
    qEn: "Under whom did Muhyiddin Al-Alwaye first study?",
    a: "عَلَى أَبِيهِ.",
  },
  {
    q: "مِنْ أَيْنَ حَصَلَ الدُّكْتُورُ مُحْيِي الدِّينِ الْأَلْوَائِيُّ عَلَى شَهَادَةِ أَفْضَلِ الْعُلَمَاءِ؟",
    qEn: "From where did he obtain the Afzal al-Ulama degree?",
    a: "مِنْ جَامِعَةِ مَدْرَاسْ.",
  },
  {
    q: "مِنْ أَيْنَ حَصَلَ الدُّكْتُورُ مُحْيِي الدِّينِ الْأَلْوَائِيُّ عَلَى الدُّكْتُورَاهْ؟",
    qEn: "From where did he obtain his Doctorate?",
    a: "مِنْ جَامِعِ الْأَزْهَرِ الشَّرِيفِ بِمِصْرَ.",
  },
  {
    q: "مَا هُوَ مَوْضُوعُهُ لِلدُّكْتُورَاهْ؟",
    qEn: "What is the topic of his doctorate?",
    a: "الدَّعْوَةُ الْإِسْلَامِيَّةُ وَتَطَوُّرُهَا فِي شِبْهِ الْقَارَّةِ الْهِنْدِيَّةِ.",
  },
  {
    q: "مِنْ أَيْنَ تُصْدَرُ الْمَجَلَّةُ «صَوْتُ الْهِنْدِ»؟",
    qEn: "From where is the magazine Voice of India published?",
    a: "مِنْ سِفَارَةِ الْهِنْدِ بِمِصْرَ.",
  },
];

const ESSAY_INTRO = [
  {
    arabic:
      "تَمَيَّزَتْ وِلَايَةُ كِيرَالَا بِعَلَاقَاتِهَا التَّارِيخِيَّةِ وَالثَّقَافِيَّةِ الْعَمِيقَةِ مَعَ الْعَالَمِ الْعَرَبِيِّ.",
    english:
      "The state of Kerala is distinguished by its deep historical and cultural ties with the Arab world.",
  },
  {
    arabic:
      "وَقَدْ سَاهَمَ أَهْلُهَا وَعُلَمَاؤُهَا مُسَاهَمَةً بَالِغَةً فِي نَشْرِ اللُّغَةِ الْعَرَبِيَّةِ وَتَطْوِيرِهَا.",
    english:
      "Its people and scholars have contributed significantly to spreading and developing the Arabic language.",
  },
];

const ESSAY_SECTIONS = [
  {
    title: "الدَّرْسُ الْمَسْجِدِيُّ",
    titleEn: "The Mosque Dars",
    paragraphs: [
      {
        arabic:
          "دَوْرُ الدَّرْسِ الْمَسْجِدِيِّ فِي تَنْمِيَةِ اللُّغَةِ الْعَرَبِيَّةِ وَالْعُلُومِ الْإِسْلَامِيَّةِ حَقِيقَةٌ تَارِيخِيَّةٌ.",
        english:
          "The role of the Mosque Dars in developing the Arabic language and Islamic sciences is a historical fact.",
      },
      {
        arabic:
          "يُؤَسَّسُ الدَّرْسُ الْمَسْجِدِيُّ مَعَ الدَّعْوَةِ الْإِسْلَامِيَّةِ فِي كُلِّ بُقْعَةٍ مِنْ كِيرَالَا.",
        english:
          "The Mosque Dars was established alongside the Islamic call across every corner of Kerala.",
      },
      {
        arabic: "كَانَ أَهْلُ كُلِّ قَرْيَةٍ يَقُومُونَ بِمُؤْنَةِ هَذِهِ الدُّرُوسِ.",
        english:
          "The residents of each village provided the funding and support for these lessons.",
      },
      {
        arabic: "وَقَدْ تَخَرَّجَ مِنْهَا كَثِيرٌ مِنَ الْعُلَمَاءِ وَالْأُدَبَاءِ.",
        english: "Many scholars and literary figures graduated from these circles.",
      },
      {
        arabic:
          "وَمِنْ أَشْهَرِهَا مَا كَانَ يَجْرِي فِي الْمَسْجِدِ الْجَامِعِ الْكَبِيرِ بِـ «فُنَّان» عَلَى رِئَاسَةِ الشَّيْخِ زَيْنِ الدِّينِ الصَّغِيرِ.",
        english:
          "Among the most famous of these was held at the Grand Juma Mosque in Ponnani under the leadership of Sheikh Zainuddin Junior.",
      },
    ],
  },
  {
    title: "الْقَاضِي مُحَمَّدٌ",
    titleEn: "Qadi Muhammad",
    paragraphs: [
      {
        arabic:
          "الْقَاضِي مُحَمَّدُ بْنُ الْقَاضِي عَبْدِ الْعَزِيزِ (تُوَفِّيَ 1025 هـ) هُوَ مِنْ أَبْرَزِ قُضَاةِ كَالِيكُوت.",
        english:
          "Qadi Muhammad bin Qadi Abdul Aziz (d. 1025 AH) was one of the most prominent judges of Calicut.",
      },
      {
        arabic:
          "هُوَ مَاهِرٌ فِي الْعُلُومِ الدِّينِيَّةِ وَمُتَبَحِّرٌ فِي الْفُنُونِ الْعَقْلِيَّةِ.",
        english:
          "He was highly skilled in religious sciences and deeply knowledgeable in the rational arts.",
      },
      {
        arabic:
          "لَهُ مُؤَلَّفَاتٌ كَثِيرَةٌ حَتَّى قِيلَ إِنَّهَا تَبْلُغُ خَمْسَمِائَةِ كِتَابٍ.",
        english:
          "He authored numerous works, so much so that they are said to reach five hundred books.",
      },
      {
        arabic:
          "وَمِنْ مُصَنَّفَاتِهِ: «الدُّرَّةُ الْفَصِيحَةُ»، «مَقَاصِدُ النِّكَاحِ»، وَ«الْفَتْحُ الْمُبِينُ».",
        english:
          "Among his famous works are: Al-Durrah al-Fasihah, Maqasid al-Nikah, and Al-Fath al-Mubin.",
      },
    ],
  },
  {
    title: "عَبْدُ الْقَادِرِ الْوَكَّمِيُّ (1873 – 1932م)",
    titleEn: "Vakkom Abdul Qadir Moulavi",
    paragraphs: [
      {
        arabic: "وُلِدَ بِقَرْيَةِ «وَكَّم» بِمُقَاطَعَةِ تِرُووَنَنْتَبُورَم.",
        english: "He was born in the village of Vakkom in Thiruvananthapuram district.",
      },
      {
        arabic:
          "تَعَلَّمَ الْعُلُومَ الِابْتِدَائِيَّةَ وَالْقُرْآنَ وَالْأَحَادِيثَ النَّبَوِيَّةَ مِنْ وَطَنِهِ.",
        english:
          "He learned primary sciences, the Quran, and Prophetic Hadiths in his hometown.",
      },
      {
        arabic:
          "اقْتَرَحَ عَلَى الْحُكُومَةِ تَعْيِينَ أَسَاتِذَةِ الْعَرَبِيَّةِ فِي الْمَدَارِسِ الْعَامَّةِ.",
        english:
          "He proposed to the government to appoint Arabic teachers in public schools.",
      },
      {
        arabic:
          "أَقَرَّتِ الْحُكُومَةُ اقْتِرَاحَاتِهِ فِي تَعْيِينِ الْمُفَتِّشِينَ لِلْمُرَاقَبَةِ عَلَى تَدْرِيسِ الْعَرَبِيَّةِ فِي مَدَارِسِ كِيرَالَا.",
        english:
          "The government accepted his proposals by appointing inspectors to oversee Arabic instruction in Kerala schools.",
      },
      {
        arabic:
          "وَتَقْدِيمِ مِنْحَةٍ دِرَاسِيَّةٍ لِلطُّلَّابِ عَلَى الْمُسْتَوَى الثَّانَوِيِّ.",
        english: "And offering scholarships to high school students.",
      },
      {
        arabic:
          "وَمِنْ مُصَنَّفَاتِهِ: تَرَجَمَةُ الْفَاتِحَةِ وَتَفْسِيرُهَا، مُقَدِّمَةٌ لِتَعْلِيمِ الْقُرْآنِ، الْإِصْلَاحُ الدِّينِيُّ، وَتَرِجَمَةُ كِتَابِ «كِيمِيَاء السَّعَادَةِ».",
        english:
          "Among his works are: Translation and Commentary of Al-Fatihah, Introduction to Quranic Education, Al-Islah al-Dini, and the translation of Kimiya-yi Sa'adat (Chemistry of Happiness).",
      },
    ],
  },
];

const ALI_ENGLISH =
  "This is Ali. He is my friend. Ali has two brothers and a sister. His father is a doctor and his mother is a teacher. They serve the people in the society.";

const ALI_ARABIC =
  "هَذَا عَلِيٌّ. هُوَ صَدِيقِي. لِعَلِيٍّ أَخَوَانِ وَأُخْتٌ. وَالِدُهُ طَبِيبٌ وَأُمُّهُ مُدَرِّسَةٌ. يَخْدِمُونَ النَّاسَ فِي الْمُجْتَمَعِ.";

/** Supplementary reading text (Arabic only — no translation supplied). */
const SUPPLEMENTARY_TEXT = [
  "كِيرَالَا وِلَايَةٌ صَغِيرَةٌ جَمِيلَةٌ تَقَعُ فِي جَنُوبِ الْهِنْدِ عَلَى سَاحِلِ الْبَحْرِ الْعَرَبِيِّ. كَانَ الْعَرَبُ يَزُورُونَ كِيرَالَا مُنْذُ قَدِيمِ الزَّمَانِ، كَانَ لِلْعَرَبِ عَلَاقَةٌ وَثِيقَةٌ مَعَ سُكَّانِ كِيرَالَا مِنْ جِهَاتٍ مُخْتَلِفَةٍ: التِّجَارِيَّةِ وَالصِّنَاعِيَّةِ وَالدِّينِيَّةِ وَغَيْرِهَا. جَاءَ الْعَرَبُ إِلَى كِيرَالَا فَانْتَشَرَتِ اللُّغَةُ الْعَرَبِيَّةُ بَيْنَ أَهْلِ كِيرَالَا وَصَارَتْ مُتَدَاوَلَةً بَيْنَهُمْ.",
  "لَمَّا جَاءَ الْإِسْلَامُ إِلَى كِيرَالَا وَأَسْلَمَ بَعْضٌ مِنْ أَهْلِ كِيرَالَا دَرَسُوا اللُّغَةَ الْعَرَبِيَّةَ. كَانَ الْمُسْلِمُونَ يَدْرُسُونَ اللُّغَةَ الْعَرَبِيَّةَ لِحَاجَاتِهِمُ الدِّينِيَّةِ. بَنَى الْمُسْلِمُونَ مَسَاجِدَ وَمَدَارِسَ كَثِيرَةً فِي أَنْحَاءِ كِيرَالَا وَدَرَسُوا اللُّغَةَ الْعَرَبِيَّةَ، وَبَدَأُوا كُلِّيَّاتٍ عَرَبِيَّةً كَثِيرَةً.",
  "أَنْجَبَتْ وِلَايَةُ كِيرَالَا كَثِيرًا مِنَ الْعُلَمَاءِ وَالْأُدَبَاءِ وَالشُّعَرَاءِ وَالْكُتَّابِ مِثْلَ الْمَخْدُومِيِّينَ وَالْقَاضِي مُحَمَّدٍ وَالْقَاضِي عُمَرَ وَغَيْرِهِمْ. أَلَّفَ عُلَمَاءُ كِيرَالَا كُتُبًا كَثِيرَةً وَأَشْعَارًا عَدِيدَةً. وَكَانَ لِلدَّرْسِ الْمَسْجِدِيِّ فَضْلٌ كَبِيرٌ فِي انْتِشَارِ اللُّغَةِ الْعَرَبِيَّةِ فِي مَنَاطِقِ كِيرَالَا.",
  "فَالْآنَ تُدَرَّسُ اللُّغَةُ الْعَرَبِيَّةُ فِي وِلَايَةِ كِيرَالَا مِنْ رَوْضَةِ الْأَطْفَالِ إِلَى مَرْحَلَةِ الدُّكْتُورَاهْ. تُصْدَرُ مِنْ كِيرَالَا عَدَدٌ مِنَ الْمَجَلَّاتِ الْعَرَبِيَّةِ وَالدَّوْرِيَّاتِ الْمَشْهُورَةِ.",
];

function SectionHeading({
  id,
  arabic,
  english,
}: {
  id: string;
  arabic: string;
  english: string;
}) {
  return (
    <>
      <h2 id={id} className="arabic-body !text-[1.6rem] !font-bold !mt-12 !mb-1 text-foreground">
        {arabic}
      </h2>
      <p dir="ltr" className="translation !mb-6 !font-semibold !text-foreground/80">
        {english}
      </p>
    </>
  );
}

export default function AbqariyyunPage() {
  return (
    <div dir="rtl">
      {/* Lesson title */}
      <h2
        id="lesson-two"
        className="arabic-body !text-3xl !font-bold !mt-0 !mb-1 text-foreground"
      >
        الدَّرْسُ الثَّانِي: عَبْقَرِيٌّ مِنْ أَبْنَاءِ كَيْرَالَ
      </h2>
      <p dir="ltr" className="translation !mb-8 !font-semibold !text-foreground/80">
        Lesson Two: A Genius from Kerala
      </p>

      {/* ── 1. مَنْ هُوَ؟ ──────────────────────────────────────────────── */}
      <SectionHeading id="who-is-he" arabic="مَنْ هُوَ؟" english="Who Is He?" />
      {WHO_HE_IS.map((item, i) => (
        <BilingualParagraph key={i} arabic={item.arabic} english={item.english} />
      ))}

      {/* ── 2. مَوْلِدُهُ ───────────────────────────────────────────────── */}
      <SectionHeading id="birth" arabic="مَوْلِدُهُ" english="His Birth" />
      {BIRTH.map((item, i) => (
        <BilingualParagraph key={i} arabic={item.arabic} english={item.english} />
      ))}

      {/* ── 3. رِحْلَتُهُ العِلْمِيَّةُ ─────────────────────────────────── */}
      <SectionHeading
        id="education"
        arabic="رِحْلَتُهُ العِلْمِيَّةُ"
        english="His Educational Journey"
      />
      <Stepper
        steps={EDUCATION.map((step) => ({
          label: (
            <span dir="rtl" className="arabic-body !text-[1.15rem] !font-bold">
              {step.arabic}
            </span>
          ),
          description: (
            <span dir="ltr" className="translation block !mb-0 !font-normal">
              {step.english}
            </span>
          ),
        }))}
      />

      {/* ── 4. مَنَاصِبُهُ وَأَعْمَالُهُ ────────────────────────────────── */}
      <SectionHeading
        id="positions"
        arabic="مَنَاصِبُهُ وَأَعْمَالُهُ"
        english="His Positions and Work"
      />
      {POSITIONS.map((item, i) => (
        <BilingualParagraph key={i} arabic={item.arabic} english={item.english} />
      ))}

      {/* ── 5. آثَارُهُ وَإِنْجَازَاتُهُ ────────────────────────────────── */}
      <SectionHeading
        id="works"
        arabic="آثَارُهُ وَإِنْجَازَاتُهُ"
        english="His Works and Achievements"
      />
      {WORKS.map((item, i) => (
        <BilingualParagraph key={i} arabic={item.arabic} english={item.english} />
      ))}

      {/* ── 6. وَفَاتُهُ ────────────────────────────────────────────────── */}
      <SectionHeading id="death" arabic="وَفَاتُهُ" english="His Death" />
      <Callout type="note" title="انْتَقَلَ إِلَى ذِمَّةِ اللهِ · He Passed Away">
        <p dir="rtl" className="arabic-body !mb-1.5 text-foreground">
          {DEATH.arabic}
        </p>
        <p dir="ltr" className="translation !mb-0">
          {DEATH.english}
        </p>
      </Callout>

      {/* ── 7. الأَعْوَامُ بِالْحُرُوفِ ─────────────────────────────────── */}
      <SectionHeading
        id="years-in-words"
        arabic="نُلاَحِظُ أَعْوَامَ الأَحْدَاثِ وَنَكْتُبُهَا لَفْظًا"
        english="Note the Years of the Events and Write Them Out in Words"
      />
      <TableCard
        title="أَعْوَامٌ فِي حَيَاةِ الدُّكْتُورِ الآلُوائِيِّ"
        headers={["الْحَدَثُ", "السَّنَةُ", "بِالْحُرُوفِ", "In English"]}
        rows={LIFE_YEARS.map((row) => ({
          cells: [
            <span key="e" className="arabic-body !text-[1.05rem]">
              {row.event}
            </span>,
            <span key="y" dir="rtl" className="arabic-body !text-[1.1rem] font-bold">
              {row.year}
            </span>,
            <span key="w" dir="rtl" className="arabic-body !text-[1.05rem]">
              {row.words}
            </span>,
            <span key="en" dir="ltr" className="text-[0.9rem] text-muted-foreground">
              {row.english}
            </span>,
          ],
        }))}
        caption="السَّنَةُ بِالْأَرْقَامِ ⬅️ السَّنَةُ بِالْحُرُوفِ — the year in figures becomes the year written out in words."
      />

      <h3 className="arabic-body !mt-10 !mb-1 !text-lg !font-bold text-foreground">
        تَدْرِيبٌ: الْأَرْقَامُ بِالْحُرُوفِ
      </h3>
      <p dir="ltr" className="translation !mb-4 !font-semibold !text-foreground/80">
        Practice: More Numbers in Words
      </p>
      <TableCard
        headers={["بِالْحُرُوفِ", "بِالْأَرْقَامِ", "In English"]}
        rows={MORE_NUMBERS.map((row) => ({
          cells: [
            <span key="w" dir="rtl" className="arabic-body !text-[1.05rem]">
              {row.words}
            </span>,
            <span key="f" dir="rtl" className="arabic-body !text-[1.1rem] font-bold">
              {row.figures}
            </span>,
            <span key="en" dir="ltr" className="text-[0.9rem] text-muted-foreground">
              {row.english}
            </span>,
          ],
        }))}
      />

      {/* ── 8. إِنَّ وَأَخَوَاتُهَا ──────────────────────────────────────── */}
      <SectionHeading
        id="inna"
        arabic="إِنَّ وَأَخَوَاتُهَا"
        english="Grammar Note: Inna and Its Sisters"
      />

      <Callout type="note" title="الْقَاعِدَةُ · The Core Rule">
        <ul className="mb-0 space-y-2 ps-5 list-disc">
          <li>
            When <strong>إِنَّ</strong> or any of its sisters enters a nominal sentence
            (الْجُمْلَةُ الِاسْمِيَّةُ), it changes the case endings of the two parts.
          </li>
          <li>
            The first word — formerly the subject (الْمُبْتَدَأُ) — becomes{" "}
            <strong>accusative</strong> (مَنْصُوبٌ) and is called{" "}
            <strong>
              اسْمُ إِنَّ
            </strong>
            .
          </li>
          <li>
            The second word — the predicate (الْخَبَرُ) — stays{" "}
            <strong>nominative</strong> (مَرْفُوعٌ) and is called{" "}
            <strong>خَبَرُ إِنَّ</strong>.
          </li>
        </ul>
      </Callout>

      <h3 className="arabic-body !mt-10 !mb-1 !text-lg !font-bold text-foreground">
        أَخَوَاتُ إِنَّ وَمَعَانِيهَا
      </h3>
      <p dir="ltr" className="translation !mb-4 !font-semibold !text-foreground/80">
        The Sisters of Inna and Their Meanings
      </p>
      <TableCard
        headers={["الْأُخْتُ", "النُّطْقُ", "الْمَعْنَى", "الْوَظِيفَةُ"]}
        rows={INNA_SISTERS.map((row) => ({
          cells: [
            <span key="s" dir="rtl" className="arabic-body !text-[1.2rem] font-bold">
              {row.sister}
            </span>,
            <span key="t" className="italic">
              {row.translit}
            </span>,
            <span key="m" dir="ltr" className="text-[0.9rem]">
              {row.meaning}
            </span>,
            <span key="f" dir="rtl" className="arabic-body !text-[0.95rem]">
              {row.fn}
            </span>,
          ],
        }))}
      />

      <h3 className="arabic-body !mt-10 !mb-1 !text-lg !font-bold text-foreground">
        أَمْثِلَةٌ مِنَ الْكِتَابِ
      </h3>
      <p dir="ltr" className="translation !mb-4 !font-semibold !text-foreground/80">
        Examples from the Textbook
      </p>
      <TableCard
        headers={["الْجُمْلَةُ الِاسْمِيَّةُ", "مَعَ إِنَّ وَأَخَوَاتِهَا", "الْأُخْتُ"]}
        rows={INNA_EXAMPLES.map((row) => ({
          cells: [
            <div key="p">
              <span dir="rtl" className="arabic-body !text-[1.05rem]">
                {row.plain}
              </span>
              <span
                dir="ltr"
                className="translation mt-1 block !mb-0 !text-[0.85rem]"
              >
                {row.plainEn}
              </span>
            </div>,
            <div key="w">
              <span dir="rtl" className="arabic-body !text-[1.05rem] font-bold">
                {row.withSister}
              </span>
              <span
                dir="ltr"
                className="translation mt-1 block !mb-0 !text-[0.85rem]"
              >
                {row.withSisterEn}
              </span>
            </div>,
            <span key="s" dir="rtl" className="arabic-body !text-[1.05rem] font-bold">
              {row.sister}
            </span>,
          ],
        }))}
        caption="Notice the first word after إِنَّ and her sisters: it carries the fatha (مَنْصُوبٌ), while the predicate stays in the nominative."
      />

      {/* ── 9. أَسْئِلَةٌ وَأَجْوِبَةٌ ───────────────────────────────────── */}
      <SectionHeading
        id="review-questions"
        arabic="نُرَاجِعُ النَّصَّ وَنُجِيبُ"
        english="Review the Text and Answer"
      />
      <Expandable title="الْأَسْئِلَةُ وَالْأَجْوِبَةُ — Questions and Answers" variant="exercise">
        <ExerciseQa
          questions={REVIEW_QA.map((item) => (
            <div key={item.q}>
              <span dir="rtl" className="arabic-body !text-[1.1rem]">
                {item.q}
              </span>
              <span dir="ltr" className="translation mt-1 block !mb-0 !text-[0.85rem]">
                {item.qEn}
              </span>
            </div>
          ))}
          answers={REVIEW_QA.map((item) => (
            <span key={item.a} dir="rtl" className="arabic-body !text-[1.05rem]">
              {item.a}
            </span>
          ))}
          answersHeading="الْإِجَابَاتُ · Answers"
        />
      </Expandable>

      {/* ── 10. فَقْرَةٌ إِضَافِيَّةٌ (collapsed) ────────────────────────── */}
      <SectionHeading
        id="extra-paragraph"
        arabic="كِتَابَةُ فَقْرَةٍ إِضَافِيَّةٍ"
        english="Extra Paragraph Writing — Translation Practice"
      />
      <Expandable
        title="تَدْرِيبُ التَّرْجَمَةِ: كِتَابَةُ فَقْرَةٍ إِضَافِيَّةٌ — Extra Paragraph Writing"
        variant="exercise"
      >
        <p dir="ltr" className="translation !mb-2 !text-[0.8rem] !font-bold !uppercase !tracking-[0.12em]">
          English text
        </p>
        <div className="mb-6 rounded-xl border border-border/60 bg-muted/25 px-4 py-3">
          <p dir="ltr" className="text-[0.95rem] leading-[1.8] text-foreground/90">
            {ALI_ENGLISH}
          </p>
        </div>

        <p dir="rtl" className="arabic-body !mb-2 !text-[0.95rem] !font-bold text-foreground">
          التَّرْجَمَةُ الْعَرَبِيَّةُ
        </p>
        <p dir="rtl" className="arabic-body !mb-0 text-foreground">
          {ALI_ARABIC}
        </p>
      </Expandable>

      {/* ── 11. الْمَقَالَةُ ─────────────────────────────────────────────── */}
      <SectionHeading
        id="essay"
        arabic="مَقَالَةٌ: مُسَاهَمَةُ أَهْلِ كِيرَالَا فِي خِدْمَةِ اللُّغَةِ الْعَرَبِيَّةِ"
        english="Essay: The Contribution of the People of Kerala to the Arabic Language"
      />
      {ESSAY_INTRO.map((item, i) => (
        <BilingualParagraph key={i} arabic={item.arabic} english={item.english} />
      ))}

      {ESSAY_SECTIONS.map((section, i) => (
        <div key={i}>
          <h3 className="arabic-body !mt-10 !mb-1 !text-lg !font-bold text-foreground">
            {i + 1}. {section.title}
          </h3>
          <p dir="ltr" className="translation !mb-5 !font-semibold !text-foreground/80">
            {section.titleEn}
          </p>
          {section.paragraphs.map((paragraph, j) => (
            <BilingualParagraph
              key={j}
              arabic={paragraph.arabic}
              english={paragraph.english}
            />
          ))}
        </div>
      ))}

      {/* ── 12. نَصٌّ إِضَافِيٌّ ─────────────────────────────────────────── */}
      <SectionHeading
        id="supplementary-text"
        arabic="نَصٌّ إِضَافِيٌّ: اللُّغَةُ الْعَرَبِيَّةُ فِي كِيرَالَا"
        english="Supplementary Reading Text: Arabic in Kerala"
      />
      {SUPPLEMENTARY_TEXT.map((paragraph, i) => (
        <p key={i} dir="rtl" className="arabic-body !mb-5 text-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
