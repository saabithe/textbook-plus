import { Navbar } from "@/components/layout/Navbar";
import { ProgressDashboard } from "@/components/progress/ProgressDashboard";

export default function ProgressPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <ProgressDashboard />
        </section>
      </main>
    </>
  );
}