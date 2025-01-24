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
        accentHover: '#9B9A78',
        accentFocus: '#313131'
      },
      fontFamily: {
        poppins: ['"Poppins"', 'Verdana', 'sans-serif'],
        playfair: ['"Playfair Display"', "Times New Roman", "serif"],
      },
      fontSize: {
        'description': '16px', 
        'content': '20px',     
        'subheading': '32px',   
        'title': '52px',        
      },
      spacing: {
        'base': '16px', 
        'section': '40px', 
        'content': '24px', 
      },
      transitionDuration: {
        'normal': '300ms',
      },
      boxShadow: {
        article: '0 4px 12px #909090',  
      },
    },
  },
  plugins: [],
}
