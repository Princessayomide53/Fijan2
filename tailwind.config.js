/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens: {
        mac: '1440px',
        pro: '912px',
        iphone: '380px',
        // air: '820px',
      },
    },
  },
  plugins: [],
};
