export interface DropdownMenuProps {
  items: {
    label: string;
    path: string;
  }[];
  onItemClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  id?: string;
}
