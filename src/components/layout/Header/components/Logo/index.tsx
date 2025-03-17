import Link from "next/link";

interface LogoProps {
  showText?: boolean;
}

export const Logo = ({ showText = true, ...props }: LogoProps) => (
  <Link href="/" className="flex items-center gap-2 sm:gap-4 group">
    <div
      className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-b from-blue-100 to-teal-50 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
      {...props}
    >
      <span className="font-serif text-sm sm:text-lg tracking-wider text-brand-bay-of-many-950">
        GM
      </span>
    </div>
    {showText && (
      <div className="hidden sm:block">
        <p className="text-lg sm:text-2xl font-heading text-gray-900">
          Dr.Mariambourg
        </p>
        <p className="text-xs text-gray-600 font-light tracking-wider uppercase font-accent">
          Rachis | Hanche | Genou
        </p>
      </div>
    )}
  </Link>
);
