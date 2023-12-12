/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.2, 3, 0.4, 1)',
      },

      boxShadow: {
        'glow': '0 0 25px #F91A3C, 0 0 50px #F91A3C, 0 0 172px #F91A3C, 0 0 345px #F91A3C, 0 0 600px #F91A3C, 0 0 700px #F91A3C',
      },

      colors: {
        black: {
          100: '#111',
          200: '#131313',
          300: '#181818',
        },
        white: {
          100: '#A0A0A0',
          200: '#E8E8E8'
        },
        green: {
          100: '#52B849'
        }
      },
      fontFamily: {
        Hanson: ['Hanson-bold', 'sans-serif'],
        HansonBold: ['Hanson-light', 'sans-serif'],
        GothamRegular: ['Gotham-regular', 'sans-serif'],
        GothamBold: ['Gotham-bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

