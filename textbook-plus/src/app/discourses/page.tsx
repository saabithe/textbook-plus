import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { discourseTopics, type DiscourseTopic } from "@/data/discourses";

export const metadata = {
  title: "Discourses — Textbook++",
  description: "Writing formats & discourse types for Kerala Board Class 12 English",
};

const formatCount = discourseTopics.reduce((total, topic) => total + topic.formats.length, 0);

/* Priority order as authored — no section labels, no dividers. */
function TopicGrid({ topics }: { topics: DiscourseTopic[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => {
        const Icon = topic.icon;
        return (
          <Link
            key={topic.slug}
            href={`/discourses/${topic.slug}`}
            className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:border-rule-strong"
          >
            <Icon
              aria-hidden
              className="h-5 w-5"
              style={{ color: "var(--subject-english)" }}
              strokeWidth={1.8}
            />
            <div>
              <h3 className="t-h4 transition-colors duration-[120ms] group-hover:text-[var(--subject-english)]">
                {topic.title}
              </h3>
              <p className="t-caption mt-1.5">{topic.tagline}</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
              {topic.formats.map((format) => (
                <span
                  key={format}
                  className="t-micro rounded-[3px] border border-border px-1.5 py-1"
                >
                  {format}
                </span>
              ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function DiscoursesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-6 sm:pt-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="t-micro mb-8 flex items-center gap-2">
            <Link
              href="/subjects/english"
              className="transition-colors hover:text-foreground"
            >
              English
            </Link>
            <span className="text-faint">/</span>
            <span className="text-foreground">Discourses</span>
          </nav>

          {/* Header */}
          <header className="border-b border-border pb-8">
            <p className="t-micro">English · Discourses</p>
            <h1 className="t-title mt-3">Discourses</h1>
            <p className="t-lead mt-4 max-w-2xl">
              {discourseTopics.length} pages · {formatCount} writing formats — structures, tips &amp; samples
            </p>
          </header>

          <div className="mt-8">
            <TopicGrid topics={discourseTopics} />
          </div>
        </section>
      </main>
    </>
  );
}
