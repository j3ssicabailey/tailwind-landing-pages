/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#9B9A78",
        primary: "#313131",
        secondary: "#909090",
      },
      fontFamily: {
        poppins: ['"Poppins"', 'Verdana', 'sans-serif'],
        playfair: ['"Playfair Display"', "Times New Roman", "serif"],
      },
      fontSize: {
        'description': '16px',  // For descriptions or smaller text
        'content': '20px',      // For body content or paragraph text
        'subheading': '32px',   // For subheadings or section titles
        'title': '52px',        // For main titles or headers
      },
      spacing: {
        'base': '16px', // Default base spacing
        'section': '40px', // For larger sections
        'content': '24px', // For padding within cards
      },
    },
  },
  plugins: [],
}

