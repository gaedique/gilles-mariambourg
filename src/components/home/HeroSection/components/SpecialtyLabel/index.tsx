import { SpecialtyLabelProps } from "./types";

export const SpecialtyLabel = ({ specialty }: SpecialtyLabelProps) => {
  return (
    <div className="z-10">
      <p className="text-sm md:text-base font-accent font-medium text-white">
        {specialty.title}
      </p>
      {specialty.outcome && (
        <span className="sr-only font-accent">{specialty.outcome}</span>
      )}
    </div>
  );
};
