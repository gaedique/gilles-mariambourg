"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { SURGERY_TYPES } from "./constants/surgeryTypes";
import { BackgroundShapes } from "./components/BackgroundShapes";
import { SurgeryAccordionItem } from "./components/SurgeryAccordionItem";
import { ImageWithPoints } from "./components/ImageWithPoints";

export default function SurgerySection() {
  // Initialize with the first surgery's ID
  const [activeId, setActiveId] = useState<string>(SURGERY_TYPES[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (id: string) => {
    setActiveId(id);
  };

  const activeSurgery = SURGERY_TYPES.find((s) => s.id === activeId);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 md:py-24 bg-white border-b border-gray-200 overflow-hidden"
    >
      <BackgroundShapes isVisible={isVisible} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <SectionTitle subtitle="Expertise" title="Interventions Pratiquées" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
          <div
            className={`lg:col-span-5 lg:col-start-2 flex flex-col justify-center space-y-12 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="border-t border-gray-200/50">
              {SURGERY_TYPES.map((surgery) => (
                <SurgeryAccordionItem
                  key={surgery.id}
                  surgery={surgery}
                  isActive={activeId === surgery.id}
                  onToggle={() => toggleAccordion(surgery.id)}
                />
              ))}
            </div>
          </div>

          <div
            className={`lg:col-span-5 lg:col-start-8 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <ImageWithPoints activeSurgery={activeSurgery} />
          </div>
        </div>
      </div>
    </section>
  );
}
