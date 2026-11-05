import type { ReactNode } from "react";
import { round, type Vec } from "./geometry.ts";
import type { ColorToken, Element, FigureSpec, Fill, Stroke } from "./scene.ts";

/**
 * PhysicsFigure — renders a `FigureSpec` to inline SVG.
 *
 * One y-flip, one colour table, no <defs>, no ids, no external files: the SVG
 * inherits the page font and the theme's CSS variables, so it is correct in
 * light and dark mode and costs the PWA nothing at runtime.
 */

const COLORS: Record<ColorToken, string> = {
  ink: "var(--foreground)",
  muted: "var(--muted-foreground)",
  rule: "var(--border)",
  ray: "var(--subject-physics)",
  hot: "var(--destructive)",
  ok: "var(--ok)",
  warn: "var(--warning)",
};

const FILLS: Record<Exclude<Fill, null>, string> = {
  ink: "color-mix(in oklab, var(--foreground) 18%, transparent)",
  muted: "color-mix(in oklab, var(--muted-foreground) 14%, transparent)",
  rule: "color-mix(in oklab, var(--border) 40%, transparent)",
  ray: "color-mix(in oklab, var(--subject-physics) 18%, transparent)",
  hot: "color-mix(in oklab, var(--destructive) 16%, transparent)",
  ok: "color-mix(in oklab, var(--ok) 16%, transparent)",
  warn: "color-mix(in oklab, var(--warning) 16%, transparent)",
  glass: "color-mix(in oklab, var(--subject-physics) 12%, transparent)",
  glassStrong: "color-mix(in oklab, var(--subject-physics) 22%, transparent)",
};

const n = (value: number): number => round(value, 2);

const dashArray = (dash: Stroke["dash"], width: number): string | undefined => {
  if (!dash) return undefined;
  const u = round(Math.max(0.4, width), 2);
  if (dash === "dot") return `${u} ${round(u * 1.6, 2)}`;
  if (dash === "dashdot")
    return `${round(u * 6, 2)} ${round(u * 2.2, 2)} ${u} ${round(u * 2.2, 2)}`;
  return `${round(u * 5, 2)} ${round(u * 3, 2)}`;
};

const strokeProps = (stroke: Stroke | null | undefined) => {
  if (!stroke) return { stroke: "none" as const };
  const width = stroke.width ?? 0.55;
  return {
    stroke: COLORS[stroke.color ?? "ink"],
    strokeWidth: width,
    strokeDasharray: dashArray(stroke.dash, width),
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    opacity: stroke.opacity,
  };
};

const headPolygon = (from: Vec, to: Vec, size: number): string => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const l = Math.hypot(dx, dy) || 1;
  const ux = dx / l;
  const uy = dy / l;
  const baseX = to.x - ux * size;
  const baseY = to.y - uy * size;
  const w = size * 0.42;
  return [
    `${n(to.x)},${n(to.y)}`,
    `${n(baseX - uy * w)},${n(baseY + ux * w)}`,
    `${n(baseX + uy * w)},${n(baseY - ux * w)}`,
  ].join(" ");
};

/** Spec space (y-up) → SVG space (y-down), applied exactly once. */
const makeProjector = (height: number) => (p: Vec): string => `${n(p.x)},${n(height - p.y)}`;

export function renderElement(el: Element, height: number, baseSize: number, index: number): ReactNode {
  const P = makeProjector(height);
  switch (el.kind) {
    case "poly": {
      const points = el.points.map(P).join(" ");
      const fill = el.fill ? FILLS[el.fill] : "none";
      return el.closed ? (
        <polygon key={index} points={points} fill={fill} {...strokeProps(el.stroke ?? null)} />
      ) : (
        <polyline key={index} points={points} fill="none" {...strokeProps(el.stroke ?? null)} />
      );
    }
    case "arrow": {
      const width = el.stroke?.width ?? 0.55;
      const size = el.head ?? Math.max(2.2, width * 4);
      return (
        <g key={index}>
          <line
            x1={n(el.from.x)}
            y1={n(height - el.from.y)}
            x2={n(el.to.x)}
            y2={n(height - el.to.y)}
            {...strokeProps(el.stroke ?? null)}
          />
          <polygon
            points={headPolygon(
              { x: el.from.x, y: height - el.from.y },
              { x: el.to.x, y: height - el.to.y },
              size,
            )}
            fill={COLORS[el.stroke?.color ?? "ink"]}
          />
        </g>
      );
    }
    case "circle":
      return (
        <circle
          key={index}
          cx={n(el.at.x)}
          cy={n(height - el.at.y)}
          r={n(el.r)}
          fill={el.fill ? FILLS[el.fill] : "none"}
          {...strokeProps(el.stroke ?? null)}
        />
      );
    case "dot":
      return <circle key={index} cx={n(el.at.x)} cy={n(height - el.at.y)} r={n(el.r ?? 0.9)} fill={COLORS[el.color ?? "ink"]} />;
    case "label": {
      const size = el.size ?? baseSize;
      const anchor = el.anchor ?? "middle";
      const common = {
        x: n(el.at.x),
        y: n(height - el.at.y),
        fontSize: n(size),
        textAnchor: anchor,
        dominantBaseline: "central",
        fill: COLORS[el.color ?? "ink"],
        fontStyle: el.math ? "italic" : undefined,
        transform: el.rotate ? `rotate(${-el.rotate} ${n(el.at.x)} ${n(height - el.at.y)})` : undefined,
      } as const;
      const sub = el.sub ? (
        <tspan fontSize={n(size * 0.68)} dy={n(size * 0.34)} fontStyle="normal">
          {el.sub}
        </tspan>
      ) : null;
      const sup = el.sup ? (
        <tspan fontSize={n(size * 0.68)} dy={n(-size * 0.62)} fontStyle="normal">
          {el.sup}
        </tspan>
      ) : null;
      return (
        <text key={index} {...common}>
          {el.text}
          {sub}
          {sup}
        </text>
      );
    }
  }
}

export function PhysicsFigure({ spec, className = "" }: { spec: FigureSpec; className?: string }) {
  const { width, height } = spec.frame;
  const base = spec.labelSize ?? 3.4;
  return (
    <figure className={`my-6 ${className}`.trim()}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={spec.alt}
        className="mx-auto block h-auto w-full max-w-2xl overflow-visible"
      >
        {spec.elements.map((el, index) => renderElement(el, height, base, index))}
      </svg>
      <figcaption className="mx-auto mt-2 max-w-2xl text-center text-[0.8125rem] leading-snug text-muted-foreground">
        {spec.caption}
      </figcaption>
    </figure>
  );
}
