"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const specialties = [
  {
    title: "Chirurgie du rachis",
    image: "/images/bg_stairs.png",
    // Add blur data URL for each image
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRg...", // You'll need to generate this
  },
  {
    title: "Prothèse de hanche",
    image: "/images/bg_stretching_back.png",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
  },
  {
    title: "Prothèse du genou",
    image: "/images/bg_stretching_horizon.png",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
  },
];

export default function EnhancedHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  //transition hero/news
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(1, scrollTop / windowHeight);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // External action button component (for things like phone calls)
  const ActionButton = ({ onClick, children, className = "" }) => (
    <button
      onClick={onClick}
      className={`active:scale-95 transform transition-all duration-150 ${className}`}
    >
      {children}
    </button>
  );

  useEffect(() => {
    // Reduced timer to 6 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specialties.length);
    }, 6000);

    // Scroll handler
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // News section intersection observer
    const newsObserver = new IntersectionObserver(
      ([entry]) => {
        setIsNewsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-100px",
      }
    );

    // Observe the news section
    const newsSection = document.querySelector("#news-section");
    if (newsSection) {
      newsObserver.observe(newsSection);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
      newsObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen">
      {/* Enhanced blob animations using your configured animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-3/5 left-1/3 w-1/3 h-3/5 rounded-full bg-brand-bay-of-many-300/20 blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Main content with enhanced animations */}
      <div className="relative pt-32 md:pt-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            {/* Title section with proper animations */}
            <div className="mb-12 opacity-0 animate-fade-in-up">
              <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full">
                <p className="text-sm font-light text-brand-bay-of-many-600">
                  {specialties[currentIndex].title}
                </p>
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-medium opacity-0 animate-fade-in-up">
              Gilles Mariambourg
            </h1>

            <p
              className="text-lg md:text-xl text-brand-bay-of-many-600 font-light opacity-0 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Chirurgien Orthopédiste et traumatologue
            </p>

            <p
              className="text-xs uppercase tracking-widest text-brand-bay-of-many-400 font-light opacity-0 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              Castres, France
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8">
              <a
                href="tel:+33123456789"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-brand-bay-of-many-200 rounded-xl hover:bg-brand-bay-of-many-50 hover:border-brand-bay-of-many-300 active:scale-95 transform transition-all group"
              >
                <Phone
                  size={18}
                  className="text-brand-bay-of-many-600 group-hover:rotate-12 transition-transform"
                />
                <span className="text-lg text-brand-bay-of-many-800">
                  Appeler
                </span>
              </a>

              <a
                href="https://www.doctolib.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 bg-brand-bay-of-many-600 text-white rounded-xl hover:bg-brand-bay-of-many-700 active:scale-95 transform transition-all text-lg text-center relative overflow-hidden group"
              >
                <span className="relative z-10">DOCTOLIB</span>
                <div className="absolute inset-0 bg-brand-bay-of-many-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Image container with parallax scroll effect */}
          <div className="relative w-full group">
            <div
              className="relative aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-xl"
              style={{
                transform: `scale(${1 + scrollProgress * 0.2})`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div
                className="absolute inset-0 transition-transform duration-1000 ease-out will-change-transform"
                style={{
                  transform: `scale(${isScrolled ? 1.1 : 1})`,
                }}
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

              {/* Image controls */}
              <div className="absolute inset-x-0 bottom-8 flex justify-center gap-2">
                {specialties.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
