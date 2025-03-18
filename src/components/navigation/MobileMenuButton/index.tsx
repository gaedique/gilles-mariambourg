"use client";
import { Menu, X } from "lucide-react";
import { MobileMenuButtonProps } from "./types";

const MobileMenuButton = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  ariaControls = "mobile-navigation-menu",
}: MobileMenuButtonProps) => {
  return (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="lg:hidden p-2 text-gray-900 hover:text-brand-bay-of-many-600 transition-colors"
      aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMobileMenuOpen}
      aria-controls={ariaControls}
    >
      {isMobileMenuOpen ? (
        <X size={24} aria-hidden="true" />
      ) : (
        <Menu size={24} aria-hidden="true" />
      )}
    </button>
  );
};

export default MobileMenuButton;
