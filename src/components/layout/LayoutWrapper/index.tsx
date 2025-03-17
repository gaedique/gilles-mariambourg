import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="flex flex-1 flex-col z-10 bg-white"
        id="main-content"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
