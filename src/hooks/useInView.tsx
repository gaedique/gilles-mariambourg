import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  /**
   * The minimum amount of the element that needs to be visible before triggering (0-1)
   * @default 0.1
   */
  threshold?: number;

  /**
   * Whether to disconnect the observer after the element has been detected in view
   * @default true
   */
  disconnectOnEnter?: boolean;

  /**
   * The element to use as the viewport for checking visibility
   * @default null (browser viewport)
   */
  root?: Element | null;

  /**
   * Margin around the root element
   * @default "0px"
   */
  rootMargin?: string;
};

/**
 * A custom hook that detects when an element enters the viewport using Intersection Observer API
 *
 * @param options Configuration options for the Intersection Observer
 * @returns An object containing a ref to attach to the element, a boolean indicating if the element is in view, and a function to reset the state
 */
function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const {
    threshold = 0.1,
    disconnectOnEnter = true,
    root = null,
    rootMargin = "0px",
  } = options;

  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const resetInView = () => {
    setIsInView(false);

    // Re-observe the element if it exists
    if (ref.current && observerRef.current) {
      observerRef.current.observe(ref.current);
    }
  };

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);

          // Disconnect if option is enabled
          if (disconnectOnEnter && currentRef) {
            observer.unobserve(currentRef);
          }
        } else if (!disconnectOnEnter) {
          setIsInView(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observerRef.current = observer;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold, disconnectOnEnter, root, rootMargin]);

  return {
    ref,
    isInView,
    resetInView,
  };
}

export default useInView;
