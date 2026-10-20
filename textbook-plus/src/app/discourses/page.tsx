import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { discourseGroups, discourseTopics, type DiscourseTopic } from "@/data/discourses";

export const metadata = {
  title: "Discourses — Textbook++",
  description: "Writing formats & discourse types for Kerala Board Class 12 English",
};

const formatCount = discourseTopics.reduce((total, topic) => total + topic.formats.length, 0);

function TopicGrid({ topics }: { topics: DiscourseTopic[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => {
        const Icon = topic.icon;
        return (
          <Link
            key={topic.slug}
            href={`/discourses/${topic.slug}`}
            className="group flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-md"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: "var(--subject-english-light)" }}
            >
              <Icon
                className="h-5 w-5"
                style={{ color: "var(--subject-english)" }}
                strokeWidth={1.8}
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-[var(--subject-english)]">
                {topic.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {topic.tagline}
              </p>
            </div>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
              {topic.formats.map((format) => (
                <span
                  key={format}
                  className="rounded-full border border-border/60 bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
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
        <section className="mx-auto max-w-6xl px-6 py-14">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link href="/subjects/english" className="hover:text-foreground transition-colors">English</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Discourses</span>
          </nav>

          {/* Header */}
          <div className="mb-10 flex items-center gap-4 sm:mb-12 sm:gap-5">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl sm:h-16 sm:w-16 sm:rounded-2xl"
              style={{ backgroundColor: "var(--subject-english-light)" }}
            >
              <span
                className="text-xl font-bold sm:text-2xl"
                style={{ color: "var(--subject-english)" }}
              >
                D
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Discourses
              </h1>
              <p className="mt-1 text-base text-muted-foreground">
                {discourseTopics.length} pages · {formatCount} writing formats — structures, tips &amp; samples
              </p>
            </div>
          </div>

          {/* Priority groups — formats a question paper can ask for in the same sitting share a page */}
          {discourseGroups.map((group, index) => (
            <div key={group.label}>
              {index > 0 && (
                <div className="mt-12 h-[5px] w-full rounded-full bg-border" />
              )}
              <h2 className="mb-6 mt-6 text-lg font-extrabold tracking-tight text-foreground first:mt-0">
                {group.label}
              </h2>
              <TopicGrid topics={group.topics} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
