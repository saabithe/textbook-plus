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
        <section className="mx-auto max-w-6xl px-6 py-14">
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link href="/subjects/english" className="hover:text-foreground transition-colors">English</Link>
            <span className="mx-2">/</span>
            <Link href="/discourses" className="hover:text-foreground transition-colors">Discourses</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{topic.title}</span>
          </nav>

          <div className="mb-10 flex items-center gap-4 sm:mb-12 sm:gap-5">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl sm:h-16 sm:w-16 sm:rounded-2xl"
              style={{ backgroundColor: "var(--subject-english-light)" }}
            >
              <Icon
                className="h-6 w-6 sm:h-8 sm:w-8"
                style={{ color: "var(--subject-english)" }}
                strokeWidth={1.8}
              />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {topic.title}
              </h1>
              <p className="mt-1 text-base text-muted-foreground">
                {topic.tagline}
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <DiscourseContent slug={slug} />
          </div>

          <div className="mx-auto max-w-3xl mt-14 flex justify-between gap-4">
            {prev ? (
              <a
                href={`/discourses/${prev.slug}`}
                className="flex items-center gap-2 rounded-xl border border-border/60 px-4 py-3 text-sm text-muted-foreground hover:bg-muted transition-colors"
              >
                <span className="text-xs">&larr;</span>
                <span>{prev.title}</span>
              </a>
            ) : <div />}
            {next ? (
              <a
                href={`/discourses/${next.slug}`}
                className="flex items-center gap-2 rounded-xl border border-border/60 px-4 py-3 text-sm text-muted-foreground hover:bg-muted transition-colors"
              >
                <span>{next.title}</span>
                <span className="text-xs">&rarr;</span>
              </a>
            ) : <div />}
          </div>
        </section>
      </main>
    </>
  );
}
