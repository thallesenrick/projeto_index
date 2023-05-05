/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#F2F1F5",
          "200": "#A29EBA",
          "300": "#",
          "400": "#",
          "500": "#625C81",
          "600": "#504B69",
          "700": "#",
          "800": "#",
          "900": "#1E1C28"
      },
        graylight: '#707070',
          secundary: '#BB1118',
      },
      screens: {
        '3xl': '1800px',
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      }
    },
  },
  plugins: [],
}
