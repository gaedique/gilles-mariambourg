import { NavLink } from "./NavLink";

interface DropdownMenuProps {
  items: Array<{ label: string; path: string }>;
  onItemClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const DropdownMenu = ({
  items,
  onItemClick,
  onMouseEnter,
  onMouseLeave,
}: DropdownMenuProps) => (
  <div
    className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {items.map((item) => (
      <NavLink
        key={item.label}
        href={item.path}
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
        onClick={onItemClick}
      >
        {item.label}
      </NavLink>
    ))}
  </div>
);
