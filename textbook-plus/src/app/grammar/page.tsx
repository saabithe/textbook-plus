import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { coreGrammarTopics, moreGrammarTopics, type GrammarTopic } from "@/data/grammar";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Grammar — Textbook++",
  description: "Core English grammar topics for Kerala Board Class 12",
};

function TopicGrid({ topics }: { topics: GrammarTopic[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => {
        const Icon = topic.icon;
        return (
          <Link
            key={topic.slug}
            href={`/grammar/${topic.slug}`}
            className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors duration-[120ms] ease-blueprint hover:border-rule-strong hover:bg-foreground/[0.03]"
          >
            <Icon
              className="h-5 w-5 text-[var(--subject-english)]"
              strokeWidth={1.8}
            />
            <div>
              <div className="flex items-start justify-between gap-2">
                <h2 className="t-h3 text-foreground group-hover:text-[var(--subject-english)] transition-colors">
                  {topic.title}
                </h2>
                {topic.tag && (
                  <span className="shrink-0 rounded-[3px] border border-border px-2 py-0.5 t-micro text-[var(--subject-english)]">
                    {topic.tag}
                  </span>
                )}
              </div>
              <p className="mt-1 t-caption text-muted-foreground">
                {topic.tagline}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function GrammarPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-[1280px] px-6 py-14">
          <nav className="mb-6 t-micro text-muted-foreground">
            <Link href="/subjects/english" className="hover:text-foreground transition-colors">
              English
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Grammar</span>
          </nav>

          <div className="mb-10">
            <h1 className="t-h1 text-foreground">Grammar</h1>
            <p className="mt-2 t-caption text-muted-foreground">
              {coreGrammarTopics.length + moreGrammarTopics.length} topics — rules, examples &amp; practice
            </p>
          </div>

          <TopicGrid topics={coreGrammarTopics} />

          <div className="mt-12 mb-6">
            <Separator />
            <h2 className="mt-5 t-h2 text-foreground">More Grammar Topics</h2>
          </div>

          <TopicGrid topics={moreGrammarTopics} />
        </section>
      </main>
    </>
  );
}
