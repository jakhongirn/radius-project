/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rd-blue': {
          DEFAULT: '#3D639D'
        },
        'rd-primary': {
          DEFAULT: '#00C48C'
        },
        'rd-secondary': {
          DEFAULT: '#FF647C'
        },
        'rd-bg': {
          DEFAULT: '#F3F5F8'
        },
      }
    },
  },
  plugins: [],
}
