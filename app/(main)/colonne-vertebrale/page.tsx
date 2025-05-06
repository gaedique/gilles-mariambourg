"use client";

import Layout from "@/src/components/layout/LayoutWrapper";
import Breadcrumb from "@/src/components/navigation/Breadcrumb";
import {
  getSpineData,
  getSpineDownloads,
  getSpineIntroduction,
} from "@/src/data/spineData";
import DownloadSection from "@/src/ui/DownloadSection";
import { SecondaryLink } from "@/src/ui/SecondaryLink";
import { createRef, RefObject, useEffect, useMemo, useState } from "react";
import SpineContent from "./components/SpineContent";
import SpineHero from "./components/SpineHero";
import SpineSidebar from "./components/SpineSidebar";

const SpinePage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);

  const spineIntroduction = useMemo(() => getSpineIntroduction(), []);
  const spineData = useMemo(() => getSpineData(), []);
  const spineDownloads = useMemo(() => getSpineDownloads(), []);

  const sectionRefs = useMemo(
    () =>
      Object.keys(spineData).reduce((acc, key) => {
        acc[key] = createRef<HTMLElement>();
        return acc;
      }, {} as Record<string, RefObject<HTMLElement | null>>),
    [spineData]
  );

  const scrollToSection = (key: string) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Check if we've scrolled past the hero section
      const scrollPosition = window.scrollY;
      const navbarHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--navbar-height"
        )
      );
      const heroHeight = window.innerHeight - (navbarHeight + 48);

      setIsScrolled(scrollPosition > heroHeight * 0.8);

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
      {/* Breadcrumb */}
      <Breadcrumb className="mt-[calc(var(--navbar-height)+32px)] lg:mt-[calc(var(--navbar-height)+48px)]" />

      {/* Hero Section */}
      <SpineHero introduction={spineIntroduction} />

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Navigation Sidebar */}
          <SpineSidebar
            spineData={spineData}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            isScrolled={isScrolled}
          />

          {/* Fine line separator for visual distinction */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-200 transform -translate-x-1/2"></div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8 pb-24">
            {/* Link to Endoscopic Technique */}
            <div className="mb-12 p-6 bg-brand-bay-of-many-50/80 rounded-lg border border-brand-bay-of-many-100/60 shadow-sm">
              <h3 className="text-xl font-medium font-heading text-slate-800 mb-3">
                Technique avancée : Endoscopie Biportale Rachidienne
              </h3>
              <p className="text-slate-600 mb-4">
                Dr. Mariambourg pratique désormais l&apos;endoscopie biportale
                rachidienne, une technique chirurgicale mini-invasive de pointe
                offrant de nombreux avantages pour le traitement des pathologies
                de la colonne vertébrale.
              </p>
              <SecondaryLink href="/endoscopie-biportale" variant="line">
                En savoir plus sur cette technique innovante
              </SecondaryLink>
            </div>

            {/* Main Spine Content */}
            <SpineContent spineData={spineData} sectionRefs={sectionRefs} />

            {/* Downloadable Resources */}
            <DownloadSection
              title={spineDownloads.title}
              subtitle={spineDownloads.subtitle}
              downloads={spineDownloads.downloads}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpinePage;
