import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5E6D3",
        secondary: "#8B7355",
        accent: "#D4A574",
        background: "#FFFBF5",
      },
    },
  },
  plugins: [],
};
export default config;
