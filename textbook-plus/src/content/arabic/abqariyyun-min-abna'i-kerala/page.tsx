import { BilingualParagraph } from "@/components/content/BilingualParagraph";
import { Callout } from "@/components/content/Callout";
import { Stepper } from "@/components/content/Stepper";

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
    </div>
  );
}
