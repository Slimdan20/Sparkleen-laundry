/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // Include this for Vite projects
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        deepPurple: '#2B004F',
        plum: '#530065',
        lavender: '#EFE6F9',
        richPurple: '#4B0082',
        midPurple: '#6A0DAD',
        darkText: '#1A1A1A',
    },
    fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    flexBasis: {
      88: '21.5rem', // 22rem = 352px
    }
  },
  plugins: [],
}
}
