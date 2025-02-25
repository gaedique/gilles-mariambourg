"use client";

import { useRef } from "react";
import BottomBar from "./components/BottomBar";
import ContactSection from "./components/ContactSection";
import InfoSection from "./components/InfoSection";
import NavigationSection from "./components/NavigationSection";
import useIntersectionAnimation from "./hooks/useIntersectionAnimation";

// hooks/useIntersectionAnimation.js

// components/Footer/Footer.jsx
const Footer = () => {
  const footerRef = useRef(null);
  useIntersectionAnimation(footerRef);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-brand-bay-of-many-950 text-white transform opacity-0 translate-y-10 transition-all duration-700 ease-out"
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
  );
};

export default Footer;
