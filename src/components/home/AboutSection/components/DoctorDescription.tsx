import Link from "next/link";
import { AnimatedSectionProps } from "../types";
import { DOCTOR_CONTENT } from "../constants/content";

const DoctorDescription = ({ isVisible }: AnimatedSectionProps) => (
  <div
    className={`col-span-1 md:col-span-5 md:col-start-7 flex flex-col justify-center space-y-6 sm:space-y-8 md:space-y-16 transition-all duration-700 delay-500 ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
    }`}
  >
    <div className="space-y-6 sm:space-y-8">
      <p className="text-base sm:text-lg leading-relaxed text-slate-900 text-justify">
        <strong>
          Le Docteur{" "}
          <em className="text-brand-bay-of-many-600">{DOCTOR_CONTENT.name}</em>{" "}
          {DOCTOR_CONTENT.mainDescription}
        </strong>
      </p>

      <div className="space-y-4 sm:space-y-6 text-slate-600">
        {DOCTOR_CONTENT.paragraphs.map((paragraph: string, index: number) => (
          <p
            key={index}
            className="text-sm sm:text-base leading-relaxed text-justify"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>

    <Link
      href={DOCTOR_CONTENT.ctaLink}
      className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all"
    >
      <span>{DOCTOR_CONTENT.ctaText}</span>
      <span className="h-px w-6 sm:w-8 bg-brand-bay-of-many-600 transform origin-left scale-x-100 transition-transform duration-300 ease-out group-hover:scale-x-150"></span>
    </Link>
  </div>
);

export default DoctorDescription;
