import { AnimatedSectionProps } from "../types";

const DecorativeBackground = ({ isVisible }: AnimatedSectionProps) => (
  <div
    className={`absolute right-0 top-0 h-full w-full md:w-3/4 transform transition-all duration-[1200ms] ease-out ${
      isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    }`}
  >
    <div
      className={`absolute right-0 top-0 w-full md:w-2/3 h-full
        bg-gradient-to-br from-brand-bay-of-many-50/30 to-brand-bay-of-many-100/60
        transform -skew-x-12 rounded-bl-[60px] sm:rounded-bl-[90px] md:rounded-bl-[120px] 
        transition-all duration-[2000ms]
        hover:scale-105 hover:rotate-1 ease-out
        before:absolute before:inset-0 
        before:bg-[radial-gradient(#00000012_1px,transparent_1px)] 
        before:bg-[length:25px_25px]
        ${isVisible ? "opacity-90" : "opacity-0"}`}
    >
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)]" />
    </div>
  </div>
);

export default DecorativeBackground;
