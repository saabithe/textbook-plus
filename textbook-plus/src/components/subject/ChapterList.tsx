import { getChaptersBySubject, subjectUnits } from "@/data/chapters";
import { ChapterRow } from "@/components/app/ChapterRow";

interface ChapterListProps {
  subjectSlug: string;
  subjectColor: string;
}

export function ChapterList({ subjectSlug, subjectColor }: ChapterListProps) {
  const chapters = getChaptersBySubject(subjectSlug);
  const units = subjectUnits[subjectSlug];

  // Subjects without units render a flat list of hairline rows.
  if (!units?.length) {
    return (
      <div className="flex flex-col border-t border-border">
        {chapters.map((chapter) => (
          <ChapterRow
            key={chapter.id}
            href={`/chapter/${chapter.slug}`}
            number={chapter.number}
            title={chapter.title}
            meta={chapter.titleArabic ? chapter.title : undefined}
            color={subjectColor}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      {units.map((unit, index) => {
        const unitChapters = chapters.filter((c) => c.unit === unit.unit);
        if (!unitChapters.length) return null;

        return (
          <section
            key={unit.unit}
            className={index === 0 ? undefined : "mt-10"}
            aria-label={unit.label}
          >
            <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 border-b border-border pb-2">
              <h2 className="t-micro">{unit.label}</h2>
              {unit.labelArabic && (
                <span
                  dir="rtl"
                  className="arabic-font text-sm font-semibold text-foreground"
                >
                  {unit.labelArabic}
                </span>
              )}
              {unit.labelEnglish && (
                <span className="text-sm font-semibold text-foreground">
                  {unit.labelEnglish}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              {unitChapters.map((chapter) => (
                <ChapterRow
                  key={chapter.id}
                  href={`/chapter/${chapter.slug}`}
                  number={chapter.number}
                  title={chapter.titleArabic ?? chapter.title}
                  meta={
                    chapter.titleArabic
                      ? chapter.title
                      : undefined
                  }
                  titleDir={chapter.titleArabic ? "rtl" : "ltr"}
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
