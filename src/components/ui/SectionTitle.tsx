import React from "react";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  largeTitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  largeTitle,
  className = "",
  centered = false,
}) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""} ${className}`}>
      <div
        className={`flex items-center gap-3 mb-8 ${
          centered ? "justify-center" : ""
        }`}
      >
        <div
          className="w-3 h-3 bg-brand-bay-of-many-600 rounded-full animate-pulse"
          aria-hidden="true"
        />
        <h2 className="text-xs uppercase tracking-wider text-brand-bay-of-many-600">
          {subtitle}
        </h2>
      </div>

      <h3 className="text-xl text-slate-600 uppercase tracking-wide">
        {title}
      </h3>

      {largeTitle && (
        <p className="text-4xl text-slate-900 mt-12">{largeTitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
