import { SecondaryLink } from "@/src/ui/SecondaryLink";
import TexturedBackground from "@/src/ui/TexturedBackground";
import { motion } from "framer-motion";

const TechniqueHighlight = () => {
  return (
    <motion.section
      className="mb-24 scroll-mt-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
    >
      <div className="relative rounded-xl overflow-hidden border border-brand-bay-of-many-200/60 shadow-md">
        {/* Background texture */}
        <div className="absolute inset-0">
          <TexturedBackground
            className="absolute inset-0"
            baseFrom="from-sky-100/70"
            baseVia="via-emerald-100/40"
            baseTo="to-teal-100/30"
            spotOneColor="bg-sky-100/50"
            spotTwoColor="bg-emerald-100/40"
            noiseOpacity={40}
            noiseContrast={150}
          />
        </div>

        {/* Link to Endoscopic Technique */}
        <div className="relative p-6 z-10">
          <h3 className="text-xl font-medium font-heading text-slate-800 mb-3">
            Technique avancée : Endoscopie Biportale Rachidienne
          </h3>
          <p className="text-slate-600 mb-4">
            Dr. Mariambourg pratique désormais l&apos;endoscopie biportale
            rachidienne, une technique chirurgicale mini-invasive de pointe
            offrant de nombreux avantages pour le traitement des pathologies de
            la colonne vertébrale.
          </p>
          <SecondaryLink
            href="https://www.elsan.care/fr/presse/la-polyclinique-du-sidobre-revolutionne-la-chirurgie-du-dos-avec-lendoscopie-biportale"
            variant="line"
          >
            En savoir plus sur cette technique innovante
          </SecondaryLink>
        </div>
      </div>
    </motion.section>
  );
};

export default TechniqueHighlight;
