"use client";
import { getNewsSection, newsSection } from "@/src/data/siteData";
import { HighlightText } from "@/src/ui/HighlightText";
import ScrollReveal from "@/src/ui/ScrollReveal";
import { SecondaryLink } from "@/src/ui/SecondaryLink";
import SectionTitle from "@/src/ui/SectionTitle";
import TexturedBackground from "@/src/ui/TexturedBackground";
import { useRef } from "react";
import { BenefitsList } from "./components/BenefitsList";
import { VideoSection } from "./components/VideoSection";
import { NewsSectionProps } from "./types";

export default function NewsSection({
  title,
  subtitle,
  description,
  videoUrl,
  benefits,
  thumbnailUrl,
}: NewsSectionProps) {
  const newsData = getNewsSection();

  // Use provided props or fallback to data from siteData
  const sectionTitle = title || newsData.title;
  const sectionSubtitle = subtitle || newsData.subtitle;
  const sectionDescription = description || newsData.description;
  const sectionVideoUrl = videoUrl || newsData.videoUrl;
  const sectionBenefits = benefits || newsData.benefits.slice(0, 3);
  const sectionThumbnailUrl = thumbnailUrl || newsData.thumbnailUrl;

  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="w-full relative bg-gradient-to-b from-transparent via-brand-bay-of-many-200/40 to-white"
      aria-labelledby="titre-section-actualite"
      id="endoscopie-biportale-rachidienne"
    >
      <ScrollReveal threshold={0.1} duration={1250}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Title area with highlighted technique name */}
          <div className="flex flex-col items-center justify-center mb-12 md:mb-16 relative">
            <p className="text-4xl md:text-5xl font-heading font-medium tracking-wide text-center px-6 py-3">
              <strong className="relative inline-block animate-pulse">
                ENDOSCOPIE BIPORTALE RACHIDIENNE
                <span
                  className="absolute -bottom-2 left-0 w-16 h-1 bg-brand-bay-of-many-600"
                  aria-hidden="true"
                ></span>
              </strong>
            </p>
          </div>

          <SectionTitle
            title={sectionTitle}
            subtitle={sectionSubtitle}
            centered
            id="titre-section-actualite"
          />

          {/* Content area with texture */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0">
              <TexturedBackground
                className="absolute inset-0"
                baseFrom="from-blue-100/60"
                baseVia="via-indigo-100/50"
                baseTo="to-slate-100/70"
                spotOneColor="bg-blue-200/40"
                spotTwoColor="bg-indigo-200/30"
                noiseOpacity={60}
                noiseContrast={140}
              />
            </div>

            {/* Content */}
            <div className="relative px-6 py-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-8 md:space-y-12">
                  <div className="space-y-8 pr-4">
                    <p className="text-base font-heading font-bold sm:text-lg leading-relaxed text-justify">
                      <HighlightText
                        text={sectionDescription}
                        highlight="endoscopie biportale rachidienne"
                      />
                    </p>
                    <BenefitsList benefits={sectionBenefits} />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <SecondaryLink
                      href={sectionVideoUrl}
                      ariaLabel="Regarder la vidéo sur l'endoscopie biportale rachidienne"
                      variant="icon"
                      iconType="video"
                    >
                      {newsSection.ctaVideo}
                    </SecondaryLink>

                    <SecondaryLink
                      href={newsSection.ctaLink}
                      ariaLabel="Découvrir plus d'informations sur l'endoscopie biportale rachidienne"
                      variant="line"
                    >
                      {newsSection.ctaText}
                    </SecondaryLink>
                  </div>
                </div>

                <div
                  className="col-span-1 lg:col-span-7 relative"
                  role="complementary"
                >
                  <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-2xl bg-white">
                    <VideoSection
                      videoUrl={sectionVideoUrl}
                      thumbnailUrl={sectionThumbnailUrl}
                      thumbnailAlt="Démonstration de la technique d'endoscopie biportale rachidienne"
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
}
