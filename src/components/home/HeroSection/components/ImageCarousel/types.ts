import { Specialty } from "@/src/data/siteData";

export interface ImageCarouselProps {
  specialties: Specialty[];
  currentSpecialty: number;
  isScrolled: boolean;
  scrollProgress: number;
  setcurrentSpecialty: (index: number) => void;
}
