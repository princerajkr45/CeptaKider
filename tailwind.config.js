/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: '#fe5d37',
         dark:'#103741',
         chalk:'#0dcaf0',
         red:'#fe5d37',
         green:'#198754',
      },
      backgroundImage: {
        'hero-pattern': "url('Kider\src\img\carousel-1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

