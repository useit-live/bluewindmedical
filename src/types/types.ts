export interface Question {
  id: number;
  question: string;
  options: string[];
}

export interface Answer {
  question: number;
  count: number;
}
