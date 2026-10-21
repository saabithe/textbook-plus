import { BilingualParagraph } from "@/components/content/BilingualParagraph";

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
    </div>
  );
}
