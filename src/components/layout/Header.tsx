"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const EnhancedHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpertiseDropdownOpen, setIsExpertiseDropdownOpen] = useState(false);
  let timeout;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Actualité", path: "news" },
    { label: "Expertise", path: "surgery" },
    { label: "À propos", path: "about" },
    { label: "Consultation", path: "consultation" },
  ];

  const expertiseItems = [
    { label: "Chirurgie du Rachis", path: "expertise/rachis" },
    { label: "Prothèse de Hanche", path: "expertise/prothese-hanche" },
    { label: "Prothèse de Genou", path: "expertise/prothese-genou" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsExpertiseDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsExpertiseDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-bay-of-many-100 to-brand-bay-of-many-200 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
              <span className="font-serif text-base sm:text-lg tracking-wider text-brand-bay-of-many-950">
                GM
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-heading text-gray-900">
                Dr.Mariambourg
              </h1>
              <p className="text-xs text-gray-600 font-light tracking-wider uppercase">
                Rachis | Hanche | Genou
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => {
                  if (item.label === "Expertise") {
                    clearTimeout(timeout); // Empêche la fermeture instantanée
                    setIsExpertiseDropdownOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (item.label === "Expertise") {
                    timeout = setTimeout(
                      () => setIsExpertiseDropdownOpen(false),
                      200
                    ); // Délai avant fermeture
                  }
                }}
              >
                {item.label === "Expertise" ? (
                  <div className="cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 hover:text-brand-bay-of-many-600 transition-colors">
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`ml-1 text-gray-500 transition-transform ${
                          isExpertiseDropdownOpen ? "rotate-180" : ""
                        }`}
                        size={16}
                      />
                    </div>
                    {isExpertiseDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1"
                        onMouseEnter={() => setIsExpertiseDropdownOpen(true)}
                        onMouseLeave={() => setIsExpertiseDropdownOpen(false)}
                      >
                        {expertiseItems.map((expertiseItem) => (
                          <Link
                            key={expertiseItem.label}
                            href={`/${expertiseItem.path}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            {expertiseItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={`/${item.path}`}
                    className="text-gray-900 hover:text-brand-bay-of-many-600 transition-colors group"
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-bay-of-many-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                )}
              </div>
            ))}

            {/* Contact Link */}
            <Link
              href="/contact"
              className="relative px-5 py-2 sm:px-6 sm:py-2.5 bg-brand-bay-of-many-600 text-white rounded-xl overflow-hidden group hover:bg-brand-bay-of-many-700 transition-colors"
            >
              <span className="relative z-20 text-sm font-medium">Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
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
        style={{ top: "5rem" }}
      >
        <div className="flex flex-col items-center gap-6 p-6">
          {navItems.map((item) => (
            <div key={item.label} className="w-full">
              {item.label === "Expertise" ? (
                <div>
                  <button
                    onClick={() =>
                      setIsExpertiseDropdownOpen(!isExpertiseDropdownOpen)
                    }
                    className="text-lg text-gray-900 hover:text-brand-bay-of-many-600 transition-colors w-full text-left"
                  >
                    {item.label}
                  </button>
                  {isExpertiseDropdownOpen && (
                    <div className="mt-2 space-y-2">
                      {expertiseItems.map((expertiseItem) => (
                        <Link
                          key={expertiseItem.label}
                          href={`/${expertiseItem.path}`}
                          className="block pl-4 text-gray-700 hover:text-brand-bay-of-many-600"
                          onClick={closeMobileMenu}
                        >
                          {expertiseItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={`/${item.path}`}
                  className="text-lg text-gray-900 hover:text-brand-bay-of-many-600 transition-colors block"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-4 w-full px-8 py-3 bg-brand-bay-of-many-600 text-white rounded-xl hover:bg-brand-bay-of-many-700 transition-colors text-center"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default EnhancedHeader;
