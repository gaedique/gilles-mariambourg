"use client";
import { useEffect, useRef, useState } from "react";
import About from "../home/AboutSection"; // Import the existing About component

const AboutSectionTransition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const progress = Math.min(
          1,
          Math.max(0, 1 - rect.top / viewportHeight)
        );
        setScrollProgress(progress);
      }
    };

    if (sectionRef.current) observer.observe(sectionRef.current);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      {/* Background Transition Layer */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-brand-bay-of-many-50/30 to-brand-bay-of-many-100/50 opacity-0 transition-opacity duration-700"
        style={{
          opacity: scrollProgress * 0.5,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Subtle Parallax and Reveal Effect */}
      <div
        className="relative z-10 transition-transform duration-500"
        style={{
          transform: `translateY(${20 * (1 - scrollProgress)}px) scale(${
            0.98 + scrollProgress * 0.02
          })`,
          transformOrigin: "center",
          opacity: isVisible ? 1 : 0,
          transition: "transform 0.7s ease-out, opacity 0.7s ease-out",
        }}
      >
        <About />
      </div>

      {/* Soft Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-bay-of-many-100/20 to-transparent pointer-events-none"
        style={{
          opacity: scrollProgress,
          transition: "opacity 0.5s ease-out",
        }}
      />
    </div>
  );
};

export default AboutSectionTransition;
