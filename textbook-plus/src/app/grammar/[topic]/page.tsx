import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { getGrammarTopicBySlug, grammarTopics } from "@/data/grammar";
import { GrammarContent } from "./grammar-content";

export function generateStaticParams() {
  return grammarTopics.map((t) => ({ topic: t.slug }));
}

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { topic: slug } = await params;
  const topic = getGrammarTopicBySlug(slug);
  if (!topic) return { title: "Not Found" };
  return {
    title: `${topic.title} — Grammar — Textbook++`,
    description: topic.tagline,
  };
}

export default async function GrammarTopicPage({ params }: Props) {
  const { topic: slug } = await params;
  const topic = getGrammarTopicBySlug(slug);
  if (!topic) notFound();

  const Icon = topic.icon;

  const currentIndex = grammarTopics.findIndex((t) => t.slug === slug);
  const prev = currentIndex > 0 ? grammarTopics[currentIndex - 1] : null;
  const next = currentIndex < grammarTopics.length - 1 ? grammarTopics[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-[1280px] px-6 py-10">
          <nav className="mb-6 t-micro text-muted-foreground">
            <Link href="/subjects/english" className="hover:text-foreground transition-colors">
              English
            </Link>
            <span className="mx-2">/</span>
            <Link href="/grammar" className="hover:text-foreground transition-colors">
              Grammar
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{topic.title}</span>
          </nav>

          <div className="mb-10 flex items-center gap-4">
            <Icon
              className="h-6 w-6 text-[var(--subject-english)]"
              strokeWidth={1.8}
            />
            <div>
              <h1 className="t-h1 text-foreground">{topic.title}</h1>
              <p className="mt-1 t-caption text-muted-foreground">{topic.tagline}</p>
            </div>
          </div>

          <GrammarContent slug={slug} />

          <div className="mx-auto mt-14 flex max-w-[72ch] justify-between gap-4">
            {prev ? (
              <Link
                href={`/grammar/${prev.slug}`}
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-rule-strong hover:bg-foreground/[0.03]"
              >
                <span className="text-xs">←</span>
                <span>{prev.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/grammar/${next.slug}`}
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-rule-strong hover:bg-foreground/[0.03]"
              >
                <span>{next.title}</span>
                <span className="text-xs">→</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>
    </>
  );
}
