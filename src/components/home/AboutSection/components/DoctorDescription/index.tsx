import { Doctor } from "@/src/data/siteData";
import { SecondaryLink } from "@/src/ui/SecondaryLink";
import { AboutData } from "./types";

interface DoctorDescriptionProps {
  doctorInfo: Doctor;
  aboutData: AboutData;
}

const DoctorDescription = ({
  doctorInfo,
  aboutData,
}: DoctorDescriptionProps) => (
  <article
    className="col-span-1 md:col-span-5 md:col-start-8 flex flex-col justify-center space-y-6 sm:space-y-8 md:space-y-16"
    aria-label={`Biographie du ${doctorInfo.fullName}`}
    itemProp="description"
  >
    <div className="space-y-6 sm:space-y-8">
      <p className="text-base font-heading font-bold sm:text-lg leading-relaxed">
        <span>
          Le Docteur{" "}
          <em className="text-brand-bay-of-many-600" itemProp="name">
            {doctorInfo.shortName}
          </em>{" "}
          <span itemProp="description">{aboutData.mainDescription}</span>
        </span>
      </p>

      <div className="space-y-4 sm:space-y-6 text-secondary">
        {aboutData.paragraphs.map((paragraph: string, index: number) => (
          <p
            key={index}
            className="text-sm sm:text-base leading-relaxed text-justify"
            data-content-type="doctor-biography"
            data-paragraph-index={index}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Add metadata for specialties */}
      {doctorInfo.specialties.map((specialty, index) => (
        <meta key={index} itemProp="medicalSpecialty" content={specialty} />
      ))}
    </div>

    <SecondaryLink
      href={aboutData.ctaLink}
      ariaLabel={`${aboutData.ctaText} - En savoir plus sur ${doctorInfo.fullName}`}
      rel="nofollow"
      variant="line"
    >
      {aboutData.ctaText}
    </SecondaryLink>
  </article>
);

export default DoctorDescription;
