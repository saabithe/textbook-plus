import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import {
  class11Chapters,
  getClass11SubjectBySlug,
  getClass11ChapterBySlugFromAll,
  getAdjacentClass11Chapters,
} from "@/data/class11";
import { ChapterLayout } from "@/components/chapter/ChapterLayout";
import { Class11ChapterContent } from "./class-11-chapter-content";

export function generateStaticParams() {
  return Object.entries(class11Chapters).flatMap(([subjectSlug, chapters]) =>
    chapters.map((ch) => ({ subject: subjectSlug, slug: ch.slug }))
  );
}

interface Props {
  params: Promise<{ subject: string; slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const chapter = getClass11ChapterBySlugFromAll(slug);
  if (!chapter) return { title: "Not Found" };
  const subject = getClass11SubjectBySlug(chapter.subjectSlug);
  return {
    title: `${chapter.title} — ${subject?.name ?? ""} (Class 11) | Textbook++`,
    description: `Class 11 ${subject?.name ?? ""} — ${chapter.title}`,
  };
}

export default async function Class11ChapterPage({ params }: Props) {
  const { subject, slug } = await params;
  const chapter = getClass11ChapterBySlugFromAll(slug);
  if (!chapter || chapter.subjectSlug !== subject) notFound();

  const subjectData = getClass11SubjectBySlug(subject);
  if (!subjectData) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ChapterLayout
          chapter={chapter}
          subjectName={subjectData.name}
          subjectSlug={subjectData.slug}
          subjectColor={subjectData.color}
          subtitle="Class 11 Improvement Exam"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Class 11", href: "/class-11" },
            { label: subjectData.name, href: `/class-11/${subject}` },
            { label: chapter.title },
          ]}
          prevNext={getAdjacentClass11Chapters(chapter)}
          navBasePath={`/class-11/${subject}`}
          contentKey={`c11/${subject}/${slug}`}
        >
          <Class11ChapterContent subject={subject} slug={slug} />
        </ChapterLayout>
      </main>
    </>
  );
}
