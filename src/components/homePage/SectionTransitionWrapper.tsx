"use client";
import React, { useState, useEffect } from "react";
import EnhancedHero from "./Hero";
import NewsSection from "./News";

const SectionTransitionWrapper = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1) based on viewport height
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, scrolled / viewportHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <EnhancedHero />

      {/* Darkening Overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-slate-900 transition-opacity duration-300"
        style={{
          opacity: scrollProgress * 0.35,
          zIndex: 1,
        }}
      />

      {/* Smooth gradient transition */}
      <div
        className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-brand-bay-of-many-50/30 pointer-events-none"
        style={{
          transform: "translateY(-100%)",
        }}
      />

      {/* News Section */}
      <div className="relative z-10">
        <NewsSection />
      </div>
    </div>
  );
};

export default SectionTransitionWrapper;
