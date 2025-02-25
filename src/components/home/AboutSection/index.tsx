"use client";

import SectionTitle from "@/src/components/ui/SectionTitle";
import { useRef } from "react";
import DecorativeBackground from "./components/DecorativeBackground";
import DoctorDescription from "./components/DoctorDescription";
import DoctorImage from "./components/DoctorImage";
import { DOCTOR_CONTENT } from "./constants/content";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { AboutProps } from "./types";

const About = ({ className = "" }: AboutProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-16 sm:py-20 md:py-32 bg-white border-b border-slate-200 overflow-hidden ${className}`}
    >
      <DecorativeBackground isVisible={isVisible} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <SectionTitle
          title={DOCTOR_CONTENT.title}
          subtitle={DOCTOR_CONTENT.subtitle}
          className="mb-8 sm:mb-12 md:mb-16"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 lg:gap-24">
          <DoctorImage isVisible={isVisible} />
          <DoctorDescription isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default About;
