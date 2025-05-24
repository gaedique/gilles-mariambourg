"use client";

import { useEffect, useRef, useState } from "react";
import BottomBar from "./components/BottomBar";
import ContactSection from "./components/ContactSection";
import InfoSection from "./components/InfoSection";
import NavigationSection from "./components/NavigationSection";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    // Measure the footer height once it's rendered
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }

    // Update on resize
    const handleResize = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Invisible spacer with the same height as the footer */}
      <div style={{ height: footerHeight }} />

      {/* Actual footer with fixed positioning */}
      <footer
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full bg-brand-bay-of-many-950 text-white"
        aria-label="Informations de contact et navigation du site"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
            <ContactSection />
            <NavigationSection />
            <InfoSection />
          </div>
          <BottomBar />
        </div>
      </footer>
    </>
  );
};

export default Footer;
