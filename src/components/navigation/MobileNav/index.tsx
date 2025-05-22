"use client";

import { navigation } from "@/src/data/siteData";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useMobileDropdown } from "../hooks/useMobileDropdown";
import { NavLink } from "../NavLink";
import { MobileNavProps } from "./types";

const MobileNav = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileNavProps) => {
  // Use the dedicated mobile dropdown hook
  const { isDropdownOpen, toggleDropdown, dropdownRef, triggerRef } =
    useMobileDropdown();

  const mobileMenuId = "mobile-navigation-menu";
  const expertiseMenuId = "mobile-expertise-menu";

  // Reference to keep track of the first and last focusable element
  const firstFocusableElement = useRef<HTMLElement | null>(null);

  // Separate regular nav items from contact item
  const regularNavItems = navigation.main.filter(
    (item) => item.path !== "/#contact"
  );
  const contactItem = navigation.main.find((item) => item.path === "/#contact");

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavLinkClick = () => {
    // Just close the menu immediately
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop/Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
          style={{ pointerEvents: "auto" }}
        />
      )}

      {/* Menu */}
      <aside
        className={`fixed left-0 right-0 bg-white shadow-xl transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } lg:hidden z-50 rounded-b-2xl`}
        style={{
          top: "0",
          maxHeight: "85vh",
        }}
        aria-label="Mobile Menu"
        id={mobileMenuId}
        role="dialog"
        aria-modal={isMobileMenuOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Header avec bouton fermer */}
          <div className="flex items-center justify-between p-4 border-b">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-gray-700 font-heading hover:text-brand-bay-of-many-600 transition-colors p-2"
              aria-label="Fermer le menu"
            >
              <X size={24} />
              <span className="font-medium">Fermer</span>
            </button>
          </div>

          {/* Menu content */}
          <nav
            className="flex-1 overflow-y-auto p-6"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            <ul className="flex flex-col items-start gap-4">
              {regularNavItems.map((item, index) => (
                <li key={item.label} className="w-full font-heading">
                  {item.dropdownItems ? (
                    <div>
                      <button
                        ref={
                          index === 0
                            ? (el) => {
                                firstFocusableElement.current = el;
                                if (
                                  triggerRef &&
                                  typeof triggerRef === "object"
                                ) {
                                  (
                                    triggerRef as React.MutableRefObject<HTMLButtonElement | null>
                                  ).current = el;
                                }
                              }
                            : undefined
                        }
                        onClick={toggleDropdown}
                        className="flex items-center gap-2 text-base hover:text-brand-bay-of-many-600 transition-colors w-full text-left"
                        aria-expanded={isDropdownOpen}
                        aria-controls={expertiseMenuId}
                        aria-haspopup="true"
                      >
                        <span itemProp="name">{item.label}</span>
                        <ChevronDown
                          className={`transition-transform ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                          size={16}
                          aria-hidden="true"
                        />
                      </button>
                      {isDropdownOpen && (
                        <ul
                          ref={dropdownRef}
                          className="mt-2 ml-4 space-y-2"
                          id={expertiseMenuId}
                          role="menu"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <li key={dropdownItem.label} role="menuitem">
                              <NavLink
                                href={dropdownItem.path}
                                className="block py-1 text-gray-700 hover:text-brand-bay-of-many-600"
                                onClick={handleNavLinkClick}
                              >
                                <span itemProp="name">
                                  {dropdownItem.label}
                                </span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      href={item.path}
                      className="block text-base py-1"
                      onClick={handleNavLinkClick}
                    >
                      <span itemProp="name">{item.label}</span>
                    </NavLink>
                  )}
                </li>
              ))}

              {/* Contact CTA button using data from navigation */}
              {contactItem && (
                <li className="w-full">
                  <NavLink
                    href={contactItem.path}
                    className="mt-4 w-full px-6 py-2.5 bg-brand-bay-of-many-600 text-white rounded-xl hover:bg-brand-bay-of-many-700 transition-colors text-center block"
                    onClick={handleNavLinkClick}
                  >
                    <span itemProp="name">{contactItem.label}</span>
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default MobileNav;
