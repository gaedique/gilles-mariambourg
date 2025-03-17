"use client";

import Layout from "@/src/components/layout/LayoutWrapper";
import { getBiography, getBiographieData } from "@/src/data/doctorData";
import { siteData } from "@/src/data/siteData";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createRef, RefObject, useEffect, useMemo, useState } from "react";
import TexturedBackground from "@/src/ui/TexturedBackground";
import ScrollReveal from "@/src/ui/ScrollReveal";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("expertise");

  const biography = useMemo(() => getBiography(), []);
  const biographieData = useMemo(() => getBiographieData(), []);

  // Get navigation items from siteData
  const navItems = siteData.navigation.main;

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
    [biographieData]
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
      <div className="mt-28 bg-slate-50 border-b border-slate-100">
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
              {currentNavItem?.label || "Dr Mariambourg"}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section with TexturedBackground */}
      <section
        className="container-full min-h-[40rem] px-4 py-4 relative overflow-hidden"
        aria-labelledby="hero-heading"
        role="banner"
      >
        {/* SEO enhancing metadata */}
        <div className="hidden" aria-hidden="true" data-seo-metadata>
          <div data-schema="MedicalBusiness">
            <span data-prop="name">{siteData.doctor.fullName}</span>
            <span data-prop="description">
              {siteData.doctor.description?.short}
            </span>
            <span data-prop="telephone">
              {siteData.contact?.details?.phone}
            </span>
            <span data-prop="address">{`${siteData.contact?.address?.street}, ${siteData.contact?.address?.postalCode} ${siteData.contact?.address?.city}`}</span>
            <span data-prop="medicalSpecialty">
              {siteData.doctor.specialties?.join(", ")}
            </span>
          </div>
        </div>

        <div className="relative flex flex-col justify-start mx-auto gap-6 h-full max-w-[1920px] py-8 overflow-hidden rounded-2xl text-center">
          {/* Background texture */}
          <TexturedBackground className="absolute inset-0" />

          {/* Layered overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bay-of-many-800/50"></div>

          <ScrollReveal threshold={0.1} duration={1250}>
            {/* Title at the top */}
            <h1
              id="hero-heading"
              className="text-4xl font-bold text-slate-900 mb-12 mt-8 text-center text-slate-600/90"
            >
              Votre chirurgien - Dr. Gilles
            </h1>

            {/* Main content grid */}
            <div className="max-w-7xl mx-auto px-6 z-10 relative">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start w-full">
                {/* Doctor Image - Left side */}
                <div className="col-span-1 md:col-span-5">
                  <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/gilles_profil.webp"
                      alt={siteData.doctor.fullName}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Doctor Information - Right side */}
                <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-start space-y-8 text-left">
                  <div className="space-y-6">
                    {biography?.introduction ? (
                      <p className="text-lg leading-relaxed text-slate-900">
                        {biography.introduction.beginning}
                        <em className="text-brand-bay-of-many-600">
                          {biography.introduction.name}
                        </em>{" "}
                        {biography.introduction.following}
                      </p>
                    ) : (
                      <p className="text-lg leading-relaxed text-slate-900">
                        {siteData.doctor.description?.short || ""}
                      </p>
                    )}

                    {biography?.details && biography.details.length > 0 ? (
                      <div className="space-y-6 text-slate-600">
                        {biography.details.map((paragraph, index) => (
                          <p key={index} className="text-base leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {/* Added spacer div to compensate for removed buttons */}
                  <div className="h-8 md:h-12"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
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

                {"content" in section && section.content ? (
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
                ) : section.items ? (
                  <ul className="space-y-4 text-slate-600">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 mt-2 bg-brand-bay-of-many-600/40 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.section>
            ))}
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
