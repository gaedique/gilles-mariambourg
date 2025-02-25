"use client";

import ActionButton from "@/src/components/ui/ActionButton";
import { Phone } from "lucide-react";
import { FC } from "react";
import { HeroBlob } from "./components/HeroBlob";
import { HeroTitle } from "./components/HeroTitle";
import { ImageCarousel } from "./components/ImageCarousel";
import { SpecialtyBadge } from "./components/SpecialtyBadge";
import { specialties } from "./constants/specialties";
import { useHeroScroll } from "./hooks/useHeroScroll";
import { useImageCarousel } from "./hooks/useImageCarousel";

const Hero: FC = () => {
  const { isScrolled, scrollProgress } = useHeroScroll();
  const { currentIndex, setCurrentIndex } = useImageCarousel(specialties);

  return (
    <section className="relative h-screen">
      <HeroBlob />

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-40 md:pt-48">
        <div className="mb-16 md:mb-24">
          <HeroTitle />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-8 mt-10 sm:mt-12">
            <ActionButton href="tel:+33123456789" icon={Phone} variant="light">
              Appeler
            </ActionButton>
            <ActionButton
              href="https://www.doctolib.fr"
              external
              variant="dark"
            >
              DOCTOLIB
            </ActionButton>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative">
          {/* Specialty Badge */}
          <div className="absolute top-0 left-0 right-0 z-10 flex justify-center -translate-y-1/2">
            <SpecialtyBadge specialty={specialties[currentIndex]} />
          </div>

          <ImageCarousel
            specialties={specialties}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            isScrolled={isScrolled}
            scrollProgress={scrollProgress}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
