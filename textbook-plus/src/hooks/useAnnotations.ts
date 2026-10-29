"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import type { Annotation } from "@/lib/annotate/types";
import { applyOperation } from "@/lib/annotate/model";
import { load, save } from "@/lib/annotate/storage";

export interface UseAnnotationsResult {
  path: string;
  items: Annotation[];
  setItems: (next: Annotation[] | ((prev: Annotation[]) => Annotation[])) => void;
  apply: (text: string, start: number, end: number, op: Parameters<typeof applyOperation>[4]) => void;
}

export function useAnnotationsPath(path?: string): UseAnnotationsResult {
  const pathname = usePathname();
  const resolvedPath = path ?? pathname ?? "";
  const [items, setItems] = useState<Annotation[]>([]);

  useEffect(() => {
    setItems(load(resolvedPath));
  }, [resolvedPath]);

  useEffect(() => {
    save(resolvedPath, items);
  }, [resolvedPath, items]);

  const apply = useCallback(
    (text: string, start: number, end: number, op: Parameters<typeof applyOperation>[4]) => {
      setItems((prev) => applyOperation(text, prev, start, end, op));
    },
    []
  );

  return { path: resolvedPath, items, setItems, apply };
}
