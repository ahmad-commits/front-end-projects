module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'mobile': '320px',
      'pc': '1200px'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}