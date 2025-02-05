"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it’s visible
        }
      },
      { threshold: 0.1 } //threshold: 0.2??
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 bg-white border-b border-slate-200 overflow-hidden"
    >
      {/* New Background Layer */}
      <div
        className={`absolute right-0 top-0 h-full w-3/4 transform transition-all duration-[1200ms] ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Main shape with enhanced gradient and pattern */}
        <div
          className={`absolute right-0 top-0 w-2/3 h-full
            bg-gradient-to-br from-brand-bay-of-many-50/30 to-brand-bay-of-many-100/60
            transform -skew-x-12 rounded-bl-[120px]  transition-all duration-[2000ms]
            hover:scale-105 hover:rotate-1 ease-out
            before:absolute before:inset-0 
            before:bg-[radial-gradient(#00000012_1px,transparent_1px)] 
            before:bg-[length:25px_25px]
            ${isVisible ? "opacity-90" : "opacity-0"}`}
        >
          {/* Additional subtle texture layer */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Rest of your content remains the same */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-3 h-3 bg-brand-bay-of-many-600 rounded-full animate-pulse"
              aria-hidden="true"
            ></div>
            <h2 className="text-xs uppercase tracking-wider text-brand-bay-of-many-600">
              À Propos
            </h2>
          </div>

          <h3 className="text-xl text-slate-600 uppercase tracking-wide">
            Votre chirurgien
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div
            className={`col-span-5 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-5"
            }`}
          >
            <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/gilles_bureau.png"
                alt="Dr. Mariambourg"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div
            className={`col-span-12 md:col-span-5 md:col-start-7 flex flex-col justify-center space-y-10 md:space-y-16 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-5"
            }`}
          >
            <div className="space-y-8">
              {/* Main paragraph */}
              <p className="text-lg leading-relaxed text-slate-900 text-justify">
                <strong>
                  Le Docteur{" "}
                  <em className="text-brand-bay-of-many-600">
                    Gilles Mariambourg
                  </em>{" "}
                  se consacre depuis 40 ans, à restaurer la mobilité et
                  améliorer la qualité de vie de ses patients.
                </strong>
              </p>

              {/* Secondary paragraphs */}
              <div className="space-y-6 text-slate-600">
                <p className="text-base leading-relaxed text-justify">
                  Son approche allie précision et technique, avec pour objectif
                  d'offrir à chaque patient une prise en charge adaptée et
                  efficace.
                </p>
                <p className="text-base leading-relaxed text-justify">
                  Toujours à l'affût des avancées médicales, il continue de se
                  former aux techniques les plus innovantes afin d'offrir à ses
                  patients des soins à la pointe de la chirurgie orthopédique.
                </p>
              </div>
            </div>

            {/* Link */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all"
            >
              <span>En savoir plus</span>
              <span className="h-px w-8 bg-brand-bay-of-many-600 transform origin-left scale-x-100 transition-transform duration-300 ease-out group-hover:scale-x-150"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
