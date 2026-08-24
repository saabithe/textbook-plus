"use client";

import { Mafs, Coordinates, Circle, Vector, Point, Text, Line, Plot, Polygon, Theme } from "mafs";
import { cn } from "@/lib/utils";

interface UnitCircleProps {
  angle?: number;
  caption?: string;
  className?: string;
}

export function UnitCircle({ angle = 1, caption, className }: UnitCircleProps) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  const subjectColor = "var(--subject-mathematics)";
  const arcMin = Math.min(0, angle);
  const arcMax = Math.max(0, angle);
  const sq = 0.07 * (s >= 0 ? 1 : -1);

  return (
    <figure className={cn("my-4 mx-auto w-full max-w-[360px]", className)}>
      <Mafs
        height={300}
        viewBox={{ x: [-1.45, 1.45], y: [-1.3, 1.3] }}
        pan={false}
        zoom={false}
      >
        <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={{ lines: 1 }} subdivisions={2} />

        <Circle center={[0, 0]} radius={1} strokeStyle="solid" weight={2} color={Theme.foreground} fillOpacity={0} />

        <Plot.Parametric
          domain={[arcMin, arcMax]}
          xy={(t) => [0.26 * Math.cos(t), 0.26 * Math.sin(t)]}
          color={Theme.foreground}
          weight={2}
          opacity={0.8}
        />
        <Text
          x={0.44 * Math.cos(angle / 2)}
          y={0.44 * Math.sin(angle / 2)}
          svgTextProps={{ fontStyle: "italic", fontSize: 22 }}
        >
          x
        </Text>

        <Vector tip={[c, s]} color={subjectColor} weight={2.5} />

        <Line.Segment point1={[c, s]} point2={[c, 0]} style="dashed" opacity={0.55} weight={1.5} />
        <Polygon points={[[c, 0], [c + sq, 0], [c + sq, sq], [c, sq]]} color={Theme.foreground} fillOpacity={0} weight={1.2} strokeOpacity={0.6} />

        <Point x={c} y={s} color={subjectColor} />
        <Text x={c} y={s} attach={c >= 0 ? "ne" : "nw"} size={24}>
          P(a, b)
        </Text>

        <Text x={0} y={0} attach="sw" size={22}>O</Text>
        <Text x={1} y={0} attach={s >= 0 ? "se" : "ne"} size={22}>A</Text>
        <Text x={c} y={0} attach={s >= 0 ? "s" : "n"} size={22}>M</Text>
      </Mafs>
      {caption && (
        <figcaption className="mt-1 text-center text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
