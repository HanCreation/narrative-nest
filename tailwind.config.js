/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass': 'rgba(255, 255, 255, 0.7)',
        'glass2': 'rgba(255, 255, 255, 0.38)',
        brown: {
          500: '#6b4226',
          600: '#5a3a22',
          800: '#5b2d08',
        },
      },
      backdropBlur: {
        'xs': '2px', // Adding a very slight blur'
        'sm': '5px',
        'lg': '20px',
      },
    },
  },
  plugins: [],
}
