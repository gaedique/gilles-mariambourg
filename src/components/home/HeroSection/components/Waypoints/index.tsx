import { SpecialtyWaypointsProps } from "./types";

export const SpecialtyWaypoints = ({
  specialties,
  currentSpecialty,
  setcurrentSpecialty,
}: SpecialtyWaypointsProps) => {
  return (
    <div className="flex justify-center z-10">
      {specialties.map((specialty, index) => (
        <button
          key={index}
          onClick={() => setcurrentSpecialty(index)}
          className="w-6 h-6 flex items-center justify-center group"
          aria-label={`Voir la spécialité ${specialty.title || `${index + 1}`}`}
          aria-current={index === currentSpecialty ? "true" : "false"}
        >
          <span
            className={`block rounded-full transition-all ${
              index === currentSpecialty
                ? "bg-white w-3 sm:w-4 h-1.5 sm:h-2 shadow-lg"
                : "bg-white/50 w-1.5 sm:w-2 h-1.5 sm:h-2 group-hover:bg-white/80"
            }`}
          />
        </button>
      ))}
    </div>
  );
};
