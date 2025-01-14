import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-6 px-14 mx-auto text-gray-500 text-sm ">
      <p className="text-gray-500 text-sm">
        © 2021 Dr. Mariambourg. Tous droits réservés.
      </p>
      <Link href="/">Plan du site</Link>
      <Link href="/">Mentions Légales</Link>
      <p>Crée par Gaëdique</p>
    </footer>
  );
}
