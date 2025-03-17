"use client";
import { ConsultationInfo } from "@/src/data/siteData";
import { motion } from "framer-motion";
import {
  Calendar,
  Hospital,
  Info,
  LucideIcon,
  Stethoscope,
} from "lucide-react";

// Map of icon names to components
const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Hospital,
  Stethoscope,
  Info,
};

interface ConsultationCardProps extends ConsultationInfo {
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

// Map positions to animation sequence
const positionToSequence = {
  topLeft: 0,
  topRight: 1,
  bottomLeft: 2,
  bottomRight: 3,
};

export const ConsultationCard = ({
  icon,
  title,
  subtitle,
  description,
  position,
}: ConsultationCardProps) => {
  const descriptionArray = Array.isArray(description)
    ? description
    : [description];

  // Get the icon component or default to Info
  const IconComponent = iconMap[icon] || Info;

  // Get sequence number for this position
  const sequence = positionToSequence[position];

  // Use more fluid timing
  // Each animation takes 1.2s total (0.8s movement, 0.4s pause)
  const movementDuration = 1.2;
  const cycleGap = 0.1; // Brief pause between movements
  const singleCycleDuration = movementDuration + cycleGap;
  const totalCycleDuration = singleCycleDuration * 4; // Time for all 4 icons

  // Icon animation - sequential side-to-side movement
  const iconContainerVariants = {
    animate: {
      x: [0, 10, 0],
      transition: {
        duration: movementDuration, // Faster movement
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: totalCycleDuration - movementDuration, // Wait for all others to finish
        delay: sequence * singleCycleDuration, // Start based on position in sequence
      },
    },
  };

  return (
    <article className="relative h-full bg-white/80 shadow-2xl p-4 sm:p-6 group hover:bg-brand-bay-of-many-50">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
        aria-hidden="true"
      />

      <div className="relative flex items-start gap-4 sm:gap-6">
        <motion.div
          className="flex-shrink-0 border border-brand-bay-of-many-600 rounded-md p-2 text-brand-bay-of-many-600"
          animate="animate"
          variants={iconContainerVariants}
          aria-hidden="true"
        >
          <IconComponent size={24} />
        </motion.div>

        <div className="flex-1 max-w-md">
          <h4
            className="text-base font-heading font-bold leading-relaxed mb-2 transition-colors duration-300 ease-out group-hover:text-brand-bay-of-many-800"
            itemProp="name"
          >
            {title}
          </h4>
          <p
            className="text-sm font-accent font-bold text-brand-bay-of-many-600 leading-relaxed uppercase"
            itemProp="procedureType"
          >
            {subtitle}
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-1.5" itemProp="description">
        {descriptionArray.map((line, index) => (
          <p key={index} className="text-sm text-secondary leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </article>
  );
};
