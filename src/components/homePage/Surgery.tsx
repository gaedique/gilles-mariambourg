"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const surgeryTypes = [
  {
    id: "rachis",
    title: "Chirurgie du rachis",
    description:
      "La chirurgie du dos traite les pathologies du rachis et de la colonne vertébrale, comme les hernies discales, le canal lombaire étroit, les déformations ou les instabilités, en visant à soulager les douleurs, restaurer la stabilité et améliorer la qualité de vie.",
    points: [
      { top: "40%", left: "50%" },
      { top: "55%", left: "48%" },
    ],
  },
  {
    id: "hanche",
    title: "Prothèse de hanche",
    description:
      "La chirurgie de prothèse de hanche permet de remplacer l'articulation endommagée par une prothèse artificielle, réduisant la douleur et restaurant la mobilité pour une meilleure qualité de vie.",
    points: [{ top: "70%", left: "40%" }],
  },
  {
    id: "genou",
    title: "Prothèse du genou",
    description:
      "La chirurgie de prothèse du genou vise à remplacer l'articulation usée par une prothèse adaptée, permettant de retrouver une mobilité optimale et de supprimer les douleurs liées à l'arthrose.",
    points: [{ top: "85%", left: "45%" }],
  },
  {
    id: "traumatologie",
    title: "Traumatologie",
    description:
      "La traumatologie traite les blessures et traumatismes de l'appareil locomoteur. Elle prend en charge les fractures, entorses, luxations et lésions musculaires ou tendineuses, en utilisant des techniques chirurgicales modernes pour une récupération optimale.",
    points: [{ top: "30%", left: "45%" }],
  },
];

export default function SurgerySection() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="w-full py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="flex flex-col  justify-center mb-24 relative">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-3 h-3 bg-black rounded-3xl animate-pulse"
              aria-hidden="true"
            ></div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500">
              Expertise
            </h2>
          </div>
          <h3 className="text-xl text-gray-400 uppercase tracking-wide mt-2">
            Interventions Pratiquées
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-24">
          <div className="col-span-5 flex flex-col justify-center space-y-12 ">
            <div className="border-t border-gray-200">
              {surgeryTypes.map((surgery, index) => (
                <div
                  key={surgery.id}
                  className="border-b border-gray-200 group relative"
                >
                  <button
                    onClick={() => toggleAccordion(surgery.id)}
                    className="flex justify-between items-center w-full p-4 text-left text-gray-900 hover:bg-gray-900 hover:text-white transition"
                  >
                    <span className="text-base font-medium">
                      {surgery.title}
                    </span>
                    <ChevronDown
                      className={`transition-transform transform ${
                        activeId === surgery.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {activeId === surgery.id && (
                    <div className="p-4 bg-gray-50 text-gray-600 leading-relaxed relative">
                      <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      {surgery.description}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <Link
                href="/surgery"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-700 hover:opacity-70 transition-all"
              >
                <span>En savoir plus</span>
                <span className="h-px w-8 bg-black transform origin-left transition-all duration-300 ease-out group-hover:w-12"></span>
              </Link>
            </div>
          </div>

          <div className="col-span-5 col-start-8">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden relative">
              <Image
                src="/images/old_woman_running.png"
                alt="Illustration chirurgie"
                fill
                className="object-cover"
              />
              {activeId &&
                surgeryTypes
                  .find((s) => s.id === activeId)
                  ?.points.map((point, index) => (
                    <div
                      key={index}
                      className="absolute w-4 h-4 bg-red-500 rounded-full animate-pulse"
                      style={{ top: point.top, left: point.left }}
                    ></div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
