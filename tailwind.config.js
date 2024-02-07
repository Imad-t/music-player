/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow:{
        'pink-shadow': '0 4px 6px rgba(201, 59, 118, 0.4)',
      }
    },
    colors: {
      playerbg : '#121826a6',
      pink : '#C93B76',
      lightgray: '#4D5562',
      bluegray: '#212936',
      whiteish: '#E5E7EB',
    }
  },
  plugins: [],
}