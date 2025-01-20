import { LucideIcon } from "lucide-react";
import React from "react";

interface ActionLinkProps {
  href: string;
  icon?: LucideIcon;
  text: string;
  isExternal?: boolean;
  direction?: "left" | "right";
  ariaProps?: React.AriaAttributes;
}

export function ActionLink({
  href,
  icon: IconComponent,
  text,
  isExternal = false,
  ariaProps,
}: ActionLinkProps) {
  const baseClasses =
    "group relative flex items-center justify-center px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300";
  const bgColor =
    "backdrop-blur-sm bg-deep-blue/10 hover:bg-deep-blue/20 active:bg-deep-blue/30";
  const textColor = "text-deep-blue hover:text-deep-blue-dark";

  return (
    <a
      href={href}
      className={`${baseClasses} ${bgColor} ${textColor}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...ariaProps}
    >
      {IconComponent && (
        <IconComponent
          className="mr-3 group-hover:scale-110 transition-transform duration-300"
          size={20}
        />
      )}
      <span className="text-sm tracking-wider">{text}</span>
    </a>
  );
}
