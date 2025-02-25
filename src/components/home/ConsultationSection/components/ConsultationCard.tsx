import React from "react";
import { ConsultationCardProps } from "../types/types";

export const ConsultationCard: React.FC<ConsultationCardProps> = ({
  icon,
  title,
  subtitle,
  description,
}) => {
  const descriptionArray = Array.isArray(description)
    ? description
    : [description];

  return (
    <div className="relative h-full bg-white p-4 sm:p-6 group">
      <div className="absolute inset-0 bg-brand-bay-of-many-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />

      <div className="relative flex items-start gap-4 sm:gap-6">
        <div className="flex-shrink-0 border border-brand-bay-of-many-600 rounded-md p-2 text-brand-bay-of-many-600 transition-transform duration-300 ease-out group-hover:scale-110">
          {icon}
        </div>

        <div className="flex-1 max-w-md">
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-2 transition-colors duration-300 ease-out group-hover:text-brand-bay-of-many-700">
              {title}
            </h4>
            <p className="text-sm text-brand-bay-of-many-600 uppercase">
              {subtitle}
            </p>
          </div>
          <div className="space-y-1.5">
            {descriptionArray.map((line, index) => (
              <p key={index} className="text-sm text-gray-600 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
