"use client";

import { Mafs, Coordinates, Point, Line, Text, Vector } from "mafs";
import { cn } from "@/lib/utils";

interface ArgandPoint {
  x: number;
  y: number;
  label: string;
  color?: string;
}

interface ArgandDiagramProps {
  points?: ArgandPoint[];
  showConjugate?: { x: number; y: number } | null;
  showPolar?: { r: number; theta: number; label?: string } | null;
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  caption?: string;
  className?: string;
}

export function ArgandDiagram({
  points = [],
  showConjugate = null,
  showPolar = null,
  xMin = -6,
  xMax = 6,
  yMin = -5,
  yMax = 5,
  caption,
  className,
}: ArgandDiagramProps) {
  const defaultColor = "var(--subject-mathematics)";

  return (
    <figure className={cn("my-4 mx-auto w-full max-w-[360px]", className)}>
      <div role="img" aria-label={caption ?? "Argand diagram — complex plane"}>
        <Mafs
          height={280}
          viewBox={{ x: [xMin, xMax], y: [yMin, yMax] }}
          preserveAspectRatio={false}
          pan={false}
          zoom={false}
        >
          <Coordinates.Cartesian
            xAxis={{ lines: 1, labels: (v: number) => (v === 0 ? "" : String(v)) }}
            yAxis={{ lines: 1, labels: (v: number) => (v === 0 ? "" : String(v)) }}
          />
          {/* Axis labels */}
          <Text x={xMax - 0.3} y={0.35} attach="n" size={14} color="var(--foreground)" svgTextProps={{ opacity: 0.7 }}>
            Re
          </Text>
          <Text x={0.35} y={yMax - 0.3} attach="e" size={14} color="var(--foreground)" svgTextProps={{ opacity: 0.7 }}>
            Im
          </Text>

          {/* Polar ray + angle arc if requested */}
          {showPolar && (
            <>
              <Vector tail={[0, 0]} tip={[showPolar.r * Math.cos(showPolar.theta), showPolar.r * Math.sin(showPolar.theta)]} color={defaultColor} weight={1.8} />
              <Text x={showPolar.r * Math.cos(showPolar.theta) * 0.62} y={showPolar.r * Math.sin(showPolar.theta) * 0.62} size={13} color={defaultColor}>
                r
              </Text>
              {(showPolar.theta !== 0) && (
                <Text x={1.1 * Math.cos(showPolar.theta / 2)} y={1.1 * Math.sin(showPolar.theta / 2)} size={12} color="var(--foreground)" svgTextProps={{ opacity: 0.75 }}>
                  θ
                </Text>
              )}
              {showPolar.label && (
                <Text x={showPolar.r * Math.cos(showPolar.theta)} y={showPolar.r * Math.sin(showPolar.theta)} attach={showPolar.theta > 0 ? "n" : "s"} size={13} color={defaultColor} svgTextProps={{ opacity: 0.9 }}>
                  {showPolar.label}
                </Text>
              )}
            </>
          )}

          {/* Conjugate mirror: dashed line + mirrored point */}
          {showConjugate && (
            <>
              <Point x={showConjugate.x} y={showConjugate.y} color={defaultColor} />
              <Point x={showConjugate.x} y={-showConjugate.y} color={defaultColor} svgCircleProps={{ fill: "var(--background)", strokeWidth: 1.6 }} />
              <Line.Segment point1={[showConjugate.x, showConjugate.y]} point2={[showConjugate.x, -showConjugate.y]} color="var(--foreground)" opacity={0.25} weight={1.2} style="dashed" />
              <Text x={showConjugate.x + 0.28} y={showConjugate.y + 0.18} size={12} color={defaultColor}>
                z
              </Text>
              <Text x={showConjugate.x + 0.28} y={-showConjugate.y - 0.28} size={12} color={defaultColor}>
                z̄
              </Text>
            </>
          )}

          {/* Supplied points */}
          {points.map((p, i) => (
            <g key={`pt${i}`}>
              <Point x={p.x} y={p.y} color={p.color ?? defaultColor} />
              <Text x={p.x + 0.32} y={p.y + 0.28} size={13} color={p.color ?? defaultColor}>
                {p.label}
              </Text>
              {(p.x !== 0 || p.y !== 0) && (
                <Line.Segment point1={[0, 0]} point2={[p.x, p.y]} color={p.color ?? defaultColor} opacity={0.18} weight={1} style="dashed" />
              )}
            </g>
          ))}
        </Mafs>
      </div>
      {caption && <figcaption className="mt-1 text-center text-xs text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}
