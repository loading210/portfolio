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
        bg: "#06050E",
        surface: "#0C0B18",
        "surface-2": "#131121",
        border: "#1A1728",
        "border-bright": "#2A2545",
        "text-primary": "#EEE8FF",
        "text-secondary": "#6E6A96",
        "text-tertiary": "#35324A",
        accent: "#7C3AED",
        "accent-2": "#A78BFA",
        "accent-dim": "#2E1A6B",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "blink": "blink 1s step-end infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
    },
  },
  plugins: [],
};
export default config;
