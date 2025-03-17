import { ElementType, ReactNode } from "react";

export interface WaveAnimationProps {
  children: ReactNode[];
  initialDelay?: number;
  itemDelay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  as?: ElementType;
  childTag?: ElementType;
  noInitialTransform?: boolean;
  disconnectOnEnter?: boolean;
}
