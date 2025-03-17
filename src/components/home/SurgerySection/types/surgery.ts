export interface Point {
  top: string;
  left: string;
  size?: "small" | "medium" | "large";
}

export type Surgery = {
  id: string;
  title: string;
  description: string;
  points?: Point[];
  slug?: string;
};
