"use client";

import { getAboutSection, getDoctorInfo } from "@/src/data/siteData";
import ScrollReveal from "@/src/ui/ScrollReveal";
import SectionTitle from "@/src/ui/SectionTitle";
import TexturedBackground from "@/src/ui/TexturedBackground";
import Script from "next/script";
import { useRef } from "react";
import DoctorDescription from "./components/DoctorDescription";
import DoctorImage from "./components/DoctorImage";
import { AboutProps } from "./types";

const About = ({ className = "" }: AboutProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const doctorInfo = getDoctorInfo();
  const aboutData = getAboutSection();

  // Structured data as a regular JavaScript object
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctorInfo.fullName,
    description: aboutData.mainDescription,
    image: aboutData.imageSrc,
    medicalSpecialty: doctorInfo.specialties.join(", "),
    knowsAbout: doctorInfo.specialties,
    memberOf: doctorInfo.societies.map((society) => ({
      "@type": "Organization",
      name: society,
    })),
  };

  return (
    <>
      {/* Add structured data for SEO */}
      <Script id="doctor-structured-data" type="application/ld+json">
        {`${JSON.stringify(structuredData)}`}
      </Script>

      <section
        ref={sectionRef}
        aria-labelledby="titre-a-propos"
        className={`relative w-full overflow-hidden ${className}`}
        id="about-doctor-mariambourg"
      >
        <ScrollReveal threshold={0.1} duration={1250}>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
            <SectionTitle
              id="titre-a-propos"
              title={aboutData.title}
              subtitle={aboutData.subtitle}
            />

            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-teal-100/40">
              {/* Background texture */}
              <div className="absolute inset-0">
                <TexturedBackground
                  className="absolute inset-0"
                  baseFrom="from-cyan-100/70"
                  baseVia="via-brand-bay-of-many-300/50"
                  baseTo="to-sky-200/30"
                  spotOneColor="bg-indigo-200/50"
                  spotTwoColor="bg-indigo-200/40"
                  noiseOpacity={50}
                  noiseContrast={140}
                  flipX={true}
                  flipY={true}
                />
              </div>

              {/* Content with semantic HTML */}
              <div className="relative px-6 py-8 md:p-10 lg:p-12">
                <div
                  className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 lg:gap-24"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  {/* Doctor Image */}
                  <div className="col-span-1 md:col-span-5">
                    <DoctorImage
                      aboutData={aboutData}
                      doctorInfo={doctorInfo}
                    />
                  </div>

                  {/* Doctor Description - no animation */}
                  <DoctorDescription
                    aboutData={aboutData}
                    doctorInfo={doctorInfo}
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default About;
