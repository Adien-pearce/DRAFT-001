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
        ctos: {
          black: "#0a0a0a",
          blue: "#00b0ff",
          "blue-bright": "#00d4ff",
          yellow: "#ffd000",
          "yellow-alt": "#ffcc00",
        },
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "sans-serif"],
        mono: ["var(--font-share-tech)", "monospace"],
        body: ["var(--font-rajdhani)", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        glitch: "glitch 0.3s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
        flicker: "flicker 3s linear infinite",
        "slide-left": "slide-left 1s ease-out forwards",
        "grid-move": "grid-move 20s linear infinite",
        "arrow-bounce": "arrow-bounce 1.5s ease-in-out infinite",
        "progress-fill": "progress-fill 2s ease-out forwards",
        "hologram": "hologram 4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(2px, -2px)" },
          "60%": { transform: "translate(-1px, -1px)" },
          "80%": { transform: "translate(1px, 1px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.3" },
          "94%": { opacity: "1" },
          "96%": { opacity: "0.5" },
          "97%": { opacity: "1" },
        },
        "slide-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "grid-move": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "50px 50px" },
        },
        "arrow-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        "progress-fill": {
          "0%": { width: "0%" },
          "100%": { width: "var(--progress-width, 100%)" },
        },
        hologram: {
          "0%, 100%": { opacity: "0.85", filter: "hue-rotate(0deg)" },
          "50%": { opacity: "1", filter: "hue-rotate(10deg)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,176,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,255,0.03) 1px, transparent 1px)",
        "x-pattern":
          "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 11px), repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 11px)",
      },
    },
  },
  plugins: [],
};

export default config;
