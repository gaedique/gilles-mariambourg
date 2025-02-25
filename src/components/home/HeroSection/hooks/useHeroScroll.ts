"use client";

import { useState, useEffect } from "react";

interface ScrollState {
  isScrolled: boolean;
  scrollProgress: number;
}

export const useHeroScroll = (): ScrollState => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(1, scrollTop / windowHeight);
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled, scrollProgress };
};
