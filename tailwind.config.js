/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",         
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
      88: '21.5rem', 
    },
    height: {
      '88': '40rem', 
    },
    width: {
      '88': '90.5%',
    },
    margin: {
      '88': '4.5rem', 
    },
  },
  plugins: [],
}
}
