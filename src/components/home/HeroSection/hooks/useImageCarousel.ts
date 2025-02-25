"use client";

import { useEffect, useState } from "react";
import { Specialty } from "../types";

interface CarouselState {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const useImageCarousel = (
  images: Specialty[],
  interval = 6000
): CarouselState => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return { currentIndex, setCurrentIndex };
};
