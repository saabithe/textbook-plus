const SKIP_SELECTOR =
  "svg, canvas, pre, code, input, textarea, select, button, math, .katex, .katex-display, [data-no-annotate], [data-annotate-skip], [aria-hidden=\"true\"]";

export interface TextSegment {
  node: Text;
  start: number;
  end: number;
}

export interface TextStream {
  text: string;
  segments: TextSegment[];
}

export function buildStream(root: HTMLElement): TextStream {
  let text = "";
  const segments: TextSegment[] = [];

  function walk(node: Node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const t = node as Text;
      if (t.parentElement?.closest(SKIP_SELECTOR)) return;
      const start = text.length;
      text += t.data;
      segments.push({ node: t, start, end: text.length });
      return;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      for (const child of Array.from(node.childNodes)) walk(child);
    }
  }

  walk(root);
  return { text, segments };
}

/** Convert a global stream offset to a (text node, local offset) pair. */
export function globalToNode(stream: TextStream, global: number) {
  if (global < 0) global = 0;
  if (global > stream.text.length) global = stream.text.length;
  for (const seg of stream.segments) {
    if (global >= seg.start && global <= seg.end) {
      return { node: seg.node, offset: global - seg.start };
    }
  }
  const last = stream.segments[stream.segments.length - 1];
  if (!last) return null;
  return { node: last.node, offset: last.node.length };
}

/**
 * Best-effort conversion of a `Range`'s endpoints into global stream offsets.
 * Returns null when either endpoint cannot be mapped (e.g. an element boundary).
 */
export function rangeToStreamOffsets(
  root: HTMLElement,
  range: Range,
  stream: TextStream
): { start: number; end: number } | null {
  let start = -1;
  let end = -1;

  // Walk text nodes in document order, accumulating length, until we reach the
  // node referenced by each boundary. For element boundaries we take the text
  // node that the boundary falls next to.
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let accumulated = 0;
  const nodeStartIndex = new Map<Text, number>();

  while (tw.nextNode()) {
    const tn = tw.currentNode as Text;
    nodeStartIndex.set(tn, accumulated);
    if (tn.parentElement?.closest(SKIP_SELECTOR)) {
      // still account for length so offsets downstream stay correct? Stream
      // skips the node entirely, so do NOT add. But compareBoundary catches
      // skipped nodes above via -1 handling; bail instead (safe region only).
    } else {
      accumulated += tn.data.length;
    }
  }

  // Helper: get the text node a boundary points at, if any.
  function boundaryNode(container: Node, offset: number): { node: Text; local: number } | null {
    if (container.nodeType === Node.TEXT_NODE) {
      const tn = container as Text;
      if (tn.parentElement?.closest(SKIP_SELECTOR)) return null;
      return { node: tn, local: offset };
    }
    // Element container: boundary falls between children.
    const kids = Array.from((container as Element).childNodes);
    if (offset < kids.length) {
      const child = kids[offset];
      if (child.nodeType === Node.TEXT_NODE) {
        const tn = child as Text;
        if (tn.parentElement?.closest(SKIP_SELECTOR)) return null;
        return { node: tn, local: 0 };
      }
      // first text descendant
      const tw2 = document.createTreeWalker(child, NodeFilter.SHOW_TEXT);
      if (tw2.nextNode()) {
        const tn = tw2.currentNode as Text;
        if (tn.parentElement?.closest(SKIP_SELECTOR)) return null;
        return { node: tn, local: 0 };
      }
    }
    if (offset > 0) {
      const child = kids[offset - 1];
      if (child) {
        const tw2 = document.createTreeWalker(child, NodeFilter.SHOW_TEXT);
        let last: Text | null = null;
        while (tw2.nextNode()) {
          const tn = tw2.currentNode as Text;
          if (tn.parentElement?.closest(SKIP_SELECTOR)) continue;
          last = tn;
        }
        if (last) return { node: last, local: last.data.length };
      }
    }
    return null;
  }

  const s = boundaryNode(range.startContainer, range.startOffset);
  const e = boundaryNode(range.endContainer, range.endOffset);
  if (!s || !e) return null;

  const si = nodeStartIndex.get(s.node);
  const ei = nodeStartIndex.get(e.node);
  if (si === undefined || ei === undefined) return null;

  // Ensure both nodes are in the (non-skipped) stream.
  const sSeg = stream.segments.find((seg) => seg.node === s.node);
  const eSeg = stream.segments.find((seg) => seg.node === e.node);
  if (!sSeg || !eSeg) return null;

  start = sSeg.start + s.local;
  end = eSeg.start + e.local;
  if (end < start) [start, end] = [end, start];
  return { start, end };
}

export const SKIP = SKIP_SELECTOR;
