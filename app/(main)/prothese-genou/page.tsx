"use client";

import Layout from "@/src/components/layout/LayoutWrapper";
import Breadcrumb from "@/src/components/navigation/Breadcrumb";
import { createRef, RefObject, useEffect, useMemo, useState } from "react";
import KneeHero from "./components/KneeHero";
import KneeContent from "./components/KneeContent";
import KneeSidebar from "./components/KneeSidebar";
import DownloadSection from "@/src/ui/DownloadSection";
import {
  getKneeData,
  getKneeIntroduction,
  getKneeDownloads,
} from "@/src/data/kneeData";

const KneePage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);

  const kneeIntroduction = useMemo(() => getKneeIntroduction(), []);
  const kneeData = useMemo(() => getKneeData(), []);
  const kneeDownloads = useMemo(() => getKneeDownloads(), []);

  const sectionRefs = useMemo(
    () =>
      Object.keys(kneeData).reduce((acc, key) => {
        acc[key] = createRef<HTMLElement>();
        return acc;
      }, {} as Record<string, RefObject<HTMLElement | null>>),
    [kneeData]
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
      <KneeHero introduction={kneeIntroduction} />

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Navigation Sidebar */}
          <KneeSidebar
            kneeData={kneeData}
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
            {/* Main Knee Content */}
            <KneeContent kneeData={kneeData} sectionRefs={sectionRefs} />

            {/* Downloadable Resources */}
            <DownloadSection
              title={kneeDownloads.title}
              subtitle={kneeDownloads.subtitle}
              downloads={kneeDownloads.downloads}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KneePage;
