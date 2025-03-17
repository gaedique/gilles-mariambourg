"use client";

import { getSurgerySection } from "@/src/data/siteData";
import ScrollReveal from "@/src/ui/ScrollReveal";
import SectionTitle from "@/src/ui/SectionTitle";
import TexturedBackground from "@/src/ui/TexturedBackground";
import { useRef, useState } from "react";
import { ImageWithPoints } from "./components/ImageWithPoints";
import { SurgeryDescription } from "./components/SurgeryDescription";
import { SurgerySelector } from "./components/SurgerySelector";
import { Surgery } from "./types/surgery";

export default function SurgerySection() {
  const surgeryData = getSurgerySection();
  const [activeId, setActiveId] = useState<string>(
    surgeryData.surgeryTypes[0].id
  );
  const sectionRef = useRef<HTMLElement>(null);

  const activeSurgery = surgeryData.surgeryTypes.find(
    (s) => s.id === activeId
  ) as Surgery;

  // Schema.org structured data for medical procedure
  const schemaData = activeSurgery
    ? {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        name: activeSurgery.title,
        description: activeSurgery.description,
        procedure: "Chirurgie orthopédique",
        procedureType: "Chirurgie",
        howPerformed: activeSurgery.description,
        medicalSpecialty: "Orthopédie",
      }
    : null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden"
      id="expertise"
      aria-labelledby="section-expertise-title"
    >
      {/* JSON-LD structured data */}
      {schemaData && (
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      )}

      <ScrollReveal threshold={0.1} duration={1250}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
          <SectionTitle
            title={surgeryData.title}
            subtitle={surgeryData.subtitle}
            id="section-expertise-title"
          />

          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-indigo-100/30">
            {/* Background texture */}
            <div className="absolute inset-0">
              <TexturedBackground
                className="absolute inset-0"
                baseFrom="from-cyan-100/40"
                baseVia="via-blue-100/50"
                baseTo="to-gray-50/70"
                spotOneColor="bg-indigo-100/30"
                spotTwoColor="bg-blue-100/20"
                noiseOpacity={35}
                noiseContrast={130}
              />
            </div>

            {/* Content with padding */}
            <div className="relative px-6 py-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <article className="lg:col-span-5 lg:col-start-1 flex flex-col justify-center">
                  <SurgerySelector
                    surgeryTypes={surgeryData.surgeryTypes as Surgery[]}
                    activeId={activeId}
                    onSelect={setActiveId}
                  />

                  {activeSurgery && (
                    <SurgeryDescription
                      surgery={activeSurgery}
                      ctaText={surgeryData.ctaText}
                      ctaLink={surgeryData.ctaLink}
                    />
                  )}
                </article>

                <div className="lg:col-span-5 lg:col-start-8">
                  <ImageWithPoints
                    activeSurgery={activeSurgery}
                    imageSrc={surgeryData.imageSrc}
                    imageAlt={surgeryData.imageAlt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
