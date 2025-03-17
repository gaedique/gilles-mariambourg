"use client";

import Layout from "@/src/components/layout/LayoutWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const RachisPage = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = {
    introduction: {
      title: "Chirurgie du Rachis",
      content:
        "La chirurgie du rachis concerne le traitement des pathologies de la colonne vertébrale, qu'elles soient dégénératives, traumatiques, infectieuses ou tumorales. Elle vise à restaurer la mobilité, soulager la douleur et améliorer la qualité de vie des patients.",
    },
    pathologies: {
      title: "Pathologies traitées",
      items: [
        "Hernies discales cervicales et lombaires",
        "Canal lombaire étroit",
        "Spondylolisthésis",
        "Fractures vertébrales",
        "Déformations rachidiennes (scoliose, cyphose)",
        "Tumeurs vertébrales",
      ],
    },
    techniques: {
      title: "Techniques chirurgicales",
      items: [
        "Microchirurgie et endoscopie rachidienne",
        "Arthrodèse et fixation vertébrale",
        "Prothèses discales cervicales et lombaires",
        "Cimentoplastie et kyphoplastie",
      ],
    },
    innovations: {
      title: "Innovations et Approches Modernes",
      content:
        "Grâce aux avancées en chirurgie mini-invasive, les patients bénéficient d’une récupération plus rapide et de suites opératoires moins douloureuses. L’endoscopie biportale rachidienne permet notamment d’intervenir avec une précision accrue et de limiter les traumatismes tissulaires.",
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
                        ? "text-brand-bay-of-many-600 font-medium"
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
                  <h3 className="text-2xl font-semibold text-brand-bay-of-many-600 uppercase tracking-wide mb-12">
                    {section.title}
                  </h3>
                  {"content" in section ? (
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {section.content}
                    </p>
                  ) : (
                    <ul className="space-y-4 text-slate-600">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 mt-2 bg-brand-bay-of-many-600/40 rounded-full" />
                          <span>{item}</span>
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

export default RachisPage;
