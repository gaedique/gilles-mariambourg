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
      },
    },
  },
  plugins: [],
} satisfies Config;
