/** @type {import('tailwindcss').Config} */
/*global module*/
/*eslint no-undef: "error"*/
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#EE7837',
        secondary: '#04062C',
        cWhite: '#F8F4FF',
        cBlack: '#23232D',
        cGray: '#CDCDCD'
      },
      fontFamily: {
        sfRegular: ['sf-regular', 'sans-serif'],
        sfMedium: ['sf-medium', 'sans-serif'],
        sfSemi: ['sf-semi', 'sans-serif'],
        sfBold: ['sf-bold', 'sans-serif']
      },
      container: {
        screens: {
          xl: '1440px'
        }
      },
      boxShadow: {
        '3xl':
          '0px 0px 0px 0px rgba(216, 223, 233, 0.10), 0px 2px 5px 0px rgba(216, 223, 233, 0.10), 0px 10px 10px 0px rgba(216, 223, 233, 0.09), 0px 22px 13px 0px rgba(216, 223, 233, 0.05), 0px 39px 16px 0px rgba(216, 223, 233, 0.01), 0px 61px 17px 0px rgba(216, 223, 233, 0.00);',
        OurClients:
          '0px 0px 0px 0px #A3B2C7, 0px 5px 10px 0px rgba(163, 178, 199, 0.10), -1px 19px 19px 0px rgba(163, 178, 199, 0.09), -3px 43px 26px 0px rgba(163, 178, 199, 0.05), -5px 76px 31px 0px rgba(163, 178, 199, 0.01), -8px 119px 33px 0px rgba(163, 178, 199, 0.00)',
        DoctorsShadow:
          '0px 39px 16px rgba(216, 223, 233, 0.01), 0px 22px 13px rgba(216, 223, 233, 0.05), 0px 10px 10px rgba(216, 223, 233, 0.09), 0px 2px 5px rgba(216, 223, 233, 0.1), 0px 0px 0px rgba(216, 223, 233, 0.1)'
      }
    }
  },
  plugins: []
}
