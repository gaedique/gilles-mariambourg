import { ScrollOptions, ScrollState } from "./types";
import { useState, useEffect } from "react";

/**
 * A hook that tracks scroll position and progress
 *
 * @param options - Configuration options
 * @returns Scroll state object
 */
function useScroll(options: ScrollOptions = {}): ScrollState {
  const { scrollThreshold = 50 } = options;
  // Don't access window here, only read heightReference from options
  // Default to a reasonable value for SSR
  const defaultHeight = 800;

  const [scrollState, setScrollState] = useState<ScrollState>({
    isScrolled: false,
    scrollProgress: 0,
    scrollPosition: 0,
  });

  useEffect(() => {
    // Get the heightReference inside useEffect, where it's safe to access window
    const heightReference =
      options.heightReference || window.innerHeight || defaultHeight;

    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      const referenceHeight =
        typeof heightReference === "function"
          ? heightReference()
          : heightReference;

      const progress = Math.min(1, scrollTop / referenceHeight);

      setScrollState({
        isScrolled: scrollTop > scrollThreshold,
        scrollProgress: progress,
        scrollPosition: scrollTop,
      });
    };

    // Initial call to set starting values
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold, options.heightReference]);

  return scrollState;
}

export default useScroll;
