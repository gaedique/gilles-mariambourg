import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        accent: ["var(--font-accent)"],
        heading: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: "#0056A4",
          "primary-hover": "#0068C5",
          "primary-light": "#E5F0F9",
          "primary-dark": "#004483",
          accent: {
            1: "#6B8FC0",
            2: "#9B7FE6",
            3: "#5B98B7",
            4: "#5BA894",
          },
        },
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        // scroll animation
        pulse: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        // slideUp
        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(1rem)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        zoom: "zoomIn 5s ease-in-out infinite",
        //scroll animation
        pulse: "pulse 1.5s infinite",
        //slideUp
        "slide-up": "slideUp 0.7s ease forwards",
      },
      // New additions for the button
      transitionTimingFunction: {
        custom: "cubic-bezier(0.65, 0, 0.076, 1)",
      },
      transitionDuration: {
        "450": "450ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
