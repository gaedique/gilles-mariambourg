// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="flex justify-between items-center py-6 px-14 text-gray-500 text-sm ">
//       <p className="text-gray-500 text-sm">
//         © 2021 Dr. Mariambourg. Tous droits réservés.
//       </p>
//       <Link href="/">Plan du site</Link>
//       <Link href="/">Mentions Légales</Link>
//       <p>Crée par Gaëdique</p>
//     </footer>
//   );
// }

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Clock, MapPin } from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-brand-bay-of-many-950 text-white transform opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Contact & CTA Section */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-lg font-semibold">Dr. Gilles Mariambourg</h3>
            <p className="text-brand-bay-of-many-100 text-sm">
              Chirurgien orthopédique
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <a
                href="https://www.doctolib.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-bay-of-many-600 hover:bg-brand-bay-of-many-500 rounded-xl transition-colors text-sm font-medium"
              >
                Prendre rendez-vous sur Doctolib
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-sm font-medium gap-2"
              >
                <Phone size={16} />
                05 63 71 88 04
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-medium text-brand-bay-of-many-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                "Actualité",
                "A propos",
                "Expertise",
                "Consultation",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-brand-bay-of-many-100 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Horaires */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-medium text-brand-bay-of-many-200 uppercase tracking-wider">
              Horaires
            </h4>
            <div className="flex items-start gap-2 text-brand-bay-of-many-100">
              <Clock size={16} className="mt-1 flex-shrink-0" />
              <div className="text-sm">
                <p>Lundi - Vendredi</p>
                <p>8:00 - 17:00</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-medium text-brand-bay-of-many-200 uppercase tracking-wider">
              Adresse
            </h4>
            <div className="flex items-start gap-2 text-brand-bay-of-many-100">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <div className="text-sm">
                <p>Polyclinique du Sidobre</p>
                <p>Chemin de Saint Hippolyte</p>
                <p>81100 CASTRES</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        {/* Updated bottom bar with three sections */}
        <div className="mt-16 pt-8 border-t border-brand-bay-of-many-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-bay-of-many-300">
            <p>
              © {new Date().getFullYear()} Dr. Gilles Mariambourg. Tous droits
              réservés.
            </p>

            {/* Legal links */}
            <div className="flex gap-6">
              <Link
                href="/mentions-legales"
                className="hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>

            {/* Signature with heart animation */}
            <a
              href="https://gaedique.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-bay-of-many-300 hover:text-white transition-colors group"
            >
              Made with{" "}
              <span className="inline-block group-hover:animate-bounce">
                ❤️
              </span>{" "}
              by{" "}
              <span className="text-brand-bay-of-many-200 group-hover:text-white">
                Gaëdique
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
