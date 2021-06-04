module.exports = {
  purge: [

      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.scss',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
     navy: '#29303e',
     rust: '#df6328',
     black: '#222222',
     yellow: '#fff4c5',
     silver: '#a8a8a8',
     white: '#ffffff',
     green: '#394737',
     grun: '#2F3E3D',
     plum: '#392837',
     teal: '#193838',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
