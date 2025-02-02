import React, { useEffect, useRef, useState } from "react";

const SectionTransition = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);
  const newsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && newsRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const newsRect = newsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress based on hero section position
        const progress = Math.max(
          0,
          Math.min(1, 1 - heroRect.bottom / windowHeight)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-screen">
        <div
          className="relative aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden"
          style={{
            transform: `scale(${1 + scrollProgress * 0.2})`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* Your hero image content */}
        </div>

        {/* Darkening overlay that becomes more visible as you scroll */}
        <div
          className="absolute inset-0 bg-brand-bay-of-many-950 pointer-events-none"
          style={{
            opacity: scrollProgress * 0.5,
            transition: "opacity 0.1s ease-out",
          }}
        />
      </div>

      {/* News Section */}
      <div
        ref={newsRef}
        className="relative"
        style={{
          backgroundColor: `rgba(var(--brand-bay-of-many-50), ${scrollProgress})`,
          transition: "background-color 0.1s ease-out",
        }}
      >
        {/* Your news section content */}
      </div>
    </div>
  );
};

export default SectionTransition;
