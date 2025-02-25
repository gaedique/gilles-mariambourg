import About from "@/src/components/home/AboutSection";
import Consultation from "@/src/components/home/ConsultationSection";
import ContactSection from "@/src/components/home/ContactSection.tsx";
import HeroSection from "@/src/components/home/HeroSection";
import NewsSection from "@/src/components/home/NewsSection";
import Surgery from "@/src/components/home/SurgerySection";
import SectionWrapper from "@/src/components/home/SectionWrapper";
import Layout from "@/src/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <SectionWrapper
          heroComponent={HeroSection}
          newsComponent={NewsSection}
          newsProps={{
            fallbackImageUrl: "/images/gilles_operation_header.jpg",
          }}
        />
        <About />
        <Surgery />
        <Consultation />
        <ContactSection />
      </Layout>
    </>
  );
}
