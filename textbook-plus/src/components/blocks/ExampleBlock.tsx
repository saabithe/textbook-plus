import { createReactBlockSpec } from "@blocknote/react";
import { Calculator } from "lucide-react";

export const ExampleBlock = createReactBlockSpec(
  {
    type: "example",
    propSchema: {
      title: { default: "Example" },
    },
    content: "inline",
  },
  {
    render: (props) => {
      const title = (props.block.props as { title: string }).title;

      return (
        <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted">
              <Calculator className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <span className="text-sm font-semibold">{title}</span>
          </div>
          <div className="text-sm leading-relaxed text-muted-foreground">
            <div ref={props.contentRef} />
          </div>
        </div>
      );
    },
  }
);
