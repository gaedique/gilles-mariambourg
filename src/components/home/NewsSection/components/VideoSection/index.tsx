"use client";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { getYouTubeEmbedUrl } from "../../utils/youtube";
import { PlayButton } from "../PlayButton";
import { VideoSectionProps } from "./types";

export const VideoSection = ({
  videoUrl,
  thumbnailUrl,
  thumbnailAlt = "Démonstration de la technique d'endoscopie biportale rachidienne - Une approche chirurgicale mini-invasive",
  videoTitle = "Démonstration de l'endoscopie biportale rachidienne",
}: VideoSectionProps & { videoTitle?: string }): ReactNode => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <div className="relative w-full h-full">
      {isPlaying && embedUrl ? (
        <iframe
          src={`${embedUrl}?autoplay=1&cc_load_policy=1&rel=0`}
          className="absolute inset-0 w-full h-full"
          title={videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div
          className="relative w-full h-full"
          itemScope
          itemType="https://schema.org/VideoObject"
        >
          <meta itemProp="name" content={videoTitle} />
          <meta itemProp="description" content={thumbnailAlt} />
          <meta itemProp="thumbnailUrl" content={thumbnailUrl} />
          <meta itemProp="contentUrl" content={videoUrl} />

          <Image
            src={thumbnailUrl}
            alt={thumbnailAlt}
            width={2048}
            height={1536}
            className="absolute inset-0 w-full h-full object-cover"
            priority={false}
            itemProp="thumbnail"
          />

          {/* Layer Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-brand-bay-of-many-400/20 to-brand-bay-of-many-600/20"
            aria-hidden="true"
          />

          {/* Button container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayButton
              onClick={() => setIsPlaying(true)}
              aria-label={`Lancer la vidéo sur l'endoscopie biportale rachidienne: ${videoTitle}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};
