import Link from "next/link";
import { useEffect, useState, ComponentType, ElementType } from "react";
import { CtaButtonProps, ComponentWithDisplayName, IconProps } from "./types";

// Check if the icon is a Phone icon by its name
const isPhoneIcon = (
  Icon: ComponentType<IconProps> | ElementType | null | undefined
): boolean => {
  return Boolean(
    Icon && (Icon as ComponentWithDisplayName).displayName === "Phone"
  );
};

const CtaButton = ({
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
}: CtaButtonProps) => {
  // State to track the ringing animation
  const [isRinging, setIsRinging] = useState(false);

  // For phone icon, periodically trigger the ringing animation
  useEffect(() => {
    if (isPhoneIcon(Icon)) {
      // Start ringing animation cycle
      const startRinging = () => {
        setIsRinging(true);

        // Stop ringing after 1 second
        setTimeout(() => {
          setIsRinging(false);
        }, 1000);
      };

      // Initial ring after a short delay
      const initialTimer = setTimeout(() => {
        startRinging();
      }, 1000);

      // Set up interval for periodic ringing
      const intervalTimer = setInterval(() => {
        startRinging();
      }, 5000); // Ring every 5 seconds

      return () => {
        clearTimeout(initialTimer);
        clearInterval(intervalTimer);
      };
    }
  }, [Icon]);

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
    font-accent
    tracking-wider
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
    primary: `
      bg-brand-primary-600
      text-white
      relative
      overflow-hidden
      ${disabled ? "" : "hover:bg-brand-primary-700"}
    `,
  };

  const renderContent = () => {
    // Define icon background color based on variant
    let iconBgColor = "";

    if (isPhoneIcon(Icon)) {
      if (variant === "light") {
        iconBgColor = "bg-brand-bay-of-many-200"; // Match border color for light variant
      } else if (variant === "dark") {
        iconBgColor = "bg-brand-bay-of-many-700"; // Slightly darker for dark variant
      } else if (variant === "primary") {
        iconBgColor = "bg-brand-primary-700"; // Slightly darker for primary variant
      }
    }

    const iconElement = Icon && (
      <div
        className={`
        ${isPhoneIcon(Icon) && isRinging ? "animate-phone-ringing" : ""}
        transition-all duration-300
        ${isPhoneIcon(Icon) ? "relative" : ""}
      `}
      >
        {/* Optional background circle for phone icon */}
        {isPhoneIcon(Icon) && (
          <span
            className={`
            absolute inset-0 -m-1 rounded-full ${iconBgColor} opacity-10
            ${isRinging ? "opacity-20" : ""}
            transition-opacity duration-300
          `}
          ></span>
        )}

        <Icon
          size={size === "lg" ? 24 : size === "md" ? 20 : 18}
          className={`
            ${
              variant === "light"
                ? "text-brand-bay-of-many-600"
                : "text-current"
            }
            transition-transform
            relative z-10
          `}
        />
      </div>
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

export default CtaButton;
