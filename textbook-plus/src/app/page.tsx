import { Navbar } from "@/components/layout/Navbar";
import { SubjectCard } from "@/components/subject/SubjectCard";
import { subjects } from "@/data/subjects";
import Link from "next/link";
import { GraduationCap, ChevronRight, BookOpen, Layers, Brain } from "lucide-react";

export default function HomePage() {
  const totalChapters = subjects.reduce((n, s) => n + s.chapterCount, 0);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          {/* Page heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Choose a subject
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              Pick up where you left off, or start something new.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Layers className="h-4 w-4" />
              </span>
              {subjects.length} subjects
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/15 text-blue-500">
                <BookOpen className="h-4 w-4" />
              </span>
              {totalChapters} chapters
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/15 text-violet-500">
                <Brain className="h-4 w-4" />
              </span>
              Learn + Practice modes
            </span>
          </div>

          {/* Subject grid — 3 cols */}
          <div id="subjects" className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:gap-5 lg:grid-cols-3 scroll-mt-20">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>

          {/* Class 11 Improvement Exam tab */}
          <Link
            href="/class-11"
            className="group mt-6 flex w-full items-center justify-between gap-4 rounded-3xl border-2 border-transparent bg-card p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--subject-mathematics)] hover:shadow-[0_12px_32px_-12px_var(--subject-mathematics)] sm:p-6"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 sm:h-14 sm:w-14"
                style={{
                  background: `linear-gradient(135deg, var(--subject-mathematics), var(--subject-mathematics-light))`,
                }}
              >
                <GraduationCap
                  className="h-7 w-7 text-white"
                  strokeWidth={2}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                  Class 11 Improvement Exam
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mathematics &amp; Physics — preparational notes for the improvement exam
                </p>
              </div>
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted transition-all duration-300 group-hover:bg-[var(--subject-mathematics)] group-hover:text-white">
              <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
