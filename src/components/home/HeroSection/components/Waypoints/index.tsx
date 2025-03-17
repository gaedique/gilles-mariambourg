import { SpecialtyWaypointsProps } from "./types";

export const SpecialtyWaypoints = ({
  specialties,
  currentSpecialty,
  setcurrentSpecialty,
}: SpecialtyWaypointsProps) => {
  return (
    <div className="flex justify-center gap-2 z-10">
      {specialties.map((specialty, index) => (
        <button
          key={index}
          onClick={() => setcurrentSpecialty(index)}
          className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all ${
            index === currentSpecialty
              ? "bg-white scale-125 w-3 sm:w-4 shadow-lg"
              : "bg-white/50 hover:bg-white/80"
          }`}
          aria-label={`Voir la spécialité ${specialty.title || `${index + 1}`}`}
        />
      ))}
    </div>
  );
};
