/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    maxWidth:{
      container:"1440px",
      contentContainer:"1140px",
      containerSmall:"1024px",
      containerxs:"768px",
    },
    extend:{
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1280px",
        xl:"1280x",
      },
      fontFamily:{
        bodyFont: ["Montserrat","sans-serif"],
        titleFont: ["Inter","sans-serif"],
      },
      boxShadow:{
        navbarShadow:"0 2px 18px -10px rgba(2,12,27,0.7)",
      },
      colors:{
        textCards:"#d8c3a4",
        textGreen:"#e85a50",
        textLight:"#2D4B73",
        textDark:"#121212",
        bodyColor:"#fee5c1",
        // bodyColor:"#eae8dc",//egg shell white
        // bodyColor:"#2c0f41",//purple
        hoverColor:"rgb(232, 128, 115,0.3)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

