import Link from "next/link";

export const Logo = () => (
  <Link href="/" className="flex items-center gap-2 sm:gap-4 group">
    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-bay-of-many-100 to-brand-bay-of-many-200 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
      <span className="font-serif text-sm sm:text-lg tracking-wider text-brand-bay-of-many-950">
        GM
      </span>
    </div>
    <div className="hidden sm:block">
      <h1 className="text-lg sm:text-2xl font-heading text-gray-900">
        Dr.Mariambourg
      </h1>
      <p className="text-xs text-gray-600 font-light tracking-wider uppercase">
        Rachis | Hanche | Genou
      </p>
    </div>
  </Link>
);
