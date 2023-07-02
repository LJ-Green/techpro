/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
   variants: {},
  plugins: [],
  corePlugins: {
    fontFamily: false,
  },
  fontFamily: {
    custom: ['Poppins:400,500,600,700'],
  },
};

