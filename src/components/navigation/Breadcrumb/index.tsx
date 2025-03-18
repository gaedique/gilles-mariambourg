// src/components/navigation/Breadcrumb.tsx
"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/src/data/siteData";

interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb = ({ className = "" }: BreadcrumbProps) => {
  // Get navigation items from siteData
  const navItems = siteData.navigation.main;

  // Find current navigation item
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop() || "";
  const currentNavItem = navItems.find((item) => item.path === currentPath);

  return (
    <div className={`bg-slate-50 border-b border-slate-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-2">
        <nav className="flex items-center text-sm text-slate-500 font-body">
          <Link
            href="/"
            className="flex items-center hover:text-brand-bay-of-many-600 transition-colors"
          >
            <Home size={14} className="mr-1" />
            <span>Accueil</span>
          </Link>
          <ChevronRight size={14} className="mx-2 text-slate-300" />
          <span className="text-slate-800 font-medium">
            {currentNavItem?.label || pathname.split("/").pop()}
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
