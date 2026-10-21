import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { arabicDiscourseTopics, type ArabicDiscourseTopic } from "@/data/arabic-discourses";

export const metadata = {
  title: "Arabic Discourses — Textbook++",
  description: "Writing frames for Kerala Board Class 12 Arabic",
};

function TopicGrid({ topics }: { topics: ArabicDiscourseTopic[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => {
        const Icon = topic.icon;
        return (
          <Link
            key={topic.slug}
            href={`/arabic/discourses/${topic.slug}`}
            className="group flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-md"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: "var(--subject-arabic-light)" }}
            >
              <Icon
                className="h-5 w-5"
                style={{ color: "var(--subject-arabic)" }}
                strokeWidth={1.8}
              />
            </div>
            <div>
              <h3 dir="rtl" className="arabic-body text-lg font-bold text-foreground transition-colors group-hover:text-[var(--subject-arabic)]">
                {topic.titleArabic}
              </h3>
              <p dir="ltr" className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {topic.title}
              </p>
              <p dir="ltr" className="mt-1.5 text-sm leading-relaxed text-muted-foreground/80">
                {topic.tagline}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function ArabicDiscoursesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-14">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link href="/subjects/arabic" className="hover:text-foreground transition-colors">Arabic</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Discourses</span>
          </nav>

          {/* Header */}
          <div className="mb-10 flex items-center gap-4 sm:mb-12 sm:gap-5">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl sm:h-16 sm:w-16 sm:rounded-2xl"
              style={{ backgroundColor: "var(--subject-arabic-light)" }}
            >
              <span
                className="text-xl font-bold sm:text-2xl"
                style={{ color: "var(--subject-arabic)" }}
              >
                D
              </span>
            </div>
            <div>
              <h1 className="arabic-body text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                الرِّسَالَةُ الْمَرْكَزِيَّةُ
              </h1>
              <p dir="ltr" className="mt-1 text-base text-muted-foreground">
                {arabicDiscourseTopics.length} {arabicDiscourseTopics.length === 1 ? "page" : "pages"} — writing frames for Arabic
              </p>
            </div>
          </div>

          <TopicGrid topics={arabicDiscourseTopics} />
        </section>
      </main>
    </>
  );
}
