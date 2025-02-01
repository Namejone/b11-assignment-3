/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    colors: {
      dark: '#111111',
      white: '#fff',
      primary: '#179800',
      secondary: '#EFEBE3',
    },
    fontFamily: {
      sora: ['Sora', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1320px',
    },
    backgroundImage: {
      hero: 'linear-gradient(to top, #efebe3, #fff)',
      seles: 'linear-gradient(to top, #17980005, #17980038)',
      offer:
        'linear-gradient(156deg, rgba(83,219,58,1) 29%, rgba(255,255,255,1) 100%)',
    },
    extend: {},
  },
}
