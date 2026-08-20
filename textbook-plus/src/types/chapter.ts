export interface ChapterSection {
  id: string;
  title: string;
  tab?: "read" | "discourses";
  children?: ChapterSection[];
}

export interface Question {
  id: string;
  type: "mcq" | "short";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  options?: string[];
  answer: number | string;
  explanation: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
}
