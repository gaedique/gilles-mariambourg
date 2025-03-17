import useInView from "@/src/hooks/useInView";
import React, { useEffect, useState } from "react";
import { WaveAnimationProps } from "./types";

const WaveAnimation = ({
  children,
  initialDelay = 300,
  itemDelay = 100,
  duration = 500,
  className = "",
  direction = "up",
  easing = "ease-out",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  as = "div",
  childTag = "div",
  noInitialTransform = false,
  disconnectOnEnter = true,
}: WaveAnimationProps) => {
  const { ref: containerRef, isInView } = useInView<HTMLDivElement>({
    threshold,
    rootMargin,
    disconnectOnEnter,
  });

  const [animatedItems, setAnimatedItems] = useState<boolean[]>(
    Array(React.Children.count(children)).fill(false)
  );

  // Initial transform values based on direction
  const getInitialTransform = () => {
    if (noInitialTransform) return "";

    switch (direction) {
      case "up":
        return "translate-y-6";
      case "down":
        return "-translate-y-6";
      case "left":
        return "translate-x-6";
      case "right":
        return "-translate-x-6";
      default:
        return "translate-y-6";
    }
  };

  useEffect(() => {
    if (isInView) {
      // Stagger animation for each child
      const timer = setTimeout(() => {
        React.Children.forEach(children, (_, index) => {
          setTimeout(() => {
            setAnimatedItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }, index * itemDelay);
        });
      }, initialDelay);

      return () => clearTimeout(timer);
    }
  }, [isInView, children, initialDelay, itemDelay]);

  const Container = as;
  const ChildWrapper = childTag;

  return (
    <Container ref={containerRef} className={className} aria-live="polite">
      {React.Children.map(children, (child, index) => (
        <ChildWrapper
          key={index}
          className={`transition-all transform duration-${duration} ${easing} 
          ${
            animatedItems[index]
              ? "opacity-100 translate-y-0 translate-x-0"
              : `opacity-0 ${getInitialTransform()}`
          }`}
          style={{
            transitionDelay: `${initialDelay + index * itemDelay}ms`,
          }}
        >
          {child}
        </ChildWrapper>
      ))}
    </Container>
  );
};

export default WaveAnimation;
