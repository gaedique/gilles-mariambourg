"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollResetter() {
  const pathname = usePathname();

  useEffect(() => {
    // Vérifier si nous sommes sur la page d'accueil
    if (pathname === "/") {
      // Vérifier si la page a été rechargée
      // Méthode 1: Utilisation de window.performance.navigation (obsolète mais encore supportée)
      const navigationTypeSupported =
        typeof window.performance.navigation !== "undefined";

      // Méthode 2: Utilisation de l'API moderne (getEntriesByType)
      let reloadDetectedByEntries = false;
      if (typeof window.performance.getEntriesByType === "function") {
        const navEntries = window.performance.getEntriesByType(
          "navigation"
        ) as PerformanceNavigationTiming[];
        reloadDetectedByEntries = navEntries.some(
          (entry) => entry.type === "reload"
        );
      }

      // Combiner les deux méthodes
      const pageAccessedByReload =
        (navigationTypeSupported && window.performance.navigation.type === 1) ||
        reloadDetectedByEntries;

      // Vérifier si nous devons défiler vers le haut après un rechargement
      // avec ancre
      const scrollToTop =
        sessionStorage.getItem("scrollToTop") === "true" ||
        (pageAccessedByReload && window.location.hash);

      if (scrollToTop) {
        // Nettoyer après usage
        sessionStorage.removeItem("scrollToTop");

        // Défiler vers le haut
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return null;
}
