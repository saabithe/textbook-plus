import { Comparison } from "@/components/content/Comparison";
import { Callout } from "@/components/content/Callout";

const TEMPLATE_PARAGRAPHS = [
  "هَذَا السَّطْرُ مِنْ مَنْظُومِ [INSERT POEM NAME IN ARABIC] لِلشَّاعِرِ الْمَشْهُورِ [INSERT POET NAME IN ARABIC]، يَقُولُ الشَّاعِرُ فِي هَذَا الْمَنْظُومِ عَنْ [INSERT GENERAL THEME OF THE POEM IN ARABIC].",
  "وَيُعَبِّرُ الشَّاعِرُ فِي هَذَا السَّطْرِ عَنْ مَعَانٍ عَظِيمَةٍ وَأَفْكَارٍ قَيِّمَةٍ، حَيْثُ يَقُولُ: [INSERT SIMPLE EXPLANATION OF THE LINE IN ARABIC].",
  "وَهَذِهِ الْفِكْرَةُ تُوَضِّحُ لَنَا [CHOOSE ONE MATCHING OPTION BELOW]، وَتَجْعَلُ القَارِئَ يُدْرِكُ أَهَمِّيَّةَ هَذَا الْمَوْضُوعِ الجَمِيلِ فِي حَيَاتِنَا.",
];

const ENGLISH_PARAGRAPHS = [
  "This line is from the poem [Insert Poem Name] by the famous poet [Insert Poet Name]. The poet speaks in this poem about [Insert General Theme of the Poem].",
  "The poet expresses in this line great meanings and valuable ideas, as he says: [Insert Simple Explanation of the Line].",
  "And this idea clarifies to us [Insert Choice A, B, or C based on the poem], and makes the reader realize the importance of this beautiful topic in our lives.",
];

export default function CentralMessagePage() {
  return (
    <div dir="rtl">
      <h2 className="arabic-body !text-3xl !font-bold !mt-0 !mb-1 text-foreground">
        الرِّسَالَةُ الْمَرْكَزِيَّةُ
      </h2>
      <p dir="ltr" className="translation !mb-8 !font-semibold !text-foreground/80">
        Modular Universal Central Message Template
      </p>

      {/* ── The Arabic template ──────────────────────────────────────── */}
      <Callout type="important" title="القَالِبُ العَرَبِيُّ · Arabic Template">
        <p dir="ltr" className="translation !mb-3 !text-[0.85rem] !font-bold !uppercase !tracking-[0.1em] !text-muted-foreground">
          Fill in the placeholders
        </p>
        {TEMPLATE_PARAGRAPHS.map((paragraph, i) => (
          <p key={i} dir="rtl" className="arabic-body !mb-2 text-foreground">
            {paragraph}
          </p>
        ))}
      </Callout>

      {/* ── Modular endings ──────────────────────────────────────────── */}
      <h3 className="arabic-body !mt-10 !mb-1 !text-lg !font-bold text-foreground">
        اخْتَرِ الخِتَامَةَ الْمُنَاسِبَةَ
      </h3>
      <p dir="ltr" className="translation !mb-5 !font-semibold !text-foreground/80">
        Choose Your Ending (Modular Options for the Last Sentence)
      </p>

      <Comparison
        columns={[
          {
            title: "Option A — Homeland & Nature",
            children: (
              <>
                <p dir="rtl" className="arabic-body !mb-2 text-foreground">
                  حُبَّ الشَّاعِرِ الْعَمِيقِ لِوَطَنِهِ وَاهْتِمَامَهُ بِجَمَالِهِ
                </p>
                <p dir="ltr" className="text-[0.95rem] leading-[1.7] text-foreground/85">
                  The poet&rsquo;s deep love for his homeland and his care for its beauty.
                </p>
                <p dir="ltr" className="mt-2 text-[0.85rem] text-muted-foreground">
                  For patriotism, nature and homeland poems.
                </p>
              </>
            ),
          },
          {
            title: "Option B — Social & Political",
            children: (
              <>
                <p dir="rtl" className="arabic-body !mb-2 text-foreground">
                  ضَرُورَةَ اليَقَظَةِ، وَمُوَاجَهَةِ الظُّلْمِ، وَرَفْضِ الخُمُولِ وَالسُّكُوتِ
                </p>
                <p dir="ltr" className="text-[0.95rem] leading-[1.7] text-foreground/85">
                  The necessity of awakening, confronting injustice, and rejecting complacency
                  and silence.
                </p>
                <p dir="ltr" className="mt-2 text-[0.85rem] text-muted-foreground">
                  For social, political and protest poems — e.g. Al-Rusafi.
                </p>
              </>
            ),
          },
          {
            title: "Option C — Language & Culture",
            children: (
              <>
                <p dir="rtl" className="arabic-body !mb-2 text-foreground">
                  مَكَانَةَ اللُّغَةِ العَرَبِيَّةِ العَظِيمَةَ وَضَرُورَةَ الحِفَاظِ عَلَيْهَا وَفَخْرَ بِنَائِهَا
                </p>
                <p dir="ltr" className="text-[0.95rem] leading-[1.7] text-foreground/85">
                  The great status of the Arabic language, the necessity of preserving it, and
                  pride in it.
                </p>
                <p dir="ltr" className="mt-2 text-[0.85rem] text-muted-foreground">
                  For language and cultural poems — e.g. the Arabic language.
                </p>
              </>
            ),
          },
        ]}
      />

      {/* ── Full English translation ─────────────────────────────────── */}
      <h3 className="arabic-body !mt-12 !mb-1 !text-lg !font-bold text-foreground">
        التَّرْجَمَةُ الْكَامِلَةُ
      </h3>
      <p dir="ltr" className="translation !mb-5 !font-semibold !text-foreground/80">
        Full English Translation of the Modular Template
      </p>

      <Callout type="note" title="English Translation">
        {ENGLISH_PARAGRAPHS.map((paragraph, i) => (
          <p key={i} dir="ltr" className="translation !mb-2 last:!mb-0">
            {paragraph}
          </p>
        ))}
      </Callout>
    </div>
  );
}
