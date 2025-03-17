import WaveAnimation from "@/src/ui/WaveAnimation";
import { BenefitsListProps } from "./types";

export const BenefitsList = ({ benefits }: BenefitsListProps) => {
  return (
    <WaveAnimation
      as="ul"
      childTag="li"
      direction="up"
      itemDelay={100}
      duration={500}
      initialDelay={200}
      className="border-t border-slate-200"
      easing="ease-out"
      rootMargin="0px 0px -50px 0px"
    >
      {benefits.map((item, index) => (
        <div key={index} className="group border-b border-slate-200">
          <div className="px-4 sm:px-6 py-4 flex items-center transition-colors duration-300 hover:bg-white/50">
            <span className="text-base font-accent group-hover:font-bold relative">
              {item}
            </span>
          </div>
        </div>
      ))}
    </WaveAnimation>
  );
};
