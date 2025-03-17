import { MouseEventHandler, ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export type CtaButtonVariant = "light" | "dark" | "primary";
export type CtaButtonSize = "sm" | "md" | "lg";
export type CtaButtonIconPosition = "left" | "right";

export interface CtaButtonProps {
  href: string;
  icon?: LucideIcon;
  children: ReactNode;
  variant?: CtaButtonVariant;
  fullWidth?: boolean;
  external?: boolean;
  className?: string;
  size?: CtaButtonSize;
  iconPosition?: CtaButtonIconPosition;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface ComponentWithDisplayName {
  displayName?: string;
}

export interface IconProps {
  size?: number;
  className?: string;
}
