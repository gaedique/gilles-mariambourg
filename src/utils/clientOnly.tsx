"use client";

import { useState, useEffect } from "react";

/**
 * Safe access to window properties with fallback for SSR
 */
export function getCustomWindowProperty<T>(
  propertyPath: string,
  fallback: T
): T {
  if (typeof window === "undefined") return fallback;
  // Handle nested property paths (e.g., "dataLayer.push")
  const parts = propertyPath.split(".");
  let current: unknown = window;

  for (const part of parts) {
    if (current == null || typeof current !== "object") {
      return fallback;
    }

    current = (current as Record<string, unknown>)[part];
  }

  return (current as unknown as T) ?? fallback;
}

/**
 * Hook to safely get window dimensions that works with SSR
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Set up event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures this only runs on mount

  return windowSize;
}

/**
 * Safely check if the code is running on the client
 */
export function isClient(): boolean {
  return typeof window !== "undefined";
}

/**
 * Hook that returns true once the component has mounted on the client
 * Useful for avoiding hydration mismatch errors
 */
export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}
