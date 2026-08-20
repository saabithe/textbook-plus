import { Navbar } from "@/components/layout/Navbar";
import { SubjectCard } from "@/components/subject/SubjectCard";
import { subjects } from "@/data/subjects";
import Link from "next/link";
import { GraduationCap, ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16">
          {/* Page heading */}
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Choose a subject
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Pick up where you left off, or start something new.
            </p>
          </div>

          {/* Subject grid — 3 cols */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>

          {/* Class 11 Improvement Exam tab */}
          <Link
            href="/class-11"
            className="group mt-6 flex w-full items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--subject-mathematics)] hover:shadow-[0_8px_30px_-12px_var(--subject-mathematics)] sm:p-6"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--subject-mathematics-light)] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl">
                <GraduationCap
                  className="h-7 w-7"
                  style={{ color: "var(--subject-mathematics)" }}
                  strokeWidth={1.8}
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
            <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--subject-mathematics)]" />
          </Link>
        </section>
      </main>
    </>
  );
}
