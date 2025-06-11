/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5A5F",
        accent: "#00A699",
        grayBg: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
