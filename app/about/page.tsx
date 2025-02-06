"use client";

import Layout from "@/src/components/layout/Layout";
import { biography } from "@/src/data/biographie";
import { biographieData } from "@/src/data/biographieData";
import { motion } from "framer-motion";
import { p } from "framer-motion/client";
import Image from "next/image";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("expertise");

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
      {/* Hero Section */}
      <section className="relative w-full py-32 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-3/4">
          <div
            className="absolute right-0 top-0 w-2/3 h-full
            bg-gradient-to-br from-brand-bay-of-many-50/10 to-brand-bay-of-many-100/30
            transform -skew-x-12 rounded-bl-[120px]
            before:absolute before:inset-0 
            before:bg-[radial-gradient(#00000008_1px,transparent_1px)] 
            before:bg-[length:25px_25px]"
          >
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)]" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            <div className="col-span-5">
              <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gilles_profil.jpg"
                  alt="Dr. Mariambourg"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-7 flex flex-col justify-center space-y-10">
              <div className="mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                  Votre chirurgien
                </h1>
                <h2 className="text-2xl text-slate-700">
                  Dr. Gilles Mariambourg
                </h2>
              </div>
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-slate-900">
                  {biography.introduction.beginning}
                  <em className="text-brand-bay-of-many-600">
                    {biography.introduction.name}
                  </em>{" "}
                  {biography.introduction.following}
                </p>
                <div className="space-y-6 text-slate-600">
                  {biography.details.map((paragraph, index) => (
                    <p key={index} className="text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* Fixed Navigation */}
            <div className="col-span-3">
              <div className="h-screen sticky top-0 pt-32 pr-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 bg-brand-bay-of-many-600 rounded-full animate-pulse" />
                  <h2 className="text-xs uppercase tracking-wider text-brand-bay-of-many-600">
                    Navigation
                  </h2>
                </div>
                <nav className="space-y-4">
                  {Object.entries(biographieData).map(([key, section]) => (
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
                      <span
                        className={`block h-px w-8 mt-2 transition-all duration-300 ${
                          activeSection === key
                            ? "bg-brand-bay-of-many-600 scale-x-100"
                            : "bg-slate-300 scale-x-0 group-hover:scale-x-75"
                        }`}
                      />
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Viewing categories */}
            <div className="col-span-9 pt-32 pb-24">
              {Object.entries(biographieData).map(([key, section]) => (
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

                  {/* List management */}
                  {"content" in section ? (
                    <div className="space-y-12">
                      {section.content.map((category, idx) => (
                        <div key={idx} className="space-y-6">
                          <h4 className="text-xl font-medium text-slate-800">
                            {category.subtitle}
                          </h4>
                          <ul className="space-y-4 text-slate-600">
                            {category.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="flex items-start gap-3"
                              >
                                <span className="w-1.5 h-1.5 mt-2 bg-brand-bay-of-many-600/40 rounded-full" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-4 text-slate-600">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
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

export default AboutPage;
