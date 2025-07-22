/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.4)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.6)',
        yellowGlow: '0 0 10px #facc15',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],

extend: {
  transformOrigin: {
    'center': 'center',
  },
  rotate: {
    'y-180': 'rotateY(180deg)',
  },
}
}