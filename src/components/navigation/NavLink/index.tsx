"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { NavLinkProps } from "./types";

export const NavLink = ({
  href,
  className = "",
  children,
  onClick,
}: NavLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // Vérifier si c'est un lien d'ancrage
  const isAnchorLink = href.startsWith("#") || href.includes("/#");

  // Effet pour réinitialiser le défilement lors du chargement de la page d'accueil
  useEffect(() => {
    // Si nous sommes sur la page d'accueil sans ancre, défiler vers le haut
    if (pathname === "/" && !window.location.hash) {
      window.scrollTo(0, 0);
    }

    // Ajouter un gestionnaire pour l'événement popstate (navigation dans l'historique)
    const handlePopstate = () => {
      if (window.location.pathname === "/" && !window.location.hash) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [pathname]);

  // Gérer le clic sur le lien
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Si c'est le lien d'accueil exact (sans ancre)
      if (href === "/") {
        e.preventDefault();

        // Appeler onClick si fourni (pour fermer le menu)
        if (onClick) onClick();

        // Naviguer vers l'accueil et forcer le défilement vers le haut
        router.push("/");

        // Utiliser requestAnimationFrame pour s'assurer que ça se produit après la navigation
        requestAnimationFrame(() => {
          window.scrollTo({
            top: 0,
            behavior: "auto",
          });
        });

        return;
      }

      // Pour les liens d'ancrage
      if (isAnchorLink) {
        e.preventDefault();

        // Extraire l'ID de l'ancre
        const anchorId = href.includes("#")
          ? href.split("#")[1]
          : href.substring(1);

        // Si nous sommes déjà sur la page d'accueil
        if (pathname === "/") {
          // Appeler onClick (pour fermer le menu)
          if (onClick) onClick();

          // Faire défiler vers l'ancre
          const targetElement = document.getElementById(anchorId);
          if (targetElement) {
            setTimeout(() => {
              targetElement.scrollIntoView({ behavior: "smooth" });
              // Mettre à jour l'URL sans recharger
              window.history.pushState(null, "", `/#${anchorId}`);
            }, 100);
          }
        } else {
          // Si nous ne sommes pas sur la page d'accueil, naviguer vers l'accueil + ancre
          if (onClick) onClick();

          // Naviguer programmatiquement
          window.location.href = `/#${anchorId}`;
        }
      } else {
        // Pour les liens normaux, juste appeler onClick
        if (onClick) onClick();
      }
    },
    [href, isAnchorLink, onClick, pathname, router]
  );

  // Utiliser une balise <a> pour les liens d'ancrage ou la page d'accueil
  if (isAnchorLink || href === "/") {
    return (
      <a
        href={href}
        className={`text-gray-900 hover:text-brand-bay-of-many-600 transition-colors ${className}`}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  // Utiliser Link pour les liens normaux
  return (
    <Link
      href={href}
      className={`text-gray-900 hover:text-brand-bay-of-many-600 transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
