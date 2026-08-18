import { createReactBlockSpec } from "@blocknote/react";
import { Star } from "lucide-react";

export const KeyPointBlock = createReactBlockSpec(
  {
    type: "keyPoint",
    propSchema: {
      title: { default: "Key Takeaway" },
    },
    content: "inline",
  },
  {
    render: (props) => {
      const title = (props.block.props as { title: string }).title;

      return (
        <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 my-6">
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-semibold text-primary">{title}</span>
          </div>
          <div className="text-sm leading-relaxed text-muted-foreground">
            <div ref={props.contentRef} />
          </div>
        </div>
      );
    },
  }
);
