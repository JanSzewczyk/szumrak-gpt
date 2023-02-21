/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@szum-tech/design-system/{components,hooks,contexts}/**/*{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        app: "calc(100vh - 4rem)"
      }
    }
  },
  plugins: [],
  presets: [require("@szum-tech/design-system/tailwindcss/main-preset")]
};
