import type { Metadata } from "next";
import { Manrope, Nunito_Sans, Overpass } from "next/font/google";

import "@/src/styles/globals.css";
import { ScrollResetter } from "@/src/utils/ScrollResetter";

import { cn } from "@/src/utils/cn";

const headingFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
});

const accentFont = Overpass({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.dr-gilles-mariambourg.fr"
  ),
  title: {
    default: "Gilles Mariambourg - Chirurgien Orthopédique",
    template: "%s | Dr. Gilles Mariambourg",
  },
  description:
    "Chirurgie du rachis avec l'endoscopie biportale rachidienne, prothèse de hanche et du genou à Castres.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.dr-gilles-mariambourg.fr/",
    siteName: "Dr. Gilles Mariambourg - Chirurgien Orthopédique",
    images: [
      {
        url: "/images/gilles-bureau_tablet.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Gilles Mariambourg - Chirurgien Orthopédique à Castres",
      },
    ],
  },
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
          "min-h-full text-primary font-body"
        )}
      >
        <ScrollResetter />
        {/* <div className="w-full mx-auto  space-y-16 md:space-y-24 lg:space-y-32"> */}
        <div className="min-h-screen w-full mx-auto space-y-16 md:space-y-24 lg:space-y-32 relative ">
          {children}
        </div>
      </body>
    </html>
  );
}
