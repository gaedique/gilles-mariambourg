import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Définir le type des props
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
