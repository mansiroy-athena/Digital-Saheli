/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FEEBF2',
          100: '#FDD3E0',
          200: '#FBBAD0',
          300: '#F891BB',
          400: '#F35F9E',
          500: '#D82070', // Base Pink/Magenta from logo
          600: '#C21C65',
          700: '#A61857',
          800: '#8B1449',
          900: '#70103B',
        },
        secondary: {
          50: '#EBF2F2',
          100: '#D3E0E0',
          200: '#BBD0D0',
          300: '#91BBBB',
          400: '#5F9E9E',
          500: '#208080', // Base Teal/Cyan from logo
          600: '#1C7373',
          700: '#186464',
          800: '#145555',
          900: '#104646',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
}

