import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { ChapterList } from "@/components/subject/ChapterList";
import { getSubjectBySlug, subjects } from "@/data/subjects";

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.slug }));
}

interface Props {
  params: Promise<{ subject: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { subject: slug } = await params;
  const subject = getSubjectBySlug(slug);
  if (!subject) return { title: "Not Found" };
  return {
    title: `${subject.name} — Textbook++`,
    description: `Class 12 ${subject.name} chapters`,
  };
}

export default async function SubjectPage({ params }: Props) {
  const { subject: slug } = await params;
  const subject = getSubjectBySlug(slug);

  if (!subject) notFound();

  const Icon = subject.icon;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 py-14">
          {/* Subject header */}
          <div className="mb-12 flex items-center gap-5">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ backgroundColor: subject.colorLight }}
            >
              <Icon
                className="h-8 w-8"
                style={{ color: subject.color }}
                strokeWidth={1.8}
              />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {subject.name}
              </h1>
              <p className="mt-1 text-base text-muted-foreground">
                {subject.chapterCount} chapters
              </p>
            </div>
          </div>

          {/* Chapter list */}
          <ChapterList subjectSlug={subject.slug} subjectColor={subject.color} />
        </section>
      </main>
    </>
  );
}
