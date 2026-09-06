import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Class11ChapterList } from "@/components/subject/Class11ChapterList";
import { getClass11SubjectBySlug, class11Subjects, getClass11Chapters } from "@/data/class11";

export function generateStaticParams() {
  return class11Subjects.map((s) => ({ subject: s.slug }));
}

interface Props {
  params: Promise<{ subject: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { subject: subjectSlug } = await params;
  const subject = getClass11SubjectBySlug(subjectSlug);
  if (!subject) return { title: "Not Found" };
  return {
    title: `${subject.name} (Class 11) — Textbook++`,
    description: subject.description,
  };
}

export default async function Class11SubjectPage({ params }: Props) {
  const { subject: subjectSlug } = await params;
  const subject = getClass11SubjectBySlug(subjectSlug);

  if (!subject) notFound();

  const Icon = subject.icon;
  const chapters = getClass11Chapters(subject.slug);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-14">
          {/* Breadcrumb */}
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
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

          {subject.slug === "physics" && (
            <div className="mt-8">
              <h2 className="mb-3 text-lg font-bold text-foreground">Resources</h2>
              <Link
                href="/class-11/physics/derivation-sheet"
                className="group flex items-center gap-4 rounded-xl border border-transparent bg-card px-5 py-4 shadow-sm transition-all duration-200 hover:border-border/60 hover:shadow-md"
              >
                <span
                  className="flex h-10 min-w-10 items-center justify-center rounded-lg text-base font-bold sm:h-11 sm:min-w-11"
                  style={{
                    backgroundColor: subject.color + "15",
                    color: subject.color,
                  }}
                >
                  ∑
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="text-sm font-medium text-foreground sm:text-[15px]">
                    Complete Derivation Sheet
                  </span>
                  <span className="text-xs text-muted-foreground/60">
                    All derivations from every chapter, step by step
                  </span>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-muted-foreground/70" />
              </Link>
            </div>
          )}
        </section>
      </main>
    </>
  );
}