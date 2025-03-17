"use client";
import { type ReactNode } from "react";
import { PlayButtonProps } from "./types";

export const PlayButton = ({
  onClick,
  className = "",
  "aria-label":
    ariaLabel = "Lancer la vidéo de démonstration de la technique chirurgicale",
}: PlayButtonProps): ReactNode => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Pulsating outer circles */}
      <div className="absolute inset-0 bg-brand-bay-of-many-200/20 rounded-full animate-[smallScale_3s_infinite]" />
      <div className="absolute inset-0 bg-brand-bay-of-many-400/20 rounded-full animate-[smallScale_3s_infinite_500ms]" />

      {/* Central white button with hover effect */}
      <button
        onClick={onClick}
        className="relative flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg transition-transform duration-300 ease-out hover:scale-110 font-accent"
        aria-label={ariaLabel}
      >
        <span className="sr-only font-accent">Lancer la vidéo</span>
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 ml-1"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
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
