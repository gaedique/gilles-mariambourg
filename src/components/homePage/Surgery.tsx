"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-white border-b border-gray-200 overflow-hidden"
    >
      {/* Geometric Background Shape */}
      <div
        className={`absolute top-1/4 -left-24 w-2/3 h-2/3 
          bg-brand-bay-of-many-50/30 
          rounded-tr-[200px] 
          transform -rotate-6 
          transition-all duration-1000 
          ${isVisible ? "opacity-100" : "opacity-0 -translate-x-full"}`}
        style={{
          zIndex: 1,
          transformOrigin: "left center",
        }}
      />

      {/* Subtle Glow Effect */}
      <div
        className={`absolute top-1/3 right-0 w-1/2 h-1/2 
          bg-brand-bay-of-many-100/20 
          rounded-bl-[250px] 
          blur-[80px] 
          transition-all duration-1000 
          ${isVisible ? "opacity-100" : "opacity-0 translate-x-full"}`}
        style={{
          zIndex: 1,
          transformOrigin: "right center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div
          className={`flex flex-col justify-center mb-24 relative transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-3 h-3 bg-brand-bay-of-many-600 rounded-3xl animate-pulse"
              aria-hidden="true"
            ></div>
            <h2 className="text-xs uppercase tracking-wider text-brand-bay-of-many-600">
              Expertise
            </h2>
          </div>
          <h3 className="text-xl text-slate-600 uppercase tracking-wide mt-2">
            Interventions Pratiquées
          </h3>
        </div>

        <div className="grid grid-cols-12 gap-24">
          <div
            className={`col-span-5 col-start-2 flex flex-col justify-center space-y-12 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="border-t border-gray-200/50">
              {surgeryTypes.map((surgery) => (
                <div
                  key={surgery.id}
                  className="border-b border-gray-200/50 group"
                >
                  <button
                    onClick={() => toggleAccordion(surgery.id)}
                    className="flex justify-between items-center w-full p-6 text-left 
                      text-slate-800 
                      hover:bg-brand-bay-of-many-50 
                      focus:outline-none 
                      transition-all duration-300 
                      group-hover:text-brand-bay-of-many-700"
                  >
                    <span className="text-base font-medium transition-colors">
                      {surgery.title}
                    </span>
                    <ChevronDown
                      className={`text-slate-500 group-hover:text-brand-bay-of-many-600 transition-all duration-300 ${
                        activeId === surgery.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      activeId === surgery.id
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 bg-brand-bay-of-many-50/50 text-slate-700 leading-relaxed">
                        {surgery.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <Link
                href="/surgery"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all"
              >
                <span>En savoir plus</span>
                <span className="h-px w-8 bg-brand-bay-of-many-600 transform origin-left scale-x-100 transition-transform duration-300 ease-out group-hover:scale-x-150"></span>
              </Link>
            </div>
          </div>

          {/* Rest of the component remains the same */}
          <div
            className={`col-span-5 col-start-8 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl">
              <Image
                src="/images/old_woman_running.png"
                alt="Illustration chirurgie"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {activeId &&
                surgeryTypes
                  .find((s) => s.id === activeId)
                  ?.points.map((point, index) => (
                    <div
                      key={index}
                      className="absolute w-4 h-4 bg-red-500 rounded-full animate-pulse"
                      style={{ top: point.top, left: point.left }}
                    >
                      <div className="absolute inset-0 bg-red-500 rounded-full animate-ping" />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
// import { ChevronDown } from "lucide-react";
// import Accordion from "../utils/Accordeon";

// const surgeryTypes = [
//   {
//     id: "rachis",
//     title: "Chirurgie du rachis",
//     description:
//       "La chirurgie du dos traite les pathologies du rachis et de la colonne vertébrale, comme les hernies discales, le canal lombaire étroit, les déformations ou les instabilités, en visant à soulager les douleurs, restaurer la stabilité et améliorer la qualité de vie.",
//     points: [
//       { top: "40%", left: "50%" },
//       { top: "55%", left: "48%" },
//     ],
//   },
//   {
//     id: "hanche",
//     title: "Prothèse de hanche",
//     description:
//       "La chirurgie de prothèse de hanche permet de remplacer l'articulation endommagée par une prothèse artificielle, réduisant la douleur et restaurant la mobilité pour une meilleure qualité de vie.",
//     points: [{ top: "70%", left: "40%" }],
//   },
//   {
//     id: "genou",
//     title: "Prothèse du genou",
//     description:
//       "La chirurgie de prothèse du genou vise à remplacer l'articulation usée par une prothèse adaptée, permettant de retrouver une mobilité optimale et de supprimer les douleurs liées à l'arthrose.",
//     points: [{ top: "85%", left: "45%" }],
//   },
//   {
//     id: "traumatologie",
//     title: "Traumatologie",
//     description:
//       "La traumatologie traite les blessures et traumatismes de l'appareil locomoteur. Elle prend en charge les fractures, entorses, luxations et lésions musculaires ou tendineuses, en utilisant des techniques chirurgicales modernes pour une récupération optimale.",
//     points: [{ top: "30%", left: "45%" }],
//   },
// ];

// export default function SurgerySection() {
//   const [activeId, setActiveId] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setIsVisible(true);
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const toggleAccordion = (id) => {
//     setActiveId(activeId === id ? null : id);
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full py-24 bg-white border-b border-gray-200 overflow-hidden"
//     >
//       {/* Asymmetric background */}
//       <div
//         className={`absolute right-0 h-full w-2/3 bg-brand-bay-of-many-50 transform transition-all duration-1000 ease-out ${
//           isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//         }`}
//         style={{
//           borderTopLeftRadius: "16rem",
//           borderBottomLeftRadius: "8rem",
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6">
//         <div
//           className={`flex flex-col justify-center mb-24 relative transition-all duration-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <div className="flex items-center gap-3 mb-8">
//             <div
//               className="w-3 h-3 bg-brand-bay-of-many-600 rounded-3xl animate-pulse"
//               aria-hidden="true"
//             ></div>
//             <h2 className="text-xs uppercase tracking-wider text-brand-bay-of-many-600">
//               Expertise
//             </h2>
//           </div>
//           <h3 className="text-xl text-slate-600 uppercase tracking-wide mt-2">
//             Interventions Pratiquées
//           </h3>
//         </div>

//         <div className="grid grid-cols-12 gap-24">
//           {/* <Accordion /> */}
//           <div
//             className={`col-span-5 col-start-2 flex flex-col justify-center space-y-12 transition-all duration-700 delay-300 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-10"
//             }`}
//           >
//             <div className="border-t border-gray-200">
//               {surgeryTypes.map((surgery) => (
//                 <div
//                   key={surgery.id}
//                   className="border-b border-gray-200 group"
//                 >
//                   <button
//                     onClick={() => toggleAccordion(surgery.id)}
//                     className="flex justify-between items-center w-full p-6 text-left text-gray-900 hover:bg-brand-bay-of-many-700 hover:text-white hover:shadow-md hover:scale-[1.02] transition-all duration-300"
//                   >
//                     <span className="text-base font-medium">
//                       {surgery.title}
//                     </span>
//                     <ChevronDown
//                       className={`transition-transform duration-300 ${
//                         activeId === surgery.id ? "rotate-180" : "rotate-0"
//                       }`}
//                     />
//                   </button>

//                   <div
//                     className={`grid transition-all duration-300 ${
//                       activeId === surgery.id
//                         ? "grid-rows-[1fr]"
//                         : "grid-rows-[0fr]"
//                     }`}
//                   >
//                     <div className="overflow-hidden">
//                       <div className="p-6 bg-brand-bay-of-many-100 text-gray-700 leading-relaxed">
//                         {surgery.description}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-auto pt-6">
//               <Link
//                 href="/surgery"
//                 className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all"
//               >
//                 <span>En savoir plus</span>
//                 <span className="h-px w-8 bg-brand-bay-of-many-600 transform origin-left scale-x-100 transition-transform duration-300 ease-out group-hover:scale-x-150"></span>
//               </Link>
//             </div>
//           </div>

//           <div
//             className={`col-span-5 col-start-8 transition-all duration-700 delay-500 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 translate-x-10"
//             }`}
//           >
//             <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl">
//               <Image
//                 src="/images/old_woman_running.png"
//                 alt="Illustration chirurgie"
//                 fill
//                 className="object-cover transition-transform duration-700 hover:scale-105"
//               />
//               {activeId &&
//                 surgeryTypes
//                   .find((s) => s.id === activeId)
//                   ?.points.map((point, index) => (
//                     <div
//                       key={index}
//                       className="absolute w-4 h-4 bg-red-500 rounded-full animate-pulse"
//                       style={{ top: point.top, left: point.left }}
//                     >
//                       <div className="absolute inset-0 bg-red-500 rounded-full animate-ping" />
//                     </div>
//                   ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
