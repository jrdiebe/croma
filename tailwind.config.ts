import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f5f5f5",
        croma: {
          dark: "#0a0a0a",
          black: "#000000",
          card: "rgba(255, 255, 255, 0.03)",
          border: "rgba(255, 255, 255, 0.08)",
          // Stands & Institucional
          green: {
            DEFAULT: "#1b5a2d",
            primary: "#1b5a2d",
            light: "#5a873c",
            dark: "#123c1e",
            glow: "rgba(90, 135, 60, 0.15)",
          },
          // Comercial
          orange: {
            DEFAULT: "#e63812",
            primary: "#e63812",
            vibrant: "#f47820",
            dark: "#a5260b",
            glow: "rgba(244, 120, 32, 0.15)",
          },
        },
      },
      fontFamily: {
        obviously: ["Obviously", "sans-serif"],
        "obviously-wide": ["Obviously-Wide", "Obviously", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "radial-green":
          "radial-gradient(circle at top center, rgba(90, 135, 60, 0.18) 0%, rgba(10, 10, 10, 0) 70%)",
        "radial-orange":
          "radial-gradient(circle at top center, rgba(244, 120, 32, 0.18) 0%, rgba(10, 10, 10, 0) 70%)",
        "radial-split":
          "radial-gradient(ellipse at 20% 40%, rgba(90, 135, 60, 0.14) 0%, transparent 50%), radial-gradient(ellipse at 80% 40%, rgba(244, 120, 32, 0.14) 0%, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
