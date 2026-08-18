import { visit } from "unist-util-visit";

export default function rehypeSlugStrip() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (
        (node.tagName === "h2" || node.tagName === "h3") &&
        node.properties?.id
      ) {
        node.properties.id = node.properties.id.replace(/^\d+[-]?/, "");
      }
    });
  };
}
