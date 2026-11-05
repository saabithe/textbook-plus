import { FIGURES } from "@/components/content/physics/diagram/examples";
import { PhysicsFigure } from "@/components/content/physics/diagram/PhysicsFigure";
import { errorsOf, validateFigure, warningsOf } from "@/components/content/physics/diagram/scene";

export const metadata = { title: "Physics figures — dev gallery" };

/**
 * `/dev/figures` — every figure spec rendered, with its frame, element count
 * and validation result. A figure that fails `verify:figures` fails here too.
 */
export default function FiguresPage() {
  const rows = FIGURES.map((spec) => {
    const issues = validateFigure(spec);
    return { spec, errors: errorsOf(issues), warnings: warningsOf(issues) };
  });
  const errorCount = rows.reduce((sum, row) => sum + row.errors.length, 0);
  const warnCount = rows.reduce((sum, row) => sum + row.warnings.length, 0);

  return (
    <div className="mx-auto w-full max-w-[1100px] space-y-10 px-6 py-12">
      <header className="space-y-3 border-b border-border pb-6">
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
          Physics · figure builder
        </p>
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground">Figures from a spec</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Every drawing below is built from a <code className="font-mono text-[0.8125rem]">FigureSpec</code>: a
          frame, tinted bodies, rays solved by the optics engine, angle marks, labels, and the laws the figure
          must obey. Nothing is traced by eye.
        </p>
        <dl className="flex flex-wrap gap-x-6 gap-y-1 text-[0.8125rem] text-muted-foreground">
          <div className="flex gap-1.5">
            <dt>Figures</dt>
            <dd className="font-semibold text-foreground">{rows.length}</dd>
          </div>
          <div className="flex gap-1.5">
            <dt>Errors</dt>
            <dd className={errorCount ? "font-semibold text-destructive" : "font-semibold text-foreground"}>
              {errorCount}
            </dd>
          </div>
          <div className="flex gap-1.5">
            <dt>Warnings</dt>
            <dd className={warnCount ? "font-semibold text-warning" : "font-semibold text-foreground"}>
              {warnCount}
            </dd>
          </div>
        </dl>
      </header>

      {rows.map(({ spec, errors, warnings }) => (
        <section key={spec.id} className="space-y-4 border-t border-border pt-8 first:border-t-0 first:pt-0">
          <div className="space-y-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-base font-bold tracking-tight text-foreground">{spec.title}</h2>
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.6875rem] text-muted-foreground">
                {spec.id}
              </code>
            </div>
            <p className="text-[0.8125rem] text-muted-foreground">
              {spec.frame.width}×{spec.frame.height} units · {spec.elements.length} elements ·{" "}
              {spec.checks?.length ?? 0} law checks
              {spec.source ? ` · ${spec.source}` : ""}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <PhysicsFigure spec={spec} className="my-0" />
          </div>

          <div className="space-y-1 text-[0.8125rem]">
            {errors.length === 0 && warnings.length === 0 ? (
              <p className="text-muted-foreground">
                <span className="font-semibold text-ok">✓ clean</span> — geometry in frame, labels clear, every
                law check passes.
              </p>
            ) : null}
            {[...errors, ...warnings].map((issue, index) => (
              <p key={`${issue.code}-${index}`} className="text-muted-foreground">
                <span className={issue.level === "error" ? "font-semibold text-destructive" : "font-semibold text-warning"}>
                  {issue.level === "error" ? "✗" : "!"} {issue.code}
                </span>{" "}
                {issue.message}
              </p>
            ))}
          </div>

          <details className="group rounded-lg border border-border bg-muted/30">
            <summary className="cursor-pointer list-none px-3 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
              Spec JSON
            </summary>
            <pre className="overflow-x-auto border-t border-border px-3 py-3 font-mono text-[0.6875rem] leading-relaxed text-foreground">
              {JSON.stringify(
                {
                  id: spec.id,
                  frame: spec.frame,
                  source: spec.source ?? null,
                  checks: spec.checks ?? [],
                  elementKinds: spec.elements.reduce<Record<string, number>>((acc, el) => {
                    acc[el.kind] = (acc[el.kind] ?? 0) + 1;
                    return acc;
                  }, {}),
                },
                null,
                2,
              )}
            </pre>
          </details>
        </section>
      ))}
    </div>
  );
}
