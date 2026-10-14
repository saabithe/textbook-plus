import { Navbar } from "@/components/layout/Navbar";
import { SubjectCard } from "@/components/subject/SubjectCard";
import { ContinueStrip } from "@/components/app/ContinueStrip";
import { SectionHeading } from "@/components/app/SectionHeading";
import { StatPill } from "@/components/app/StatPill";
import { subjects } from "@/data/subjects";
import { BookOpen, Layers, Brain } from "lucide-react";

export default function HomePage() {
  const totalChapters = subjects.reduce((n, s) => n + s.chapterCount, 0);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          {/* Hero */}
          <div className="pb-12 pt-14 sm:pb-14 sm:pt-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Textbook+ · NCERT Plus Two
            </span>
            <h1 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl sm:leading-[1.1]">
              Your entire syllabus, one{" "}
              <span className="text-primary">clean space</span> to master it.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every chapter explained, practiced and tracked — reading, questions
              and flashcards, organised from first page to revision.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <StatPill icon={<Layers className="h-3.5 w-3.5" />} value={subjects.length} label="subjects" />
              <StatPill icon={<BookOpen className="h-3.5 w-3.5" />} value={totalChapters} label="chapters" />
              <StatPill icon={<Brain className="h-3.5 w-3.5" />} value="Learn + Practice" label="for every chapter" />
            </div>
          </div>

          {/* Continue learning */}
          <ContinueStrip />

          {/* Subjects */}
          <div id="subjects" className="scroll-mt-20">
            <SectionHeading
              eyebrow="Curriculum"
              title="Explore subjects"
              description="Pick a subject, go chapter by chapter."
            />
            <div className="mt-5 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}