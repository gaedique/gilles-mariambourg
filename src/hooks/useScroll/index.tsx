import { ScrollOptions, ScrollState } from "./types";
import { useState, useEffect } from "react";

/**
 * A hook that tracks scroll position and progress
 *
 * @param options - Configuration options
 * @returns Scroll state object
 */
function useScroll(options: ScrollOptions = {}): ScrollState {
  const { scrollThreshold = 50, heightReference = window?.innerHeight || 800 } =
    options;

  const [scrollState, setScrollState] = useState<ScrollState>({
    isScrolled: false,
    scrollProgress: 0,
    scrollPosition: 0,
  });

  useEffect(() => {
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
  }, [scrollThreshold, heightReference]);

  return scrollState;
}

export default useScroll;
