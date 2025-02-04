/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./objective.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'serif'],
        'poppins': ['Poppins', 'serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
      },
    },
  },
  plugins: [],
}

