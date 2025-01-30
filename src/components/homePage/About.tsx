import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full py-32 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <div
              className="w-3 h-3 bg-gradient-to-r from-brand-accent-1 to-brand-accent-2 rounded-full animate-pulse"
              aria-hidden="true"
            ></div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500">
              À Propos
            </h2>
          </div>
          <h3 className="text-sm text-gray-400 mt-2 uppercase tracking-wide">
            Votre chirurgien
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-24">
          {/* Left Column - Text */}
          <div className="col-span-5 flex flex-col justify-center space-y-16">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-gray-900 text-justify">
                <strong>
                  Le Docteur <em>Gilles Mariambourg</em> se consacre depuis 40
                  ans, à restaurer la mobilité et améliorer la qualité de vie de
                  ses patients.
                </strong>
              </p>
              <div className="space-y-6 text-gray-600">
                <p className="text-base leading-relaxed text-justify">
                  Son approche allie précision et technique, avec pour objectif
                  d'offrir à chaque patient une prise en charge adaptée et
                  efficace.
                </p>
                <p className="text-base leading-relaxed text-justify">
                  Toujours à l'affût des avancées médicales, il continue de se
                  former aux techniques les plus innovantes afin d'offrir à ses
                  patients des soins à la pointe de la chirurgie orthopédique.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-70 transition-all"
            >
              <span>En savoir plus</span>
              <span className="h-px w-8 bg-black transform origin-left transition-all duration-300 ease-out group-hover:w-12"></span>
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="col-span-5 col-start-8">
            <div className="aspect-[3/4] relative rounded-3xl overflow-hidden">
              <Image
                src="/images/gilles_bureau.png"
                alt="Dr. Mariambourg"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
