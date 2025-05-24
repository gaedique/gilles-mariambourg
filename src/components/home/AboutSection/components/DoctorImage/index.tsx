import { Doctor } from "@/src/data/siteData";
import Image from "next/image";
import { useId } from "react";
import { AboutData } from "./types";

interface DoctorImageProps {
  doctorInfo: Doctor;
  aboutData: AboutData;
}

const DoctorImage = ({ doctorInfo, aboutData }: DoctorImageProps) => {
  const portraitImage = aboutData.imageSrc;
  const landscapeImage = aboutData.landscapeImageSrc || aboutData.imageSrc;

  // Generation of unique IDs to avoid duplicates
  const uniqueId = useId();
  const desktopCaptionId = `doctor-image-caption-desktop-${uniqueId}`;
  const mobileCaptionId = `doctor-image-caption-mobile-${uniqueId}`;

  const captionText = `${doctorInfo.fullName} - ${
    doctorInfo.title
  } spécialisé en ${doctorInfo.specialties.join(", ")}`;

  return (
    <div className="w-full">
      {/* Portrait image for desktop only */}
      <figure
        className="aspect-[3/4] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hidden lg:block"
        aria-labelledby={desktopCaptionId}
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
        <figcaption id={desktopCaptionId} className="sr-only font-accent">
          {captionText}
        </figcaption>
      </figure>

      {/* Landscape image for mobile and tablet only */}
      <figure
        className="aspect-[4/3] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl lg:hidden"
        aria-labelledby={mobileCaptionId}
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
        <figcaption id={mobileCaptionId} className="sr-only font-accent">
          {captionText}
        </figcaption>
      </figure>
    </div>
  );
};

export default DoctorImage;
