"use client";

import { Activity } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ActionLink } from "../ui/ActionLink";
import clsx from "clsx";

type SurgeryType = "rachis" | "hanche" | "genou";

interface Point {
  x: number;
  y: number;
  surgery: SurgeryType;
}

interface SurgeryInfo {
  title: string;
  description: string;
  points: Point[];
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
  },
  hanche: {
    title: "Prothèse de hanche",
    description:
      "La chirurgie de prothèse de hanche permet de remplacer l'articulation endommagée par une prothèse artificielle, réduisant la douleur et restaurant la mobilité pour une meilleure qualité de vie.",
    points: [
      { x: 41, y: 51, surgery: "hanche" },
      { x: 58, y: 53, surgery: "hanche" },
    ],
  },
  genou: {
    title: "Prothèse du genou",
    description:
      "La chirurgie de prothèse du genou vise à remplacer l'articulation usée par une prothèse adaptée, permettant de retrouver une mobilité optimale et de supprimer les douleurs liées à l'arthrose.",
    points: [{ x: 53, y: 67, surgery: "genou" }],
  },
};

export default function SurgerySection() {
  const [selectedSurgery, setSelectedSurgery] = useState<SurgeryType>("rachis");
  const [hoveredSurgery, setHoveredSurgery] = useState<SurgeryType | null>(
    null
  );

  const activePoints = hoveredSurgery
    ? surgeryData[hoveredSurgery].points
    : surgeryData[selectedSurgery].points;

  return (
    <section>
      <div className="container mx-auto px-8">
        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-16">
          {/* Image à gauche (colonnes 1-5) */}
          <div className="lg:col-span-5 lg:col-start-1 relative">
            <div className="relative max-w-xl mx-auto">
              <div className="aspect-square rounded-full overflow-hidden border-2 border-blue-50 shadow-sm">
                <div className="w-full h-full relative p-8">
                  <Image
                    src="/images/old_woman_running.png"
                    alt="Femme âgée qui court"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
              {/* Points sur l'image */}
              <div className="absolute inset-0">
                {activePoints.map((point, index) => (
                  <div
                    key={index}
                    className="absolute animate-pulse group"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    role="button"
                    aria-label={`Point représentant une chirurgie ${point.surgery}`}
                  >
                    <div className="relative">
                      <div className="w-3 h-3 bg-white rounded-full group-hover:w-4 group-hover:h-4 transition-all" />
                      <div className="absolute -inset-1 bg-white rounded-full opacity-50 animate-ping" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contenu à droite (colonnes 7-12) */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col space-y-8">
            <div>
              <h3 className="text-md font-medium text-gray-600 uppercase tracking-wider">
                CHIRURGIE
              </h3>
              <div className="w-16 h-0.5 bg-deep-blue my-2"></div>
              <h2 className="text-3xl font-bold">Interventions pratiquées</h2>
            </div>

            {/* Boutons de sélection */}
            <div className="space-y-3">
              {(Object.keys(surgeryData) as SurgeryType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedSurgery(type)}
                  onMouseEnter={() => setHoveredSurgery(type)}
                  onMouseLeave={() => setHoveredSurgery(null)}
                  className={clsx(
                    "w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200",
                    selectedSurgery === type
                      ? "bg-deep-blue text-white shadow-lg"
                      : "hover:bg-deep-blue-light/30 hover:text-deep-blue active:text-deep-blue-dark"
                  )}
                >
                  <Activity className="w-5 h-5" />
                  <span className="font-medium">{surgeryData[type].title}</span>
                </button>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600">
              {surgeryData[selectedSurgery].description}
            </p>

            {/* ActionLink */}
            <div className="flex justify-end">
              <ActionLink
                href={`/expertises/${selectedSurgery}`}
                text="En savoir plus"
                direction="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
