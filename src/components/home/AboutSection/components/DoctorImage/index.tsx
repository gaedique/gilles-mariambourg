import { Doctor } from "@/src/data/siteData";
import Image from "next/image";
import { AboutData } from "./types";

interface DoctorImageProps {
  doctorInfo: Doctor;
  aboutData: AboutData;
}

const DoctorImage = ({ doctorInfo, aboutData }: DoctorImageProps) => (
  <div className="col-span-1 md:col-span-5">
    <figure
      className="aspect-[3/4] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
      aria-labelledby="doctor-image-caption"
      itemProp="image"
    >
      <Image
        src={aboutData.imageSrc}
        alt={aboutData.imageAlt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        loading="eager"
        fetchPriority="high"
      />
      <figcaption id="doctor-image-caption" className="sr-only font-accent">
        {doctorInfo.fullName} - {doctorInfo.title} spécialisé en{" "}
        {doctorInfo.specialties.join(", ")}
      </figcaption>
    </figure>
  </div>
);

export default DoctorImage;
