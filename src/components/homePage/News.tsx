"use client";
import { Video } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AnimatedSurgicalTitle from "../ui/AnimatedSurgicalTitle";

interface NewsSectionProps {
  description?: string;
  videoUrl?: string;
  benefits?: string[];
}

export default function NewsSection({
  description = "Une technique chirurgicale innovante qui minimise l'invasion et maximise la précision des interventions rachidiennes.",
  videoUrl = "https://youtu.be/uyDBTpAIHpE?si=WEYRDN2Uut_QwBl0",
  benefits = [
    "Précision chirurgicale",
    "Accélère la récupération",
    "Réduit la douleur post-opératoire",
  ],
}: NewsSectionProps) {
  const [videoError, setVideoError] = useState(false);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const benefitsRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            animateTitle(1); // Fully animate when entering viewport
          } else {
            animateTitle(0); // Reset animation when leaving viewport
          }
        });
      },
      {
        threshold: 0.1, // Trigger when even 10% of the title is visible
        rootMargin: "50px 0px", // Start slightly before the element enters viewport
      }
    );

    if (titleContainerRef.current) {
      titleObserver.observe(titleContainerRef.current);
    }

    const animateTitle = (progress: number) => {
      if (!titleContainerRef.current) return;

      const words = titleContainerRef.current.children;
      Array.from(words).forEach((word, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const offset = (1 - progress) * 50 * direction;
        word.setAttribute(
          "style",
          `
          transform: translate3d(${offset}px, 0, 0);
          opacity: ${progress};
          transition: transform 0.3s ease-out, opacity 0.3s ease-out;
        `
        );
      });
    };

    const benefitsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "scale-100");
            entry.target.classList.remove("opacity-0", "scale-95");
          }
        });
      },
      { threshold: 0.1 }
    );

    benefitsRefs.current.forEach((ref) => {
      if (ref) benefitsObserver.observe(ref);
    });

    return () => {
      titleObserver.disconnect();
      benefitsObserver.disconnect();
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
    <>
      {/* <ParallaxTransition /> */}
      {/* <EnhancedTransition /> */}
      {/* <ParallaxNewsTransition /> */}
      <section className="w-full py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Title */}
          <div className="flex flex-col items-center justify-center mb-24 relative">
            {/* Subtitle section */}
            <div className="flex items-center gap-3 mb-12">
              <div
                className="w-3 h-3 bg-black rounded-full animate-pulse"
                aria-hidden="true"
              ></div>
              <h2 className="text-xs uppercase tracking-wider text-gray-500 ">
                Actualité
              </h2>
            </div>
            {/* <div
              ref={titleContainerRef}
              className="flex flex-wrap justify-center items-baseline gap-6 md:gap-8 overflow-hidden mb-12"
            >
              {["Endoscopie", "biportale", "rachidienne"].map((word, index) => (
                <span
                  key={word}
                  className="text-5xl  font-bold text-gray-900 uppercase tracking-tight"
                  style={{
                    willChange: "transform, opacity",
                    opacity: 0,
                    transform: `translate3d(${
                      index % 2 === 0 ? "50px" : "-50px"
                    }, 0, 0)`,
                  }}
                >
                  {word}
                </span>
              ))}
            </div> */}
            <AnimatedSurgicalTitle
              variant="fade" // ou "fade" selon votre préférence
              words={["Endoscopie", "biportale", "rachidienne"]}
            />
            <h3 className="text-xl text-gray-400 uppercase tracking-wide mt-2">
              Une révolution chirurgicale
            </h3>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-12 gap-24">
            {/* Left Column - Text */}
            <div className="col-span-5 flex flex-col justify-center space-y-12">
              <div className="space-y-8">
                <p className="text-base text-gray-900 leading-relaxed text-justify">
                  {description}
                </p>

                <ul className="border-t border-gray-200">
                  {benefits.map((item, index) => (
                    <li
                      key={index}
                      ref={(el) => (benefitsRefs.current[index] = el)}
                      className="relative group border-b border-gray-200 opacity-0 scale-95 transition-all duration-500"
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex items-center text-gray-600 px-6 py-3 group-hover:text-white transition-colors duration-300">
                        <span className="text-base leading-relaxed text-justify">
                          {item}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-8">
                <Link
                  href="/news"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-70 transition-all"
                >
                  <span>Découvrir</span>
                  <span className="h-px w-8 bg-black transform origin-left transition-all duration-300 ease-out group-hover:w-12"></span>
                </Link>

                <Link
                  href={videoUrl}
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-70 transition-all"
                >
                  <span>Regarder la vidéo</span>
                  <Video className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column - Video */}
            <div className="col-span-6 col-start-7 relative">
              <div
                className="absolute -z-10 top-6 left-6 w-full h-full rounded-xl bg-brand-primary-light blur-lg"
                aria-hidden="true"
              ></div>
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-out md:translate-x-10">
                {videoError ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <p className="text-gray-500 text-sm">
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
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
                    <Video className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
