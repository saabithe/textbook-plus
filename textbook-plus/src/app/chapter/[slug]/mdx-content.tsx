import { getMDXComponent } from "@/lib/content";

interface MDXContentProps {
  slug: string;
}

export function MDXContent({ slug }: MDXContentProps) {
  const MDXComponent = getMDXComponent(slug);

  if (!MDXComponent) {
    return (
      <div className="rounded-xl border border-dashed border-border/60 bg-muted/20 px-8 py-16 text-center">
        <p className="text-lg font-medium text-muted-foreground">
          Content coming soon
        </p>
        <p className="text-sm text-muted-foreground/70 mt-1">
          This chapter is being prepared.
        </p>
      </div>
    );
  }

  return (
    <div className="prose-custom">
      <MDXComponent />
    </div>
  );
}
