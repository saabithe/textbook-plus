"use client";

import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "font-size";
const LEVELS = [0.875, 1, 1.125, 1.25] as const;
const DEFAULT = 1;

function getStored(): number {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    if (val) {
      const num = parseFloat(val);
      if (LEVELS.includes(num as (typeof LEVELS)[number])) return num;
    }
  } catch {}
  return DEFAULT;
}

export function useFontSize() {
  const [scale, setScale] = useState<number>(DEFAULT);

  useEffect(() => {
    setScale(getStored());
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", String(scale));
    try {
      localStorage.setItem(STORAGE_KEY, String(scale));
    } catch {}
  }, [scale]);

  const index = LEVELS.indexOf(scale as (typeof LEVELS)[number]);
  const canDecrease = index > 0;
  const canIncrease = index < LEVELS.length - 1;

  const decrease = useCallback(() => {
    setScale((prev) => {
      const idx = LEVELS.indexOf(prev as (typeof LEVELS)[number]);
      return idx > 0 ? LEVELS[idx - 1] : prev;
    });
  }, []);

  const increase = useCallback(() => {
    setScale((prev) => {
      const idx = LEVELS.indexOf(prev as (typeof LEVELS)[number]);
      return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : prev;
    });
  }, []);

  const reset = useCallback(() => setScale(DEFAULT), []);

  return { scale, decrease, increase, reset, canDecrease, canIncrease };
}
