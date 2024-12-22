/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "Arial",
        "Helvetica",
        "sans-serif",
      ],
      poppins: [
        "Poppins",
        "ui-sans-serif",
        "system-ui",
        "Arial",
        "Helvetica",
        "sans-serif",
      ],
    },
    extend: {},
  },
  plugins: [],
};
