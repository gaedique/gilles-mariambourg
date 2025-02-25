import Image from "next/image";
import { AnimatedSectionProps } from "../types";
import { DOCTOR_CONTENT } from "../constants/content";

const DoctorImage = ({ isVisible }: AnimatedSectionProps) => (
  <div
    className={`col-span-1 md:col-span-5 transition-all duration-700 delay-300 ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
    }`}
  >
    <div className="aspect-[3/4] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
      <Image
        src={DOCTOR_CONTENT.imageSrc}
        alt={DOCTOR_CONTENT.imageAlt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  </div>
);

export default DoctorImage;
