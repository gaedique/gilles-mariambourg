export interface ScrollState {
  isScrolled: boolean;
  scrollProgress: number;
}

export interface CarouselState {
  currentSpecialty: number;
  setcurrentSpecialty: (index: number) => void;
}
