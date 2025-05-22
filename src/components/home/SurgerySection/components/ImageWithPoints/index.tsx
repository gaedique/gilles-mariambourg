"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageWithPointsProps } from "./types";

export const ImageWithPoints = ({
  activeSurgery,
  imageSrc,
  imageAlt,
}: ImageWithPointsProps) => {
  // État pour suivre le point survolé
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(
    null
  );

  // Construct a more SEO-friendly alt text
  const altText = activeSurgery?.title
    ? `${imageAlt} - ${activeSurgery.title} - Points d'intervention et zones traitées`
    : imageAlt;

  // Function to get size classes based on the point size
  const pointSize = { width: "16px", height: "16px" };

  return (
    <figure className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl">
      <Image
        src={imageSrc}
        alt={altText}
        fill
        className="object-cover"
        loading="eager"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={true}
      />

      {/* Points interactifs */}
      {activeSurgery?.points?.map((point, index) => {
        const linkUrl = activeSurgery?.url || "#";

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredPointIndex(index)}
            onMouseLeave={() => setHoveredPointIndex(null)}
            style={{
              position: "absolute",
              top: point.top,
              left: point.left,
              width: pointSize.width,
              height: pointSize.height,
              zIndex: 20,
            }}
          >
            {/* Point avec animation */}
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#f59e0b" /* bg-amber-500 */,
                borderRadius: "9999px",
                position: "relative",
              }}
            >
              {/* Animation pulsante */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "#fde68a" /* bg-amber-200 */,
                  borderRadius: "9999px",
                  animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              ></div>
            </div>

            {/* Infobulle */}
            {hoveredPointIndex === index && (
              <div
                style={{
                  position: "absolute",
                  bottom: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  borderRadius: "6px",
                  padding: "4px 12px",
                  marginBottom: "8px",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#312e81" /* text-indigo-900 */,
                  whiteSpace: "nowrap",
                  zIndex: 30,
                }}
              >
                {activeSurgery?.title}
                <div
                  style={{
                    position: "absolute",
                    width: "8px",
                    height: "8px",
                    backgroundColor: "white",
                    bottom: "-4px",
                    left: "50%",
                    transform: "translateX(-50%) rotate(45deg)",
                  }}
                ></div>
              </div>
            )}

            {/* Lien cliquable */}
            <a
              href={linkUrl}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 25,
                cursor: "pointer",
                borderRadius: "9999px",
              }}
              aria-label={`Voir la page ${activeSurgery?.title}`}
            >
              <span
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  padding: 0,
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  borderWidth: 0,
                }}
              >
                Voir la page {activeSurgery?.title}
              </span>
            </a>
          </div>
        );
      })}

      <figcaption className="sr-only font-accent">
        Points d&apos;intervention pour la chirurgie orthopédique :{" "}
        {activeSurgery?.title}.{activeSurgery?.description}
      </figcaption>
    </figure>
  );
};
