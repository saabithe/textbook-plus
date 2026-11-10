"use client";

import type { ReactNode } from "react";
import { UI_DEMOS } from "./demos-ui";
import { CONTENT_DEMOS } from "./demos-content";
import { APP_DEMOS } from "./demos-app";
import { CHEMISTRY_DEMOS } from "./demos-chemistry";

/** Hand-written, prop-complete demos keyed by `path#ExportName`. */
export const DEMOS: Record<string, ReactNode> = {
  ...UI_DEMOS,
  ...CONTENT_DEMOS,
  ...APP_DEMOS,
  ...CHEMISTRY_DEMOS,
};
