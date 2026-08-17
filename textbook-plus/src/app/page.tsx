import { Navbar } from "@/components/layout/Navbar";
import { SubjectCard } from "@/components/subject/SubjectCard";
import { subjects } from "@/data/subjects";

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
            <p className="mt-3 text-lg text-muted-foreground">
              Pick up where you left off, or start something new.
            </p>
          </div>

          {/* Subject grid — 3 cols */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
