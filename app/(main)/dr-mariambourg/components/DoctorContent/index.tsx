import TexturedBackground from "@/src/ui/TexturedBackground";
import { motion } from "framer-motion";
import { ContentItem, DoctorContentProps } from "./types";

// Define proper types for the content structure

const DoctorContent = ({ biographieData, sectionRefs }: DoctorContentProps) => {
  return (
    <article
      className="col-span-12 lg:col-span-8 pb-24"
      aria-labelledby="doctor-content-heading"
    >
      <h2 id="doctor-content-heading" className="sr-only">
        Biographie et parcours du Dr. Mariambourg
      </h2>

      {Object.entries(biographieData).map(([key, section]) => (
        <motion.section
          ref={sectionRefs[key]}
          key={key}
          data-section={key}
          className="mb-24 scroll-mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          <h3 className="text-2xl font-semibold font-heading text-brand-bay-of-many-600 uppercase tracking-wide mb-12">
            {section.title}
          </h3>

          {"content" in section && section.content ? (
            <div className="space-y-12">
              {section.content.map((category: ContentItem, idx: number) => (
                <section
                  key={idx}
                  className="space-y-6 relative rounded-lg overflow-hidden p-6 shadow-sm border border-brand-bay-of-many-100/40"
                >
                  {/* TexturedBackground for content section */}
                  <div className="absolute inset-0">
                    <TexturedBackground
                      className="absolute inset-0"
                      baseFrom="from-blue-100/60"
                      baseVia="via-brand-bay-of-many-100/30"
                      baseTo="to-sky-100/20"
                      spotOneColor="bg-indigo-100/50"
                      spotTwoColor="bg-indigo-100/20"
                      noiseOpacity={70}
                      noiseContrast={110}
                      flipX={idx % 2 === 0} // Alternate flip direction for variety
                      flipY={idx % 3 === 0} // Add more variation
                    />
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-xl font-medium font-heading text-slate-800">
                      {category.subtitle}
                    </h4>
                    <ul className="space-y-4 text-slate-600 font-body mt-6">
                      {category.items.map((item: string, itemIdx: number) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 mt-2 bg-brand-bay-of-many-600/40 rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              ))}
            </div>
          ) : section.items ? (
            <div className="relative rounded-lg overflow-hidden p-6 shadow-sm border border-brand-bay-of-many-100/40">
              {/* TexturedBackground for simple list sections */}
              <div className="absolute inset-0">
                <TexturedBackground
                  className="absolute inset-0"
                  baseFrom="from-indigo-100/60"
                  baseVia="via-brand-bay-of-many-100/30"
                  baseTo="to-sky-100/20"
                  spotOneColor="bg-indigo-100/30"
                  spotTwoColor="bg-indigo-100/20"
                  noiseOpacity={30}
                  noiseContrast={120}
                />
              </div>

              <ul className="space-y-4 text-slate-600 font-body relative z-10">
                {section.items.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 bg-brand-bay-of-many-600/40 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </motion.section>
      ))}
    </article>
  );
};

export default DoctorContent;
