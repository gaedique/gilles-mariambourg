"use client";
import { useState, useCallback, RefObject, useRef } from "react";

interface UseMobileDropdownOptions {
  closeOnEscape?: boolean;
  initialState?: boolean;
}

export const useMobileDropdown = (options: UseMobileDropdownOptions = {}) => {
  const { closeOnEscape = true, initialState = false } = options;

  const [isDropdownOpen, setIsDropdownOpen] = useState(initialState);

  // Create properly typed refs for potential DOM references
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Toggle function for dropdown state
  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  // Close dropdown function
  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  // Open dropdown function
  const openDropdown = useCallback(() => {
    setIsDropdownOpen(true);
  }, []);

  // Keyboard handler for accessibility
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape" && isDropdownOpen) {
        setIsDropdownOpen(false);
        // Return focus to the trigger element when closing with Escape
        if (triggerRef.current) {
          triggerRef.current.focus();
        }
      }
    },
    [isDropdownOpen, closeOnEscape]
  );

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    toggleDropdown,
    closeDropdown,
    openDropdown,
    handleKeyDown,
    dropdownRef: dropdownRef as RefObject<HTMLDivElement>,
    triggerRef: triggerRef as RefObject<HTMLButtonElement>,
  };
};
