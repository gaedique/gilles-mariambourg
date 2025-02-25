import Link from "next/link";

const BottomBar = () => (
  <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-brand-bay-of-many-800">
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm text-brand-bay-of-many-300">
      <p className="text-center sm:text-left">
        © {new Date().getFullYear()} Dr. Gilles Mariambourg. Tous droits
        réservés.
      </p>

      <div className="flex gap-4 sm:gap-6">
        <Link
          href="/mentions-legales"
          className="hover:text-white transition-colors"
        >
          Mentions légales
        </Link>
        <Link
          href="/politique-de-confidentialite"
          className="hover:text-white transition-colors"
        >
          Politique de confidentialité
        </Link>
      </div>

      <Link
        href="https://gaedique.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-brand-bay-of-many-300 hover:text-white transition-colors group"
      >
        Made with{" "}
        <span className="inline-block group-hover:animate-bounce">❤️</span> by{" "}
        <span className="text-brand-bay-of-many-200 group-hover:text-white">
          Gaëdique
        </span>
      </Link>
    </div>
  </div>
);

export default BottomBar;
