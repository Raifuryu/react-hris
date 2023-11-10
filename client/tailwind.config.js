/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js, jsx, rsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
