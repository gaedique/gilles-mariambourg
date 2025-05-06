import { ReactNode } from "react";

export type SecondaryLinkProps = {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
  title?: string;
  rel?: string;
  variant?: "line" | "icon";
  iconType?: "video" | "arrow"; // can be expanded for other icons
  className?: string;
};
