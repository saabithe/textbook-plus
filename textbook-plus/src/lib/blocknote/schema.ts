import { BlockNoteSchema, defaultBlockSpecs, defaultInlineContentSpecs } from "@blocknote/core";
import { createReactMathBlockSpec, createReactInlineMathSpec } from "@blocknote/math-block";

import { CalloutBlock } from "@/components/blocks/CalloutBlock";
import { ExpandableBlock } from "@/components/blocks/ExpandableBlock";
import { KeyPointBlock } from "@/components/blocks/KeyPointBlock";
import { ExampleBlock } from "@/components/blocks/ExampleBlock";
import { ComparisonBlock } from "@/components/blocks/ComparisonBlock";

export const chapterSchema = BlockNoteSchema.create().extend({
  blockSpecs: {
    ...defaultBlockSpecs,
    mathBlock: createReactMathBlockSpec(),
    callout: CalloutBlock(),
    expandable: ExpandableBlock(),
    keyPoint: KeyPointBlock(),
    example: ExampleBlock(),
    comparison: ComparisonBlock(),
  },
  inlineContentSpecs: {
    ...defaultInlineContentSpecs,
    math: createReactInlineMathSpec(),
  },
});

export type ChapterSchema = typeof chapterSchema;
