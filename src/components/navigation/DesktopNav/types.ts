import { RefObject } from "react";

export interface DesktopNavProps {
  isExpertiseDropdownOpen: boolean;
  setIsExpertiseDropdownOpen: (isOpen: boolean) => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
  dropdownRef: RefObject<HTMLDivElement>;
  triggerRef: RefObject<HTMLButtonElement>;
}
