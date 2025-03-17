"use client";
import { siteData } from "@/src/data/siteData";
import ScrollReveal from "@/src/ui/ScrollReveal";
import SectionTitle from "@/src/ui/SectionTitle";
import TexturedBackground from "@/src/ui/TexturedBackground";
import Script from "next/script";
import { useEffect, useState } from "react";
import ContactDetails from "./components/ContactDetails";
import InteractiveMap from "./components/InteractiveMap";

const ContactSection = () => {
  const [prefersDark, setPrefersDark] = useState(false);

  // Get contact data from the new site data structure
  const contactData = siteData.contact;

  // Check for dark mode preference on component mount
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setPrefersDark(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Parse opening hours safely
  const parseOpeningHours = () => {
    try {
      const timeString = contactData.hours.regular.time;
      let opens = "";
      let closes = "";

      // Check if the time string contains a hyphen
      if (timeString.includes("-")) {
        const parts = timeString.split("-");
        opens = parts[0].trim();
        closes = parts[1].trim();
      } else {
        // Fallback: just use the whole string as both opening and closing
        opens = timeString.trim();
        closes = timeString.trim();
      }

      return { opens, closes };
    } catch (error) {
      console.warn("Error parsing opening hours:", error);
      return { opens: "00:00", closes: "23:59" }; // Fallback values
    }
  };

  const { opens, closes } = parseOpeningHours();

  // Prepare schema.org JSON-LD data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: contactData.address.name,
    url: "https://www.gillesmariambourg.fr/",
    medicalSpecialty: [
      "Chirurgie Orthopédique",
      "Chirurgie du rachis",
      "Prothèse de hanche",
      "Prothèse du genou",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: contactData.address.street,
      addressLocality: contactData.address.city,
      postalCode: contactData.address.postalCode,
      addressCountry: "FR",
    },
    telephone: contactData.details.phone.replace(/\s/g, ""),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: contactData.hours.regular.days,
        opens: opens,
        closes: closes,
      },
    ],
  };

  return (
    <section
      id="contact"
      className={`font-body px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16 ${
        prefersDark ? "dark" : ""
      }`}
      aria-labelledby="titre-contact"
    >
      {/* Schema.org JSON-LD structured data */}
      <Script id="schema-jsonld" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <ScrollReveal threshold={0.1} duration={1250}>
        <SectionTitle
          id="titre-contact"
          title="Contact"
          subtitle="Nous sommes à votre écoute"
        />

        <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl flex flex-col md:flex-row shadow-xl">
          {/* Info Panel with Textured Background */}
          <aside className="w-full md:w-[400px] relative text-white p-8 flex flex-col justify-center max-md:py-6 md:rounded-l-3xl overflow-hidden">
            {/* Dark base overlay to ensure text readability */}
            <div className="absolute inset-0 bg-brand-bay-of-many-950/90 z-0"></div>

            {/* Textured background */}
            <div className="absolute inset-0 mix-blend-overlay z-0">
              <TexturedBackground
                className="absolute inset-0"
                baseFrom="from-brand-bay-of-many-800/70"
                baseVia="via-brand-bay-of-many-900/80"
                baseTo="to-brand-bay-of-many-950/90"
                spotOneColor="bg-indigo-800/40"
                spotTwoColor="bg-blue-900/30"
                noiseOpacity={70}
                noiseContrast={120}
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <ContactDetails contact={contactData} />
            </div>
          </aside>

          {/* Map */}
          <div className="flex-1 w-full h-[300px] md:h-[550px] md:rounded-r-3xl overflow-hidden">
            <InteractiveMap />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;
