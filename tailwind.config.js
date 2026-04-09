/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // This must be 'class' to match the root.classList logic in your Header
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // Mapping your HSL variables to Tailwind utilities
        first: 'var(--first-color)',
        'first-alt': 'var(--first-color-alt)',
        title: 'var(--title-color)',
        text: 'var(--text-color)',
        'text-light': 'var(--text-color-light)',
        body: 'var(--body-color)',
        container: 'var(--container-color)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      zIndex: {
        'tooltip': '10',
        'fixed': '100',
        'header': '100', // Matches your Header component needs
        'modal': '1000',
      },
      transitionDuration: {
        '400': '400ms', // Matches your duration-400 classes
      }
    },
  },
  plugins: [],
}