/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
      extend: { fontFamily: {
        sans: ["Titillium Web", ], // Set as default
      },},
    },
    plugins: [],
  };