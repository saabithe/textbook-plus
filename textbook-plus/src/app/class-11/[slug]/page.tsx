import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Class11ChapterList } from "@/components/subject/Class11ChapterList";
import { getClass11SubjectBySlug, class11Subjects, getClass11Chapters } from "@/data/class11";

export function generateStaticParams() {
  return class11Subjects.map((s) => ({ slug: s.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const subject = getClass11SubjectBySlug(slug);
  if (!subject) return { title: "Not Found" };
  return {
    title: `${subject.name} (Class 11) — Textbook++`,
    description: subject.description,
  };
}

export default async function Class11SubjectPage({ params }: Props) {
  const { slug } = await params;
  const subject = getClass11SubjectBySlug(slug);

  if (!subject) notFound();

  const Icon = subject.icon;
  const chapters = getClass11Chapters(subject.slug);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-14">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/class-11" className="transition-colors hover:text-foreground">
              Class 11 Improvement Exam
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{subject.name}</span>
          </nav>

          {/* Subject header */}
          <div className="mb-10 flex items-center gap-4 sm:mb-12 sm:gap-5">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl sm:h-16 sm:w-16 sm:rounded-2xl"
              style={{ backgroundColor: subject.colorLight }}
            >
              <Icon
                className="h-6 w-6 sm:h-8 sm:w-8"
                style={{ color: subject.color }}
                strokeWidth={1.8}
              />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {subject.name}
              </h1>
              <p className="mt-1 text-base text-muted-foreground">
                Class 11 Improvement Exam · {chapters.length} chapters
              </p>
            </div>
          </div>

          {/* Chapter list */}
          <Class11ChapterList subjectSlug={subject.slug} subjectColor={subject.color} />
        </section>
      </main>
    </>
  );
}