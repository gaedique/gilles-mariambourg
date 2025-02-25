import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const NavLink = ({
  href,
  className = "",
  children,
  onClick,
}: NavLinkProps) => (
  <Link
    href={href}
    className={`text-gray-900 hover:text-brand-bay-of-many-600 transition-colors ${className}`}
    onClick={onClick}
  >
    {children}
  </Link>
);
