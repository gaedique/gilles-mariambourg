"use client";
import ScrollReveal from "@/src/ui/ScrollReveal";
import SectionTitle from "@/src/ui/SectionTitle";
import TexturedBackground from "@/src/ui/TexturedBackground";
import { consultationInfo } from "@/src/data/siteData";
import { useRef } from "react";
import { ConsultationCard } from "./components/ConsultationCard";

const Consultation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="consultation"
      aria-labelledby="titre-consultation"
      className="relative w-full bg-white overflow-hidden"
      itemScope
      itemType="https://schema.org/MedicalBusiness"
    >
      <ScrollReveal threshold={0.1} duration={1250}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            id="titre-consultation"
            title="Consultation"
            subtitle="Le parcours de soin"
          />

          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-blue-100/30">
            {/* Background texture */}
            <div className="absolute inset-0">
              <TexturedBackground
                className="absolute inset-0"
                baseFrom="from-blue-200/70"
                baseVia="via-blue-100/50"
                baseTo="to-slate-50/60"
                spotOneColor="bg-blue-300/40"
                spotTwoColor="bg-indigo-100/30"
                noiseOpacity={95}
                noiseContrast={110}
              />
            </div>

            {/* Introductory text for the consultation process */}
            <div className="relative px-6 py-8 md:p-10 lg:p-12">
              <p
                className="text-base leading-relaxed text-secondary text-center mb-8 font-body"
                itemProp="description"
              >
                Votre santé mérite une attention particulière, découvrez notre
                parcours de soins étape par étape.
              </p>

              {/* Cards container */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200"
                itemProp="availableService"
                itemScope
                itemType="https://schema.org/MedicalProcedure"
              >
                {/* First column */}
                <div className="grid grid-cols-1 divide-y divide-slate-200">
                  <div className="h-[250px] bg-white/50 backdrop-blur-sm rounded-tl-lg">
                    <ConsultationCard
                      {...consultationInfo[0]}
                      position="topLeft"
                    />
                  </div>
                  <div className="h-[250px] bg-white/50 backdrop-blur-sm rounded-bl-lg">
                    <ConsultationCard
                      {...consultationInfo[1]}
                      position="bottomLeft"
                    />
                  </div>
                </div>

                {/* Second column */}
                <div className="grid grid-cols-1 divide-y divide-slate-200">
                  <div className="h-[250px] bg-white/50 backdrop-blur-sm rounded-tr-lg">
                    <ConsultationCard
                      {...consultationInfo[2]}
                      position="topRight"
                    />
                  </div>
                  <div className="h-[250px] bg-white/50 backdrop-blur-sm rounded-br-lg">
                    <ConsultationCard
                      {...consultationInfo[3]}
                      position="bottomRight"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Consultation;
