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
            className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:border-rule-strong"
          >
            <Icon
              aria-hidden
              className="h-5 w-5"
              style={{ color: "var(--subject-arabic)" }}
              strokeWidth={1.8}
            />
            <div>
              <h3
                dir="rtl"
                className="arabic-body text-lg font-bold text-foreground transition-colors duration-[120ms] group-hover:text-[var(--subject-arabic)]"
              >
                {topic.titleArabic}
              </h3>
              <p dir="ltr" className="t-caption mt-1.5">
                {topic.title}
              </p>
              <p dir="ltr" className="t-caption mt-1 text-faint">
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
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-6 sm:pt-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="t-micro mb-8 flex items-center gap-2">
            <Link
              href="/subjects/arabic"
              className="transition-colors hover:text-foreground"
            >
              Arabic
            </Link>
            <span className="text-faint">/</span>
            <span className="text-foreground">Discourses</span>
          </nav>

          {/* Header */}
          <header className="border-b border-border pb-8">
            <p className="t-micro">Arabic · Discourses</p>
            <h1 dir="rtl" className="t-title arabic-body mt-3">
              الرِّسَالَةُ الْمَرْكَزِيَّةُ
            </h1>
            <p dir="ltr" className="t-lead mt-4 max-w-2xl">
              {arabicDiscourseTopics.length} {arabicDiscourseTopics.length === 1 ? "page" : "pages"} — writing frames for Arabic
            </p>
          </header>

          <div className="mt-8">
            <TopicGrid topics={arabicDiscourseTopics} />
          </div>
        </section>
      </main>
    </>
  );
}
