export type Tone = "yellow" | "blue" | "green" | "pink" | "orange";

export interface Flags {
  b?: true;
  i?: true;
  u?: true;
  hl?: Tone;
}

export interface Annotation {
  id: string;
  q: string;
  p: string;
  s: string;
  o: number;
  at: number;
  b?: true;
  i?: true;
  u?: true;
  hl?: Tone;
}

export interface Interval {
  start: number;
  end: number;
  b?: true;
  i?: true;
  u?: true;
  hl?: Tone;
}
