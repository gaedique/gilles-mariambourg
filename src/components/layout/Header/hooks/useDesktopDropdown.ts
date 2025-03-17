"use client";
import { useState, useEffect, useCallback, useRef, RefObject } from "react";

interface UseDesktopDropdownOptions {
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
  closeDelay?: number;
}

export const useDesktopDropdown = (options: UseDesktopDropdownOptions = {}) => {
  const {
    closeOnEscape = true,
    closeOnOutsideClick = true,
    closeDelay = 150,
  } = options;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Create properly typed refs
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Clear any pending timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handle outside clicks to close dropdown
  useEffect(() => {
    if (!closeOnOutsideClick || !isDropdownOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen, closeOnOutsideClick]);

  // Mouse event handlers with delay
  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, closeDelay);
  }, [closeDelay]);

  // Keyboard navigation handler
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape" && isDropdownOpen) {
        setIsDropdownOpen(false);
        // Return focus to the trigger element when closing with Escape
        if (triggerRef.current) {
          triggerRef.current.focus();
        }
      }

      // Arrow down to open and move focus to first menu item
      if (event.key === "ArrowDown") {
        event.preventDefault();
        if (!isDropdownOpen) {
          setIsDropdownOpen(true);
        }

        // Focus first menu item (this requires proper DOM structure)
        const firstMenuItem = dropdownRef.current?.querySelector(
          "a, button"
        ) as HTMLElement;
        if (firstMenuItem) {
          firstMenuItem.focus();
        }
      }
    },
    [isDropdownOpen, closeOnEscape]
  );

  // Toggle function for dropdown state
  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    toggleDropdown,
    handleMouseEnter,
    handleMouseLeave,
    handleKeyDown,
    dropdownRef: dropdownRef as RefObject<HTMLDivElement>,
    triggerRef: triggerRef as RefObject<HTMLButtonElement>,
  };
};
