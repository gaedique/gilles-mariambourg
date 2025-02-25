"use client";

import Layout from "@/src/components/layout/Layout";
import { biography } from "@/src/data/biographie";
import { biographieData } from "@/src/data/biographieData";
import { navItems } from "@/src/data/navItems";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createRef, RefObject, useEffect, useMemo, useState } from "react";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("expertise");

  // Trouver l'élément de navigation actuel
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop() || "";
  const currentNavItem = navItems.find((item) => item.path === currentPath);

  const sectionRefs = useMemo(
    () =>
      Object.keys(biographieData).reduce((acc, key) => {
        acc[key] = createRef<HTMLElement>();
        return acc;
      }, {} as Record<string, RefObject<HTMLElement | null>>),
    []
  );
  const scrollToSection = (key: string) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = document.querySelectorAll("section[data-section]");
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (
              rect.top <= window.innerHeight * 0.5 &&
              rect.bottom >= window.innerHeight * 0.5
            ) {
              const sectionId = section.getAttribute("data-section");
              if (sectionId) {
                setActiveSection(sectionId);
              }
            }
          });
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Fil d'Ariane */}
      <div className="mt-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex items-center text-sm text-slate-500">
            <Link
              href="/"
              className="flex items-center hover:text-brand-bay-of-many-600 transition-colors"
            >
              <Home size={14} className="mr-1" />
              <span>Accueil</span>
            </Link>
            <ChevronRight size={14} className="mx-2 text-slate-300" />
            <span className="text-slate-800 font-medium">
              {currentNavItem?.label || "À propos"}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Reduced padding at top */}
      <section className="relative w-full py-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-3/4">
          <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-br from-brand-bay-of-many-50/10 to-brand-bay-of-many-100/30 transform -skew-x-12 rounded-bl-[120px] before:absolute before:inset-0 before:bg-[radial-gradient(#00000008_1px,transparent_1px)] before:bg-[length:25px_25px]">
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

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Navigation */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="py-32 pr-8">
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
                      onClick={() => scrollToSection(key)}
                      className={clsx(
                        "group w-full text-left transition-all duration-300",
                        activeSection === key
                          ? "text-brand-bay-of-many-600 font-medium"
                          : "text-slate-500 hover:text-slate-800"
                      )}
                    >
                      <span className="text-sm uppercase tracking-wider">
                        {section.title}
                      </span>
                      <span
                        className={clsx(
                          "block h-px w-8 mt-2 transition-all duration-300",
                          activeSection === key
                            ? "bg-brand-bay-of-many-600 scale-x-100"
                            : "bg-slate-300 scale-x-0 group-hover:scale-x-75"
                        )}
                      />
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="col-span-12 lg:col-span-9 pt-32 pb-24">
            {Object.entries(biographieData).map(([key, section]) => (
              <motion.section
                ref={sectionRefs[key]}
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
                  <div className="space-y-12">
                    {section.content.map((category, idx) => (
                      <section key={idx} className="space-y-6">
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
                      </section>
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
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
