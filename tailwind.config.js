// @type {import('tailwindcss').Config}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "star-movement-bottom":
          "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",

        "spin-slow": "spin 6s linear infinite",
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
      },
      colors: {
        backgroundColor: "#0f172a", //Background color
        primary: "#3b82f6", //Titles or Buttons Links
        cta: "#22c55e", // Call to Action Buttons
        highlight: "#a78bfa", // Highlighted Text or Elements
        heading: "#f8fafc", //Heading or Main Text
        para: "#64748b", //Paragraph or Sub Text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        P1: "url('/project/P1.jpg')",
        P2: "url('/project/P2.jpg')",
        P3: "url('/project/P3.jpg')",
        P4: "url('/project/P4.jpg')",
        P5: "url('/project/P5.jpg')",
        P6: "url('/project/P6.jpg')",
        P7: "url('/project/P7.jpg')",
        P8: "url('/project/P8.jpg')",
        blackOverlays:
          "linear-gradient(360deg, hsla(255, 92%, 76%, 1) 0%, hsla(0, 0%, 0%, 1) 30%)",
      },
    },
  },
  plugins: [],
};
