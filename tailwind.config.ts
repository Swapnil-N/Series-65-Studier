import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  // Combine class-based dark mode with system preference so both work.
  darkMode: ["variant", ["@media (prefers-color-scheme: dark) { &:not(.light *) }", "&:is(.dark *)"]],
  theme: {
    extend: {
      colors: {
        ink: {
          bg: "#0a0a0a",
          surface: "#141414",
          text: "#f5f5f5",
          muted: "#a3a3a3",
        },
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
      },
    },
  },
  plugins: [],
};

export default config;
