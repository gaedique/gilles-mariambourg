"use client";

import { Specialty } from "@/src/data/siteData";
import { useEffect, useState } from "react";
import { CarouselState } from "./types";

export const useImageCarousel = (
  images: Specialty[],
  interval = 6000
): CarouselState => {
  const [currentSpecialty, setcurrentSpecialty] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setcurrentSpecialty((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return { currentSpecialty, setcurrentSpecialty };
};
