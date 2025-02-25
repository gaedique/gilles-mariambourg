import type { Metadata } from "next";
// import { Syne, Inter, DM_Sans } from "next/font/google";
// import { Playfair_Display, Roboto, Raleway } from "next/font/google";
import { Merriweather, Montserrat, Roboto } from "next/font/google";
// import { Raleway, Lato, PT_Sans } from "next/font/google";

import "@/src/styles/globals.css";

import { cn } from "@/src/cn";

// const headingFont = Syne({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   variable: "--font-heading",
// });

// const bodyFont = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-body",
// });

// const accentFont = DM_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-accent",
// });

// const headingFont = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   variable: "--font-heading",
// });

// const bodyFont = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-body",
// });

// const accentFont = Raleway({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-accent",
// });

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

const accentFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-accent",
});

// const headingFont = Raleway({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   variable: "--font-heading",
// });

// const bodyFont = Lato({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-body",
// });

// const accentFont = PT_Sans({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-accent",
// });

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
        <div className="w-full mx-auto">{children}</div>
      </body>
    </html>
  );
}
