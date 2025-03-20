import { motion } from "framer-motion";
import TexturedBackground from "@/src/ui/TexturedBackground";
import Image from "next/image";

interface TechniqueHighlightProps {
  title: string;
  description: string[];
  benefits: string[];
  imagePath: string;
}

const TechniqueHighlight = ({
  title,
  description,
  benefits,
  imagePath,
}: TechniqueHighlightProps) => {
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

        <div className="relative z-10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Section */}
            <div className="md:w-2/5 order-2 md:order-1">
              <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imagePath}
                  alt={title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-brand-bay-of-many-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                    Technique Innovante
                  </span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-3/5 order-1 md:order-2">
              <h3 className="text-2xl font-semibold font-heading text-brand-bay-of-many-600 uppercase tracking-wide mb-6">
                {title}
              </h3>

              <div className="space-y-4 mb-6">
                {description.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-medium font-heading text-slate-800 mb-3">
                  Avantages de cette technique
                </h4>
                <ul className="space-y-2">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2 bg-brand-bay-of-many-600/70 rounded-full" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechniqueHighlight;
