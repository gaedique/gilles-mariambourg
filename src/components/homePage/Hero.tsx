"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

const specialties = [
  {
    title: "Chirurgie du rachis",
    image: "/images/bg_stairs.png",
  },
  {
    title: "Prothèse de hanche",
    image: "/images/bg_stretching_back.png",
  },
  {
    title: "Prothèse du genou",
    image: "/images/bg_stretching_horizon.png",
  },
];

const EnhancedHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specialties.length);
    }, 4000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-24 px-6">
          <Link href="/" className="flex items-center gap-4 group">
            {/* Minimal monogram logo */}
            <div className="w-12 h-12 border border-black/20 rounded-full flex items-center justify-center">
              <span className="font-serif text-lg tracking-wider">GM</span>
            </div>
            <span className="text-2xl tracking-wide">
              Dr.Mariambourg
              <span className="block text-xs text-gray-500 font-light tracking-wider uppercase mt-0.5">
                Rachis | Hanche | Genou
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-12">
            <Link
              href="/actualite"
              className="text-sm font-medium relative group"
            >
              Actualité
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/expertise"
              className="text-sm font-medium relative group"
            >
              Expertise
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/a-propos"
              className="text-sm font-medium relative group"
            >
              À propos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/consultation"
              className="text-sm font-medium relative group"
            >
              Consultation
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="text-sm px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 hover:scale-105 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-48 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center mb-16">
            {/* Specialty indicator */}
            <div className="mb-12">
              <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full">
                <p className="text-sm font-light">
                  {specialties[currentIndex].title}
                </p>
              </div>
            </div>
            <h1 className="text-7xl font-medium mb-8">Gilles Mariambourg</h1>
            <p className="text-xl text-gray-600 font-light mb-4">
              Chirurgien Orthopédiste et traumatologue
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-light">
              Castres, France
            </p>
            {/* Action buttons */}
            <div className="flex justify-center items-center gap-8 mt-8">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border rounded-xl hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg transition-all">
                <Phone size={18} />
                <span className="text-lg">Appeler</span>
              </button>
              <button className="px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg transition-all text-lg">
                DOCTOLIB
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative w-full group">
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl">
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
                    className="object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
                </div>
              ))}

              {/* Top controls bar */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent">
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
                  {/* Left side - Action buttons */}
                  {/* <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-full hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg transition-all">
                      <Phone size={18} />
                      <span className="text-lg">Appeler</span>
                    </button>
                    <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg transition-all text-lg">
                      DOCTOLIB
                    </button>
                  </div> */}

                  {/* Right side - Dots */}
                  <div className="flex gap-2">
                    {specialties.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex
                            ? "w-8 bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHero;
