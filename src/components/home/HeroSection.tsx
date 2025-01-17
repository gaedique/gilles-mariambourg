import { CalendarSearch, Phone } from "lucide-react";
import Image from "next/image";
import { ColoredSection } from "../layout/Sections";
import { ActionLink } from "../ui/ActionLink";

export default function HeroSection() {
  return (
    <ColoredSection hasSvg>
      {/* Header text */}
      <div className="flex flex-col items-center space-y-6 pt-[10vh]">
        <h1 className="font-heading text-5xl md:text-7xl font-bold">
          Gilles Mariambourg
        </h1>
        <p className="font-accent text-sm md:text-md text-gray-700 uppercase tracking-widest">
          Chirurgien orthopédiste et traumatologue
        </p>
      </div>

      {/* Links and Image */}
      <div className="flex items-end justify-between gap-x-8 mt-16">
        {/* Phone link */}
        <ActionLink
          href="tel:+33563718804"
          icon={Phone}
          text="05 63 71 88 04"
          direction="left"
        />

        {/*{/* Central Image */}
        <div className="rounded-full overflow-hidden border-2 border-blue-50 shadow-lg">
          <figure className="relative w-[250px] h-[250px] sm:w-[450px] sm:h-[300px] transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/gilles_operation_header_resize.jpg"
              alt="surgeon"
              fill
              className="w-full object-cover object-center"
            />
          </figure>
        </div>

        {/* Doctolib link */}
        <ActionLink
          href="https://www.doctolib.fr"
          icon={CalendarSearch}
          text="Doctolib"
          isExternal
          direction="right"
        />
      </div>
    </ColoredSection>
  );
}
