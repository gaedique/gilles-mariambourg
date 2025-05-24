"use client";

import Layout from "@/src/components/layout/LayoutWrapper";
import MedicalContent from "@/src/components/medical/MedicalContent";
import MedicalHero from "@/src/components/medical/MedicalHero";
import MedicalSidebar from "@/src/components/medical/MedicalSidebar";
import Breadcrumb from "@/src/components/navigation/Breadcrumb";
import {
  getSpineData,
  getSpineDownloads,
  getSpineIntroduction,
} from "@/src/data/spineData";
import DownloadSection from "@/src/ui/DownloadSection";
import { createRef, RefObject, useEffect, useMemo, useState } from "react";
import TechniqueHighlight from "../../../src/components/medical/TechniqueHighlight";

const SpinePage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);

  const spineIntroduction = useMemo(() => getSpineIntroduction(), []);
  const spineData = useMemo(() => getSpineData(), []);
  const spineDownloads = useMemo(() => getSpineDownloads(), []);

  const sectionRefs = useMemo(() => {
    // Create the references for each section in kneeData
    const refs = Object.keys(spineData).reduce((acc, key) => {
      acc[key] = createRef<HTMLDivElement>();
      return acc;
    }, {} as Record<string, RefObject<HTMLDivElement | null>>);

    // Adding a ref for the downloads section
    refs["downloads"] = createRef<HTMLDivElement>();
    return refs;
  }, [spineData]);

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
      <MedicalHero
        data={spineIntroduction}
        imageSrc="/images/rachis.webp"
        imageAlt="chirurgie du rachis"
      />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <MedicalSidebar
          title="Chirurgie du Rachis"
          data={spineData}
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
          <TechniqueHighlight />

          {/* Main Spine Content */}
          <MedicalContent data={spineData} sectionRefs={sectionRefs} />

          {/* Downloadable Resources */}
          <div ref={sectionRefs["downloads"]} data-section="downloads">
            <DownloadSection
              title={spineDownloads.title}
              subtitle={spineDownloads.subtitle}
              downloads={spineDownloads.downloads}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SpinePage;
