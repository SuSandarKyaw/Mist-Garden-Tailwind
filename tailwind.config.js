/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        indigo: {
          100: "#d7e5d7",
          200: "#afccb0",
          300: "#88b288",
          400: "#609961",
          500: "#387f39",
          600: "#2d662e",
          700: "#224c22",
          800: "#163317",
          900: "#0b190b"
      },
      }
    },
  },
  plugins: [],
}

