import { Doctor } from "@/src/data/siteData";
import Image from "next/image";
import { AboutData } from "./types";

interface DoctorImageProps {
  doctorInfo: Doctor;
  aboutData: AboutData;
}

const DoctorImage = ({ doctorInfo, aboutData }: DoctorImageProps) => {
  // Nous supposons que vous avez deux URLs d'images dans votre objet aboutData
  // Si ce n'est pas le cas, vous devrez adapter votre structure de données
  const portraitImage = aboutData.imageSrc; // Image portrait pour desktop
  const landscapeImage = aboutData.landscapeImageSrc || aboutData.imageSrc; // Image paysage pour mobile/tablette (avec fallback)

  return (
    <div className="w-full">
      {/* Image portrait pour desktop uniquement */}
      <figure
        className="aspect-[3/4] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hidden lg:block"
        aria-labelledby="doctor-image-caption-desktop"
        itemProp="image"
      >
        <Image
          src={portraitImage}
          alt={aboutData.imageAlt}
          fill
          className="object-cover object-center"
          sizes="33vw"
          priority
        />
        <figcaption
          id="doctor-image-caption-desktop"
          className="sr-only font-accent"
        >
          {doctorInfo.fullName} - {doctorInfo.title} spécialisé en{" "}
          {doctorInfo.specialties.join(", ")}
        </figcaption>
      </figure>

      {/* Image paysage pour mobile et tablette uniquement */}
      <figure
        className="aspect-[4/3] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl lg:hidden"
        aria-labelledby="doctor-image-caption-mobile"
        itemProp="image"
      >
        <Image
          src={landscapeImage}
          alt={aboutData.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
        <figcaption
          id="doctor-image-caption-mobile"
          className="sr-only font-accent"
        >
          {doctorInfo.fullName} - {doctorInfo.title} spécialisé en{" "}
          {doctorInfo.specialties.join(", ")}
        </figcaption>
      </figure>
    </div>
  );
};

export default DoctorImage;
