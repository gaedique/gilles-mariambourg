import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3, Lato } from "next/font/google";

import "@/src/styles/globals.css";

import { cn } from "@/src/cn";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-heading",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-body",
});

const accentFont = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
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
    <html lang="fr" className="h-full">
      <body
        className={cn(
          headingFont.variable,
          bodyFont.variable,
          accentFont.variable,
          "min-h-full, max-w-screen-2xl, bg-gray-50, font-body"
        )}
      >
        {children}
      </body>
    </html>
  );
}
