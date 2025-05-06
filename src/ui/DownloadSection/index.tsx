import { motion } from "framer-motion";
import TexturedBackground from "@/src/ui/TexturedBackground";
import { ArrowDown } from "lucide-react";
import { DownloadSectionProps } from "./types";

const DownloadSection = ({
  title,
  subtitle,
  downloads,
}: DownloadSectionProps) => {
  return (
    <motion.section
      className="mb-24 scroll-mt-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
    >
      <h3 className="text-2xl font-semibold font-heading text-brand-bay-of-many-600 uppercase tracking-wide mb-6">
        {title}
      </h3>

      <p className="text-slate-600 mb-12">{subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {downloads.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-lg overflow-hidden p-6 shadow-sm border border-brand-bay-of-many-100/40 h-full flex flex-col"
          >
            {/* TexturedBackground for download cards */}
            <div className="absolute inset-0">
              <TexturedBackground
                className="absolute inset-0"
                baseFrom="from-indigo-100/50"
                baseVia="via-brand-bay-of-many-100/30"
                baseTo="to-teal-100/20"
                spotOneColor="bg-teal-100/40"
                spotTwoColor="bg-indigo-100/20"
                noiseOpacity={50}
                noiseContrast={120}
                flipX={idx % 2 === 0}
                flipY={idx % 3 === 0}
              />
            </div>

            <div className="relative z-10 flex-1 flex flex-col">
              <h4 className="text-xl font-medium font-heading text-slate-800 mb-3">
                {item.title}
              </h4>

              <p className="text-slate-600 mb-6 flex-1">{item.description}</p>

              <a
                href={`/fiches-info/${item.fileName}`}
                download
                className="inline-flex items-center justify-center gap-2 bg-brand-bay-of-many-600 hover:bg-brand-bay-of-many-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 mt-auto self-start"
              >
                <ArrowDown size={18} />
                <span>Télécharger le PDF</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default DownloadSection;
