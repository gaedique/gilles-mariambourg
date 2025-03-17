import Image from "next/image";
import { ImageWithPointsProps } from "./types";

export const ImageWithPoints = ({
  activeSurgery,
  imageSrc,
  imageAlt,
}: ImageWithPointsProps) => {
  // Construct a more SEO-friendly alt text
  const altText = activeSurgery?.title
    ? `${imageAlt} - ${activeSurgery.title} - Points d'intervention et zones traitées`
    : imageAlt;

  // Function to get size classes based on the point size
  const getPointSizeClasses = (size?: "small" | "medium" | "large") => {
    switch (size) {
      case "small":
        return "w-4 h-4";
      case "large":
        return "w-8 h-8";
      case "medium":
      default:
        return "w-6 h-6";
    }
  };

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
      {activeSurgery?.points?.map((point, index) => {
        const sizeClasses = getPointSizeClasses(point.size);
        return (
          <div
            key={index}
            className={`absolute ${sizeClasses} bg-amber-500 rounded-full animate-pulse`}
            style={{ top: point.top, left: point.left }}
            aria-hidden="true"
            role="presentation"
          >
            <div className="absolute inset-0 bg-amber-200 rounded-full animate-ping" />
            <span className="sr-only">
              Point d&apos;intervention {index + 1} pour {activeSurgery?.title}
            </span>
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
