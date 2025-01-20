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
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        accent: ["var(--font-accent)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-blue": "#bg-blue-400",
        "hero-top": "#F0F6FF",
        "hero-bottom": "#C5D5EA",
        "deep-blue": "#0056A4",
        "deep-blue-hover": "#0068C5",
        "deep-blue-light": "#E5F0F9",
        "deep-blue-dark": "#004483",
        "vert-bleu": "#00727D",
        "bleu-roi": "#1034A6",
      },

      keyframes: {
        "pulse-glow": {
          "0%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.15)" },
          "100%": { opacity: "0.6", transform: "scale(1)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s infinite ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
