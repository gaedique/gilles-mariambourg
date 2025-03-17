// AnimatedIcon.tsx
"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedIconProps {
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon,
  delay = 0,
  className = "",
}) => {
  const iconVariants = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
      },
    },
    hover: {
      scale: 1.1,
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`transition-all duration-300 ${className}`}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.6 }}
      variants={iconVariants}
    >
      {icon}
    </motion.div>
  );
};

// For alternating direction (left-to-right and right-to-left)
export const AnimatedIconAlternating: React.FC<
  AnimatedIconProps & { direction?: "ltr" | "rtl" }
> = ({ icon, delay = 0, className = "", direction = "ltr" }) => {
  const iconVariants = {
    hidden: {
      x: direction === "ltr" ? -20 : 20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
      },
    },
    hover: {
      scale: 1.1,
      rotate: direction === "ltr" ? [0, 5, 0] : [0, -5, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`transition-all duration-300 ${className}`}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.6 }}
      variants={iconVariants}
    >
      {icon}
    </motion.div>
  );
};

// Floating animation (for a more subtle, continuous effect)
export const FloatingIcon: React.FC<AnimatedIconProps> = ({
  icon,
  delay = 0,
  className = "",
}) => {
  const floatingVariants = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
      },
    },
    floating: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <motion.div
      className={`${className}`}
      initial="hidden"
      whileInView="visible"
      animate="floating"
      viewport={{ once: true, amount: 0.6 }}
      variants={floatingVariants}
    >
      {icon}
    </motion.div>
  );
};
