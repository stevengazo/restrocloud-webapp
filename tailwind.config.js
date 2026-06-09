import tailwindcssMotion from 'tailwindcss-motion'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssMotion],
}
