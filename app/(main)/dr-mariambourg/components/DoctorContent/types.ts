import { RefObject } from "react";

export interface ContentItem {
  subtitle: string;
  items: string[];
}

export interface SectionWithContent {
  title: string;
  content: ContentItem[];
  items?: never;
}

export interface SectionWithItems {
  title: string;
  items: string[];
  content?: never;
}

export type BiographySection = SectionWithContent | SectionWithItems;

export interface Biography {
  introduction?: {
    beginning: string;
    name: string;
    following: string;
  };
  details?: string[];
}

export interface DoctorContentProps {
  biographieData: Record<string, BiographySection>;
  sectionRefs: Record<string, RefObject<HTMLElement | null>>;
}
