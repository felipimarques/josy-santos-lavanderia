import type { Config } from "tailwindcss";

/**
 * Tokens derivados de design/design-system.json (Josy Santos — Fresh Turquoise).
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        surface: "#F2F7F9",
        ink: "#1A2B4C",
        muted: "#5B6B7C",
        aqua: {
          DEFAULT: "#007D9C",
          bright: "#00AECF",
          dark: "#067A96",
        },
        navy: "#0E4A67",
        line: "rgba(26,43,76,.10)",
      },
      fontFamily: {
        display: ["Nunito", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1140px",
      },
      borderRadius: {
        card: "16px",
        btn: "12px",
        tag: "14px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        rise: "rise .45s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
