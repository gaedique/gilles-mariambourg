"use client";
import { type ReactNode } from "react";

interface PlayButtonProps {
  onClick?: () => void;
  className?: string;
}

export const PlayButton = ({
  onClick,
  className = "",
}: PlayButtonProps): ReactNode => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Cercles extérieurs pulsants */}
      <div className="absolute inset-0 bg-brand-bay-of-many-200/20 rounded-full animate-[smallScale_3s_infinite]" />
      <div className="absolute inset-0 bg-brand-bay-of-many-400/20 rounded-full animate-[smallScale_3s_infinite_500ms]" />

      {/* Bouton blanc central avec effet hover */}
      <button
        onClick={onClick}
        className="relative flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg transition-transform duration-300 ease-out hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 ml-1"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M5 4.5L19 12L5 19.5V4.5Z"
            className="fill-brand-bay-of-many-500 stroke-brand-bay-of-many-500 animate-[triangleStroke_3s_ease]"
            strokeDasharray="90"
            strokeDashoffset="0"
          />
        </svg>
      </button>
    </div>
  );
};
