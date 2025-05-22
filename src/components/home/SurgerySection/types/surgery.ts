export interface Point {
  top: string;
  left: string;
  size?: "small" | "medium" | "large";
  title?: string;
  url?: string;
}

export type Surgery = {
  id: string;
  title: string;
  description: string;
  url?: string;
  points?: Point[];
  slug?: string;
};
