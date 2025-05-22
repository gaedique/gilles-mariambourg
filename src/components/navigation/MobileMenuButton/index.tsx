"use client";
import { Menu } from "lucide-react";
import { MobileMenuButtonProps } from "./types";

const MobileMenuButton = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  ariaControls = "mobile-navigation-menu",
}: MobileMenuButtonProps) => {
  // Ne rien afficher si le menu est ouvert
  if (isMobileMenuOpen) {
    return null;
  }

  return (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="lg:hidden p-2 text-gray-900 hover:text-brand-bay-of-many-600 transition-colors"
      aria-label="Open menu"
      aria-expanded={isMobileMenuOpen}
      aria-controls={ariaControls}
    >
      <Menu size={24} aria-hidden="true" />
    </button>
  );
};

export default MobileMenuButton;
