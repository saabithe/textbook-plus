import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { arabicDiscourseTopics, getArabicDiscourseTopicBySlug } from "@/data/arabic-discourses";
import { ArabicDiscourseContent } from "./arabic-discourse-content";

export function generateStaticParams() {
  return arabicDiscourseTopics.map((t) => ({ topic: t.slug }));
}

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { topic: slug } = await params;
  const topic = getArabicDiscourseTopicBySlug(slug);
  if (!topic) return { title: "Not Found" };
  return {
    title: `${topic.title} — Arabic Discourses — Textbook++`,
    description: topic.tagline,
  };
}

export default async function ArabicDiscourseTopicPage({ params }: Props) {
  const { topic: slug } = await params;
  const topic = getArabicDiscourseTopicBySlug(slug);
  if (!topic) notFound();

  const Icon = topic.icon;

  const currentIndex = arabicDiscourseTopics.findIndex((t) => t.slug === slug);
  const prev = currentIndex > 0 ? arabicDiscourseTopics[currentIndex - 1] : null;
  const next = currentIndex < arabicDiscourseTopics.length - 1 ? arabicDiscourseTopics[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-6 sm:pt-12">
          <nav aria-label="Breadcrumb" className="t-micro mb-8 flex flex-wrap items-center gap-2">
            <Link href="/subjects/arabic" className="transition-colors hover:text-foreground">
              Arabic
            </Link>
            <span className="text-faint">/</span>
            <Link href="/arabic/discourses" className="transition-colors hover:text-foreground">
              Discourses
            </Link>
            <span className="text-faint">/</span>
            <span className="text-foreground">{topic.title}</span>
          </nav>

          <header className="border-b border-border pb-8">
            <div className="flex items-center gap-2.5">
              <Icon
                aria-hidden
                className="h-5 w-5 shrink-0"
                style={{ color: "var(--subject-arabic)" }}
                strokeWidth={1.8}
              />
              <p className="t-micro">Discourse · Arabic</p>
            </div>
            <h1 dir="rtl" className="t-title arabic-body mt-3">
              {topic.titleArabic}
            </h1>
            <p dir="ltr" className="t-lead mt-4 max-w-2xl">
              {topic.title} — {topic.tagline}
            </p>
          </header>

          <div className="mx-auto mt-10 max-w-3xl">
            <ArabicDiscourseContent slug={slug} />
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4">
            {prev ? (
              <a
                href={`/arabic/discourses/${prev.slug}`}
                className="group flex min-w-0 flex-col gap-1 border border-border bg-card px-4 py-3 transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:border-rule-strong"
              >
                <span className="t-micro">Previous</span>
                <span className="flex min-w-0 items-center gap-2 text-[15px] font-semibold text-foreground">
                  <span aria-hidden className="text-muted-foreground">&larr;</span>
                  <span className="truncate">{prev.title}</span>
                </span>
              </a>
            ) : (
              <div />
            )}
            {next ? (
              <a
                href={`/arabic/discourses/${next.slug}`}
                className="group flex min-w-0 flex-col items-end gap-1 border border-border bg-card px-4 py-3 text-right transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:border-rule-strong"
              >
                <span className="t-micro">Next</span>
                <span className="flex min-w-0 items-center gap-2 text-[15px] font-semibold text-foreground">
                  <span className="truncate">{next.title}</span>
                  <span aria-hidden className="text-muted-foreground">&rarr;</span>
                </span>
              </a>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>
    </>
  );
}