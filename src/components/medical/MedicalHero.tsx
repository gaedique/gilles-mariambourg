"use client";

import ScrollReveal from "@/src/ui/ScrollReveal";
import TexturedBackground from "@/src/ui/TexturedBackground";
import Image from "next/image";

interface MedicalIntroduction {
  title: string;
  subtitle: string;
  introduction: {
    beginning: string;
    emphasis: string;
    following: string;
  };
  details: string[];
}

interface MedicalHeroProps {
  data: MedicalIntroduction;
  imageSrc: string;
  imageAlt: string;
}

const MedicalHero = ({ data, imageSrc, imageAlt }: MedicalHeroProps) => {
  return (
    <section
      className="flex flex-col justify-center min-h-[calc(100vh-var(--navbar-height)-48px)]"
      aria-labelledby="medical-hero-heading"
      role="banner"
    >
      {/* SEO enhancing metadata */}
      <div className="hidden" aria-hidden="true" data-seo-metadata>
        <div data-schema="MedicalSpecialty">
          <span data-prop="name">{data.title}</span>
          <span data-prop="description">
            {data.introduction.beginning +
              data.introduction.emphasis +
              data.introduction.following}
          </span>
          <span data-prop="medicalSpecialty">Orthopedic Surgery</span>
        </div>
      </div>

      <ScrollReveal threshold={0.1} duration={1250}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10 py-6 flex-grow">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-brand-bay-of-many-100/40 h-full">
            <div className="absolute inset-0">
              <TexturedBackground
                className="absolute inset-0"
                baseFrom="from-purple-100/70"
                baseVia="via-brand-bay-of-many-300/50"
                baseTo="to-violet-200/30"
                spotOneColor="bg-violet-200/50"
                spotTwoColor="bg-purple-200/40"
                noiseOpacity={50}
                noiseContrast={140}
                flipX
                flipY
              />
            </div>

            <div className="relative p-6 md:p-8 lg:p-12 h-full flex items-center">
              <div
                className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 lg:gap-16 w-full"
                itemScope
                itemType="https://schema.org/MedicalSpecialty"
              >
                {/* Medical Image */}
                <div className="col-span-1 md:col-span-5 flex items-center justify-center transition-all duration-1000 ease-out delay-300">
                  <div className="aspect-[3/4] relative rounded-xl overflow-hidden shadow-xl max-h-[70vh] w-full">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Medical Info */}
                <div className="col-span-1 md:col-span-7 md:col-start-7 flex flex-col justify-center">
                  <div className="mb-8">
                    <p className="text-sm font-medium font-heading uppercase tracking-wider text-brand-bay-of-many-600 mb-3">
                      {data.subtitle}
                    </p>
                    <h2
                      id="medical-hero-heading"
                      className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800"
                    >
                      {data.title}
                    </h2>
                    <div className="w-16 h-1 bg-brand-bay-of-many-600 mt-4"></div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-base md:text-lg font-heading font-medium leading-relaxed text-slate-700">
                      {data.introduction.beginning}
                      <em className="text-brand-bay-of-many-600 font-semibold">
                        {" "}
                        {data.introduction.emphasis}
                      </em>{" "}
                      {data.introduction.following}
                    </p>

                    {data.details?.length > 0 && (
                      <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-600 font-body">
                        {data.details.map((paragraph, index) => (
                          <p key={index} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
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

export default MedicalHero;
