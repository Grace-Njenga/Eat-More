/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      accent: '#f4c377',
      acent: '#402E32',
      head: '#FFE9D0',
      brown: '#a06306',
      // white color 
      primary: '#fdfffd',
      plimary: '#AB7366',
      gris: '#DFE0DF',
      // footer white 
      foot: '#F0C8AD',
      // grey color 
      secondary: '#393939',
      // one and the same 
      noir: '#232323',
      negro: '#323232',
    },
    extend: {
      fontFamily: {
        // titles
        'lora': ['Lora', 'serif'],
        // paragraphs
        'montserrat': ['Montserrat', 'sans-serif'],
        // subtitles and other small titles 
        'hind-Madurai': ['Hind Madurai', 'sans-serif'],
      }
    }

  },
  plugins: [],
}

