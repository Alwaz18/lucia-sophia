
module.exports = {
  purge: [
    './components/**/*.js',
    './components/**/*.jsx',
    './components/*.jsx',
    './pages/**/*.jsx',
    './pages/*.jsx',
    './pages/*.js',
    './styles/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      '97': '30rem',
    },
    screens: {
      'xs': '424px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
}


