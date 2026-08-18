import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { getChapterBySlugFromAll, getAllChapters } from "@/data/chapters";
import { getSubjectBySlug } from "@/data/subjects";
import { ChapterLayout } from "@/components/chapter/ChapterLayout";
import { MDXContent } from "./mdx-content";

export function generateStaticParams() {
  return getAllChapters().map((ch) => ({ slug: ch.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const chapter = getChapterBySlugFromAll(slug);
    if (!chapter) return { title: "Chapter Not Found" };
    const subject = getSubjectBySlug(chapter.subjectSlug);
    return {
      title: `${chapter.title} — ${subject?.name ?? ""} | Textbook++`,
      description: `Chapter ${chapter.number}: ${chapter.title}`,
    };
  });
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapterBySlugFromAll(slug);

  if (!chapter) notFound();

  const subject = getSubjectBySlug(chapter.subjectSlug);
  if (!subject) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ChapterLayout
          chapter={chapter}
          subjectName={subject.name}
          subjectSlug={subject.slug}
          subjectColor={subject.color}
        >
          <MDXContent slug={slug} />
        </ChapterLayout>
      </main>
    </>
  );
}
