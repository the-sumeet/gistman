/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,svelte}"],
    theme: {
      extend: {},
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        light: '#f8f8f2',
        dark: '#282a36',
        lightDark: '#44475a',
        extraLightDark: '#6272a4',
      }
    },
    plugins: [],
  }