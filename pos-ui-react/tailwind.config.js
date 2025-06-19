module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        indigo: {
          600: '#4f46e5',
          700: '#4338ca',
        },
        emerald: {
          500: '#0e9e59',
          400: '#39e18e',
        },
        orange: {
          500: '#f97316',
        },
        customOrange: {
          400: '#ff8f4c',
          500: '#ff4d32',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
