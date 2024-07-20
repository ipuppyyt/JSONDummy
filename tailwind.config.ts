import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'garet-regular': ['var(--garetbook)', 'sans-serif'],
        'garet-medium': ['var(--garetmedium)', 'sans-serif'],
        'garet-book': ['var(--garetbook)', 'sans-serif'],
        'garet-bold': ['var(--garetbold)', 'sans-serif'],
        'garet-heavy': ['var(--garetheavy)', 'sans-serif'],
        'cygrotesk': ['var(--cygrotesk)', 'sans-serif'],
      },
      colors: {
        primary: '#109121'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
