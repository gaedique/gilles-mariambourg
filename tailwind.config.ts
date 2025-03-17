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
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        triangleStroke: {
          "0%": { strokeDashoffset: "90" },
          "100%": { strokeDashoffset: "0" },
        },
        smallScale: {
          "100%": { transform: "scale(1)" },
          "0%": { transform: "scale(1.5)" },
        },
        "pulse-subtle": {
          "0%, 100%": { transform: "scale(1) translate(25%, 0)" },
          "50%": { transform: "scale(1.02) translate(25%, 0)" },
        },
        "pulse-subtle-delayed": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.015)" },
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
        "slide-up-fade": "slide-up-fade 0.5s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "pulse-subtle": "pulse-subtle 6s ease-in-out infinite",
        "pulse-subtle-delayed":
          "pulse-subtle-delayed 7s ease-in-out 1.5s infinite",
        "phone-ringing": "phone-ring 0.5s ease-in-out 2",
        heartbeat: "heartbeat 2s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [],
} satisfies Config;
