import type { Config } from "tailwindcss";

const config: Config = {
  // hover-ефекти лише на пристроях з мишкою — на телефоні картки не «залипають» після тапу
  future: { hoverOnlyWhenSupported: true },
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F19",
        taxi: { DEFAULT: "#FFC83D", soft: "#FFD86E", deep: "#F5A623" },
        violet: { glow: "#7C5CFF" },
        azure: { glow: "#3B82F6" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(255, 200, 61, 0.55)",
        card: "0 20px 50px -20px rgba(0, 0, 0, 0.6)",
      },
      keyframes: {
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(255,200,61,0.55)" },
          "70%": { boxShadow: "0 0 0 16px rgba(255,200,61,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255,200,61,0)" },
        },
        roadDash: {
          from: { strokeDashoffset: "0" },
          to: { strokeDashoffset: "-120" },
        },
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(4%,-3%,0) scale(1.08)" },
        },
      },
      animation: {
        "pulse-ring": "pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        "road-dash": "roadDash 1.4s linear infinite",
        drift: "drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
