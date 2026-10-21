import { getChaptersBySubject, subjectUnits } from "@/data/chapters";
import { ChapterRow } from "@/components/app/ChapterRow";

interface ChapterListProps {
  subjectSlug: string;
  subjectColor: string;
}

export function ChapterList({ subjectSlug, subjectColor }: ChapterListProps) {
  const chapters = getChaptersBySubject(subjectSlug);
  const units = subjectUnits[subjectSlug];

  // Subjects without units render a flat list.
  if (!units?.length) {
    return (
      <div className="flex flex-col gap-2">
        {chapters.map((chapter) => (
          <ChapterRow
            key={chapter.id}
            href={`/chapter/${chapter.slug}`}
            number={chapter.number}
            title={chapter.title}
            meta={`${chapter.topicCount} topics`}
            color={subjectColor}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-9">
      {units.map((unit) => {
        const unitChapters = chapters.filter((c) => c.unit === unit.unit);
        if (!unitChapters.length) return null;

        return (
          <section key={unit.unit}>
            <h2 className="flex items-baseline gap-2.5 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
              <span>{unit.label}</span>
              {unit.labelArabic && (
                <span dir="rtl" className="text-sm font-bold normal-case tracking-normal text-foreground/80">
                  {unit.labelArabic}
                </span>
              )}
            </h2>
            <div className="mt-2 flex flex-col gap-2">
              {unitChapters.map((chapter) => (
                <ChapterRow
                  key={chapter.id}
                  href={`/chapter/${chapter.slug}`}
                  number={chapter.number}
                  title={chapter.titleArabic ?? chapter.title}
                  meta={chapter.titleArabic ? chapter.title : `${chapter.topicCount} topics`}
                  color={subjectColor}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
