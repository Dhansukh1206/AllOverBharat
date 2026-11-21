export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          canvas: "#FAF8F5",
          sand: "#F2EDE4",
          card: "#FFFFFF",
          charcoal: "#1C1917",
          taupe: "#68615A",
          terracotta: "#F2873B",
          terracottaDark: "#D8722B",
          forest: "#3A7531",
          border: "#E5DFD5",
          primary: "#F2873B",
          primaryDark: "#D8722B",
          accent: "#3A7531",
          dark: "#1C1917",
          bg: "#FAF8F5",
          muted: "#68615A",
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
        display: ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        heading: '600',
        display: '700',
      },
      letterSpacing: {
        tightest: "-0.02em",
        kicker: "0.14em",
      },
      lineHeight: {
        editorial: "1.15",
      },
      aspectRatio: {
        'portrait': '3 / 4',
        'portrait-tall': '4 / 5',
      },
      boxShadow: {
        hairline: "0 0 0 1px #E5DFD5",
        subtle: "0 4px 20px -2px rgba(28, 25, 23, 0.05)",
        elevated: "0 12px 32px -8px rgba(28, 25, 23, 0.08)",
      },
    },
  },
  plugins: [],
}
