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
    <header>
      {/* <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-sm hover:text-gray-600">
            Accueil
          </a>
          <div className="flex gap-6">
            <a href="/actualite" className="text-sm hover:text-gray-600">
              Actualité
            </a>
            <a href="/expertise" className="text-sm hover:text-gray-600">
              Expertise
            </a>
            <a href="/a-propos" className="text-sm hover:text-gray-600">
              À propos
            </a>
            <a href="/consultation" className="text-sm hover:text-gray-600">
              Consultation
            </a>
            <a
              href="/contact"
              className="text-sm bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800"
            >
              Contact
            </a>
          </div>
        </div>
      </nav> */}
    </header>
  );
}
