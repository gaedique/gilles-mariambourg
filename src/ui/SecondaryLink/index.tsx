import Link from "next/link";
import { SecondaryLinkProps } from "./types";

// Video icon component - replace with your actual import
import { Video } from "lucide-react";

export const SecondaryLink = ({
  href,
  children,
  ariaLabel,
  title,
  rel,
  variant = "line",
  iconType = "video",
  className = "",
}: SecondaryLinkProps) => {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-xs font-accent uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all ${className}`}
      aria-label={ariaLabel}
      title={title}
      rel={rel}
    >
      <span>{children}</span>

      {variant === "line" && (
        <span
          className="h-px w-6 sm:w-8 bg-brand-bay-of-many-600 transform origin-left scale-x-100 transition-transform duration-300 ease-out group-hover:scale-x-150"
          aria-hidden="true"
        />
      )}

      {variant === "icon" && iconType === "video" && (
        <Video
          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
          aria-hidden="true"
        />
      )}

      {/* Add more icon options as needed */}
    </Link>
  );
};
