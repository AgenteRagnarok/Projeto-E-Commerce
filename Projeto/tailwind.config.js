import { Button } from 'bootstrap';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,,tsx}"],
  theme: {
    colors: {
      primary: "#C92071",
      secondary: "#B5B6F2",
      tertiary: "#4F0F24",
      error: "#EE4266",
      success: "#52CA76",
      warning: "#F6AA1C",
      info: "#3C7CFF",
      primaryText: "#C92071",
      secondaryText: "#B5B6F2",
      tertiaryText: "#4F0F24",
      quaternaryText: "#EFEFFF",
      primaryBackground: "linear-gradient(90deg, #C92071 0%, #EDABCA 100%)",
      secondaryBackground: "linear-gradient(90deg, #B5B6F2 0%, #EFEFFF 100%)",
    },

    extend: {},
  },
  plugins: [],
};

