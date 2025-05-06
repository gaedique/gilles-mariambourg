import Link from "next/link";
import { useEffect, useState } from "react";
import { NavLinkProps } from "./types";

export const NavLink = ({
  href,
  className = "",
  children,
  onClick,
}: NavLinkProps) => {
  // State to track if we're on the client side
  const [isMounted, setIsMounted] = useState(false);

  // Run once after component mounts (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check if it's an anchor link (starts with # or contains /#)
  const isAnchorLink = href.startsWith("#") || href.includes("/#");

  // For anchor links
  if (isAnchorLink) {
    // Extract the anchor ID
    const anchorId = href.includes("#")
      ? href.split("#")[1]
      : href.substring(1);

    // Determine if we're on the home page (only after mounting)
    const isHomePage = isMounted && window.location.pathname === "/";

    // Handle click for anchor links
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (isHomePage) {
        // If we're already on home page, scroll to the element
        const targetElement = document.getElementById(anchorId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If we're not on home page, navigate programmatically to home + anchor
        window.location.href = `/#${anchorId}`;
      }

      if (onClick) onClick();
    };

    return (
      <a
        href={`/#${anchorId}`}
        className={`text-gray-900 hover:text-brand-bay-of-many-600 transition-colors ${className}`}
        onClick={handleAnchorClick}
      >
        {children}
      </a>
    );
  }

  // For regular page links, use Next.js Link component
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
