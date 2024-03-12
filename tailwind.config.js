/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "nav": ["Maven Pro", "Helvetica", "Arial", "sans-serif"]
    }
  },
  plugins: [],
}

