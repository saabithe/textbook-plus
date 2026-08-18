import type { ChapterSection, ContentBlock } from "@/data/sample-chapter";
import { Callout } from "./Callout";
import { KeyPoint } from "./KeyPoint";
import { FormulaBlock } from "./FormulaBlock";
import { ExampleBox } from "./ExampleBox";

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-base leading-relaxed text-muted-foreground">
          {block.content}
        </p>
      );
    case "callout":
      return (
        <Callout
          title={block.title}
          variant={block.variant}
          content={block.content}
        />
      );
    case "keypoint":
      return <KeyPoint title={block.title} content={block.content} />;
    case "formula":
      return <FormulaBlock title={block.title} content={block.content} />;
    case "example":
      return <ExampleBox title={block.title} content={block.content} />;
    default:
      return null;
  }
}

interface ChapterContentProps {
  sections: ChapterSection[];
}

export function ChapterContent({ sections }: ChapterContentProps) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            {section.title}
          </h2>
          <div className="space-y-5">
            {section.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
