import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { getClass11SubjectBySlug } from "@/data/class11";
import DerivationSheet from "@/content/physics/derivation-sheet/page";

export function generateStaticParams() {
  return [{ subject: "physics" }];
}

interface Props {
  params: Promise<{ subject: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { subject } = await params;
  const subjectData = getClass11SubjectBySlug(subject);
  if (!subjectData) return { title: "Not Found" };
  return {
    title: `Derivation Sheet (Class 11 ${subjectData.name}) — Textbook++`,
    description: `All derivations from every Class 11 ${subjectData.name} chapter, step by step.`,
  };
}

export default async function DerivationSheetPage({ params }: Props) {
  const { subject } = await params;
  const subjectData = getClass11SubjectBySlug(subject);
  if (!subjectData || subjectData.slug !== "physics") notFound();

  const Icon = subjectData.icon;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-14">
          {/* Breadcrumb */}
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/class-11" className="transition-colors hover:text-foreground">
              Class 11 Improvement Exam
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/class-11/physics"
              className="transition-colors hover:text-foreground"
            >
              {subjectData.name}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Derivation Sheet</span>
          </nav>

          {/* Header */}
          <div className="mb-10 flex items-center gap-4 sm:mb-12 sm:gap-5">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl sm:h-16 sm:w-16 sm:rounded-2xl"
              style={{ backgroundColor: subjectData.colorLight }}
            >
              <Icon
                className="h-6 w-6 sm:h-8 sm:w-8"
                style={{ color: subjectData.color }}
                strokeWidth={1.8}
              />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Derivation Sheet
              </h1>
              <p className="mt-1 text-base text-muted-foreground">
                Class 11 {subjectData.name} · All derivations from every chapter, step by step
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose-custom">
            <DerivationSheet />
          </div>
        </section>
      </main>
    </>
  );
}