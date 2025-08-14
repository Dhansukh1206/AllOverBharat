/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#F97316", /* orange-500 */
          primaryDark: "#C2410C", /* orange-700 */
          accent: "#FDBA74",     /* orange-300 */
          dark: "#3A2F2A",       /* warm dark for text */
          bg: "#FFF7ED",         /* orange-50 */
          card: "#FFFFFF",
          border: "#F5EDE3"
        }
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
}
