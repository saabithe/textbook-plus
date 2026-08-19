import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { grammarTopics } from "@/data/grammar";

export const metadata = {
  title: "Grammar — Textbook++",
  description: "Core English grammar topics for Kerala Board Class 12",
};

export default function GrammarPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-14">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link href="/subjects/english" className="hover:text-foreground transition-colors">English</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Grammar</span>
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
                G
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Grammar
              </h1>
              <p className="mt-1 text-base text-muted-foreground">
                {grammarTopics.length} core topics — rules, examples &amp; practice
              </p>
            </div>
          </div>

          {/* Topic grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {grammarTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link
                  key={topic.slug}
                  href={`/grammar/${topic.slug}`}
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
                    <h2 className="text-base font-bold text-foreground group-hover:text-[var(--subject-english)] transition-colors">
                      {topic.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {topic.tagline}
                    </p>
                  </div>
                  <span className="mt-auto text-xs text-muted-foreground/60">
                    {topic.sectionCount} sections
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
