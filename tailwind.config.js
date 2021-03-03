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
          lightest: "#E6EFFC",
          DEFAULT: "#007AFF",
        },
        "majorelle-blue": {
          lightest: "#FFF0FF",
          DEFAULT: "#7657ED",
        },
        "neon-pink": {
          DEFAULT: "#FFA0B7",
        },
      },
      boxShadow: {
        "card-blue": "0px 0px 25px rgba(0, 122, 255, 0.1)",
        "glow-app-blue": "0px 15px 37px rgba(0, 122, 255, 0.25)",
        "glow-coral-red": "0px 15px 37px rgba(255, 124, 78, 0.25)",
      },
      zIndex: {
        "-1": "-1",
        "-10": "-10",
      },
      strokeWidth: {
        "4/3": "1.33",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
