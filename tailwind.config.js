module.exports = {
  prefix: '',
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
    extend: {
      width: {
        navBar: '232px'
      },
      height: {
        topBar: '60px',
        nowPlayingBar: '90px'
      },
      colors: {

        "primary": "#Ecab06",

        "secondary": "#ffec89",

        "accent": "#cc8302",

        "neutral": "#723b11",

        "base-100": "#fefbe8",

        "info": "#3ABFF8",

        "success": "#36D399",

        "warning": "#ffa500",

        "error": "#F87272",
      }
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  plugins: []
};
