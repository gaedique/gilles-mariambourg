"use client";

import { useState, useEffect } from "react";

interface ScrollProgressOptions {
  threshold?: number;
}

export const useScrollProgress = ({
  threshold = 1,
}: ScrollProgressOptions = {}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight * threshold;
      const progress = Math.min(1, Math.max(0, scrolled / viewportHeight));
      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return progress;
};
