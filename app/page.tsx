import About from "@/src/components/homePage/About";
// import Hero from "@/src/components/homePage/Hero";
import Layout from "@/src/components/layout/Layout";
import Surgery from "@/src/components/homePage/Surgery";
// import News from "@/src/components/homePage/News";
import Consultation from "@/src/components/homePage/Consultation";
import SectionTransitionWrapper from "@/src/components/homePage/SectionTransitionWrapper";

export default function Home() {
  return (
    <>
      <Layout>
        {/* <Hero />
        <News /> */}
        <SectionTransitionWrapper />
        <About />
        <Surgery />
        <Consultation />
      </Layout>
    </>
  );
}
