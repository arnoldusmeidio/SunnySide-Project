import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1025px",
      },
      colors: {
        // Primary
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        "desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "moderate-cyan": "hsl(168, 34%, 41%)",
        "light-desaturated-cyan": "hsl(167, 44%, 70%)",

        // Neutral
        "desaturated-blue": "hsl(212, 27%, 19%)",
        "dark-grayish-blue": "hsl(213, 9%, 39%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        "18px": "18px",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
