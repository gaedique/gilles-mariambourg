import { FC } from "react";
import { Specialty } from "../types";

interface SpecialtyBadgeProps {
  specialty: Specialty;
}

export const SpecialtyBadge: FC<SpecialtyBadgeProps> = ({ specialty }) => {
  return (
    <div className="inline-block bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-xl opacity-0 animate-fade-in-up">
      <p className="text-xs sm:text-sm font-light text-brand-bay-of-many-600">
        {specialty.title}
      </p>
    </div>
  );
};

{
  /* <div className="inline-block bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full">
          <p className="text-xs sm:text-sm font-light text-brand-bay-of-many-600">
            {currentSpecialty.title}
          </p>
        </div> */
}
