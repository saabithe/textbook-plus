import { ChapterIntro } from "@/components/content/ChapterIntro";
import type { Chapter } from "@/data/chapters";

/**
 * The strip that opens every Arabic chapter: who wrote it, what kind of text
 * it is, and — behind a collapsed dropdown — the finer facts about the author.
 * Chapters whose details have not been written yet carry a placeholder instead.
 */
export function ArabicChapterCard({ chapter }: { chapter: Chapter }) {
  const details = chapter.authorDetails ?? [];

  return (
    <ChapterIntro
      dir="rtl"
      className="arabic-font-ui"
      role="Author / Orator"
      author={chapter.authorArabic ?? chapter.author ?? "—"}
      subname={chapter.authorArabic ? chapter.author : undefined}
      genre={chapter.genre}
      genreArabic={chapter.genreArabic}
    >
      {details.length > 0 ? (
        <dl className="space-y-3">
          {details.map((detail) => (
            <div key={detail.label} className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
              <dt className="text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
                {detail.labelArabic ? `${detail.label} · ${detail.labelArabic}` : detail.label}
              </dt>
              <dd dir="auto" className="text-[0.95rem] font-semibold text-foreground">
                {detail.valueArabic ? `${detail.valueArabic} (${detail.value})` : detail.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="text-[0.95rem] italic text-muted-foreground/70">
          Author details to be added — to be filled in chapter by chapter.
        </p>
      )}
    </ChapterIntro>
  );
}
