"use client";
import { navigation } from "@/src/data/siteData";
import CtaButton from "@/src/ui/CtaButton";
import { ChevronDown } from "lucide-react";
import { useCallback } from "react";
import { DropdownMenu } from "../DropdownMenu";
import { NavLink } from "../NavLink";
import { DesktopNavProps } from "./types";

const DesktopNav = ({
  isExpertiseDropdownOpen,
  setIsExpertiseDropdownOpen,
  handleMouseEnter,
  handleMouseLeave,
  handleKeyDown,
  dropdownRef,
  triggerRef,
}: DesktopNavProps) => {
  // Adapter functions that preserve functionality
  const handleDropdownMouseEnter = useCallback(() => {
    handleMouseEnter();
  }, [handleMouseEnter]);

  const handleDropdownMouseLeave = useCallback(() => {
    handleMouseLeave();
  }, [handleMouseLeave]);

  // Separate regular nav items from contact item
  const regularNavItems = navigation.main.filter(
    (item) => item.path !== "/#contact"
  );
  const contactItem = navigation.main.find((item) => item.path === "/#contact");

  return (
    <nav
      className="hidden lg:flex items-center gap-4 lg:gap-8"
      aria-label="Main Navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <ul className="flex items-center gap-4 lg:gap-8 font-heading">
        {regularNavItems.map((item) => (
          <li key={item.label} className="relative group">
            {item.dropdownItems ? (
              <button
                ref={triggerRef}
                className="flex items-center gap-1 text-sm font-medium hover:text-brand-bay-of-many-600 transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onKeyDown={handleKeyDown}
                aria-haspopup="true"
                aria-expanded={isExpertiseDropdownOpen}
                aria-controls="expertise-dropdown-menu"
              >
                <span itemProp="name">{item.label}</span>
                <ChevronDown
                  className={`text-gray-500 transition-transform ${
                    isExpertiseDropdownOpen ? "rotate-180" : ""
                  }`}
                  size={14}
                  aria-hidden="true"
                />
                {isExpertiseDropdownOpen && (
                  <DropdownMenu
                    ref={dropdownRef}
                    id="expertise-dropdown-menu"
                    items={item.dropdownItems}
                    onItemClick={() => setIsExpertiseDropdownOpen(false)}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  />
                )}
              </button>
            ) : (
              <div className="group" itemProp="url">
                <NavLink href={item.path} className="relative group">
                  <span className="text-sm font-medium" itemProp="name">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-bay-of-many-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </NavLink>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Render contact item as CTA button if it exists */}
      {contactItem && (
        <CtaButton href={contactItem.path}>{contactItem.label}</CtaButton>
      )}
    </nav>
  );
};

export default DesktopNav;
