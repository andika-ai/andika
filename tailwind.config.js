module.exports = {
  prefix: '',
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  darkMode: 'class', // or 'media' or 'class'
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
      light: {

        "primary": "#Ecab06",

        "secondary": "#ffec89",

        "accent": "#cc8302",

        "neutral": "#723b11",

        "base-100": "#fefbe8",

        "info": "#3ABFF8",

        "success": "#36D399",

        "warning": "#ffa500",

        "error": "#F87272",
      },
      dark: {
        100: '#111827',
        200: '#1F2937',
        300: '#374151',
        400: '#4B5563',
        500: '#6B7280',
        600: '#9CA3AF',
        700: '#D1D5DB',
        800: '#E5E7EB',
        900: '#F3F4F6',
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
