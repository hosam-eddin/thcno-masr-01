/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#e6e6e6",
        pri: "#0b4a72",
        whitesmoke: {
          100: "#f3f3f3",
          200: "#ececec",
        },
        darkorange: "#e98316",
        text: "#3f3f3f",
        darkgray: "#979797",
        chocolate: "#cf6900",
        gray: "#808080",
      },
      spacing: {},
      fontFamily: {
        rubik: "Rubik",
        lato: "Lato",
      },
      backgroundImage: {
        "hero-bg1": "url('/public/home-bg.7a2450482751d3c226c5.jpg')",
        "hero-bg2": "url('/public/rectangle-442@2x.png')",
      },
    },
    fontSize: {
      "4xl": "23px",
      lg: "18px",
      "9xl": "28px",
      "3xl": "22px",
      xl: "20px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
