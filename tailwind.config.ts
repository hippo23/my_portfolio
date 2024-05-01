import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slide_right: {
          "0%": {
            transform: "translateX(-100%)",
            filter: "blur(4px)",
          },
          "100%": {
            transform: "translateX(0)",
            filter: "blur(0px)",
          },
        },
        slide_up: {
          "0%": {
            transform: "translateY(-50%)",
            filter: "blur(4px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            filter: "blur(0px)",
            opacity: "1",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "slide-in-left": "slide_right 1.0s ease-in-out",
        "slide-in-up": "slide_up 1.0s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
