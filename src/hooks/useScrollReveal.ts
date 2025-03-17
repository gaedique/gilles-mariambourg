// "use client";

// import { useEffect, useRef, useState } from "react";

// interface ScrollRevealOptions {
//   threshold?: number;
//   rootMargin?: string;
//   triggerOnce?: boolean;
//   delay?: number;
// }

// export function useScrollReveal({
//   threshold = 0.1,
//   rootMargin = "0px",
//   triggerOnce = true,
//   delay = 0,
// }: ScrollRevealOptions = {}) {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef<HTMLElement | null>(null);
//   const hasTriggered = useRef(false);

//   useEffect(() => {
//     const currentElement = elementRef.current;
//     if (!currentElement) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;

//         if (entry.isIntersecting && (!triggerOnce || !hasTriggered.current)) {
//           // Set a timeout for the delay if specified
//           if (delay > 0) {
//             setTimeout(() => {
//               setIsVisible(true);
//               hasTriggered.current = true;
//             }, delay);
//           } else {
//             setIsVisible(true);
//             hasTriggered.current = true;
//           }
//         } else if (!entry.isIntersecting && !triggerOnce) {
//           setIsVisible(false);
//         }
//       },
//       {
//         root: null, // viewport
//         rootMargin,
//         threshold,
//       }
//     );

//     observer.observe(currentElement);

//     return () => {
//       if (currentElement) {
//         observer.unobserve(currentElement);
//       }
//     };
//   }, [threshold, rootMargin, triggerOnce, delay]);

//   return { elementRef, isVisible };
// }
"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollReveal({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  delay = 0,
}: ScrollRevealOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
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

  return { elementRef, isVisible };
}
