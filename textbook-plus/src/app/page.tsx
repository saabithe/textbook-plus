import { Navbar } from "@/components/layout/Navbar";
import { SubjectCard } from "@/components/subject/SubjectCard";
import { subjects } from "@/data/subjects";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-6 sm:pt-16">
          <header className="flex flex-wrap items-start justify-between gap-6 border-b border-border pb-8 sm:pb-10">
            <div>
              <p className="t-micro">Textbook+ · NCERT Plus Two</p>
              <h1 className="t-title mt-3">Explore subjects</h1>
              <p className="t-lead mt-4 max-w-xl">
                Pick a subject, go chapter by chapter.
              </p>
            </div>
            <div className="text-end">
              <p className="t-micro text-muted-foreground">Powered by</p>
              <p className="mt-1 font-sans text-xl font-extrabold uppercase tracking-[0.06em] text-foreground">
                Sabith Thirunilath
              </p>
            </div>
          </header>

          <div
            id="subjects"
            className="mt-8 grid scroll-mt-24 grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:mt-10 sm:gap-5 lg:grid-cols-3"
          >
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
