/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // ¡Importante!
  ],
  theme: {
    extend: {
    fontFamily: {
    // Le damos otro nombre: 'titulo' usará 'Oswald'
        'titulo': ['Oswald', 'sans-serif']
      }
    
    },
  },
  plugins: [
    require('daisyui'), // ¡Importante!
  ],
}
