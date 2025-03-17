"use client";
import { navigation } from "@/src/data/siteData";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { NavLink } from "../NavLink";
import { MobileNavProps } from "./types";
import { useMobileDropdown } from "../../hooks/useMobileDropdown";

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
  const lastFocusableElement = useRef<HTMLElement | null>(null);

  // Separate regular nav items from contact item
  const regularNavItems = navigation.main.filter(
    (item) => item.path !== "/contact"
  );
  const contactItem = navigation.main.find((item) => item.path === "/contact");

  return (
    <aside
      className={`fixed inset-0 bg-white/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      } lg:hidden z-50`}
      style={{ top: "4rem" }}
      aria-label="Mobile Menu"
      id={mobileMenuId}
      aria-hidden={!isMobileMenuOpen}
      role="dialog"
      aria-modal={isMobileMenuOpen}
    >
      <nav
        className="p-6 bg-white/95 backdrop-blur-sm shadow-sm"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <ul className="flex flex-col items-start gap-4">
          {regularNavItems.map((item, index) => (
            <li key={item.label} className="w-full">
              {item.dropdownItems ? (
                <div>
                  <button
                    ref={
                      index === 0
                        ? (el) => {
                            firstFocusableElement.current = el;
                            // Also set the triggerRef if it's the dropdown trigger
                            if (triggerRef && typeof triggerRef === "object") {
                              (
                                triggerRef as React.MutableRefObject<HTMLButtonElement | null>
                              ).current = el;
                            }
                          }
                        : undefined
                    }
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 text-base font-heading hover:text-brand-bay-of-many-600 transition-colors w-full text-left"
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
                    <div
                      ref={dropdownRef}
                      className="mt-2 ml-4 space-y-2"
                      id={expertiseMenuId}
                      role="menu"
                    >
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.path}
                          className="block py-1 text-gray-700 hover:text-brand-bay-of-many-600"
                          onClick={() => {
                            // Simply close mobile menu but keep dropdown open
                            setIsMobileMenuOpen(false);
                          }}
                          role="menuitem"
                          itemProp="url"
                        >
                          <span itemProp="name">{dropdownItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  href={item.path}
                  className="block text-base py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span itemProp="name">{item.label}</span>
                </NavLink>
              )}
            </li>
          ))}

          {/* Contact CTA button using data from navigation */}
          {contactItem && (
            <Link
              href={contactItem.path}
              className="mt-4 w-full px-6 py-2.5 bg-brand-bay-of-many-600 text-white rounded-xl hover:bg-brand-bay-of-many-700 transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
              ref={(el) => {
                lastFocusableElement.current = el as HTMLElement;
              }}
            >
              <span itemProp="name">{contactItem.label}</span>
            </Link>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileNav;
