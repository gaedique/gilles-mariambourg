"use client";

import { siteData } from "@/src/data/siteData";
import ScrollReveal from "@/src/ui/ScrollReveal";
import TexturedBackground from "@/src/ui/TexturedBackground";
import Image from "next/image";
import { DoctorHeroProps } from "./types";

const DoctorHero = ({ biography }: DoctorHeroProps) => {
  return (
    <section
      className="flex flex-col justify-center min-h-[calc(100vh-var(--navbar-height)-48px)]"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* SEO enhancing metadata */}
      <div className="hidden" aria-hidden="true" data-seo-metadata>
        <div data-schema="MedicalBusiness">
          <span data-prop="name">{siteData.doctor.fullName}</span>
          <span data-prop="description">
            {siteData.doctor.description?.short}
          </span>
          <span data-prop="telephone">{siteData.contact?.details?.phone}</span>
          <span data-prop="address">{`${siteData.contact?.address?.street}, ${siteData.contact?.address?.postalCode} ${siteData.contact?.address?.city}`}</span>
          <span data-prop="medicalSpecialty">
            {siteData.doctor.specialties?.join(", ")}
          </span>
        </div>
      </div>

      <ScrollReveal threshold={0.1} duration={1250}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10 py-6 flex-grow">
          {/* Main content in a styled card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-brand-bay-of-many-100/40 h-full">
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
            <div className="relative p-6 md:p-8 lg:p-12 h-full flex items-center">
              <div
                className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 lg:gap-16 w-full"
                itemScope
                itemType="https://schema.org/Person"
              >
                {/* Doctor Image */}
                <div
                  className="col-span-1 md:col-span-5 flex items-center justify-center
                transition-all duration-1000 ease-out delay-300"
                >
                  <div className="aspect-[3/4] relative rounded-xl overflow-hidden shadow-xl max-h-[70vh] w-full">
                    <Image
                      src="/images/gilles_profil.webp"
                      alt={siteData.doctor.fullName}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Doctor Information */}
                <div className="col-span-1 md:col-span-7 md:col-start-7 flex flex-col justify-center">
                  {/* Title - Clean professional approach */}
                  <div className="mb-8">
                    <h2 className="text-sm font-medium font-heading uppercase tracking-wider text-brand-bay-of-many-600 mb-3">
                      Votre Chirurgien
                    </h2>
                    <h1
                      id="hero-heading"
                      className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800"
                    >
                      Dr. Mariambourg
                    </h1>
                    <div className="w-16 h-1 bg-brand-bay-of-many-600 mt-4"></div>
                  </div>

                  <div className="space-y-6">
                    {biography?.introduction ? (
                      <p className="text-base md:text-lg font-heading font-medium leading-relaxed text-slate-700">
                        {biography.introduction.beginning}
                        <em className="text-brand-bay-of-many-600 font-semibold">
                          {" "}
                          {biography.introduction.name}
                        </em>{" "}
                        {biography.introduction.following}
                      </p>
                    ) : (
                      <p className="text-base md:text-lg font-heading font-medium leading-relaxed text-slate-700">
                        {siteData.doctor.description?.short || ""}
                      </p>
                    )}

                    {biography?.details && biography.details.length > 0 ? (
                      <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-600 font-body">
                        {biography.details.map(
                          (paragraph: string, index: number) => (
                            <p key={index} className="leading-relaxed">
                              {paragraph}
                            </p>
                          )
                        )}
                      </div>
                    ) : null}
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

export default DoctorHero;
