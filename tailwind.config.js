/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color_black: "var(--black)",
        color_white: "var(--white)",

        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        background_2: "var(--background_2)",
        primary_2: "var(--primary_2)",
        secondary_2: "var(--secondary_2)",
      },
      fontFamily: {
        cormorantGaramond: ["CormorantGaramond", "sans-serif"],
        azahra: ["Azahra", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #a1676b, #b78b99, #cab2c2, #e1d9e3, #ffffff)",
      },
    },
  },
  plugins: [],
};
