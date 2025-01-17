import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ActionLinkProps {
  href: string;
  icon: LucideIcon;
  text: string;
  isExternal?: boolean;
  direction?: "left" | "right";
}

export function ActionLink({
  href,
  icon: Icon,
  text,
  isExternal = false,
  direction = "left",
}: ActionLinkProps) {
  const sharedClasses =
    "group relative flex items-center hover:text-blue-600 transition-colors duration-300";

  // Classes de base pour les lignes
  const baseLineClasses = "absolute -bottom-2 h-0.5";

  // Classes spécifiques selon la direction
  const lineClasses = `${baseLineClasses} ${
    direction === "left" ? "left-0" : "right-0"
  } w-[200%] bg-slate-300`;

  const hoverLineClasses = `${baseLineClasses} ${
    direction === "left" ? "left-0 origin-left" : "right-0 origin-right"
  } w-[200%] bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`;

  const iconElement = <Icon size={16} />;
  const textElement = (
    <span
      className={`uppercase tracking-widest ${
        direction === "right" ? "mr-4" : "ml-4"
      }`}
    >
      {text}
    </span>
  );

  // Détermine l'ordre des éléments
  const content =
    direction === "left" ? (
      <>
        {iconElement}
        {textElement}
      </>
    ) : (
      <>
        {textElement}
        {iconElement}
      </>
    );

  return isExternal ? (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={sharedClasses}
    >
      {content}
      <div className={lineClasses} />
      <div className={hoverLineClasses} />
    </Link>
  ) : (
    <a href={href} className={sharedClasses}>
      {content}
      <div className={lineClasses}></div>
      <div className={hoverLineClasses}></div>
    </a>
  );
}
