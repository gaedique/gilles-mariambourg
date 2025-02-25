"use client";
import { useState, type ReactNode } from "react";
import { getYouTubeEmbedUrl } from "../utils/youtube";
import Image from "next/image";
import { PlayButton } from "./PlayButton";

interface VideoSectionProps {
  videoUrl: string;
  thumbnailUrl: string;
  thumbnailAlt?: string;
}

export const VideoSection = ({
  videoUrl,
  thumbnailUrl,
  thumbnailAlt,
}: VideoSectionProps): ReactNode => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <div className="relative w-full h-full">
      {isPlaying && embedUrl ? (
        <iframe
          src={`${embedUrl}?autoplay=1`}
          className="absolute inset-0 w-full h-full"
          title="Surgical technique demonstration"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={thumbnailUrl}
            alt={thumbnailAlt || "Image de présentation"}
            width={2048}
            height={1536}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay avec la palette bay-of-many */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bay-of-many-400/20 to-brand-bay-of-many-600/20" />

          {/* Container du bouton */}
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayButton onClick={() => setIsPlaying(true)} />
          </div>
        </div>
      )}
    </div>
  );
};
