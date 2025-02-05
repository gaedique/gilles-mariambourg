"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Gère l'ouverture/fermeture de l'accordéon
  const toggleAccordion = () => setIsOpen((prev) => !prev);

  // IntersectionObserver pour surveiller la section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setIsOpen(false); // Ferme si hors écran
      },
      { threshold: 0.1, once: true } // Désactive après la première exécution
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="mx-auto max-w-3xl">
      {/* Bouton Accordéon */}
      <button
        onClick={toggleAccordion}
        className="w-full px-6 py-4 text-left font-semibold text-gray-900 
          bg-white border border-gray-300 rounded-lg 
          hover:bg-brand-bay-of-many-800 hover:text-white transition-colors duration-300"
      >
        Cliquez pour ouvrir
      </button>

      {/* Contenu animé de l'accordéon */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
          Contenu de l'accordéon...
        </div>
      </motion.div>
    </div>
  );
}
