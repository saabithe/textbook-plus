"use client";

import { useEffect, useRef } from "react";
import SmilesDrawer from "smiles-drawer";

interface SmilesDrawerFigureProps {
  smiles: string;
  width?: number;
  height?: number;
  caption?: string;
}

export function SmilesDrawerFigure({
  smiles,
  width = 260,
  height = 180,
  caption,
}: SmilesDrawerFigureProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    host.innerHTML = "";

    const drawer = new (SmilesDrawer as any).SvgDrawer({ width, height });
    let tree: any;
    try {
      tree = (SmilesDrawer as any).parse(smiles);
    } catch {
      if (!cancelled && host) host.textContent = "Unable to render structure.";
      return;
    }

    if (cancelled || !host) return;
    try {
      drawer.draw(tree, host, "light");
    } catch {
      host.textContent = "Unable to render structure.";
    }

    return () => {
      cancelled = true;
      if (host) host.innerHTML = "";
    };
  }, [smiles, width, height]);

  return (
    <figure className="my-3">
      <div
        ref={hostRef}
        className="mx-auto flex min-h-[180px] items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-card p-2"
      />
      {caption ? (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
