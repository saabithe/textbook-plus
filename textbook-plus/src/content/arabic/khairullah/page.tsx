import { BilingualParagraph } from "@/components/content/BilingualParagraph";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";

/**
 * Chapter 1 — خير الله / Khairullah
 * Unit 1: لغة الله في بلد الله (God's Language in God's Country)
 *
 * Two sections, both supplied by the user:
 *   1. اللُّغَةُ العَرَبِيَّةُ فِي وِلايَةِ كَيْرَالَا — the prose text
 *   2. خَيْرُ الله — the numbered introduction to the poem
 */

const LANGUAGE_IN_KERALA = [
  {
    arabic: "كَيْرَالاَ وِلَايَةٌ صَغِيرَةٌ وَجَمِيلَةٌ تَقَعُ فِي جَنُوبِ الهِنْدِ عَلَى سَاحِلِ البَحْرِ العَرَبِيِّ",
    english:
      "Kerala is a small and beautiful state situated in southern India along the coast of the Arabian Sea.",
  },
  {
    arabic: "كَانَ العَرَبُ يَزْورُونَ كَيْرَالا مُنذُ قَدِيمِ الزَّمَانِ حَتَّى قَبْلَ مَجِيءِ الإِسْلَامِ لِأَغْرَاضِ التِّجَارَةِ",
    english:
      "The Arabs were visiting Kerala since ancient times, even before the advent of Islam, for the purpose of trade.",
  },
  {
    arabic: "وَصَارَتْ هَذِهِ اللُّغَةُ مُتَدَاوَلَةً بَيْنَ سُكَّانِ كَيْرَالا. هَكَذَا وَصَلَتِ اللُّغَةُ العَرَبِيَّةُ إِلَى كَيْرَالاَ",
    english:
      "And this language became common dealing among the inhabitants of Kerala. Thus, the Arabic language reached Kerala.",
  },
  {
    arabic: "لَمَّا جَاءَ الإِسْلَامُ أَضَافُوا الدَّعْوَةَ إِلَى مَرَامِهِمْ فَأَسْلَمَ كَثِيرٌ مِنْ أَهْلِ كَيْرَالا خَاصَّةً مِنَ الطَّبَقَاتِ الأَدْنَى",
    english:
      "When Islam arrived, they added propagation [preaching] to their objectives, so many people of Kerala embraced Islam, especially from the lower classes.",
  },
  {
    arabic: "بَنَى المُسْلِمُونَ مَسَاجِدَ كَثِيرَةً فِي جَمِيعِ أَنْحَاءِ كَيْرَالا وَأَسَسُوا هُنَاكَ الدُّرُوسَ المَسَاجِدِيَّةَ",
    english:
      "Muslims built many mosques throughout Kerala and established mosque lessons [study circles] there.",
  },
  {
    arabic: "وَبَدَءُوا الدِّرَاسَةَ لِلُّغَةِ العَرَبِيَّةِ لِحَاجَاتِهِمِ الدِّينِيَّةِ",
    english:
      "And they started the study of the Arabic language for their religious needs.",
  },
  {
    arabic: "أَنْجَبَتْ هَذِهِ الدُّرُوسُ المَسَاجِدِيَّةُ كَثِيرًا مِنَ العُلَمَاءِ وَالشُّعَرَاءِ وَالْكُتَّابِ وَالأَدَبَاءِ مِثْلَ: زَيْنُ الدِّينِ مَخْدُومٍ، وَقَاضِي مُحَمَّدٍ، وَمَوْلَوِي عَبْدِ الْقَادِرِ الْوَكَّامِي، وَالدَّكْتُورِ مُحْيِي الدِّينِ الأَلْوَائِي، وَغَيْرِهِمْ مِمَّنْ كَتَبُوا كُتُبًا قَيِّمَةً وَأَشْعَارًا كَثِيرَةً",
    english:
      "These mosque lessons produced many scholars, poets, writers, and men of letters such as: Zainuddin Makhdoom, Qadi Muhammad, Moulavi Abdul Qadir Wakkami, and Dr. Muhiuddin Alwaye, and others who wrote valuable books and numerous poems.",
  },
  {
    arabic: "وَلِذَلِكَ لِلْدُّرُوسِ المَسَاجِدِيَّةِ دَوْرٌ كَبِيرٌ فِي انْتِشَارِ اللُّغَةِ العَرَبِيَّةِ فِي كَيْرَالاَ",
    english:
      "Therefore, mosque classes played a big role in the spread of the Arabic language in Kerala.",
  },
  {
    arabic: "حَالِيًّا تُدَرَّسُ اللُّغَةُ العَرَبِيَّةُ مِنْ مَرْحَلَةِ الرَّوْضَةِ (الأَطْفَالِ) إِلَى مَرْحَلَةِ الدُّكْتُورَاهِ",
    english:
      "Presently, the Arabic language is taught from the kindergarten stage up to the doctorate stage.",
  },
  {
    arabic: "وَكَذَلِكَ تُصْدَرُ هُنَا كُتُبٌ كَثِيرَةٌ",
    english: "Likewise, many books are published here.",
  },
];

const KHAIRULLAH_INTRO = [
  {
    arabic:
      "خَيْرُ اللهِ \"مَنْظُومٌ\" لِشَاعِرٍ كَيْرَلِيٍّ مَشْهُورٍ ن.ك. أَحْمَدُ الْمَوْلَوِي. هُوَ وُلِدَ فِي قَزْيَةِ كَدَوْتُورٍ بِمُقَاطَعَةِ كَنُّورٍ",
    english:
      "\"Khairullah\" is a poem by a famous Keralite poet, N. K. Ahamed Moulavi. He was born in Kadavathur village in Kannur district.",
  },
  {
    arabic:
      "فِي هَذَا المَنْظُومِ يَصِفُ الشَّاعِرُ عَنْ جَمَالِ كَيْرَالا وَطَبِيعَتِهَا الجَذَّابَةِ وَعَنْ مَحَاسِنِ",
    english:
      "In this poem, the poet describes the beauty of Kerala, its attractive nature, and its virtues.",
  },
  {
    arabic:
      "يُخَاطِبُ الشَّاعِرُ وِلَايَةَ كَيْرَالا وَيَقُولُ: يَا كَيْرَالا! أَنْتِ جَمِيلَةٌ جِدًّا بِطَبِيعَةٍ رَائِعَةٍ جَذَّابَة. وَفِيكِ جِبَالٌ مُزْتَفِعَةٌ وَغَابَاتٌ كَثِيفَةٌ وَأَنْهَارٌ كَثِيرَةٌ، وَحَدَائِقُ صَغِيرَةً وَوَاسِعَةٌ",
    english:
      "The poet addresses the state of Kerala, saying: O Kerala! You are very beautiful with a wonderful, attractive nature. In you are high mountains, dense forests, many rivers, as well as small and spacious gardens.",
  },
  {
    arabic:
      "وَحَدَائِقُ رَائِعَةٌ وَأَزْهَارُهَا تَسْتَقْبِلُ الزُّوَّارَ بِطَيْبٍ وَسُرُورٍ، وَقَبْلَ جَنَّاتٍ تَجْرِي تَحْتَهَا الأنْهَارُ. وَفِيهَا فَوَاكِهُ مُخْتَلِفَةٌ لَذِيذَةً، وَصَارَ ظَهُورًا لِلشَّرَابِ",
    english:
      "And wonderful gardens whose flowers welcome visitors with goodness and joy, and before gardens underneath which rivers flow. In it are various delicious fruits, and [the water] becomes pure for drinking.",
  },
  {
    arabic:
      "ثُمَّ يُشَبَّهُ الشَّاعِرُ مَزَارِعَ كَيْرَالا بِلِبَاسٍ خَضْرٍ مِنْ سُنْدُسٍ لُبِسَتْ بِشَكْلٍ جَمِيلٍ. وَفِيهَا ظِلٌّ لِمَنْ يُرِيدُ الرَّاحَةَ مِنَ الثَّعَبِ",
    english:
      "Then the poet compares the farms of Kerala to a green silk garment beautifully worn. And in it is shade for whoever seeks rest from fatigue.",
  },
  {
    arabic:
      "ثُمَّ يَصِفُ عَنْ مَحَاسِنِ أَهْلِ كَيْرَالا. هُمْ يَعِيشُونَ بِمَحَبَّةٍ وَمَوَدَّةٍ وَاتَّحَادٍ وَتَعَاوُنٍ وَتَضَامُنٍ وَتَسَامُحٍ مَعَ أَنَّهُمْ مِنْ أَدْيَانٍ مُخْتَلِفَةٍ وَطَبَقَاتٍ وَنَحْوِيَّةٍ",
    english:
      "Then he describes the virtues of the people of Kerala. They live with love, affection, unity, cooperation, solidarity, and tolerance, even though they are from different religions and social classes.",
  },
  {
    arabic:
      "نَرَى فِي كَيْرَالا مَسَاجِدَ الْمُسْلِمِينَ وَهَيَاكِلَ الْهِنْدُوسِيِّينَ. وَهَذَا الْمَنْظَرُ يُوحِي رِسَالَةً التَّسَامُحِ وَأَلْفَ الأَدْيَانِ",
    english:
      "We see in Kerala the mosques of Muslims and the temples of Hindus. And this sight conveys the message of tolerance and harmony among religions.",
  },
  {
    arabic:
      "يَخْتَتِمُ الشَّاعِرُ هَذَا الْمَنْظُومَ بِتَغْبِيرِ الشُّكْرِ عَلَى حُصُولِ فُرْصَةٍ ذَهَبِيَّةٍ لِلْوِلَادَةِ فِي وِلَايَةِ كَيْرَالا الْجَمِيلَةِ. وَيُعَبِّرُ مَحَبَّتَهُ الْخَالِصَةَ بِهَا وَيُشَبَّهُ مَحَبَّتَهُ، كَمَا يَحِنُّ الظَّامِئُ مَتْهَلَ الْمَاءِ",
    english:
      "The poet concludes this poem by expressing gratitude for getting the golden opportunity of being born in the beautiful state of Kerala. And he expresses his sincere love for it, comparing his love to how a thirsty person longingly seeks a spring of water.",
  },
];

const VERSES = [
  {
    arabic:
      "١) فِيكِ الزُّرُوعُ كَأَنَّمَا هِيَ كِسْوَةٌ مِنْ سُنْدُسٍ خُضْرٌ كُسِيتِ تَجَمُّلًا",
    english:
      "1) In you are crops as if they are a garment of green silk, you were dressed in beauty.",
    explanationArabic:
      "يَقُولُ الشَّاعِرُ فِي هَذَا السَّطْرِ عَنْ مَزَارِعِ كَيْرَالا الْخَضْرَةِ، كَأَنَّهَا هِيَ كِسْوَةٌ جَمِيلَةٌ مِنْ سُنْدُسٍ، وَهَذِهِ الْمَزَارِعُ وَخُضْرَتُهَا جَعَلَتْ كَيْرَالا مَكَانًا جَمِيلًا فِي الْأَرْضِ.",
    explanationEnglish:
      "The poet says in this line about the green farms of Kerala: they are as if they are a beautiful garment of green silk (sundus), and these farms along with their greenery have made Kerala a beautiful place on earth.",
  },
  {
    arabic:
      "٢) كَمْ مَسْجِدٍ وَكَنِيسَةٍ قَدْ عَانَقَا يَا كَيْرَالَا الْحَسَنَاءُ فِيكِ الْهَيْكَلَا",
    english:
      "2) How many a mosque and church have embraced each other, O beautiful Kerala, within you are structures.",
    explanationArabic:
      "يَقُولُ الشَّاعِرُ فِي هَذَا السَّطْرِ: يُوجَدُ فِي كَيْرَالا مَعَابِدُ مُخْتَلِفَةٌ كَمَسَاجِدِ الْمُسْلِمِينَ وَكَنَائِسِ النَّصَارَى وَهَيَاكِلِ الْهُنُودِ. وَهَذِهِ الْمَعَابِدُ تُوحِي رِسَالَةً قَيِّمَةً حَوْلَ أُخُوَّةِ أَهْلِ كَيْرَالا وَتَسَامُحِهِمْ.",
    explanationEnglish:
      "The poet says in this line: There are various places of worship in Kerala, such as Muslim mosques, Christian churches, and Hindu temples. These places of worship inspire a valuable message regarding the brotherhood and tolerance of the people of Kerala.",
  },
  {
    arabic: "٣) يَا كَيْرَالَا نَهْوَاكِ حُبًّا صَادِقًا",
    english: "3) O Kerala, we love you with a sincere love.",
    explanationArabic:
      "يَقُولُ الشَّاعِرُ فِي هَذَا السَّطْرِ: إِنَّ أَهْلَ كَيْرَالا وَهُمْ يُحِبُّونَ وِلَايَتَهُمْ كَيْرَالا حُبًّا صَادِقًا كَمَا يُحِبُّ الظَّامِئُ الْمَاءَ وَمَنَاهِلَهُ.",
    explanationEnglish:
      "The poet says in this line: Indeed, the people of Kerala love their state Kerala with a sincere love, just as a thirsty person loves water and its sources.",
  },
];

const CENTRAL_MESSAGE_ARABIC =
  "هَذَا السَّطْرُ مِنْ مَنْظُومِ خَيْرِ اللَّهِ لِلشَّاعِرِ الْمَشْهُورِ ن. ك. أَحْمَدِ الْمَوْلَوِي، يَقُولُ الشَّاعِرُ فِي هَذَا الْمَنْظُومِ عَنْ وِلَايَةِ كَيْرَالا وَطَبِيعَتِهَا الْجَمِيلَةِ.";

const CENTRAL_MESSAGE_ENGLISH =
  'This line is from the poem "Khairullah" by the famous poet N.K. Ahmed Moulavi. The poet speaks in this poem about the state of Kerala and its beautiful nature.';

const PREPOSITIONS = [
  { arabic: "فِي", translit: "Fi", meaning: "In", example: "فِي الْمَهْدِ", exampleEnglish: "In the cradle" },
  { arabic: "عَلَى", translit: "Ala", meaning: "On", example: "عَلَى الْكُرْسِيِّ", exampleEnglish: "On the chair" },
  { arabic: "مِنْ", translit: "Min", meaning: "From", example: "مِنَ الْكُلِّيَةِ", exampleEnglish: "From the college" },
  { arabic: "إِلَى", translit: "Ila", meaning: "To / Towards", example: "إِلَى الْمَدْرَسَةِ", exampleEnglish: "To the school" },
  { arabic: "عَنْ", translit: "An", meaning: "About / From", example: "عَنِ الْعَلَاقَاتِ", exampleEnglish: "About the relations" },
  { arabic: "بِـ", translit: "Bi", meaning: "With / By / At", example: "بِمَدْرَسَةٍ", exampleEnglish: "At a school" },
  { arabic: "لِـ", translit: "Li", meaning: "For / Belonging to", example: "لِلطَّالِبِ", exampleEnglish: "For the student" },
];

export default function KhairullahPage() {
  return (
    <div dir="rtl">
      {/* ── 1. اللُّغَةُ العَرَبِيَّةُ فِي وِلايَةِ كَيْرَالَا ───────────────── */}
      <h2 id="language-in-kerala" className="arabic-body !text-3xl !font-bold !mt-0 !mb-1 text-foreground">
        اللُّغَةُ العَرَبِيَّةُ فِي وِلايَةِ كَيْرَالَا
      </h2>
      <p dir="ltr" className="translation !mb-2 !font-semibold !text-foreground/80">
        Arabic Language in Kerala State
      </p>
      <p dir="rtl" className="arabic-body !mb-1 !text-[1.1rem] !font-bold text-foreground/90">
        اللَّغَةُ العَرَبِيَّةُ فِي بَلَدِ اللهِ
      </p>
      <p dir="ltr" className="translation !mb-8 !font-semibold !text-foreground/80">
        Arabs&rsquo; language in God&rsquo;s own country
      </p>

      {LANGUAGE_IN_KERALA.map((item, i) => (
        <BilingualParagraph
          key={i}
          arabic={item.arabic}
          english={item.english}
        />
      ))}

      {/* ── 2. خَيْرُ الله ─────────────────────────────────────────────── */}
      <h2 id="khairullah" className="arabic-body !text-3xl !font-bold !mt-14 !mb-1 text-foreground">
        خَيْرُ اللهِ
      </h2>
      <p dir="ltr" className="translation !mb-8 !font-semibold !text-foreground/80">
        Khairullah
      </p>

      {KHAIRULLAH_INTRO.map((item, i) => (
        <BilingualParagraph
          key={i}
          arabic={item.arabic}
          english={item.english}
          number={i + 1}
        />
      ))}

      {/* ── Verses and their central message ─────────────────────────── */}
      <Callout type="note" title="نَكْتُبُ الرِّسَالَةَ الْمَرْكَزِيَّةَ لِلْبَيْتِ الْآتِي">
        <p dir="ltr" className="translation !mb-0">
          We write the central message for the following verse.
        </p>
      </Callout>

      {VERSES.map((verse, i) => (
        <div key={i}>
          {/* The verse itself */}
          <div className="my-6 rounded-2xl border border-border/60 bg-muted/25 px-5 py-4">
            <p dir="rtl" className="arabic-body !text-[1.35rem] font-bold text-foreground">
              {verse.arabic}
            </p>
            <p dir="ltr" className="translation mt-2 !mb-0 text-muted-foreground">
              {verse.english}
            </p>
          </div>

          {/* The central message written for this verse */}
          <Callout type="important" title="الرسالة المركزية · Central Message">
            <p dir="rtl" className="arabic-body !mb-1.5 text-foreground">
              {CENTRAL_MESSAGE_ARABIC}
            </p>
            <p dir="ltr" className="translation !mb-0">
              {CENTRAL_MESSAGE_ENGLISH}
            </p>
          </Callout>

          {/* What the line means */}
          <BilingualParagraph
            arabic={verse.explanationArabic}
            english={verse.explanationEnglish}
          />
        </div>
      ))}

      {/* ── Grammar Note: Prepositions ───────────────────────────────── */}
      <h2 id="prepositions" className="arabic-body !text-3xl !font-bold !mt-14 !mb-1 text-foreground">
        حُرُوفُ الْجَرِّ
      </h2>
      <p dir="ltr" className="translation !mb-6 !font-semibold !text-foreground/80">
        Grammar Note: Prepositions
      </p>

      <Callout type="note" title="المفهوم الأساسي · Core Concept">
        <ul className="mb-0 space-y-2 ps-5 list-disc">
          <li>
            <strong>Definition:</strong> <span dir="rtl" className="arabic-body !text-[1.1rem]">حُرُوفُ الْجَرِّ</span>{" "}
            (Huruf al-Jarr) are particles (prepositions) that exclusively precede nouns.
          </li>
          <li>
            <strong>The Rule:</strong> Any noun that comes immediately after a preposition is
            forced into the <strong>Genitive Case</strong> (مَجْرُورٌ — Majrour).
          </li>
          <li>
            <strong>Visual Mark:</strong> The primary sign of the genitive case in writing is a{" "}
            <strong>Kasrah</strong> at the end of the noun.
          </li>
        </ul>
      </Callout>

      <h3 id="seven-prepositions" className="arabic-body !mt-10 !mb-3 !text-lg !font-bold text-foreground">
        حُرُوفُ الْجَرِّ الْكَبِيرَةُ السَبْعَةُ
      </h3>
      <p dir="ltr" className="translation !mb-4 !font-semibold !text-foreground/80">
        The 7 Major Prepositions
      </p>

      <TableCard
        title="حُرُوفُ الْجَرِّ — The 7 Major Prepositions"
        headers={[
          "Arabic Particle",
          "Transliteration",
          "Meaning",
          "Example usage",
        ]}
        rows={PREPOSITIONS.map((p) => ({
          cells: [
            <span key="a" dir="rtl" className="arabic-body !text-[1.15rem] font-bold">
              {p.arabic}
            </span>,
            <span key="t" className="italic">
              {p.translit}
            </span>,
            p.meaning,
            <span key="e" dir="rtl" className="arabic-body !text-[1.05rem]">
              {p.example}
            </span>,
          ],
        }))}
        caption={
          <>
            The example in each row shows the noun after the preposition taking the{" "}
            <strong>Kasrah</strong> (مَجْرُورٌ).
          </>
        }
      />

      <Checklist
        title="⚠️ Quick Exam Application Checklist"
        items={[
          { label: "Spot the Preposition: Look for Fi, Ala, Min, Ila, An, Bi, Li right before a noun." },
          { label: "Check the Ending: Ensure the noun following it takes a Kasrah." },
          { label: "Common Trap: If an exam question asks to correct a sentence (e.g. changing ‘Jalasa al-walidu ala al-kursiyyu’ to ‘al-kursiyyi’), always apply the Kasrah to the noun following the preposition." },
        ]}
      />

      {/* ── Exam note ─────────────────────────────────────────────────── */}
      <KeyPoint title="ملاحظة الامتحان · Exam Note">
        <p dir="rtl" className="arabic-body !mb-1.5 text-foreground">
          عِنْدَ سُؤَالٍ عَنْ جَمَالِ كَيْرَالا، اسْتَخْدِمِ النُّقَاطَ ١، ٢، ٣، ٤، ٥.
        </p>
        <p dir="ltr" className="translation !mb-0">
          If the question asks about the beauty of Kerala, use points 1, 2, 3, 4 and 5.
        </p>
      </KeyPoint>
    </div>
  );
}
