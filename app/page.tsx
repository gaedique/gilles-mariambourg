import HeroSection from "@/src/components/home/HeroSection";
import SurgerySection from "@/src/components/home/SurgerySection";
import Layout from "@/src/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <SurgerySection />
      </Layout>
    </>
  );
}
