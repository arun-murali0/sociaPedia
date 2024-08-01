/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#383d3b',
      white: '#ffffff',
      grey: '#f7f7f7',
      purple: '#b084cc',
      green: '#44cf6c',
    },
    fontSize: {
      smallFont: '14px',
      normalFont: '16px',
      largerFont: '18px',
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
