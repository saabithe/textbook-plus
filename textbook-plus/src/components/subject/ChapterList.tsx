import { getChaptersBySubject } from "@/data/chapters";
import { ChapterRow } from "@/components/app/ChapterRow";

interface ChapterListProps {
  subjectSlug: string;
  subjectColor: string;
}

export function ChapterList({ subjectSlug, subjectColor }: ChapterListProps) {
  const chapters = getChaptersBySubject(subjectSlug);

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
