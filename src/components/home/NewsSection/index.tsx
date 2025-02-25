"use client";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { Video } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BenefitsList } from "./components/BenefitsList";
import { VideoSection } from "./components/VideoSection";
import { defaultNewsSection } from "./constants/defaults";
import { NewsSectionProps } from "./types";

export default function NewsSection({
  description = defaultNewsSection.description,
  videoUrl = defaultNewsSection.videoUrl,
  benefits = defaultNewsSection.benefits,
  thumbnailUrl = defaultNewsSection.thumbnailUrl,
}: NewsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full pt-[13%] pb-12 md:pb-24 transition-colors duration-300 bg-gradient-to-b from-transparent via-slate-50/90 to-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:pb-24">
        <div
          className={`flex flex-col items-center justify-center mb-12 md:mb-24 relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center">
            <SectionTitle
              subtitle="Actualité"
              title="Une révolution chirurgicale"
              largeTitle="ENDOSCOPIE BIPORTALE RACHIDIENNE"
              centered
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
          <div
            className={`col-span-1 lg:col-span-5 flex flex-col justify-center space-y-8 md:space-y-12 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <p className="text-base text-slate-600 leading-relaxed">
                {description}
              </p>
              <BenefitsList benefits={benefits} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <Link
                href="/NewsPage"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all"
              >
                <span>Découvrir</span>
                <span className="h-px w-6 sm:w-8 bg-brand-bay-of-many-600 transform origin-left scale-x-100 transition-transform duration-300 ease-out group-hover:scale-x-150" />
              </Link>

              <Link
                href={videoUrl}
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all"
              >
                <span>Regarder la vidéo</span>
                <Video className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <div
            className={`col-span-1 lg:col-span-7 relative transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-2xl bg-white">
              <VideoSection
                videoUrl={videoUrl}
                thumbnailUrl={thumbnailUrl}
                thumbnailAlt="Endoscopie biportale rachidienne"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
