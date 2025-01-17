import Link from "next/link";
import clsx from "clsx";

const navLinkAnimation = clsx(
  "relative inline-block text-black no-underline transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-blue-400 hover:scale-105",
  "after:content-[''] after:absolute after:w-full after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-blue-400 after:scale-x-0 after:translate-y-[1px] after:origin-left after:transition-all after:duration-[400ms] after:ease-[cubic-bezier(0.4,0,0.2,1)] hover:after:scale-x-100 hover:after:bg-indigo-500"
);

export default function Header() {
  return (
    <header className="fixed w-full flex justify-between items-center py-9 px-14 mx-auto bg-transparent z-50">
      <Link href="/" className="font-heading text-2xl font-bold">
        Dr.Mariambourg
      </Link>
      <nav>
        <ul
          className="flex space-x-4 font-accent bg-white rounded-lg py-6 px-4
        "
        >
          <li className="pl-4">
            <Link href="/" className={navLinkAnimation}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="surgery" className={navLinkAnimation}>
              Chirurgie
            </Link>
          </li>
          <li>
            <Link href="/about" className={navLinkAnimation}>
              À propos
            </Link>
          </li>
          <li>
            <Link href="/news" className={navLinkAnimation}>
              Actualité
            </Link>
          </li>
          <li>
            <Link href="consultation" className={navLinkAnimation}>
              Consultation
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="py-4 px-6 bg-blue-300 rounded-lg hover:bg-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
