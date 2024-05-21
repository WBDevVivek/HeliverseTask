/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "HeadingColor": "var(--HeadingColor)",
        "paraColor": "var(--paraColor)",
        "borderColor": "var(--borderColor)",
      },
      backgroundImage: {
        'gradientColor': 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)',
        'applyOnSecColor': 'linear-gradient(180deg, #0D061F 0%, #251E35 100%)',
      }
    },
  },
  plugins: [],
}

