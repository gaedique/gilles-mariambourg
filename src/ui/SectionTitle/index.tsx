import { SectionTitleProps } from "./types";

const SectionTitle = ({
  title,
  subtitle,
  className = "",
  id,
}: SectionTitleProps) => {
  return (
    <div className={`mb-8 md:mb-12 lg:mb-16 text-center ${className}`}>
      <div className="flex items-center gap-3 mb-8 justify-center">
        <div
          className="w-3 h-3 bg-brand-bay-of-many-600 rounded-full"
          aria-hidden="true"
        />
        <h2
          id={id}
          className="text-md font-heading uppercase tracking-wider text-brand-bay-of-many-600"
        >
          {title}
        </h2>
      </div>

      <h3 className="text-2xl font-heading text-secondary uppercase tracking-wide">
        {subtitle}
      </h3>
    </div>
  );
};

export default SectionTitle;
