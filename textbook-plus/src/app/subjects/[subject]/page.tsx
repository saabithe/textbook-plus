import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { ChapterList } from "@/components/subject/ChapterList";
import { getSubjectBySlug, subjects } from "@/data/subjects";
import { grammarTopics } from "@/data/grammar";
import { discourseTopics } from "@/data/discourses";
import { arabicDiscourseTopics } from "@/data/arabic-discourses";

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
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-6 sm:pt-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="t-micro mb-8 flex items-center gap-2">
            <Link href="/" className="transition-colors hover:text-foreground">
              Subjects
            </Link>
            <span className="text-faint">/</span>
            <span className="text-foreground">{subject.name}</span>
          </nav>

          {/* Subject header */}
          <header className="border-b border-border pb-8">
            <div className="flex items-center gap-2.5">
              <Icon
                aria-hidden
                className="h-5 w-5 shrink-0"
                style={{ color: subject.color }}
                strokeWidth={1.8}
              />
              <p className="t-micro tabular-nums">
                {subject.name} · {subject.chapterCount} chapters
              </p>
            </div>
            <h1 className="t-title mt-3">{subject.name}</h1>
            <p className="t-lead mt-4 max-w-2xl">{subject.description}</p>
          </header>

          {slug === "english" && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link
                href="/grammar"
                className="group flex items-start justify-between gap-4 border border-border border-l-[3px] bg-card p-5 transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:border-rule-strong"
                style={{ borderLeftColor: subject.color }}
              >
                <div>
                  <h2 className="t-h4">Grammar</h2>
                  <p className="t-caption mt-1.5">
                    {grammarTopics.length} topics — rules, examples &amp; practice
                  </p>
                </div>
                <ArrowRight
                  aria-hidden
                  className="mt-1 h-4 w-4 shrink-0 text-faint transition-transform duration-[120ms] ease-[var(--ease-blueprint)] group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/discourses"
                className="group flex items-start justify-between gap-4 border border-border border-l-[3px] bg-card p-5 transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:border-rule-strong"
                style={{ borderLeftColor: subject.color }}
              >
                <div>
                  <h2 className="t-h4">Discourses</h2>
                  <p className="t-caption mt-1.5">
                    {discourseTopics.reduce((total, topic) => total + topic.formats.length, 0)} writing formats — structure, tips &amp; samples
                  </p>
                </div>
                <ArrowRight
                  aria-hidden
                  className="mt-1 h-4 w-4 shrink-0 text-faint transition-transform duration-[120ms] ease-[var(--ease-blueprint)] group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          )}

          {slug === "arabic" && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link
                href="/arabic/discourses"
                className="group flex items-start justify-between gap-4 border border-border border-l-[3px] bg-card p-5 transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:border-rule-strong"
                style={{ borderLeftColor: subject.color }}
              >
                <div>
                  <h2 className="t-h4">Discourses</h2>
                  <p className="t-caption mt-1.5">
                    {arabicDiscourseTopics.length} writing {arabicDiscourseTopics.length === 1 ? "frame" : "frames"} — templates &amp; structures
                  </p>
                </div>
                <ArrowRight
                  aria-hidden
                  className="mt-1 h-4 w-4 shrink-0 text-faint transition-transform duration-[120ms] ease-[var(--ease-blueprint)] group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          )}

          {/* Chapter list — hairline rows */}
          <div className="mt-10">
            <ChapterList subjectSlug={subject.slug} subjectColor={subject.color} />
          </div>
        </section>
      </main>
    </>
  );
}
