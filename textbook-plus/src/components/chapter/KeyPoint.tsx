import { Star } from "lucide-react";

interface KeyPointProps {
  title?: string;
  content: string;
}

export function KeyPoint({ title = "Key Takeaway", content }: KeyPointProps) {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4">
      <div className="flex items-center gap-2 mb-2">
        <Star className="h-4 w-4 fill-primary text-primary" />
        <span className="text-sm font-semibold text-primary">{title}</span>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{content}</p>
    </div>
  );
}
