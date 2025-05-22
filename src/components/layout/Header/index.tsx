"use client";
import DesktopNav from "@/src/components/navigation/DesktopNav";
import MobileNav from "@/src/components/navigation/MobileNav";
import { contact, doctor, meta } from "@/src/data/siteData";
import { useEffect, useState } from "react";
import { useDesktopDropdown } from "../../navigation/hooks/useDesktopDropdown";
import { useHeaderScroll } from "../../navigation/hooks/useHeaderScroll";
import MobileMenuButton from "../../navigation/MobileMenuButton";
import { Logo } from "./Logo";

const Header = () => {
  const { isScrolled, isMobileMenuOpen, setIsMobileMenuOpen } =
    useHeaderScroll();

  const {
    isDropdownOpen,
    setIsDropdownOpen,
    handleMouseEnter,
    handleMouseLeave,
    handleKeyDown,
    dropdownRef,
    triggerRef,
  } = useDesktopDropdown({ closeDelay: 200 });

  // Manage keyboard navigation for accessibility
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setIsKeyboardUser(true);
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardUser(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  // Add aria attributes for improved semantics/a11y
  const mobileMenuId = "mobile-navigation-menu";

  return (
    <header
      className={`fixed top-4 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      role="banner"
      aria-label="Site header"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[var(--navbar-height)] px-4 sm:px-6">
        {/* Logo with Skip to Main Content Link for A11y */}
        <div className="flex items-center">
          <a
            href="#main-content"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("main-content")?.focus();
              document
                .getElementById("main-content")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-white focus:text-blue-600 focus:z-50 ${
              isKeyboardUser ? "focus:block" : "focus:hidden"
            }`}
          >
            Skip to main content
          </a>

          {/* Organization and Doctor Schema.org markup */}
          <div
            itemScope
            itemType="https://schema.org/Organization"
            className="flex items-center"
          >
            <meta itemProp="name" content={doctor.fullName} />
            <meta itemProp="url" content={meta.siteUrl} />
            <meta itemProp="logo" content={`${meta.siteUrl}${meta.siteLogo}`} />
            <meta itemProp="description" content={meta.siteDescription} />

            {/* Address information */}
            <div
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
              className="hidden"
            >
              <meta itemProp="streetAddress" content={contact.address.street} />
              <meta itemProp="addressLocality" content={contact.address.city} />
              <meta
                itemProp="postalCode"
                content={contact.address.postalCode}
              />
              <meta itemProp="addressCountry" content="FR" />
            </div>

            {/* Contact information */}
            <meta itemProp="telephone" content={contact.details.phone} />
            {contact.details.doctolib && (
              <meta itemProp="sameAs" content={contact.details.doctolib} />
            )}

            {/* Person markup (doctor) */}
            <div
              itemScope
              itemType="https://schema.org/Physician"
              itemProp="founder"
              className="hidden"
            >
              <meta itemProp="name" content={doctor.fullName} />
              <meta itemProp="jobTitle" content={doctor.title} />
              <meta itemProp="description" content={doctor.description.short} />
              <meta
                itemProp="image"
                content={`${meta.siteUrl}${doctor.image.src}`}
              />
            </div>

            <Logo />
          </div>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav
          isExpertiseDropdownOpen={isDropdownOpen}
          setIsExpertiseDropdownOpen={setIsDropdownOpen}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleKeyDown={handleKeyDown}
          dropdownRef={dropdownRef}
          triggerRef={triggerRef}
        />

        {/* Tablet/Mobile Menu Button */}
        <MobileMenuButton
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          ariaControls={mobileMenuId}
        />
      </div>

      {/* Tablet/Mobile Navigation Menu - Only passing required props */}
      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
