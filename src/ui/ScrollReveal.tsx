"use client";

import React, { ReactNode, useRef, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  delay = 0,
  duration = 1250, // 1.25s like the example you referenced
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null); // Specifically HTMLDivElement
  const hasTriggered = useRef(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && (!triggerOnce || !hasTriggered.current)) {
          // Set a timeout for the delay if specified
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              hasTriggered.current = true;
            }, delay);
          } else {
            setIsVisible(true);
            hasTriggered.current = true;
          }
        } else if (!entry.isIntersecting && !triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        root: null, // viewport
        rootMargin,
        threshold,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return (
    <div
      ref={elementRef}
      className={`${className} transition-opacity ease-in ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
