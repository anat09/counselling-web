module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        primaryLight: '#A3AF8D',
        primary: '#8D9C71',
        primaryDark: '#707C5A',
        secondaryLight: '#998DAF',
        secondary: '#80719c',
        secondaryDark: '#665A7C',
        detailsIcons: '#fb923c',
      },
      spacing: {
        28: '7rem',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontWeight: {
        semiBold: 600,
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'philosopher': 'Philosopher',
      },
      backgroundImage: {
        'cover-image': "url('/assets/img/img.png')",
      }
    },
  },
}
