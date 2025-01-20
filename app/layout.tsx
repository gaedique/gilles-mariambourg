import type { Metadata } from "next";
import { Syne, Inter, DM_Sans } from "next/font/google";

import "@/src/styles/globals.css";

import { cn } from "@/src/cn";

const headingFont = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const accentFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "Gilles Mariambourg - Chirurgien Orthopédique",
  description:
    "Chirurgie du rachis avec l'endoscopie biportale rachidienne, prothèse de hanche et du genou à Castres.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full scroll-smooth">
      <body
        className={cn(
          headingFont.variable,
          bodyFont.variable,
          accentFont.variable,
          "min-h-full text-gray-900 font-body"
        )}
      >
        {/* <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden"> */}
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}
