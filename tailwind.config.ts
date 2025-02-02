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
        heading: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
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
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "blob-slow": {
          "0%, 100%": {
            transform: "translate(100%, -100%) rotate(0deg)",
          },
          "50%": {
            transform: "translate(-100%, 100%) rotate(180deg)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        blob: "blob 7s infinite",
        "blob-slow": "blob-slow 7s infinite",
        "blob-delay": "blob 7s infinite 2s",
        "blob-delay-2": "blob 7s infinite 4s",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "slide-up-fade": "slide-up-fade 0.5s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;

// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         // heading: ["var(--font-heading)"],
//         body: ["var(--font-body)"],
//         accent: ["var(--font-accent)"],
//         heading: ["Playfair Display", "serif"],
//         sans: ["Inter", "sans-serif"],
//       },
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         brand: {
//           "bay-of-many": {
//             "50": "#f2f5fc",
//             "100": "#e2e9f7",
//             "200": "#ccd8f1",
//             "300": "#a9bfe7",
//             "400": "#819ed9",
//             "500": "#637fce",
//             "600": "#4f66c1",
//             "700": "#4554b0",
//             "800": "#384185",
//             "900": "#353e73",
//             "950": "#242847",
//           },
//         },
//       },
//       keyframes: {
//         // new animation
//         fadeInUp: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(20px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         blob: {
//           "0%": {
//             transform: "translate(0, 0) scale(1)",
//           },
//           "33%": {
//             transform: "translate(30px, -50px) scale(1.1)",
//           },
//           "66%": {
//             transform: "translate(-20px, 20px) scale(0.9)",
//           },
//           "100%": {
//             transform: "translate(0px, 0px) scale(1)",
//           },
//         },
//         gradientDarken: {
//           "0%": {
//             opacity: "0",
//           },
//           "100%": {
//             opacity: "1",
//           },
//         },
//         // end new
//         zoomIn: {
//           "0%": { transform: "scale(1)" },
//           "100%": { transform: "scale(1.05)" },
//         },
//         // scroll animation
//         pulse: {
//           "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
//           "50%": { opacity: "1", transform: "scale(1.2)" },
//         },
//         // slideUp
//         slideUp: {
//           from: {
//             opacity: "0",
//             transform: "translateY(1rem)",
//           },
//           to: {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         // Hero/news Transition
//         float: {
//           "0%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-10px)" },
//           "100%": { transform: "translateY(0px)" },
//         },
//       },
//       animation: {
//         zoom: "zoomIn 5s ease-in-out infinite",
//         //scroll animation
//         pulse: "pulse 1.5s infinite",
//         //slideUp
//         "slide-up": "slideUp 0.7s ease forwards",
//         // Hero/news Transition
//         float: "float 3s ease-in-out infinite",
//         // New Animation
//         "fade-in-up": "fadeInUp 0.8s ease-out forwards",
//         "fade-in-up-delay": "fadeInUp 0.8s ease-out 0.2s forwards",
//         blob: "blob 7s infinite",
//         "gradient-darken": "gradientDarken 0.5s ease-out forwards",
//       },
//       // New additions for the button
//       transitionTimingFunction: {
//         custom: "cubic-bezier(0.65, 0, 0.076, 1)",
//       },
//       transitionDuration: {
//         "450": "450ms",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;
