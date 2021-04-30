module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1024px",
      },
    },

    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "heading-hero": "3.5rem",
      },
      letterSpacing: {
        tightest: "-0.01em",
        "max-tightest": "-0.0324em",
      },
      colors: {
        "rich-black": {
          lightest: "#6C6C73",
          lighter: "#3E3E48",
          DEFAULT: "#12121F",
        },
        "coral-red": {
          lightest: "#EFAE95",
          lighter: "#FFD2BF",
          DEFAULT: "#FF7C4E",
        },
        "coral-pastel": {
          DEFAULT: "rgba(255, 210, 191, 1)",
        },
        "app-blue": {
          lightest: "#E6EFFC",
          DEFAULT: "#007AFF",
        },
        "majorelle-blue": {
          lightest: "#FFF0FF",
          lighter: "#897AE7",
          DEFAULT: "#7657ED",
        },
        "neon-pink": {
          DEFAULT: "#FFA0B7",
        },
        "pink-pastel": {
          DEFAULT: "#FFDFE7",
        },
        "aquamarine-green": {
          light: "#E1FFF3",
          DEFAULT: "#09E0A3",
        },
        "dark-green": {
          DEFAULT: "#0EC390",
        },
        "cyber-yellow": {
          DEFAULT: "#FFD41E",
          darker: "#DCAE0B",
        },
      },
      boxShadow: {
        "card-blue": "0px 0px 25px rgba(0, 122, 255, 0.1)",
        "card-gray": "0px 0px 25px rgba(0, 0, 0, 0.08)",
        "card-neon-pink": "0px 0px 25px 0px rgba(255, 160, 183, 0.25)",
        "card-coral-red": " 0px 0px 12.1988px rgba(255, 124, 78, 0.22)",
        "card-dark-green": "0px 0px 12.1988px rgba(14, 195, 144, 0.17)",
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
      scale: {
        "-100": "-1",
      },
    },
  },
  variants: {
    extend: {
      ringColor: "hover",
    },
  },
  plugins: [],
};
