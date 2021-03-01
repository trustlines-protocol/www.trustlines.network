module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "rich-black": {
          lightest: "#6C6C73",
          lighter: "#3E3E48",
          DEFAULT: "#12121F",
        },
        "coral-red": {
          lighter: "#FFD2BF",
          DEFAULT: "#FF7C4E",
        },
        "app-blue": {
          DEFAULT: "#007AFF",
        },
        "majorelle-blue": {
          DEFAULT: "#7657ED",
        },
        "neon-pink": {
          DEFAULT: "#FFA0B7",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
