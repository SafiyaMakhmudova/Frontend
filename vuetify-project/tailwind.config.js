/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd",
        secondary: "#6f42c1",
        info: "#0dcaf0",
        warning: "#fd7e14",
      },
    },
  },
  plugins: [],
};
