/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-dark': "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), 50%, rgba(0, 0, 0, 0.5), transparent), url('/bg.jpg')",
      }

    },
  },
  plugins: [],
}

