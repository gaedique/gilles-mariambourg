"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", text: "Accueil" },
    {
      href: "/expertises",
      text: "Expertises",
      subItems: [
        { href: "/expertises/rachis", text: "Chirurgie du rachis" },
        { href: "/expertises/hanche", text: "Prothèse de hanche" },
        { href: "/expertises/genou", text: "Prothèse du genou" },
      ],
    },
    { href: "/about", text: "À propos" },
    { href: "/news", text: "Actualité" },
    { href: "/consultation", text: "Consultation" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo avec image */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-blue-50 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/gilles_profil.jpg"
                alt="Dr. Mariambourg"
                fill
                className="object-cover object-center"
              />
            </div>
            <span className="font-heading text-2xl tracking-wide">
              Dr.Mariambourg
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.subItems ? (
                  <button
                    className="flex items-center px-2 py-2 text-sm uppercase tracking-wider transition-colors duration-200 hover:text-deep-blue active:text-deep-blue-dark hover:bg-deep-blue-light/30"
                    onMouseEnter={() => setIsExpertiseOpen(true)}
                    onMouseLeave={() => setIsExpertiseOpen(false)}
                  >
                    {link.text}
                    <ChevronDown size={14} className="ml-1" />

                    {/* Sous-menu */}
                    <div
                      className={`absolute top-full left-0 w-64 py-2 bg-white shadow-lg rounded-lg transform transition-all duration-200 ${
                        isExpertiseOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm transition-colors duration-200 hover:bg-deep-blue-light/30 hover:text-deep-blue active:text-deep-blue-dark"
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="px-2 py-2 text-sm uppercase tracking-wider transition-colors duration-200 hover:text-deep-blue active:text-deep-blue-dark hover:bg-deep-blue-light/30"
                  >
                    {link.text}
                  </Link>
                )}
              </div>
            ))}

            {/* Contact bouton accentué */}
            <Link
              href="/contact"
              className="ml-4 flex items-center space-x-2 bg-deep-blue hover:bg-deep-blue-hover active:bg-deep-blue-dark text-white px-4 py-2 rounded-full transition-colors duration-200"
            >
              <span className="text-sm uppercase tracking-wider">Contact</span>
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="lg:hidden p-2 hover:bg-deep-blue/10 active:bg-deep-blue/20 rounded-full transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={`
          lg:hidden 
          fixed inset-x-0 top-20
          bg-white/90 backdrop-blur-md 
          transition-all duration-300 
          ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8 pointer-events-none"
          }
        `}
        >
          <div className="px-4 py-4 space-y-2 bg-deep-blue/[0.02]">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.subItems ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-4 py-2 text-sm uppercase tracking-wider transition-colors duration-200 hover:bg-deep-blue-light/30 hover:text-deep-blue active:text-deep-blue-dark"
                      onClick={() => setIsExpertiseOpen(!isExpertiseOpen)}
                    >
                      {link.text}
                      <ChevronDown
                        size={14}
                        className={`transform transition-transform ${
                          isExpertiseOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`space-y-1 pl-6 ${
                        isExpertiseOpen ? "block" : "hidden"
                      }`}
                    >
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm transition-colors duration-200 hover:bg-deep-blue-light/30 hover:text-deep-blue active:text-deep-blue-dark"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-sm uppercase tracking-wider transition-colors duration-200 hover:bg-deep-blue-light/30 hover:text-deep-blue active:text-deep-blue-dark"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 mt-4 text-sm uppercase tracking-wider text-center bg-deep-blue hover:bg-deep-blue-hover active:bg-deep-blue-dark text-white rounded-full transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
