import About from "@/src/components/home/AboutSection";
import Consultation from "@/src/components/home/ConsultationSection";
import ContactSection from "@/src/components/home/ContactSection.tsx";
import HeroSection from "@/src/components/home/HeroSection";
import NewsSection from "@/src/components/home/NewsSection";
import Surgery from "@/src/components/home/SurgerySection";
import Layout from "@/src/components/layout/LayoutWrapper";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <NewsSection />
        <About />
        <Surgery />
        <Consultation />
        <ContactSection />
      </Layout>
    </>
  );
}
