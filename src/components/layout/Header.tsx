"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const EnhancedHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = ["Actualité", "Expertise", "À propos", "Consultation"];

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
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative text-gray-900 hover:text-brand-bay-of-many-600 transition-colors group"
              >
                <span className="text-sm font-medium">{item}</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-bay-of-many-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}

            {/* Contact Link with enhanced blob effect */}
            <Link
              href="/contact"
              className="relative px-5 py-2 sm:px-6 sm:py-2.5 bg-brand-bay-of-many-600 text-white rounded-xl overflow-hidden group hover:bg-brand-bay-of-many-700 transition-colors"
            >
              <span className="relative z-20 text-sm font-medium">Contact</span>
              {/* Enhanced blob effect */}
              <div className="absolute inset-0 w-full h-full">
                <div
                  className="absolute -inset-full bg-brand-bay-of-many-400 blur-2xl group-hover:animate-blob-slow opacity-0 group-hover:opacity-80"
                  style={{ transformOrigin: "center" }}
                />
                <div
                  className="absolute -inset-full bg-brand-bay-of-many-500 blur-xl group-hover:animate-blob-slow opacity-0 group-hover:opacity-80"
                  style={{
                    transformOrigin: "center",
                    animationDelay: "-3s",
                  }}
                />
              </div>
              {/* Base gradient */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-bay-of-many-600 to-brand-bay-of-many-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
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
        } md:hidden`}
        style={{ top: "5rem" }}
      >
        <div className="flex flex-col items-center gap-6 p-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-lg text-gray-900 hover:text-brand-bay-of-many-600 transition-colors relative group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>{item}</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-bay-of-many-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 w-full px-8 py-3 bg-brand-bay-of-many-600 text-white rounded-xl hover:bg-brand-bay-of-many-700 transition-colors text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default EnhancedHeader;
