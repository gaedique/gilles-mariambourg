import React from "react";

interface SectionHeaderProps {
  preTitle?: string;
  title: string;
  subtitle?: string;
  accentWord?: string;
}

export default function SectionHeader({
  preTitle,
  title,
  subtitle,
  accentWord,
}: SectionHeaderProps) {
  const renderTitle = () => {
    if (accentWord) {
      const [beforeAccent, afterAccent] = title.split(accentWord);
      return (
        <>
          {beforeAccent}
          <span className="italic">{accentWord}</span>
          {afterAccent}
        </>
      );
    }
    return title;
  };

  return (
    <div className="mb-32 sm:mb-16">
      {preTitle && (
        <div className="flex items-center justify-center gap-3 mb-12">
          <div
            className="w-4 h-4 bg-gradient-to-r from-brand-accent-1 to-brand-accent-2 rounded-full animate-pulse"
            aria-hidden="true"
          ></div>
          <h2 className="font-heading text-sm uppercase tracking-wider text-gray-600">
            {preTitle}
          </h2>
        </div>
      )}

      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {renderTitle()}
        </h2>

        {subtitle && (
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-3 to-brand-accent-4">
            {subtitle}
          </h3>
        )}
      </div>

      <div className="h-px w-full bg-brand-accent-1 opacity-20 my-6 sm:my-8" />
    </div>
  );
}
