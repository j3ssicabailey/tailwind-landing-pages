/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#515DEF",
        customTurquoise: "#1BCFF6",
        textLight: "#FBFBFB",
        textMedium: "#909090",
        textDark: "#333333",
        backgroundBlue: "#515DEF",
      },
      fontFamily: {
        poppins: ['"Poppins"', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hover-effect': {
          transition: 'all 0.3s ease-in-out', 
          transform: 'scale(1)', 
          '&:hover': {
            backgroundColor: '#333333',
            color: '#1BCFF6',
            transform: 'scale(1.05)', 
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)', 
          },
        },
      });
    },
  ],
};
