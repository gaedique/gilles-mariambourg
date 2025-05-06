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
      // Font families - use CSS variables defined in globals.css
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        accent: ["var(--font-accent)"],
      },
      // Brand and UI colors
      colors: {
        brand: {
          "bay-of-many": {
            "50": "#f2f5fc",
            "100": "#e2e9f7",
            "200": "#ccd8f1",
            "300": "#a9bfe7",
            "400": "#819ed9",
            "500": "#637fce",
            "600": "#4f66c1",
            "700": "#4554b0",
            "800": "#384185",
            "900": "#353e73",
            "950": "#242847",
          },
        },
        primary: "#0f172a", // slate-900
        secondary: "#334155", // slate-700
        muted: "#64748b", // slate-500
      },
      // Animation keyframes
      keyframes: {
        triangleStroke: {
          "0%": { strokeDashoffset: "90" },
          "100%": { strokeDashoffset: "0" },
        },
        smallScale: {
          "100%": { transform: "scale(1)" },
          "0%": { transform: "scale(1.5)" },
        },
        "phone-ring": {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(10deg)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      // Animation utilities
      animation: {
        "phone-ringing": "phone-ring 0.5s ease-in-out 2",
        heartbeat: "heartbeat 2s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [],
} satisfies Config;
