import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import {
  class11Chapters,
  getClass11SubjectBySlug,
  getClass11ChapterBySlugFromAll,
  getAdjacentClass11Chapters,
} from "@/data/class11";
import { ChevronLeft, ChevronRight, Construction } from "lucide-react";

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

  const { prev, next } = getAdjacentClass11Chapters(chapter);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-10">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/class-11" className="transition-colors hover:text-foreground">
              Class 11
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href={`/class-11/${subject}`}
              className="transition-colors hover:text-foreground"
            >
              {subjectData.name}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground truncate">{chapter.title}</span>
          </nav>

          {/* Chapter header */}
          <div className="mb-10 flex items-center gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
              style={{ backgroundColor: subjectData.color }}
            >
              {String(chapter.number).padStart(2, "0")}
            </span>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                {chapter.title}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {subjectData.name} · Class 11 Improvement Exam
              </p>
            </div>
          </div>

          {/* Content coming soon */}
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-card px-6 py-16 text-center">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-xl"
              style={{ backgroundColor: subjectData.colorLight }}
            >
              <Construction
                className="h-7 w-7"
                style={{ color: subjectData.color }}
                strokeWidth={1.8}
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">
                Content coming soon
              </h2>
              <p className="mt-1 text-sm text-muted-foreground max-w-md leading-relaxed">
                Detailed notes, examples, and practice for this chapter are being
                prepared. Check back shortly.
              </p>
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="mt-12 flex items-stretch gap-3">
            {prev ? (
              <Link
                href={`/class-11/${subject}/${prev.slug}`}
                className="group flex flex-1 items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 transition-all duration-200 hover:border-border hover:bg-muted/30 hover:shadow-sm"
              >
                <ChevronLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-x-0.5" />
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-muted-foreground/60">
                    Previous
                  </span>
                  <p className="truncate text-sm font-medium text-foreground">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {next ? (
              <Link
                href={`/class-11/${subject}/${next.slug}`}
                className="group flex flex-1 items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 text-right transition-all duration-200 hover:border-border hover:bg-muted/30 hover:shadow-sm"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-muted-foreground/60">
                    Next
                  </span>
                  <p className="truncate text-sm font-medium text-foreground">
                    {next.title}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </section>
      </main>
    </>
  );
}