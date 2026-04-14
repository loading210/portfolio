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
        bg: "#0A0A0B",
        surface: "#111115",
        "surface-2": "#18181D",
        border: "#1F1F25",
        "border-bright": "#2E2E38",
        "text-primary": "#F0EDE8",
        "text-secondary": "#8A8A90",
        accent: "#3B82F6",
        "accent-dim": "#1E3A5F",
        "accent-muted": "#60A5FA",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        "blink": "blink 1s step-end infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "badge-glow": "badgeGlow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        badgeGlow: {
          "0%": { boxShadow: "0 0 4px rgba(59,130,246,0.3)" },
          "100%": { boxShadow: "0 0 12px rgba(59,130,246,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
