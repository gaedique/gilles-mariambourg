import { forwardRef } from "react";
import { NavLink } from "../NavLink";
import { DropdownMenuProps } from "./types";

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ items, onItemClick, onMouseEnter, onMouseLeave, id }, ref) => (
    <div
      ref={ref}
      id={id}
      className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      {items.map((item, index) => (
        <NavLink
          key={item.label}
          href={item.path}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          onClick={onItemClick}
          role="menuitem"
          tabIndex={0}
          data-index={index}
        >
          <span itemProp="name">{item.label}</span>
        </NavLink>
      ))}
    </div>
  )
);

// Add display name for better debugging
DropdownMenu.displayName = "DropdownMenu";
