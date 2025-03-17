import { SurgerySelectorProps } from "./types";
import WaveAnimation from "@/src/ui/WaveAnimation";

export const SurgerySelector = ({
  surgeryTypes,
  activeId,
  onSelect,
}: SurgerySelectorProps) => {
  return (
    <div className="w-full mb-6">
      <WaveAnimation
        direction="up"
        itemDelay={100}
        duration={500}
        initialDelay={300}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3"
        threshold={0.2}
        easing="ease-out"
      >
        {surgeryTypes.map((surgery) => (
          <button
            key={surgery.id}
            onClick={() => onSelect(surgery.id)}
            aria-current={activeId === surgery.id ? "true" : undefined}
            className={`px-5 py-4 text-left rounded-lg border ${
              activeId === surgery.id
                ? "bg-brand-bay-of-many-100 border-brand-bay-of-many-200 text-brand-bay-of-many-800 shadow-sm"
                : "bg-white/70 border-gray-200 hover:bg-brand-bay-of-many-50 hover:border-brand-bay-of-many-100"
            }`}
          >
            <span className="font-medium font-heading block">
              {surgery.title}
            </span>
          </button>
        ))}
      </WaveAnimation>
    </div>
  );
};
