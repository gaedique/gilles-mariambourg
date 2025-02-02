import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full py-32 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          {/* Subtitle section with dot */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-3 h-3 bg-brand-bay-of-many-600 rounded-full animate-pulse"
              aria-hidden="true"
            ></div>
            <h2 className="text-xs uppercase tracking-wider text-brand-bay-of-many-600">
              À Propos
            </h2>
          </div>

          {/* Main title */}
          <h3 className="text-xl text-slate-600 uppercase tracking-wide">
            Votre chirurgien
          </h3>
        </div>

        <div className="grid grid-cols-12 gap-24">
          {/* Image column */}
          <div className="col-span-5">
            <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/gilles_bureau.png"
                alt="Dr. Mariambourg"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="col-span-5 col-start-8 flex flex-col justify-center space-y-16">
            <div className="space-y-8">
              {/* Main paragraph */}
              <p className="text-lg leading-relaxed text-slate-900 text-justify">
                <strong>
                  Le Docteur{" "}
                  <em className="text-brand-bay-of-many-600">
                    Gilles Mariambourg
                  </em>{" "}
                  se consacre depuis 40 ans, à restaurer la mobilité et
                  améliorer la qualité de vie de ses patients.
                </strong>
              </p>

              {/* Secondary paragraphs */}
              <div className="space-y-6 text-slate-600">
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

            {/* Link */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all"
            >
              <span>En savoir plus</span>
              <span className="h-px w-8 bg-brand-bay-of-many-600 transform origin-left transition-all duration-300 ease-out group-hover:w-12"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
