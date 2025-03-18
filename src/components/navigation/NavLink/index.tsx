import Link from "next/link";
import { NavLinkProps } from "./types";

export const NavLink = ({
  href,
  className = "",
  children,
  onClick,
}: NavLinkProps) => {
  // Check if it's an anchor link (starts with # or contains /#)
  const isAnchorLink = href.startsWith("#") || href.includes("/#");

  // For anchor links, use a regular <a> tag
  if (isAnchorLink) {
    return (
      <a
        href={href}
        className={`text-gray-900 hover:text-brand-bay-of-many-600 transition-colors ${className}`}
        onClick={(e) => {
          // If it's an anchor on the current page, implement smooth scrolling
          if (window.location.pathname === "/" || href.includes("/#")) {
            e.preventDefault();
            const targetId = href.replace(/.*#/, "");
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
            if (onClick) onClick();
          }
        }}
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
