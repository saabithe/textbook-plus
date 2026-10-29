import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { getDiscourseTopicBySlug, discourseTopics } from "@/data/discourses";
import { DiscourseContent } from "./discourse-content";

export function generateStaticParams() {
  return discourseTopics.map((t) => ({ topic: t.slug }));
}

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { topic: slug } = await params;
  const topic = getDiscourseTopicBySlug(slug);
  if (!topic) return { title: "Not Found" };
  return {
    title: `${topic.title} — Discourses — Textbook++`,
    description: topic.tagline,
  };
}

export default async function DiscourseTopicPage({ params }: Props) {
  const { topic: slug } = await params;
  const topic = getDiscourseTopicBySlug(slug);
  if (!topic) notFound();

  const Icon = topic.icon;

  const currentIndex = discourseTopics.findIndex((t) => t.slug === slug);
  const prev = currentIndex > 0 ? discourseTopics[currentIndex - 1] : null;
  const next = currentIndex < discourseTopics.length - 1 ? discourseTopics[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-6 sm:pt-12">
          <nav aria-label="Breadcrumb" className="t-micro mb-8 flex flex-wrap items-center gap-2">
            <Link href="/subjects/english" className="transition-colors hover:text-foreground">English</Link>
            <span className="text-faint">/</span>
            <Link href="/discourses" className="transition-colors hover:text-foreground">Discourses</Link>
            <span className="text-faint">/</span>
            <span className="text-foreground">{topic.title}</span>
          </nav>

          <header className="border-b border-border pb-8">
            <div className="flex items-center gap-2.5">
              <Icon
                aria-hidden
                className="h-5 w-5 shrink-0"
                style={{ color: "var(--subject-english)" }}
                strokeWidth={1.8}
              />
              <p className="t-micro">Discourse · English</p>
            </div>
            <h1 className="t-title mt-3">{topic.title}</h1>
            <p className="t-lead mt-4 max-w-2xl">{topic.tagline}</p>
          </header>

          <div className="mx-auto mt-10 max-w-3xl">
            <DiscourseContent slug={slug} />
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4">
            {prev ? (
              <a
                href={`/discourses/${prev.slug}`}
                className="group flex min-w-0 flex-col gap-1 border border-border bg-card px-4 py-3 transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:border-rule-strong"
              >
                <span className="t-micro">Previous</span>
                <span className="flex min-w-0 items-center gap-2 text-[15px] font-semibold text-foreground">
                  <span aria-hidden className="text-muted-foreground">&larr;</span>
                  <span className="truncate">{prev.title}</span>
                </span>
              </a>
            ) : <div />}
            {next ? (
              <a
                href={`/discourses/${next.slug}`}
                className="group flex min-w-0 flex-col items-end gap-1 border border-border bg-card px-4 py-3 text-right transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:border-rule-strong"
              >
                <span className="t-micro">Next</span>
                <span className="flex min-w-0 items-center gap-2 text-[15px] font-semibold text-foreground">
                  <span className="truncate">{next.title}</span>
                  <span aria-hidden className="text-muted-foreground">&rarr;</span>
                </span>
              </a>
            ) : <div />}
          </div>
        </section>
      </main>
    </>
  );
}
