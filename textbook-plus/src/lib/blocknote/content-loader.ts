import type { Block } from "@blocknote/core";
import { AUTO_BLOCKS_MAP } from "./content-map";

export async function loadChapterBlocks(slug: string): Promise<Block[] | null> {
  const entry = AUTO_BLOCKS_MAP[slug];
  if (!entry) return null;
  try {
    const mod = await entry.loader();
    return mod.default;
  } catch {
    return null;
  }
}

export function hasBlockNoteContent(slug: string): boolean {
  return slug in AUTO_BLOCKS_MAP;
}
