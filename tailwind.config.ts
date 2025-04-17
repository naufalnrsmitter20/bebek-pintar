import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#d1e5ff",
          100: "#aecffd",
          200: "#82b6ff",
          300: "#579bfe",
          400: "#3787ff",
          500: "#0f6fff",
          600: "#0367fd",
          700: "#0267ff",
          800: "#005ee6",
          900: "#002a66",
          950: "#001533",
        },
        yellow: {
          50: "#fffce8",
          100: "#fff9c2",
          200: "#fff085",
          300: "#ffdf20",
          400: "#fdc700",
          500: "#f0b100",
          600: "#d08700",
          700: "#a65f00",
          800: "#a65f00",
          900: "#894b00",
          950: "#432004",
        },
        gray: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#9f9fa9",
          500: "#71717b",
          600: "#52525c",
          700: "#3f3f47",
          800: "#27272a",
          900: "#181818",
          950: "#09090b",
        },
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
};

export default config;
