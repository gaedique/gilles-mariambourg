"use client";
import Layout from "@/src/components/layout/Layout";
import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/Alert";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

const SpinePage = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = {
    introduction: {
      title: "Chirurgie du Rachis",
      content: `En tant que chirurgien orthopédiste spécialisé dans la chirurgie du rachis, je me consacre au traitement des pathologies de la colonne vertébrale. Cette discipline complexe requiert une expertise pointue et une approche personnalisée pour chaque patient. Notre objectif est de restaurer la fonction, soulager la douleur et améliorer significativement la qualité de vie de nos patients.`,
      image: "/api/placeholder/600/400",
    },
    diagnostic: {
      title: "Diagnostic et Évaluation",
      content: `L'établissement d'un diagnostic précis est crucial avant d'envisager toute intervention chirurgicale. Nous utilisons les technologies les plus avancées d'imagerie médicale (IRM, Scanner, Radiographies dynamiques) combinées à un examen clinique approfondi. Cette approche nous permet d'identifier avec précision la source de la douleur et de proposer le traitement le plus adapté.`,
      image: "/api/placeholder/600/400",
    },
    pathologies: {
      title: "Pathologies traitées",
      items: [
        {
          title: "Hernies discales",
          description:
            "Cervicales, thoraciques et lombaires, avec compression nerveuse ou radiculopathie",
        },
        {
          title: "Sténose du canal rachidien",
          description:
            "Rétrécissement du canal vertébral entraînant une compression neurologique",
        },
        {
          title: "Spondylolisthésis",
          description:
            "Glissement vertébral pouvant nécessiter une stabilisation chirurgicale",
        },
        {
          title: "Déformations rachidiennes",
          description:
            "Scoliose adulte, cyphose post-traumatique, déformations dégénératives",
        },
        {
          title: "Pathologies tumorales",
          description:
            "Tumeurs primitives ou métastatiques de la colonne vertébrale",
        },
      ],
    },
    techniques: {
      title: "Techniques chirurgicales innovantes",
      items: [
        {
          title: "Chirurgie mini-invasive",
          description:
            "Techniques permettant une récupération plus rapide et moins douloureuse",
        },
        {
          title: "Navigation 3D peropératoire",
          description: "Guidage précis des implants assisté par ordinateur",
        },
        {
          title: "Endoscopie rachidienne",
          description:
            "Intervention à travers de mini-incisions sous contrôle vidéo",
        },
        {
          title: "Arthroplastie discale",
          description: "Remplacement du disque par une prothèse mobile",
        },
      ],
    },
    postop: {
      title: "Suivi post-opératoire",
      content: `Le succès d'une chirurgie rachidienne repose aussi sur une prise en charge post-opératoire optimale. Notre équipe assure un suivi personnalisé incluant:
      - Une rééducation précoce adaptée
      - Un contrôle régulier de la cicatrisation
      - Une reprise progressive des activités
      - Un accompagnement dans la réadaptation professionnelle`,
      image: "/api/placeholder/600/400",
    },
    urgences: {
      title: "Cas d'urgence",
      content:
        "En cas de traumatisme rachidien ou de compression neurologique aiguë, une prise en charge urgente peut être nécessaire. Notre équipe est disponible 24h/24 pour les situations d'urgence nécessitant une intervention immédiate.",
      isAlert: true,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[data-section]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 3 &&
          rect.bottom >= window.innerHeight / 3
        ) {
          setActiveSection(section.getAttribute("data-section"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* Navigation latérale */}
            <div className="col-span-3 sticky top-0 pt-32 pr-8">
              <nav className="space-y-4">
                {Object.entries(sections).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => {
                      document
                        .querySelector(`[data-section="${key}"]`)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`group w-full text-left transition-all duration-300 ${
                      activeSection === key
                        ? "text-blue-600 font-medium"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <span className="text-sm uppercase tracking-wider">
                      {section.title}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Contenu principal */}
            <div className="col-span-9 pt-32 pb-24">
              {Object.entries(sections).map(([key, section]) => (
                <motion.section
                  key={key}
                  data-section={key}
                  className="mb-24 scroll-mt-32"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                >
                  <h3 className="text-2xl font-semibold text-blue-600 uppercase tracking-wide mb-12">
                    {section.title}
                  </h3>

                  {section.isAlert ? (
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Important</AlertTitle>
                      <AlertDescription>{section.content}</AlertDescription>
                    </Alert>
                  ) : "content" in section ? (
                    <div className="space-y-6">
                      <p className="text-slate-600 text-lg leading-relaxed">
                        {section.content}
                      </p>
                      {section.image && (
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full rounded-lg shadow-lg"
                        />
                      )}
                    </div>
                  ) : (
                    <ul className="space-y-6">
                      {section.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="bg-slate-50 p-6 rounded-lg"
                        >
                          <h4 className="font-medium text-lg text-blue-600 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-slate-600">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SpinePage;
