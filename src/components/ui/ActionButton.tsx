import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export interface ActionButtonProps {
  href: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  variant?: "light" | "dark";
  fullWidth?: boolean;
  external?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const ActionButton: FC<ActionButtonProps> = ({
  href,
  icon: Icon,
  children,
  variant = "dark",
  fullWidth = false,
  external = false,
  className = "",
  size = "md",
  iconPosition = "left",
  disabled = false,
  onClick,
}) => {
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 sm:px-8 sm:py-3 text-base",
    lg: "px-6 py-3 sm:px-10 sm:py-4 text-lg",
  };

  const baseClasses = `
    ${sizes[size]}
    rounded-xl
    active:scale-95
    transform
    transition-all
    flex
    items-center
    justify-center
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

  const widthClasses = fullWidth ? "w-full" : "w-auto";

  const variants = {
    light: `
      bg-white/80
      backdrop-blur-sm
      border
      border-brand-bay-of-many-200
      ${
        disabled
          ? ""
          : "hover:bg-brand-bay-of-many-50 hover:border-brand-bay-of-many-300"
      }
    `,
    dark: `
      bg-brand-bay-of-many-600
      text-white
      relative
      overflow-hidden
      ${disabled ? "" : "hover:bg-brand-bay-of-many-700"}
    `,
  };

  const renderContent = () => {
    const iconElement = Icon && (
      <Icon
        size={size === "lg" ? 24 : size === "md" ? 20 : 18}
        className={`
          ${variant === "light" ? "text-brand-bay-of-many-600" : "text-current"}
          group-hover:rotate-12
          transition-transform
        `}
      />
    );

    return (
      <div className="flex items-center gap-2">
        {Icon && iconPosition === "left" && iconElement}
        <span
          className={`
            ${variant === "light" ? "text-brand-bay-of-many-800" : ""}
            font-medium
          `}
        >
          {children}
        </span>
        {Icon && iconPosition === "right" && iconElement}
      </div>
    );
  };

  const combinedClasses = `${baseClasses} ${widthClasses} ${variants[variant]} group ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={combinedClasses}
      onClick={onClick}
      {...(disabled ? { "aria-disabled": true, tabIndex: -1 } : {})}
    >
      {renderContent()}
    </Link>
  );
};

export default ActionButton;
