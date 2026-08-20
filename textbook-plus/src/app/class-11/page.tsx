import { Navbar } from "@/components/layout/Navbar";
import { Class11SubjectCard } from "@/components/subject/Class11SubjectCard";
import { class11Subjects } from "@/data/class11";
import { GraduationCap } from "lucide-react";

export default function Class11Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16">
          {/* Header */}
          <div className="mb-12 flex items-center gap-4 sm:gap-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--subject-mathematics-light)] sm:h-16 sm:w-16 sm:rounded-2xl">
              <GraduationCap
                className="h-6 w-6 sm:h-8 sm:w-8"
                style={{ color: "var(--subject-mathematics)" }}
                strokeWidth={1.8}
              />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Class 11 Improvement Exam
              </h1>
              <p className="mt-1 text-base text-muted-foreground">
                Mathematics &amp; Physics — preparational notes
              </p>
            </div>
          </div>

          {/* Subject grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {class11Subjects.map((subject) => (
              <Class11SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}