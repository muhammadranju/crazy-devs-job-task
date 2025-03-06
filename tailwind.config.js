/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#242424", // Main background and card background
        "section-bg": "#2B2B2B", // Section and file tag background
        "secondary-bg": "#363636", // Upgrade section and input background
        "button-bg": "#454545", // Default button background
        "accent-orange": "#F37F0C", // Primary orange accent
        "gradient-start": "#FB9936", // Deep Dive button gradient start
        "gradient-end": "#FEB907", // Deep Dive button gradient end
      },
    },
  },
  plugins: [],
};
