/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // indigo-600
          hover: '#4338ca', // indigo-700
          light: '#e0e7ff', // indigo-100
          dark: '#3730a3', // indigo-800
        },
        secondary: {
          DEFAULT: '#9333ea', // purple-600
          hover: '#7e22ce', // purple-700
          light: '#f3e8ff', // purple-100
          dark: '#6b21a8', // purple-800
        }
      }
    },
  },
  plugins: [],
}
