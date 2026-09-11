"use client";

import { Mafs, Coordinates, Line, Plot, Point, Polygon, Text, LaTeX, Theme } from "mafs";

const U = 10; // m/s
const A = 5; // m/s²
const T = 4; // s
const V = U + A * T; // 30 m/s

function FigureShell({ title, caption, children }: { title: string; caption: string; children: React.ReactNode }) {
  return (
    <figure className="my-4 rounded-xl border border-border/40 bg-card overflow-hidden">
      <div className="bg-muted/20 px-4 py-2.5 border-b border-border/30 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{title}</span>
      </div>
      <div className="p-3" role="img" aria-label={title}>
        <div className="sr-only">{caption}</div>
        {children}
      </div>
      <figcaption className="px-4 py-2.5 bg-muted/20 border-t border-border/30 text-xs text-muted-foreground text-center leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}

export function KinematicsVtGraph() {
  return (
    <FigureShell
      title="v–t graph — deriving the equations"
      caption={`v–t graph for u = ${U} m/s, a = ${A} m/s² over t = ${T} s (v = u + at). The area under the line is the displacement: rectangle ut = ${U}·${T} = ${U * T} m plus triangle ½·t·(v − u) = ½at² = ${(A * T * T) / 2} m. The slope of the line is the acceleration a.`}
    >
      <Mafs
        height={250}
        viewBox={{ x: [-0.4, 5.2], y: [-2, 36] }}
        preserveAspectRatio={false}
        pan={false}
        zoom={false}
      >
        <Coordinates.Cartesian
          xAxis={{ lines: 1, labels: (v: number) => String(v) }}
          yAxis={{ lines: 10, labels: (v: number) => String(v) }}
        />
        <Polygon points={[[0, 0], [T, 0], [T, U], [0, U]]} color={Theme.blue} fillOpacity={0.18} svgPolygonProps={{ stroke: "none" }} />
        <Polygon points={[[0, U], [T, U], [T, V]]} color={Theme.violet} fillOpacity={0.18} svgPolygonProps={{ stroke: "none" }} />
        <Line.Segment point1={[T, 0]} point2={[T, V]} style="dashed" opacity={0.45} />
        <Line.Segment point1={[0, U]} point2={[T, U]} style="dashed" opacity={0.45} />
        <Line.Segment point1={[0, U]} point2={[T, V]} color="var(--foreground)" weight={2.4} />
        <Point x={0} y={U} color="var(--foreground)" />
        <Point x={T} y={V} color="var(--foreground)" />
        <LaTeX at={[0.15, 5]} tex="u t" color={Theme.blue} />
        <LaTeX at={[4.35, 24]} tex="\frac{1}{2}a t^{2}" color={Theme.violet} />
        <Text x={0.15} y={U} attach="s" size={16} color="var(--foreground)">u</Text>
        <Text x={T} y={V} attach="se" size={16} color="var(--foreground)">v = u + at</Text>
        <Text x={T} y={0} attach="nw" size={16} color="var(--foreground)">t</Text>
        <Text x={2.4} y={33} size={15} color="var(--foreground)">slope = a</Text>
      </Mafs>
    </FigureShell>
  );
}

export function KinematicsXtGraph() {
  return (
    <FigureShell
      title="x–t graph — displacement vs time"
      caption={`Position–time graph x = ut + ½at² for u = ${U} m/s, a = ${A} m/s². The parabola opens upward (positive a); the tangent slope at any instant is the instantaneous velocity (u at t = 0). At t = ${T} s, x = ${U * T + (A * T * T) / 2} m.`}
    >
      <Mafs
        height={250}
        viewBox={{ x: [-0.4, 5.2], y: [-6, 92] }}
        preserveAspectRatio={false}
        pan={false}
        zoom={false}
      >
        <Coordinates.Cartesian
          xAxis={{ lines: 1, labels: (v: number) => String(v) }}
          yAxis={{ lines: 20, labels: (v: number) => String(v) }}
        />
        <Plot.OfX y={(x) => U * x + (A / 2) * x * x} domain={[0, T]} color="var(--foreground)" />
        <Line.Segment point1={[0, 0]} point2={[0, 20]} style="dashed" opacity={0.45} />
        <Line.Segment point1={[0, 20]} point2={[2, 20]} style="dashed" opacity={0.45} />
        <Point x={0} y={0} color="var(--foreground)" />
        <Point x={T} y={U * T + (A * T * T) / 2} color="var(--foreground)" />
        <Text x={0} y={20} attach="e" size={16} color="var(--foreground)">u</Text>
        <Text x={0.32} y={0} attach="ne" size={16} color="var(--foreground)">0</Text>
        <Text x={T} y={U * T + (A * T * T) / 2} attach="se" size={16} color="var(--foreground)">x</Text>
        <Text x={T} y={0} attach="nw" size={16} color="var(--foreground)">t</Text>
        <LaTeX at={[3.4, 66]} tex="x = u t + \frac{1}{2} a t^{2}" />
        <Text x={2.4} y={87} size={15} color="var(--foreground)">slope = v (tangent)</Text>
      </Mafs>
    </FigureShell>
  );
}

export function KinematicsAtGraph() {
  return (
    <FigureShell
      title="a–t graph — constant acceleration"
      caption={`Acceleration–time graph: a horizontal line at a = ${A} m/s². The area under it over 0 → ${T} s is a·t = ${A * T} m/s = Δv (the change in velocity from ${U} to ${V} m/s).`}
    >
      <Mafs
        height={220}
        viewBox={{ x: [-0.4, 5.2], y: [-1.2, 7.2] }}
        preserveAspectRatio={false}
        pan={false}
        zoom={false}
      >
        <Coordinates.Cartesian
          xAxis={{ lines: 1, labels: (v: number) => String(v) }}
          yAxis={{ lines: 2, labels: (v: number) => String(v) }}
        />
        <Polygon points={[[0, 0], [T, 0], [T, A], [0, A]]} color={Theme.green} fillOpacity={0.18} svgPolygonProps={{ stroke: "none" }} />
        <Line.Segment point1={[T, 0]} point2={[T, A]} style="dashed" opacity={0.45} />
        <Line.Segment point1={[0, A]} point2={[T, A]} color="var(--foreground)" weight={2.4} />
        <Point x={0} y={A} color="var(--foreground)" />
        <Point x={T} y={A} color="var(--foreground)" />
        <Text x={0} y={A} attach="s" size={16} color="var(--foreground)">a</Text>
        <Text x={T} y={0} attach="nw" size={16} color="var(--foreground)">t</Text>
        <LaTeX at={[2, 3.4]} tex="\text{area} = a t = \Delta v" color={Theme.green} />
      </Mafs>
    </FigureShell>
  );
}

export function KinematicsGraphs() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <KinematicsVtGraph />
      <KinematicsXtGraph />
      <KinematicsAtGraph />
    </div>
  );
}