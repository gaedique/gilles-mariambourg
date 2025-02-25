"use client";
import { GradientTransition } from "./components/GradientTransition";
import { TransitionOverlay } from "./components/TransitionOverlay";
import { useScrollProgress } from "./hooks/useScrollProgress";
import type { TransitionWrapperProps } from "./types";

const SectionWrapper = ({
  heroComponent: Hero,
  newsComponent: News,
  newsProps,
}: TransitionWrapperProps) => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="relative">
      <Hero />
      <TransitionOverlay opacity={scrollProgress} />
      <GradientTransition />
      <div className="relative z-10 pt-40 md:pt-[20%]">
        <News {...newsProps} />
      </div>
    </div>
  );
};

export default SectionWrapper;
