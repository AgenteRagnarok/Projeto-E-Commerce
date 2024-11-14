/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,,tsx}"],
  theme: { colors: {
    primary: "#C92071",
    secondary: "#B5B6F2",
    tertiary: "#4F0F24",
    error: "#EE4266",
    success: "#52CA76",
    warning: "#F6AA1C",
    info: "#3C7CFF",
    primaryBackground: "linear-gradient(90deg, #C92071 0%, #EDABCA 100%)",
    secondaryBackground: "linear-gradient(90deg, #B5B6F2 0%, #EFEFFF 100%)"
    
  },

  // screens: {
  //   'tablet': '640px',
  //   // => @media (min-width: 640px) { ... }

  //   'laptop': '1024px',
  //   // => @media (min-width: 1024px) { ... }

  //   'desktop': '1280px',
  //   // => @media (min-width: 1280px) { ... }
  // },

    extend: {},
  },
  plugins: [],
};

