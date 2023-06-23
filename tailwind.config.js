/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/[language]/faq.js",
    "./pages/newsubscription.js",
    "./pages/flights.js",
    "./pages/oldindex.js",
    "./pages/program/**/*",
    "./pages/noindex/play.js",
    "./pages/hotels.js",
    "./appcomponents/**/*",
    "./pages/holidays.js",
    "./pages/holidays/**/*",
    "./pages/activate.js",
    "./pages/deals/**/*",
    "./pages/search.js",
    "./pages/deals.js",
    "./pages/privacy-policy.js",
    "./pages/terms-and-conditions.js",
    "./pages/red-terms-and-conditions.js",
    "./pages/red-terms-of-use.js",
    "./pages/ott-terms-of-use.js",
    // "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'travelxp-red': '#D9243D',
      },
      lineHeight: {
        '12': '3rem',
        '14': '3.5rem',
        '15': '4rem'
      },
      animation: {
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out',
      },
      keyframes: {
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ],
}
