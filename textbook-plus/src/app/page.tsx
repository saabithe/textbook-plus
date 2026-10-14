import { Navbar } from "@/components/layout/Navbar";
import { SubjectCard } from "@/components/subject/SubjectCard";
import { SectionHeading } from "@/components/app/SectionHeading";
import { subjects } from "@/data/subjects";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
          <div id="subjects" className="scroll-mt-20">
            <SectionHeading
              eyebrow="Textbook+ · NCERT Plus Two"
              title="Explore subjects"
              description="Pick a subject, go chapter by chapter."
            />
            <div className="mt-6 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:gap-5 lg:grid-cols-3">
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
