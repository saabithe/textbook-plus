export type ContentBlockType = "paragraph" | "callout" | "keypoint" | "formula" | "example";

export interface ContentBlock {
  type: ContentBlockType;
  title?: string;
  variant?: "note" | "important" | "warning" | "didyouknow";
  content: string;
}

export interface ChapterSection {
  id: string;
  title: string;
  blocks: ContentBlock[];
}
