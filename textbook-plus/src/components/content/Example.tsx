/**
 * Example — no frame of its own. A worked example lives inside an `Expandable`
 * (which supplies the box); here it is body content with a micro label only.
 */
interface ExampleProps {
  title?: string;
  children: React.ReactNode;
}

export function Example({ title = "Example", children }: ExampleProps) {
  return (
    <div className="my-6">
      <div className="t-micro">{title}</div>
      <div className="mt-2 text-[1.03125rem] leading-[1.7] text-foreground/90">
        {children}
      </div>
    </div>
  );
}
