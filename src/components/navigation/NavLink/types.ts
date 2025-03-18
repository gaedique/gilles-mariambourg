export interface NavLinkProps {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  role?: string;
  tabIndex?: number;
  "data-index"?: number;
  itemProp?: string;
}
