import type { ComponentType } from "react";

import PhysicsElectricCharges from "@/content/physics/electric-charges-and-fields/page.mdx";

const MDX_MAP: Record<string, ComponentType> = {
  "electric-charges-and-fields": PhysicsElectricCharges as ComponentType,
};

export function getMDXComponent(slug: string): ComponentType | null {
  return MDX_MAP[slug] ?? null;
}
