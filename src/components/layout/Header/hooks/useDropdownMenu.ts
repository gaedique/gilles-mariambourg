// Hook personnalisé pour gérer le dropdown
"use client";
import { useState, useRef, useEffect } from "react";

export const useDropdownMenu = () => {
  const [isExpertiseDropdownOpen, setIsExpertiseDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsExpertiseDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsExpertiseDropdownOpen(false);
    }, 200);
  };

  return {
    isExpertiseDropdownOpen,
    setIsExpertiseDropdownOpen,
    handleMouseEnter,
    handleMouseLeave,
  };
};
