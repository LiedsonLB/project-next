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
        'orange': '#ff8133',
        'white': '#f2f2f2',
        'purple': '#660d8c',
        'red': '#e50000',
        'brown': '#331400',
        'gray': '#252525',
        'purple-dark': '#44095d',
        'purple-light': '#eed0fb',
        'white-light': '#fcfcfc',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
export default config;
