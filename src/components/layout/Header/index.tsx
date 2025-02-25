"use client";
import ActionButton from "@/src/components/ui/ActionButton";
import { navItems } from "@/src/data/navItems";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

import { DropdownMenu } from "./components/DropdownMenu";
import { Logo } from "./components/Logo";
import { NavLink } from "./components/NavLink";
import { useDropdownMenu } from "./hooks/useDropdownMenu";
import { useHeaderScroll } from "./hooks/useHeaderScroll";

const Header = () => {
  const { isScrolled, isMobileMenuOpen, setIsMobileMenuOpen } =
    useHeaderScroll();
  const {
    isExpertiseDropdownOpen,
    setIsExpertiseDropdownOpen,
    handleMouseEnter,
    handleMouseLeave,
  } = useDropdownMenu();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={item.dropdownItems ? handleMouseEnter : undefined}
                onMouseLeave={item.dropdownItems ? handleMouseLeave : undefined}
              >
                {item.dropdownItems ? (
                  <div className="cursor-pointer">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-gray-900 hover:text-brand-bay-of-many-600 transition-colors">
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`text-gray-500 transition-transform ${
                          isExpertiseDropdownOpen ? "rotate-180" : ""
                        }`}
                        size={14}
                      />
                    </div>
                    {isExpertiseDropdownOpen && (
                      <DropdownMenu
                        items={item.dropdownItems}
                        onItemClick={() => setIsExpertiseDropdownOpen(false)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      />
                    )}
                  </div>
                ) : (
                  <div className="group">
                    <NavLink href={item.path} className="relative group">
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-bay-of-many-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </NavLink>
                  </div>
                )}
              </div>
            ))}

            <ActionButton href="/contact">Contact</ActionButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-900 hover:text-brand-bay-of-many-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
        style={{ top: "4rem" }}
      >
        <div className="flex flex-col items-start gap-4 p-6 bg-white/95 backdrop-blur-sm shadow-sm">
          {navItems.map((item) => (
            <div key={item.label} className="w-full">
              {item.dropdownItems ? (
                <div>
                  <button
                    onClick={() =>
                      setIsExpertiseDropdownOpen(!isExpertiseDropdownOpen)
                    }
                    className="flex items-center gap-2 text-base text-gray-900 hover:text-brand-bay-of-many-600 transition-colors w-full text-left"
                  >
                    {item.label}
                    <ChevronDown
                      className={`transition-transform ${
                        isExpertiseDropdownOpen ? "rotate-180" : ""
                      }`}
                      size={16}
                    />
                  </button>
                  {isExpertiseDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <NavLink
                          key={dropdownItem.label}
                          href={dropdownItem.path}
                          className="block py-1 text-gray-700 hover:text-brand-bay-of-many-600"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsExpertiseDropdownOpen(false);
                          }}
                        >
                          {dropdownItem.label}
                        </NavLink>
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
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-4 w-full px-6 py-2.5 bg-brand-bay-of-many-600 text-white rounded-xl hover:bg-brand-bay-of-many-700 transition-colors text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
