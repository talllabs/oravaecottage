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
        ocean: "#1E90FF",
        navy: "#1a2744",
        skyblue: "#EBF5FF",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        raleway: ["'Raleway'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
