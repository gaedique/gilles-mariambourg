"use client";
import { useCallback, useEffect, useState } from "react";

interface UseHeaderScrollReturn {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  scrollPosition: number;
}

export const useHeaderScroll = (
  scrollThreshold: number = 10
  // closeMenuOnScroll: boolean = true
): UseHeaderScrollReturn => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setScrollPosition(currentScrollPos);

    // Update scrolled state based on threshold
    setIsScrolled(currentScrollPos > scrollThreshold);

    // Optionally close mobile menu when scrolling
    // if (closeMenuOnScroll && isMobileMenuOpen && currentScrollPos > 50) {
    //   setIsMobileMenuOpen(false);
    // }
  }, [scrollThreshold]);

  // Update body overflow based on mobile menu state
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Add scroll event listener
  useEffect(() => {
    // Run once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    scrollPosition,
  };
};
