"use client";
import React, { useEffect, useRef, useState } from "react";
import { Video } from "lucide-react";
import Link from "next/link";

interface NewsSectionProps {
  description?: string;
  videoUrl?: string;
  benefits?: string[];
  scrollProgress?: number;
}

export default function NewsSection({
  description = "Une technique chirurgicale innovante qui minimise l'invasion et maximise la précision des interventions rachidiennes.",
  videoUrl = "https://youtu.be/uyDBTpAIHpE?si=WEYRDN2Uut_QwBl0",
  benefits = [
    "Précision chirurgicale",
    "Accélère la récupération",
    "Réduit la douleur post-opératoire",
  ],
  scrollProgress = 0,
}: NewsSectionProps) {
  const [videoError, setVideoError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  // const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getYouTubeEmbedUrl = (url: string): string | null => {
    try {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11
        ? `https://www.youtube.com/embed/${match[2]}`
        : null;
    } catch (error) {
      console.error("Invalid YouTube URL", error);
      return null;
    }
  };

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 transition-colors duration-300 bg-gradient-to-b from-transparent via-slate-50/90 to-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Main Title */}
        <div
          className={`flex flex-col items-center justify-center mb-24 relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-brand-bay-of-many-600 rounded-full animate-pulse" />
            <h2 className="text-xs uppercase tracking-wider text-brand-bay-of-many-600">
              Actualité
            </h2>
          </div>
          <h3 className="text-xl text-slate-600 uppercase tracking-wide mb-12">
            Une révolution chirurgicale
          </h3>
          <p className="text-4xl text-slate-900">
            ENDOSCOPIE BIPORTALE RACHIDIENNE
          </p>
        </div>

        {/* Content Section */}
        {/* <div className="max-w-7xl mx-auto px-6 py-24"> */}
        <div className="grid grid-cols-12 gap-24">
          {/* Left Column - Text */}
          <div
            className={`col-span-5 flex flex-col justify-center space-y-12 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <p className="text-base text-slate-600 leading-relaxed">
                {description}
              </p>

              <ul className="border-t border-slate-200">
                {benefits.map((item, index) => (
                  <li key={index} className="group border-b border-slate-200">
                    <div className="px-6 py-4 flex items-center transition-colors duration-300 hover:bg-slate-50">
                      <span className="text-base text-slate-700 group-hover:text-slate-900">
                        {item}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-8">
              <Link
                href="/news"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-900 hover:text-slate-600"
              >
                <span>Découvrir</span>
                <span className="h-px w-8 bg-slate-900 group-hover:w-12 transition-all duration-300" />
              </Link>

              <Link
                href={videoUrl}
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-900 hover:text-slate-600"
              >
                <span>Regarder la vidéo</span>
                <Video className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Column - Video */}
          <div
            className={`col-span-7 relative transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-2xl bg-white">
              {videoError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                  <p className="text-slate-500 text-sm">
                    Impossible de charger la vidéo
                  </p>
                </div>
              ) : embedUrl ? (
                <iframe
                  src={embedUrl}
                  className="absolute inset-0 w-full h-full"
                  title="Surgical technique demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onError={() => setVideoError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                  <Video className="w-12 h-12 text-slate-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
