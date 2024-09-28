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
        amber: {
          700: "#ff4f00"
        },
        slate: {
          100: "#ebe9df"
        },
        purple: {
          700: "#3d4592"
        }

      },
    },
  },
  plugins: [],
};
export default config;
