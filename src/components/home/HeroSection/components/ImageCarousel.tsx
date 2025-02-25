import Image from "next/image";
import { FC } from "react";
import { Specialty } from "../types";

interface ImageCarouselProps {
  specialties: Specialty[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  isScrolled: boolean;
  scrollProgress: number;
}

export const ImageCarousel: FC<ImageCarouselProps> = ({
  specialties,
  currentIndex,
  setCurrentIndex,
  isScrolled,
  scrollProgress,
}) => (
  <div className="relative w-full group">
    <div
      className="relative aspect-[4/3] sm:aspect-video md:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
      style={{
        transform: `scale(${1 + scrollProgress * 0.2})`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div
        className="absolute inset-0 transition-transform duration-1000 ease-out will-change-transform"
        style={{ transform: `scale(${isScrolled ? 1.1 : 1})` }}
      >
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={specialty.image}
              alt={specialty.title}
              fill
              priority={index === 0}
              placeholder="blur"
              blurDataURL={specialty.blurDataURL}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-bay-of-many-950/20 via-transparent to-brand-bay-of-many-950/20" />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-4 sm:bottom-8 flex justify-center gap-1.5 sm:gap-2">
        {specialties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all ${
              index === currentIndex ? "w-6 sm:w-8 bg-white" : "bg-white/50"
            }`}
            aria-label={`Voir la spécialité ${specialties[index].title}`}
          />
        ))}
      </div>
    </div>
  </div>
);
