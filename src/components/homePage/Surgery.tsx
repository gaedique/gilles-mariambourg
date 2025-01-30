"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { WhiteSection } from "../ui/Sections";

type SurgeryType = "rachis" | "hanche" | "genou" | "traumatologie";

interface Point {
  x: number;
  y: number;
  surgery: SurgeryType;
}

interface SurgeryInfo {
  title: string;
  description: string;
  points: Point[];
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

const surgeryData: Record<SurgeryType, SurgeryInfo> = {
  rachis: {
    title: "Chirurgie du rachis",
    description:
      "La chirurgie du dos traite les pathologies du rachis et de la colonne vertébrale, comme les hernies discales, le canal lombaire étroit, les déformations ou les instabilités, en visant à soulager les douleurs, restaurer la stabilité et améliorer la qualité de vie.",
    points: [
      { x: 51, y: 25, surgery: "rachis" },
      { x: 53, y: 32, surgery: "rachis" },
      { x: 52, y: 40, surgery: "rachis" },
    ],
    color: "#6B8FC0",
    gradientFrom: "rgba(236, 242, 250, 0.7)",
    gradientTo: "rgba(227, 236, 247, 0.5)",
  },
  hanche: {
    title: "Prothèse de hanche",
    description:
      "La chirurgie de prothèse de hanche permet de remplacer l'articulation endommagée par une prothèse artificielle, réduisant la douleur et restaurant la mobilité pour une meilleure qualité de vie.",
    points: [
      { x: 41, y: 51, surgery: "hanche" },
      { x: 58, y: 53, surgery: "hanche" },
    ],
    color: "#9B7FE6",
    gradientFrom: "rgba(243, 240, 252, 0.7)",
    gradientTo: "rgba(237, 233, 250, 0.5)",
  },
  genou: {
    title: "Prothèse du genou",
    description:
      "La chirurgie de prothèse du genou vise à remplacer l'articulation usée par une prothèse adaptée, permettant de retrouver une mobilité optimale et de supprimer les douleurs liées à l'arthrose.",
    points: [{ x: 53, y: 67, surgery: "genou" }],
    color: "#5B98B7",
    gradientFrom: "rgba(237, 245, 250, 0.7)",
    gradientTo: "rgba(229, 241, 247, 0.5)",
  },
  traumatologie: {
    title: "Traumatologie",
    description:
      "La traumatologie traite les blessures et traumatismes de l'appareil locomoteur. Elle prend en charge les fractures, entorses, luxations et lésions musculaires ou tendineuses, en utilisant des techniques chirurgicales modernes pour une récupération optimale.",
    points: [{ x: 45, y: 60, surgery: "traumatologie" }],
    color: "#5BA894",
    gradientFrom: "rgba(235, 247, 243, 0.7)",
    gradientTo: "rgba(228, 244, 239, 0.5)",
  },
};

export default function Surgery() {
  const [selectedSurgery, setSelectedSurgery] = useState<SurgeryType>("rachis");
  const [openAccordion, setOpenAccordion] = useState<SurgeryType | null>(
    "rachis"
  );
  const activePoints = surgeryData[selectedSurgery].points;

  const handleAccordionClick = (
    type: SurgeryType,
    isChevronClick: boolean = false
  ) => {
    if (isChevronClick) {
      e.stopPropagation();
    }
    setSelectedSurgery(type);
    setOpenAccordion(openAccordion === type ? null : type);
  };

  return (
    <WhiteSection>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top border */}
        <div className="w-full h-px bg-gray-200 mb-16" />

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Container */}
          <div className="flex flex-col h-[600px] relative">
            <div className="flex items-center gap-3 mb-12">
              <div className="relative">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{
                    backgroundColor: surgeryData[selectedSurgery].color,
                  }}
                />
                <div
                  className="absolute -inset-1 rounded-full opacity-40 animate-ping"
                  style={{
                    backgroundColor: surgeryData[selectedSurgery].color,
                  }}
                />
              </div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500">
                À propos
              </h3>
            </div>

            <h2 className="text-4xl font-bold mb-12">
              Interventions pratiquées
            </h2>

            {/* Accordions */}
            <div className="space-y-2 flex-grow">
              {(Object.keys(surgeryData) as SurgeryType[]).map((type) => {
                const isOpen = openAccordion === type;
                const surgery = surgeryData[type];

                return (
                  <div
                    key={type}
                    onClick={() => handleAccordionClick(type)}
                    className="overflow-hidden cursor-pointer"
                  >
                    <div
                      className={`
                        transition-all duration-300
                        ${isOpen ? "bg-gradient-to-r" : "hover:bg-gray-50"}
                      `}
                      style={{
                        backgroundImage: isOpen
                          ? `linear-gradient(to right, ${surgery.gradientFrom}, ${surgery.gradientTo})`
                          : undefined,
                      }}
                    >
                      <div className="flex items-center p-4">
                        <div
                          className="w-2 h-2 bg-gray-300 rounded-full mr-4"
                          style={{
                            backgroundColor: isOpen ? surgery.color : undefined,
                          }}
                        />
                        <h3
                          className={`flex-1 text-lg transition-colors duration-300 
                            ${isOpen ? "font-medium" : "text-gray-900"}
                          `}
                          style={{ color: isOpen ? surgery.color : undefined }}
                        >
                          {surgery.title}
                        </h3>
                        <ChevronDown
                          className={`h-5 w-5 transform transition-transform duration-300 
                            ${isOpen ? "rotate-180" : "text-gray-400"}
                          `}
                          style={{ color: isOpen ? surgery.color : undefined }}
                        />
                      </div>
                      {isOpen && (
                        <div className="px-10 py-4">
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {surgery.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="absolute bottom-0 right-0">
              <a
                href={`/chirurgie/${selectedSurgery}`}
                className="group inline-flex items-center text-sm uppercase tracking-wide transition-all duration-300"
                style={{
                  color: openAccordion
                    ? surgeryData[selectedSurgery].color
                    : undefined,
                }}
              >
                <span className="relative">
                  En savoir plus
                  <span className="block absolute -bottom-1 left-0 w-full h-px transform origin-left transition-all duration-300 ease-out bg-current scale-x-0 group-hover:scale-x-100" />
                </span>
                <ArrowRight className="h-4 w-4 ml-2 transform transition-all duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative">
            <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/old_woman_running.png"
                alt="Femme âgée qui court"
                fill
                className="object-cover"
              />

              {/* Points on image */}
              {activePoints.map((point, index) => (
                <div
                  key={index}
                  className="absolute animate-pulse"
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="relative">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: surgeryData[selectedSurgery].color,
                      }}
                    />
                    <div
                      className="absolute -inset-1 rounded-full opacity-50 animate-ping"
                      style={{
                        backgroundColor: surgeryData[selectedSurgery].color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Thumbnail Images */}
            <div className="absolute -right-16 top-0 space-y-4">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={`/images/thumbnail-${index}.jpg`}
                    alt={`Thumbnail ${index}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WhiteSection>
  );
}
